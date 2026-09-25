#!/usr/bin/env node
// Regenerate derived catalog fields from SKILL.md frontmatter and the filesystem, and the
// skills table in README.md. With --check, fail if anything is out of date instead of writing.

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, SKILLS_DIR, CATALOG_PATH, loadCatalog, readSkill } from './lib/repo.mjs';

const START = '<!-- skills-table:start -->';
const END = '<!-- skills-table:end -->';

function ownFiles(skill, sub, ext) {
  const dir = join(SKILLS_DIR, skill, sub);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(ext) && !statSync(join(dir, f)).isDirectory())
    .sort()
    .map((f) => `${sub}/${f}`);
}

export function buildCatalog() {
  const catalog = loadCatalog();
  const names = catalog.skills.map((s) => s.name);
  const section = (body, heading) => (body.split(`\n${heading}\n`)[1] ?? '').split('\n## ')[0];
  const bullets = (text) => text.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2).trim());
  for (const skill of catalog.skills) {
    const { data, body } = readSkill(skill.name);
    skill.description = data.description;
    skill.version = data.metadata?.version;
    skill.activationExamples = bullets(section(body, '## Use this when')).slice(0, 4);
    skill.antiTriggers = bullets(section(body, '## Do not use this when'));
    skill.relatedSkills = names.filter((n) => n !== skill.name && new RegExp(`\\b${n}\\b`).test(body));
    skill.precedentModules = (skill.shared ?? []).filter((m) => m.startsWith('shared/precedent/'));
    skill.designIntelligenceModules = (skill.shared ?? []).filter((m) => m.startsWith('shared/design-intelligence/'));
    skill.references = ownFiles(skill.name, 'references', '.md');
    skill.scripts = ownFiles(skill.name, 'scripts', '.mjs');
  }
  return catalog;
}

export function buildTable(catalog) {
  const rows = catalog.skills.map((s) => `| [\`${s.name}\`](skills/${s.name}/SKILL.md) | ${s.category} | ${s.useWhen.replace(/\|/g, '\\|')} |`);
  return [START, '| Skill | Area | Use when |', '|---|---|---|', ...rows, END].join('\n');
}

export function renderReadme(readme, catalog) {
  const start = readme.indexOf(START);
  const end = readme.indexOf(END);
  if (start === -1 || end === -1) throw new Error('README.md is missing the skills-table markers');
  return readme.slice(0, start) + buildTable(catalog) + readme.slice(end + END.length);
}

function main() {
  const check = process.argv.includes('--check');
  const catalog = buildCatalog();
  const catalogText = `${JSON.stringify(catalog, null, 2)}\n`;
  const readmePath = join(ROOT, 'README.md');
  const readme = readFileSync(readmePath, 'utf8');
  const nextReadme = renderReadme(readme, catalog);
  const stale = [];
  if (readFileSync(CATALOG_PATH, 'utf8') !== catalogText) stale.push('catalog/skills.json');
  if (readme !== nextReadme) stale.push('README.md skills table');
  if (check) {
    if (stale.length) {
      process.stdout.write(`generate-catalog: out of date: ${stale.join(', ')} (run npm run catalog)\n`);
      return 1;
    }
    process.stdout.write('generate-catalog: ok (catalog and README table are current)\n');
    return 0;
  }
  writeFileSync(CATALOG_PATH, catalogText);
  writeFileSync(readmePath, nextReadme);
  process.stdout.write(`generate-catalog: ${stale.length ? `updated ${stale.join(', ')}` : 'already current'}\n`);
  return 0;
}

if (process.argv[1]?.endsWith('generate-catalog.mjs')) process.exitCode = main();
