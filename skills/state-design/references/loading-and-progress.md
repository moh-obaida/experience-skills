# Loading and Progress

## Initial loading

| Expected time | Treatment |
|---|---|
| < ~300 ms | Render nothing extra; avoid flashing spinners (delay indicators ~200–300 ms) |
| ~0.3–2 s | Skeleton matching the final layout, or keep previous content visible with a subtle indicator |
| > 2 s | Skeleton plus explanation for unusually slow content; progressive rendering |

## Skeletons

Good skeletons:

- Match the final layout closely (same sizes and positions) so content does not jump.
- Appear only when loading is noticeably slow.
- Have restrained motion (or none under reduced motion).
- Are not used for content that does not exist (empty is not loading).

Bad skeletons: generic gray bars that bear no relation to the loaded layout, or skeletons that
persist after an error.

## Layout stability

- Reserve space for images and embeds (aspect-ratio).
- Keep containers the same size across loading and loaded states.
- Insert new content below the reading position, or announce it, rather than pushing content down.

## User-initiated processing

- The control that triggered the action shows the busy state ("Saving…").
- Prevent duplicate submission (disable or ignore repeat) while in flight.
- Keep the rest of the UI usable where safe.

## Progress indicators

| Knowledge | Indicator |
|---|---|
| Known fraction (bytes uploaded, items processed) | Determinate bar with numbers |
| Known stages | Stage list or stepper ("Analyzing → Writing questions → Checking") |
| Unknown | Indeterminate indicator + elapsed time + what is happening |

Never fake precision: a percentage that jumps from 12% to 99% and stalls erodes trust.

## Refreshing and pagination

- Pull-to-refresh or refresh actions show a brief state and keep old content until new content arrives.
- Infinite scroll needs a loading state at the end, an error-with-retry state, and an end-of-list state.
- "Load more" is often better than infinite scroll for task surfaces (footer reachable, position
  predictable).
