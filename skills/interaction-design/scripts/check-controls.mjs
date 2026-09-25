#!/usr/bin/env node
// Quick rendered accessibility checks for controls: accessible names, labels, alt text,
// positive tabindex, target size, text contrast, and visible focus.
// Usage: node check-controls.mjs <url-or-file> [--size 1280x800] [--focus 25] [--json]

import {
  parseArgs, parseSizes, toUrl, launch, openPage, snapshotPage, runCli,
  analyzeTargets, analyzeContrast, truncate,
} from './_shared/layout-probe.mjs';

const HELP = `check-controls — quick accessibility checks for interactive controls

Usage:
  node check-controls.mjs <url-or-file> [options]

Options:
  --size WxH        Viewport (default 1280x800)
  --focus N         Tab through the first N focusable elements to check visible focus (default 25; 0 to skip)
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --json            Print JSON
  --help            Show this help

Checks:
  unnamed       buttons, links, and ARIA widgets with no accessible name
  unlabeled     form fields with no label, aria-label, or aria-labelledby
  alt           images without an alt attribute
  tabindex      positive tabindex values (they reorder focus)
  targets       interactive elements smaller than 24×24 CSS px (inline text links excluded)
  contrast      text below WCAG AA contrast against its computed background (text over images skipped)
  focus         focusable elements whose outline, box-shadow, border, and background do not change on focus

These are automated checks: a pass is not WCAG conformance. Test with a keyboard and a screen reader.

Exit codes: 0 no findings · 1 findings · 2 usage or environment error`;

/** Runs in the page. */
export function collectControlIssues() {
  const path = (el) => {
    const id = el.id ? `#${el.id}` : '';
    const cls = typeof el.className === 'string' && el.className ? `.${el.className.split(/\s+/).slice(0, 2).join('.')}` : '';
    return `${el.tagName.toLowerCase()}${id}${cls}`;
  };
  const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
  const nameOf = (el) => {
    const byAria = el.getAttribute('aria-label');
    if (byAria && byAria.trim()) return byAria.trim();
    const lb = el.getAttribute('aria-labelledby');
    if (lb) { const t = lb.split(/\s+/).map((id) => document.getElementById(id)?.textContent ?? '').join(' ').trim(); if (t) return t; }
    if (el.labels && el.labels.length) { const t = [...el.labels].map((l) => l.textContent).join(' ').trim(); if (t) return t; }
    if (!['INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName)) {
      const text = (el.innerText || el.textContent || '').trim();
      if (text) return text;
    }
    const img = el.querySelector && el.querySelector('img[alt]');
    if (img && img.alt.trim()) return img.alt.trim();
    if (el.title && el.title.trim()) return el.title.trim();
    if (el.tagName === 'INPUT' && ['submit', 'button', 'reset'].includes(el.type) && el.value) return el.value;
    if (el.placeholder) return `(placeholder only) ${el.placeholder}`;
    return '';
  };
  const unnamed = []; const unlabeled = []; const alt = []; const tabindex = [];
  for (const el of document.querySelectorAll('button, a[href], [role=button], [role=link], [role=tab], [role=menuitem], [role=switch], [role=checkbox]')) {
    if (visible(el) && !nameOf(el)) unnamed.push(path(el));
  }
  for (const el of document.querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=reset]), select, textarea')) {
    if (!visible(el)) continue;
    const n = nameOf(el);
    if (!n || n.startsWith('(placeholder only)')) unlabeled.push({ path: path(el), note: n ? 'placeholder is the only label' : 'no label' });
  }
  for (const el of document.querySelectorAll('img')) if (visible(el) && !el.hasAttribute('alt')) alt.push(path(el));
  for (const el of document.querySelectorAll('[tabindex]')) if (Number(el.getAttribute('tabindex')) > 0) tabindex.push(path(el));
  return { unnamed, unlabeled, alt, tabindex };
}

async function focusCheck(page, n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    await page.keyboard.press('Tab');
    const r = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const snap = () => { const s = getComputedStyle(el); return [s.outlineStyle, s.outlineWidth, s.boxShadow, s.borderColor, s.backgroundColor, s.textDecorationLine].join('|'); };
      const focused = snap();
      el.blur();
      const unfocused = snap();
      el.focus();
      const id = el.id ? `#${el.id}` : '';
      return { path: `${el.tagName.toLowerCase()}${id}`, text: (el.innerText || el.value || '').trim().slice(0, 30), visibleChange: focused !== unfocused };
    });
    if (!r) break;
    results.push(r);
  }
  return results;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), { size: 'string', focus: 'string', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean' });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const [size] = parseSizes(flags.size ?? '1280x800');
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  let report;
  try {
    const { page } = await openPage(browser, url, { ...size, waitMs: Number(flags.wait ?? 300) });
    const issues = await page.evaluate(collectControlIssues);
    const snap = await snapshotPage(page);
    const targets = analyzeTargets(snap).filter((t) => !t.inlineLink);
    const contrast = analyzeContrast(snap);
    const focus = Number(flags.focus ?? 25) > 0 ? await focusCheck(page, Number(flags.focus ?? 25)) : [];
    const noFocus = focus.filter((f) => !f.visibleChange);
    report = { url, size, ...issues, targets, contrast, focusChecked: focus.length, noVisibleFocus: noFocus };
  } finally { await browser.close(); }
  const count = report.unnamed.length + report.unlabeled.length + report.alt.length + report.tabindex.length + report.targets.length + report.contrast.count + report.noVisibleFocus.length;
  if (flags.json) process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  else {
    const L = [`check-controls · ${url}`, `Viewport ${size.width}×${size.height}`, ''];
    const sec = (title, items, fmt) => { L.push(`${title}: ${items.length}`); for (const i of items.slice(0, 8)) L.push(`  ${fmt(i)}`); };
    sec('Controls without accessible name', report.unnamed, (p) => p);
    sec('Fields without a label', report.unlabeled, (u) => `${u.path} (${u.note})`);
    sec('Images without alt', report.alt, (p) => p);
    sec('Positive tabindex', report.tabindex, (p) => p);
    sec('Targets under 24×24', report.targets, (t) => `${t.width}×${t.height} ${truncate(t.path, 50)}`);
    sec(`Text below AA contrast (of ${report.contrast.checked} checked; ${report.contrast.overImages} over images skipped)`, report.contrast.failures, (c) => `${c.ratio}:1 (needs ${c.needed}) ${truncate(c.text, 30)}  ${truncate(c.path, 40)}`);
    sec(`No visible focus change (of ${report.focusChecked} tabbed)`, report.noVisibleFocus, (f) => `${f.path} "${f.text}"`);
    L.push('', 'Automated checks only; test with a keyboard and a screen reader before claiming conformance.');
    process.stdout.write(`${L.join('\n')}\n`);
  }
  return count ? 1 : 0;
}

if (process.argv[1]?.endsWith('check-controls.mjs')) runCli(main);
