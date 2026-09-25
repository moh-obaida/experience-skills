# Architecture

## Goals

1. Each skill installs and works on its own.
2. Shared ideas are written once.
3. Agents load only what a task needs.
4. The structure is verifiable by scripts, not by trust.
5. No custom infrastructure: folders, markdown, a few scripts, tests.

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

The collection is twelve sibling skills rather than one large skill. Agents route on skill
descriptions; distinct descriptions for distinct problems route better than one description that
tries to cover everything. Users can install one specialist without the rest.

`experience-architect` is a router, not an encyclopedia. It diagnoses, maps symptoms to problem
classes, chooses two or three specialists, runs the execution loop, and applies the final gate.
If a specialist is not installed, `references/routing.md` has a compressed fallback method for it.

## Decision 2: progressive disclosure

The Agent Skills model has three levels: metadata (name, description) is always visible; the
`SKILL.md` body loads when the skill activates; references, scripts, and assets load when the
instructions call for them. This repository uses that deliberately:

- `SKILL.md` stays under ~200 lines and contains a table mapping diagnoses to references.
- References are sized by decision: one file per decision the workflow routes to (59 across the
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
2. `catalog/skills.json` declares, per skill, which modules it needs. `coreModules` (only
   `experience-core.md`) go to every skill. A skill declares a module only if its `SKILL.md` names
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

The tradeoff is repository size (about 108 generated files: 91 markdown copies, 12 indexes, 5
   script libraries). The benefit is that every installed
skill is complete, which the discovery test verifies with the real CLI.

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

1. **The core loads first.** `experience-core.md` is 26 operating rules, each phrased as a behavior
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

## Decision 9: evidence, interpretation, and vocabulary are separate layers

- **Evidence** (`research/observations/`): what was seen, when, and how. Not vendored.
- **Interpretation** (`shared/precedent/`): concept modules that cite evidence IDs and state transfer
  conditions. Vendored into the skills that decide with them.
- **Vocabulary** (`shared/design-intelligence/`): directions, compositions, palettes, type, surfaces,
  motion languages, models, and the selection procedure. Index files let an agent load one family
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

## Future: project profiles

A later version may let a project include an optional `EXPERIENCE.md` describing its density
preference, motion appetite, brand principles, forbidden patterns, and workflow priorities. Skills
would read it when present and behave exactly as today when absent. It is intentionally not part
of v0.1: the public skills must be useful without any profile.
