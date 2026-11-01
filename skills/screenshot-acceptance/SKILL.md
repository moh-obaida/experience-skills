---
name: screenshot-acceptance
description: "Use this skill whenever a meaningful UI change needs evidence-based visual acceptance, or someone claims a UI is verified, fixed, or 'looks good' without rendered proof: reviewing a screenshot, comparing before and after screenshots, or inspecting a live page and capturing verification evidence. Plans the routes, states, viewports, input modes, language directions, themes, and stress conditions that matter, states the visual invariants, reviews appearance and task usability (hierarchy, clipping, alignment, border continuity, sizing, wrapping, scrolling, composition, state presentation, responsiveness), and distinguishes regressions from intentional changes, dynamic content, browser differences, and noise. Never claims visual verification from passing tests; reports NOT VERIFIED IN RENDERED OUTPUT when rendering is unavailable."
license: MIT
compatibility: "Capture and compare need Node.js and Playwright or an installed Chrome; without a browser the skill reviews supplied screenshots only and says what is not verified."
metadata:
  version: "1.1.0"
  collection: experience-skills
---

# Screenshot Acceptance

Decide whether a UI change is visually and functionally acceptable on rendered evidence, and say exactly what the evidence covers. A screenshot proves appearance in one state at one size; it does not prove interaction correctness, and a green test suite proves nothing about how the screen looks.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md` (the render contract and the NOT VERIFIED wording apply here in full).
2. Read `references/_shared/evidence-standard.md`, `references/_shared/bordline.md`, and `references/_shared/quality-findings.md`. Identify the workflow: REVIEW a supplied screenshot, COMPARE before and after, or INSPECT a live page and capture evidence.

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

- "Is this fixed?", "does it look right now?", "compare these two screenshots," "verify the redesign," "check the UI before we merge."
- A change claims a visual result and the only evidence is a diff, a unit test, or a build.
- A final gate needs captured evidence across states, sizes, directions, and themes.
- A supplied screenshot needs an expert read for clipping, alignment, borders, hierarchy, and usability.

## Do not use this when

- The task is to find and fix a stroke or consistency defect: use visual-coherence-audit (this skill then verifies the fix).
- The task is to diagnose composition: use composition-review.
- The goal is a responsive size matrix of measurable layout failures: use responsive-validation.
- A deep source-level audit of one page is needed: use interface-forensics.
- No UI changed.

## Mandatory conditional loading

MUST load `references/acceptance-plan.md` before capturing or reviewing and `references/comparison-and-verdicts.md` before issuing a verdict. Rendered evidence MUST be viewed before any visual claim; without it the verdict is **NOT VERIFIED IN RENDERED OUTPUT** with the exact unchecked items.

## Checkpoints

1. **Before claiming anything visual:** do you have rendered evidence of the exact state you are claiming about? No → write **NOT VERIFIED IN RENDERED OUTPUT**, list the checks that remain, and do not infer from tests, source, or a diff.
2. **Before capturing:** have you listed the relevant routes, states, viewports, input modes, language directions, themes, and stress conditions, and the visual invariants that must hold (`references/acceptance-plan.md`)? A capture without a plan proves little; capture what the change could break.
3. **For every state captured:** did you look at the image, not just produce it? A filename or a zero exit code is not an observation. Record what you saw per capture.
4. **When comparing before and after:** are the route, state, viewport, zoom, language, and theme identical, and is dynamic content masked or controlled? No → the comparison is not valid; fix the capture first.
5. **For each difference:** is it a REGRESSION, INTENTIONAL change, dynamic content, rendering difference, noise, or improvement (`references/comparison-and-verdicts.md`)? Raw pixel counts never decide this; look at the region.
6. **For task usability:** can the user still see and do the core task in the captured state (instrument visible, primary action reachable, error readable)? A pretty capture of an unusable state is a REJECT.
7. **Before giving a verdict:** is every material failure visible in the evidence reflected in it? A material failure present in a capture (clipped content, missing border, buried primary action) means REJECT, whatever else passed. ACCEPT requires the plan's critical states to be covered; otherwise ACCEPT WITH NOTES or NOT VERIFIED.

## Workflow

1. **Plan.** `references/acceptance-plan.md`: what changed, what it could break, the matrix of routes, states, sizes, directions, themes, stress conditions; expected invariants.
2. **Capture.** `node scripts/capture-matrix.mjs capture <route...> --names ... --out DIR --sizes 1440x900,390x844 [--rtl] [--dark] [--states states.json] [--mask selectors]` writes PNGs and an `index.json` (route, state, size, direction, theme, hash, page size, text hash). Nothing is written without `--out`.
3. **Inspect.** Open each capture. Review appearance and usability against the plan using the checklist in `references/acceptance-plan.md`.
4. **Compare (when there is a baseline).** `node scripts/capture-matrix.mjs compare BEFORE_DIR AFTER_DIR [--diff-dir DIR]` classifies each pair as identical, noise-level, localized, broad, dimension-changed, missing, or new, with changed regions; then decide what each difference is.
5. **Verdict.** `references/comparison-and-verdicts.md`: ACCEPT, ACCEPT WITH NOTES, REJECT, or NOT VERIFIED IN RENDERED OUTPUT; list findings with the shared record.
6. **Stop.** When the verdict is written with its coverage and unchecked items.

| Need | Load |
|---|---|
| Planning the matrix, invariants, the review checklist, capture protocol | `references/acceptance-plan.md` |
| Classifying differences, verdict rules, honesty rules, report format | `references/comparison-and-verdicts.md` |

## What it can change and what it must preserve

- Change: nothing in the product by default; it produces evidence and a verdict. In REPAIR flows it may request a repair from the owning skill and rerun the comparison.
- Preserve: the baseline captures, product behavior, and the plan's invariants. Never alter a capture, never fabricate one, and never describe a screen that was not rendered.

## Failure modes

- Accepting from passing tests, a diff, or a build.
- Comparing captures at different sizes, themes, or states.
- Treating a pixel difference as a regression, or no difference as correctness.
- Capturing only the initial state and desktop LTR.
- Reporting an observation about an image that was never opened.

## Completion criteria

- The plan lists routes, states, sizes, directions, themes, stress conditions, and invariants relevant to the change.
- Every claim in the verdict is tied to a capture that was viewed, or marked **NOT VERIFIED IN RENDERED OUTPUT** with the exact remaining checks.
- Differences are classified, not merely counted; material failures drive REJECT.
- The verdict states what the evidence does not cover, and that screenshots do not prove interaction correctness.

## References

- `references/acceptance-plan.md` — matrix planning, invariants, review checklist, capture protocol
- `references/comparison-and-verdicts.md` — difference classes, verdicts, honesty rules, report
- `references/_shared/evidence-standard.md` — evidence levels and what supports "verified"
- `references/_shared/bordline.md` — stroke and clipping defects to look for in captures
- `references/_shared/quality-findings.md` — finding record and ownership
- `scripts/_shared/layout-probe.mjs` — browser launch helpers used by the capture script
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection rules
