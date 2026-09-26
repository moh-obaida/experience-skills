import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { extract } from '../../skills/anti-ai-slop/scripts/extract-identity.mjs';

const ROOT = join(import.meta.dirname, '..', '..');
const SCRIPT = join(ROOT, 'skills', 'anti-ai-slop', 'scripts', 'extract-identity.mjs');
const SRC = join(ROOT, 'tests', 'fixtures', 'source');
const STUDIO = join(ROOT, 'tests', 'fixtures', 'pages', 'generated-studio.html');

test('extract-identity finds generated defaults and utility stacks in the slop fixture', () => {
  const r = extract([join(SRC, 'slop.tsx')]);
  assert.ok(r.defaultCounts['generated-gradient-pair'] >= 1);
  assert.ok(r.stacks.length >= 1);
  assert.ok(r.stacks[0].classes.includes('backdrop-blur-xl'));
});

test('extract-identity keeps the owner identity visible in the census', () => {
  const r = extract([STUDIO]);
  const colors = r.census.color.map((c) => c.value);
  assert.ok(colors.includes('#B4532A'), 'terracotta must appear in the census');
  assert.ok(r.defaultCounts['tailwind-indigo-violet'] >= 3);
  assert.ok(r.defaultCounts['generic-cta-pair'] >= 1);
  assert.ok(r.defaultCounts['generated-font'] >= 1);
  const fonts = r.census.font.map((f) => f.value);
  assert.ok(fonts.includes('Inter') && fonts.includes('Georgia'), JSON.stringify(fonts));
});

test('extract-identity reports nothing to repair in plain CSS', () => {
  const r = extract([join(SRC, 'plain.css')]);
  assert.equal(r.defaults.length, 0);
  assert.equal(r.stacks.length, 0);
});

test('extract-identity CLI follows the exit code contract', () => {
  assert.equal(spawnSync(process.execPath, [SCRIPT, STUDIO]).status, 1);
  assert.equal(spawnSync(process.execPath, [SCRIPT, join(SRC, 'plain.css')]).status, 0);
  assert.equal(spawnSync(process.execPath, [SCRIPT]).status, 2);
  assert.equal(spawnSync(process.execPath, [SCRIPT, STUDIO, '--limit', '0']).status, 2);
  const help = spawnSync(process.execPath, [SCRIPT, '--help'], { encoding: 'utf8' });
  assert.equal(help.status, 0);
  assert.match(help.stdout, /never a verdict/);
  const json = spawnSync(process.execPath, [SCRIPT, STUDIO, '--json'], { encoding: 'utf8' });
  assert.ok(JSON.parse(json.stdout).census.radius.length > 0);
});
