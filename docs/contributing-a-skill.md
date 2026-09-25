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
   `useWhen`, `shared` (and `sharedScripts` if needed). `coreModules` are added automatically.
   Name every shared file in `SKILL.md` where it is used.
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
- [ ] Description leads with when ("Use this skill whenever …"), in user phrasing, then what, with distinctive keywords
- [ ] "Start here" loads `references/_shared/experience-core.md`
- [ ] At least four checkpoints that change the agent's branch
- [ ] Progressive disclosure: `SKILL.md` under ~200 lines; one reference per decision
- [ ] Every reference and every vendored file is named in `SKILL.md`; no reference chains
- [ ] Scenario with a prompt added, and an eval run (`npm run eval:agents -- --scenarios <id>`) if you can
- [ ] No broken links; nothing references paths outside the skill
- [ ] Shared content declared in the catalog, not duplicated by hand
- [ ] Examples and anti-patterns included
- [ ] Edge cases and "when this does not apply" covered
- [ ] Completion criteria are checkable
- [ ] Public-safe: no private data, secrets, screenshots, or copied proprietary text
- [ ] Tests or eval fixtures added
- [ ] `npm run check` passes
