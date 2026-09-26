<!-- GENERATED FROM shared/design-intelligence/directions-technical.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Directions: Technical Family

Directions for precise, information-rich, expert contexts.

---

## Technical / monochrome technical

**Philosophy:** precision and legibility for technical audiences; mono accents signal "exact."

| Aspect | Tendency |
|---|---|
| Suits | Developer tools, infrastructure, APIs, security products |
| Unsuitable | Lifestyle consumer, children |
| Composition | Grids, diagrams, product-first heroes, docs-like structure |
| Typography | Neutral sans with a mono for code, numbers, labels |
| Surface & shape | Hairlines, small radii, dark or light neutral |
| Imagery | Diagrams, real UI, code |
| Palette | Technical monochrome with one signal accent |
| Motion | Precise, short |
| Interaction | Keyboard, copy buttons, shortcuts shown |
| Accessibility | Dark themes need contrast care; mono text at small sizes can be hard to read |

**Fails when:** it is used as a default dark aesthetic with no technical content. **Slop risk:**
very high (dark monochrome devtool is a model default). **Precedent:** Vercel (VC1), Cursor (CU1),
Linear docs (LD1). **Adapt:** earn it with real technical content; find one product-derived carrier.

## Developer-native

**Philosophy:** respect the conventions developers already live in: terminals, code, docs, CLIs.

| Aspect | Tendency |
|---|---|
| Suits | CLIs, SDKs, API products, developer platforms |
| Unsuitable | Non-technical audiences |
| Composition | Docs-like, code-and-preview, component playgrounds |
| Typography | Mono for commands and code; readable sans for prose |
| Surface & shape | Terminal-like panels used for real code only |
| Imagery | Real commands, real output |
| Palette | Syntax-derived accents |
| Motion | Typing effects only when showing a real sequence |
| Interaction | Copy-to-clipboard, versioned docs, runnable examples |
| Accessibility | Code blocks must scroll, not overflow; contrast of syntax colors |

**Fails when:** fake terminal windows decorate marketing with invented commands. **Precedent:** MDN
"Try it" (MD3), Stripe Docs utilities (SD3). **Adapt:** every code sample must be real and runnable.

## Documentation-oriented

**Philosophy:** navigable reference; readers jump, scan, and return.

| Aspect | Tendency |
|---|---|
| Suits | Docs, help centers, knowledge bases |
| Unsuitable | Marketing heroes |
| Composition | Left nav tree, content column, on-page table of contents |
| Typography | Readable text face, code styling, clear heading levels |
| Surface & shape | Callouts with meaning (warning, note), not decoration |
| Imagery | Diagrams and annotated screenshots |
| Palette | Neutral with link and callout roles |
| Motion | None |
| Interaction | Search with shortcuts, path selectors (tabs), copy buttons |
| Accessibility | Heading order, keyboard navigation of trees |

**Precedent:** MDN (MD1–MD4), Stripe Docs (SD1–SD4), Linear Docs (LD1, LD2). **Adapt:** same page
anatomy everywhere; branch by reader path in place.

## Data-dense / command center

**Philosophy:** maximum information per glance for people who monitor and act.

| Aspect | Tendency |
|---|---|
| Suits | Monitoring, trading, logistics operations, incident response, broadcast control |
| Unsuitable | First-time consumers, marketing |
| Composition | Command center, dashboard action-first, data investigation |
| Typography | Compact sans, tabular numerals, clear number hierarchy |
| Surface & shape | Panels with minimal chrome; rules over cards |
| Imagery | Charts, maps, status indicators |
| Palette | Data-heavy family; state colors reserved for state |
| Motion | Change highlights, no decoration |
| Interaction | Keyboard, filters, drill-down, alert acknowledgement |
| Accessibility | Never color-only status; zoom and reflow are hard; test |

