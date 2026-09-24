# Tokens, Sequencing, and Interruption

Load when specifying or implementing motion: durations, easings, beats, and what happens when users act mid-animation.

Sections: Motion Tokens · Sequencing · Interruption

## Motion Tokens

Tokens make motion consistent, tunable, and reviewable. Define them once; use names in code.

### Duration tokens (starting point)

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

### Easing tokens

| Token | Curve (CSS) | Use |
|---|---|---|
| `ease-out` (enter) | `cubic-bezier(0.2, 0, 0, 1)` | Elements entering or responding; decelerate into place |
| `ease-in` (exit) | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving; accelerate away |
| `ease-in-out` (move) | `cubic-bezier(0.4, 0, 0.2, 1)` | Elements moving between two on-screen positions |
| `spring-soft` | Spring or overshoot curve | Playful products, resolution moments; use sparingly |
| `linear` | `linear` | Progress bars, continuous rotation, opacity cross-fades |

Avoid bouncy springs in serious contexts (money, health, destructive actions).

### Distance tokens

- `shift-sm` 4–8 px (feedback nudges)
- `shift-md` 12–16 px (arrivals)
- `shift-lg` 24–48 px (panel entrances)

Large slide distances on every element make pages feel seasick.

### Stagger

- `stagger-sm` 20–40 ms between siblings, capped (for example at 6 items, then all at once).
- Stagger only when the order of arrival means something; never stagger long lists.

### Example (CSS custom properties)

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
motion carried information (see `references/reduced-motion-and-performance.md`).

## Sequencing

Meaningful events often have several beats. Sequencing makes cause and effect readable.

### The four beats

1. **Anticipation** (optional, 0–100 ms): a small preparatory movement that signals something is
   about to happen. Use for large or surprising changes; skip for routine ones.
2. **Action:** the main change (movement, transformation, appearance).
3. **Consequence:** what responds to the action (destination updates, counts change, related
   items react).
4. **Settle:** everything reaches a stable, readable resting state. No lingering motion.

### Overlap

Beats should overlap slightly; strictly serial sequences feel slow. A consequence can start as the
action lands (last 20–30% of the action).

### Total time budget

- Routine events: whole sequence ≤ 300 ms.
- Important events: ≤ 600 ms.
- Rare highlights: ≤ 1200 ms, and skippable.

If a sequence needs longer, the event is probably being over-explained.

### Event spec format

```
Event: Answer judged correct (host presses Correct)
Actor: host · Frequency: ~20 per game · Importance: high
Origin: answer panel · Destination: board cell B4
Sequence:
  1. Answer text locks in with check mark (120 ms, ease-out)
  2. Team token travels from panel to B4 on a curved path (320 ms, ease-move), starts at 80 ms
  3. B4 fills with team color (160 ms, ease-out), starts as token lands
  4. Connected cells pulse once (200 ms), starts with step 3
  5. Settle: board static; state header advances to next question
Total: ~520 ms
Interruptible: yes; if host presses Next during sequence, jump to settled state
Reduced motion: check mark + B4 color change instantly; B4 outline highlight 600 ms; no travel
Performance: transform/opacity only; token is a single absolutely positioned element
```

Write specs like this for every important event; they double as review and test documentation.

## Interruption

Users act faster than animations. Motion must never make them wait or produce broken states
when events overlap.

### Rules

1. **Input is never queued behind animation.** Controls are interactive immediately.
2. **New events can interrupt running ones.** Retarget from the current position rather than
   restarting or jumping.
3. **Rapid repeats collapse.** Ten quick "next" presses should not play ten transitions; skip to
   the latest state.
4. **Cancel cleanly.** If an action is undone mid-animation, reverse from the current state.
5. **Settle guarantees.** Whatever happens, the UI reaches a correct final state.

### Techniques

- CSS transitions naturally retarget from the current value.
- Web Animations API: `animation.cancel()`, `finish()`, `reverse()`, and reading
  `getComputedStyle` for current values.
- Keep the DOM in its final state and animate transforms from the old position (FLIP): the
  logical state is always correct; only the visual catches up.
- Libraries: use their interruption primitives (retargeting springs, layout animations).

### Multiplayer and real-time

Events can arrive faster than they can be animated (many players answering at once). Batch or
summarize: animate the first few, then update the rest instantly with a count ("+12 more").
