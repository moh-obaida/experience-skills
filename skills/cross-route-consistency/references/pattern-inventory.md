# Pattern Inventory: What Is Shared and What Differs

## What counts as a shared pattern

A pattern is shared when a user does the same thing with it on more than one route and would expect
it to behave and look the same: switch language, move between sections, submit a form, see that a
field is invalid, pick a tab, confirm in a dialog, read a status. A pattern is not shared merely
because it uses the same component library; a hero banner and a table header can share tokens and
still be different things.

Start with the primary journey's routes, then add the routes where a user would notice a change.

## Inventory format

Keep it compact. One row per pattern.

```text
pattern | routes where it appears | implementation (component or markup) | variants | notes
language control | /, /host, /join, /results | select (/, /join); button + menu (/host); links (/results) | 3 | three implementations
selected tab | /host, /quiz/:id | border-bottom (host); filled pill (quiz) | 2 | different indicator
primary button | all | .btn-primary (6 routes); inline style (1 route) | 2 | radius 6 vs 18 on /quiz/:id
validation error | /join, /host | inline under field (join); toast (host) | 2 | same condition, two treatments
```

Record only what matters. The goal is to expose duplicated implementations and conflicting
contracts quickly, not to catalog every element.

## Six difference classes

| Class | Test | Action |
|---|---|---|
| INTENTIONAL | A documented or evident reason; every instance of the case agrees | Preserve, record why |
| CONTEXTUAL | The page type or task justifies it (a compact control in a dense editor, a larger one on a touch-first public page) | Preserve; keep it a deliberate variant of one component |
| DRIFT | Same job, same context, different look with no reason; usually the result of independent edits | Unify at the owner |
| DUPLICATE IMPLEMENTATION | Two or more separate implementations of one pattern (different markup, different components) | Consolidate into one component |
| CONFLICTING CONTRACT | Same pattern with incompatible behavior (one language selector reloads, another does not; one error clears on input, another stays) | Define the contract; align behavior, then look |
| OVERRIDE REGRESSION | A local rule overrides the shared component and breaks it, or an old rule survives a redesign | Remove the override; fix at the owner |

## Legitimate distinctions

Consistency does not mean the same layout everywhere. Keep:

- **Public pages** (marketing, join, sign-in): expressive, spacious, brand-forward; the shared
  controls still use the shared contract.
- **Dashboards and tools**: denser, utility-first; navigation and controls follow one system.
- **Editors and creation surfaces**: artifact-first; chrome minimal; tool controls specialized.
- **Immersive screens** (live game, presentation): full-bleed, large targets, custom chrome; shared
  patterns such as language and error treatment still behave predictably.

Ask: is the difference about the page's purpose (keep) or about nobody noticing (fix)?

## Reading compare-routes output

The script prints, per pattern kind, the dominant style fingerprint per route (element, height,
padding, radius, border, colors, type, shadow, and the selected-state indicator) and lists the
properties that differ.

- Same kind, different **element** (select versus button) is a duplicate implementation or a
  conflicting contract; inspect behavior as well as looks.
- Selected-tab **indicator** differing (border-bottom versus fill) is a convention conflict.
- Small differences in height of 2 px that come from a border are noise; larger ones are drift.
- A kind present in one route only is not drift by itself; check whether other routes should have it.
- Buttons are compared by fill color; a filled button with the same color but different radius,
  height, or weight on two routes is a conflicting treatment.

Always open the routes and look. The script samples dominant fingerprints; one odd instance can hide
inside a route.

## Include states and locales

Compare shared patterns in their states (hover, focus, selected, error, disabled) and in each
supported locale and direction. A shared language control must be the same pattern in Arabic as in
English; a selected indicator that mirrors in RTL should do so everywhere.

## Do not

- Treat the first route you read as the standard.
- Normalize pages that are meant to differ.
- Create a design system when the task is to fix three drifting controls.
- List fifteen pages with the same defect instead of one owner.
