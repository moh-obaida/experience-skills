# Agent Evaluation Report

Date: 2026-09-25 · Agent: CLI default · Judge: CLI default · Scenarios: 13

Each scenario ran twice in a fresh temporary project: **without** the skills and **with** all
skills installed as project skills. A separate judge graded answers without knowing the condition.

| Scenario | Principles met (without → with) | Unacceptable (without → with) | Praise opening (without → with) | Expected skills loaded (with) | References read (with) | Scripts run (with) |
|---|---|---|---|---|---|---|
| blank-saas-dashboard (anchor) | – → 3/4 | – → 0 | – → no | 1/3 (missed: composition-repair, anti-slop-ui) | 2 | none |
| playful-game-join (anchor) | – → 3/4 | – → 0 | – → no | 1/5 (missed: visual-identity, composition-repair, anti-slop-ui, critical-review) | 1 | none |
| government-form (anchor) | – → 5/5 | – → 0 | – → no | 1/3 (missed: workflow-compression, interaction-design) | 1 | none |
| ecommerce-checkout (anchor) | – → 4/4 | – → 0 | – → no | 1/4 (missed: interaction-design, composition-repair, product-friction) | 0 | none |
| mobile-banking-transfer (anchor) | – → 3/3 | – → 0 | – → no | 1/4 (missed: interaction-design, state-design, critical-review) | 1 | none |
| CLI-project-init (anchor) | – → 4/4 | – → 0 | – → no | 1/3 (missed: interaction-design, state-design) | 1 | none |
| editorial-homepage (anchor) | – → 3/4 | – → 0 | – → no | 3/3 | 5 | none |
| long-running-ai-job (anchor) | – → 4/4 | – → 0 | – → no | 1/3 (missed: workflow-compression, interaction-design) | 1 | none |
| data-dashboard (anchor) | – → 2/3 | – → 0 | – → no | 0/4 (missed: anti-slop-ui, composition-repair, state-design, product-friction) | 0 | none |
| justified-gradient (anchor) | – → 4/4 | – → 0 | – → no | 1/3 (missed: visual-identity, critical-review) | 0 | none |
| fragile-layout-real-content (anchor) | – → 3/4 | – → 0 | – → no | 1/3 (missed: composition-repair, state-design) | 0 | responsive-validation/scripts/stress-content.mjs, responsive-validation/scripts/layout-report.mjs |
| admin-setup-flow (anchor) | – → 3/4 | – → 1 | – → no | 1/3 (missed: product-friction, interaction-design) | 0 | none |
| fashionable-redesign (anchor) | – → 4/4 | – → 0 | – → no | 0/3 (missed: critical-review, anti-slop-ui, composition-repair) | 0 | none |

## Totals

| Condition | Runs graded | Principles met | Unacceptable recommendations | Praise openings |
|---|---|---|---|---|
| without skills | 0 | 0/0 | 0 | 0 |
| with skills | 13 | 45/51 | 1 | 0 |

## Per-run notes

- **blank-saas-dashboard · with:** The answer reframes 'less empty' as showing Jordan's real work instead of filler, removes the duplicate buttons, and avoids every anti-pattern. Its one gap is measurement: it never measured first-viewport coverage or planned a before/after measurement, and only said the blank space was estimated. Skills loaded: experience-architect, empty-state-design.
- **playful-game-join · with:** It rejects the bouncing-digits idea, backs that up with specific usability and accessibility problems, and moves the fun into a background drawn from the game. Its only gap is not checking legibility at projector distance; it only tests Chromebook and phone sizes. Skills loaded: experience-architect, interaction-design.
- **government-form · with:** The answer applies every principle concretely, from the verdict and step counts to postcode lookup, a defaulted date and a reference number, and it grounds the critique in accessibility standards and GOV.UK patterns. It also gives a fair route for using steps and a sensible place for the designer's work, without giving in to the user's enthusiasm. Skills loaded: critical-review.
- **ecommerce-checkout · with:** The advice is specific and keeps the important choices: size for new customers, the consent opt-in, and the final order step. Measurement relies on outcome metrics rather than friction metrics like dismissals and scroll-to-action. Price near the primary action is only implied. Skills loaded: experience-architect, workflow-compression.
- **mobile-banking-transfer · with:** The answer rejects literal one-tap right away and offers 'Send again' into a pre-filled review plus biometric as the safe alternative. It covers all three principles with specific detail, including idempotency and Confirmation of Payee. The failed state is mentioned only indirectly and is not designed as its own screen. Skills loaded: workflow-compression.
- **CLI-project-init · with:** The answer opens with a direct verdict and covers inference, flag overrides, TTY/CI detection, actionable errors and the next command. It also replaces 'Are you sure?' with a --force guard against overwriting a config. Principle 4 is shown through what the answer does rather than stated outright. Skills loaded: workflow-compression.
- **editorial-homepage · with:** The answer opens with agreement ('The editor is right.'), then reframes the problem as flat hierarchy rather than cards. It applies editorial hierarchy, typographic identity, art direction and scoped card use very well, but it misses the logo test on the homepage and an article page. Skills loaded: experience-architect, composition-repair, visual-identity, anti-slop-ui.
- **long-running-ai-job · with:** The answer opens by diagnosing the problem: the page treats the browser tab as if it were the job. It then covers all four principles with concrete server, client and UX changes, test cases and a sensible rollout order. It says users shouldn't be told they can leave until reconnecting works, which avoids promising safety that isn't there yet. Skills loaded: state-design.
- **data-dashboard · with:** The answer reframes the dashboard around the actual decision (where staff are short) as a ranked, reasoned, per-location table with suggested moves and a feedback loop. Its only gap is that it shows data freshness but doesn't design a stale-data state. Skills loaded: experience-architect.
- **justified-gradient · with:** The answer keeps the gradient for concrete product reasons and finds the real contrast and input problems with calculated ratios. It also notices that this file has no dynamic gradient code, says it did not render the page, and makes no edits. Skills loaded: anti-slop-ui.
- **fragile-layout-real-content · with:** A thorough, measured, honest answer that pins each failure to a specific CSS line and gives concrete fixes, including RTL. The one gap is that it never considers how the layout holds up with very few or very many people. Skills loaded: responsive-validation.
- **admin-setup-flow · with:** Strong on removing redundant steps, counting before and after, and speed for frequent use (bulk add, remembered defaults, keyboard send). It fails by merging the final review into the send button instead of keeping a clear review before the irreversible invitation email. Skills loaded: workflow-compression.
- **fashionable-redesign · with:** The answer rejects the redesign as proposed, backs that with specific density, contrast, motion and performance costs, and gives a clear alternative plus a way to test it. The pixel and row estimates are approximate but reasonable; the '+12 min' ETA idea and the usability test go beyond the principles. Skills loaded: none.

Limitations: one run per condition (no variance estimate); an LLM judge; the agent's own
user-level skills and settings load in both conditions.
