---
name: visual-identity
description: "Use this skill whenever a product needs a visual direction or stronger personality, energy, color behavior, or identity across its working screens and states. Derive expression from the user job, core instrument, product mechanics, and emotional target. Choose a look contract with structural hierarchy, chroma and contrast behavior, typographic attitude, geometry, rhythm, and a causal signature response; preserve existing coherent identity and compare Atlas options only when useful."
license: MIT
metadata:
  version: "0.6.0"
  collection: experience-skills
---

# Visual Identity

A product should feel like a place. Identity is what makes a screen recognizable as *this*
product when the logo is covered. It comes from consistent decisions, mostly in the environment
around the task, not in the controls.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/experience-operating-contract.md`; a direction change must use the
   selection branch and record the selected direction before styling.
3. Name the archetype (`references/_shared/page-archetypes.md`). It sets the identity budget: high
   for experiential and marketing surfaces, restrained for operational and transactional ones,
   clarity-as-identity for public services.

<!-- core-brief:start · GENERATED FROM shared/philosophy/core-brief.md by npm run sync. Do not edit here. -->
**Core rules in brief.** These apply even before you open `references/_shared/experience-core.md`.
Read that file (the full rules and evidence levels) before a full review, repair, or build.

- **Verdict before adjectives.** Do not write "clean," "modern," "great idea," or "looks good" until
  an observation earns it. The user's enthusiasm is not evidence; test the proposal against the goal.
- **Evidence levels on findings.** E1 rendered, E2 measured, E3 source, E4 documented,
  E5 screenshot, E6 assumed. If files, a browser, or a terminal are available, look or measure before
  claiming. Otherwise, name the checks you did not run.
- **Composition is not alignment.** Empty space needs a stated job, and sparseness is never fixed
  with filler (stats, tips, promos, decoration).
- **Personality can come from the environment and causal product behavior.** A standard control
  changes only if the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Route selectively.** Consider the relevant experience skills; activate another only when it
  can resolve a material concern. No change and no handoff are valid outcomes.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
<!-- core-brief:end -->

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

## Mandatory conditional loading

For substantial identity work, first name the product job, loop, instrument, and invariants. When direction is open, use `references/_shared/design-system-selector.md` and `references/_shared/design-systems-index.md` for a core-screen comparison; load `references/_shared/niche-atlas-index.md` and a niche file only when domain realities could change the decision. Load the relevant candidate family and `references/_shared/design-system-grammar.md` to implement. Use `references/_shared/palette-themes.md`, `references/_shared/type-strategies.md`, `references/_shared/font-pairings.md`, `references/_shared/family-components.md`, `references/_shared/component-patterns.md`, and `references/_shared/system-application-examples.md` only for the role or route they can clarify.

If direction is genuinely open, load `references/_shared/selection.md` and compare structurally distinct candidates on the primary working screen. Preserve an existing strong direction when no alternative improves the job. If the selected row is Neo-brutalist, Soft minimal, or Playful, MUST also load its matching product precedent module (`neo-brutalist-products.md`, `soft-minimal-products.md`, or `playful-products.md`) and name the product/surface conditions being transferred. If a treatment is proposed, MUST load `references/_shared/context-adaptation.md`, `references/_shared/product-interiors-and-dense-states.md`, and `references/_shared/justified-trends.md`. If the surface is runnable, identity claims MUST survive rendered sparse and dense states or be marked unverified.

## Checkpoints

1. **Before proposing anything:** run the logo test on the working screen and representative state or supporting surfaces that exist
   (`references/identity-audit.md`). Record which carriers exist before changing the direction.
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
7. **Before proposing a direction:** start with job, loop, core instrument, and invariants. Use `references/_shared/selection.md` and `references/_shared/design-system-selector.md` to compare distinct directions only when choice is open. A niche supplies realities, not a palette or style.
8. **For greenfield identity:** is the direction operational on the primary working screen? Define structure and expression with `references/_shared/design-system-grammar.md`: energy, color behavior, contrast, type, geometry, rhythm, and a causal signature response. Preserve a strong native concept when Atlas options add no value.
9. **For every state surface** (empty, loading, error, success) and one dense surface: where does identity live there? Use `references/branded-states-and-density.md`; identity that exists only in the hero fails.

10. **Across the product:** does identity persist through the workspace, success, error, empty, dense content, supporting screens, mobile, and translation? If it only appears on a landing page, repair it. Repeated interaction behavior may be the strongest identity carrier; use color and motion to make consequences legible without weakening the core instrument.

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
| Choosing a direction (after the audit) | `references/_shared/selection.md`, `references/_shared/directions-index.md`, then only candidate family files likely to change the choice from `references/_shared/` (`directions-editorial.md`, `directions-structural.md`, `directions-quiet.md`, `directions-institutional.md`, `directions-technical.md`, `directions-expressive.md`, `directions-atmospheric.md`, `directions-material.md`, `directions-retro.md`, `directions-product.md`) |
| What kind of product this is (before system selection) | `references/_shared/niche-atlas-index.md`, then one niche file: `niche-business.md`, `niche-developer.md`, `niche-ai.md`, `niche-games.md`, `niche-education.md`, `niche-commerce.md`, `niche-finance.md`, `niche-media.md`, `niche-social.md`, `niche-health.md`, `niche-public.md`, `niche-travel.md`, `niche-physical.md`, `niche-creative.md`, or `niche-personal.md` |
| Whole-product system selection | `references/_shared/design-system-selector.md`, `references/_shared/design-systems-index.md`; then selected family files (`design-systems-workspaces.md`, `design-systems-services.md`, `design-systems-culture.md`, `design-systems-learning.md`, `design-systems-operations.md`) and `references/_shared/design-system-grammar.md` |
| Theme, type, and component grammar | `references/_shared/palette-themes.md`, `references/_shared/type-strategies.md`, `references/_shared/font-pairings.md`; conditionally `references/_shared/component-patterns.md` and `references/_shared/system-application-examples.md` |
| Color roles | `references/_shared/palettes.md` (contrast ratios computed) |
| Type | `references/_shared/typography.md` |
| Surfaces, shape, named treatments (glass, neumorphism, gradients) | `references/_shared/surfaces-and-shape.md` |
| Imagery, illustration, icons | `references/_shared/imagery-illustration-icons.md` |
| Motion identity | `references/_shared/motion-languages.md` |
| Identity budget for the whole product | `references/_shared/product-archetypes.md` |
| Real products: expressive environments with plain controls | `references/_shared/environment-first-identity.md` |
| Real products: identity from the product itself | `references/_shared/product-derived-identity.md` |
| Neo-brutalist direction | `references/_shared/neo-brutalist-products.md` |
| Soft minimal direction | `references/_shared/soft-minimal-products.md` |
| Playful direction | `references/_shared/playful-products.md` |
| A technique looks like a cliché but may be justified | `references/_shared/justified-trends.md` |

Adapted third-party material (study protocol, font pairings, style coverage) is credited in
`references/_shared/third-party-notices.md`.

## Failure modes

- Decorated controls as "personality."
- Trend identity (glass, aurora gradients, bento, dark neon) without product roots.
- Logo dependence; hero-only identity; every carrier at full volume; copying.

## Completion criteria

- A brief names 2–4 product-derived carriers and where they apply.
- The logo test passes on the working screen and relevant available states, or plainness is a stated choice.
- Controls remain conventional, legible, accessible.
- Identity holds on sparse and dense pages; contrast and weight were checked or listed as unverified.
- When direction was open, a focused comparison was used. If a material concern remains, hand off the selected direction, protected carriers, states, and open risk.

## References

- `references/identity-audit.md` — logo test, identity carriers
- `references/deriving-identity.md` — brand world, motifs, competitor analysis
- `references/environment-vs-controls.md` — where personality belongs
- `references/identity-carriers.md` — color roles, typography, surface language
- `references/imagery-and-illustration.md` — illustration, characters, photography
- `references/branded-states-and-density.md` — branded empty/loading/error/success; identity under sparse and dense content
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `page-archetypes.md`,
  `product-archetypes.md`, `product-identity.md`, `design-vs-decoration.md`, `design-cliches.md`,
  `branded-environment-simple-form.md`, `join-code-page.md`, `logo-removal-test.md`, `selection.md`,
  `directions-index.md`, `directions-editorial.md`, `directions-structural.md`,
  `directions-quiet.md`, `directions-institutional.md`, `directions-technical.md`,
  `directions-expressive.md`, `directions-atmospheric.md`, `directions-material.md`,
  `directions-retro.md`, `directions-product.md`, `palettes.md`, `typography.md`,
  `surfaces-and-shape.md`, `imagery-illustration-icons.md`, `motion-languages.md`,
  `environment-first-identity.md`, `product-derived-identity.md`, `neo-brutalist-products.md`,
  `soft-minimal-products.md`, `playful-products.md`, `justified-trends.md`,
  `design-system-grammar.md`, `design-system-selector.md`, `design-systems-index.md`,
  `design-systems-workspaces.md`, `design-systems-services.md`, `design-systems-culture.md`,
  `design-systems-learning.md`, `design-systems-operations.md`, `palette-themes.md`,
  `type-strategies.md`, `font-pairings.md`, `family-components.md`, `component-patterns.md`,
  `system-application-examples.md`, `niche-atlas-index.md` and the fifteen `niche-*.md` files,
  `third-party-notices.md`
