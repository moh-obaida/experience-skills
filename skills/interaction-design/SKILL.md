---
name: interaction-design
description: "Use this skill whenever controls, inputs, forms, pickers, buttons, confirmations, or keyboard and touch behavior are designed or reviewed: especially when someone proposes a custom, animated, or 'more fun' version of a standard control (segmented code boxes, bespoke dropdowns, bouncing digits), when actions are confusing, slow, error-prone, or inaccessible, when actions restate context the system already knows, or when building forms and live-control surfaces. Covers affordance, action hierarchy, primary/secondary/destructive actions, inline edit, direct manipulation, confirmation versus undo, disabled states, feedback, and power-user paths. Default stance: do not reinvent familiar interactions without user value."
license: MIT
metadata:
  version: "0.3.0"
  collection: experience-skills
---

# Interaction Design

Controls are where intent becomes action. They should be obvious to newcomers, fast for
frequent users, safe around consequences, and usable by everyone.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/experience-operating-contract.md`; a custom-control branch must load
   its interaction-cost evidence before implementation.
3. For each control in scope, note how often it is used and what it costs if misused
   (`references/_shared/interaction-frequency.md`). Frequency and consequence decide the design.

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

- Users hesitate, mis-click, or cannot find how to do something.
- A control has been customized (segmented code boxes, custom selects, sliders, gesture-only
  actions) and its value is unclear, or someone proposes such a customization.
- Actions restate context the system already knows.
- Destructive actions are unsafe, or harmless ones are over-confirmed.
- Forms are long, error-prone, or lose input.
- Keyboard, touch, or screen-reader use is broken or slow.
- A live-control surface (hosting, broadcasting, operating) needs fast, mistake-resistant actions.

## Do not use this when

- The issue is flow length across screens → workflow-compression (they pair often).
- The issue is behavior over time (loading, errors, sync) → state-design.
- The issue is identity → visual-identity. Never solve identity by decorating controls.

## Checkpoints

1. **For any custom or proposed-custom control:** list what the standard control gives for free
   (paste, autofill, keyboard, screen reader, mobile keyboard, platform behavior) and what the custom
   one would lose. If the gain is not a measurable speed or clarity improvement for users → use the
   standard control (`references/familiar-controls.md`; `references/_shared/overengineering.md`).
   Anchor: `references/_shared/join-code-page.md`.
2. **For every group of controls that names a subject:** does the context already determine it?
   Yes → one set of controls scoped to the context, with the context shown prominently
   (`references/direct-and-contextual.md`; anchor `references/_shared/context-aware-judgment.md`).
3. **For every confirmation:** reversible → act now with undo; costly → preview and an explicit
   commit named by its effect; irreversible → specific confirmation stating the consequence
   (`references/actions-and-safety.md`; anchor `references/_shared/undo-vs-confirm.md`).
4. **For every region with more than one filled button:** choose one primary; demote the rest.
5. **For every small edit that navigates away:** can it be edited in place? Yes → inline edit
   (`references/direct-and-contextual.md`).
6. **For every sheet, modal, or wizard:** would a direct control on the page be faster? Yes → use it
   (anchor `references/_shared/bottom-sheet-overuse.md`; for forms,
   `references/_shared/public-service-form.md`).
7. **For every command palette or power feature:** do scope and frequency justify it
   (anchor `references/_shared/search-proportionality.md`)? No → a normal control.
8. **Before finishing:** operate it with keyboard only, touch (or emulation), and bad input.
   Anything hover-only, unfocusable, or input-losing is a defect.
9. **For search, pickers, multi-select, bulk actions, and command palettes:** size the solution to scale and frequency using `references/search-selection-and-bulk.md`. A palette for a dozen actions is overengineering.
10. **When a browser is available, run `scripts/check-controls.mjs`** on the surface: unnamed controls, placeholder-only labels, missing alt, positive tabindex, small targets, contrast, and invisible focus are defects to fix or list.

## Workflow

1. **Inventory** controls: purpose, frequency, consequence, standard vs custom.
2. **Evaluate** each against the checkpoints.
3. **Load the reference for the issue:**

   | Issue | Load |
   |---|---|
   | Unclear affordance; custom controls; familiarity | `references/familiar-controls.md` |
   | Competing buttons; destructive actions; confirm vs undo | `references/actions-and-safety.md` |
   | Forms, inputs, validation, codes, formatting | `references/forms-and-inputs.md` |
   | Edit in place, drag, restated context, live control | `references/direct-and-contextual.md` |
   | Keyboard, shortcuts, touch, reach, accessibility | `references/input-modes-and-access.md` |
   | Feedback timing, disabled states, error messages, modes | `references/feedback-and-errors.md` |

4. **Redesign** in this order: remove the control if the system can decide → make it standard →
   scope it to context → put it where the value is → add power paths for frequent users.
5. **Verify** (checkpoint 8).

## Execution rules

- Native elements first (`button`, `a`, `input`, `select`, `dialog`, `details`) or platform equivalents.
- Buttons act; links navigate.
- Labels are verbs naming the outcome ("Delete tournament"), not "OK."
- Destructive actions are never the default or the primary style unless deletion is the purpose.
- Disabled controls explain why, or stay enabled and explain on use.
- User input survives every validation error.

## Precedent

| When | Load |
|---|---|
| Beginner vs expert paths, shortcuts, disclosure | `references/_shared/progressive-disclosure-and-expert-speed.md` |
| Commit, undo, and once-only actions | `references/_shared/transactional-clarity.md` |
| Overlays and interruptions around controls | `references/_shared/interruptions-and-consent.md` |
| Mobile navigation and reach | `references/_shared/mobile-navigation.md` |
| Navigation models and density | `references/_shared/spatial-density-navigation.md` |

## Failure modes

- Gimmick controls; button walls; duplicated per-subject controls; confirmation reflex;
  hover-only actions; silent actions; invisible modes.

## Completion criteria

- Controls are recognizable, correctly weighted, labeled by outcome.
- No control restates known context; context is visible.
- Undo for reversible, specific confirmation for irreversible.
- Custom controls have a stated, measurable value and pass keyboard, screen-reader, touch, paste,
  and autofill checks, or were replaced.
- Keyboard path and visible focus work end to end; targets are adequately sized.
- The familiar-control or custom-control reference was loaded for the relevant branch, and the
  handoff names action scope, safety choice, accessibility evidence, and remaining risks.

## References

- `references/familiar-controls.md` — affordance, familiarity, cost of custom controls
- `references/actions-and-safety.md` — action hierarchy, confirmation vs undo
- `references/forms-and-inputs.md` — forms, codes, validation
- `references/direct-and-contextual.md` — context-scoped controls, inline edit, direct manipulation
- `references/input-modes-and-access.md` — keyboard, touch, accessibility requirements
- `references/feedback-and-errors.md` — feedback timing, disabled states, errors, modes
- `references/search-selection-and-bulk.md` — search, autocomplete, selection, mixed states, bulk, context menus, palettes, control states
- `scripts/check-controls.mjs` — rendered accessibility quick checks for controls
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `interaction-frequency.md`,
  `overengineering.md`, `join-code-page.md`, `context-aware-judgment.md`, `undo-vs-confirm.md`,
  `bottom-sheet-overuse.md`, `search-proportionality.md`, `public-service-form.md`,
  `progressive-disclosure-and-expert-speed.md`, `transactional-clarity.md`,
  `interruptions-and-consent.md`, `mobile-navigation.md`, `spatial-density-navigation.md`
