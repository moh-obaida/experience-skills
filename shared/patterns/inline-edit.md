# Pattern: Inline Edit

## Problem
Small edits (rename, change a value, toggle a flag) force navigation to a separate editor or
modal, costing several actions and a context switch.

## When useful
- The edit is a single field or a small set of closely related fields.
- The edit is frequent.
- The edited value is visible in place already.
- The change is reversible.

## When NOT useful
- The edit has consequences that require review (changing a price across 10,000 listings).
- Validation needs substantial context or multiple dependent fields.
- The field is not visible in context (inline edit of hidden data is confusing).

## Structure
1. Show the value as normal text with a clear edit affordance (pencil on hover/focus,
   double-click, or a visible "Rename" in a context menu).
2. Replace in place with an input of the same size and position.
3. Commit on Enter or blur; cancel on Escape.
4. Validate inline; keep the input on error with the user's text intact.
5. Confirm the save quietly (the value updates; optional brief highlight).
6. Keyboard and screen reader accessible: the trigger is a real button, focus moves into the
   input, and returns afterwards.

## Example
`Quarterly Review ✎` → click → `[Quarterly Review 2026   ]` → Enter → `Quarterly Review 2026`

## Failure modes
- Edit affordance only on hover (invisible on touch and to keyboard users).
- Blur commits a half-typed value unexpectedly in sensitive fields; consider explicit
  save for those.
- Layout shift when the input replaces text.
