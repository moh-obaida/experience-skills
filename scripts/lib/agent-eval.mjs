// Pure helpers for the agent evaluation harness (scripts/run-agent-evals.mjs).
// No I/O here, so everything is unit-testable without running an agent.

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
    expectedSkills: bullets(sections['Expected skills']).map((l) => l.split(/[\s(]/)[0]).filter((n) => n !== 'experience-architect'),
    principles: bullets(sections['Key principles expected']),
    unacceptable: bullets(sections['Unacceptable recommendations']),
  };
}

const DESIGN_INTELLIGENCE = new Set([
  'selection.md', 'directions-index.md', 'palettes.md', 'typography.md', 'surfaces-and-shape.md',
  'imagery-illustration-icons.md', 'motion-languages.md', 'compositions-index.md',
  'compositions-focus.md', 'compositions-flows.md', 'compositions-narrative.md',
  'compositions-content.md', 'compositions-discovery.md', 'compositions-workspaces.md',
  'compositions-operational.md', 'compositions-mobile.md', 'data-visualization.md',
  'spatial-density-navigation.md', 'anti-generic-alternatives.md',
]);
const PRECEDENT = new Set([
  'commerce-and-discovery.md', 'dense-operational-layouts.md', 'editorial-and-typography.md',
  'environment-first-identity.md', 'interruptions-and-consent.md', 'justified-trends.md',
  'known-context-and-defaults.md', 'mobile-navigation.md', 'motion-guidelines.md',
  'product-derived-identity.md', 'product-first-presentation.md',
  'progressive-disclosure-and-expert-speed.md', 'states-loading-empty-error.md',
  'transactional-clarity.md', 'whitespace-and-dead-space.md',
]);

