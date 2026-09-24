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
description: "What it does, with concrete keywords. Use when <triggers>; when <more triggers>."
license: MIT
compatibility: "Only if scripts need something (Node version, Playwright)."   # optional, ≤ 500 chars
metadata:
  version: "0.1.0"             # equals package.json version
  collection: experience-skills
---
```

Use double quotes for `description` and `compatibility`; the validator rejects unquoted values
containing `: `.

### Writing the description

The description is the only text an agent sees before deciding to load the skill. It must:

- Say what the skill does, with the nouns a user would use ("dashboard," "empty," "overflow,"
  "clicks," "gradients").
- Say when to use it, starting with "Use when".
- Distinguish it from siblings (what makes this the right skill, not a neighbor).
- Stay under 1024 characters.

## SKILL.md body

Recommended sections (the first, second, workflow, and completion are required by validation):

1. **Purpose**: one short paragraph and, if helpful, a canonical rule in a quote block.
2. **Use this when**: concrete triggers.
3. **Do not use this when**: anti-triggers and where to go instead.
4. **Core principles**: 5–9 durable rules.
5. **Workflow**: numbered steps, including observation and verification.
6. **Choose references**: a table from diagnosis to reference file.
7. **Execution rules**: invariants.
8. **Failure modes**: what goes wrong, named.
9. **Completion criteria**: what "done" means, checkable.
10. **References**: list of every reference file.

Keep it under ~300 lines. If a section grows, move it to a reference.

## References

- One coherent question per file ("how to design undo vs confirmation"), 30–150 lines.
- Start with a `# ` heading.
- Include tradeoffs: when the advice applies and when it does not.
- Prefer tables, checklists, and short examples over essays.
- No chains: a reference should not exist only to route to another reference.
- Link shared content by its vendored path (`references/_shared/<file>.md`) after declaring it in
  the catalog.

## Shared content

If two or more skills need the same material, put it in `shared/` (or `examples/`) and declare it
per skill in `catalog/skills.json`. Shared markdown must not contain relative links; mention other
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
