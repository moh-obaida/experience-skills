#!/usr/bin/env node
// Observe the animations a page actually runs, with and without prefers-reduced-motion.
// Usage: node check-motion-rendered.mjs <url-or-file> [--size 1440x900] [--wait 1200] [--json]

import { parseArgs, parseSizes, toUrl, launch, openPage, runCli, truncate } from './_shared/layout-probe.mjs';

const HELP = `check-motion-rendered — list running animations, normal vs reduced motion

Usage:
  node check-motion-rendered.mjs <url-or-file> [options]

Options:
  --size WxH        Viewport (default 1440x900)
  --wait MS         Time after load before sampling (default 1200)
  --max-ms N        Flag durations longer than N ms (default 1000)
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --json            Print JSON
  --help            Show this help

Uses document.getAnimations() in the rendered page (CSS animations, CSS transitions, Web
Animations). Flags: animations still running under reduced motion, infinite animations,
long durations, and keyframes that animate layout properties. JavaScript-driven motion that
does not use these APIs (for example requestAnimationFrame loops) is not visible to this check.

Exit codes: 0 no signals · 1 signals · 2 usage or environment error`;

const LAYOUT = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'margin', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom', 'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth']);

/** Runs in the page. */
export function sampleAnimations() {
  return document.getAnimations().map((a) => {
    const t = a.effect?.getTiming?.() ?? {};
    const kf = a.effect?.getKeyframes?.() ?? [];
    const props = [...new Set(kf.flatMap((k) => Object.keys(k).filter((p) => !['offset', 'easing', 'composite', 'computedOffset'].includes(p))))];
    const target = a.effect?.target;
    const name = target ? `${target.tagName.toLowerCase()}${target.id ? `#${target.id}` : ''}${typeof target.className === 'string' && target.className ? `.${target.className.split(/\s+/)[0]}` : ''}` : '(none)';
    return { type: a.constructor.name, name: a.animationName || a.transitionProperty || a.id || '', target: name, duration: Number(t.duration) || 0, iterations: t.iterations === Infinity ? 'infinite' : t.iterations, playState: a.playState, props };
  });
}

export function motionSignals(normal, reduced, maxMs) {
  const s = [];
  const running = (list) => list.filter((a) => a.playState === 'running');
  const r = running(reduced);
  if (r.length) s.push(`${r.length} animation(s) still running with prefers-reduced-motion: reduce (${r.slice(0, 3).map((a) => a.target).join(', ')})`);
  for (const a of normal) {
    if (a.iterations === 'infinite') s.push(`Infinite animation on ${a.target}: does it have a job, pause offscreen, and stop under reduced motion?`);
    if (a.duration > maxMs) s.push(`${Math.round(a.duration)} ms on ${a.target}: a rare, skippable moment?`);
    const layout = a.props.filter((p) => LAYOUT.has(p));
    if (layout.length) s.push(`${a.target} animates layout properties (${layout.join(', ')}): prefer transform/opacity.`);
  }
  return [...new Set(s)];
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), { size: 'string', wait: 'string', 'max-ms': 'string', channel: 'string', json: 'boolean', help: 'boolean' });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const [size] = parseSizes(flags.size ?? '1440x900');
  const wait = Number(flags.wait ?? 1200);
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  let normal; let reduced;
  try {
    const a = await openPage(browser, url, { ...size, waitMs: wait, reducedMotion: 'no-preference' });
    normal = await a.page.evaluate(sampleAnimations); await a.context.close();
    const b = await openPage(browser, url, { ...size, waitMs: wait, reducedMotion: 'reduce' });
    reduced = await b.page.evaluate(sampleAnimations); await b.context.close();
  } finally { await browser.close(); }
  const sig = motionSignals(normal, reduced, Number(flags['max-ms'] ?? 1000));
  if (flags.json) process.stdout.write(`${JSON.stringify({ url, size, normal, reduced, signals: sig }, null, 2)}\n`);
  else {
    const L = [`check-motion-rendered · ${url}`, `Sampled ${wait} ms after load at ${size.width}×${size.height}`, '',
      `Animations (normal):  ${normal.length} (${normal.filter((x) => x.playState === 'running').length} running)`,
      `Animations (reduced): ${reduced.length} (${reduced.filter((x) => x.playState === 'running').length} running)`, ''];
    for (const x of normal.slice(0, 12)) L.push(`  ${x.type.padEnd(14)} ${truncate(x.target, 30).padEnd(30)} ${String(Math.round(x.duration)).padStart(5)} ms  ${x.iterations}  ${x.props.join(',')}`);
    L.push('');
    if (sig.length) { L.push('Signals:'); for (const s of sig) L.push(`  • ${s}`); } else L.push('No signals. Still ask which events deserve motion.');
    process.stdout.write(`${L.join('\n')}\n`);
  }
  return sig.length ? 1 : 0;
}

if (process.argv[1]?.endsWith('check-motion-rendered.mjs')) runCli(main);
