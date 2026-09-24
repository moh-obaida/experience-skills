---
name: anti-slop-ui
description: "Detect and repair AI-generated design clichés and the superficial reasoning behind them: centered-card syndrome, fake-premium whitespace, card and pill overuse, gradient and glass abuse, bento everywhere, meaningless stat cards, hero clichés, overdesigned inputs, generic copy, icon and typography slop, motion slop, fake depth, and fake personality. Use when a UI looks template-made or 'AI-generated', before presenting any generated UI, when reviewing a design described as clean, modern, or premium, or when asked to de-slop, de-genericize, or sharpen a design. Includes a static signal scanner and a final slop gate."
license: MIT
compatibility: "The optional scanner needs Node.js 18+. No other dependencies."
metadata:
  version: "0.1.1"
  collection: experience-skills
---

# Anti-Slop UI

"Slop" is design produced by default rather than by decision: the gradients, glass panels, pill
badges, stat cards, centered cards, and "Unlock your potential" copy that appear when a model (or
a hurried person) reaches for what usually appears in interfaces instead of what this product needs.

**This skill judges justification, not aesthetics by category.** A glass surface, bento layout,
generous whitespace, gradient, or pill can be excellent in the right context. The failure is using
one without a job.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/model-instincts.md`. Most slop comes from those reflexes
   (whitespace → premium, cards → organized, empty page → add filler, simple input → make it special).

## Use this when

- A UI looks template-made or "AI-generated."
- You (the agent) are about to present generated UI: run the gate first.
- A design is praised as "clean," "modern," "sleek," or "premium" without specifics.
- Asked to de-slop, sharpen, or make a design less generic.

## Do not use this when

- The structure or workflow is the main problem; route through experience-architect.
- A treatment belongs to an established, deliberate brand system; evaluate it, do not strip it for
  being unusual.

## Checkpoints

1. **For every flagged treatment or pattern:** can you state the job it does *here* (hierarchy,
   grouping, state, light, brand, affordance)? Yes → keep it and make it serve that job. No → remove
   or replace it. Never remove something only because it belongs to a category on a list
   (`references/_shared/design-vs-decoration.md`).
2. **For every number, card, tip, or illustration:** is it true, specific to this user, and does it
   change what they do next? No → remove it (`references/_shared/fake-density.md`).
3. **After removing slop:** is the surface now dead space? Yes → fill it with structure, identity, or
   real content (`references/_shared/fake-minimalism.md`), never with a different trend.
4. **For every custom control:** does it make the task faster or more reliable? No → standard control;
   personality moves to the environment (anchor `references/_shared/join-code-page.md`).
5. **For every sentence of copy:** could a competitor use it unchanged? Yes → rewrite it with a
   specific, checkable claim. A synonym swap is not a rewrite.
6. **Before presenting:** run `references/final-slop-gate.md`. Your summary contains no "clean,"
   "modern," "sleek," or "premium" unless followed by the evidence.

## Workflow

1. **Look** at the rendered UI (or code, if that is all you have). Optionally count signals:
   ```bash
   node scripts/scan-slop.mjs src/
   ```
   Counts (gradients, blur, large radii, pills, eyebrows, generic phrases) are prompts to look,
   never verdicts. A high count on a deliberate brand is fine; a zero count proves nothing.
2. **Name what you see** with the references, each organized as "earns its place when / is a default
   when / ask / repair":

   | Area | Load |
   |---|---|
   | Template skeletons, centered cards, generous whitespace, heroes, bento grids | `references/layout-and-space-slop.md` |
   | Cards, pills, gradients, glass, shadows, visual noise | `references/surface-slop.md` |
   | Stat cards, dashboards, copy, icons | `references/content-slop.md` |
   | Clever inputs, typography, motion, borrowed cuteness | `references/personality-slop.md` |

3. **Apply checkpoints 1–5** to each finding.
4. **Replace with decisions:** hierarchy and composition (composition-repair), product-derived
   identity (visual-identity; anchor `references/_shared/logo-removal-test.md`), real content and
   next actions (empty-state-design), specific copy.
5. **Gate** (checkpoint 6), reporting justified / fixed / accepted / open / not verified.

Anchors: `references/_shared/premium-slop.md`, `references/_shared/kpi-card-dashboard.md`,
`references/_shared/editorial-not-cards.md`.

## Execution rules

- Judge in context: rounded playful shapes can be right for a children's game and wrong for a
  trading tool.
- Keep genuine brand assets.
- When removing fake data, check whether real data can take its place.
- Do not cure slop with another trend (brutalism, grain, oversized serif) without a product reason.

## Failure modes

- Reverse dogma: removing every gradient, pill, or card by category.
- Slop swap: one trend for another.
- Leaving holes after stripping filler.
- Synonym-swapped copy.
- Ending the review with "now it looks clean and modern."

## Completion criteria

- Each flagged treatment was justified (job stated) or removed/replaced.
- No fabricated content remains; copy is specific.
- Removed slop was replaced by structure, identity, or real content.
- The gate was run and reported, with unverified items listed.

## References

- `references/layout-and-space-slop.md`
- `references/surface-slop.md`
- `references/content-slop.md`
- `references/personality-slop.md`
- `references/final-slop-gate.md` — the gate before presenting
- `references/_shared/` — generated copies: `experience-core.md`, `model-instincts.md`,
  `design-vs-decoration.md`, `fake-density.md`, `fake-minimalism.md`, `anti-slop-gate.md`,
  `join-code-page.md`, `logo-removal-test.md`, `premium-slop.md`, `kpi-card-dashboard.md`,
  `editorial-not-cards.md`
