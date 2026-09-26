#!/usr/bin/env node
// Collect facts for one rendered element. No output file or browser navigation beyond the target.
import { createRequire } from 'node:module';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export function parseArgs(argv) {
  const out = { size: '1366x768' };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h' || arg === '--json') { out[arg.slice(arg === '-h' ? 1 : 2)] = true; continue; }
    if (arg === '--selector' || arg === '--size' || arg === '--channel') {
      const value = argv[++i];
      if (!value || value.startsWith('--')) throw new Error(`${arg} needs a value`);
      out[arg.slice(2)] = value;
    } else if (!arg.startsWith('-') && !out.target) out.target = arg;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  if (out.help) return out;
  if (!out.target || !out.selector) throw new Error('Target and --selector are required');
  const match = out.size.match(/^(\d{2,5})x(\d{2,5})$/i);
  if (!match) throw new Error('--size must be WIDTHxHEIGHT');
  out.viewport = { width: Number(match[1]), height: Number(match[2]) };
  if (out.viewport.width < 200 || out.viewport.height < 200) throw new Error('Viewport must be at least 200x200');
  return out;
}

export function targetUrl(target) {
  if (/^https?:\/\//i.test(target) || /^file:\/\//i.test(target)) return target;
  const path = resolve(target);
  if (!existsSync(path)) throw new Error(`File not found: ${target}`);
  return pathToFileURL(path).href;
}

async function chromium() {
  const require = createRequire(import.meta.url);
  for (const name of ['playwright', 'playwright-core']) {
    try { return require(name).chromium; } catch { /* try next */ }
  }
  throw new Error('Playwright unavailable; install playwright or playwright-core');
}

export function inspectElement(selector) {
  const nodes = [...document.querySelectorAll(selector)];
  if (nodes.length !== 1) return { count: nodes.length, selector };
  const el = nodes[0];
  const st = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  const parent = el.parentElement;
  const parentStyle = parent ? getComputedStyle(parent) : null;
  const box = (r) => ({ x: +r.x.toFixed(2), y: +r.y.toFixed(2), width: +r.width.toFixed(2), height: +r.height.toFixed(2) });
  const props = ['display','position','boxSizing','width','height','minWidth','minHeight','maxWidth','maxHeight','marginTop','marginRight','marginBottom','marginLeft','paddingTop','paddingRight','paddingBottom','paddingLeft','gap','gridTemplateColumns','flexDirection','alignItems','justifyContent','overflowX','overflowY','zIndex','transform','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','color','backgroundColor','border','borderRadius','boxShadow','opacity','cursor'];
  const computed = Object.fromEntries(props.map((p) => [p, st[p]]));
  const nearbyTargets = [...document.querySelectorAll('a,button,input,select,textarea,[role="button"],[role="link"],[tabindex]')]
    .filter((node) => node !== el).map((node) => ({ node, rect: node.getBoundingClientRect() }))
    .filter(({rect:r}) => r.width && r.height && Math.abs(r.x - rect.x) < 160 && Math.abs(r.y - rect.y) < 160)
    .slice(0, 12).map(({node,rect:r}) => ({ tag: node.tagName.toLowerCase(), label: (node.getAttribute('aria-label') || node.textContent || '').trim().slice(0,60), box: box(r) }));
  const ruleCandidates = [];
  for (const sheet of document.styleSheets) {
    let rules;
    try { rules = sheet.cssRules; } catch { continue; }
    const walk = (list, condition = '') => {
      for (const rule of list) {
        if (rule.cssRules) { walk(rule.cssRules, `${condition} ${rule.conditionText || ''}`.trim()); continue; }
        if (!rule.selectorText) continue;
        try {
          if (el.matches(rule.selectorText)) ruleCandidates.push({ selector: rule.selectorText, condition, css: rule.style.cssText.slice(0,600), stylesheet: sheet.href || 'inline' });
        } catch { /* unsupported selector */ }
      }
    };
    walk(rules);
  }
  return {
    count: 1, selector, url: location.href,
    viewport: { width: innerWidth, height: innerHeight },
    document: { scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth },
    element: { tag: el.tagName.toLowerCase(), id: el.id, classes: [...el.classList], role: el.getAttribute('role'), accessibleLabel: el.getAttribute('aria-label'), text: (el.textContent || '').trim().slice(0,120), box: box(rect), clientWidth: el.clientWidth, scrollWidth: el.scrollWidth, clientHeight: el.clientHeight, scrollHeight: el.scrollHeight },
    parent: parent ? { tag: parent.tagName.toLowerCase(), id: parent.id, classes: [...parent.classList], box: box(parent.getBoundingClientRect()), display: parentStyle.display, overflowX: parentStyle.overflowX, overflowY: parentStyle.overflowY } : null,
    computed, nearbyTargets, ruleCandidates: ruleCandidates.slice(-80),
    caveat: 'Rule candidates are not the resolved cascade winner; confirm in browser DevTools. Cross-origin stylesheets and shadow DOM are excluded.'
  };
}

async function main() {
  let options;
  try { options = parseArgs(process.argv.slice(2)); } catch (error) { console.error(error.message); process.exitCode = 2; return; }
  if (options.help) {
    console.log('Usage: node scripts/collect-evidence.mjs <url-or-html> --selector <CSS> [--size 1366x768] [--channel chrome] [--json]\nExit 0: collected, 1: selector absent/ambiguous, 2: usage/browser error. Reads the supplied page; writes no files.');
    return;
  }
  let browser;
  try {
    const type = await chromium();
    browser = await type.launch(options.channel ? { channel: options.channel } : {});
    const page = await browser.newPage({ viewport: options.viewport });
    await page.goto(targetUrl(options.target), { waitUntil: 'load', timeout: 30000 });
    const result = await page.evaluate(inspectElement, options.selector);
    console.log(options.json ? JSON.stringify(result, null, 2) : JSON.stringify(result, null, 2));
    if (result.count !== 1) process.exitCode = 1;
  } catch (error) { console.error(error.message); process.exitCode = 2; }
  finally { await browser?.close(); }
}

if (process.argv[1]?.endsWith('collect-evidence.mjs')) await main();
