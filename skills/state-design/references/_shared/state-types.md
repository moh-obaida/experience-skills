<!-- GENERATED FROM shared/taxonomies/state-types.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# State Types

A product is a set of states, not a single screenshot. Use this inventory to find the states
a surface must handle.

## Data states

| State | Definition | Common failure |
|---|---|---|
| EMPTY | Zero items, and none have ever existed | Blank page or filler |
| FIRST-USE | New user; nothing configured | Tutorial overload or no orientation |
| SPARSE | One to a few items | Layout designed for many looks broken |
| NORMAL | Typical volume | Usually the only state designed |
| DENSE | Many items; long lists | No virtualization, no scanning aids |
| EXTREME CONTENT | Very long names, huge numbers, missing images, emoji, RTL | Overflow and broken wrapping |
| FILTERED-EMPTY | Items exist but the filter hides all | Looks like EMPTY; confuses users |
| SEARCH-EMPTY | Query returns nothing | Dead end without suggestions |
| STALE | Displayed data may be out of date | Shown as current |
| ARCHIVED / DELETED | Items removed or hidden | Vanish without trace or undo |

## Activity states

| State | Definition | Common failure |
|---|---|---|
| IDLE / READY | Waiting for user action | Unclear what to do next |
| LOADING | Fetching initial data | Spinner with layout jump |
| PROCESSING | User-initiated operation in progress | Double submission; no feedback |
| LONG-RUNNING | Work that takes minutes or more | User forced to wait on the screen |
| BACKGROUND | Work continues while the user does other things | No indication it is happening |
| PAUSED | Suspended by user or system | Indistinguishable from failed |
| PARTIAL | Some items succeeded, some failed | Reported as full success or full failure |
| SUCCESS | Operation complete | Dead end |
| COMPLETED | A whole process is over (game ended, course finished) | No next action |

## Failure states

| State | Definition | Common failure |
|---|---|---|
| USER-FIXABLE ERROR | Invalid input, missing permission the user can request | Generic message; input lost |
| TRANSIENT ERROR | Network blip, timeout, rate limit | Shown as permanent failure |
| RETRYING | System retrying automatically | User not told; retries manually and duplicates |
| TERMINAL ERROR | Cannot succeed without intervention | "Try again" loop that never works |
| OFFLINE | No connectivity | Actions silently dropped |
| RECONNECTING | Connection being restored | Stale data shown as live |
| PERMISSION DENIED | Access not allowed | Feature appears broken instead of restricted |
| UNAVAILABLE | Feature or item not available (region, plan, time) | Hidden with no explanation |

## Authority states

| State | Definition |
|---|---|
| OPTIMISTIC | UI shows the expected result before the authoritative source confirms |
| PENDING CONFIRMATION | Sent; awaiting authoritative response |
| AUTHORITATIVE | Confirmed by the source of truth |
| CONFLICTED | Local and authoritative state disagree |
| SAVED-NOT-COMPLETE | Progress persisted but the process is not finished (draft, partial application) |

## Presence and context states

- FIRST VISIT vs RETURNING
- SIGNED OUT vs SIGNED IN
- ONE PARTICIPANT vs MANY
- OWNER vs VIEWER vs EDITOR
- DISABLED (with a reason) vs HIDDEN

## Environment states

- Small, large, short, and wide viewports
- Touch vs pointer vs keyboard-only vs screen reader
- Zoom and large text
- Reduced motion
- RTL and long translations
- Slow network, low-end device

## Transport vs product state

Keep two layers separate:

- **Transport state:** did a request succeed? (timeout, 500, offline)
- **Product state:** what is actually true? (job still running, order placed, answer accepted)

A failed status poll does not mean the job failed. A timeout on submit does not mean the
payment did not happen. Designs must never collapse these into one message.
