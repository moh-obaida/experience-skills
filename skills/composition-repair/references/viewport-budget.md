# Viewport Budget

The first viewport is the most valuable space on any surface. Treat it as a budget: every
pixel is spent on something, and "nothing" is also a spending decision.

## What the first viewport must answer

At the product's primary size and at its smallest supported height:

1. **Where am I?** (product and surface identity, in proportion)
2. **What is this for?** (P0 content or task)
3. **What do I do?** (the primary action, visible without scrolling on task surfaces)

Marketing and storytelling pages may defer the action slightly below the fold if the first
viewport does real persuasive work. Task surfaces (sign-in, checkout, host console, editor)
should not.

## Budget categories

| Spend | Examples | Typical share at 1440×900 |
|---|---|---|
| Chrome | Headers, nav, toolbars, banners | 5–15% (more is suspicious) |
| P0 | The task, key content, the focal element | Largest single share |
| P1 | The next action, supporting content | Moderate |
| Environment | Background treatment, imagery, pattern that establishes place | Varies by archetype |
| Framing space | Space that separates and directs | Deliberate, proportioned |
| Dead space | Space with no role | Aim for none |

The difference between framing space and dead space is whether you can state its job.

## Measuring coverage

`scripts/measure-layout.mjs` reports **content coverage**: the share of the first viewport
occupied by content elements (text, media, controls), rasterized on a 16px grid. It excludes
backgrounds and empty containers.

Rough interpretation at desktop sizes (not rules):

| Coverage | Often means | But check |
|---|---|---|
| < 15% | Likely dead space, lonely centered cluster | Is there an environment treatment doing real work? Is this a deliberate focus page with a strong backdrop? |
| 15–35% | Focused or editorial; can be right | Does space frame the focal point, or surround it by default? |
| 35–70% | Typical for operational and content surfaces | Is hierarchy clear, or is everything the same weight? |
| > 70% | Dense; right for data-heavy and creation | Is it scannable? Is grouping legible? |

The script also reports whether a large background image, gradient, or media element exists
("environment treatment"). Low coverage *with* a strong environment can be deliberate. Low
coverage *without* one is usually dead space.

## Short viewports

Common real heights are smaller than designers assume: 1366×768 laptops lose ~110px to browser
chrome; landscape phones have ~350px; split-screen halves the width.

- Check that the primary action is visible at the smallest supported height.
- Sticky headers and footers are paid for at every scroll position. See `fixed-sticky.md`.
- Hero sections sized with `100vh` push everything else below the fold on short screens.

## Repair moves

When the first viewport is under-used:

1. **Promote P0.** Scale the task or key content to occupy its budget.
2. **Bring P1 up.** Recent items, the next step, supporting context.
3. **Give the environment a job.** A product-derived backdrop, imagery, or pattern.
4. **Shift from centered to composed.** Offset, asymmetric split, or grid placement that
   relates content to the viewport edges. See `alignment.md`.

When over-spent:

1. **Cut chrome.** Collapse secondary navigation, shrink or remove banners.
2. **Demote P3/P4.** Move reference content and rare actions down or into menus.
3. **Shorten the hero.** Especially `min-height: 100vh` on task surfaces.
