# Agent Evaluation Report

Date: 2026-09-25 · Agent: CLI default · Judge: CLI default · Scenarios: 13

Each scenario ran twice in a fresh temporary project: **without** the skills and **with** all
skills installed as project skills. A separate judge graded answers without knowing the condition.

| Scenario | Principles met (without → with) | Unacceptable (without → with) | Praise opening (without → with) | Expected skills loaded (with) | References read (with) | Scripts run (with) |
|---|---|---|---|---|---|---|
| blank-saas-dashboard (anchor) | 3/4 → 3/4 | 0 → 0 | no → no | 1/3 (missed: composition-repair, anti-slop-ui) | 2 | none |
| playful-game-join (anchor) | 0/4 → 3/4 | 1 → 0 | no → no | 0/5 (missed: visual-identity, composition-repair, interaction-design, anti-slop-ui, critical-review) | 1 | none |
| government-form (anchor) | 5/5 → 5/5 | 0 → 0 | no → no | 0/3 (missed: critical-review, workflow-compression, interaction-design) | 0 | none |
| ecommerce-checkout (anchor) | 2/4 → 4/4 | 0 → 0 | no → no | 0/4 (missed: workflow-compression, interaction-design, composition-repair, product-friction) | 0 | none |
| mobile-banking-transfer (anchor) | 2/3 → 3/3 | 0 → 0 | no → no | 1/4 (missed: interaction-design, state-design, critical-review) | 1 | none |
| CLI-project-init (anchor) | 3/4 → 2/4 | 0 → 0 | no → no | 0/3 (missed: workflow-compression, interaction-design, state-design) | 0 | none |
| editorial-homepage (anchor) | 2/4 → 3/4 | 0 → 0 | no → no | 0/3 (missed: composition-repair, visual-identity, anti-slop-ui) | 0 | none |
| long-running-ai-job (anchor) | 3/4 → 3/4 | 0 → 0 | no → no | 1/3 (missed: workflow-compression, interaction-design) | 2 | none |
| data-dashboard (anchor) | 2/3 → 2/3 | 0 → 0 | no → no | 0/4 (missed: anti-slop-ui, composition-repair, state-design, product-friction) | 0 | none |
| justified-gradient (anchor) | 4/4 → 4/4 | 0 → 0 | no → no | 0/3 (missed: anti-slop-ui, visual-identity, critical-review) | 0 | none |
| fragile-layout-real-content (anchor) | 3/4 → 3/4 | 0 → 0 | no → no | 0/3 (missed: responsive-validation, composition-repair, state-design) | 0 | none |
| admin-setup-flow (anchor) | 2/4 → 3/4 | 1 → 1 | no → no | 0/3 (missed: workflow-compression, product-friction, interaction-design) | 0 | none |
| fashionable-redesign (anchor) | 4/4 → 4/4 | 0 → 0 | no → no | 0/3 (missed: critical-review, anti-slop-ui, composition-repair) | 0 | none |

## Totals

| Condition | Runs graded | Principles met | Unacceptable recommendations | Praise openings |
|---|---|---|---|---|
| without skills | 13 | 35/51 | 2 | 0 |
| with skills | 13 | 42/51 | 1 | 0 |

## Per-run notes

