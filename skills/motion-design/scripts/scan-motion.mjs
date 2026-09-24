#!/usr/bin/env node
// Static scan for common motion performance and accessibility problems.
// Usage: node scan-motion.mjs <paths...> [--json]

import { walkFiles, readText, matchRules, rel, parseScanArgs } from './_shared/source-scan.mjs';

const HELP = `scan-motion — static signals for motion performance and accessibility

Usage:
  node scan-motion.mjs <file-or-dir> [more paths] [--json] [--max-ms N]

Scans .css .scss .sass .less .js .jsx .ts .tsx .vue .svelte .html .astro files.
Ignores node_modules, build output, and files over 1 MB. Reads files only.

Signals:
  layout-property     transition/animation of width, height, top, left, margin, padding…
  transition-all      "transition: all" (animates unintended properties)
  long-duration       durations above --max-ms (default 1000)
  infinite            infinite animations (check pausing and reduced motion)
  no-reduced-motion   animations found but no prefers-reduced-motion handling in scanned set

Exit codes: 0 no signals · 1 signals found · 2 usage error`;

const EXTENSIONS = ['.css', '.scss', '.sass', '.less', '.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte', '.html', '.astro', '.mjs'];
const LAYOUT_PROPS = '(?:width|height|top|left|right|bottom|margin(?:-[a-z]+)?|padding(?:-[a-z]+)?|max-height|max-width|min-height|min-width)';

export function rulesFor(maxMs) {
  return [
    {
      id: 'layout-property',
      message: 'Animating a layout property; prefer transform/opacity (or FLIP).',
      pattern: new RegExp(`transition(?:-property)?\\s*:[^;{}\\n]*\\b${LAYOUT_PROPS}\\b`, 'i'),
    },
    {
      id: 'layout-property',
      message: 'Keyframes animate a layout property; prefer transform/opacity.',
      pattern: new RegExp(`@keyframes[^{]*\\{[^@]*?\\b${LAYOUT_PROPS}\\s*:`, 'i'),
    },
    {
      id: 'transition-all',
      message: '"transition: all" animates unintended (often layout) properties; list properties explicitly.',
      pattern: /transition\s*:\s*all\b|transition-property\s*:\s*all\b|\btransition-all\b/i,
    },
    {
      id: 'long-duration',
      message: `Duration above ${maxMs} ms; confirm this is a rare, skippable moment.`,
      pattern: /(?:transition|animation)(?:-duration)?\s*:[^;{}\n]*?(\d+(?:\.\d+)?)(ms|s)\b|duration\s*[:=]\s*(\d{4,})/i,
      filter: (m) => {
        if (m[3]) return Number(m[3]) > maxMs;
        const ms = m[2] === 's' ? Number(m[1]) * 1000 : Number(m[1]);
        return ms > maxMs;
      },
    },
    {
      id: 'infinite',
      message: 'Infinite animation; ensure it has a job, pauses offscreen, and stops under reduced motion.',
      pattern: /animation(?:-iteration-count)?\s*:[^;{}\n]*\binfinite\b|\banimate-(?:spin|ping|pulse|bounce)\b|repeat\s*:\s*Infinity/i,
    },
  ];
}

const ANIMATION_PRESENT = /@keyframes|\btransition\s*:|\banimation\s*:|\banimate\(|framer-motion|motion\.|gsap|\banimate-[a-z]/i;
const REDUCED_MOTION = /prefers-reduced-motion|useReducedMotion|reducedMotion|motion-reduce:|motion-safe:/i;

export function scan(paths, { maxMs = 1000 } = {}) {
  const files = walkFiles(paths, EXTENSIONS);
  const rules = rulesFor(maxMs);
  const findings = [];
  let animatedFiles = 0;
  let reducedMotionHandled = false;
  for (const file of files) {
    const text = readText(file);
    if (ANIMATION_PRESENT.test(text)) animatedFiles++;
    if (REDUCED_MOTION.test(text)) reducedMotionHandled = true;
    findings.push(...matchRules(text, rules, rel(file)));
  }
  if (animatedFiles > 0 && !reducedMotionHandled) {
    findings.push({ rule: 'no-reduced-motion', message: `Animations found in ${animatedFiles} file(s) but no prefers-reduced-motion handling in the scanned set.`, file: '(scanned set)', line: 0, match: '' });
  }
  return { filesScanned: files.length, animatedFiles, reducedMotionHandled, findings };
}

function toText(result) {
  const out = [`scan-motion · ${result.filesScanned} files scanned · ${result.animatedFiles} with animation`];
  if (!result.findings.length) {
    out.push('No signals. Still review which events deserve motion; the scanner cannot judge meaning.');
    return `${out.join('\n')}\n`;
  }
  const byRule = {};
  for (const f of result.findings) (byRule[f.rule] ??= []).push(f);
  for (const [rule, list] of Object.entries(byRule)) {
    out.push('', `${rule} (${list.length}) — ${list[0].message}`);
    for (const f of list.slice(0, 25)) out.push(`  ${f.file}${f.line ? `:${f.line}` : ''}  ${f.match}`);
    if (list.length > 25) out.push(`  … ${list.length - 25} more (use --json)`);
  }
  out.push('', 'Signals, not verdicts: review each in context.');
  return `${out.join('\n')}\n`;
}

function main(argv) {
  let parsed;
  try { parsed = parseScanArgs(argv.slice(2), { json: 'boolean', 'max-ms': 'string' }); } catch (e) {
    process.stderr.write(`${e.message}\nRun with --help.\n`); return 2;
  }
  const { flags, positionals } = parsed;
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  if (!positionals.length) { process.stderr.write('Give at least one file or directory. Run with --help.\n'); return 2; }
  const result = scan(positionals, { maxMs: Number(flags['max-ms'] ?? 1000) });
  if (flags.json) process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  else process.stdout.write(toText(result));
  return result.findings.length ? 1 : 0;
}

if (process.argv[1]?.endsWith('scan-motion.mjs')) process.exitCode = main(process.argv);
