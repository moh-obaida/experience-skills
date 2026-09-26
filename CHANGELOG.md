# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[Semantic Versioning](https://semver.org/). All skills share the repository version.

## Unreleased

### Added
- The Niche Design Atlas: an index plus fifteen niche-group files (business, developer, AI, games, education, commerce, finance, media, social, health, public, travel, physical-world operations, creative, personal) with 90 product-reality profiles and 150 authored, niche-adapted design systems. Each system has a machine-readable fingerprint, a thirteen-row layer contract, and seven color roles; validation enforces the contract, computes contrast, and fails siblings that differ in fewer than four of eleven fingerprint dimensions.
- `anti-ai-slop`, the fifteenth skill: renders an existing product, extracts and protects its identity, sweeps every surface with a repair-oriented slop taxonomy (surfaces, typography/color/copy/icons, structure/motion/personality), traces generated decisions to source, replaces them with identity-compatible alternatives, and rerenders; includes `extract-identity.mjs` (token census, library-default fingerprints, utility slop stacks), a worked example, a routing scenario, and tests.
- `use-all-skills`, a full-project conductor with a thirteen-skill participation ledger and ordered implementation/verification phases.
- A starter-product behavioral eval scenario and Codex shell-read trace parsing, with a dated result showing the remaining rendered-verification gap.
- Thirty authored implementation-ready design systems, 57 palette themes, twenty-four typography strategies, system-font pairings, component patterns, and canonical examples.
- `interface-forensics`, a page-scoped rendered audit and repair skill with DOM/CSS evidence collection, source tracing, responsive and state stress, and before/after verification.

### Changed
- The design-system selector is niche-first: identify the product's niche, read its realities, then compare three structurally different candidates.
- `use-all-skills` conducts fourteen siblings; after responsive validation the order is anti-slop-ui → anti-ai-slop → interface-forensics → critical-review → repair → verify. Full-pass eval signals check the new order.
- `anti-slop-ui` hands whole-product remediation to `anti-ai-slop` and remains the knowledge, prevention, and gate specialist.

## [0.3.0] - 2026-09-25

The enforcement and repository-wide intelligence upgrade.

### Added
- Shared experience operating contract with significance thresholds, conditional reference rules,
  rendered-evidence exceptions, evidence reporting, and specialist handoff artifacts.
- Named multi-skill recipes for visually dead products, flow compression, live experiences, redesign
  review, and generated-UI ship gates.
- Repository integration guide and copyable `assets/experience-contract.md`.
- Current upstream curation audit for Hallmark and UI/UX Pro Max at reviewed commits.
- Generated coverage audit for directions, compositions, palettes, typography, motion, and precedent.
- Specialist precedent packs for controls, product interiors, lifecycle states, and cross-concern
  routing; structured observation metadata and a reproducible repository self-audit.
- Edit-mode build/repair evals with Claude/Codex adapters, repeatable samples, before/after snapshots,
  changed-file tracking, and explicit multi-agent limitations.
- Eval telemetry for specialist activation, design-intelligence use, precedent use, rendered evidence,
  completion signals, and required-reference compliance.

### Changed
- All skills require the operating contract and add conditional-loading and handoff completion checks.
- Meaningful runnable UI work now requires rendered verification unless an explicit exception applies;
  skipped rendering is reported as NOT VERIFIED IN RENDERED OUTPUT.
- Experience Architect now routes through named graphs while keeping the significance gate to avoid
  specialist spam.

## [0.2.0] - 2026-09-25

The deep intelligence upgrade: real-world precedent, a design-intelligence library, positive
anti-slop alternatives, new rendered-evidence tools, and real agent evaluations.

### Added
- **Real-world evidence:** `research/observations/` with 167 dated observations of 64 public product
  surfaces (observed in a browser or read from official documentation on 2026-09-24).
- **Precedent modules:** 15 concept modules in `shared/precedent/`, each entry with what works, why,
  when it is right, what does not transfer, and when copying fails. Vendored into the skills that use them.
- **Design-intelligence library** (`shared/design-intelligence/`): a selection procedure, 45 design
  directions in 10 families, 48 compositions in 7 families, 17 palette families with computed contrast,
  typography (including multilingual and Arabic/Latin), surfaces and shape, imagery and icons, motion
  languages, density/spatial/navigation models, data visualization, and an anti-generic alternatives map.
- **Product archetypes** taxonomy (26 archetypes and their defaults).
- **New scripts:** `inventory-styles.mjs` (anti-slop-ui), `check-controls.mjs` (interaction-design),
  `check-motion-rendered.mjs` (motion-design), `stress-content.mjs` (responsive-validation). The layout
  library now reports the largest dead region and text contrast.
- **New references:** interruptions, modes, and status (workflow-compression); branded states and
  sparse/dense identity (visual-identity); search, selection, and bulk (interaction-design); trust and
  transparency (product-friction); the alternatives engine (anti-slop-ui); verdict examples
  (critical-review); device and viewport edges (composition-repair).
- **Friction classes F11–F15** (mode, interruption, context switch, hidden status, duplicate object) in
  the taxonomy and `workflow-ledger.mjs`; lifecycle and collaboration states; six new motion events.
- **Third-party handling:** `THIRD_PARTY_NOTICES.md`, `third-party/provenance.json`, `docs/third-party.md`;
  adapted Hallmark and UI UX Pro Max ideas rewritten, with notices vendored alongside adapted material.
- **Behavioral evaluation:** new scenarios (anti-slop nuance, real states, admin setup, fashionable
  redesign) and five recorded runs with Claude Code on the 13 anchor scenarios (see
  `tests/evals/results/README.md`). Principles met: 35/51 in each of two runs without skills; 42/51,
  45/51, and 45/51 in three runs with skills as they were revised. One run per cell, so these are
  smoke signals, not effect sizes.
- **Core brief inside every SKILL.md:** a generated block (source `shared/philosophy/core-brief.md`,
  drift-checked) with the eight rules that matter most. Evals showed agents rarely follow "read
  `experience-core.md` first".
- Catalog fields generated from SKILL.md: activation examples, anti-triggers, related skills,
  precedent and design-intelligence modules.
- Docs: `docs/design-intelligence.md`, `docs/third-party.md`, `research/audit-2026-09.md`.

### Changed
- Every skill gained checkpoints that use the new material (for example, composition-repair must name a
  composition from the library before restructuring; visual-identity must compare three directions
  from different families; anti-slop-ui must generate three alternatives and run a reverse-dogma check;
  critical-review follows a mandatory 12-step sequence).
- Worked examples are labeled as invented teaching examples and extended with goals, constraints,
  alternative directions, implementation notes, verification, and failure conditions.
- The public-service form example was corrected against GOV.UK's research-backed question-page guidance.
- **Descriptions are trigger-first** ("Use this skill whenever …", in user phrasing). With the old
  capability-first descriptions, a skill loaded in 3 of 13 eval runs; with the new ones, in 11–12
  of 13. The authoring rule and validator changed to match.
- `experience-architect` checkpoint 3 requires invoking specialist skills before writing any
  recommendation. In evals, the expected specialist skills loaded went from 7 to 13 of 44.
- The eval harness records every skill script in a command and no longer stores temp paths.
- Validation checks precedent citations against the observation log, provenance targets, and that
  adapted material ships with its license notice.

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
