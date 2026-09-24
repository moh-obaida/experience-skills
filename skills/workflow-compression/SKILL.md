---
name: workflow-compression
description: "Reduce time-to-outcome in any user workflow by mapping it step by step, classifying friction (redundant input, unnecessary choice, repeated configuration, navigation tax, confirmation tax, serial work, memory failure, waiting tax, dead ends, expert tax), and removing work the software could do, while preserving safety and meaningful human judgment. Use when a flow takes too many clicks, screens, questions, or waits; when users re-enter known information; when setup or configuration repeats; or when asked to make something faster or simpler. Always measures steps before and after."
license: MIT
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Workflow Compression

Functionality is the baseline. Once a flow works, the question is how long it takes and how
much of that time buys the user anything.

> If the software already knows the answer, do not ask the user again.
> If there is only one meaningful option, do not create a choice screen.
> Automate mechanics. Preserve judgment.

## Use this when

- A task takes many clicks, screens, or questions for what it achieves.
- Users re-enter information the product already has.
- A choice screen has only one real option.
- Harmless actions ask for confirmation.
- Small edits require navigating to a separate page or modal.
- Users process items one at a time that could be handled together.
- Setup or configuration is repeated every session.
- Users wait on a screen while background-capable work runs.
- A completed task ends in a dead end.
- Frequent users are forced through the beginner path.
- A CLI asks interactive questions whose answers are inferable.

## Do not use this when

- The concern is how the flow *looks* rather than how long it takes (composition-repair,
  visual-identity).
- The whole product feels confusing rather than one flow being slow (product-friction first).
- The step in question is a legal, safety, or financial safeguard the user explicitly wants
  to keep. Improve its clarity instead of removing it.

## Core principles

1. **Measure before and after.** Actions, inputs, decisions, navigations, confirmations,
   blocking waits. No "simpler" without numbers.
2. **Decisions are the expensive unit.** Removing one real question is worth more than removing
   two obvious clicks.
3. **Weight by frequency.** A small cost on a path used 40 times a day beats a large cost on a
   path used once. See `references/_shared/interaction-frequency.md`.
4. **Known answers are not questions.** Carry context forward; prefill; infer and display.
5. **Protect safety and judgment.** Money movement, irreversible deletion, publishing to many
   people, and the user's value-producing decision stay (and get clearer, not shorter).
6. **Show automated decisions.** Inferred values appear where the question would have been,
   with a way to change them.
7. **Every outcome has a next action.**

## Workflow

### 1. Define the flow
Name the outcome, the starting point, the actor, and how often it happens. If several user
types use it (new vs frequent), map the most frequent first.

### 2. Map it
Walk the flow in the product if you can (rendered evidence); otherwise from code or
description (and say so). Record each step with a type: `action`, `input`, `decision`,
`navigation`, `confirmation`, `wait`, `lookup`, `recovery`, `outcome`.

Load `references/workflow-mapping.md` for the mapping method and table format.
`assets/workflow-template.json` is a starting file for `scripts/workflow-ledger.mjs`.

### 3. Count
Produce the baseline counts. Optionally run:

```bash
node scripts/workflow-ledger.mjs my-flow.json
```

The script totals the steps, tags likely friction from step attributes, and prints before/after
deltas. It is arithmetic plus tagging, not judgment.

### 4. Classify friction
Tag wasteful steps with the canonical codes (`references/_shared/workflow-friction.md`) and
load the matching reference:

| Friction | Reference |
|---|---|
| F1 Redundant input, scope restatement | `references/redundant-input.md`, `references/context-reuse.md` |
| F2 Unnecessary choice | `references/unnecessary-choice.md` |
| F3 Repeated configuration | `references/remembered-settings.md`, `references/smart-defaults.md` |
| F4 Navigation tax | `references/navigation-tax.md`, `references/inline-actions.md` |
| F5 Confirmation tax | `references/confirmation-tax.md` |
| F6 Serial work | `references/bulk-actions.md` |
| F7 Memory failure | `references/context-reuse.md`, `references/remembered-settings.md` |
| F8 Waiting tax | `references/waiting-tax.md`, `references/background-work.md` |
| F9 Dead end | `references/next-action.md` |
| F10 Expert tax | `references/expert-shortcuts.md`, `references/progressive-disclosure.md` |
| Too many options up front | `references/progressive-disclosure.md` |

### 5. Mark what must stay
Identify steps that buy safety, judgment, comprehension, or compliance. Write them down as
"preserved" so no later optimization removes them.

### 6. Redesign
Apply the smallest set of changes that removes the most weighted friction. Typical moves:
prefill and infer; skip one-option steps; inline small edits; undo instead of confirm; bulk
select; remember last-used configuration; background long work; add the next action; add
shortcuts for experts.

Where the implementation is available (REPAIR/BUILD mode), make the change, then walk the flow
again.

### 7. Recount and report
Report before/after counts, what was preserved, and the frequency context:

```
Flow: Host a saved quiz (teacher, ~15×/week)
Before: 9 actions · 4 screens · 3 decisions (1 one-option) · 2 re-asked inputs · 0 waits
After:  3 actions · 1 screen  · 1 decision                · 0 re-asked inputs · 0 waits
Removed: language picker (known from quiz), team-size step (remembered), confirm dialog (undo)
Preserved: final "Start game" action (the host's decision)
```

## Execution rules

- Change behavior only with real knowledge. Do not infer a value the system does not actually
  have; do not fake certainty.
- Keep every automated decision reversible from where it is displayed.
- Do not remove a confirmation from an irreversible action without replacing it with undo that
  genuinely reverses it.
- Keep accessibility: inline edits and shortcuts must work with keyboard and screen readers.
- Do not make the beginner path harder to speed up the expert path; add expert paths alongside.
- For CLIs: infer from the project, print the resolved plan, accept flags to override, and never
  block on prompts in non-interactive environments.

## Failure modes

- **Deleting control:** removing a meaningful choice because it "adds a step."
- **Silent magic:** inferring values without showing them, so users cannot correct them.
- **Moving the work:** a shorter flow that makes users fix things afterward.
- **Optimizing a rare path** while the frequent path stays slow.
- **Unmeasured claims:** "streamlined" with no counts.
- **Wizard to wall:** collapsing a wizard into one overwhelming page. Fewer screens is not the goal;
  less work is.

## Completion criteria

- The flow is mapped with typed steps and baseline counts.
- Friction is classified with canonical codes and weighted by frequency.
- Preserved safeguards and judgment steps are named.
- The redesigned flow has recounted numbers, measured when possible.
- Every inferred value is visible and changeable.
- The flow ends with a useful next action.

## References

- `references/workflow-mapping.md` — how to map, type, and count a flow
- `references/redundant-input.md` — F1 and scope restatement
- `references/unnecessary-choice.md` — F2
- `references/smart-defaults.md` — choosing defaults responsibly
- `references/context-reuse.md` — carrying context across steps and sessions
- `references/remembered-settings.md` — F3, presets, last-used
- `references/progressive-disclosure.md` — common path first
- `references/bulk-actions.md` — F6
- `references/inline-actions.md` — editing where the value is
- `references/navigation-tax.md` — F4
- `references/confirmation-tax.md` — F5; undo versus confirm
- `references/waiting-tax.md` — F8
- `references/background-work.md` — architecture for leaving and returning
- `references/next-action.md` — F9
- `references/expert-shortcuts.md` — F10
- `references/_shared/` — shared taxonomy, rubric, patterns, and worked examples
  (`skip-known-decisions.md`, `inline-rename.md`, `cli-project-init.md`, `mobile-money-transfer.md`)
