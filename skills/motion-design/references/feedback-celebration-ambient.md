# Feedback, Celebration, and Ambient Motion

Load for control feedback, success moments, and motion without a triggering event.

Sections: Feedback Motion · Celebration · Ambient Motion

## Feedback Motion

Feedback motion confirms that input was received. It must be immediate and short.

### Recipes

| Control | Feedback |
|---|---|
| Button press | Pressed state within one frame (color/shade; optional 1–2 px translate or 0.98 scale) |
| Toggle | Knob travels (100–150 ms); track color changes |
| Checkbox | Check draws or appears (100 ms) |
| Text input | Focus ring appears instantly; no animated labels that obscure content |
| Drag | Item lifts (shadow/scale), follows pointer without lag, drop target highlights |
| Async button | Label changes to progress state; spinner inside the button; success check briefly |
| Error | Field highlights; optional single short shake only in playful contexts, never repeated |

### Rules

- Feedback must be faster than the user's next action. If it isn't, it's in the way.
- Feedback should not move surrounding layout.
- Haptics (mobile) can pair with feedback for important confirmations; keep them subtle and
  optional.
- Sound is a separate channel: off by default except in games and media, and always controllable.

## Celebration

Celebration marks real achievement: finishing a course, winning a game, a first sale, a
milestone. It is the most expressive motion a product has, and the easiest to cheapen.

### Proportion ladder

| Achievement | Celebration |
|---|---|
| Routine success (saved, sent) | None beyond feedback |
| Meaningful step (lesson complete, level up) | Small moment: check, color, short flourish |
| Major achievement (course done, game won, first launch) | Full moment: characters, confetti-like effects, sound (if product uses sound) |
| Rare milestone (streak of 100) | Special, unique treatment |

### Designing the moment

- Tie it to the product's world (motifs, characters, team colors), not generic confetti.
- Keep it skippable and short; the next action should be available immediately.
- Pair it with meaning: what was achieved, what it unlocks, what to do next (replay, results,
  share).
- In multiplayer contexts, celebrate winners without humiliating others; show everyone's result.

### Pitfalls

- Confetti for trivial actions (inflation)
- Celebrations that block the next action for seconds
- Celebrations in serious contexts (finance transfers, medical results)
- Flashing effects (keep under 3 flashes per second; avoid large bright flashes)
- No reduced-motion alternative (use a static celebratory state instead)

## Ambient Motion

Ambient motion runs without a triggering event: slow background movement, breathing lights,
idle animations. It can signal that a system is alive (a lobby waiting for players, a live
broadcast) or give an environment atmosphere.

### When it is justified

- Waiting states where liveness matters (lobbies, live streams, "listening" states)
- Experiential surfaces where atmosphere is part of the value (games, immersive stories)
- Very subtle environment texture on marketing pages

### When it is not

- Operational, data-heavy, reading, and form surfaces
- Anywhere users need to concentrate
- Behind text

### Rules

- Low amplitude, slow speed (cycles of many seconds), low contrast.
- Pause when offscreen or when the tab is hidden (`IntersectionObserver`, `visibilitychange`).
- Disable under `prefers-reduced-motion`.
- Any auto-playing motion lasting more than five seconds alongside other content needs a way to
  pause it (WCAG 2.2.2), unless essential.
- Watch battery and CPU: prefer CSS transforms on few layers; avoid continuous canvas redraws for
  decoration.
