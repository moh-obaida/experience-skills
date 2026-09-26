<!-- GENERATED FROM shared/design-intelligence/palettes.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Palette Families

Palette families describe *roles and behavior*, not an industry lookup. The same family can suit a
bank and a publisher; the same product category can use different families. Choose by the
character the product needs and by context of use (screen, projector, sunlight, long sessions).

Every example token set below is a starting point with **computed** WCAG 2.x contrast ratios.
Recompute after any change; do not trust a ratio from memory. Thresholds: body text 4.5:1, large
text and UI component boundaries 3:1.

## How to use a family

1. Pick by character and context, then derive the brand's own hues within the roles.
2. Keep roles separate: brand/accent ≠ action ≠ status. A red brand must not make every button look like an error.
3. Status is never color alone; pair with icon, text, or shape.
4. Define dark and light modes as role mappings, not inversions.
5. Check every text/background pair you actually use, including secondary text and disabled states.

## Restrained neutral

**Character:** Calm, precise, recedes behind content. **Often suits:** Productivity, B2B, settings, admin. **Usually wrong for:** Brand-led marketing that needs energy.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FFFFFF` | – |
| Surface | `#F6F7F9` | – |
| Text on canvas | `#16181D` | 17.8:1 |
| Text on surface | `#16181D` | 16.6:1 |
| Secondary text on canvas | `#5B616E` | 6.2:1 |
| Action (label on fill) | `#FFFFFF` on `#2F5BEA` | 5.5:1 |
| Action fill vs canvas (component boundary) | `#2F5BEA` | 5.5:1 |
| Success on canvas | `#1E7F4F` | 5.0:1 |
| Danger on canvas | `#C62828` | 5.6:1 |

**Surface hierarchy and use:** Hierarchy comes from surface value steps (canvas → surface → raised), not shadows. Secondary text is the usual failure: keep it at or above 4.5:1.

**Other mode:** Dark mode: canvas #111317, surface #1A1D23; keep the action hue but lighten it for contrast; avoid pure black.

## Warm editorial

**Character:** Paper-like, literary, unhurried. **Often suits:** Publishing, long-form, considered commerce. **Usually wrong for:** Real-time operations.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FBF8F3` | – |
| Surface | `#F2ECE2` | – |
| Text on canvas | `#1F1B16` | 16.2:1 |
| Text on surface | `#1F1B16` | 14.6:1 |
| Secondary text on canvas | `#5E554A` | 6.9:1 |
| Action (label on fill) | `#FFFFFF` on `#8A3B12` | 7.7:1 |
| Action fill vs canvas (component boundary) | `#8A3B12` | 7.3:1 |
| Success on canvas | `#2F6B3B` | 6.0:1 |
| Danger on canvas | `#A4262C` | 6.9:1 |

**Surface hierarchy and use:** Warm off-white canvas; one ink-like accent for links and actions; images carry the color.

