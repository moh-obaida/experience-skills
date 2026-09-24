# Pattern: State Header

## Problem
The current state of a process (who is acting, what phase, what is pending) is scattered or
buried, so users hesitate or act on the wrong thing.

## When useful
- Live and real-time surfaces (game hosting, broadcasts, incident response).
- Multi-step processes where the phase changes available actions.
- Long-running jobs.
- Any surface where "what is happening right now" is the P0 information.

## When NOT useful
- Static pages where nothing changes.
- When a header would duplicate information already dominant on the page.

## Structure
1. One concise, prominent statement of current state ("Round 3 · Team A is answering · 0:12").
2. The actions available in that state placed directly under or beside it.
3. State transitions animate or highlight the header change so it is noticed.
4. Accessible: announced to screen readers when it changes (live region, polite).

## Example
```
┌ ROUND 3 · QUESTION 7 ──────────────────────────┐
│  TEAM A IS ANSWERING               0:12         │
│  [ Correct ]  [ Wrong ]           Skip question │
└─────────────────────────────────────────────────┘
```

## Failure modes
- Header competing with decorative content.
- State announced so aggressively (flashing, sound) that it becomes noise.
