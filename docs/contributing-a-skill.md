# Contributing a Skill

## Is a new skill the right move?

Propose a new skill when:

- It addresses a distinct class of problem the current skills do not cover well.
- Its triggers are distinguishable from existing skills' descriptions.
- It has a workflow, not just a list of tips.
- You can provide worked examples and test scenarios.

Otherwise, improve an existing skill's references or add a pattern or example. Open a *Skill
proposal* issue first to discuss scope.

## Steps

1. **Create** `skills/<name>/SKILL.md` following [authoring-skills.md](authoring-skills.md).
2. **Write references** for the diagnoses your workflow routes to.
3. **Declare shared modules** in `catalog/skills.json`: add an entry with `name`, `category`,
   `useWhen`, `shared` (and `sharedScripts` if needed). Include `coreModules` implicitly.
4. **Sync and generate**: `npm run sync && npm run catalog`.
5. **Route to it**: add a row to `skills/experience-architect/references/routing.md` (including a
   fallback method) and, if relevant, to `cross-skill-composition.md`.
6. **Add routing cases** to `tests/evals/routing.json` and, if useful, a scenario in `tests/scenarios/`.
7. **Add an example** under `examples/<category>/` if the skill introduces a new lesson.
8. **Scripts** (optional): add tests under `tests/scripts/`.
9. **Run** `npm run check`.
10. **Changelog**: add an entry under "Unreleased."

## Contribution checklist

- [ ] Valid `SKILL.md` frontmatter; name matches the folder
- [ ] Description says what and when ("Use when …"), with distinctive keywords
- [ ] Progressive disclosure: `SKILL.md` under ~300 lines; depth in references
- [ ] Every reference is mentioned in `SKILL.md`; no reference chains
- [ ] No broken links; nothing references paths outside the skill
- [ ] Shared content declared in the catalog, not duplicated by hand
- [ ] Examples and anti-patterns included
- [ ] Edge cases and "when this does not apply" covered
- [ ] Completion criteria are checkable
- [ ] Public-safe: no private data, secrets, screenshots, or copied proprietary text
- [ ] Tests or eval fixtures added
- [ ] `npm run check` passes
