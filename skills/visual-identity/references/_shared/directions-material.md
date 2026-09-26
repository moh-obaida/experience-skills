<!-- GENERATED FROM shared/design-intelligence/directions-material.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Directions: Material Family

Directions that borrow physical materials, craft, and quality cues.

---

## Tactile

**Philosophy:** interfaces that feel physical: weight, texture, response.

| Aspect | Tendency |
|---|---|
| Suits | Music gear, crafts, games, hardware companions |
| Unsuitable | Dense data |
| Composition | Object-dominant layouts, instrument-like panels |
| Typography | Sturdy sans or engraved-style labels |
| Surface & shape | Subtle texture, real-feeling controls where the real object is the reference |
| Imagery | Product photography, material close-ups |
| Palette | Material-derived |
| Motion | Physical easing, press depth |
| Interaction | Direct manipulation when it mirrors the real device |
| Accessibility | Skeuomorphic controls still need native semantics |

**Fails when:** fake leather and stitching decorate unrelated software. **Adapt:** texture tied to
a real object users know.
**Precedent:** teenage engineering (TE1–TE3): every nav destination pairs with a small hand-inked
line-art icon drawn in the same style as the page's illustration (TE1) — the icon language itself is
the tactile/craft reference, not a generic icon font with a texture filter over it. A firmware
update is presented as a full hand-drawn comic (TE2) instead of a screenshot or changelog, and the
palette stays black, white, and one accent color (TE3) — physical, tactile character comes from
illustration and line quality, not from added color or skeuomorphic gloss. **Adapt:** the
restrained-palette-plus-rich-illustration pattern (TE3) transfers well beyond hardware brands: a
distinctive hand-drawn or engraved icon system can carry a tactile identity through interface
chrome that is otherwise completely flat.

## Analog-inspired

**Philosophy:** paper, print, film, and ink as references.

| Aspect | Tendency |
|---|---|
| Suits | Writing, photography, archives, journaling |
| Unsuitable | Real-time operations |
| Composition | Page-like, editorial |
| Typography | Book faces, typewriter or grotesk for labels |
| Surface & shape | Paper tones, grain, deckle edges sparingly |
| Imagery | Film photography, scans |
| Palette | Warm editorial, earthy |
| Motion | Page turns only if meaningful |
| Interaction | Conventional |
| Accessibility | Texture must not reduce text contrast |

**Precedent:** Aesop's warm canvas (AE1), Our World in Data paper tones (OW1). **Adapt:** material as
background layer only.

## Craft / organic

**Philosophy:** hand-made marks and natural forms signal care and humanity.

| Aspect | Tendency |
|---|---|
| Suits | Food, makers, sustainability, independent publishing |
| Unsuitable | Enterprise software |
| Composition | Asymmetric, relaxed rhythm |
| Typography | Hand-lettered display used sparingly; readable body |
| Surface & shape | Irregular shapes, hand-drawn icons |
| Imagery | Real people and materials |
| Palette | Earthy/organic family |
| Motion | Gentle |
| Interaction | Conventional |
| Accessibility | Hand lettering must not carry essential text |

**Precedent:** The Pudding's hand-drawn navigation (PU1, PU3), Patagonia (PA1). **Adapt:** craft in
the voice and marks; controls stay standard.

## Luxury

**Philosophy:** restraint, precision, and material quality; nothing unnecessary, everything exact.

| Aspect | Tendency |
|---|---|
| Suits | High-end goods, hospitality, fine services |
| Unsuitable | Mass utilities, public services |
| Composition | Image-led, generous but proportioned space |
| Typography | Refined serif or precise sans, wide tracking in small caps |
| Surface & shape | Flat, precise, material photography |
| Imagery | Commissioned, consistent art direction |
| Palette | Luxury family: deep neutrals, metallic accents used rarely |
| Motion | Slow, deliberate |
| Interaction | Must still show price, availability, and purchase clearly |
| Accessibility | Thin type and low-contrast neutrals are the common failure |

**Fails when:** "luxury" means empty space and grey text with stock photos. **Adapt:** precision
everywhere, including forms and checkout.
**Precedent:** Loewe (LW1–LW3): the nav is five plain words and four unlabeled utility icons (LW1)
— restraint comes from removing explanation, not from removing function. The hero is a single studio
product photograph with no lifestyle staging (LW2), captioned by a short editorial line about
material and craft rather than price or a discount (LW3); no urgency language appears anywhere in
the first viewport. **Counterexample:** a luxury-styled page that spends its restraint budget on
decoration instead of on removing sales pressure — beige and serif with a countdown timer or "only 2
left" undercuts the exact quality luxury direction is selling. **Adapt:** the unlabeled-icon
restraint (LW1) only works because the icons follow near-universal e-commerce convention; unlabeled
icons for anything less standard need labels regardless of how premium the surrounding page looks.
### Family checks

Responsive behavior removes texture and oversized imagery before removing product facts or actions.
Accessibility and RTL require contrast, readable body text, script-safe type, and a non-image path.
AI failure: beige, serif, and empty space as a shortcut to premium. Earn restraint through product
quality and precision.
