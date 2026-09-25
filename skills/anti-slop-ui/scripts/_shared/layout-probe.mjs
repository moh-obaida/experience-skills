// GENERATED FROM shared/tools/layout-probe.mjs. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`.
// layout-probe.mjs
//
// Shared layout measurement helpers for rendered-page analysis.
//
// Two halves:
//   1. Browser collection: opens a page with Playwright (if available) and gathers a
//      geometry snapshot of visible elements.
//   2. Pure analyzers: take a snapshot and return findings. They never touch the network
//      or the filesystem, so they are deterministic and unit-testable.
//
// No network access happens unless the caller passes an http(s) URL to open.
// Nothing is written to disk unless the caller asks for screenshots.

import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { resolve as resolvePath, join } from 'node:path';
import { pathToFileURL } from 'node:url';

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

/**
 * Minimal flag parser. `spec` maps flag names to 'string' | 'boolean'.
 * Returns { flags, positionals }. Unknown flags throw.
 */
export function parseArgs(argv, spec) {
  const flags = {};
  const positionals = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '-h') { flags.help = true; continue; }
    if (!arg.startsWith('--')) { positionals.push(arg); continue; }
    const [rawName, inlineValue] = arg.slice(2).split(/=(.*)/s, 2);
    const type = spec[rawName];
    if (!type) throw new UsageError(`Unknown option --${rawName}`);
    if (type === 'boolean') { flags[rawName] = true; continue; }
    const value = inlineValue ?? argv[++i];
    if (value === undefined || value.startsWith('--')) {
      throw new UsageError(`Option --${rawName} needs a value`);
    }
    flags[rawName] = value;
  }
  return { flags, positionals };
}

export class UsageError extends Error {}

/** Parse "1440x900,375x812" into [{width, height}]. */
export function parseSizes(text) {
  return String(text).split(',').map((part) => {
    const match = part.trim().match(/^(\d{2,5})x(\d{2,5})$/i);
    if (!match) throw new UsageError(`Invalid size "${part}". Use WIDTHxHEIGHT, e.g. 1440x900`);
    return { width: Number(match[1]), height: Number(match[2]) };
  });
}

