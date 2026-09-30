# Visual Problem Taxonomy

Canonical names for composition and visual-quality problems. Use them in findings.

## Composition

| Code | Problem | What it looks like |
|---|---|---|
| V1 | NO FOCAL POINT | Several elements of similar weight; the eye has nowhere to land |
| V2 | WRONG FOCAL POINT | Supporting content dominates the main job, or important content is visually buried |
| V3 | DEAD SPACE | Space does no framing, grouping, or pacing work; an oversized low-value container can create it |
| V4 | CRAMPED | Elements packed without grouping; no breathing room where scanning matters |
| V5 | FLAT HIERARCHY | Headings, body, and metadata too similar in size, weight, or color |
| V6 | ALIGNED NOT COMPOSED | Everything centered or on one axis; order without intent |
| V7 | UNBALANCED | Disproportionate optical weight relative to neighboring content and value, even with equal dimensions |
| V8 | BROKEN RHYTHM | Accidental section handoffs, colliding regions, or density/structure repetition that harms comprehension or expression |
| V9 | CONTAINER SOUP | Cards inside cards inside panels; borders doing all the grouping |
| V10 | VIEWPORT MISUSE | First viewport shows chrome and a hero but not the task; key action below the fold |

## Rendering defects

| Code | Problem | What it looks like |
|---|---|---|
| R1 | HORIZONTAL OVERFLOW | Page scrolls sideways; content escapes the viewport |
| R2 | COLLISION | Text or controls overlap each other |
| R3 | CLIPPING | Content cut off by overflow hidden or fixed heights |
| R4 | AWKWARD WRAP | Headings or buttons breaking into orphans or ragged shapes |
| R5 | STICKY OBSTRUCTION | Fixed or sticky elements covering content, especially on short viewports |
| R6 | SCROLL CONFUSION | Nested scroll areas; unclear which region scrolls |
| R7 | STRETCH | Content stretched across ultra-wide screens with unreadable line lengths |
| R8 | TARGET TOO SMALL | Interactive elements below comfortable touch or pointer size |

## Identity and surface

| Code | Problem | What it looks like |
|---|---|---|
| I1 | GENERIC | Could be any product; fails the logo test |
| I2 | NOISE | Decorative treatments competing; no meaning |
| I3 | MISPLACED PERSONALITY | Custom styling on basic controls while the environment is bland |
| I4 | FAKE PREMIUM | Large radius, glass, gradients, tiny gray microtype, vast whitespace, no substance |
| I5 | INCONSISTENT | Same meaning expressed with different treatments across screens |
| I6 | TREND COPY | Fashionable pattern with no product justification (bento grids, glass, aurora gradients) |

## Content

| Code | Problem | What it looks like |
|---|---|---|
| C1 | FILLER | Fake stats, decorative cards, unrequested tips added to fill space |
| C2 | GENERIC COPY | "Unlock your potential," "Seamlessly manage," "Get started today" |
| C3 | MISSING STATE | Only the perfect-data state was designed |

Codes identify symptoms, not the full diagnosis. Explain the relationship and likely cause: a
surface may be internally coherent yet receive more attention than its information or action earns.
Group related symptoms under one cause rather than recommending a separate cosmetic fix for each.
These are diagnostic possibilities, not a checklist; purposeful asymmetry, sparsity, and repetition
may need no repair.

Findings should cite the code, the evidence, and the location:

```
V3 DEAD SPACE — join screen, 1440×900: content cluster occupies ~18% of the viewport
(measured); remaining area is a flat background with no role.
```
