#!/usr/bin/env node
// Copy shared modules (shared/, examples/) into each skill's references/_shared and
// scripts/_shared folders, as declared in catalog/skills.json. Deterministic; removes stale files.

import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { loadCatalog, SKILLS_DIR, repoRel } from './lib/repo.mjs';
import { computeVendored, VENDORED_DIRS } from './lib/vendor.mjs';

if (process.argv.includes('--help')) {
  process.stdout.write(`sync-shared — vendor shared modules into each skill

Usage: node scripts/sync-shared.mjs

Reads catalog/skills.json (coreModules + each skill's shared and sharedScripts), writes
copies with a GENERATED header into skills/<name>/references/_shared/ and
skills/<name>/scripts/_shared/, and deletes files there that are no longer declared.
`);
  process.exit(0);
}

const catalog = loadCatalog();
const { files, problems } = computeVendored(catalog);
if (problems.length) {
  for (const p of problems) process.stderr.write(`error ${p}\n`);
  process.stderr.write('sync-shared: aborted, fix the problems above\n');
  process.exit(1);
}

let written = 0;
let unchanged = 0;
for (const [path, content] of files) {
  mkdirSync(dirname(path), { recursive: true });
  if (existsSync(path) && readFileSync(path, 'utf8') === content) { unchanged++; continue; }
  writeFileSync(path, content);
  written++;
}

let removed = 0;
for (const skill of catalog.skills) {
  for (const sub of VENDORED_DIRS) {
    const dir = join(SKILLS_DIR, skill.name, sub);
    if (!existsSync(dir)) continue;
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (!files.has(full)) { rmSync(full, { recursive: true }); removed++; process.stdout.write(`removed ${repoRel(full)}\n`); }
    }
  }
}
process.stdout.write(`sync-shared: ${written} written, ${unchanged} unchanged, ${removed} removed\n`);
