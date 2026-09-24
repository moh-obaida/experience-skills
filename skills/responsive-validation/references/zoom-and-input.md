# Zoom, Text Scaling, and Input Modalities

Load for every matrix: zoom and input type break layouts that widths do not.

Sections: Zoom and Text Scaling · Input Modalities

## Zoom and Text Scaling

Many people use browser zoom, OS text scaling, or screen magnifiers. Layouts must hold.

### Requirements (WCAG 2.2 AA, summarized)

- **Resize text (1.4.4):** text can scale to 200% without loss of content or function.
- **Reflow (1.4.10):** at 320 CSS px width (1280 px at 400% zoom), content reflows into one column
  without two-dimensional scrolling, except for content that needs it (maps, data tables, diagrams).
- **Text spacing (1.4.12):** increased line height, letter, word, and paragraph spacing does not
  break content.

### What breaks

- Fixed-height containers clipping larger text
- Buttons with fixed widths overflowing
- Sticky headers that consume most of a zoomed viewport
- Absolutely positioned overlays colliding
- Text in images (does not scale)
- Viewport units for font sizes without a relative component (`font-size: 2vw` ignores zoom
  partially)

### How to test

- Browser zoom 200% at 1280×800 and 400% at 1280 wide (= 320 CSS px).
- `scripts/layout-report.mjs --zoom 1,2,4` emulates zoom by shrinking the CSS viewport with a
  higher device scale factor (layout-equivalent to browser zoom).
- For OS text size on native apps, use the largest accessibility text sizes.
- Apply a text-spacing bookmarklet or stylesheet to test 1.4.12.

### Repairs

- Use `rem`/`em` for type and spacing that should scale; avoid fixed heights for text containers.
- Use `min-height` rather than `height`.
- Collapse sticky chrome at small effective heights.
- Let buttons wrap or grow.
- Use `clamp()` for fluid type with a `rem` component so zoom still has effect.

## Input Modalities

Screen size does not tell you the input method. A small window may use a mouse; a large tablet
uses touch; a laptop may have a touchscreen; many users navigate by keyboard.

### Detect capabilities, not devices

- `@media (hover: hover)` / `(hover: none)` for hover availability
- `@media (pointer: coarse)` / `(pointer: fine)` for pointer precision
- `any-hover` / `any-pointer` for devices with multiple inputs

Use these to adjust target sizes and hover affordances, not width breakpoints.

### Checks

| Modality | Check |
|---|---|
| Touch | Targets ≥ 24 px (ideally ~44 px for primary actions); nothing hover-only; gestures have alternatives; no accidental activation while scrolling |
| Mouse | Hover states helpful but not required; precise targets acceptable for dense tools |
| Keyboard | Full operability; visible focus; logical order at every breakpoint (reordered layouts can scramble focus order) |
| Screen reader | Reading order matches visual order at each breakpoint; collapsed nav is announced properly |
| Stylus / pen | Treat as fine pointer without hover on some devices |

### Layout reordering

CSS that reorders content visually (`order`, grid placement, `flex-direction: row-reverse`) can
make keyboard and screen reader order diverge from visual order at some breakpoints. Check tab
order at each layout.

### Navigation collapse

When navigation collapses to a menu button:

- The button has an accessible name and expanded state.
- Focus moves into the menu and returns on close.
- Escape closes it.
- The current page is indicated.
- It does not hide essential actions only reachable through it.
