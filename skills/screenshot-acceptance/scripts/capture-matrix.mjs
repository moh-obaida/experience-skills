#!/usr/bin/env node
// Capture a route × state × viewport × direction × theme matrix with an index, and compare two
// captures with noise-aware pixel statistics. Pixel statistics locate change; they never decide
// whether a change is a regression, an intentional improvement, dynamic content, or rendering noise.
// Usage:
//   node capture-matrix.mjs capture <route...> --out DIR [--sizes ...] [--states FILE] [--rtl] [--dark]
//   node capture-matrix.mjs compare <before> <after> [--tolerance N] [--diff-dir DIR] [--json]

import { createHash } from 'node:crypto';
import { inflateSync, deflateSync } from 'node:zlib';
import { mkdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';
import {
  parseArgs, parseSizes, runCli, UsageError, toUrl, launch, openPage, truncate,
} from './_shared/layout-probe.mjs';

const HELP = `capture-matrix — capture evidence screenshots and compare two captures

Usage:
  node capture-matrix.mjs capture <url-or-file> [more routes] --out DIR [options]
  node capture-matrix.mjs compare <before-dir|index.json> <after-dir|index.json> [options]

capture options:
  --out DIR         Directory for PNGs and index.json (required; nothing is written without it)
  --sizes LIST      Comma-separated WxH sizes (default 1440x900,390x844)
  --names LIST      Comma-separated stable route labels, one per route, used in file names and ids.
                    Use the same labels for before and after captures so pairs match even when the
                    URL or file path differs
  --states FILE     JSON of named states reached by steps, each from a fresh load:
                    {"states":[{"name":"error","steps":[{"fill":["#code","1"]},{"click":"#go"}]}]}
                    Verbs: click, fill [selector,text], press, hover, check, select [selector,value], wait (ms).
                    The "initial" state (no steps) is always captured.
  --rtl             Also capture each combination with dir="rtl" forced
  --dark            Also capture each combination with prefers-color-scheme: dark
  --mask LIST       Comma-separated selectors painted over in the screenshot (clocks, avatars,
                    anything dynamic) so they cannot register as change
  --full-page       Capture the full scroll height instead of the viewport
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --wait MS         Extra wait after load (default 300)

compare options:
  --tolerance N     Per-channel difference (0-255) below which a pixel counts as unchanged (default 16)
  --diff-dir DIR    Write a red-highlight diff PNG per changed pair (off by default)
  --json            Print JSON

Compare classes: identical · noise-level (isolated sub-threshold pixels only) · localized (few
regions) · broad (many regions or large share) · dimension-changed (page size differs) ·
missing-in-after · new-in-after. "textChanged" means the visible text differs between captures, a
hint toward intentional or dynamic content rather than a styling regression.

Limits: same machine, same browser, same fonts are assumed. A pair that differs is a pair to open
and look at, not a verdict. A pair that matches proves only that the pixels match in that state.

Exit codes: 0 every pair identical or noise-level · 1 differences to inspect · 2 usage or environment error`;

// ---------------------------------------------------------------------------
// PNG decode / encode (8-bit, non-interlaced)
// ---------------------------------------------------------------------------

export function decodePng(buf) {
  if (buf.length < 8 || buf.readUInt32BE(0) !== 0x89504e47) throw new Error('not a PNG file');
  let pos = 8; let ihdr = null; const idat = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos); const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') ihdr = { w: data.readUInt32BE(0), h: data.readUInt32BE(4), depth: data[8], color: data[9], interlace: data[12] };
    else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;
    pos += 12 + len;
  }
  if (!ihdr) throw new Error('PNG has no IHDR');
  if (ihdr.depth !== 8 || ihdr.interlace !== 0) throw new Error(`unsupported PNG (depth ${ihdr.depth}, interlace ${ihdr.interlace})`);
  const channels = { 0: 1, 2: 3, 4: 2, 6: 4 }[ihdr.color];
  if (!channels) throw new Error(`unsupported PNG color type ${ihdr.color}`);
  const raw = inflateSync(Buffer.concat(idat));
  const stride = ihdr.w * channels;
  const out = Buffer.alloc(ihdr.h * stride);
  for (let y = 0; y < ihdr.h; y++) {
    const filter = raw[y * (stride + 1)];
    const line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let x = 0; x < stride; x++) {
      const a = x >= channels ? out[y * stride + x - channels] : 0;
      const b = y > 0 ? out[(y - 1) * stride + x] : 0;
      const c = x >= channels && y > 0 ? out[(y - 1) * stride + x - channels] : 0;
      let v = line[x];
      if (filter === 1) v += a;
      else if (filter === 2) v += b;
      else if (filter === 3) v += (a + b) >> 1;
      else if (filter === 4) { const p = a + b - c; const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
      out[y * stride + x] = v & 255;
    }
  }
  // Normalize to RGBA.
  const rgba = Buffer.alloc(ihdr.w * ihdr.h * 4);
  for (let i = 0; i < ihdr.w * ihdr.h; i++) {
    const s = i * channels; const d = i * 4;
    if (channels === 1) { rgba[d] = rgba[d + 1] = rgba[d + 2] = out[s]; rgba[d + 3] = 255; }
    else if (channels === 2) { rgba[d] = rgba[d + 1] = rgba[d + 2] = out[s]; rgba[d + 3] = out[s + 1]; }
    else { rgba[d] = out[s]; rgba[d + 1] = out[s + 1]; rgba[d + 2] = out[s + 2]; rgba[d + 3] = channels === 4 ? out[s + 3] : 255; }
  }
  return { width: ihdr.w, height: ihdr.h, data: rgba };
}

