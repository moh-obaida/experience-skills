<!-- GENERATED FROM shared/design-intelligence/typography.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Typography Intelligence

Typography is the strongest single identity carrier and the most common place for defaults.
This module covers type as geometry, roles, hierarchy, dense and numeric interfaces, multilingual
and RTL typography, and responsive scaling. Precedent IDs refer to the observation log.

## 1. Roles before fonts

| Role | Job | Choose for |
|---|---|---|
| Display | Headlines, hero statements, key numbers, state headers | Character; this is where voice lives |
| UI | Labels, buttons, navigation, tables | Legibility at small sizes, clear numerals |
| Body | Reading | Comfort over long text |
| Data / code | Numbers, IDs, code | Tabular figures, unambiguous glyphs (0/O, 1/l/I) |

Many strong systems use one characterful display face plus one highly legible UI/body face, or a
single family used with discipline (Wikipedia's structure, GitHub's system stack).

**Precedent:** MIT homepage (MIT1–MIT4). Measured computed styles (2026-09-26) show a single family,
Neue Haas Grotesk Text, used for the h1 (600 weight, ~47px), the h2 (400 weight, ~32px), body copy
(400 weight, ~15px), navigation (400 weight, ~15px), and lead paragraphs (500 weight, 26px,
letter-spacing −0.39px) — one neo-grotesk family carries the entire hierarchy through weight and size
alone, with no separate display or data face. Rolex (RX3) shows the same single-family pattern in an
unrelated context — Helvetica Now Text at light weight for nearly all UI text — confirming this is
not a "utilitarian institution" habit but a real option for a prestige brand too. MoMA (MOMA3) shows
a third variation on the same single-family idea: a fully custom, commissioned typeface ("MoMA Sans")
rather than a licensed grotesk, used at maximum weight (900) specifically for the wordmark and
headings — a family can be disciplined (one face for everything) and still be entirely bespoke.
Excalidraw (EXC2, EXC4) shows the other real pattern: a distinctive custom face (Excalifont) reserved
for exactly one tone-setting moment, with every operable control in a plain system-font stack.
**Adapt:** these are legitimate, opposite answers to "roles before fonts" — MIT, Rolex, and MoMA
prove one disciplined family (licensed or custom-commissioned) can carry a whole system through
weight and size; Excalidraw proves a second, characterful face works when it's confined to a single
deliberate moment rather than spread across functional chrome. The failure this precedent rules out
is a third option none of these sites use: several different fonts mixed across roles without a
stated reason.

## 2. Type as geometry

- Headlines are shapes. Balance multi-line headlines (`text-wrap: balance` or manual breaks); avoid
  a single orphaned word.
- Large display type creates horizontal bands that should align with the grid and viewport edges.
- A left-aligned large headline can compose an asymmetric page by itself (Webflow, WF1).
- Two tones inside one paragraph can replace a subhead (Stripe, SR1).

## 3. Hierarchy without shouting

- Use fewer sizes with clearer steps: 4–6 sizes per surface is typical; adjacent steps 1–2 px apart
  read as mistakes.
- Weight and color can carry hierarchy before size does. Dense tools rely on weight and muted
  metadata (GitHub, GH2).
- Reserve uppercase for short labels and state headers ("TEAM A IS ANSWERING"), never for paragraphs.
- Eyebrow labels above every heading are a template habit; use them only within a real system.

## 4. Editorial hierarchy

Headline → deck (standfirst) → body → subheads that tell the story alone → pull quotes → captions.
Measure 45–80 characters; line height 1.4–1.7 for body. Precedent: The Guardian (GU3), Our World in
Data (OW1), Wikipedia (WPd1).

## 5. Dense operational and numeric typography

- Compact UI size (13–15 px) only with strong contrast and generous line height in rows.
- Tabular numerals for columns; right-align numbers (locale-aware).
- Distinguish values from labels by weight, not by size alone.
- Changing numbers (tickers, counters) should not shift layout: fixed-width numerals.
- Precedent: Bloomberg ticker (BL1), GitHub Actions rows (GA1).

## 6. Code and technical typography

- A monospace with clear distinctions (0/O, 1/l) for code, commands, IDs.
- Code blocks scroll horizontally rather than wrap unpredictably; copy buttons for commands.
- Use code styling in titles when the subject is code (MDN, MD4).

## 7. Multilingual typography

- Check script coverage for every language you ship: Latin, Cyrillic, Greek, Arabic, Hebrew, CJK,
  Devanagari, Thai.
- Pair a Latin display face with a matched family for other scripts (for example the Noto families
  cover most scripts with consistent metrics).
