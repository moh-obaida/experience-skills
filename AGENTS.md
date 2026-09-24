# AGENTS.md

Instructions for coding agents working **on this repository** (not for using the skills).

## What this repository is

A collection of Agent Skills. The installable product is `skills/<name>/`. Everything else
(shared source, examples, tooling, tests, docs) exists to author, validate, and explain those
folders.

## Source of truth and generated files

- `shared/**` and `examples/**` are the source of truth for shared content.
- `catalog/skills.json` declares which shared modules each skill receives (`coreModules` for all,
  `shared`, `sharedScripts`) plus `category` and `useWhen`. A skill may only receive a markdown
  module that its `SKILL.md` names where it is used, and every shared source must be used by some
  skill (`check-shared` enforces both).
- `npm run sync` copies declared modules into `skills/<name>/references/_shared/` and
  `skills/<name>/scripts/_shared/` with a `GENERATED FROM` header.
- **Never edit files under `_shared/` directly.** Edit the source and run `npm run sync`.
- `npm run catalog` regenerates derived catalog fields (descriptions, versions, file lists) and the
  README skills table. Do not hand-edit those parts.

## Rules

1. **Self-contained skills.** No file in a skill may reference a path outside its own folder
   (no `../../shared/`). If a skill needs shared content, declare it in the catalog and sync.
2. **Shared modules contain no relative links.** Refer to other modules by name; vendored copies
   would otherwise break.
3. **Thin SKILL.md.** Target under 200 lines; hard limit 500. Required sections: Start here (must
   tell the agent to read `references/_shared/experience-core.md`), Use this when, Do not use this
   when, Checkpoints (at least four numbered decision points that change the agent's branch),
   Workflow, Completion criteria. Every file in `references/` must be
   mentioned in `SKILL.md`, loaded directly (no chains of references pointing to references).
4. **Descriptions say what and when.** Frontmatter `description` ≤ 1024 characters and contains
   "Use when …". It is what agents route on.
5. **Vendor-neutral language.** "The agent," not a product name, in skill instructions.
6. **Public safety.** No private paths, secrets, personal data, screenshots, or copied proprietary
   text. `npm run validate` scans for these.
7. **Scripts.** Node built-ins only (Playwright optional and loaded dynamically). Support `--help`.
   Exit 0 clean, 1 findings, 2 usage/environment error. No hidden network calls, no destructive
   actions, output files only when a flag asks for them. Add tests.
8. **Do not inflate.** Adding a reference, a pattern, or a skill must fill a real gap. Prefer
   sharpening existing text.
9. **Versioning.** All skills share `package.json`'s version. On release, update `package.json`,
   every `metadata.version`, and `CHANGELOG.md` together (validation enforces consistency).
10. **Writing style.** See CONTRIBUTING.md: specific, tradeoff-aware, no hype vocabulary.
11. **The file test.** Before adding or keeping a file, answer: where does it force the agent to
    behave differently (what it observes, rejects, measures, loads, edits, or counts as done)? If the
    answer is only "it explains a principle," merge it into a checkpoint or remove it.
12. **References are sized by decision.** One file per decision the workflow routes to; merge files
    that are always loaded together.

## Commands

```bash
npm run sync            # after editing shared/, examples/, or catalog shared lists
npm run catalog         # after changing a skill description or adding/removing files
npm run check           # full gate (includes CLI discovery; SKIP_DISCOVERY=1 offline)
npm test                # tests only
npm run test:discovery  # install test with the public skills CLI in a temp dir
npm run eval:agents     # behavioral evals with a real agent (spends usage; not part of check)
```

Before finishing any change: `npm run check` must pass.

## Adding a skill

Follow `docs/contributing-a-skill.md`. In short: create `skills/<name>/SKILL.md` with valid
frontmatter, add references, add the skill to `catalog/skills.json` with `category`, `useWhen`,
and `shared`, run `npm run sync && npm run catalog`, add routing cases to `tests/evals/routing.json`,
mention it in `skills/experience-architect/references/routing.md`, and run `npm run check`.
