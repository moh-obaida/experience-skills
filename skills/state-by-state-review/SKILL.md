---
name: state-by-state-review
description: "Use this skill whenever a built interface must be checked across its real operating states: the error appears before the user does anything, a success banner is still showing or showed before the save finished, an error stays after the fix, a loading message lies, a disabled control gives no reason, controls remain visible after they stop being relevant, labels go stale after a change, focus jumps or vanishes, or the active state is misaligned. Builds a state inventory from the product's real mechanics (initial, empty, populated, loading, success, error, disabled, hover, focus, selected, active, waiting, paused, disconnected, reconnecting, completed, permission denied, partial), then audits what triggers each, what the user knows, can do, sees, and how it transitions. Audits the rendered states; state-design owns designing them."
license: MIT
compatibility: "State triggering and the rendered-text scan need Node.js and Playwright or an installed Chrome; without a browser the review is source-based and labeled so."
metadata:
  version: "1.1.0"
  collection: experience-skills
---

# State-by-State Review

Check that a built interface stays coherent and useful in every state it can really be in. `state-design` designs state behavior and interaction contracts; this skill audits the rendered and operational consistency of those states, including transitions. A screen that looks right in its showcase state and wrong in the next one is the target.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`.
2. Read `references/_shared/state-types.md` (states and the visibility-follows-state rule) and `references/_shared/quality-findings.md`. Build the inventory from the product's mechanics, not from the full list: start with `references/state-inventory.md`.

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

- "The error shows before I do anything," "it still says saved," "the message stays after I fixed it," "the success shows too early," "the button is disabled and I don't know why," "the old label is still there."
- A finished or nearly finished feature needs a sweep of its real states, transitions, and recovery paths.
- Live or multi-actor products (lobbies, rooms, connections, syncing) behave inconsistently when state changes, pauses, or drops.
- A reviewer asks "have we checked every state?" and the answer needs evidence from the rendered product.

## Do not use this when

- Designing the state model, ownership, authority, or recovery contract from scratch: use state-design.
- The empty state's own content and next action need design: use empty-state-design.
- An element's value, not its timing, is in doubt: use ui-necessity-audit.
- Only the wording of an error is wrong: use microcopy-quality.
- A single stroke or border looks wrong in a state: use visual-coherence-audit.

## Mandatory conditional loading

MUST load `references/state-inventory.md` before choosing states and `references/transition-relevance.md` before judging any transition or element visibility. A runnable product MUST be put into the inventoried states; unreached states are listed as unverified, never passed.

## Checkpoints

1. **Before listing states:** do you know the product's real mechanics (what actions, data, actors, connections, and timing exist)? No → read the flow first. States come from mechanics; a checklist copied wholesale invents states the product does not have (`references/state-inventory.md`).
2. **For each relevant state:** can you answer the ten questions (trigger, what the user knows, what they can do, visible, hidden, primary action, language accuracy, visual consistency, recovery, transition) with evidence from a render? A question left unanswered is an unverified state, not a pass.
3. **For every element visible in a state:** apply the relevance test: does the state make it useful? If it appears because the component always renders, it is premature, lingering, or irrelevant (`references/transition-relevance.md`).
4. **For every transition:** was it exercised, not inferred? Trigger the change, observe the new state, resolve it, observe again. Check that everything the old state owned is cleared, labels are updated, space is released, and focus lands where the user is working.
5. **For every error:** does it appear only after the attempt that could cause it, name the problem and correction, remain only while the cause remains, and leave the user able to continue? Premature, stale, or dead-end → finding.
6. **For every disabled or unavailable control:** does the interface say why and how to enable it, or is the reason discoverable at the control? A silent disabled control that contradicts visible state is a finding.
7. **Before calling a state fine:** was it rendered at the narrow size and via keyboard? Focus loss and misaligned active states often appear only there. Unrendered states are listed as **NOT VERIFIED IN RENDERED OUTPUT**.
8. **Before adding a finding:** does it belong to one state boundary and one root cause? Merge repeats; assign copy to microcopy-quality and removal to ui-necessity-audit instead of duplicating.

## Workflow

1. **Map mechanics.** Primary loop, actors, data lifecycle, async work, connection, permissions, time.
2. **Inventory.** Choose the relevant states per `references/state-inventory.md`; note how to reach each in the running product (steps, mocks, forced offline, slow network, permission flags).
3. **Reach and capture.** Put the product in each state; record evidence per state. Use `scripts/_shared/rendered-text.mjs --steps flow.json` to script a flow with phases and check that errors appear only after the attempt and are gone after correction; it reads error text and invalid fields only.
4. **Audit.** For each state: the ten questions; for each transition: the relevance test and clean-up checks, using `references/transition-relevance.md`.
5. **Report.** A state matrix with findings, one record per defect with a root cause (logic, rendering, content), plus what was not reachable.
6. **Repair or hand off.** Fix state-boundary rendering and clean-up in REPAIR mode. Route model or contract changes to state-design, wording to microcopy-quality, removal to ui-necessity-audit. Rerun each affected transition.

| Need | Load |
|---|---|
| Choosing states for this product; the ten questions; how to reach each state | `references/state-inventory.md` |
| Relevance test, premature and lingering elements, transitions, focus, clean-up | `references/transition-relevance.md` |

## What it can change and what it must preserve

- Change: the conditions under which elements render, clean-up on transition, labels bound to state, focus placement, disabled-reason affordances, and state-dependent space.
- Preserve: the product's state model and authority decisions (owned by state-design), safeguards, recovery actions, persistent status that is truly needed, and the behavior a requirement locks.

## Failure modes

- Auditing every state in the taxonomy for a simple screen.
- Declaring a state fine from the source without reaching it.
- Removing a persistent indicator that is the only place a state is shown.
- Fixing a stale label without fixing the missing transition that caused it.

## Completion criteria

- A state inventory chosen from the product's mechanics, with how each state was reached.
- A matrix: for each relevant state, the ten questions answered or marked unverified, with evidence level.
- Each transition exercised; defects named as PREMATURE, STALE, CONTRADICTORY, MISSING RECOVERY, IRRELEVANT-VISIBLE, or FOCUS with root cause and owner.
- Fixes rerun through the affected transition at desktop and narrow size, or **NOT VERIFIED IN RENDERED OUTPUT** with the exact unreached states.

## References

- `references/state-inventory.md` — choosing states, the ten questions, reaching states
- `references/transition-relevance.md` — relevance test, defect classes, transitions, focus
- `references/_shared/state-types.md` — state taxonomy and visibility follows state
- `references/_shared/states-loading-empty-error.md` — loading, empty, error precedent
- `references/_shared/quality-findings.md` — finding record and ownership
- `scripts/_shared/rendered-text.mjs` — optional scripted-flow text and error check; also `scripts/_shared/layout-probe.mjs` and `scripts/_shared/style-probe.mjs`, which it loads
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection rules
