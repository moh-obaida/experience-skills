# State Inventory

Start every state design by listing states. The shared taxonomy
(`references/_shared/state-types.md`) is the full catalogue; this file is the working method.

## Step 1 — Walk the categories

For the surface in question, go through each category and write down which states apply:

| Category | Questions |
|---|---|
| Data | Can it be empty? Sparse? Dense? Filtered-empty? Search-empty? Stale? Contain extreme content? |
| Activity | Does anything load? Process? Run for a long time? Run in the background? Pause? Complete? |
| Failure | What can fail? Can the user fix it? Is it transient? Terminal? Can the device go offline? |
| Authority | Does the UI ever show results before confirmation? Can local and server disagree? Are there drafts or saved-not-complete states? |
| Presence | First visit vs returning? One participant vs many? Owner vs viewer? Signed in vs out? |
| Permission | Can users lack access? Can features be unavailable (plan, region, time)? |
| Environment | Small screen? Keyboard-only? Screen reader? Reduced motion? RTL? Slow network? |

## Step 2 — Rank by likelihood and harm

Not every state deserves the same effort:

- **Common + harmful** (slow network on mobile; transient errors): design carefully.
- **Common + harmless** (sparse data): design simply but deliberately.
- **Rare + harmful** (payment outcome unknown): design carefully and test.
- **Rare + harmless**: a sensible generic treatment is fine.

## Step 3 — Note explicit skips

Write down states you decided not to design and why ("No offline state: web admin tool on
office networks; generic connection banner covers it"). This prevents accidental gaps from
looking like decisions.

## Common missing states by surface

| Surface | Often missing |
|---|---|
| Lists and libraries | Filtered-empty, one item, 1,000 items, stale |
| Forms | Server validation error, timeout on submit, saved draft, duplicate submission |
| Uploads | Partial, paused, network drop, too large, unsupported type, processing after upload |
| Dashboards | Stale data, partial data source failure, no data for the period |
| Real-time | Reconnecting, missed events, other participant disconnected, host left |
| Jobs / AI generation | Queued, long wait, partial output, failed after partial output, user left and returned |
| Payments | Pending, requires additional authentication, outcome unknown, refunded |
| Auth | Session expired mid-task, permission revoked, invite expired |
