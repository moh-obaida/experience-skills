# Inline Edit and Direct Manipulation

Editing where the value lives, and manipulating objects directly, removes navigation and makes
cause and effect obvious.

## Inline edit

Use for single fields and small, reversible changes (see the inline-edit pattern in
`references/_shared/inline-edit.md`). Key requirements:

- Visible affordance on hover *and* focus, and available on touch
- Enter commits, Escape cancels, blur commits for simple non-sensitive fields
- Inline validation, input preserved on error
- Accessible trigger with a specific name ("Rename 'Spring Tournament'")

## Direct manipulation

Dragging, resizing, reordering, drawing, and spatial arrangement.

Good fits:
- Reordering lists where order matters and lists are short to medium
- Spatial tools (canvases, boards, maps, timelines, calendars)
- Resizing panes and objects

Requirements:
- **Non-drag alternative** for every drag action (WCAG 2.2 "Dragging Movements"): a Move menu,
  arrow buttons, keyboard reordering.
- **Feedback during manipulation:** the item follows the pointer, drop targets highlight,
  invalid drops are shown before release.
- **Undo** for the result.
- **Touch parity:** drag on touch needs press-and-hold or handles that do not conflict with scroll.

## When direct manipulation is the wrong choice

- Moving an item to a destination far away (another page, a long list): a "Move to…" menu is
  faster and more accessible.
- Precise values: typing a number beats dragging a slider to 37.
- Bulk operations: selection + action beats dragging many items.

## Selection models

Consistent selection makes direct manipulation predictable:

- Click selects; Shift-click extends; Cmd/Ctrl-click toggles (platform conventions).
- Selected items are clearly marked beyond color.
- Actions apply to the selection; the selection count is visible.
