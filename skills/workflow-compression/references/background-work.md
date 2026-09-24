# Background Work

Long operations (generation, import, export, rendering, analysis, large uploads) should not
hold the user hostage.

## Requirements for honest background work

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

## UI shape

```
[Library]
  ◌ Generating "Unit 5 quiz"      Writing questions · 1:12 elapsed     View · Cancel
  ✓ "World capitals" ready        2 min ago                            Open
```

On the originating screen: "You can leave this page. We'll put the result in Library."

## Architecture notes for implementers

- Server-side jobs with a durable queue and stored status, or at minimum a worker with
  persisted state.
- Client: poll with backoff or subscribe; treat network errors as transient; resume on reload by
  job ID.
- Keep results addressable (URL) so notifications can link to them.

## Worked example

See the state-design skill and its worked example on long-running generation if installed.
