// source-scan.mjs
//
// Shared helpers for static source scanners. Reads local files only. Never writes, never
// touches the network. Deterministic output order (sorted paths).

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, extname, resolve } from 'node:path';

export const DEFAULT_IGNORES = new Set([
  'node_modules', '.git', 'dist', 'build', 'out', '.next', '.nuxt', '.svelte-kit', 'coverage',
  'vendor', '.turbo', '.cache', '.output', 'storybook-static',
]);

/**
 * Walk the given roots and return sorted file paths with one of `extensions`.
 * Files larger than `maxBytes` are skipped (usually generated bundles).
 */
export function walkFiles(roots, extensions, { ignore = DEFAULT_IGNORES, maxBytes = 1_000_000 } = {}) {
  const out = [];
  const exts = new Set(extensions);
  const visit = (path) => {
    let stat;
    try { stat = statSync(path); } catch { return; }
    if (stat.isDirectory()) {
      const name = path.split(/[\\/]/).pop();
      if (ignore.has(name)) return;
      for (const entry of readdirSync(path).sort()) visit(join(path, entry));
      return;
    }
    if (!stat.isFile() || stat.size > maxBytes) return;
    if (exts.has(extname(path).toLowerCase())) out.push(path);
  };
  for (const root of roots) visit(resolve(root));
  return [...new Set(out)].sort();
}

export function readText(path) {
  return readFileSync(path, 'utf8');
}

/** 1-based line number of a character index. */
export function lineOf(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i++) if (text.charCodeAt(i) === 10) line++;
  return line;
}

/** Run each regex rule over text; returns findings with line numbers. */
export function matchRules(text, rules, file) {
  const findings = [];
  for (const rule of rules) {
    const re = new RegExp(rule.pattern.source, rule.pattern.flags.includes('g') ? rule.pattern.flags : `${rule.pattern.flags}g`);
    let m;
    while ((m = re.exec(text)) !== null) {
      if (rule.filter && !rule.filter(m, text)) continue;
      findings.push({ rule: rule.id, message: rule.message, file, line: lineOf(text, m.index), match: m[0].trim().slice(0, 100) });
      if (m.index === re.lastIndex) re.lastIndex++;
    }
  }
  return findings;
}

export function rel(path) {
  return relative(process.cwd(), path) || path;
}

/** Minimal flag parsing for scanners: returns { flags, positionals }. */
export function parseScanArgs(argv, allowed) {
  const flags = {};
  const positionals = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '-h' || a === '--help') { flags.help = true; continue; }
    if (!a.startsWith('--')) { positionals.push(a); continue; }
    const name = a.slice(2);
    if (!(name in allowed)) throw new Error(`Unknown option ${a}`);
    if (allowed[name] === 'boolean') flags[name] = true;
    else {
      const v = argv[++i];
      if (v === undefined) throw new Error(`Option ${a} needs a value`);
      flags[name] = v;
    }
  }
  return { flags, positionals };
}
