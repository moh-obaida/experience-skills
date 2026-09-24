# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[Semantic Versioning](https://semver.org/). All skills share the repository version.

## [0.1.0] - 2026-09-24

First public release.

### Skills
- `experience-architect`: diagnose experience problems and route to specialists; execution loop and final gate.
- `composition-repair`: focal point, viewport budget, dead space, density, grid proportions, scroll and sticky chrome; three layout measurement scripts.
- `workflow-compression`: step mapping, friction taxonomy F1–F10, before/after counts; `workflow-ledger.mjs`.
- `visual-identity`: product-derived identity carriers, environment vs controls, logo-removal test.
- `interaction-design`: familiar controls, action hierarchy, context-scoped controls, undo vs confirm, forms, keyboard and touch.
- `state-design`: state inventory and matrix, transport vs product state, optimistic vs authoritative, long-running work, real-time.
- `motion-design`: event-driven motion, tokens, sequencing, reduced motion, performance; `scan-motion.mjs`.
- `product-friction`: friction ledger across terminology, cognitive load, discoverability, continuity, IA, concepts.
- `responsive-validation`: validation matrix across sizes, zoom, RTL, input modes; `layout-report.mjs`.
- `empty-state-design`: empty-state types, archetype density, useful density vs filler.
- `anti-slop-ui`: 20 pattern references, final slop gate; `scan-slop.mjs`.
- `critical-review`: goal-first evaluation, calibrated verdicts, disagreement and praise calibration.

### Shared content
- Philosophy (6), taxonomies (8), patterns (15), anti-patterns (7), evaluation (4) modules.
- 20 worked examples across games, commerce, finance, public service, CLI, data, editorial, and mobile.

### Tooling
- Source-of-truth `shared/` and `examples/` vendored into each skill (`npm run sync`), with CI checks for staleness and self-containment.
- Spec and convention validation, link checking, catalog and README generation, public-safety scans.
- Unit, browser, and routing tests; discovery and install test with the `skills` CLI.
