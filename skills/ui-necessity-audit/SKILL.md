---
name: ui-necessity-audit
description: "Use this skill whenever a screen feels cluttered with elements that do not earn their place: redundant labels, badges, pills, status indicators, or headings; a card or notice that repeats what is already visible; a decorative separator; an instruction panel nobody needs; a setup option with no real choice; a permanent warning for something that only matters later. Interrogates every questionable element for purpose, then gives each one verdict: KEEP, REMOVE, MERGE, RELOCATE, REWRITE, CONDITIONAL DISPLAY, or NEEDS PRODUCT DECISION. Protects security information, required disclosures, accessibility affordances, critical status, and safeguards. Not for wording quality, layout, or workflow step counts."
license: MIT
compatibility: "Optional rendered-text scan needs Node.js and Playwright or an installed Chrome."
metadata:
  version: "1.1.0"
  collection: experience-skills
---

# UI Necessity Audit

Decide, element by element, whether the interface needs what it shows. Cut what does no work, move what shows up at the wrong time, and protect everything that guards the user. The goal is a screen where each thing present has a job, not a screen with less on it.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`.
2. Read `references/_shared/control-necessity.md` (the eight questions, the verdicts, the never-remove list, appearance timing) and `references/_shared/quality-findings.md` (finding record and ownership). Render the surface in its common states first; necessity depends on state.

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

- "There are too many labels," "why is there a badge here," "this card just repeats the heading," "do we need this pill," "the page explains itself too much."
- A screen shows the same fact in two adjacent places, a decorative line with no function, or a control with a single sensible answer.
- A notice, status, or warning occupies permanent space for something that matters only in some states.
- A rendered review lists many small "is this needed?" doubts and a verdict on each would settle them.

## Do not use this when

- The doubt is about wording, tone, or accuracy of text that will stay: use microcopy-quality.
- The problem is the whole screen's allocation or hierarchy: use composition-review.
- A multi-step task has too many steps, repeated inputs, or choice screens: use workflow-compression.
- A control is awkward to operate, not unnecessary: use interaction-design.
- The doubt is whether the product's concepts and navigation are confusing: use product-friction.

## Mandatory conditional loading

MUST load `references/_shared/control-necessity.md` and `references/element-interrogation.md` before issuing any verdict; MUST load `references/conditional-display.md` before recommending CONDITIONAL DISPLAY or RELOCATE for timing. Check the never-remove list before every REMOVE. A runnable surface MUST be rendered in the states that determine necessity.

## Checkpoints

1. **Before judging any element:** can you name the other element, if any, that already carries the same information, and is that other element visible in every state where this one is? No → it is not redundant yet; keep inspecting (`references/element-interrogation.md`).
2. **For each questionable element:** run the eight questions and write one verdict with its proof. An element with no verdict is not audited. Verdicts without proof are opinions: show where the information still lives, or the step count, or the lost fact.
3. **Before recommending REMOVE:** is the element a security item, required disclosure, accessibility affordance, critical status, destructive-action safeguard, or recovery path? Yes → it cannot be REMOVE; choose RELOCATE, REWRITE, CONDITIONAL DISPLAY, or NEEDS PRODUCT DECISION and reduce its cost instead.
4. **When the element is right but always present:** does it matter only in some states? Yes → CONDITIONAL DISPLAY, and name the state that shows it, the state that hides it, and what keeps the need visible if the state is missed (`references/conditional-display.md`). Healthy status may be silent only if degraded and lost states are loud and recoverable.
5. **When an option has one sensible answer:** is there evidence users choose otherwise? No → propose a default with a visible way to change it and mark the removal NEEDS PRODUCT DECISION; do not invent usage numbers.
6. **Before presenting results:** does removing every REMOVE and MERGE leave the screen with a lost fact, a lost action, or a lost safeguard? Yes → return that element to KEEP. Does the screen feel stripped rather than resolved (fake minimalism)? Yes → recheck whether empty space has a job (`references/_shared/fake-minimalism.md`).
7. **Before adding another finding:** is it a distinct element with a distinct verdict? No → merge it under the cause. A report that finds more is not better; a report that finds nothing is valid if every element earned its place.

## Workflow

1. **Inventory.** List what is visible in the states that matter (first load, populated, error, healthy versus degraded). Include buttons, labels, badges, pills, status indicators, cards, separators, tooltips, notices, instruction panels, secondary navigation, repeated headings, decorative containers, setup controls, and explanatory text. `scripts/_shared/rendered-text.mjs` lists repeated text and flags error text visible at first render; it does not judge necessity.
2. **Interrogate.** Run the eight questions from `references/_shared/control-necessity.md` on each doubtful element; `references/element-interrogation.md` gives the procedure and the evidence each verdict needs.
3. **Decide timing.** For anything that is right but not always, load `references/conditional-display.md` and define the state rule.
4. **Verdict and protect.** One verdict per element; run the never-remove check; resolve overlaps (one root cause, one owner) with the quality-findings ownership rule.
5. **Act.** AUDIT: report. REPAIR: apply REMOVE, MERGE, RELOCATE, and CONDITIONAL DISPLAY, hand REWRITE to microcopy-quality, and hold NEEDS PRODUCT DECISION for the owner. Re-render each changed state and confirm that every protected item and every needed fact remains.
6. **Stop.** When each questionable element has a proven verdict and nothing protective was removed.

| Diagnosis | Load |
|---|---|
| Is this element needed at all, and what is its verdict? | `references/element-interrogation.md` |
| It is needed, but only sometimes, or too early or too late | `references/conditional-display.md` |

## What it can change and what it must preserve

- Change: presence, position, prominence, and timing of elements; merge duplicates; remove decorative separators and containers that carry no meaning.
- Preserve: security information, required disclosures, accessibility affordances, critical status, safeguards, recovery paths, anything a locked requirement names, and the product's identity carriers. Never remove content to make a screen look sparse.

## Failure modes

- Removing an element that is the only place a state is shown.
- Calling something redundant because it is visually heavy.
- Hiding a safeguard "until needed" with no trigger that reliably shows it.
- Treating every explanation as clutter: first-use guidance can be exactly the job.

## Completion criteria

- Each questioned element has one verdict with proof; protected items are listed and untouched.
- CONDITIONAL DISPLAY findings state the showing state, the hiding state, and the failsafe.
- NEEDS PRODUCT DECISION items carry a question and the evidence so far.
- Changed states were rerendered; every needed fact, action, and safeguard is still present, or **NOT VERIFIED IN RENDERED OUTPUT** lists what was not checked.
- The result states what stayed and why, not only what went.

## References

- `references/element-interrogation.md` — inventory, the eight questions, verdict procedure and proof
- `references/conditional-display.md` — appearance timing, status that earns permanence, failsafes
- `references/_shared/control-necessity.md` — eight questions, catalog, verdicts, never-remove, timing
- `references/_shared/quality-findings.md` — finding record, ownership, protected categories
- `references/_shared/design-vs-decoration.md` — when a treatment does a job
- `references/_shared/fake-minimalism.md` — when removal leaves emptiness instead of clarity
- `scripts/_shared/rendered-text.mjs` — optional rendered-text scan (repeated text, errors visible at first render); also `scripts/_shared/layout-probe.mjs` and `scripts/_shared/style-probe.mjs`, which it loads
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection rules
