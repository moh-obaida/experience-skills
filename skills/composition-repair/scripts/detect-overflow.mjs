#!/usr/bin/env node
// Detect horizontal overflow and the elements causing it, at one or more viewport sizes.
// Usage: node detect-overflow.mjs <url-or-file> [--sizes 1440x900,390x844] [--json]

import {
  parseArgs, parseSizes, toUrl, launch, openPage, snapshotPage, runCli, analyzeOverflow, truncate,
} from './_shared/layout-probe.mjs';

const HELP = `detect-overflow — find horizontal overflow and its culprits

Usage:
  node detect-overflow.mjs <url-or-file> [options]

Options:
  --sizes LIST      Comma-separated WxH sizes (default 1440x900,390x844)
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --wait MS         Extra wait after load (default 300)
  --json            Print JSON
  --help            Show this help

Reports whether the document scrolls horizontally and lists the outermost elements
that escape the viewport without a clipping ancestor.

Exit codes: 0 no overflow · 1 overflow found · 2 usage or environment error`;

function toText(url, results) {
  const lines = [`detect-overflow · ${url}`, ''];
  for (const { size, overflow } of results) {
    const head = `${size.width}×${size.height}`;
    if (!overflow.hasPageOverflow && overflow.culprits.length === 0) {
      lines.push(`${head}  OK — no horizontal overflow`);
      continue;
    }
    lines.push(`${head}  ${overflow.hasPageOverflow ? `PAGE OVERFLOWS by ${overflow.pageOverflowPx}px` : 'elements escape viewport (page not scrollable)'}`);
    for (const c of overflow.culprits.slice(0, 15)) {
      lines.push(`    +${String(c.overBy).padStart(4)}px  width ${c.width}  ${truncate(c.path, 56)}${c.text ? `  “${truncate(c.text, 30)}”` : ''}`);
    }
    if (overflow.culprits.length > 15) lines.push(`    … ${overflow.culprits.length - 15} more (use --json)`);
  }
  return `${lines.join('\n')}\n`;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), {
    sizes: 'string', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean',
  });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const sizes = parseSizes(flags.sizes ?? '1440x900,390x844');
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  const results = [];
  try {
    for (const size of sizes) {
      const { page, context } = await openPage(browser, url, { ...size, waitMs: Number(flags.wait ?? 300) });
      results.push({ size, overflow: analyzeOverflow(await snapshotPage(page)) });
      await context.close();
    }
  } finally {
    await browser.close();
  }
  if (flags.json) process.stdout.write(`${JSON.stringify({ url, results }, null, 2)}\n`);
  else process.stdout.write(toText(url, results));
  return results.some((r) => r.overflow.hasPageOverflow || r.overflow.culprits.length) ? 1 : 0;
}

if (process.argv[1]?.endsWith('detect-overflow.mjs')) runCli(main);
