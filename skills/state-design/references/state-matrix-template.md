# State Matrix Template

A state matrix makes state coverage explicit and reviewable.

## Format

| State | Trigger | User sees | Meaning for the user | Available actions | Exit | Verified |
|---|---|---|---|---|---|---|
| Loading (initial) | First visit, >300 ms | Skeleton matching list rows | Content is coming | None needed | Data arrives | E1 throttled |
| Empty (never had items) | New account | "No quizzes yet" + Create + template suggestion | Nothing exists yet | Create, use template | First item created | E1 fixture |
| Filtered-empty | Filters exclude all | "No quizzes match 'Grade 7'" + Clear filters | Items exist, filter hides them | Clear filters | Filter change | E3 source |
| Transient error | 503 on list fetch | Inline "Couldn't load. Retrying…" then Retry | Temporary problem | Retry | Success | NOT VERIFIED |
| Stale | Offline >30 s | "Showing data from 2 min ago · Reconnecting" | Data may be old | Refresh | Reconnect | E1 devtools offline |

## Columns

- **State:** name from the shared taxonomy where possible.
- **Trigger:** what causes the state, concretely.
- **User sees:** the actual UI (copy included where important).
- **Meaning for the user:** what they should understand.
- **Available actions:** what they can do, including "nothing, wait" if honest.
- **Exit:** how the state ends.
- **Verified:** evidence level (E1 rendered, E2 measured, E3 source, … or NOT VERIFIED).

## Tips

- One matrix per surface or flow, not one per product.
- Include the skipped states at the bottom with reasons.
- Link each row to the implementing component or test when working in code.
