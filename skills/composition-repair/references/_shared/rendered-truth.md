<!-- GENERATED FROM shared/philosophy/rendered-truth.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Rendered Truth

The experience is what renders, not what the source code intends.

Perfectly reasonable CSS, layout code, or component trees can produce a composition that is
empty, cramped, overlapping, or broken at a size nobody checked. Clean source is not evidence
of a good result.

## The evidence hierarchy

Prefer the strongest evidence available:

1. **Actual rendered behavior** in a real runtime (browser, simulator, device, terminal),
   including interaction.
2. **Measured layout evidence** (element geometry, scroll dimensions, overflow, computed styles).
3. **Source code** (markup, styles, components, state logic).
4. **Documented product constraints** (specs, design system, requirements).
5. **Screenshots** supplied by someone else (useful but frozen: one size, one state, no
   interaction, no geometry).
6. **Assumptions** (what the thing probably looks like).

State which level your conclusions rest on. "The layout overflows at 360px (measured)" is a
different claim from "the layout will probably overflow on small phones (from reading the CSS)."

## What code review cannot tell you

- Whether the focal point reads as the focal point
- How much of the first viewport is actually used
- Whether text wraps into an awkward shape at a real width
- Whether a sticky header eats a short viewport
- Whether two absolutely positioned elements collide with real content
- Whether the page *feels* empty or cramped
- Whether an animation lands at the right moment

## What screenshots cannot tell you

- Other viewport sizes, zoom levels, or text settings
- Other states (loading, empty, error, dense)
- Hover, focus, and keyboard behavior
- Motion and timing
- Whether overflow is hidden off-screen

## The loop

For any task that changes a rendered surface:

```
inspect → hypothesize → change → render → inspect again
        → test edge states → critique the result → revise
```

Do not make dozens of edits and then declare success. Render after meaningful changes.

## When rendering is not available

Some environments have no browser, simulator, or device. Then:

- Do the strongest static analysis you can (read styles, compute likely sizes, look for fixed
  widths, `overflow: hidden`, missing wrapping, hard-coded heights).
- Say explicitly what remains unverified.
- Give the user the specific checks to run ("at 360px wide, confirm the action bar does not
  wrap to two lines").

Never write "verified" about something you only read.