const CRC_TABLE = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(buf) { let c = 0xffffffff; for (const b of buf) c = CRC_TABLE[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

export function encodePng({ width, height, data }) {
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4); ihdr[8] = 8; ihdr[9] = 6;
  const stride = width * 4; const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) { raw[y * (stride + 1)] = 0; data.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride); }
  return Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

// ---------------------------------------------------------------------------
// Pure comparison
// ---------------------------------------------------------------------------

/**
 * Compare two same-size RGBA images. A pixel is "changed" when any channel differs by more than
 * `tolerance`. A changed pixel counts only if it is strong (more than 4× tolerance) or has at least
 * two changed neighbors, which suppresses isolated antialiasing differences.
 */
export function diffImages(a, b, { tolerance = 16, cell = 32 } = {}) {
  if (a.width !== b.width || a.height !== b.height) throw new Error('images differ in size');
  const { width: w, height: h } = a;
  const changed = new Uint8Array(w * h);
  const strong = new Uint8Array(w * h);
  let rawChanged = 0;
  for (let i = 0; i < w * h; i++) {
    const d = i * 4;
    const m = Math.max(Math.abs(a.data[d] - b.data[d]), Math.abs(a.data[d + 1] - b.data[d + 1]), Math.abs(a.data[d + 2] - b.data[d + 2]), Math.abs(a.data[d + 3] - b.data[d + 3]));
    if (m > tolerance) { changed[i] = 1; rawChanged++; if (m > tolerance * 4) strong[i] = 1; }
  }
  const counted = new Uint8Array(w * h);
  let countedN = 0;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x;
    if (!changed[i]) continue;
    let near = 0;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if (!dx && !dy) continue;
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < w && ny < h && changed[ny * w + nx]) near++;
    }
    if (strong[i] || near >= 2) { counted[i] = 1; countedN++; }
  }
  // Cluster counted pixels into connected grid cells.
  const cols = Math.ceil(w / cell), rows = Math.ceil(h / cell);
  const cellCount = new Uint32Array(cols * rows);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (counted[y * w + x]) cellCount[Math.floor(y / cell) * cols + Math.floor(x / cell)]++;
  const seen = new Uint8Array(cols * rows); const regions = [];
  for (let c = 0; c < cols * rows; c++) {
    if (!cellCount[c] || seen[c]) continue;
    const stack = [c]; seen[c] = 1; let minC = cols, maxC = 0, minR = rows, maxR = 0, pixels = 0;
    while (stack.length) {
      const cur = stack.pop(); const cr = Math.floor(cur / cols), cc = cur % cols;
      pixels += cellCount[cur]; minC = Math.min(minC, cc); maxC = Math.max(maxC, cc); minR = Math.min(minR, cr); maxR = Math.max(maxR, cr);
      for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nr = cr + dr, nc = cc + dc;
        if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;
        const n = nr * cols + nc;
        if (cellCount[n] && !seen[n]) { seen[n] = 1; stack.push(n); }
      }
    }
    regions.push({ x: minC * cell, y: minR * cell, width: Math.min(w, (maxC + 1) * cell) - minC * cell, height: Math.min(h, (maxR + 1) * cell) - minR * cell, pixels });
  }
  regions.sort((p, q) => q.pixels - p.pixels);
  const ratio = countedN / (w * h);
  let cls = 'identical';
  if (rawChanged > 0) cls = countedN === 0 || (ratio < 0.00005 && regions.length <= 1 && countedN < 40) ? 'noise-level' : (regions.length <= 3 && ratio < 0.05 ? 'localized' : 'broad');
  return { class: cls, rawChangedPixels: rawChanged, countedPixels: countedN, ratio: Math.round(ratio * 1e6) / 1e6, regions: regions.slice(0, 5), mask: counted };
}

