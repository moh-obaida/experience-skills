// Unit tests for the agent evaluation harness helpers (no agent is run).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { ROOT } from '../../scripts/lib/repo.mjs';
import { parseScenario, parseTranscript, validateRenderEvidence, shellSkillReads, fullPassSignals, answerSignals, parseJudge, routingScore, renderReport, judgePrompt } from '../../scripts/lib/agent-eval.mjs';

test('every scenario parses with a prompt, expected skills, principles, and unacceptable items', () => {
  const fixtures = JSON.parse(readFileSync(join(ROOT, 'tests', 'evals', 'routing.json'), 'utf8'));
  for (const entry of fixtures.scenarios) {
    const s = parseScenario(readFileSync(join(ROOT, entry.file), 'utf8'));
    assert.ok(s.prompt.length > 40, `${entry.file} prompt`);
    const specialists = s.expectedSkills.filter((n) => n !== 'experience-architect' || s.expectedSkills.includes('use-all-skills')); // router is required only in the full pass
    assert.deepEqual([...specialists].sort(), [...entry.expected].sort(), `${entry.file} expected skills match routing.json`);
    assert.ok(s.principles.length >= 3, `${entry.file} principles`);
    assert.ok(s.unacceptable.length >= 2, `${entry.file} unacceptable`);
    for (const reference of entry.requiredReferences ?? []) {
      const [skill, ...segments] = reference.split('/');
      const localPath = join(ROOT, 'skills', skill, ...segments);
      const skillPath = join(ROOT, 'skills', skill, 'SKILL.md');
      assert.ok(entry.expected.includes(skill), `${reference} belongs to a selected skill in ${entry.file}`);
      assert.ok(readFileSync(localPath, 'utf8').length > 0, `${reference} exists`);
      assert.ok(readFileSync(skillPath, 'utf8').includes(segments.at(-1)), `${reference} is named by its skill`);
    }
  }
});

test('parseTranscript finds skills, references, scripts, and the answer', () => {
  const lines = [
    { type: 'system', subtype: 'init' },
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Skill', input: { skill: 'experience-architect' } }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', id: 'skill-read', name: 'Read', input: { file_path: '/tmp/p/.claude/skills/composition-repair/SKILL.md' } }] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 'skill-read', content: 'Composition Repair skill instructions.', is_error: false }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', id: 'reference-read', name: 'Read', input: { file_path: '/tmp/p/.claude/skills/composition-repair/references/_shared/join-code-page.md' } }] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 'reference-read', content: 'Reference module.', is_error: false }] } },
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
  assert.equal(t.renderedEvidenceGathered, false, 'a measurement script command is not proof of before/after rendered review');
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
  assert.ok(md.indexOf('## Outcome quality') < md.indexOf('## Process compliance'));
  assert.match(md, /## Process compliance[\s\S]*Required refs/);
  assert.doesNotMatch(md.slice(md.indexOf('## Outcome quality'), md.indexOf('## Process compliance')), /reference|render|skill routing/i);
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
  parsed.timeline = ['skill:use-all-skills', 'render-before', 'implementation', 'render-after'];
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

test('Claude shell reads count only after successful tool results', () => {
  const reference = '.claude/skills/anti-ai-slop/references/repair-loop.md';
  const lines = [
    { type: 'assistant', message: { content: [{ type: 'tool_use', id: 'ok', name: 'Bash', input: { command: `cat ${reference}` } }] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 'ok', content: '1\t# Repair Loop', is_error: false }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', id: 'denied', name: 'Bash', input: { command: `cat ${reference}` } }] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 'denied', content: 'This command requires approval', is_error: true }] } },
  ];
  const parsed = parseTranscript(lines.map((line) => JSON.stringify(line)).join('\n'));
  assert.deepEqual(parsed.referencesRead, ['anti-ai-slop/references/repair-loop.md']);
});

test('render evidence requires valid before and after PNGs, inspection, ordering, and comparison', () => {
  const project = mkdtempSync(join(tmpdir(), 'xs-render-evidence-'));
  try {
    const screenshot = (phase) => {
      const path = `.benchmark/renders/${phase}/home-desktop.png`;
      const target = join(project, path);
      mkdirSync(join(target, '..'), { recursive: true });
      const bytes = Buffer.alloc(128);
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(bytes, 0);
      bytes.writeUInt32BE(1440, 16); bytes.writeUInt32BE(900, 20);
      writeFileSync(target, bytes);
      return { view: 'home', viewport: 'desktop', width: 1440, height: 900, path, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') };
    };
    const beforeShot = screenshot('before'); const afterShot = screenshot('after');
    const writeManifest = (phase, shot) => {
      const manifest = `.benchmark/renders/${phase}/manifest.json`;
      writeFileSync(join(project, manifest), JSON.stringify({ phase, screenshots: [shot] }));
      return manifest;
    };
    const beforeManifest = writeManifest('before', beforeShot); const afterManifest = writeManifest('after', afterShot);
    const transcript = {
      answer: '## Before/after comparison\nCompared the baseline before render with the edited after render at the same route and viewport; the layout improved.',
      renderAttempts: [
        { phase: 'before', eventIndex: 1, manifest: beforeManifest, screenshots: [beforeShot] },
        { phase: 'after', eventIndex: 4, manifest: afterManifest, screenshots: [afterShot] },
      ],
      imageFilesRead: [beforeShot.path, afterShot.path],
      imageReadEvents: [{ path: beforeShot.path, eventIndex: 2 }, { path: afterShot.path, eventIndex: 5 }],
      implementationEventIndices: [3],
      timeline: ['render-before', 'image-read', 'implementation', 'render-after', 'image-read'],
    };
    assert.deepEqual(validateRenderEvidence(project, transcript), {
      passed: true, helperIntact: true, explicitComparison: true, beforeRender: true, afterRender: true,
      pairedScreenshots: 1, inspectedPairs: 1, beforeScreenshots: 1, afterScreenshots: 1,
    });
    writeFileSync(join(project, beforeShot.path), 'not a PNG');
    assert.equal(validateRenderEvidence(project, transcript).passed, false, 'a missing or invalid before screenshot fails the evidence check');
  } finally {
    rmSync(project, { recursive: true, force: true });
  }
});

test('render commands count only when a successful manifest is returned', () => {
  const marker = JSON.stringify({ type: 'experience-skills-render', phase: 'before', manifest: '.benchmark/renders/before/manifest.json', screenshots: [{ path: '.benchmark/renders/before/home-desktop.png' }] });
  const lines = [
    { type: 'assistant', message: { content: [{ type: 'tool_use', id: 'blocked', name: 'Bash', input: { command: 'node .benchmark/render.mjs before page.html --views home' } }] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 'blocked', is_error: true, content: 'This command requires approval' }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', id: 'complete', name: 'Bash', input: { command: 'node .benchmark/render.mjs before page.html --views home' } }] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 'complete', is_error: false, content: marker }] } },
  ];
  const parsed = parseTranscript(lines.map((line) => JSON.stringify(line)).join('\n'));
  assert.equal(parsed.renderAttempts.length, 1);
  assert.equal(parsed.renderAttempts[0].phase, 'before');
  assert.equal(parsed.renderedEvidenceGathered, false, 'one render is not a before/after comparison');
});
