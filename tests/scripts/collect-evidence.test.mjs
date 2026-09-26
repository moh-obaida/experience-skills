import test from 'node:test';
import assert from 'node:assert/strict';
import { parseArgs, targetUrl } from '../../skills/interface-forensics/scripts/collect-evidence.mjs';

test('collector parses a target, selector, and viewport', () => {
  const result = parseArgs(['page.html', '--selector', '.primary', '--size', '390x844']);
  assert.deepEqual(result.viewport, { width: 390, height: 844 });
  assert.equal(result.selector, '.primary');
});

test('collector rejects missing selector and malformed viewport', () => {
  assert.throws(() => parseArgs(['page.html']), /selector/);
  assert.throws(() => parseArgs(['page.html', '--selector', 'button', '--size', 'wide']), /WIDTHxHEIGHT/);
});

test('collector resolves URLs without changing them', () => {
  assert.equal(targetUrl('https://example.com/page'), 'https://example.com/page');
});
