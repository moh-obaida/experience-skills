import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../../', import.meta.url).pathname;
const read = (p) => readFileSync(join(root,p),'utf8');
const familyFiles = ['workspaces','services','culture','learning','operations'];
const index = read('shared/design-intelligence/design-systems-index.md');
const systems = [...index.matchAll(/^\| ([^|]+) \| `design-systems-([^`]+)\.md` \|/gm)];

test('thirty indexed systems have authored contracts in their selected family', () => {
  assert.equal(systems.length, 30);
  for (const [,name,family] of systems) {
    assert.ok(familyFiles.includes(family), `${name}: unknown family`);
    const text = read(`shared/design-intelligence/design-systems-${family}.md`);
    const section = text.split(`## ${name}\n`)[1]?.split('\n## ')[0];
    assert.ok(section, `${name}: missing section`);
    for (const layer of ['Composition','Type','Color','Geometry','Components','States','Failure'])
      assert.match(section, new RegExp(`\\| ${layer}`), `${name}: missing ${layer}`);
    assert.match(section, /\| (Image|Media)/, `${name}: missing media/icon/copy rule`);
    const theme = section.match(/\| Color \| ([^:|,]+?)(?: theme)?[:,]/)?.[1]?.trim();
    assert.ok(theme && palette.toLowerCase().includes(`| ${theme.toLowerCase()} |`), `${name}: unknown palette theme ${theme}`);
  }
});

const palette = read('shared/design-intelligence/palette-themes.md');
const paletteRows = [...palette.matchAll(/^\| ([^|]+) \| (`#[0-9A-F]{6}` \| ){6}`#[0-9A-F]{6}\/#/gm)];
const hex = /#[0-9A-F]{6}/g;
function luminance(color) {
  const rgb = color.slice(1).match(/../g).map((x) => parseInt(x,16)/255).map((v) => v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4);
  return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];
}
function ratio(a,b) { const x=luminance(a),y=luminance(b); return (Math.max(x,y)+.05)/(Math.min(x,y)+.05); }

test('at least fifty palette themes define complete, legible base roles', () => {
  const rows = palette.split('\n').filter((line) => /^\| [A-Za-z]/.test(line) && (line.match(hex) ?? []).length === 10);
  assert.ok(rows.length >= 50);
  for (const row of rows) {
    const [canvas,surface,ink,muted,border,action,darkCanvas,darkSurface,darkInk,darkAction] = row.match(hex);
    assert.ok(ratio(ink,canvas)>=4.5, `${row.split('|')[1]}: ink on canvas`);
    assert.ok(ratio(muted,canvas)>=4.5, `${row.split('|')[1]}: muted on canvas`);
    assert.ok(ratio('#FFFFFF',action)>=4.5, `${row.split('|')[1]}: action label`);
    assert.ok(ratio(darkInk,darkCanvas)>=4.5, `${row.split('|')[1]}: dark ink`);
    assert.ok(ratio(darkCanvas,darkAction)>=4.5, `${row.split('|')[1]}: dark action label`);
    assert.ok(ratio(ink,surface)>=4.5 && ratio(darkInk,darkSurface)>=4.5, `${row.split('|')[1]}: surface text`);
    assert.ok(border !== canvas, `${row.split('|')[1]}: invisible border`);
  }
});

test('twenty-four typography strategies are named', () => {
  const text=read('shared/design-intelligence/type-strategies.md');
  const rows=text.split('\n').filter((line)=>/^\| [A-Za-z]/.test(line) && line.split('|').length===7 && !line.includes('Strategy'));
  assert.equal(rows.length,24);
});

test('full-project conductor names every sibling and orders forensic, review, verification', () => {
  const skill=read('skills/use-all-skills/SKILL.md');
  const ledger=read('skills/use-all-skills/references/participation-ledger.md');
  const siblings=['experience-architect','product-friction','workflow-compression','interaction-design','visual-identity','composition-repair','state-design','empty-state-design','motion-design','responsive-validation','anti-slop-ui','anti-ai-slop','interface-forensics','critical-review'];
  for (const name of siblings) assert.ok(skill.includes(name) && ledger.includes(name), `${name}: absent`);
  const phase=read('skills/use-all-skills/references/phase-map.md');
  const order = ['| 8 responsive','| 9 anti-slop','| 10 de-generate','| 11 forensic','| 12 challenge','| 13 repair','| 14 verify'].map((row) => phase.indexOf(row));
  assert.ok(order.every((at, i) => at >= 0 && (i === 0 || at > order[i - 1])), `phase order: ${order}`);
  assert.match(phase, /\| 10 de-generate \| anti-ai-slop \|/);
});
