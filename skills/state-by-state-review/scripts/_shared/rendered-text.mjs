// GENERATED FROM shared/tools/rendered-text.mjs. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`.
#!/usr/bin/env node
// rendered-text.mjs
//
// Scan the visible text of a rendered page for language and state defects that are mechanically
// recognizable: internal identifiers shown to users, errors visible before any interaction or
// still visible after correction, repeated text, vague action labels, boilerplate phrasing, text
// direction mismatches, and unlabeled controls. It cannot judge tone, accuracy, or whether a
// repeated label is redundant: those are reading tasks. Findings are candidates with a confidence.
//
// Usage: node rendered-text.mjs <url-or-file> [--steps steps.json] [--size WxH] [--rtl] [--json]

import { parseArgs, parseSizes, runCli, truncate, UsageError, toUrl, launch, openPage } from './layout-probe.mjs';
import { styleSnapshot, signature } from './style-probe.mjs';

const HELP = `rendered-text — visible-text and state scan for one rendered page

Usage:
  node rendered-text.mjs <url-or-file> [options]

Options:
  --steps FILE      JSON describing interactions to run, with a text scan after each phase:
                    {"phases":[{"name":"typed-invalid","expectError":true,
                       "steps":[{"fill":["#code","12"]},{"click":"button[type=submit]"}]},
                      {"name":"corrected","expectNoErrors":true,
                       "steps":[{"fill":["#code","ABCD"]}]}]}
                    Step verbs: click, fill [selector,text], press, hover, check, select [selector,value], wait (ms).
  --size WxH        Viewport (default 1440x900)
  --rtl             Force dir="rtl" on the root element
  --channel NAME    Use an installed browser channel (e.g. chrome)
  --wait MS         Extra wait after load (default 300)
  --json            Print JSON
  --help            Show this help

Checks: TX1 internal code or placeholder leaked into UI · TX2 error visible before interaction,
still visible after correction (expectNoErrors), or absent when expected (expectError) · TX3 repeated
text across unrelated elements · TX4 vague action label · TX5 boilerplate phrasing · TX6 text
direction or language mismatch · TX7 control with no accessible name.

Limits: text only. It does not know whether a message is accurate, whether a repeated label is the
right place for it, or what the product is supposed to say. A technical identifier can be correct
in an admin or diagnostics screen. Treat every finding as a prompt to read the screen.

Exit codes: 0 no findings at or above medium confidence · 1 findings · 2 usage or environment error`;

// ---------------------------------------------------------------------------
// Pure analyzers
// ---------------------------------------------------------------------------

const ARABIC = /[؀-ۿݐ-ݿ]/g;
const LATIN = /[A-Za-z]/g;
const letters = (t) => (t.match(ARABIC)?.length ?? 0) + (t.match(LATIN)?.length ?? 0);

const CODE_PATTERNS = [
  { re: /\b(undefined|NaN)\b|\[object Object\]|\{\{[^}]*\}\}|\{%[^%]*%\}|%[sd]\b|\$\{[^}]*\}/, label: 'unrendered placeholder', confidence: 'high' },
  { re: /\bnull\b/i, label: 'literal null', confidence: 'medium', exact: true },
  { re: /\b[A-Z][A-Z0-9]{2,}(?:_[A-Z0-9]+){1,}\b/, label: 'SCREAMING_SNAKE identifier', confidence: 'medium' },
  { re: /\b(?:ERR|ERROR|E)[-_ ]?\d{3,5}\b/, label: 'numeric error code', confidence: 'medium' },
  { re: /\b[a-z][a-z0-9]*(?:\.[a-z][a-z0-9_]*){2,}\b/, label: 'dotted i18n/key path', confidence: 'medium', skipIf: /\b(?:www|https?|\d)/ },
  { re: /(?:status code|HTTP|request failed with)\D{0,12}[45]\d\d\b|\b[45]\d\d (?:Bad Request|Unauthorized|Forbidden|Not Found|Internal Server Error)\b/i, label: 'HTTP status text', confidence: 'medium' },
  { re: /\bat [\w.$<>]+ \(|\bTraceback\b|\bUncaught\b|\bTypeError\b|\bReferenceError\b/, label: 'stack or exception text', confidence: 'high' },
];

