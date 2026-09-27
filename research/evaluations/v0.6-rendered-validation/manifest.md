# Render manifest — v0.6 rendered validation

Viewport for all primary screenshots: 1440×900. Controlled groups additionally checked at 390×844 (mobile) where the layer table specifies a materially different responsive transformation.

| System | Niche | Group | Product state (controlled groups) | Composition | Density | Type strategy | Motion | Implementation ambiguity taken |
|---|---|---|---|---|---|---|---|---|
| Practice Console | education | A (technical lesson) | grep/sort/uniq -c lesson, step 2/4, 1 hint used | command-first | dense | condensed-display + mono | restrained-causal | Env-state line wording invented (not specified); kept minimal, one line |
| Worked Example | developer | A | same lesson/step | stepwise | medium | serif-sans-duet | event-celebration | Diagram row said "none" needed here (explanation is code-only); omitted rather than inventing one |
| Tutor Path | ai | A | same lesson/step | path | sparse | rounded-sans | event-celebration | Tutor's follow-up question text invented (row only says "asks questions back"); kept short, single question |
| Case Desk | public | B (case review) | Case #4471, 2 evidence items, SLA 2h | split-pane | dense | institutional-sans | none | none material |
| Threat Board | developer | B | same case, same evidence, same deadline | master-detail | dense | condensed-display + mono | restrained-causal | Severity band color chosen as "high" (case doesn't specify a CVE-style severity; picked the closest analogue) |
| Object Sheet | business | B | same case, same evidence, same deadline | object-sheet | dense | institutional-sans | restrained-causal | Related-objects list content invented minimally (row requires it, case data doesn't specify related records) |
| Exam Hall | education | C (stepwise question) | "Do you have any dependants living with you?" Y/N, q4/9 | stepwise | medium | institutional-sans | none | Reframed as a certification-exam item on eligibility rules (Exam Hall's own fit line), not a real subject exam |
| Policy Plain | finance | C | same question, same step count | stepwise | medium | institutional-sans | none | none material |
| Plain Service | public | C | same question, same step count | stepwise | medium | institutional-sans | none | none material |
| Ledger Desk | business | native | — | index | dense | grotesque | restrained-causal | |
| Broadsheet | media | native | — | index | dense | editorial-serif | none | |
| Coach Stage | health | native | — | stage | sparse | grotesque | choreographed | |
| Still Water | health | native | — | stage | sparse | editorial-serif | ambient-world | |
| Toybox Table | games | native | — | stage | sparse | rounded-sans | event-celebration | |
| Pantry List | commerce | native | — | index | dense | rounded-sans | physical-direct | |
| Vault Ledger | finance | native | — | hub | medium | technical-sans | restrained-causal | |
| Hangout Space | social | native | — | spatial-scene | variable | rounded-sans | ambient-world | |

Rule applied throughout: normalize the product (content, data, state, available actions, information volume, implementation effort) within each controlled group; let composition, type, color, density, radius, and motion vary exactly as each system's own layer table specifies. No source file under `shared/design-intelligence/` is touched until all 17 renders are built and evidence is recorded.
