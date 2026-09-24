---
name: composition-repair
description: "Repair the composition of digital surfaces: focal point, hierarchy, viewport budget, dead space versus useful density, alignment versus composition, grid and flex proportions, typography as geometry, fixed and sticky chrome, scroll ownership, overflow, collisions, short viewports, content extremes, and RTL. Use when a page, screen, or view looks empty, cramped, unbalanced, generic-centered, or broken at some size; when whitespace is being called premium without evidence; or when a layout was changed and must be verified in the rendered result. Includes optional browser measurement scripts."
license: MIT
compatibility: "Measurement scripts need Node.js 18+ and Playwright (or playwright-core with an installed Chrome). All guidance works without them."
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Composition Repair

Composition is how a surface uses its space to make one thing matter most, group what belongs
together, and lead the eye to the next action. It is not the same as alignment, and valid CSS
does not guarantee it.

> CSS validity is not composition quality. Alignment is not composition.

## Use this when

- A screen looks empty, blank, or "clean" in a way that feels unfinished.
- A screen looks cramped, noisy, or has no clear focal point.
- Everything is centered in a column with large dead areas around it.
- Content overflows, collides, clips, or wraps badly at some size.
- Sticky headers, footers, or toolbars eat a short viewport.
- A layout was changed and needs verification in the rendered result.
- A reviewer (human or agent) called a sparse page "premium" or "spacious" without evidence.

## Do not use this when

- The problem is identity ("looks generic") with a sound structure. Use visual-identity.
- The surface is genuinely empty data and needs an empty-state design. Use empty-state-design
  first, then return here if the composition still fails.
- The task is only to check many sizes for regressions. Use responsive-validation.

## Core principles

1. **Rank before you arrange.** Decide P0 (now), P1 (next), P2 (context), P3 (reference). The
   layout expresses that ranking. See `references/_shared/information-priority.md`.
2. **One focal point per surface.** If several things shout, nothing is heard.
3. **Space has a job.** Whitespace frames, separates, or directs. Space with no job is dead.
4. **Relate content to the viewport.** A 400px cluster in the center of a 1440px screen is a
   decision; make it deliberately, with the environment doing work around it.
5. **Density follows archetype.** A sign-in page and a monitoring console should not have the
   same density. See `references/_shared/page-archetypes.md`.
6. **Group by proximity first, containers last.** Borders and cards are the heaviest grouping
   tools; use spacing and alignment before reaching for boxes.
7. **Typography is geometry.** Headline size, measure, and line breaks shape the layout as much
   as boxes do.
8. **Render, then judge.** Measure and look at the real result at more than one size.

## Workflow

### 1. Establish context
- Archetype of the surface (FOCUSED, OPERATIONAL, EXPERIENTIAL, CONTENT, DATA-HEAVY,
  TRANSACTIONAL, DISCOVERY, CREATION, LIVE CONTROL).
- Primary viewport(s) of the real audience (classroom projector? phone? 1366×768 office laptop?).
- Mode: REVIEW (report only) or REPAIR (change and verify).

### 2. Observe the rendered surface
If a browser is available, render the page and, when useful, run the scripts:

```bash
node scripts/measure-layout.mjs <url-or-file> --size 1440x900
node scripts/detect-overflow.mjs <url-or-file> --sizes 1440x900,390x844
node scripts/detect-collisions.mjs <url-or-file> --size 390x844
```

Scripts report facts (coverage, content box, focal candidates, chrome share, overflow culprits,
overlaps). They do not judge. Interpret them with the references. Details and limitations:
`references/browser-measurement.md`.

If no browser is available, read the layout code and reason about sizes. Mark conclusions as
source-level and list the checks to run.

### 3. Diagnose with shared codes
Name problems with the visual problem taxonomy (`references/_shared/visual-problems.md`):
V1 NO FOCAL POINT, V3 DEAD SPACE, V6 ALIGNED NOT COMPOSED, V9 CONTAINER SOUP, R1 OVERFLOW,
R5 STICKY OBSTRUCTION, and so on. Rank by user impact.

### 4. Choose references
Load only what the diagnosis needs:

