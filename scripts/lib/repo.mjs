// Shared helpers for repository tooling. No dependencies, no network.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative, sep, posix, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const SKILLS_DIR = join(ROOT, 'skills');
export const CATALOG_PATH = join(ROOT, 'catalog', 'skills.json');

export const toPosix = (p) => p.split(sep).join(posix.sep);
export const repoRel = (p) => toPosix(relative(ROOT, p));

export function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

export function loadCatalog() {
  return readJson(CATALOG_PATH);
}

export function packageVersion() {
  return readJson(join(ROOT, 'package.json')).version;
}

/** Directory names under skills/ that contain a SKILL.md. */
export function skillDirs() {
  if (!existsSync(SKILLS_DIR)) return [];
  return readdirSync(SKILLS_DIR)
    .filter((name) => statSync(join(SKILLS_DIR, name)).isDirectory())
    .sort();
}

/** Recursively list files under `dir`, sorted, skipping `ignore` directory names. */
export function listFiles(dir, { ignore = new Set(['.git', 'node_modules']) } = {}) {
  const out = [];
  const visit = (d) => {
    for (const entry of readdirSync(d).sort()) {
      const full = join(d, entry);
      const stat = statSync(full);
      if (stat.isDirectory()) {
        if (!ignore.has(entry)) visit(full);
      } else {
        out.push(full);
      }
    }
  };
  if (existsSync(dir)) visit(dir);
  return out;
}

// ---------------------------------------------------------------------------
// Frontmatter
// ---------------------------------------------------------------------------

export class FrontmatterError extends Error {}

function parseScalar(raw, where) {
  const value = raw.trim();
  if (value === '') return '';
  if (value.startsWith('"')) {
    if (!value.endsWith('"') || value.length < 2) throw new FrontmatterError(`Unterminated double-quoted string at ${where}`);
    try {
      return JSON.parse(value);
    } catch {
      throw new FrontmatterError(`Invalid double-quoted string at ${where}`);
    }
  }
  if (value.startsWith("'")) {
    if (!value.endsWith("'") || value.length < 2) throw new FrontmatterError(`Unterminated single-quoted string at ${where}`);
    return value.slice(1, -1).replace(/''/g, "'");
  }
  if (/^[>|]/.test(value)) throw new FrontmatterError(`Block scalars are not supported by this validator at ${where}; use a quoted string`);
  if (/:\s/.test(value) || value.includes(' #')) {
    throw new FrontmatterError(`Plain value containing ": " or " #" at ${where}; quote it`);
  }
  return value;
}

/**
 * Parse the constrained YAML frontmatter used by SKILL.md files:
 * top-level `key: value` pairs and one level of nested maps (e.g. metadata).
 * Returns { data, body, bodyStartLine }.
 */
export function parseFrontmatter(text, file = 'SKILL.md') {
  const lines = text.split(/\r?\n/);
  if (lines[0] !== '---') throw new FrontmatterError(`${file}: must start with '---' frontmatter`);
  const end = lines.indexOf('---', 1);
  if (end === -1) throw new FrontmatterError(`${file}: frontmatter is not closed with '---'`);
  const data = {};
  let currentMap = null;
  for (let i = 1; i < end; i++) {
    const line = lines[i];
    const where = `${file}:${i + 1}`;
    if (line.trim() === '' || line.trim().startsWith('#')) continue;
    if (line.includes('\t')) throw new FrontmatterError(`Tab character at ${where}`);
    const nested = line.match(/^ {2}([A-Za-z0-9_-]+):(.*)$/);
    const top = line.match(/^([A-Za-z0-9_-]+):(.*)$/);
    if (nested) {
      if (!currentMap) throw new FrontmatterError(`Indented key without a parent map at ${where}`);
      data[currentMap][nested[1]] = parseScalar(nested[2], where);
    } else if (top) {
      const [, key, rest] = top;
      if (key in data) throw new FrontmatterError(`Duplicate key "${key}" at ${where}`);
      if (rest.trim() === '') {
        data[key] = {};
        currentMap = key;
      } else {
        data[key] = parseScalar(rest, where);
        currentMap = null;
      }
    } else {
      throw new FrontmatterError(`Cannot parse frontmatter line at ${where}: "${line}"`);
    }
  }
  return { data, body: lines.slice(end + 1).join('\n'), bodyStartLine: end + 2 };
}

export function readSkill(name) {
  const path = join(SKILLS_DIR, name, 'SKILL.md');
  const text = readFileSync(path, 'utf8');
  return { path, text, ...parseFrontmatter(text, repoRel(path)) };
}

// ---------------------------------------------------------------------------
// Links and path references
// ---------------------------------------------------------------------------

/** Strip fenced code blocks (``` … ```) so example links inside code are ignored. */
export function stripFences(text) {
  return text.replace(/^(\s*)(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\2[^\n]*$/gm, '');
}

/** Markdown links and images: returns [{ target, line }]. */
export function markdownLinks(text) {
  const out = [];
  const clean = stripFences(text);
  const re = /!?\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g;
  let m;
  while ((m = re.exec(clean)) !== null) {
    out.push({ target: m[1], line: clean.slice(0, m.index).split('\n').length });
  }
  return out;
}

/** Inline-code paths such as `references/foo.md` or `scripts/bar.mjs`. */
export function codePathRefs(text) {
  const out = [];
  const re = /`((?:references|scripts|assets)\/[A-Za-z0-9_./-]+\.[A-Za-z0-9]+)`/g;
  let m;
  while ((m = re.exec(text)) !== null) out.push({ target: m[1], line: text.slice(0, m.index).split('\n').length });
  return out;
}

export const isExternal = (target) => /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(target);

/** Shared module destination inside a skill for a repo-relative source path. */
export function vendoredPath(skillName, source) {
  const folder = source.endsWith('.md') ? join('references', '_shared') : join('scripts', '_shared');
  return join(SKILLS_DIR, skillName, folder, basename(source));
}

export function generatedHeader(source) {
  if (source.endsWith('.md')) {
    return `<!-- GENERATED FROM ${source}. DO NOT EDIT DIRECTLY. Edit the source and run \`npm run sync\`. -->\n\n`;
  }
  return `// GENERATED FROM ${source}. DO NOT EDIT DIRECTLY. Edit the source and run \`npm run sync\`.\n`;
}

/** Every shared module (and script) a skill should contain, as repo-relative paths. */
export function modulesFor(catalog, skill) {
  return [...new Set([...(catalog.coreModules ?? []), ...(skill.shared ?? []), ...(skill.sharedScripts ?? [])])];
}

/** First markdown heading, used for generated indexes. */
export function firstHeading(text) {
  const m = text.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : '';
}

/** Collect results: helpers for consistent reporting across scripts. */
export function reporter(name) {
  const errors = [];
  const warnings = [];
  return {
    error: (msg) => errors.push(msg),
    warn: (msg) => warnings.push(msg),
    errors,
    warnings,
    finish({ quiet = false } = {}) {
      if (!quiet) {
        for (const w of warnings) process.stdout.write(`  warn  ${w}\n`);
        for (const e of errors) process.stdout.write(`  error ${e}\n`);
        process.stdout.write(`${name}: ${errors.length ? 'FAILED' : 'ok'} (${errors.length} error${errors.length === 1 ? '' : 's'}, ${warnings.length} warning${warnings.length === 1 ? '' : 's'})\n`);
      }
      return errors.length ? 1 : 0;
    },
  };
}
