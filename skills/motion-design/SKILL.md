---
name: motion-design
description: "Design meaningful, event-driven motion systems: arrival, removal, change, transfer of ownership, state transitions, feedback, progress, attention, celebration, hierarchy change, and ambient motion, with sequencing, motion tokens, interruptibility, reduced-motion alternatives, and performance. Use when animation is uniform fade/slide/scale on everything, when state changes happen without users noticing, when a live or interactive product feels flat, when motion is slow or janky, or when defining motion tokens. Includes a static scanner for common motion performance and accessibility problems."
license: MIT
compatibility: "The optional scanner needs Node.js 18+. No other dependencies."
metadata:
  version: "0.1.1"
  collection: experience-skills
---

# Motion Design

Motion is the strongest attention tool an interface has. Used well, it explains what happened.
Used by default, it becomes a tax users pay on every visit.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Keep `references/_shared/motion-events.md` open. Every animation must map to one of its events.

## Use this when

- Everything fades, slides, or scales in the same way regardless of meaning.
- Important changes (a score, an accepted answer, a moved task) happen without users noticing.
- A live, playful, or interactive product feels flat.
- Motion is slow, blocks input, stutters, or ignores reduced-motion settings.
- A product needs motion tokens or a motion language.

## Do not use this when

- The real problem is missing states → state-design first.
- The request is "add some animation" to a static page with no events. The right answer may be
  very little motion; say so.

## Checkpoints

1. **For every existing animation:** which event from the motion-events taxonomy does it explain?
   None → remove it (page load, "element exists," and hover on non-interactive content are not events).
   `references/_shared/motion-cliches.md` lists the usual suspects.
2. **For every meaningful state change with no motion:** would users miss it (someone else's action,
   a reorder, a transfer)? Yes → give it event motion (`references/event-motion.md`; anchor
   `references/_shared/motion-that-explains.md`).
3. **For every motion you add:** how often does it play? Many times per session → under ~150 ms
   and subtle. Longer than ~400 ms → it must be a rare moment and skippable.
4. **Does any motion delay input?** Yes → make it interruptible (`references/tokens-sequencing-interruption.md`).
5. **Does every meaningful motion have a reduced-motion alternative that keeps the information?**
   No → add it before finishing (`references/reduced-motion-and-performance.md`).
6. **Does anything animate layout properties** (`width`, `height`, `top`, `left`, `margin`) or use
   `transition: all`? Yes → switch to transform/opacity or FLIP. Run `scripts/scan-motion.mjs`.

## Workflow

1. **Inventory events** on the surface: what happens, who causes it, how often, how important.
2. **Audit existing motion** in the rendered product and in code:
   ```bash
   node scripts/scan-motion.mjs src/
   ```
   Signals, not verdicts: layout-property animation, `transition: all`, long or infinite
   animations, missing `prefers-reduced-motion`.
3. **Apply checkpoints 1–3** to decide what stays, goes, and gets added.
4. **Specify** each important event with the event spec format in
   `references/tokens-sequencing-interruption.md` (trigger, origin, destination, responders, beats,
   tokens, reduced-motion alternative).
5. **Load depth as needed:**

   | Need | Load |
   |---|---|
   | What deserves motion; recipes per event; spatial continuity | `references/event-motion.md` |
   | Durations, easings, beats, interruption | `references/tokens-sequencing-interruption.md` |
   | Control feedback, celebrations, ambient motion | `references/feedback-celebration-ambient.md` |
   | Reduced motion and performance | `references/reduced-motion-and-performance.md` |
   | Recognizing motion slop in practice | `references/anti-patterns.md` |

6. **Implement** with CSS transitions / Web Animations API or platform equivalents; a library only
   when it earns its weight. Tokens defined once.
7. **Verify:** normal and slowed speed; rapid and simultaneous triggers; reduced motion on;
   CPU throttling.

## Execution rules

- Remove motion from non-events before adding motion to events.
- One motion language: shared tokens, consistent directions (mirrored in RTL where directional).
- No large auto-playing motion or parallax on utility surfaces.
- Nothing flashes more than three times per second.

## Failure modes

- Animation soup; choreography tax; celebration inflation; unexplained change; no off switch; jank.

## Completion criteria

- Every remaining animation maps to a named event, or is ambient motion with a stated job.
- Meaningful silent changes now have proportionate motion.
- Durations and easings come from tokens.
- Reduced-motion alternatives preserve the information.
- Motion is interruptible and did not add jank (checked, or listed as unverified).

## References

- `references/event-motion.md` — philosophy, event recipes, spatial continuity
- `references/tokens-sequencing-interruption.md` — tokens, event spec format, interruption
- `references/feedback-celebration-ambient.md` — feedback, celebration, ambient
- `references/reduced-motion-and-performance.md` — accessibility and performance
- `references/anti-patterns.md` — motion slop in practice
- `references/_shared/` — generated copies: `experience-core.md`, `motion-events.md`,
  `motion-cliches.md`, `motion-that-explains.md`
