# Generic Dashboard

## Recognize it
Four KPI tiles in a row (with up/down percentages), a large line chart, a donut chart, and a
"Recent activity" table, regardless of domain.

## Why it happens
"Dashboard" is associated with this layout, so it is generated before anyone asks what the user
needs to know.

## Ask
- What decisions does this user make from this screen?
- What changed since they last looked?
- What needs their action?
- Which numbers would they miss? Which do they never read?

## Repair
Structure by question:
1. **What needs attention** (exceptions, overdue, failing, waiting on you)
2. **What changed** (deltas with context and cause where known)
3. **Status of what I own** (tables or lists with the attributes that matter)
4. **Trends** only where trends inform decisions, with appropriate chart types

Use tables when users compare items; charts when they read shape over time; single numbers only
when the number itself drives action. See `references/_shared/kpi-card-dashboard.md`.
