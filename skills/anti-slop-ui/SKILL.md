---
name: anti-slop-ui
description: "Detect and repair AI-generated design clichés and the superficial reasoning behind them: centered-card syndrome, fake-premium whitespace, card and pill overuse, gradient and glass abuse, bento everywhere, meaningless stat cards, hero clichés, overdesigned inputs, generic copy, icon and typography slop, motion slop, fake depth, and fake personality. Use when a UI looks template-made or 'AI-generated', before presenting any generated UI, when reviewing a design described as clean, modern, or premium, or when asked to de-slop, de-genericize, or sharpen a design. Includes a static signal scanner and a final slop gate."
license: MIT
compatibility: "The optional scanner needs Node.js 18+. No other dependencies."
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Anti-Slop UI

"Slop" is design produced by default rather than by decision: the gradients, glass panels,
pill badges, stat cards, centered cards, and "Unlock your potential" copy that appear when a
model (or a hurried person) reaches for what usually appears in interfaces instead of what this
product needs.

Slop is rarely ugly. It is usually competent, smooth, and indistinguishable from a thousand other
products. That is the problem.

> Clean is not automatically good.
> Do not call an empty page premium because it has whitespace.

## Use this when

- A UI "looks AI-generated," templated, or generic.
- You (the agent) are about to present generated UI. Run the gate first.
- A design is being praised as "clean," "modern," "sleek," or "premium" without specifics.
- Asked to de-slop, sharpen, make less generic, or "make it look designed."
- Reviewing a PR or mockup with heavy use of gradients, glass, pills, cards, or stat tiles.

## Do not use this when

- The product's structure or workflow is the main problem; slop removal on a broken flow is
  cosmetic. Route through experience-architect.
- A treatment is part of an established, deliberate brand system. Evaluate it, but do not strip a
  real identity for being unusual.

## The stance

Every item in this skill is *sometimes right*. The rule is not "never use gradients"; it is
"every treatment must have a job you can state." Unjustified treatments are removed or replaced
by ones with a job. See `references/_shared/design-vs-decoration.md`.

Also resist the reasoning slop in `references/_shared/model-instincts.md`: whitespace → premium,
gradient → modern, cards → organized, pills → friendly, empty page → add filler, simple input →
make it special, user excitement → praise.

## Workflow

### 1. Scan
Look at the rendered UI (or code, if that is all you have). Optionally run the scanner over
source to get counts:

```bash
node scripts/scan-slop.mjs src/
```

It reports signals (gradient count, backdrop blur, very large radii, pill classes, uppercase
microtype, generic copy phrases, emoji in headings, `transition: all`). Counts are prompts to
look, not verdicts.

### 2. Identify patterns
Name what you see using the references:

| Pattern | Reference |
|---|---|
| Hero → features → CTA template; interchangeable landing pages | `references/generic-ai-layouts.md`, `references/hero-cliche.md` |
| Logo + heading + card centered on a blank page | `references/centered-card-syndrome.md` |
| Vast empty space called premium | `references/fake-premium-whitespace.md` |
| Everything in cards | `references/card-overuse.md` |
| Everything in pills | `references/pill-overuse.md` |
| Gradients on buttons, text, backgrounds | `references/gradient-abuse.md` |
| Frosted glass panels | `references/glass-abuse.md` |
| Bento grids for every feature list | `references/bento-everywhere.md` |
| Dashboard = four KPI cards + chart | `references/generic-dashboard.md`, `references/meaningless-stat-cards.md` |
| Custom segmented inputs, animated labels | `references/overdesigned-inputs.md` |
| "Unlock," "Seamlessly," "Elevate" | `references/generic-copy.md` |
| Icon on every item; sparkles for AI | `references/icon-slop.md` |
| One neutral sans; gradient text; gray eyebrows | `references/typography-slop.md` |
| Fade-up everything; floating blobs | `references/motion-slop.md` |
| Stacked shadows, glows, fake 3D | `references/fake-depth.md` |
| Emoji, mascots, quirky copy as personality | `references/fake-personality.md` |
| Many treatments competing | `references/visual-noise.md` |

### 3. Ask the value question
For each flagged element: what job does it do here? Who would miss it? If there is no answer,
it goes. If there is a job, keep it and make it serve that job better.

### 4. Replace with decisions
Removing slop often leaves emptiness. Do not refill it with different slop. Replace with:
- hierarchy and composition (composition-repair)
- product-derived identity (visual-identity)
- real content, state, and next actions (empty-state-design)
- specific copy

### 5. Run the gate
Run `references/final-slop-gate.md` (which applies `references/_shared/anti-slop-gate.md`) and
report its results honestly.

## Execution rules

- Judge in context: a children's game can use playful rounded shapes; a trading tool should not.
- Keep the product's genuine brand assets; remove only unjustified treatments.
- When removing fake data (stats, activity), check whether real data exists that could take its place.
- Rewrite generic copy with product-specific statements; do not just swap synonyms.
- Do not introduce a *new* trend (brutalism, grain, oversized serif) as the cure without a
  product reason. That is just different slop.
- Apply the same standard to this skill's own output.

## Failure modes

- **Mechanical banning:** removing every gradient, including the one that is the brand's light source.
- **Slop swap:** replacing glassmorphism with neo-brutalism for no reason.
- **Leaving holes:** stripping filler and leaving a dead page.
- **Copy synonym swap:** "Unlock" → "Discover," still generic.
- **Praise relapse:** ending the review with "now it looks clean and modern."

## Completion criteria

- Each flagged treatment was either justified (job stated) or removed/replaced.
- No fabricated content remains.
- Copy is specific to the product.
- Removed slop was replaced by structure, identity, or real content, not left as dead space.
- The final slop gate was run and reported, with unverified items listed.

## References

The 20 pattern references listed in step 2, plus:
- `references/final-slop-gate.md` — the gate to run before presenting
- `references/_shared/` — shared anti-patterns, gate, and worked examples (`premium-slop.md`,
  `kpi-card-dashboard.md`, `join-code-page.md`, `logo-removal-test.md`)
