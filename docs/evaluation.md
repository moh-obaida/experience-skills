# Evaluation

How this project evaluates experiences, and how it evaluates itself.

## Evaluating experiences

The shared evaluation modules (vendored into skills):

| Module | Use |
|---|---|
| `shared/evaluation/experience-rubric.md` | Dimensions (purpose, hierarchy, composition, identity, interaction, time-to-outcome, states, responsiveness, accessibility, motion, slop risk, evidence) with verdict words instead of scores |
| `shared/evaluation/workflow-rubric.md` | Mapping, counting, friction tagging, before/after reporting |
| `shared/evaluation/anti-slop-gate.md` | Gate questions before presenting UI |
| `shared/evaluation/evidence-standard.md` | Evidence levels E1 (rendered) to E6 (assumed) |

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

### Manual (recommended before releases)

Run an agent with the skills installed against each scenario and check:

1. Did it invoke (or behave like) the expected skills?
2. Did it apply the key principles?
3. Did it avoid every unacceptable recommendation?
4. Did it state evidence levels and unverified items?
5. Did it avoid unearned praise?

Record results in the pull request. A future visual eval harness is on the roadmap.
