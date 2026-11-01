#!/usr/bin/env node
// Audit the authored design systems (30 general, niche atlas) for the quality decisions the
// experience-quality skills rely on. Structural check only: it proves a decision was written, not
// that it is right. Read the flagged entries.
//
// Usage: node scripts/audit-system-quality.mjs [--root DIR] [--list] [--json] [--strict]

import { resolve } from 'node:path';
import { ROOT } from './lib/repo.mjs';
import { loadEntries, auditEntries, CLAUSES } from './lib/system-quality.mjs';

const HELP = `audit-system-quality — check authored design systems for quality decisions

Usage:
  node scripts/audit-system-quality.mjs [options]

Options:
  --root DIR   Repository root to audit (default: this repository). Point it at a baseline checkout
               to compare libraries.
  --list       List every entry that lacks a clause
  --json       Print JSON
  --strict     Exit 1 if any entry lacks a substantive clause or clauses are duplicated
  --help       Show this help

Clauses (labeled inside existing rows): Stroke and lift, Shown when, Copy, Accept. Prose signals
(stroke and elevation words, conditional-display words, failure/absence states, acceptance words)
are structural cues; they do not certify the decisions or rendered result. State coverage is a
diagnostic cue, not a per-system checklist: states must follow each product's mechanics.

Exit codes: 0 report printed (and, with --strict, substantive clauses are complete) · 1 strict failure · 2 usage error`;

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) { process.stdout.write(`${HELP}\n`); process.exit(0); }
const flag = (n) => args.includes(n);
const rootIdx = args.indexOf('--root');
if (rootIdx !== -1 && !args[rootIdx + 1]) { process.stderr.write('--root needs a directory\n'); process.exit(2); }
const root = rootIdx !== -1 ? resolve(args[rootIdx + 1]) : ROOT;
const known = new Set(['--root', '--list', '--json', '--strict', '--help', '-h']);
for (const [i, a] of args.entries()) if (a.startsWith('-') && !known.has(a)) { process.stderr.write(`Unknown option ${a}\n`); process.exit(2); }
if (rootIdx !== -1) args.splice(rootIdx, 2);

const entries = loadEntries(root);
if (!entries.length) { process.stderr.write(`No authored systems found under ${root}\n`); process.exit(2); }
const report = auditEntries(entries);

if (flag('--json')) process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
else {
  const s = report.summary;
  const out = [`audit-system-quality · ${s.entries} systems (${s.general} general, ${s.niche} niche)`, ''];
  out.push('Labeled clauses present and substantive:');
  for (const c of CLAUSES) out.push(`  ${c.label.padEnd(16)} ${s[c.label]}/${s.entries}`);
  out.push(`  all four          ${s.complete}/${s.entries}`, '', 'Prose signals (baseline-comparable):');
  for (const k of ['coherence', 'necessity', 'states', 'acceptance']) out.push(`  ${k.padEnd(16)} ${s[`signal:${k}`]}/${s.entries}`);
  if (report.duplicates.length) {
    out.push('', `Duplicate clause text across entries (${report.duplicates.length}):`);
    for (const d of report.duplicates.slice(0, 10)) out.push(`  "${d.text}" — ${d.entries.join(', ')}`);
  }
  if (flag('--list')) {
    out.push('', 'Entries lacking a clause:');
    for (const r of report.results) {
      const miss = CLAUSES.filter((c) => r.clauses[c.label] !== 'ok').map((c) => `${c.label} (${r.clauses[c.label]})`);
      if (miss.length) out.push(`  ${r.file} · ${r.name}: ${miss.join(', ')}`);
    }
    out.push('', 'Entries without detectable failure and absence coverage (heuristic; review by product mechanics):');
    for (const r of report.results) {
      if (!r.signals.states) out.push(`  ${r.file} · ${r.name}`);
    }
  }
  process.stdout.write(`${out.join('\n')}\n`);
}
process.exit(flag('--strict') && (report.summary.complete < report.summary.entries || report.duplicates.length) ? 1 : 0);
