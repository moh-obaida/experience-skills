# Review Workflow

## 1. Frame

Write three lines before judging:

```
Goal: <what outcome, for whom>
Proposal: <what changes, specifically>
Constraints: <audience, platform, brand, maturity, time, tech>
```

If you cannot write the goal, you cannot evaluate the proposal. Infer it, state the inference, and
continue unless the verdict hinges on it.

## 2. Evaluate against the goal

- Does the proposal achieve the outcome? For the main user? For edge users (new, expert, mobile,
  keyboard, screen reader, other languages)?
- Does it work in real states (empty, dense, error, slow), not just the showcase state?
- Does it introduce new problems?

## 3. Hidden-cost checklist

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

## 4. Compare

Against the current state, against doing nothing, and against the simplest alternative that
achieves the goal. See `comparing-to-current.md`.

## 5. Decide and recommend

Choose a verdict from the vocabulary. Recommend one of:

- **Ship** (as is)
- **Ship with changes** (list the must-fix changes)
- **Rethink** (the goal is right; the approach is not; suggest a direction)
- **Keep current** (the proposal is worse or unnecessary)
- **Test** (genuinely uncertain; propose the cheapest test that would decide)

## 6. Write it

Use `review-report-template.md`. Lead with the verdict and the most important reason.
