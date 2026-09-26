<!-- GENERATED FROM shared/design-intelligence/selection.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Design Direction Selection

How to choose a visual direction without turning the library into a template engine. The
directions, compositions, palettes, and type systems in this library are *vocabulary*. The product
decides the sentence.

## Never do this

```
Fintech → "style 42" → blue gradient → cards → Inter
```

A product category never selects a style. Two banks can rightly look nothing alike; a bank and a
children's game can share a composition.

## The procedure

```
UNDERSTAND → CLASSIFY → CONSTRAIN → GENERATE (3, different families) → COMPARE → SELECT/SYNTHESIZE
→ DERIVE (product-specific) → COMPOSE → CHECK (logo test, anti-slop gate, states, accessibility)
```

1. **Understand.** Product, audience, context of use (device, distance, frequency, stress), the
   emotional goal (calm, confidence, energy, focus, delight) and the functional goal (speed, accuracy,
   comprehension, persuasion). Existing brand assets and constraints.
2. **Classify.** Product archetype (`product-archetypes.md`, a shared taxonomy) and the page
   archetype of each key surface. Archetype sets the identity budget and density range.
3. **Constrain.** Write the non-negotiables: accessibility level, platform conventions, performance
   budget, languages/scripts (RTL?), brand elements that must stay.
4. **Generate three candidates from different families** using `directions-index.md`. Different
   families means genuinely different compositions and type, not three colorways. For each, write
   two sentences: what it would feel like, and why it fits this product.
5. **Compare** in a table:

   | Criterion | A | B | C |
   |---|---|---|---|
   | Serves the functional goal (speed, clarity, persuasion) | | | |
   | Serves the emotional goal | | | |
   | Fits audience and context of use | | | |
   | Derivable from the product (not a trend) | | | |
   | Works on sparse and dense surfaces | | | |
   | Accessibility and performance risk | | | |
   | Slop risk (how close to model defaults) | | | |
   | Cost to build and maintain | | | |

6. **Select or synthesize.** Pick one, or combine deliberately ("public-service clarity + editorial
   typography + restrained product geometry"). State what each part contributes. Combining more than
   three sources usually produces noise.
7. **Derive.** Replace the direction's generic tendencies with product-specific decisions: motifs from
   the product's mechanic or content, color roles tied to its states, type chosen for its languages.
   The direction is a starting vocabulary; the result must not be recognizable as "the X style."
8. **Compose.** Choose compositions per surface from `compositions-index.md` (a direction does not
   dictate a layout).
9. **Check.** Logo test on three surfaces including a sparse and a dense one; anti-slop gate;
   contrast; reduced motion; RTL if relevant.

## From direction to a buildable system

For substantial greenfield work, a direction is only the first level. Use `design-system-selector.md` and `design-systems-index.md` to compare three authored systems with different structural theses. Load the selected family file, then `design-system-grammar.md`, `palette-themes.md`, `type-strategies.md`, and `font-pairings.md` for implementation roles. A theme varies tokens within the chosen system; it does not replace its composition or controls. If no system fits, derive a new one from the product and document the same roles before components.

## Offering choices to a user

When the user should decide, present the three candidates with the comparison table and a
recommendation. Never present three variations of the same family as a choice.

## Studying a reference the user admires

Extract its design DNA instead of copying it (this protocol adapts the "study" idea from the
Hallmark project; see the third-party notices file):

1. Name the composition (from `compositions-index.md`), the type roles and character, the color
   anchor and its footprint, the surface language, the rhythm (dense/sparse, symmetric/asymmetric),
   and the motion language (if observable).
2. Say which of these the user actually likes (often only one or two).
3. Say what depends on the reference's own conditions (their imagery, their brand, their audience).
4. Build something that keeps the liked qualities with *your* product's content and motifs.
5. Mark what could not be observed (rhythm is invisible in HTML alone; motion is invisible in a
   screenshot).

## Anti-template checks

- Could the chosen direction be swapped onto a competitor unchanged? Then it is not derived yet.
- Does every surface use the same composition? Operational and focused surfaces should differ.
- Did the palette come from a product-type lookup? Re-derive it from roles and brand.
- Is the result recognizable as a named trend (glassmorphism, bento, aurora) before it is
  recognizable as the product? Then the trend is doing the identity's job.
