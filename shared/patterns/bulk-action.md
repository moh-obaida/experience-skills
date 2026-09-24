# Pattern: Bulk Action

## Problem
Users perform the same action on many items one at a time.

## When useful
- The action is common across items (tag, move, archive, assign, delete, export).
- Users regularly deal with groups (triage, cleanup, grading, importing).

## When NOT useful
- Each item requires individual judgment that bulk would encourage users to skip.
- Lists are always short (two or three items).

## Structure
1. Selection model: checkboxes, shift-click range, select-all-in-view vs select-all-matching.
2. A contextual action bar appears when a selection exists, stating the count.
3. Actions apply to the selection; reversible ones apply immediately with undo.
4. Destructive bulk actions state the count and scope explicitly.
5. Report partial success precisely ("28 archived, 2 could not be archived — view").

## Example
```
[✓] 30 selected   Tag ▾   Move ▾   Archive   ·   Clear selection
```

## Failure modes
- "Select all" that silently means only the visible page.
- Bulk actions hidden in a menu nobody opens.
- No undo, so users fear using bulk actions.
- Losing the selection after one action when users want to apply several.
