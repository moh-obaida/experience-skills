#!/usr/bin/env node
// Cross-route inventory of shared UI patterns and the drift between routes.
// Renders each route once, classifies shared patterns (header, language control, tabs, buttons by
// variant, text inputs, selects, error messages, dialogs), and reports the properties whose dominant
// value differs between routes. It cannot decide whether a difference is intentional.
// Usage: node compare-routes.mjs <route> <route> [...] [--size WxH] [--json]

import {
  parseArgs, parseSizes, runCli, UsageError, toUrl, launch, openPage,
} from './_shared/layout-probe.mjs';
import { styleSnapshot, inventoryPatterns, comparePatterns } from './_shared/style-probe.mjs';

const HELP = `compare-routes — shared-pattern inventory and drift across routes

Usage:
  node compare-routes.mjs <url-or-file> <url-or-file> [more routes] [options]

Options:
  --size WxH        Viewport for every route (default 1440x900)
  --rtl             Also compare each route with dir="rtl" forced (adds "<route> [rtl]" entries)
  --names A,B,C     Short labels for the routes, in order (default: file or path tail)
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --wait MS         Extra wait after load (default 300)
  --json            Print JSON
  --help            Show this help

Inventory kinds: header, nav-link, language-control, select, text-input, tab, tab-selected,
button:filled:<color>, button:outline, button:ghost, error-message, dialog. Each kind reports its
dominant style fingerprint (height, padding, radius, border, colors, type, shadow, element type, and
the selected-state indicator) per route. Drift lists the properties that differ.

Limits: classification is heuristic (roles, tags, class names, label text). A difference may be an
intentional distinction between a public page, a dashboard, an editor, and an immersive screen.
Authoritative-source tracing (which shared component owns the style) is a source task this tool
cannot do. A pattern that is present in only one route is reported, not condemned.

Exit codes: 0 no drift in compared patterns · 1 drift found · 2 usage or environment error`;

function tail(target) {
  const t = String(target).replace(/[?#].*$/, '').replace(/\/+$/, '');
  return t.split('/').filter(Boolean).slice(-2).join('/') || t;
}

function summary(fp) {
  return `${fp.element} h${fp.height} r${fp.radius} pad ${fp.padding} bd ${fp.border}${fp.indicator ? ` [${fp.indicator}]` : ''}`;
}

function toText(routes, drift) {
  const out = [`compare-routes · ${routes.length} routes`, ''];
  const kinds = [...new Set(routes.flatMap((r) => Object.keys(r.patterns)))].sort();
  out.push('Inventory (dominant fingerprint per route):');
  for (const kind of kinds) {
    out.push(`  ${kind}`);
    for (const r of routes) {
      const p = r.patterns[kind];
      out.push(`    ${r.route.padEnd(24)} ${p ? `${p.count}×${p.distinct > 1 ? ` (${p.distinct} variants)` : ''} ${summary(p.dominant)}` : '–'}`);
    }
  }
  out.push('');
  if (!drift.length) out.push('No drift in shared patterns present on two or more routes.');
  else {
    out.push('Drift candidates:');
    for (const d of drift) {
      if (d.type === 'present-in-one-route') { out.push(`  ${d.kind}: ${d.detail}`); continue; }
      out.push(`  ${d.kind} across ${d.routes.join(', ')}`);
      for (const diff of d.diffs) out.push(`    ${diff.property}: ${Object.entries(diff.values).map(([v, rs]) => `${v} (${rs.join(', ')})`).join('  vs  ')}`);
    }
  }
  out.push('', 'Heuristic inventory. Decide per difference: intentional, contextual, accidental drift, duplicate implementation, or local-override regression. Then fix the authoritative component, not each route.');
  return `${out.join('\n')}\n`;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), {
    size: 'string', rtl: 'boolean', names: 'string', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean',
  });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  if (positionals.length < 2) throw new UsageError('Give at least two routes to compare');
  const [size] = parseSizes(flags.size ?? '1440x900');
  const names = flags.names ? flags.names.split(',').map((n) => n.trim()) : positionals.map(tail);
  if (names.length !== positionals.length) throw new UsageError('--names must give one label per route');
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  const routes = [];
  try {
    for (const [k, target] of positionals.entries()) {
      for (const rtl of flags.rtl ? [false, true] : [false]) {
        const { page, context } = await openPage(browser, toUrl(target), { ...size, rtl, waitMs: Number(flags.wait ?? 300) });
        const snapshot = await styleSnapshot(page);
        routes.push({ route: rtl ? `${names[k]} [rtl]` : names[k], target, patterns: inventoryPatterns(snapshot) });
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  // With --rtl, compare like with like so a deliberate mirrored layout is not reported as drift.
  const groups = flags.rtl ? [routes.filter((r) => !r.route.endsWith('[rtl]')), routes.filter((r) => r.route.endsWith('[rtl]'))] : [routes];
  const drift = groups.flatMap((g) => comparePatterns(g));
  if (flags.json) process.stdout.write(`${JSON.stringify({ size, routes, drift }, null, 2)}\n`);
  else process.stdout.write(toText(routes, drift));
  return drift.length ? 1 : 0;
}

if (process.argv[1]?.endsWith('compare-routes.mjs')) runCli(main);
