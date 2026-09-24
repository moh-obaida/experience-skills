# Scroll Ownership

At any moment, one region should clearly own scrolling. When several regions scroll, users
lose their place, trackpads scroll the wrong area, and content becomes unreachable.

## Healthy patterns

- **Document scroll:** the whole page scrolls; headers may stick. Best default for content
  and most web surfaces.
- **App shell:** fixed navigation and toolbars; one main content pane scrolls. Common in
  applications. The main pane's scroll must be obvious and reach all content.
- **Split panes:** list and detail each scroll independently. Acceptable when each pane is
  clearly bounded and the split is persistent.

## Unhealthy patterns

- **Nested scroll inside scroll:** a scrolling card inside a scrolling page. Wheel events get
  captured unexpectedly; on touch, users get stuck.
- **Hidden scroll:** a region with `overflow: auto` whose scrollbar is hidden or which looks
  like it has no more content.
- **Scroll-jacked sections:** custom scroll behavior that breaks expected speed or keyboard
  scrolling.
- **Viewport-height traps:** `height: 100vh` containers that clip content on short screens,
  mobile browser chrome, or when the keyboard opens.
- **Modal scroll bleed:** background page scrolls behind an open modal.

## Diagnosing

`scripts/measure-layout.mjs` lists regions that currently scroll (content exceeds their box
with overflow set to auto/scroll). More than one or two scroll regions on a simple surface is
a signal to inspect.

Manually check:

- Scroll with a mouse wheel over each region, and with the keyboard (Page Down, Space).
- On touch, scroll starting on each region.
- Resize to a short height: does anything become unreachable?

## Repair moves

- Prefer letting the document scroll; remove fixed heights on content containers.
- If panes must scroll independently, give each a clear boundary and ensure the page itself
  does not also scroll.
- Use `overscroll-behavior: contain` on legitimate inner scroll regions (drawers, chat logs)
  to prevent scroll chaining.
- Use dynamic viewport units (`dvh`, `svh`) rather than `vh` for full-height mobile layouts.
- Lock background scroll when a modal is open, and restore position when it closes.
