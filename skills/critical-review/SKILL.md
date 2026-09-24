---
name: critical-review
description: "Evaluate ideas, interfaces, workflows, and proposed changes before praising them. Separates understanding from agreement, checks the proposal against the actual goal, looks for hidden costs, compares against the current state, and reaches an evidence-backed verdict that may be 'worse than current', 'unnecessary', or 'excellent for this context'. Use when a user asks 'is this good?', 'what do you think?', or 'should we do this?'; when reviewing a redesign, mockup, PR, or product idea; when the user is enthusiastic about an approach; or before endorsing the agent's own output."
license: MIT
metadata:
  version: "0.1.1"
  collection: experience-skills
---

# Critical Review

Agents are prone to agreeing. They open with "Great idea!", praise whitespace as premium, and
bury concerns in the last bullet. That lets weak work ship and makes praise worthless. This skill
puts evaluation first and the verdict second. Critical is not harsh; positive verdicts need
reasons too.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/model-instincts.md`. You will check your draft against it at the end.

## Use this when

- The user asks for an opinion: "Is this good?", "What do you think?", "Should we…?", "Which is better?"
- Reviewing a redesign, mockup, prototype, PR, feature idea, or product direction.
- The user is excited about an approach and asks you to build it; check it serves their goal first.
- Before endorsing or presenting your own work.

## Do not use this when

- The user asked for a clear, low-stakes change and no opinion. Do it; mention a serious concern
  briefly if there is one.
- The question has a factual, verifiable answer.

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

## Failure modes

- Opening with praise; hedging into mush; harshness without reasons or a path forward; reviewing
  visuals only; accepting a flawed framing; capitulating without new evidence.

## Completion criteria

- Goal, proposal, and constraints are stated.
- The verdict uses the vocabulary and is backed by specific, evidence-labeled observations.
- Hidden costs and the comparison with the current state are addressed.
- A clear recommendation and next step; no unearned praise.

## References

- `references/review-workflow.md` — procedure, cost checklist, comparison, report template
- `references/disagreement-and-praise.md` — disagreeing, earned praise, sycophancy patterns
- `references/evidence-and-claims.md` — claims matched to evidence
- `references/_shared/` — generated copies: `experience-core.md`, `model-instincts.md`,
  `human-judgment.md`, `overengineering.md`, `experience-rubric.md`, `workflow-rubric.md`,
  `anti-slop-gate.md`, `public-service-form.md`, `product-page-purchase-path.md`, `join-code-page.md`
