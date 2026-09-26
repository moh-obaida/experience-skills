// The Niche Design Atlas: every niche file honors the index contract, systems are structurally
// distinct (fingerprint difference test), color roles are legible, and the checker catches
// near-duplicates rather than trusting authors.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, reporter } from '../../scripts/lib/repo.mjs';
import { loadAtlas, checkNicheAtlas, parseNicheFile, diffCount, contrast, DIMENSIONS, MIN_SYSTEMS, MIN_SIBLING_DIFF } from '../../scripts/lib/niche-atlas.mjs';

const atlas = loadAtlas();

test('the atlas passes its own contract', () => {
  const r = reporter('niche-atlas');
  checkNicheAtlas(r);
  assert.deepEqual(r.errors, []);
});

test('fifteen niche groups, each with at least ten systems and three profiles', () => {
  assert.equal(atlas.niches.length, 15);
  for (const n of atlas.niches) {
    assert.ok(n.exists, n.file);
    assert.ok(n.systems.length >= MIN_SYSTEMS, `${n.file}: ${n.systems.length} systems`);
    assert.ok(n.profiles.length >= 3, `${n.file}: ${n.profiles.length} profiles`);
  }
});

test('siblings differ structurally and no system name repeats', () => {
  const names = new Set();
  for (const n of atlas.niches) {
    for (const s of n.systems) {
      assert.ok(!names.has(s.name), `duplicate system ${s.name}`);
      names.add(s.name);
    }
    for (let i = 0; i < n.systems.length; i++) for (let j = i + 1; j < n.systems.length; j++) {
      assert.ok(diffCount(n.systems[i].fingerprint, n.systems[j].fingerprint) >= MIN_SIBLING_DIFF, `${n.systems[i].name} ~ ${n.systems[j].name}`);
    }
  }
});

test('the checker rejects a near-duplicate, an unknown value, and an illegible action', () => {
  const file = atlas.niches[0].file;
  const text = readFileSync(join(ROOT, 'shared', 'design-intelligence', file), 'utf8');
  const parsed = parseNicheFile(text);
  const [a, b] = parsed.systems;
  const cloned = { ...b.fingerprint };
  for (const d of DIMENSIONS.slice(0, DIMENSIONS.length - 1)) cloned[d] = a.fingerprint[d];
  assert.ok(diffCount(a.fingerprint, cloned) < MIN_SIBLING_DIFF, 'a recolored clone must fail the difference test');
  const bad = text
    .replace(/(\*\*Fingerprint\*\* `density=)\w+/, '$1tiny')
    .replace(/action #[0-9A-F]{6} · on-action #FFFFFF/, 'action #F4F4F4 · on-action #FFFFFF');
  const reparsed = parseNicheFile(bad);
  assert.equal(reparsed.systems[0].fingerprint.density, 'tiny');
  assert.ok(!atlas.vocab.density.has('tiny'));
  const { action, 'on-action': onAction } = reparsed.systems[0].colors;
  assert.equal(action, '#F4F4F4');
  assert.ok(contrast(action, onAction) < 4.5, 'an illegible action pair must be caught');
});

test('the selector and index route niche-first and forbid industry lookups', () => {
  const selector = readFileSync(join(ROOT, 'shared', 'design-intelligence', 'design-system-selector.md'), 'utf8');
  const index = readFileSync(join(ROOT, 'shared', 'design-intelligence', 'niche-atlas-index.md'), 'utf8');
  assert.match(selector, /niche-atlas-index\.md/);
  assert.ok(selector.indexOf('## Niche first') < selector.indexOf('## Three candidates'));
  assert.match(index, /never selects a system by\s+itself/);
  assert.match(index, /## Critique stage/);
});
