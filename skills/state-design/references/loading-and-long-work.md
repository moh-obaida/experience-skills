# Loading, Progress, and Long-Running Work

Load for loading states, progress indicators, and work that takes more than a few seconds.

Sections: Loading and Progress · Long-Running Work

## Loading and Progress

### Initial loading

| Expected time | Treatment |
|---|---|
| < ~300 ms | Render nothing extra; avoid flashing spinners (delay indicators ~200–300 ms) |
| ~0.3–2 s | Skeleton matching the final layout, or keep previous content visible with a subtle indicator |
| > 2 s | Skeleton plus explanation for unusually slow content; progressive rendering |

### Skeletons

Good skeletons:

- Match the final layout closely (same sizes and positions) so content does not jump.
- Appear only when loading is noticeably slow.
- Have restrained motion (or none under reduced motion).
- Are not used for content that does not exist (empty is not loading).

Bad skeletons: generic gray bars that bear no relation to the loaded layout, or skeletons that
persist after an error.

### Layout stability

- Reserve space for images and embeds (aspect-ratio).
- Keep containers the same size across loading and loaded states.
- Insert new content below the reading position, or announce it, rather than pushing content down.

### User-initiated processing

- The control that triggered the action shows the busy state ("Saving…").
- Prevent duplicate submission (disable or ignore repeat) while in flight.
- Keep the rest of the UI usable where safe.

### Progress indicators

| Knowledge | Indicator |
|---|---|
| Known fraction (bytes uploaded, items processed) | Determinate bar with numbers |
| Known stages | Stage list or stepper ("Analyzing → Writing questions → Checking") |
| Unknown | Indeterminate indicator + elapsed time + what is happening |

Never fake precision: a percentage that jumps from 12% to 99% and stalls erodes trust.

### Refreshing and pagination

- Pull-to-refresh or refresh actions show a brief state and keep old content until new content arrives.
- Infinite scroll needs a loading state at the end, an error-with-retry state, and an end-of-list state.
- "Load more" is often better than infinite scroll for task surfaces (footer reachable, position
  predictable).

## Long-Running Work

Jobs that take minutes: AI generation, video rendering, imports, exports, analysis, large
uploads, provisioning.

### The waiting architecture decides the experience

| Architecture | Honest UX |
|---|---|
| Work runs in the browser tab | "Keep this tab open"; warn before close; show progress; save partial results locally |
| Work runs on a server, tied to a request | Risky; timeouts produce unknown outcomes. Prefer a job model |
| Server-side job with persisted status | User can leave; status visible elsewhere; notification on completion |
| Queue with workers and events | As above, plus real-time updates and queue position |

Design must match the architecture. If you recommend background work, check (or recommend
changing) the architecture.

### Job lifecycle states

`queued → running (stage n of m) → succeeded | partially succeeded | failed | canceled`

Plus transport overlays: `status unknown (reconnecting)`.

### UI requirements

- **Start:** immediate acknowledgment with the job's name and expected duration if known.
- **Leaving:** explicit statement that leaving is safe (only if it is).
- **Status everywhere relevant:** on the item card, in a jobs list or tray, and via a global
  indicator.
- **Progress:** stages or determinate progress; elapsed time for unknown durations.
- **Partial output:** stream or show partial results when useful.
- **Completion:** notify where the user is now; link to the result; next action.
- **Failure:** explain; preserve inputs; retry without re-entering; avoid duplicate jobs.
- **Cancel:** when meaningful, with a clear statement of what happens to partial results.

### Reattachment

When a user returns (reload, new device, later session), the product should find the job and
show its current status. This requires job IDs persisted with the user or the object.

See `references/_shared/long-running-generation.md`.
