// Validates routing fixtures and scenarios: names are real skills, every skill is exercised,
// scenarios have the required sections and agree with routing.json, and the router's routing
// reference mentions every specialist.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadCatalog } from '../../scripts/lib/repo.mjs';

const fixtures = JSON.parse(readFileSync(join(ROOT, 'tests', 'evals', 'routing.json'), 'utf8'));
const skills = loadCatalog().skills.map((s) => s.name);

test('routing cases reference real skills and do not contradict themselves', () => {
  for (const c of fixtures.cases) {
    assert.ok(c.expected.length > 0, c.input);
    for (const s of [...c.expected, ...c.notExpected]) assert.ok(skills.includes(s), `unknown skill ${s} in "${c.input}"`);
    for (const s of c.expected) assert.ok(!c.notExpected.includes(s), `"${c.input}" both expects and rejects ${s}`);
  }
});

test('every skill is expected by at least one routing case or scenario', () => {
  const used = new Set([...fixtures.cases.flatMap((c) => c.expected), ...fixtures.scenarios.flatMap((s) => s.expected)]);
  for (const s of skills) assert.ok(used.has(s), `${s} is never exercised`);
});

test('scenario files have required sections and list the expected skills', () => {
  const dir = join(ROOT, 'tests', 'scenarios');
  const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
  assert.equal(files.length, fixtures.scenarios.length, 'every scenario file must appear in routing.json');
  for (const entry of fixtures.scenarios) {
    const text = readFileSync(join(ROOT, entry.file), 'utf8');
    for (const section of ['## Scenario', '## Current problem', '## Expected skills', '## Key principles expected', '## Unacceptable recommendations']) {
      assert.ok(text.includes(section), `${entry.file} missing ${section}`);
    }
    const expectedBlock = text.split('## Expected skills')[1].split('\n## ')[0];
    for (const s of entry.expected) assert.ok(expectedBlock.includes(s), `${entry.file} does not list ${s}`);
  }
});

test('the router routing reference covers every specialist', () => {
  const routing = readFileSync(join(ROOT, 'skills', 'experience-architect', 'references', 'diagnosis-and-routing.md'), 'utf8');
  for (const s of skills.filter((n) => n !== 'experience-architect')) assert.ok(routing.includes(s), `diagnosis-and-routing.md does not mention ${s}`);
});
