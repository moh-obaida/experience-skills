# Slop Taxonomy: Surfaces and Treatments

Load when the sweep finds decorative, gradient, glass, card, pill, radius, shadow, fake-depth,
dark-mode, or component-library slop. Each class lists what to detect in the render, what it looks
like in source, when to keep it, where to trace it, and replacements keyed to the identity ledger.
Replacements are options to choose between by the ledger, never a house style.

Identity keys used below: **operational** (dense tools), **editorial** (type-led), **playful**
(expressive, games, children), **material** (craft, physical goods), **technical** (developer,
data), **immersive** (games, media, worlds), **institutional** (public, health, finance),
**object** (luxury, commerce of things).

## Decorative slop

- **Detect:** floating blurred blobs, glowing orbs, random circles and rings, decorative waves,
  sparkles and fake stars, grid or dot-matrix backgrounds with no relation to content, decorative
  lines and pseudo-technical diagrams, abstract 3D shapes, giant background words, noise texture
  over everything, gradients filling blank areas.
- **Source signatures:** absolutely positioned `div`s with `blur-3xl`, `rounded-full`, `opacity-20`
  to `opacity-50`, `-z-10`; SVG backgrounds named `grid`, `dots`, `beams`, `meteors`, `spotlight`;
  `bg-[radial-gradient(...)]`; `mix-blend-*` on decoration; Lottie files unrelated to product.
- **Ask:** does it communicate identity, hierarchy, environment, or product meaning? Would anyone
  miss it if it were gone?
