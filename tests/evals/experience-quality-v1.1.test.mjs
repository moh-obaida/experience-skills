import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadCatalog } from '../../scripts/lib/repo.mjs';

const benchmark = JSON.parse(readFileSync(join(ROOT, 'tests/evals/experience-quality-v1.1.json'), 'utf8'));

test('quality benchmark covers all seven defect areas and seven positive controls', () => {
  assert.equal(benchmark.version, '1.1.0');
  assert.match(benchmark.provenance, /Invented, sanitized/);
  assert.match(benchmark.provenance, /not observations or measurements of the motivating private product/i);
  assert.match(benchmark.evaluationNote, /not measured agent results/);
  const counts = { visual: 6, necessity: 6, composition: 5, microcopy: 5, state: 5, crossRoute: 4, acceptance: 5 };
  for (const [category, count] of Object.entries(counts)) {
    assert.equal(benchmark.categories[category].length, count, `${category} benchmark coverage`);
  }
  assert.equal(benchmark.positiveControls.length, 7);

  const cases = [...Object.values(benchmark.categories).flat(), ...benchmark.positiveControls];
  assert.equal(cases.length, 43);
  assert.equal(new Set(cases.map((item) => item.id)).size, cases.length, 'case IDs must be unique');
  for (const item of cases) {
    assert.ok(item.condition.length > 20, `${item.id} needs a reproducible condition`);
    assert.ok(item.expected.length, `${item.id} needs an expected outcome`);
    assert.ok(item.mustNotReport.length, `${item.id} needs a false-positive guard`);
    assert.ok(existsSync(join(ROOT, item.fixture)), `${item.id} fixture missing: ${item.fixture}`);
  }
});

test('new specialist routing is selective and each specialist has a benchmark route', () => {
  const routing = JSON.parse(readFileSync(join(ROOT, 'tests/evals/routing.json'), 'utf8'));
  const specialists = [
    'visual-coherence-audit', 'ui-necessity-audit', 'composition-review', 'microcopy-quality',
    'state-by-state-review', 'cross-route-consistency', 'screenshot-acceptance',
  ];
  for (const skill of specialists) {
    assert.ok(routing.cases.some((route) => route.expected.includes(skill)), `${skill} has a route`);
  }
  const borderCase = routing.cases.find((route) => /one selected tab underline/i.test(route.input));
  assert.ok(borderCase, 'single-defect negative-routing case exists');
  assert.ok(borderCase.notExpected.includes('use-all-skills'));
  assert.ok(borderCase.expected.includes('visual-coherence-audit'));
  for (const skill of specialists.filter((name) => name !== 'visual-coherence-audit')) {
    assert.ok(borderCase.notExpected.includes(skill), `${skill} stays off a one-border task`);
  }
  assert.ok(loadCatalog().skills.some((skill) => skill.name === 'screenshot-acceptance'));
});

test('the agent-evaluation harness has a multi-route quality scenario with real fixture files', () => {
  const routing = JSON.parse(readFileSync(join(ROOT, 'tests/evals/routing.json'), 'utf8'));
  const scenario = routing.scenarios.find((item) => item.anchor === 'experience-quality-v1.1');
  assert.ok(scenario, 'experience-quality scenario is an agent-evaluation anchor');
  assert.ok(scenario.expected.includes('use-all-skills'), 'full product audit enters through the conductor');
  assert.ok(!scenario.expected.includes('experience-architect'), 'the conductor owns the explicit full-pass route');
  const prompt = readFileSync(join(ROOT, scenario.file), 'utf8');
  assert.match(prompt, /Run a full product experience audit across the supplied views and states/i);
  const conductor = readFileSync(join(ROOT, 'skills/use-all-skills/SKILL.md'), 'utf8');
  assert.match(conductor, /mature product audit spans multiple routes or quality areas, even when the user wants findings only/i);
  for (const skill of [
    'visual-coherence-audit', 'ui-necessity-audit', 'composition-review', 'microcopy-quality',
    'state-by-state-review', 'cross-route-consistency', 'screenshot-acceptance',
  ]) assert.ok(scenario.expected.includes(skill), `${skill} is expected for the multi-area audit`);
  for (const path of Object.values(scenario.fixtures)) assert.ok(existsSync(join(ROOT, path)), `${path} missing`);
});

test('each sanitized browser fixture marks its benchmarked failure or positive control', () => {
  const fixtureCases = [...Object.values(benchmark.categories).flat(), ...benchmark.positiveControls];
  for (const file of new Set(fixtureCases.map((item) => item.fixture))) {
    const html = readFileSync(join(ROOT, file), 'utf8');
    assert.match(html, /invented fixture|invented, sanitized/i, file);
    for (const item of fixtureCases.filter((x) => x.fixture === file)) {
      assert.ok(html.includes(`data-benchmark="${item.id}"`), `${file}: case ${item.id} has no fixture marker`);
    }
  }
});
