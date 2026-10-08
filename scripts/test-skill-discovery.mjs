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

function runNode(args, cwd = project) {
  return spawnSync(process.execPath, args, { cwd, env, encoding: 'utf8', timeout: 180000 });
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

  // The marketplace archive is one distributable skill, even though it contains all methods.
  const build = runNode([join(ROOT, 'scripts', 'build-marketplace-bundle.mjs')]);
  const zip = join(ROOT, 'dist', 'marketplace', 'Experience-Skills.zip');
  if (build.status !== 0 || !existsSync(zip)) {
    fail(`marketplace bundle build failed (status ${build.status}): ${(build.stderr ?? '').slice(-400)}`);
  } else {
    const extracted = join(temp, 'marketplace-source');
    mkdirSync(extracted);
    const unzip = spawnSync('unzip', ['-q', zip, '-d', extracted], { encoding: 'utf8' });
    const source = join(extracted, 'experience-skills');
    if (unzip.status !== 0 || !existsSync(join(source, 'SKILL.md'))) {
      fail(`marketplace ZIP extraction failed: ${unzip.stderr ?? unzip.status}`);
    } else {
      const listed = run(['add', source, '--list']);
      if (listed.status !== 0 || !/^\s*[│|]?\s*experience-skills\s*$/m.test(listed.output) || names.some((name) => new RegExp(`^[│|\\s]*${name}\\s*$`, 'm').test(listed.output))) {
        fail(`CLI did not detect exactly one marketplace skill (status ${listed.status}): ${listed.output.slice(-500)}`);
      } else pass('CLI detects exactly one marketplace skill: experience-skills');

      const installed = run(['add', source, '--skill', 'experience-skills', '-a', 'claude-code', '-y', '--copy']);
      const installedRoot = join(project, '.claude', 'skills', 'experience-skills');
      if (installed.status !== 0 || !existsSync(join(installedRoot, 'SKILL.md'))) {
        fail(`marketplace skill install failed (status ${installed.status}): ${installed.output.slice(-500)}`);
      } else {
        const packageManifest = JSON.parse(readFileSync(join(installedRoot, 'manifest.json'), 'utf8'));
        const missingMethods = packageManifest.specialists.filter((name) => !existsSync(join(installedRoot, 'modules', name, 'METHOD.md')));
        const missingRefs = packageManifest.files.filter((file) => file.path.endsWith('.md') && !existsSync(join(installedRoot, file.path.replace(/^experience-skills\//, ''))));
        if (missingMethods.length || missingRefs.length) fail(`installed marketplace bundle is incomplete (methods: ${missingMethods.join(', ') || 'none'}; refs: ${missingRefs.length})`);
        else pass(`installed marketplace bundle retains all ${packageManifest.specialistCount} methods and ${packageManifest.files.filter((file) => file.path.endsWith('.md')).length} Markdown resources`);

        const scripts = packageManifest.files.filter((file) => /\/scripts\/(?!_shared\/)[^/]+\.mjs$/.test(file.path));
        for (const script of scripts) {
          const r = spawnSync(process.execPath, [join(installedRoot, script.path.replace('experience-skills/', '')), '--help'], { cwd: project, env, encoding: 'utf8', timeout: 30000 });
          if (r.status !== 0) fail(`${script.path}: installed --help failed (status ${r.status}): ${(r.stderr ?? '').slice(0, 200)}`);
        }
        if (scripts.length) pass(`installed bundle helper scripts run (--help): ${scripts.length}`);
      }
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
