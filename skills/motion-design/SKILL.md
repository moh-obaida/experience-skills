---
name: motion-design
description: "Design meaningful, event-driven motion systems: arrival, removal, change, transfer of ownership, state transitions, feedback, progress, attention, celebration, hierarchy change, and ambient motion, with sequencing, motion tokens, interruptibility, reduced-motion alternatives, and performance. Use when animation is uniform fade/slide/scale on everything, when state changes happen without users noticing, when a live or interactive product feels flat, when motion is slow or janky, or when defining motion tokens. Includes a static scanner for common motion performance and accessibility problems."
license: MIT
compatibility: "The optional scanner needs Node.js 18+. No other dependencies."
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Motion Design

Motion is the strongest attention tool an interface has. Used well, it explains what
happened: something arrived, moved, changed owner, succeeded, or needs attention. Used by
default, it becomes a tax users pay on every visit.

> Motion should explain what happened.

## Use this when

- Every element fades, slides, or scales in the same way, regardless of meaning.
- Important state changes (a score changes, an item is accepted, a task moves) happen without
  users noticing.
- A live, playful, or interactive product feels flat or lifeless.
- Motion feels slow, blocks input, stutters, or drains battery.
- Reduced-motion preferences are ignored.
- A product needs motion tokens or a motion language.

## Do not use this when

- The real problem is missing states (state-design): motion cannot explain a state that does
  not exist.
- The request is to "add some animation" to a static page with no events. The right answer may
  be very little motion; say so.

## Core principles

1. **Start from events, not elements.** Classify the event (arrival, transfer, resolution...)
   using `references/_shared/motion-events.md`, then decide the motion.
2. **Every motion has a job.** If you cannot say what it explains, remove it.
3. **Continuity.** Things move from where they were to where they go; users keep a spatial model.
4. **Proportion.** Small events get small, fast motion. Celebrations are rare and earned.
5. **Speed.** Most feedback under ~150 ms; most transitions ~200–400 ms; rarely longer.
6. **Never block.** Motion is interruptible; input is never queued behind an animation.
7. **Reduced motion keeps the information.** Replace movement with instant change, cross-fade, or
   highlight; do not simply delete the signal.
8. **Performance is part of design.** Animate transform and opacity; avoid layout-triggering
   properties.

## Workflow

### 1. Inventory events
List the events on the surface or flow: what happens, who causes it (user, system, other
participant), how often, and how important it is. Mark non-events (page load, element exists)
separately.

### 2. Audit existing motion
Find current animations and transitions (code and rendered). For each: which event does it
serve? If none, it is a candidate for removal. The scanner helps with code:

```bash
node scripts/scan-motion.mjs src/
```

It flags layout-property animation, `transition: all`, very long durations, infinite animations,
and missing `prefers-reduced-motion` handling. It reports signals, not verdicts.

### 3. Choose references
| Need | Load |
|---|---|
| The reasoning behind motion; what deserves it | `references/motion-philosophy.md` |
| Mapping events to motion | `references/event-types.md` |
| Durations, easings, distances as tokens | `references/motion-tokens.md` |
| Multi-step events (anticipation → action → consequence → settle) | `references/sequencing.md` |
| Moving between views; transfers | `references/spatial-continuity.md` |
| Button, toggle, input feedback | `references/feedback.md` |
| Success moments, achievements | `references/celebration.md` |
| Background life, idle states | `references/ambient.md` |
| Rapid input, cancellation, overlapping events | `references/interruption.md` |
| Accessibility | `references/reduced-motion.md` |
| Jank, battery, layout thrash | `references/performance.md` |
| Recognizing motion slop | `references/anti-patterns.md` |

### 4. Design the motion
For each event worth motion, specify: trigger, origin, destination, what responds, sequence,
tokens (duration, easing), and the reduced-motion alternative. Use the event spec format in
`references/sequencing.md`.

### 5. Implement
Prefer CSS transitions and the Web Animations API (or platform equivalents: SwiftUI/UIKit
animations, Jetpack Compose, etc.). Use a library only when it earns its weight (complex
choreography, physics, shared layout transitions). Define tokens once.

### 6. Verify
- Watch each event at normal speed and at slowed speed (devtools animation panel).
- Trigger events rapidly and simultaneously; confirm nothing blocks or stacks badly.
- Turn on reduced motion; confirm information is preserved.
- Check performance on a lower-end device or with CPU throttling.

## Execution rules

- Remove motion from non-events before adding motion to events.
- Keep one motion language across the product: shared tokens, consistent directions.
- Direction carries meaning (forward/back, in/out, to/from a destination); keep it consistent
  and mirror it in RTL where it represents reading direction.
- Avoid animating `width`, `height`, `top`, `left`, `margin`, and similar layout properties on
  large or many elements; use transforms.
- Do not auto-play large motion or parallax on utility surfaces.
- Anything that flashes must stay under three flashes per second.

## Failure modes

- **Animation soup:** fade + slide + scale on every card and section.
- **Choreography tax:** 800 ms sequences users must wait through on every action.
- **Celebration inflation:** confetti for saving a setting.
- **Unexplained change:** a leaderboard that reorders instantly, scores that jump silently.
- **Motion without an off switch:** no reduced-motion path.
- **Jank:** layout-property animation, too many simultaneous animations, heavy filters.

## Completion criteria

- Every remaining animation maps to a named event, or is deliberate ambient motion with a stated job.
- Meaningful events that were silent now have proportionate motion.
- Durations and easings come from tokens.
- Reduced-motion alternatives preserve the information.
- Motion is interruptible and did not introduce jank (checked, or listed as unverified).

## References

- `references/motion-philosophy.md`
- `references/event-types.md`
- `references/motion-tokens.md`
- `references/sequencing.md`
- `references/spatial-continuity.md`
- `references/feedback.md`
- `references/celebration.md`
- `references/ambient.md`
- `references/interruption.md`
- `references/reduced-motion.md`
- `references/performance.md`
- `references/anti-patterns.md`
- `references/_shared/` — shared taxonomy, pattern, and worked example (`motion-that-explains.md`)
