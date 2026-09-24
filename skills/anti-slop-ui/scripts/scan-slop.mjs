#!/usr/bin/env node
// Static scan for common AI-template UI signals in source code.
// Usage: node scan-slop.mjs <paths...> [--json] [--limit N]

import { walkFiles, readText, matchRules, rel, parseScanArgs } from './_shared/source-scan.mjs';

const HELP = `scan-slop — count common AI-template UI signals in source

Usage:
  node scan-slop.mjs <file-or-dir> [more paths] [--json] [--limit N]

Scans .css .scss .less .html .jsx .tsx .js .ts .vue .svelte .astro .md .mdx files.
Ignores node_modules and build output. Reads files only.

Signals (prompts to look, never verdicts):
  gradient          linear/radial/conic gradients, Tailwind bg-gradient-*
  gradient-text     background-clip: text, bg-clip-text
  glass             backdrop-filter blur, backdrop-blur-*
  huge-radius       radius ≥ 24px, rounded-2xl/3xl/full on containers
  pill              rounded-full + small padding, "badge"/"pill"/"chip" classes
  eyebrow           tiny uppercase tracking-wide gray text
  shadow-stack      multiple comma-separated box-shadows, shadow-2xl
  transition-all    transition: all / transition-all
  generic-copy      unlock, elevate, seamless(ly), supercharge, empower, revolutionize,
                    cutting-edge, next-generation, all-in-one, "take … to the next level"
  sparkle-emoji     ✨ 🚀 in UI strings

Options:
  --json      Print JSON
  --limit N   Max examples per signal in text output (default 8)

Exit codes: 0 no signals · 1 signals found · 2 usage error`;

const EXTENSIONS = ['.css', '.scss', '.less', '.html', '.jsx', '.tsx', '.js', '.ts', '.vue', '.svelte', '.astro', '.md', '.mdx', '.mjs'];

export const RULES = [
  { id: 'gradient', message: 'Gradient: does it express light, depth, brand, or data?', pattern: /\b(?:linear|radial|conic)-gradient\(|\bbg-gradient-to-[a-z]+\b/i },
  { id: 'gradient-text', message: 'Gradient text: prefer type hierarchy.', pattern: /background-clip\s*:\s*text|\bbg-clip-text\b/i },
  { id: 'glass', message: 'Backdrop blur: is real content behind it?', pattern: /backdrop-filter\s*:\s*blur|\bbackdrop-blur(?:-[a-z0-9]+)?\b/i },
  {
    id: 'huge-radius',
    message: 'Very large radius: does the shape language call for it?',
    pattern: /border-radius\s*:\s*(\d+)px|\brounded-(?:2xl|3xl)\b/i,
    filter: (m) => (m[1] ? Number(m[1]) >= 24 && Number(m[1]) < 999 : true),
  },
  { id: 'pill', message: 'Pill: is this a filter, tag, or token?', pattern: /\brounded-full\b[^"'`\n]{0,80}\bpx-[1-3]\b|\bpx-[1-3]\b[^"'`\n]{0,80}\brounded-full\b|class(?:Name)?=["'`][^"'`]*\b(?:pill|badge|chip)\b/i },
  { id: 'eyebrow', message: 'Uppercase microtype eyebrow: part of a real type system?', pattern: /\buppercase\b[^"'`\n]{0,80}\btracking-(?:wide|wider|widest)\b|\btracking-(?:wide|wider|widest)\b[^"'`\n]{0,80}\buppercase\b|text-transform\s*:\s*uppercase[^}]{0,120}letter-spacing/i },
  { id: 'shadow-stack', message: 'Heavy or stacked shadows: does elevation mean something here?', pattern: /box-shadow\s*:[^;{}]*\)\s*,[^;{}]*\)|\bshadow-2xl\b/i },
  { id: 'transition-all', message: 'transition: all animates unintended properties.', pattern: /transition\s*:\s*all\b|\btransition-all\b/i },
  { id: 'generic-copy', message: 'Generic marketing phrase: replace with a specific, checkable statement.', pattern: /\b(?:unlock(?:s|ing)?|elevate[sd]?|seamless(?:ly)?|supercharg(?:e|es|ed|ing)|empower(?:s|ing)?|revolutioniz(?:e|es|ing)|cutting[- ]edge|next[- ]generation|all[- ]in[- ]one|game[- ]chang(?:er|ing)|to the next level|effortless(?:ly)?)\b/i },
  { id: 'sparkle-emoji', message: 'Sparkle/rocket emoji: say what the feature does instead.', pattern: /[✨🚀]/u },
];

export function scan(paths) {
  const files = walkFiles(paths, EXTENSIONS);
  const findings = [];
  for (const file of files) findings.push(...matchRules(readText(file), RULES, rel(file)));
  const counts = {};
  for (const f of findings) counts[f.rule] = (counts[f.rule] ?? 0) + 1;
  return { filesScanned: files.length, counts, findings };
}

function toText(result, limit) {
  const out = [`scan-slop · ${result.filesScanned} files scanned`];
  if (!result.findings.length) {
    out.push('No signals found. That does not make the UI good; look at it and run the slop gate.');
    return `${out.join('\n')}\n`;
  }
  out.push('', 'Signal counts:');
  for (const rule of RULES.map((r) => r.id).filter((v, i, a) => a.indexOf(v) === i)) {
    if (result.counts[rule]) out.push(`  ${rule.padEnd(15)} ${result.counts[rule]}`);
  }
  for (const rule of Object.keys(result.counts)) {
    const list = result.findings.filter((f) => f.rule === rule);
    out.push('', `${rule} — ${list[0].message}`);
    for (const f of list.slice(0, limit)) out.push(`  ${f.file}:${f.line}  ${f.match}`);
    if (list.length > limit) out.push(`  … ${list.length - limit} more`);
  }
  out.push('', 'Each signal is a question ("what job does this do here?"), not a verdict.');
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
  const result = scan(positionals);
  if (flags.json) process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  else process.stdout.write(toText(result, Number(flags.limit ?? 8)));
  return result.findings.length ? 1 : 0;
}

if (process.argv[1]?.endsWith('scan-slop.mjs')) process.exitCode = main(process.argv);
