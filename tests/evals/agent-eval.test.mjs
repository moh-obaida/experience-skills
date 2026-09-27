// Unit tests for the agent evaluation harness helpers (no agent is run).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from '../../scripts/lib/repo.mjs';
import { parseScenario, parseTranscript, shellSkillReads, fullPassSignals, answerSignals, parseJudge, routingScore, renderReport, judgePrompt } from '../../scripts/lib/agent-eval.mjs';

test('every scenario parses with a prompt, expected skills, principles, and unacceptable items', () => {
  const fixtures = JSON.parse(readFileSync(join(ROOT, 'tests', 'evals', 'routing.json'), 'utf8'));
  for (const entry of fixtures.scenarios) {
    const s = parseScenario(readFileSync(join(ROOT, entry.file), 'utf8'));
    assert.ok(s.prompt.length > 40, `${entry.file} prompt`);
    const specialists = s.expectedSkills.filter((n) => n !== 'experience-architect' || s.expectedSkills.includes('use-all-skills')); // router is required only in the full pass
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
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Bash', input: { command: 'node .claude/skills/composition-repair/scripts/measure-layout.mjs join.html; node .claude/skills/responsive-validation/scripts/stress-content.mjs join.html' } }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Edit', input: { file_path: '/tmp/p/join.html' } }] } },
    { type: 'result', result: 'Verdict: worse than current.', total_cost_usd: 0.42, num_turns: 7, is_error: false },
  ].map((l) => JSON.stringify(l)).join('\n');
  const t = parseTranscript(`${lines}\nnot json\n`);
  assert.equal(t.answer, 'Verdict: worse than current.');
  assert.deepEqual(t.skillsLoaded.sort(), ['composition-repair', 'experience-architect']);
  assert.deepEqual(t.referencesRead, ['composition-repair/references/_shared/join-code-page.md']);
  assert.deepEqual(t.designIntelligenceModulesLoaded, []);
  assert.deepEqual(t.precedentModulesLoaded, []);
  assert.deepEqual(t.scriptsRun, ['composition-repair/scripts/measure-layout.mjs', 'responsive-validation/scripts/stress-content.mjs']);
  assert.equal(t.specialistsTriggered.includes('composition-repair'), true);
  assert.equal(t.renderedEvidenceGathered, true);
  assert.deepEqual(t.editToolsUsed, ['Edit']);
  assert.equal(t.completionCriteriaSatisfied.handoffArtifact, false);
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
  const build = spawnSync(process.execPath, [script, '--dry-run', '--scenarios', 'repair-join-page', '--mode', 'edit', '--agent', 'codex'], { encoding: 'utf8', env: { ...process.env, CODEX_BIN: 'codex-not-called' } });
  assert.equal(build.status, 0, build.stderr);
  assert.match(build.stdout, /DRY RUN: 2 runs/);
  assert.match(build.stdout, /codex-not-called exec --json/);
});


test('full pass signals reward selective build and journey verification', () => {
  const event = (item) => JSON.stringify({ type: 'item.completed', item: item.type === 'command_execution' ? { exit_code: 0, ...item } : item });
  const lines = [
    event({ type: 'command_execution', command: 'cat .claude/skills/use-all-skills/SKILL.md' }),
    event({ type: 'command_execution', command: 'cat .claude/skills/use-all-skills/references/phase-map.md' }),
    event({ type: 'command_execution', command: 'cat .claude/skills/interaction-design/SKILL.md' }),
    event({ type: 'command_execution', command: 'cat .claude/skills/state-design/SKILL.md' }),
    event({ type: 'file_change', changes: [] }),
    event({ type: 'command_execution', command: 'node scripts/measure-layout.mjs service.html' }),
    event({ type: 'agent_message', text: 'Build Mode. The form is the core instrument. The primary journey was repeated with a mistake and recovery. The page was rendered after implementation.' }),
  ];
  const parsed = parseTranscript(lines.join('\n'));
  const signals = fullPassSignals(parsed, ['service.html']);
  assert.equal(signals.conductorLoaded, true);
  assert.equal(signals.activeSpecialists, 2);
  assert.equal(signals.modeNamed, true);
  assert.equal(signals.coreInstrumentNamed, true);
  assert.equal(signals.journeyEvidence, true);
  assert.equal(signals.renderedAfterImplementation, true);
  assert.equal(signals.reviewParticipation, 0, 'audit specialists are not mandatory in Build Mode');
  const premature = fullPassSignals({ ...parsed, timeline: ['render', 'implementation'] }, ['service.html']);
  assert.equal(premature.renderedAfterImplementation, false);
});


test('Codex shell read parser expands brace paths and observed wildcard headings', () => {
  const direct = shellSkillReads("cat .claude/skills/use-all-skills/references/{phase-map,participation-ledger}.md", '');
  assert.deepEqual(direct.references, ['use-all-skills/references/phase-map.md','use-all-skills/references/participation-ledger.md']);
  const wildcard = shellSkillReads('for f in .claude/skills/*/SKILL.md; do cat "$f"; done', '##### .claude/skills/use-all-skills/SKILL.md\n##### .claude/skills/visual-identity/SKILL.md');
  assert.deepEqual(wildcard.skills, ['use-all-skills','visual-identity']);
  const delimited = shellSkillReads('for f in .claude/skills/*/SKILL.md; do printf "===== %s =====" "$f"; cat "$f"; done', '===== .claude/skills/workflow-compression/SKILL.md =====\n===== .claude/skills/anti-slop-ui/SKILL.md =====');
  assert.deepEqual(delimited.skills, ['workflow-compression','anti-slop-ui']);
});

test('a denied browser preview is not rendered evidence', () => {
  const lines = [
    { type: 'item.completed', item: { type: 'command_execution', command: 'node -e "require.resolve(\'playwright\')"', exit_code: 0 } },
    { type: 'item.completed', item: { type: 'mcp_tool_call', server: 'cua_repl', tool: 'js', result: { content: [{ type: 'text', text: 'Browser Use rejected this action due to browser security policy.' }] } } },
  ];
  const parsed = parseTranscript(lines.map((line) => JSON.stringify(line)).join('\n'));
  assert.equal(parsed.renderedEvidenceGathered, false);
  assert.deepEqual(parsed.timeline.filter((item) => item === 'render'), []);
});
