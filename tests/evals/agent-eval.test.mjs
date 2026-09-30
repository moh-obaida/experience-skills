// Unit tests for the agent evaluation harness helpers (no agent is run).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { ROOT } from '../../scripts/lib/repo.mjs';
import { parseScenario, parseTranscript, validateRenderEvidence, antiSlopEnforcement, shellSkillReads, fullPassSignals, answerSignals, parseJudge, routingScore, renderReport, judgePrompt } from '../../scripts/lib/agent-eval.mjs';

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

test('relational visual diagnosis uses existing trace fields and is stripped before user-facing judging', () => {
  const reference = 'composition-repair/references/_shared/compositions-index.md';
  const trace = {
    skills: [{
      skill: 'composition-repair',
      activatedBecause: 'A low-density secondary surface dominates the booking action despite its lesser journey value.',
      requiredReferences: [reference],
      loadedReferences: [reference],
      handoff: { status: 'not-required', reason: 'The composition resolves the only material concern.' },
      changed: ['studio.html: reduced support panel height and regrouped booking actions'],
      verification: 'Inspected before/after desktop and phone captures; attention now moves proposition to booking action to support, with continuation preserved.',
      stopReason: 'The target improvement is visible and no material regression remains.',
    }],
  };
  const events = [
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Skill', input: { skill: 'composition-repair' } }] } },
    { type: 'assistant', message: { content: [{ type: 'tool_use', id: 'ref', name: 'Read', input: { file_path: `/tmp/p/.claude/skills/${reference}` } }] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 'ref', content: 'Composition method.', is_error: false }] } },
    { type: 'result', result: `Changed the booking layout.\n\n<!-- experience-skills-trace\n${JSON.stringify(trace)}\n-->`, is_error: false },
  ];
  const parsed = parseTranscript(events.map((event) => JSON.stringify(event)).join('\n'));
  assert.equal(parsed.executionTrace.complete, true);
  assert.equal(parsed.executionTrace.entries.length, 1);
  assert.deepEqual(parsed.executionTrace.entries[0], trace.skills[0], 'relational cause, change, and verification survive without a new schema');
  assert.equal(parsed.completionCriteriaSatisfied.executionTrace, true);
  assert.equal(parsed.completionCriteriaSatisfied.handoffArtifact, true);
  assert.equal(parsed.answer, 'Changed the booking layout.');
  assert.doesNotMatch(parsed.answer, /experience-skills-trace/);
});

