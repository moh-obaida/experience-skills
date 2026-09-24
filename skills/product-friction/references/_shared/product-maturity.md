<!-- GENERATED FROM shared/taxonomies/product-maturity.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Product Maturity

The right recommendation depends on where a product is in its life. Advice that fits a
prototype can harm a mature product, and the reverse.

| Stage | Characteristics | What matters most | What to avoid recommending |
|---|---|---|---|
| PROTOTYPE | Exploring whether an idea works | Speed of learning; the core loop; one convincing path | Design systems, exhaustive state coverage, polish passes |
| EARLY PRODUCT | Real users, small scale, fast change | Core workflows, obvious gaps, first-use, identity foundations | Large refactors of taste; premature customization |
| GROWING | Many users, many features, team scaling | Consistency, friction on frequent paths, state completeness, performance | Novelty for its own sake; breaking learned behavior |
| MATURE | Large installed base, learned habits | Continuity, measured change, accessibility, expert efficiency | Sweeping redesigns without migration; removing familiar paths |
| REGULATED / PUBLIC | Legal, safety, or civic obligations | Clarity, accessibility, auditability, plain language | Visual spectacle; removing required steps |

## How maturity changes advice

- **Identity:** a prototype needs a direction, not a system. A mature product needs its identity
  applied consistently, not reinvented.
- **Workflow:** in a prototype, compress the core loop only. In a mature product, weight changes
  by frequency and preserve expert muscle memory.
- **States:** a prototype may skip rare states if it says so. A growing product must cover
  empty, error, and loading honestly.
- **Motion:** a prototype needs a few meaningful event moments. A mature product needs motion
  tokens and reduced-motion support.

State your assumption about maturity when it affects your recommendation.
