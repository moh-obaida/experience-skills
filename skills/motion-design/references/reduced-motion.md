# Reduced Motion

Some users experience nausea, dizziness, or distraction from motion (vestibular disorders,
migraine, attention conditions). Operating systems expose a reduced-motion preference. Respect it.

## The rule

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

## Implementation

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

## Also consider

- An in-product motion setting for users who want less motion without changing OS settings.
- Never auto-play video backgrounds without controls.
- Test with the preference on, not just by reading the CSS.
