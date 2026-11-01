# Component Variance: When Repeated Things Should Match

Consistency inside a screen is a property of components and tokens, not of pages. Compare
instances of the same role and decide whether each difference carries meaning.

## What to compare

For a cohort of same-role instances (cards in one list, tabs in one bar, buttons of one variant,
fields in one form), read computed values and compare:

| Property | Tolerance before it matters | Common cause |
|---|---|---|
| Control height | more than 2px between controls in one row or form | different line-height, border, or padding rules per variant |
| Padding | more than 2px on any side | local override, copy-pasted variant |
| Border radius | more than 1.5px after normalizing pill values | mixed token scales |
| Border width and color | any visible difference in the same role | state class leaking, one-off override |
| Box shadow or elevation | any difference without a level change | ad hoc shadows beside an elevation scale |
| Font size and weight | more than 0.5px or a weight step | variant styling copied inconsistently |
| Icon size and placement | more than 2px inside one control variant | different icon sets or wrappers |
| Content edge | 1 to 6px offsets between stacked siblings | padding or border mismatch between wrappers |

Run `scripts/inspect-borders.mjs` to get these as VC-VAR, VC-ICON, and VC-EDGE candidates.
Exact-class groups are more reliable than base-class groups, which mix variants; the output says
which grouping produced a finding.

## Variant or drift

A difference is a variant when it carries function and every instance of that function agrees.

| Keep as a variant | Treat as drift |
|---|---|
| Primary versus secondary button differ in fill and weight; size and radius match | Primary button has radius 6 on one page and 18 on another |
| Error field has a red border; otherwise identical | Error field is also 4px taller |
| Selected card has an accent border; the unselected cards share one stroke | One unselected card has a thicker border |
| Dense table rows use a smaller control size across the whole table | One row in a table uses smaller padding |
| Destructive action uses a danger color | Destructive button also has a different radius and font weight |

When in doubt, ask what the user would lose if the instances were unified. If nothing, unify.

## Elevation, radius, and stroke scales

A system should have a small number of each. Count distinct values on the screen:

- More than three shadow recipes, or a shadow that appears on one card and not its siblings, usually
  means ad hoc values.
- More than three radius values in one view, or two radii that differ by 1 to 2px, is drift.
- More than two stroke widths for the same role (hairline and emphasized) needs a stated reason.

Fix by mapping instances to the system's tokens. If no tokens exist, propose the smallest set the
screen already half-uses, rather than inventing a scale.

## Icon geometry

Icons inside one control variant should share size, stroke weight, optical alignment with the
label, and gap. Flag icons with different stroke weights or visual sizes that share a toolbar. Do
not flag a leading icon and a status icon that differ by role.

## Emphasis and visual weight

Two items of equal importance should have equal weight. Flag a secondary action rendered heavier than
the primary, or one tab bold only by accident. Weight differences that follow a documented hierarchy
are design.

## False positives to rule out

- Instances that differ because their content wraps (text height), not because their style differs.
- State styling captured mid-transition.
- Third-party widgets whose style is outside the product's control: report and move on.
- A cohort of two with one deliberately emphasized member.

## Repair order

1. Identify the owner (token, mixin, component).
2. Remove local overrides that restate the owner's values.
3. Add a named variant if a real functional difference exists.
4. Rerender the cohort and compare.
5. Record any variant you kept and why.
