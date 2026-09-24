# Transport State vs Product State

The most important separation in state design.

- **Transport state** describes communication: did this request succeed, fail, time out, or never
  get sent?
- **Product state** describes reality: is the job running, did the payment happen, was the answer
  accepted, does the file exist?

Transport failures often tell you *nothing* about product state.

## Examples of confusion

| Transport event | Wrong UI | What might actually be true | Honest UI |
|---|---|---|---|
| Status poll returns 502 | "Generation failed" | Job still running | "Connection issue, still checking…" (auto-retry) |
| Submit request times out | "Payment failed, try again" | Payment succeeded | "We're confirming your payment. Don't pay again." then reconcile |
| WebSocket disconnects | Scores freeze silently | Game continues on the server | "Reconnecting…" banner; resync on reconnect |
| Save returns 409 conflict | "Error saving" | Someone else changed it | "This was changed by Sam. Review changes" |
| Upload request fails at 90% | "Upload failed" | Server may have partial data | "Upload interrupted. Resume" (if resumable) |

## Design rules

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

## Implementation checklist

- Client state machine distinguishes `idle | sending | confirmed | failed | unknown`.
- Status endpoints exist for long operations and can be queried after reload.
- Errors from the server carry a machine-readable cause so the UI can distinguish product failures.
- Network errors are caught separately from HTTP error responses.
- Logs record both transport and product outcomes for debugging.
