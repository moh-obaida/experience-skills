#!/usr/bin/env node
// Static identity census for anti-ai-slop: what the source declares (fonts, colors, radii, shadows,
// blur, gradients, motion), which values match common library/framework defaults, and where
// several generated-default utilities stack on one element.
// Usage: node extract-identity.mjs <paths...> [--json] [--limit N]

import { walkFiles, readText, lineOf, rel, parseScanArgs } from './_shared/source-scan.mjs';

const HELP = `extract-identity — census of declared visual identity and generated defaults

Usage:
  node extract-identity.mjs <file-or-dir> [more paths] [--json] [--limit N]

Scans .css .scss .less .html .jsx .tsx .js .ts .vue .svelte .astro .mdx files and Tailwind or
theme config. Ignores node_modules and build output. Reads files only; writes nothing.

Reports:
  census         font families, hex colors, radii, shadows, blur, gradients, motion (top values)
  defaults       values or classes matching common library/framework defaults
                 (Tailwind indigo/violet/purple, zinc-950, shadcn radius, Bootstrap/MUI/Ant/Chakra
                 primaries, Material 3 baseline, generated gradient pairs, Sparkles/Zap/Rocket icons,
                 scroll fade-up motion, "Get Started"/"Learn More" CTA pair)
  stacks         elements with 3+ generated-default utilities together
                 (e.g. rounded-2xl shadow-xl backdrop-blur bg-white/10)

Every item is a prompt for the identity ledger, never a verdict. A product may use a default on
purpose.

Options:
  --json      Print JSON
  --limit N   Max examples per section in text output (default 8)

Exit codes: 0 no default signatures or stacks · 1 findings · 2 usage error`;

const EXTENSIONS = ['.css', '.scss', '.less', '.html', '.jsx', '.tsx', '.js', '.ts', '.mjs', '.cjs', '.vue', '.svelte', '.astro', '.mdx'];