- **blank-saas-dashboard · with:** It reframes 'less empty' as showing the user's real work instead of adding filler, and it removes the buttons that duplicate the sidebar. Its main gap is that the viewport coverage is estimated rather than measured, with no before/after check. Skills loaded: empty-state-design.
- **blank-saas-dashboard · without:** The answer changes the question from 'fill space' to 'show the data that's already there', and it demotes the duplicate buttons well. Its main gap is that it never measures or offers to measure first-viewport coverage. It also doesn't name the operational archetype, though it clearly reasons from it.
- **playful-game-join · with:** The answer rejects bouncing digits with concrete reasons: paste, labels, keyboard type and distraction. It moves the personality into a background taken from the game, and moves playful motion to success and error feedback. Its one gap is that it never explicitly tests legibility at projector distance. Skills loaded: none.
- **playful-game-join · without:** The answer opens by agreeing to the bouncing-digits idea and puts more decoration on the segmented boxes instead of challenging them. Its usability and accessibility fixes are solid but only patch a pattern it should have replaced, and it adds an unrelated note about connectors.
- **government-form · with:** The answer challenges the premise straight away, costs out each proposed change with reasons specific to a public service (accessibility law, users without JavaScript, drop-off at each step), and offers practical improvements that make the form faster. It also gives a fair way to test the wizard if the team still wants it. Skills loaded: none.
- **government-form · without:** Opens with pushback and explains the specific costs of the wizard: more clicks, accessibility problems with custom dropdowns, and extra page weight. It then gives concrete improvements that fit a public service and proposes testing the wizard with users instead of arguing about it. The friendly illustration on the confirmation page is a small concession but stays within limits.
- **ecommerce-checkout · with:** It opens by naming friction as the root problem and covers every principle with concrete, UK-specific fixes. The only gaps are that measurement leaves out decision counts and scroll-to-button tracking, and 'skip steps' could be read as touching the order review. Skills loaded: none.
- **ecommerce-checkout · without:** The answer is specific and fixes the modals, preselection, delivery info next to the button and address prefill well. It removes merchandising instead of moving it around the purchase path, and its measurement plan has no before/after baseline and no dismissal or scroll metrics.
- **mobile-banking-transfer · with:** The answer starts with a direct recommendation (9 screens down to 4, not literally one tap) and explains why with mistake, fraud and regulatory (SCA) risks. It then gets close to the product owner's goal with repeat shortcuts and biometrics. It also includes idempotency and network-failure handling, which were not required. Skills loaded: workflow-compression.
- **mobile-banking-transfer · without:** The step removal is excellent and it keeps review and authentication while pushing back on literal one tap, reframing it as one tap for saved payees. It fails principle 3: the result screen is just a 'success state', with no honest handling of processing, failed or unknown outcomes.
- **CLI-project-init · with:** The detection, override flags, TTY/CI fail-fast behavior, removal of 'are you sure?' and the challenge to storing values in init are all strong. It never prints a next command and never says the idea applies outside web projects. Skills loaded: none.
- **CLI-project-init · without:** A thorough, well-reasoned design that correctly identifies the isTTY root cause, removes the confirmation step and avoids stale duplicated config. However, it never applies the 'print the next command' principle, and its detection covers only web and Node frameworks.
- **editorial-homepage · with:** The answer opens with agreement ('Your editor is right') before giving its assessment. It reframes the problem well: the missing editorial ranking matters more than the styling details. It covers hierarchy, imagery, where cards belong and the CMS changes needed, but it applies the logo test to the homepage only and skips the article page. Skills loaded: none.
- **editorial-homepage · without:** It correctly reframes the problem as missing editorial judgment and hierarchy, gives concrete typography and layout guidance, and adds CMS controls. It meets only two of the four principles: it has no logo test and nothing on when cards are still appropriate.
- **long-running-ai-job · with:** The answer is thorough and correct on the background job, the unknown-versus-failed states, idempotency and notification. It keeps inputs on retry but never mentions keeping partial output such as completed stages, so under strict grading principle 3 is not fully met. Skills loaded: state-design.
- **long-running-ai-job · without:** The answer opens by naming the root cause: the tab is treated as the owner of the job. It gives thorough fixes for idempotency, separating connection state from job state, and persistence. Its one gap is the completion notification, which has no link to the result and no next action.
- **data-dashboard · with:** Reframes the dashboard around the actual decision (where to send staff today), with ranked gaps, causes, consequences and suggested moves. It misses data freshness and stale-state handling, which matters for a morning operational view. Skills loaded: none.
- **data-dashboard · without:** The answer turns the dashboard into a decision screen with a clear prioritized table, the reasons behind each gap, and a feedback loop. Its one gap is principle 3: it never covers data freshness or how to show stale data.
- **justified-gradient · with:** The answer rejects the teammate's reasoning by pointing to what the gradient encodes, and it finds specific contrast failures with numbers, including the search label. It also flags that the gradient is hardcoded and has no solid fallback color. It makes no edits, as the user asked. Skills loaded: none.
- **justified-gradient · without:** The answer opens with a clear recommendation, not praise. It judges the gradient by what it communicates and checks contrast with specific ratios. It also points out that the gradient is hardcoded, which gives a plausible reason for the teammate's reaction. The line "Your teammate is right that something needs fixing" is a mild concession, but the answer then redirects it correctly to the contrast problem.
- **fragile-layout-real-content · with:** A specific, well-reasoned rejection that identifies every cause and is honest that nothing was rendered. The only gap is that it never considers how the layout behaves with very few or very many people. Skills loaded: none.
- **fragile-layout-real-content · without:** Specific, line-referenced diagnosis with sound fixes, and it is honest that nothing was rendered. The one gap is that it never considers the grid with very few or very many people.
- **admin-setup-flow · with:** The answer handles the redundant steps, expert speed and safety alternatives well, but it drops the final review before a real invitation is sent and relies on undo instead. It also overstates that four screens ask for known information when only two or three do. Skills loaded: none.
- **admin-setup-flow · without:** Strong on removing redundant steps and on speed for frequent use, with good safety measures (undo, a held send, inline checks, extra friction for Admin). It does remove the explicit final review before the real email goes out, and it gives no counts of decisions or inputs.
- **fashionable-redesign · with:** The answer gives its verdict first and bases it on the dispatchers' task, with specific numbers for screen space and rows. It proposes a concrete improved table and a test with real dispatchers to settle the question. Skills loaded: none.
- **fashionable-redesign · without:** The answer gives a clear verdict up front and quantifies the density and performance costs. It salvages only justified elements and proposes timed tasks with real dispatchers to settle the question. Its only weakness is that it implies the goal of fast dispatch decisions instead of stating it before judging.

Limitations: one run per condition (no variance estimate); an LLM judge; the agent's own
user-level skills and settings load in both conditions.
