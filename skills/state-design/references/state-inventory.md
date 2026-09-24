# State Inventory and Matrix

Load first: enumerate states, then record them in a matrix.

Sections: State Inventory · State Matrix Template

## State Inventory

Start every state design by listing states. The shared taxonomy
(`references/_shared/state-types.md`) is the full catalogue; this file is the working method.

### Step 1 — Walk the categories

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

### Step 2 — Rank by likelihood and harm

Not every state deserves the same effort:

- **Common + harmful** (slow network on mobile; transient errors): design carefully.
- **Common + harmless** (sparse data): design simply but deliberately.
- **Rare + harmful** (payment outcome unknown): design carefully and test.
- **Rare + harmless**: a sensible generic treatment is fine.

### Step 3 — Note explicit skips

Write down states you decided not to design and why ("No offline state: web admin tool on
office networks; generic connection banner covers it"). This prevents accidental gaps from
looking like decisions.

### Common missing states by surface

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

## State Matrix Template

A state matrix makes state coverage explicit and reviewable.

### Format

| State | Trigger | User sees | Meaning for the user | Available actions | Exit | Verified |
|---|---|---|---|---|---|---|
| Loading (initial) | First visit, >300 ms | Skeleton matching list rows | Content is coming | None needed | Data arrives | E1 throttled |
| Empty (never had items) | New account | "No quizzes yet" + Create + template suggestion | Nothing exists yet | Create, use template | First item created | E1 fixture |
| Filtered-empty | Filters exclude all | "No quizzes match 'Grade 7'" + Clear filters | Items exist, filter hides them | Clear filters | Filter change | E3 source |
| Transient error | 503 on list fetch | Inline "Couldn't load. Retrying…" then Retry | Temporary problem | Retry | Success | NOT VERIFIED |
| Stale | Offline >30 s | "Showing data from 2 min ago · Reconnecting" | Data may be old | Refresh | Reconnect | E1 devtools offline |

### Columns

- **State:** name from the shared taxonomy where possible.
- **Trigger:** what causes the state, concretely.
- **User sees:** the actual UI (copy included where important).
- **Meaning for the user:** what they should understand.
- **Available actions:** what they can do, including "nothing, wait" if honest.
- **Exit:** how the state ends.
- **Verified:** evidence level (E1 rendered, E2 measured, E3 source, … or NOT VERIFIED).

### Tips

- One matrix per surface or flow, not one per product.
- Include the skipped states at the bottom with reasons.
- Link each row to the implementing component or test when working in code.
