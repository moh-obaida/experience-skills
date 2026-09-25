<!-- GENERATED FROM shared/design-intelligence/directions-structural.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Directions: Structural Family

Directions defined by an explicit structural logic: grids, modules, posters, exposed construction.

---

## Swiss / grid-rationalist

**Philosophy:** order is the aesthetic; a visible grid and objective sans typography make
information feel trustworthy.

| Aspect | Tendency |
|---|---|
| Suits | Design tools, institutions, transport, data, portfolios, documentation |
| Unsuitable | Playful consumer products, children's products |
| Composition | Strict multi-column grid, asymmetric placement, flush-left type, generous but measured margins |
| Typography | Neo-grotesque or grotesque sans; strong size steps; numerals aligned |
| Surface & shape | Flat, square or small radii, rules instead of boxes |
| Imagery | Photography cropped to the grid; diagrams |
| Palette | Monochrome plus one strong primary (red, blue, yellow) |
| Motion | Minimal, linear, precise |
| Interaction | Conventional; precise alignment of controls |
| Accessibility | Good by default if contrast is respected |

**Fails when:** the grid is decorative (visible lines) without organizing anything. **Slop risk:**
"black and white with a grid" without typographic precision reads as generic devtool. **Precedent:**
Vercel (VC1). **Adapt:** use the grid to relate content to the viewport, not to draw lines.

## Modular

**Philosophy:** a small set of repeatable modules with clear rules lets a platform hold many
content types consistently.

| Aspect | Tendency |
|---|---|
| Suits | Platforms, marketplaces, media hubs, dashboards with many widget types |
| Unsuitable | Single-story pages |
| Composition | Grid of modules whose size encodes importance |
| Typography | One family with clear roles |
| Surface & shape | Consistent module shells |
| Imagery | Per-module, normalized crops |
| Palette | Neutral base, category or state colors |
| Motion | Module-level transitions |
| Interaction | Modules are consistent in where actions live |
| Accessibility | Reading order across modules must be logical |

**Fails when:** module size is arbitrary (bento by default). **Precedent:** Coursera columns (CO1),
Steam store (ST2). **Adapt:** size by importance; show real content in each module.

## Poster / high-contrast

**Philosophy:** one statement, huge, on flat color; the page is a poster.

| Aspect | Tendency |
|---|---|
| Suits | Launches, events, campaigns, manifestos |
| Unsuitable | Long tasks, dense reading |
| Composition | Single dominant type block, minimal secondary elements |
| Typography | Very large condensed or heavy display |
| Surface & shape | Flat fields |
| Imagery | Optional; type is the image |
| Palette | Two or three flat colors, high contrast |
| Motion | A single entrance or none |
| Interaction | One action |
| Accessibility | Large type helps; check color combinations for contrast |

**Fails when:** used for pages that must be scanned or used repeatedly. **Precedent:** Patagonia
"Vote Big" (PA1), Wise display type (W4). **Adapt:** poster moment above, usable content below.

## Brutalist

**Philosophy:** show the construction; default HTML, visible structure, no polish as a statement of
honesty.

| Aspect | Tendency |
|---|---|
| Suits | Artist and studio sites, zines, experimental projects, some developer culture |
| Unsuitable | Mass-market products where polish signals trust |
| Composition | Document flow, raw lists, visible borders |
| Typography | System fonts, mono, default sizes |
| Surface & shape | Hard edges, raw borders, no shadows |
| Imagery | Unprocessed, often small |
| Palette | Default link blue, black, white, one clash |
| Motion | None or deliberately crude |
| Interaction | Native controls |
| Accessibility | Native controls help; watch contrast and focus |

**Fails when:** used to seem edgy on a product whose users need reassurance. **Slop risk:**
"brutalism" as the default cure for SaaS clichés. **Precedent:** Hacker News as utilitarian cousin
(HN1). **Adapt:** honesty of structure, not intentional hostility.

## Neo-brutalist

**Philosophy:** brutalist structure made friendly: thick outlines, hard offset shadows, flat
saturated fills.

| Aspect | Tendency |
|---|---|
| Suits | Youth brands, creative tools, playful SaaS, indie products |
| Unsuitable | Healthcare, finance, government |
| Composition | Chunky cards and buttons with outlines, stacked blocks |
| Typography | Bold grotesk or geometric sans |
| Surface & shape | 2–3 px black borders, hard shadows, small radii |
| Imagery | Stickers, flat illustration |
| Palette | Saturated flat colors on off-white |
| Motion | Snappy offsets on press |
| Interaction | Buttons are very obviously buttons |
| Accessibility | Strong edges help; saturated backgrounds may fail text contrast |

**Fails when:** every element gets the heavy treatment and hierarchy disappears. **Slop risk:**
now a common template look in its own right. **Adapt:** reserve the heavy treatment for primary
actions and key objects. **Precedent depth:** load `neo-brutalist-products.md` before choosing this
direction. NBR1, NBR2 are style-gallery evidence, not independent product precedents; NBR3, NBR4,
NBR5, NBR6, NBR7
are the product/surface observations that justify the transfer. Use the direction only when the
product can carry an expressive environment while keeping creation, search, fields, status, and
publishing controls conventional and high-contrast. On narrow screens, collapse stacked blocks into
one clear reading/action order and remove decorative shadow layers before shrinking target sizes.
For dense or error states, keep borders and fills semantic rather than applying the same heavy shell
to every row; test focus, forced colors, RTL order, and long labels. If the product is trusted,
regulated, or precision-critical, this row is usually a wrong-context warning, not permission to
add black borders and saturated cards.
### Family checks

Responsive behavior reflows explicit structure instead of preserving decorative borders at tiny
widths. Accessibility and RTL require target size, focus visibility, readable contrast, and logical
order. AI failure: thick borders, hard shadows, and saturated color as a new template. Use visible
structure only when it clarifies the product's real hierarchy.
