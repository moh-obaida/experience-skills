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
  assert.match(text, /do not read it\s+"just in case\."/i);
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

// --- Extreme-scale hardening pass (v0.6.1 hardening) ---

test('global-vs-local truth and the optional kernel/domain scaling are covered', () => {
  const text = read(SOURCE);
  assert.match(text, /Global truth versus local truth/);
  assert.match(text, /product kernel[\s\S]*domain brief/);
  assert.match(text, /is adaptive, not mandatory/, 'the kernel/domain split must be explicitly optional, not required ceremony');
});

test('targeted retrieval covers base-rule-plus-modifiers, source silence, and specified/implied/inferred', () => {
  const text = read(SOURCE);
  assert.match(text, /## Targeted retrieval/);
  assert.match(text, /base rule together with its exceptions, refinements, and any later amendment/);
  assert.match(text, /mark it open or unspecified/);
  assert.match(text, /what the source\s+states outright, what it implies but/);
});

test('the requirement map guards its own scalability and distinguishes source stability', () => {
  const text = read(SOURCE);
  assert.match(text, /Map decisions, not prose/);
  assert.match(text, /the compression\s+has failed/);
  assert.match(text, /evolving working notes/);
});

test('conflict locality and three-tier invalidation are distinguished from binary valid/invalid', () => {
  const text = read(SOURCE);
  assert.match(text, /is local to what it affects/);
  assert.match(text, /confirmed still valid/);
  assert.match(text, /potentially stale/);
  assert.match(text, /definitely invalidated/);
});

test('specialist handoffs guard size, source requests, and single shared product truth', () => {
  const text = read(SOURCE);
  assert.match(text, /has not compressed anything/, 'missing the 40k-source/30k-handoff anti-pattern');
  assert.match(text, /does not guess, and it does not request the whole corpus/);
  assert.match(text, /one product truth that specialists interpret/);
  assert.match(text, /never by which\s+specialist ran first/);
});

test('state and role explosion control, and nested exceptions, are covered', () => {
  const text = read(SOURCE);
  assert.match(text, /A large state space needs focus, not enumeration/);
  assert.match(text, /a\s+large role system/);
  assert.match(text, /exception to that\s+exception/);
});

test('screenshots as locked source evidence, and spec-vs-code resolution, are covered', () => {
  const text = read(SOURCE);
  assert.match(text, /A screenshot or\s+design file the task says to preserve/);
  assert.match(text, /task intent decides which one governs/);
});

test('preemptive high-risk checkpoints and incremental, honest verification are covered', () => {
  const text = read(SOURCE);
  assert.match(text, /Re-open the exact source before, not just after/);
  assert.match(text, /verify each domain.s high-risk source truth as it finishes/);
  assert.match(text, /indexed \(known to\s+exist\), inspected \(actually read\), and verified/);
});

test('the extreme multi-domain fixture exists, stays small on expected skills, and covers a fresh domain', () => {
  const routing = JSON.parse(read('tests/evals/routing.json'));
  const entry = routing.scenarios.find((s) => s.file === 'tests/scenarios/extreme-multi-domain-spec.md');
  assert.ok(entry, 'extreme-multi-domain-spec.md is not registered in routing.json scenarios');
  assert.ok(entry.expected.length <= 3, 'a 6-domain spec should still route to a small specialist set');
  const text = read(entry.file);
  assert.match(text, /onboarding, travel booking, expense submission, approvals\/disputes, company\s*\nadmin, notifications/);
  assert.doesNotMatch(text, /worker|marketplace/i, 'should be a distinct domain from the existing marketplace scenarios, not a reskin');
});
