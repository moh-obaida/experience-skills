# Observations: Institutional, Accessibility-First, Industrial, and Luxury

Dated observations of real, public product surfaces made for Experience Skills. Each bullet has a
stable ID that precedent and design-intelligence modules cite. Observations describe what was
seen; interpretation lives in the design-intelligence library. This batch targets directions that
had zero item-addressable precedent in the 2026-09-25 coverage report: Institutional,
Accessibility-first high contrast, Industrial, and Luxury.

**Method codes:** R = the live page was opened in a browser and looked at (desktop viewport about
800×600 CSS px unless noted). R+JS = computed styles (font-family, size, weight, line-height) were
read directly from the DOM via an in-page script, not estimated visually. Sites change; treat every
observation as true on its date only. No screenshots are stored in this repository.

## MIT — homepage (https://www.mit.edu/) — R, 2026-09-25
- MIT1 The header is a deep maroon bar carrying only the wordmark, a flat top-level nav (Education, Research, Innovation, Admissions + Aid, Campus Life, News, More), and a search icon — no login/account control on the public homepage.
- MIT2 Directly below the header, before any editorial content, a search module ("Explore websites, people, and locations") is paired with an audience-segmented link list ("Top resources for": prospective students, current students, faculty & staff, alumni, parents & families, all resources) — wayfinding organized by who the visitor is, not by content category, because an institution serves structurally different audiences from one homepage.
- MIT3 A bordered, low-saturation callout box ("MIT's response to government activity") sits above the editorial content for a time-sensitive institutional notice, visually distinct from but not louder than the page's own maroon/white identity.
- MIT4 Below the fold, the page uses real documentary photography of research and people (a student at lab equipment) rather than illustration or stock imagery, captioned with named individuals and their specific work.

## MIT — homepage, computed type styles (https://www.mit.edu/) — R+JS, 2026-09-26
- MIT5 A single font family, Neue Haas Grotesk Text, is computed on every measured role: h1 (600 weight, ~47px/52px line-height), h2 (400 weight, ~32px/35px), body (400 weight, ~15px/24px), nav links (400 weight, ~15px), and lead paragraphs (500 weight, 26px/33.8px, letter-spacing −0.39px). Hierarchy comes entirely from weight and size steps within one family; no separate display or data face is used anywhere measured.

## RNIB (Royal National Institute of Blind People) — homepage (https://www.rnib.org.uk/) — R, 2026-09-25
- RN1 A "Switch colour mode" control sits in the header at the same level as primary commerce actions ("Shop RNIB", "Donate now") — appearance is treated as a first-class, always-visible setting, not buried in a footer or settings page.
- RN2 The control opens a visible three-way choice (Light / Dark / Yellow) rather than a binary light/dark toggle; selecting a mode is a single click with no page reload, and the choice persists across the visit.
- RN3 "Yellow" mode repaints the page to a black-on-yellow-gold palette (WCAG-favored high-legibility pairing for some low-vision users) including buttons and callout boxes; a phone helpline number stays rendered as a plain, undisguised tappable link at the same visual prominence in all three modes.
- RN4 The primary hero action is a donation CTA in a saturated brand pink, kept as the one strongly saturated color against an otherwise near-monochrome (black/white or black/yellow) interface — color budget is spent on exactly one action, not on decoration.

## MoMA — homepage (https://www.moma.org/) — R+JS, 2026-09-26
- MOMA1 The nav is four plain words (Visit, Exhibitions and events, Art and artists, Store) plus a "Membership" dropdown and a search icon, with a full-bleed documentary photograph of real visitors in a gallery (not artwork alone) as the hero — the museum sells the experience of visiting, not just the collection.
- MOMA2 Two calls to action sit side by side with different weight: a grey "Donate" button and a solid blue "Tickets" button — the only saturated color on an otherwise black-and-white page is spent on the one transactional action (buying a ticket), breaking the institution's own monochrome restraint exactly once.
- MOMA3 Computed styles show the wordmark and headings render in a custom typeface, "MoMA Sans" (falling back to Helvetica), at a black 900 weight — a real, commissioned institutional typeface rather than a stock font, used at maximum weight for the identity mark.

## RNIB — homepage, computed type styles (https://www.rnib.org.uk/) — R+JS, 2026-09-26
- RN5 A custom accessible face (Ingra, falling back to Arial) computes at 16px/24px (1.5× line-height) for body text and 700-weight for h1 at 47px/56.4px. Button text computes larger and heavier (20px, 600 weight) than body paragraphs (16px) — the elements users act on carry more legible type than the elements they merely read. One paragraph element on the same page computed to font-weight 100, a thin-weight regression against the site's own accessible-type intent.

## Loewe — homepage (https://www.loewe.com/int/en/home) — R, 2026-09-25
- LW1 The nav is five plain-text words (Women, Men, Gifts, Art & Craft, Stories) plus four unlabeled utility icons (search, an account/pen glyph, bookmark, bag) — no descriptive labels on the icons, relying on established e-commerce iconography and restraint over explanation.
- LW2 The hero is a single large studio product photograph (one shoe, plain grey backdrop, no lifestyle scene, no model) with the wordmark oversized and cropped at the top edge, overlapping the image rather than sitting in a contained header band.
- LW3 The caption under the hero image is a short editorial line ("Bold strides") plus one sentence of material/craft description — commerce framed as a story about materials and making, not as a price-led offer; no price, discount, or urgency language appears in the first viewport.

## Rolex — homepage (https://www.rolex.com/en-us) — R+JS, 2026-09-26
- RX1 The header carries no wordmark and no text navigation at all — only a centered crown mark icon, a hamburger menu, and three utility icons (search, store locator, favorites) — identity relies entirely on the crown's recognition rather than a logotype.
- RX2 The hero is a full-bleed documentary wildlife photograph (a gorilla, captioned "Rolex and National Geographic present") rather than product photography — brand association and prestige narrative precede any watch image.
- RX3 Computed styles show the functional UI (headings, buttons, header, body) all render in `"Helvetica Now Text", Helvetica, Arial, sans-serif` at a light 300 weight for most text and 700 only for the page's semantic h1 — a completely plain, neutral grotesque carries the interface, not a display serif.
- RX4 A country/region selector banner above the header uses a dark green "Change" button — the brand's accent color in this real instance is a deep green, not the gold or black often assumed by default for "luxury."

## Caterpillar (Cat.com) — North America homepage (https://www.cat.com/en_US.html) — R, 2026-09-25
- CAT1 The header uses pure black with the brand's saturated safety yellow reserved for the search button and primary CTA fill — the same yellow used on the physical equipment the brand sells, carrying real-world brand recognition into the interface rather than an arbitrary "corporate blue."
- CAT2 Utility actions (Find Dealer with a location pin, Sign In, a grid-icon app launcher) sit above the main nav in a persistent top strip, ahead of product/content navigation — the header prioritizes "where is my nearest dealer" and account access over content browsing, matching a business-equipment buyer's actual first questions.
- CAT3 The hero uses a documentary photograph of a real worker in branded gear rather than illustration or an abstract render, paired with a heavy condensed black sans headline and a short yellow rule as the only decorative element.
- CAT4 A floating chat-assistant affordance ("Cat AI Assistant") is anchored bottom-right as a small labeled bubble, visually subordinate to the page's primary CTA rather than competing with it.
