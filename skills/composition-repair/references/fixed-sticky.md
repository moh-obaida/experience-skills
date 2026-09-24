# Fixed and Sticky Chrome

Every fixed or sticky element is paid for at every scroll position. On short viewports the
cost multiplies.

## The chrome budget

Measure the horizontal chrome (full-width fixed/sticky headers, footers, toolbars, banners)
as a share of viewport height. `scripts/measure-layout.mjs` reports it.

| Share of viewport height | Interpretation |
|---|---|
| < 12% | Typical and usually fine |
| 12–20% | Check short viewports and mobile |
| > 20% | Likely obstructing content; justify or reduce |

Common offenders: a sticky header + sticky sub-navigation + cookie banner + sticky "Buy"
bar on a 700px-tall laptop viewport.

## Rules of thumb

- Stick only what users need constantly (primary navigation in apps, a buy/submit bar on long
  transactional pages, the current-state header in live control).
- Collapse headers on scroll down, restore on scroll up, when the header is tall.
- Never stack more than two sticky layers without a strong reason.
- On mobile landscape, consider un-sticking everything.

## Obstruction checks

- Anchored links (`#section`) should not land underneath a sticky header; use
  `scroll-margin-top`.
- Focused elements must not be hidden behind sticky chrome when tabbing (WCAG 2.2 "Focus Not
  Obscured"). Use `scroll-padding` on the scroll container.
- Toasts and floating buttons must not cover primary actions or form fields.
- Bottom-fixed bars must account for mobile safe areas and the on-screen keyboard.

## Fixed elements in composition

Fixed chrome is part of the composition; include it in the viewport budget. A large fixed
header on a FOCUSED page shrinks the space available for the task and its environment.
