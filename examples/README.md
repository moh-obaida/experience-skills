# Worked Examples

Twenty-two worked examples. Each has the same shape: context, the bad version, the typical wrong
review, the correct analysis, the better version, measurements where they apply, why it works,
when the lesson does **not** apply, and universal analogues.

These files are the source of truth. Skills receive copies of the relevant ones in
`references/_shared/` (declared in `catalog/skills.json`, copied by `npm run sync`).

| Example | Product types | Archetype | Core lesson |
|---|---|---|---|
| [Join-code page](identity/join-code-page.md) | Games, events, classrooms | FOCUSED | Make the environment interesting, not the textbox |
| [Logo-removal test](identity/logo-removal-test.md) | Learning app (any) | OPERATIONAL, EXPERIENTIAL | Identity carriers derived from the product |
| [Context-aware judgment](interaction/context-aware-judgment.md) | Live games, queues, moderation | LIVE CONTROL | Don't make users restate known scope |
| [Search proportionality](interaction/search-proportionality.md) | Apps, admin tools | OPERATIONAL, DISCOVERY | Command palettes only when scope and frequency justify them |
| [Undo vs confirm](interaction/undo-vs-confirm.md) | Project tools (any) | OPERATIONAL | Undo for reversible, confirmation for consequential |
| [Bottom-sheet overuse](interaction/bottom-sheet-overuse.md) | Mobile apps | OPERATIONAL | Direct controls before layered sheets |
| [Sparse operational home](composition/sparse-operational-home.md) | Apps, dashboards | OPERATIONAL | Useful density, not fake metrics |
| [Editorial, not cards](composition/editorial-not-cards.md) | Editorial, docs | CONTENT | Typography and rhythm over containers |
| [Skip known decisions](workflow/skip-known-decisions.md) | Generators, importers | CREATION | Known answers and one-option choices are not questions |
| [Inline rename](workflow/inline-rename.md) | Any app with named objects | OPERATIONAL | Edit where the value is |
| [CLI project init](workflow/cli-project-init.md) | Developer tools | CREATION (terminal) | Infer, show, allow override; not web-only |
| [Empty-state overcorrection](states/empty-state-overcorrection.md) | Libraries, histories | OPERATIONAL | Explain absence, offer next action, no filler |
| [Honest error states](states/honest-error-states.md) | Anything with a server | any | Distinguish fixable, retrying, terminal, partial, offline, unknown |
| [Motion that explains](motion/motion-that-explains.md) | Games, commerce, tools | EXPERIENTIAL | Motion explains events |
| ["Premium" slop](anti-slop/premium-slop.md) | Landing pages | marketing | What job does each treatment do? |
| [KPI-card dashboard](anti-slop/kpi-card-dashboard.md) | Operations, analytics | DATA-HEAVY | What changed, why, what needs action |
| [Identity-preserving repair](anti-slop/identity-preserving-repair.md) | Local businesses, any generated site | marketing → TRANSACTIONAL | Remove generated decisions; keep and extend the owner's carriers |
| [Sparse account surface](anti-slop/sparse-account-surface.md) | Commerce, subscriptions, any account area | OPERATIONAL | Every element earns its place against what's already visible and how often it's used |
| [Product page purchase path](full-product/product-page-purchase-path.md) | Commerce | DISCOVERY → TRANSACTIONAL | Richness around, not in front of, purchase |
| [Public-service form](full-product/public-service-form.md) | Government, utilities | TRANSACTIONAL | Plain can be the excellent answer |
| [Mobile money transfer](full-product/mobile-money-transfer.md) | Banking, payments | TRANSACTIONAL | Compression must preserve safety |
| [Long-running generation](full-product/long-running-generation.md) | AI tools, exports, renders | CREATION | Waiting architecture is part of time-to-outcome |
