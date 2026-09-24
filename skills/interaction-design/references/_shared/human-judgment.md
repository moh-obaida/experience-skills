<!-- GENERATED FROM shared/philosophy/human-judgment.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Human Judgment

Software should automate mechanics and preserve judgment.

**Mechanics** are steps whose result is determined by information the system already has or
could compute: counting, formatting, carrying values forward, tracking state, retrying,
persisting, sorting, deduplicating, choosing the only valid option.

**Judgment** is where the human's decision is the value: selecting the correct answer in a
game the host is judging, approving an expense, choosing which photo to publish, deciding a
price, accepting risk.

## The failure modes on each side

**Under-automation** makes users do mechanics:

- Typing a value the system displayed on the previous screen
- Choosing from a list with one valid option
- Manually tracking scores, counts, or progress the system could track
- Re-entering the same configuration each session

**Over-automation** takes judgment away:

- Auto-approving on a heuristic when the approval is the control
- Auto-publishing, auto-sending, or auto-deleting without a meaningful chance to review
- Picking a "best" design, answer, or candidate when choosing is the user's creative act
- Silently "fixing" input the user meant

## Questions to ask before automating a step

1. Is the answer fully determined by known data? Automate it, and show what was chosen.
2. Is the answer usually the same? Default it, and make it easy to change.
3. Is the answer a matter of taste, risk, or accountability? Keep it human.
4. Would a wrong automatic answer be expensive or embarrassing? Keep it human, or require
   review of the automated proposal.
5. Does the user need to *feel* they made the decision (games, creative work, approvals)?
   Keep it human, even if a machine could guess.

## Showing automated decisions

Automation should be legible:

- Display the inferred value where the question would have been ("Language: English, from the
  source file · Change").
- Let users override without undoing the whole flow.
- Log consequential automated decisions somewhere reviewable.

## For agents specifically

The same principle applies to the agent's own work. Automate the mechanical parts of a design
task (measuring, checking overflow, listing states). Preserve the user's authority over
product decisions: identity, what the product is, what trade-offs are acceptable. Recommend
strongly; do not silently decide what the product should be.
