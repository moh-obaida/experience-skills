# Hierarchy

Hierarchy is the order in which the eye moves through a surface. It should match the order
of importance.

## The emphasis budget

Every surface has a limited amount of emphasis to spend. Tools, from strongest to weakest:

1. **Size** (especially type size)
2. **Position** (top-left in LTR, top-right in RTL, center of a composed region, first in reading order)
3. **Contrast** (value difference against surroundings)
4. **Weight** (bold, heavy strokes)
5. **Color** (saturation and hue distinct from the rest)
6. **Space** (isolation around an element)
7. **Motion** (the strongest attention tool of all; use sparingly)
8. **Containers** (boxes, cards, backgrounds)

Spend emphasis on P0. If P0 needs every tool at once to stand out, the rest of the surface is
too loud; turn it down instead of turning P0 up.

## Diagnosing hierarchy

- **Squint test.** Blur your vision (or apply a heavy blur to a screenshot). What stands out?
  Is it P0?
- **Grayscale test.** Remove color. Is the order still readable? If hierarchy depends on color
  alone, it is fragile and inaccessible.
- **Type census.** List distinct font sizes on the surface. More than 5–6 on one screen usually
  means undisciplined scale. Fewer than 3 usually means flat hierarchy.
- **Scale ratio.** The ratio between the largest and body type. Operational UIs often work
  between ~1.5× and 2.5×; editorial and marketing surfaces often use 3× or more.
  `scripts/measure-layout.mjs` reports the ratio and the largest text elements.

## Common hierarchy failures

| Failure | Looks like | Repair |
|---|---|---|
| Wrong focal point | Logo or greeting larger than the task | Demote identity to the frame; promote the task |
| Flat | Everything the same size and weight | Rebuild the scale; fewer, more distinct sizes |
| Competing P0s | Two or three bold, colored calls to action | Choose one primary; demote the rest to secondary style |
| Metadata shouting | Dates, tags, counts as loud as titles | Reduce size, contrast, or weight of metadata |
| Headings without content | Big section titles over tiny sparse content | Scale headings to their content; merge sections |
| Container hierarchy | Importance expressed only by boxes | Use type and space first |

## Hierarchy across a flow

Consistency matters: if the primary action is a solid button bottom-right on one step and a
text link top-left on the next, users re-learn every screen. Keep the position and style of
primary actions stable through a flow.

## Accessibility

- Visual hierarchy should match heading structure (h1 → h2 → h3) and DOM order.
- Do not use size alone for interactive state; pair with other cues.
- Ensure contrast for secondary text still meets requirements (de-emphasis is not invisibility).
