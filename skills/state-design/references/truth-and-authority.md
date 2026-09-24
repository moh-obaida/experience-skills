# Truth and Authority: Transport vs Product, Optimistic vs Authoritative

Load whenever a server, job, payment, or other participant is involved.

Sections: Transport State vs Product State · Optimistic vs Authoritative State

## Transport State vs Product State

The most important separation in state design.

- **Transport state** describes communication: did this request succeed, fail, time out, or never
  get sent?
- **Product state** describes reality: is the job running, did the payment happen, was the answer
  accepted, does the file exist?

Transport failures often tell you *nothing* about product state.

### Examples of confusion

| Transport event | Wrong UI | What might actually be true | Honest UI |
|---|---|---|---|
| Status poll returns 502 | "Generation failed" | Job still running | "Connection issue, still checking…" (auto-retry) |
| Submit request times out | "Payment failed, try again" | Payment succeeded | "We're confirming your payment. Don't pay again." then reconcile |
| WebSocket disconnects | Scores freeze silently | Game continues on the server | "Reconnecting…" banner; resync on reconnect |
| Save returns 409 conflict | "Error saving" | Someone else changed it | "This was changed by Sam. Review changes" |
| Upload request fails at 90% | "Upload failed" | Server may have partial data | "Upload interrupted. Resume" (if resumable) |

### Design rules

1. **Model three outcomes, not two:** succeeded, failed, **unknown**. Unknown is common and must
   have its own UI.
2. **Reconcile unknown outcomes** by querying the source of truth (job status, payment status,
   message list) before telling users to retry.
3. **Retry transport automatically** with backoff for idempotent requests; tell the user only if
   it persists.
4. **Use idempotency keys** so that retrying a submit cannot double-charge or duplicate.
5. **Separate the copy:** "Can't reach the server" (transport) vs "The export failed because the
   file is too large" (product).
6. **Separate the visual treatment:** connection issues as a global or local banner; product
   failures at the object that failed.

### Implementation checklist

- Client state machine distinguishes `idle | sending | confirmed | failed | unknown`.
- Status endpoints exist for long operations and can be queried after reload.
- Errors from the server carry a machine-readable cause so the UI can distinguish product failures.
- Network errors are caught separately from HTTP error responses.
- Logs record both transport and product outcomes for debugging.

## Optimistic vs Authoritative State

Optimistic UI shows the expected result immediately, before the source of truth confirms. It
makes products feel fast. It becomes a lie when failures are not reconciled.

### When optimism is appropriate

- High success probability (liking, starring, renaming, moving, checking a box)
- Low harm if it briefly shows a wrong state
- The server can reject and the UI can visibly roll back

### When optimism is wrong

- Money movement and purchases
- Irreversible actions
- Competitive or server-authoritative games (scores, correctness, turn order)
- Anything where users may act on the result immediately (sending a confirmation to someone else)

In these cases, show a pending state and wait for the authority.

### Honest optimism

1. Show the expected result with a subtle pending indicator when latency is noticeable.
2. On confirmation, remove the indicator (no extra success noise needed).
3. On rejection, roll back visibly and explain ("Couldn't rename: a quiz with that name exists").
4. On unknown outcome, keep a pending state and reconcile; do not silently keep the optimistic value.
5. Keep local drafts until the server confirms, so nothing is lost on failure.

### Server-authoritative experiences

Games, auctions, bookings, and collaborative editing often have one source of truth:

- The client may predict (for responsiveness) but must present authoritative outcomes as final.
- Visual "resolution" moments (answer correct, item sold) should fire on authoritative confirmation,
  not on local prediction.
- If the client and server disagree, the server wins, and the UI transitions visibly rather than
  snapping silently.

### Saved-but-not-complete

Drafts, partial applications, and paused setups are a distinct authority state: persisted, but
not finished. Show them as such ("Draft · not published"), and never present them as complete.
