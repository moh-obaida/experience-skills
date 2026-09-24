<!-- GENERATED FROM shared/taxonomies/visual-problems.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Visual Problem Taxonomy

Canonical names for composition and visual-quality problems. Use them in findings.

## Composition

| Code | Problem | What it looks like |
|---|---|---|
| V1 | NO FOCAL POINT | Several elements of similar weight; the eye has nowhere to land |
| V2 | WRONG FOCAL POINT | The most prominent element is not the most important one |
| V3 | DEAD SPACE | Large areas with no purpose, usually around a small centered cluster |
| V4 | CRAMPED | Elements packed without grouping; no breathing room where scanning matters |
| V5 | FLAT HIERARCHY | Headings, body, and metadata too similar in size, weight, or color |
| V6 | ALIGNED NOT COMPOSED | Everything centered or on one axis; order without intent |
| V7 | UNBALANCED | Visual weight piled on one side or corner without purpose |
| V8 | BROKEN RHYTHM | Inconsistent spacing between siblings; arbitrary gaps |
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

Findings should cite the code, the evidence, and the location:

```
V3 DEAD SPACE — join screen, 1440×900: content cluster occupies ~18% of the viewport
(measured); remaining area is a flat background with no role.
```
