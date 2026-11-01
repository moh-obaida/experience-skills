# Acceptance Plan: What to Capture and What to Look For

## Three workflows

| Workflow | Input | Output |
|---|---|---|
| REVIEW | One or more supplied screenshots | Observations and findings labeled E5; interaction and other states marked unverified |
| COMPARE | Before and after captures | Classified differences and a verdict; invalid comparisons rejected |
| INSPECT | A runnable product | Captures across the plan, observations (E1), measurements (E2), verdict |

Use the real product when it runs. A supplied screenshot is evidence of one image only.

## Build the plan

Ask what the change could break, then capture that. Write the plan in a few lines:

```text
change:      <what changed and which components or routes it touches>
routes:      <primary journey routes plus one route that was not edited>
states:      <initial, populated, error, empty, selected, focus, disabled, loading as relevant>
viewports:   <primary desktop, one short laptop, one phone; add tablet when the layout changes there>
inputs:      <pointer, keyboard focus, touch targets>
directions:  <LTR; RTL when supported>
themes:      <light, dark when supported>
stress:      <long text, many items, empty content, 200% zoom, slow load, large text>
invariants:  <what must remain true: the instrument is visible, the primary action is reachable, no clipped borders, error is readable...>
```

Keep it proportional: a one-component stroke fix needs few captures; a restructured route needs
many. State the minimal set that covers the risk, and name what you chose not to capture.

## Capture protocol

- Identical conditions for before and after: same route, state, viewport, zoom, locale, direction,
  theme, data, and fonts. Mask dynamic regions (clocks, avatars, random content) with `--mask` or
  fix the data.
- Reach states by steps from a fresh load, so each capture is reproducible. Use a states file with
  the capture script for repeated flows.
- Capture the keyboard focus state separately: the focus ring is the most commonly clipped element.
- Capture at least one narrow viewport and one stress condition for layout changes.
- Keep the baseline untouched; capture the new state into a separate directory.
- Record the browser and OS when comparing across machines; antialiasing and fonts differ.

`scripts/capture-matrix.mjs capture` writes the PNGs and `index.json`; it never writes without `--out`.

## Review checklist

Look at each capture. For each item write what you saw or "n/a".

| Area | Look for |
|---|---|
| Visual hierarchy | Does the eye land on the instrument or the next action? Is rank readable in grayscale? |
| Clipping | Cut text, borders, rings, shadows; content hidden by a container |
| Alignment | Content edges, baselines, connectors, icon-to-label alignment |
| Border continuity | Partial, uneven, doubled, or missing strokes; dividers that poke out |
| Component sizing | Control heights, padding, radius, card proportions across repeated items |
| Text wrapping | Orphans, awkward breaks, truncation, overflow in the longest language |
| Scrolling | Which region scrolls; nested scroll; sticky chrome covering content |
| Composition | Whole-screen balance, dominant regions, empty space with a job |
| State presentation | The state is legible; errors, success, disabled are distinguishable and accurate |
| Consistency | Same pattern, same look, across the captured routes |
| Responsive behavior | The job and instrument remain usable at narrow widths; stacking did not bury them |
| Core task visibility | The user can see and do the primary task in this capture |

## Appearance and usability

A capture can look good and fail the task: a decorative redesign that moves the primary action below
the fold, shrinks the instrument, or lowers contrast on an error. Judge usability alongside
appearance. When a change adds decoration, check what it cost: space, contrast, speed to the
primary action.

## What a screenshot cannot show

Interaction correctness (what a click does), state transitions, focus order, screen-reader output,
performance, and hover or animation unless captured. If the claim depends on any of these, run the
interaction or label it unverified.

## Without a browser

Review supplied screenshots only, label findings E5, and write **NOT VERIFIED IN RENDERED OUTPUT**
with the precise list: which routes, states, sizes, directions, themes, and stress conditions were
not rendered. Never describe a rendering you did not see.
