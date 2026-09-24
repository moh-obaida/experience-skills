# Pattern: Recent Context

## Problem
Users re-find things they worked with minutes or days ago by navigating from scratch.

## When useful
- Users return to a small working set of items.
- Items are hard to locate in large libraries.
- Home, launcher, pickers, and empty states (where recent items are the most useful content).

## When NOT useful
- Privacy-sensitive contexts where recent items expose activity to others (shared screens,
  classroom projectors, kiosks). Offer a way to hide.
- Products where each session is independent and history carries no value.

## Structure
1. Track meaningful interactions (opened, edited, played, purchased), not every impression.
2. Show a short list (3–7 items) with enough identity to recognize them: name, type, time,
   thumbnail if meaningful.
3. Put recent context where the user starts a task: home, pickers ("Recent" at the top),
   empty states.
4. Allow removal from recents.

## Example
A "Choose a quiz" picker opens with `Recent: Biology Unit 3 · World Capitals · Fractions`
above the full searchable library.

## Failure modes
- Recents that include items the user only glanced at.
- Recents that crowd out the primary action.
- Stale recents referring to deleted items.
