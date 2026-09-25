#!/usr/bin/env node
// Produce an honest, source-level coverage report for design intelligence and precedent.
// Counts are direct observation IDs in the named library entry. A zero is useful: it identifies
// where research is missing instead of inventing a quota. Unique product/surface counts prevent
// several observations from one surface from looking like several independent precedents.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { ROOT } from './lib/repo.mjs';

const HELP = `audit-depth — audit direction, composition, palette, type, motion, and precedent coverage

Usage:
  node scripts/audit-depth.mjs [--write PATH] [--json]

Without --write, prints the report. --json prints machine-readable coverage data instead.
The script is local and read-only unless --write is supplied.
`;

const read = (path) => readFileSync(join(ROOT, path), 'utf8');
const unique = (items) => [...new Set(items)];
const ids = (text) => unique([...text.matchAll(/\b[A-Z][A-Za-z]+\d+\b/g)].map((m) => m[0]));
const evidenceStats = (cited, observationIndex) => {
  const records = cited.map((id) => observationIndex.get(id)).filter(Boolean);
  return {
    uniqueProducts: unique(records.map((record) => record.product)).length,
    uniqueProductSurfaces: unique(records.map((record) => `${record.product} — ${record.surface}`)).length,
  };
};
const tableRows = (text) => [...text.matchAll(/^\| ([^|]+) \| `([^`]+)` \|([^|]+)\|([^|]+)\|$/gm)]
  .map((m) => ({ name: m[1].trim(), family: m[2], solves: m[3].trim(), archetypes: m[4].trim() }));

function directionRows(observationIndex) {
  const rows = [...read('shared/design-intelligence/directions-index.md').matchAll(/^\| ([^|]+) \| `([^`]+)` \|([^|]+)\|([^|]+)\|([^|]+)\|$/gm)]
    .map((m) => ({ name: m[1].trim(), family: m[2], solves: m[3].trim(), archetypes: m[4].trim(), wrongFor: m[5].trim() }));
  return rows.map((row) => {
    const family = read(`shared/design-intelligence/${row.family}`);
    const marker = `## ${row.name}`;
    const start = family.indexOf(marker);
    const section = start === -1 ? '' : family.slice(start, family.indexOf('\n## ', start + marker.length) === -1 ? undefined : family.indexOf('\n## ', start + marker.length));
    const precedent = unique([...section.matchAll(/\*\*Precedent(?: depth)?:\*\*([\s\S]*?)(?:\n\n|$)/gi)].flatMap((match) => ids(match[1])));
    const failure = (section.match(/\*\*Fails when:\*\*([\s\S]*?)(?:\n\n|$)/i) ?? [])[1]?.trim() ?? 'not separately recorded';
    return { type: 'direction', name: row.name, family: row.family, currentPrecedentCount: precedent.length, ...evidenceStats(precedent, observationIndex), quality: precedent.length >= 10 ? 'mature' : precedent.length >= 5 ? 'narrow' : 'thin', contextCoverage: row.archetypes, mobileCoverage: /mobile|responsive|phone/i.test(section) ? 'explicit' : 'not explicit', desktopCoverage: /desktop|viewport|wide|first viewport/i.test(section) ? 'explicit' : 'not explicit', productInteriorCoverage: /dashboard|tool|workflow|app|operational|product|docs|data/i.test(section) ? 'possible; inspect IDs' : 'not explicit', goodExamples: precedent.join(', ') || 'none recorded', counterexamples: failure, missingEvidence: precedent.length < 5 ? 'Add item-specific product interiors and responsive observations.' : precedent.length < 10 ? 'Add more contexts, mobile/desktop evidence, and counterexamples.' : 'Review transfer conditions against current products.', targetDepth: precedent.length >= 10 ? '10–20' : '5–10 minimum' };
  });
}

function compositionRows(observationIndex) {
  const rows = tableRows(read('shared/design-intelligence/compositions-index.md'));
  return rows.map((row) => {
    const family = read(`shared/design-intelligence/${row.family}`);
    const marker = `## ${row.name}`;
    const start = family.indexOf(marker);
    const end = start === -1 ? -1 : family.indexOf('\n## ', start + marker.length);
    const section = start === -1 ? '' : family.slice(start, end === -1 ? undefined : end);
    const precedent = ids((section.match(/\| Precedent \|([^\n]+)/i) ?? [])[1] ?? '');
    const responsive = (section.match(/\| Responsive \|([^\n]+)/i) ?? [])[1] ?? ((section.match(/\| Viewport \|([^\n]+)/i) ?? [])[1] ?? 'not separately recorded');
    const failure = (section.match(/\| Fails when \|([^\n]+)/i) ?? [])[1] ?? 'not separately recorded';
    return { type: 'composition', name: row.name, family: row.family, currentPrecedentCount: precedent.length, ...evidenceStats(precedent, observationIndex), quality: precedent.length >= 10 ? 'mature' : precedent.length >= 5 ? 'narrow' : precedent.length ? 'thin' : 'no direct precedent', contextCoverage: row.archetypes, mobileCoverage: /phone|mobile|tablet|responsive|narrow/i.test(responsive + section) ? 'explicit' : 'not explicit', desktopCoverage: /desktop|wide|viewport|first viewport/i.test(section) ? 'explicit' : 'not explicit', productInteriorCoverage: /dashboard|tool|workflow|app|operational|product|docs|data/i.test(section) ? 'possible; inspect IDs' : 'not explicit', goodExamples: precedent.join(', ') || 'none recorded', counterexamples: failure.trim(), missingEvidence: precedent.length < 5 ? 'Add item-specific product interiors, dense/sparse states, and responsive evidence.' : precedent.length < 10 ? 'Add more contexts and counterexamples.' : 'Review transfer conditions against current products.', targetDepth: precedent.length >= 10 ? '10–20' : '5–10 minimum' };
  });
}

