// Unit tests for the agent evaluation harness helpers (no agent is run).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from '../../scripts/lib/repo.mjs';
import { parseScenario, parseTranscript, answerSignals, parseJudge, routingScore, renderReport, judgePrompt } from '../../scripts/lib/agent-eval.mjs';

test('every scenario parses with a prompt, expected skills, principles, and unacceptable items', () => {
  const fixtures = JSON.parse(readFileSync(join(ROOT, 'tests', 'evals', 'routing.json'), 'utf8'));
  for (const entry of fixtures.scenarios) {
    const s = parseScenario(readFileSync(join(ROOT, entry.file), 'utf8'));
    assert.ok(s.prompt.length > 40, `${entry.file} prompt`);
    const specialists = s.expectedSkills.filter((n) => n !== 'experience-architect'); // the router is optional
    assert.deepEqual([...specialists].sort(), [...entry.expected].sort(), `${entry.file} expected skills match routing.json`);
    assert.ok(s.principles.length >= 3, `${entry.file} principles`);
    assert.ok(s.unacceptable.length >= 2, `${entry.file} unacceptable`);
  }
});

test('parseTranscript finds skills, references, scripts, and the answer', () => {
  const lines = [
    { type: 'system', subtype: 'init' },
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Skill', input: { skill: 'experience-architect' } }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Read', input: { file_path: '/tmp/p/.claude/skills/composition-repair/SKILL.md' } }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Read', input: { file_path: '/tmp/p/.claude/skills/composition-repair/references/_shared/join-code-page.md' } }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Bash', input: { command: 'node .claude/skills/composition-repair/scripts/measure-layout.mjs join.html' } }] } },
    { type: 'result', result: 'Verdict: worse than current.', total_cost_usd: 0.42, num_turns: 7, is_error: false },
  ].map((l) => JSON.stringify(l)).join('\n');
  const t = parseTranscript(`${lines}\nnot json\n`);
  assert.equal(t.answer, 'Verdict: worse than current.');
  assert.deepEqual(t.skillsLoaded.sort(), ['composition-repair', 'experience-architect']);
  assert.deepEqual(t.referencesRead, ['composition-repair/references/_shared/join-code-page.md']);
  assert.deepEqual(t.scriptsRun, ['composition-repair/scripts/measure-layout.mjs']);
  assert.equal(t.costUsd, 0.42);
});

test('answerSignals detects praise openings, hype, evidence labels, and counts', () => {
  const praise = answerSignals('**Great idea!** The wizard will feel modern and clean.');
  assert.equal(praise.openingPraise, true);
  assert.deepEqual(praise.hypeWords, ['modern', 'clean']);
  const good = answerSignals('## Verdict\nWorse than current [E3].\n\nBefore: 5 screens, 6 actions. After: 1 screen, 2 actions.');
  assert.equal(good.openingPraise, false);
  assert.equal(good.evidenceLabels, true);
  assert.equal(good.beforeAfterCounts, true);
});

test('parseJudge tolerates stray text and computes totals', () => {
  const j = parseJudge('Here you go:\n{"principles":[{"id":1,"met":true},{"id":2,"met":false}],"unacceptable":[{"id":1,"violated":true}],"praiseBeforeEvaluation":false,"overall":"weak","notes":"x"}');
  assert.equal(j.principlesMet, 1);
  assert.equal(j.principlesTotal, 2);
  assert.equal(j.violations, 1);
  assert.throws(() => parseJudge('no json'), /no JSON/);
});

test('routing score and report render', () => {
  const r = routingScore(['composition-repair', 'visual-identity'], ['experience-architect', 'composition-repair', 'motion-design']);
  assert.deepEqual(r.hit, ['composition-repair']);
  assert.deepEqual(r.missed, ['visual-identity']);
  assert.deepEqual(r.extra, ['motion-design']);
  const base = { transcript: { referencesRead: [], scriptsRun: [], skillsLoaded: [] }, signals: { openingPraise: false }, routing: r, judge: { principlesMet: 3, principlesTotal: 4, violations: 0, notes: 'ok' } };
  const md = renderReport([{ ...base, scenarioId: 'x', condition: 'with' }, { ...base, scenarioId: 'x', condition: 'without' }], { date: '2026-01-01', agent: 'a', judge: 'j' });
  assert.match(md, /\| x \| 3\/4 → 3\/4 \|/);
  assert.match(md, /with skills \| 1 \| 3\/4/);
});

test('judge prompt is condition-blind', () => {
  const p = judgePrompt({ scenario: 's', prompt: 'p', principles: ['a'], unacceptable: ['b'] }, 'answer');
  assert.doesNotMatch(p, /with skills|without skills|skill installed/i);
});

test('run-agent-evals --help and --dry-run work without calling an agent', () => {
  const script = join(ROOT, 'scripts', 'run-agent-evals.mjs');
  assert.equal(spawnSync(process.execPath, [script, '--help']).status, 0);
  const r = spawnSync(process.execPath, [script, '--dry-run', '--anchors', '--scenarios', 'playful-game-join'], { encoding: 'utf8', env: { ...process.env, CLAUDE_BIN: 'claude-not-called' } });
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /DRY RUN: 2 runs/);
  assert.match(r.stdout, /--allowedTools Read Glob Grep Skill/);
});
