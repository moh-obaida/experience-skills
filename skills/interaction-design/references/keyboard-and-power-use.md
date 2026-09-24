# Keyboard and Power Use

Keyboard support serves two groups: people who cannot use a pointer, and frequent users who
are faster without one. Both need the basics; the second also benefits from shortcuts.

## Baseline (everyone)

- Every interactive element reachable with Tab in a logical order that follows the visual order.
- Visible focus indicator with sufficient contrast, never removed without replacement.
- Enter/Space activate buttons; Enter follows links.
- Escape closes dialogs, menus, and popovers, returning focus to the trigger.
- Arrow keys move within composite widgets (menus, tabs, listboxes, grids) per ARIA practices.
- No keyboard traps.
- Focus is not hidden behind sticky headers or overlays.

## Power use (frequent users)

- Shortcuts for constant actions (navigate items, mark, approve, move).
- A shortcut reference (commonly `?`) and shortcuts shown in menus and tooltips.
- Command palette only for large action spaces.
- Type-to-filter in lists and pickers.
- Direct entry (type a date, paste a list).

## Shortcut design

- Use platform modifiers (Cmd on macOS, Ctrl elsewhere) and conventions (Cmd/Ctrl+K for search
  or palette in many web apps, Cmd/Ctrl+Enter to submit multiline input).
- Single-character shortcuts must be disable-able or remappable, or active only when the relevant
  component has focus (WCAG 2.1.4).
- Avoid overriding browser and assistive technology shortcuts.
- Keep shortcuts consistent across similar surfaces.

## Live control

For hosts and operators, consider dedicated keys for the constant pair of actions (for example
C for Correct, W for Wrong, U to undo), shown on the buttons themselves.

## Verification

Complete the main task with the keyboard only. Note every point where you had to reach for the
mouse; each is a defect.