**Precedent:** GitHub Actions (GA1), Bloomberg ticker (BL1), TradingView (TV1), Datadog (DD2),
Flightradar24 (FDR1–FDR4): the map itself is the entire product, with no dashboard frame around it
(FDR1), hundreds of live objects encode both position and heading through icon rotation alone
(FDR2), and the few controls that exist recede into a low-contrast floating bar until touched (FDR3)
— maximum information density lives in the canvas, not in surrounding chrome. **Adapt:** start from
"what needs action" (see the KPI-card example); Flightradar24 also shows that promotional or
secondary content (FDR4) must be visually separated from the credibility-coded live data, not
blended into the same card language.

## Sci-fi control system

**Philosophy:** the UI is diegetic equipment from a fictional world.

| Aspect | Tendency |
|---|---|
| Suits | Games, simulations, space and sci-fi brands, entertainment |
| Unsuitable | Real operations where legibility is safety |
| Composition | Panels, HUD overlays, radial and bracketed frames |
| Typography | Technical display faces, mono |
| Surface & shape | Glowing lines, chamfered corners |
| Imagery | Schematics, scanlines |
| Palette | Dark with luminous accents |
| Motion | Boot sequences, scanning, blinking status |
| Interaction | Must still use clear, large targets |
| Accessibility | Glow and thin lines reduce legibility; flashing limits apply |

**Fails when:** borrowed for real dashboards. **Adapt:** use in the fiction layer, keep operational
panels legible.
**Precedent:** Flightradar24 (FDR1–FDR4) serves as a counterexample: a real, high-stakes live-tracking surface (hundreds
of simultaneous aircraft, genuinely safety-adjacent data) that a designer might expect to reach for
sci-fi HUD styling, instead renders aircraft as small heading-oriented icons directly on a muted,
realistic map with no glow, scanlines, or bracketed frames (FDR2), and keeps its few controls in a
low-contrast floating bar that recedes until touched (FDR3) — real operational legibility wins over
the diegetic-equipment look every time stakes are genuine. **Adapt:** when a product's control
surface is doing real work rather than telling a story, prefer Flightradar24's restraint (realistic
rendering, controls that recede) over this direction's fictional-equipment vocabulary; reserve the
sci-fi language for products whose actual content is a game, simulation, or entertainment property.

## Industrial

**Philosophy:** equipment aesthetics: labels, stencils, heavy type, hard materials.

| Aspect | Tendency |
|---|---|
| Suits | Manufacturing, logistics, hardware, tools, outdoor equipment |
| Unsuitable | Soft consumer, wellness |
| Composition | Modular panels, labeled regions |
| Typography | Condensed sans, stencil or mono labels |
| Surface & shape | Metal, concrete, safety colors used meaningfully |
| Imagery | Real equipment photography |
| Palette | Industrial family: neutrals with safety yellow/orange for real warnings |
| Motion | Mechanical, stepped |
| Interaction | Big targets, glove-friendly on field devices |
| Accessibility | Safety colors must also be labeled |

**Fails when:** safety colors are used as decoration. **Adapt:** borrow labeling and legibility, not grime.
**Precedent:** Caterpillar (CAT1–CAT4): the brand's real-world equipment yellow is reserved for the
search button and the primary CTA fill against a pure black header (CAT1) — the color reads as
"the brand" because it is the exact color on the physical machines, not an arbitrary accent choice.
Utility actions a buyer needs first (dealer locator, sign-in) sit in a strip above content
navigation (CAT2), ahead of browsing — matching what an equipment buyer actually needs before they
need a product catalog. The hero uses documentary photography of a real worker in branded gear
(CAT3), and a floating assistant affordance stays visually subordinate to the primary CTA rather
than competing with it (CAT4). **Adapt:** when a product has a real-world physical or brand color
(safety equipment, a uniform, a physical product line), reserving it for exactly the interface's
primary action carries more identity than an arbitrary "brand blue" ever will.
### Family checks

Responsive behavior prioritizes status, safe actions, and real-time context over decorative chrome.
Accessibility and RTL require labeled icon controls, non-color status, readable numerals, and touch
fallbacks. AI failure: dark monochrome, glowing data, or fake terminal windows without technical
content. Technical identity must be earned by the product's mechanics.
