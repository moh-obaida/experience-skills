# Architecture

## Goals

1. Each skill installs and works on its own.
2. Shared ideas are written once.
3. Agents load only what a task needs.
4. The structure is verifiable by scripts, not by trust.
5. No custom infrastructure: folders, markdown, a few scripts, tests.

The operating contract adds enforcement without changing those goals: scope classification, the
shared experience context, conditional depth rules, the render contract, and the final visual gate
live in a vendored shared reference (`experience-operating-contract.md`), while recurring
multi-skill graphs and handoff artifacts live in the router. Meaningful runnable UI follows the
render contract with explicit exceptions; simple or backend-only work remains below the
significance threshold.

## Layout

```
skills/<name>/
  SKILL.md                 thin: purpose, triggers, anti-triggers, workflow, reference map, completion
  references/*.md          skill-specific depth, loaded on demand
  references/_shared/*.md  GENERATED copies of shared modules and worked examples
  scripts/*.mjs            optional deterministic tools
  scripts/_shared/*.mjs    GENERATED copies of shared script libraries
  assets/                  templates (for example workflow-template.json)

shared/                    source of truth
  philosophy/  taxonomies/  patterns/  anti-patterns/  evaluation/  tools/
examples/<category>/*.md   worked examples (source of truth, vendored where relevant)
catalog/skills.json        declarations + generated metadata
scripts/                   repository tooling
tests/                     tests, fixtures, scenarios, routing evals
```

## Decision 1: flat sibling skills with a thin router

The collection is fourteen specialist/router skills plus `use-all-skills`, a selective router,
rather than one large skill. Agents route on skill descriptions; distinct descriptions for distinct problems route better than one description that
tries to cover everything. Users can install one specialist without the rest.

`experience-architect` is a router, not an encyclopedia. It diagnoses, maps symptoms to problem
classes, chooses the smallest specialist set that covers every confirmed material concern (usually
at most three at first), runs the execution loop, and applies the final gate. If a specialist is
not installed, `references/diagnosis-and-routing.md` has a compressed fallback method for it.

## Decision 2: progressive disclosure

The Agent Skills model has three levels: metadata (name, description) is always visible; the
`SKILL.md` body loads when the skill activates; references, scripts, and assets load when the
instructions call for them. This repository uses that deliberately:

- `SKILL.md` stays under ~200 lines and contains a table mapping diagnoses to references.
- References are sized by decision: one file per decision the workflow routes to (81 skill-specific
  references across the
  collection), so an agent reads one file to act, not a chain of fragments.
- References are loaded directly from `SKILL.md` (no reference that exists only to point to
  another reference).
- Validation fails if a reference is not mentioned in `SKILL.md` (orphans are unreachable), and
  if a vendored shared file is not named in `SKILL.md` (the agent would never be told to read it).

## Decision 3: shared source, vendored copies

Problem: skills share vocabulary (page archetypes, friction codes, the evidence standard) and
worked examples. If `skills/composition-repair/SKILL.md` linked to `../../shared/...`, that link
would break as soon as someone installed only that skill.

Solution:

1. Shared content lives once in `shared/` and `examples/`.
2. `catalog/skills.json` declares, per skill, which modules it needs. `coreModules`
   (`experience-core.md` and `experience-operating-contract.md`) go to every skill. A skill declares a module only if its `SKILL.md` names
   it where it is used.
3. `scripts/sync-shared.mjs` copies each declared module into the skill's `references/_shared/`
   (markdown) or `scripts/_shared/` (JavaScript), flattened by filename, with a
   `GENERATED FROM <source>` header. It writes a `references/_shared/README.md` index and removes
   undeclared files. Output is deterministic.
4. `scripts/check-shared.mjs` (CI) fails if a copy is missing, stale, hand-edited, or undeclared;
   if basenames collide; if a shared markdown module contains a relative link; or if any file in a
   skill references a path outside the skill.

Worked examples live in the top-level `examples/` folder rather than `shared/examples/` because
they are also meant to be browsed by people; the sync treats both folders as sources.

The tradeoff is repository size: each selected shared source is copied into every skill that uses it.
The benefit is that every installed skill is complete, which the discovery test verifies with the
real CLI.

## Decision 4: the existing `skills` CLI, no custom installer

