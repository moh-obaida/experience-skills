# Ambient Motion

Ambient motion runs without a triggering event: slow background movement, breathing lights,
idle animations. It can signal that a system is alive (a lobby waiting for players, a live
broadcast) or give an environment atmosphere.

## When it is justified

- Waiting states where liveness matters (lobbies, live streams, "listening" states)
- Experiential surfaces where atmosphere is part of the value (games, immersive stories)
- Very subtle environment texture on marketing pages

## When it is not

- Operational, data-heavy, reading, and form surfaces
- Anywhere users need to concentrate
- Behind text

## Rules

- Low amplitude, slow speed (cycles of many seconds), low contrast.
- Pause when offscreen or when the tab is hidden (`IntersectionObserver`, `visibilitychange`).
- Disable under `prefers-reduced-motion`.
- Any auto-playing motion lasting more than five seconds alongside other content needs a way to
  pause it (WCAG 2.2.2), unless essential.
- Watch battery and CPU: prefer CSS transforms on few layers; avoid continuous canvas redraws for
  decoration.
