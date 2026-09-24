# Alignment vs Composition

Alignment puts things on shared lines. Composition decides where the important thing goes,
how big it is, and how everything else relates to it and to the edges of the space.

A page can be perfectly aligned and not composed at all.

## Centered-column syndrome

The most common failure: logo, heading, card, button stacked in a centered column, with the
rest of the viewport blank.

Why it happens: centering is the easiest layout to write and it never looks "wrong" in code.

Why it fails:

- The focal point is "the middle," not a chosen element.
- Content has no relationship to the viewport edges; it floats.
- On large screens, most of the space is dead.
- Identity depends on a small logo.

Centering is fine when the composition around it is designed (a strong backdrop, a framed
stage, type at scale). Centering *by default* is the problem.

## Composition tools

1. **Scale.** Let the focal element be large enough to anchor the space.
2. **Offset and asymmetry.** Place the task region on a grid line other than the center, with
   the environment or supporting content occupying the other side.
3. **Edges.** Anchor elements to viewport edges (full-bleed imagery, edge-aligned headings,
   side panels) to make the layout feel built for the space.
4. **Tension and balance.** Balance a large, light element against a small, dense one.
5. **Layering.** Foreground task region over a meaningful background layer.
6. **Grid.** A visible or implied column structure that multiple elements share.

## Stronger alternatives to the lonely centered card

| Situation | Instead of centering alone |
|---|---|
| Sign-in / join | Task panel on a composed environment (split with product imagery, or full-bleed pattern with a framed panel) |
| Empty operational home | Left-aligned content column with real recent items and next actions, filling the width meaningfully |
| Single form | Form aligned to a content grid with a helpful side column (what happens next, help) on wide screens |
| Error / 404 | Composed message with a clear route onward; environment consistent with the product |

## Alignment still matters

Composition does not excuse sloppy alignment:

- Shared left edges (or right edges in RTL) across sections
- Baselines aligned in rows of mixed type sizes
- Icons optically centered with text
- Numbers right-aligned or tabular in tables

## Quick test

Cover the center of the screen with your hand. Does anything else on the page do work? If
the edges and corners are empty and meaningless, the page is aligned, not composed.
