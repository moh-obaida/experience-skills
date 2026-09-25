# Recorded Agent Evaluation Runs

Each folder holds `report.md` (the generated comparison) and `summary.json` (per-run data: tools
used, skills loaded, references read, scripts run, judge verdicts, cost). Transcripts and raw answers
are generated locally and not committed.

Setup for every run:

- Claude Code CLI 2.1.280 with its default model, for both the agent and the judge.
- The 13 regression-anchor scenarios in `tests/evals/routing.json`, one run per scenario per folder.
- The agent could read, list, invoke skills, and run `node`; it could not edit files.
- The judge was told nothing about which condition produced an answer.

## The runs

| Folder | Condition | What changed |
|---|---|---|
| `2026-09-25-run1` | without and with | v0.2.0 skills, capability-first descriptions ("Repair the composition of…") |
| `2026-09-25-run2` | with | Only the 12 frontmatter descriptions, rewritten trigger-first ("Use this skill whenever … says it feels boring … proposes a custom version of a standard control …") |
| `2026-09-25-run3` | with | Adds a generated core brief inside every `SKILL.md` body; the router must invoke specialist skills before writing recommendations |
| `2026-09-25-baseline2` | without | A second baseline sample, to see how much the without condition varies |

## Results

| Condition | Principles met | Unacceptable recs | Praise openings (deterministic / judge) | Runs loading any skill | Expected specialist skills loaded | Runs executing a skill script |
|---|---|---|---|---|---|---|
| without skills, sample A (run1) | 35/51 | 2 | 0 / 1 | n/a | n/a | n/a |
| without skills, sample B (baseline2) | 35/51 | 2 | 0 / 2 | n/a | n/a | n/a |
| with skills, run1 | 42/51 | 1 | 0 / 1 | 3/13 | 3/44 | 0/13 |
| with skills, run2 | 45/51 | 0 | 0 / 0 | 11/13 | 7/44 | 0/13 |
| with skills, run3 (current) | 45/51 | 1 | 0 / 1 | 12/13 | 13/44 | 1/13 |

Per scenario (principles met; `!n` = unacceptable recommendations):

| Scenario | without A | without B | with 1 | with 2 | with 3 |
|---|---|---|---|---|---|
| blank-saas-dashboard | 3/4 | 3/4 | 3/4 | 3/4 | 3/4 |
| playful-game-join | 0/4 !1 | 0/4 !1 | 3/4 | 3/4 | 3/4 |
| government-form | 5/5 | 3/5 | 5/5 | 5/5 | 5/5 |
| ecommerce-checkout | 2/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| mobile-banking-transfer | 2/3 | 2/3 | 3/3 | 3/3 | 3/3 |
| CLI-project-init | 3/4 | 3/4 | 2/4 | 4/4 | 4/4 |
| editorial-homepage | 2/4 | 2/4 | 3/4 | 3/4 | 3/4 |
| long-running-ai-job | 3/4 | 3/4 | 3/4 | 2/4 | 4/4 |
| data-dashboard | 2/3 | 2/3 | 2/3 | 3/3 | 2/3 |
| justified-gradient | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| fragile-layout-real-content | 3/4 | 3/4 | 3/4 | 3/4 | 3/4 |
| admin-setup-flow | 2/4 !1 | 2/4 !1 | 3/4 !1 | 4/4 | 3/4 !1 |
| fashionable-redesign | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |

## Findings

1. **The clearest effect is on one lesson.** In `playful-game-join`, both baseline samples agreed to
   decorate the segmented code boxes (0/4 and one unacceptable recommendation). All three
   with-skills runs rejected the bouncing digits and moved personality into the environment (3/4 and
   none). This is the collection's founding lesson, and the only scenario where the base agent scored
   zero. `mobile-banking-transfer` and `editorial-homepage` were +1 in every with-skills run.
   `admin-setup-flow` still drew an unacceptable recommendation (dropping the final review before a
   real invitation is sent) in both baselines and in two of the three with-skills runs.
2. **Invocation depends on how descriptions are written.** Capability-first descriptions got a skill
   loaded in 3 of 13 runs; trigger-first descriptions got one loaded in 11 and 12 of 13. This
   changed the authoring rule (AGENTS.md rule 4, `docs/authoring-skills.md`).
3. **Router handoff improved but is still partial.** Once `experience-architect` was loaded, it
   originally answered from its own file. Run 3's mandatory handoff raised the expected specialist
   skills loaded from 7 to 13 of 44. `editorial-homepage` loaded three specialists, which was
   correct. Most runs still load one skill where the scenario expects three or four.
4. **The core file is not read, which is why the brief is inline.** Only 1 of 23 skill-loading runs
   (runs 2–3) opened `experience-core.md`, even though every skill says "Start here". The run 3 brief
   inside `SKILL.md` gets the key rules to the agent anyway. Its effect is not separable here.
5. **Rendered evidence is rare.** Only run 3's `fragile-layout-real-content` executed the skill
   scripts (`stress-content.mjs` and `layout-report.mjs` against the fixture, at desktop and phone
   widths). It then reported measured collisions. No other run measured, even with HTML fixtures
   present. Evidence wording (E-levels, "measured", "not verified") appeared in at most 3 of 13 answers.
6. **Sycophancy did not separate the conditions.** No run in either condition opened with praise by
   the deterministic check. The judge flagged 1–2 mild opening concessions per condition.
7. **Variance is real.** The two baseline samples total 35/51 each, but they differ on individual
   scenarios (`government-form` 5 vs 3, `ecommerce-checkout` 2 vs 4). With skills, the three runs
   also move ±1 per scenario. A per-scenario difference of one point is not a finding. The totals
   (35 and 35 without; 42, 45, and 45 with) and the playful-game-join result are the most stable
   signals.

## Limits

- Two samples without skills and three with skills, and the with-skills runs are of different
  versions. There are not enough runs for confidence intervals.
- The judge is the same model family as the agent. It grades against scenario principles written by
  the skills' authors, who therefore also define what counts as "good".
- The agent's user-level skills and settings were present in both conditions, so other installed
  skills competed for routing.
- Only Claude Code was tested. Other agents supported by the skills CLI were not.
- Scenarios are advisory ("review it, don't edit yet"). Build and repair behavior was not measured.
