# Reduced Motion and Performance

Load before finishing any motion work.

Sections: Reduced Motion · Motion Performance

## Reduced Motion

Some users experience nausea, dizziness, or distraction from motion (vestibular disorders,
migraine, attention conditions). Operating systems expose a reduced-motion preference. Respect it.

### The rule

Reduced motion means **reduce movement, keep information.**

| Full motion | Reduced-motion alternative |
|---|---|
| Transfer travel | Destination highlights; origin changes state |
| Shared-element expansion | Cross-fade |
| Slide-in panels | Fade or instant appearance |
| Parallax, scroll-linked motion | None |
| Ambient background motion | Static |
| Count-up numbers | Final number instantly, brief highlight |
| Celebration burst | Static celebratory state |
| Progress bars | Keep (progress is information), without decorative motion |
| Spinners | Keep a simple indicator; slower or static alternative text is fine |

Cross-fades and color changes are generally acceptable under reduced motion; large movement,
scaling, parallax, and spinning are not.

### Implementation

```css
@media (prefers-reduced-motion: reduce) {
  .token-travel { display: none; }
  .cell.won { animation: none; outline: 3px solid var(--team-color); }
}
```

```js
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
function playResolution(cell) {
  if (reduce.matches) return cell.classList.add('won');
  // full sequence…
}
```

Native platforms have equivalents (iOS `UIAccessibility.isReduceMotionEnabled` / SwiftUI
`accessibilityReduceMotion`; Android animator duration scale).

### Also consider

- An in-product motion setting for users who want less motion without changing OS settings.
- Never auto-play video backgrounds without controls.
- Test with the preference on, not just by reading the CSS.

## Motion Performance

Smooth motion needs each frame rendered in ~16 ms (60 Hz) or less (higher refresh rates are
stricter). Janky motion is worse than no motion.

### Cheap vs expensive

| Cheap (compositor) | Expensive |
|---|---|
| `transform` (translate, scale, rotate) | `width`, `height`, `top`, `left`, `margin`, `padding` (layout) |
| `opacity` | `box-shadow` animation on many elements, large `filter: blur()`, `backdrop-filter` on large areas (paint/composite heavy) |
| | Animating many elements simultaneously |

### Practices

- Animate transforms; use FLIP for layout changes.
- Avoid `transition: all`: it animates properties you did not intend, including layout ones.
- Use `will-change` sparingly, only on elements about to animate, and remove afterward.
- Batch DOM reads and writes to avoid layout thrash (read all, then write all).
- Pause offscreen and hidden animations.
- Keep the number of simultaneously animating elements small; cap staggers.
- Prefer CSS/WAAPI (compositor-friendly) over per-frame JavaScript style updates.
- Test with CPU throttling and on low-end devices.

### Scanner

`scripts/scan-motion.mjs` flags in CSS/JS/JSX/TSX/Vue/Svelte source:
- transitions/animations on layout properties
- `transition: all`
- durations over 1000 ms outside celebration contexts
- `infinite` animations (check that they pause and respect reduced motion)
- files with animations but no `prefers-reduced-motion` handling anywhere in the scanned set

These are signals. Review each in context.
