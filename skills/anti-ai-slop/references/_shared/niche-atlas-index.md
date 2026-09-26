<!-- GENERATED FROM shared/design-intelligence/niche-atlas-index.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Niche Design Atlas: Index

The atlas answers **what kind of product is this?** before the selector asks **what should it look
like?** Each niche file describes product realities (jobs, density, surfaces, states, interaction,
trust, typical generated-UI failures) and offers ten authored design systems adapted to those
realities. It is not an industry-to-style lookup. A niche narrows the candidate pool; the user job,
density, state complexity, audience, and existing brand decide. A niche never selects a system by
itself.

The systems are original, deliberately constructed starting points authored with AI assistance and
critiqued against the tests below. They are not observations of real products, not copies of any
product, and not production brands. Hex values, sizes, and fonts are starting roles to validate on
real content.

## Procedure

```text
IDENTIFY NICHE → UNDERSTAND USER JOB → UNDERSTAND STATE AND DENSITY → LOAD NICHE FILE
→ SELECT 3 CANDIDATES THAT DIFFER STRUCTURALLY → COMPARE → CHOOSE → ADAPT → IMPLEMENT
```

1. **Identify the niche.** Find the product's primary niche profile in the table below. Record a
   secondary niche only if it owns a real surface or state (a leaderboard, a checkout, a lesson).
2. **Read the profile, not only the systems.** The realities and failure modes change what you must
   design (reconnection in games, pending vs posted in finance, stale data in monitoring).
3. **Nominate three.** Pick three systems whose fingerprints differ in at least four dimensions.
   Three systems that differ only in palette or type are one candidate. You may nominate one system
   from the general library (`design-systems-index.md`) or from another niche file when the product
   straddles niches.
4. **Compare and choose** with the table in `design-system-selector.md`. Record why the other two lose.
5. **Adapt one layer at a time** (composition, type, palette, geometry) and restate the thesis. An
   adaptation that reverses the thesis is a new system: run the critique stage on it.