/** Turn a local path or URL into a URL string. */
export function toUrl(target) {
  if (!target) throw new UsageError('Missing target URL or file path');
  if (/^(https?|file):\/\//i.test(target)) return target;
  const abs = resolvePath(process.cwd(), target);
  if (!existsSync(abs)) throw new UsageError(`File not found: ${target}`);
  return pathToFileURL(abs).href;
}

// ---------------------------------------------------------------------------
// Browser loading
// ---------------------------------------------------------------------------

/**
 * Locate Playwright. Tries, in order:
 *   - PLAYWRIGHT_MODULE env var (absolute path to a playwright or playwright-core package)
 *   - 'playwright' / 'playwright-core' resolved from this file
 *   - 'playwright' / 'playwright-core' resolved from the current working directory
 * Returns the module's `chromium` browser type, or null.
 */
export async function loadChromium() {
  const candidates = [];
  if (process.env.PLAYWRIGHT_MODULE) candidates.push(process.env.PLAYWRIGHT_MODULE);
  for (const name of ['playwright', 'playwright-core']) {
    candidates.push(name);
    try {
      const req = createRequire(join(process.cwd(), 'noop.js'));
      candidates.push(pathToFileURL(req.resolve(name)).href);
    } catch { /* not installed in cwd */ }
  }
  for (const candidate of candidates) {
    try {
      const mod = await import(candidate);
      const chromium = mod.chromium ?? mod.default?.chromium;
      if (chromium) return chromium;
    } catch { /* try next */ }
  }
  return null;
}

export const PLAYWRIGHT_MISSING = `Playwright is not available, so the page cannot be rendered.

Install one of these in the project you are checking (or globally):
  npm install --save-dev playwright && npx playwright install chromium
  npm install --save-dev playwright-core      # then pass --channel chrome to use installed Chrome

Or set PLAYWRIGHT_MODULE to the absolute path of an existing playwright package.

Without a browser, fall back to static analysis and report the layout as UNVERIFIED.`;

/**
 * Launch a browser. `channel` may be 'chrome', 'msedge', etc. to use an installed browser.
 * If no channel is given and the bundled Chromium is missing, retry with channel 'chrome'.
 */
export async function launch({ channel } = {}) {
  const chromium = await loadChromium();
  if (!chromium) return { browser: null, error: PLAYWRIGHT_MISSING };
  try {
    const browser = await chromium.launch(channel ? { channel } : {});
    return { browser, error: null };
  } catch (firstError) {
    if (!channel) {
      try {
        const browser = await chromium.launch({ channel: 'chrome' });
        return { browser, error: null };
      } catch { /* fall through */ }
    }
    return { browser: null, error: `Could not launch a browser: ${firstError.message.split('\n')[0]}` };
  }
}

/**
 * Open `url` at a viewport. `zoom` emulates browser zoom (1.5 = 150%) by shrinking the CSS
 * viewport and raising the device scale factor, which is how zoom affects layout.
 */
export async function openPage(browser, url, { width, height, zoom = 1, rtl = false, waitMs = 300, colorScheme, reducedMotion } = {}) {
  const context = await browser.newContext({
    viewport: { width: Math.round(width / zoom), height: Math.round(height / zoom) },
    deviceScaleFactor: zoom,
    colorScheme,
    reducedMotion,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'load', timeout: 30000 });
  if (rtl) {
    await page.evaluate(() => { document.documentElement.setAttribute('dir', 'rtl'); });
  }
  if (waitMs) await page.waitForTimeout(waitMs);
  return { page, context };
}

// ---------------------------------------------------------------------------
// In-page collection
// ---------------------------------------------------------------------------

/**
 * Runs inside the page. Must be self-contained (no closures over module scope).
 * Returns a plain JSON snapshot.
 */
export function collectSnapshot(maxElements = 4000) {
  const INTERACTIVE = new Set(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'SUMMARY', 'LABEL']);
  const MEDIA = new Set(['IMG', 'SVG', 'VIDEO', 'CANVAS', 'PICTURE', 'IFRAME']);
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const sx = window.scrollX;
  const sy = window.scrollY;

  const shortPath = (el) => {
    const parts = [];
    let node = el;
    while (node && node.nodeType === 1 && parts.length < 4 && node !== document.body) {
      let part = node.tagName.toLowerCase();
      if (node.id) { part += `#${node.id}`; parts.unshift(part); break; }
      const cls = [...node.classList].filter((c) => c.length < 30).slice(0, 2);
      if (cls.length) part += `.${cls.join('.')}`;
      const parent = node.parentElement;
      if (parent) {
        const same = [...parent.children].filter((c) => c.tagName === node.tagName);
        if (same.length > 1) part += `:nth-of-type(${same.indexOf(node) + 1})`;
      }
      parts.unshift(part);
      node = node.parentElement;
    }
    return parts.join(' > ') || el.tagName.toLowerCase();
  };

  const resolveBackground = (el) => {
    let node = el;
    while (node && node.nodeType === 1) {
      const st = getComputedStyle(node);
      if (st.backgroundImage && st.backgroundImage !== 'none') return 'image';
      const bg = st.backgroundColor;
      if (bg && bg !== 'transparent' && !/rgba\([^)]*,\s*0\)$/.test(bg)) return bg;
      node = node.parentElement;
    }
    return 'rgb(255, 255, 255)';
  };

  const ownText = (el) => {
    let text = '';
    for (const child of el.childNodes) {
      if (child.nodeType === 3) text += child.textContent;
    }
    return text.replace(/\s+/g, ' ').trim();
  };

  const all = [...document.body.querySelectorAll('*')];
  const index = new Map();
  const elements = [];
  for (const el of all) {
    if (elements.length >= maxElements) break;
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    let parent = el.parentElement;
    while (parent && !index.has(parent)) parent = parent.parentElement;
    const text = ownText(el);
    const tag = el.tagName.toUpperCase();
    const role = el.getAttribute('role');
    const interactive = INTERACTIVE.has(tag) || ['button', 'link', 'tab', 'menuitem', 'checkbox', 'switch'].includes(role) || el.hasAttribute('onclick');
    const record = {
      i: elements.length,
      parent: parent ? index.get(parent) : -1,
      tag: tag.toLowerCase(),
      path: shortPath(el),
      x: r.left + sx, y: r.top + sy, w: r.width, h: r.height,
      text: text.slice(0, 80),
      hasText: text.length > 0,
      interactive,
      media: MEDIA.has(tag),
      position: style.position,
      fontSize: parseFloat(style.fontSize) || 0,
      fontWeight: Number(style.fontWeight) || 400,
      clipsX: ['hidden', 'clip', 'auto', 'scroll'].includes(style.overflowX),
      scrollsY: ['auto', 'scroll'].includes(style.overflowY) && el.scrollHeight > el.clientHeight + 1,
      scrollsX: ['auto', 'scroll'].includes(style.overflowX) && el.scrollWidth > el.clientWidth + 1,
      background: style.backgroundImage !== 'none' ? 'image' : (style.backgroundColor !== 'rgba(0, 0, 0, 0)' && style.backgroundColor !== 'transparent' ? 'color' : 'none'),
    };
    if (text.length > 0) {
      record.fg = style.color;
      record.bg = resolveBackground(el);
      record.bold = (Number(style.fontWeight) || 400) >= 700;
    }
    index.set(el, record.i);
    elements.push(record);
  }

  const rootStyle = getComputedStyle(document.body);
  const htmlStyle = getComputedStyle(document.documentElement);
  return {
    url: location.href,
    viewport: { width: vw, height: vh },
    document: {
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      clientWidth: document.documentElement.clientWidth,
      dir: document.documentElement.getAttribute('dir') || getComputedStyle(document.documentElement).direction,
    },
    rootBackground: {
      body: rootStyle.backgroundImage !== 'none' ? 'image' : 'color',
      html: htmlStyle.backgroundImage !== 'none' ? 'image' : 'color',
    },
    truncated: all.length > elements.length && elements.length >= maxElements,
    elements,
  };
}

