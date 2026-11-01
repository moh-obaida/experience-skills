# BORDLINE: Border, Outline, Pseudo-Element, and Clipping Defects

BORDLINE is the diagnostic category for stroke-level rendering defects: a border that is cut off,
uneven, doubled, or missing; an indicator that is clipped or duplicated; a rule that pokes out of
its container. These defects pass type checks, unit tests, and accessibility scanners, and a user
sees them in the first second. A screenshot shows the symptom; it does not show the cause. Never
name a CSS root cause from a screenshot alone.

## Codes

| Code | Defect | Rendered symptom | Computed-style or geometry signal | Look-alike that is legitimate |
|---|---|---|---|---|
| BL1 | PARTIAL BORDER | A card, field, or panel is outlined on some sides only | Two or three sides have width and color, others none; rounded corner meets a missing side | One-sided accent edge on a callout; underline-only tab; shared edge inside a segmented control |
| BL2 | UNEVEN STROKE | One side reads heavier or lighter than its neighbors | Side widths or colors differ on a box that has three or four sides | Accent edge that encodes state or severity |
| BL3 | CLIPPED EDGE | A border, shadow, or ring is cut at the container edge | Box extends past the padding box of an ancestor with `overflow` hidden or clip; negative margins | Content in a scroll container that is meant to continue |
| BL4 | DUPLICATE INDICATOR | A tab or item shows two underlines, or a selected card shows a border plus a ring | A state adds two layers (border, pseudo-element line, shadow line, underline, outline) on one edge, often one on a wrapper and one on its child | Track plus indicator where the track is on the list, not the item |
| BL5 | SEPARATOR OVERREACH OR MISALIGN | A divider extends beyond its card, or dividers in one list start at different x | Thin element wider than its parent; sibling rules disagree on start or length | Full-bleed rule ending exactly at the card edge; indent shared by every divider |
| BL6 | FOCUS CLIPPED OR ABSENT | Keyboard focus ring is cut off, hidden, or invisible | Outline or ring extent crosses a clipping ancestor; no outline or ring-shadow at focus | Focus shown by an inset border or background change |
| BL7 | STROKE INCONSISTENCY | Same component role uses different stroke weight or color across instances or routes | Cohort of same-role elements disagrees on border width or color | Named variants with a stated reason (error, selected) |
| BL8 | PSEUDO OVERHANG | A `::before` or `::after` line or box escapes its host | Absolutely positioned pseudo with negative `left` or `right` beyond the host, host not clipping | Deliberate bleed with a matching neighbor |
| BL9 | CONNECTOR MISALIGN | Stepper or timeline connector sits off the center of its nodes | Thin line's vertical center differs from node centers by more than about 1.5px | Intentional baseline-aligned connector |

## Investigation protocol

1. **Observe the state, not only the page.** Capture rest, hover, keyboard focus, selected, error,
   disabled, and the narrowest supported width. BL3, BL4, and BL6 often appear in one state only.
2. **Zoom.** Inspect at device scale 2 and at 200% browser zoom. Hairlines that are fine at 1x
   disappear or double at fractional scales. Name the zoom you looked at.
3. **Read computed style on the element, then on its wrapper and child.** Border widths and styles
   per side, `box-shadow` offsets, `outline` width and offset, `overflow`, `margin`, `transform`.
4. **Read pseudo-elements.** `::before` and `::after` have their own computed style: `content`,
   `position`, `inset`, `width`, `height`, `background`, `border`.
5. **Walk the clipping ancestors.** Every ancestor with `overflow` other than `visible`, `contain`
   paint, or a `clip-path` can cut a stroke or ring. Compare the child's painted extent with the
   ancestor's padding box.
6. **Check the box model.** `box-sizing`, `border` versus `outline`, subpixel widths from `rem` or
   percentage math, and `transform: scale` all shift a stroke by a pixel or two.
7. **Find the owner.** Which component or token owns the stroke? If several routes show the same
   defect, the cause is the shared component or token. Fix it there.
8. **Rerender the same state at the same size and zoom** and compare. A defect fixed at 1x but not
   at 2x is not fixed.

## Deciding defect versus design

A stroke is intentional when a state, role, or hierarchy explains it and every instance of that role
agrees. Ask three questions before reporting: Does any user-visible meaning depend on the
asymmetry? Do all instances of the role share it? Is the cut edge a design edge (a card meeting the
viewport) or an accident (a card cut off inside its own container)? If the answer to the first is
yes and the second is yes, it is design. Report it as preserved. Asymmetric, heavy, or sparse
treatments are never defects by category.

## Evidence wording

Write the three levels separately: what the render shows (E1 or E5), what the computed style shows
(E2), what the source shows (E3). A finding that has only the first states a symptom and marks the
cause unknown.
