# Typography as Geometry

Type is not only content. It occupies space, creates edges, and sets rhythm. Headlines in
particular are shapes.

## Headline shape

- A headline that wraps into a long line and a single orphaned word creates a ragged shape.
  Use balanced wrapping (`text-wrap: balance` where supported) or edit the copy.
- Very large headlines create strong horizontal bands; place them deliberately relative to the
  grid and the viewport edges.
- Center-aligned multi-line headlines produce uneven left edges; they work in short, symmetric
  compositions, less so in content-heavy layouts.

## Measure (line length)

- Comfortable reading measure is roughly 45–80 characters per line for body text.
- On wide screens, full-width paragraphs become unreadable; constrain with `max-width` in `ch`
  units, and use the remaining space intentionally (images, notes, navigation).
- On small screens, a very large base size reduces characters per line below comfortable levels.

## Scale and rhythm

- Choose a type scale with visible steps. Adjacent sizes that differ by 1–2px read as mistakes.
- Line height tightens as size grows: display type often needs ~1.0–1.2; body ~1.4–1.6.
- Vertical spacing between blocks can reference the body line height for rhythm.

## Numbers and data

- Use tabular figures for columns of numbers so digits align.
- Right-align numeric columns (left-align in RTL contexts according to locale conventions).
- Large numbers in cards (KPI style) are strong focal points; make sure they deserve it.

## Wrapping hazards

- Long unbroken strings (URLs, IDs, emails, German compounds) overflow containers. Use
  `overflow-wrap: anywhere` or `word-break` where appropriate, and `min-width: 0` in flex/grid.
- Buttons with long translated labels wrap to two lines or overflow; design for growth.
- Truncation with ellipsis hides meaning; provide the full text via title/tooltip and to
  assistive technology, and prefer wrapping for important names.

## Type and identity

Typography character is one of the strongest identity carriers. See visual-identity if
installed. For composition, the concern is geometry: size, measure, wrap, and rhythm.
