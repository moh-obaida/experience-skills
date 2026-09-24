# Motion Tokens

Tokens make motion consistent, tunable, and reviewable. Define them once; use names in code.

## Duration tokens (starting point)

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0–50 ms | State flips that should feel immediate |
| `motion-fast` | 100–150 ms | Feedback, hover, press, small fades |
| `motion-base` | 200–250 ms | Most transitions, arrivals, removals |
| `motion-slow` | 300–400 ms | Transfers, shared-element transitions, larger distances |
| `motion-deliberate` | 500–700 ms | Rare emphasis moments |
| `motion-celebration` | 800–1500 ms | Celebrations only; skippable |

Scale duration with distance and size: small elements moving short distances are faster.
On mobile, slightly shorter often feels better; on large screens, travel distances are longer.

## Easing tokens

| Token | Curve (CSS) | Use |
|---|---|---|
| `ease-out` (enter) | `cubic-bezier(0.2, 0, 0, 1)` | Elements entering or responding; decelerate into place |
| `ease-in` (exit) | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving; accelerate away |
| `ease-in-out` (move) | `cubic-bezier(0.4, 0, 0.2, 1)` | Elements moving between two on-screen positions |
| `spring-soft` | Spring or overshoot curve | Playful products, resolution moments; use sparingly |
| `linear` | `linear` | Progress bars, continuous rotation, opacity cross-fades |

Avoid bouncy springs in serious contexts (money, health, destructive actions).

## Distance tokens

- `shift-sm` 4–8 px (feedback nudges)
- `shift-md` 12–16 px (arrivals)
- `shift-lg` 24–48 px (panel entrances)

Large slide distances on every element make pages feel seasick.

## Stagger

- `stagger-sm` 20–40 ms between siblings, capped (for example at 6 items, then all at once).
- Stagger only when the order of arrival means something; never stagger long lists.

## Example (CSS custom properties)

```css
:root {
  --motion-fast: 120ms;
  --motion-base: 220ms;
  --motion-slow: 360ms;
  --ease-out: cubic-bezier(0.2, 0, 0, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-move: cubic-bezier(0.4, 0, 0.2, 1);
}
@media (prefers-reduced-motion: reduce) {
  :root { --motion-fast: 0ms; --motion-base: 0ms; --motion-slow: 0ms; }
}
```

Zeroing durations is a blunt reduced-motion tool; pair it with explicit alternatives where the
motion carried information (see `reduced-motion.md`).
