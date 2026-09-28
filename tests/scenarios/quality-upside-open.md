# Scenario: Improve a Working Product with Open Design Space

## Scenario
An invented field ecology tool (`field-notes.html`) lets a coastal restoration team review today's
observations, search and filter records, and inspect a survey site. Its facts, links, filter behavior,
and recording entry point work. The neutral type and color, repeated statistic panels, and nearly
identical white-box grouping feel like a generic admin template; the three routes lack a distinct
visual hierarchy. Requirements lock the observation facts and existing actions but leave identity,
typography, route composition, and mobile workflow open. Invented fixture.

## Prompt
The field log works, but it still feels like generic admin software. Finish `field-notes.html` with a
materially stronger product-specific visual system and route hierarchy. Keep its observation facts,
search/filter behavior, and existing routes and actions.

Before editing, render all views at desktop and phone sizes with
`node .benchmark/render.mjs before field-notes.html --views overview,observations,station`, then
inspect the six PNG files listed by the command. After editing, run the same command with `after` and
inspect all six resulting PNGs. Finish with a `## Before/after comparison` section that compares the
same routes and sizes and names any remaining issue.

## Current problem
There is no technical blocker, so a defect-only review could stop too early. The product's coastal
survey content and repeated observation-to-site workflow are available to inform stronger visual
expression and page compositions. A blanket redesign could also invent behavior or hide information.

## Expected skills
- experience-architect
- visual-identity
- composition-repair

## Key principles expected
- Treat existing content, links, filtering, route meaning, and record facts as product truth. Visual
  direction, hierarchy, and composition are open; the working flow is a strength to preserve.
- Assess upside as well as defects. If the current generic hierarchy leaves a clear quality gap,
  derive a product-rooted expression and visibly stronger compositions for overview, observation
  search, and station context; do not settle for a color or spacing tweak.
- Use the content and field-survey environment to inform identity. A different composition may earn
  each route; cross-route coherence does not require identical layouts.
- Preserve search, site filtering, route links, readable observation metadata, current actions, and
  responsive access. Do not invent policy, data, photos, or product features.
- Compare the rendered baseline and result at desktop and phone sizes. Continue if the identified
  hierarchy or route sameness remains; stop when further changes would be speculative or harmful.

## Unacceptable recommendations
- Stopping because navigation and filtering work.
- Replacing the interface with a familiar design-system theme and the same card layout.
- Adding decorative ecology facts, fake metrics, or a map interaction unsupported by the fixture.
- Changing observation content or breaking the search/filter behavior to make the result look better.
- Making every route identical to maintain consistency, or making them unrelated to demonstrate variety.
- Claiming quality improved without before-and-after rendered evidence.
