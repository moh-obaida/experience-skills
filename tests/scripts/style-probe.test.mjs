import { test } from 'node:test';
import assert from 'node:assert/strict';
import { analyzeBorders, analyzeConnectors } from '../../shared/tools/style-probe.mjs';

const sides = ['top', 'right', 'bottom', 'left'];
function element({
  i, path, parent = -1, tag = 'div', x = 0, y = 0, w = 100, h = 50,
  bw = [0, 0, 0, 0], bs = ['none', 'none', 'none', 'none'],
  bc = ['transparent', 'transparent', 'transparent', 'transparent'],
  ov = ['visible', 'visible'], bg = 'transparent', radius = [0, 0, 0, 0],
} = {}) {
  return {
    i, path, parent, tag, role: null, cls: [], type: '', text: '', label: '', interactive: false,
    x, y, w, h, bw, bs, bc, ov, bg, radius, shadow: '', before: null, after: null,
    outline: { w: 0, style: 'none', offset: 0, color: 'transparent' },
    aria: { selected: null, current: null, pressed: null, expanded: null, invalid: null, disabled: null },
    display: 'block', position: 'static', fs: 14, fw: 400, td: 'none', dir: 'ltr', pad: [0, 0, 0, 0],
  };
}

test('BORDLINE flags partial strokes and edges cut by an overflow ancestor', () => {
  const partial = element({
    i: 0, path: 'main > .panel', bw: [1, 1, 1, 0],
    bs: ['solid', 'solid', 'solid', 'none'], bc: ['rgb(20, 20, 20)', 'rgb(20, 20, 20)', 'rgb(20, 20, 20)', 'transparent'],
  });
  const clipper = element({ i: 1, path: 'main > .clip', w: 100, h: 70, ov: ['hidden', 'hidden'] });
  const child = element({
    i: 2, path: 'main > .clip > .card', parent: 1, x: 94, y: 10, w: 20, h: 20,
    bw: [1, 1, 1, 1], bs: sides.map(() => 'solid'), bc: sides.map(() => 'rgb(20, 20, 20)'),
  });
  const findings = analyzeBorders({ elements: [partial, clipper, child] });
  assert.ok(findings.some((f) => f.code === 'BL1' && f.path === partial.path));
  assert.ok(findings.some((f) => f.code === 'BL3' && f.path === child.path));
});

test('BORDLINE keeps a single-sided, small-radius underline as an intentional indicator', () => {
  const underline = element({
    i: 0, path: 'nav > a[aria-current]', tag: 'a', w: 72, h: 30,
    bw: [0, 0, 2, 0], bs: ['none', 'none', 'solid', 'none'],
    bc: ['transparent', 'transparent', 'rgb(20, 20, 20)', 'transparent'], radius: [2, 2, 2, 2],
  });
  assert.deepEqual(analyzeBorders({ elements: [underline] }), []);
});

test('BORDLINE flags a connector whose center misses both neighboring nodes', () => {
  const root = element({ i: 0, path: 'main', w: 200, h: 80 });
  const left = element({ i: 1, path: 'main > .step:first', parent: 0, x: 10, y: 20, w: 20, h: 20 });
  const connector = element({ i: 2, path: 'main > .connector', parent: 0, x: 30, y: 22, w: 30, h: 3, bg: 'rgb(80, 80, 80)' });
  const right = element({ i: 3, path: 'main > .step:last', parent: 0, x: 60, y: 20, w: 20, h: 20 });
  const findings = analyzeConnectors({ elements: [root, left, connector, right] });
  assert.ok(findings.some((f) => f.code === 'BL9' && f.path === connector.path));
});