test('execution trace rejects unobserved reference claims and incomplete handoffs', () => {
  const trace = {
    skills: [{
      skill: 'composition-repair', activatedBecause: 'Observed hierarchy issue.',
      requiredReferences: ['composition-repair/references/missing.md'], loadedReferences: [],
      handoff: { status: 'sent', to: 'responsive-validation', artifact: { job: 'Keep the booking task usable.' } },
      changed: ['no change'], verification: 'not verified: no browser', stopReason: 'resolved despite no browser',
    }],
  };
  const events = [
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Skill', input: { skill: 'composition-repair' } }] } },
    { type: 'result', result: `Not verified.\n\n<!-- experience-skills-trace\n${JSON.stringify(trace)}\n-->`, is_error: false },
  ];
  const parsed = parseTranscript(events.map((event) => JSON.stringify(event)).join('\n'));
  assert.equal(parsed.executionTrace.complete, false);
  assert.ok(parsed.executionTrace.issues.some((issue) => issue.includes('required reference not loaded')));
  assert.ok(parsed.executionTrace.issues.some((issue) => issue.includes('handoff missing lockedTruth')));
  assert.ok(parsed.executionTrace.issues.some((issue) => issue.includes('unverified work has resolved stop reason')));
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
  const audited = renderReport([{ ...base, scenarioId: 'x', condition: 'with', antiSlopEnforcement: { relevant: true, complete: false, issues: ['unsupported completion'], reviewFlags: ['scope needs rendered judgment'] } }], {});
  assert.match(audited, /Anti-slop claim audit[\s\S]*unsupported completion[\s\S]*scope needs rendered judgment/);
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
  const alias = `${project}-alias`;
  const outside = mkdtempSync(join(tmpdir(), 'xs-render-outside-'));
  symlinkSync(project, alias, 'dir');
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
      pairedScreenshots: 1, inspectedPairs: 1, beforeScreenshots: 1, afterScreenshots: 1, reviewedScreenshots: 2, inspectedAfterScreenshots: 1,
    });
    assert.equal(validateRenderEvidence(project, { ...transcript, implementationEventIndices: [] }).reviewedScreenshots, 2, 'read-only review inspections count without pretending an edit occurred');
    const withProbe = { ...transcript, implementationEventIndices: [3, 6], implementationFileEvents: [
      { eventIndex: 3, path: join(project, 'page.html') }, { eventIndex: 6, path: join(outside, 'verify.mjs') },
    ] };
    assert.equal(validateRenderEvidence(project, withProbe).passed, true, 'external verification scripts are not product edits');
    assert.equal(validateRenderEvidence(project, { ...withProbe, implementationFileEvents: [{ eventIndex: 3, path: join(project, 'page.html') }, { eventIndex: 6, path: join(project, 'page.html') }] }).passed, false, 'a product edit after inspection still fails');
    const prose = { ...transcript, answer: 'Before and after at the same view: the help region is now quieter, while the task remains prominent.' };
    assert.equal(validateRenderEvidence(project, prose).passed, true, 'comparison does not require an exact heading or the words visual mass');
    assert.equal(validateRenderEvidence(project, { ...transcript, answer: 'Both before and after screenshots rendered successfully.' }).passed, false, 'successful rendering alone is not a comparison of the relationship');
    assert.equal(validateRenderEvidence(project, { ...transcript, imageReadEvents: transcript.imageReadEvents.slice(0, 1) }).passed, false, 'after images must be inspected');
    assert.equal(validateRenderEvidence(project, { ...transcript, implementationEventIndices: [0] }).passed, false, 'before capture must precede the first edit');
    assert.equal(validateRenderEvidence(project, { ...transcript, implementationEventIndices: [6] }).passed, false, 'after capture must follow the final edit');
    const canonicalShots = [beforeShot, afterShot].map(shot => ({ ...shot, path: realpathSync(join(project, shot.path)) }));
    const canonicalAttempts = ['before', 'after'].map((phase, i) => ({
      ...transcript.renderAttempts[i],
      manifest: writeManifest(phase, canonicalShots[i]), screenshots: [canonicalShots[i]],
    }));
    const aliased = { ...prose, renderAttempts: canonicalAttempts,
      imageReadEvents: canonicalShots.map((shot, i) => ({ path: shot.path, eventIndex: i === 0 ? 2 : 5 })),
    };
    assert.equal(validateRenderEvidence(alias, aliased).passed, true, 'a canonical capture path is valid through a project alias');
    const externalPng = join(outside, 'external.png');
    writeFileSync(externalPng, readFileSync(join(project, afterShot.path)));
    symlinkSync(externalPng, join(project, 'escaped.png'));
    const escapedShot = { ...afterShot, path: 'escaped.png' };
    const escapedAttempt = { ...transcript.renderAttempts[1], manifest: writeManifest('after', escapedShot), screenshots: [escapedShot] };
    assert.equal(validateRenderEvidence(project, { ...transcript, renderAttempts: [transcript.renderAttempts[0], escapedAttempt] }).passed, false, 'in-project symlinks cannot borrow outside evidence');
    writeManifest('before', beforeShot); writeManifest('after', afterShot);
    writeFileSync(join(project, beforeShot.path), 'not a PNG');
    assert.equal(validateRenderEvidence(project, transcript).passed, false, 'a missing or invalid before screenshot fails the evidence check');
  } finally {
    rmSync(alias, { force: true });
    rmSync(outside, { recursive: true, force: true });
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


function slopTrace(entry = {}) {
  return { skill: 'anti-ai-slop', activatedBecause: 'Repeated containers obscure route jobs.',
    diagnosis: { levels: ['system', 'composition'], rootCause: 'Equal containers flatten route priorities.', targetDelta: 'Route structures follow their different jobs.' },
    repairLevel: 'system', result: 'improved', requiredReferences: [], loadedReferences: [],
    handoff: { status: 'not-required', reason: 'Shared source correction addresses the cause.' },
    changed: ['one shared layout rule'], verification: 'Compared before and after render: hierarchy now follows route jobs.', stopReason: 'Observed cause materially reduced.', ...entry };
}
function tracedSlop(entry = {}) {
  const trace = { skills: [slopTrace(entry)] };
  return parseTranscript([
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Skill', input: { skill: 'anti-ai-slop' } }] } },
    { type: 'result', result: `Public outcome.\n<!-- experience-skills-trace\n${JSON.stringify(trace)}\n-->` },
  ].map(event => JSON.stringify(event)).join('\n'));
}
test('anti-slop operational diagnosis is validated and excluded from direct judging', () => {
  const parsed = tracedSlop();
  assert.equal(parsed.executionTrace.complete, true);
  assert.equal(parsed.answer, 'Public outcome.');
  assert.equal(parsed.executionTrace.entries[0].repairLevel, 'system');
  assert.equal(tracedSlop({ diagnosis: undefined }).executionTrace.complete, false);
  assert.doesNotThrow(() => antiSlopEnforcement(tracedSlop({ diagnosis: { levels: 'system' }, loadedReferences: {} }), { passed: false }));
  assert.equal(tracedSlop({ result: undefined }).executionTrace.complete, false);
  const prompt = judgePrompt({ scenario: 's', prompt: 'p', principles: [], unacceptable: [] }, 'Public outcome.\n<!-- experience-skills-trace\nsecret operational metadata\n-->');
  assert.doesNotMatch(prompt, /secret operational|experience-skills-trace/);
  assert.doesNotMatch(judgePrompt({ scenario: '', prompt: '', principles: [], unacceptable: [] }, 'Visible.<!-- experience-skills-trace invalid'), /invalid/);
});
test('anti-slop completion rejects unsupported render claims and preserves honest uncertainty', () => {
  const none = { passed: false, reviewedScreenshots: 0, inspectedAfterScreenshots: 0 };
  const invalid = antiSlopEnforcement(tracedSlop(), none, ['page.html']);
  assert.equal(invalid.complete, false);
  assert.ok(invalid.issues.some(issue => /before\/after/.test(issue)));
  assert.ok(invalid.issues.some(issue => /after-render verification/.test(issue)));
  const honest = tracedSlop({ result: 'unverified', verification: 'Rendering unavailable.', stopReason: 'Unverified: no browser evidence.' });
  assert.equal(antiSlopEnforcement(honest, none, ['page.html']).complete, true);
  assert.equal(antiSlopEnforcement(tracedSlop({ result: 'pass', verification: 'Inspected the current rendered route.' }), none).complete, false);
  assert.equal(antiSlopEnforcement(tracedSlop({ result: 'escalated' }), { ...none, inspectedAfterScreenshots: 1 }).complete, false);
});
test('anti-slop scope review uses declared effect, never number of edited lines or files', () => {
  const proof = { passed: true, reviewedScreenshots: 2, inspectedAfterScreenshots: 1 };
  assert.equal(antiSlopEnforcement(tracedSlop(), proof, ['shared.css']).complete, true, 'one shared rule can resolve a systemic cause');
  assert.equal(antiSlopEnforcement(tracedSlop(), proof, ['shared.css'], ['anti-ai-slop/references/repair-loop.md']).complete, false, 'omitting a required branch from the trace cannot evade scenario requirements');
  const cosmetic = antiSlopEnforcement(tracedSlop({ repairLevel: 'surface' }), proof, ['a.html', 'b.html', 'c.html']);
  assert.equal(cosmetic.reviewFlags.length, 1, 'a large diff does not close a systemic diagnosis');
  const unresolved = antiSlopEnforcement(tracedSlop({ result: 'unresolved', repairLevel: 'surface' }), proof, ['shared.css']);
  assert.equal(unresolved.complete, true, 'reporting an unresolved cause is an honest stopping result, not success');
  assert.equal(antiSlopEnforcement(tracedSlop({ requiredReferences: ['anti-ai-slop/references/repair-loop.md'] }), proof, ['shared.css']).complete, false);
});


test('reference reads follow observed literal shell directories without trusting failed retrievals', () => {
  const events = [];
  const command = (id, text, output = 'Module content.', failed = false) => {
    events.push({ type: 'assistant', message: { content: [{ type: 'tool_use', id, name: 'Bash', input: { command: text } }] } });
    events.push({ type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: id, content: output, is_error: failed }] } });
  };
  command('one', 'cd /tmp/p/.claude/skills/anti-ai-slop/references && cat _shared/experience-core.md');
  command('two', 'cat repair-loop.md');
  command('three', 'grep -n -A8 gradient _shared/justified-trends.md');
  command('denied', 'cat missing.md', 'Permission denied', true);
  command('clear', 'cd /tmp/p && cat README.md');
  command('unrelated', 'cat repair-loop.md', 'not found', true);
  const parsed = parseTranscript(events.map(e => JSON.stringify(e)).join('\n'));
  assert.deepEqual(parsed.referencesRead, ['anti-ai-slop/references/_shared/experience-core.md', 'anti-ai-slop/references/repair-loop.md', 'anti-ai-slop/references/_shared/justified-trends.md']);
  const codex = parseTranscript(JSON.stringify({ type: 'item.completed', item: { type: 'command_execution', command: 'cat .claude/skills/anti-ai-slop/references/repair-loop.md', exit_code: 1, aggregated_output: 'access denied' } }));
  assert.deepEqual(codex.referencesRead, []);
});


