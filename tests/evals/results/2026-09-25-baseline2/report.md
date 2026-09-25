# Agent Evaluation Report

Date: 2026-09-25 · Agent: CLI default · Judge: CLI default · Scenarios: 13

Each scenario ran twice in a fresh temporary project: **without** the skills and **with** all
skills installed as project skills. A separate judge graded answers without knowing the condition.

| Scenario | Principles met (without → with) | Unacceptable (without → with) | Praise opening (without → with) | Expected skills loaded (with) | References read (with) | Scripts run (with) |
|---|---|---|---|---|---|---|
| blank-saas-dashboard (anchor) | 3/4 → – | 0 → – | no → – | – | – | – |
| playful-game-join (anchor) | 0/4 → – | 1 → – | no → – | – | – | – |
| government-form (anchor) | 3/5 → – | 0 → – | no → – | – | – | – |
| ecommerce-checkout (anchor) | 4/4 → – | 0 → – | no → – | – | – | – |
| mobile-banking-transfer (anchor) | 2/3 → – | 0 → – | no → – | – | – | – |
| CLI-project-init (anchor) | 3/4 → – | 0 → – | no → – | – | – | – |
| editorial-homepage (anchor) | 2/4 → – | 0 → – | no → – | – | – | – |
| long-running-ai-job (anchor) | 3/4 → – | 0 → – | no → – | – | – | – |
| data-dashboard (anchor) | 2/3 → – | 0 → – | no → – | – | – | – |
| justified-gradient (anchor) | 4/4 → – | 0 → – | no → – | – | – | – |
| fragile-layout-real-content (anchor) | 3/4 → – | 0 → – | no → – | – | – | – |
| admin-setup-flow (anchor) | 2/4 → – | 1 → – | no → – | – | – | – |
| fashionable-redesign (anchor) | 4/4 → – | 0 → – | no → – | – | – | – |

## Totals

| Condition | Runs graded | Principles met | Unacceptable recommendations | Praise openings |
|---|---|---|---|---|
| without skills | 13 | 35/51 | 2 | 0 |
| with skills | 0 | 0/0 | 0 | 0 |

## Per-run notes

- **blank-saas-dashboard · without:** It reframes 'less empty' as showing useful data rather than adding filler, demotes the duplicate buttons, and rejects stat cards and charts. Its gaps are that it never measures viewport coverage and never names the page as operational in so many words.
- **playful-game-join · without:** It opens by agreeing that 'Bouncing digits would suit a classroom game' and then builds the fun around segmented, animated digit boxes, which is the core anti-pattern. The usability and accessibility fixes are solid, but they keep the segmented pattern and never make the environment interesting or check projector readability.
- **government-form · without:** It rejects 'engagement' as the goal, drops the custom dropdowns and adds good concrete improvements. But it approves the multi-step wizard without comparing it to the single-page form and never counts the steps: 1 page becomes 7.
- **ecommerce-checkout · without:** The answer covers all four principles with concrete, well-prioritised fixes and no unacceptable recommendations. It could have said more clearly that the default size stays changeable, and it did not mention measuring scroll-to-action.
- **mobile-banking-transfer · without:** Strong on removing steps and keeping one real review plus authentication, and it reframes the one-tap goal well. It misses the failed and unknown/timeout end states, which are key to honest final status in money transfers.
- **CLI-project-init · without:** This is a strong, concrete design: detection is separated from prompting, CI never prompts, errors name the flag to pass, and the pointless 'are you sure?' is dropped. It misses one principle: the output never prints the next command, such as the `deploy` step.
- **editorial-homepage · without:** This is a strong, specific editorial redesign covering hierarchy, typography, varied story types and dropping the dashboard styling, but it opens by agreeing ("Your editor is right"). It also misses two principles: it gives no guidance on where cards are still appropriate, and it has no logo test covering both the homepage and an article page.
- **long-running-ai-job · without:** The answer correctly separates a failed poll from a failed job and fixes duplicates with idempotency keys. It is weaker on the completion notification, which has no link or next action, and it does not mention keeping partial output.
- **data-dashboard · without:** The answer correctly reframes the dashboard from reporting on the business to deciding where to send staff. It gives a ranked gap table with causes and thresholds, plus a way to validate it. The one clear gap is that it says nothing about data freshness or stale states, which matters when the recommendation depends on live roster and inbound feeds.
- **justified-gradient · without:** Opens with a direct verdict backed by reasoning about the gradient's job, with no praise first. It gives specific contrast numbers, covers all four phases and the search field, notes the gap between the comment and the code, and recommends concrete fixes that keep the signature gradient.
- **fragile-layout-real-content · without:** The diagnosis is precise, estimates widths per cause and is honest that nothing was rendered. The only gap is that it doesn't discuss layouts with very few or very many people.
- **admin-setup-flow · without:** The answer removes the right screens and handles frequent use well. However, it removes the final review before a real email goes out and relies on Undo. Its before and after counts also contradict each other (four fields vs. about 3).
- **fashionable-redesign · without:** The answer is quantitative and tied to the task. It rejects the redesign, keeps the table, and suggests a timed test with real users. Its one weakness is that it gives the verdict before explicitly stating the goal (fast dispatch decisions), though the goal is clear from context.

Limitations: one run per condition (no variance estimate); an LLM judge; the agent's own
user-level skills and settings load in both conditions.
