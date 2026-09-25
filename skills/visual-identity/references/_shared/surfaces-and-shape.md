<!-- GENERATED FROM shared/design-intelligence/surfaces-and-shape.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Surfaces and Shape Language

Surfaces define how panels, cards, backgrounds, and layers relate. Shape language defines corners,
strokes, and geometry. Both should follow one logic per product.

## Surface logics

| Logic | Traits | Honest when |
|---|---|---|
| Flat print | Solid fills, rules, no shadows | Editorial, public service, many tools |
| Layered paper | Subtle elevation for real stacking | Documents, productivity |
| Stage / light | Dark field, light on the task area, glow on key moments | Games, media, presentations |
| Tactile | Texture and physical cues | Crafts, instruments, games |
| Technical | Hairlines, grids, mono labels | Developer tools, data |
| Soft | Rounded, low-contrast edges | Children, wellness (with text contrast kept high) |

## Named surface treatments (not directions)

This table reclassifies several entries from the UI UX Pro Max style catalog, which was used as
a coverage check (see the third-party notices file).

These are often presented as "styles." They are treatments with specific honest uses.

| Treatment | Honest when | Default (slop) when | Accessibility / performance |
|---|---|---|---|
| Glassmorphism / translucent material | Real, changing content lies behind (toolbar over canvas, sheet over map/video) and platform material conventions apply | Frosted panels over a flat gradient | Contrast varies with content behind; large `backdrop-filter` areas cost GPU; respect reduced transparency |
| Neumorphism | Rarely; decorative controls in a single-purpose physical-feeling device UI | Any general UI | Low-contrast edges fail component-boundary contrast; avoid for interactive elements |
| Claymorphism | Playful illustration and characters | Buttons and cards in productive UI | Soft shadows reduce edge clarity |
| Aurora / mesh gradients | A brand signature placed in the environment | Behind every hero, on buttons and text | Text over gradients needs scrims |
| Skeuomorphism | The digital control mirrors a real object users know (a mixer, a camera dial) | Decorating unrelated software | Keep native semantics under the skin |
| Flat design | Almost always viable | When affordances disappear (flat text that is actually a button) | Ensure controls still look operable |
| Hard shadows / neo-brutal | Youthful, creative, bold products; primary actions | Every element at full weight | Good edges; check saturated fills |

## Elevation

- Elevation expresses layer order: menus, dialogs, dragged items, sticky bars.
- Static groups use surface value (a slightly different background), not shadows.
- On dark themes, express elevation with lighter surfaces.

## Shape language

- Pick a small radius set tied to element size and a rationale (sharp for technical, rounded for
  friendly, derived from a product motif).
- Nested radii: inner = outer − padding.
- Product-derived shapes (a board's hexagon, a card's corner, a speech bubble's tail) belong in the
  environment and key moments, not in input fields.
- Pills are for filters, tags, and tokens; a pill used for everything carries no meaning.

## Texture and pattern

- Texture carries identity when tied to a material concept (paper, print, grain for film) and stays
  subtle behind text.
- Patterns from the product (tiles, motifs) work at low contrast in the environment and at full
  strength in key moments.
- Precedent: Blooket tilted-square pattern (BK1), Arc zigzag bands (AR2), Cloudflare grid texture (CF1).
