---
name: composition-repair
description: "Repair the composition of digital surfaces: focal point, hierarchy, viewport budget, dead space versus useful density, alignment versus composition, grid and flex proportions, typography as geometry, fixed and sticky chrome, scroll ownership, overflow, collisions, short viewports, content extremes, and RTL. Use when a page, screen, or view looks empty, cramped, unbalanced, generic-centered, or broken at some size; when whitespace is being called premium without evidence; or when a layout was changed and must be verified in the rendered result. Includes optional browser measurement scripts."
license: MIT
compatibility: "Measurement scripts need Node.js 18+ and Playwright (or playwright-core with an installed Chrome). All guidance works without them."
metadata:
  version: "0.2.0"
  collection: experience-skills
---

# Composition Repair

Composition is how a surface uses its space to make one thing matter most, group what belongs
together, and lead the eye to the next action. It is not alignment, and valid CSS does not
guarantee it.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Name the surface's archetype using `references/_shared/page-archetypes.md`. It sets how dense
   and how expressive the surface should be.

## Use this when

- A screen looks empty, blank, or "clean" in a way that feels unfinished.
- A screen looks cramped or noisy, or has no clear focal point.
- Content sits in a centered column with large dead areas around it.
- Content overflows, collides, clips, or wraps badly at some size.
- Sticky headers, footers, or toolbars eat a short viewport.
- A layout changed and must be verified in the rendered result.
- Someone called a sparse page "premium" or "spacious" without evidence.

## Do not use this when

- The structure is sound and the problem is identity ("generic") → visual-identity.
- The data is genuinely empty → empty-state-design first.
- The task is a regression sweep across many sizes → responsive-validation.

## Checkpoints

1. **Before judging:** render it. With a browser, run `scripts/measure-layout.mjs` at the audience's
   primary size. Without one, mark every finding E3 and list the sizes to check.
2. **Coverage below ~15% with no environment treatment** (script flag or your eye): treat it as dead
   space (V3) or aligned-not-composed (V6). Do not describe it as minimal or premium.
3. **Before adding any element to a sparse surface:** is it real state, a real next action, or a
   real piece of content? If it is a stat, tip, promo, decorative card, or illustration added to fill
   space → do not add it (`references/_shared/fake-density.md`).
4. **FOCUSED surfaces** (sign-in, join, verify): repair by composing the environment and scaling the
   task region, never by customizing the control. Pattern: `references/_shared/branded-environment-simple-form.md`;
   anchor example: `references/_shared/join-code-page.md`.
5. **OPERATIONAL surfaces that feel empty:** surface continue / ready / needs-attention items before
   anything else. Anchor example: `references/_shared/sparse-operational-home.md`.
6. **Before adding a container** (card, panel, border): can spacing or a heading group this instead?
   If yes, do not add the container. For prose, see `references/_shared/editorial-not-cards.md`.
7. **Before adding a visual treatment:** state its job (`references/_shared/design-vs-decoration.md`).
   No job → do not add it.
8. **Before saying "fixed":** re-render at the primary size, one phone width, and one short height;
   re-run `scripts/detect-overflow.mjs` and `scripts/detect-collisions.mjs` if you used them before.
9. **Largest dead region over ~30% of the first viewport** (`scripts/measure-layout.mjs` reports it) with no environment treatment: name its job or remove it. "It looks premium" is not a job.
10. **Before restructuring a surface:** pick a composition from `references/_shared/compositions-index.md` by archetype and P0 content, load only its family file, and name it in your plan. Do not invent a layout from habit.
11. **Before citing another product's layout as justification:** find the matching entry in the precedent modules and state which of its "Right when" conditions your surface shares. None shared → it argues against you.

## Workflow

1. **Context.** Archetype, audience sizes (projector? phone? 1366×768 office laptop?), mode.
2. **Observe.** Render and, when useful, measure:
   ```bash
   node scripts/measure-layout.mjs <url-or-file> --size 1440x900
   node scripts/detect-overflow.mjs <url-or-file> --sizes 1440x900,390x844
   node scripts/detect-collisions.mjs <url-or-file> --size 390x844
   ```
   Scripts report facts. `references/browser-measurement.md` explains outputs, requirements, limits.
