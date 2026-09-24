# Waiting and Endings

Load for F8 waiting tax (including background work architecture) and F9 dead ends.

Sections: Waiting Tax (F8) · Background Work · Next Action (F9)

## Waiting Tax (F8)

Time the user spends blocked, watching progress they cannot influence.

### Measure it

- How long is the typical wait? The worst case?
- Is the user blocked, or could they do something else?
- Does leaving the screen lose the work or the result?
- Is progress honest?

### Thresholds (rough)

| Duration | Treatment |
|---|---|
| < 0.1 s | Instant; no indicator |
| 0.1–1 s | Subtle feedback (button state) |
| 1–3 s | Inline progress indicator; keep context |
| 3–10 s | Progress with explanation; allow cancel |
| > 10 s | Consider background work; user may leave |
| Minutes | Background job with status, persistence, notification |

### Repair moves

1. **Make it faster** (the best fix: caching, precomputation, streaming partial results).
2. **Overlap it:** start work early (upload while the user fills the form; generate while they
   review settings).
3. **Background it:** see the “Background Work” section.
4. **Stream results:** show partial output as it arrives.
5. **Make waiting useful:** show what will happen next, let the user prepare the next step.

### Honesty

- Do not display fake precision (a percentage when progress is unknown).
- Distinguish "still working" from "stuck" (elapsed time, stage names, heartbeat).
- A failed status check is not a failed job.

## Background Work

Long operations (generation, import, export, rendering, analysis, large uploads) should not
hold the user hostage.

### Requirements for honest background work

1. **Real persistence:** the job continues if the user navigates away or closes the tab. If the
   architecture cannot do this, do not pretend; tell the user to keep the page open and explain why.
2. **Job identity:** each job has an ID and a place where its status is visible (a jobs list,
   the item's own card, a status indicator).
3. **Status model:** queued → running (with stage) → succeeded / failed / partially succeeded /
   canceled.
4. **Transport separation:** polling or socket failures are shown as connection issues with
   retry, never as job failure.
5. **Completion signal:** notify where the user is (toast, badge, notification), linking directly
   to the result.
6. **Recovery:** on failure, preserve inputs and offer retry; explain the cause if known.
7. **Idempotency:** retries must not create duplicate jobs or charges.

### UI shape

```
[Library]
  ◌ Generating "Unit 5 quiz"      Writing questions · 1:12 elapsed     View · Cancel
  ✓ "World capitals" ready        2 min ago                            Open
```

On the originating screen: "You can leave this page. We'll put the result in Library."

### Architecture notes for implementers

- Server-side jobs with a durable queue and stored status, or at minimum a worker with
  persisted state.
- Client: poll with backoff or subscribe; treat network errors as transient; resume on reload by
  job ID.
- Keep results addressable (URL) so notifications can link to them.

### Worked example

See the state-design skill and its worked example on long-running generation if installed.

## Next Action (F9)

After an outcome, surface the likely continuation. A success screen with only "Back to home"
is a dead end.

### Find the continuation

Ask: *why did the user do this?* The next action serves that reason.

| Outcome | Why | Next action |
|---|---|---|
| Created a quiz | To use it with a class | Host now · Assign |
| Finished a game | Play again, or see how people did | Play again (same settings) · Results |
| Uploaded files | Work with them | Open · Share · Upload more |
| Completed setup | Start using the product | Start first project (preconfigured) |
| Paid an invoice | Keep records | Download receipt |
| Fixed an error | Resume the interrupted task | Return to where they were |
| Published | Share it | Copy link · View live |
| CLI command succeeded | Run the logical next command | Print the exact next command |

### Rules

- One primary next action; one or two secondary; no more.
- Carry context: the created object is already selected in the next step.
- Do not use the continuation slot for unrelated upsells.
- Respect endings: some sessions are complete; offer closure (receipt, summary) instead of
  more tasks.

### For CLIs

Print the next command verbatim so it can be copied, e.g.:

```
✓ Project created in ./my-app
Next: cd my-app && npm run dev
```