**Other mode:** Dark mode: warm near-black (#1C1916) canvas with cream text; keep accents muted.

## High-energy classroom / game

**Character:** Loud, joyful, legible at distance. **Often suits:** Classroom games, party games, kids' products. **Usually wrong for:** Finance, health, legal.

| Role | Example | Contrast |
|---|---|---|
| Canvas (environment field) | `#46178F` | – |
| Surface (task panels) | `#FFFFFF` | – |
| Text directly on canvas | `#FFFFFF` on `#46178F` | 11.8:1 |
| Text on panels | `#1B1B1B` on `#FFFFFF` | 17.2:1 |
| Secondary text on panels | `#4A4A4A` | 8.9:1 |
| Action (label on fill) | `#FFFFFF` on `#1B1B1B` | 17.2:1 |
| Panel vs canvas (component boundary) | `#FFFFFF` on `#46178F` | 11.8:1 |
| Success on panels | `#26890C` | 4.5:1 |
| Danger on panels | `#E21B3C` | 4.7:1 |

**Surface hierarchy and use:** The saturated canvas is the environment; tasks sit on white panels so controls keep full contrast. Team/answer colors must be distinguishable without color (shape, label).

**Other mode:** Usually no dark mode; the canvas already is the mood. Projectors wash out light tints: prefer saturated fields.

## Technical monochrome

**Character:** Exact, engineered, quiet. **Often suits:** Developer tools, infrastructure, APIs. **Usually wrong for:** Lifestyle consumer, children.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#0A0A0A` | – |
| Surface | `#161616` | – |
| Text on canvas | `#EDEDED` | 16.9:1 |
| Text on surface | `#EDEDED` | 15.5:1 |
| Secondary text on canvas | `#A1A1A1` | 7.7:1 |
| Action (label on fill) | `#0A0A0A` on `#EDEDED` | 16.9:1 |
| Action fill vs canvas (component boundary) | `#EDEDED` | 16.9:1 |
| Success on canvas | `#3FB950` | 7.8:1 |
| Danger on canvas | `#F85149` | 5.9:1 |

**Surface hierarchy and use:** One signal accent at most; code and numbers in mono. The failure is grey-on-grey secondary text and borders below 3:1.

**Other mode:** Light mode: white canvas, near-black text, the same single accent.
**Precedent:** teenage engineering (TE1–TE3) evidences the light-mode variant: white canvas, near-black
text and line art, exactly one accent color (a small orange logotype and label chip) (TE3), with the
brand's character carried entirely by icon and illustration precision rather than by a second color
or texture (TE1–TE2). **Adapt:** the one-accent discipline (TE3) is the transferable part; it holds
whether the canvas is near-black or near-white.

## Industrial

**Character:** Heavy, labeled, safety-aware. **Often suits:** Manufacturing, logistics, hardware, field tools. **Usually wrong for:** Wellness, luxury.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#F2F2F0` | – |
| Surface | `#E1E1DC` | – |
| Text on canvas | `#1A1A1A` | 15.5:1 |
| Text on surface | `#1A1A1A` | 13.3:1 |
| Secondary text on canvas | `#4D4D4A` | 7.6:1 |
| Action (label on fill) | `#FFFFFF` on `#1A1A1A` | 17.4:1 |
| Action fill vs canvas (component boundary) | `#1A1A1A` | 15.5:1 |
| Success on canvas | `#2E7D32` | 4.6:1 |
| Danger on canvas | `#B71C1C` | 5.9:1 |

**Surface hierarchy and use:** Safety yellow/orange are reserved for real warnings and always paired with a label; neutrals do the rest.

**Other mode:** Dark mode for control rooms: charcoal canvas, high-contrast labels, warnings unchanged.
**Precedent:** Caterpillar (CAT1–CAT4): the brand's real-world equipment yellow is reserved for
exactly the primary action and search fill against a black header (CAT1) — matching this family's
rule that the accent stays scarce and tied to what matters. Documentary photography of real
equipment and workers (CAT3) reinforces the palette's credibility rather than illustration softening
it. **Adapt:** a brand with a real physical safety or equipment color should use CAT1's restraint —
one reserved accent — rather than spreading the color across decorative elements.

## Soft consumer

**Character:** Gentle, friendly, reassuring. **Often suits:** Wellness, family, home, onboarding. **Usually wrong for:** Dense data, trading.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FFF9F5` | – |
| Surface | `#FDEDE4` | – |
| Text on canvas | `#2B2320` | 14.8:1 |
| Text on surface | `#2B2320` | 13.5:1 |
| Secondary text on canvas | `#6A5A54` | 6.3:1 |
| Action (label on fill) | `#FFFFFF` on `#C2410C` | 5.2:1 |
| Action fill vs canvas (component boundary) | `#C2410C` | 5.0:1 |
| Success on canvas | `#2E7D5B` | 4.8:1 |
| Danger on canvas | `#B42318` | 6.3:1 |

**Surface hierarchy and use:** Pastel surfaces with full-contrast text and a stronger action color. The failure is pastel text or pastel buttons.

**Other mode:** Dark mode: deep warm neutrals; pastels become muted tints, never text colors.
**Precedent:** Headspace (HS1–HS4): warm cream and pastel-adjacent surface cards carry two very
different product tracks (consumer meditation, clinical therapy) in the same soft register (HS1),
while the one element that must be pressed — the CTA — is rendered as a solid black pill, the only
hard-contrast shape on the page (HS2). **Adapt:** HS2 is this family's stated rule in practice:
never let the action itself go pastel; the softness belongs to everything around it.

## Fashion

**Character:** Stark, confident, image-led. **Often suits:** Fashion, campaigns, photographers. **Usually wrong for:** Utilities, public service.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FFFFFF` | – |
| Surface | `#F2F2F2` | – |
| Text on canvas | `#000000` | 21.0:1 |
| Text on surface | `#000000` | 18.8:1 |
| Secondary text on canvas | `#555555` | 7.5:1 |
| Action (label on fill) | `#FFFFFF` on `#000000` | 21.0:1 |
| Action fill vs canvas (component boundary) | `#000000` | 21.0:1 |
| Success on canvas | `#1B5E20` | 7.9:1 |
| Danger on canvas | `#B00020` | 7.3:1 |

**Surface hierarchy and use:** Monochrome frame so photography provides color; one seasonal signature color used rarely.

**Other mode:** Dark mode inverts cleanly; check thin type on black.
**Precedent:** Loewe (LW1–LW3): the entire storefront is white, grey, and black except the product
photograph itself (a single purple suede shoe on a plain studio backdrop) (LW2) — the family's rule
in its purest form, with color budget spent on the product, not the chrome. Nav and utility icons
stay unlabeled and monochrome (LW1). **Adapt:** LW2 works because the photography is genuinely rich
(real material, real color); the same restraint around a weak or generic photo would read as empty,
not confident.

## Luxury

**Character:** Restrained, precise, material. **Often suits:** High-end goods, hospitality. **Usually wrong for:** Mass utilities.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#F7F5F0` | – |
| Surface | `#ECE8DF` | – |
| Text on canvas | `#1C1B18` | 15.8:1 |
| Text on surface | `#1C1B18` | 14.1:1 |
| Secondary text on canvas | `#5C5850` | 6.5:1 |
| Action (label on fill) | `#F7F5F0` on `#1C1B18` | 15.8:1 |
| Action fill vs canvas (component boundary) | `#1C1B18` | 15.8:1 |
| Success on canvas | `#2F5D3A` | 7.0:1 |
| Danger on canvas | `#8E1B1B` | 8.3:1 |

**Surface hierarchy and use:** Deep neutrals and one metallic-feeling accent used for small details only; never gold text on white (fails contrast).

**Other mode:** Dark mode: deep warm black with ivory text.
**Precedent:** Rolex (RX1–RX4): the header carries no wordmark at all, only a crown mark and utility
icons (RX1) — identity spent entirely on one recognizable mark rather than on color or ornament. The
brand's real accent in a genuine UI moment (the region-selector "Change" button) is a deep green, not
the gold or black a model defaults to for "luxury" (RX4), and the hero leads with documentary
photography and a partnership story (RX2) before any product appears. **Adapt:** RX4 is the concrete
fix for this family's most common failure: a luxury palette does not require gold or black by
default — pick one real, specific accent (whatever the brand's actual color is) and use it exactly
once per screen, the way RX1's single crown mark carries identity without a logotype.

## Retro digital

**Character:** Nostalgic, systemic, bright. **Often suits:** Indie tools, games, nostalgic products. **Usually wrong for:** Trust-critical products.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#C0C0C0` | – |
| Surface | `#FFFFFF` | – |
| Text on canvas | `#000000` | 11.5:1 |
| Text on surface | `#000000` | 21.0:1 |
| Secondary text on canvas | `#303030` | 7.3:1 |
| Action (label on fill) | `#FFFFFF` on `#000080` | 16.0:1 |
| Action fill vs canvas (component boundary) | `#000080` | 8.8:1 |
| Success on canvas | `#006400` | 4.1:1 |
| Danger on canvas | `#8B0000` | 5.5:1 |

**Surface hierarchy and use:** System-era greys and primaries; bevels imply depth. Keep body text on white surfaces for legibility.
**Precedent:** Neocities (NEO1–NEO3) evidences a second real branch this hex table doesn't cover: a
warmer, hand-drawn DIY register (a dusty teal background, hand-drawn stars, a warm illustrated
mascot) rather than Windows-grey system chrome — see `directions-retro.md`'s Retro-digital entry for
the full transfer note. **Adapt:** treat this table as the OS/window branch specifically; a DIY
personal-homepage branch needs its own warmer, less systemic palette rather than forcing every
"retro-digital" product into System-era grey.

**Other mode:** Dark variants exist in terminal-green styles; check green-on-black contrast and glare.

## Earthy / organic

**Character:** Natural, grounded, crafted. **Often suits:** Food, makers, sustainability, outdoors. **Usually wrong for:** Enterprise software.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#F4F1EA` | – |
| Surface | `#E6E0D2` | – |
| Text on canvas | `#23261F` | 13.6:1 |
| Text on surface | `#23261F` | 11.7:1 |
| Secondary text on canvas | `#57594E` | 6.3:1 |
| Action (label on fill) | `#FFFFFF` on `#3E5C2E` | 7.6:1 |
| Action fill vs canvas (component boundary) | `#3E5C2E` | 6.7:1 |
| Success on canvas | `#3E5C2E` | 6.7:1 |
| Danger on canvas | `#9B2C1F` | 6.7:1 |

**Surface hierarchy and use:** Greens and clays; the risk is success and action colors colliding (the same green): differentiate by shape and label.

**Other mode:** Dark mode: forest-dark canvas with sand text.

## Public-service clarity

**Character:** Plain, trustworthy, unmistakable. **Often suits:** Government, civic, utilities. **Usually wrong for:** Entertainment.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FFFFFF` | – |
| Surface | `#F3F2F1` | – |
| Text on canvas | `#0B0C0C` | 19.6:1 |
| Text on surface | `#0B0C0C` | 17.5:1 |
| Secondary text on canvas | `#505A5F` | 7.1:1 |
| Action (label on fill) | `#FFFFFF` on `#00703C` | 6.2:1 |
| Action fill vs canvas (component boundary) | `#00703C` | 6.2:1 |
| Success on canvas | `#00703C` | 6.2:1 |
| Danger on canvas | `#D4351C` | 4.9:1 |

**Surface hierarchy and use:** One action color, one error color, one link color, strong focus color; nothing decorative.

**Other mode:** Dark mode is rarely offered; if offered, keep error and focus colors distinct and tested.

## High-contrast accessibility-first

**Character:** Maximum legibility. **Often suits:** Critical services, older audiences, kiosks. **Usually wrong for:** (rarely wrong).

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FFFFFF` | – |
| Surface | `#FFFFFF` | – |
| Text on canvas | `#000000` | 21.0:1 |
| Text on surface | `#000000` | 21.0:1 |
| Secondary text on canvas | `#1F1F1F` | 16.5:1 |
| Action (label on fill) | `#FFFFFF` on `#0033CC` | 9.0:1 |
| Action fill vs canvas (component boundary) | `#0033CC` | 9.0:1 |
| Success on canvas | `#006100` | 7.7:1 |
| Danger on canvas | `#B00000` | 7.4:1 |

**Surface hierarchy and use:** Borders instead of tints, thick focus rings, no information in color alone.

**Other mode:** Dark mode: black canvas, white text, yellow or cyan focus.
**Precedent:** RNIB (RN1–RN4) evidences a third real mode beyond light/dark: a black-on-warm-yellow
pairing offered as an explicit, named choice ("Yellow") alongside Light and Dark (RN2–RN3), not a
forced default — the appearance control sits at the same header prominence as the site's primary
commerce actions (RN1). The one saturated brand color (a pink CTA) stays constant and singular
across all three modes (RN4). **Adapt:** RN2's lesson is the transferable one: when real alternatives
to light/dark exist for the audience a product serves, offer them as visible, equal choices, not a
single inverted theme.

## Dark creator tool

**Character:** Neutral dark chrome so content colors read true. **Often suits:** Design, video, audio, 3D tools. **Usually wrong for:** Reading products.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#1E1E1E` | – |
| Surface | `#2C2C2C` | – |
| Text on canvas | `#F0F0F0` | 14.6:1 |
| Text on surface | `#F0F0F0` | 12.3:1 |
| Secondary text on canvas | `#B3B3B3` | 8.0:1 |
| Action (label on fill) | `#0A0A0A` on `#0D99FF` | 6.6:1 |
| Action fill vs canvas (component boundary) | `#0D99FF` | 5.6:1 |
| Success on canvas | `#14AE5C` | 5.7:1 |
| Danger on canvas | `#F24822` | 4.5:1 |

**Surface hierarchy and use:** Chrome is desaturated so it never tints the user's content; selection color is the one strong accent.

**Other mode:** Light mode must keep the chrome neutral as well.

**Contrast note:** white labels on this bright blue measure 3.0:1 and fail for normal text, so the example uses a near-black label. Bright accent fills on dark chrome often need dark labels.

## Cinematic

**Character:** Dark, image-led, dramatic. **Often suits:** Film, games, launches, media. **Usually wrong for:** Operational tools.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#0B0B0F` | – |
| Surface | `#17171F` | – |
| Text on canvas | `#F5F5F7` | 18.0:1 |
| Text on surface | `#F5F5F7` | 16.4:1 |
| Secondary text on canvas | `#A6A6B0` | 8.1:1 |
| Action (label on fill) | `#0B0B0F` on `#F5F5F7` | 18.0:1 |
| Action fill vs canvas (component boundary) | `#F5F5F7` | 18.0:1 |
| Success on canvas | `#34C759` | 8.8:1 |
| Danger on canvas | `#FF453A` | 5.8:1 |

**Surface hierarchy and use:** Imagery supplies color; UI stays near-neutral; text over images always has a scrim.

**Other mode:** Usually dark-only; a light variant needs a different image treatment.

## Playful educational

**Character:** Bright but calm during focus. **Often suits:** Learning apps, classroom practice. **Usually wrong for:** Professional adult tools.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FFFFFF` | – |
| Surface | `#F1F7FF` | – |
| Text on canvas | `#1A2233` | 15.9:1 |
| Text on surface | `#1A2233` | 14.8:1 |
| Secondary text on canvas | `#4A5568` | 7.5:1 |
| Action (label on fill) | `#FFFFFF` on `#1F6FEB` | 4.6:1 |
| Action fill vs canvas (component boundary) | `#1F6FEB` | 4.6:1 |
| Success on canvas | `#1A7F37` | 5.1:1 |
| Danger on canvas | `#CF222E` | 5.4:1 |

**Surface hierarchy and use:** Bright color in celebration and navigation; calm surfaces during problem-solving; correct/incorrect never by color alone.

**Other mode:** Dark mode optional; keep feedback colors distinct and labeled.

## Commerce

**Character:** Product-first, price-legible. **Often suits:** Retail, marketplaces, booking. **Usually wrong for:** Editorial long-form.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FFFFFF` | – |
| Surface | `#F5F5F5` | – |
| Text on canvas | `#111111` | 18.9:1 |
| Text on surface | `#111111` | 17.3:1 |
| Secondary text on canvas | `#595959` | 7.0:1 |
| Action (label on fill) | `#FFFFFF` on `#111111` | 18.9:1 |
| Action fill vs canvas (component boundary) | `#111111` | 18.9:1 |
| Success on canvas | `#007A3D` | 5.5:1 |
| Danger on canvas | `#C4161C` | 6.0:1 |

**Surface hierarchy and use:** Neutral frame so product imagery and price dominate; sale color reserved for real discounts.

**Other mode:** Dark mode rarely suits product photography on white; test images.

## Data-heavy

**Character:** Quiet chrome, meaningful data color. **Often suits:** Monitoring, analytics, trading, ops. **Usually wrong for:** Marketing.

| Role | Example | Contrast |
|---|---|---|
| Canvas | `#FFFFFF` | – |
| Surface | `#F6F8FA` | – |
| Text on canvas | `#1F2328` | 15.8:1 |
| Text on surface | `#1F2328` | 14.8:1 |
| Secondary text on canvas | `#59636E` | 6.1:1 |
| Action (label on fill) | `#FFFFFF` on `#0969DA` | 5.2:1 |
| Action fill vs canvas (component boundary) | `#0969DA` | 5.2:1 |
| Success on canvas | `#1A7F37` | 5.1:1 |
| Danger on canvas | `#D1242F` | 5.2:1 |

**Surface hierarchy and use:** Chrome is neutral; categorical series colors are distinguishable for color-vision deficiency; status always pairs color with icon or text.

**Other mode:** Dark mode common for control rooms; recheck every series and status color.
**Precedent:** Flightradar24 (FDR1–FDR4): chrome is reduced to a thin top bar and a low-contrast
floating control pill (FDR3), leaving the realistic, muted map itself as the only large color field
— hundreds of live aircraft icons are the "meaningful data color" this family calls for, distinguished
by position and heading rather than by a palette of categorical hues (FDR2). Promotional content in
the side rail uses its own distinct dark-charcoal-plus-lime-green treatment, kept visually separate
from the map's credibility-coded neutral tones (FDR4). **Adapt:** when the data itself is inherently
spatial or visual (positions on a map, not abstract categories), the family's "meaningful data color"
principle can be satisfied by the canvas's own realism rather than by an added color-coding system.

## Near-duplicates deliberately excluded

Families that differ only by hue (for example "blue SaaS", "purple SaaS", "teal SaaS") are one
family (restrained neutral) with a different action color. Gradient palettes are not families; a
gradient is a surface treatment (see `surfaces-and-shape.md`).
