# Optimistic vs Authoritative State

Optimistic UI shows the expected result immediately, before the source of truth confirms. It
makes products feel fast. It becomes a lie when failures are not reconciled.

## When optimism is appropriate

- High success probability (liking, starring, renaming, moving, checking a box)
- Low harm if it briefly shows a wrong state
- The server can reject and the UI can visibly roll back

## When optimism is wrong

- Money movement and purchases
- Irreversible actions
- Competitive or server-authoritative games (scores, correctness, turn order)
- Anything where users may act on the result immediately (sending a confirmation to someone else)

In these cases, show a pending state and wait for the authority.

## Honest optimism

1. Show the expected result with a subtle pending indicator when latency is noticeable.
2. On confirmation, remove the indicator (no extra success noise needed).
3. On rejection, roll back visibly and explain ("Couldn't rename: a quiz with that name exists").
4. On unknown outcome, keep a pending state and reconcile; do not silently keep the optimistic value.
5. Keep local drafts until the server confirms, so nothing is lost on failure.

## Server-authoritative experiences

Games, auctions, bookings, and collaborative editing often have one source of truth:

- The client may predict (for responsiveness) but must present authoritative outcomes as final.
- Visual "resolution" moments (answer correct, item sold) should fire on authoritative confirmation,
  not on local prediction.
- If the client and server disagree, the server wins, and the UI transitions visibly rather than
  snapping silently.

## Saved-but-not-complete

Drafts, partial applications, and paused setups are a distinct authority state: persisted, but
not finished. Show them as such ("Draft · not published"), and never present them as complete.