const VAGUE_ACTIONS = new Set(['submit', 'ok', 'okay', 'click here', 'here', 'go', 'proceed', 'process', 'execute', 'confirm?', 'yes/no']);
const BOILERPLATE = /\b(please note that|in order to|utilize|leverage|seamless(?:ly)?|unlock your|empower(?:s|ing)?|supercharge|robust solution|cutting-edge|an error has occurred|something went wrong|operation (?:completed )?successfully|invalid (?:input|request|data)\b|an unexpected error)\b/i;

const isErrorLike = (el) =>
  el.role === 'alert' || el.aria.invalid === 'true' || el.cls.some((c) => /(^|[-_])(error|invalid|danger|err)($|[-_])/.test(c));

const norm = (t) => t.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, '').replace(/\s+/g, ' ').trim();

/** Errors currently visible: message elements with text, and fields marked invalid. */
export function visibleErrors(snapshot) {
  return snapshot.elements.filter((e) => isErrorLike(e) && (e.text || e.aria.invalid === 'true' && ['input', 'select', 'textarea'].includes(e.tag)))
    .map((e) => ({ path: e.path, text: e.text, kind: e.aria.invalid === 'true' && !e.text ? 'invalid-field' : 'message' }));
}

function pageIsErrorPage(snapshot) {
  const heading = snapshot.elements.find((e) => /^h[12]$/.test(e.tag))?.text ?? '';
  return /\b(error|not found|404|403|500|denied|offline|unavailable|went wrong)\b/i.test(`${snapshot.title} ${heading}`);
}

/** TX1, TX3, TX4, TX5, TX6, TX7 on one snapshot. */
export function analyzeText(snapshot) {
  const findings = [];
  const els = snapshot.elements.filter((e) => e.text);

  for (const e of els) {
    for (const p of CODE_PATTERNS) {
      if (p.skipIf?.test(e.text)) continue;
      const m = e.text.match(p.re);
      if (!m) continue;
      if (p.exact && !/^\s*null\s*$/i.test(e.text)) continue;
      const inError = isErrorLike(e);
      findings.push({
        code: 'TX1', title: 'INTERNAL IDENTIFIER IN UI', path: e.path, text: truncate(e.text, 80),
        message: `${p.label} "${m[0]}"${inError ? ' inside an error element' : ''}`,
        confidence: p.confidence === 'high' || inError ? p.confidence : 'low',
        note: 'Ordinary validation problems should state the problem and the correction. Identifiers belong in diagnostics, support, or admin views.',
      });
      break;
    }
    if (BOILERPLATE.test(e.text)) {
      findings.push({
        code: 'TX5', title: 'BOILERPLATE PHRASING', path: e.path, text: truncate(e.text, 80),
        message: `matches "${e.text.match(BOILERPLATE)[0]}"`, confidence: 'low',
        note: 'Phrases like these are generic. Replace with the specific object, condition, and next step if the message is real.',
      });
    }
  }

  // TX4 vague action labels on actionable elements.
  for (const e of els) {
    if (!(e.interactive || e.role === 'button')) continue;
    if (VAGUE_ACTIONS.has(norm(e.text))) {
      findings.push({
        code: 'TX4', title: 'VAGUE ACTION LABEL', path: e.path, text: e.text,
        message: `"${e.text}" does not say what happens`, confidence: 'low',
        note: 'Label actions by outcome ("Join game", "Save quiz"). A one-word label can be right when the dialog title carries the object.',
      });
    }
  }

  // TX3 repeated text across unrelated elements.
  const byText = new Map();
  for (const e of els) {
    const n = norm(e.text);
    if (n.length < 8 && n.split(' ').length < 2) continue;
    (byText.get(n) ?? byText.set(n, []).get(n)).push(e);
  }
  for (const [n, group] of byText) {
    if (group.length < 2) continue;
    const sigs = new Set(group.map((e) => signature(e)));
    if (sigs.size === 1 && group[0].interactive) continue; // list of identical controls
    const words = n.split(' ').length;
    findings.push({
      code: 'TX3', title: 'REPEATED TEXT', path: group[0].path, text: truncate(group[0].text, 80),
      message: `"${truncate(group[0].text, 40)}" appears ${group.length}× in different elements (${group.slice(0, 3).map((g) => g.path.split(' > ').pop()).join(', ')})`,
      confidence: words >= 3 && sigs.size > 1 ? 'medium' : 'low',
      note: 'Repetition may be navigation plus heading (acceptable) or the same fact stated in adjacent panels (redundant). Read them in place.',
    });
  }

  // TX6 direction and language mismatches.
  const pageArabic = els.reduce((n, e) => n + (e.text.match(ARABIC)?.length ?? 0), 0);
  const pageLetters = els.reduce((n, e) => n + letters(e.text), 0);
  for (const e of els) {
    const total = letters(e.text);
    if (total < 6) continue;
    const arabicShare = (e.text.match(ARABIC)?.length ?? 0) / total;
    if (arabicShare >= 0.6 && e.dir === 'ltr' && !/^(ltr)$/.test(e.lang)) {
      findings.push({
        code: 'TX6', title: 'DIRECTION OR LANGUAGE MISMATCH', path: e.path, text: truncate(e.text, 60),
        message: 'Arabic text in a left-to-right element', confidence: 'medium',
        note: 'Check dir on the element or an ancestor, text alignment, and punctuation placement.',
      });
    } else if (arabicShare <= 0.1 && total >= 24 && e.dir === 'rtl') {
      findings.push({
        code: 'TX6', title: 'DIRECTION OR LANGUAGE MISMATCH', path: e.path, text: truncate(e.text, 60),
        message: 'Long Latin text in a right-to-left element (untranslated string, or content that needs dir="ltr")', confidence: 'low',
        note: 'Codes, paths, and commands may stay LTR with isolation; a whole sentence in the wrong language is a translation gap.',
      });
    }
  }
  if (pageLetters > 60 && /^en/i.test(snapshot.lang) && pageArabic / pageLetters >= 0.4) {
    findings.push({
      code: 'TX6', title: 'DIRECTION OR LANGUAGE MISMATCH', path: 'html', text: '',
      message: `html lang="${snapshot.lang}" but ${Math.round((pageArabic / pageLetters) * 100)}% of letters are Arabic`, confidence: 'medium',
      note: 'Set lang and dir on the root for the active locale so screen readers, hyphenation, and fonts match.',
    });
  }

  // TX7 interactive elements without an accessible name.
  for (const e of snapshot.elements) {
    if (!(e.tag === 'button' || e.role === 'button' || e.tag === 'a')) continue;
    if (e.text || e.label) continue;
    const hasNamedChild = snapshot.elements.some((c) => c.parent === e.i && (c.text || c.label));
    if (hasNamedChild) continue;
    findings.push({
      code: 'TX7', title: 'CONTROL WITHOUT NAME', path: e.path, text: '',
      message: `${e.tag} has no text, aria-label, or title`, confidence: 'low',
      note: 'The probe only reads attributes on the element and its children; an aria-labelledby reference would not appear here.',
    });
  }
  return findings;
}

