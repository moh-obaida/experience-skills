---
name: visual-coherence-audit
description: "Use this skill whenever a rendered interface works but looks visually off: a border looks cut off, uneven, or missing a side; a tab or card shows two selected or hover indicators; a divider pokes out of its panel; a focus ring is clipped; a stepper connector sits low; repeated cards, buttons, or inputs differ in padding, height, radius, shadow, or icon size; edges do not line up. Detects and classifies stroke, clipping, and component-consistency defects (the BORDLINE category), traces each from screenshot through computed style, pseudo-elements, and clipping ancestors to the shared component or token, repairs or recommends, then rerenders and compares. Preserves deliberate asymmetry. Not for whole-screen layout, wording, or multi-route drift."
license: MIT
compatibility: "Rendered inspection needs Node.js and Playwright or an installed Chrome; without a browser the skill falls back to source and screenshot review and says so."
metadata:
  version: "1.1.0"
  collection: experience-skills
---

# Visual Coherence Audit

Find the visual inconsistencies inside and across rendered components that a type check, a unit test, and an accessibility scan all miss, then fix them at their cause. A screenshot shows the symptom; computed style and source show the cause. The aim is a coherent surface, not a uniform one: deliberate asymmetry stays.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`.
2. Read `references/_shared/bordline.md` (the BORDLINE codes and investigation protocol) and `references/_shared/quality-findings.md` (the finding record and ownership rule). Name the surface, the states to inspect, and the mode: AUDIT (report) or REPAIR (fix and verify).

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

- "The border looks cut off," "this card has a line missing," "two underlines on hover," "the focus outline is clipped," "the divider sticks out," "the stepper line is crooked."
- Repeated cards, tabs, buttons, fields, or panels look slightly different from each other on one screen.
- A screenshot review turns up uneven stroke weight, inconsistent radius or shadow, mismatched icons, or content edges off by a few pixels.
- Everything passes automated checks, but the surface looks unfinished at the stroke level.

## Do not use this when

- The whole screen is badly arranged (focal point, allocation, balance): use composition-review.
- Elements exist that should not: use ui-necessity-audit.
- The same pattern differs across pages (language selector, tabs, buttons): use cross-route-consistency, which routes a shared-component fix back here.
- One page needs a full forensic pass including behavior: use interface-forensics.
- A layout breaks at a viewport size: use responsive-validation.

## Mandatory conditional loading

MUST load `references/_shared/bordline.md` and `references/coherence-workflow.md` before classifying or repairing a border, outline, indicator, clipping, or separator defect; MUST load `references/component-variance.md` when repeated components, shadows, radii, control heights, or icons differ. A runnable surface MUST be rendered in the affected states before a defect is called confirmed or fixed; otherwise mark **NOT VERIFIED IN RENDERED OUTPUT**. Name no CSS cause until computed style, pseudo-elements, and clipping ancestors were read.

## Checkpoints

1. **Before reporting a defect:** does a state, role, or hierarchy explain the asymmetry, and do all instances of that role agree? Yes → it is design; list it under "preserved" (`references/_shared/bordline.md`). No → continue.
2. **Before naming a CSS cause:** did you read computed style on the element, its wrapper and child, its pseudo-elements, and every clipping ancestor? No → write "cause unknown" with the symptom and keep inspecting; never infer a cause from a screenshot (`references/coherence-workflow.md`).
3. **When the same defect shows on two or more instances or routes:** did you find the component or token that owns the stroke, radius, or shadow? Yes → one finding, one fix there. No → look again before patching pages one by one; per-page patches that leave the owner broken are rejected.
4. **For every selected, hover, focus, and active treatment:** count the layers on each edge (border, pseudo-element line, shadow line, underline, outline) against an unselected peer. Two or more added layers on one edge → BL4, and name which node owns the indicator.
5. **For repeated components:** compare computed height, padding, radius, border, shadow, type, and icon size across the cohort (`references/component-variance.md`). Do differences map to named variants with a functional reason? Yes → keep. No → treat as drift and unify at the source.
6. **Before declaring a repair done:** rerender the same state at the same size, at 200% zoom, and in the narrowest supported width, then compare with the before capture. A fix visible at 1x but not at 2x is not done. No browser → write **NOT VERIFIED IN RENDERED OUTPUT** and list the unchecked states.
7. **Before adding another finding:** is it distinct, user-visible, and not already explained by an open root cause? No → merge it under that cause or drop it. Fifteen one-pixel notes usually mean one broken token.

## Workflow

```
OBSERVE → CLASSIFY → LOCATE ROOT CAUSE → RECOMMEND OR REPAIR → RERENDER → COMPARE
```

1. **Observe.** Render the surface in the states that matter: rest, hover, keyboard focus, selected, error, disabled, narrowest width, 200% zoom. Save or note captures; look at them. Run `scripts/inspect-borders.mjs` for a computed-style candidate list when a browser exists.
2. **Classify.** Give each confirmed observation a BORDLINE code or a coherence code (VC-VAR, VC-ICON, VC-EDGE) and a confidence. Separate defects from legitimate asymmetry.
3. **Locate the root cause.** Follow `references/coherence-workflow.md`: element → pseudo-elements → clipping ancestors → box model → owning component or token. Find out whether the defect is local or systematic.
4. **Recommend or repair.** AUDIT: write the finding record and the smallest fix at the owner. REPAIR: make the fix at the owner, then check the other routes and instances that share it.
5. **Rerender and compare.** Same state, size, and zoom as the before capture. State what visibly changed and whether the target delta appeared.
6. **Hand off narrowly.** A structural problem found along the way goes to composition-review; a redundant element to ui-necessity-audit. Do not fix them here.

| Diagnosis | Load |
|---|---|
| Cut, partial, uneven, doubled, or clipped stroke; focus ring; separator; connector | `references/coherence-workflow.md` |
| Repeated components differ; shadows, radius, control heights, icons, content edges, emphasis, variants | `references/component-variance.md` |

## Inspector script

`node scripts/inspect-borders.mjs <url-or-file> --size 1440x900 --json` renders the page, checks the BORDLINE codes (partial and uneven borders, clipping, duplicate indicators on selected and hovered items, focus-ring visibility and clipping, separators, connectors, pseudo-element overhang) and repeated-component variance, and prints candidates with a confidence and a note. Options: `--rtl`, `--dark`, `--no-hover`, `--no-focus`, `--min-confidence`. Exit 0 clean, 1 findings, 2 usage or environment error. It reads computed style and geometry; it cannot see intent, and a clean run does not mean the surface looks right.

## What it can change and what it must preserve

- Change: the shared stroke, radius, shadow, spacing, and indicator rules at their owner; clipping and overflow rules; pseudo-element geometry; local overrides that diverge from their component.
- Preserve: intentional asymmetry, deliberate accent edges, density, the product's visual identity, and every user-visible state the design depends on. Never flatten a distinctive treatment to remove a finding that is really a preference.

## Failure modes

- Reporting every one-sided border as a defect.
- Fixing each page's symptom while the shared component stays broken.
- Declaring a repair from the source diff without rerendering.
- Treating a clean script run as proof of visual quality.

## Completion criteria

- Every reported defect names the surface, state, size, BORDLINE or coherence code, evidence level, and confidence; causes are traced or marked unknown.
- Systematic defects were fixed once at their owner and checked on the other instances.
- Deliberate asymmetry that was examined and kept is listed as preserved.
- Repairs were rerendered in the same state, size, and zoom and compared with the before capture, or **NOT VERIFIED IN RENDERED OUTPUT** names the missing checks.
- The result says what changed, what was verified, and what was not.

## References

- `references/coherence-workflow.md` — states to capture, root-cause trace, local versus systematic, repair rules
- `references/component-variance.md` — cohort comparison, tolerances, variants versus drift, elevation, controls, icons, edges
- `references/_shared/bordline.md` — BORDLINE codes, investigation protocol, defect versus design
- `references/_shared/quality-findings.md` — finding record, vocabularies, ownership
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection rules
