# Errors and Recovery

## Error taxonomy

| Type | Example | User can… | Design |
|---|---|---|---|
| Validation (user-fixable) | Missing field, invalid date | Fix input | Inline, specific, input preserved |
| Permission | No access to project | Request access, switch account | Explain; offer request action |
| Conflict | Edited by someone else | Review and merge | Show both versions or the change |
| Not found / gone | Deleted item, expired invite | Go somewhere useful | Explain; next action |
| Limit | Quota, file too large, rate limit | Reduce, upgrade, wait | State the limit and the options |
| Transient | Timeout, 503, network blip | Wait (auto-retry) | "Retrying…"; manual retry after failures |
| Offline | No connectivity | Continue offline or wait | Banner; queue actions if supported |
| Partial | 28 of 30 succeeded | Handle the rest | Precise counts; act on failures |
| Terminal / system | Bug, data corruption | Contact support, try alternative | Honest message; reference ID; preserve work |
| Unknown outcome | Timeout after submit | Nothing yet | "Confirming…"; reconcile |

## Message anatomy

1. **What happened**, plainly: "We couldn't save your changes."
2. **Why**, if known and useful: "The file is larger than 25 MB."
3. **What to do**: "Compress the file or upload a smaller one." with the action button.

Add a reference ID for terminal errors so support can find logs.

## Placement

- Field-level errors next to fields.
- Object-level errors on the object (the failed upload row).
- Page-level for failures that block the page.
- Global banner for connectivity and system status.
- Toasts only for transient information, never for errors requiring action.

## Recovery design

- Preserve inputs and progress across every error.
- Offer the most likely recovery as a button (Retry, Resume, Request access, Reduce selection).
- For partial failures, let users act on just the failures ("Retry 2 failed").
- Make retry safe (idempotent).
- After recovery, return users to where they were.

## Tone

Calm, specific, non-blaming. Avoid jokes in serious errors; avoid technical jargon unless the
audience is technical (and then be precise).

See `references/_shared/honest-error-states.md` for a worked example.
