# Typography Character

Typography is often the strongest single identity carrier, and the one most often left at
framework defaults.

## Roles

| Role | Purpose | Character budget |
|---|---|---|
| Display | Headlines, hero, key numbers, state headers | High: this is where character lives |
| UI | Labels, buttons, navigation | Low–medium: legibility first |
| Body | Reading | Low: comfort first |
| Data / mono | Numbers, code, IDs | Functional: tabular figures, clear glyphs |

Many strong identities use one characterful display face with one highly legible UI/body face.

## Choosing character

- **Derive from the world:** a condensed sports face for a game show; a humanist serif for an
  editorial product; a precise grotesk or mono for a developer tool; rounded forms for young
  children's products.
- **Consider languages:** does the face support the scripts you need (Arabic, Cyrillic, CJK)? Is
  there a well-matched companion for other scripts?
- **Consider rendering:** thin weights disappear on low-DPI screens and projectors.
- **Consider licensing and performance:** web font weight, subsetting, `font-display`.

## Using type for character, even with a neutral face

Character comes from *usage* as much as typeface:

- Scale contrast (very large display vs compact UI)
- Weight contrast
- Case (uppercase for short state headers, never for paragraphs)
- Tracking (tight for large display, slightly open for small caps)
- Numerals (tabular for data, oldstyle for editorial)
- Consistent placement of headings relative to the grid

## Anti-patterns

- A single neutral sans at 14/16/20px with no display role
- Gradient text as the only expression of character
- Tiny uppercase gray eyebrow labels above every heading
- Novelty fonts in UI roles
- Different display faces on different pages