export const DEFAULTS = [
  { id: 'tailwind-indigo-violet', source: 'Tailwind palette', pattern: /#(?:6366F1|4F46E5|8B5CF6|7C3AED|A855F7|9333EA)\b|\b(?:bg|text|from|via|to|ring|border|fill|stroke)-(?:indigo|violet|purple)-(?:400|500|600|700)\b/i },
  { id: 'tailwind-near-black', source: 'Tailwind zinc/neutral/slate 950', pattern: /#(?:09090B|0A0A0A|020617)\b|\bbg-(?:zinc|neutral|slate)-950\b/i },
  { id: 'generated-gradient-pair', source: 'generated gradient', pattern: /\bfrom-(?:purple|violet|indigo|fuchsia|pink)-\d{3}\b[^"'`\n]{0,80}\bto-(?:blue|cyan|indigo|purple|pink|violet)-\d{3}\b|#667eea[^;\n]{0,40}#764ba2/i },
  { id: 'shadcn-radius', source: 'shadcn/ui --radius', pattern: /--radius\s*:\s*(?:0\.5rem|0\.625rem)/i },
  { id: 'library-primary', source: 'Bootstrap/MUI/Ant/Chakra/Mantine/Material 3 primary', pattern: /#(?:0D6EFD|1976D2|1677FF|3182CE|228BE6|6750A4)\b/i },
  { id: 'generated-font', source: 'common generated font', pattern: /\b(?:Inter|Plus Jakarta Sans|Poppins|Geist|Space Grotesk)\b(?![-\w])/ },
  { id: 'ai-icons', source: 'lucide Sparkles/Zap/Rocket/Wand', pattern: /\b(?:Sparkles|Zap|Rocket|Wand2?|WandSparkles)\b(?=[\s,}])/ },
  { id: 'scroll-fade-up', source: 'framer-motion/AOS reveal', pattern: /initial=\{\{\s*opacity:\s*0,\s*y:\s*\d+|\bwhileInView\b|\bdata-aos=/ },
  { id: 'generic-cta-pair', source: 'Get Started / Learn More', pattern: /Get Started[\s\S]{0,400}Learn More|Learn More[\s\S]{0,400}Get Started/ },
];

// Utilities that, together on one element, are the generated-default surface.
const STACK_TOKENS = [
  /\brounded-(?:2xl|3xl)\b/, /\bshadow-(?:xl|2xl)\b/, /\bbackdrop-blur(?:-[a-z0-9]+)?\b/,
  /\bbg-(?:white|black)\/(?:5|10|20)\b/, /\bborder-(?:white|black)\/(?:5|10|20)\b/,
  /\bbg-gradient-to-[a-z]+\b/, /\bbg-clip-text\b/, /\bhover:-translate-y-\d\b/, /\btransition-all\b/,
  /\bhover:shadow-(?:lg|xl|2xl)\b/, /\bring-1 ring-white\/\d+\b/,
];

const CENSUS = {
  font: /font-family\s*:\s*([^;}\n]+)|fontFamily\s*:\s*[[{]?\s*['"]([^'"]+)['"]|family=([A-Za-z+]+)|\bfont\s*:\s*[^;}\n]*?\d(?:px|rem|em|%)(?:\/[\d.]+[a-z%]*)?\s+([^;}\n]+)/g,
  color: /#[0-9A-Fa-f]{6}\b/g,
  radius: /border-radius\s*:\s*([^;}\n]+)|\brounded(?:-(?:none|sm|md|lg|xl|2xl|3xl|full))?\b(?![-\w])/g,
  shadow: /box-shadow\s*:\s*([^;}\n]+)|\bshadow(?:-(?:sm|md|lg|xl|2xl|inner|none))?\b(?![-\w])/g,
  blur: /backdrop-filter\s*:\s*blur|\bbackdrop-blur(?:-[a-z0-9]+)?\b/g,
  gradient: /(?:linear|radial|conic)-gradient\(|\bbg-gradient-to-[a-z]+\b/g,
  motion: /@keyframes\s+([\w-]+)|\banimate-[a-z-]+\b|\btransition(?:-[a-z]+)?\b(?![-\w])|\bwhileInView\b/g,
};

function tally(map, key) { map.set(key, (map.get(key) ?? 0) + 1); }
const top = (map, n = 12) => [...map.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]))).slice(0, n).map(([value, count]) => ({ value, count }));

export function extract(paths) {
  const files = walkFiles(paths, EXTENSIONS);
  const census = Object.fromEntries(Object.keys(CENSUS).map((k) => [k, new Map()]));
  const defaults = [];
  const stacks = [];
  for (const file of files) {
    const text = readText(file);
    const where = rel(file);
    for (const [kind, re] of Object.entries(CENSUS)) {
      for (const m of text.matchAll(re)) {
        let value = (m[1] ?? m[2] ?? m[3] ?? m[4] ?? m[0]).trim().replace(/\+/g, ' ').slice(0, 60);
        if (kind === 'font') value = value.split(',')[0].replace(/["']/g, '').trim();
        tally(census[kind], kind === 'color' ? value.toUpperCase() : value);
      }
    }
    for (const rule of DEFAULTS) {
      const re = new RegExp(rule.pattern.source, rule.pattern.flags.includes('g') ? rule.pattern.flags : `${rule.pattern.flags}g`);
      for (const m of text.matchAll(re)) defaults.push({ id: rule.id, source: rule.source, file: where, line: lineOf(text, m.index), match: m[0].replace(/\s+/g, ' ').slice(0, 80) });
    }
    for (const m of text.matchAll(/class(?:Name)?\s*=\s*(?:\{?\s*[`"'])([^`"']+)/g)) {
      const hits = STACK_TOKENS.filter((re) => re.test(m[1])).length;
      if (hits >= 3) stacks.push({ file: where, line: lineOf(text, m.index), tokens: hits, classes: m[1].replace(/\s+/g, ' ').trim().slice(0, 120) });
    }
  }
  const counts = {};
  for (const d of defaults) counts[d.id] = (counts[d.id] ?? 0) + 1;
  const radiusTotal = [...census.radius.values()].reduce((a, b) => a + b, 0);
  const topRadius = top(census.radius, 1)[0];
  return {
    filesScanned: files.length,
    census: Object.fromEntries(Object.entries(census).map(([k, map]) => [k, top(map)])),
    uniformRadius: radiusTotal >= 8 && topRadius && topRadius.count / radiusTotal >= 0.7 ? { value: topRadius.value, share: Math.round((topRadius.count / radiusTotal) * 100) } : null,
    defaultCounts: counts,
    defaults,
    stacks,
  };
}

function toText(r, limit) {
  const out = [`extract-identity · ${r.filesScanned} files scanned`, '', 'Census (most frequent declared values):'];
  for (const [kind, rows] of Object.entries(r.census)) {
    out.push(`  ${kind.padEnd(9)} ${rows.length ? rows.slice(0, 6).map((x) => `${x.value} ×${x.count}`).join(' · ') : '—'}`);
  }
  if (r.uniformRadius) out.push('', `Uniform radius: "${r.uniformRadius.value}" is ${r.uniformRadius.share}% of radius declarations. Does radius differ by element kind?`);
  if (r.defaults.length) {
    out.push('', 'Library/framework default signatures:');
    for (const id of Object.keys(r.defaultCounts)) {
      const list = r.defaults.filter((d) => d.id === id);
      out.push(`  ${id} (${list[0].source}) ×${list.length}`);
      for (const d of list.slice(0, limit)) out.push(`    ${d.file}:${d.line}  ${d.match}`);
      if (list.length > limit) out.push(`    … ${list.length - limit} more`);
    }
  }
  if (r.stacks.length) {
    out.push('', `Slop stacks (3+ generated-default utilities on one element): ${r.stacks.length}`);
    for (const s of r.stacks.slice(0, limit)) out.push(`  ${s.file}:${s.line}  ${s.classes}`);
    if (r.stacks.length > limit) out.push(`  … ${r.stacks.length - limit} more`);
  }
  if (!r.defaults.length && !r.stacks.length) out.push('', 'No default signatures or stacks. That does not make the identity strong; render it and fill the ledger.');
  out.push('', 'Record intentional values in the identity ledger before treating any match as slop.');
  return `${out.join('\n')}\n`;
}

function main(argv) {
  let parsed;
  try { parsed = parseScanArgs(argv.slice(2), { json: 'boolean', limit: 'string' }); } catch (e) {
    process.stderr.write(`${e.message}\nRun with --help.\n`); return 2;
  }
  const { flags, positionals } = parsed;
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  if (!positionals.length) { process.stderr.write('Give at least one file or directory. Run with --help.\n'); return 2; }
  const limit = Number(flags.limit ?? 8);
  if (!Number.isInteger(limit) || limit < 1) { process.stderr.write('--limit needs a positive integer.\n'); return 2; }
  const result = extract(positionals);
  process.stdout.write(flags.json ? `${JSON.stringify(result, null, 2)}\n` : toText(result, limit));
  return result.defaults.length || result.stacks.length ? 1 : 0;
}

if (process.argv[1]?.endsWith('extract-identity.mjs')) process.exitCode = main(process.argv);
