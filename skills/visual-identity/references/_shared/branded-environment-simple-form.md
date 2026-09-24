<!-- GENERATED FROM shared/patterns/branded-environment-simple-form.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Pattern: Branded Environment, Simple Form

## Problem
A focused surface (join, sign-in, code entry, lookup) is visually empty, so the designer puts
all the personality into the one control: segmented code boxes, animated fields, custom
keypads. The environment stays blank; the control becomes harder to use.

## When useful
- Focused archetype pages that are also a product's first impression (join a game, enter an
  event, redeem a code, sign in to a consumer product).
- Products with a real identity to express (games, events, education, consumer brands).

## When NOT useful
- Public-service and regulated contexts where plainness builds trust (the environment should be
  calm and official instead).
- Embedded flows inside another product's frame.

## Structure
1. **Environment:** full-bleed background with product-derived pattern, geometry, illustration,
   or imagery. It establishes the place.
2. **Frame:** a clear, well-proportioned region holding the task; sized and positioned by
   composition, not just centered by default.
3. **Control:** a standard, large, well-labeled input with the right keyboard (numeric, one-time
   code autocomplete), paste support, and forgiving formatting.
4. **Action:** one obvious primary button.
5. **Support:** a single line of help ("Find the code on the host's screen").

## Example
```
╔════════════════════════════════════════════════════╗
║ ◆ ◇ ◆  product pattern / illustration world  ◆ ◇ ◆ ║
║        ┌──────────────────────────────┐            ║
║        │  Join a game                 │            ║
║        │  [ Game code          ]      │            ║
║        │  [        Join        ]      │            ║
║        └──────────────────────────────┘            ║
║ ◇ ◆ ◇       code is on the host's screen     ◇ ◆ ◇ ║
╚════════════════════════════════════════════════════╝
```

## Failure modes
- The environment is so busy the control loses contrast.
- Motion in the background competes with the task (keep ambient motion slow and subtle; respect
  reduced motion).
- Assets heavy enough to delay the page on classroom or mobile networks.
