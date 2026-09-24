# RTL, Localization, and Content Stress

Load when the product supports RTL or translations, and before trusting any layout with ideal content.

Sections: RTL and Localization · Content Stress Across Sizes

## RTL and Localization

### Right-to-left

Checks when the product supports Arabic, Hebrew, Persian, or Urdu:

- The root has `dir="rtl"` and `lang` set; user-generated content uses `dir="auto"`.
- Layout mirrors via logical properties (`margin-inline-start`, `inset-inline-end`, `text-align: start`).
- Directional icons (back arrows, chevrons, progress) mirror; non-directional ones do not.
- Mixed-direction strings (brand names, numbers, code) display in the correct order.
- Animations and transitions that imply direction mirror.
- Charts and timelines follow locale conventions.
- Arabic script often needs larger sizes or line height for legibility; check the chosen font's
  Arabic support and metrics.

Quick check: `scripts/layout-report.mjs <url> --rtl` forces `dir="rtl"` on the root to reveal
hard-coded physical positioning. It is an approximation; test real translated content too.

### Text expansion

Translations change length:

| From English to | Typical change |
|---|---|
| German, Finnish, Russian, French | +20–40% (short strings can double) |
| Arabic | Varies; often similar or shorter, taller glyphs |
| Chinese, Japanese, Korean | Often shorter in characters, needs different line breaking |

Test with a pseudo-localization (accented, expanded strings) or real translations. Look for
truncated buttons, wrapped navigation, overflowing badges, and broken table headers.

### Other locale effects

- Date, time, number, and currency formats differ in length and order.
- Names can be very long, single, or have different ordering.
- Addresses and phone numbers differ in structure.
- Sort order and search normalization differ by language.

## Content Stress Across Sizes

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

### Wide content strategy

Some content is inherently wide (data tables, code, diagrams). Do not let it overflow the page:

- Wrap tables in a horizontally scrollable region with a visible affordance (shadow or fade) and
  a keyboard-focusable container with an accessible name.
- Consider responsive table patterns (priority columns, stacked rows) for simple tables.
- Let code blocks scroll horizontally inside their container.
- Make media `max-width: 100%`.

### Detection

`scripts/layout-report.mjs` reports overflow culprits and collisions per size. Inject stress
content, then re-run.
