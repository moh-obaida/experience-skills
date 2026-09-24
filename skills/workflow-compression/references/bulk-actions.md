# Bulk Actions (F6)

Serial work is performing the same action on many items one at a time.

## Signals

- Users repeat the same action on consecutive list items.
- Support requests ask "is there a way to do this for all of them?"
- Import, cleanup, grading, tagging, triage, and moderation workflows.

## Design

1. **Selection:** checkboxes on each row; shift-click ranges; keyboard selection;
   "select all" with explicit scope (this page vs all N matching).
2. **Action bar:** appears when anything is selected; shows the count; offers the common actions.
3. **Execution:** reversible actions apply immediately with undo; destructive actions state
   the count and scope before committing.
4. **Result reporting:** precise partial results ("47 moved · 3 skipped because they are locked ·
   View").
5. **Persistence:** keep the selection after an action when users commonly chain actions.

## Alternatives to selection-based bulk

- **Rules:** "Always tag emails from X" when the same bulk action recurs.
- **Paste lists:** accept a pasted list of names or IDs instead of adding one by one.
- **Import:** CSV/spreadsheet import for large initial loads.
- **Apply to similar:** after a single action, offer "Apply to 12 similar items."

## Accessibility

- Selection state announced; checkboxes labeled with item names.
- Action bar reachable by keyboard and announced when it appears.

## Counting

Before: `n items × k actions`. After: `select (1–3 actions) + k actions`. For n = 30 and k = 3,
that is 90 actions reduced to about 6.
