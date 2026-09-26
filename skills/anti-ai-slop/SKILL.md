---
name: anti-ai-slop
description: "Use this skill whenever the user asks to remove the AI look from an existing site or app, says a real implementation looks AI-generated, templated, v0/shadcn/Tailwind-default, or 'like every other AI site', asks to de-AI, exterminate slop, or hunt down every generated-looking decision in a rendered product and fix it. Renders the current product, extracts and protects its existing identity, sweeps every surface for decorative, gradient, glass, card, pill, radius, shadow, typography, color, copy, hero, dashboard, bento, icon, dark-mode, depth, motion, empty-space, component-library, and fake-personality slop, traces each to source, replaces it with what this product would do instead, rerenders, and checks the result is neither generic nor merely weird. Not a style swap: keeps justified gradients, play, density, and expression."
license: MIT
compatibility: "Browser rendering strongly recommended. The optional identity extractor needs Node.js 18+ and reads local source only."
metadata:
  version: "0.5.0"
  collection: experience-skills
---

# Anti-AI-slop

The active remediation specialist. Take a real, rendered implementation, find every meaningful
decision that looks generated, templated, unjustified, derivative, filler-driven, or disconnected
from the product, and replace it with a decision that strengthens the identity already present.
The target is a product recognizable because its decisions belong together, not a product that
looks like this repository's taste.

