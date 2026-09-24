#!/usr/bin/env node
// Check that every relative markdown link in the repository resolves to an existing file.
// External links are not fetched (no network).

import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { ROOT, listFiles, markdownLinks, isExternal, repoRel, reporter } from './lib/repo.mjs';

export function checkLinks({ quiet = false } = {}) {
  const r = reporter('check-links');
  const files = listFiles(ROOT).filter((f) => f.endsWith('.md'));
  let count = 0;
  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    for (const link of markdownLinks(text)) {
      if (isExternal(link.target)) continue;
      count++;
      const path = link.target.split('#')[0];
      if (!path) continue;
      const target = path.startsWith('/') ? resolve(ROOT, `.${path}`) : resolve(dirname(file), decodeURI(path));
      if (!existsSync(target)) r.error(`${repoRel(file)}:${link.line}: broken link "${link.target}"`);
    }
  }
  if (!quiet) process.stdout.write(`  checked ${count} relative links in ${files.length} markdown files\n`);
  r.finish({ quiet });
  return r;
}

if (process.argv[1]?.endsWith('check-links.mjs')) {
  process.exitCode = checkLinks().errors.length ? 1 : 0;
}
