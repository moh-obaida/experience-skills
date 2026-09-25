# Agent Evaluation Report

Date: 2026-09-25 · Agent: CLI default · Judge: CLI default · Scenarios: 13

Each scenario ran twice in a fresh temporary project: **without** the skills and **with** all
skills installed as project skills. A separate judge graded answers without knowing the condition.

| Scenario | Principles met (without → with) | Unacceptable (without → with) | Praise opening (without → with) | Expected skills loaded (with) | References read (with) | Scripts run (with) |
|---|---|---|---|---|---|---|
| blank-saas-dashboard (anchor) | – → 3/4 | – → 0 | – → no | 0/3 (missed: empty-state-design, composition-repair, anti-slop-ui) | 2 | none |
| playful-game-join (anchor) | – → 3/4 | – → 0 | – → no | 0/5 (missed: visual-identity, composition-repair, interaction-design, anti-slop-ui, critical-review) | 2 | none |
| government-form (anchor) | – → 5/5 | – → 0 | – → no | 1/3 (missed: workflow-compression, interaction-design) | 1 | none |
| ecommerce-checkout (anchor) | – → 4/4 | – → 0 | – → no | 0/4 (missed: workflow-compression, interaction-design, composition-repair, product-friction) | 0 | none |
| mobile-banking-transfer (anchor) | – → 3/3 | – → 0 | – → no | 1/4 (missed: interaction-design, state-design, critical-review) | 2 | none |
| CLI-project-init (anchor) | – → 4/4 | – → 0 | – → no | 1/3 (missed: interaction-design, state-design) | 1 | none |
| editorial-homepage (anchor) | – → 3/4 | – → 0 | – → no | 0/3 (missed: composition-repair, visual-identity, anti-slop-ui) | 1 | none |
| long-running-ai-job (anchor) | – → 2/4 | – → 0 | – → no | 1/3 (missed: workflow-compression, interaction-design) | 0 | none |
| data-dashboard (anchor) | – → 3/3 | – → 0 | – → no | 0/4 (missed: anti-slop-ui, composition-repair, state-design, product-friction) | 0 | none |
| justified-gradient (anchor) | – → 4/4 | – → 0 | – → no | 1/3 (missed: visual-identity, critical-review) | 0 | none |
| fragile-layout-real-content (anchor) | – → 3/4 | – → 0 | – → no | 0/3 (missed: responsive-validation, composition-repair, state-design) | 0 | none |
| admin-setup-flow (anchor) | – → 4/4 | – → 0 | – → no | 1/3 (missed: product-friction, interaction-design) | 0 | none |
| fashionable-redesign (anchor) | – → 4/4 | – → 0 | – → no | 1/3 (missed: anti-slop-ui, composition-repair) | 0 | none |

## Totals

| Condition | Runs graded | Principles met | Unacceptable recommendations | Praise openings |
|---|---|---|---|---|
| without skills | 0 | 0/0 | 0 | 0 |
| with skills | 13 | 45/51 | 0 | 0 |

## Per-run notes

- **blank-saas-dashboard · with:** The answer reframes 'less empty' as 'show the user's real work', grounds each change in data already in the file, removes the duplicate buttons and designs the low-data states. Its only gap is that it measured no viewport coverage and didn't say whether a browser was available. Skills loaded: experience-architect.
- **playful-game-join · with:** It rejects bouncing digits outright, moves the fun into the surroundings and into motion that follows events, and replaces the segmented boxes with one accessible numeric input. It never checks legibility at projector distance or on Chromebook screens, and its environment ideas are generic ('game colors, mascot') rather than drawn from specific product elements. Skills loaded: experience-architect.
- **government-form · with:** It opens with a clear verdict, compares the proposal with the current form piece by piece, and gives concrete improvements that fit a public service. One weakness: it credits one-question-per-page as good practice, which slightly muddies its count of steps before and after. Skills loaded: critical-review.
- **ecommerce-checkout · with:** The answer is well prioritised and applies the principles, with good extras like WCAG autoplay, postcode lookup and express wallets. Measurement is funnel-level and doesn't track dismissals or scroll-to-action, and a few changes ship without before/after testing. Skills loaded: none.
- **mobile-banking-transfer · with:** The answer opens by pushing back on 'one tap' as a literal spec. It gets close to one tap safely through repeat transfers and standing orders, and adds useful notes on idempotency keys and server-side skipping. Its one gap is that the final states don't separately cover failed and unknown. Skills loaded: workflow-compression.
- **CLI-project-init · with:** The answer rejects the prompt-driven design and calls hanging in CI a correctness bug. It gives a precise plan for resolving each value (flag, then detection, then default, then prompt or fail), with actionable errors and a printed next command. The one gap is that it never says outright that the approach applies beyond the web. Skills loaded: workflow-compression.
- **editorial-homepage · with:** This is a strong structural diagnosis that applies editorial hierarchy, art direction and a limited role for cards well, and it avoids every unacceptable recommendation. It misses one part of principle 4: the logo test is never applied to an article page. The line 'Your editor is right' comes right after a disclaimer and is backed by reasoning at once, so it doesn't count as praise before evaluation. Skills loaded: experience-architect.
- **long-running-ai-job · with:** The answer is strong on idempotency, separating network state from job state, and letting users leave. It misses keeping partial output on failure and never says the completion notice should carry a link or a next action. Skills loaded: state-design.
- **data-dashboard · with:** The answer changes the dashboard from describing metrics to supporting one decision: ranked staffing gaps with a reason for each and suggested moves. It also covers thresholds, data freshness and stale states, and gives a concrete way to test success. It admits it has not seen the dashboard and suggests watching the lead use it before building anything. Skills loaded: experience-architect.
- **justified-gradient · with:** The answer covers all four principles, gives concrete contrast numbers and a fix for the search field, and says openly that it didn't render the page. It also flags that the gradient may not actually be dynamic, which would strengthen the teammate's point. Skills loaded: anti-slop-ui.
- **fragile-layout-real-content · with:** A specific, well-grounded answer that finds all five root causes, explains why removing nowrap alone isn't enough, and is honest that nothing was rendered. Its only gap is that it doesn't consider how the layout works with very few or very many people. Skills loaded: none.
- **admin-setup-flow · with:** This is a thorough answer: it audits each screen, removes redundant steps, reports before/after counts, and covers expert and bulk use. The one borderline point is that it folds the final review into the form and the labeled send button instead of keeping a separate review screen, though it defends that choice and adds revoke/resend. Skills loaded: workflow-compression.
- **fashionable-redesign · with:** The answer rejects the redesign clearly and backs this with specific, measurable costs for dense dispatch work, then offers an improved table and a cheap test. A small weakness: the phrase 'This gets you the modern feel' slightly accepts the user's aesthetic framing, and some pixel estimates are rough, though they are labeled as estimates. Skills loaded: critical-review.

Limitations: one run per condition (no variance estimate); an LLM judge; the agent's own
user-level skills and settings load in both conditions.
