<!-- GENERATED FROM shared/precedent/command-center-systems.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Precedent: Command-center and Live-control Systems

Use this module when people monitor changing conditions and act on exceptions, incidents, or live
operations. A command center is not a dashboard with more cards. It needs scope, freshness, status
authority, drill-down, and a safe action path.

## `CMD1`

**Observed:** Cloudflare custom dashboards apply shared filters across charts and provide drill-down
to Security Analytics or Log Search.

**Right when:** the operator investigates a scoped anomaly across related signals.
**Transfer:** show the current scope and make aggregate-to-detail movement explicit. **Wrong when:**
each chart has unrelated filters or the dashboard cannot explain what a number includes.

## `CMD3`

**Observed:** Cloudflare DNS analytics defines panels, dimensions, filters, time limits, and
sampling/history boundaries.

**Right when:** precision and data freshness affect operational decisions.
**Transfer:** expose time range, source, sampling, and scope near the metrics. **Wrong when:** a
dashboard displays exact-looking numbers without stating their authority.

## `CMD5`

**Observed:** Vercel groups production and pre-production deployments, project settings,
observability, and firewall management around a project scope.

**Right when:** an operator owns a bounded system and its environments.
**Transfer:** put environment, deployment, and latest health in the header; let secondary tabs hold
logs and configuration. **Wrong when:** production and preview actions look identical.

## `CMD7`

**Observed:** Grafana's alerts overview separates firing and pending alerts and severity counts.

**Right when:** current state and severity determine the next action.
**Transfer:** rank active exceptions above historical context and provide a recovery route. **Wrong
when:** charts compete with the alert list or status is communicated by color alone.

## `CMD9`

**Observed:** Sentry's documented developer workflow connects issue/metric alerts to filters, event
details, and stack traces.

**Right when:** the operator needs to move from a signal to a concrete cause.
**Transfer:** preserve the chain signal → event → evidence → owner/action. **Wrong when:** an alert
opens a generic dashboard without the triggering context.

## `GA1`

**Observed:** GitHub Actions run rows include status, branch, trigger, commit, time, and duration;
the row is already an operational decision surface.

**Right when:** the top-level list can rank work by current state and recency.
**Transfer:** use real attributes and stable scan order before adding charts. **Wrong when:** the
operator must open every row to learn whether it needs attention.

## `TV1`

**Observed:** TradingView keeps the chart canvas central while tool rail, toolbar, side panels, and
timeframe controls frame the live object.

**Right when:** the operator is actively manipulating a live visual object.
**Transfer:** give the live object spatial stability and move secondary tools around it. **Wrong when:**
panels are equal in weight to the decision surface.

## `DD2`

**Observed:** Datadog's product depiction uses dense numeric tiles, a host map, and time series as
the value proposition; monitoring density is shown as capability rather than disguised.

**Right when:** information volume is itself useful to an expert operator.
**Transfer:** make density explainable through real labels and hierarchy. **Wrong when:** density is
used to make a marketing page look advanced without an action model.

## `GF1`

**Observed:** Grafana's public dashboard route stayed dark for several seconds before routing, with
no visible loading indicator.

**Right when:** testing live-control systems for truthful loading and connection state.
**Transfer:** reserve a visible loading/connection state for the focal data surface. **Wrong when:**
chrome suggests readiness while the operator cannot trust the data yet.

## Transfer checklist

1. Name the monitored system, scope, freshness, authority, and operator action.
2. Rank exceptions and changes before stable background metrics.
3. Include connection, stale-data, partial-data, empty, permission, and recovery states.
4. Provide drill-down to evidence and keep the originating filter/time range in context.
5. Test dense desktop, 200% zoom, narrow/tablet fallback, RTL labels, keyboard traversal, and
   color-independent state communication.
