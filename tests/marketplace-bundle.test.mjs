import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, loadCatalog, parseFrontmatter } from '../scripts/lib/repo.mjs';

const catalog = loadCatalog();
const bundleDir = join(ROOT, 'marketplace', 'bundle');

test('marketplace routing metadata covers the canonical public catalog exactly once', () => {
  const routes = JSON.parse(readFileSync(join(bundleDir, 'routes.json'), 'utf8'));
  assert.equal(new Set(Object.keys(routes)).size, catalog.skills.length);
  assert.deepEqual(Object.keys(routes).sort(), catalog.skills.map((skill) => skill.name).sort());
  for (const skill of catalog.skills) {
    assert.ok(routes[skill.name].routeWhen, `${skill.name} has a route condition`);
    assert.ok(routes[skill.name].examples.length, `${skill.name} has representative requests`);
  }
});

test('master entry point uses the collection identity and progressive specialist routing', () => {
  const master = readFileSync(join(bundleDir, 'master.md'), 'utf8');
  const { data, body } = parseFrontmatter(master, 'marketplace/bundle/master.md');
  assert.equal(data.name, 'experience-skills');
  assert.equal(data.license, 'MIT');
  assert.equal(data.metadata['display-name'], 'Experience Skills');
  assert.match(body, /explicitly named specialist wins/i);
  assert.match(body, /modules\/experience-architect\/METHOD\.md/);
  assert.match(body, /modules\/use-all-skills\/METHOD\.md/);
  assert.match(body, /Do not load the design\s+intelligence library wholesale/);
});

test('review-only anti-slop and end-to-end anti-ai-slop routes remain distinct', () => {
  const routes = JSON.parse(readFileSync(join(bundleDir, 'routes.json'), 'utf8'));
  assert.match(routes['anti-slop-ui'].routeWhen, /evaluation or quality gate/i);
  assert.match(routes['anti-ai-slop'].routeWhen, /source-level repair/i);
  assert.notEqual(routes['anti-slop-ui'].routeWhen, routes['anti-ai-slop'].routeWhen);
});