3. **Rank content** P0–P4 (`references/_shared/information-priority.md`).
4. **Diagnose** with codes from `references/_shared/visual-problems.md`; rank by user impact.
5. **Load the reference for the diagnosis:**

   | Diagnosis | Load |
   |---|---|
   | Dead space, wasted first viewport, wrong density | `references/viewport-and-space.md` |
   | No or wrong focal point, flat hierarchy, centered-not-composed, awkward type shapes | `references/hierarchy-and-alignment.md` |
   | Proportions, card grids, nested scroll, sticky chrome | `references/layout-mechanics.md` |
   | Long or missing content, translations, RTL | `references/content-stress-and-rtl.md` |
   | Quick recognition of a known broken layout | `references/failure-patterns.md` |

6. **Repair** (REPAIR mode), structure first: rank → focal point → viewport budget → grouping →
   proportions → environment role (coordinate with visual-identity) → rendering defects.
   If the result feels emptier after removing filler, check `references/_shared/fake-minimalism.md`
   before adding anything back.
7. **Verify** (checkpoint 8) including a sparse and a dense data state and RTL if supported.
8. **Critique:** composed or merely re-aligned? Anything added to fill space? Would it hold with
   messy real content?

## Execution rules

- Use the product's existing grid, spacing scale, and components; new values become tokens.
- Fixed heights on content containers are suspicious; they clip real content.
- Never hide overflow without finding what overflows.
- Keep DOM order aligned with visual order; headings in order; reflow at 320 CSS px.

## Precedent and design intelligence

| When | Load |
|---|---|
| Choosing or changing a page structure | `references/_shared/compositions-index.md`, then one family: `compositions-focus.md`, `compositions-flows.md`, `compositions-narrative.md`, `compositions-content.md`, `compositions-discovery.md`, `compositions-workspaces.md`, `compositions-operational.md`, or `compositions-mobile.md` (all in `references/_shared/`) |
| Deciding density, spatial model, or navigation | `references/_shared/spatial-density-navigation.md` |
| Type is shaping the page (scale, measure, wraps, numerals, RTL scripts) | `references/_shared/typography.md` |
| Dashboards and charts | `references/_shared/data-visualization.md` |
| Arguing about space vs emptiness | `references/_shared/whitespace-and-dead-space.md` (real products, observed) |
| Dense operational layouts | `references/_shared/dense-operational-layouts.md` |
| Editorial and typographic composition | `references/_shared/editorial-and-typography.md` |
| Catalogs, stores, marketplaces | `references/_shared/commerce-and-discovery.md` |
| Phones, tablets, landscape, keyboard-open, huge screens, zoom | `references/device-and-viewport-edges.md` |

Adapted third-party material in the composition files is credited in `references/_shared/third-party-notices.md`.

## Failure modes

- Re-centering harder: a bigger lonely card with a shadow.
- Filler added to look full.
- Container reflex.
- Fixing 1440px and breaking 360px.
- Declaring success from CSS.

## Completion criteria

- One clear focal point matching P0.
- The first viewport shows what the user needs first; remaining space has a stated job.
- No overflow, collisions, or clipping at checked sizes (measured where possible).
- Grouping works without boxing everything.
- Evidence levels stated; unverified sizes and states listed.

## References

- `references/viewport-and-space.md` — viewport budget, whitespace, density
- `references/hierarchy-and-alignment.md` — focal point, emphasis, alignment vs composition, type geometry
- `references/layout-mechanics.md` — grid/flex proportions, scroll ownership, fixed and sticky chrome
- `references/content-stress-and-rtl.md` — extreme content, RTL mirroring
- `references/browser-measurement.md` — the scripts and their limits
- `references/failure-patterns.md` — field guide to broken compositions
- `references/device-and-viewport-edges.md` — phones, tablets, landscape, keyboard-open, huge displays, zoom
- `references/_shared/` — generated copies: `experience-core.md`, `page-archetypes.md`,
  `information-priority.md`, `visual-problems.md`, `design-vs-decoration.md`, `fake-density.md`,
  `fake-minimalism.md`, `branded-environment-simple-form.md`, `join-code-page.md`,
  `sparse-operational-home.md`, `editorial-not-cards.md`, `compositions-index.md`,
  `compositions-focus.md`, `compositions-flows.md`, `compositions-narrative.md`,
  `compositions-content.md`, `compositions-discovery.md`, `compositions-workspaces.md`,
  `compositions-operational.md`, `compositions-mobile.md`, `spatial-density-navigation.md`,
  `typography.md`, `data-visualization.md`, `whitespace-and-dead-space.md`,
  `dense-operational-layouts.md`, `editorial-and-typography.md`, `commerce-and-discovery.md`,
  `third-party-notices.md`
