# RTL and Localization

## Right-to-left

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

## Text expansion

Translations change length:

| From English to | Typical change |
|---|---|
| German, Finnish, Russian, French | +20–40% (short strings can double) |
| Arabic | Varies; often similar or shorter, taller glyphs |
| Chinese, Japanese, Korean | Often shorter in characters, needs different line breaking |

Test with a pseudo-localization (accented, expanded strings) or real translations. Look for
truncated buttons, wrapped navigation, overflowing badges, and broken table headers.

## Other locale effects

- Date, time, number, and currency formats differ in length and order.
- Names can be very long, single, or have different ordering.
- Addresses and phone numbers differ in structure.
- Sort order and search normalization differ by language.