export async function snapshotPage(page) {
  return page.evaluate(collectSnapshot, 4000);
}

// ---------------------------------------------------------------------------
// Pure analyzers
// ---------------------------------------------------------------------------

function ancestors(snapshot, el) {
  const out = [];
  let p = el.parent;
  while (p !== -1 && p !== undefined) {
    out.push(p);
    p = snapshot.elements[p].parent;
  }
  return out;
}

function isAncestor(snapshot, maybeAncestor, el) {
  let p = el.parent;
  while (p !== -1 && p !== undefined) {
    if (p === maybeAncestor.i) return true;
    p = snapshot.elements[p].parent;
  }
  return false;
}

/** Leaf-ish content: things a user reads or operates. */
export function isContent(el) {
  return el.hasText || el.interactive || el.media || ['input', 'select', 'textarea', 'hr'].includes(el.tag);
}

/**
 * Horizontal overflow: the page scrolls sideways, or elements escape the viewport without a
 * clipping ancestor. Reports the outermost culprits (escaping elements whose parent does not
 * also escape), which is usually where the fix belongs.
 */
export function analyzeOverflow(snapshot, { tolerance = 1 } = {}) {
  const vw = snapshot.viewport.width;
  const pageOverflow = snapshot.document.scrollWidth - snapshot.document.clientWidth;
  const escapes = (el) => el.x + el.w > vw + tolerance || el.x < -tolerance;
  const clipped = (el) => ancestors(snapshot, el).some((a) => snapshot.elements[a].clipsX);
  const culprits = [];
  for (const el of snapshot.elements) {
    if (el.position === 'fixed') continue;
    if (!escapes(el) || clipped(el)) continue;
    const parent = el.parent >= 0 ? snapshot.elements[el.parent] : null;
    if (parent && escapes(parent) && !parent.clipsX) continue;
    culprits.push({
      path: el.path,
      text: el.text,
      left: Math.round(el.x),
      right: Math.round(el.x + el.w),
      width: Math.round(el.w),
      overBy: Math.round(Math.max(el.x + el.w - vw, -el.x)),
    });
  }
  culprits.sort((a, b) => b.overBy - a.overBy);
  return {
    pageOverflowPx: Math.max(0, pageOverflow),
    hasPageOverflow: pageOverflow > tolerance,
    culprits,
  };
}

