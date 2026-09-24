# Accessibility for Controls

Accessibility is part of interaction design, not an afterthought. These requirements align
with WCAG 2.2 AA; verify with real testing before claiming conformance.

## Semantics

- Use native elements: `button`, `a[href]`, `input`, `select`, `textarea`, `dialog`, `details`.
- If a custom control is unavoidable, follow the WAI-ARIA Authoring Practices pattern for its
  role (combobox, listbox, tabs, menu, slider) completely, including keyboard behavior.
- Every control has an accessible name that matches or contains its visible label.
- Groups of related inputs use `fieldset`/`legend` or equivalent.

## Keyboard and focus

- Full keyboard operability; logical focus order; visible focus indicator.
- Focus management on dialogs (move in, trap within, return on close).
- Focus not obscured by sticky content.

## Perception

- Text contrast ≥ 4.5:1 (≥ 3:1 for large text); UI boundaries and focus indicators ≥ 3:1.
- Do not convey state by color alone (selected, error, team identity): add text, icon, or pattern.
- Respect user text size; controls grow with text without clipping.

## Pointer and touch

- Targets ≥ 24×24 CSS px or sufficient spacing; comfortable sizes for primary touch actions.
- Non-drag alternatives for drag interactions.
- No actions only on hover.

## Timing and motion

- No time limits without a way to extend, except where essential (live games can be an essential
  exception; still consider accommodations such as extended-time options).
- Respect `prefers-reduced-motion`.

## Errors

- Identify errors in text; describe how to fix; associate messages with fields (`aria-describedby`).
- Announce form-level errors and important status changes via live regions.

## Verification

- Keyboard-only walkthrough
- Screen reader smoke test (VoiceOver, NVDA, TalkBack) on the main path
- Automated checks (axe or similar) as a floor, not a proof
- Zoom to 200% and reflow at 320 CSS px width
