# RTL Composition

Right-to-left languages (Arabic, Hebrew, Persian, Urdu) mirror the reading direction and much
of the layout. Composition should mirror intentionally, not accidentally.

## What mirrors

- Reading order and text alignment
- Navigation order, back/forward direction
- Position of primary and secondary content in splits (the "start" side)
- Directional icons (arrows, chevrons, "reply", progress direction)
- Progress bars and steppers
- Carousel and swipe direction

## What does not mirror

- Media playback controls (play is not reversed)
- Clocks, charts with time axes in many contexts (follow locale conventions)
- Logos and brand marks
- Numbers (digits remain left-to-right even in RTL text)
- Icons that depict real objects without direction (a camera)

## Implementation habits that make RTL work

- Use logical properties: `margin-inline-start`, `padding-inline-end`, `inset-inline-start`,
  `text-align: start`.
- Use flex/grid (which follow `dir`) instead of absolute left/right positioning.
- Avoid hard-coded `left`/`right` in transforms and animations; derive direction from `dir`.
- Set `dir` on the root and on user-generated content that may differ (`dir="auto"`).

## Composition checks in RTL

- Does the focal point still land where the eye starts (top-right)?
- Are asymmetric compositions mirrored so the task region is on the start side?
- Do decorative environment elements that imply direction (motion trails, arrows) mirror?
- Do mixed-direction strings (an English product name in Arabic text) render in the right order?
- Does text in Arabic script, which often needs more line height and different sizes, fit?

## Measuring

Render with `dir="rtl"` and a real RTL locale if the product has one. As a quick approximation,
forcing `dir="rtl"` on the root exposes hard-coded physical positioning (the layout-report
script in responsive-validation has an `--rtl` flag). A forced flip is not a substitute for
real translated content.
