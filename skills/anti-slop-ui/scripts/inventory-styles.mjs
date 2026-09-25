#!/usr/bin/env node
// Inventory the rendered visual treatments on a page: radii, shadows, gradients, blur, type
// sizes, colors, uppercase microtype, container nesting, and repeated card patterns.
// Usage: node inventory-styles.mjs <url-or-file> [--size 1440x900] [--json]

import { parseArgs, parseSizes, toUrl, launch, openPage, runCli, truncate } from './_shared/layout-probe.mjs';

const HELP = `inventory-styles — count rendered visual treatments (prompts, not verdicts)

Usage:
  node inventory-styles.mjs <url-or-file> [options]

Options:
  --size WxH        Viewport size (default 1440x900)
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --wait MS         Extra wait after load (default 300)
  --json            Print JSON
  --help            Show this help

Reports distinct border radii, shadows, gradient backgrounds, backdrop blur, font sizes and
families, text colors, uppercase microtype, the deepest nesting of boxed containers, and groups
of three or more sibling "cards" with identical size, radius, and shadow.

A high count is a question ("what job does each do?"), never proof of slop. A justified
brand treatment can legitimately appear many times.

Exit codes: 0 no signals · 1 signals raised · 2 usage or environment error`;

/** Runs in the page. */
export function collectStyles() {
  const els = [...document.body.querySelectorAll('*')].slice(0, 5000);
  const radii = {}; const shadows = {}; const sizes = {}; const families = {}; const colors = {};
  let gradients = 0; let blur = 0; let uppercaseMicro = 0;
  const boxed = new Set();
  const isVisible = (st, r) => st.display !== 'none' && st.visibility !== 'hidden' && r.width > 0 && r.height > 0;
  for (const el of els) {
    const st = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (!isVisible(st, r)) continue;
    const radius = parseFloat(st.borderTopLeftRadius) || 0;
    if (radius > 0) radii[Math.round(radius)] = (radii[Math.round(radius)] || 0) + 1;
    if (st.boxShadow && st.boxShadow !== 'none') shadows[st.boxShadow] = (shadows[st.boxShadow] || 0) + 1;
    if (/gradient\(/.test(st.backgroundImage)) gradients++;
    if (st.backdropFilter && st.backdropFilter !== 'none' && /blur/.test(st.backdropFilter)) blur++;
    const hasText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (hasText) {
      const fs = Math.round(parseFloat(st.fontSize));
      sizes[fs] = (sizes[fs] || 0) + 1;
      const fam = st.fontFamily.split(',')[0].replace(/["']/g, '').trim();
      families[fam] = (families[fam] || 0) + 1;
      colors[st.color] = (colors[st.color] || 0) + 1;
      if (st.textTransform === 'uppercase' && fs <= 13 && parseFloat(st.letterSpacing) > 0) uppercaseMicro++;
    }
    const hasBg = st.backgroundColor !== 'rgba(0, 0, 0, 0)' && st.backgroundColor !== 'transparent';
    const hasBorder = parseFloat(st.borderTopWidth) > 0 && st.borderTopStyle !== 'none';
    if ((hasBg || hasBorder || st.boxShadow !== 'none') && radius > 0 && r.width < window.innerWidth * 0.98) boxed.add(el);
  }
  let maxDepth = 0; let deepest = null;
  for (const el of boxed) {
    let d = 1; let p = el.parentElement;
    while (p) { if (boxed.has(p)) d++; p = p.parentElement; }
    if (d > maxDepth) { maxDepth = d; deepest = el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(/\s+/).slice(0, 2).join('.') : ''); }
  }
  const cardGroups = [];
  const parents = new Set([...boxed].map((b) => b.parentElement).filter(Boolean));
  for (const parent of parents) {
    const kids = [...parent.children].filter((k) => boxed.has(k));
    const sig = {};
    for (const k of kids) {
      const st = getComputedStyle(k); const r = k.getBoundingClientRect();
      const key = `${Math.round(r.width)}x${Math.round(r.height / 10) * 10}|${st.borderTopLeftRadius}|${st.boxShadow}`;
      sig[key] = (sig[key] || 0) + 1;
    }
    for (const [key, n] of Object.entries(sig)) if (n >= 3) cardGroups.push({ parent: parent.tagName.toLowerCase() + (parent.className && typeof parent.className === 'string' ? '.' + parent.className.split(/\s+/)[0] : ''), count: n, signature: key.split('|')[0] });
  }
  return { radii, shadowCount: Object.values(shadows).reduce((a, b) => a + b, 0), distinctShadows: Object.keys(shadows).length, gradients, blur, sizes, families, distinctColors: Object.keys(colors).length, uppercaseMicro, maxBoxDepth: maxDepth, deepestBox: deepest, cardGroups };
}

export function signals(inv) {
  const out = [];
  const bigRadii = Object.entries(inv.radii).filter(([r]) => Number(r) >= 20 && Number(r) < 999).reduce((a, [, n]) => a + n, 0);
  if (Object.keys(inv.radii).length > 5) out.push(`${Object.keys(inv.radii).length} distinct corner radii: is there a shape system?`);
  if (bigRadii >= 6) out.push(`${bigRadii} elements with radius ≥ 20px: does the shape language call for it?`);
  if (inv.gradients >= 4) out.push(`${inv.gradients} gradient backgrounds: which carry light, brand, or data?`);
  if (inv.blur >= 1) out.push(`${inv.blur} backdrop-blur surfaces: is real content behind each?`);
  if (inv.distinctShadows > 4) out.push(`${inv.distinctShadows} distinct shadows: does elevation mean layer order?`);
  if (Object.keys(inv.sizes).length > 8) out.push(`${Object.keys(inv.sizes).length} distinct font sizes: the type scale may be undisciplined.`);
  if (Object.keys(inv.families).length > 3) out.push(`${Object.keys(inv.families).length} font families in use.`);
  if (inv.uppercaseMicro >= 3) out.push(`${inv.uppercaseMicro} tiny uppercase letter-spaced labels: part of a real system?`);
  if (inv.maxBoxDepth >= 3) out.push(`Boxed containers nested ${inv.maxBoxDepth} deep (${inv.deepestBox}): container soup?`);
  for (const g of inv.cardGroups) out.push(`${g.count} identical cards (${g.signature}) in ${g.parent}: independent comparable objects, or containers standing in for hierarchy?`);
  return out;
}

function toText(url, size, inv, sig) {
  const fmt = (o) => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}×${v}`).join(', ') || 'none';
  const lines = [`inventory-styles · ${url}`, `Viewport ${size.width}×${size.height}`, '',
    `Corner radii (px×count):   ${fmt(inv.radii)}`,
    `Shadows:                  ${inv.shadowCount} elements, ${inv.distinctShadows} distinct`,
    `Gradient backgrounds:     ${inv.gradients}`,
    `Backdrop blur:            ${inv.blur}`,
    `Font sizes (px×count):    ${fmt(inv.sizes)}`,
    `Font families:            ${fmt(inv.families)}`,
    `Distinct text colors:     ${inv.distinctColors}`,
    `Uppercase microtype:      ${inv.uppercaseMicro}`,
    `Deepest boxed nesting:    ${inv.maxBoxDepth}${inv.deepestBox ? ` (${truncate(inv.deepestBox, 40)})` : ''}`,
    `Repeated card groups:     ${inv.cardGroups.length}`, ''];
  if (sig.length) { lines.push('Questions to answer (each may be justified):'); for (const s of sig) lines.push(`  • ${s}`); }
  else lines.push('No signals raised. That does not make the design good; look at it.');
  return `${lines.join('\n')}\n`;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), { size: 'string', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean' });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const [size] = parseSizes(flags.size ?? '1440x900');
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  try {
    const { page } = await openPage(browser, url, { ...size, waitMs: Number(flags.wait ?? 300) });
    const inv = await page.evaluate(collectStyles);
    const sig = signals(inv);
    if (flags.json) process.stdout.write(`${JSON.stringify({ url, size, inventory: inv, signals: sig }, null, 2)}\n`);
    else process.stdout.write(toText(url, size, inv, sig));
    return sig.length ? 1 : 0;
  } finally { await browser.close(); }
}

if (process.argv[1]?.endsWith('inventory-styles.mjs')) runCli(main);
