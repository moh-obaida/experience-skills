---
name: workflow-compression
description: "Reduce time-to-outcome in any user workflow by mapping it step by step, classifying friction (redundant input, unnecessary choice, repeated configuration, navigation tax, confirmation tax, serial work, memory failure, waiting tax, dead ends, expert tax), and removing work the software could do, while preserving safety and meaningful human judgment. Use when a flow takes too many clicks, screens, questions, or waits; when users re-enter known information; when setup or configuration repeats; or when asked to make something faster or simpler. Always measures steps before and after."
license: MIT
metadata:
  version: "0.1.1"
  collection: experience-skills
---

# Workflow Compression

Functionality is the baseline. Once a flow works, the question is how long it takes and how
much of that time buys the user anything.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Identify the flow's outcome, actor, and frequency. Frequency decides how much each step costs
   (`references/_shared/interaction-frequency.md`).

## Use this when

- A task takes many clicks, screens, questions, or waits for what it achieves.
- Users re-enter information the product already has, or choose from one valid option.
- Harmless actions ask for confirmation; small edits require separate pages or modals.
- Users process items one at a time, repeat the same setup, or babysit long work.
- A completed task ends in a dead end; frequent users are stuck on the beginner path.
- A CLI asks interactive questions whose answers are inferable.

## Do not use this when

- The issue is how the flow looks → composition-repair or visual-identity.
- The whole product is confusing rather than one flow being slow → product-friction first.
- The step is a safeguard the user wants kept → make it clearer, not shorter.

## Checkpoints

1. **Before proposing any change:** have you mapped the current flow and counted it? No → map it
   first (`references/workflow-mapping.md`). No counts, no claim.
2. **For every input, question, or choice step:** does the product already know this value, or is
   only one option valid? Yes → remove the step and show the value with a way to change it.
   Method: `references/known-answers.md`; anchor: `references/_shared/skip-known-decisions.md`.
3. **For every set of controls that names a subject** ("Approve order 4411", "Correct Team A"):
   does the context already determine the subject? Yes → scope one set of controls to the context
   (anchor: `references/_shared/context-aware-judgment.md`).
4. **For every confirmation:** is the action reversible? Yes → act immediately with undo. Money,
   irreversible deletion, or publishing to many people → keep one clear confirmation
   (anchor: `references/_shared/mobile-money-transfer.md`).
5. **For every step you plan to remove:** does it carry the user's judgment, safety, legal
   requirement, or necessary comprehension? Yes → keep it and list it as preserved
   (`references/_shared/human-judgment.md`).
6. **For every wait over ~10 seconds:** can the architecture run it in the background? Yes →
   background it (`references/waiting-and-endings.md`). No → say so honestly; do not pretend.
7. **Before finishing:** recount the redesigned flow and report before/after with preserved steps.

## Workflow

1. **Define** outcome, start, end, actor, frequency.
2. **Map** each step with a type (`action`, `input`, `decision`, `navigation`, `confirmation`,
   `wait`, `lookup`, `recovery`, `outcome`): `references/workflow-mapping.md`. Walk the running
   product when possible.
3. **Count.** Optionally:
   ```bash
   node scripts/workflow-ledger.mjs my-flow.json
   ```
   `assets/workflow-template.json` is a starting file. The script counts and tags; it does not judge.
4. **Classify** friction with the codes in `references/_shared/workflow-friction.md` and load:

   | Friction | Load |
   |---|---|
   | F1 redundant input, F2 unnecessary choice, F3 repeated configuration, F7 memory failure | `references/known-answers.md` |
   | F4 navigation tax, F5 confirmation tax, F6 serial work, too many options up front | `references/steps-and-screens.md` |
   | F8 waiting tax (including background architecture), F9 dead end | `references/waiting-and-endings.md` |
   | F10 expert tax | `references/expert-shortcuts.md` |
5. **Mark preserved steps** (checkpoint 5).
6. **Redesign** with the smallest set of changes that removes the most frequency-weighted friction.
   In REPAIR/BUILD mode, implement and walk the flow again. Anchor examples:
   `references/_shared/inline-rename.md`, `references/_shared/cli-project-init.md`.
7. **Recount and report** in the format of `references/_shared/workflow-rubric.md`:
   ```
   Before: 9 actions · 4 screens · 3 decisions (1 one-option) · 2 re-asked inputs · 0 waits
   After:  3 actions · 1 screen  · 1 decision · 0 re-asked inputs · 0 waits
   Preserved: final "Start game" (the host's decision)
   ```

## Execution rules

- Infer only what the system actually knows; never fake certainty.
- Every automated decision is visible and changeable where it is shown.
- Expert paths are additions, never replacements for discoverable UI.
- Inline edits and shortcuts must work with keyboard and screen readers.
- CLIs: infer from the project, print the resolved plan, accept override flags, never prompt when
  not interactive.

## Failure modes

- Deleting a meaningful choice because it "adds a step."
- Silent inference users cannot correct.
- A shorter flow that makes users fix things afterward.
- Optimizing a rare path while the frequent path stays slow.
- "Streamlined" with no counts; collapsing a wizard into an overwhelming wall.

## Completion criteria

- Current and proposed flows are mapped, typed, and counted.
- Friction is coded and weighted by frequency.
- Preserved safeguards and judgment steps are named.
- Inferred values are visible and changeable; the flow ends with a next action.

## References

- `references/workflow-mapping.md` — mapping, typing, counting, weighting
- `references/known-answers.md` — redundant input, unnecessary choice, defaults, context reuse, memory
- `references/steps-and-screens.md` — navigation tax, inline actions, confirmation tax, bulk, disclosure
- `references/waiting-and-endings.md` — waiting tax, background work, next action
- `references/expert-shortcuts.md` — expert paths
- `references/_shared/` — generated copies: `experience-core.md`, `interaction-frequency.md`,
  `workflow-friction.md`, `workflow-rubric.md`, `human-judgment.md`, and examples
  (`skip-known-decisions.md`, `context-aware-judgment.md`, `inline-rename.md`, `cli-project-init.md`,
  `mobile-money-transfer.md`)
