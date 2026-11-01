#!/usr/bin/env node
// BORDLINE and component-variance probe for one rendered page.
// Reports computed-style candidates: partial or uneven borders, clipped edges, duplicate state
// indicators, clipped focus rings, separator overreach, connector misalignment, and repeated
// components whose computed style disagrees. It cannot decide intent.
// Usage: node inspect-borders.mjs <url-or-file> [--size WxH] [--rtl] [--json]

import {
  parseArgs, parseSizes, runCli, truncate, UsageError, toUrl, launch, openPage,
} from './_shared/layout-probe.mjs';
import {
  styleSnapshot, auditStyles, hoverCandidates, hoverPass, focusPass, analyzeStateIndicators, analyzeFocusStops,
} from './_shared/style-probe.mjs';

const HELP = `inspect-borders — BORDLINE and repeated-component probe for a rendered page

Usage:
  node inspect-borders.mjs <url-or-file> [options]

Options:
  --size WxH            Viewport (default 1440x900)
  --rtl                 Force dir="rtl" on the root element before inspecting
  --dark                Emulate prefers-color-scheme: dark
  --no-hover            Skip the hover pass (tab-like and nav-like elements)
  --no-focus            Skip the keyboard Tab pass (focus-ring visibility and clipping)
  --min-confidence L    low | medium | high. Findings below L are listed but do not set exit 1
                        (default medium)
  --channel NAME        Use an installed browser channel (e.g. chrome)
  --wait MS             Extra wait after load (default 300)
  --json                Print JSON
  --help                Show this help

What it checks (codes in the BORDLINE taxonomy):
  BL1 partial border · BL2 uneven stroke · BL3 clipped edge · BL4 duplicate indicator
  BL5 separator overreach or misalignment · BL6 focus ring absent or clipped · BL8 pseudo-element
  overhang · BL9 connector misalignment · VC-VAR repeated components disagree on height, padding,
  radius, border, shadow or type · VC-ICON icon sizes · VC-EDGE content edges off by a few pixels

Limits: it reads computed style and geometry. A one-sided border, a heavier accent edge, or a
shared-edge segmented control can be deliberate; every finding carries a confidence and a note.
A screenshot is still needed to confirm what the user sees, and the stylesheet is still needed to
find the root cause. Nothing is written to disk and no network is used beyond loading the page.

Exit codes: 0 no findings at or above --min-confidence · 1 findings · 2 usage or environment error`;

const RANK = { low: 0, medium: 1, high: 2 };

function dedupe(findings) {
  const seen = new Set();
  return findings.filter((f) => { const k = `${f.code}|${f.path}|${f.message}`; if (seen.has(k)) return false; seen.add(k); return true; });
}

function toText(url, size, findings, counts, minConfidence) {
  const out = [`inspect-borders · ${url} · ${size.width}×${size.height}`, ''];
  out.push(`${counts.elements} visible elements inspected${counts.truncated ? ' (truncated)' : ''}${counts.hovered ? `, ${counts.hovered} hovered` : ''}${counts.focusStops ? `, ${counts.focusStops} focus stops` : ''}.`, '');
  if (!findings.length) out.push('No candidates found.');
  for (const f of findings) {
    const counted = RANK[f.confidence] >= RANK[minConfidence] ? '' : ' (below threshold)';
    out.push(`${f.code} ${f.title} [${f.confidence}]${counted}`, `  ${truncate(f.path, 70)}`, `  ${f.message}`, `  note: ${f.note}`, '');
  }
  out.push('Computed-style candidates only. Confirm each in a screenshot and trace the root cause in the stylesheet before changing anything.');
  return `${out.join('\n')}\n`;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), {
    size: 'string', rtl: 'boolean', dark: 'boolean', 'no-hover': 'boolean', 'no-focus': 'boolean',
    'min-confidence': 'string', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean',
  });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const minConfidence = flags['min-confidence'] ?? 'medium';
  if (!(minConfidence in RANK)) throw new UsageError('--min-confidence must be low, medium, or high');
  const url = toUrl(positionals[0]);
  const [size] = parseSizes(flags.size ?? '1440x900');

  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  let findings = [];
  const counts = { elements: 0, truncated: false, hovered: 0, focusStops: 0 };
  try {
    const { page, context } = await openPage(browser, url, { ...size, rtl: Boolean(flags.rtl), waitMs: Number(flags.wait ?? 300), colorScheme: flags.dark ? 'dark' : undefined });
    const base = await styleSnapshot(page);
    counts.elements = base.elements.length;
    counts.truncated = base.truncated;
    findings.push(...auditStyles(base));
    if (!flags['no-hover']) {
      const candidates = hoverCandidates(base);
      const hovered = await hoverPass(page, base, candidates);
      counts.hovered = hovered.length;
      for (const h of hovered) findings.push(...analyzeStateIndicators(base, h.snapshot, h.base, 'hover'));
    }
    if (!flags['no-focus']) {
      const stops = await focusPass(page, 40);
      counts.focusStops = stops.length;
      findings.push(...analyzeFocusStops(stops));
    }
    await context.close();
  } finally {
    await browser.close();
  }
  findings = dedupe(findings).sort((a, b) => RANK[b.confidence] - RANK[a.confidence] || a.code.localeCompare(b.code));
  const counted = findings.filter((f) => RANK[f.confidence] >= RANK[minConfidence]);
  if (flags.json) process.stdout.write(`${JSON.stringify({ url, size, minConfidence, counts, findings }, null, 2)}\n`);
  else process.stdout.write(toText(url, size, findings, counts, minConfidence));
  return counted.length ? 1 : 0;
}

if (process.argv[1]?.endsWith('inspect-borders.mjs')) runCli(main);
