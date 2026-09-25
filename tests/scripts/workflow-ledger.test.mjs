import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { compare, tagStep } from '../../skills/workflow-compression/scripts/workflow-ledger.mjs';

const ROOT = join(import.meta.dirname, '..', '..');
const FLOWS = join(ROOT, 'tests', 'fixtures', 'flows');
const load = (f) => JSON.parse(readFileSync(join(FLOWS, f), 'utf8'));
const SCRIPT = join(ROOT, 'skills', 'workflow-compression', 'scripts', 'workflow-ledger.mjs');

test('rename flow: counts, friction tags, and dead end', () => {
  const r = compare(load('rename.json'));
  assert.equal(r.before.total, 6);
  assert.equal(r.after.total, 3);
  assert.equal(r.before.counts.navigation, 2);
  assert.equal(r.delta.navigation, -2);
  const codes = r.before.friction.map((f) => f.code);
  assert.deepEqual(codes, ['F4', 'F4', 'F5', 'F9']);
  assert.equal(r.after.friction.length, 0);
  assert.equal(r.after.endsWithNextAction, true);
});

test('transfer flow keeps the preserved safeguard untagged', () => {
  const r = compare(load('transfer.json'));
  const codes = r.before.friction.map((f) => f.code);
  assert.deepEqual(codes, ['F2', 'F1', 'F2', 'F5', 'F9']);
  assert.ok(r.preserved.includes('Review and send'));
  assert.ok(r.preserved.includes('Final review with amount, recipient, fee, timing'));
  assert.equal(r.after.counts.confirmation, 1);
});

test('tagStep handles serial work and expert tax', () => {
  assert.deepEqual(tagStep({ type: 'action', perItem: 30 }), ['F6']);
  assert.deepEqual(tagStep({ type: 'decision', expertRepeat: true }), ['F10']);
  assert.deepEqual(tagStep({ type: 'confirmation', reversible: true, preserve: true }), []);
  assert.deepEqual(tagStep({ type: 'lookup' }), ['F13']);
  assert.deepEqual(tagStep({ type: 'action', mode: true, interrupts: true, hiddenStatus: true, duplicate: true }), ['F11', 'F12', 'F14', 'F15']);
});

test('invalid step types are rejected with exit code 2', () => {
  assert.throws(() => compare({ before: [{ step: 'x', type: 'teleport' }] }), /unknown type/);
  const r = spawnSync(process.execPath, [SCRIPT, 'missing.json'], { encoding: 'utf8' });
  assert.equal(r.status, 2);
});

test('--strict exits 1 when friction remains after', () => {
  const r = spawnSync(process.execPath, [SCRIPT, join(ROOT, 'skills', 'workflow-compression', 'assets', 'workflow-template.json'), '--strict'], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stdout);
});
