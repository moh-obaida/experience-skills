# Page Archetypes

Classify the surface before judging it. Density, identity, composition, and motion
expectations differ by archetype. A judgment that is right for one archetype is often wrong
for another.

A single product has many archetypes: a game has a focused join screen, an experiential play
screen, and a live-control host console. Classify the *surface*, not the company.

| Archetype | Purpose | Typical examples | Density | Identity budget | Composition priority |
|---|---|---|---|---|---|
| FOCUSED | One task, one decision | Sign-in, join code, verification, single-field lookup, simple form | Low by design | Environment medium–high, controls plain | Frame the single task; avoid a lonely centered card on a dead page |
| OPERATIONAL | Manage ongoing things | Dashboard home, library, admin, inbox, project list | Medium–high | Low–medium | Real state and next actions above the fold |
| EXPERIENTIAL | Being in the product is the value | Game play, creative canvas, immersive learning, onboarding story | Varies | High | Atmosphere, focal drama, event moments |
| CONTENT | Reading and understanding | Docs, editorial, help center, long-form | Medium | Medium, expressed in type | Reading hierarchy, measure, navigation |
| DATA-HEAVY | Monitoring and analysis | Analytics, observability, trading, logistics | High | Low | Change, exception, and comparison first |
| TRANSACTIONAL | Committing to an outcome | Checkout, publish, delete, payment, approval, submit application | Low–medium | Low at the commit point | Clarity of consequence; one primary action |
| DISCOVERY | Finding among many | Catalog, search results, browse, marketplace | High | Medium–high around content | Scannability, filtering, comparison |
| CREATION | Making something | Editor, builder, design tool, composer | High (tools), variable (canvas) | Low in chrome, content is the star | Canvas priority, tool proximity |
| LIVE CONTROL | Operating something in real time | Game host console, broadcast controller, incident console, classroom presenter | Medium–high | Medium | State visibility, glanceability, mistake prevention |

## Archetype-specific traps

**FOCUSED**
- Trap: centered-card syndrome. A small card on a large blank page, called "clean."
- Trap: over-designing the single control because it is the only thing present.
- Better: invest in the environment around the task; keep the control conventional.

**OPERATIONAL**
- Trap: welcome banner plus three big buttons plus empty space.
- Trap: filling with fake KPI cards.
- Better: "continue where you left off," recent items, items needing attention, quick actions.

**EXPERIENTIAL**
- Trap: using operational UI patterns (tables, cards, forms) for an experience that should feel alive.
- Trap: motion soup instead of event-driven moments.
- Better: a distinct world; motion tied to events; clear state for participants.

**CONTENT**
- Trap: turning prose into cards, bullets, and callouts.
- Trap: line lengths far beyond comfortable reading.
- Better: editorial hierarchy (headline, deck, body, pull-outs, images, navigation).

**DATA-HEAVY**
- Trap: twelve KPI cards because "dashboard = cards."
- Trap: decorative charts that do not answer a question.
- Better: what changed, why, and what needs action; tables and charts chosen for the question.

**TRANSACTIONAL**
- Trap: merchandising, promotions, or upsells between the user and the commit action.
- Trap: removing a confirmation step that protects money or irreversible data.
- Better: clear consequence summary, one primary action, strong final confirmation only where warranted.

**DISCOVERY**
- Trap: giant command-bar search on a list of twelve items.
- Trap: filters that hide the result count or reset on navigation.
- Better: fast scanning, persistent filters, visible counts, good empty results.

**CREATION**
- Trap: chrome competing with the canvas.
- Trap: modal dialogs for properties that could be edited in place.
- Better: direct manipulation, contextual controls, keyboard power.

**LIVE CONTROL**
- Trap: controls that make the operator re-specify context the system already knows.
- Trap: status buried or ambiguous during real-time events.
- Better: a state header ("Team A is answering"), scoped actions, big safe targets, undo.

## Mixed surfaces

Many surfaces combine archetypes (a product page is DISCOVERY above the fold and
TRANSACTIONAL at the buy box). Name the dominant archetype per region, and apply its
expectations locally.
