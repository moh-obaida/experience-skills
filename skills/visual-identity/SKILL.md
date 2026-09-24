---
name: visual-identity
description: "Give a product a distinctive, recognizable identity derived from its domain, content, and mechanics rather than from trends, logos, or decorated controls. Covers environment versus controls, product-derived motifs, color roles, typography character, surface and shape language, illustration and imagery, competitor analysis without copying, and the logo-removal recognition test. Use when a product looks generic or template-like, when pages feel like no particular place, when identity is being added to inputs and buttons instead of the environment, or when establishing or extending a visual direction."
license: MIT
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Visual Identity

A product should feel like a place. Identity is what makes a screen recognizable as *this*
product when the logo is covered. It comes from many consistent decisions, most of them in the
environment around the task, not in the controls.

> Make the environment interesting, not the textbox.
> If the logo disappeared, what would remain uniquely ours?

## Use this when

- The product could be swapped for any other built with the same component library.
- Screens feel like "some software page," not like entering a particular product.
- Personality is being expressed through decorated inputs, custom buttons, or gimmicky controls
  while the page around them is blank.
- A new product needs a visual direction, or an existing one needs extending to new surfaces
  (sparse pages, empty states, dense tools) without losing itself.
- Someone proposes copying a competitor's look.

## Do not use this when

- The structure is broken (no focal point, dead space, overflow). Fix composition first
  (composition-repair) or identity will be decoration on a broken frame.
- The product is a public service or regulated tool where plainness and consistency *are* the
  identity. Use this skill lightly there: voice, clarity, consistency, not ornament.
- The request is to add trendy effects. Evaluate with anti-slop-ui first.

## Core principles

1. **Identity emerges from the product.** Domain, content, mechanics, audience, values, voice.
   See `references/_shared/product-identity.md`.
2. **Environment over controls.** Put identity in backgrounds, framing, imagery, typography,
   motifs, and key moments. Keep controls conventional and legible.
3. **Few carriers, applied consistently.** Two to four strong identity carriers beat ten weak ones.
4. **Identity budget follows archetype.** High for experiential and marketing surfaces, restrained
   in operational and transactional ones. See `references/_shared/page-archetypes.md`.
5. **Specialness loses meaning when everything is special.**
6. **Study competitors for reasons, not surfaces.**
7. **Identity must survive sparse and dense pages.** A direction that only works on the hero is
   not an identity.

## Workflow

### 1. Understand the product
Collect or infer: domain, core mechanic, primary content, audience and context of use
(projector? phone? office monitor?), values, existing brand assets, constraints (design system,
accessibility, performance budget).

### 2. Audit the current identity
Run the logo test (`references/recognition-test.md`). List which identity carriers exist today
and where they appear. Note where identity is misplaced (decorated controls, blank environment).

### 3. Choose references
| Need | Load |
|---|---|
| Running the logo test, judging recognizability | `references/recognition-test.md`, `references/identity-without-logo.md` |
| Building a world for the product | `references/brand-world.md` |
| Moving personality from controls to environment | `references/environment-vs-controls.md` |
| Finding motifs in the product itself | `references/product-derived-motifs.md` |
| Color as a system | `references/color-roles.md` |
| Type as voice | `references/typography-character.md` |
| Surfaces, depth, shape language | `references/surface-language.md` |
| Illustration and characters | `references/illustration.md` |
| Photography and imagery | `references/imagery.md` |
| Learning from other products | `references/competitor-analysis.md` |

### 4. Propose a direction
Write a short identity brief before changing anything:

```
Identity carriers (3):
1. Board geometry → hex motif in background field and panel corners (not in inputs)
2. Two-team color roles → teal/amber as team colors only; neutral UI otherwise
3. Condensed display type for scores and state headers
Environment: full-bleed patterned field on join, lobby, and results; plain in settings
Controls: standard inputs and buttons from the design system
Motion signature: tokens travel to the board on resolution (coordinate with motion-design)
Not doing: gradients on buttons, glass panels, custom code input
```

In BUILD or REPAIR mode, confirm the brief with the user when it changes an established brand.

### 5. Apply
- Environment and framing first: backgrounds, hero or stage areas, frames around focused tasks.
- Then typography and color roles across surfaces.
- Then motifs in a few recurring places (empty states, headers, loading, results).
- Keep controls standard; adjust only their color roles and type.

### 6. Verify
- Logo test again on 3+ surfaces, including a sparse one and a dense one.
- Contrast of text and controls over any new backgrounds.
- Performance: asset weight, no layout shift, reduced-motion for any ambient motion.
- Consistency: the same meaning uses the same treatment everywhere.

## Execution rules

- Derive, do not decorate: every carrier must trace back to the product.
- Do not add identity to controls that makes them harder to recognize or operate.
- Prefer CSS, SVG, and lightweight patterns over heavy raster backgrounds; lazy-load large imagery.
- Keep text contrast compliant over patterned or image backgrounds (scrims, solid panels).
- Never copy another product's proprietary assets, illustrations, or distinctive trade dress.
- Document the identity decisions (a short `identity.md` or design-system note) when building.

## Failure modes

- **Decorated controls:** segmented code boxes, glowing inputs, custom checkboxes as "personality."
- **Trend identity:** glass, aurora gradients, bento grids, dark neon used because they are current.
- **Logo dependence:** a big logo as the only identity carrier.
- **Hero-only identity:** a striking landing page and generic product screens.
- **Everything loud:** every carrier at maximum; noise instead of identity.
- **Copying:** a competitor's surfaces without their reasons.

## Completion criteria

- An identity brief names 2–4 product-derived carriers and where they apply.
- The logo test passes on at least three representative surfaces (or plainness is a deliberate,
  stated choice for the archetype).
- Controls remain conventional, legible, and accessible.
- Identity holds on sparse and dense pages.
- Contrast and performance were checked (or listed as unverified).

## References

- `references/identity-without-logo.md` — carriers and how to combine them
- `references/recognition-test.md` — running and scoring the logo test
- `references/brand-world.md` — building a coherent world
- `references/environment-vs-controls.md` — where personality belongs
- `references/product-derived-motifs.md` — finding motifs in the product
- `references/color-roles.md` — color as a role system
- `references/typography-character.md` — type as voice
- `references/surface-language.md` — surfaces, depth, shape
- `references/illustration.md` — illustration and character
- `references/imagery.md` — photography and art direction
- `references/competitor-analysis.md` — learning without copying
- `references/_shared/` — shared philosophy, patterns, and worked examples
  (`join-code-page.md`, `logo-removal-test.md`)