| Diagnosis | Load |
|---|---|
| Dead space, first viewport feels empty or wasted | `references/viewport-budget.md`, `references/whitespace.md` |
| No or wrong focal point, flat hierarchy | `references/hierarchy.md` |
| Too sparse or too dense for the archetype | `references/density.md` |
| Centered/aligned but not composed | `references/alignment.md` |
| Awkward proportions, columns, card grids | `references/grid-flex.md` |
| Headlines, measure, wraps shaping the page badly | `references/typography-as-geometry.md` |
| Nested scrolling, unclear scroll region | `references/scroll-ownership.md` |
| Sticky/fixed elements eating space or covering content | `references/fixed-sticky.md` |
| Long names, empty data, huge numbers, translations | `references/content-stress.md` |
| RTL languages | `references/rtl-composition.md` |
| Recognizing common broken layouts quickly | `references/failure-patterns.md` |
| Using or interpreting the scripts | `references/browser-measurement.md` |

### 5. Repair (REPAIR mode)
Work structure-first:

1. **Rank content** and remove or demote what does not earn its place.
2. **Set the focal point**: size, weight, position, and space for P0.
3. **Budget the viewport**: decide what must be visible in the first viewport at the primary
   size and at the smallest supported height.
4. **Group** with spacing and alignment; collapse container soup.
5. **Proportion** columns and regions deliberately (see grid-flex).
6. **Give the environment a role** if the archetype calls for it (background, imagery, pattern,
   color field). Coordinate with visual-identity if installed.
7. **Fix rendering defects**: overflow, collisions, clipping, sticky obstruction.

Do not solve emptiness with filler. Do not solve crowding by deleting useful information;
reorganize it.

### 6. Verify
Render again. Check at minimum:

- Primary size and one small width (for example 390×844 or 360×800)
- One short height (for example 1366×768 or 1280×720)
- A sparse and a dense data state, if data-driven
- RTL, if the product supports it

Re-run the scripts if you used them before; compare numbers.

### 7. Critique
Ask: Is it composed or just re-aligned? Did I add filler? Is the focal point the most
important thing? Would the page still hold with messy real content?

## Execution rules

- Prefer the product's existing grid, spacing scale, and components.
- Avoid magic numbers; if you must introduce a value, make it a token or explain it.
- Fixed heights on content containers are suspicious; they clip real content.
- Never hide overflow to "fix" it without checking what gets hidden.
- Keep DOM order aligned with visual order for keyboard and screen reader users.
- Preserve or improve accessibility: headings in order, landmarks, focus visibility, reflow at
  320 CSS px width.

## Failure modes

- **Re-centering harder:** making the lonely card bigger or adding a shadow. Still aligned,
  not composed.
- **Filler:** stats, tips, and illustrations added to make the page look full.
- **Container reflex:** wrapping each group in a card to "organize" it.
- **Desktop-only repair:** fixing 1440px and breaking 360px.
- **Code-only verification:** declaring success from CSS without rendering.
- **Uniform spacing:** the same gap everywhere, which erases grouping.

## Completion criteria

- The surface has one clear focal point matching P0.
- The first viewport at the primary size shows what the user needs first; dead space is gone
  or deliberately framed by a working environment.
- No overflow, collisions, or clipping at checked sizes (measured when possible).
- Grouping is legible without relying on containers for everything.
- Evidence levels are stated; unverified sizes and states are listed.

## References

- `references/viewport-budget.md` — what belongs in the first viewport; coverage numbers
- `references/hierarchy.md` — focal points, ranking, emphasis budget
- `references/density.md` — density by archetype; sparse vs cramped
- `references/whitespace.md` — working space vs dead space
- `references/alignment.md` — alignment vs composition; breaking the center
- `references/grid-flex.md` — proportions, columns, card grids, flex pitfalls
- `references/typography-as-geometry.md` — type as layout; measure; wraps
- `references/scroll-ownership.md` — which region scrolls; nested scroll
- `references/fixed-sticky.md` — chrome budget; short viewports
- `references/content-stress.md` — extremes of real content
- `references/browser-measurement.md` — scripts, what they measure, limits
- `references/rtl-composition.md` — mirroring and bidirectional layout
- `references/failure-patterns.md` — a field guide to broken compositions
- `references/_shared/` — generated shared modules, including worked examples
  (`join-code-page.md`, `sparse-operational-home.md`, `editorial-not-cards.md`)
