---
name: empty-state-design
description: "Design low-content states that are useful rather than blank or stuffed: zero items, one item, first-run, empty search, filtered-empty, no permission, no history, incomplete setup, unavailable, archived, and skeleton-versus-empty. Distinguishes intentional focus from dead space and useful density from filler, calibrated by page archetype. Use when a list, dashboard, library, inbox, search, or home screen has little or no content; when a sparse page feels unfinished; or when someone has filled an empty page with illustrations, fake stats, tips, or marketing."
license: MIT
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Empty State Design

Every product starts empty, and many surfaces spend a lot of their life sparse. Empty states
are often the first thing a new user sees and the moment they decide whether the product is
worth continuing.

Two failures dominate:

- **Blank:** "No items." and nothing else. A dead end.
- **Stuffed:** a giant illustration, three tips, fake stats, a marketing banner, and a quote.
  Noise pretending to be help.

> Useful density is not filler.
> Explain the absence. Offer the next action. Surface real context.

## Use this when

- A list, library, dashboard, inbox, feed, or search shows zero or very few items.
- A first-run experience lands on an empty workspace.
- A filtered or searched view returns nothing.
- A user lacks permission, or a feature is unavailable to them.
- Setup is incomplete and the surface cannot show real content yet.
- A sparse operational page feels unfinished.
- Someone has filled an empty page with filler and it now feels cluttered.

## Do not use this when

- The page has plenty of content but a poor layout (composition-repair).
- The empty state is really a loading state (state-design covers loading; see
  `references/skeleton-vs-empty.md` for the boundary).

## Core principles

1. **Diagnose the kind of empty.** Never-had-any, filtered-empty, search-empty, no-permission,
   incomplete setup, cleared (inbox zero), unavailable. Each needs different words and actions.
   See `references/empty-state-types.md`.
2. **Explain the absence specifically,** in one plain sentence.
3. **Offer the most useful next action,** usually one primary action.
4. **Surface real context** when it exists: a ready item, a recent item, a template, a draft.
5. **Proportion to archetype.** A FOCUSED page may be intentionally spare; an OPERATIONAL page
   should show state and next actions; an EXPERIENTIAL page should keep its atmosphere.
6. **Never fabricate.** No fake stats, fake activity, or invented content to fill space.
7. **One visual element at most,** sized so the action stays in the first viewport.

## Workflow

### 1. Classify
Identify the empty-state type and the archetype of the surface. Check which real context exists
(other objects the user owns, drafts, recent work, templates, teammates' content).

### 2. Choose references
| Situation | Load |
|---|---|
| Which kind of empty is this? | `references/empty-state-types.md` |
| How much should this surface contain? | `references/archetype-density.md` |
| What counts as useful content vs filler? | `references/useful-density.md` |
| New user, empty workspace | `references/first-run.md` |
| No search results, filters hide everything | `references/search-and-filter-empty.md` |
| No access, unavailable, archived | `references/permissions-and-unavailable.md` |
| Loading vs empty | `references/skeleton-vs-empty.md` |
| Writing the words | `references/empty-state-copy.md` |

### 3. Design
Use the meaningful-empty-state structure (`references/_shared/meaningful-empty-state.md`):

```
[one-sentence explanation specific to the cause]
[real context, if any: ready item, recent item, template]
[primary next action]   [secondary action, optional]
[optional: one proportionate visual]
```

### 4. Check for filler
Run every element through the fake-density test (`references/_shared/fake-density.md`): would
the user miss it; does it change what they do next; is it true and specific; would it survive in
a full account?

### 5. Verify transitions
Check the moment the state changes: after creating the first item, does the layout switch cleanly
to the one-item and few-item states? Check the empty state at mobile and short viewports; the
action must be visible.

## Execution rules

- Filtered-empty must never look like never-had-any. Name the filter and offer to clear it.
- Keep the primary action in the first viewport at all checked sizes.
- Illustrations are decorative unless they explain; mark them hidden from assistive technology.
- Do not show onboarding checklists that never retire.
- Respect privacy: recent items on shared screens (classroom projectors, kiosks) may need hiding.
- Keep the surrounding navigation and identity; an empty state is still inside the product.

## Failure modes

- "No data" with no cause and no action.
- A giant illustration pushing the action below the fold.
- Tip cards, stats, and promotions added to "fill" the page.
- "Create your first item!" when items exist but are filtered out.
- A layout designed for 30 items that looks broken with one (a single stretched card).
- Skeletons shimmering forever where the data is actually empty.

## Completion criteria

- The type of empty is identified and the copy names its cause.
- One primary next action is visible in the first viewport at primary and small sizes.
- Real context is surfaced where it exists; nothing is fabricated.
- One-item and few-item states were considered.
- The filler test was applied and failing elements removed.

## References

- `references/empty-state-types.md`
- `references/archetype-density.md`
- `references/useful-density.md`
- `references/first-run.md`
- `references/search-and-filter-empty.md`
- `references/permissions-and-unavailable.md`
- `references/skeleton-vs-empty.md`
- `references/empty-state-copy.md`
- `references/_shared/` — shared patterns and worked examples (`empty-state-overcorrection.md`,
  `sparse-operational-home.md`)
