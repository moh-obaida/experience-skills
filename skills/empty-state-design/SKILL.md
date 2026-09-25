---
name: empty-state-design
description: "Use this skill whenever a list, dashboard, library, inbox, search, or home screen has little or no content; when a first-run or new-account view is designed; when someone asks to make a sparse page 'less empty' or it feels unfinished; or when a page has been filled with illustrations, fake stats, tips, or marketing. Designs zero-item, one-item, first-run, empty-search, filtered-empty, no-permission, no-history, incomplete-setup, unavailable, archived, and skeleton-versus-empty states, and distinguishes intentional focus from dead space and useful density from filler, calibrated by page archetype."
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

<!-- core-brief:start · GENERATED FROM shared/philosophy/core-brief.md by npm run sync. Do not edit here. -->
**Core rules in brief.** These apply even before you open `references/_shared/experience-core.md`.
Read that file (the full rules and evidence levels) before a full review, repair, or build.

- **Verdict before adjectives.** Do not write "clean," "modern," "great idea," or "looks good" until
  an observation earns it. The user's enthusiasm is not evidence; test the proposal against the goal.
- **Evidence levels on findings.** E1 rendered, E2 measured, E3 source, E4 documented,
  E5 screenshot, E6 assumed. If files, a browser, or a terminal are available, look or measure before
  claiming. Otherwise, name the checks you did not run.
- **Composition is not alignment.** Empty space needs a stated job, and sparseness is never fixed
  with filler (stats, tips, promos, decoration).
- **Personality belongs in the environment, not in standard controls.** A control changes only if
  the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Hand off when another experience skill fits better.** If part of the problem belongs to one
  (composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty
  states, slop, critical review) and it is installed, invoke it rather than improvising its method.
<!-- core-brief:end -->

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
