# Direct Manipulation and Context-Scoped Controls

Load when edits require navigation, or controls restate context the system already knows.

Sections: Context-Scoped Controls · Inline Edit and Direct Manipulation

## Context-Scoped Controls

When the system knows the subject of an action, controls should apply to that subject without
the user naming it again.

### The pattern

```
Before (restated scope):
[Correct Team A] [Wrong Team A] [Correct Team B] [Wrong Team B]

After (scoped to context):
TEAM A IS ANSWERING
[ Correct ]  [ Wrong ]
```

Benefits:

- Half the controls (or fewer)
- No chance of pressing "Correct Team B" while Team A is answering
- Faster under time pressure
- The state header makes the context unmistakable

### Universal analogues

| Context known | Scoped control |
|---|---|
| Selected file | "Share" acts on the selected file |
| Active conversation | "Mute" applies to it |
| Current record page | "Approve," not "Approve record #1182" |
| Active participant | "Admit," "Remove" apply to the speaker |
| Current order | "Refund," with amount prefilled |
| Focused cell | Formatting actions apply to it |

### Requirements

1. **Make the context visible and prominent** (state header, selected highlight).
2. **Keep actions stable in position** as context changes; only their target changes.
3. **Handle race conditions:** if context changes while an action is in flight, apply it to the
   subject that was shown when the user acted, or block and explain.
4. **Offer an explicit override** when users sometimes need to act on another subject (a secondary
   menu), without cluttering the main path.
5. **Announce context changes** to screen readers (polite live region).

### Worked example

See `references/_shared/context-aware-judgment.md` and the contextual-controls and state-header
patterns in `references/_shared/`.

## Inline Edit and Direct Manipulation

Editing where the value lives, and manipulating objects directly, removes navigation and makes
cause and effect obvious.

### Inline edit

Use for single fields and small, reversible changes. Key requirements:

- Visible affordance on hover *and* focus, and available on touch
- Enter commits, Escape cancels, blur commits for simple non-sensitive fields
- Inline validation, input preserved on error
- Accessible trigger with a specific name ("Rename 'Spring Tournament'")

### Direct manipulation

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

### When direct manipulation is the wrong choice

- Moving an item to a destination far away (another page, a long list): a "Move to…" menu is
  faster and more accessible.
- Precise values: typing a number beats dragging a slider to 37.
- Bulk operations: selection + action beats dragging many items.

### Selection models

Consistent selection makes direct manipulation predictable:

- Click selects; Shift-click extends; Cmd/Ctrl-click toggles (platform conventions).
- Selected items are clearly marked beyond color.
- Actions apply to the selection; the selection count is visible.
