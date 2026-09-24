# Input Modalities

Screen size does not tell you the input method. A small window may use a mouse; a large tablet
uses touch; a laptop may have a touchscreen; many users navigate by keyboard.

## Detect capabilities, not devices

- `@media (hover: hover)` / `(hover: none)` for hover availability
- `@media (pointer: coarse)` / `(pointer: fine)` for pointer precision
- `any-hover` / `any-pointer` for devices with multiple inputs

Use these to adjust target sizes and hover affordances, not width breakpoints.

## Checks

| Modality | Check |
|---|---|
| Touch | Targets ≥ 24 px (ideally ~44 px for primary actions); nothing hover-only; gestures have alternatives; no accidental activation while scrolling |
| Mouse | Hover states helpful but not required; precise targets acceptable for dense tools |
| Keyboard | Full operability; visible focus; logical order at every breakpoint (reordered layouts can scramble focus order) |
| Screen reader | Reading order matches visual order at each breakpoint; collapsed nav is announced properly |
| Stylus / pen | Treat as fine pointer without hover on some devices |

## Layout reordering

CSS that reorders content visually (`order`, grid placement, `flex-direction: row-reverse`) can
make keyboard and screen reader order diverge from visual order at some breakpoints. Check tab
order at each layout.

## Navigation collapse

When navigation collapses to a menu button:

- The button has an accessible name and expanded state.
- Focus moves into the menu and returns on close.
- Escape closes it.
- The current page is indicated.
- It does not hide essential actions only reachable through it.
