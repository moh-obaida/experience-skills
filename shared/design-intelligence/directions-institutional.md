# Directions: Institutional Family

Directions where trust comes from clarity, consistency, and authority rather than spectacle.

---

## Public-service

**Philosophy:** the user must complete an obligation quickly and correctly; clarity is the design.

| Aspect | Tendency |
|---|---|
| Suits | Government, civic services, utilities, public health, transport information |
| Unsuitable | Entertainment, brand campaigns |
| Composition | One thing per page for complex services; single-page forms for short ones; plain start pages |
| Typography | One highly legible sans; large base size; plain language |
| Surface & shape | Flat, bordered inputs, no decoration |
| Imagery | Rare; functional icons at most |
| Palette | Public-service clarity: strong text contrast, one action color, distinct error color |
| Motion | None |
| Interaction | Native controls, back links, error summaries, "(optional)" labels |
| Accessibility | A legal and moral baseline; test with assistive technology |

**Fails when:** spectacle is added "to engage" (animated wizards, illustrations, custom dropdowns).
**Precedent:** GOV.UK (UKm1, UKm2, UKD1–UKD4, UKE1–UKE2). **Adapt:** plain language and error
patterns transfer to any form-heavy product.

## Institutional

**Philosophy:** authority and continuity; tradition expressed with restraint.

| Aspect | Tendency |
|---|---|
| Suits | Universities, law, banks, archives, foundations |
| Unsuitable | Youth products, playful consumer |
| Composition | Editorial or modular with conservative rhythm |
| Typography | Serif display with a sober sans; or a single classic sans |
| Surface & shape | Rules, crests or seals used sparingly |
| Imagery | Documentary photography |
| Palette | Deep blues, greens, burgundies with neutrals |
| Motion | Minimal |
| Interaction | Conventional; strong information architecture |
| Accessibility | Dense institutional content needs strong structure |

**Fails when:** heritage cues replace usability. **Adapt:** restraint and structure, not crests everywhere.
**Precedent:** MIT homepage (MIT1–MIT4): a restrained maroon-and-white identity carries the whole
page; instead of decoration, the homepage's real design effort goes into audience-segmented
wayfinding (MIT2) — a search module plus links grouped by "who are you" (prospective student,
current student, faculty, alumni, parent), because an institution's homepage serves structurally
different visitors with different jobs, not one visitor with one job. A bordered, low-saturation
callout (MIT3) carries time-sensitive institutional notices without breaking the page's restraint.
**Adapt:** the audience-segmented link pattern (MIT2) transfers to any product serving several
distinct user types from one entry point (a platform with buyers and sellers, a school with
students and parents) — segment by who the visitor is before segmenting by topic.

**Precedent:** MoMA (MOMA1–MOMA3) shows the same family from a museum rather than a university: a black-and-white
identity broken exactly once, by a saturated blue "Tickets" button next to a grey "Donate" button
(MOMA2) — color spent on the one transactional action, not on decoration. Computed styles confirm a
real commissioned typeface, "MoMA Sans," at maximum weight for the wordmark (MOMA3), and the hero
photograph shows real visitors in the gallery rather than artwork alone (MOMA1) — selling the
experience of visiting, the institution's actual product, not just its collection. **Adapt:**
MOMA2's one-saturated-action-only discipline is the concrete version of this direction's "restraint,
not decoration" rule — pick exactly one moment (usually the one action that produces revenue or the
mission) to break an otherwise monochrome identity.

## Accessibility-first high contrast

**Philosophy:** maximum legibility and operability for the widest audience.

| Aspect | Tendency |
|---|---|
| Suits | Critical services, older audiences, low-vision users, kiosks |
| Unsuitable | Rarely wrong; can feel stark for luxury or atmospheric brands |
| Composition | Simple columns, large targets, generous spacing between controls |
| Typography | Large base size, generous line height, fonts designed for legibility |
| Surface & shape | Strong borders, visible focus, no low-contrast surfaces |
| Imagery | Functional, with text alternatives |
| Palette | High-contrast accessibility-first family |
| Motion | Minimal; respects reduced motion |
| Interaction | Native controls; no hover-only or drag-only actions |
| Accessibility | The point of the direction; still test, never assume |

**Fails when:** contrast is high but hierarchy is flat. **Adapt:** combine with any direction as a
constraint layer rather than a look.
**Precedent:** RNIB (RN1–RN4): the appearance control sits in the header at the same visual level
as the site's primary commerce actions (RN1) — treated as a first-class setting, not something
buried in a footer. The choice is a visible three-way switch (Light/Dark/Yellow), not a hidden
binary toggle (RN2); "Yellow" mode is a specific, deliberately chosen high-legibility pairing
(black on a warm yellow-gold), not just an inverted theme (RN3). Across every mode the phone
helpline stays a plain, undisguised tappable link at consistent prominence (RN3), and the one
saturated brand color is spent on exactly one action, the primary CTA (RN4) — restraint elsewhere is
what makes that one color legible as "this is the important one." **Adapt:** make the appearance
control itself as discoverable as the product's primary actions, offer more than a binary choice
when real alternatives exist (not just dark mode), and keep informational content (like a phone
number) as plain, unstyled text rather than a decorated control at every appearance setting.
### Family checks

Responsive behavior preserves headings, error summaries, and task order before decorative symmetry.
Accessibility and RTL are primary constraints: test focus order, 200% zoom, long translations,
script line-height, and non-color status. AI failure: using heritage cues as authority without useful
content. Customize through clarity, not ornament.
