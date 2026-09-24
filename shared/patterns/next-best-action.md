# Pattern: Next Best Action

## Problem
After an outcome, the product offers nothing to do next, or a generic "Back to home."
The user must work out the continuation themselves.

## When useful
- After creation (use the thing you made), completion (review results, replay), upload
  (work with the file), setup (start), purchase (track), error recovery (retry or alternative).

## When NOT useful
- When the "next action" is really a business upsell unrelated to the user's goal.
- When the user's session is naturally over (a completed payment receipt needs a receipt, not
  three suggestions).

## Structure
1. Identify the most likely continuation from the user's goal, not from the product's metrics.
2. Offer one primary next action and at most one or two secondary ones.
3. Carry context forward (the created item is preselected in the next step).

## Examples
| Outcome | Next best action |
|---|---|
| Created a quiz | Host it now · Edit questions |
| Game finished | Play again with same settings · View results |
| File uploaded | Open · Share · Upload more |
| Setup complete | Start first project (preconfigured) |
| Report generated | Download · Schedule this report |

## Failure modes
- Too many suggestions (a dead end with extra steps).
- Suggestions that ignore what the user just did.
