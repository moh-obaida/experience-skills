#!/usr/bin/env node
// Run a viewport matrix against a page and report overflow, collisions, small targets,
// fixed/sticky chrome share, and first-viewport content coverage per size.
// Usage: node layout-report.mjs <url-or-file> [--sizes ...] [--zoom 1,2] [--rtl] [--screenshots dir] [--json]

import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import {
  parseArgs, parseSizes, toUrl, launch, openPage, snapshotPage, runCli, UsageError,
  analyzeOverflow, analyzeCollisions, analyzeTargets, analyzeChrome, analyzeViewportUse, truncate,
} from './_shared/layout-probe.mjs';

export const DEFAULT_SIZES = '1920x1080,1536x864,1440x900,1366x768,1280x800,1024x768,768x1024,430x932,390x844,375x812,360x800';

const HELP = `layout-report — viewport matrix checks for a rendered page

Usage:
  node layout-report.mjs <url-or-file> [options]

Options:
  --sizes LIST        Comma-separated WxH sizes (default: ${DEFAULT_SIZES})
  --zoom LIST         Zoom factors to emulate, e.g. 1,2 (default 1). Zoom shrinks the CSS
                      viewport and raises device scale factor, like browser zoom.
  --rtl               Also run each size with dir="rtl" forced on the root element
  --screenshots DIR   Write a PNG per run into DIR (created if missing). Off by default.
  --channel NAME      Use an installed browser channel (e.g. chrome)
  --wait MS           Extra wait after load (default 300)
  --min-target N      Minimum interactive target size in px (default 24)
  --json              Print JSON
  --help              Show this help

Nothing is written to disk unless --screenshots is given.

Exit codes: 0 no defects · 1 overflow, collisions, or small targets found · 2 usage/environment error`;

export function summarize(snapshot, { minTarget = 24 } = {}) {
  const overflow = analyzeOverflow(snapshot);
  const collisions = analyzeCollisions(snapshot);
  const targets = analyzeTargets(snapshot, { min: minTarget }).filter((t) => !t.inlineLink);
  const chrome = analyzeChrome(snapshot);
  const use = analyzeViewportUse(snapshot);
  return {
    overflowPx: overflow.hasPageOverflow ? overflow.pageOverflowPx : 0,
    overflowCulprits: overflow.culprits.slice(0, 10),
    collisions: collisions.collisions.slice(0, 10),
    collisionCount: collisions.count,
    smallTargets: targets.slice(0, 15),
    smallTargetCount: targets.length,
    chromeShare: chrome.shareOfViewportHeight,
    coverage: use.contentCoverage,
  };
}

export function hasDefects(run) {
  return run.overflowPx > 0 || run.overflowCulprits.length > 0 || run.collisionCount > 0 || run.smallTargetCount > 0;
}

function label(run) {
  let s = `${run.size.width}×${run.size.height}`;
  if (run.zoom !== 1) s += ` @${Math.round(run.zoom * 100)}%`;
  if (run.rtl) s += ' RTL';
  return s;
}

function pct(n) { return `${Math.round(n * 100)}%`; }

function toText(url, runs) {
  const out = [`layout-report · ${url}`, ''];
  out.push(`${'Run'.padEnd(22)}${'Overflow'.padEnd(10)}${'Collide'.padEnd(9)}${'Small'.padEnd(7)}${'Chrome'.padEnd(8)}Coverage`);
  for (const r of runs) {
    out.push(`${label(r).padEnd(22)}${(r.overflowPx ? `+${r.overflowPx}px` : r.overflowCulprits.length ? 'escape' : '–').padEnd(10)}${String(r.collisionCount || '–').padEnd(9)}${String(r.smallTargetCount || '–').padEnd(7)}${pct(r.chromeShare).padEnd(8)}${pct(r.coverage)}`);
  }
  const defective = runs.filter(hasDefects);
  if (defective.length) {
    out.push('', 'Details');
    for (const r of defective) {
      out.push(`  ${label(r)}`);
      for (const c of r.overflowCulprits.slice(0, 5)) out.push(`    overflow +${c.overBy}px  ${truncate(c.path, 60)}`);
      for (const c of r.collisions.slice(0, 5)) out.push(`    collision ${Math.round(c.ratio * 100)}%  ${truncate(c.a.path, 34)} × ${truncate(c.b.path, 34)}`);
      for (const t of r.smallTargets.slice(0, 5)) out.push(`    target ${t.width}×${t.height}  ${truncate(t.path, 50)}${t.text ? ` “${truncate(t.text, 20)}”` : ''}`);
    }
  }
  const tall = runs.filter((r) => r.chromeShare > 0.2);
  if (tall.length) out.push('', `Chrome over 20% of viewport height at: ${tall.map(label).join(', ')}`);
  if (runs.some((r) => r.screenshot)) out.push('', 'Screenshots:', ...runs.filter((r) => r.screenshot).map((r) => `  ${r.screenshot}`));
  out.push('', 'Measured facts only. Look at each size too: wraps, hierarchy, and focus order need eyes.');
  return `${out.join('\n')}\n`;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), {
    sizes: 'string', zoom: 'string', rtl: 'boolean', screenshots: 'string', channel: 'string',
    wait: 'string', 'min-target': 'string', json: 'boolean', help: 'boolean',
  });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const sizes = parseSizes(flags.sizes ?? DEFAULT_SIZES);
  const zooms = String(flags.zoom ?? '1').split(',').map(Number);
  if (zooms.some((z) => !(z > 0 && z <= 5))) throw new UsageError('--zoom values must be between 0 and 5');
  const directions = flags.rtl ? [false, true] : [false];
  if (flags.screenshots) mkdirSync(flags.screenshots, { recursive: true });

  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  const runs = [];
  try {
    for (const size of sizes) {
      for (const zoom of zooms) {
        for (const rtl of directions) {
          const { page, context } = await openPage(browser, url, { ...size, zoom, rtl, waitMs: Number(flags.wait ?? 300) });
          const run = { size, zoom, rtl, ...summarize(await snapshotPage(page), { minTarget: Number(flags['min-target'] ?? 24) }) };
          if (flags.screenshots) {
            const file = join(flags.screenshots, `${size.width}x${size.height}${zoom !== 1 ? `@${zoom}x` : ''}${rtl ? '-rtl' : ''}.png`);
            await page.screenshot({ path: file, fullPage: false });
            run.screenshot = file;
          }
          runs.push(run);
          await context.close();
        }
      }
    }
  } finally {
    await browser.close();
  }
  if (flags.json) process.stdout.write(`${JSON.stringify({ url, runs }, null, 2)}\n`);
  else process.stdout.write(toText(url, runs));
  return runs.some(hasDefects) ? 1 : 0;
}

if (process.argv[1]?.endsWith('layout-report.mjs')) runCli(main);
