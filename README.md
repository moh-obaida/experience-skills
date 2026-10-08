# Experience Skills

Portable agent skills for product experience: composition, identity, workflow speed, states,
interaction, motion, responsive behavior, accessibility, and honest critique, for any digital
product. They give a coding agent experience reasoning, real-world precedent, a design-intelligence
library, workflow analysis, browser verification, anti-slop reasoning, and critical review.

Consider broadly. Intervene selectively. Verify deeply. Product mechanics come first; distinct visual expression makes them legible and memorable.

**What it is:** a collection of specialist skills plus a router that picks the smallest useful
set for the request, loads depth only for the decision at hand, and treats the rendered result as
the source of truth when a runnable surface exists. It works on a one-line fix and on an
1,800-line specification.

**What it is not:** a mandatory workflow, a checklist to run end to end, a house style or aesthetic
preset, a requirement to invoke every skill, or a replacement for the agent's judgment. A result of
"no change" is valid. See [repository integration](docs/repository-integration.md) for the optional
host-repository contract.

## Install

```bash
npx skills add moh-obaida/experience-skills
```

The
[`skills` CLI](https://github.com/vercel-labs/skills) finds the skills in `skills/` and asks
which ones to install and for which agents.

```bash
# See what's in the collection
npx skills add moh-obaida/experience-skills --list

# Install only the router (recommended starting point)
npx skills add moh-obaida/experience-skills --skill experience-architect

# Install one specialist
npx skills add moh-obaida/experience-skills --skill anti-slop-ui

# Install for your user rather than the current project
npx skills add moh-obaida/experience-skills --skill experience-architect -g

# Non-interactive, one agent
npx skills add moh-obaida/experience-skills --skill experience-architect -a claude-code -y
```

More options, including `--all` and manual installation: [docs/installation.md](docs/installation.md).

### Unified marketplace bundle

The same collection is available as one marketplace skill named **Experience Skills**. It contains
the complete specialist methods, their references, scripts, assets, and vendored design
intelligence behind one selective router. Build the free MIT-licensed ZIP locally with
`npm run marketplace:bundle`; the generated archive is
`dist/marketplace/Experience-Skills.zip`. Its listing copy is in
[docs/marketplace/listing.md](docs/marketplace/listing.md). This does not change the standalone
`skills/<name>/` distribution above.

## Why this exists

Coding agents can build working interfaces quickly. What they often lack is judgment about the
experience:

- A centered card on an empty page gets called "clean and modern."
- A dashboard request gets four stat cards, whatever the product is.
- An empty screen gets filled with tips, fake metrics, and a large illustration.
- A plain input gets redesigned into six animated digit boxes that break paste.
- A flow that works gets shipped with nine screens, three of them asking what the software already knew.
- Every element fades up on load, and the one event that mattered changes silently.
- The user's excited idea gets "Great idea!" before anyone checks it against the goal.

These skills teach an agent *how to work* on those problems: what to look at, what to measure,
which questions to ask, when to push back, and how to verify the rendered result.

## The philosophy in brief

- **Environment interesting, textbox normal.** Personality belongs in the place, not in every control.
- **Alignment is not composition.** Empty space has to earn its existence.
- **Functionality is the baseline.** Count the steps; if the software knows the answer, don't ask.
- **Real states, not one screenshot.** Empty, dense, loading, failing, small, zoomed, RTL.
- **Motion explains events.** Not fade-and-slide on everything.
- **Evidence before praise.** "Clean" is a conclusion, not an observation.
- **Context is part of taste.** A tax form and a classroom game should not look alike.
- **The core instrument stays central.** The tool where the work happens keeps spatial, interaction, and focus priority.
- **Structure and expression both count.** Compare working-screen silhouettes and color behavior, energy, typography, and causal feedback.
- **Journeys decide readiness.** Repeat the main task, make mistakes, recover, and continue before polishing minor visuals.

Full text: [docs/philosophy.md](docs/philosophy.md). Where each principle changes what an agent does
(checkpoints, scripts, gates): [docs/operationalization.md](docs/operationalization.md).

## Skills

<!-- skills-table:start -->
| Skill | Area | Use when |
|---|---|---|
| [`experience-architect`](skills/experience-architect/SKILL.md) | router | Start here. Something about a product feels wrong and you are not sure which specialist applies. |
| [`composition-repair`](skills/composition-repair/SKILL.md) | visual | A screen looks empty, cramped, unbalanced, overflowing, or merely centered rather than composed. |
| [`workflow-compression`](skills/workflow-compression/SKILL.md) | workflow | A task takes too many clicks, screens, decisions, or repeated inputs. |
| [`visual-identity`](skills/visual-identity/SKILL.md) | visual | The product looks like every other product, or relies on its logo to be recognizable. |
| [`interaction-design`](skills/interaction-design/SKILL.md) | interaction | Controls are confusing, clever for no reason, slow to operate, unsafe, or inaccessible. |
| [`state-design`](skills/state-design/SKILL.md) | states | Only the happy path was designed, or loading, errors, offline, and long-running work are unclear or dishonest. |
| [`motion-design`](skills/motion-design/SKILL.md) | motion | Animation is generic fade-and-slide, missing where events need explaining, or slow, janky, or inaccessible. |
| [`product-friction`](skills/product-friction/SKILL.md) | workflow | The product overall feels hard: confusing terms, lost context, dead ends, duplicate concepts. |
| [`responsive-validation`](skills/responsive-validation/SKILL.md) | verification | A layout must be checked across sizes, zoom, input types, RTL, and content extremes. |
| [`empty-state-design`](skills/empty-state-design/SKILL.md) | states | A surface has little or no content and feels unfinished, or has been stuffed with filler. |
| [`anti-slop-ui`](skills/anti-slop-ui/SKILL.md) | quality | Work looks AI-generated or template-made: gradients, glass, pills, cards, fake stats, generic copy. |
| [`critical-review`](skills/critical-review/SKILL.md) | quality | Someone asks whether an idea, design, or change is good, and needs a real answer. |
| [`interface-forensics`](skills/interface-forensics/SKILL.md) | quality | A specific page or component needs exhaustive rendered inspection, source tracing, and verified repair. |
| [`use-all-skills`](skills/use-all-skills/SKILL.md) | router | Orchestrate a substantial product build or audit, or respond to an explicit all-skills request by considering every specialist and activating only those with material value. |
| [`anti-ai-slop`](skills/anti-ai-slop/SKILL.md) | quality | An existing site or app looks AI-generated or template-made and must be repaired end to end while keeping its own identity. |
<!-- skills-table:end -->

Start with `experience-architect` if you are unsure. It diagnoses the problem and pulls in only
the specialists it needs. Every specialist also works on its own.

## How routing works

```
REQUEST → SCOPE → EXPERIENCE CONTEXT → MATERIAL CONCERNS → SELECTIVE SPECIALISTS
        → TARGETED REFERENCES → IMPLEMENT → RENDER → FINAL GATE
```

- **Scope.** The request is classified as COMPONENT, SURFACE, PAGE, FLOW, or PRODUCT. A narrow
  request stays narrow; when scope is ambiguous the smaller one wins, and widening needs evidence.
- **Experience context.** For a surface or larger, the agent builds one compact context (product
  job, design system, strengths to keep, structure, locked requirements, open freedom, state model)
  and reuses it instead of re-deriving it in every specialist.
- **Selective specialists.** Only skills that can resolve a confirmed, material concern are
  activated, in dependency order. `use-all-skills` means all are *considered*, not all are run.
- **Targeted references.** A specialist loads the reference for the decision it is making, not the
  library. When page structure is relevant and genuinely open, it ranks two or three candidate
  compositions with a failure check for each; when structure is settled, it keeps it.
- **Final gate.** Rendered work is inspected before and after. A material visual failure in the
  final render fails the gate regardless of how many checklist items passed. Intentional drama,
  negative space, and expert density are not failures; the test is whether the result serves the
  product and task.

## Design-system library

The [original system index](shared/design-intelligence/design-systems-index.md) offers 30 authored
systems across five families. The [selector](shared/design-intelligence/design-system-selector.md)
compares structurally different directions on the primary working screen when selection is open. It starts with the user job, repeated loop, core instrument, and product invariants. The
[Niche Design Atlas](shared/design-intelligence/niche-atlas-index.md) supplies optional domain context: 15 niche groups, 90 niche profiles, and 151 authored candidates. Fingerprints are a duplicate signal; silhouette, grayscale, interaction, and rendered use decide whether choices are meaningfully different. The
[57 palette themes](shared/design-intelligence/palette-themes.md) and
[24 type strategies](shared/design-intelligence/type-strategies.md) translate the choice into
implementation roles. A small [Signal Foundry fixture](tests/fixtures/pages/signal-foundry.html)
demonstrates one system without acting as a production template.

## Quick examples

**"Use all Experience Skills to finish this starter product."** → `use-all-skills`
inspects the current repo, chooses Build or Audit Mode, names the core instrument and invariants, considers all specialists, activates only those with material leverage, builds, and verifies repeated primary journeys and recovery. Fewer active skills can be better orchestration.

**"Our site looks like every AI-generated site. Fix it, but keep what's ours."** → `anti-ai-slop`
renders the site, writes an identity ledger (what is intentional, what is a library default),
protects the owner's carriers, sweeps every surface for generated patterns, traces them to source,
replaces them with what this product would do, and rerenders.
([worked example](examples/anti-slop/identity-preserving-repair.md))

**"Audit this account page and check the CSS."** → `interface-forensics` inspects the rendered
route, traces significant findings through DOM and styles to source, then verifies repairs in the
same state and at stress sizes.

**"Something about our join page feels off."** → `experience-architect` measures the page,
classifies it as a FOCUSED surface with dead space and personality in the wrong place, and
routes to `composition-repair`, `visual-identity`, and `interaction-design`. The fix is a
product-derived environment around a *standard* code input, not fancier digit boxes.
([worked example](examples/identity/join-code-page.md))

**"Make the dashboard look less empty."** → `composition-repair` and `empty-state-design`
replace the greeting-plus-three-buttons layout with the user's real state: ready items, work to
continue, things needing attention. No fake stat cards.
([worked example](examples/composition/sparse-operational-home.md))

**"Setup takes too long."** → `workflow-compression` maps the flow, tags each wasted step
(redundant input, one-option choice, reversible confirmation, blocking wait), removes them, and
reports before/after counts while keeping the steps that protect money or judgment.
([worked example](examples/workflow/skip-known-decisions.md))

**"Does this look good?"** → `critical-review` states the goal, compares the proposal with the
current version, looks for hidden costs, and can conclude "worse than current."
([worked example](examples/full-product/public-service-form.md))

**Before presenting generated UI** → `anti-slop-ui` runs a gate: gradients without meaning,
glass over nothing, pills that aren't filters, generic copy, filler content, unrendered claims.

## Deterministic tools

Some skills include small scripts. They report measurements; the agent supplies judgment.

| Script | Skill | What it does |
|---|---|---|
| `measure-layout.mjs` | composition-repair | First-viewport coverage, content box, empty bands, focal candidates, sticky chrome share, scroll regions |
| `detect-overflow.mjs` | composition-repair | Horizontal overflow and the elements causing it, at several sizes |
| `detect-collisions.mjs` | composition-repair | Overlapping text, media, and controls |
| `layout-report.mjs` | responsive-validation | Viewport × zoom × RTL matrix: overflow, collisions, small targets, chrome, coverage; optional screenshots |
| `workflow-ledger.mjs` | workflow-compression | Before/after step counts and friction tags from a JSON flow map |
| `scan-motion.mjs` | motion-design | Static signals: layout-property animation, `transition: all`, long or infinite animations, missing reduced motion |
| `scan-slop.mjs` | anti-slop-ui | Static signals: gradients, glass, huge radii, pills, eyebrows, generic copy |
| `inventory-styles.mjs` | anti-slop-ui | Rendered inventory: radii, shadows, gradients, blur, type sizes, container nesting, repeated cards |
| `check-controls.mjs` | interaction-design | Unnamed controls, placeholder-only labels, missing alt, positive tabindex, small targets, contrast, invisible focus |
| `check-motion-rendered.mjs` | motion-design | Animations actually running, with and without reduced motion |
| `stress-content.mjs` | responsive-validation | Long text, unbroken strings, and RTL injected; reports failures that appear only under stress |

The browser scripts need Playwright (or `playwright-core` with an installed Chrome) in the project
being checked. Without a browser, the skills fall back to static analysis and say what remains
unverified. Scripts make no network calls of their own and write files only when asked.

## Supported agents

The skills follow the [Agent Skills specification](https://agentskills.io/specification): each is
a folder with a `SKILL.md` (YAML frontmatter plus instructions) and optional `references/`,
`scripts/`, and `assets/`. They are written for any agent that loads Agent Skills, and the
instructions are vendor-neutral.

What has been verified, and what has not:

- **Repository consistency (deterministic):** `npm run check` covers shared-source sync, skill and
  repository validation, links, catalog, unit and browser tests, and discovery/installation with the
  `skills` CLI (1.7.0, installing for Claude Code in a temporary project). Every skill also
  validates with the reference validator (`skills-ref` 0.1.1, `agentskills validate`).
- **Agent behavior (historical):** committed Claude Code runs on 13 scenarios from earlier versions
  (`tests/evals/results/README.md`). They are exploratory, not a scientific benchmark, and they
  predate the latest hardening.
- **Not claimed:** that agents using v1.0 produce better products than without it. The eval harness
  (Claude and Codex adapters, edit-mode build/repair scenarios) exists, but fresh multi-agent
  behavior samples for the current version have not been run.

## Precedent and design intelligence

- **Real-world precedent.** 271 dated observations across 107 public product surfaces (GOV.UK, Wise,
  GitHub, Kahoot, Stripe, Wikipedia, Airbnb, MDN, and others), interpreted in 24 precedent modules. Every
  entry says when the lesson applies and when copying it would fail. Invented examples are labeled as
  such.
- **Design intelligence.** 45 design directions, 49 compositions, 17 palette families with computed
  contrast, typography (including Arabic/Latin), surfaces, imagery, motion languages, navigation and
  density models, and chart selection. A conditional selection procedure compares structurally distinct directions from different
  families, so a product category never picks a style.
- **Anti-slop that proposes alternatives.** When a default is detected, the skill checks whether it is
  justified here; if not, it generates alternatives from different families and chooses by context.
  Gradients, glass, cards, and dense layouts are never rejected by category.

Details: [docs/design-intelligence.md](docs/design-intelligence.md). Adapted third-party material is
credited in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and explained in
[docs/third-party.md](docs/third-party.md).

Current depth limits are published in the [coverage report](research/coverage-report.md), including
items that still need item-specific precedent. Upstream curation decisions are recorded in the
[current audit](research/upstream-audit-2026-09.md).

## How it works

- **A core that loads.** Every skill starts by reading the shared operating rules
  (`experience-core.md`), each phrased as a behavior, not a slogan.
- **Checkpoints, not advice.** Each `SKILL.md` has decision points that change what the agent does:
  "For any change to a basic control: does it make the task faster or more reliable? No → reject it
  and move the personality into the environment."
- **Progressive disclosure.** Each `SKILL.md` is short (under 200 lines): when to use it, when
  not to, checkpoints, the workflow, which reference to load for which decision, and what "done"
  means. Each reference answers one decision.
- **A thin router.** `experience-architect` diagnoses and routes; it does not duplicate the specialists.
- **Shared source, vendored copies.** Common philosophy, taxonomies, patterns, and worked examples
  are written once in `shared/` and `examples/`, then copied into each skill's
  `references/_shared/` by `npm run sync`. An individually installed skill is self-contained, and
  it ships only the shared files its instructions actually point to. CI fails if a copy is stale, a
  shipped file is never referenced, or a skill points outside its folder.
- **Evidence levels.** Findings say whether they rest on rendered behavior, measurement, source,
  screenshots, or assumption.
- **Conditional enforcement.** Open direction choices compare materially different candidates; composition changes
  name a composition; workflow changes count before/after; custom controls justify their cost; and
  meaningful runnable UI is rendered or reported as **NOT VERIFIED IN RENDERED OUTPUT**.

Details: [docs/architecture.md](docs/architecture.md).

## Repository layout

```
skills/        15 installable skills (the product)
shared/        source of truth: philosophy, taxonomies, patterns, anti-patterns, evaluation, tools,
               precedent modules, design-intelligence library, license notices
examples/      22 worked teaching examples (goal, bad instinct, analysis, better and alternative directions, verification)
catalog/       skills.json: categories, shared-module declarations, generated metadata
scripts/       sync, validation, link checking, catalog generation, CLI discovery test, agent evals
tests/         unit and browser tests, routing fixtures, agent-eval scenarios, fixtures
research/      dated observations of real products, prior art, audit, research notes
third-party/   provenance of adapted third-party material
docs/          architecture, philosophy, authoring, evaluation, installation, contributing
```

## Integration and development

Copy [`assets/experience-contract.md`](assets/experience-contract.md) into `AGENTS.md`,
`CLAUDE.md`, Cursor rules, or the equivalent repository instruction file when you want the pre-ship
checks to be visible to the host agent. Keep it scoped to meaningful user-facing work.

```bash
npm install          # installs playwright-core for browser tests (uses your installed Chrome)
npm run sync         # after editing anything in shared/ or examples/
npm run check        # full gate: shared sync, validation, links, catalog, tests, CLI discovery
npm run eval:agents  # with vs without skills on real scenarios (uses a logged-in Claude Code CLI; spends usage)
```

`npm run check` includes a discovery test that fetches the `skills` CLI with `npx`. Set
`SKIP_DISCOVERY=1` to skip it when offline.

## Stability in v1

v1.0 means the public interface below will not change incompatibly within 1.x. It does not mean the
content is frozen: references, routing, design intelligence, scripts, and verification will keep
improving.

**Stable in 1.x:**

- Skill names (the 15 folders under `skills/`); `experience-architect` remains the entry skill.
- Each skill is a valid, self-contained Agent Skill that installs on its own with the `skills` CLI
  or by copying its folder, with `name` and `description` frontmatter and `metadata.version`.
- Shared material reaches a skill only as generated copies in `references/_shared/` and
  `scripts/_shared/`; a skill never depends on files outside its folder.
- The selective-routing contract: scope classification, one shared experience context, activation
  only for material concerns, required reference loading, and the rendered final gate.
- Command-line scripts keep their `--help` flag and exit codes (0 clean, 1 findings, 2 usage or
  environment error).

**Not stable (may change in any release):** the wording of a description or reference, the contents
of a design-intelligence list, individual checkpoint phrasing, script output layout, test and eval
internals, and anything under `research/`.

**Adding** skills, references, compositions, or checks is backward compatible. **Renaming or
removing** a skill, changing the exit-code contract, or making a skill depend on files outside its
folder is breaking and waits for a major version. Details: [docs/architecture.md](docs/architecture.md#stability-and-compatibility).

## Contributing

Bug reports about bad advice are especially welcome ("the anti-slop skill told my government form
to add a gradient"). See [CONTRIBUTING.md](CONTRIBUTING.md) and
[docs/contributing-a-skill.md](docs/contributing-a-skill.md).

## License

[MIT](LICENSE). Reference sites mentioned in `research/` are linked and discussed; no third-party
assets or screenshots are redistributed.
