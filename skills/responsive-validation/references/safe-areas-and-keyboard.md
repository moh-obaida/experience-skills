# Safe Areas and On-Screen Keyboards

## Safe areas

Phones have notches, rounded corners, home indicators, and dynamic islands.

- Use `viewport-fit=cover` only if you handle safe areas, and pad with
  `env(safe-area-inset-top|right|bottom|left)`.
- Bottom-fixed bars need `padding-bottom: env(safe-area-inset-bottom)`.
- Landscape: side insets matter.
- Native apps: respect platform safe-area layout guides.

## Viewport height on mobile

- `100vh` on mobile often exceeds the visible area (browser chrome). Use `100dvh` (dynamic) or
  `100svh` (small) and test.
- Full-height layouts must not hide the primary action behind the browser toolbar.

## On-screen keyboard

When the keyboard opens:

- The focused field must stay visible (browsers usually scroll; custom containers may not).
- The primary action (Send, Join, Continue) should remain reachable, or Enter/Go should submit.
- Fixed bottom bars may ride above the keyboard or be covered; decide deliberately and test.
- Use `inputmode` and `enterkeyhint` for the right keyboard and action key.
- The `VirtualKeyboard` API and `interactive-widget` viewport meta setting can control resize
  behavior in supporting browsers; test across iOS Safari and Android Chrome.

## Test

Open each form on a real phone or a simulator: focus each field, check visibility, submit with the
keyboard's action key, rotate the device.
