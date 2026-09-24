# Worked Example: Motion That Explains

**Archetype:** EXPERIENTIAL, OPERATIONAL, TRANSACTIONAL · **Product types:** games, commerce, tools
**Skills:** motion-design, state-design

## Context

A team strategy-quiz game where correct answers claim cells on a board. The board is shown on a
projector.

## The bad version

- Every card, panel, and button fades up and slides 24 px on page load, staggered.
- When an answer is judged correct, the board cell changes color instantly.
- The leaderboard re-sorts instantly.
- Background blobs float continuously.

## Correct analysis

- Motion is attached to *elements*, not *events*. Loading the page is not an event worth animating.
- The meaningful events (answer resolved, cell claimed, ranking changed) have no motion, so the room
  misses them.
- Ambient blobs compete with the board and ignore reduced motion.

## The better version

Event spec for "answer correct":

```
1. Check mark locks onto the answer (120 ms)
2. Team token travels from the answer panel to the claimed cell (320 ms, curved path)
3. Cell fills with team color as the token lands (160 ms)
4. Adjacent cells owned by the same team pulse once (200 ms) — shows the connected path
5. Leaderboard rows move to their new positions (FLIP, 300 ms)
6. Settle
Reduced motion: check + instant cell color + 600 ms outline; leaderboard reorders with highlight
Interruptible: host pressing Next jumps to the settled state
```

Page load: content simply present. Ambient: one slow, low-contrast motif drift in the lobby only,
paused during play and under reduced motion.

## Universal equivalents

| Product | Event | Motion |
|---|---|---|
| Commerce | Add to cart | Product image travels to the cart; cart count increments |
| File tool | Upload completes | File settles into the collection with a brief highlight |
| Project tool | Task moved to Done | Card travels to the column; column count updates |
| Finance | Transfer confirmed | Amount moves from source to destination; balances count to new values |
| Chat | Message sent | Bubble moves from composer into the thread; delivery mark resolves |

## Canonical rule

**Motion should explain what happened.**
