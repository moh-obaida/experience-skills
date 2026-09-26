# Compositions: Operational and Data Family

Surfaces built for repeated work: checking status, deciding what needs attention, and acting on it.
The test for every entry here is the same: does the page answer "what should I do right now," using
the viewer's real data — never a fake metric filling a template slot.

---

## Compact operational

| Aspect | Guidance |
|---|---|
| Solves | Daily work with real state — a home or dashboard screen a user opens many times a day |
| Archetypes | OPERATIONAL |
| Content needs | Continue items (in-progress work), ready items, needs-attention items, one quick-create action |
| Hierarchy / focal | The most valuable ready or urgent item, not a greeting |
| Viewport | Fits real content within the first viewport at typical density; never padded to fill space when data is sparse |
| Scroll | Secondary sections (continue, needs attention) scroll below the primary item |
| Responsive | Collapse to a single ranked list on narrow screens; the primary item still leads |
| RTL | Mirror list item layout (status/action side) and reading order |
| Touch | List rows are full-width tap targets, not just their title text |
| Accessibility | Status conveyed by text and icon, not color alone; heading structure reflects the ranking (most valuable first) |
| Sparse state | A meaningful, real empty state (see `meaningful-empty-state.md`), never filler — no invented stats, no illustration standing in for content |
| Dense state | Ranking and grouping (continue / ready / needs attention) still hold with dozens of items; add pagination or a "view all" link rather than one long list |
| Fails when | A greeting and duplicate navigation (buttons repeating the sidebar) fill the page instead of real work |
| Bad AI version | "Welcome back, [Name]!" followed by three large buttons (Create / Open / Library) that repeat the sidebar, with most of the viewport empty |
| Precedent | GitHub (GH1, GH2) |

## Dashboard, action-first

| Aspect | Guidance |
|---|---|
| Solves | What needs attention right now, for someone who checks this many times a day |
| Archetypes | DATA-HEAVY, OPERATIONAL |
| Content needs | Exceptions with a stated cause, what changed since last visit, status grouped by owner/area, and a visible freshness timestamp |
| Hierarchy / focal | The top exception — not a grid of equal-weight metrics |
| Viewport | Exceptions and "what changed" fit above the fold; supporting detail and history scroll below |
| Scroll | The page is ordered exceptions → what changed → status by group → historical charts, matching decreasing urgency |
| Responsive | On narrow screens, keep the exception list first and collapse status-by-group into an expandable section rather than a horizontally scrolling table |
| RTL | Numeric trend indicators (arrows, deltas) mirror direction; keep magnitude and color meaning unchanged |
| Touch | Drill-down targets (an exception row) are full-width, not a small icon |
| Accessibility | Never rely on color alone for severity; state it in text ("Late," "+6 min") |
| Sparse state | When nothing needs attention, say so plainly ("All zones on time") rather than showing empty exception cards |
| Dense state | Group and paginate exceptions by area/owner once the list exceeds what fits in one view; keep the single top exception pinned |
| Fails when | Twelve equal-weight KPI tiles replace a ranked list of exceptions, and none of them explain why a number moved |
| Bad AI version | A 4×3 grid of metric cards (Total Orders, Revenue, Active Drivers, Avg Delivery Time...) with sparklines and percentages that have no stated baseline or cause |
| Precedent | GitHub Actions status rows (GA1), Bloomberg ticker (BL1) |

## Dashboard overview

| Aspect | Guidance |
|---|---|
| Solves | Status of many comparable things at a glance, for someone scanning rather than investigating |
| Archetypes | DATA-HEAVY |
| Content needs | Consistent tiles or rows, each with current status, a trend indicator, and a link to detail |
| Hierarchy / focal | Items requiring attention are visually distinct from healthy ones — sort or group by status, not alphabetically |
| Viewport | As many items as fit at a scannable density; avoid forcing pagination for a set the viewer expects to see whole |
| Scroll | Vertical only; avoid a wide table that requires horizontal scroll to see status |
| Responsive | Tiles reflow to fewer columns; rows are usually more robust than tiles at narrow widths |
| RTL | Trend arrows and status icons mirror; status color meaning stays fixed |
| Touch | Each tile/row is a single tap target to the detail view |
| Accessibility | Status text alongside color/icon; consistent reading order (status, then trend, then name is not the same as name, then status, then trend — pick one and keep it) |
| Sparse state | Few monitored items still get the same tile treatment; do not pad with unmonitored placeholders |
| Dense state | Hundreds of items need filtering, search, or grouping by category/health — not an ever-scrolling flat grid |
| Fails when | Every tile looks the same regardless of status, forcing the viewer to read each one individually to find problems |
| Precedent | Datadog depiction (DD2); Flightradar24's live map (FDR2) shows the canvas-as-overview alternative: instead of tiles, hundreds of live objects are distinguished by position and heading alone, with no per-item card needed |

