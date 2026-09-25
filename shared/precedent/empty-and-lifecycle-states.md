# Precedent: Empty and Lifecycle States

Use this module when a surface can be empty, loading, unavailable, stale, disconnected, or not
found. The observation must be transferred as a state behavior, not as a visual motif.

## `GF1`

**Observed:** Grafana Play showed a dark blank screen for several seconds before routing, with no
visible loading signal.

**Lesson:** a blank focal region creates uncertainty even when routing eventually succeeds.
**Transfer when:** the primary object is delayed. Reserve its area and expose honest progress or
waiting status. **Avoid when:** the delay is below perception threshold.

## `GF2`

**Observed:** Grafana's not-found state explains the problem and offers home and community help.

**Lesson:** an error page should preserve a path into the product. **Transfer when:** the user can
recover by navigating or asking for help. **Avoid when:** the actual cause is a permission or network
state that needs different recovery.

## `GF3`

**Observed:** the same Grafana not-found event appeared as both a page state and a red toast.

**Lesson:** duplicated announcements increase noise without increasing understanding.
**Transfer when:** one authoritative surface can carry the explanation. **Avoid when:** the toast is
the only way to announce a cross-page event.

## `UKD3`

**Observed:** GOV.UK question-page guidance keeps the error summary tied to the form's recovery
path.

**Lesson:** error state design includes focus and navigation, not only copy. **Transfer when:**
multiple fields can fail. **Avoid when:** a local inline error is sufficient.

## `UKE1`

**Observed:** GOV.UK's error summary links to invalid fields and names the issue.

**Lesson:** the user should be able to move from explanation to repair without hunting.
**Transfer when:** recovery is multi-step or the form is long.

## `LN1`

**Observed:** Linear's homepage stayed dark and empty while client-rendered content failed to
arrive in one browser.

**Lesson:** a visually intentional blank is still a failure if the product's content is unavailable.
**Transfer when:** a heavy client surface can fail or stall. **Avoid when:** the product truly uses
an empty canvas and the next action is clear.

## `TV4`

**Observed:** TradingView's chrome appeared before the chart data.

**Lesson:** loading order should make the unavailable focal object explicit.

## `ABd2`

**Observed:** Airbnb's desktop surface exposes search context before the results become the focus.

**Lesson:** a no-results or delayed-results state should retain the query and its editable context.

## `SPd1`

**Observed:** Spotify's desktop player maintains a persistent playback state while content changes.

**Lesson:** background state can remain visible when it is part of the user's current objective.

## `SPm1`

**Observed:** Spotify's mobile surface keeps the current playback context in a reachable bottom
control while the user browses.

**Lesson:** mobile lifecycle state needs a reachable, compact authority surface.

## `MD2`

**Observed:** MDN labels browser support with a “Baseline” badge and browser icons.

**Lesson:** capability and availability should be explicit before a user invests in an action.

## Transfer checklist

Classify the state as true empty, filtered empty, first use, loading, unavailable, permission,
error, not found, stale, pending, unknown, or restored. Name the authority, preserve user input,
show one next action, and state how the user returns to a useful state. Do not use a skeleton or
spinner to disguise an empty or failed data source.
