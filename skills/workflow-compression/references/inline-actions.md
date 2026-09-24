# Inline Actions

Edit and act where the value is displayed. Inline actions remove navigation tax (F4) for small,
frequent, reversible changes.

## Good candidates

- Rename, retitle, relabel
- Toggle a status or flag
- Change a single field (due date, assignee, priority, quantity)
- Reorder items
- Quick add (a new row at the end of a list)
- Approve/reject in a queue

## Poor candidates

- Changes that require reviewing consequences across many objects
- Multi-field edits with interdependent validation
- Actions that are irreversible or costly

## Interaction details

- **Affordance:** visible on hover *and* on focus, and available on touch (a visible edit icon or a
  context menu, not hover only).
- **Commit:** Enter or blur for simple text; explicit save for sensitive fields.
- **Cancel:** Escape restores the previous value.
- **Validation:** inline, next to the field; keep the user's text on error.
- **Feedback:** the value updates; an optional brief highlight confirms the save; errors are
  specific.
- **Concurrency:** if another user changed the value, show it rather than silently overwrite.
- **Accessibility:** the trigger is a button with an accessible name ("Rename Quarterly Review");
  focus moves into the input and back out.

## Worked example

See `references/_shared/inline-rename.md`.
