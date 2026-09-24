# Zoom and Text Scaling

Many people use browser zoom, OS text scaling, or screen magnifiers. Layouts must hold.

## Requirements (WCAG 2.2 AA, summarized)

- **Resize text (1.4.4):** text can scale to 200% without loss of content or function.
- **Reflow (1.4.10):** at 320 CSS px width (1280 px at 400% zoom), content reflows into one column
  without two-dimensional scrolling, except for content that needs it (maps, data tables, diagrams).
- **Text spacing (1.4.12):** increased line height, letter, word, and paragraph spacing does not
  break content.

## What breaks

- Fixed-height containers clipping larger text
- Buttons with fixed widths overflowing
- Sticky headers that consume most of a zoomed viewport
- Absolutely positioned overlays colliding
- Text in images (does not scale)
- Viewport units for font sizes without a relative component (`font-size: 2vw` ignores zoom
  partially)

## How to test

- Browser zoom 200% at 1280×800 and 400% at 1280 wide (= 320 CSS px).
- `scripts/layout-report.mjs --zoom 1,2,4` emulates zoom by shrinking the CSS viewport with a
  higher device scale factor (layout-equivalent to browser zoom).
- For OS text size on native apps, use the largest accessibility text sizes.
- Apply a text-spacing bookmarklet or stylesheet to test 1.4.12.

## Repairs

- Use `rem`/`em` for type and spacing that should scale; avoid fixed heights for text containers.
- Use `min-height` rather than `height`.
- Collapse sticky chrome at small effective heights.
- Let buttons wrap or grow.
- Use `clamp()` for fluid type with a `rem` component so zoom still has effect.
