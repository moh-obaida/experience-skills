# Precedent: Controls and Inputs

Use this module when a control, input, search surface, filter, or action is being redesigned.
These are observations of public surfaces, not universal prescriptions. Transfer the behavior only
when the product shares the condition in the **Right when** line.

## `GH3`

**Observed:** GitHub places one filled primary “Code” action beside the branch and file-finding
tools on a repository surface.

**Right when:** one action starts the dominant task and nearby controls establish its scope.
**Transfer:** keep the primary action adjacent to the object it changes; do not repeat it in every
card. **Wrong when:** the action is destructive or the object is not yet selected.

## `GA2`

**Observed:** GitHub Actions exposes Event, Status, Branch, and Actor filters above a run list.

**Right when:** users repeatedly narrow a dense operational collection by known attributes.
**Transfer:** expose high-frequency filters as compact controls above the results and show the
result count. **Wrong when:** a first-use flow has too few items for filtering to pay its cost.

## `GF4`

**Observed:** Grafana shows the keyboard shortcut for search inline in the top bar.

**Right when:** a keyboard path is valuable but the product still serves pointer users.
**Transfer:** disclose the shortcut where the action is found; keep the visible control usable
without memorization. **Wrong when:** the shortcut is the only way to discover or operate the action.

## `SD1`

**Observed:** Stripe Docs uses tabs and a second segmented choice to change the integration path
without sending the reader to unrelated pages.

**Right when:** options are mutually exclusive views of the same underlying decision.
**Transfer:** use a familiar selection control when changing the choice changes the content in place.
**Wrong when:** the options are not comparable or users need to keep multiple choices visible.

## `MD3`

**Observed:** MDN places selectable code variants next to a live preview so the reader can test a
property before reading its formal detail.

**Right when:** experimentation is part of the task and the preview is truthful.
**Transfer:** keep the input and its result spatially connected; expose the resulting state in text
as well as visuals. **Wrong when:** the preview is fake or the task is irreversible.

## `TV2`

**Observed:** TradingView uses icon-only drawing tools with tooltips, trading discoverability for
expert speed.

**Right when:** actions are frequent, stable, and used by trained experts who need a compact rail.
**Transfer:** provide tooltips, keyboard paths, and a discoverable first-use explanation.
**Wrong when:** the audience is new, the action is rare, or the icon has several plausible meanings.

## `KH1`

**Observed:** Kahoot makes the join code the dominant object while keeping the entry control plain.

**Right when:** a code is the only value the user must enter and the environment supplies the rest.
**Transfer:** put product personality in the surrounding environment; preserve paste, focus, and
keyboard behavior in the input. **Wrong when:** the code is not the user's primary next action.

## `UKD1`

**Observed:** GOV.UK question pages put one consequential question, a clear heading, and a
continue action in a stable pattern.

**Right when:** the answer determines what follows and comprehension matters more than compactness.
**Transfer:** make the question the heading and keep errors close to the field and summary.
**Wrong when:** a short independent form would be slower when split across pages.

## `UKE1`

**Observed:** GOV.UK error summaries identify invalid fields and link to their locations.

**Right when:** a form can fail in multiple places and the user needs a recovery map.
**Transfer:** preserve input, explain the failure, and provide a direct route to the first problem.
**Wrong when:** the error is local and adding a second summary would duplicate it.

## `ABm1`

**Observed:** Airbnb's mobile surface keeps search, dates, guests, and the main action within a
thumb-reachable sequence rather than exposing desktop chrome unchanged.

**Right when:** users repeatedly search on a narrow, touch-first surface.
**Transfer:** recompose around reach and the next decision; do not merely shrink desktop controls.
**Wrong when:** the task requires simultaneous comparison across many attributes.

## Transfer checklist

Before choosing a precedent, record: the user's goal, frequency, reversibility, known context,
input method, error cost, and the **wrong when** condition. A custom control is not justified by
visual distinction alone. Preserve paste, autocomplete, keyboard, focus, screen-reader semantics,
touch targets, undo, and validation unless the product gain is measurable.