/** TX2 on one snapshot taken at a named phase. */
export function analyzeStatePhase(snapshot, { name = 'initial', expectError = false, expectNoErrors = false } = {}) {
  const errs = visibleErrors(snapshot);
  const findings = [];
  if (name === 'initial' && errs.length && !pageIsErrorPage(snapshot)) {
    for (const e of errs) {
      findings.push({
        code: 'TX2', title: 'ERROR BEFORE INTERACTION', path: e.path, text: truncate(e.text, 80),
        message: `${e.kind === 'invalid-field' ? 'field marked invalid' : 'error text visible'} at first render`, confidence: 'medium', phase: name,
        note: 'Verify nothing the user did triggered it. Persistent status (connection lost) is legitimate; an error about an action not yet attempted is not.',
      });
    }
  }
  if (expectNoErrors && errs.length) {
    for (const e of errs) {
      findings.push({
        code: 'TX2', title: 'ERROR REMAINS AFTER CORRECTION', path: e.path, text: truncate(e.text, 80),
        message: `still visible in phase "${name}", which was expected to be error-free`, confidence: 'high', phase: name,
        note: 'The error should clear when its cause is fixed, and its space should be released.',
      });
    }
  }
  if (expectError && !errs.length) {
    findings.push({
      code: 'TX2', title: 'EXPECTED ERROR ABSENT', path: 'page', text: '', phase: name,
      message: `no error text or invalid field after the steps in phase "${name}"`, confidence: 'medium',
      note: 'Either the validation did not run, the error is not exposed as an alert/invalid field, or the step did not reach the failing state.',
    });
  }
  return findings;
}

// ---------------------------------------------------------------------------
// Browser driver
// ---------------------------------------------------------------------------

