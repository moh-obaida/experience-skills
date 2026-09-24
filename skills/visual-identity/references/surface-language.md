# Surface Language

Surface language is how panels, cards, backgrounds, and layers relate: flat or layered,
textured or clean, bordered or borderless, shadowed or not. It should follow one material
logic.

## Pick a material logic

| Logic | Traits | Suits |
|---|---|---|
| Flat print | Solid fills, strong type, borders or rules, no shadows | Editorial, public service, many tools |
| Layered paper | Subtle elevation, soft shadows, clear stacking | Productivity, documents |
| Stage / light | Dark canvas, light falling on the task area, glow for key moments | Games, media, presentations |
| Tactile | Texture, grain, physical cues | Crafts, lifestyle, some games |
| Technical | Grids, hairlines, mono type, exact alignment | Developer tools, data |
| Soft | Rounded forms, pastel surfaces, low contrast edges | Children, wellness (with contrast care) |

Mixing logics randomly (glass cards on a flat page next to neumorphic buttons) reads as
unconsidered.

## Elevation

- Elevation communicates layer order: what floats above what. Use it for things that actually
  float (menus, dialogs, dragged items, sticky bars).
- Uniform shadows on all cards say nothing about order. Prefer spacing or a subtle surface value
  change for static groups.
- On dark themes, express elevation with lighter surfaces rather than shadows.

## Borders and radii

- Borders separate; spacing groups. Use borders when spacing alone is ambiguous (tables,
  inputs).
- Choose a small set of radii (for example 4, 8, 16) tied to element size, and a shape rationale
  (sharp for technical, rounded for friendly, derived for motifs).
- Nested radii: inner radius ≈ outer radius minus padding, or it looks off.

## Glass and blur

Blur is honest only when real content sits behind the surface and the layer relationship
matters (a toolbar over a scrolling canvas, a sheet over a map). Glass over a flat gradient is
decoration.

## Texture and grain

Texture can carry identity (print lineage, craft) when it is subtle, consistent, and does not
reduce text contrast. Grain added "for depth" to a flat UI is usually noise.
