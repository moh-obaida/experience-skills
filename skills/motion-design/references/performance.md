# Motion Performance

Smooth motion needs each frame rendered in ~16 ms (60 Hz) or less (higher refresh rates are
stricter). Janky motion is worse than no motion.

## Cheap vs expensive

| Cheap (compositor) | Expensive |
|---|---|
| `transform` (translate, scale, rotate) | `width`, `height`, `top`, `left`, `margin`, `padding` (layout) |
| `opacity` | `box-shadow` animation on many elements, large `filter: blur()`, `backdrop-filter` on large areas (paint/composite heavy) |
| | Animating many elements simultaneously |

## Practices

- Animate transforms; use FLIP for layout changes.
- Avoid `transition: all`: it animates properties you did not intend, including layout ones.
- Use `will-change` sparingly, only on elements about to animate, and remove afterward.
- Batch DOM reads and writes to avoid layout thrash (read all, then write all).
- Pause offscreen and hidden animations.
- Keep the number of simultaneously animating elements small; cap staggers.
- Prefer CSS/WAAPI (compositor-friendly) over per-frame JavaScript style updates.
- Test with CPU throttling and on low-end devices.

## Scanner

`scripts/scan-motion.mjs` flags in CSS/JS/JSX/TSX/Vue/Svelte source:
- transitions/animations on layout properties
- `transition: all`
- durations over 1000 ms outside celebration contexts
- `infinite` animations (check that they pause and respect reduced motion)
- files with animations but no `prefers-reduced-motion` handling anywhere in the scanned set

These are signals. Review each in context.
