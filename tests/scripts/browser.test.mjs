// End-to-end tests of the layout scripts against fixture pages in a real browser.
// Skipped automatically when no browser can be launched (Playwright and a Chromium/Chrome needed).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { launch } from '../../shared/tools/layout-probe.mjs';

const ROOT = join(import.meta.dirname, '..', '..');
const PAGES = join(ROOT, 'tests', 'fixtures', 'pages');
const COMPOSITION = join(ROOT, 'skills', 'composition-repair', 'scripts');
const RESPONSIVE = join(ROOT, 'skills', 'responsive-validation', 'scripts');

const { browser, error } = await launch();
const skip = browser ? false : `no browser available: ${error?.split('\n')[0]}`;
if (browser) await browser.close();

function run(script, args) {
  const r = spawnSync(process.execPath, [script, ...args, '--json'], { cwd: ROOT, encoding: 'utf8', timeout: 120000 });
  let json = null;
  try { json = JSON.parse(r.stdout); } catch { /* leave null */ }
  return { status: r.status, json, stderr: r.stderr };
}

test('measure-layout flags the centered card on a blank page', { skip }, () => {
  const r = run(join(COMPOSITION, 'measure-layout.mjs'), [join(PAGES, 'centered-card.html'), '--size', '1440x900']);
  assert.equal(r.status, 1, r.stderr);
  assert.ok(r.json.viewport.contentCoverage < 0.15, `coverage ${r.json.viewport.contentCoverage}`);
  assert.equal(r.json.viewport.environmentTreatment, false);
  assert.ok(r.json.flags.some((f) => f.includes('dead space')));
});

test('measure-layout does not flag the composed page', { skip }, () => {
  const r = run(join(COMPOSITION, 'measure-layout.mjs'), [join(PAGES, 'composed.html'), '--size', '1440x900']);
  assert.equal(r.status, 0, JSON.stringify(r.json?.flags));
  assert.equal(r.json.viewport.environmentTreatment, true);
});

test('detect-overflow finds the fixed-width table at phone width only', { skip }, () => {
  const r = run(join(COMPOSITION, 'detect-overflow.mjs'), [join(PAGES, 'overflow.html'), '--sizes', '1440x900,390x844']);
  assert.equal(r.status, 1);
  const [desktop, phone] = r.json.results;
  assert.equal(desktop.overflow.hasPageOverflow, false);
  assert.equal(phone.overflow.hasPageOverflow, true);
  assert.match(phone.overflow.culprits[0].path, /div\.wide-table/);
  assert.ok(!phone.overflow.culprits.some((c) => c.path.includes('contained')), 'scroll-contained content must not be reported');
});

test('detect-collisions finds the absolutely positioned promo over the heading', { skip }, () => {
  const r = run(join(COMPOSITION, 'detect-collisions.mjs'), [join(PAGES, 'collision.html'), '--size', '390x844']);
  assert.equal(r.status, 1);
  const pair = r.json.collisions[0];
  assert.deepEqual([pair.a.text, pair.b.text].sort(), ['New: export to PDF', 'Quarterly results overview']);
});

test('layout-report runs a matrix with zoom and RTL and reports small targets', { skip }, () => {
  const r = run(join(RESPONSIVE, 'layout-report.mjs'), [join(PAGES, 'collision.html'), '--sizes', '1280x800,390x844', '--zoom', '1,2', '--rtl']);
  assert.equal(r.status, 1);
  assert.equal(r.json.runs.length, 8);
  assert.ok(r.json.runs.some((run) => run.rtl && run.zoom === 2));
  assert.ok(r.json.runs.every((run) => run.smallTargetCount >= 1));
});

test('scripts exit 2 with a clear message for a missing file', () => {
  const r = spawnSync(process.execPath, [join(COMPOSITION, 'measure-layout.mjs'), 'does-not-exist.html'], { encoding: 'utf8' });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /File not found/);
});
