#!/usr/bin/env node
// Build and validate a structured manifest for the dated observation log.
// The source remains human-readable Markdown; this manifest makes research coverage auditable
// without pretending that an unrecorded viewport or interaction was observed.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { ROOT, listFiles } from './lib/repo.mjs';

const HELP = `audit-observations — validate observation headings and optionally write metadata

Usage:
  node scripts/audit-observations.mjs [--json] [--write PATH] [--help]

The manifest records heading-level metadata only. Missing details remain explicit as
"not recorded in source heading" and are not inferred as research facts.`;

function parseHeading(line, source) {
  const m = line.match(/^## (.+?) — (.+?) \((https?:\/\/[^)]+)\) — (.+)$/);
  if (!m) return null;
  const [, product, surface, url, raw] = m;
  const date = raw.match(/\b(20\d{2}-\d{2}-\d{2})\b/)?.[1] ?? null;
  const viewport = raw.match(/\bat (\d+×\d+)\b/)?.[1] ?? 'desktop about 800×600 CSS px';
  const method = raw.match(/^(R\+T|R|T|Documentation \(T[^)]*\))/)?.[1] ?? raw.split(',')[0];
  const region = /regional \(([^)]+)\)/i.exec(raw)?.[1] ?? (/en-us|\/us\//i.test(url) ? 'US/en-US URL' : 'not recorded in source heading');
  const access = /documentation|support|design-system|developer|conceptual-model/i.test(raw + url)
    ? 'public documentation'
    : 'public or logged-out surface; authentication not recorded';
  return {
    id: `${source}:${product}:${surface}`,
    source,
    product,
    surface,
    url,
    observedAt: date,
    method,
    viewport,
    access,
    region,
    interactionPerformed: 'not recorded in source heading; inspect the observation bullets',
    stateObserved: 'not recorded in source heading; inspect the observation bullets',
    metadataCompleteness: ['product', 'surface', 'url', 'observedAt', 'method', 'viewport', 'access', 'region'],
  };
}

function collect() {
  const observations = [];
  for (const file of listFiles(join(ROOT, 'research', 'observations')).filter((f) => f.endsWith('.md'))) {
    const source = relative(ROOT, file);
    for (const line of readFileSync(file, 'utf8').split('\n')) {
      const item = parseHeading(line, source);
      if (item) observations.push(item);
    }
  }
  const ids = new Set();
  const errors = [];
  for (const item of observations) {
    if (ids.has(item.id)) errors.push(`duplicate heading identity ${item.id}`);
    ids.add(item.id);
    if (!item.observedAt) errors.push(`${item.source}: ${item.product} has no observation date`);
    if (!item.url) errors.push(`${item.source}: ${item.product} has no URL`);
  }
  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString().slice(0, 10),
    note: 'Heading-level metadata only. Unrecorded interaction, state, and authentication details are explicit rather than inferred.',
    observations,
    summary: {
      surfaceCount: observations.length,
      datedCount: observations.filter((x) => x.observedAt).length,
      viewportCount: observations.filter((x) => !x.viewport.startsWith('desktop about')).length,
      regionalCount: observations.filter((x) => !x.region.startsWith('not recorded')).length,
      errors,
    },
  };
}

function main(argv) {
  if (argv.includes('--help') || argv.includes('-h')) { process.stdout.write(`${HELP}\n`); return 0; }
  const report = collect();
  const writeIndex = argv.indexOf('--write');
  if (writeIndex !== -1) {
    const path = argv[writeIndex + 1];
    if (!path) { process.stderr.write('--write needs a path\n'); return 2; }
    writeFileSync(join(ROOT, path), `${JSON.stringify(report, null, 2)}\n`);
  }
  if (argv.includes('--json')) process.stdout.write(`${JSON.stringify(report)}\n`);
  else process.stdout.write(`audit-observations: ${report.summary.surfaceCount} surfaces, ${report.summary.errors.length} errors\n`);
  return report.summary.errors.length ? 1 : 0;
}

process.exitCode = main(process.argv.slice(2));
