# Worked Example: Bottom-Sheet Overuse on Mobile

**Archetype:** OPERATIONAL (mobile) · **Product types:** mobile apps and mobile web
**Skills:** interaction-design, responsive-validation, workflow-compression

## Context

A mobile task app opens a bottom sheet for everything: changing a task's status, choosing a due
date, picking a priority from three options, renaming, and even confirming "Done."

## The bad version

```
Tap task → sheet (Edit, Status, Priority, Due, Delete)
  Tap Status → second sheet (To do, Doing, Done)
    Tap Done → sheet closes → first sheet still open → swipe down
```

## Correct analysis

- **Navigation tax (F4)** in sheet form: three layers for a one-tap change.
- **Hidden state.** The status is not visible on the task row; users must open a sheet to learn it.
- **Stacked sheets** confuse back behavior and swipe gestures.
- **Reach.** Sheets are reachable, which is why they became the default; reach does not justify layers.

## The better version

- Status shown on the row with a tappable control that cycles or opens a small inline menu.
- Swipe right to mark done (with a visible checkbox alternative and undo).
- Priority as a compact segmented control inside the task detail, not a sheet.
- Due date opens the native date picker directly.
- One sheet remains, for the rare "More" actions (move to project, duplicate, delete).

## Measurements

Mark as done: 4 taps + 1 swipe → 1 tap (checkbox) or 1 swipe. Change priority: 3 taps → 1 tap.

## Why this works

Direct controls on the object remove layers; the sheet is kept for its good use: a contextual
menu of infrequent actions.

## When this lesson does not apply

Sheets are right for contextual option lists, short forms that must keep the underlying context
visible (a map), and share sheets.

## Universal analogues

Desktop modal overuse; nested menus; "Edit" pages for single fields.
