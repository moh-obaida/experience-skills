# Evaluation

How this project evaluates experiences, and how it evaluates itself.

## Evaluating experiences

The shared evaluation modules (vendored into skills):

| Module | Use |
|---|---|
| `shared/evaluation/experience-rubric.md` | Dimensions (purpose, hierarchy, composition, identity, interaction, time-to-outcome, states, responsiveness, accessibility, motion, slop risk, evidence) with verdict words instead of scores |
| `shared/evaluation/workflow-rubric.md` | Mapping, counting, friction tagging, before/after reporting |
| `shared/evaluation/anti-slop-gate.md` | Gate questions before presenting UI |
| `shared/evaluation/evidence-standard.md` | Evidence levels E1 (rendered) to E6 (assumed), in depth; a summary table is part of the core every skill loads |

### Why no default scores

"7.5/10" hides the reasoning and invites false precision. Verdicts are words with evidence
("Weak (measured): primary action below the fold at 1366×768"). Scores are used only when a task
benefits from them (comparing many variants, tracking over time), with anchored scales.

### Evidence hierarchy

1. Rendered behavior
2. Measured layout or flow evidence
3. Source code
4. Documented constraints
5. Screenshots
6. Assumptions

Findings carry their level. A repair is "verified" only at levels 1–2.

## Evaluating the skills

### Automated

- **Structure and spec:** `npm run validate` and the official reference validator (`pip install skills-ref`, then `agentskills validate skills/<name>`).
- **Behavior of scripts:** unit tests on analyzers, and browser tests on fixture pages with known
  defects (a centered card on a blank page, a fixed-width table that overflows at phone width, an
  absolutely positioned badge colliding with a heading).
- **Routing fixtures:** `tests/evals/routing.json` pairs user phrasing with the skills that should
  be involved and the ones that would be a mistake. Tests verify the fixtures are consistent and
  that every skill is exercised. They are not a classifier.
- **Scenarios:** `tests/scenarios/*.md` describe realistic situations with expected skills, key
  principles, and *unacceptable recommendations*.

### Behavioral: agent evals

Structure tests show the repository is correct. They do not show that an agent works better with
the skills installed. `scripts/run-agent-evals.mjs` (`npm run eval:agents`) measures that:

1. For each scenario in `tests/scenarios/`, create a fresh temporary project with the scenario's
   fixtures.
2. Run the agent twice with the scenario's exact `## Prompt`: **without** skills and **with** all
   skills installed as project skills. The agent may read, list, invoke skills, and run node scripts;
   it may not edit files.
3. From the transcript, record which skills it actually loaded, which references it read, and which
   scripts it ran. This tests router → specialist behavior directly.
4. A separate judge, told nothing about the condition, grades each answer against the scenario's key
   principles and unacceptable recommendations, and flags praise before evaluation.
5. Write `report.md` and `summary.json` under `tests/evals/results/<timestamp>/`.

Regression anchors (marked `anchor` in `tests/evals/routing.json`) encode the lessons the collection
exists for: the join-code page (memorable environment, ordinary input), the sparse home, context-scoped
controls, the public-service form, money transfer, long-running generation, and others. Run them after
any change to shared content or a skill's checkpoints:

```bash
npm run eval:agents -- --anchors
```

It uses the Claude Code CLI (`CLAUDE_BIN`, logged in or `ANTHROPIC_API_KEY` set) and spends model
usage, so it is not part of `npm run check`. `--dry-run` shows exactly what would run. Limitations:
one run per condition (no variance estimate), an LLM judge, and the agent's own user-level skills
load in both conditions.

### What the behavioral scenarios test

| Behavior | Scenario | A pass means |
|---|---|---|
| Sycophancy | `fashionable-redesign`, `government-form` | No praise before evaluation; compares with current; may recommend keeping it |
| Whitespace judgment | `playful-game-join`, `blank-saas-dashboard` | Distinguishes dead space from focus; no filler |
| Interaction novelty | `playful-game-join` | Rejects decorative custom inputs; keeps a standard control |
| Workflow context | `admin-setup-flow`, `CLI-project-init` | Removes known answers; preserves the consequential confirmation; counts before/after |
| Anti-slop nuance | `justified-gradient` | Does **not** reject a gradient that encodes information; checks contrast instead |
| Composition | `blank-saas-dashboard`, `editorial-homepage` | Reasons beyond spacing (focal point, real state, structure) |
| Real states | `fragile-layout-real-content`, `long-running-ai-job` | Tests long content and RTL; separates transport from product state |

Results of recorded runs, including where the skills made no difference or were not invoked, are in
`tests/evals/results/` (`README.md` there interprets them).

### Manual (recommended before releases)

Run an agent with the skills installed against each scenario and check:

1. Did it invoke (or behave like) the expected skills?
2. Did it apply the key principles?
3. Did it avoid every unacceptable recommendation?
4. Did it state evidence levels and unverified items?
5. Did it avoid unearned praise?

Record results in the pull request. A future visual eval harness is on the roadmap.