function intersect(a, b) {
  const x = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const y = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return x * y;
}

/**
 * Suspicious overlaps between content elements that are not nested in each other.
 * `minRatio` is the share of the smaller element that must be covered.
 */
export function analyzeCollisions(snapshot, { minRatio = 0.25, minArea = 24, limit = 50 } = {}) {
  const items = snapshot.elements.filter((el) => isContent(el) && el.w * el.h >= minArea);
  items.sort((a, b) => a.x - b.x);
  const found = [];
  for (let i = 0; i < items.length; i++) {
    const a = items[i];
    for (let j = i + 1; j < items.length; j++) {
      const b = items[j];
      if (b.x >= a.x + a.w) break;
      const area = intersect(a, b);
      if (area < minArea) continue;
      if (isAncestor(snapshot, a, b) || isAncestor(snapshot, b, a)) continue;
      const smaller = Math.min(a.w * a.h, b.w * b.h);
      const ratio = area / smaller;
      if (ratio < minRatio) continue;
      // A label wrapping or sitting on its own input is normal.
      if ((a.tag === 'label' && ['input', 'select', 'textarea'].includes(b.tag)) ||
          (b.tag === 'label' && ['input', 'select', 'textarea'].includes(a.tag))) continue;
      found.push({
        a: { path: a.path, text: a.text },
        b: { path: b.path, text: b.text },
        overlapPx: Math.round(area),
        ratio: Math.round(ratio * 100) / 100,
        at: { x: Math.round(Math.max(a.x, b.x)), y: Math.round(Math.max(a.y, b.y)) },
      });
    }
  }
  found.sort((p, q) => q.ratio - p.ratio || q.overlapPx - p.overlapPx);
  return { count: found.length, collisions: found.slice(0, limit) };
}

/**
 * First-viewport use. Rasterizes content rectangles into a grid and reports how much of the
 * first viewport carries content, the content bounding box, and empty bands.
 */
