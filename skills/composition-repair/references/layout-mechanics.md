# Layout Mechanics: Grids, Scroll, Sticky Chrome

Load when proportions, card grids, nested scrolling, or fixed/sticky elements are the problem.

Sections: Grid and Flex Proportions · Scroll Ownership · Fixed and Sticky Chrome

## Grid and Flex Proportions

Layout code decides proportions. Default values often decide them badly.

### Deliberate ratios

When splitting space, choose the ratio from content priority:

| Split | Use when |
|---|---|
| 1 : 1 | Genuinely equal content (comparison, before/after) |
| 2 : 1 / 3 : 2 | Primary content with a supporting side panel |
| 3 : 1 / 4 : 1 | Main canvas with a narrow tool or navigation column |
| Fixed + fluid | Navigation or inspector at a fixed width, content fluid |

Equal columns are the default in most frameworks; they are rarely the right answer for
unequal content.

### Flex pitfalls

- **`flex: 1` everywhere** makes every child equal regardless of content.
- **Missing `min-width: 0`** on flex children lets long words or code blocks force overflow.
- **`flex-wrap` without gap planning** creates uneven last rows.
- **`justify-content: space-between`** on two items flings them to opposite edges on wide
  screens, creating a dead middle.
- **Centering with `margin: auto`** on a single child of a full-height container is the
  centered-card syndrome in one line.

### Grid pitfalls

- **`repeat(auto-fit, minmax(…, 1fr))`** stretches a single item across the whole row when data
  is sparse. Consider `auto-fill` or a max width for items.
- **Fixed column counts** break on small screens; use content-driven minimums.
- **Implicit rows** with fixed heights clip content.
- **Overlapping grid areas** used for layering need explicit z-order and must not trap focus.

### Card grids

Card grids are appropriate when items are independent, comparable objects (products,
projects, games). Otherwise, consider a list or table.

For card grids:

- Decide the minimum and maximum card width from content, not from the screen.
- Handle the sparse case: one or two cards in a grid built for twelve should not stretch to
  full width or look abandoned.
- Handle uneven content heights: align internal elements (titles, metadata, actions) across
  cards in a row.
- Keep the primary action in a consistent position on every card.

### Ultra-wide screens

Set a maximum content width, but compose what happens outside it: background treatment,
side panels, or a larger grid, not empty gray gutters.

### Responsive proportion changes

At narrower widths, ratios should change, not just shrink. A 2:1 split becomes stacked
(P0 first). A 3-column card grid becomes 2, then 1, with card internals adjusting.

## Scroll Ownership

At any moment, one region should clearly own scrolling. When several regions scroll, users
lose their place, trackpads scroll the wrong area, and content becomes unreachable.

### Healthy patterns

- **Document scroll:** the whole page scrolls; headers may stick. Best default for content
  and most web surfaces.
- **App shell:** fixed navigation and toolbars; one main content pane scrolls. Common in
  applications. The main pane's scroll must be obvious and reach all content.
- **Split panes:** list and detail each scroll independently. Acceptable when each pane is
  clearly bounded and the split is persistent.

### Unhealthy patterns

- **Nested scroll inside scroll:** a scrolling card inside a scrolling page. Wheel events get
  captured unexpectedly; on touch, users get stuck.
- **Hidden scroll:** a region with `overflow: auto` whose scrollbar is hidden or which looks
  like it has no more content.
- **Scroll-jacked sections:** custom scroll behavior that breaks expected speed or keyboard
  scrolling.
- **Viewport-height traps:** `height: 100vh` containers that clip content on short screens,
  mobile browser chrome, or when the keyboard opens.
- **Modal scroll bleed:** background page scrolls behind an open modal.

### Diagnosing

`scripts/measure-layout.mjs` lists regions that currently scroll (content exceeds their box
with overflow set to auto/scroll). More than one or two scroll regions on a simple surface is
a signal to inspect.

Manually check:

- Scroll with a mouse wheel over each region, and with the keyboard (Page Down, Space).
- On touch, scroll starting on each region.
- Resize to a short height: does anything become unreachable?

### Repair moves

- Prefer letting the document scroll; remove fixed heights on content containers.
- If panes must scroll independently, give each a clear boundary and ensure the page itself
  does not also scroll.
- Use `overscroll-behavior: contain` on legitimate inner scroll regions (drawers, chat logs)
  to prevent scroll chaining.
- Use dynamic viewport units (`dvh`, `svh`) rather than `vh` for full-height mobile layouts.
- Lock background scroll when a modal is open, and restore position when it closes.

## Fixed and Sticky Chrome

Every fixed or sticky element is paid for at every scroll position. On short viewports the
cost multiplies.

### The chrome budget

Measure the horizontal chrome (full-width fixed/sticky headers, footers, toolbars, banners)
as a share of viewport height. `scripts/measure-layout.mjs` reports it.

| Share of viewport height | Interpretation |
|---|---|
| < 12% | Typical and usually fine |
| 12–20% | Check short viewports and mobile |
| > 20% | Likely obstructing content; justify or reduce |

Common offenders: a sticky header + sticky sub-navigation + cookie banner + sticky "Buy"
bar on a 700px-tall laptop viewport.

### Rules of thumb

- Stick only what users need constantly (primary navigation in apps, a buy/submit bar on long
  transactional pages, the current-state header in live control).
- Collapse headers on scroll down, restore on scroll up, when the header is tall.
- Never stack more than two sticky layers without a strong reason.
- On mobile landscape, consider un-sticking everything.

### Obstruction checks

- Anchored links (`#section`) should not land underneath a sticky header; use
  `scroll-margin-top`.
- Focused elements must not be hidden behind sticky chrome when tabbing (WCAG 2.2 "Focus Not
  Obscured"). Use `scroll-padding` on the scroll container.
- Toasts and floating buttons must not cover primary actions or form fields.
- Bottom-fixed bars must account for mobile safe areas and the on-screen keyboard.

### Fixed elements in composition

Fixed chrome is part of the composition; include it in the viewport budget. A large fixed
header on a FOCUSED page shrinks the space available for the task and its environment.
