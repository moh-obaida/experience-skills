# Content Stress Across Sizes

Width alone rarely breaks a layout; width plus real content does. At the smallest and largest
matrix sizes, stress content:

| Stress | Try |
|---|---|
| Long strings | 60–80 character names, long URLs, long emails, unbroken tokens |
| Long translations | +40% labels on buttons, tabs, and nav |
| Big numbers | 10+ digit numbers, long currency amounts |
| Many items | Long lists, many tags, many columns |
| Few items | One card in a grid, one row in a table |
| Missing media | No image, broken image, portrait in landscape slot |
| Wide content | Tables, code blocks, embeds, charts |

## Wide content strategy

Some content is inherently wide (data tables, code, diagrams). Do not let it overflow the page:

- Wrap tables in a horizontally scrollable region with a visible affordance (shadow or fade) and
  a keyboard-focusable container with an accessible name.
- Consider responsive table patterns (priority columns, stacked rows) for simple tables.
- Let code blocks scroll horizontally inside their container.
- Make media `max-width: 100%`.

## Detection

`scripts/layout-report.mjs` reports overflow culprits and collisions per size. Inject stress
content, then re-run.
