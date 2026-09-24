# Pattern: Meaningful Empty State

## Problem
Empty surfaces are either blank (a dead end) or overfilled with illustration, tips, marketing,
and stats (noise). Neither helps the user get started.

## When useful
- Zero items, first run, filtered-empty, search-empty, no permission, incomplete setup.

## Structure
1. **Explain the absence** in one plain sentence, specific to the cause (no items yet vs
   filters hide everything vs no access).
2. **Offer the most useful next action** (create, clear filters, request access, import).
3. **Surface relevant existing context** if any (recent or ready items, templates, the thing
   the user just made elsewhere).
4. **Keep it proportionate:** one visual element at most, sized to the space and archetype.

## Example
```
No games hosted yet.
Your quiz "World Capitals" is ready to host.
[ Host World Capitals ]     or  Create a new quiz
```

## Failure modes
- Treating filtered-empty like first-use ("Create your first item!" when filters hide 40 items).
- Large illustrations pushing the action below the fold.
- Empty-state copy that is cute but uninformative.
