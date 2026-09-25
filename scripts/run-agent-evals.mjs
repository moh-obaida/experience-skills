#!/usr/bin/env node
// Behavioral evaluation: run a real agent on each scenario with and without the skills installed,
// record what it loaded and ran, grade the answers with a condition-blind judge, and write a report.
//
// This spends model usage. It is not part of `npm run check`. Use --dry-run to see what would run.

import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, cpSync, writeFileSync, readFileSync, rmSync, existsSync, readdirSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { ROOT, readJson } from './lib/repo.mjs';
import { parseScenario, parseTranscript, answerSignals, judgePrompt, parseJudge, routingScore, renderReport } from './lib/agent-eval.mjs';

const HELP = `run-agent-evals — with/without-skills behavioral evaluation on tests/scenarios

Usage:
  node scripts/run-agent-evals.mjs [options]

Options:
  --scenarios LIST   Comma-separated scenario ids (file names without .md). Default: all
  --anchors          Only regression-anchor scenarios (those with "anchor" in routing.json)
  --conditions LIST  with,without (default both)
  --model NAME       Model for the agent under test (default: the CLI's default)
  --judge-model NAME Model for the judge (default: the CLI's default)
  --agent NAME        claude (default) or codex; select the adapter explicitly
  --mode MODE         review (default) or edit; edit enables file changes for build/repair scenarios
  --repeat N          independent samples per scenario/condition (default 1)
  --max-turns N      Agent turn limit (default 30)
  --parallel N       Concurrent runs (default 2)
  --out DIR          Output directory (default tests/evals/results/<timestamp>)
  --dry-run          Prepare projects and print commands without calling the agent
  --keep             Keep temporary project directories
  --help             Show this help

Env:
  CLAUDE_BIN         Path to the Claude Code CLI (default: "claude" on PATH). The CLI must be
                     logged in, or ANTHROPIC_API_KEY must be set.

Each run: a fresh temporary project containing the scenario's fixtures; for "with", all skills
copied to .claude/skills/. Review runs are read-only. Edit runs enable file changes and record a
before/after file snapshot plus changed files. The judge sees only the scenario and the answer.`;

function parse(argv) {
  const opts = { conditions: ['with', 'without'], maxTurns: 30, parallel: 2, agent: 'claude', mode: 'review', repeat: 1 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => { const v = argv[++i]; if (v === undefined) throw new Error(`${a} needs a value`); return v; };
    if (a === '--help' || a === '-h') opts.help = true;
    else if (a === '--scenarios') opts.scenarios = next().split(',');
    else if (a === '--anchors') opts.anchors = true;
    else if (a === '--conditions') opts.conditions = next().split(',');
    else if (a === '--model') opts.model = next();
    else if (a === '--judge-model') opts.judgeModel = next();
    else if (a === '--agent') opts.agent = next();
    else if (a === '--mode') opts.mode = next();
    else if (a === '--repeat') opts.repeat = Math.max(1, Number(next()));
    else if (a === '--max-turns') opts.maxTurns = Number(next());
    else if (a === '--parallel') opts.parallel = Math.max(1, Number(next()));
    else if (a === '--out') opts.out = next();
    else if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--keep') opts.keep = true;
    else throw new Error(`Unknown option ${a}`);
  }
  return opts;
}

const CLAUDE = process.env.CLAUDE_BIN || 'claude';
const CODEX = process.env.CODEX_BIN || 'codex';

function agentConfig(opts) {
  if (opts.agent === 'codex') return { bin: CODEX, args: ['exec', '--json', '--ephemeral', '--skip-git-repo-check', '-s', opts.mode === 'edit' ? 'workspace-write' : 'read-only'] };
  if (opts.agent !== 'claude') throw new Error(`unknown --agent ${opts.agent}; use claude or codex`);
  const allowed = ['Read', 'Glob', 'Grep', 'Skill', 'Bash(node:*)', 'Bash(ls:*)'];
  if (opts.mode === 'edit') allowed.push('Edit', 'Write');
  return { bin: CLAUDE, args: ['-p', '--output-format', 'stream-json', '--verbose', '--no-session-persistence', '--max-turns', String(opts.maxTurns), '--allowedTools', ...allowed] };
}

