# Pattern: Contextual Controls

## Problem
Controls ask the user to restate context the product already knows: which item, which
participant, which account. This doubles the number of controls and invites mistakes.

## When useful
- The system knows the current subject (selected item, active participant, current record).
- Controls repeat per subject ("Approve A", "Approve B", "Approve C").
- Live-control surfaces where speed and accuracy matter.

## When NOT useful
- The user genuinely needs to act on a subject other than the current one; then provide an
  explicit, secondary way to pick.
- The context is ambiguous or not visible; first make the context visible.

## Structure
1. Display the current context prominently (a state header).
2. Offer actions that apply to that context without restating it.
3. Update actions automatically when context changes.
4. Provide a clear way to change the context if needed.

## Example
Before:
```
[Correct Team A] [Wrong Team A] [Correct Team B] [Wrong Team B]
```
After:
```
TEAM A IS ANSWERING
[ Correct ]  [ Wrong ]
```

## Failure modes
- The context header is small or ambiguous, so users are unsure what the action applies to.
- Context changes during a pending action (race); lock or confirm the target.