/** Parse a stream-json transcript and record activation, depth, evidence, and completion signals. */
export function parseTranscript(jsonl) {
  const events = [];
  for (const line of jsonl.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('{')) continue;
    try { events.push(JSON.parse(trimmed)); } catch { /* ignore partial lines */ }
  }
  const skillsInvoked = [];
  const skillFilesRead = [];
  const referencesRead = [];
  const designIntelligenceModulesLoaded = [];
  const precedentModulesLoaded = [];
  const scriptsRun = [];
  const toolCounts = {};
  let answer = '';
  let costUsd = null;
  let turns = null;
  let error = null;
  const note = (list, value) => { if (value && !list.includes(value)) list.push(value); };

  for (const ev of events) {
    if (ev.type === 'assistant' && Array.isArray(ev.message?.content)) {
      for (const block of ev.message.content) {
        if (block.type !== 'tool_use') continue;
        toolCounts[block.name] = (toolCounts[block.name] ?? 0) + 1;
        const input = block.input ?? {};
        if (block.name === 'Skill') note(skillsInvoked, String(input.skill ?? input.command ?? input.name ?? '').replace(/^\//, ''));
        const path = String(input.file_path ?? input.path ?? '');
        const skillFile = path.match(/skills\/([a-z0-9-]+)\/SKILL\.md$/);
        if (skillFile) note(skillFilesRead, skillFile[1]);
        const ref = path.match(/skills\/([a-z0-9-]+)\/(references\/.+\.md)$/);
        if (ref) {
          const reference = `${ref[1]}/${ref[2]}`;
          note(referencesRead, reference);
          const file = reference.split('/').pop();
          if (DESIGN_INTELLIGENCE.has(file)) note(designIntelligenceModulesLoaded, reference);
          if (PRECEDENT.has(file)) note(precedentModulesLoaded, reference);
        }
        const cmd = String(input.command ?? '');
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
  }
  // Skills count as loaded if invoked through the Skill tool or read directly.
  const skillsLoaded = [...new Set([...skillsInvoked, ...skillFilesRead])];
  const specialistsTriggered = skillsLoaded.filter((skill) => skill !== 'experience-architect');
  const renderedEvidenceGathered = scriptsRun.some((script) => /measure|layout|overflow|collision|stress|motion-rendered|inventory-styles|check-controls/.test(script))
    || /playwright|screenshot|browser|chrome/i.test(jsonl);
  const completionCriteriaSatisfied = {
    evidenceContract: /\bObserved:\b[\s\S]*\bMeasured:\b[\s\S]*\bChanged:\b[\s\S]*\bVerified:\b[\s\S]*\bNot verified:\b/i.test(answer),
    finalGate: /final gate|PASS\s*[·|]|NOT VERIFIED IN RENDERED OUTPUT/i.test(answer),
    beforeAfter: /before[^\n]{0,120}\d[\s\S]{0,400}after[^\n]{0,120}\d/i.test(answer),
    stateMatrix: /state matrix/i.test(answer),
    selectedDirection: /selected direction|direction selected/i.test(answer),
    selectedComposition: /selected composition|composition selected/i.test(answer),
    handoffArtifact: /\bmode:\b[\s\S]*\bsurface\b[\s\S]*\bevidence:\b[\s\S]*\bdecision:\b[\s\S]*\bverification:\b/i.test(answer),
  };
  return { answer, skillsInvoked, skillFilesRead, skillsLoaded, specialistsTriggered, referencesRead, designIntelligenceModulesLoaded, precedentModulesLoaded, scriptsRun, renderedEvidenceGathered, completionCriteriaSatisfied, toolCounts, costUsd, turns, error };
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
    `Date: ${meta.date} · Agent: ${meta.agent} · Judge: ${meta.judge} · Scenarios: ${Object.keys(by).length}`,
    '',
    'Each scenario ran twice in a fresh temporary project: **without** the skills and **with** all',
    'skills installed as project skills. A separate judge graded answers without knowing the condition.',
    '',
    '| Scenario | Principles met (without → with) | Unacceptable (without → with) | Praise opening (without → with) | Expected skills loaded (with) | References / DI / precedent (with) | Required refs | Rendered evidence | Completion signals |',
    '|---|---|---|---|---|---|---|---|---|',
  ];
  for (const [id, c] of Object.entries(by)) {
    const w = c.with; const wo = c.without;
    lines.push(`| ${id}${c.with?.anchor || c.without?.anchor ? ' (anchor)' : ''} | ${cell(wo, pct)} → ${cell(w, pct)} | ${cell(wo, (r) => r.judge?.violations ?? '?')} → ${cell(w, (r) => r.judge?.violations ?? '?')} | ${cell(wo, (r) => (r.signals?.openingPraise ? 'yes' : 'no'))} → ${cell(w, (r) => (r.signals?.openingPraise ? 'yes' : 'no'))} | ${cell(w, (r) => `${r.routing.hit.length}/${r.routing.expected.length}${r.routing.missed.length ? ` (missed: ${r.routing.missed.join(', ')})` : ''}`)} | ${cell(w, (r) => `${(r.transcript.referencesRead ?? []).length} / ${(r.transcript.designIntelligenceModulesLoaded ?? []).length} / ${(r.transcript.precedentModulesLoaded ?? []).length}`)} | ${cell(w, (r) => r.requiredReferenceCompliance ? `${r.requiredReferenceCompliance.loaded.length}/${r.requiredReferenceCompliance.required.length}` : 'n/a')} | ${cell(w, (r) => r.transcript.renderedEvidenceGathered ? 'yes' : 'no')} | ${cell(w, (r) => Object.values(r.transcript.completionCriteriaSatisfied ?? {}).filter(Boolean).length)} |`);
  }
  const totals = (cond) => {
    const rs = runs.filter((r) => r.condition === cond && r.judge);
    const met = rs.reduce((s, r) => s + r.judge.principlesMet, 0);
    const tot = rs.reduce((s, r) => s + r.judge.principlesTotal, 0);
    const viol = rs.reduce((s, r) => s + r.judge.violations, 0);
    const praise = rs.filter((r) => r.signals.openingPraise).length;
    const specialists = rs.reduce((s, r) => s + (r.transcript?.specialistsTriggered?.length ?? 0), 0);
    const rendered = rs.filter((r) => r.transcript?.renderedEvidenceGathered).length;
    return { n: rs.length, met, tot, viol, praise, specialists, rendered };
  };
  const a = totals('without'); const b = totals('with');
  lines.push('', '## Totals', '',
    `| Condition | Runs graded | Principles met | Unacceptable recommendations | Praise openings | Specialists | Rendered evidence |`,
    `|---|---|---|---|---|---|---|`,
    `| without skills | ${a.n} | ${a.met}/${a.tot} | ${a.viol} | ${a.praise} | ${a.specialists} | ${a.rendered} |`,
    `| with skills | ${b.n} | ${b.met}/${b.tot} | ${b.viol} | ${b.praise} | ${b.specialists} | ${b.rendered} |`,
    '', '## Per-run notes', '');
  for (const r of runs) {
    lines.push(`- **${r.scenarioId} · ${r.condition}:** ${r.error ? `ERROR: ${r.error}` : (r.judge?.notes ?? 'no judge notes')}${r.condition === 'with' && r.transcript ? ` Skills loaded: ${r.transcript.skillsLoaded.join(', ') || 'none'}.` : ''}`);
  }
  lines.push('', 'Limitations: one run per condition (no variance estimate); an LLM judge; the agent\'s own',
    'user-level skills and settings load in both conditions.');
  return `${lines.join('\n')}\n`;
}
