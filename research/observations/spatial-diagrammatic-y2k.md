# Observations: Spatial Browsing, Diagrammatic Tools, Y2K Commerce, Retro-Digital, and Text-First

Dated observations of real, public product surfaces made for Experience Skills. Each bullet has a
stable ID that design-intelligence modules cite. Observations describe what was seen;
interpretation lives in the design-intelligence library. This batch targets directions that had
zero item-addressable precedent in the 2026-09-25 coverage report (Spatial, Diagrammatic, Y2K,
Retro-digital), plus a Text-first surface (Are.na) researched in a later pass of the same session.

**Method codes:** R = the live page was opened in a browser and looked at (desktop viewport about
800×600 CSS px unless noted). R+JS = computed styles were read directly from the DOM via an in-page
script. Sites change; treat every observation as true on its date only. No screenshots are stored in
this repository.

## Google Arts & Culture — homepage and Nearby (https://artsandculture.google.com/) — R, 2026-09-26
- GAC1 Top-level navigation includes "Nearby" as a first-class destination alongside topic-based ones (Explore, Play, Favorites) — geographic, spatial browsing is offered as an equal alternative to categorical browsing, not buried under a filter.
- GAC2 The "Nearby" screen splits into "Visit" and "Browse" sub-tabs and shows a floating locate-me control in the map's conventional bottom-right position, following standard map-app control placement rather than inventing custom map chrome.
- GAC3 The homepage's featured-content card uses a stacked, offset-card motif (several fashion images peeking out from behind the front card at a slight offset) to imply a browsable stack with depth, rather than a flat single image — depth is suggested through simple layered offset, not through 3D rendering or heavy shadow.

## Excalidraw — blank canvas (https://excalidraw.com/) — R+JS, 2026-09-26
- EXC1 The entire application is an infinite canvas with a single floating, centered, icon-only toolbar as the only fixed chrome — no sidebar, no header bar, no page frame around the drawing surface.
- EXC2 Computed styles show the empty-canvas welcome heading is set in `Excalifont, Xiaolai` — a custom hand-drawn face matching the sketchy style of what users draw on the canvas — while the rest of the welcome screen's body copy uses `Assistant, system-ui, ...` sans fallbacks. The custom typeface is reserved for the one moment that sets the product's tone, not applied to every string.
- EXC3 Toolbar icons show their keyboard shortcut as a small letter directly on the icon (V, R, D, O, A, L, P, T, N, E) rather than only in a tooltip — shortcuts are discoverable at a glance for a tool whose expert users draw repeatedly.
- EXC4 Computed styles show every functional UI element (menu buttons, shortcut labels, menu item text) renders in plain system-font fallbacks (`Arial`, `Assistant, system-ui, ...`) — none of the toolbar or menu chrome uses the custom hand-drawn typeface. The distinctive font is deliberately confined to the one heading that sets mood; operable controls stay in a boring, maximally legible system font.

## Diesel — country selector and homepage (https://diesel.com/, https://ae.diesel.com/) — R, 2026-09-26
- DSL1 Product photography throughout (including the country-selector page, before the shopper even reaches the storefront) is treated as die-cut collage: each model is cut out from its background and outlined in a thick saturated red stroke, then composited over an unrelated documentary photo background.
- DSL2 The wordmark sits in a solid red rectangle block ("DIESEL / FOR SUCCESSFUL LIVING") with hard right angles and no rounding, repeated identically across the country selector and the storefront header — brand identity is carried by a flat color block and slogan, not by imagery alone.
- DSL3 A promotional discount ribbon ("15% OFF your order with code DSL15") occupies a persistent strip above the main header on the storefront, with manual prev/next arrows rather than only relying on auto-rotation.

## Craigslist — regional homepage (https://www.craigslist.org/) — R, 2026-09-26
- CRL1 The homepage is a dense grid of plain default-blue text links (dozens visible without scrolling) grouped under plain bold-text category headers, with a small emoji next to each category header as the only non-text decoration.
- CRL2 A functional month calendar widget is embedded directly in the sidebar (not a link to a separate calendar page); dates are individually clickable.
- CRL3 No hero, no imagery, no marketing copy, and no onboarding of any kind — the entire first viewport is functional navigation to real destinations, at a density many contemporary consumer sites would treat as overwhelming.

## Are.na — homepage, logged out (https://www.are.na/) — R, 2026-09-26
- ARN1 The site's self-description is presented as a lettered outline list ("a. Online software for saving and organizing..." "b. A toolkit for assembling new worlds from the scraps of the old") with a "+" control inviting the visitor to add a third definition themselves — the pitch is structured like a living document, not marketing copy.
- ARN2 A running, live-computed duration ("For the last 15 years and 48 days, Are.na has been a place for...") replaces a static founding year, making the page's own text a small piece of real-time data.
- ARN3 The entire homepage is plain black text on white with no imagery, no cards, and no color beyond a single dark navy "Sign up" button; identity is carried by a small two-asterisk glyph mark and the writing voice alone.

## Neocities — homepage (https://neocities.org/) — R, 2026-09-26
- NEO1 The hero uses a hand-drawn cartoon mascot (a cat in a construction helmet holding a paintbrush and wrench) over a simple white line-art cityscape silhouette on a dusty teal background with hand-drawn stars — a DIY, personal-homepage register distinct from OS-window chrome or bitmap-font nostalgia, referencing early-2000s "build your own page" culture instead.
- NEO2 Feature callouts use plain, friendly round icon bullets (a wrench, a heart) next to short, informal headlines ("Powerful features to help you build," "Share your web creation with the world") rather than technical or corporate feature-list language.
- NEO3 The real-time site counter ("1,768,500 web sites") is stated in plain running text within the pitch paragraph, not as an isolated stat card — a live number used as a specific credibility detail rather than a decorative dashboard tile.
