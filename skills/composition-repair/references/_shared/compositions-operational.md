<!-- GENERATED FROM shared/design-intelligence/compositions-operational.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Compositions: Operational and Data Family

---

## Compact operational

| Aspect | Guidance |
|---|---|
| Solves | Daily work with real state |
| Content needs | Continue items, ready items, needs-attention items, quick create |
| Hierarchy / focal | The most valuable ready or urgent item |
| Sparse state | Meaningful empty state, not filler |
| Fails when | Greeting and duplicate navigation fill the page |
| Precedent | GitHub (GH1, GH2) |

## Dashboard, action-first

| Aspect | Guidance |
|---|---|
| Solves | What needs attention now |
| Content needs | Exceptions with cause, what changed, status by owner/area, freshness |
| Hierarchy / focal | The top exception |
| Fails when | Twelve equal KPI tiles |
| Precedent | GitHub Actions status rows (GA1), Bloomberg ticker (BL1) |

## Dashboard overview

| Aspect | Guidance |
|---|---|
| Solves | Status of many things at a glance |
| Content needs | Consistent tiles or rows with status, trend, and link to detail |
| Accessibility | Never color-only status |
| Precedent | Datadog depiction (DD2) |

## Data investigation

| Aspect | Guidance |
|---|---|
| Solves | Exploring and slicing data |
| Content needs | Query/filter controls, chart and table views, saved views |
| Precedent | TradingView (TV1), Linear views (LC1) |

## Command center / live control room

| Aspect | Guidance |
|---|---|
| Solves | Operating something in real time |
| Content needs | State header, scoped actions, alerts, connection status |
| Hierarchy / focal | Current state |
| Fails when | Status is small and actions restate context |
| Precedent | CMD1, CMD2, CMD3, CMD4, CMD5, CMD6, CMD7, CMD8, CMD9, CMD10; load `command-center-systems.md` for dashboards, logs, alerts, and incident evidence |

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
