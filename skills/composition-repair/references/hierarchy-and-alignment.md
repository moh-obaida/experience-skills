# Hierarchy, Alignment, and Type Geometry

Load when there is no focal point, the wrong focal point, flat hierarchy, or a centered-but-not-composed layout.

Sections: Hierarchy · Alignment vs Composition · Typography as Geometry

## Hierarchy

Hierarchy is the order in which the eye moves through a surface. It should match the order
of importance.

### The emphasis budget

Every surface has a limited amount of emphasis to spend. Tools, from strongest to weakest:

1. **Size** (especially type size)
2. **Position** (top-left in LTR, top-right in RTL, center of a composed region, first in reading order)
3. **Contrast** (value difference against surroundings)
4. **Weight** (bold, heavy strokes)
5. **Color** (saturation and hue distinct from the rest)
6. **Space** (isolation around an element)
7. **Motion** (the strongest attention tool of all; use sparingly)
8. **Containers** (boxes, cards, backgrounds)

Spend emphasis on P0. If P0 needs every tool at once to stand out, the rest of the surface is
too loud; turn it down instead of turning P0 up.

### Diagnosing hierarchy

- **Squint test.** Blur your vision (or apply a heavy blur to a screenshot). What stands out?
  Is it P0?
- **Grayscale test.** Remove color. Is the order still readable? If hierarchy depends on color
  alone, it is fragile and inaccessible.
- **Type census.** List distinct font sizes on the surface. More than 5–6 on one screen usually
  means undisciplined scale. Fewer than 3 usually means flat hierarchy.
- **Scale ratio.** The ratio between the largest and body type. Operational UIs often work
  between ~1.5× and 2.5×; editorial and marketing surfaces often use 3× or more.
  `scripts/measure-layout.mjs` reports the ratio and the largest text elements.

### Common hierarchy failures

| Failure | Looks like | Repair |
|---|---|---|
| Wrong focal point | Logo or greeting larger than the task | Demote identity to the frame; promote the task |
| Flat | Everything the same size and weight | Rebuild the scale; fewer, more distinct sizes |
| Competing P0s | Two or three bold, colored calls to action | Choose one primary; demote the rest to secondary style |
| Metadata shouting | Dates, tags, counts as loud as titles | Reduce size, contrast, or weight of metadata |
| Headings without content | Big section titles over tiny sparse content | Scale headings to their content; merge sections |
| Container hierarchy | Importance expressed only by boxes | Use type and space first |

### Hierarchy across a flow

Consistency matters: if the primary action is a solid button bottom-right on one step and a
text link top-left on the next, users re-learn every screen. Keep the position and style of
primary actions stable through a flow.

### Accessibility

- Visual hierarchy should match heading structure (h1 → h2 → h3) and DOM order.
- Do not use size alone for interactive state; pair with other cues.
- Ensure contrast for secondary text still meets requirements (de-emphasis is not invisibility).

## Alignment vs Composition

Alignment puts things on shared lines. Composition decides where the important thing goes,
how big it is, and how everything else relates to it and to the edges of the space.

A page can be perfectly aligned and not composed at all.

### Centered-column syndrome

The most common failure: logo, heading, card, button stacked in a centered column, with the
rest of the viewport blank.

Why it happens: centering is the easiest layout to write and it never looks "wrong" in code.

Why it fails:

- The focal point is "the middle," not a chosen element.
- Content has no relationship to the viewport edges; it floats.
- On large screens, most of the space is dead.
- Identity depends on a small logo.

Centering is fine when the composition around it is designed (a strong backdrop, a framed
stage, type at scale). Centering *by default* is the problem.

### Composition tools

1. **Scale.** Let the focal element be large enough to anchor the space.
2. **Offset and asymmetry.** Place the task region on a grid line other than the center, with
   the environment or supporting content occupying the other side.
3. **Edges.** Anchor elements to viewport edges (full-bleed imagery, edge-aligned headings,
   side panels) to make the layout feel built for the space.
4. **Tension and balance.** Balance a large, light element against a small, dense one.
5. **Layering.** Foreground task region over a meaningful background layer.
6. **Grid.** A visible or implied column structure that multiple elements share.

### Stronger alternatives to the lonely centered card

| Situation | Instead of centering alone |
|---|---|
| Sign-in / join | Task panel on a composed environment (split with product imagery, or full-bleed pattern with a framed panel) |
| Empty operational home | Left-aligned content column with real recent items and next actions, filling the width meaningfully |
| Single form | Form aligned to a content grid with a helpful side column (what happens next, help) on wide screens |
| Error / 404 | Composed message with a clear route onward; environment consistent with the product |

### Alignment still matters

Composition does not excuse sloppy alignment:

- Shared left edges (or right edges in RTL) across sections
- Baselines aligned in rows of mixed type sizes
- Icons optically centered with text
- Numbers right-aligned or tabular in tables

### Quick test

Cover the center of the screen with your hand. Does anything else on the page do work? If
the edges and corners are empty and meaningless, the page is aligned, not composed.

## Typography as Geometry

Type is not only content. It occupies space, creates edges, and sets rhythm. Headlines in
particular are shapes.

### Headline shape

- A headline that wraps into a long line and a single orphaned word creates a ragged shape.
  Use balanced wrapping (`text-wrap: balance` where supported) or edit the copy.
- Very large headlines create strong horizontal bands; place them deliberately relative to the
  grid and the viewport edges.
- Center-aligned multi-line headlines produce uneven left edges; they work in short, symmetric
  compositions, less so in content-heavy layouts.

### Measure (line length)

- Comfortable reading measure is roughly 45–80 characters per line for body text.
- On wide screens, full-width paragraphs become unreadable; constrain with `max-width` in `ch`
  units, and use the remaining space intentionally (images, notes, navigation).
- On small screens, a very large base size reduces characters per line below comfortable levels.

### Scale and rhythm

- Choose a type scale with visible steps. Adjacent sizes that differ by 1–2px read as mistakes.
- Line height tightens as size grows: display type often needs ~1.0–1.2; body ~1.4–1.6.
- Vertical spacing between blocks can reference the body line height for rhythm.

### Numbers and data

- Use tabular figures for columns of numbers so digits align.
- Right-align numeric columns (left-align in RTL contexts according to locale conventions).
- Large numbers in cards (KPI style) are strong focal points; make sure they deserve it.

### Wrapping hazards

- Long unbroken strings (URLs, IDs, emails, German compounds) overflow containers. Use
  `overflow-wrap: anywhere` or `word-break` where appropriate, and `min-width: 0` in flex/grid.
- Buttons with long translated labels wrap to two lines or overflow; design for growth.
- Truncation with ellipsis hides meaning; provide the full text via title/tooltip and to
  assistive technology, and prefer wrapping for important names.

### Type and identity

Typography character is one of the strongest identity carriers. See visual-identity if
installed. For composition, the concern is geometry: size, measure, wrap, and rhythm.
