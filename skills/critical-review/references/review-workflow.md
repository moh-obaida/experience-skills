# Review Workflow

The full procedure: frame, evaluate against the goal, find hidden costs, compare with the current state, decide, and write it up.

Sections: Review Workflow · Comparing to the Current State · Review Report Template

## Review Workflow

### Reasoning sequence

Judgment comes after evidence and alternatives. Use these steps as a checklist for reasoning; write down only the material findings and unknowns.

| # | Step | Output |
|---|---|---|
| 1 | Intended outcome | One sentence: what should be true for whom after this change |
| 2 | Proposed solution | Precisely what changes, where |
| 3 | Constraints | Audience, platform, brand, maturity, time, technical limits, accessibility |
| 4 | Evidence | What you can observe or measure (render, measure, read) and at what level |
| 5 | Current state | How well the current version serves the outcome (with evidence) |
| 6 | Proposed state | How well the proposal would serve it (render or reason from specifics) |
| 7 | Benefits | Concrete gains, for which users and states |
| 8 | Costs | Build, maintenance, performance, learning, accessibility |
| 9 | New complexity | Concepts, modes, custom controls, dependencies added |
| 10 | Regressions | What gets worse (states, sizes, speed, familiarity, consistency) |
| 11 | Alternatives | The simplest alternative and "do nothing", compared on the same criteria |
| 12 | Judgment | Verdict from the vocabulary, recommendation, next step |

If you notice yourself forming a verdict before step 11, write it down as a hypothesis and keep going.

### Hidden-cost checklist (for steps 8–10)

| Cost | Questions |
|---|---|
| Complexity | New concepts, modes, settings, code paths? |
| Interaction | Custom controls replacing familiar ones? New learning required? |
| Workflow | More steps, decisions, or waits for any frequent path? |
| Accessibility | Keyboard, screen reader, contrast, motion, target size impacts? |
| Performance | Asset weight, runtime cost, network calls? |
| Consistency | Does it diverge from the rest of the product? |
| States | Which states does it not handle? |
| Maintenance | Who maintains it; does it fight the design system? |
| Migration | Does it break learned behavior, links, docs, or data? |
| Identity | More or less recognizable? More generic? |
| Opportunity | What else could this effort have improved? |

Rank findings by their effect on the user's job: release blocker, major journey damage,
state/trust failure, recovery failure, responsive job failure, accessibility blocker, then polish.
These are prioritization cues, not a new scorecard. Keep material visual-expression findings in the
review alongside behavior; a strong identity is not evidence of a broken journey.

### Prioritizing rendered visual findings

Capture the first impression before detailed inspection, using the operating contract. Compare
likely attention flow with the user's job. Does the dominant surface earn its weight relative to
information, interaction, semantic importance, and its neighbors? Geometric symmetry, coherent
styling, or valid CSS does not answer that question.

Prioritize the small number of causes with the greatest effect on comprehension, hierarchy,
optical balance, task focus, perceived quality, trust, or interaction. Higher visual impact, higher
user/journey relevance, stronger evidence, and reasonable repair leverage argue for higher
priority; use judgment, not a calculated score. A major visual relationship can matter even when
nothing is broken. Keep actual release blockers ahead of cosmetic preferences.

Collapse linked symptoms into the likely root cause. Invented example: an oversized help surface
pulls attention away from checkout, its one link feels stranded, and the next section starts too
late. Report disproportionate allocation once, with the supporting observations, instead of
three equally weighted fixes. Recommend the highest-leverage correction first; separate a symptom
only when it has an independent cause or consequence. State uncertainty when the cause is inferred.

One dominant finding is enough when it explains most of the weakness. Preserve good current
identity, purposeful whitespace, valid dark surfaces, and necessary expert density. A familiar card
or repeated action is not defective by category: distinguish invitation from execution and check
whether each occurrence serves a different moment. Recommend likely composition consequences to
compare after a repair, without editing or speculatively redesigning in a review-only request.

A finished screen may need critical-review alone. Escalate to composition-repair only when a
structural repair is requested or an unresolved composition decision needs its depth; identity or
anti-slop skills require their own observed concern. Do not activate a bundle for every visual issue.

For an anti-slop repair claim, recover the original dominant diagnosis and review the final
rendered product at that level. A changed component or more specific copy is not proof that the
original composition/system cause improved. Keep major unresolved harm explicit and prefer the
highest-leverage correction; do not expand a review-only request into a redesign.

### Recommendation types

- **Ship** · **Ship with changes** (list must-fix) · **Rethink** (goal right, approach wrong) ·
  **Keep current** · **Test** (the cheapest test that would decide)

## Comparing to the Current State

Proposals are often evaluated in isolation, where "new" feels like "better." Always compare.

### Comparison set

1. **Current state:** what exists now.
2. **Proposal:** what is suggested.
3. **Simplest alternative:** the smallest change that achieves the goal.
4. **Do nothing:** is the problem real and worth solving?

### Compare on the goal's dimensions

Pick the dimensions that matter for the goal and compare side by side:

| Dimension | Current | Proposal | Simplest alternative |
|---|---|---|---|
| Steps to join | 2 | 2 | 2 |
| Paste support | Yes | No (segmented boxes) | Yes |
| Recognizability (logo test) | Generic | Generic page, fancy input | Recognizable environment |
| Accessibility | Standard input | 6 unlabeled fields | Standard input |
| Build cost | – | Medium | Low–medium |

### Common findings

- **Different, not better:** the proposal changes appearance without improving the goal.
- **Better at the showcase, worse in states:** great hero screenshot, broken empty/mobile states.
- **Better for one group, worse for another:** faster for experts, confusing for newcomers.
- **Current is better:** say it plainly and explain why.

### Regression awareness

For mature products, weigh the cost of changing learned behavior. An improvement must be
meaningfully better to justify re-learning.

## Review Report Template

```
## Verdict
<Calibrated verdict> — <one-sentence main reason>
Recommendation: <Ship | Ship with changes | Rethink | Keep current | Test>

## Goal, proposal, constraints
Goal: ...
Proposal: ...
Constraints: ...

## What does not work (ranked)
1. <Specific issue> [evidence level]
   Why it matters for the goal: ...
   Suggested change: ...

## What works (only if earned)
- <Specific decision> — <why, evidence>

## Compared to current
<Table or two sentences>

## Hidden costs
- ...

## Taste notes (optional, labeled)
- ...

## Not verified
- ...

## Next step
<The single most valuable action>
```

### Short form (for quick questions)

> **Worse than current.** The six-box code input breaks paste and screen readers and adds no speed.
> Keep the single input; put the game feel into the background environment instead.
> Not verified: how the boxes behave on Android autofill.

### Worked examples

See `references/_shared/public-service-form.md` (plain beats spectacle) and
`references/_shared/product-page-purchase-path.md` (richness around, not in front of, the purchase).
