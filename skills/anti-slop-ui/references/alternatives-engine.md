# The Alternatives Engine

Detection without alternatives produces holes or new clichés. This procedure turns every flagged
default into a considered choice. It uses the shared anti-generic alternatives map, the composition
and direction indexes, and the justified-trends precedent.

## Rule zero: techniques are not defects

Do not reject gradients, glass, cards, pills, centered compositions, dark themes, serif type,
monochrome, giant typography, brutalism, minimalism, density, or animation because models often misuse
them. Reject **unjustified defaults**. A technique is justified by one of: a long-standing brand
signature, audience expectation, content that needs it, or a product-derived shape
(`references/_shared/justified-trends.md`). If it is justified, keep it and make it serve that job
better.

## Procedure

1. **Detect.** Name the pattern and where it appears (rendered evidence, or `scripts/scan-slop.mjs`
   and `scripts/inventory-styles.mjs` counts as prompts).
2. **Name the job** it was trying to do (look up the row in `references/_shared/anti-generic-alternatives.md`).
3. **Test justification** (rule zero). Justified → keep and strengthen. Not justified → continue.
4. **Generate at least three alternatives from different families**: a composition alternative
   (`references/_shared/compositions-index.md`), a direction or identity alternative
   (`references/_shared/directions-index.md`), and a content alternative (real product, real state,
   specific copy; see `references/_shared/product-first-presentation.md`).
5. **Write one sentence per alternative** describing it for *this* product, with its cost.
6. **Compare** on: serves the job, fits the archetype, uses real content, slop distance, accessibility,
   cost. Use the comparison table in `references/_shared/selection.md` when the choice is visual.
7. **Choose, derive, and verify:** replace generic parts with product-specific content and motifs;
   render; run the final gate.

## Output shape

```
Detected: centered card on flat grey (join page) — job: frame a focused task
Justified? No (no environment, no type voice, nothing arrives in the space)
Alternatives:
  A Environment-first focus: board-geometry pattern field, standard code input (cost: one SVG pattern)
  B Asymmetric split: task left, live lobby preview right (cost: needs lobby data on the join page)
  C Dominant object: very large code field with the host's projected code style (cost: low)
Choice: A, with C's large type for the field. Reason: classroom distance and identity; B adds data dependence.
```

## Reverse-slop checks

- Did the "fix" introduce a new trend (brutalism, grain, oversized serif) without a product reason?
- Did removing a treatment remove its job too (hierarchy, grouping, state)?
- Did the page become emptier? Check fake minimalism.
- Would a designer who likes the original technique agree it was unjustified *here*?
