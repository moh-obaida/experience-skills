---
name: anti-slop-ui
description: "Use this skill whenever a UI looks template-made or AI-generated, before presenting any UI the agent generated, when a design is described as clean, modern, sleek, or premium, when someone proposes or questions a trend (gradients, glass, bento, dark mode, big rounded cards), or when asked whether a pattern is slop or to de-genericize or sharpen a design or component. Detects and repairs centered-card syndrome, fake-premium whitespace, card and pill overuse, gradient and glass abuse, meaningless stat cards, hero clichés, overdesigned inputs, generic copy, and motion slop, and keeps a trend when it does a real job (no reverse dogma). Includes a static signal scanner and a final slop gate."
license: MIT
compatibility: "The optional scanner needs Node.js 18+. No other dependencies."
metadata:
  version: "0.3.0"
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
2. Read `references/_shared/experience-operating-contract.md`; its significance, render, and
   evidence rules are mandatory for pre-ship work.
3. Read `references/_shared/model-instincts.md`. Most slop comes from those reflexes
   (whitespace → premium, cards → organized, empty page → add filler, simple input → make it special).

<!-- core-brief:start · GENERATED FROM shared/philosophy/core-brief.md by npm run sync. Do not edit here. -->
**Core rules in brief.** These apply even before you open `references/_shared/experience-core.md`.
Read that file (the full rules and evidence levels) before a full review, repair, or build.

- **Verdict before adjectives.** Do not write "clean," "modern," "great idea," or "looks good" until
  an observation earns it. The user's enthusiasm is not evidence; test the proposal against the goal.
- **Evidence levels on findings.** E1 rendered, E2 measured, E3 source, E4 documented,
  E5 screenshot, E6 assumed. If files, a browser, or a terminal are available, look or measure before
  claiming. Otherwise, name the checks you did not run.
- **Composition is not alignment.** Empty space needs a stated job, and sparseness is never fixed
  with filler (stats, tips, promos, decoration).
- **Personality belongs in the environment, not in standard controls.** A control changes only if
  the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Hand off when another experience skill fits better.** If part of the problem belongs to one
  (composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty
  states, slop, critical review) and it is installed, invoke it rather than improvising its method.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
<!-- core-brief:end -->

## Use this when

- A UI looks template-made or "AI-generated."
- You (the agent) are about to present generated UI: run the gate first.
- A design is praised as "clean," "modern," "sleek," or "premium" without specifics.
- Asked to de-slop, sharpen, or make a design less generic.

## Do not use this when

- The structure or workflow is the main problem; route through experience-architect.
- An existing product must be swept end to end, its identity extracted and protected, and every
  generated-looking area reconstructed and rerendered: use anti-ai-slop (this skill supplies the
  pattern knowledge and the final gate).
- A treatment belongs to an established, deliberate brand system; evaluate it, do not strip it for
  being unusual.

## Mandatory conditional loading

If generated UI is about to be presented, MUST load `references/final-slop-gate.md`. If a pattern is flagged, MUST load `references/alternatives-engine.md`, `references/_shared/context-adaptation.md`, `references/_shared/product-interiors-and-dense-states.md`, and `references/_shared/justified-trends.md` before removing it. If the surface can run, MUST collect rendered or scanner evidence before the final recommendation. Before judging any individual control, card, badge, or label, MUST load `references/_shared/control-necessity.md` and run its eight core questions; before judging any string, MUST load `references/_shared/product-copy.md`.

## Checkpoints

1. **For every flagged treatment or pattern:** can you state the job it does *here* (hierarchy,
   grouping, state, light, brand, affordance)? Yes → keep it and make it serve that job. No → remove
   or replace it. Never remove something only because it belongs to a category on a list
   (`references/_shared/design-vs-decoration.md`).
2. **For every number, card, tip, or illustration:** is it true, specific to this user, and does it
   change what they do next? No → remove it (`references/_shared/fake-density.md`). For every
   button, pill, badge, or icon: is it already available elsewhere on this screen, and does its
   visual weight match how often it's actually used? Run the full catalog in
   `references/_shared/control-necessity.md`; the worked critique in
   `references/_shared/sparse-account-surface.md` shows the expected level of specificity.
3. **After removing slop:** is the surface now dead space? Yes → fill it with structure, identity, or
   real content (`references/_shared/fake-minimalism.md`), never with a different trend.
4. **For every custom control:** does it make the task faster or more reliable? No → standard control;
   personality moves to the environment (anchor `references/_shared/join-code-page.md`).
5. **For every sentence of copy:** could a competitor use it unchanged? Yes → rewrite it with a
   specific, checkable claim. A synonym swap is not a rewrite. Check it against the generic-phrase
   list and copy-type table in `references/_shared/product-copy.md`, including personalization that
   reads as generated (truncated names, unearned possessives).
6. **Before presenting:** run `references/final-slop-gate.md`. Your summary contains no "clean,"
   "modern," "sleek," or "premium" unless followed by the evidence.
7. **Never delete a flagged pattern without running `references/alternatives-engine.md`:** at least three alternatives from different families, compared, then chosen by context.
8. **Reverse-dogma check:** before removing a gradient, glass, card, pill, centered layout, dark theme, serif, density, or animation, look for its justification in `references/_shared/justified-trends.md`. Justified → keep and strengthen.

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

## Design intelligence and precedent

| When | Load |
|---|---|
| Turning a detected default into alternatives | `references/alternatives-engine.md`, `references/_shared/anti-generic-alternatives.md` |
| Alternatives that change the page structure | `references/_shared/compositions-index.md` |
| Alternatives that change the visual direction | `references/_shared/directions-index.md`, `references/_shared/selection.md` |
| Showing the product instead of decorating around it | `references/_shared/product-first-presentation.md` |
| Dashboards | `references/_shared/data-visualization.md` |
| Measuring treatments in the rendered page | `scripts/inventory-styles.mjs` |

Adapted third-party material in the composition index, selection method, and chart guidance is
credited in `references/_shared/third-party-notices.md`.

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
- The anti-slop branch records the job, product root, alternative, cost, and failure condition for
  every treatment kept; a runnable surface was rendered or marked NOT VERIFIED IN RENDERED OUTPUT.
- The handoff artifact carries the chosen alternative and open risks to the next specialist.

## References

- `references/layout-and-space-slop.md`
- `references/surface-slop.md`
- `references/content-slop.md`
- `references/personality-slop.md`
- `references/final-slop-gate.md` — the gate before presenting
- `references/alternatives-engine.md` — detect, test justification, generate three alternatives, choose
- `scripts/inventory-styles.mjs` — rendered inventory of radii, shadows, gradients, blur, type, nesting, repeated cards
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `model-instincts.md`,
  `design-vs-decoration.md`, `fake-density.md`, `fake-minimalism.md`, `control-necessity.md`,
  `product-copy.md`, `anti-slop-gate.md`,
  `join-code-page.md`, `logo-removal-test.md`, `premium-slop.md`, `kpi-card-dashboard.md`,
  `sparse-account-surface.md`,
  `editorial-not-cards.md`, `anti-generic-alternatives.md`, `compositions-index.md`,
  `directions-index.md`, `selection.md`, `data-visualization.md`, `justified-trends.md`,
  `product-first-presentation.md`, `third-party-notices.md`
