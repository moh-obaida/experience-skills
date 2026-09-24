# Color Roles

A palette is a list of colors. A color system is a set of roles. Identity and usability come
from roles.

## Core roles

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

## Signature color use

- The signature color should appear in a few high-value places: environment, key moments,
  primary action (if suitable).
- Using the signature color for everything (text, borders, icons, backgrounds) destroys its
  signal.
- Separate brand color from status colors; a red brand should not make every button look like an
  error.

## Accessibility

- Text contrast: at least 4.5:1 for body text and 3:1 for large text (WCAG AA).
- Non-text contrast: at least 3:1 for UI component boundaries and meaningful graphics.
- Never rely on color alone: pair with text, icons, pattern, or position.
- Check categorical palettes with color-vision-deficiency simulation.

## Dark and light modes

Define roles for both. Do not invert mechanically: signature colors often need different values
to keep the same feel; shadows do not work on dark backgrounds (use lighter surfaces for elevation).

## Gradients

A gradient is a color role only when it expresses light, depth, or a signature. A gradient on
every button is not a role. See the anti-slop-ui skill if installed.
