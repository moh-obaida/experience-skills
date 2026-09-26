---
name: product-friction
description: "Use this skill whenever a product or area feels hard to use overall, users get lost or keep asking the same support questions, terminology or duplicate concepts confuse people, features pile up without getting easier, an admin, settings, or setup area is being redesigned, or a whole product or area needs an audit rather than one flow. Finds and ranks product-level friction: terminology, cognitive load, discoverability, lost context, information architecture, dead ends, status ambiguity, unnecessary modes, inconsistent behavior, trust and transparency, first-use burden, and expert burden, in a prioritized friction ledger."
license: MIT
metadata:
  version: "0.5.0"
  collection: experience-skills
---

# Product Friction

Some friction lives inside one flow (workflow-compression). Other friction lives in the product
itself: what things are called, how concepts relate, where features live, whether the product
remembers context, whether it behaves the same way twice. This skill finds that friction and
ranks it.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/experience-operating-contract.md`; carry the friction ledger forward
   to the next specialist instead of restarting diagnosis.
3. Note the product's maturity (`references/_shared/product-maturity.md`). Renames and
   restructures cost more in mature products; your recommendations must include that cost.

<!-- core-brief:start · GENERATED FROM shared/philosophy/core-brief.md by npm run sync. Do not edit here. -->
**Core rules in brief.** These apply even before you open `references/_shared/experience-core.md`.
Read that file (the full rules and evidence levels) before a full review, repair, or build.

- **Verdict before adjectives.** Do not write "clean," "modern," "great idea," or "looks good" until
  an observation earns it. The user's enthusiasm is not evidence; test the proposal against the goal.
- **Evidence levels on findings.** E1 rendered, E2 measured, E3 source, E4 documented,
  E5 screenshot, E6 assumed. If files, a browser, or a terminal are available, look or measure before
  claiming. Otherwise, name the checks you did not run.
- **Composition is not alignment.** Empty space needs a stated job, and sparseness is never fixed
  with filler (stats, tips, promos, decoration).
- **Personality belongs in the environment, not in standard controls.** A control changes only if
  the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Hand off when another experience skill fits better.** If part of the problem belongs to one
  (composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty
  states, slop, critical review) and it is installed, invoke it rather than improvising its method.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
<!-- core-brief:end -->

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

## Mandatory conditional loading

If the audit covers a product area, MUST load `references/friction-ledger.md`, `references/finding-and-continuing.md`, and `references/_shared/controls-and-inputs.md`. If friction involves repeated questions or lost context, MUST load `references/_shared/known-context-and-defaults.md`. Do not propose a feature until the located issue, frequency, and cheaper repair are recorded.

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
7. **When users distrust what the product shows or does** ("I thought it saved", "why did it change?"): use the trust lens in `references/trust-and-transparency.md` and record what users believed vs what was true.

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

## Precedent

| When | Load |
|---|---|
| Interruptions, overlays, and consent patterns | `references/_shared/interruptions-and-consent.md` |
| What products infer or remember instead of asking | `references/_shared/known-context-and-defaults.md` |

## Failure modes

- Generic audit without located examples; feature pile as the fix; tour reflex; unranked list;
  rename churn without migration.

## Completion criteria

- A ledger of located issues with frequency, severity, costs, risk, and repair.
- Issues ranked and grouped into themes; top themes have repairs with tradeoffs and migration cost.
- Evidence sources and gaps stated.
- The friction ledger is handed off with the selected next specialist, preserved constraints, and
  open risks; the next specialist does not repeat the audit.

## References

- `references/friction-ledger.md` — ledger format and ranking
- `references/language-and-load.md` — terminology, cognitive load, modes
- `references/finding-and-continuing.md` — discoverability, information architecture, continuity
- `references/consistency-and-concepts.md` — concept model, behavioral consistency
- `references/first-use-and-expert-burden.md` — newcomer vs expert balance
- `assets/friction-ledger-template.md` — copyable ledger
- `references/trust-and-transparency.md` — mental models, hidden and stale state, opaque automation, recovery, platform conventions
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `product-maturity.md`,
  `workflow-friction.md`, `information-priority.md`, `overengineering.md`, `next-best-action.md`,
  `continue-where-left-off.md`, `interruptions-and-consent.md`, `known-context-and-defaults.md`