## Data investigation

| Aspect | Guidance |
|---|---|
| Solves | Exploring and slicing data to answer a question that wasn't anticipated by a fixed dashboard |
| Archetypes | DATA-HEAVY |
| Content needs | Query/filter controls, at least one chart view and one table view of the same data, and saved/named views |
| Hierarchy / focal | The active query and its result; filter controls are secondary chrome, not the focal point |
| Viewport | Controls stay compact (a filter bar, not a full-height panel) so the result has most of the space |
| Scroll | Result table/chart scrolls independently of the filter bar, which stays reachable |
| Responsive | On narrow screens, move filters into an expandable sheet and keep the result full-width |
| RTL | Filter chips and applied-filter order follow reading direction; numeric/date ranges keep their own convention |
| Touch | Filter chips are easy to remove individually; avoid requiring a multi-select dropdown for a single common filter |
| Accessibility | Announce result-count changes when filters update; keyboard access to every filter and the table |
| Sparse state | Zero results state names which filter combination produced nothing and offers a one-tap way to loosen it |
| Dense state | Server-side pagination or virtualization once results exceed what renders comfortably; keep the query visible while scrolling results |
| Fails when | Applying a filter doesn't visibly or meaningfully change the result for realistic data volumes — the filter existed because the UI pattern expects one, not because it does work |
| Precedent | TradingView (TV1), Linear views (LC1) |

## Command center / live control room

| Aspect | Guidance |
|---|---|
| Solves | Operating something in real time — monitoring and acting on live, changing conditions |
| Archetypes | LIVE CONTROL |
| Content needs | A state header naming what's being monitored and its current state, scoped actions, active alerts, and connection/freshness status |
| Hierarchy / focal | Current state and active exceptions; historical/background data recedes |
| Viewport | State header and active alerts fit above the fold at all times; never require scrolling to see whether something is wrong right now |
| Scroll | Secondary panels (history, less urgent status) scroll below; the state header can be sticky if the page is long |
| Responsive | Rank the current incident and next action first on mobile; expose secondary panels as explicit views rather than hiding them behind horizontal clipping |
| RTL | Logical action order and status meaning preserved; mirror directional status icons |
| Touch | Action targets sized generously — operators may be under time pressure |
| Accessibility | Non-color severity indication; keyboard traversal of alerts and actions; reduced motion for any live-updating chart |
| Sparse state | "No active alerts" stated plainly, with the monitored scope still visible, not a blank panel |
| Dense state | Group and prioritize alerts by severity and recency; a flat list of dozens of equal-weight alerts defeats the format |
| Fails when | Status is rendered small while actions restate context the operator already has ("Confirm action on Zone A" when Zone A is the only thing on screen) |
| Precedent | CMD1–CMD10 (load `command-center-systems.md` for dashboards, logs, alerts, and incident evidence); Flightradar24 (FDR1–FDR4) shows a consumer-facing but genuinely real-time control surface: the canvas itself is the entire product with no framing dashboard (FDR1), and its few controls recede into a low-contrast floating bar until touched (FDR3) rather than staying persistently visible — appropriate here because the controls are used far less often than the monitoring itself. |

Make scope, time range, freshness, connection state, and authority visible before adding density.
Cloudflare demonstrates shared filters and drill-down into raw evidence; Vercel separates project,
deployment, runtime, activity, and audit scopes; Grafana makes firing/pending severity the focal
state; Sentry connects an alert to an inspectable event, owner, stack trace, and recovery path.
Every panel should change the operator's next action or support a justified comparison. On mobile,
rank the current incident and next action first, then expose secondary panels as explicit views;
never hide stale status behind horizontal clipping. Include loading, partial data, disconnected,
permission-denied, no-alert, and resolved states with their freshness/retention limits. Test
keyboard traversal, non-color severity, reduced motion, RTL ordering of values and controls, long
incident names, and whether a chart has a drill-down or is only decorative.

## Family checks

Responsive behavior ranks the live decision, then collapses secondary panels into explicit views;
it does not hide status behind horizontal clipping. Every composition needs a real sparse state,
dense state, loading/error state, and failure condition. RTL must preserve logical action order and
status meaning. Precedent is useful only when the target shares frequency, latency, and authority.
