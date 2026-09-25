# Experience Skills

Portable agent skills for product experience: composition, identity, workflow speed, states,
motion, responsive behavior, and honest critique, for any digital product. They combine
experience reasoning, real-world precedent, a design-intelligence library, workflow analysis,
browser verification, anti-slop reasoning, and critical review.

Make the environment memorable. Make the interaction obvious. Make the outcome fast.

## Install in 10 seconds

```bash
npx skills add <owner>/experience-skills
```

Replace `<owner>` with the GitHub account or organization that hosts this repository. The
[`skills` CLI](https://github.com/vercel-labs/skills) finds the skills in `skills/` and asks
which ones to install and for which agents.

```bash
# See what's in the collection
npx skills add <owner>/experience-skills --list

# Install only the router (recommended starting point)
npx skills add <owner>/experience-skills --skill experience-architect

# Install one specialist
npx skills add <owner>/experience-skills --skill anti-slop-ui

# Install for your user rather than the current project
npx skills add <owner>/experience-skills --skill experience-architect -g

# Non-interactive, one agent
npx skills add <owner>/experience-skills --skill experience-architect -a claude-code -y
```

More options, including `--all` and manual installation: [docs/installation.md](docs/installation.md).

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
<!-- skills-table:end -->

Start with `experience-architect` if you are unsure. It diagnoses the problem and pulls in only
the specialists it needs. Every specialist also works on its own.

## Quick examples

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

Tested for this release: discovery and installation with `skills` CLI 1.7.0 (installing for Claude
Code in a temporary project); validation of every skill with the reference validator (`skills-ref`
0.1.1, `agentskills validate`); and behavioral runs with Claude Code on 13 scenarios, with and
without the skills (summary in `tests/evals/results/README.md`: 35/51 principles met without, 45/51
with; skills invoked in 12 of 13 runs; specialist handoff and rendered measurement are still weak).
Codex and other agents supported by the CLI were not tested.

## Precedent and design intelligence

- **Real-world precedent.** 167 dated observations of 64 public product surfaces (GOV.UK, Wise,
  GitHub, Kahoot, Stripe, Wikipedia, Airbnb, MDN, and others), interpreted in 15 concept modules. Every
  entry says when the lesson applies and when copying it would fail. Invented examples are labeled as
  such.
- **Design intelligence.** 45 design directions, 48 compositions, 17 palette families with computed
  contrast, typography (including Arabic/Latin), surfaces, imagery, motion languages, navigation and
  density models, and chart selection. A selection procedure compares three directions from different
  families, so a product category never picks a style.
- **Anti-slop that proposes alternatives.** When a default is detected, the skill checks whether it is
  justified here; if not, it generates alternatives from different families and chooses by context.
  Gradients, glass, cards, and dense layouts are never rejected by category.

Details: [docs/design-intelligence.md](docs/design-intelligence.md). Adapted third-party material is
credited in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and explained in
[docs/third-party.md](docs/third-party.md).

## How it works

- **A core that loads.** Every skill starts by reading the same 26 operating rules
  (`experience-core.md`), each phrased as a behavior, not a slogan.
- **Checkpoints, not advice.** Each `SKILL.md` has decision points that change what the agent does:
  "For any change to a basic control: does it make the task faster or more reliable? No → reject it
  and move the personality into the environment."
- **Progressive disclosure.** Each `SKILL.md` is short (about 100–125 lines): when to use it, when
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

Details: [docs/architecture.md](docs/architecture.md).

## Repository layout

```
skills/        12 installable skills (the product)
shared/        source of truth: philosophy, taxonomies, patterns, anti-patterns, evaluation, tools,
               precedent modules, design-intelligence library, license notices
examples/      20 worked teaching examples (goal, bad instinct, analysis, better and alternative directions, verification)
catalog/       skills.json: categories, shared-module declarations, generated metadata
scripts/       sync, validation, link checking, catalog generation, CLI discovery test, agent evals
tests/         unit and browser tests, routing fixtures, agent-eval scenarios, fixtures
research/      dated observations of real products, prior art, audit, research notes
third-party/   provenance of adapted third-party material
docs/          architecture, philosophy, authoring, evaluation, installation, contributing
```

## Development

```bash
npm install          # installs playwright-core for browser tests (uses your installed Chrome)
npm run sync         # after editing anything in shared/ or examples/
npm run check        # full gate: shared sync, validation, links, catalog, tests, CLI discovery
npm run eval:agents  # with vs without skills on real scenarios (uses a logged-in Claude Code CLI; spends usage)
```

`npm run check` includes a discovery test that fetches the `skills` CLI with `npx`. Set
`SKIP_DISCOVERY=1` to skip it when offline.

## Contributing

Bug reports about bad advice are especially welcome ("the anti-slop skill told my government form
to add a gradient"). See [CONTRIBUTING.md](CONTRIBUTING.md) and
[docs/contributing-a-skill.md](docs/contributing-a-skill.md).

## License

[MIT](LICENSE). Reference sites mentioned in `research/` are linked and discussed; no third-party
assets or screenshots are redistributed.