test('trace reference identities accept installation paths but reject annotations and unobserved loads', () => {
  const ref = 'anti-ai-slop/references/repair-loop.md';
  const entry = slopTrace({ requiredReferences: [`.claude/skills/${ref}`], loadedReferences: [`/tmp/p/.claude/skills/${ref}`] });
  const events = [
    { type: 'assistant', message: { content: [{ type: 'tool_use', name: 'Skill', input: { skill: 'anti-ai-slop' } }, { type: 'tool_use', id: 'read', name: 'Read', input: { file_path: `/tmp/p/.claude/skills/${ref}` } }] } },
    { type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 'read', content: 'Repair method.', is_error: false }] } },
    { type: 'result', result: `Outcome.<!-- experience-skills-trace ${JSON.stringify({ skills: [entry] })} -->` },
  ];
  const parsed = parseTranscript(events.map(e => JSON.stringify(e)).join('\n'));
  assert.equal(parsed.executionTrace.complete, true);
  assert.deepEqual(parsed.executionTrace.entries[0].loadedReferences, [ref]);
  assert.equal(tracedSlop({ loadedReferences: [`${ref} (section)`] }).executionTrace.complete, false);
  assert.equal(tracedSlop({ loadedReferences: [`.claude/skills/${ref}`] }).executionTrace.complete, false);
  const negative = tracedSlop({ result: 'unverified', verification: 'Before captures inspected. No after capture taken.', stopReason: 'Unverified: no applied repair.' });
  assert.equal(antiSlopEnforcement(negative, { passed: false, reviewedScreenshots: 2 }).complete, true);
});
