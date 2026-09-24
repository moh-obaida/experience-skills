# Content Stress and RTL

Load before declaring a layout done: real content and right-to-left languages break more layouts than widths do.

Sections: Content Stress · RTL Composition

## Content Stress

Layouts are usually designed with ideal content: names of eight characters, three items,
perfect photos. Real content is messier. Stress the layout before trusting it.

### The stress set

Try each on the surface you are repairing:

| Stress | Examples |
|---|---|
| Very long text | 80-character names; long unbroken URLs; German compounds; long email addresses |
| Very short text | One-letter names; empty titles; a single word where a sentence was expected |
| Missing content | No avatar, no image, no description, null values |
| Many items | 200 rows; 50 tags on one item; 30 participants |
| One item | A grid of one; a leaderboard of one |
| Zero items | See empty-state-design |
| Large numbers | 1,234,567,890; negative values; many decimal places; currency with long symbols |
| Mixed scripts | Latin with Arabic or Hebrew; CJK characters; emoji |
| Translation growth | Labels 30–40% longer (German, Finnish, Russian); shorter (Chinese) |
| User-generated media | Portrait photos in landscape slots; tiny images; transparent PNGs |
| Dynamic states | Loading placeholder sizes vs loaded sizes (layout shift) |

### How to stress

- If the product has fixtures or seed data, add extreme records.
- In a browser, edit text content directly (devtools) or inject test data.
- For components, render stories or tests with extreme props.

### What to look for

- Overflow and collisions (`scripts/detect-overflow.mjs`, `scripts/detect-collisions.mjs`)
- Truncation hiding essential meaning
- Alignment breaking across rows
- Buttons wrapping to two lines or growing unevenly
- Layout shift when content loads
- Focal point changing (a long title outranking the real P0)

### Repair principles

- Prefer wrapping to truncation for important text.
- Set sensible min and max widths; allow `min-width: 0` on flex children.
- Reserve space for media to avoid layout shift (aspect-ratio boxes).
- Design the one-item and many-item cases explicitly rather than hoping the grid copes.

## RTL Composition

Right-to-left languages (Arabic, Hebrew, Persian, Urdu) mirror the reading direction and much
of the layout. Composition should mirror intentionally, not accidentally.

### What mirrors

- Reading order and text alignment
- Navigation order, back/forward direction
- Position of primary and secondary content in splits (the "start" side)
- Directional icons (arrows, chevrons, "reply", progress direction)
- Progress bars and steppers
- Carousel and swipe direction

### What does not mirror

- Media playback controls (play is not reversed)
- Clocks, charts with time axes in many contexts (follow locale conventions)
- Logos and brand marks
- Numbers (digits remain left-to-right even in RTL text)
- Icons that depict real objects without direction (a camera)

### Implementation habits that make RTL work

- Use logical properties: `margin-inline-start`, `padding-inline-end`, `inset-inline-start`,
  `text-align: start`.
- Use flex/grid (which follow `dir`) instead of absolute left/right positioning.
- Avoid hard-coded `left`/`right` in transforms and animations; derive direction from `dir`.
- Set `dir` on the root and on user-generated content that may differ (`dir="auto"`).

### Composition checks in RTL

- Does the focal point still land where the eye starts (top-right)?
- Are asymmetric compositions mirrored so the task region is on the start side?
- Do decorative environment elements that imply direction (motion trails, arrows) mirror?
- Do mixed-direction strings (an English product name in Arabic text) render in the right order?
- Does text in Arabic script, which often needs more line height and different sizes, fit?

### Measuring

Render with `dir="rtl"` and a real RTL locale if the product has one. As a quick approximation,
forcing `dir="rtl"` on the root exposes hard-coded physical positioning (the layout-report
script in responsive-validation has an `--rtl` flag). A forced flip is not a substitute for
real translated content.
