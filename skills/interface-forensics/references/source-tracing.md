# Source Tracing

## Trace one symptom

Record the element's DOM path and its component/source file. In DevTools inspect computed dimensions and styles, then the matched declarations and their origins. Find the winning rule, including inheritance, inline style, utilities, specificity, order, `!important`, state selectors, theme, media or container query. Search source for the component, class, token, or generated utility. If a bundler obscures the source, identify the nearest source component and label the exact rule unknown.

Use the collector for reproducible element facts, not for an automatic diagnosis. Its matched-rule candidates do not model full cascade, shadow DOM, CSS layers, pseudo-elements, or framework source maps. Confirm the actual winner in browser tooling before attributing a P0/P1 cause.

## Layout questions

- Which parent owns the box: grid track, flex basis, intrinsic content, min/max size, fixed height, aspect ratio, absolute positioning, containment, or overflow?
- Is a gap caused by `gap`, padding, margin, collapsed margin, line-height, an empty child, or an oversized track? Measure the two edges, then identify the owner.
- Does a breakpoint change information priority or merely stack oversized desktop pieces? Inspect overlapping queries, brittle exact breakpoints, and one-off overrides.
- If a popup clips, find the clipping ancestor and stacking context (`transform`, opacity, isolation, positioned z-index); raising z-index inside a clipped ancestor cannot fix it.
- If the page scrolls sideways, compare `scrollWidth` with `clientWidth`, then find the outermost escaping element. Check `min-width`, `white-space`, grids, long strings, media, and fixed items.

## Source-level causes worth checking

Component variants can diverge in spacing; conditionals can cause layout shifts; an unnecessary wrapper can force complicated CSS; tokens can be bypassed by raw values. Refactor only when that change repairs this surface or prevents its repeat failure. A legitimate one-off value need not become a token.

Trace behavior too: actual event handler, disabled and loading state, destination, focus management, and error path. A control can be technically clickable yet useless because a persistent action already reaches the same result.

## Example finding (invented)

At 360×800 in the empty rewards state, the primary action's right edge is 42px outside the viewport. The button is in `CheckoutActions`; its parent grid keeps `1fr auto` while the button has a 240px minimum width. The action is hidden to touch users. Use one column when the two controls no longer fit; verify 360×800, 390×844, 200% zoom, and a long translated label. State the exact files and lines only after locating them in the inspected project.