- Line height and size may need per-script adjustment: Arabic and Devanagari often need more
  vertical room; CJK needs different line-breaking rules and no letter-spacing.
- Translation expands text 20–40% in many European languages; design components to grow.

## 8. Arabic and Latin together (RTL)

- Choose an Arabic face designed alongside or harmonized with the Latin face (similar weight and
  x-height impression; Naskh for reading, Kufi styles for display).
- Arabic text usually needs a slightly larger size than Latin to read at the same apparent size.
- Do not letter-space Arabic; it breaks joining.
- Numbers: decide between Western Arabic (0–9) and Eastern Arabic numerals by locale; keep numbers
  left-to-right inside RTL text.
- Mixed strings (a Latin product name inside Arabic) need correct bidi handling (`dir="auto"`,
  isolation).
- Mirror layout direction, not letterforms or logos.

## 9. Variable fonts

Use a variable font when it replaces several static files (weights, widths, optical sizes) and the
design uses the range. Subset for the scripts you need. Optical size axes help small UI text.

## 10. Accessible and responsive scaling

- Use relative units so text respects user settings and zoom; test 200% zoom and system large text.
- Fluid display type with `clamp()` must include a `rem` component so zoom still has effect.
- Minimum body size about 16 px on the web; larger for older audiences and kiosks.
- Do not rely on thin weights; they disappear on low-DPI screens and projectors.

**Precedent:** RNIB (RN1–RN4). Measured computed styles (2026-09-26) show a custom accessible face
(Ingra, falling back to Arial) at a 16px body base with 24px line-height (a 1.5× ratio, the
WCAG-cited minimum for body text spacing), 700-weight headings, and — notably — button text set
larger and heavier (20px/600) than body paragraphs (16px), so the most important interactive
elements are the most legible text on the page, not an afterthought sized like everything else. The
same measurement also caught a real counterexample on the same page: one paragraph element computed
to font-weight 100, precisely the thin-weight failure this section already warns against — even a
page built around accessibility can regress on a single overridden style, which is why "test, never
assume" belongs in this direction's own guidance. **Adapt:** RN's button-sizing pattern (larger,
heavier text on the controls that matter most) transfers to any product; the thin-weight regression
is a reminder to spot-check computed styles on real pages rather than trusting a design system's
intent.

## 11. Long-content behavior

- Long names and unbroken strings: `overflow-wrap: anywhere` where appropriate; `min-width: 0` in
  flex/grid.
- Prefer wrapping to truncation for important text; if truncating, expose the full text.
- Test headings with 2× length and translated strings.

## 12. Example pairings by character

A curated subset of font pairings adapted from the UI UX Pro Max project's typography dataset
(MIT; see the third-party notices file), reorganized by character and role instead of by industry.
All are available from Google Fonts at the time of writing; verify licenses (typically SIL OFL) and
script coverage before use.

| Character | Display | Body / UI | Notes |
|---|---|---|---|
| Editorial, classic | Newsreader | Newsreader or a neutral sans | Designed for reading; good for news and essays |
| Editorial, high contrast | Libre Bodoni | Public Sans | Magazine display with a sober UI face |
| Scholarly | Crimson Pro | Atkinson Hyperlegible | Book-like display, highly legible body |
| Swiss / neutral | Inter | Inter | Discipline over character; needs a carrier elsewhere |
| Technical | IBM Plex Sans | IBM Plex Mono | A coherent family with a real mono |
| Developer-native | JetBrains Mono (labels, code) | IBM Plex Sans | Mono only where exactness matters |
| Friendly product | Plus Jakarta Sans | Plus Jakarta Sans | Rounded warmth without childishness |
| Playful | Fredoka | Nunito | Rounded display for games and kids; test legibility |
| Poster / bold | Bebas Neue | Source Sans 3 | Condensed display for statements; body stays calm |
| Accessibility-first | Atkinson Hyperlegible | Atkinson Hyperlegible | Designed for low-vision legibility |
| Sports / energetic | Barlow Condensed | Barlow | Condensed headlines, same-family body |
| Luxury, restrained | Bodoni Moda | Jost | High contrast display; check thin strokes |
| Arabic + Latin | Noto Naskh Arabic | Noto Sans Arabic + Noto Sans | Harmonized metrics across scripts |
| Multilingual CJK | Noto Serif JP / Noto Sans JP | same | Adjust line breaking and spacing |

These are starting points. The product's voice, languages, and rendering environment decide.
Pairings from a lookup table without that reasoning are a template, not a decision.
