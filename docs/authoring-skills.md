# Authoring Skills

How to write a skill that routes well, loads efficiently, and teaches an agent how to work.

## Anatomy

```
skills/<name>/
  SKILL.md
  references/          depth, one coherent question per file
  references/_shared/  generated; declared in catalog/skills.json
  scripts/             optional tools with --help and tests
  assets/              optional templates
```

## Frontmatter

```yaml
---
name: my-skill                 # lowercase, digits, single hyphens; matches the folder; ≤ 64 chars
description: "Use this skill whenever <user phrasings and situations>; when <more triggers>. What it does, with concrete keywords."
license: MIT
compatibility: "Only if scripts need something (Node version, Playwright)."   # optional, ≤ 500 chars
metadata:
  version: "0.1.1"             # equals package.json version
  collection: experience-skills
---
```

Use double quotes for `description` and `compatibility`; the validator rejects unquoted values
containing `: `.

### Writing the description

The description is the only text an agent sees before deciding to load the skill. It must:

- Say what the skill does, with the nouns a user would use ("dashboard," "empty," "overflow,"
  "clicks," "gradients").
- Lead with when to use it ('Use this skill whenever …'), in the words users actually say ('make it more fun', 'is this good?', 'one tap'). Capability lists come second. In the 2026-09-25 evals, capability-first descriptions were invoked in 3 of 13 runs; see `tests/evals/results/`.
- Distinguish it from siblings (what makes this the right skill, not a neighbor).
- Stay under 1024 characters.

## SKILL.md body

Sections (bold ones are required by validation):

1. Purpose: one short paragraph.
2. **Start here**: tells the agent to read `references/_shared/experience-core.md` first, plus any
   skill-specific first step (for example, "name the archetype").
3. **Use this when**: concrete triggers.
4. **Do not use this when**: anti-triggers and where to go instead.
5. **Checkpoints**: at least four numbered decision points in the form "**Before/For every X:**
   question? Yes → do this. No → do that." Each must change what the agent does next. A principle
   that does not change a branch belongs in a reference, or nowhere.
6. **Workflow**: numbered steps, including observation and verification, with a table from diagnosis
   to the one reference to load.
7. Execution rules: invariants.
8. Failure modes.
9. **Completion criteria**: what "done" means, checkable.
10. References: every own reference, and every vendored shared file by name.

Keep it under ~200 lines. If a section grows, move it to a reference.

### Writing a good checkpoint

Weak (explains): "Personality belongs in the environment, not in controls."

Strong (branches): "**For any change to a basic control:** does it make the task faster or more
reliable? No → reject it and move the personality into the environment."

The strong version tells the agent what to reject.

## References

- One file per decision the workflow routes to ("how to design undo vs confirmation"), usually
  60–200 lines. Merge files that are always loaded together; split only when two decisions are
  loaded at different times.
- Start with a `# ` heading.
- Include tradeoffs: when the advice applies and when it does not.
- Prefer tables, checklists, and short examples over essays.
- No chains: a reference should not exist only to route to another reference.
- Link shared content by its vendored path (`references/_shared/<file>.md`) after declaring it in
  the catalog.

## Shared content

If two or more skills need the same material, put it in `shared/` (or `examples/`) and declare it
per skill in `catalog/skills.json`. Declare it only for skills whose `SKILL.md` names it where it is
used; `check-shared` rejects shipped files the agent is never told to read, and shared sources no
skill uses. Shared markdown must not contain relative links; mention other
modules by name. Filenames must be unique across shared sources.

## Scripts

Write a script only when it replaces judgment-free work the agent would otherwise do badly or
inconsistently (measuring geometry, counting steps, scanning many files). Requirements:

- Node built-ins; optional dependencies loaded dynamically with a clear message when missing.
- `--help`, `--json`, exit codes 0/1/2.
- Pure analysis functions separated from I/O, with unit tests.
- No hidden network calls, no destructive actions, no writes unless a flag asks.
- Mention the script and its limitations in `SKILL.md` and a reference.

## Voice

Direct, specific, grounded, critical when needed, never hype. Say "the agent." Show the bad
version and explain why it is bad before showing the better one.
