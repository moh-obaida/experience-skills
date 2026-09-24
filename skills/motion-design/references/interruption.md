# Interruption

Users act faster than animations. Motion must never make them wait or produce broken states
when events overlap.

## Rules

1. **Input is never queued behind animation.** Controls are interactive immediately.
2. **New events can interrupt running ones.** Retarget from the current position rather than
   restarting or jumping.
3. **Rapid repeats collapse.** Ten quick "next" presses should not play ten transitions; skip to
   the latest state.
4. **Cancel cleanly.** If an action is undone mid-animation, reverse from the current state.
5. **Settle guarantees.** Whatever happens, the UI reaches a correct final state.

## Techniques

- CSS transitions naturally retarget from the current value.
- Web Animations API: `animation.cancel()`, `finish()`, `reverse()`, and reading
  `getComputedStyle` for current values.
- Keep the DOM in its final state and animate transforms from the old position (FLIP): the
  logical state is always correct; only the visual catches up.
- Libraries: use their interruption primitives (retargeting springs, layout animations).

## Multiplayer and real-time

Events can arrive faster than they can be animated (many players answering at once). Batch or
summarize: animate the first few, then update the rest instantly with a count ("+12 more").