function agentArgs(prompt, opts) {
  const config = agentConfig(opts);
  const args = [...config.args];
  if (opts.agent === 'claude') args.splice(1, 0, prompt);
  else args.push(prompt);
  if (opts.model) args.push('--model', opts.model);
  return args;
}

function judgeArgs(prompt, opts) {
  const args = ['-p', prompt, '--output-format', 'json', '--no-session-persistence', '--max-turns', '1'];
  if (opts.judgeModel) args.push('--model', opts.judgeModel);
  return args;
}

function exec(args, cwd, env, timeoutMs, bin = CLAUDE) {
  return new Promise((resolve) => {
    const child = spawn(bin, args, { cwd, env, stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => { child.kill('SIGTERM'); stderr += '\n[timeout]'; }, timeoutMs);
    child.stdout.on('data', (d) => { stdout += d; });
    child.stderr.on('data', (d) => { stderr += d; });
    child.on('error', (e) => { clearTimeout(timer); resolve({ code: -1, stdout, stderr: `${stderr}${e.message}` }); });
    child.on('close', (code) => { clearTimeout(timer); resolve({ code, stdout, stderr }); });
  });
}

function snapshotProject(root) {
  const files = {};
  const visit = (dir) => {
    for (const entry of readdirSync(dir)) {
      if (entry === '.claude' || entry === '.git' || entry === 'node_modules') continue;
      const path = join(dir, entry);
      const rel = path.slice(root.length + 1);
      if (statSync(path).isDirectory()) visit(path);
      else files[rel] = createHash('sha256').update(readFileSync(path)).digest('hex');
    }
  };
  visit(root);
  return files;
}

function prepareProject(entry, condition) {
  const dir = mkdtempSync(join(tmpdir(), `xs-eval-${basename(entry.file, '.md')}-${condition}-`));
  for (const [dest, src] of Object.entries(entry.fixtures ?? {})) cpSync(join(ROOT, src), join(dir, dest));
  writeFileSync(join(dir, 'README.md'), '# Product under review\n\nFiles in this folder belong to the product described in the request.\n');
  if (condition === 'with') {
    mkdirSync(join(dir, '.claude', 'skills'), { recursive: true });
    cpSync(join(ROOT, 'skills'), join(dir, '.claude', 'skills'), { recursive: true });
  }
  return dir;
}

async function runOne(entry, scenario, condition, opts, outDir, sample = 1) {
  const id = basename(entry.file, '.md');
  const project = prepareProject(entry, condition);
  const mode = opts.mode !== 'review' ? opts.mode : (entry.mode ?? scenario.mode ?? 'review');
  const runOpts = { ...opts, mode };
  const scenarioId = opts.repeat > 1 ? `${id}#${sample}` : id;
  const record = { scenarioId, sourceScenarioId: id, sample, condition, mode, anchor: entry.anchor ?? null, project };
  const beforeFiles = snapshotProject(project);
  record.beforeFiles = Object.keys(beforeFiles).length;
  const env = { ...process.env, PLAYWRIGHT_MODULE: join(ROOT, 'node_modules', 'playwright-core', 'index.mjs') };
  const args = agentArgs(scenario.prompt, runOpts);
  if (opts.dryRun) {
    const config = agentConfig(runOpts);
    record.command = [config.bin, ...args.map((a) => (a.includes(' ') ? JSON.stringify(a) : a))].join(' ');
    return record;
  }
  const started = Date.now();
  const config = agentConfig(runOpts);
  const res = await exec(args, project, env, 15 * 60 * 1000, config.bin);
  record.seconds = Math.round((Date.now() - started) / 1000);
  writeFileSync(join(outDir, `${id}.${condition}.${sample}.transcript.jsonl`), res.stdout);
  record.transcript = parseTranscript(res.stdout);
  const afterFiles = snapshotProject(project);
  record.afterFiles = Object.keys(afterFiles).length;
  record.changedFiles = [...new Set([...Object.keys(beforeFiles), ...Object.keys(afterFiles)])]
    .filter((file) => beforeFiles[file] !== afterFiles[file]);
  if (res.code !== 0 || record.transcript.error || !record.transcript.answer) {
    record.error = record.transcript.error ?? (res.stderr.trim().split('\n').pop() || `exit ${res.code}`);
  }
  writeFileSync(join(outDir, `${id}.${condition}.${sample}.answer.md`), record.transcript.answer || '');
  record.signals = answerSignals(record.transcript.answer || '');
  record.routing = routingScore(scenario.expectedSkills, record.transcript.skillsLoaded);
  const requiredReferences = entry.requiredReferences ?? [];
  const loadedReferences = record.transcript.referencesRead;
  record.requiredReferenceCompliance = {
    required: requiredReferences,
    loaded: requiredReferences.filter((reference) => loadedReferences.includes(reference)),
    missed: requiredReferences.filter((reference) => !loadedReferences.includes(reference)),
    rate: requiredReferences.length ? requiredReferences.filter((reference) => loadedReferences.includes(reference)).length / requiredReferences.length : null,
  };
  if (!record.error) {
    const j = await exec(judgeArgs(judgePrompt(scenario, record.transcript.answer), opts), tmpdir(), process.env, 5 * 60 * 1000, CLAUDE);
    try {
      const outer = JSON.parse(j.stdout);
      record.judge = parseJudge(outer.result ?? '');
      record.judgeCostUsd = outer.total_cost_usd ?? null;
    } catch (e) {
      record.judgeError = `${e.message}: ${j.stdout.slice(0, 200)}`;
    }
  }
  if (!opts.keep) rmSync(project, { recursive: true, force: true });
  delete record.transcript.answer;
  delete record.project; // machine-specific temp path; not part of the public record
  return record;
}

async function pool(tasks, n) {
  const results = [];
  let i = 0;
  const workers = Array.from({ length: n }, async () => {
    while (i < tasks.length) {
      const k = i++;
      results[k] = await tasks[k]();
    }
  });
  await Promise.all(workers);
  return results;
}

async function main() {
  const opts = parse(process.argv.slice(2));
  if (opts.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const fixtures = readJson(join(ROOT, 'tests', 'evals', 'routing.json'));
  let entries = fixtures.scenarios;
  if (opts.anchors) entries = entries.filter((e) => e.anchor);
  if (opts.scenarios) entries = entries.filter((e) => opts.scenarios.includes(basename(e.file, '.md')));
  if (!entries.length) throw new Error('no scenarios selected');

  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const outDir = opts.out ?? join(ROOT, 'tests', 'evals', 'results', stamp);
  // Dry runs only prepare commands; do not create a repository results directory that concurrent
  // structural tests could observe while it is being removed.
  if (!opts.dryRun) mkdirSync(outDir, { recursive: true });

  const tasks = [];
  for (const entry of entries) {
    const scenario = parseScenario(readFileSync(join(ROOT, entry.file), 'utf8'));
    if (!scenario.prompt) throw new Error(`${entry.file} has no "## Prompt" section`);
    for (let sample = 1; sample <= opts.repeat; sample++) {
      for (const condition of opts.conditions) tasks.push(() => {
        process.stdout.write(`… ${basename(entry.file, '.md')} [${condition} sample ${sample}]\n`);
        return runOne(entry, scenario, condition, opts, outDir, sample);
      });
    }
  }
  process.stdout.write(`${opts.dryRun ? 'DRY RUN: ' : ''}${tasks.length} runs → ${outDir}\n`);
  const runs = await pool(tasks, opts.parallel);

  if (opts.dryRun) {
    for (const r of runs) process.stdout.write(`\n[${r.scenarioId} · ${r.condition}] cwd=${r.project}\n${r.command}\n`);
    if (!opts.keep) for (const r of runs) rmSync(r.project, { recursive: true, force: true });
    return 0;
  }

  const meta = { date: new Date().toISOString().slice(0, 10), agent: opts.agent, model: opts.model ?? 'CLI default', judge: opts.judgeModel ?? 'CLI default', mode: opts.mode, repeat: opts.repeat };
  writeFileSync(join(outDir, 'summary.json'), `${JSON.stringify({ meta, runs }, null, 2)}\n`);
  writeFileSync(join(outDir, 'report.md'), renderReport(runs, meta));
  const cost = runs.reduce((s, r) => s + (r.transcript?.costUsd ?? 0) + (r.judgeCostUsd ?? 0), 0);
  process.stdout.write(`\nReport: ${join(outDir, 'report.md')}\nReported cost: $${cost.toFixed(2)}\n`);
  return runs.some((r) => r.error || r.judgeError) ? 1 : 0;
}

main().then((code) => { process.exitCode = code; }, (e) => { process.stderr.write(`Error: ${e.message}\n`); process.exitCode = 2; });
