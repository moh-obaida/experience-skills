---
name: workflow-compression
description: "Use this skill whenever the user asks to make a flow faster, simpler, shorter, or 'one tap'; when a wizard, checkout, onboarding, setup, transfer, form, or CLI prompt sequence takes too many steps, screens, questions, confirmations, or waits; or when users re-enter information the software already knows. Maps the workflow step by step, classifies friction (redundant input, unnecessary choice, repeated configuration, navigation tax, confirmation tax, serial work, memory failure, waiting tax, dead ends, expert tax, interruptions, hidden status), and removes work the software could do while preserving safety and meaningful human judgment. Always counts steps before and after."
license: MIT
metadata:
  version: "0.3.0"
  collection: experience-skills
---

# Workflow Compression

Functionality is the baseline. Once a flow works, the question is how long it takes and how
much of that time buys the user anything.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/experience-operating-contract.md`; workflow changes must leave typed
   before/after counts and known-context evidence for the next specialist.
3. Identify the flow's outcome, actor, and frequency. Frequency decides how much each step costs
   (`references/_shared/interaction-frequency.md`).

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
- **Personality belongs in the environment, not in standard controls.** A control changes only if
  the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Hand off when another experience skill fits better.** If part of the problem belongs to one
  (composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty
  states, slop, critical review) and it is installed, invoke it rather than improvising its method.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
<!-- core-brief:end -->

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
8. **For every flow, run the known-context inventory** at the top of `references/known-answers.md` (user, selected object, route, language, previous choices, recents, ownership, entered data, only-valid options, inferable values) before any field or question stays.
9. **Count hidden costs separately** (modes, interruptions, context switches, hidden status, duplicate objects; F11–F15 in `references/interruptions-modes-and-status.md`). A flow with few clicks and three overlays is not short.

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

## Precedent

| When | Load |
|---|---|
| Deciding what to infer, default, or remember | `references/_shared/known-context-and-defaults.md` |
| Modals, banners, consent, promotions in the way | `references/_shared/interruptions-and-consent.md` |
| Balancing beginner and expert paths | `references/_shared/progressive-disclosure-and-expert-speed.md` |
| Commit steps: fees, timing, undo, once-only actions | `references/_shared/transactional-clarity.md` |

Each entry is a dated observation of a real product with the conditions under which it transfers.

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
- The known-context inventory and typed before/after counts are present; the handoff carries
  preserved judgment, remaining friction, state risks, and verification status.

## References

- `references/workflow-mapping.md` — mapping, typing, counting, weighting
- `references/known-answers.md` — redundant input, unnecessary choice, defaults, context reuse, memory
- `references/steps-and-screens.md` — navigation tax, inline actions, confirmation tax, bulk, disclosure
- `references/waiting-and-endings.md` — waiting tax, background work, next action
- `references/expert-shortcuts.md` — expert paths
- `references/interruptions-modes-and-status.md` — F11–F15: modes, interruptions, context switches, hidden status, duplicates
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `interaction-frequency.md`,
  `workflow-friction.md`, `workflow-rubric.md`, `human-judgment.md`, `skip-known-decisions.md`,
  `context-aware-judgment.md`, `inline-rename.md`, `cli-project-init.md`,
  `mobile-money-transfer.md`, `known-context-and-defaults.md`, `interruptions-and-consent.md`,
  `progressive-disclosure-and-expert-speed.md`, `transactional-clarity.md`
