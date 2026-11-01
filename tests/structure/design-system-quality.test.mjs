import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadEntries, auditEntries, CLAUSES } from '../../scripts/lib/system-quality.mjs';

const entries = loadEntries();
const report = auditEntries(entries);

test('the full authored system library has product-specific quality decisions', () => {
  assert.equal(report.summary.general, 30);
  assert.equal(report.summary.niche, 151);
  assert.equal(report.summary.entries, 181);
  assert.equal(report.summary.complete, 181);
  for (const clause of CLAUSES) assert.equal(report.summary[clause.label], 181, `${clause.label} coverage`);
  assert.deepEqual(report.duplicates, [], 'clauses must not be copy-paste boilerplate');
  assert.ok(report.summary['signal:states'] < report.summary.entries,
    'state prose coverage stays diagnostic rather than imposing one state quota on every system');
});

test('quality audit reads the alternate rows used by authored system families', () => {
  for (const file of ['design-systems-services.md', 'design-systems-culture.md', 'design-systems-learning.md', 'design-systems-operations.md']) {
    const family = report.results.filter((entry) => entry.file === file);
    assert.equal(family.length, 6, `${file} entry count`);
    for (const entry of family) {
      for (const clause of CLAUSES) assert.equal(entry.clauses[clause.label], 'ok', `${entry.name}: ${clause.label}`);
    }
  }
  const travel = report.results.filter((entry) => entry.file === 'niche-travel.md');
  assert.equal(travel.length, 10);
  assert.ok(travel.every((entry) => CLAUSES.every((clause) => entry.clauses[clause.label] === 'ok')));
});

