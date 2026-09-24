# Safe Areas, Keyboards, Native Apps, and Terminals

Load for phones, native apps, desktop windows, and CLI output.

Sections: Safe Areas and On-Screen Keyboards · Native Apps and Desktop Windows

## Safe Areas and On-Screen Keyboards

### Safe areas

Phones have notches, rounded corners, home indicators, and dynamic islands.

- Use `viewport-fit=cover` only if you handle safe areas, and pad with
  `env(safe-area-inset-top|right|bottom|left)`.
- Bottom-fixed bars need `padding-bottom: env(safe-area-inset-bottom)`.
- Landscape: side insets matter.
- Native apps: respect platform safe-area layout guides.

### Viewport height on mobile

- `100vh` on mobile often exceeds the visible area (browser chrome). Use `100dvh` (dynamic) or
  `100svh` (small) and test.
- Full-height layouts must not hide the primary action behind the browser toolbar.

### On-screen keyboard

When the keyboard opens:

- The focused field must stay visible (browsers usually scroll; custom containers may not).
- The primary action (Send, Join, Continue) should remain reachable, or Enter/Go should submit.
- Fixed bottom bars may ride above the keyboard or be covered; decide deliberately and test.
- Use `inputmode` and `enterkeyhint` for the right keyboard and action key.
- The `VirtualKeyboard` API and `interactive-widget` viewport meta setting can control resize
  behavior in supporting browsers; test across iOS Safari and Android Chrome.

### Test

Open each form on a real phone or a simulator: focus each field, check visibility, submit with the
keyboard's action key, rotate the device.

## Native Apps and Desktop Windows

The principles apply beyond the browser; the tools differ.

### Native mobile (iOS, Android)

- Test on the smallest and largest supported devices, both orientations if supported.
- Largest accessibility text size (Dynamic Type on iOS, font scale on Android).
- Safe areas, notches, home indicators; split-screen and slide-over on tablets.
- Keyboard avoidance for forms.
- Dark mode and high-contrast settings.
- Right-to-left layout direction (both platforms support forced RTL for testing).
- Reduced motion and reduced transparency settings.
- Tools: simulators/emulators, UI tests that screenshot across device configurations, preview
  tools (SwiftUI previews, Compose previews) with multiple configurations.

### Desktop apps (native or Electron-style)

- Resizable windows: minimum size, very small windows, very large windows, split-screen halves.
- Multiple displays with different scale factors.
- OS text scaling and high-contrast modes.
- Keyboard navigation and platform shortcuts.
- Title bar and window controls on each OS.

### Terminal / CLI output

Responsive applies here too:

- Narrow terminals (80 columns and fewer): wrap or truncate thoughtfully; avoid tables wider than
  the terminal.
- No color (`NO_COLOR`, non-TTY): output still readable.
- Non-interactive environments (CI): no prompts; clear logs.
- Light and dark terminal themes: colors readable on both.

### When you cannot run it

List configurations with specific checks for the user ("Run on the iPhone SE simulator with the
largest Dynamic Type; confirm the Join button remains visible above the keyboard") and mark
results unverified.
