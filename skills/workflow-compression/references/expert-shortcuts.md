# Expert Shortcuts (F10)

Frequent users should not have to repeat the beginner path forever.

## Signals of expert tax

- The same person performs the flow many times per day or week.
- Power users ask for keyboard shortcuts, bulk actions, or "a faster way."
- Users build workarounds (browser bookmarks to deep URLs, scripts, spreadsheets).

## Expert paths

| Tool | Use for |
|---|---|
| Keyboard shortcuts | Constant actions (navigate, mark, move, approve) |
| Command palette | Many actions across a large app |
| Direct entry | Typing a value instead of picking (dates, codes, quantities) |
| Smart parsing | One input that sets several fields ("Lunch with Sam Friday 1pm") |
| Presets and templates | Repeated configurations |
| Bulk actions | Group processing |
| Deep links | Jumping directly to a state |
| CLI flags / API | Scriptable, non-interactive use |
| Dense mode | Seeing more at once |

## Rules

- Expert paths are additions, never replacements for discoverable UI.
- Make shortcuts discoverable: show them in menus and tooltips; provide a shortcut sheet (often `?`).
- Avoid conflicts with browser, OS, and assistive technology shortcuts.
- Single-key shortcuts need a way to disable them (WCAG 2.1.4) or must only work when a component
  has focus.
- Keep shortcuts consistent across the product.

## Measuring

Count actions for the frequent user using the expert path versus the default path. Report both;
the default path should not get worse.
