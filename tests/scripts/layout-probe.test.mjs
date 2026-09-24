// Unit tests for the pure analyzers in shared/tools/layout-probe.mjs (no browser needed).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  analyzeOverflow, analyzeCollisions, analyzeViewportUse, analyzeChrome, analyzeTargets, analyzeFocal,
  parseSizes, parseArgs, UsageError,
} from '../../shared/tools/layout-probe.mjs';

function snapshot(elements, { width = 400, height = 800, scrollWidth = width } = {}) {
  return {
    url: 'fixture://',
    viewport: { width, height },
    document: { scrollWidth, scrollHeight: height, clientWidth: width, dir: 'ltr' },
    rootBackground: { body: 'color', html: 'color' },
    elements: elements.map((e, i) => ({
      i, parent: -1, tag: 'div', path: `div:nth-of-type(${i + 1})`, text: '', hasText: false, interactive: false,
      media: false, position: 'static', fontSize: 16, fontWeight: 400, clipsX: false, scrollsX: false, scrollsY: false,
      background: 'none', ...e,
    })),
  };
}

test('analyzeOverflow reports the outermost escaping element, not its children', () => {
  const s = snapshot([
    { x: 0, y: 0, w: 400, h: 100 },
    { parent: 0, x: 0, y: 0, w: 640, h: 40, hasText: true, text: 'wide', path: 'div.wide' },
    { parent: 1, x: 0, y: 0, w: 640, h: 20, hasText: true, text: 'inner', path: 'div.wide > span' },
  ], { scrollWidth: 640 });
  const r = analyzeOverflow(s);
  assert.equal(r.hasPageOverflow, true);
  assert.equal(r.pageOverflowPx, 240);
  assert.deepEqual(r.culprits.map((c) => c.path), ['div.wide']);
  assert.equal(r.culprits[0].overBy, 240);
});

test('analyzeOverflow ignores elements inside a clipping ancestor', () => {
  const s = snapshot([
    { x: 0, y: 0, w: 400, h: 100, clipsX: true },
    { parent: 0, x: 0, y: 0, w: 900, h: 40, hasText: true },
  ]);
  const r = analyzeOverflow(s);
  assert.equal(r.hasPageOverflow, false);
  assert.equal(r.culprits.length, 0);
});

test('analyzeCollisions finds overlapping siblings and skips nesting and labels', () => {
  const s = snapshot([
    { x: 0, y: 0, w: 300, h: 40, hasText: true, text: 'Heading', path: 'h1' },
    { x: 10, y: 5, w: 150, h: 30, hasText: true, text: 'Badge', path: 'span.promo' },
    { x: 0, y: 100, w: 200, h: 40, hasText: true, text: 'Parent' },
    { parent: 2, x: 0, y: 100, w: 100, h: 40, hasText: true, text: 'Child' },
    { x: 0, y: 200, w: 200, h: 40, tag: 'label', interactive: true, hasText: true, text: 'Name' },
    { x: 0, y: 200, w: 200, h: 40, tag: 'input', interactive: true },
  ]);
  const r = analyzeCollisions(s);
  assert.equal(r.count, 1);
  assert.equal(r.collisions[0].a.path, 'h1');
  assert.equal(r.collisions[0].b.path, 'span.promo');
  assert.equal(r.collisions[0].ratio, 1);
});

test('analyzeViewportUse measures coverage and environment treatment', () => {
  const sparse = snapshot([
    { x: 140, y: 350, w: 120, h: 100, hasText: true },
  ]);
  const r = analyzeViewportUse(sparse);
  assert.ok(r.contentCoverage < 0.1, `coverage ${r.contentCoverage}`);
  assert.equal(r.environmentTreatment, false);
  assert.ok(r.largestEmptyBandPx >= 336);
  assert.equal(r.contentBox.leftMargin, 140);

  const withEnv = snapshot([
    { x: 0, y: 0, w: 400, h: 800, background: 'image' },
    { parent: 0, x: 140, y: 350, w: 120, h: 100, hasText: true },
  ]);
  assert.equal(analyzeViewportUse(withEnv).environmentTreatment, true);
});

test('analyzeChrome sums full-width fixed and sticky chrome once', () => {
  const s = snapshot([
    { x: 0, y: 0, w: 400, h: 120, position: 'sticky' },
    { parent: 0, x: 0, y: 0, w: 400, h: 60, position: 'sticky' },
    { x: 0, y: 740, w: 400, h: 60, position: 'fixed' },
    { x: 340, y: 700, w: 48, h: 48, position: 'fixed' },
  ]);
  const r = analyzeChrome(s);
  assert.equal(r.horizontalChromePx, 180);
  assert.equal(r.shareOfViewportHeight, 0.23);
  assert.equal(r.elements.length, 3);
});

test('analyzeTargets flags small controls and marks inline links', () => {
  const s = snapshot([
    { tag: 'button', interactive: true, x: 0, y: 0, w: 20, h: 20, path: 'button.icon' },
    { tag: 'button', interactive: true, x: 0, y: 40, w: 120, h: 44 },
    { tag: 'p', hasText: true, x: 0, y: 100, w: 300, h: 60 },
    { parent: 2, tag: 'a', interactive: true, hasText: true, x: 10, y: 100, w: 40, h: 18 },
  ]);
  const r = analyzeTargets(s);
  assert.equal(r.length, 2);
  assert.equal(r[0].path, 'button.icon');
  assert.equal(r[0].inlineLink, false);
  assert.equal(r[1].inlineLink, true);
});

test('analyzeFocal reports type scale ratio and above-fold actions', () => {
  const s = snapshot([
    { tag: 'h1', hasText: true, text: 'Title', fontSize: 48, fontWeight: 700, x: 0, y: 0, w: 300, h: 60 },
    { tag: 'p', hasText: true, text: 'Body', fontSize: 16, x: 0, y: 80, w: 300, h: 40 },
    { tag: 'button', interactive: true, hasText: true, text: 'Go', x: 0, y: 140, w: 120, h: 44 },
  ]);
  const r = analyzeFocal(s);
  assert.equal(r.largestType[0].text, 'Title');
  assert.equal(r.typeScaleRatio, 3);
  assert.equal(r.actionsAboveFold, 1);
});

test('argument helpers validate input', () => {
  assert.deepEqual(parseSizes('1440x900,390x844'), [{ width: 1440, height: 900 }, { width: 390, height: 844 }]);
  assert.throws(() => parseSizes('big'), UsageError);
  assert.deepEqual(parseArgs(['page.html', '--size', '390x844', '--json'], { size: 'string', json: 'boolean' }), {
    flags: { size: '390x844', json: true }, positionals: ['page.html'],
  });
  assert.throws(() => parseArgs(['--nope'], {}), UsageError);
});
