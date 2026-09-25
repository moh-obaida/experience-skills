---
name: visual-identity
description: "Give a product a distinctive, recognizable identity derived from its domain, content, and mechanics rather than from trends, logos, or decorated controls. Covers environment versus controls, product-derived motifs, color roles, typography character, surface and shape language, illustration and imagery, competitor analysis without copying, and the logo-removal recognition test. Use when a product looks generic or template-like, when pages feel like no particular place, when identity is being added to inputs and buttons instead of the environment, or when establishing or extending a visual direction."
license: MIT
metadata:
  version: "0.2.0"
  collection: experience-skills
---

# Visual Identity

A product should feel like a place. Identity is what makes a screen recognizable as *this*
product when the logo is covered. It comes from consistent decisions, mostly in the environment
around the task, not in the controls.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Name the archetype (`references/_shared/page-archetypes.md`). It sets the identity budget: high
   for experiential and marketing surfaces, restrained for operational and transactional ones,
   clarity-as-identity for public services.

## Use this when

- The product could be swapped for any other built with the same component library.
- Screens feel like "some software page," not like entering a particular product.
- Personality is being expressed through decorated inputs, custom buttons, or gimmicky controls
  while the page around them is blank.
- A product needs a visual direction, or an existing direction must extend to sparse pages, empty
  states, and dense tools.
- Someone proposes copying a competitor's look.

## Do not use this when

- The structure is broken (no focal point, dead space, overflow) → composition-repair first.
- The request is to add trendy effects → evaluate with anti-slop-ui first.
- A public service or regulated tool: use lightly (voice, clarity, consistency), not ornament.

## Checkpoints

1. **Before proposing anything:** run the logo test on at least three surfaces
   (`references/identity-audit.md`). Record which carriers exist. No audit, no direction.
2. **For any change to a basic control** (input, button, select, checkbox, toggle): does it make the
   task faster or more reliable? No → reject it and move the personality into the environment
   (`references/environment-vs-controls.md`; anchor: `references/_shared/join-code-page.md`).
3. **For every identity carrier you propose:** can you trace it to the product's domain, content,
   mechanic, audience, or values (`references/_shared/product-identity.md`)? No → it is a trend,
   not identity; drop it or find its product root.
4. **For every treatment** (gradient, texture, glow, radius, blur): state its job
   (`references/_shared/design-vs-decoration.md`). Check it against `references/_shared/design-cliches.md`;
   a cliché needs a product reason to stay.
5. **When referencing a competitor:** name the specific decision, why it works for them, and whether
   your product shares those conditions. Otherwise do not cite it.
6. **Before finishing:** logo test again on a sparse and a dense surface; check text contrast over any
   new background; check asset weight.
7. **Before proposing a direction:** follow `references/_shared/selection.md`: three candidates from different families in `references/_shared/directions-index.md`, compared in its table. Never choose a palette, typeface, or style from the product's industry.
8. **For every state surface** (empty, loading, error, success) and one dense surface: where does identity live there? Use `references/branded-states-and-density.md`; identity that exists only in the hero fails.

## Workflow

1. **Understand the product:** domain, core mechanic, primary content, audience and context of use,
   values, existing assets, constraints.
2. **Audit** with `references/identity-audit.md` (anchor: `references/_shared/logo-removal-test.md`).
3. **Derive a direction** with `references/deriving-identity.md` (brand world, product-derived motifs,
   competitor analysis without copying). Write a short brief:
   ```
   Carriers (3): hex board motif in background fields (not in inputs) · team colors as roles only ·
   condensed display type for scores and state headers
   Environment: patterned field on join, lobby, results; plain in settings
   Controls: standard design-system inputs and buttons
   Not doing: gradient buttons, glass panels, custom code input
   ```
   In BUILD or REPAIR mode, confirm the brief with the user if it changes an established brand.
4. **Apply** environment and framing first (`references/environment-vs-controls.md`; for focused pages,
   `references/_shared/branded-environment-simple-form.md`), then color, type, and surface
   (`references/identity-carriers.md`), then imagery (`references/imagery-and-illustration.md`).
5. **Verify** (checkpoint 6).

## Execution rules

- Derive, do not decorate.
- Prefer CSS, SVG, and light patterns over heavy raster backgrounds; lazy-load large imagery.
- Keep text contrast compliant over patterned or image backgrounds.
- Never copy another product's assets, illustrations, or distinctive trade dress.
- Record identity decisions (a short note or design-system entry) when building.

## Precedent and design intelligence

| When | Load |
|---|---|
| Choosing a direction (after the audit) | `references/_shared/selection.md`, `references/_shared/directions-index.md`, then two or three family files from `references/_shared/` (`directions-editorial.md`, `directions-structural.md`, `directions-quiet.md`, `directions-institutional.md`, `directions-technical.md`, `directions-expressive.md`, `directions-atmospheric.md`, `directions-material.md`, `directions-retro.md`, `directions-product.md`) |
| Color roles | `references/_shared/palettes.md` (contrast ratios computed) |
| Type | `references/_shared/typography.md` |
| Surfaces, shape, named treatments (glass, neumorphism, gradients) | `references/_shared/surfaces-and-shape.md` |
| Imagery, illustration, icons | `references/_shared/imagery-illustration-icons.md` |
| Motion identity | `references/_shared/motion-languages.md` |
| Identity budget for the whole product | `references/_shared/product-archetypes.md` |
| Real products: expressive environments with plain controls | `references/_shared/environment-first-identity.md` |
| Real products: identity from the product itself | `references/_shared/product-derived-identity.md` |
| A technique looks like a cliché but may be justified | `references/_shared/justified-trends.md` |

Adapted third-party material (study protocol, font pairings, style coverage) is credited in
`references/_shared/third-party-notices.md`.

## Failure modes

- Decorated controls as "personality."
- Trend identity (glass, aurora gradients, bento, dark neon) without product roots.
- Logo dependence; hero-only identity; every carrier at full volume; copying.

## Completion criteria

- A brief names 2–4 product-derived carriers and where they apply.
- The logo test passes on three representative surfaces, or plainness is a stated choice.
- Controls remain conventional, legible, accessible.
- Identity holds on sparse and dense pages; contrast and weight were checked or listed as unverified.

## References

- `references/identity-audit.md` — logo test, identity carriers
- `references/deriving-identity.md` — brand world, motifs, competitor analysis
- `references/environment-vs-controls.md` — where personality belongs
- `references/identity-carriers.md` — color roles, typography, surface language
- `references/imagery-and-illustration.md` — illustration, characters, photography
- `references/branded-states-and-density.md` — branded empty/loading/error/success; identity under sparse and dense content
- `references/_shared/` — generated copies: `experience-core.md`, `page-archetypes.md`,
  `product-archetypes.md`, `product-identity.md`, `design-vs-decoration.md`, `design-cliches.md`,
  `branded-environment-simple-form.md`, `join-code-page.md`, `logo-removal-test.md`, `selection.md`,
  `directions-index.md`, `directions-editorial.md`, `directions-structural.md`,
  `directions-quiet.md`, `directions-institutional.md`, `directions-technical.md`,
  `directions-expressive.md`, `directions-atmospheric.md`, `directions-material.md`,
  `directions-retro.md`, `directions-product.md`, `palettes.md`, `typography.md`,
  `surfaces-and-shape.md`, `imagery-illustration-icons.md`, `motion-languages.md`,
  `environment-first-identity.md`, `product-derived-identity.md`, `justified-trends.md`,
  `third-party-notices.md`