**Distinct from `anti-slop-ui`.** anti-slop-ui is the knowledge, prevention, and gate specialist:
it judges whether a pattern is justified and supplies alternatives. This skill runs a full
render → extract identity → sweep → trace → replace → rerender loop on an existing product and owns
the repair.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`.
2. Read `references/identity-extraction.md` before judging anything. No identity ledger, no findings.
3. Read `references/_shared/model-instincts.md`: most generated decisions come from those reflexes.

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

- An existing site or app "looks AI-generated," "looks like every v0/shadcn/Tailwind site," or
  "has no identity," and the user wants it fixed, not just reviewed.
- A generated or template-started product must be de-slopped end to end before launch.
- `use-all-skills` reaches its de-generate phase after implementation and anti-slop-ui.
- anti-slop-ui or critical-review found widespread generated patterns across many surfaces.

## Do not use this when

- The question is whether one trend or treatment is justified, or a gate before presenting new UI
  → anti-slop-ui.
- The product has no identity yet and needs a direction or system → visual-identity (then return).
- One page needs exhaustive DOM/CSS inspection for all defects → interface-forensics.
- The structure is broken (overflow, no focal point) → composition-repair first.
- There is no implementation to render or read.

## Mandatory conditional loading

Before classifying findings, MUST load the taxonomy file for each class found:
`references/slop-surfaces.md` (decorative, gradient, glass, card, pill, radius, shadow, depth,
dark-mode, component-library), `references/slop-type-color-copy.md` (typography, color, copy, icon),
`references/slop-structure-motion.md` (hero, dashboard, bento, empty space, motion, generated
personality). Before replacing anything, MUST load `references/repair-loop.md`. Before removing a
gradient, glass, card, pill, dark theme, serif, density, or animation, MUST check
`references/_shared/justified-trends.md`. To understand what the product category actually needs,
load `references/_shared/niche-atlas-index.md` and the one matching niche file. When the fix needs
another structure, load `references/_shared/compositions-index.md` and
`references/_shared/anti-generic-alternatives.md`.

## Checkpoints

1. **Before any finding:** has the current product been rendered at a desktop and a phone size and
   an identity ledger written (`references/identity-extraction.md`)? No → render and extract first.
   Not runnable → mark every finding E3/E5 and say **NOT VERIFIED IN RENDERED OUTPUT**.
2. **For every candidate finding:** is it on the protected list (intentional, distinctive,
   working)? Yes → keep it, or strengthen it; do not "fix" identity into neutrality.
3. **For every flagged treatment:** can you state the job it does here (identity, hierarchy,
   environment, product meaning)? Yes → justified, keep. No → classify with the taxonomy and assign
   S0–S3 (`references/repair-loop.md`).
4. **Before replacing:** does the replacement answer "what would THIS product do instead?" using
   carriers from the ledger or the niche's realities? If it answers "what does this repository usually
   prefer?" → choose again.
5. **For every S0/S1 finding:** is the source traced (file, selector or component, token or class)?
   No → trace it, or hand the trace to interface-forensics; never patch a symptom at a leaf when a
   token or shared component produced it.
6. **After each repair group:** rerendered at the same sizes and states, compared before/after, and
   checked for new slop introduced by the repair (a replacement can itself be generic)? No → do it
   before the next group.
7. **Before finishing:** passes both originality tests: (a) without logo and name, could this belong
   to twenty unrelated generated sites? (b) is it distinctive only because it is weird? Either yes →
   continue.
8. **Before presenting:** every S0/S1 is fixed, justified, or explicitly open with a reason; the
   report uses the evidence format and names what was protected.

## Workflow

1. **Render** the current product: primary routes, a sparse and a dense state, desktop and phone.
   Record viewport, route, state (`references/_shared/experience-operating-contract.md`).
2. **Extract identity** into the ledger; optionally run `node scripts/extract-identity.mjs <src>`
   for a token census, library-default matches, and slop class stacks (prompts, not verdicts).
3. **Protect** the intentional character: list what stays and why.
4. **Scan every surface:** shell, hero, sections, cards, forms, dashboards, empty/error states,
   footer, motion on load/scroll/hover. Use `references/_shared/design-cliches.md` as a checklist,
   not a verdict.
5. **Classify** each finding with the taxonomy files and severity S0–S3.
6. **Trace** each S0/S1 to its implementation (token, global CSS, shared component, utility
   classes, copy source). Hand exact cascade work to interface-forensics when it is non-trivial.
7. **Propose replacements** that fit the ledger and niche (`references/repair-loop.md` replacement
   matrix); for structural replacements compare three alternatives.
8. **Repair** S0 → S1 → S2 in coherent groups at the source (tokens and shared components first).
9. **Rerender** the same routes, sizes, and states.
10. **Compare** before/after side by side; revert changes that weaken identity or usability.
11. **Check for new slop** introduced by the repair.
12. **Verify** with the originality tests, contrast, responsive checks, and the report.

## Identity extractor

`node scripts/extract-identity.mjs <file-or-dir> [--json] [--limit N]` counts declared fonts,
colors, radii, shadows, blur, gradients, and motion in source; flags values that match common
component-library and framework defaults; and finds "slop stacks" (three or more generated-default
utilities on one element, such as `rounded-2xl shadow-xl backdrop-blur`). Exit codes: 0 no default
signatures or stacks, 1 findings, 2 usage error. A count is a question for the ledger, never proof;
a product can intentionally use a default.

## Hand-offs

- **interface-forensics:** exact DOM/cascade tracing before repair, and detail verification after.
  Sequence for large jobs: anti-ai-slop (conceptual findings) → interface-forensics (trace) →
  anti-ai-slop (identity-compatible replacements) → implement → interface-forensics (verify).
- **visual-identity:** when the ledger shows no identity to protect, get a direction first.
- **composition-repair:** when a replacement changes page structure beyond one section.
- **critical-review:** when unsure the repaired version beats the original.

## Completion criteria

- An identity ledger and protected list exist, and protected characteristics survived the repair.
- Every surface in scope was swept; each finding uses the evidence format with severity.
- S0/S1 findings are fixed at source, justified, or open with a reason; S2/S3 are listed.
- Before/after renders at the same sizes and states exist, or the gap is stated.
- Both originality tests were answered with evidence; no new slop was introduced.
- The report says what was kept and why, not only what was removed.

## References

- `references/identity-extraction.md` — identity ledger, intent signals, library-default values, protected list
- `references/slop-surfaces.md` — decorative, gradient, glass, card, pill, radius, shadow, depth, dark-mode, component-library slop
- `references/slop-type-color-copy.md` — typography, color, copy, and icon slop
- `references/slop-structure-motion.md` — hero, dashboard, bento, empty-space, motion, generated-personality slop
- `references/repair-loop.md` — severity, evidence format, replacement matrix, trace and verify loop, originality tests, report
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `model-instincts.md`, `design-cliches.md`, `design-vs-decoration.md`, `product-identity.md`,
  `product-copy.md`, `justified-trends.md`, `anti-generic-alternatives.md`, `compositions-index.md`,
  `logo-removal-test.md`, `identity-preserving-repair.md`, `niche-atlas-index.md`,
  `niche-business.md`, `niche-developer.md`, `niche-ai.md`, `niche-games.md`, `niche-education.md`,
  `niche-commerce.md`, `niche-finance.md`, `niche-media.md`, `niche-social.md`, `niche-health.md`,
  `niche-public.md`, `niche-travel.md`, `niche-physical.md`, `niche-creative.md`,
  `niche-personal.md`, `third-party-notices.md`
- Worked example: `references/_shared/identity-preserving-repair.md` (a repair that keeps a gradient
  and removes the purple glow); logo test anchor: `references/_shared/logo-removal-test.md`.
