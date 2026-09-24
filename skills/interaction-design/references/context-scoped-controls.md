# Context-Scoped Controls

When the system knows the subject of an action, controls should apply to that subject without
the user naming it again.

## The pattern

```
Before (restated scope):
[Correct Team A] [Wrong Team A] [Correct Team B] [Wrong Team B]

After (scoped to context):
TEAM A IS ANSWERING
[ Correct ]  [ Wrong ]
```

Benefits:

- Half the controls (or fewer)
- No chance of pressing "Correct Team B" while Team A is answering
- Faster under time pressure
- The state header makes the context unmistakable

## Universal analogues

| Context known | Scoped control |
|---|---|
| Selected file | "Share" acts on the selected file |
| Active conversation | "Mute" applies to it |
| Current record page | "Approve," not "Approve record #1182" |
| Active participant | "Admit," "Remove" apply to the speaker |
| Current order | "Refund," with amount prefilled |
| Focused cell | Formatting actions apply to it |

## Requirements

1. **Make the context visible and prominent** (state header, selected highlight).
2. **Keep actions stable in position** as context changes; only their target changes.
3. **Handle race conditions:** if context changes while an action is in flight, apply it to the
   subject that was shown when the user acted, or block and explain.
4. **Offer an explicit override** when users sometimes need to act on another subject (a secondary
   menu), without cluttering the main path.
5. **Announce context changes** to screen readers (polite live region).

## Worked example

See `references/_shared/context-aware-judgment.md` and the contextual-controls and state-header
patterns in `references/_shared/`.
