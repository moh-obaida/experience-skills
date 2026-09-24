# Identity Carriers: Color, Type, Surface

Load when applying the direction to color roles, typography, and surfaces.

Sections: Color Roles · Typography Character · Surface Language

## Color Roles

A palette is a list of colors. A color system is a set of roles. Identity and usability come
from roles.

### Core roles

| Role | Job | Notes |
|---|---|---|
| Canvas | Page/background | Sets the world: light, dark, tinted, textured |
| Surface | Panels, raised areas | Distinguish from canvas by value, not only shadow |
| Text primary / secondary | Reading hierarchy | Secondary still meets contrast requirements |
| Primary action | The main action | Used sparingly: one per view region |
| Accent / signature | Identity | Where the brand color lives: environment, key moments |
| Selection / focus | Current item; keyboard focus | Must be highly visible |
| Status | Success, warning, error, info | Consistent meaning; never the only signal |
| Categorical | Teams, categories, data series | Distinguishable, including for color-vision deficiency |

### Signature color use

- The signature color should appear in a few high-value places: environment, key moments,
  primary action (if suitable).
- Using the signature color for everything (text, borders, icons, backgrounds) destroys its
  signal.
- Separate brand color from status colors; a red brand should not make every button look like an
  error.

### Accessibility

- Text contrast: at least 4.5:1 for body text and 3:1 for large text (WCAG AA).
- Non-text contrast: at least 3:1 for UI component boundaries and meaningful graphics.
- Never rely on color alone: pair with text, icons, pattern, or position.
- Check categorical palettes with color-vision-deficiency simulation.

### Dark and light modes

Define roles for both. Do not invert mechanically: signature colors often need different values
to keep the same feel; shadows do not work on dark backgrounds (use lighter surfaces for elevation).

### Gradients

A gradient is a color role only when it expresses light, depth, or a signature. A gradient on
every button is not a role. See the anti-slop-ui skill if installed.

## Typography Character

Typography is often the strongest single identity carrier, and the one most often left at
framework defaults.

### Roles

| Role | Purpose | Character budget |
|---|---|---|
| Display | Headlines, hero, key numbers, state headers | High: this is where character lives |
| UI | Labels, buttons, navigation | Low–medium: legibility first |
| Body | Reading | Low: comfort first |
| Data / mono | Numbers, code, IDs | Functional: tabular figures, clear glyphs |

Many strong identities use one characterful display face with one highly legible UI/body face.

### Choosing character

- **Derive from the world:** a condensed sports face for a game show; a humanist serif for an
  editorial product; a precise grotesk or mono for a developer tool; rounded forms for young
  children's products.
- **Consider languages:** does the face support the scripts you need (Arabic, Cyrillic, CJK)? Is
  there a well-matched companion for other scripts?
- **Consider rendering:** thin weights disappear on low-DPI screens and projectors.
- **Consider licensing and performance:** web font weight, subsetting, `font-display`.

### Using type for character, even with a neutral face

Character comes from *usage* as much as typeface:

- Scale contrast (very large display vs compact UI)
- Weight contrast
- Case (uppercase for short state headers, never for paragraphs)
- Tracking (tight for large display, slightly open for small caps)
- Numerals (tabular for data, oldstyle for editorial)
- Consistent placement of headings relative to the grid

### Anti-patterns

- A single neutral sans at 14/16/20px with no display role
- Gradient text as the only expression of character
- Tiny uppercase gray eyebrow labels above every heading
- Novelty fonts in UI roles
- Different display faces on different pages

## Surface Language

Surface language is how panels, cards, backgrounds, and layers relate: flat or layered,
textured or clean, bordered or borderless, shadowed or not. It should follow one material
logic.

### Pick a material logic

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

### Elevation

- Elevation communicates layer order: what floats above what. Use it for things that actually
  float (menus, dialogs, dragged items, sticky bars).
- Uniform shadows on all cards say nothing about order. Prefer spacing or a subtle surface value
  change for static groups.
- On dark themes, express elevation with lighter surfaces rather than shadows.

### Borders and radii

- Borders separate; spacing groups. Use borders when spacing alone is ambiguous (tables,
  inputs).
- Choose a small set of radii (for example 4, 8, 16) tied to element size, and a shape rationale
  (sharp for technical, rounded for friendly, derived for motifs).
- Nested radii: inner radius ≈ outer radius minus padding, or it looks off.

### Glass and blur

Blur is honest only when real content sits behind the surface and the layer relationship
matters (a toolbar over a scrolling canvas, a sheet over a map). Glass over a flat gradient is
decoration.

### Texture and grain

Texture can carry identity (print lineage, craft) when it is subtle, consistent, and does not
reduce text contrast. Grain added "for depth" to a flat UI is usually noise.