The public [`skills` CLI](https://github.com/vercel-labs/skills) discovers skills under `skills/`,
installs individual skills (`--skill`), lists them (`--list`), installs globally (`-g`), and
supports many agents. Building another installer would duplicate it. `scripts/test-skill-discovery.mjs`
runs the CLI against the local repository in a temporary directory and verifies listing and
installs.

## Decision 5: catalog as the single declaration point

`catalog/skills.json` holds what cannot be derived (category, one-line `useWhen`, shared module
lists). `npm run catalog` fills in what can be derived (description and version from frontmatter,
reference and script lists from disk) and regenerates the README skills table. Descriptions are
therefore written once, in `SKILL.md`.

## Decision 6: scripts are optional and honest

Scripts measure; they do not judge. Every skill works without its scripts, falling back to static
analysis and stating what remains unverified. Browser scripts load Playwright dynamically from the
skill folder, the current project, or `PLAYWRIGHT_MODULE`, and can use an installed Chrome.

Script contract: `--help`; exit 0 (clean), 1 (findings), 2 (usage or environment error); no hidden
network use; files written only when a flag asks.

## Decision 7: the core loads, and principles are checkpoints

Having a principle in a file does not make an agent follow it. Two mechanisms make it active:

1. **The core loads first.** `experience-core.md` is 29 operating rules, each phrased as a behavior
   ("before any question, field, or choice screen: does the software already know the answer? If
   yes, use it"). Every `SKILL.md` starts with "Start here: read `references/_shared/experience-core.md`."
   Validation fails a skill without it. Recorded evals (2026-09-25) showed agents usually skip that
   read, so the eight rules that matter most are also inlined into every `SKILL.md` as a generated
   `core-brief` block (source `shared/philosophy/core-brief.md`, drift-checked by `check-shared`).
   The body of `SKILL.md` is the only part of a skill an agent reliably reads.
2. **Checkpoints change the branch.** Every `SKILL.md` has at least four numbered decision points
   in the form "For every X: question? Yes → do this. No → do that." They are placed where the
   agent makes the decision (before diagnosing, before adding a control, before presenting), not in
   a philosophy section it may skip.

The test for every file: where does it force the agent to behave differently? If it only explains
a principle, it is folded into a checkpoint or a loaded reference, or removed.

## Decision 8: sibling orchestration is tested, not assumed

The Agent Skills format does not guarantee that one skill can hand work to another. The router
names specialists and, when they are not installed, carries a compressed fallback method for each.
Whether agents actually load the specialists is measured by `scripts/run-agent-evals.mjs`, which
records every skill, reference, and script an agent loads during a scenario. The first recorded
runs found the router loaded but rarely handing off, so its checkpoint 3 now requires invoking the
specialists before any recommendation is written.

Named recurring graphs are recorded in `skills/experience-architect/references/recipes.md`. Each
specialist leaves a compact transfer artifact; the next specialist consumes it rather than repeating
diagnosis. The eval harness now separates specialist activation, design-intelligence reads,
precedent reads, rendered-evidence signals, completion signals, and required-reference compliance.

## Decision 9: full-product orchestration stays thin

`use-all-skills` considers all fourteen siblings and activates only those with material leverage. Build Mode prioritizes a working core loop; Audit Mode permits broader investigation of mature products. The conductor protects the core instrument and product invariants, reserves time for implementation, and verifies repeated primary journeys, state transitions, recovery, responsive interaction, and focus before visual polish. A compact routing record captures consequential decisions and no-change findings; a roll call of specialists is not required.

## Decision 10a: scope, shared context, and a blocking visual gate

Three rules in the shared operating contract keep narrow work narrow and finished work honest:

- **Scope gate.** Requests are classified COMPONENT, SURFACE, PAGE, FLOW, or PRODUCT before routing.
  Scope sets how much context and depth to use; it is not a mode. Ambiguity resolves to the smaller
  scope, and re-scoping is explicit and evidence-backed.
- **Experience context.** For SURFACE scope or larger, one compact context (product job, design
  system, strengths to preserve, current structure, locked requirements, open freedom, state model) is
  built once and referenced by handoffs, so specialists do not each rebuild it.
- **Final gate.** After the render contract, a material visual failure in the inspected result fails
  the gate regardless of checklist results. Deliberate drama, negative space, and expert density
  are not failures; the question is whether the relationship serves the product and task.

Ranked composition candidates are required only when page structure is both relevant and genuinely
open; settled structure is preserved.

## Decision 10: evidence, interpretation, and vocabulary are separate layers

- **Evidence** (`research/observations/`): what was seen, when, and how. Not vendored.
- **Interpretation** (`shared/precedent/`): concept modules that cite evidence IDs and state transfer
  conditions. Vendored into the skills that decide with them.
- **Vocabulary** (`shared/design-intelligence/`): the Niche Design Atlas (15 niche groups, 151 niche-adapted
  systems), directions, 30 general authored systems, 57 palette themes,
  24 type strategies, compositions, surfaces, motion languages, and the selection procedure. Index files let an agent load one family
  instead of the whole library.

Skills load these only from checkpoints and "when → load" tables, so a skill that ships 30 library
files still reads two or three for a given task. Installed sizes and vendored ratios are reported in
the v0.2.0 upgrade notes.

## Validation layers

| Check | Script | Catches |
|---|---|---|
| Spec + conventions | `validate-skills.mjs` | Frontmatter rules, name/dir match, description length and "Use when", required sections, line limits, placeholders, missing referenced paths, orphan references, undocumented scripts |
| Repository | `validate-repo.mjs` | Required files, catalog ↔ disk, version consistency, private paths, secrets, image files |
| Vendoring | `check-shared.mjs` | Stale, missing, or hand-edited copies; vendored files the skill never names; shared sources no skill uses; escaping references |
| Links | `check-links.mjs` | Broken relative links anywhere |
| Catalog | `generate-catalog.mjs --check` | Stale catalog or README table |
| Official validator | `agentskills validate` from the `skills-ref` package (CI) | Spec conformance per the reference implementation |
| Behavior | `npm test` | Analyzer logic, scripts against fixture pages in a real browser, scanners, workflow ledger, routing fixtures |
| Distribution | `test-skill-discovery.mjs` | The real CLI lists all skills; installs arrive complete and working |
| Agent behavior | `run-agent-evals.mjs` (manual, spends usage) | With vs without skills on real scenarios: skills and references actually loaded, principles applied, unacceptable recommendations avoided |

## Stability and compatibility

From v1.0.0 the project follows semantic versioning for the public surface below.

| Stable within 1.x | Free to change in any release |
|---|---|
| Skill names and the `skills/<name>/` folder layout; `experience-architect` as the entry skill | Wording of descriptions, references, and checkpoints |
| Each skill is self-contained, installable alone, with valid frontmatter and `metadata.version` | Contents and size of design-intelligence libraries (directions, compositions, atlas, palettes) |
| Shared content reaches skills only as generated `_shared/` copies; no path outside a skill folder | Internal headings of reference files and generated-file headers |
| The routing contract: scope classification, shared experience context, material-concern activation, required reference loading, rendered final gate | Routing tables, recipes, and specialist ordering heuristics |
| Script `--help` and exit codes 0 / 1 / 2 | Script output layout, scanner heuristics, parser internals |
| | `catalog/skills.json` fields, tests, evals, and everything under `research/` |

Backward-compatible: adding a skill, reference, composition, palette, precedent, or check;
sharpening advice; fixing a script. Breaking (major version): renaming or removing a skill, changing
the exit-code contract, dropping self-containment, or removing a stable routing rule. Behavioral
improvements to advice are not breaking even when an agent's output changes.

Validation proves repository consistency, not that agents produce better products; behavior is
measured separately with the manual eval harness.

## Future: project profiles

A later version may let a project include an optional `EXPERIENCE.md` describing its density
preference, motion appetite, brand principles, forbidden patterns, and workflow priorities. Skills
would read it when present and behave exactly as today when absent. It is intentionally not part
of v1.0: the public skills must be useful without any profile.

## Decision 11: product mechanics before niche context, and a separate repair specialist

The design-system selector first asks what users repeatedly do, what instrument carries that work, and what must remain true. The Niche Design Atlas
(`shared/design-intelligence/niche-atlas-index.md` and fifteen `niche-*.md` files) records product
realities per niche (jobs, density, surfaces, states, interaction, trust, generated-UI failures) and
ten or more authored systems per niche group. The atlas supplies domain constraints, not a prescribed style. Load a niche file only when its realities can change a decision. Each system carries a machine-readable
fingerprint; `scripts/lib/niche-atlas.mjs` (run by `npm run validate`) enforces the index contract,
computes color-role contrast, and fails sibling systems that differ in fewer than four of eleven
dimensions, so synonyms cannot inflate the library. That mechanical check cannot prove rendered distinctness; selection uses core-screen silhouette, grayscale, interaction architecture, density, and visual energy. The library was not increased merely to claim diversity.

Two anti-slop skills exist on purpose. `anti-slop-ui` is the knowledge, prevention, and gate
specialist: is this pattern justified, and what are the alternatives? `anti-ai-slop` is the
remediation specialist for an existing rendered product: it extracts and protects the product's
identity, sweeps every surface, traces generated decisions to source, replaces them with what that
product would do, and rerenders. Keeping them separate keeps each description routable.

## Decision 12: unified marketplace packaging is generated from the canonical catalog

The marketplace bundle is a second distribution format, not a second skill source. Its authored
master entry point and route metadata live in `marketplace/bundle/`; the build reads
`catalog/skills.json`, checks vendored synchronization, and copies each canonical skill's complete
resource tree. Only inside the ZIP, each specialist `SKILL.md` becomes `METHOD.md`, leaving exactly
one discoverable `SKILL.md` at the collection root. Routes must cover the catalog exactly, so a new
public skill cannot silently ship without routing metadata.

The builder creates a stable ZIP and checksum manifest, extracts and validates it, and checks
module-relative references and script imports. `npm run marketplace:bundle:check` performs these
checks without writing release artifacts. The marketplace identity is `experience-skills`; the
standalone GitHub Skills CLI layout remains unchanged. Distribution copies all validated
references, scripts, assets, and vendored `_shared` files so conditional loading and individual
method behavior remain intact.
