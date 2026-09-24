---
name: interaction-design
description: "Make controls obvious, fast, safe, and accessible: affordance, action hierarchy, primary/secondary/destructive actions, inputs and forms, inline edit, direct manipulation, context-scoped controls, keyboard and touch, confirmation versus undo, disabled states, feedback, and power-user paths. Use when controls are confusing, over-customized, slow to operate, error-prone, or inaccessible; when someone proposes a custom version of a standard control; when actions restate context the system already knows; or when designing forms and live-control surfaces. Default stance: do not reinvent familiar interactions without user value."
license: MIT
metadata:
  version: "0.1.1"
  collection: experience-skills
---

# Interaction Design

Controls are where intent becomes action. They should be obvious to newcomers, fast for
frequent users, safe around consequences, and usable by everyone.

## Start here

1. Read `references/_shared/experience-core.md`.
2. For each control in scope, note how often it is used and what it costs if misused
   (`references/_shared/interaction-frequency.md`). Frequency and consequence decide the design.

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

## References

- `references/familiar-controls.md` — affordance, familiarity, cost of custom controls
- `references/actions-and-safety.md` — action hierarchy, confirmation vs undo
- `references/forms-and-inputs.md` — forms, codes, validation
- `references/direct-and-contextual.md` — context-scoped controls, inline edit, direct manipulation
- `references/input-modes-and-access.md` — keyboard, touch, accessibility requirements
- `references/feedback-and-errors.md` — feedback timing, disabled states, errors, modes
- `references/_shared/` — generated copies: `experience-core.md`, `interaction-frequency.md`,
  `overengineering.md`, `join-code-page.md`,
  `context-aware-judgment.md`, `undo-vs-confirm.md`, `bottom-sheet-overuse.md`,
  `search-proportionality.md`, `public-service-form.md`
