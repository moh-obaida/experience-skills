# Worked Example: Product Page Purchase Path

**Archetype:** DISCOVERY → TRANSACTIONAL · **Product types:** commerce, marketplaces, ticketing
**Skills:** workflow-compression, interaction-design, composition-repair, critical-review

## Context

A shopper arrives on a running-shoe product page from a search ad on their phone. The store
already knows their country from the domain and their size from two previous orders.

## The bad version

```
1. Region modal: "Choose your country" (the .co.uk domain already says UK)
2. Newsletter modal: dismiss
3. Hero carousel of lifestyle imagery (autoplay), full screen
4. Scroll past a promotional banner and a "Complete the look" carousel
5. Color picker (one color in stock) → "Select a color" required
6. Size picker: blank, no memory of past purchases
7. Delivery info hidden in an accordion
8. "Add to bag" at the bottom of a long page
```

## Correct analysis

- F1 REDUNDANT INPUT: country (from the domain), size (from history).
- F2 UNNECESSARY CHOICE: one available color.
- Two interruptions (modals) before any product information.
- Merchandising *in front of* the purchase path rather than around it.
- Delivery cost and date, the two facts that decide many purchases, are hidden.
- The primary action is far from the product decision on mobile.

## The better version (mobile, first viewport and just below)

```
[ product image, swipeable, not autoplaying ]
Trail Runner 3 · £120
Color: Moss (only color)            Size: UK 9 (your usual) · Change
Delivery to UK: free, arrives Thu    Returns: 30 days
[ Add to bag ]                       (sticky once scrolled past)
— then: details, reviews, lifestyle story, "Complete the look" —
```

- No region modal (respect the domain; offer a quiet country switch in the footer).
- Newsletter offer deferred to after the first add-to-bag or the checkout confirmation.
- Rich imagery and story remain, *after* the decision block.

## Measurements

```
Before: 2 dismissals · 2 decisions (1 one-option) · 1 blank known input · action below 3+ screens of scroll
After:  0 dismissals · 1 decision (size, defaulted, changeable) · action in first viewport
Preserved: size choice remains visible and changeable; price and returns explicit
```

## When this lesson does not apply

Launch pages for flagship products may deliberately lead with story; even then, keep a persistent,
reachable purchase action and never gate it behind modals.

## Canonical rule

**Use rich merchandising around, not in front of, purchase.**