export function renderDiffPng(after, mask) {
  const data = Buffer.alloc(after.data.length);
  for (let i = 0; i < after.width * after.height; i++) {
    const d = i * 4;
    if (mask[i]) { data[d] = 220; data[d + 1] = 38; data[d + 2] = 38; data[d + 3] = 255; }
    else { data[d] = Math.round(after.data[d] * 0.35 + 165); data[d + 1] = Math.round(after.data[d + 1] * 0.35 + 165); data[d + 2] = Math.round(after.data[d + 2] * 0.35 + 165); data[d + 3] = 255; }
  }
  return encodePng({ width: after.width, height: after.height, data });
}

/** Compare two indexes entry by entry. `load(entry)` returns the decoded image for an entry. */
export function compareIndexes(before, after, load, { tolerance = 16 } = {}) {
  const results = [];
  const afterById = new Map(after.entries.map((e) => [e.id, e]));
  const beforeIds = new Set(before.entries.map((e) => e.id));
  for (const b of before.entries) {
    const a = afterById.get(b.id);
    if (!a) { results.push({ id: b.id, class: 'missing-in-after' }); continue; }
    const textChanged = b.textHash !== a.textHash;
    if (b.sha256 === a.sha256) { results.push({ id: b.id, class: 'identical', textChanged: false }); continue; }
    if (b.width !== a.width || b.height !== a.height) {
      results.push({ id: b.id, class: 'dimension-changed', before: `${b.width}×${b.height}`, after: `${a.width}×${a.height}`, textChanged });
      continue;
    }
    const diff = diffImages(load(b, 'before'), load(a, 'after'), { tolerance });
    results.push({ id: b.id, class: diff.class, rawChangedPixels: diff.rawChangedPixels, countedPixels: diff.countedPixels, ratio: diff.ratio, regions: diff.regions, textChanged, _mask: diff.mask });
  }
  for (const a of after.entries) if (!beforeIds.has(a.id)) results.push({ id: a.id, class: 'new-in-after' });
  return results;
}

// ---------------------------------------------------------------------------
// Capture
// ---------------------------------------------------------------------------