export function analyzeViewportUse(snapshot, { cell = 16 } = {}) {
  const { width: vw, height: vh } = snapshot.viewport;
  const cols = Math.max(1, Math.ceil(vw / cell));
  const rows = Math.max(1, Math.ceil(vh / cell));
  const grid = new Uint8Array(cols * rows);
  let box = null;
  for (const el of snapshot.elements) {
    if (!isContent(el) || el.position === 'fixed') continue;
    const x0 = Math.max(0, el.x);
    const y0 = Math.max(0, el.y);
    const x1 = Math.min(vw, el.x + el.w);
    const y1 = Math.min(vh, el.y + el.h);
    if (x1 <= x0 || y1 <= y0) continue;
    box = box
      ? { x0: Math.min(box.x0, x0), y0: Math.min(box.y0, y0), x1: Math.max(box.x1, x1), y1: Math.max(box.y1, y1) }
      : { x0, y0, x1, y1 };
    for (let r = Math.floor(y0 / cell); r < Math.ceil(y1 / cell) && r < rows; r++) {
      for (let c = Math.floor(x0 / cell); c < Math.ceil(x1 / cell) && c < cols; c++) {
        grid[r * cols + c] = 1;
      }
    }
  }
  let filled = 0;
  for (const v of grid) filled += v;
  const emptyRows = [];
  for (let r = 0; r < rows; r++) {
    let any = false;
    for (let c = 0; c < cols; c++) if (grid[r * cols + c]) { any = true; break; }
    emptyRows.push(!any);
  }
  let largestBand = 0;
  let run = 0;
  for (const empty of emptyRows) {
    run = empty ? run + 1 : 0;
    largestBand = Math.max(largestBand, run);
  }
  // Largest all-empty rectangle on the grid (maximal rectangle via histogram method).
  let bestArea = 0;
  let best = null;
  const heights = new Array(cols).fill(0);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) heights[c] = grid[r * cols + c] ? 0 : heights[c] + 1;
    const stack = [];
    for (let c = 0; c <= cols; c++) {
      const h = c === cols ? 0 : heights[c];
      let start = c;
      while (stack.length && stack[stack.length - 1][1] >= h) {
        const [s0, sh] = stack.pop();
        const a = sh * (c - s0);
        if (a > bestArea) { bestArea = a; best = { x: s0 * cell, y: (r - sh + 1) * cell, width: (c - s0) * cell, height: sh * cell }; }
        start = s0;
      }
      stack.push([start, h]);
    }
  }
  const area = vw * vh;
  const bbox = box
    ? {
        x: Math.round(box.x0), y: Math.round(box.y0),
        width: Math.round(box.x1 - box.x0), height: Math.round(box.y1 - box.y0),
        shareOfViewport: round2(((box.x1 - box.x0) * (box.y1 - box.y0)) / area),
        leftMargin: Math.round(box.x0), rightMargin: Math.round(vw - box.x1),
      }
    : null;

  // Environment treatment: a large element (or the root) with an image/gradient background.
  const largeBackground = snapshot.elements.some((el) =>
    el.background === 'image' && el.w * Math.min(el.h, vh) >= area * 0.4);
  const rootImage = snapshot.rootBackground && (snapshot.rootBackground.body === 'image' || snapshot.rootBackground.html === 'image');
  const largeMedia = snapshot.elements.some((el) => el.media && el.y < vh && el.w * el.h >= area * 0.15);

  return {
    contentCoverage: round2(filled / grid.length),
    contentBox: bbox,
    largestEmptyBandPx: largestBand * cell,
    largestEmptyRect: best ? { ...best, shareOfViewport: round2((best.width * best.height) / area) } : null,
    environmentTreatment: Boolean(largeBackground || rootImage || largeMedia),
  };
}

/** Candidate focal points: biggest type and biggest content blocks in the first viewport. */
export function analyzeFocal(snapshot, { limit = 5 } = {}) {
  const vh = snapshot.viewport.height;
  const visible = snapshot.elements.filter((el) => el.y < vh && isContent(el));
  const typeRank = visible
    .filter((el) => el.hasText)
    .map((el) => ({ path: el.path, text: el.text, fontSize: el.fontSize, weight: el.fontWeight, score: el.fontSize * (el.fontWeight >= 600 ? 1.2 : 1) }))
    .sort((a, b) => b.score - a.score);
  const sizes = [...new Set(typeRank.map((t) => Math.round(t.fontSize)))].sort((a, b) => b - a);
  const top = typeRank.slice(0, limit);
  const ratio = sizes.length >= 2 ? round2(sizes[0] / sizes[sizes.length - 1]) : 1;
  const primaryActions = visible.filter((el) => el.interactive && (el.tag === 'button' || el.tag === 'a') && el.h >= 32 && el.w >= 64);
  return {
    largestType: top,
    distinctFontSizes: sizes.length,
    typeScaleRatio: ratio,
    actionsAboveFold: primaryActions.length,
  };
}

/** Fixed and sticky chrome, and how much of the viewport it consumes. */
export function analyzeChrome(snapshot) {
  const vh = snapshot.viewport.height;
  const chrome = snapshot.elements.filter((el) => el.position === 'fixed' || el.position === 'sticky');
  const outermost = chrome.filter((el) => !ancestors(snapshot, el).some((a) => ['fixed', 'sticky'].includes(snapshot.elements[a].position)));
  const fullWidth = outermost.filter((el) => el.w >= snapshot.viewport.width * 0.6);
  const heightUsed = fullWidth.reduce((sum, el) => sum + Math.min(el.h, vh), 0);
  return {
    elements: outermost.map((el) => ({ path: el.path, position: el.position, height: Math.round(el.h), width: Math.round(el.w) })),
    horizontalChromePx: Math.round(heightUsed),
    shareOfViewportHeight: round2(heightUsed / vh),
  };
}

