// Structural tests: the same checks CI runs, exercised as a test suite.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { validateSkills } from '../../scripts/validate-skills.mjs';
import { validateRepo } from '../../scripts/validate-repo.mjs';
import { checkShared } from '../../scripts/check-shared.mjs';
import { checkLinks } from '../../scripts/check-links.mjs';
import { buildCatalog, renderReadme } from '../../scripts/generate-catalog.mjs';
import { ROOT, CATALOG_PATH, parseFrontmatter, FrontmatterError, skillDirs, readSkill } from '../../scripts/lib/repo.mjs';

const REQUIRED_SKILLS = [
  'experience-architect', 'composition-repair', 'workflow-compression', 'visual-identity',
  'interaction-design', 'state-design', 'motion-design', 'product-friction',
  'responsive-validation', 'empty-state-design', 'anti-slop-ui', 'critical-review',
];

test('all twelve required skills exist', () => {
  assert.deepEqual(skillDirs(), [...REQUIRED_SKILLS].sort());
});

test('skills validate against the spec and repo conventions', () => {
  const r = validateSkills({ quiet: true });
  assert.deepEqual(r.errors, []);
});

test('repository checks pass (files, versions, public safety)', () => {
  const r = validateRepo({ quiet: true });
  assert.deepEqual(r.errors, []);
});

test('vendored shared files are current and skills are self-contained', () => {
  const r = checkShared();
  assert.deepEqual(r.errors, []);
});

test('no broken relative links', () => {
  const r = checkLinks({ quiet: true });
  assert.deepEqual(r.errors, []);
});

test('catalog and README table are generated and current', () => {
  const catalog = buildCatalog();
  assert.equal(readFileSync(CATALOG_PATH, 'utf8'), `${JSON.stringify(catalog, null, 2)}\n`);
  const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
  assert.equal(renderReadme(readme, catalog), readme);
});

test('SKILL.md files stay thin', () => {
  for (const name of skillDirs()) {
    const lines = readSkill(name).text.split('\n').length;
    assert.ok(lines < 300, `${name} has ${lines} lines`);
  }
});

test('frontmatter parser handles the supported subset and rejects the rest', () => {
  const ok = parseFrontmatter('---\nname: a-b\ndescription: "Say \\"hi\\". Use when: x"\nmetadata:\n  version: "0.1.0"\n---\n# Body\n');
  assert.equal(ok.data.name, 'a-b');
  assert.equal(ok.data.description, 'Say "hi". Use when: x');
  assert.equal(ok.data.metadata.version, '0.1.0');
  assert.throws(() => parseFrontmatter('name: x\n'), FrontmatterError);
  assert.throws(() => parseFrontmatter('---\ndescription: Use when: unquoted colon\n---\n'), FrontmatterError);
  assert.throws(() => parseFrontmatter('---\nname: a\nname: b\n---\n'), FrontmatterError);
});