const slug = (s) => String(s).replace(/^[a-z]+:\/\//i, '').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(-48) || 'route';

async function runSteps(page, steps) {
  for (const step of steps) {
    if (step.click) await page.click(step.click, { timeout: 3000 });
    else if (step.fill) await page.fill(step.fill[0], String(step.fill[1]), { timeout: 3000 });
    else if (step.press) await page.keyboard.press(step.press);
    else if (step.hover) await page.hover(step.hover, { timeout: 3000 });
    else if (step.check) await page.check(step.check, { timeout: 3000 });
    else if (step.select) await page.selectOption(step.select[0], step.select[1], { timeout: 3000 });
    else if (step.wait) await page.waitForTimeout(Number(step.wait));
    else throw new UsageError(`Unknown step ${JSON.stringify(step)}`);
  }
  if (steps.length) await page.waitForTimeout(250);
}

async function capture(positionals, flags) {
  if (!flags.out) throw new UsageError('capture needs --out DIR (nothing is written without it)');
  if (!positionals.length) throw new UsageError('Give at least one route to capture');
  const sizes = parseSizes(flags.sizes ?? '1440x900,390x844');
  let states = [{ name: 'initial', steps: [] }];
  if (flags.states) {
    try { states.push(...(JSON.parse(readFileSync(flags.states, 'utf8')).states ?? [])); } catch (e) { throw new UsageError(`Could not read --states: ${e.message}`); }
  }
  const directions = flags.rtl ? [false, true] : [false];
  const schemes = flags.dark ? [undefined, 'dark'] : [undefined];
  const masks = flags.mask ? flags.mask.split(',').map((m) => m.trim()).filter(Boolean) : [];
  mkdirSync(flags.out, { recursive: true });
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return { code: 2 }; }
  const entries = [];
  try {
    const names = flags.names ? flags.names.split(',').map((n) => n.trim()) : [];
    if (names.length && names.length !== positionals.length) throw new UsageError('--names must give one label per route');
    for (const [k, target] of positionals.entries()) {
      for (const state of states) for (const size of sizes) for (const rtl of directions) for (const scheme of schemes) {
        const { page, context } = await openPage(browser, toUrl(target), { ...size, rtl, waitMs: Number(flags.wait ?? 300), colorScheme: scheme });
        let stepError = null;
        try { await runSteps(page, state.steps ?? []); } catch (e) { stepError = e.message.split('\n')[0]; }
        const id = [slug(names[k] ?? target), state.name, `${size.width}x${size.height}`, rtl ? 'rtl' : 'ltr', scheme ?? 'light'].join('__');
        const file = `${id}.png`;
        const png = await page.screenshot({ fullPage: Boolean(flags['full-page']), mask: masks.map((m) => page.locator(m)), maskColor: '#ff00ff' });
        writeFileSync(join(flags.out, file), png);
        const facts = await page.evaluate(() => ({ text: document.body.innerText.replace(/\s+/g, ' ').trim(), elements: document.body.querySelectorAll('*').length }));
        const dims = decodePng(png);
        entries.push({
          id, route: target, state: state.name, size, rtl, scheme: scheme ?? 'light', file,
          sha256: createHash('sha256').update(png).digest('hex'), width: dims.width, height: dims.height,
          textHash: createHash('sha256').update(facts.text).digest('hex').slice(0, 16), elementCount: facts.elements,
          masked: masks, stepError,
        });
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  writeFileSync(join(flags.out, 'index.json'), `${JSON.stringify({ version: 1, entries }, null, 2)}\n`);
  return { code: entries.some((e) => e.stepError) ? 2 : 0, entries };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function loadIndex(path) {
  const file = existsSync(path) && statSync(path).isDirectory() ? join(path, 'index.json') : path;
  if (!existsSync(file)) throw new UsageError(`No index.json at ${path}`);
  const index = JSON.parse(readFileSync(file, 'utf8'));
  index.dir = file.slice(0, file.length - basename(file).length);
  return index;
}

async function main() {
  const [mode, ...rest] = process.argv.slice(2);
  if (!mode || mode === '--help' || mode === '-h') { process.stdout.write(`${HELP}\n`); return 0; }
  const { flags, positionals } = parseArgs(rest, {
    out: 'string', names: 'string', sizes: 'string', states: 'string', rtl: 'boolean', dark: 'boolean', mask: 'string', 'full-page': 'boolean',
    channel: 'string', wait: 'string', tolerance: 'string', 'diff-dir': 'string', json: 'boolean', help: 'boolean',
  });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  if (mode === 'capture') {
    const { code, entries } = await capture(positionals, flags);
    if (entries) {
      process.stdout.write(flags.json ? `${JSON.stringify({ entries }, null, 2)}\n` : `Captured ${entries.length} screenshot(s) into ${flags.out}\nindex: ${join(flags.out, 'index.json')}\n${entries.filter((e) => e.stepError).map((e) => `step failed in ${e.id}: ${e.stepError}`).join('\n')}${entries.some((e) => e.stepError) ? '\n' : ''}`);
    }
    return code;
  }
  if (mode === 'compare') {
    if (positionals.length !== 2) throw new UsageError('compare needs <before> <after>');
    const tolerance = Number(flags.tolerance ?? 16);
    if (!(tolerance >= 0 && tolerance <= 255)) throw new UsageError('--tolerance must be 0-255');
    const before = loadIndex(positionals[0]); const after = loadIndex(positionals[1]);
    const cache = new Map();
    const load = (entry, side) => {
      const dir = side === 'before' ? before.dir : after.dir;
      const key = `${side}:${entry.file}`;
      if (!cache.has(key)) cache.set(key, decodePng(readFileSync(join(dir, entry.file))));
      return cache.get(key);
    };
    const results = compareIndexes(before, after, load, { tolerance });
    if (flags['diff-dir']) {
      mkdirSync(flags['diff-dir'], { recursive: true });
      for (const r of results) {
        if (!r._mask) continue;
        const entry = after.entries.find((e) => e.id === r.id);
        writeFileSync(join(flags['diff-dir'], `${r.id}.diff.png`), renderDiffPng(load(entry, 'after'), r._mask));
        r.diff = join(flags['diff-dir'], `${r.id}.diff.png`);
      }
    }
    for (const r of results) delete r._mask;
    if (flags.json) process.stdout.write(`${JSON.stringify({ tolerance, results }, null, 2)}\n`);
    else {
      const out = [`capture-matrix compare · ${results.length} pair(s) · tolerance ${tolerance}/255`, ''];
      for (const r of results) {
        out.push(`${r.class.padEnd(18)} ${truncate(r.id, 74)}${r.textChanged ? '  [text changed]' : ''}`);
        if (r.regions?.length) for (const g of r.regions.slice(0, 3)) out.push(`    changed region ${g.width}×${g.height} at (${g.x},${g.y}), ${g.pixels}px`);
        if (r.class === 'dimension-changed') out.push(`    page size ${r.before} → ${r.after}`);
        if (r.diff) out.push(`    diff: ${r.diff}`);
      }
      out.push('', 'Statistics locate change; they do not classify it. Open each differing pair and decide: regression, intentional change, dynamic content, rendering difference, or improvement.');
      process.stdout.write(`${out.join('\n')}\n`);
    }
    return results.some((r) => !['identical', 'noise-level'].includes(r.class)) ? 1 : 0;
  }
  throw new UsageError(`Unknown mode "${mode}". Use capture or compare.`);
}

if (process.argv[1]?.endsWith('capture-matrix.mjs')) runCli(main);