/** Nested scroll regions (scroll ownership). */
export function analyzeScrollRegions(snapshot) {
  const regions = snapshot.elements.filter((el) => el.scrollsY || el.scrollsX);
  return regions.map((el) => ({ path: el.path, axis: el.scrollsY && el.scrollsX ? 'both' : el.scrollsY ? 'y' : 'x', width: Math.round(el.w), height: Math.round(el.h) }));
}

/** Interactive targets smaller than a minimum size (24px default, WCAG 2.2 AA minimum). */
export function analyzeTargets(snapshot, { min = 24 } = {}) {
  const small = snapshot.elements.filter((el) => el.interactive && el.tag !== 'label' && (el.w < min || el.h < min));
  // Inline text links inside paragraphs are exempt from the minimum in WCAG; flag separately.
  return small.map((el) => {
    const parent = el.parent >= 0 ? snapshot.elements[el.parent] : null;
    const inline = el.tag === 'a' && parent && parent.hasText;
    return { path: el.path, text: el.text, width: Math.round(el.w), height: Math.round(el.h), inlineLink: Boolean(inline) };
  });
}

function round2(n) { return Math.round(n * 100) / 100; }

/** Parse "rgb(r, g, b)" or "rgba(r, g, b, a)" into [r, g, b, a]. */
export function parseRgb(value) {
  const m = String(value).match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
  return [parts[0], parts[1], parts[2], parts.length > 3 ? parts[3] : 1];
}

export function contrastRatio(fg, bg) {
  const lum = ([r, g, b]) => {
    const f = (c) => { const v = c / 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const a = lum(fg);
  const b = lum(bg);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/**
 * Text elements whose color contrast against the resolved background is below WCAG AA
 * (4.5:1, or 3:1 for large text: >= 24px, or >= 18.66px bold). Text over images is skipped
 * and counted, because its contrast cannot be computed from styles.
 */
export function analyzeContrast(snapshot, { limit = 30 } = {}) {
  const failures = [];
  let checked = 0;
  let overImages = 0;
  for (const el of snapshot.elements) {
    if (!el.hasText || !el.fg) continue;
    if (el.bg === 'image') { overImages++; continue; }
    const fg = parseRgb(el.fg);
    const bg = parseRgb(el.bg);
    if (!fg || !bg || fg[3] === 0) continue;
    checked++;
    const ratio = contrastRatio(fg, bg);
    const large = el.fontSize >= 24 || (el.bold && el.fontSize >= 18.66);
    const needed = large ? 3 : 4.5;
    if (ratio < needed) failures.push({ path: el.path, text: el.text, ratio: round2(ratio), needed, fontSize: el.fontSize });
  }
  failures.sort((p, q) => p.ratio - q.ratio);
  return { checked, overImages, count: failures.length, failures: failures.slice(0, limit) };
}

// ---------------------------------------------------------------------------
// Output helpers
// ---------------------------------------------------------------------------

export function truncate(text, n = 48) {
  if (!text) return '';
  return text.length > n ? `${text.slice(0, n - 1)}…` : text;
}

export function printJsonOrText(asJson, data, textFn) {
  if (asJson) process.stdout.write(`${JSON.stringify(data, null, 2)}\n`);
  else process.stdout.write(textFn(data));
}

/** Standard CLI wrapper: exit 0 = clean, 1 = findings, 2 = usage or environment error. */
export async function runCli(main) {
  try {
    const code = await main();
    process.exitCode = code ?? 0;
  } catch (error) {
    if (error instanceof UsageError) {
      process.stderr.write(`Error: ${error.message}\nRun with --help for usage.\n`);
    } else {
      process.stderr.write(`Error: ${error.message}\n`);
    }
    process.exitCode = 2;
  }
}
