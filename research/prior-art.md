# Prior Art

Surveyed 2026-09-24 before building v0.1. The goal was to learn from architecture, not to reuse
content. No prose, rules, or code from these projects was copied. Descriptions below are our own
summaries of their public repositories and documentation; check each project for current details.

## Agent Skills specification

- **Link:** https://github.com/agentskills/agentskills (spec document `docs/specification.mdx`)
- **What it defines:** a skill is a folder with `SKILL.md` (YAML frontmatter + Markdown), plus
  optional `scripts/`, `references/`, `assets/`. Required frontmatter: `name` (≤ 64 chars,
  lowercase letters, digits, hyphens, no leading/trailing/consecutive hyphens, matches the folder)
  and `description` (≤ 1024 chars, what + when). Optional: `license`, `compatibility` (≤ 500
  chars), `metadata` (string map), `allowed-tools` (experimental). Progressive disclosure:
  metadata always, body on activation (keep under ~5000 tokens and 500 lines), resources on demand.
  File references should be relative and one level deep. Reference validator: the `skills-ref` Python package (command `agentskills validate`).
- **Adopted:** all of it. We use only stable fields; we do not use `allowed-tools`.
- **License:** see the repository.

## `skills` CLI

- **Link:** https://github.com/vercel-labs/skills (npm package `skills`)
- **Architecture:** discovers skills in a repository (root `SKILL.md`, `skills/`, agent-specific
  folders), installs per skill (`--skill`), lists (`--list`), global (`-g`), per agent (`-a`),
  copy vs symlink (`--copy`), everything (`--all`). Supports many agents.
- **Adopted:** we rely on it for distribution and test against it (version 1.7.0 in this release).
- **Avoided:** building our own installer.
- **License:** Apache-2.0 (per npm metadata).

## anthropics/skills

- **Link:** https://github.com/anthropics/skills
- **Architecture:** a large set of example skills grouped by domain, a skill template, and a copy of
  the specification. Many skills bundle scripts and references alongside `SKILL.md`.
- **Good:** demonstrates progressive disclosure with scripts and references in real skills; simple
  template.
- **Adopted:** folder conventions, the habit of pairing instructions with deterministic scripts.
- **Avoided:** nothing specific; different scope.
- **License:** mostly Apache-2.0; some document skills are source-available. We copied nothing.

## Hallmark

- **Link:** https://github.com/Nutlope/hallmark
- **Architecture:** a single skill with a central rule-set in `SKILL.md` that routes to files in
  `references/` for specific protocols; a large set of slop gates plus a pre-output self-critique;
  several modes (build, audit, redesign, extract design from references); a demo site with generated
  examples. Installable with `npx skills add nutlope/hallmark`.
- **Good:** a router that loads one relevant module; explicit post-build quality gates; insistence
  on structural variety rather than recolored templates; a self-critique step.
- **Adopted:** thin router + indexed references (our `experience-architect`); final gates
  (`final-gate.md`, `final-slop-gate.md`); self-critique in the execution loop; modes (our
  REVIEW / REPAIR / BUILD / VERIFY).
- **Avoided:** a single skill for everything (we split into siblings so each can install and
  route independently); a web/landing-page emphasis (we cover apps, games, CLIs, public services).
- **License:** MIT. No content reused.

## Taste Skill

- **Link:** https://github.com/Leonxlnx/taste-skill
- **Architecture:** multiple sibling skills in `skills/` (a default skill plus stylistic variants
  and image-generation helpers); adjustable "dials" for variance, motion intensity, and density;
  installable per skill via the `skills` CLI.
- **Good:** sibling skills for specialization; explicit density and motion calibration by project type.
- **Adopted:** sibling-skill packaging; density calibrated by page archetype (our taxonomy rather than
  numeric dials); motion intensity tied to context.
- **Avoided:** style-variant skills (brutalist, minimalist, soft) as the organizing principle. We
  organize by *problem* (composition, workflow, states…) and derive style from the product.
  Numeric dials: we prefer archetype-based reasoning with stated tradeoffs.
- **License:** MIT. No content reused.

## anti-slop (miqdadbadjuber)

- **Link:** https://github.com/miqdadbadjuber/anti-slop
- **Architecture:** a core rules file plus optional specialist skill folders (UI, copywriting, code);
  38 numbered rules in three tiers (hard gates, purpose-gated techniques, consistency locks);
  several installation paths.
- **Good:** a universal core with additive specialists; the "purpose gate" idea (a technique is
  allowed when its purpose is stated); separation between filtering slop and prescribing a style.
- **Adopted:** universal core (our `experience-core.md` in every skill) with additive specialists;
  "every treatment needs a stated job" as the central anti-slop test.
- **Avoided:** a custom installer; numbered hard bans (we ask for justification rather than banning,
  because context decides).
- **License:** MIT. No content reused.

## Other references consulted

- **addyosmani/agent-skills** (https://github.com/addyosmani/agent-skills): engineering-quality
  skills; useful as an example of a curated collection with consistent structure.
- **Design systems and public guidance** such as the GOV.UK Design System
  (https://design-system.service.gov.uk/) and WCAG 2.2 (https://www.w3.org/TR/WCAG22/), cited in
  references where specific requirements are stated.

## Summary of what we did differently

1. Organized by **problem class**, not by style.
2. **Workflow and states** are first-class alongside visuals.
3. **Anti-sycophancy** (`critical-review`) is its own skill.
4. **Shared source + vendoring** so each skill installs self-contained, enforced in CI.
5. **Deterministic tools** where measurement beats opinion (layout geometry, step counts, static scans).
6. **Not web-only:** games, mobile, desktop, CLI, public services, commerce, data tools.
