#!/usr/bin/env node
// Verify vendored shared files are present, current, and not hand-edited; and that no skill
// file points outside its own directory.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve, relative, dirname, isAbsolute } from 'node:path';
import { loadCatalog, SKILLS_DIR, repoRel, reporter, listFiles, markdownLinks, codePathRefs, isExternal } from './lib/repo.mjs';
import { computeVendored, VENDORED_DIRS } from './lib/vendor.mjs';

export function checkShared() {
  const r = reporter('check-shared');
  const catalog = loadCatalog();
  const { files, problems } = computeVendored(catalog);
  for (const p of problems) r.error(p);

  for (const [path, expected] of files) {
    if (!existsSync(path)) { r.error(`missing vendored file ${repoRel(path)} (run npm run sync)`); continue; }
    if (readFileSync(path, 'utf8') !== expected) r.error(`stale or hand-edited vendored file ${repoRel(path)} (run npm run sync)`);
  }
  for (const skill of catalog.skills) {
    for (const sub of VENDORED_DIRS) {
      const dir = join(SKILLS_DIR, skill.name, sub);
      if (!existsSync(dir)) continue;
      for (const entry of readdirSync(dir)) {
        if (!files.has(join(dir, entry))) r.error(`undeclared file in ${repoRel(dir)}: ${entry} (run npm run sync)`);
      }
    }
  }

  // Self-containment: nothing inside a skill may reference a path outside that skill.
  for (const skill of catalog.skills) {
    const root = join(SKILLS_DIR, skill.name);
    if (!existsSync(root)) continue;
    for (const file of listFiles(root)) {
      if (!/\.(md|mjs|js|json)$/.test(file)) continue;
      const text = readFileSync(file, 'utf8');
      const escapes = (target, base) => {
        const abs = resolve(base, target.split('#')[0]);
        const rel = relative(root, abs);
        return rel.startsWith('..') || isAbsolute(rel);
      };
      if (file.endsWith('.md')) {
        for (const link of markdownLinks(text)) {
          if (isExternal(link.target)) continue;
          if (link.target.startsWith('/') || escapes(link.target, dirname(file))) {
            r.error(`${repoRel(file)}:${link.line}: link "${link.target}" escapes the skill directory`);
          }
        }
        for (const ref of codePathRefs(text)) {
          if (escapes(ref.target, root)) r.error(`${repoRel(file)}:${ref.line}: path "${ref.target}" escapes the skill directory`);
        }
      } else {
        const re = /(?:from\s+|import\(\s*)['"](\.{1,2}\/[^'"]+)['"]/g;
        let m;
        while ((m = re.exec(text)) !== null) {
          if (escapes(m[1], dirname(file))) r.error(`${repoRel(file)}: import "${m[1]}" escapes the skill directory`);
        }
      }
      if (/\.\.\/\.\.\/shared\//.test(text)) r.error(`${repoRel(file)}: references ../../shared/ (not present after install)`);
    }
  }
  return r;
}

if (process.argv[1]?.endsWith('check-shared.mjs')) {
  process.exitCode = checkShared().finish();
}