function simpleRows(file, type, targetDepth) {
  const text = read(`shared/design-intelligence/${file}`);
  const headings = [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim()).filter((name) => !/how to use|near-duplicates/i.test(name));
  return headings.map((name) => ({ type, name, family: file, currentPrecedentCount: 0, uniqueProducts: 0, uniqueProductSurfaces: 0, quality: 'not item-addressable', contextCoverage: 'documented in source', mobileCoverage: /mobile|responsive|rtl/i.test(text) ? 'module-level only' : 'not explicit', desktopCoverage: /desktop|viewport|wide/i.test(text) ? 'module-level only' : 'not explicit', productInteriorCoverage: /dashboard|tool|workflow|app|operational|product|docs|data/i.test(text) ? 'module-level only' : 'not explicit', goodExamples: 'none item-addressed', counterexamples: 'not item-addressed', missingEvidence: 'Separate real-product observations are not attached to this item.', targetDepth }));
}

function motionRows() {
  const text = read('shared/design-intelligence/motion-languages.md');
  return [...text.matchAll(/^\| ([^|]+) \|([^|]+) \|([^|]+) \|([^|]+) \|([^|]+) \|$/gm)]
    .map((m) => m[1].trim()).filter((name) => !/Language|---/.test(name))
    .map((name) => ({ type: 'motion', name, family: 'motion-languages.md', currentPrecedentCount: 0, uniqueProducts: 0, uniqueProductSurfaces: 0, quality: 'not item-addressable', contextCoverage: 'documented in source', mobileCoverage: 'module-level only', desktopCoverage: 'module-level only', productInteriorCoverage: 'not item-addressed', goodExamples: 'platform guidance is module-level', counterexamples: 'not item-addressed', missingEvidence: 'Attach event-specific product observations and rendered behavior.', targetDepth: '5–10 narrow precedents' }));
}

