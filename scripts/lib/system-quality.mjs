// Quality audit of the authored design-system library: the 30 general systems and the niche atlas
// systems. Checks that each entry decides the things the experience-quality skills depend on:
// a stroke and elevation policy with one indicator owner, what appears only in which state,
// product-specific copy, states that cover failure and absence, and a rendered acceptance line.
//
// The labeled-clause checks are structural and honest about what they are: they prove a decision
// was written down, not that it is good. Duplicate clauses across entries are reported because a
// clause that could move between entries unchanged is boilerplate.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './repo.mjs';

export const FAMILIES = ['workspaces', 'services', 'culture', 'learning', 'operations'];

export const CLAUSES = [
  { label: 'Stroke and lift', rows: ['Space and shape', 'Geometry'], min: 8 },
  { label: 'Shown when', rows: ['Components'], min: 8 },
  { label: 'Copy', rows: ['Components', 'States', 'Image, icon, copy', 'States and motion'], min: 6, generalRows: ['Image, icon, copy'] },
  { label: 'Accept', rows: ['Build', 'Failure and imitation', 'Failure/anti-imitation'], min: 8 },
];

function rowsOf(body) {
  const rows = {};
  const aliases = {
    'Components/nav': 'Components',
    'States/motion': 'States',
    'States and motion': 'States',
    'Media/voice': 'Image, icon, copy',
    'Image/icon/copy': 'Image, icon, copy',
  };
  for (const m of body.matchAll(/^\| ([^|]+?) \| (.+) \|$/gm)) {
    const key = m[1].trim();
    if (key === 'Layer' || /^-+$/.test(key)) continue;
    rows[key] = m[2].trim();
    if (aliases[key]) rows[aliases[key]] ??= m[2].trim();
  }
  return rows;
}

function splitSections(text, marker) {
  const out = [];
  let current = null;
  for (const line of text.split('\n')) {
    if (line.startsWith(marker)) { current = { name: line.slice(marker.length).trim(), body: '' }; out.push(current); }
    else if (current) current.body += `${line}\n`;
  }
  return out;
}

/** All authored entries under a repository root: { name, kind, file, rows, body }. */
export function loadEntries(root = ROOT) {
  const dir = join(root, 'shared', 'design-intelligence');
  const entries = [];
  for (const family of FAMILIES) {
    const file = `design-systems-${family}.md`;
    const path = join(dir, file);
    if (!existsSync(path)) continue;
    for (const s of splitSections(readFileSync(path, 'utf8'), '## ')) {
      const rows = rowsOf(s.body);
      if (rows.Composition) entries.push({ name: s.name, kind: 'general', file, rows, body: s.body });
    }
  }
  const index = join(dir, 'niche-atlas-index.md');
  const files = existsSync(index) ? [...readFileSync(index, 'utf8').matchAll(/`(niche-[a-z-]+\.md)`/g)].map((m) => m[1]) : [];
  for (const file of [...new Set(files)]) {
    const path = join(dir, file);
    if (!existsSync(path)) continue;
    const text = readFileSync(path, 'utf8');
    const systems = text.split('\n## Systems')[1]?.split('\n## Confusable')[0] ?? '';
    for (const s of splitSections(systems, '### ')) {
      const rows = rowsOf(s.body);
      if (rows.Composition) entries.push({ name: s.name, kind: 'niche', file, rows, body: s.body });
    }
  }
  return entries;
}

/** Text of a labeled clause ("Label: ... ") within the allowed rows, or null. Ends at the next label or row end. */
export function clauseText(entry, clause) {
  const labels = CLAUSES.map((c) => c.label).join('|');
  const rowNames = entry.kind === 'general' && clause.generalRows ? clause.generalRows : clause.rows;
  for (const name of rowNames) {
    const text = entry.rows[name];
    if (!text) continue;
    const m = text.match(new RegExp(`(?:^|[.;)] |\\s)${clause.label}:\\s*([^]*?)(?=\\s(?:${labels}):|$)`));
    if (m) return m[1].trim();
  }
  // The general systems already carry a copy row; accept its rule when it states one.
  if (clause.label === 'Copy' && entry.kind === 'general') {
    const copy = entry.rows['Image, icon, copy'];
    const m = copy?.match(/\bCopy\b[^.]*\./);
    if (m) return m[0];
  }
  return null;
}

const words = (s) => (s.match(/\S+/g) ?? []).length;

// Prose signals, used to compare libraries that predate the labeled clauses.
const SIGNALS = {
  coherence: (e) => {
    const geo = [e.rows.Geometry, e.rows['Space and shape']].filter(Boolean).join(' ');
    return /border|stroke|hairline|ruled|rule\b|outline|\bline\b|edge/i.test(geo) && /shadow|elevation|flat\b|no shadow|offset|lift|layer|depth|border over/i.test(geo);
  },
  necessity: (e) => /only when|only after|only on|appears (?:when|after|only)|hidden until|shown only|never (?:a |an |show|add|use)|no (?:badge|chip|pill|banner|decorative|filler|card|tile|hero)|instead of|rather than|separate view|not (?:a|on|in) the/i
    .test([e.rows.Components, e.rows.States, e.rows['States and motion'], e.rows.Composition].filter(Boolean).join(' ')),
  states: (e) => {
    const st = [e.rows.States, e.rows['States and motion']].filter(Boolean).join(' ');
    const failure = /error|fail|offline|disconnect|conflict|reject|denied|blocked|stale|timeout|expired|retry|cannot|unavailable|unsaved|cancel|declin|invalid|lock|missing|overdue|sold out|out of stock|permission|degraded|late|not syncing|not found/i.test(st);
    const absence = /empty|waiting|none|zero|no data|first|initial|never|untouched|nothing|new|pending|no results?|no matches?|no availability|not started|not yet|no scans|no rooms|no items|no response|no history|no records|no courses|no seats|no sessions|no answers/i.test(st);
    return failure && absence;
  },
  acceptance: (e) => /\btest|verif|check|inspect|render|captur|audit|measur|screenshot/i.test([e.rows.Build, e.rows['Failure and imitation'], e.rows['Fails when']].filter(Boolean).join(' ')),
};

export function auditEntries(entries) {
  const seen = new Map();
  const results = entries.map((e) => {
    const clauses = {};
    for (const c of CLAUSES) {
      const text = clauseText(e, c);
      clauses[c.label] = text === null ? 'missing' : words(text) < c.min ? 'thin' : 'ok';
      if (text) { const k = text.toLowerCase().replace(/\W+/g, ' ').trim(); (seen.get(k) ?? seen.set(k, []).get(k)).push(e.name); }
    }
    const signals = Object.fromEntries(Object.entries(SIGNALS).map(([k, fn]) => [k, fn(e)]));
    return { name: e.name, kind: e.kind, file: e.file, clauses, signals };
  });
  const duplicates = [...seen.entries()].filter(([, names]) => names.length > 1).map(([text, names]) => ({ text: text.slice(0, 80), entries: names }));
  const summary = { entries: results.length, general: results.filter((r) => r.kind === 'general').length, niche: results.filter((r) => r.kind === 'niche').length };
  for (const c of CLAUSES) summary[c.label] = results.filter((r) => r.clauses[c.label] === 'ok').length;
  for (const k of Object.keys(SIGNALS)) summary[`signal:${k}`] = results.filter((r) => r.signals[k]).length;
  summary.complete = results.filter((r) => CLAUSES.every((c) => r.clauses[c.label] === 'ok')).length;
  return { summary, results, duplicates };
}
