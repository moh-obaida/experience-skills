#!/usr/bin/env node
// Detect overlapping content elements (text, media, controls) that are not nested.
// Usage: node detect-collisions.mjs <url-or-file> [--size 390x844] [--min-ratio 0.25] [--json]

import {
  parseArgs, parseSizes, toUrl, launch, openPage, snapshotPage, runCli, analyzeCollisions, truncate,
} from './_shared/layout-probe.mjs';

const HELP = `detect-collisions — find suspicious overlaps between content elements

Usage:
  node detect-collisions.mjs <url-or-file> [options]

Options:
  --size WxH        Viewport size (default 390x844)
  --min-ratio N     Minimum overlap as a share of the smaller element (default 0.25)
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --wait MS         Extra wait after load (default 300)
  --json            Print JSON
  --help            Show this help

Only elements that carry content (own text, media, or controls) are compared, and
elements nested inside each other are ignored. Deliberate overlaps (badges on
avatars, overlay captions) will be reported too; review each result.

Exit codes: 0 no collisions · 1 collisions found · 2 usage or environment error`;

function toText(url, size, result) {
  const lines = [`detect-collisions · ${url}`, `Viewport ${size.width}×${size.height}`, ''];
  if (!result.count) {
    lines.push('No overlapping content elements found.');
    return `${lines.join('\n')}\n`;
  }
  lines.push(`${result.count} overlap(s)${result.count > result.collisions.length ? `, showing ${result.collisions.length}` : ''}:`);
  for (const c of result.collisions) {
    lines.push(`  ${Math.round(c.ratio * 100)}% at (${c.at.x},${c.at.y})`);
    lines.push(`    A: ${truncate(c.a.path, 56)}${c.a.text ? `  “${truncate(c.a.text, 28)}”` : ''}`);
    lines.push(`    B: ${truncate(c.b.path, 56)}${c.b.text ? `  “${truncate(c.b.text, 28)}”` : ''}`);
  }
  return `${lines.join('\n')}\n`;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), {
    size: 'string', 'min-ratio': 'string', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean',
  });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const [size] = parseSizes(flags.size ?? '390x844');
  const minRatio = Number(flags['min-ratio'] ?? 0.25);
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  try {
    const { page } = await openPage(browser, url, { ...size, waitMs: Number(flags.wait ?? 300) });
    const result = analyzeCollisions(await snapshotPage(page), { minRatio });
    if (flags.json) process.stdout.write(`${JSON.stringify({ url, size, ...result }, null, 2)}\n`);
    else process.stdout.write(toText(url, size, result));
    return result.count ? 1 : 0;
  } finally {
    await browser.close();
  }
}

if (process.argv[1]?.endsWith('detect-collisions.mjs')) runCli(main);