function precedentRows(observationIndex) {
  return readdirSync(join(ROOT, 'shared/precedent')).filter((f) => f.endsWith('.md')).map((file) => {
    const text = read(`shared/precedent/${file}`);
    const entries = [...text.matchAll(/^`([A-Za-z0-9 ]+)`/gm), ...text.matchAll(/^## `([^`]+)`/gm)].map((m) => m[1].trim());
    const cited = unique(entries.flatMap((entry) => entry.split(/\s+/)));
    return { type: 'precedent module', name: basename(file, '.md'), family: 'shared/precedent', currentPrecedentCount: entries.length, ...evidenceStats(cited, observationIndex), quality: entries.length >= 10 ? 'mature module' : entries.length >= 5 ? 'narrow module' : 'thin module', contextCoverage: 'entry-specific; inspect file', mobileCoverage: /mobile|phone|touch/i.test(text) ? 'present' : 'not explicit', desktopCoverage: /desktop|wide|viewport/i.test(text) ? 'present' : 'not explicit', productInteriorCoverage: /dashboard|tool|workflow|app|operational|product|docs|data/i.test(text) ? 'present or possible' : 'not explicit', goodExamples: cited.join(', '), counterexamples: /does not transfer|copying blindly fails|fails/i.test(text) ? 'present' : 'missing', missingEvidence: entries.length < 10 ? 'Add meaningful product surfaces without padding.' : 'Audit regional, mobile, and interior-product balance.', targetDepth: entries.length >= 10 ? '10–20 useful entries' : '5–10 minimum' };
  });
}

function buildReport() {
  const observations = readdirSync(join(ROOT, 'research/observations')).filter((f) => f.endsWith('.md') && f !== 'README.md').map((f) => read(`research/observations/${f}`));
  const observationCount = observations.reduce((n, text) => n + (text.match(/^- [A-Za-z]+\d+ /gm) ?? []).length, 0);
  const observationIndex = new Map();
  for (const text of observations) {
    const headings = [...text.matchAll(/^## (.+)$/gm)];
    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i][1].trim();
      const match = heading.match(/^(.+?) — (.+?) \((https?:\/\/[^)]+)\) — .*?(\d{4}-\d{2}-\d{2})(?:.*)$/);
      if (!match) continue;
      const section = text.slice(headings[i].index, i + 1 < headings.length ? headings[i + 1].index : undefined);
      for (const id of section.matchAll(/^- ([A-Za-z]+\d+) /gm)) {
        observationIndex.set(id[1], { product: match[1], surface: match[2], url: match[3], observedAt: match[4] });
      }
    }
  }
  const surfaceCount = observationIndex.size ? unique([...observationIndex.values()].map((record) => `${record.product} — ${record.surface}`)).length : observations.reduce((n, text) => n + (text.match(/^## /gm) ?? []).length, 0);
  const uniqueProductCount = unique([...observationIndex.values()].map((record) => record.product)).length;
  const rows = [...directionRows(observationIndex), ...compositionRows(observationIndex), ...simpleRows('palettes.md', 'palette family', '5–10 narrow precedents'), ...simpleRows('typography.md', 'typography strategy', '5–10 narrow precedents'), ...motionRows(), ...precedentRows(observationIndex)];
  const below = rows.filter((row) => row.currentPrecedentCount < (row.type === 'precedent module' ? 5 : 5));
  const avg = rows.reduce((sum, row) => sum + row.currentPrecedentCount, 0) / rows.length;
  const columns = ['type', 'name', 'currentPrecedentCount', 'uniqueProducts', 'uniqueProductSurfaces', 'quality', 'contextCoverage', 'mobileCoverage', 'desktopCoverage', 'productInteriorCoverage', 'goodExamples', 'counterexamples', 'missingEvidence', 'targetDepth'];
  const escape = (value) => String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
  const lines = [
    '# Coverage Report — Design Intelligence and Precedent', '',
    `Generated from local source on ${new Date().toISOString().slice(0, 10)} by scripts/audit-depth.mjs.`,
    '',
    'This report is intentionally conservative. Counts are observation IDs directly attached to an item or module. A module-level count is not silently treated as item-level coverage. “Not item-addressable” means the source needs a research pass before the item can claim depth.', '',
    `- Observations: **${observationCount}** across **${surfaceCount}** public product/surfaces.`,
    `- Unique products: **${uniqueProductCount}**; unique product/surface pairs: **${surfaceCount}**.`,
    `- Audited rows: **${rows.length}** (${rows.filter((r) => r.type === 'direction').length} directions, ${rows.filter((r) => r.type === 'composition').length} compositions, ${rows.filter((r) => r.type === 'palette family').length} palette families, ${rows.filter((r) => r.type === 'typography strategy').length} typography strategies, ${rows.filter((r) => r.type === 'motion').length} motion languages, ${rows.filter((r) => r.type === 'precedent module').length} precedent modules).`,
    `- Mean attached count across rows: **${avg.toFixed(1)}**; this is not a quality score.`,
    `- Rows below the 5-example floor or without item-addressable evidence: **${below.length}**.`, '',
    '## Interpretation', '',
    '- Mature major concepts target 10–20 useful precedents; narrow concepts target 5–10; rare patterns may remain smaller when the report says why.',
    `- Current strengths are the dated observation log and ${rows.filter((r) => r.type === 'precedent module').length} teaching-oriented precedent modules. The principal weakness is item-level attachment: several direction, palette, typography, and motion entries have module guidance but no separately counted real products.`,
    '- Research priority is product interiors, mobile states, dense operational surfaces, empty/error/loading behavior, and counterexamples—not more marketing name-drops.', '',
    '## Item audit', '',
    `| ${columns.join(' | ')} |`,
    `|${columns.map(() => '---').join('|')}|`,
    ...rows.map((row) => `| ${columns.map((column) => escape(row[column])).join(' | ')} |`), '',
    '## Honest next pass', '',
    '1. Add dated observations with URL, viewport, method, auth/public status, region, interaction, and state metadata.',
    '2. Attach observation IDs to the specific direction, composition, palette, type, or motion entry they teach; keep observation and interpretation separate.',
    '3. Add at least one counterexample and one responsive or state note before calling a major entry mature.',
    '4. Re-run this report and inspect the rows below target; do not fill the quota with names that teach no transfer.', '',
  ];
  return { rows, markdown: `${lines.join('\n')}\n`, summary: { observationCount, surfaceCount, uniqueProductCount, uniqueProductSurfaceCount: surfaceCount, rowCount: rows.length, meanAttachedCount: Number(avg.toFixed(1)), belowTarget: below.length } };
}

const args = process.argv.slice(2);
if (args.includes('--help')) {
  process.stdout.write(HELP);
} else {
  const report = buildReport();
  if (args.includes('--json')) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    const index = args.indexOf('--write');
    if (index !== -1) {
      const path = args[index + 1];
      if (!path) { process.stderr.write('--write needs a path\n'); process.exitCode = 2; }
      else writeFileSync(join(ROOT, path), report.markdown);
    }
    process.stdout.write(report.markdown);
  }
}
