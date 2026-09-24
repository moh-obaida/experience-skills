# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[Semantic Versioning](https://semver.org/). All skills share the repository version.

## [0.1.1] - 2026-09-24

A structural revision after a critical review of v0.1.0. The principle applied throughout: every
file must change what the agent observes, rejects, measures, loads, edits, or counts as done.

### Changed
- **The universal core now loads.** `experience-core.md` is rewritten as 26 operating rules, each
  phrased as a behavior (trigger → required action), with the evidence levels included. Every
  `SKILL.md` has a "Start here" section that tells the agent to read it first; validation enforces it.
- **Mandatory checkpoints.** Every `SKILL.md` has a "Checkpoints" section of decision points that
  change the agent's branch (for example, "Before making a basic control more unusual: does it make
  the task faster or more reliable? No → reject it and move personality to the environment").
  Validation requires at least four.
- **References consolidated by decision:** 128 → 59 files. Each file answers one decision the
  workflow routes to; sections inside keep the old topics.
- **anti-slop-ui reframed around justification.** Its 20 category files became 4 files where every
  pattern is described as "earns its place when / is a default when / ask / repair". The skill states
  that no pattern is wrong by category.
- **Vendoring trimmed:** 148 → 91 shared copies. A skill ships a shared file only if its `SKILL.md`
  names it where it is used; shared patterns that duplicated a skill's own references were dropped.
- `SKILL.md` files are shorter (1,760 → about 1,340 lines total; each under 130).

### Removed
- Shared sources no skill used after the audit: 10 patterns (their content lives in skill references),
  `rendered-truth.md` and `time-to-outcome.md` (now core rules), `workflow-cliches.md`.

### Added
- `scripts/run-agent-evals.mjs` (`npm run eval:agents`): runs a real agent on each scenario with and
  without the skills installed, records which skills, references, and scripts it actually loaded,
  grades answers with a condition-blind judge against each scenario's principles and unacceptable
  recommendations, and writes a report. Regression anchors (join-code page, sparse home, public-service
  form, money transfer, long-running generation, CLI init, KPI dashboard, purchase path, editorial) are
  marked in `tests/evals/routing.json`; `--anchors` runs only those.
- Every scenario has an exact user prompt; the join and dashboard scenarios ship fixture pages.
- Validation: "Start here" must load the core; "Checkpoints" must exist; every vendored file must be
  named in `SKILL.md`; every shared source must be used by some skill.

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
