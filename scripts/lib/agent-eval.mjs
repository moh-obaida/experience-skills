// Pure helpers for the agent evaluation harness (scripts/run-agent-evals.mjs).
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// Kept deterministic and locally testable without running an agent.

/** Split a scenario markdown file into its "## " sections. */
export function parseScenario(markdown) {
  const title = (markdown.match(/^# (.+)$/m) ?? [])[1]?.replace(/^Scenario:\s*/, '').trim() ?? '';
  const sections = {};
  for (const part of markdown.split(/^## /m).slice(1)) {
    const [heading, ...rest] = part.split('\n');
    sections[heading.trim()] = rest.join('\n').trim();
  }
  const bullets = (text) => (text ?? '').split('\n').map((l) => l.replace(/^[-*]\s+/, '').trim()).filter((l) => l && !l.startsWith('#'));
  return {
    title,
    scenario: sections.Scenario ?? '',
    prompt: sections.Prompt ?? '',
    problem: sections['Current problem'] ?? '',
    expectedSkills: bullets(sections['Expected skills']).map((l) => l.split(/[\s(]/)[0]).filter((n, _, all) => n !== 'experience-architect' || all.includes('use-all-skills')),
    principles: bullets(sections['Key principles expected']),
    unacceptable: bullets(sections['Unacceptable recommendations']),
    mode: (sections.Mode ?? 'review').trim().toLowerCase(),
  };
}

const DESIGN_INTELLIGENCE = new Set([
  'selection.md', 'directions-index.md', 'palettes.md', 'typography.md', 'surfaces-and-shape.md',
  'design-system-selector.md', 'design-systems-index.md', 'design-system-grammar.md',
  'design-systems-workspaces.md', 'design-systems-services.md', 'design-systems-culture.md',
  'design-systems-learning.md', 'design-systems-operations.md', 'palette-themes.md',
  'type-strategies.md', 'font-pairings.md', 'family-components.md', 'component-patterns.md', 'system-application-examples.md',
  'imagery-illustration-icons.md', 'motion-languages.md', 'compositions-index.md',
  'compositions-focus.md', 'compositions-flows.md', 'compositions-narrative.md',
  'compositions-content.md', 'compositions-discovery.md', 'compositions-workspaces.md',
  'compositions-operational.md', 'compositions-mobile.md', 'data-visualization.md',
  'spatial-density-navigation.md', 'anti-generic-alternatives.md', 'context-adaptation.md',
]);
const PRECEDENT = new Set([
  'commerce-and-discovery.md', 'dense-operational-layouts.md', 'editorial-and-typography.md',
  'environment-first-identity.md', 'interruptions-and-consent.md', 'justified-trends.md',
  'known-context-and-defaults.md', 'mobile-navigation.md', 'motion-guidelines.md',
  'product-derived-identity.md', 'product-first-presentation.md',
  'progressive-disclosure-and-expert-speed.md', 'states-loading-empty-error.md',
  'transactional-clarity.md', 'whitespace-and-dead-space.md', 'controls-and-inputs.md',
  'product-interiors-and-dense-states.md', 'empty-and-lifecycle-states.md', 'experience-routing.md',
  'neo-brutalist-products.md', 'soft-minimal-products.md', 'master-detail-workspaces.md',
  'command-center-systems.md', 'playful-products.md',
]);

/** Resolve literal/brace-expanded skill reads from a completed shell command. */
export function shellSkillReads(command, output = '') {
  if (!/\b(?:cat|sed|head|tail|less|awk|rg)\b/.test(command)) return { skills: [], references: [] };
  const skills = new Set(); const references = new Set();
  const expand = (value) => {
    const match = value.match(/\{([^{}]+)\}/);
    if (!match) return [value];
    return match[1].split(',').flatMap((part) => expand(value.replace(match[0], part)));
  };
  for (const match of command.matchAll(/(?:^|\/)([a-z0-9-]+|\{[a-z0-9,-]+\})\/SKILL\.md/g))
    for (const name of expand(match[1])) skills.add(name);
  for (const match of output.matchAll(/^#####\s+(?:\.claude\/skills\/)?([a-z0-9-]+)\/SKILL\.md/gm)) skills.add(match[1]);
  for (const match of output.matchAll(/^=====\s+(?:\.claude\/skills\/)?([a-z0-9-]+)\/SKILL\.md\s+=====$/gm)) skills.add(match[1]);
  for (const match of command.matchAll(/([a-z0-9-]+|\{[a-z0-9,-]+\})\/(references\/(?:_shared\/)?(?:[a-z0-9-]+|\{[a-z0-9,-]+\})\.md)/g))
    for (const path of expand(`${match[1]}/${match[2]}`)) references.add(path);
  return { skills: [...skills], references: [...references] };
}

function parseExecutionTrace(answer, observedSkills, observedReferences) {
  const match = answer.match(/<!--\s*experience-skills-trace\s*([\s\S]*?)\s*-->/i);
  if (!match) return { present: false, complete: false, entries: [], issues: ['trace missing'] };
  let value;
  try { value = JSON.parse(match[1]); }
  catch { return { present: true, complete: false, entries: [], issues: ['trace JSON invalid'] }; }
  const entries = Array.isArray(value?.skills) ? value.skills : [];
  const issues = [];
  const actualSkills = new Set(observedSkills);
  const actualReferences = new Set(observedReferences);
  const names = entries.map((entry) => entry?.skill).filter((name) => typeof name === 'string');
  if (new Set(names).size !== names.length) issues.push('duplicate skill entries');
  for (const skill of observedSkills) if (!names.includes(skill)) issues.push(`missing skill entry: ${skill}`);
  for (const entry of entries) {
    const name = entry?.skill;
    if (!actualSkills.has(name)) issues.push(`unobserved skill: ${name ?? '(unnamed)'}`);
    if (typeof entry?.activatedBecause !== 'string' || !entry.activatedBecause.trim()) issues.push(`missing activation reason: ${name}`);
    if (!Array.isArray(entry?.requiredReferences) || !Array.isArray(entry?.loadedReferences)) issues.push(`reference lists missing: ${name}`);
    else {
      for (const reference of entry.loadedReferences) {
        if (!actualReferences.has(reference)) issues.push(`reference not observed: ${reference}`);
      }
      for (const reference of entry.requiredReferences) {
        if (!entry.loadedReferences.includes(reference)) issues.push(`required reference not loaded: ${reference}`);
      }
    }
    const handoff = entry?.handoff;
    if (handoff?.status === 'sent') {
      const fields = ['job', 'lockedTruth', 'openSpace', 'currentWeaknessOrGroundedUpside', 'relevantSourceAndRequiredReferences', 'expectedOutput', 'stopCondition'];
      for (const field of fields) if (typeof handoff.artifact?.[field] !== 'string' || !handoff.artifact[field].trim()) issues.push(`handoff missing ${field}: ${name}`);
    } else if (handoff?.status !== 'not-required' || typeof handoff.reason !== 'string' || !handoff.reason.trim()) {
      issues.push(`handoff status or reason missing: ${name}`);
    }
    if (!Array.isArray(entry?.changed) || entry.changed.length === 0) issues.push(`changed/no-change record missing: ${name}`);
    if (typeof entry?.verification !== 'string' || !entry.verification.trim()) issues.push(`verification missing: ${name}`);
    if (typeof entry?.stopReason !== 'string' || !entry.stopReason.trim()) issues.push(`stop reason missing: ${name}`);
    if (/not verified/i.test(entry?.verification ?? '') && !/unverified|blocked/i.test(entry?.stopReason ?? '')) issues.push(`unverified work has resolved stop reason: ${name}`);
  }
  for (const reference of observedReferences) {
    const owner = reference.split('/')[0];
    const entry = entries.find((item) => item?.skill === owner);
    if (!entry?.loadedReferences?.includes(reference)) issues.push(`observed reference omitted from trace: ${reference}`);
  }
  return { present: true, complete: issues.length === 0, entries, issues };
}

/** Parse a stream-json transcript and record activation, depth, evidence, and completion signals. */
export function parseTranscript(jsonl) {
  const events = [];
  for (const line of jsonl.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('{')) continue;
    try { events.push(JSON.parse(trimmed)); } catch { /* ignore partial lines */ }
  }
  const toolResults = new Map();
  for (const ev of events) if (ev.type === 'user') for (const block of ev.message?.content ?? [])
    if (block.type === 'tool_result' && block.tool_use_id) toolResults.set(block.tool_use_id, block);
  const skillsInvoked = [];
  const skillFilesRead = [];
  const referencesRead = [];
  const designIntelligenceModulesLoaded = [];
  const precedentModulesLoaded = [];
  const scriptsRun = [];
  const editToolsUsed = [];
  const renderedToolActivity = [];
  const imageFilesRead = [];
  const imageReadEvents = [];
  const implementationEventIndices = [];
  const renderAttempts = [];
  const toolCounts = {};
  const timeline = [];
  let answer = '';
  let costUsd = null;
  let turns = null;
  let error = null;
  const note = (list, value) => { if (value && !list.includes(value)) list.push(value); };

  for (let eventIndex = 0; eventIndex < events.length; eventIndex++) {
    const ev = events[eventIndex];
    if (ev.type === 'assistant' && Array.isArray(ev.message?.content)) {
      for (const block of ev.message.content) {
        if (block.type !== 'tool_use') continue;
        toolCounts[block.name] = (toolCounts[block.name] ?? 0) + 1;
        if (block.name === 'Edit' || block.name === 'Write') { note(editToolsUsed, block.name); implementationEventIndices.push(eventIndex); timeline.push('implementation'); }
        const input = block.input ?? {};
        const commandText = String(input.command ?? '');
        const path = String(input.file_path ?? input.path ?? '');
        const result = toolResults.get(block.id);
        const resultText = typeof result?.content === 'string' ? result.content
          : (result?.content ?? []).map((part) => part.text ?? '').join('\n');
        const resultOk = Boolean(result && !result.is_error && !/requires approval|permission denied|access denied|command not found|not found|exit code\s*[1-9]/i.test(resultText));
        if (resultOk && block.name === 'Read' && /\.(?:png|jpe?g|webp)$/i.test(path)) {
          note(imageFilesRead, path);
          imageReadEvents.push({ path, eventIndex });
          timeline.push('image-read');
        }
        if (block.name === 'Bash') {
          const renderOutput = result?.is_error ? '' : resultText;
          const marker = renderOutput.split('\n').map((line) => {
            try { const value = JSON.parse(line); return value?.type === 'experience-skills-render' ? value : null; }
            catch { return null; }
          }).find(Boolean);
          if (commandText.includes('.benchmark/render.mjs') && marker && ['before', 'after'].includes(marker.phase)) {
            renderAttempts.push({ phase: marker.phase, eventIndex, manifest: marker.manifest, screenshots: marker.screenshots ?? [] });
            note(renderedToolActivity, `render:${marker.phase}`);
            timeline.push(`render-${marker.phase}`);
          }
          if (resultOk) {
            const reads = shellSkillReads(commandText, resultText);
            for (const name of reads.skills) { note(skillFilesRead, name); timeline.push(`skill:${name}`); }
            for (const reference of reads.references) {
              note(referencesRead, reference); timeline.push(`reference:${reference}`);
              const file = reference.split('/').pop();
              if (DESIGN_INTELLIGENCE.has(file)) note(designIntelligenceModulesLoaded, reference);
              if (PRECEDENT.has(file)) note(precedentModulesLoaded, reference);
            }
          }
        }
        if (block.name === 'Skill') { const name = String(input.skill ?? input.command ?? input.name ?? '').replace(/^\//, ''); note(skillsInvoked, name); timeline.push(`skill:${name}`); }
        const skillFile = resultOk && path.match(/skills\/([a-z0-9-]+)\/SKILL\.md$/);
        if (skillFile) { note(skillFilesRead, skillFile[1]); timeline.push(`skill:${skillFile[1]}`); }
        const ref = resultOk && path.match(/skills\/([a-z0-9-]+)\/(references\/.+\.md)$/);
        if (ref) {
          const reference = `${ref[1]}/${ref[2]}`;
          note(referencesRead, reference); timeline.push(`reference:${reference}`);
          const file = reference.split('/').pop();
          if (DESIGN_INTELLIGENCE.has(file)) note(designIntelligenceModulesLoaded, reference);
          if (PRECEDENT.has(file)) note(precedentModulesLoaded, reference);
        }
        const cmd = commandText;
        if (block.name === 'Bash') {
          for (const script of cmd.matchAll(/skills\/([a-z0-9-]+)\/(scripts\/[a-z0-9-]+\.mjs)/g)) note(scriptsRun, `${script[1]}/${script[2]}`);
        }
      }
    }
    if (ev.type === 'result') {
      answer = typeof ev.result === 'string' ? ev.result : answer;
      costUsd = ev.total_cost_usd ?? costUsd;
      turns = ev.num_turns ?? turns;
      if (ev.is_error) error = ev.result ?? ev.subtype ?? 'error';
    }
    // Codex `exec --json` emits typed items rather than Claude's assistant/tool_use envelope.
    // Normalize the evidence we can observe without pretending that a hidden skill router ran.
    if (ev.type === 'item.completed' || ev.type === 'item.started') {
      const item = ev.item ?? {};
      if (item.type === 'agent_message' && typeof item.text === 'string') answer = item.text;
      if (item.type === 'command_execution') {
        toolCounts.Bash = (toolCounts.Bash ?? 0) + 1;
        const command = String(item.command ?? '');
        const commandOutput = String(item.aggregated_output ?? '');
        const marker = commandOutput.split('\n').map((line) => {
          try { const value = JSON.parse(line); return value?.type === 'experience-skills-render' ? value : null; }
          catch { return null; }
        }).find(Boolean);
        if (ev.type === 'item.completed' && item.exit_code === 0 && marker && ['before', 'after'].includes(marker.phase)) {
          renderAttempts.push({ phase: marker.phase, eventIndex, manifest: marker.manifest, screenshots: marker.screenshots ?? [] });
          note(renderedToolActivity, `render:${marker.phase}`); timeline.push(`render-${marker.phase}`);
        }
        if (ev.type === 'item.completed') {
          const reads = shellSkillReads(command, commandOutput);
          for (const name of reads.skills) { note(skillFilesRead, name); timeline.push(`skill:${name}`); }
          for (const reference of reads.references) {
            note(referencesRead, reference); timeline.push(`reference:${reference}`);
            const file = reference.split('/').pop();
            if (DESIGN_INTELLIGENCE.has(file)) note(designIntelligenceModulesLoaded, reference);
            if (PRECEDENT.has(file)) note(precedentModulesLoaded, reference);
          }
        }
        for (const script of command.matchAll(/skills\/([a-z0-9-]+)\/(scripts\/[a-z0-9-]+\.mjs)/g)) note(scriptsRun, `${script[1]}/${script[2]}`);
      }
      if (item.type === 'file_change') { toolCounts.Edit = (toolCounts.Edit ?? 0) + 1; if (ev.type === 'item.completed') { implementationEventIndices.push(eventIndex); timeline.push('implementation'); } }
    }
    if (ev.type === 'turn.completed') {
      costUsd = ev.usage?.cost_usd ?? costUsd;
      turns = (turns ?? 0) + 1;
    }
  }
  // Skills count as loaded if invoked through the Skill tool or read directly.
  const skillsLoaded = [...new Set([...skillsInvoked, ...skillFilesRead])];
  const specialistsTriggered = skillsLoaded.filter((skill) => skill !== 'experience-architect');
  const renderedEvidenceGathered = false; // Set only after the runner verifies before/after PNG artifacts, order, inspection, and comparison.
  const executionTrace = parseExecutionTrace(answer, skillsLoaded, referencesRead);
  if (executionTrace.present) answer = answer.replace(/<!--\s*experience-skills-trace\s*[\s\S]*?\s*-->/i, '').trim();
  const completionCriteriaSatisfied = {
    evidenceContract: /\bObserved:\b[\s\S]*\bMeasured:\b[\s\S]*\bChanged:\b[\s\S]*\bVerified:\b[\s\S]*\bNot verified:\b/i.test(answer),
    finalGate: /final gate|PASS\s*[·|]|NOT VERIFIED IN RENDERED OUTPUT/i.test(answer),
    beforeAfter: /before[^\n]{0,120}\d[\s\S]{0,400}after[^\n]{0,120}\d/i.test(answer),
    stateMatrix: /state matrix/i.test(answer),
    selectedDirection: /selected direction|direction selected/i.test(answer),
    selectedComposition: /selected composition|composition selected/i.test(answer),
    handoffArtifact: executionTrace.complete,
    executionTrace: executionTrace.complete,
    renderedExceptionNamed: /NOT VERIFIED IN RENDERED OUTPUT[\s\S]{0,240}(?:because|reason|unavailable|cannot|not available)/i.test(answer),
  };
  return { answer, skillsInvoked, skillFilesRead, skillsLoaded, specialistsTriggered, referencesRead, designIntelligenceModulesLoaded, precedentModulesLoaded, scriptsRun, editToolsUsed, renderedEvidenceGathered, renderedToolActivity, imageFilesRead, imageReadEvents, implementationEventIndices, renderAttempts, executionTrace, completionCriteriaSatisfied, timeline, toolCounts, costUsd, turns, error };
}

/** Verify real PNG output, before/after ordering, image inspection, and an explicit comparison. */
export function validateRenderEvidence(project, transcript, expectedHelperHash = null) {
  const attempts = transcript.renderAttempts ?? [];
  const before = attempts.filter((attempt) => attempt.phase === 'before').at(-1);
  const after = attempts.filter((attempt) => attempt.phase === 'after').at(-1);
  const timeline = transcript.timeline ?? [];
  const implementationEvents = transcript.implementationEventIndices ?? [];
  const firstEdit = implementationEvents.length ? Math.min(...implementationEvents) : -1;
  const lastEdit = implementationEvents.length ? Math.max(...implementationEvents) : -1;
  const path = (value) => value.startsWith('/') ? value : `${project}/${value}`;
  const validPngs = (attempt) => {
    if (!attempt?.manifest || !attempt.screenshots.length) return [];
    try {
      const manifest = JSON.parse(readFileSync(path(attempt.manifest), 'utf8'));
      if (manifest.phase !== attempt.phase || !Array.isArray(manifest.screenshots)) return [];
      const stdoutByPath = new Map(attempt.screenshots.map((shot) => [shot.path, shot]));
      return manifest.screenshots.filter((shot) => {
        const emitted = stdoutByPath.get(shot.path);
        if (!emitted || emitted.sha256 !== shot.sha256 || emitted.bytes !== shot.bytes) return false;
        try {
          const resolved = path(shot.path);
          if (!resolved.startsWith(`${project}/`)) return false;
          const bytes = readFileSync(resolved);
          return bytes.length === shot.bytes
            && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
            && bytes.readUInt32BE(16) === shot.width
            && bytes.readUInt32BE(20) === shot.height
            && shot.sha256 === createHash('sha256').update(bytes).digest('hex');
        } catch { return false; }
      });
    } catch { return []; }
  };
  const beforeShots = validPngs(before);
  const afterShots = validPngs(after);
  const key = (shot) => `${shot.view}/${shot.viewport}`;
  const beforeKeys = new Set(beforeShots.map(key));
  const afterKeys = new Set(afterShots.map(key));
  const matched = [...beforeKeys].filter((item) => afterKeys.has(item));
  const imageWasRead = (shot, afterIndex, beforeIndex) => (transcript.imageReadEvents ?? []).some((item) => {
    const sameFile = item.path.endsWith(shot.path);
    return sameFile && item.eventIndex > afterIndex && (beforeIndex === null || item.eventIndex < beforeIndex);
  });
  const beforeInspected = before ? beforeShots.filter((shot) => imageWasRead(shot, before.eventIndex, firstEdit)) : [];
  const afterInspected = after ? afterShots.filter((shot) => imageWasRead(shot, after.eventIndex, null)) : [];
  const section = /^##\s+Before\/after comparison\s*$/im.test(transcript.answer ?? '');
  const answer = transcript.answer ?? '';
  const sectionStart = answer.match(/^##\s+Before\/after comparison\s*$/im);
  const comparisonSection = sectionStart
    ? answer.slice(sectionStart.index + sectionStart[0].length).split(/\n##\s/)[0]
    : '';
  const explicitComparison = /\bcompared\b/i.test(comparisonSection)
    && /\b(?:before|baseline)\b/i.test(comparisonSection)
    && /\b(?:after|edited|result)\b/i.test(comparisonSection)
    && /\b(?:changed|improved|remains|still|reduced|stronger|weaker|difference|whereas|while)\b/i.test(comparisonSection);
  const beforeOrdered = before && firstEdit >= 0 && before.eventIndex < firstEdit;
  const afterOrdered = after && lastEdit >= 0 && after.eventIndex > lastEdit;
  const inspectedPair = matched.filter((item) => {
    const [view, viewport] = item.split('/');
    return beforeInspected.some((shot) => shot.view === view && shot.viewport === viewport)
      && afterInspected.some((shot) => shot.view === view && shot.viewport === viewport);
  });
  let helperIntact = expectedHelperHash === null;
  if (expectedHelperHash !== null) {
    try { helperIntact = expectedHelperHash === createHash('sha256').update(readFileSync(`${project}/.benchmark/render.mjs`)).digest('hex'); }
    catch { helperIntact = false; }
  }
  const passed = Boolean(beforeOrdered && afterOrdered && beforeShots.length === before?.screenshots?.length
    && afterShots.length === after?.screenshots?.length && matched.length > 0
    && matched.length === beforeShots.length && inspectedPair.length === matched.length && explicitComparison && helperIntact);
  return {
    passed, helperIntact,
    explicitComparison,
    beforeRender: Boolean(beforeOrdered && beforeShots.length),
    afterRender: Boolean(afterOrdered && afterShots.length),
    pairedScreenshots: matched.length,
    inspectedPairs: inspectedPair.length,
    beforeScreenshots: beforeShots.length,
    afterScreenshots: afterShots.length,
  };
}

/** Observable signals for a selective full-product run. These are diagnostics, not a skill quota. */
export function fullPassSignals(transcript, changedFiles = []) {
  const events = transcript.timeline ?? [];
  const implementationAt = events.indexOf('implementation');
  const renderAfter = implementationAt >= 0 && events.findIndex((event, i) => i > implementationAt && event === 'render-after') >= 0;
  const answer = transcript.answer ?? '';
  const active = (transcript.skillsLoaded ?? []).filter((name) => name !== 'use-all-skills' && name !== 'experience-architect');
  return {
    conductorLoaded: (transcript.skillsLoaded ?? []).includes('use-all-skills'),
    activeSpecialists: active.length,
    selectiveReferences: (transcript.referencesRead ?? []).length > 0 && (transcript.referencesRead ?? []).length <= 80,
    modeNamed: /Build Mode|Audit Mode/i.test(answer),
    coreInstrumentNamed: /core instrument|primary work surface/i.test(answer),
    implementationChangedFiles: changedFiles.length > 0,
    renderedAfterImplementation: renderAfter,
    journeyEvidence: /primary (?:journey|loop)|repeat(?:ed|edly)?.{0,30}(?:interaction|task|control)|mistake.{0,100}recover/i.test(answer),
    reviewParticipation: active.filter((name) => ['anti-ai-slop', 'interface-forensics', 'critical-review'].includes(name)).length,
  };
}

const PRAISE_OPENING = /^(great|love|nice|awesome|excellent|amazing|beautiful|clean|good (idea|question|call)|what a|i love|this (looks|is|seems) (great|clean|good|nice|solid|amazing|excellent|modern))/i;
const HYPE = /\b(clean|modern|sleek|premium|intuitive|seamless(ly)?|delightful|stunning|elevate[sd]?)\b/gi;

/** The first sentence of the answer, with markdown decoration stripped. */
export function firstSentence(text) {
  const plain = text
    .split('\n')
    .map((l) => l.replace(/^#+\s*/, '').replace(/[*_`>]/g, '').trim())
    .filter(Boolean)
    .join(' ');
  return (plain.match(/^.*?[.!?](\s|$)/) ?? [plain])[0].trim();
}

/** Cheap, deterministic signals. The judge does the real grading. */
export function answerSignals(answer) {
  const opening = firstSentence(answer);
  return {
    openingPraise: PRAISE_OPENING.test(opening),
    opening,
    hypeWords: (answer.match(HYPE) ?? []).map((w) => w.toLowerCase()),
    evidenceLabels: /\bE[1-6]\b|not verified|unverified|\bmeasured\b|\brendered\b/i.test(answer),
    beforeAfterCounts: /before[^\n]{0,120}\d[\s\S]{0,400}after[^\n]{0,120}\d/i.test(answer),
    words: answer.split(/\s+/).filter(Boolean).length,
  };
}

/** Condition-blind grading prompt. */
export function judgePrompt(scenario, answer) {
  const list = (items) => items.map((t, i) => `${i + 1}. ${t}`).join('\n');
  return `You are grading an AI assistant's answer to a product-design request. Be strict and literal.
You do not know how the assistant was configured; judge only the answer text.

## The situation
${scenario.scenario}

## What the user said
${scenario.prompt}

## Principles a strong answer applies
${list(scenario.principles)}

## Recommendations that are unacceptable
${list(scenario.unacceptable)}

## The assistant's answer
<answer>
${answer}
</answer>

Grade each principle as met only if the answer clearly applies it (not merely mentions a related word).
Mark an unacceptable recommendation as violated if the answer recommends it, endorses it, or plans to
implement it without challenging it. Also judge whether the answer opens with praise or agreement
before any evaluation.

Reply with ONLY this JSON, no prose, no code fences:
{"principles":[{"id":1,"met":true,"evidence":"short quote or reason"}],
 "unacceptable":[{"id":1,"violated":false,"evidence":"short quote or reason"}],
 "praiseBeforeEvaluation":false,
 "challengedFlawedPremise":true,
 "overall":"strong|adequate|weak",
 "notes":"one or two sentences"}`;
}

/** Extract the judge's JSON even if it added stray text. */
export function parseJudge(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('judge returned no JSON');
  const data = JSON.parse(text.slice(start, end + 1));
  const principles = data.principles ?? [];
  const unacceptable = data.unacceptable ?? [];
  return {
    ...data,
    principlesMet: principles.filter((p) => p.met).length,
    principlesTotal: principles.length,
    violations: unacceptable.filter((u) => u.violated).length,
  };
}

/** Routing score: which expected skills the agent loaded in the with-skills condition. */
export function routingScore(expected, loaded) {
  const hit = expected.filter((s) => loaded.includes(s));
  return { expected, loaded, hit, missed: expected.filter((s) => !loaded.includes(s)), extra: loaded.filter((s) => !expected.includes(s) && s !== 'experience-architect') };
}

/** Markdown report comparing conditions per scenario. */
export function renderReport(runs, meta) {
  const by = {};
  for (const r of runs) (by[r.scenarioId] ??= {})[r.condition] = r;
  const cell = (r, fn) => (r ? fn(r) : '–');
  const pct = (r) => (r.judge ? `${r.judge.principlesMet}/${r.judge.principlesTotal}` : r.error ? 'error' : 'n/a');
  const lines = [
    `# Agent Evaluation Report`,
    '',
    `Date: ${meta.date} · Agent: ${meta.agent} · Model: ${meta.model ?? 'default'} · Mode: ${meta.mode ?? 'review'} · Judge: ${meta.judge} · Scenarios/samples: ${Object.keys(by).length}`,
    '',
    'Each scenario and selected condition ran in a fresh temporary project. A separate judge graded',
    'completed answers without knowing whether project skills were installed.',
    '',
    '## Outcome quality',
    '',
    '| Scenario | Principles met (without → with) | Unacceptable (without → with) | Praise opening (without → with) | Challenged premise (without → with) | Overall (without → with) |',
    '|---|---|---|---|---|---|',
  ];
  for (const [id, c] of Object.entries(by)) {
    const w = c.with; const wo = c.without;
    lines.push(`| ${id}${c.with?.anchor || c.without?.anchor ? ' (anchor)' : ''} | ${cell(wo, pct)} → ${cell(w, pct)} | ${cell(wo, (r) => r.judge?.violations ?? '?')} → ${cell(w, (r) => r.judge?.violations ?? '?')} | ${cell(wo, (r) => (r.signals?.openingPraise ? 'yes' : 'no'))} → ${cell(w, (r) => (r.signals?.openingPraise ? 'yes' : 'no'))} | ${cell(wo, (r) => r.judge?.challengedFlawedPremise ? 'yes' : 'no')} → ${cell(w, (r) => r.judge?.challengedFlawedPremise ? 'yes' : 'no')} | ${cell(wo, (r) => r.judge?.overall ?? 'n/a')} → ${cell(w, (r) => r.judge?.overall ?? 'n/a')} |`);
  }
  const totals = (cond) => {
    const rs = runs.filter((r) => r.condition === cond && r.judge);
    const met = rs.reduce((s, r) => s + r.judge.principlesMet, 0);
    const tot = rs.reduce((s, r) => s + r.judge.principlesTotal, 0);
    const viol = rs.reduce((s, r) => s + r.judge.violations, 0);
    const praise = rs.filter((r) => r.signals.openingPraise).length;
    const challenged = rs.filter((r) => r.judge?.challengedFlawedPremise).length;
    return { n: rs.length, met, tot, viol, praise, challenged };
  };
  const a = totals('without'); const b = totals('with');
  lines.push('', '## Totals', '',
    `| Condition | Runs graded | Principles met | Unacceptable recommendations | Praise openings | Challenged premise |`,
    `|---|---|---|---|---|---|`,
    `| without skills | ${a.n} | ${a.met}/${a.tot} | ${a.viol} | ${a.praise} | ${a.challenged} |`,
    `| with skills | ${b.n} | ${b.met}/${b.tot} | ${b.viol} | ${b.praise} | ${b.challenged} |`,
    '', '## Process compliance', '',
    '| Scenario | Skill routing | References read / DI / precedent | Required refs | Execution trace | Before/after renders | Paired screenshots inspected | Changed files |',
    '|---|---|---|---|---|---|---|---|');
  for (const [id, c] of Object.entries(by)) {
    const r = c.with;
    lines.push(`| ${id} | ${cell(r, (v) => `${v.routing.hit.length}/${v.routing.expected.length}${v.routing.missed.length ? ` (missed: ${v.routing.missed.join(', ')})` : ''}`)} | ${cell(r, (v) => `${(v.transcript.referencesRead ?? []).length} / ${(v.transcript.designIntelligenceModulesLoaded ?? []).length} / ${(v.transcript.precedentModulesLoaded ?? []).length}`)} | ${cell(r, (v) => v.requiredReferenceCompliance ? `${v.requiredReferenceCompliance.loaded.length}/${v.requiredReferenceCompliance.required.length}` : 'n/a')} | ${cell(r, (v) => !v.transcript.skillsLoaded.length ? 'n/a' : v.transcript.executionTrace?.complete ? `${v.transcript.executionTrace.entries.length}/${v.transcript.skillsLoaded.length}` : `incomplete (${v.transcript.executionTrace?.issues?.length ?? 0})`)} | ${cell(r, (v) => v.renderEvidence?.passed ? `${v.renderEvidence.beforeScreenshots}+${v.renderEvidence.afterScreenshots}` : 'not verified')} | ${cell(r, (v) => `${v.renderEvidence?.inspectedPairs ?? 0}/${v.renderEvidence?.pairedScreenshots ?? 0}`)} | ${cell(r, (v) => v.mode === 'edit' ? `${v.changedFiles?.length ?? 0}` : '–')} |`);
  }
  lines.push('', '## Process totals', '',
    `| Condition | Runs with any required refs | Required refs loaded | Complete execution traces | Before/after render proof | Required screenshot pairs inspected |`,
    `|---|---|---|---|---|---|`);
  for (const cond of ['without', 'with']) {
    const rs = runs.filter((r) => r.condition === cond);
    const required = cond === 'with' ? rs.filter((r) => r.requiredReferenceCompliance?.required?.length) : [];
    const refLoaded = required.reduce((n, r) => n + r.requiredReferenceCompliance.loaded.length, 0);
    const refTotal = required.reduce((n, r) => n + r.requiredReferenceCompliance.required.length, 0);
    const rendered = rs.filter((r) => r.renderEvidence?.passed).length;
    const inspectedPairs = rs.reduce((n, r) => n + (r.renderEvidence?.inspectedPairs ?? 0), 0);
    const paired = rs.reduce((n, r) => n + (r.renderEvidence?.pairedScreenshots ?? 0), 0);
    const traceRuns = rs.filter((r) => (r.transcript?.skillsLoaded?.length ?? 0) > 0);
    const completeTraces = traceRuns.filter((r) => r.transcript?.executionTrace?.complete).length;
    lines.push(`| ${cond} | ${required.length} | ${refTotal ? `${refLoaded}/${refTotal}` : 'n/a'} | ${traceRuns.length ? `${completeTraces}/${traceRuns.length}` : 'n/a'} | ${rendered}/${rs.length} | ${inspectedPairs}/${paired} |`);
  }
  lines.push('', '## Per-run notes', '');
  for (const r of runs) {
    lines.push(`- **${r.scenarioId} · ${r.condition}:** ${r.error ? `ERROR: ${r.error}` : (r.judge?.notes ?? 'no judge notes')}${r.condition === 'with' && r.transcript ? ` Skills loaded: ${r.transcript.skillsLoaded.join(', ') || 'none'}.` : ''}`);
  }
  const fullRuns = runs.filter((r) => r.fullPass);
  if (fullRuns.length) {
    lines.push('', '## Full-product behavior signals', '', '| Run | Conductor | Active specialists | Selective refs | Mode | Instrument | Changed | Rendered after change | Journey evidence | Review specialists |', '|---|---|---|---|---|---|---|---|---|---|');
    for (const r of fullRuns) {
      const f = r.fullPass; const flag = (v) => v ? 'yes' : 'no';
      lines.push(`| ${r.scenarioId} · ${r.condition} | ${flag(f.conductorLoaded)} | ${f.activeSpecialists} | ${flag(f.selectiveReferences)} | ${flag(f.modeNamed)} | ${flag(f.coreInstrumentNamed)} | ${flag(f.implementationChangedFiles)} | ${flag(f.renderedAfterImplementation)} | ${flag(f.journeyEvidence)} | ${f.reviewParticipation} |`);
    }
  }
  lines.push('', `Sampling: ${meta.repeat ?? 1} independent sample(s) per scenario/condition. Use ` +
    '`--repeat 3` or `--repeat 5` for a spread estimate; do not interpret one run as scientific proof.',
    'Limitations: the judge is an LLM; the agent\'s own user-level skills and settings load in both conditions.');
  const withRuns = runs.filter((r) => r.condition === 'with');
  const ratio = (n, d) => d ? `${Math.round((n / d) * 100)}% (${n}/${d})` : 'n/a';
  const requiredRuns = withRuns.filter((r) => r.requiredReferenceCompliance?.required?.length);
  lines.push('', '## Enforcement metrics', '',
    '| Metric | With-skills result |', '|---|---|',
    `| Reference activation rate | ${ratio(withRuns.filter((r) => (r.transcript?.referencesRead?.length ?? 0) > 0).length, withRuns.length)} |`,
    `| Design-intelligence usage rate | ${ratio(withRuns.filter((r) => (r.transcript?.designIntelligenceModulesLoaded?.length ?? 0) > 0).length, withRuns.length)} |`,
    `| Precedent usage rate | ${ratio(withRuns.filter((r) => (r.transcript?.precedentModulesLoaded?.length ?? 0) > 0).length, withRuns.length)} |`,
    `| Required-reference compliance | ${requiredRuns.length ? ratio(requiredRuns.reduce((n, r) => n + r.requiredReferenceCompliance.loaded.length, 0), requiredRuns.reduce((n, r) => n + r.requiredReferenceCompliance.required.length, 0)) : 'n/a'} |`,
    `| Verified before/after render pairs | ${ratio(withRuns.filter((r) => r.renderEvidence?.passed).length, withRuns.length)} |`,
    `| Handoff completeness | ${ratio(withRuns.filter((r) => r.transcript?.completionCriteriaSatisfied?.handoffArtifact).length, withRuns.length)} |`,
    `| Extra-specialist activation rate | ${ratio(withRuns.reduce((n, r) => n + (r.routing?.extra?.length ?? 0), 0), withRuns.length)} extra activations/run |`);
  return `${lines.join('\n')}\n`;
}
