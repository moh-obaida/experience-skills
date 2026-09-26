# Observations: Wellness, Control Surfaces, Tactile, Futuristic, and Play

Dated observations of real, public product surfaces made for Experience Skills. Each bullet has a
stable ID that design-intelligence modules cite. Observations describe what was seen;
interpretation lives in the design-intelligence library. This batch targets directions that had
zero item-addressable precedent in the 2026-09-25 coverage report: Calm health/wellness, Sci-fi
control system (by counterexample and adjacent evidence), Tactile, Futuristic, and Pixel/arcade.

**Method codes:** R = the live page was opened in a browser and looked at (desktop viewport about
800×600 CSS px unless noted). R+JS = computed styles (including transition/animation properties)
were read directly from the DOM via an in-page script. Sites change; treat every observation as true
on its date only. No screenshots are stored in this repository.

## Headspace — homepage (https://www.headspace.com/) — R, 2026-09-26
- HS1 The hero splits into two large, equally weighted soft cream cards side by side: a consumer meditation app ("Mental health app with expert-led meditations") and a clinical track ("Online therapy that accepts insurance") — the same visual language serves both a casual wellness audience and an insurance-driven clinical one, rather than segregating them into different sites.
- HS2 Each card's call to action is a solid black pill button ("Try for $0", "Check your coverage") — the one high-contrast, hard-edged element against an otherwise soft, warm, rounded environment; contrast is spent on the action, not on the atmosphere.
- HS3 Illustrated phone mockups inside the cards show real product UI (a meditation session titled "Managing Anxiety," a sleep track "Drift Off at Denali") rather than abstract app-icon collages — the marketing page previews actual screens, not a generic device mockup.
- HS4 A warm coral/orange sun-like character motif appears as a small illustrated accent (not a mascot performing actions) beside the phone mockup, functioning as brand identity rather than as a guide or assistant character.

## Headspace — homepage, computed motion tokens (https://www.headspace.com/) — R+JS, 2026-09-26
- HS5 The primary CTA button's computed transition is `150ms cubic-bezier(0.32, 0.94, 0.6, 1)` applied simultaneously to color, background-color, border-color, box-shadow, and transform — a single fast, soft-decelerating curve covers every hover/press property at once rather than separate timings per property.

## Flightradar24 — live map, Gulf region (https://www.flightradar24.com/) — R, 2026-09-26
- FDR1 The entire viewport below a minimal top bar (logo, search, hamburger menu, login icon) is a full-bleed real-time map; there is no dashboard chrome, sidebar list, or KPI strip framing it — the map itself is the product.
- FDR2 Live aircraft are rendered as small icons rotated to match each flight's actual heading, directly on the geographic map, at a density of hundreds of simultaneous objects in a busy region — position and orientation together carry the information, with no separate list needed to understand direction of travel.
- FDR3 Primary controls (Settings, Weather, Filters) are a small dark floating pill-shaped bar centered at the bottom of the map, icon-plus-label, low-contrast against the map until interacted with — controls recede so the live data stays the focal point.
- FDR4 A persistent right-hand rail carries monetization and engagement content (an autoplaying promotional video, a premium-features upsell, a "GPS jamming map" cross-sell, a podcast plug) on dark charcoal cards with a single lime-green accent color — visually separated from the map's own muted, realistic palette so promotional content doesn't borrow the map's credibility-coded look.

## teenage engineering — homepage (https://teenage.engineering/) — R, 2026-09-26
- TE1 The homepage nav pairs each destination (products, store, latest, finder) with a small black-and-white line-art icon (a fan blade, a fuel-pump-like shape, a blank page, a magnifying glass over gears) drawn in the same hand-inked style as the page's editorial illustration, rather than a standard icon font — the icon language itself carries the brand's character.
- TE2 The current announcement is presented as a full hand-drawn black-and-white comic illustration (a harried character at a paper-stacked desk, titled "Daily life of Mr. Update") rather than a product screenshot or release-notes list, turning a firmware update into an editorial/character moment.
- TE3 The page uses no color beyond black, white, and one small orange accent on the logotype and one label chip — restraint in palette while richness comes entirely from illustration detail and line quality, the inverse of "add color for personality."

## rabbit (rabbit.tech) — OS3 homepage (https://www.rabbit.tech/) — R, 2026-09-26
- RB1 The brand's primary color is a saturated warm orange (header bar, CTA pill, small accent text) rather than the cool blue-to-purple gradient that is the common "AI product" default; the page is otherwise black-and-white (wordmark, body copy).
- RB2 The hero photograph is behind-the-scenes production gear (softbox lights, a tripod, a laptop on a stool) rather than an abstract 3D render or glowing orb — a real, slightly unpolished image standing in for the "futuristic" register instead of synthetic imagery.
- RB3 Platform availability is shown as a plain three-column card row (web, macOS, Windows) with literal file sizes and architectures (x64 79 MB, ARM 84 MB) directly beneath a stylized hero — functional, unglamorous detail sits immediately below the brand moment rather than being buried on a separate downloads page.

## itch.io — homepage (https://itch.io/) — R, 2026-09-26
- IT1 The platform's own chrome (header, sidebar of tags and browse categories, search) is plain, small, and utilitarian — ordinary sans-serif labels, a simple list of text links, no pixel-art or retro styling anywhere in the platform UI itself.
- IT2 Pixel-art and retro-styled visual language appears only inside the hosted content (a featured game's own screenshots and trailer thumbnails, shown as plain rectangular crops) — the platform deliberately does not adopt the aesthetic of the games it hosts, keeping browsing fast and visually neutral across thousands of unrelated visual styles.
