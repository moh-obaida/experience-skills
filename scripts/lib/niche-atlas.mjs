// Parse and check the Niche Design Atlas (shared/design-intelligence/niche-*.md).
// Enforces the index's contract: profiles with every reality field, at least ten systems per
// niche, a vocabulary-valid fingerprint, every layer row, legible color roles, and the
// difference test (siblings differ in >= 4 of 11 dimensions; no cross-niche near-duplicates).

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from './repo.mjs';

const DI = join(ROOT, 'shared', 'design-intelligence');
export const INDEX = join(DI, 'niche-atlas-index.md');
export const DIMENSIONS = ['density', 'composition', 'surface', 'type', 'nav', 'accent', 'motion', 'imagery', 'radius', 'data', 'tone'];
export const LAYERS = ['Composition', 'Type', 'Color', 'Space and shape', 'Icons and imagery', 'Components', 'States', 'Responsive', 'Motion', 'Accessibility', 'Build', 'AI mutation', 'Fails when'];
export const PROFILE_FIELDS = ['Reality', 'Jobs', 'Density', 'Surfaces', 'States', 'Interaction', 'Trust', 'Generated-UI failures'];
export const ROLES = ['canvas', 'surface', 'ink', 'muted', 'line', 'action', 'on-action'];
export const MIN_SYSTEMS = 10;
export const MIN_SIBLING_DIFF = 4;
export const MIN_CROSS_DIFF = 2;

const read = (p) => readFileSync(p, 'utf8');

/** Split markdown on a heading level, returning [{ title, body }]. */
function sections(text, level) {
  const marker = `${'#'.repeat(level)} `;
  const out = [];
  let current = null;
  for (const line of text.split('\n')) {
    if (line.startsWith(marker)) {
      current = { title: line.slice(marker.length).trim(), body: '' };
      out.push(current);
    } else if (current) current.body += `${line}\n`;
  }
  return out;
}

export function parseVocabulary(indexText) {
  const block = indexText.split('## Fingerprint vocabulary')[1]?.split('\n## ')[0] ?? '';
  const vocab = {};
  for (const m of block.matchAll(/^\| (\w+) \| ([^|]+) \|$/gm)) {
    if (m[1] === 'Dimension') continue;
    vocab[m[1]] = m[2].trim() === 'free text' ? null : new Set(m[2].split(',').map((v) => v.trim()));
  }
  return vocab;
}

export function parseTaxonomy(indexText) {
  const block = indexText.split('## Taxonomy')[1]?.split('\n## ')[0] ?? '';
  return [...block.matchAll(/^\| ([^|]+) \| `(niche-[a-z-]+\.md)` \| ([^|]+) \|$/gm)].map((m) => ({ group: m[1].trim(), file: m[2], profiles: m[3].trim() }));
}

export function parseFingerprint(raw) {
  const fp = {};
  for (const part of raw.split(';')) {
    const [k, v] = part.split('=').map((s) => s?.trim());
    if (k) fp[k] = v;
  }
  return fp;
}

export function parseNicheFile(text) {
  const top = sections(text, 2);
  const realities = top.find((s) => s.title === 'Product realities');
  const systemsBlock = top.find((s) => s.title === 'Systems');
  const profiles = realities ? sections(realities.body, 3).map((p) => ({
    name: p.title,
    fields: Object.fromEntries([...p.body.matchAll(/^- \*\*([^:*]+):\*\* (.+)$/gm)].map((m) => [m[1].trim(), m[2].trim()])),
  })) : [];
  const systems = systemsBlock ? sections(systemsBlock.body, 3).map((s) => {
    const rows = Object.fromEntries([...s.body.matchAll(/^\| ([^|]+?) \| (.+) \|$/gm)].map((m) => [m[1].trim(), m[2].trim()]));
    const fpRaw = s.body.match(/\*\*Fingerprint\*\* `([^`]+)`/)?.[1];
    const colors = {};
    for (const m of (rows.Color ?? '').matchAll(/(?<![\w-])(canvas|surface|ink|muted|line|action|on-action) `?(#[0-9A-Fa-f]{6})/g)) colors[m[1]] = m[2].toUpperCase();
    return { name: s.title, body: s.body, rows, fingerprint: fpRaw ? parseFingerprint(fpRaw) : null, colors, fit: /\*\*Fit:\*\*/.test(s.body), thesis: /\*\*Thesis\.\*\*/.test(s.body) };
  }) : [];
  return { profiles, systems };
}

function luminance(hex) {
  const rgb = hex.slice(1).match(/../g).map((x) => parseInt(x, 16) / 255).map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}