async function runSteps(page, steps) {
  const errors = [];
  for (const step of steps) {
    try {
      if (step.click) await page.click(step.click, { timeout: 3000 });
      else if (step.fill) await page.fill(step.fill[0], String(step.fill[1]), { timeout: 3000 });
      else if (step.press) await page.keyboard.press(step.press);
      else if (step.hover) await page.hover(step.hover, { timeout: 3000 });
      else if (step.check) await page.check(step.check, { timeout: 3000 });
      else if (step.select) await page.selectOption(step.select[0], step.select[1], { timeout: 3000 });
      else if (step.wait) await page.waitForTimeout(Number(step.wait));
      else errors.push(`unknown step ${JSON.stringify(step)}`);
    } catch (e) {
      errors.push(`${JSON.stringify(step)}: ${e.message.split('\n')[0]}`);
    }
  }
  if (steps.length) await page.waitForTimeout(250);
  return errors;
}

function toText(url, result) {
  const out = [`rendered-text · ${url}`, ''];
  for (const phase of result.phases) {
    out.push(`Phase: ${phase.name} — ${phase.errors.length} visible error element(s)`);
    for (const e of phase.errors) out.push(`  ${e.kind}: ${truncate(e.text || e.path, 80)}`);
    for (const s of phase.stepErrors) out.push(`  step failed: ${s}`);
  }
  out.push('');
  if (!result.findings.length) out.push('No candidates found.');
  for (const f of result.findings) {
    out.push(`${f.code} ${f.title} [${f.confidence}]${f.phase ? ` (${f.phase})` : ''}`, `  ${truncate(f.path, 70)}${f.text ? `  “${truncate(f.text, 60)}”` : ''}`, `  ${f.message}`, `  note: ${f.note}`, '');
  }
  out.push('Text candidates only. Read the screen in context before rewriting or removing anything.');
  return `${out.join('\n')}\n`;
}

async function main() {
  const { flags, positionals } = parseArgs(process.argv.slice(2), {
    steps: 'string', size: 'string', rtl: 'boolean', channel: 'string', wait: 'string', json: 'boolean', help: 'boolean',
  });
  if (flags.help) { process.stdout.write(`${HELP}\n`); return 0; }
  const url = toUrl(positionals[0]);
  const [size] = parseSizes(flags.size ?? '1440x900');
  let phases = [];
  if (flags.steps) {
    const { readFileSync } = await import('node:fs');
    try { phases = JSON.parse(readFileSync(flags.steps, 'utf8')).phases ?? []; } catch (e) { throw new UsageError(`Could not read --steps: ${e.message}`); }
  }
  const { browser, error } = await launch({ channel: flags.channel });
  if (!browser) { process.stderr.write(`${error}\n`); return 2; }
  const result = { url, size, phases: [], findings: [] };
  let stepFailed = false;
  try {
    const { page, context } = await openPage(browser, url, { ...size, rtl: Boolean(flags.rtl), waitMs: Number(flags.wait ?? 300) });
    const initial = await styleSnapshot(page);
    result.phases.push({ name: 'initial', errors: visibleErrors(initial), stepErrors: [] });
    result.findings.push(...analyzeText(initial), ...analyzeStatePhase(initial, { name: 'initial' }));
    for (const phase of phases) {
      const stepErrors = await runSteps(page, phase.steps ?? []);
      if (stepErrors.length) stepFailed = true;
      const snap = await styleSnapshot(page);
      result.phases.push({ name: phase.name, errors: visibleErrors(snap), stepErrors });
      result.findings.push(...analyzeStatePhase(snap, phase));
      result.findings.push(...analyzeText(snap).filter((f) => f.code === 'TX1' && !result.findings.some((x) => x.code === f.code && x.path === f.path && x.message === f.message)).map((f) => ({ ...f, phase: phase.name })));
    }
    await context.close();
  } finally {
    await browser.close();
  }
  const RANK = { low: 0, medium: 1, high: 2 };
  if (flags.json) process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  else process.stdout.write(toText(url, result));
  if (stepFailed) { process.stderr.write('One or more steps failed; the state they reach was not inspected.\n'); return 2; }
  return result.findings.some((f) => RANK[f.confidence] >= 1) ? 1 : 0;
}

if (process.argv[1]?.endsWith('rendered-text.mjs')) runCli(main);
