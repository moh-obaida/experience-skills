# Failure Patterns

A field guide to broken compositions. Each pattern: what it looks like, why it happens,
and the repair direction.

## 1. The Lonely Card
Logo, heading, small card, button in the middle of a blank viewport.
- **Why:** centering is the default; nothing else was designed.
- **Repair:** compose the environment and scale the task region; see `references/hierarchy-and-alignment.md`.
- **Worked example:** `references/_shared/join-code-page.md`.

## 2. The Welcome Void
Operational home with "Welcome back!" and three big buttons, 70% empty.
- **Why:** no real state was surfaced.
- **Repair:** show recent and in-progress items and next actions; see `references/viewport-and-space.md`.
- **Worked example:** `references/_shared/sparse-operational-home.md`.

## 3. Container Soup
Cards inside cards inside panels; every group boxed.
- **Why:** containers used for grouping instead of spacing.
- **Repair:** remove inner containers; use spacing and type for grouping.

## 4. The Card-ified Article
Prose broken into cards, callouts, and icon bullets.
- **Why:** a UI-component reflex applied to editorial content.
- **Repair:** restore editorial hierarchy; see `references/_shared/editorial-not-cards.md`.

## 5. The Stretched Single Item
One card spanning a full row because the grid auto-fits.
- **Why:** `auto-fit` + `1fr` with sparse data.
- **Repair:** max item width, `auto-fill`, or a different sparse layout.

## 6. Hero Tyranny
A `100vh` hero pushes the task below the fold on every visit.
- **Why:** a marketing pattern applied to a task surface.
- **Repair:** shorten; bring the task up; keep the hero for first-visit marketing pages.

## 7. The Chrome Sandwich
Header, sub-nav, banner, and a bottom bar leave 40% of a laptop screen for content.
- **Repair:** see `references/layout-mechanics.md`.

## 8. Dead Middle
Two items flung to opposite edges with `space-between` on a wide screen.
- **Repair:** group them, or give the middle a role.

## 9. The Ragged Grid
Cards with different content heights produce misaligned titles and buttons.
- **Repair:** align internals with subgrid or consistent internal structure.

## 10. The Overflow Leak
Horizontal page scroll on mobile caused by one wide element (table, code block, long URL,
fixed-width image).
- **Repair:** find the culprit with `scripts/detect-overflow.mjs`; contain it (scroll wrapper
  for tables, `overflow-wrap`, `max-width: 100%`).

## 11. The Collision
Absolutely positioned badges, labels, or decorations overlapping content at certain widths.
- **Repair:** move into flow or reserve space; verify with `scripts/detect-collisions.mjs`.

## 12. The Scroll Trap
A fixed-height inner scroll region holds the main content; the page does not scroll.
- **Repair:** see `references/layout-mechanics.md`.

## 13. Equal Everything
Every section the same size and weight; the page has no rhythm.
- **Repair:** rank and vary; see `references/hierarchy-and-alignment.md`.

## 14. The Decorative Focal Point
The biggest, brightest element is an illustration or a decorative stat, not the task.
- **Repair:** re-rank; move decoration into the environment layer.
