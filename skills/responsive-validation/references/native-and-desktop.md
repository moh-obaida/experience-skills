# Native Apps and Desktop Windows

The principles apply beyond the browser; the tools differ.

## Native mobile (iOS, Android)

- Test on the smallest and largest supported devices, both orientations if supported.
- Largest accessibility text size (Dynamic Type on iOS, font scale on Android).
- Safe areas, notches, home indicators; split-screen and slide-over on tablets.
- Keyboard avoidance for forms.
- Dark mode and high-contrast settings.
- Right-to-left layout direction (both platforms support forced RTL for testing).
- Reduced motion and reduced transparency settings.
- Tools: simulators/emulators, UI tests that screenshot across device configurations, preview
  tools (SwiftUI previews, Compose previews) with multiple configurations.

## Desktop apps (native or Electron-style)

- Resizable windows: minimum size, very small windows, very large windows, split-screen halves.
- Multiple displays with different scale factors.
- OS text scaling and high-contrast modes.
- Keyboard navigation and platform shortcuts.
- Title bar and window controls on each OS.

## Terminal / CLI output

Responsive applies here too:

- Narrow terminals (80 columns and fewer): wrap or truncate thoughtfully; avoid tables wider than
  the terminal.
- No color (`NO_COLOR`, non-TTY): output still readable.
- Non-interactive environments (CI): no prompts; clear logs.
- Light and dark terminal themes: colors readable on both.

## When you cannot run it

List configurations with specific checks for the user ("Run on the iPhone SE simulator with the
largest Dynamic Type; confirm the Join button remains visible above the keyboard") and mark
results unverified.
