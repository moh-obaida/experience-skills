# Where Each Principle Changes Agent Behavior

A principle that only lives in a philosophy document is not operational. This table maps each core
principle to the places where it forces a different branch, measurement, or completion condition.
"Checkpoint N" refers to the numbered Checkpoints section of the named SKILL.md.

| Principle | Where it changes behavior | Tool or gate |
|---|---|---|
| Make the environment interesting, not the textbox | visual-identity checkpoint 2 (reject control novelty that does not speed the task); interaction-design checkpoint 1 (custom-control cost); composition-repair checkpoint 4 (focused surfaces: compose the environment); anti-slop-ui checkpoint 4 | `join-code-page` anchor scenario; precedent `environment-first-identity.md` |
| Alignment is not composition | composition-repair checkpoints 2, 9, 10 (coverage, dead region, name a composition before restructuring) | `measure-layout.mjs` (coverage, content box, largest dead region, environment treatment) |
| Empty space must earn its existence | composition-repair checkpoint 9 ("it looks premium" is not a job); core rule 6; precedent `whitespace-and-dead-space.md` (when space is justified and when not) | `measure-layout.mjs` |
| If software knows the answer, don't ask again | workflow-compression checkpoints 2 and 8 (known-context inventory for every flow); core rule 12 | `workflow-ledger.mjs` (F1, F2 tags); `admin-setup-flow` scenario |
| One meaningful option → no choice screen | workflow-compression checkpoint 2 | `workflow-ledger.mjs` (`options: 1` → F2) |
| Do not praise before evaluating | core rule 3; critical-review checkpoints 1, 5, 7, 8 (12-step order; verdict formed before step 11 is a hypothesis) | Eval harness flags praise openings; judge checks "praise before evaluation" |
| Rendered truth beats source elegance | core rules 2 and 22 (evidence levels; never "verified" from reading); composition-repair checkpoints 1 and 8; responsive-validation checkpoints 2 and 7 | `measure-layout`, `detect-overflow`, `detect-collisions`, `layout-report`, `stress-content`, `check-controls`, `check-motion-rendered`, `inventory-styles` |
| Motion should explain what happened | motion-design checkpoints 1–3 (every animation maps to an event; frequency limits), 7 (rendered check), 8 (one motion language) | `scan-motion.mjs`, `check-motion-rendered.mjs` |
| Do not spend complexity where users get no value | interaction-design checkpoints 1 and 7; critical-review checkpoint 4 (hidden-cost list); product-friction checkpoint 3 (rename/merge/remove before adding) | `overengineering.md`; verdict examples 2–4 |
| Context is part of taste (no reverse dogma) | anti-slop-ui checkpoints 1, 7, 8 (justification test; three alternatives; reverse-dogma check); visual-identity checkpoint 7 (no industry-selected styles) | `justified-trends.md`; `justified-gradient` scenario (a pass means *not* removing the gradient) |
| Remove generated decisions without erasing identity | anti-ai-slop checkpoints 1, 2, 4, 7 (identity ledger before findings; protected list; "what would THIS product do"; twenty-sites and weirdness tests) | `extract-identity.mjs` (census, library defaults, slop stacks); `de-ai-existing-site` scenario (a pass keeps the kiln band and terracotta) |
| Know what kind of product it is before choosing a look | visual-identity mandatory loading and checkpoint 7; design-system selector "Niche first" | `niche-atlas.mjs` validation (fingerprint difference test, contrast); `niche-atlas.test.mjs` |
| A page should feel like a place | visual-identity checkpoints 1, 3, 8 (logo test on three surfaces; product-derived carriers; identity in states and dense surfaces) | precedent `product-derived-identity.md`; selection procedure |
| Functionality is the baseline; measure time to outcome | workflow-compression checkpoints 1 and 7 (no claim without counts; recount after); core rule 11 | `workflow-ledger.mjs` (before/after, F1–F15) |
| Real states, not one screenshot | state-design checkpoints 1, 8, 9; empty-state-design checkpoints 1, 7; responsive-validation checkpoint 7 | `stress-content.mjs`; `fragile-layout-real-content` scenario |
| Automate mechanics, preserve judgment | workflow-compression checkpoint 5 (preserve judgment and safety steps); core rule 14 | `workflow-ledger.mjs` (`preserve: true` never tagged) |
| Meaningful runnable UI must earn rendered claims | shared operating contract; architect and responsive completion criteria; explicit exception branch | rendered-evidence telemetry plus `NOT VERIFIED IN RENDERED OUTPUT` requirement |
| Specialist handoff is a graph, not a list | architect recipes and every specialist's transfer artifact | `recipes.md`; specialist output fields and completion checks |
| Reference reads must cause a decision | shared operating contract conditional-loading table; direction/composition/workflow/state branches | required-reference telemetry and completion-signal fields |

## Honest gaps

- Whether an agent *invokes* a skill at all depends on the agent and on the description. Observed
  with Claude Code: 3 of 13 runs with capability-first descriptions, 12 of 13 with trigger-first
  ones (`tests/evals/results/README.md`). A checkpoint cannot change behavior in a skill that is never
  loaded.
- Agents rarely open referenced files they are told to read first (the core was opened in 1 of 23
  skill-loading runs). Rules that must apply are therefore inlined in the `SKILL.md` body (the
  generated core brief); references hold depth, not obligations.
- Checkpoints that require rendering or measuring were followed in 1 of 13 runs, even with fixtures
  and a browser available. "Rendered truth" is the least operational principle so far.
- Scripts gather evidence; they cannot judge taste. Every script says so in its output.
- The 0.3.0 enforcement fields are implemented but have not yet been run against a fresh multi-agent,
  multi-sample benchmark. Treat the telemetry schema and local coverage report as infrastructure,
  not as evidence of behavioral improvement until those runs exist.
