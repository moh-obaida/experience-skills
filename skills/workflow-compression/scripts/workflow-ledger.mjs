#!/usr/bin/env node
// Count and compare workflow steps before and after a redesign, and tag likely friction.
// Usage: node workflow-ledger.mjs <flow.json> [--json] [--strict]

import { readFileSync } from 'node:fs';

const HELP = `workflow-ledger — count a workflow before and after, and tag likely friction

Usage:
  node workflow-ledger.mjs <flow.json> [--json] [--strict]

Input: JSON with "before" and optionally "after" arrays of steps. Each step:
  { "step": "Choose language", "type": "decision", ...attributes }

Types: action, input, decision, navigation, confirmation, wait, lookup, recovery, outcome

Attributes that drive friction tags:
  input/decision   "known": true           → F1 REDUNDANT INPUT
  decision         "options": 1            → F2 UNNECESSARY CHOICE
  any              "repeated": true        → F3 REPEATED CONFIGURATION
  navigation       "tiny": true            → F4 NAVIGATION TAX
  confirmation     "reversible": true      → F5 CONFIRMATION TAX
  any              "perItem": N            → F6 SERIAL WORK (step repeated N times)
  any              "forgotten": true       → F7 MEMORY FAILURE
  wait             "blocking": true        → F8 WAITING TAX ("seconds": n)
  outcome          "next": false           → F9 DEAD END
  any              "expertRepeat": true    → F10 EXPERT TAX
  any              "preserve": true        → marks a safeguard/judgment step (never tagged)

Options:
  --json     Print JSON
  --strict   Exit 1 if the "after" flow still has tagged friction
  --help     Show this help

Exit codes: 0 ok · 1 friction remains (with --strict) · 2 usage or input error`;

export const TYPES = ['action', 'input', 'decision', 'navigation', 'confirmation', 'wait', 'lookup', 'recovery', 'outcome'];

const TAGS = {
  F1: 'REDUNDANT INPUT', F2: 'UNNECESSARY CHOICE', F3: 'REPEATED CONFIGURATION', F4: 'NAVIGATION TAX',
  F5: 'CONFIRMATION TAX', F6: 'SERIAL WORK', F7: 'MEMORY FAILURE', F8: 'WAITING TAX', F9: 'DEAD END', F10: 'EXPERT TAX',
};

export function tagStep(s) {
  if (s.preserve) return [];
  const tags = [];
  if ((s.type === 'input' || s.type === 'decision') && s.known) tags.push('F1');
  if (s.type === 'decision' && s.options === 1) tags.push('F2');
  if (s.repeated) tags.push('F3');
  if (s.type === 'navigation' && s.tiny) tags.push('F4');
  if (s.type === 'confirmation' && s.reversible) tags.push('F5');
  if (Number(s.perItem) > 1) tags.push('F6');
  if (s.forgotten) tags.push('F7');
  if (s.type === 'wait' && s.blocking) tags.push('F8');
  if (s.type === 'outcome' && s.next === false) tags.push('F9');
  if (s.expertRepeat) tags.push('F10');
  return tags;
}

export function countFlow(steps) {
  const counts = Object.fromEntries(TYPES.map((t) => [t, 0]));
  let blockingWaitSeconds = 0;
  const friction = [];
  steps.forEach((s, i) => {
    if (!TYPES.includes(s.type)) throw new Error(`Step ${i + 1} ("${s.step ?? '?'}") has unknown type "${s.type}"`);
    const times = Math.max(1, Number(s.perItem) || 1);
    if (s.type !== 'outcome') counts[s.type] += times;
    if (s.type === 'wait' && s.blocking) blockingWaitSeconds += Number(s.seconds || 0) * times;
    for (const code of tagStep(s)) friction.push({ step: i + 1, name: s.step ?? '', code, label: TAGS[code] });
  });
  const total = TYPES.filter((t) => t !== 'outcome').reduce((sum, t) => sum + counts[t], 0);
  const hasNext = steps.some((s) => s.type === 'outcome' && s.next === true);
  return { counts, total, blockingWaitSeconds, friction, endsWithNextAction: hasNext };
}

