# Coherence Workflow: From Symptom to Owner

How to move from "that border looks wrong" to a verified fix at the right place.

## 1. Capture the states

Stroke and clipping defects hide in one state. Capture the ones the surface actually has:

| State | Why it matters |
|---|---|
| Rest | Baseline stroke, radius, spacing |
| Hover | Second underline, shifted layout, border that appears only on hover |
| Keyboard focus (Tab) | Ring clipped by `overflow: hidden`, ring hidden behind a sibling, no ring at all |
| Selected or current | Two indicators, border plus ring, partial border on the chosen card |
| Error and disabled | Border color and weight diverge from the rest state |
| Narrowest width and 200% zoom | Subpixel widths, wrapped tabs, clipped connectors |
| RTL, when supported | Accent edges and connectors that do not mirror |

Use the inspector for the first pass and a screenshot for the second. If both are available, take
the screenshot at device scale 2 as well: hairlines that are one pixel at 1x can vanish or double.

## 2. Classify

Give each confirmed observation a code from the BORDLINE list or VC-VAR, VC-ICON, VC-EDGE, a
confidence, and one sentence of user impact. If the probe flags something you cannot see in the
render, it is a hypothesis; look harder or drop it.

Decide defect versus design with the three questions in the BORDLINE module. When it is design,
write one line under "preserved" naming what encodes the asymmetry.

## 3. Locate the root cause

Trace in this order and stop when the cause is proven:

1. **The element.** Computed `border-*-width/style/color`, `outline`, `box-shadow`, `margin`,
   `transform`, `box-sizing`, `display`.
2. **Its pseudo-elements.** `content`, `position`, `inset`, `width`, `height`, `background`.
3. **Wrapper and child.** The same indicator is often styled on both a list item and its link.
4. **Clipping ancestors.** Each ancestor with `overflow` other than visible, plus `clip-path`.
   Compare the child's painted extent (border box plus outline plus shadow) with the ancestor's
   padding box.
5. **The owner.** The shared component, token, or utility that sets the value. A cascade tool or a
   source search for the property tells you which rule wins. If you cannot reach the source, record
   "cause unknown" and the nearest evidence.

## 4. Local or systematic

| Signal | Meaning | Action |
|---|---|---|
| One instance differs from identical siblings | Local override or content-driven state | Remove the override or add the missing state rule |
| Every instance of a component shows it | Component defect | Fix the component once |
| Many routes show it | Token or global rule | Fix the token or global rule; check the routes after |
| Defect appears only inside one container | Container rule (`overflow`, padding, negative margin) | Fix the container |

Do not patch each page when the owner is wrong. Do not edit the owner when only one instance
diverges.

## 4b. Repair patterns

- Missing side on a card: give the card a full `border` and move the accent to an inset shadow or a
  pseudo-element that does not replace a side. For an intentional accent edge, make every instance
  of the role use it.
- Cut border: give the clipping ancestor the padding the child needs, remove the negative margin,
  or stop clipping with `overflow: clip` plus `overflow-clip-margin` where supported.
- Double indicator: pick the owner (the interactive element, not its wrapper), delete the other
  layer, and apply the state once. Use `box-shadow: inset` or `border-bottom`, not both.
- Clipped focus ring: use a negative `outline-offset`, add padding to the clipping container, or
  use an inset ring. Never remove the ring to hide the clipping.
- Separator overreach: replace negative margins with padding on the container, or set the rule to
  the container width; keep one shared indent.
- Connector misalignment: size the connector from the node's center (`align-self: center` or
  `top: calc(node height / 2)`), accounting for the node's border width.

## 5. Rerender and compare

Same route, state, viewport, zoom. Open the before and after captures and state what changed. If the
target delta is absent, the diagnosis was wrong; return to step 3. Check one other instance that
shares the owner. For a systematic fix, spot-check at least two other routes.

## Finding example (invented)

```text
id: VC-1
surface: /lobby, selected team card, 1440x900, 2x
observed: selected card has no bottom border; corners are rounded (E1). Computed border-bottom-width is 0 on .team-card[aria-current] (E2).
class: BL1 PARTIAL BORDER
impact: card reads as cut off; the selected state looks like a rendering fault
confidence: confirmed
root cause: .team-card[aria-current] sets border-width: 2px 2px 0 (E3, components/team-card.css)
owner: visual-coherence-audit
action: border-width: 2px on the selected rule; verify the other instances of .team-card
```
