# Keyboard, Touch, and Accessibility

Load to verify every control works for keyboard, touch, pointer, and assistive technology users.

Sections: Keyboard and Power Use · Touch and Reach · Accessibility for Controls

## Keyboard and Power Use

Keyboard support serves two groups: people who cannot use a pointer, and frequent users who
are faster without one. Both need the basics; the second also benefits from shortcuts.

### Baseline (everyone)

- Every interactive element reachable with Tab in a logical order that follows the visual order.
- Visible focus indicator with sufficient contrast, never removed without replacement.
- Enter/Space activate buttons; Enter follows links.
- Escape closes dialogs, menus, and popovers, returning focus to the trigger.
- Arrow keys move within composite widgets (menus, tabs, listboxes, grids) per ARIA practices.
- No keyboard traps.
- Focus is not hidden behind sticky headers or overlays.

### Power use (frequent users)

- Shortcuts for constant actions (navigate items, mark, approve, move).
- A shortcut reference (commonly `?`) and shortcuts shown in menus and tooltips.
- Command palette only for large action spaces.
- Type-to-filter in lists and pickers.
- Direct entry (type a date, paste a list).

### Shortcut design

- Use platform modifiers (Cmd on macOS, Ctrl elsewhere) and conventions (Cmd/Ctrl+K for search
  or palette in many web apps, Cmd/Ctrl+Enter to submit multiline input).
- Single-character shortcuts must be disable-able or remappable, or active only when the relevant
  component has focus (WCAG 2.1.4).
- Avoid overriding browser and assistive technology shortcuts.
- Keep shortcuts consistent across similar surfaces.

### Live control

For hosts and operators, consider dedicated keys for the constant pair of actions (for example
C for Correct, W for Wrong, U to undo), shown on the buttons themselves.

### Verification

Complete the main task with the keyboard only. Note every point where you had to reach for the
mouse; each is a defect.

## Touch and Reach

Touch interfaces have larger, less precise pointers and no hover. Phones add reach limits.

### Targets

- Minimum target size: 24×24 CSS px (WCAG 2.2 AA) with spacing; comfortable touch targets are
  closer to 44–48 px. Small visual icons can have larger invisible hit areas.
- Separate opposing actions (Correct/Wrong, Accept/Decline) enough to avoid mis-taps.
- Inline text links in paragraphs are exempt from minimums but should not be the only way to do
  important actions.

### Reach

- On large phones, the top corners are hard to reach one-handed. Put frequent actions within the
  lower and middle area; keep rare actions (settings, destructive) away from the thumb's resting
  path.
- Bottom navigation for top-level destinations is common on mobile; keep it to a few items.

### No hover

- Anything revealed on hover must also be available on tap or visible by default.
- Tooltips that carry essential information need a tap-accessible alternative.

### Gestures

- Gestures (swipe to archive, long press) are shortcuts, not the only path; provide a visible
  alternative.
- Avoid gesture conflicts with system gestures (edge swipes) and scroll.
- Provide feedback during the gesture and undo after.

### Bottom sheets and modals

Bottom sheets are useful for contextual options and short tasks on mobile. They are not a default
container for every interaction. Direct controls on the page are usually faster. See
`references/_shared/bottom-sheet-overuse.md`.

### Keyboard on mobile

- Use the right `inputmode` and `enterkeyhint`.
- Ensure focused fields and the primary action stay visible above the on-screen keyboard.

## Accessibility for Controls

Accessibility is part of interaction design, not an afterthought. These requirements align
with WCAG 2.2 AA; verify with real testing before claiming conformance.

### Semantics

- Use native elements: `button`, `a[href]`, `input`, `select`, `textarea`, `dialog`, `details`.
- If a custom control is unavoidable, follow the WAI-ARIA Authoring Practices pattern for its
  role (combobox, listbox, tabs, menu, slider) completely, including keyboard behavior.
- Every control has an accessible name that matches or contains its visible label.
- Groups of related inputs use `fieldset`/`legend` or equivalent.

### Keyboard and focus

- Full keyboard operability; logical focus order; visible focus indicator.
- Focus management on dialogs (move in, trap within, return on close).
- Focus not obscured by sticky content.

### Perception

- Text contrast ≥ 4.5:1 (≥ 3:1 for large text); UI boundaries and focus indicators ≥ 3:1.
- Do not convey state by color alone (selected, error, team identity): add text, icon, or pattern.
- Respect user text size; controls grow with text without clipping.

### Pointer and touch

- Targets ≥ 24×24 CSS px or sufficient spacing; comfortable sizes for primary touch actions.
- Non-drag alternatives for drag interactions.
- No actions only on hover.

### Timing and motion

- No time limits without a way to extend, except where essential (live games can be an essential
  exception; still consider accommodations such as extended-time options).
- Respect `prefers-reduced-motion`.

### Errors

- Identify errors in text; describe how to fix; associate messages with fields (`aria-describedby`).
- Announce form-level errors and important status changes via live regions.

### Verification

- Keyboard-only walkthrough
- Screen reader smoke test (VoiceOver, NVDA, TalkBack) on the main path
- Automated checks (axe or similar) as a floor, not a proof
- Zoom to 200% and reflow at 320 CSS px width
