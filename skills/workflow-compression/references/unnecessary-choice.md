# Unnecessary Choice (F2)

A decision point where only one meaningful answer exists. Each still costs reading, thinking,
and a click, and teaches users that the product does not understand their situation.

## Typical sources

- A picker whose options are filtered down to one by permissions, plan, or data.
- A "choose workspace" step for a user with one workspace.
- Language, size, or format choices determined by the source content.
- "Continue" interstitials with no alternative but to continue.
- A choice among options where one is overwhelmingly chosen and the others are rarely valid.

## Repair ladder

1. **Remove the step** when the answer is fully determined. Show the result in a summary line.
2. **Default and skip** when the answer is almost always the same; let users change it later
   or from the summary.
3. **Collapse into context** by turning the choice into a small inline control on the next screen.
4. **Keep, but explain** only if the choice is real and consequential.

## Design details

- When auto-selecting, name the reason when it is not obvious ("Only English is available for
  this source").
- If other options are unavailable for a fixable reason (plan, permission), mention it where the
  user would look for it, not as a blocking screen.
- Keep deep links and back navigation coherent after removing a step.

## Rule

> If there is only one meaningful option, do not ask a question.

## Worked example

See `references/_shared/skip-known-decisions.md`.
