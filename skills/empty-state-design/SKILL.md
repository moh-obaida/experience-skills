---
name: empty-state-design
description: "Design low-content states that are useful rather than blank or stuffed: zero items, one item, first-run, empty search, filtered-empty, no permission, no history, incomplete setup, unavailable, archived, and skeleton-versus-empty. Distinguishes intentional focus from dead space and useful density from filler, calibrated by page archetype. Use when a list, dashboard, library, inbox, search, or home screen has little or no content; when a sparse page feels unfinished; or when someone has filled an empty page with illustrations, fake stats, tips, or marketing."
license: MIT
metadata:
  version: "0.2.0"
  collection: experience-skills
---

# Empty State Design

Every product starts empty, and many surfaces spend much of their life sparse. Two failures
dominate: **blank** ("No items." and nothing else) and **stuffed** (a giant illustration, tips,
fake stats, a banner, a quote).

## Start here

1. Read `references/_shared/experience-core.md`.
2. Identify which kind of empty this is (`references/empty-state-types.md`) before designing anything.

## Use this when

- A list, library, dashboard, inbox, feed, or search shows zero or very few items.
- A first-run experience lands on an empty workspace.
- A filtered or searched view returns nothing.
- A user lacks permission, or a feature is unavailable to them.
- Setup is incomplete and the surface cannot show real content yet.
- A sparse page feels unfinished, or has been filled with filler.

## Do not use this when

- The page has plenty of content but a poor layout → composition-repair.
- The state is really loading or an error → state-design (see the skeleton-vs-empty section of
  `references/empty-state-types.md` for the boundary).

## Checkpoints

1. **Before writing copy or choosing an action:** which type of empty is it (never-had-any, first run,
   one item, cleared, filtered, search, no permission, unavailable, incomplete setup, no history,
   archived, error)? Unknown → find out from the data layer; do not guess from an empty array.
2. **If filters or a search are active:** the copy names them and the action clears or broadens them.
   First-use copy here is a defect.
3. **Before adding any element:** run the filler test in `references/_shared/fake-density.md`. Fails
   (stats, tips, promos, decorative illustration, duplicate navigation) → do not add it
   (anchor `references/_shared/empty-state-overcorrection.md`).
4. **Does real context exist** (a ready item, a recent item, a draft, a template)? Yes → surface it
   before any generic action (`references/density-and-filler.md`).
5. **Is there exactly one primary next action, visible in the first viewport at phone and short
   laptop sizes?** No → fix before anything else.
6. **After the first item is created:** does the layout move cleanly to the one-item and few-item
   states? Check it.
7. **Set density from the product archetype** (`references/_shared/product-archetypes.md`): a focused task may be spare; an operational surface needs real state; an experiential one keeps its world.

## Workflow

1. **Classify** the empty type and the archetype. For operational homes that feel empty, see anchor
   `references/_shared/sparse-operational-home.md`.
2. **Find real context:** items the user owns elsewhere, drafts, recent work, templates, teammates'
   content.
3. **Decide density** for the archetype (`references/density-and-filler.md`).
4. **Design** with the meaningful-empty-state structure (`references/_shared/meaningful-empty-state.md`):
   ```
   [one sentence specific to the cause]
   [real context, if any]
   [primary next action]   [optional secondary]
   [optional: one proportionate visual]
   ```
   First-run specifics: `references/first-run.md`. Words: `references/empty-state-copy.md`.
5. **Check** (checkpoints 3, 5, 6) at primary and small sizes.

## Execution rules

- Illustrations are decorative unless they explain; hide them from assistive technology.
- Onboarding checklists retire themselves.
- Recent items on shared screens (projectors, kiosks) may need hiding.
- An empty state stays inside the product's navigation and identity.

## Precedent

Real empty, loading, and error states (Spotify, Grafana, GOV.UK, and first-paint failures) are in
`references/_shared/states-loading-empty-error.md`.

## Failure modes

- "No data" with no cause or action; illustration pushing the action below the fold; filler;
  first-use copy on a filtered view; layouts that break with one item; skeletons shimmering over
  empty data.

## Completion criteria

- The empty type is identified and the copy names its cause.
- One primary next action is visible in the first viewport at primary and small sizes.
- Real context is surfaced where it exists; nothing is fabricated.
- One-item and few-item states were considered.
- The filler test was applied.

## References

- `references/empty-state-types.md` — types, search/filter-empty, permissions, skeleton vs empty
- `references/density-and-filler.md` — density by archetype, useful density vs filler
- `references/first-run.md` — first-run experiences
- `references/empty-state-copy.md` — wording
- `references/_shared/` — generated copies: `experience-core.md`, `fake-density.md`,
  `meaningful-empty-state.md`, `empty-state-overcorrection.md`, `sparse-operational-home.md`,
  `product-archetypes.md`, `states-loading-empty-error.md`
