<!-- GENERATED FROM examples/full-product/long-running-generation.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: Long-Running AI Generation

**Archetype:** CREATION · **Product types:** AI tools, video rendering, imports, exports, analysis
**Skills:** state-design, workflow-compression

## Context

Generating a quiz from a long document takes 1–3 minutes. The server runs generation as a job.

## The bad version

- A full-screen spinner: "Generating… please don't close this page."
- If the tab closes, the result is lost from the user's view (the job actually finishes server-side,
  but nothing links to it).
- A failed status poll shows "Generation failed" while the job continues.
- Retrying creates a duplicate job.
- On completion, the page swaps to the result with no notification if the user switched tabs.

## Correct analysis

- F8 WAITING TAX: 1–3 minutes blocked.
- Transport vs product confusion: poll failure presented as job failure.
- No reattachment: the job ID is not persisted with the user.
- Duplicate work on retry: no idempotency.
- Dishonest instruction: "don't close this page" when the server would finish anyway.

## The better version

```
[Library]
  ◌ "Cell Biology" — generating · Writing questions (2 of 3) · 1:04     Cancel
  ✓ "World Capitals" — ready · 3 min ago                                Open · Host
Toast on completion (anywhere in the app): "Cell Biology is ready · Open"
```

- On start: "You can leave this page. We'll put it in your Library and let you know."
- Job ID stored with the user; any page can show status; reload reattaches.
- Poll failures: "Connection lost, still checking…" with backoff; never "failed."
- Real failure: cause-specific message, inputs preserved, "Retry" reuses the same job request
  (idempotency key).
- Partial output kept if the failure happens late.
- Completion → next actions: Open, Host now.

## Measurements

```
Before: ~120 s blocking wait · work lost if tab closed · false failures on network blips
After:  0 s blocking wait · reattach from anywhere · transport errors separated from job errors
```

## When this lesson does not apply

If the architecture truly cannot run the work in the background (client-side processing), say
honestly that the tab must stay open, show progress, and save partial results locally.

## Canonical rule

**Time-saving includes waiting architecture.**
