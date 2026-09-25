#!/usr/bin/env node
// Inject content stress (long text, unbroken strings, RTL) into a rendered page and report
// overflow, collisions, and clipping that appear only under stress.
// Usage: node stress-content.mjs <url-or-file> [--sizes 1440x900,390x844] [--mode all] [--json]

import {
  parseArgs, parseSizes, toUrl, launch, openPage, snapshotPage, runCli, UsageError,
  analyzeOverflow, analyzeCollisions, truncate,
} from './_shared/layout-probe.mjs';

const MODES = ['long', 'unbroken', 'rtl', 'all'];

const HELP = `stress-content — find layout failures that appear only with real-world content

Usage:
  node stress-content.mjs <url-or-file> [options]

Options:
  --sizes LIST      Comma-separated WxH (default 1440x900,390x844)
  --mode NAME       long | unbroken | rtl | all (default all)
                      long      triples the text of headings, buttons, links, labels, and cells
                      unbroken  appends a 40-character unbroken token to those elements
                      rtl       sets dir="rtl" on the document
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --json            Print JSON
  --help            Show this help

Each size is measured before and after stress in the same page. Only failures introduced by
the stress are reported. The page is modified in the browser only; nothing is written to disk.

Exit codes: 0 no new failures · 1 new failures under stress · 2 usage or environment error`;

/** Runs in the page. */
export function applyStress(mode) {
  const targets = document.querySelectorAll('h1,h2,h3,h4,button,a,label,th,td,li,[role=button],.title,.name');
  let touched = 0;
  for (const el of targets) {
    const textNodes = [...el.childNodes].filter((n) => n.nodeType === 3 && n.textContent.trim());
    if (!textNodes.length) continue;
    const node = textNodes[0];
    if (mode === 'long' || mode === 'all') node.textContent = `${node.textContent.trim()} ${node.textContent.trim()} ${node.textContent.trim()}`;
    if (mode === 'unbroken' || mode === 'all') node.textContent = `${node.textContent} Ωverylongunbrokentoken_${'x'.repeat(24)}`;
    touched++;
  }
  if (mode === 'rtl' || mode === 'all') document.documentElement.setAttribute('dir', 'rtl');
  return touched;
}

function diff(before, after) {
  const beforeCulprits = new Set(before.overflow.culprits.map((c) => c.path));
  const beforePairs = new Set(before.collisions.collisions.map((c) => `${c.a.path}|${c.b.path}`));
  return {
    newPageOverflowPx: after.overflow.hasPageOverflow && !before.overflow.hasPageOverflow ? after.overflow.pageOverflowPx : 0,
    newOverflow: after.overflow.culprits.filter((c) => !beforeCulprits.has(c.path)).slice(0, 10),
    newCollisions: after.collisions.collisions.filter((c) => !beforePairs.has(`${c.a.path}|${c.b.path}`)).slice(0, 10),
  };
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), { sizes: 'string', mode: 'string', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean' });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const sizes = parseSizes(flags.sizes ?? '1440x900,390x844');
  const mode = flags.mode ?? 'all';
  if (!MODES.includes(mode)) throw new UsageError(`--mode must be one of ${MODES.join(', ')}`);
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  const results = [];
  try {
    for (const size of sizes) {
      const { page, context } = await openPage(browser, url, { ...size, waitMs: Number(flags.wait ?? 300) });
      const s1 = await snapshotPage(page);
      const before = { overflow: analyzeOverflow(s1), collisions: analyzeCollisions(s1) };
      const touched = await page.evaluate(applyStress, mode);
      await page.waitForTimeout(150);
      const s2 = await snapshotPage(page);
      const after = { overflow: analyzeOverflow(s2), collisions: analyzeCollisions(s2) };
      results.push({ size, touched, ...diff(before, after) });
      await context.close();
    }
  } finally { await browser.close(); }
  const failing = results.filter((r) => r.newPageOverflowPx || r.newOverflow.length || r.newCollisions.length);
  if (flags.json) process.stdout.write(`${JSON.stringify({ url, mode, results }, null, 2)}\n`);
  else {
    const lines = [`stress-content · ${url} · mode ${mode}`, ''];
    for (const r of results) {
      const head = `${r.size.width}×${r.size.height} (${r.touched} elements stressed)`;
      if (!r.newPageOverflowPx && !r.newOverflow.length && !r.newCollisions.length) { lines.push(`${head}  OK — no new failures`); continue; }
      lines.push(`${head}  ${r.newPageOverflowPx ? `PAGE OVERFLOWS by ${r.newPageOverflowPx}px` : 'new failures'}`);
      for (const c of r.newOverflow.slice(0, 5)) lines.push(`    overflow +${c.overBy}px  ${truncate(c.path, 60)}`);
      for (const c of r.newCollisions.slice(0, 5)) lines.push(`    collision ${Math.round(c.ratio * 100)}%  ${truncate(c.a.path, 30)} × ${truncate(c.b.path, 30)}`);
    }
    lines.push('', 'Stress is synthetic. Confirm with real long names, translations, and RTL content.');
    process.stdout.write(`${lines.join('\n')}\n`);
  }
  return failing.length ? 1 : 0;
}

if (process.argv[1]?.endsWith('stress-content.mjs')) runCli(main);
