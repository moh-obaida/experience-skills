import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { scan as scanSlop } from '../../skills/anti-slop-ui/scripts/scan-slop.mjs';
import { scan as scanMotion } from '../../skills/motion-design/scripts/scan-motion.mjs';

const ROOT = join(import.meta.dirname, '..', '..');
const SRC = join(ROOT, 'tests', 'fixtures', 'source');

test('scan-slop counts template signals in the slop fixture', () => {
  const r = scanSlop([join(SRC, 'slop.tsx')]);
  for (const rule of ['gradient', 'gradient-text', 'glass', 'huge-radius', 'pill', 'eyebrow', 'shadow-stack', 'transition-all', 'generic-copy', 'sparkle-emoji']) {
    assert.ok(r.counts[rule] >= 1, `expected ${rule}`);
  }
  assert.ok(r.counts['generic-copy'] >= 3);
});

test('scan-slop finds nothing in plain CSS', () => {
  const r = scanSlop([join(SRC, 'plain.css')]);
  assert.equal(r.findings.length, 0);
});

test('scan-motion flags layout animation, transition all, long duration, infinite, and missing reduced motion', () => {
  const r = scanMotion([join(SRC, 'motion-bad.css')]);
  const rules = new Set(r.findings.map((f) => f.rule));
  for (const rule of ['layout-property', 'transition-all', 'long-duration', 'infinite', 'no-reduced-motion']) {
    assert.ok(rules.has(rule), `expected ${rule}`);
  }
});

test('scan-motion accepts transform/opacity motion with reduced-motion handling', () => {
  const r = scanMotion([join(SRC, 'motion-good.css')]);
  assert.equal(r.findings.length, 0, JSON.stringify(r.findings));
  assert.equal(r.reducedMotionHandled, true);
});

test('scanner CLIs follow the exit code contract', () => {
  const slop = join(ROOT, 'skills', 'anti-slop-ui', 'scripts', 'scan-slop.mjs');
  assert.equal(spawnSync(process.execPath, [slop, join(SRC, 'slop.tsx')]).status, 1);
  assert.equal(spawnSync(process.execPath, [slop, join(SRC, 'plain.css')]).status, 0);
  assert.equal(spawnSync(process.execPath, [slop]).status, 2);
  assert.equal(spawnSync(process.execPath, [slop, '--help']).status, 0);
});
