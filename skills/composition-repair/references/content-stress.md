# Content Stress

Layouts are usually designed with ideal content: names of eight characters, three items,
perfect photos. Real content is messier. Stress the layout before trusting it.

## The stress set

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

## How to stress

- If the product has fixtures or seed data, add extreme records.
- In a browser, edit text content directly (devtools) or inject test data.
- For components, render stories or tests with extreme props.

## What to look for

- Overflow and collisions (`scripts/detect-overflow.mjs`, `scripts/detect-collisions.mjs`)
- Truncation hiding essential meaning
- Alignment breaking across rows
- Buttons wrapping to two lines or growing unevenly
- Layout shift when content loads
- Focal point changing (a long title outranking the real P0)

## Repair principles

- Prefer wrapping to truncation for important text.
- Set sensible min and max widths; allow `min-width: 0` on flex children.
- Reserve space for media to avoid layout shift (aspect-ratio boxes).
- Design the one-item and many-item cases explicitly rather than hoping the grid copes.
