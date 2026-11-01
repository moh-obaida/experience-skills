---
name: composition-review
description: "Use this skill whenever a whole screen needs a structured composition diagnosis rather than a component fix: the page looks badly arranged, over-centered, lopsided, or fragmented; secondary status cards dominate the real task; a game, editor, or dashboard buries its core instrument; a multi-step form, stepper, or import flow has disconnected regions; a join page carries unnecessary supporting sections; teams or panels are disproportionate; it composes on desktop but not on mobile. Inspects focal point, hierarchy, allocation, first viewport, rhythm, balance, density, empty space, nesting, and action dominance at screen level, then returns PRESERVE, LOCAL REPAIR, RESTRUCTURE, STATE-APPROPRIATE, or PREFERENCE. Diagnoses; composition-repair makes structural repairs."
license: MIT
compatibility: "Rendered inspection needs a browser; with only a screenshot or source, findings are labeled E5 or E3."
metadata:
  version: "1.1.0"
  collection: experience-skills
---

# Composition Review

Judge the whole screen before touching a component. A collection of acceptable components does not make a good screen: a focal point, a proportion between the core instrument and its support, and a path through the page do. This skill diagnoses and decides how much, if any, restructuring is warranted. It does not redesign a satisfactory screen because another layout is possible.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`; its rendered composition judgment section applies in full.
2. Read `references/_shared/quality-findings.md`. Name the product job, repeated loop, core instrument, the state and audience of this screen, and what is locked by requirements. Use `references/_shared/page-archetypes.md` to name the archetype.

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

- "This page looks badly arranged," "everything is centered but it feels off," "the cards take over the screen," "the setup looks lopsided," "the import page has random disconnected blocks," "mobile feels different and broken."
- The question is whether a screen's overall structure serves its job, before any component is adjusted.
- A product team wants a structured verdict on a screen: keep it, fix two things, or restructure.
- composition-repair would be the next step, and the diagnosis should be confirmed first.

## Do not use this when

- A single border, divider, or card style looks wrong: use visual-coherence-audit.
- An element should probably not exist: use ui-necessity-audit.
- The structure is already confirmed broken and needs repair: use composition-repair, passing this skill's finding.
- A viewport-specific breakage (overflow, collisions, clipped targets) needs a size matrix: use responsive-validation.
- A deep forensic pass on one page's CSS and behavior: use interface-forensics.

## Mandatory conditional loading

MUST load `references/screen-diagnosis.md` before diagnosing and `references/verdicts-and-handoff.md` before issuing a verdict or a handoff. A runnable screen MUST be rendered at the primary size and one narrow size, with the first-impression pass recorded, before a verdict; otherwise mark **NOT VERIFIED IN RENDERED OUTPUT**.

## Checkpoints

1. **Before inspecting any component:** did you take the first-impression pass (3 to 5 seconds: what dominates, what is the task, where does attention go next) and compare it with this user's priority for this screen? No → do it now; component-first review misses screen-level failure (`references/screen-diagnosis.md`).
2. **For every large region:** does its area, contrast, and isolation track the value of what it holds for the job? A decorative or supporting region that outweighs the core instrument is V2 WRONG FOCAL POINT; a region that earns its attention with little content is fine (`references/_shared/information-priority.md`).
3. **Before calling a space empty or a layout sparse:** can you state the space's job (frame, separate, pace) and the state and audience it serves? A lobby awaiting players, a first-run screen, and a focused join page are legitimately sparse. No stated job → V3 DEAD SPACE. Stated job → STATE-APPROPRIATE.
4. **Before recommending RESTRUCTURE:** did you name the composition in use (by description; the composition library lives with composition-repair), the root relationship that fails (allocation, hierarchy, grouping, flow, nesting), and why local repair cannot fix it? No → the verdict is PRESERVE or LOCAL REPAIR. "A different layout could also work" is PREFERENCE, not a finding.
5. **For multi-step, stepper, form, and import screens:** does the step indicator, the current task, and the controls read as one structure with a visible path? Disconnected regions, an orphaned stepper, or a primary action far from its fields → name the relationship that breaks (`references/screen-diagnosis.md`).
6. **For desktop versus mobile:** does the core job and instrument stay first and usable when the composition changes, or does stacking bury it? Verify at one narrow, short size; stacking alone is not continuity.
7. **Before handing off:** does the handoff state the root cause, the expected change in attention or allocation, and what must be preserved? No → write them. Handing composition-repair a symptom list produces cosmetic work.
8. **Before finishing:** did you list what is good and keep it? A positive finding with evidence (a deliberate asymmetry, dense expert layout, justified drama) is part of the result.

## Workflow

1. **Frame.** Job, loop, core instrument, archetype, state, audience, locked requirements. One compact paragraph.
2. **Observe.** Render the screen at the primary size and one narrow size in the state that matters; do the first-impression pass; inspect the silhouette (ignore copy; look at masses, columns, rhythm). Optionally gather measurements: content coverage, region areas, largest empty region, nesting depth.
3. **Diagnose.** Go through the axes in `references/screen-diagnosis.md`: focal point, hierarchy, allocation, first viewport, rhythm, balance, density, empty space, control-content relation, instrument versus support, action dominance, nesting, centering, fragmentation, stepper and form relation, desktop-to-mobile change.
4. **Verdict.** `references/verdicts-and-handoff.md`: PRESERVE, LOCAL REPAIR, RESTRUCTURE, STATE-APPROPRIATE, or PREFERENCE, with evidence and confidence.
5. **Route.** LOCAL REPAIR with a single defect goes to the owning specialist (visual-coherence-audit, ui-necessity-audit, microcopy-quality). RESTRUCTURE goes to composition-repair with the handoff. PRESERVE and PREFERENCE end the work.
6. **Verify (when repair followed).** Compare the same state and sizes before and after; the test is the relationship that was named, not that something moved.

| Need | Load |
|---|---|
| What to inspect, how to measure it, what good looks like for join, live game, wizard, import, help, setup | `references/screen-diagnosis.md` |
| Which verdict, what evidence it needs, handoff shape, positive controls | `references/verdicts-and-handoff.md` |

## What it can change and what it must preserve

- Change: nothing by default in REVIEW. In REPAIR it may make LOCAL REPAIR edits of allocation, grouping, and placement; structural change goes through composition-repair.
- Preserve: justified drama, negative space with a job, dark surfaces, expert density, locked structure, brand identity, and any composition the product's job depends on.

## Failure modes

- Redesigning a satisfactory screen because an alternative exists.
- Fixing spacing on components while the focal point is wrong.
- Calling a legitimately sparse state "dead space," or a legitimately dense expert screen "cluttered."
- Judging a screenshot of one state as the whole screen.

## Completion criteria

- The screen's job, archetype, state, and audience are stated; the first-impression result is recorded.
- Each region has a reasoned verdict about its allocation; the overall verdict is one of the five, with evidence and confidence.
- Anything good and deliberate is listed and preserved.
- A RESTRUCTURE or LOCAL REPAIR carries a handoff with root cause, expected delta, and preserved elements.
- Desktop and narrow views were both inspected, or the missing view is marked **NOT VERIFIED IN RENDERED OUTPUT**.

## References

- `references/screen-diagnosis.md` — axes, measurements, screen types (join, live game, wizard, import, help, setup)
- `references/verdicts-and-handoff.md` — five verdicts, evidence, handoff to composition-repair, positive controls
- `references/_shared/page-archetypes.md`, `references/_shared/information-priority.md` — archetype and priority vocabulary
- `references/_shared/visual-problems.md` — V1 to V10 composition codes
- `references/_shared/whitespace-and-dead-space.md`, `references/_shared/fake-density.md`, `references/_shared/fake-minimalism.md` — space, density, and minimalism judgment
- `references/_shared/design-vs-decoration.md` — decoration with and without a job
- `references/_shared/quality-findings.md` — finding record, ownership
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection rules