export function contrast(a, b) {
  const x = luminance(a); const y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

export const diffCount = (a, b) => DIMENSIONS.filter((d) => a[d] !== b[d]).length;

export function loadAtlas() {
  if (!existsSync(INDEX)) return null;
  const indexText = read(INDEX);
  const vocab = parseVocabulary(indexText);
  const taxonomy = parseTaxonomy(indexText);
  const niches = taxonomy.map((t) => {
    const path = join(DI, t.file);
    return { ...t, exists: existsSync(path), ...(existsSync(path) ? parseNicheFile(read(path)) : { profiles: [], systems: [] }) };
  });
  return { vocab, taxonomy, niches };
}

/** Report atlas contract violations through a repo reporter. */
export function checkNicheAtlas(r) {
  const atlas = loadAtlas();
  if (!atlas) return;
  const { vocab, niches } = atlas;
  for (const d of DIMENSIONS) if (!(d in vocab)) r.error(`niche-atlas-index.md: fingerprint vocabulary lacks ${d}`);
  if (niches.length < 15) r.error(`niche-atlas-index.md: taxonomy lists ${niches.length} groups (expected at least 15)`);
  const all = [];
  const names = new Map();
  for (const n of niches) {
    const where = `shared/design-intelligence/${n.file}`;
    if (!n.exists) { r.error(`${where}: listed in the niche atlas index but missing`); continue; }
    if (n.profiles.length < 3) r.error(`${where}: needs at least three niche profiles (found ${n.profiles.length})`);
    for (const p of n.profiles) for (const f of PROFILE_FIELDS) if (!p.fields[f]) r.error(`${where}: profile "${p.name}" lacks ${f}`);
    if (n.systems.length < MIN_SYSTEMS) r.error(`${where}: ${n.systems.length} systems (at least ${MIN_SYSTEMS} required)`);
    for (const s of n.systems) {
      const id = `${where} · ${s.name}`;
      if (names.has(s.name)) r.error(`${id}: system name also used in ${names.get(s.name)}`);
      names.set(s.name, n.file);
      if (!s.thesis || !s.fit) r.error(`${id}: needs **Thesis.** and **Fit:**`);
      for (const layer of LAYERS) if (!s.rows[layer]) r.error(`${id}: missing layer row "${layer}"`);
      for (const label of Object.keys(s.rows)) if (label !== 'Layer' && !/^-+$/.test(label) && !LAYERS.includes(label)) r.error(`${id}: unknown layer row "${label}"`);
      if (!s.fingerprint) { r.error(`${id}: missing **Fingerprint** \`…\``); continue; }
      for (const d of DIMENSIONS) {
        const v = s.fingerprint[d];
        if (!v) r.error(`${id}: fingerprint lacks ${d}`);
        else if (vocab[d] && !vocab[d].has(v)) r.error(`${id}: fingerprint ${d}=${v} is not in the vocabulary`);
      }
      for (const role of ROLES) if (!s.colors[role]) r.error(`${id}: Color row lacks ${role}`);
      if (ROLES.every((role) => s.colors[role])) {
        const c = s.colors;
        const pairs = [['ink', 'canvas'], ['ink', 'surface'], ['muted', 'canvas'], ['muted', 'surface'], ['on-action', 'action']];
        for (const [a, b] of pairs) {
          const ratio = contrast(c[a], c[b]);
          if (ratio < 4.5) r.error(`${id}: ${a} on ${b} is ${ratio.toFixed(2)}:1 (needs 4.5:1)`);
        }
        if (c.line === c.canvas) r.error(`${id}: line equals canvas`);
      }
      all.push({ file: n.file, ...s });
    }
    for (let i = 0; i < n.systems.length; i++) for (let j = i + 1; j < n.systems.length; j++) {
      const a = n.systems[i]; const b = n.systems[j];
      if (!a.fingerprint || !b.fingerprint) continue;
      const diff = diffCount(a.fingerprint, b.fingerprint);
      if (diff < MIN_SIBLING_DIFF) r.error(`${where}: "${a.name}" and "${b.name}" differ in ${diff} fingerprint dimensions (siblings need ${MIN_SIBLING_DIFF}); merge or redesign`);
    }
  }
  for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
    const a = all[i]; const b = all[j];
    if (a.file === b.file || !a.fingerprint || !b.fingerprint) continue;
    const diff = diffCount(a.fingerprint, b.fingerprint);
    if (diff < MIN_CROSS_DIFF) r.error(`niche atlas: "${a.name}" (${a.file}) and "${b.name}" (${b.file}) differ in ${diff} dimensions; adapt one substantially or reuse the other by name`);
  }
}
