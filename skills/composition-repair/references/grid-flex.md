# Grid and Flex Proportions

Layout code decides proportions. Default values often decide them badly.

## Deliberate ratios

When splitting space, choose the ratio from content priority:

| Split | Use when |
|---|---|
| 1 : 1 | Genuinely equal content (comparison, before/after) |
| 2 : 1 / 3 : 2 | Primary content with a supporting side panel |
| 3 : 1 / 4 : 1 | Main canvas with a narrow tool or navigation column |
| Fixed + fluid | Navigation or inspector at a fixed width, content fluid |

Equal columns are the default in most frameworks; they are rarely the right answer for
unequal content.

## Flex pitfalls

- **`flex: 1` everywhere** makes every child equal regardless of content.
- **Missing `min-width: 0`** on flex children lets long words or code blocks force overflow.
- **`flex-wrap` without gap planning** creates uneven last rows.
- **`justify-content: space-between`** on two items flings them to opposite edges on wide
  screens, creating a dead middle.
- **Centering with `margin: auto`** on a single child of a full-height container is the
  centered-card syndrome in one line.

## Grid pitfalls

- **`repeat(auto-fit, minmax(…, 1fr))`** stretches a single item across the whole row when data
  is sparse. Consider `auto-fill` or a max width for items.
- **Fixed column counts** break on small screens; use content-driven minimums.
- **Implicit rows** with fixed heights clip content.
- **Overlapping grid areas** used for layering need explicit z-order and must not trap focus.

## Card grids

Card grids are appropriate when items are independent, comparable objects (products,
projects, games). Otherwise, consider a list or table.

For card grids:

- Decide the minimum and maximum card width from content, not from the screen.
- Handle the sparse case: one or two cards in a grid built for twelve should not stretch to
  full width or look abandoned.
- Handle uneven content heights: align internal elements (titles, metadata, actions) across
  cards in a row.
- Keep the primary action in a consistent position on every card.

## Ultra-wide screens

Set a maximum content width, but compose what happens outside it: background treatment,
side panels, or a larger grid, not empty gray gutters.

## Responsive proportion changes

At narrower widths, ratios should change, not just shrink. A 2:1 split becomes stacked
(P0 first). A 3-column card grid becomes 2, then 1, with card internals adjusting.
