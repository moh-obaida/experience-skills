# Long-Running Work

Jobs that take minutes: AI generation, video rendering, imports, exports, analysis, large
uploads, provisioning.

## The waiting architecture decides the experience

| Architecture | Honest UX |
|---|---|
| Work runs in the browser tab | "Keep this tab open"; warn before close; show progress; save partial results locally |
| Work runs on a server, tied to a request | Risky; timeouts produce unknown outcomes. Prefer a job model |
| Server-side job with persisted status | User can leave; status visible elsewhere; notification on completion |
| Queue with workers and events | As above, plus real-time updates and queue position |

Design must match the architecture. If you recommend background work, check (or recommend
changing) the architecture.

## Job lifecycle states

`queued → running (stage n of m) → succeeded | partially succeeded | failed | canceled`

Plus transport overlays: `status unknown (reconnecting)`.

## UI requirements

- **Start:** immediate acknowledgment with the job's name and expected duration if known.
- **Leaving:** explicit statement that leaving is safe (only if it is).
- **Status everywhere relevant:** on the item card, in a jobs list or tray, and via a global
  indicator.
- **Progress:** stages or determinate progress; elapsed time for unknown durations.
- **Partial output:** stream or show partial results when useful.
- **Completion:** notify where the user is now; link to the result; next action.
- **Failure:** explain; preserve inputs; retry without re-entering; avoid duplicate jobs.
- **Cancel:** when meaningful, with a clear statement of what happens to partial results.

## Reattachment

When a user returns (reload, new device, later session), the product should find the job and
show its current status. This requires job IDs persisted with the user or the object.

See `references/_shared/long-running-generation.md` and `references/_shared/background-job.md`.
