# Waiting Tax (F8)

Time the user spends blocked, watching progress they cannot influence.

## Measure it

- How long is the typical wait? The worst case?
- Is the user blocked, or could they do something else?
- Does leaving the screen lose the work or the result?
- Is progress honest?

## Thresholds (rough)

| Duration | Treatment |
|---|---|
| < 0.1 s | Instant; no indicator |
| 0.1–1 s | Subtle feedback (button state) |
| 1–3 s | Inline progress indicator; keep context |
| 3–10 s | Progress with explanation; allow cancel |
| > 10 s | Consider background work; user may leave |
| Minutes | Background job with status, persistence, notification |

## Repair moves

1. **Make it faster** (the best fix: caching, precomputation, streaming partial results).
2. **Overlap it:** start work early (upload while the user fills the form; generate while they
   review settings).
3. **Background it:** see `background-work.md`.
4. **Stream results:** show partial output as it arrives.
5. **Make waiting useful:** show what will happen next, let the user prepare the next step.

## Honesty

- Do not display fake precision (a percentage when progress is unknown).
- Distinguish "still working" from "stuck" (elapsed time, stage names, heartbeat).
- A failed status check is not a failed job.