export function compare(flow) {
  if (!Array.isArray(flow.before) || flow.before.length === 0) throw new Error('"before" must be a non-empty array of steps');
  const before = countFlow(flow.before);
  const after = Array.isArray(flow.after) ? countFlow(flow.after) : null;
  const delta = after
    ? Object.fromEntries(TYPES.filter((t) => t !== 'outcome').map((t) => [t, after.counts[t] - before.counts[t]]))
    : null;
  const preserved = [
    ...(flow.preserved ?? []),
    ...(flow.after ?? []).filter((s) => s.preserve).map((s) => s.step),
  ];
  return { name: flow.name ?? '', actor: flow.actor ?? '', frequency: flow.frequency ?? '', before, after, delta, preserved: [...new Set(preserved)] };
}

function line(label, c) {
  return `${label.padEnd(8)} ${c.total} steps · ${c.counts.action} actions · ${c.counts.input} inputs · ${c.counts.decision} decisions · ${c.counts.navigation} navigations · ${c.counts.confirmation} confirmations · ${c.blockingWaitSeconds}s blocking wait · next action: ${c.endsWithNextAction ? 'yes' : 'no'}`;
}

function toText(r) {
  const out = [];
  out.push(`Flow: ${r.name || '(unnamed)'}${r.actor ? ` · ${r.actor}` : ''}${r.frequency ? ` · ${r.frequency}` : ''}`);
  out.push(line('Before:', r.before));
  if (r.after) out.push(line('After:', r.after));
  if (r.delta) {
    const parts = Object.entries(r.delta).filter(([, v]) => v !== 0).map(([k, v]) => `${k} ${v > 0 ? '+' : ''}${v}`);
    out.push(`Delta:   ${parts.length ? parts.join(' · ') : 'no change in counts'}`);
  }
  out.push('');
  out.push('Likely friction (before):');
  if (!r.before.friction.length) out.push('  none tagged');
  for (const f of r.before.friction) out.push(`  step ${f.step} ${f.code} ${f.label} — ${f.name}`);
  if (r.after) {
    out.push('Remaining friction (after):');
    if (!r.after.friction.length) out.push('  none tagged');
    for (const f of r.after.friction) out.push(`  step ${f.step} ${f.code} ${f.label} — ${f.name}`);
  }
  if (r.preserved.length) {
    out.push('Preserved:');
    for (const p of r.preserved) out.push(`  ${p}`);
  }
  out.push('');
  out.push('Tags come from step attributes you supplied. They are prompts to examine, not verdicts.');
  return `${out.join('\n')}\n`;
}

function main(argv) {
  const args = argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) { process.stdout.write(`${HELP}\n`); return 0; }
  const file = args.find((a) => !a.startsWith('--'));
  const unknown = args.filter((a) => a.startsWith('--') && !['--json', '--strict'].includes(a));
  if (unknown.length) { process.stderr.write(`Unknown option ${unknown[0]}\n`); return 2; }
  if (!file) { process.stderr.write('Missing flow file. Run with --help.\n'); return 2; }
  let flow;
  try {
    flow = JSON.parse(readFileSync(file, 'utf8'));
  } catch (error) {
    process.stderr.write(`Could not read ${file}: ${error.message}\n`);
    return 2;
  }
  let result;
  try {
    result = compare(flow);
  } catch (error) {
    process.stderr.write(`Invalid flow: ${error.message}\n`);
    return 2;
  }
  if (args.includes('--json')) process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  else process.stdout.write(toText(result));
  if (args.includes('--strict') && result.after && result.after.friction.length) return 1;
  return 0;
}

if (process.argv[1]?.endsWith('workflow-ledger.mjs')) process.exitCode = main(process.argv);
