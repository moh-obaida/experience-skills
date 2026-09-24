---
name: interaction-design
description: "Make controls obvious, fast, safe, and accessible: affordance, action hierarchy, primary/secondary/destructive actions, inputs and forms, inline edit, direct manipulation, context-scoped controls, keyboard and touch, confirmation versus undo, disabled states, feedback, and power-user paths. Use when controls are confusing, over-customized, slow to operate, error-prone, or inaccessible; when someone proposes a custom version of a standard control; when actions restate context the system already knows; or when designing forms and live-control surfaces. Default stance: do not reinvent familiar interactions without user value."
license: MIT
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Interaction Design

Controls are where intent becomes action. They should be obvious to newcomers, fast for
frequent users, safe around consequences, and usable by everyone.

> Do not reinvent familiar interactions without user value.
> Make the environment interesting, not the textbox.

## Use this when

- Users hesitate, mis-click, or cannot find how to do something.
- A control has been customized (segmented code boxes, custom selects, custom sliders, gesture-only
  actions) and its value is unclear.
- Actions restate context the system already knows ("Approve order #4411" on order #4411's page;
  "Correct Team A / Correct Team B" when Team A is answering).
- Destructive actions are unsafe, or harmless ones are over-confirmed.
- Forms are long, error-prone, or lose input.
- Keyboard, touch, or screen-reader use is broken or slow.
- A live-control surface (hosting, broadcasting, operating) needs fast, mistake-resistant actions.

## Do not use this when

- The issue is flow length across screens (workflow-compression), though the two often pair.
- The issue is states and feedback over time (state-design), though they pair too.
- The issue is visual identity; do not solve identity by decorating controls.

## Core principles

1. **Familiar by default.** Standard controls carry decades of learned behavior plus platform
   support (autofill, paste, keyboards, screen readers). Custom controls must pay for what they lose.
2. **Clear action hierarchy.** One primary action per region; secondary actions quieter;
   destructive actions distinct and never the default.
3. **Scope to context.** If the system knows the subject, the control applies to it. Show the
   context; do not make users restate it.
4. **Direct over indirect.** Edit where the value is; manipulate the object itself when that is
   natural and accessible.
5. **Undo over confirm** for reversible actions; specific confirmation for irreversible ones.
6. **Immediate feedback.** Every action acknowledges itself within ~100 ms.
7. **Prevent errors before reporting them.** Constrain, default, and normalize input.
8. **Accessible and multi-modal.** Keyboard, touch, pointer, and assistive technology are all
   first-class. See `references/accessibility-controls.md`.
9. **Frequency shapes controls.** Constant actions get shortcuts and zero friction; rare ones
   get clarity. See `references/_shared/interaction-frequency.md`.

## Workflow

### 1. Inventory the controls
For the surface or flow, list each control: what it does, how often it is used, its
consequence (trivial, reversible, costly, irreversible), and whether it is standard or custom.

### 2. Evaluate
For each, ask:
- Is it recognizable as what it is? (affordance)
- Is its importance expressed correctly? (hierarchy)
- Does it restate known context? (scope)
- Is it safe for its consequence? (confirm/undo)
- Does it work with keyboard, touch, and screen readers? (access)
- Does it give feedback and prevent errors? (feedback)
- If custom, what value does customization add, and what does it cost? (custom-control cost)

### 3. Choose references
| Issue | Load |
|---|---|
| Unclear what is clickable; custom controls; familiarity | `references/affordance-and-familiarity.md` |
| Too many equal buttons; primary/secondary/destructive | `references/action-hierarchy.md` |
| Forms, inputs, validation, codes, formatting | `references/forms-and-inputs.md` |
| Edit in place, drag, direct manipulation | `references/inline-and-direct-manipulation.md` |
| Duplicated per-subject controls; live control | `references/context-scoped-controls.md` |
| Confirmation dialogs, undo, destructive actions | `references/confirmation-and-undo.md` |
| Keyboard, shortcuts, power users | `references/keyboard-and-power-use.md` |
| Mobile targets, reach, gestures, sheets | `references/touch-and-reach.md` |
| Feedback, disabled states, error messages | `references/feedback-and-errors.md` |
| Accessibility requirements for controls | `references/accessibility-controls.md` |
| Should this control be custom at all? | `references/custom-control-cost.md` |

### 4. Redesign
Prefer, in order: remove the control (if the system can decide) → make it standard → scope it
to context → put it where the value is → add power paths for frequent users.

### 5. Verify
Operate the result: mouse, keyboard only, touch (or touch emulation), and a screen reader if
available. Check focus order and visibility, target sizes, error handling with bad input, and
paste/autofill for inputs.

## Execution rules

- Use native elements (`button`, `a`, `input`, `select`, `dialog`, `details`) or the platform
  equivalents before building custom ones.
- Buttons perform actions; links navigate. Do not swap them.
- Label actions with verbs describing the outcome ("Save changes," "Delete tournament"), not "OK."
- Never make a destructive action the default or the visually primary one unless deletion *is*
  the purpose of the surface.
- Disabled controls should explain why (tooltip or adjacent text) or be replaced by an enabled
  control that explains on use.
- Keep user input on validation errors.
- Match platform conventions on native apps (iOS, Android, macOS, Windows).

## Failure modes

- **Gimmick controls:** segmented digit boxes, animated floating labels that obscure values,
  custom dropdowns without keyboard support.
- **Button walls:** every action a same-weight button.
- **Restated scope:** duplicated control sets per subject.
- **Confirmation reflex:** "Are you sure?" everywhere, teaching users to ignore it.
- **Hover-only actions:** invisible on touch and to keyboard users.
- **Silent actions:** no feedback, so users click again.
- **Mode errors:** the same control doing different things in states the user cannot see.

## Completion criteria

- Every control is recognizable, correctly weighted, and labeled by outcome.
- No control restates context the system knows; context is visible.
- Reversible actions use undo; irreversible ones confirm specifically.
- Custom controls have a stated value and pass keyboard, screen-reader, touch, paste, and
  autofill checks (or are replaced by standard ones).
- Keyboard path and visible focus work end to end; targets are adequately sized.

## References

- `references/affordance-and-familiarity.md`
- `references/action-hierarchy.md`
- `references/forms-and-inputs.md`
- `references/inline-and-direct-manipulation.md`
- `references/context-scoped-controls.md`
- `references/confirmation-and-undo.md`
- `references/keyboard-and-power-use.md`
- `references/touch-and-reach.md`
- `references/feedback-and-errors.md`
- `references/accessibility-controls.md`
- `references/custom-control-cost.md`
- `references/_shared/` — shared patterns and worked examples (`join-code-page.md`,
  `context-aware-judgment.md`, `search-proportionality.md`, `undo-vs-confirm.md`,
  `bottom-sheet-overuse.md`)
