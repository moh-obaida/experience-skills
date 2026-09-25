---
name: motion-design
description: "Use this skill whenever animation, transitions, or micro-interactions are proposed or reviewed (including 'make it more fun or alive with animation'), when every element gets the same fade, slide, or scale, when state changes go unnoticed, when a live or interactive product feels flat, when motion is slow, janky, or ignores reduced-motion, or when defining motion tokens. Designs event-driven motion for arrival, removal, change, transfer, state transitions, feedback, progress, attention, celebration, and ambient motion, with sequencing, interruptibility, reduced-motion alternatives, and performance. Includes static and rendered motion checks."
license: MIT
compatibility: "The optional scanner needs Node.js 18+. No other dependencies."
metadata:
  version: "0.3.0"
  collection: experience-skills
---

# Motion Design

Motion is the strongest attention tool an interface has. Used well, it explains what happened.
Used by default, it becomes a tax users pay on every visit.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/experience-operating-contract.md`; meaningful motion changes require
   rendered or explicitly unverified evidence and a handoff artifact.
3. Keep `references/_shared/motion-events.md` open. Every animation must map to one of its events.

<!-- core-brief:start · GENERATED FROM shared/philosophy/core-brief.md by npm run sync. Do not edit here. -->
**Core rules in brief.** These apply even before you open `references/_shared/experience-core.md`.
Read that file (the full rules and evidence levels) before a full review, repair, or build.

- **Verdict before adjectives.** Do not write "clean," "modern," "great idea," or "looks good" until
  an observation earns it. The user's enthusiasm is not evidence; test the proposal against the goal.
- **Evidence levels on findings.** E1 rendered, E2 measured, E3 source, E4 documented,
  E5 screenshot, E6 assumed. If files, a browser, or a terminal are available, look or measure before
  claiming. Otherwise, name the checks you did not run.
- **Composition is not alignment.** Empty space needs a stated job, and sparseness is never fixed
  with filler (stats, tips, promos, decoration).
- **Personality belongs in the environment, not in standard controls.** A control changes only if
  the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Hand off when another experience skill fits better.** If part of the problem belongs to one
  (composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty
  states, slop, critical review) and it is installed, invoke it rather than improvising its method.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
<!-- core-brief:end -->

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

## Mandatory conditional loading

If motion is proposed, MUST load `references/event-motion.md` and `references/_shared/empty-and-lifecycle-states.md` and map each animation to an event. If it affects layout, duration, or accessibility, MUST load `references/reduced-motion-and-performance.md`. If the surface is runnable, MUST run the rendered motion check or report **NOT VERIFIED IN RENDERED OUTPUT**.

## Checkpoints

1. **For every existing animation:** which event from the motion-events taxonomy does it explain?
   None → remove it (page load, "element exists," and hover on non-interactive content are not events).
   `references/anti-patterns.md` lists the usual suspects.
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
7. **When a browser is available, run `scripts/check-motion-rendered.mjs`**: it lists the animations that actually run, with and without reduced motion. Anything still running under reduced motion is a defect unless it carries essential information another way.
8. **Choose one motion language** from `references/_shared/motion-languages.md` derived from the product's world, and name its tokens before specifying events.

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

## Precedent

Platform guidance and the few observable product behaviors are collected in
`references/_shared/motion-guidelines.md` (Apple HIG and Material transitions, labeled as
documentation). Motion is hard to observe in static research; treat that module as guidance.

## Failure modes

- Animation soup; choreography tax; celebration inflation; unexplained change; no off switch; jank.

## Completion criteria

- Every remaining animation maps to a named event, or is ambient motion with a stated job.
- Meaningful silent changes now have proportionate motion.
- Durations and easings come from tokens.
- Reduced-motion alternatives preserve the information.
- Motion is interruptible and did not add jank (checked, or listed as unverified).
- The event map and motion language are handed off with reduced-motion behavior; runnable motion was
  rendered and checked, or is explicitly marked NOT VERIFIED IN RENDERED OUTPUT.

## References

- `references/event-motion.md` — philosophy, event recipes, spatial continuity
- `references/tokens-sequencing-interruption.md` — tokens, event spec format, interruption
- `references/feedback-celebration-ambient.md` — feedback, celebration, ambient
- `references/reduced-motion-and-performance.md` — accessibility and performance
- `references/anti-patterns.md` — motion slop in practice
- `scripts/check-motion-rendered.mjs` — running animations under normal and reduced motion
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `motion-events.md`,
  `motion-that-explains.md`, `motion-languages.md`, `motion-guidelines.md`
