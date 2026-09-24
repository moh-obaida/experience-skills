# Review Workflow

The full procedure: frame, evaluate against the goal, find hidden costs, compare with the current state, decide, and write it up.

Sections: Review Workflow · Comparing to the Current State · Review Report Template

## Review Workflow

### 1. Frame

Write three lines before judging:

```
Goal: <what outcome, for whom>
Proposal: <what changes, specifically>
Constraints: <audience, platform, brand, maturity, time, tech>
```

If you cannot write the goal, you cannot evaluate the proposal. Infer it, state the inference, and
continue unless the verdict hinges on it.

### 2. Evaluate against the goal

- Does the proposal achieve the outcome? For the main user? For edge users (new, expert, mobile,
  keyboard, screen reader, other languages)?
- Does it work in real states (empty, dense, error, slow), not just the showcase state?
- Does it introduce new problems?

### 3. Hidden-cost checklist

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
| Identity | Does it make the product more or less recognizable? More generic? |
| Opportunity | What else could this effort have improved? |

### 4. Compare

Against the current state, against doing nothing, and against the simplest alternative that
achieves the goal. See the “Comparing to the Current State” section.

### 5. Decide and recommend

Choose a verdict from the vocabulary. Recommend one of:

- **Ship** (as is)
- **Ship with changes** (list the must-fix changes)
- **Rethink** (the goal is right; the approach is not; suggest a direction)
- **Keep current** (the proposal is worse or unnecessary)
- **Test** (genuinely uncertain; propose the cheapest test that would decide)

### 6. Write it

Use the “Review Report Template” section. Lead with the verdict and the most important reason.

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
