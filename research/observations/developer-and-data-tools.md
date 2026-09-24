# Observations: Developer, Infrastructure, and Data Tools

Dated observations of real, public product surfaces made for Experience Skills. Each bullet has a
stable ID that precedent modules cite. Observations describe what was seen; interpretation lives in
the precedent modules (`shared/precedent/`) and the design-intelligence library.

**Method codes:** R = the live page was opened in a browser and looked at (desktop viewport about
800×600 CSS px unless noted; mobile at 375×812); T = page text or documentation read; R+T = both.
Regional versions differ; the region is noted where it affected what was seen. Sites change; treat
every observation as true on its date only. No screenshots are stored in this repository.

## GitHub — repository page (https://github.com/vercel-labs/skills) — R, 2026-09-24
- GH1 Tabs carry live counts (Issues 670, Pull requests 245): navigation doubles as status.
- GH2 The file list shows, per row, the last commit message and its relative age: every row answers "what changed here and when" without opening anything.
- GH3 One filled green primary action ("Code") per region; "Go to file" search sits beside the branch picker, where file-finding starts.
- GH4 Right sidebar holds reference metadata (About, license, stars, releases) at P2/P3 weight; the file list is P0.

## GitHub Actions — workflow runs list (https://github.com/vercel-labs/skills/actions) — R, 2026-09-24
- GA1 Each run row shows a status icon (success check, failure cross), the commit title, workflow name, branch chip, trigger, relative time, and duration: dense but scannable because every column is a real attribute.
- GA2 Filters (Event, Status, Branch, Actor) sit above the list as compact dropdowns; the run count ("1,176 workflow runs") is shown.
- GA3 A left sidebar lists workflows by name, plus management items separated below (Caches, Deployments): frequent vs occasional actions split.

## Grafana Play — dashboard not-found state (https://play.grafana.org/) — R, 2026-09-24
- GF1 The first URL rendered a solid dark screen for over 4 seconds (no loading indicator visible) before routing.
- GF2 A not-found state uses the product mascot illustration, a one-line title, one explanatory sentence, a primary "Back to Home" and a secondary "Community Help" action: proportionate, branded, with a way forward.
- GF3 The same error is also shown as a red toast in the corner at the same time: duplicated error messaging.
- GF4 Search in the top bar shows its keyboard shortcut (⌘+K) inline.

## TradingView — chart workspace (https://www.tradingview.com/chart/) — R, 2026-09-24
- TV1 Canvas-first creation/analysis layout: a vertical drawing-tool rail on the left, a symbol/timeframe/indicator toolbar on top, a panel rail on the right, and timeframe presets (1D 5D 1M 3M 6M YTD 1Y 5Y All) along the bottom.
- TV2 Toolbars are icon-only with no labels; discoverability relies on tooltips and prior expertise (an expert tool trade-off).
- TV3 Sell and Buy price boxes sit at the top-left of the chart as compact colored quote buttons.
- TV4 The chart area stayed blank at 5 seconds while chrome was fully rendered (canvas content loads after chrome).

## Stripe Docs — "Accept a payment" (https://docs.stripe.com/payments/accept-a-payment) — R, 2026-09-24
- SD1 Integration choice is made in-page with tabs (Checkout / Elements / Mobile) and a second segmented choice (Stripe-hosted page / Embedded page): the reader chooses a path and the page reconfigures instead of linking to separate guides.
- SD2 A callout near the top ("Not a developer?") routes non-technical readers away early: audience triage before detail.
- SD3 Page utilities for agents and tools sit under the title: "Ask about this page", "Copy for LLM", "View as Markdown", "Install tools".
- SD4 Left navigation tree grouped by product area with the current page highlighted; breadcrumbs above the title; search with an "Ask AI" option.

## Linear Docs — home (https://linear.app/docs) — R, 2026-09-24
- LD1 Dark theme consistent with the product; left sidebar lists docs sections mirroring the product's own concepts (Teams, Issues, Projects, Cycles, Views, Initiatives).
- LD2 "Popular" entry points are large cards with an icon, title, and one-line description (Start Guide, Import Issues): a small curated index rather than the whole tree.

