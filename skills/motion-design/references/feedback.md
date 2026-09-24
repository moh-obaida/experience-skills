# Feedback Motion

Feedback motion confirms that input was received. It must be immediate and short.

## Recipes

| Control | Feedback |
|---|---|
| Button press | Pressed state within one frame (color/shade; optional 1–2 px translate or 0.98 scale) |
| Toggle | Knob travels (100–150 ms); track color changes |
| Checkbox | Check draws or appears (100 ms) |
| Text input | Focus ring appears instantly; no animated labels that obscure content |
| Drag | Item lifts (shadow/scale), follows pointer without lag, drop target highlights |
| Async button | Label changes to progress state; spinner inside the button; success check briefly |
| Error | Field highlights; optional single short shake only in playful contexts, never repeated |

## Rules

- Feedback must be faster than the user's next action. If it isn't, it's in the way.
- Feedback should not move surrounding layout.
- Haptics (mobile) can pair with feedback for important confirmations; keep them subtle and
  optional.
- Sound is a separate channel: off by default except in games and media, and always controllable.
