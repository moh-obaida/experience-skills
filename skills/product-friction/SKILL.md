---
name: product-friction
description: "Find and rank product-level friction beyond individual clicks: confusing terminology, cognitive load, poor discoverability, lost context and session continuity, information architecture problems, dead ends, status ambiguity, unnecessary modes, duplicate concepts, inconsistent behavior, first-use burden, and expert burden, recorded in a prioritized friction ledger. Use when a product feels hard to use overall, when users get lost or ask the same support questions, when features pile up without getting easier, or when auditing a whole product or area rather than one flow."
license: MIT
metadata:
  version: "0.1.1"
  collection: experience-skills
---

# Product Friction

Some friction lives inside one flow (workflow-compression). Other friction lives in the product
itself: what things are called, how concepts relate, where features live, whether the product
remembers context, whether it behaves the same way twice. This skill finds that friction and
ranks it.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Note the product's maturity (`references/_shared/product-maturity.md`). Renames and
   restructures cost more in mature products; your recommendations must include that cost.

## Use this when

- Users call the product confusing, heavy, or hard to learn.
- Support answers the same "where is…" or "what does … mean" questions repeatedly.
- Features have piled up and concepts overlap.
- Users lose context between areas or sessions.
- Newcomers struggle, or experts are slowed by beginner scaffolding.
- You are asked to audit a whole product, area, or release.

## Do not use this when

- One flow's step count is the problem → workflow-compression.
- One screen's layout or look is the problem → composition-repair, visual-identity.

## Checkpoints

1. **Before writing any issue:** is it specific and located (screen, label, action)? "Navigation is
   confusing" is not an issue; "Reports is called 'Insights' in the sidebar and 'Analytics' in the
   account menu" is. Unlocated → go find the instance or drop it.
2. **For every issue:** record frequency, severity, time cost, cognitive cost, and risk
   (`references/friction-ledger.md`). Missing fields → the issue is not ready to rank.
3. **If your repair adds** a feature, tour, tooltip, or setting: can the issue be fixed by renaming,
   moving, merging, or removing instead? Yes → propose that first (`references/_shared/overengineering.md`).
4. **For every dead end found** (success with only "Home," error without action, empty without
   guidance): name its next action (`references/_shared/next-best-action.md`).
5. **For every context loss** (filters reset, draft lost, flow restarts): name what should persist
   (`references/_shared/continue-where-left-off.md`).
6. **Before recommending:** group issues into themes and fix causes, not symptoms.

## Workflow

1. **Scope:** area, user types, 3–6 core tasks.
2. **Collect evidence** (strongest first): walk the tasks in the running product; support tickets or
   FAQs the user provides; navigation and routes; copy in code; analytics if supplied. State sources.
3. **Look through each lens:**

   | Lens | Load |
   |---|---|
   | Names, jargon, synonyms; too much to hold in mind; modes | `references/language-and-load.md` |
   | Cannot find it; navigation structure; lost context; dead ends | `references/finding-and-continuing.md` |
   | Duplicate concepts; inconsistent behavior; unclear ownership | `references/consistency-and-concepts.md` |
   | Onboarding weight vs expert speed | `references/first-use-and-expert-burden.md` |

4. **Record the ledger** (`references/friction-ledger.md`, copyable template
   `assets/friction-ledger-template.md`), tagging flow-level items with codes from
   `references/_shared/workflow-friction.md` and ranking information with
   `references/_shared/information-priority.md` where hierarchy is the cause.
5. **Rank and group** by frequency × (severity + cognitive cost) × risk.
6. **Recommend** repairs for the top themes with tradeoffs and migration cost. Route flow fixes to
   workflow-compression, control fixes to interaction-design, state fixes to state-design.

## Execution rules

- Separate observation ("the label says X") from inference ("users probably think Y").
- In REVIEW mode, deliver the ledger; do not edit.
- Tours and tooltips are never the first repair.

## Failure modes

- Generic audit without located examples; feature pile as the fix; tour reflex; unranked list;
  rename churn without migration.

## Completion criteria

- A ledger of located issues with frequency, severity, costs, risk, and repair.
- Issues ranked and grouped into themes; top themes have repairs with tradeoffs and migration cost.
- Evidence sources and gaps stated.

## References

- `references/friction-ledger.md` — ledger format and ranking
- `references/language-and-load.md` — terminology, cognitive load, modes
- `references/finding-and-continuing.md` — discoverability, information architecture, continuity
- `references/consistency-and-concepts.md` — concept model, behavioral consistency
- `references/first-use-and-expert-burden.md` — newcomer vs expert balance
- `assets/friction-ledger-template.md` — copyable ledger
- `references/_shared/` — generated copies: `experience-core.md`, `product-maturity.md`,
  `workflow-friction.md`, `information-priority.md`, `overengineering.md`, `next-best-action.md`,
  `continue-where-left-off.md`