## Cursor — homepage (https://cursor.com/) — R, 2026-09-24
- CU1 Left-aligned headline and two actions (OS-aware "Download for macOS", "Request a demo") above a large, legible screenshot of the actual agent UI (task list, chat, live preview of a generated site).
- CU2 Warm off-white canvas with dark text; no gradients; the product screenshot is the visual weight of the page.

## Arc / Dia — homepage (https://arc.net/) — R, 2026-09-24
- AR1 The page announces a product transition ("Meet Dia, the next evolution of Arc") with specific reassurance ("Weekly security updates, SOC 2 certification") rather than generic claims.
- AR2 A bold blue zigzag band pattern frames the top and bottom of the viewport as a recurring brand motif around a plain product screenshot; one dark action with the app icon.

## Cloudflare — homepage (https://www.cloudflare.com/) — R, 2026-09-24
- CF1 A saturated orange field with a subtle grid texture and radial glow forms the hero environment; the headline makes a specific scale claim ("powering 20% of the Internet"); one action ("Start building for free").
- CF2 An "Under attack?" link sits in the main navigation: an emergency path for a user in crisis is one click from every page.
- CF3 A pill-shaped announcement link above the headline advertises the company's conference with dates.

## Datadog — homepage (https://www.datadoghq.com/) — R, 2026-09-24
- DD1 A tilted, perspective product screenshot of real dashboards (large numeric tiles, hexagon host map, time series) dominates the hero; two actions (filled "Free trial", outlined "See the platform").
- DD2 The dashboards in the image are dense and colorful by design: monitoring products sell density as capability.
- DD3 Award announcement in a top banner (analyst report) as the first proof point.

## Linear — conceptual model docs (https://linear.app/docs/conceptual-model) — Documentation (T), 2026-09-24
- LC1 A small, explicit concept hierarchy (Workspace → Teams → Issues; Issues → Projects → Initiatives; Cycles for time-boxing; Views as saved lenses on the same work; Triage for incoming work). Views are "different ways of looking at the same underlying work" rather than separate objects.

## Vercel — homepage (https://vercel.com/) — R, 2026-09-24
- VC1 A large solid black triangle (the logo's geometry) is the hero image, set between a left-aligned two-line headline and a short right-aligned list of audiences. Brand geometry as the focal object; monochrome throughout.
- VC2 A customer logo strip in mixed original wordmark styles runs directly under the fold line.

## Linear — homepage (https://linear.app/) — R, 2026-09-24
- LN1 The hero region stayed empty (dark background, navigation only) for more than 10 seconds in this browser: when the showcase depends on heavy client-side rendering, a slow or failed load shows as dead space.

## MDN — CSS reference page (https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) — R, 2026-09-24
- MD1 A left "In this article" table of contents (Try it, Syntax, Formal definition, Formal syntax, Examples, Specifications, Browser compatibility, See also) makes every reference page the same shape: experts jump directly.
- MD2 A "Baseline · Widely available" badge with browser icons answers "can I use this?" before any explanation.
- MD3 "Try it" is an interactive demo directly under the title: selectable code variants on the left update a live preview on the right; experimentation precedes formal detail.
- MD4 The property name is set in code style inside the page title; theme and language controls sit in the header.

## Hacker News — front page (https://news.ycombinator.com/) — R, 2026-09-24
- HN1 About 30 numbered stories fill a single desktop viewport: title, domain, points, author, age, comment count on two lines each; no images; one orange header bar is the only color.
- HN2 The density and plainness are recognizable identity in themselves (it passes a logo test through structure alone), but target sizes are small and contrast is low for secondary text.

## Raycast — homepage (https://www.raycast.com/) — T, 2026-09-24
- RC1 A keyboard visual is the dominant hero image: the product's core mechanic (keyboard-first launcher) is the motif. Reliability stated as a metric (crash-free rate).
