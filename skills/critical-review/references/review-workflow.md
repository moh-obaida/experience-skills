# Review Workflow

The full procedure: frame, evaluate against the goal, find hidden costs, compare with the current state, decide, and write it up.

Sections: Review Workflow · Comparing to the Current State · Review Report Template

## Review Workflow

### The mandatory sequence

Judgment comes last. Do the steps in order; write each one down, even briefly.

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
