# Slop Taxonomy: Structure, Motion, and Personality

Load when the sweep finds hero, dashboard, bento, empty-space, motion, or generated-personality
slop. These are structural; replacements often change composition, so compare three alternatives
(`references/_shared/anti-generic-alternatives.md`, `references/_shared/compositions-index.md`)
and hand to composition-repair when the change spans the page.

## Hero slop

- **Detect the default stack:** badge → giant centered headline → generic paragraph → two CTAs →
  floating dashboard mockup → logo strip → three feature cards.
- **Ask:** does each layer earn itself for this product? Is the product visible in the first
  viewport? Would the stack fit twenty unrelated products?
- **Keep when:** a launch or campaign page where the headline is specific, the visual is the real
  product, and proof is real; even then remove the layers that do nothing.
- **Trace:** landing page and section components; template origin.
- **Alternatives (choose by niche and ledger):** product-first (live widget or real UI above the
  fold) · object-first (the physical product large) · editorial (headline and text as the design) ·
  split narrative (claim beside proof) · interactive demo · use-case-led (pick your situation) ·
  content-led (latest real content) · image-led (photography carries it) · sequential (numbered
  steps of the real workflow) · tool-first (the tool is the homepage) · immediate application (start
  now, no hero) · immersive (world or scene) · dense factual (datasheet) · poster-like (event or
  cause).

## Dashboard slop

- **Detect:** four KPI cards + a chart + recent activity + quick actions, when the product context
  does not justify them; fake or unactionable metrics; charts for visual interest; activity nobody
  needs; empty dashboards padded with widgets; cards that are just links; redundant shortcuts.
- **Ask:** what does the user come here to decide or do? Which number changes an action?
- **Keep when:** monitoring or analytics products where the metrics drive decisions and have
  comparisons, targets, and time context.
- **Trace:** dashboard page composition, widget components, seeded demo data.
- **Replace with:** the user's actual jobs first (what needs action, what changed, continue work) ·
  exceptions list with owners (operational) · the primary object list (records, projects) · a
  real empty state with the next action · one chart that answers a named question.

## Bento slop

- **Detect:** arbitrary grids of different-sized cards added to look contemporary.
- **Ask:** does size represent importance? Does adjacency communicate a relationship? Does the layout
  survive dynamic content? Does mobile preserve hierarchy?
- **Keep when:** a curated showcase where sizes rank content and each tile is real product proof.
- **Trace:** feature sections, homepage grids.
- **Replace with:** a ranked list with one deep feature · a sticky feature stack with proof beside
  it · a diagram of how the parts connect · a comparison table.

## Empty-space slop

- **Detect both extremes:** fake-premium whitespace (large unused areas called "clean") and filler
  density (tips, stats, promos, illustrations inserted because the page looked empty).
- **Ask:** what should actually occupy this space? Sometimes nothing (shrink the container).
  Sometimes useful product state. Sometimes the environment.
- **Keep when:** space has a job: focus on a single task, pacing in editorial, presenting an object.
- **Trace:** container max-widths, section padding tokens, filler components.
- **Replace with:** tighter container and larger focal object · real state or recent work · an
  environment derived from the product (playful, immersive, material) · nothing.

## Motion slop

- **Detect:** fade-up on every section; staggered everything; hover lift on every card; button
  glow; looping blobs; parallax without reason; animated gradients; cursor-follow effects; spring
  animation on ordinary controls; repeated micro-bounces; scroll-triggered reveals everywhere.
- **Source signatures:** framer-motion `initial={{ opacity: 0, y: 20 }} whileInView`, AOS
  `data-aos`, `animate-pulse` or `animate-bounce` on decoration, `hover:-translate-y-1
  hover:shadow-xl`, `transition-all`.
- **Ask:** which real events exist (arrival, change, completion, error, transfer)? Does this motion
  explain one?
- **Keep when:** motion explains an event or state change, belongs to an immersive world, or
  confirms direct manipulation; always with reduced-motion handling.
- **Trace:** animation wrappers, section components, global CSS keyframes.
- **Replace with:** motion tied to events and state (motion-design owns the spec) · a single
  meaningful entrance where orientation matters · stillness.

## Generated-personality slop

- **Detect attempts to make generic UI "unique":** random gradients, quirky copy, weird cursors,
  giant emojis, mascots everywhere, decorative stickers, arbitrary illustrations, random serif
  headings, unusual interactions for their own sake.
- **Ask:** is the personality coherent across surfaces and derived from the product, or sprinkled on
  a generic base?
- **Keep when:** the playfulness is the product's established voice and consistent (a children's
  product, a game, a brand with a mascot used with rules).
- **Trace:** scattered one-off components and assets.
- **Replace with:** a coherent system: one or two carriers from the ledger applied consistently
  (environment, type voice, product-derived motif), with controls kept conventional. Real identity
  comes from decisions that belong together, not from quirks.
