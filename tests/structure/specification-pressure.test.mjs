// Guards the long-spec / specification-pressure protocol: the shared file exists, reaches the
// conductor and review skills through the normal catalog/sync mechanism, and the small pointers
// added to always-loaded files (core-brief, experience-operating-contract, design-system-selector)
// survive future edits.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadCatalog } from '../../scripts/lib/repo.mjs';

const SOURCE = 'shared/evaluation/specification-pressure.md';
const read = (rel) => readFileSync(join(ROOT, rel), 'utf8');

test('specification-pressure.md exists and states its three governing principles', () => {
  const text = read(SOURCE);
  assert.match(text, /Compress for\s+reasoning, re-open for precision/);
  assert.match(text, /Preserve what is decided, expose what is unresolved, design\s+what is open/);
  assert.match(text, /Never a token-count threshold/);
  assert.doesNotMatch(text, /\bTBD\b/, 'literal "TBD" trips the placeholder-language repository audit');
});

test('specification-pressure.md is declared only for the conductor and review skills', () => {
  const catalog = loadCatalog();
  const declaring = catalog.skills.filter((s) => (s.shared ?? []).includes(SOURCE)).map((s) => s.name);
  assert.deepEqual(declaring.sort(), ['critical-review', 'experience-architect', 'use-all-skills']);
});

test('each declaring skill names specification-pressure.md in its own SKILL.md', () => {
  for (const name of ['critical-review', 'experience-architect', 'use-all-skills']) {
    const text = read(join('skills', name, 'SKILL.md'));
    assert.match(text, /specification-pressure\.md/, `${name}/SKILL.md never names specification-pressure.md`);
  }
});

test('a skill that does not declare specification-pressure.md does not vendor it', () => {
  for (const name of ['motion-design', 'empty-state-design', 'responsive-validation']) {
    const vendored = join('skills', name, 'references', '_shared', 'specification-pressure.md');
    assert.throws(() => readFileSync(join(ROOT, vendored)), `${name} should not carry specification-pressure.md`);
  }
});

test('experience-operating-contract.md carries a self-contained specification-pressure row', () => {
  const text = read('shared/evaluation/experience-operating-contract.md');
  assert.match(text, /specification-pressure\.md.*when installed/);
});

test('core-brief.md carries the large-specification bullet (propagates to every skill)', () => {
  const brief = read('shared/philosophy/core-brief.md');
  assert.match(brief, /bigger evidence base, not a bigger checklist/);
  for (const name of loadCatalog().skills.map((s) => s.name)) {
    const skillText = read(join('skills', name, 'SKILL.md'));
    assert.match(skillText, /bigger evidence base, not a bigger checklist/, `${name} is missing the synced core-brief bullet`);
  }
});

test('design-system-selector.md treats a stated direction in the current spec as locked', () => {
  const text = read('shared/design-intelligence/design-system-selector.md');
  assert.match(text, /locked/i);
  assert.match(text, /does not make direction more open/);
});

test('the protocol explicitly names its own opposite case: a narrow request stays narrow', () => {
  const text = read(SOURCE);
  assert.match(text, /## The other extreme: a narrow request stays narrow/);
  assert.match(text, /observe, diagnose, recommend or repair, stop/i);
  assert.match(text, /do not read\s+it "just in case\."/i);
});

test('the conductor and architect state the fast-path exclusion in their own checkpoints', () => {
  const useAll = read('skills/use-all-skills/SKILL.md');
  assert.match(useAll, /narrow request naming one surface or symptom is low pressure/);
  const architect = read('skills/experience-architect/SKILL.md');
  assert.match(architect, /observe, diagnose, recommend or repair, stop/i);
  // The pre-existing v0.6 narrow-scope exclusion must survive this change untouched.
  assert.match(architect, /The problem is already scoped to one specialist/);
});

test('short-review routing cases stay small and are covered by the fixtures', () => {
  const routing = JSON.parse(read('tests/evals/routing.json'));
  const short = routing.cases.filter((c) => /^Review this UI|^Fix this empty state/.test(c.input));
  assert.equal(short.length, 2, 'expected the two short-review regression cases to be present');
  for (const c of short) {
    assert.ok(c.expected.length <= 2, `"${c.input}" should route to a small skill set, got ${c.expected.length}`);
    assert.ok(c.notExpected.includes('use-all-skills'), `"${c.input}" should explicitly reject the full-orchestration conductor`);
  }
});

test('the two-representation architecture (source model vs working model) is named explicitly', () => {
  const text = read(SOURCE);
  assert.match(text, /## Two representations, not one/);
  assert.match(text, /authoritative\s+source model/i);
  assert.match(text, /working product model/i);
});

test('decision dependencies, assumption invalidation, and drift are covered', () => {
  const text = read(SOURCE);
  assert.match(text, /note what depends on it/);
  assert.match(text, /When later information resolves an assumption, replace it/);
  assert.match(text, /also watch for drift/);
});

test('a solvable tradeoff is distinguished from a real contradiction', () => {
  const text = read(SOURCE);
  assert.match(text, /Not every tension is a contradiction/);
});

test('routing.json protects conflict detection, refinement, and design-open-at-scale', () => {
  const routing = JSON.parse(read('tests/evals/routing.json'));
  const inputs = routing.cases.map((c) => c.input);
  assert.ok(inputs.some((i) => /24 hours.*72 hours/.test(i)), 'missing a genuine-conflict routing case');
  assert.ok(inputs.some((i) => /cold-chain/.test(i)), 'missing a refinement-not-duplicate routing case');
  assert.ok(inputs.some((i) => /haven't decided on a visual direction/.test(i)), 'missing a design-open-at-scale routing case');
});
