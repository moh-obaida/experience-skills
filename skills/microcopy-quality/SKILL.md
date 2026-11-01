---
name: microcopy-quality
description: "Use this skill whenever interface wording sounds robotic, awkward, misleading, or AI-generated, or when user-facing text needs a quality pass: headings, form labels, buttons, setup instructions, validation errors, empty states, tooltips, status text, success messages, onboarding, help, pricing, billing, and subscription communication, or Arabic and English translations. Finds and rewrites incorrect assumptions, ambiguous labels, internal terms or error codes shown to users, errors with no recovery, vague calls to action, repetition, and contradictions, while preserving real product behavior, constraints, localization intent, accessibility, tone, and legal or financial precision. Not for deciding whether an element should exist or when it appears."
license: MIT
compatibility: "Optional rendered-text scan needs Node.js and Playwright or an installed Chrome."
metadata:
  version: "1.1.0"
  collection: experience-skills
---

# Microcopy Quality

Make the words in an interface accurate, specific, and natural for this product at this moment. Meaning comes first, then tone. A rewrite that sounds better and says something untrue is a regression.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`.
2. Read `references/_shared/product-copy.md` (copy types, generic phrases, accuracy failures, preserving meaning) and `references/_shared/quality-findings.md`. Find out what the product actually does for each string you will touch: read the behavior, not only the text.

<!-- core-brief:start · GENERATED FROM shared/philosophy/core-brief.md by npm run sync. Do not edit here. -->
**Core rules in brief.** These apply even before you open `references/_shared/experience-core.md`.
Read that file (the full rules and evidence levels) before a full review, repair, or build.

- **Verdict before adjectives.** Do not write "clean," "modern," "great idea," or "looks good" until
  an observation earns it. The user's enthusiasm is not evidence; test the proposal against the goal.
- **Evidence levels on findings.** E1 rendered, E2 measured, E3 source, E4 documented,
  E5 screenshot, E6 assumed. If files, a browser, or a terminal are available, look or measure before
  claiming. Otherwise, name the checks you did not run.
- **Composition is not alignment.** Empty space needs a stated job, and sparseness is never fixed
  with filler (stats, tips, promos, decoration).
- **Personality can come from the environment and causal product behavior.** A standard control
  changes only if the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Working is not finished.** Passing tests, types, or an accessibility scan say nothing about how
  a screen looks or reads. Inspect rendered output for stroke continuity, repeated-component
  consistency, whole-screen composition, wording, and when each element appears. Never remove a
  safeguard, disclosure, or recovery path to look clean.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Route selectively.** Consider the relevant experience skills; activate another only when it
  can resolve a material concern. No change and no handoff are valid outcomes.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
- **A large specification is a bigger evidence base, not a bigger checklist.** Preserve exact
  numbers, exceptions, and locked decisions; keep recommendations, examples, and deferred items
  from becoming requirements; compress for reasoning, re-open the source for precision.
<!-- core-brief:end -->

## Use this when

- "The wording sounds AI-generated," "this label is confusing," "the error shows a code," "the instructions are too long," "what does FIRST IN mean?"
- A review lists awkward grammar, vague buttons, repeated text, contradictory statements, or untranslated or unnatural Arabic or English strings.
- Pricing, billing, subscription, permission, or deletion text needs to be clear and correct.
- A product ships in two or more languages, including right-to-left, and the translations read as literal.

## Do not use this when

- The question is whether an element should exist or appear at all: use ui-necessity-audit; this skill acts only on text that stays.
- An error appears too early, stays too long, or the state logic is wrong: use state-by-state-review (when) or state-design (how); this skill rewrites the message.
- An empty state's structure and next action need design: use empty-state-design.
- The task is a pure name or one-word rename: just do it.
- Legal text needs legal review: flag it, do not rewrite its substance.

## Mandatory conditional loading

MUST load `references/_shared/product-copy.md` and `references/copy-diagnosis.md` before rewriting any string; MUST load `references/locale-and-precision.md` when more than one language or direction, money, billing, legal, or technical identifiers are involved. Verify the real behavior behind each string before rewriting it.

## Checkpoints

1. **Before rewriting any string:** do you know what the product actually does at this point (the real behavior, constraint, and state)? No → read the source, run the flow, or ask; never rewrite from the text alone (`references/copy-diagnosis.md`).
2. **For each flagged string:** which failure is it: MEANING (misleading, wrong assumption, contradiction), RECOVERY (no next step), TERM (internal or unclear word), REPEAT, ACTION (vague label), or TONE (robotic, generic)? Fix meaning and recovery before tone.
3. **For error and validation text:** does it name the problem and the correction, in the user's words, without an internal identifier? Yes → keep. No → rewrite. Keep technical identifiers only where the reader is support, an admin, or a developer, and then place them as secondary detail.
4. **Before shortening:** is the decision consequential or the situation complicated (irreversible action, money, permissions, a single recovery path)? Yes → keep or add the necessary length. No → cut what restates the interface.
5. **For every rewrite:** does it preserve the functional meaning, product behavior, constraints (limits, dates, units, currency), localization intent, accessibility, tone, and legal or financial precision? No → revert the part that changes a fact; if you cannot verify a fact, mark it open (`references/locale-and-precision.md`).
6. **For multilingual products:** was each language written for its own readers, with the right direction, numerals, punctuation, and plural forms, or translated word for word? Literal → rewrite natively; check rendering in the target direction.
7. **When the string repeats elsewhere on the screen:** is the repeat a necessity question? Yes → hand the element to ui-necessity-audit; do not polish text that should be removed.
8. **Before presenting:** read each rewrite in place, in the rendered state it appears in, and confirm it fits the layout in the longest supported language. Unrendered → label the check **NOT VERIFIED IN RENDERED OUTPUT**.

## Workflow

1. **Collect.** Gather the strings in the requested surface: from the render, the source, and the i18n files. Include states (errors, empty, success, loading, disabled reasons). `scripts/_shared/rendered-text.mjs` lists internal identifiers, vague actions, boilerplate, repeated text, direction mismatches, and errors visible before interaction; `--steps` runs a flow and checks for errors that remain after correction. It does not judge tone or accuracy.
2. **Diagnose.** Classify each issue per `references/copy-diagnosis.md`; separate what is wrong (meaning) from what sounds off (tone).
3. **Ground.** Verify the real behavior for every string you rewrite. Record the fact the string must keep.
4. **Rewrite.** Smallest change that fixes the cause. Match the product's existing voice, not a generic one. Keep constraints and precision.
5. **Localize.** For each supported language, apply `references/locale-and-precision.md`: native phrasing, direction, numerals, plurals, expansion, and consistent terminology.
6. **Verify.** Rerender states with the new text; check wrapping and truncation in the longest language and RTL; rerun the text scan.
7. **Stop.** When each flagged string has a verified rewrite or a deliberate keep.

| Need | Load |
|---|---|
| Detecting and classifying copy failures, error and validation copy, rewrite procedure, before/after | `references/copy-diagnosis.md` |
| Arabic RTL and English LTR, translation quality, pricing, billing, subscription, legal and financial precision, technical identifiers | `references/locale-and-precision.md` |

## What it can change and what it must preserve

- Change: wording, ordering within a sentence, and message structure for strings that stay; i18n resources in every supported language.
- Preserve: product behavior and constraints stated in the text, legal and financial precision, accessible names and error associations, the established voice, and strings that are already accurate and natural.

## Failure modes

- Polishing a string that should be removed.
- Making a message shorter and less accurate.
- Replacing a specific error with a friendly generic one.
- Translating word for word, or assuming Arabic is English mirrored.
- Writing a rewrite that promises behavior the product does not have.

## Completion criteria

- Every flagged string has a classified failure, the fact it must keep, and a rewrite or a recorded keep.
- No rewrite changes a constraint, a price, a date, a permission, or a legal statement without confirmation.
- Errors name the problem and the correction; identifiers appear only where the reader needs them.
- Each supported language was written natively and checked in its direction, or the unchecked languages are listed.
- Rewrites were seen in the rendered state, or **NOT VERIFIED IN RENDERED OUTPUT** states what was not checked.

## References

- `references/copy-diagnosis.md` — failure classes, error copy, rewrite procedure and examples
- `references/locale-and-precision.md` — localization, RTL, translation, money and legal precision, identifiers
- `references/_shared/product-copy.md` — copy types, generic phrases, accuracy failures, preserving meaning
- `references/_shared/quality-findings.md` — finding record and ownership
- `scripts/_shared/rendered-text.mjs` — optional rendered-text scan; also `scripts/_shared/layout-probe.mjs` and `scripts/_shared/style-probe.mjs`, which it loads
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection rules