**Cross-niche products.** Establish one primary identity. Example: a terminal-learning product is
technical education (primary) + developer tool + interactive learning + light gamification. Choose
from the developer or education file by the primary job (learning to use a terminal → education's
lesson structure with developer-grade type and output fidelity). Secondary niches contribute
realities and at most one layer (the game niche's progression states, not its HUD). Do not make the
result every niche at once.

## Taxonomy

| Group | File | Niche profiles (sub-niches covered) |
|---|---|---|
| Business & productivity | `niche-business.md` | horizontal SaaS, enterprise, admin tools, office suites · CRM and pipelines · project and task management, collaboration · team communication · scheduling and calendar · knowledge management and documents · workflow automation |
| Developer & technical | `niche-developer.md` | developer tools, IDEs, code editors · terminal products and CLIs · cloud, DevOps, observability, monitoring · databases and API tools · cybersecurity and networking · technical education · AI developer tools |
| AI products | `niche-ai.md` | assistants and agents · AI workspaces and research agents · coding agents · generative media · automation agents · AI search · AI writing · AI learning |
| Games | `niche-games.md` | competitive and online multiplayer · casual, party, and social games · strategy and simulation · RPG and sandbox · browser games · educational games · launchers and companion apps |
| Education | `niche-education.md` | LMS, course, and certification platforms · interactive and technical learning · language learning · children's education · higher education and classroom tools · assessment, tutoring, and study tools |
| Commerce | `niche-commerce.md` | general ecommerce and electronics · marketplaces, resale, and auctions · luxury and fashion · groceries and local commerce · handmade, craft, and collectibles · subscriptions · B2B commerce |
| Finance | `niche-finance.md` | consumer banking · business banking, payments, invoicing, expenses, accounting · investing, trading, crypto · insurance |
| Media | `niche-media.md` | streaming video · music and podcasts · news, magazines, publishing · creator platforms · photography, galleries, portfolios · entertainment databases |
| Social | `niche-social.md` | social networks and feeds · communities and forums · messaging and group chat · dating · professional networks · multiplayer social products |
| Health & wellness | `niche-health.md` | healthcare portals and patient tools · appointment systems · clinical software · fitness · meditation and wellness · nutrition |
| Public & institutional | `niche-public.md` | government and municipal services · universities and education institutions · libraries and museums · public information · nonprofit · civic participation |
| Travel & hospitality | `niche-travel.md` | travel booking and airlines · hotels and vacation rentals · restaurants and reservations · tourism, maps, and itineraries |
| Physical-world operations | `niche-physical.md` | booking systems, local services, workshops · events and ticketing · logistics, delivery, transportation, fleet · warehouse and inventory · point of sale |
| Creative software | `niche-creative.md` | design tools · video and photo editors · music software · 3D and animation · authoring tools and no-code builders |
| Personal products | `niche-personal.md` | personal finance · journaling and notes · habits · personal organization and family tools · smart home · lifestyle |

A sub-niche shares its group's ten systems when its realities overlap; each system's **Fit** line
names the sub-niches it serves. If a product's profile is missing, use the nearest profile's
questions (jobs, density, states, trust) and derive a system with the critique stage below.

## System entry contract

Every system opens with a thesis paragraph (emotional character, audience, fit), a fingerprint, and
a layer table with these rows: Composition, Type, Color, Space and shape, Icons and imagery,
Components, States, Responsive, Motion, Accessibility, Build, AI mutation, Fails when. Rows are
decisions, not a uniform template: a system may say "none" for imagery or motion when that is the
decision. Color rows give seven roles (`canvas`, `surface`, `ink`, `muted`, `line`, `action`,
`on-action`) whose text pairs meet 4.5:1; validation computes them.

## Fingerprint vocabulary

Every system carries a fingerprint so duplicates are caught mechanically. Use only these values
(tone is free text, one or two hyphenated words).

| Dimension | Values |
|---|---|
| density | sparse, medium, dense, variable |
| composition | master-detail, canvas-perimeter, stream, board, timeline, ledger, document, catalog-grid, stage, map-led, stepwise, hub, split-pane, index, poster, conversation, command-first, instrument-grid, object-sheet, path, calendar-grid, spatial-scene |
| surface | flat-bordered, flat-ruled, layered-panels, paper-sheet, full-bleed, tonal-blocks, elevated-cards, material-texture, heavy-outline, translucent-overlay |
| type | technical-sans, humanist-sans, grotesque, editorial-serif, slab, rounded-sans, condensed-display, mono-led, institutional-sans, high-contrast-display, handmade-display, serif-sans-duet, pixel-bitmap |
| nav | persistent-sidebar, top-bar, tab-bar, command-palette, contextual, hub-and-spoke, stepwise, spatial, in-content, hud, rail |
| accent | none, low, medium, high, multi-role |
| motion | none, restrained-causal, physical-direct, choreographed, ambient-world, event-celebration |
| imagery | none, diagram, photography, illustration, product-object, user-content, cartography, data-graphic, texture, artwork |
| radius | square, low, medium, high, semantic-mixed |
| data | none, light, moderate, strong |
| tone | free text |

## Difference test

Two systems are different only if they differ structurally. Changing color, font, radius, shadow,
or adding dark mode does not count by itself. Within one niche file, every pair of fingerprints must
differ in at least four of the eleven dimensions; across niche files, no two systems may share more
than nine (validation enforces both). Passing the count is necessary, not sufficient: also compare
information organization, focal strategy, interaction character, and content presentation. If two
systems differ mostly in color or naming, merge them.

## Critique stage

Apply before accepting an authored or derived system, and again after adapting one:

1. Does it resemble generic generated UI (indigo/violet accent, glass cards, 16–24px radius on
   everything, centered hero with two CTAs, KPI-card grid)?
2. Does it resemble one famous product closely enough to read as a copy?
3. Is there a thesis a designer could disagree with, and do its parts serve it?
4. Would its identity survive without a logo?
5. Is it distinct from its siblings under the difference test?
6. Does it survive real states: empty, dense, error, long content, slow network?
7. Does it handle mobile, dense content, and empty content without changing character?
8. Could an engineer implement it consistently from the entry alone?

Any "no" (or "yes" for 1–2) → redesign or reject. Record the answer in the selected-system artifact.

## Where the atlas is wrong

- Niche realities are generalizations; the product's own analytics, research, and support logs
  outrank them.
- Systems were authored, not observed in use. Treat them like a senior designer's proposals and
  verify in rendered states.
- Font names are open-licensed recommendations at authoring time; check license, glyph coverage
  (Arabic and other scripts), and loading cost in the project. Each Type row also names a system
  fallback stack.
- An existing, working brand outranks every entry. Use the atlas to extend it, not replace it.
