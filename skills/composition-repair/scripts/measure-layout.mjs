#!/usr/bin/env node
// Measure first-viewport composition facts for a rendered page.
// Usage: node measure-layout.mjs <url-or-file> [--size 1440x900] [--json] [--channel chrome]

import {
  parseArgs, parseSizes, toUrl, launch, openPage, snapshotPage, runCli,
  analyzeViewportUse, analyzeFocal, analyzeChrome, analyzeScrollRegions, truncate,
} from './_shared/layout-probe.mjs';

const HELP = `measure-layout — first-viewport composition facts

Usage:
  node measure-layout.mjs <url-or-file> [options]

Options:
  --size WxH        Viewport size (default 1440x900)
  --channel NAME    Use an installed browser channel (e.g. chrome, msedge)
  --wait MS         Extra wait after load before measuring (default 300)
  --json            Print JSON instead of text
  --help            Show this help

Reports content coverage, content box, largest empty band and dead region, environment treatment,
focal candidates, fixed/sticky chrome share, and inner scroll regions.

Exit codes: 0 no heuristic flags · 1 flags raised · 2 usage or environment error`;

export function flagsFor(report) {
  const flags = [];
  const { viewport, focal, chrome, scrollRegions } = report;
  if (viewport.contentCoverage < 0.15 && !viewport.environmentTreatment) {
    flags.push(`Low content coverage (${pct(viewport.contentCoverage)}) with no environment treatment: likely dead space (V3) or aligned-not-composed (V6).`);
  }
  if (chrome.shareOfViewportHeight > 0.2) {
    flags.push(`Fixed/sticky chrome uses ${pct(chrome.shareOfViewportHeight)} of viewport height: check short viewports (R5).`);
  }
  if (focal.actionsAboveFold === 0 && report.actionsTotal > 0) {
    flags.push('No button-sized actions in the first viewport, but actions exist further down: check the viewport budget (V10).');
  }
  if (scrollRegions.length > 2) {
    flags.push(`${scrollRegions.length} inner scroll regions: check scroll ownership (R6).`);
  }
  if (focal.distinctFontSizes >= 2 && focal.typeScaleRatio < 1.25) {
    flags.push(`Type scale ratio ${focal.typeScaleRatio}: hierarchy may be flat (V5).`);
  }
  return flags;
}

function pct(n) { return `${Math.round(n * 100)}%`; }

export function buildReport(snapshot) {
  const viewport = analyzeViewportUse(snapshot);
  const focal = analyzeFocal(snapshot);
  const chrome = analyzeChrome(snapshot);
  const scrollRegions = analyzeScrollRegions(snapshot);
  const actionsTotal = snapshot.elements.filter((el) => el.interactive && (el.tag === 'button' || el.tag === 'a') && el.h >= 32 && el.w >= 64).length;
  const report = { url: snapshot.url, size: snapshot.viewport, viewport, focal, chrome, scrollRegions, actionsTotal };
  report.flags = flagsFor(report);
  return report;
}

function toText(r) {
  const lines = [];
  lines.push(`measure-layout · ${r.url}`);
  lines.push(`Viewport ${r.size.width}×${r.size.height}`);
  lines.push('');
  lines.push('First viewport');
  lines.push(`  Content coverage:       ${pct(r.viewport.contentCoverage)}`);
  if (r.viewport.contentBox) {
    const b = r.viewport.contentBox;
    lines.push(`  Content box:            ${b.width}×${b.height} at (${b.x},${b.y}) · ${pct(b.shareOfViewport)} of viewport`);
    lines.push(`  Side margins:           left ${b.leftMargin}px · right ${b.rightMargin}px`);
  } else {
    lines.push('  Content box:            none (no content in first viewport)');
  }
  lines.push(`  Largest empty band:     ${r.viewport.largestEmptyBandPx}px tall`);
  if (r.viewport.largestEmptyRect) {
    const e = r.viewport.largestEmptyRect;
    lines.push(`  Largest dead region:    ${e.width}×${e.height} at (${e.x},${e.y}) · ${pct(e.shareOfViewport)} of viewport`);
  }
  lines.push(`  Environment treatment:  ${r.viewport.environmentTreatment ? 'yes (large background image/gradient or media)' : 'none detected'}`);
  lines.push('');
  lines.push('Focal candidates (largest type in view)');
  for (const t of r.focal.largestType) {
    lines.push(`  ${String(Math.round(t.fontSize)).padStart(3)}px w${t.weight}  ${truncate(t.text, 50)}  (${truncate(t.path, 40)})`);
  }
  lines.push(`  Distinct font sizes: ${r.focal.distinctFontSizes} · scale ratio: ${r.focal.typeScaleRatio}`);
  lines.push(`  Button-sized actions above the fold: ${r.focal.actionsAboveFold} (of ${r.actionsTotal} on page)`);
  lines.push('');
  lines.push(`Fixed/sticky chrome: ${r.chrome.horizontalChromePx}px · ${pct(r.chrome.shareOfViewportHeight)} of height`);
  for (const c of r.chrome.elements) lines.push(`  ${c.position.padEnd(6)} ${c.width}×${c.height}  ${truncate(c.path, 60)}`);
  lines.push(`Inner scroll regions: ${r.scrollRegions.length}`);
  for (const s of r.scrollRegions) lines.push(`  ${s.axis.padEnd(4)} ${s.width}×${s.height}  ${truncate(s.path, 60)}`);
  lines.push('');
  if (r.flags.length) {
    lines.push('Flags (heuristics; interpret with the composition references)');
    for (const f of r.flags) lines.push(`  • ${f}`);
  } else {
    lines.push('No heuristic flags. This does not mean the composition is good; look at it.');
  }
  return `${lines.join('\n')}\n`;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), {
    size: 'string', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean',
  });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const [size] = parseSizes(flags.size ?? '1440x900');
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  try {
    const { page } = await openPage(browser, url, { ...size, waitMs: Number(flags.wait ?? 300) });
    const report = buildReport(await snapshotPage(page));
    if (flags.json) process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    else process.stdout.write(toText(report));
    return report.flags.length ? 1 : 0;
  } finally {
    await browser.close();
  }
}

if (process.argv[1]?.endsWith('measure-layout.mjs')) {
  runCli(main);
}