- **Keep when:** it is a product-derived motif (a board game's hex grid, a map's contour lines, a
  workshop's material texture), environment for a focused page, or the world of a game.
- **Trace:** hero/section wrapper components, a `Background` or `Decor` component, global CSS.
- **Replace with:** nothing (tighten the container) · the product itself at scale · real
  photography of the product's world (material, object) · a motif drawn from the domain
  (playful, immersive) · typography carrying the section (editorial) · real data or state
  (operational, technical).

## Gradient slop

- **Detect:** purple-blue or cyan-violet gradients, gradient CTAs, gradient headings and rainbow
  text, luminous blobs behind cards, gradients masking weak composition.
- **Source signatures:** `bg-gradient-to-r from-purple-500 to-blue-500`, `from-indigo-500
  via-purple-500 to-pink-500`, `bg-clip-text text-transparent`, `linear-gradient(135deg, #667eea,
  #764ba2)`, `conic-gradient` borders.
- **Ask:** does the gradient encode something (light, time, depth, data, a brand's established
  signature) or brand energy that exists elsewhere in the product?
- **Keep when:** it is a documented brand signature, encodes data or physical light (sky, sunset,
  heat), marks an immersive world, or is a subtle scrim protecting text over imagery.
- **Trace:** button variants, heading components, theme tokens, hero sections.
- **Replace with:** the brand's solid action color from the ledger · type scale and weight for
  emphasis instead of gradient text · one product-derived color field used once (environment) ·
  photography or product imagery · if the gradient is the brand, keep one and remove the copies.

## Glass slop

- **Detect:** translucent cards everywhere, blur with nothing meaningful behind it, transparency
  harming contrast, glass nav over plain backgrounds, glowing translucent buttons, glass in glass.
- **Source signatures:** `bg-white/10 backdrop-blur-md border border-white/20`, `backdrop-filter:
  blur(`, `rgba(255,255,255,0.1)` surfaces.
- **Ask:** is there real content behind it that the user benefits from seeing (context
  preservation, media, a live world)?
- **Keep when:** overlays on media or 3D worlds, launchers over the user's context, spatial
  layering where depth order is meaningful; always with a solid fallback and ≥ 4.5:1 text.
- **Trace:** `Card`, `Navbar`, `Modal` components; utility clusters.
- **Replace with:** solid surfaces with value steps (operational, institutional) · paper or
  material surfaces (editorial, material) · full-bleed imagery with a proper scrim (immersive,
  object).

## Card slop

- **Detect:** everything in cards; card grids as the default layout; one sentence per card; card
  inside card; borders around content that alignment already groups; giant cards for tiny values;
  feature cards filling a page; pricing-card styling on unrelated content.
- **Source signatures:** `Card`/`CardHeader`/`CardContent` wrapping every section; `grid
  md:grid-cols-3 gap-6` of `rounded-xl border p-6 shadow-sm`; nested `.card .card`.
- **Ask:** is each card a real object the user acts on (a product, a file, a task, a draggable
  item)? Or is it a box around text?
- **Keep when:** the content is a set of comparable, actionable objects; cards are literal
  (flashcards, tickets, passes); drag and drop needs a handle.
- **Trace:** page templates and section components; the `Card` component default padding and
  shadow.
- **Replace with:** a list or table with aligned columns (operational, technical) · editorial
  sections with headings and rules (editorial, institutional) · one dominant object with supporting
  text (object) · inline facts in running text · spatial grouping by whitespace and alignment.

## Pill slop

- **Detect:** every button a pill; chips everywhere; headings inside badges; decorative status
  pills; tags with no filtering or meaning; capsules used as default containers.
- **Source signatures:** `rounded-full px-3 py-1 text-xs`, `Badge` wrapping headings, "✨ New"
  badges above heroes.
- **Ask:** is it a filter, a token, a tag the user can act on, a status, or a segmented choice?
- **Keep when:** compact filters, removable tokens, statuses with text, segmented controls, or a
  playful system where roundness is part of a coherent shape language.
- **Trace:** `Badge`, `Chip`, and button variant defaults.
- **Replace with:** plain text metadata · a label with a status icon · a real heading · the button
  shape family from the ledger.

## Radius slop

- **Detect:** `16px` or `24px` on everything; identical rounding on inputs, cards, images,
  sections; giant rounded containers; softness contradicting the rest of the identity.
- **Source signatures:** `rounded-2xl` or `rounded-3xl` repeated; one `--radius` used for all
  components; `border-radius: 24px` on sections.
- **Ask:** what radius does the ledger's shape language imply (logo, type, imagery)? Does radius
  differ by element kind?
- **Keep when:** the identity is genuinely soft and consistent (children's product, friendly
  consumer brand) and radius still varies by element role.
- **Trace:** theme radius token, component variants, utility classes.
- **Replace with:** a radius hierarchy derived from the ledger (for example controls 4px, surfaces
  8px, media 0px; or controls 12px and surfaces 20px for a soft brand) · square for editorial,
  institutional, technical · semantic radius (shape encodes kind).

## Shadow slop

- **Detect:** floating cards without hierarchy; diffuse shadows everywhere; glowing colored
  shadows; arbitrary elevation; shadow plus border plus background all separating the same thing.
- **Source signatures:** `shadow-xl`, `shadow-2xl`, `shadow-[0_0_40px_rgba(124,58,237,0.5)]`,
  stacked `box-shadow` lists on static cards.
- **Ask:** does elevation mean "above" (menus, dialogs, dragged objects)?
- **Keep when:** overlays, draggable objects, literal objects (passes, flashcards), or a
  material/skeuomorphic identity.
- **Trace:** card and button defaults; hover styles.
- **Replace with:** one separation cue (tone or line, not both plus shadow) · elevation reserved
  for overlays · offset solid shadows only where a playful identity already uses them.

## Fake depth slop

- **Detect:** pointless 3D tilt cards, perspective transforms, layered floating panels, fake browser
  windows and device mockups around screenshots, tilted screenshots.
- **Source signatures:** `perspective`, `rotateX`, `transform-style: preserve-3d`, mockup frame
  components with traffic-light dots, `Tilt` libraries.
- **Ask:** does depth tell a story (a real product sequence, a physical object)?
- **Keep when:** showing a physical product, an immersive world, or a sequence where layering
  explains order.
- **Trace:** hero and showcase components.
- **Replace with:** the real product UI at 1:1, cropped to the relevant region, with a caption ·
  a short real recording · an interactive demo (technical, operational).

## Dark-mode slop

- **Detect:** `#09090b` (or near-black) + purple accent + blur + glowing borders used as automatic
  "developer" or "AI" identity; dark theme with no surface hierarchy; pure black with pure white text
  causing glare.
- **Source signatures:** `bg-zinc-950`, `bg-black`, `border-white/10`, violet accents, glow shadows.
- **Ask:** is dark mode a user preference, a context need (night, media, operations), or a costume?
- **Keep when:** media and immersive products, on-call or low-light tools, a user-selected theme,
  or an established dark brand.
- **Trace:** root theme, `dark` class defaults, layout wrappers.
- **Replace with:** a real dark surface hierarchy (canvas, surface, raised, line) with roles remapped
  deliberately · a light default with dark as a preference · a warm or neutral dark that fits the
  ledger rather than purple-black.

## Component-library slop

- **Detect:** the interface looks like raw shadcn, Material, Bootstrap, Tailwind UI, Chakra, Ant,
  Mantine, or another kit: default radius, colors, type, spacing, and example-page compositions.
- **Source signatures:** library default tokens (see identity-extraction fingerprints), example
  layouts copied intact (dashboard-01, "Sign in to your account" card).
- **Ask:** has the library been transformed into this product's language (tokens, density,
  composition, content, states), or only installed?
- **Keep when:** the accessible primitives (dialogs, menus, focus handling). Never replace working
  accessible behavior with custom widgets to look different.
- **Trace:** theme configuration, token files, copied example pages.
- **Replace with:** product tokens mapped onto library variables (color roles, radius hierarchy,
  type scale, control heights, density) · route compositions chosen for each job · real content and
  states · keep primitives, change the language.
