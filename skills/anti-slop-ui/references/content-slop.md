# Content Slop: Stats, Dashboards, Copy, Icons

Content produced to fill space or sound modern. The test is always whether it is **true,
specific, and useful to this user now**.

Sections: Stat cards · Dashboards · Copy · Icons

## Stat cards

**Earns its place when:** the number drives action or proves a specific claim, with context
(target, comparison, cause). Scale statistics on a payments company's homepage are proof; a
"Deliveries late in North zone: 18% (usual 6%)" tile drives action.

**Default when:** "Total projects: 3", "Active users: 1", "+12% this week" on nearly empty accounts;
zeros and ones that emphasize emptiness; sparklines without axes.

**Ask:** What would the user do differently if this number were higher or lower?

**Repair:** replace with actionable state ("2 quizzes need review"), or with the underlying items,
or keep the number with context. On empty accounts, show next actions (empty-state-design).

## Dashboards

**Earns its place when:** structure follows the decisions the user makes from the screen.

**Default when:** four KPI tiles, a big line chart, a donut, and "recent activity", regardless of
domain.

**Ask:** What decisions does this user make here? What changed since they last looked? What needs
their action?

**Repair:** order by question: needs attention → what changed and why → status of what I own →
trends that inform decisions. Tables for comparison, charts for shape over time, single numbers only
when the number itself drives action. See `references/_shared/kpi-card-dashboard.md`.

## Copy

**Default when:** unlock, elevate, supercharge, empower, revolutionize, seamless(ly),
effortless(ly), powerful, cutting-edge, next-generation, all-in-one, "take X to the next level,"
"everything you need to…", feature names like "Smart Insights."

**Ask:** Could this sentence appear on a competitor's site unchanged? Does it contain a fact a user
could check?

**Repair:** specific, checkable statements in the user's vocabulary:

| Generic | Specific |
|---|---|
| "Supercharge your classroom engagement" | "Run a 10-minute quiz game from any saved lesson. Students join with a 6-digit code." |
| "Powerful analytics" | "See which questions most students missed, per class." |
| "Seamless integrations" | "Import rosters from Google Classroom and Clever." |

Swapping synonyms ("Unlock" → "Discover") is not a repair. The scanner (`scripts/scan-slop.mjs`)
flags common phrases; it cannot tell good copy from bad.

## Icons

**Earns its place when:** icons label common, unambiguous actions (with accessible names),
disambiguate similar items consistently, or save space in dense toolbars with tooltips.

**Default when:** an icon sits beside every heading and list item repeating the text; icons in
colored rounded squares on every feature card; sparkles meaning "AI"; emoji as a design system.

**Ask:** Does the icon tell the user anything the text does not?

**Repair:** remove icons that repeat labels; keep icon + label for navigation and important
actions; one icon style tied to the shape language; describe what the feature does instead of
sparkles.
