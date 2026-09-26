#!/usr/bin/env node
// End-to-end check with the public `skills` CLI, in a temporary directory:
//   1. `skills add <this repo> --list` discovers every skill in the catalog
//   2. Individual skills install and arrive self-contained (vendored shared files, working scripts)
//
// Uses the network once to fetch the CLI via npx (cached afterwards). Sets HOME to a temporary
// directory so no global agent configuration is touched. Telemetry is disabled.
// Set SKIP_DISCOVERY=1 to skip (for offline work); CI always runs it.

import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { ROOT, SKILLS_DIR, loadCatalog, modulesFor, vendoredPath, listFiles, toPosix, markdownLinks, isExternal } from './lib/repo.mjs';

const CLI = `skills@${process.env.SKILLS_CLI_VERSION ?? '1.7.0'}`;
const INSTALL = (process.env.DISCOVERY_SKILLS ?? 'experience-architect,composition-repair,anti-slop-ui,anti-ai-slop,interface-forensics,use-all-skills').split(',');

if (process.argv.includes('--help')) {
  process.stdout.write(`test-skill-discovery — verify the repo with the public skills CLI

Usage: node scripts/test-skill-discovery.mjs

Env:
  SKILLS_CLI_VERSION   CLI version to test (default 1.7.0)
  DISCOVERY_SKILLS     Comma-separated skills to install (default ${INSTALL.join(',')})
  DISCOVERY_NPM_CACHE  Optional npm cache to reuse (default: isolated temp cache)
  SKIP_DISCOVERY=1     Skip this test (prints SKIPPED)
`);
  process.exit(0);
}
if (process.env.SKIP_DISCOVERY === '1') {
  process.stdout.write('test-skill-discovery: SKIPPED (SKIP_DISCOVERY=1)\n');
  process.exit(0);
}

const failures = [];
const fail = (msg) => { failures.push(msg); process.stdout.write(`  FAIL ${msg}\n`); };
const pass = (msg) => process.stdout.write(`  ok   ${msg}\n`);

const temp = mkdtempSync(join(tmpdir(), 'experience-skills-discovery-'));
const home = join(temp, 'home');
const project = join(temp, 'project');
mkdirSync(home);
mkdirSync(project);
const env = {
  ...process.env,
  HOME: home,
  USERPROFILE: home,
  DISABLE_TELEMETRY: '1',
  DO_NOT_TRACK: '1',
  CI: '1',
  // Keep discovery isolated from a user's possibly unwritable global npm cache. Callers can
  // still provide npm_config_cache when they explicitly want to reuse one.
  npm_config_cache: process.env.DISCOVERY_NPM_CACHE ?? join(temp, 'npm-cache'),
  npm_config_update_notifier: 'false',
};

function run(args) {
  const result = spawnSync('npx', ['-y', CLI, ...args], { cwd: project, env, encoding: 'utf8', timeout: 180000, shell: process.platform === 'win32' });
  // Strip ANSI escape codes for parsing.
  const output = `${result.stdout ?? ''}${result.stderr ?? ''}`.replace(/\u001b\[[0-9;?]*[A-Za-z]/g, '');
  return { status: result.status, output, error: result.error };
}

try {
  process.stdout.write(`test-skill-discovery (${CLI}, temp dir)\n`);
  const catalog = loadCatalog();
  const names = catalog.skills.map((s) => s.name);

  // 1. Discovery
  const list = run(['add', ROOT, '--list']);
  if (list.error || list.status !== 0) {
    fail(`"skills add --list" failed (status ${list.status}): ${list.error?.message ?? list.output.slice(-400)}`);
  } else {
    const listed = new Set(names.filter((n) => new RegExp(`^[│|\\s]*${n}\\s*$`, 'm').test(list.output)));
    const missing = names.filter((n) => !listed.has(n));
    if (missing.length) fail(`CLI did not list: ${missing.join(', ')}`);
    else pass(`CLI lists all ${names.length} skills`);
  }

  // 2. Individual installs
  for (const name of INSTALL) {
    const res = run(['add', ROOT, '--skill', name, '-a', 'claude-code', '-y', '--copy']);
    const installed = join(project, '.claude', 'skills', name);
    if (res.status !== 0 || !existsSync(join(installed, 'SKILL.md'))) {
      fail(`install of ${name} failed (status ${res.status}): ${res.output.slice(-400)}`);
      continue;
    }
    pass(`installed ${name}`);

    const skill = catalog.skills.find((s) => s.name === name);
    const missingShared = modulesFor(catalog, skill)
      .map((m) => relative(join(SKILLS_DIR, name), vendoredPath(name, m)))
      .filter((rel) => !existsSync(join(installed, rel)));
    if (missingShared.length) fail(`${name}: vendored files missing after install: ${missingShared.join(', ')}`);
    else pass(`${name}: all ${modulesFor(catalog, skill).length} vendored shared files present`);

    const source = new Set(listFiles(join(SKILLS_DIR, name)).map((f) => toPosix(relative(join(SKILLS_DIR, name), f))));
    const copied = new Set(listFiles(installed).map((f) => toPosix(relative(installed, f))));
    const notCopied = [...source].filter((f) => !copied.has(f));
    if (notCopied.length) fail(`${name}: files not installed: ${notCopied.slice(0, 5).join(', ')}`);
    else pass(`${name}: installed file set matches the repository (${source.size} files)`);

    let broken = 0;
    for (const file of listFiles(installed).filter((f) => f.endsWith('.md'))) {
      const text = readFileSync(file, 'utf8');
      if (text.includes('../../shared/')) broken++;
      for (const link of markdownLinks(text)) {
        if (!isExternal(link.target) && !existsSync(join(file, '..', link.target.split('#')[0]))) broken++;
      }
    }
    if (broken) fail(`${name}: ${broken} broken or escaping references after install`);
    else pass(`${name}: no broken or escaping references after install`);

    for (const script of skill.scripts ?? []) {
      const r = spawnSync(process.execPath, [join(installed, script), '--help'], { cwd: project, encoding: 'utf8' });
      if (r.status !== 0) fail(`${name}: installed ${script} --help exited ${r.status}: ${r.stderr.slice(0, 200)}`);
      else pass(`${name}: installed ${script} runs (--help)`);
    }
  }

  if (existsSync(join(home, '.claude')) || existsSync(join(home, '.agents'))) {
    fail('project-scope install wrote into the (temporary) global home directory');
  } else {
    pass('no global configuration written');
  }
} finally {
  rmSync(temp, { recursive: true, force: true });
}

process.stdout.write(`test-skill-discovery: ${failures.length ? `FAILED (${failures.length})` : 'ok'}\n`);
process.exitCode = failures.length ? 1 : 0;
