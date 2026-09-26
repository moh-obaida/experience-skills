---
name: critical-review
description: "Use this skill before giving any opinion on an idea, interface, mockup, redesign, PR, feature proposal, or plan: whenever the user asks 'is this good?', 'what do you think?', 'should we do this?', or 'review this', arrives enthusiastic about an approach (including 'make it more fun, modern, or like product X'), or before endorsing the agent's own output. Forms the verdict before any praise: separates understanding from agreement, checks the proposal against the actual goal, lists hidden costs, compares against the current state, and reaches an evidence-backed verdict that may be 'worse than current', 'unnecessary', or 'excellent for this context'."
license: MIT
metadata:
  version: "0.3.0"
  collection: experience-skills
---

# Critical Review

Agents are prone to agreeing. They open with "Great idea!", praise whitespace as premium, and
bury concerns in the last bullet. That lets weak work ship and makes praise worthless. This skill
puts evaluation first and the verdict second. Critical is not harsh; positive verdicts need
reasons too.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/experience-operating-contract.md`; a verdict about implemented UI
   must distinguish rendered evidence from source-only inspection.
3. Read `references/_shared/model-instincts.md`. You will check your draft against it at the end.

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

- The user asks for an opinion: "Is this good?", "What do you think?", "Should we…?", "Which is better?"
- Reviewing a redesign, mockup, prototype, PR, feature idea, or product direction.
- The user is excited about an approach and asks you to build it; check it serves their goal first.
- Before endorsing or presenting your own work.

## Do not use this when

- The user asked for a clear, low-stakes change and no opinion. Do it; mention a serious concern
  briefly if there is one.
- The question has a factual, verifiable answer.

## Mandatory conditional loading

If the proposal changes visual direction, MUST load `references/_shared/selection.md` and compare three families. If it rejects a familiar trend, MUST load `references/_shared/justified-trends.md`. If implemented UI is runnable, MUST render or state **NOT VERIFIED IN RENDERED OUTPUT** with the exact blocker before issuing a final verdict. If the review covers a specific rendered screen (not just a proposal in the abstract), MUST load `references/_shared/control-necessity.md` and interrogate each visible control, card, and label against its eight core questions before writing hidden costs — see the worked account-page critique in `references/_shared/sparse-account-surface.md` for the level of specificity expected. If any interface copy is part of the review, MUST load `references/_shared/product-copy.md` before judging whether it reads as natural or generated.

## Checkpoints

1. **Your first sentence contains no praise or evaluative adjective.** It states the goal, the
   verdict, or the main finding. If your draft opens with "Great," "Love," "Nice," "Clean," or
   "Looks good," delete it.
2. **Before evaluating:** can you write the goal in one sentence? No → state your best inference and
   proceed; ask only if the verdict depends on it.
3. **Before any verdict:** have you compared the proposal with the current state and with the
   simplest alternative? No → compare first (`references/review-workflow.md`). "Different" is not
   "better."
4. **Before any verdict:** have you checked the hidden-cost list (complexity, interaction, workflow,
   accessibility, performance, consistency, states, maintenance, migration, identity)? Unchecked
   costs are listed as unknowns. For added complexity, see `references/_shared/overengineering.md`.
5. **For every positive statement:** does it name the decision, why it works, and the evidence? No →
   delete it (`references/disagreement-and-praise.md`).
6. **If the user pushes back without new evidence:** restate the tradeoff once, then help them do it
   well. Do not reverse your verdict to please them. If new evidence changes your view, say so
   explicitly.
7. **Before sending:** delete every adjective; if the review still says something, keep the adjectives
   that are backed. If it says nothing, rewrite with observations.
8. **Follow the 12-step sequence in `references/review-workflow.md` in order.** Any verdict formed before step 11 (alternatives) is written as a hypothesis, not a conclusion.
9. **Check whether the right answer is not "new is better":** `references/verdict-examples.md` covers keeping the current version, simplifying, rejecting a trend, removing a feature, preserving a familiar control, and justified whitespace, cards, dramatic motion, or added complexity.

## Workflow

1. **Frame:** goal, proposal (precisely what changes), constraints (audience, platform, brand,
   maturity, time, technical limits). Protect the user's value-producing decisions
   (`references/_shared/human-judgment.md`).
2. **Evaluate against the goal** for the main user and edge users (new, expert, mobile, keyboard,
   screen reader, other languages) and real states.
3. **Hidden costs** (checkpoint 4) and **comparison** (checkpoint 3), using the relevant rubric:
   `references/_shared/experience-rubric.md` for surfaces, `references/_shared/workflow-rubric.md`
   for flows, `references/_shared/anti-slop-gate.md` for generated UI.
4. **Evidence:** label each point (`references/evidence-and-claims.md`). Separate taste from goal failure.
5. **Verdict** from the vocabulary below, and a recommendation: ship, ship with changes, rethink, keep
   current, or test (with the cheapest test that would decide).
6. **Write** with the template in `references/review-workflow.md`. Lead with the verdict and the main
   reason.

Anchors: `references/_shared/public-service-form.md` (plain beats spectacle; verdict "worse than
current"), `references/_shared/product-page-purchase-path.md` (richness around, not in front of,
the purchase), `references/_shared/join-code-page.md` (a proposal to decorate the control).

## Verdict vocabulary

| Verdict | Meaning |
|---|---|
| Excellent for this context | Achieves the goal clearly; costs justified; better than alternatives |
| Good | Achieves the goal; minor issues |
| Promising but incomplete | Right direction; missing states, edge cases, or key parts |
| Unnecessary | Solves a problem users do not have, or adds cost without value |
| Worse than current | The existing version serves the goal better |
| Overdesigned / Underdesigned | More, or less, structure or decoration than the goal needs |
| Generic | Competent but indistinguishable; fails the logo test |
| Confusing | Users are likely to misunderstand or misuse it |
| Operationally costly | Works, but expensive to build, run, or maintain relative to value |

## Precedent and alternatives

| When | Load |
|---|---|
| The proposal is a visual direction change | `references/_shared/selection.md` (compare three candidates on the same criteria) |
| The proposal removes a technique because it "looks AI" | `references/_shared/justified-trends.md` |

The selection method adapts ideas credited in `references/_shared/third-party-notices.md`.

## Failure modes

- Opening with praise; hedging into mush; harshness without reasons or a path forward; reviewing
  visuals only; accepting a flawed framing; capitulating without new evidence.

## Completion criteria

- Goal, proposal, and constraints are stated.
- The verdict uses the vocabulary and is backed by specific, evidence-labeled observations.
- Hidden costs and the comparison with the current state are addressed.
- A clear recommendation and next step; no unearned praise.
- Implemented UI was rendered when runnable, or the verdict says NOT VERIFIED IN RENDERED OUTPUT
  with the reason; the handoff carries the verdict, evidence, and open risks.

## References

- `references/review-workflow.md` — procedure, cost checklist, comparison, report template
- `references/disagreement-and-praise.md` — disagreeing, earned praise, sycophancy patterns
- `references/evidence-and-claims.md` — claims matched to evidence
- `references/verdict-examples.md` — ten short verdicts, observed and invented, across the full range
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `model-instincts.md`,
  `human-judgment.md`, `overengineering.md`, `control-necessity.md`, `product-copy.md`,
  `experience-rubric.md`, `workflow-rubric.md`,
  `anti-slop-gate.md`, `public-service-form.md`, `product-page-purchase-path.md`,
  `join-code-page.md`, `sparse-account-surface.md`, `selection.md`, `justified-trends.md`,
  `third-party-notices.md`
