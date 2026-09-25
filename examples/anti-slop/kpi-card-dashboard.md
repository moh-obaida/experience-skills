# Worked Example: The KPI-Card Dashboard

*Invented teaching example. Where it cites real products, the observations are in the repository's research log (GitHub Actions GA1–GA3, Bloomberg BL1; 2026-09-24).*

**Archetype:** DATA-HEAVY · **Product types:** analytics, admin, operations
**Skills:** anti-slop-ui, composition-repair, state-design

## Context

An operations lead at a delivery company opens the dashboard each morning to decide where to send
support staff.

## The bad version

Twelve KPI cards in a 4×3 grid: Total Orders, Revenue, Active Drivers, Avg Delivery Time, Customer
Rating, New Customers, Refunds, Cancellations, Support Tickets, Uptime, Deliveries Today, Growth.
Each has a sparkline and a green or red percentage. Below: a large line chart of orders over 12
months.

## Correct analysis

- Twelve equal-weight numbers: no P0 (V1).
- Percentages without baselines or causes.
- The lead's actual question ("where are problems right now, and why?") is unanswered.
- The 12-month chart answers a quarterly-planning question, not a morning-triage question.
- No indication of data freshness.

## The better version

```
Needs attention now
  ▲ Late deliveries: North zone 18% (usual 6%) — driver shortage since 07:10    [View orders]
  ▲ Support tickets: "missing item" ×42 since midnight — 31 from Store #12        [View tickets]

What changed since yesterday
  Avg delivery time 34 min (+6)  · mostly North zone
  Cancellations 2.1% (+0.8)      · correlated with late deliveries

Zones (table)       On-time  Late  Drivers  Tickets
  North             82%      18%   14/22    12
  Central           95%       5%   30/31     8
  …
Data as of 08:42 · auto-refresh on
```

Charts appear where shape over time informs a decision (an intraday late-delivery curve), not as
decoration.

## Why this works

Structure follows the decision: exceptions → change → status by zone. Numbers carry context.
Freshness is visible.

## User goal and constraints

The operations lead decides where to send staff each morning. Constraints: data from several systems with different freshness.

## Alternative direction

A map-centered command view of zones with exceptions pinned, for regionally organized teams.

## Implementation notes

Exception queries with causes; freshness per source; table by zone; charts only for intraday shape.

## Verification

Ask 'where do I send staff?' and time the answer before/after; stale data shows as stale; color never alone.

## Failure conditions

KPI tiles creeping back; charts without a question.

## Canonical rule

**Prioritize what changed, why, and what needs action. Choose tables and charts for the question.**
