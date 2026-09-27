---
name: use-all-skills
description: "Use this skill whenever the user asks to use all Experience Skills, requests a full Experience Skills pass, or wants a substantial product built or audited end to end. Consider every installed specialist, diagnose product risks, activate only those with a material contribution, implement, and verify primary journeys. Use Build Mode for new work and Audit Mode for mature or troubled products."
license: MIT
metadata:
  version: "0.6.0"
  collection: experience-skills
---

# Use all skills

“All” means coverage of consideration, not mandatory intervention. This conductor is a router. A skipped specialist, a no-change finding, or a preserved good decision can be the right outcome. Never invoke this skill recursively.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`.
2. Read `references/phase-map.md`; inspect the repository, product, and rendered state when runnable.

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
- **Personality can come from the environment and causal product behavior.** A standard control
  changes only if the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Route selectively.** Consider the relevant experience skills; activate another only when it
  can resolve a material concern. No change and no handoff are valid outcomes.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
<!-- core-brief:end -->

## Use this when

- The user explicitly requests all Experience Skills or a full experience pass.
- A substantial new product or major surface needs product design, implementation, and verification.
- A mature product needs a broad, symptom-driven audit.

## Do not use this when

- A narrow issue has one clear specialist and the user did not request a full pass.
- There is no user-facing product surface.

## Checkpoints

1. **Before routing:** identify user job, product thesis, repeated core loop, core instrument, and a small set of invariants. Inspect existing strengths before changing them (`references/phase-map.md`).
2. **Choose mode:** Build Mode for greenfield, prototypes, and new surfaces; Audit Mode for mature interfaces, broad redesigns, known UX problems, or an explicit full review. “Full product” alone does not imply Audit Mode.
3. **Spend a skill budget:** consider all fourteen specialists, then activate the smallest set with evidence of leverage. About 3–6 materially active specialists is a useful greenfield expectation, not a cap. Each additional activation needs a product-specific reason (`references/participation-ledger.md`).
4. **Before another reference or handoff:** what observed concern remains, and could this material change a decision? If no, stop reading or handing off. Specialists may report no material issue, low severity, or preserve the current choice.
5. **Before visual selection:** protect the core instrument and invariants. Use `references/_shared/design-system-selector.md` only when comparing directions would help; an existing or original coherent direction may win. Keep the implementation note short (`references/design-artifact.md`).
6. **Before prolonged planning:** if the job, loop, instrument, invariants, main states, interaction architecture, direction, and major risks are sufficiently resolved, build now. Reserve substantial attention for implementation and verification.
7. **Before finishing:** repeatedly exercise the primary journey, mistakes and recovery, completion and continuation, secondary-surface return, and responsive/focus behavior where relevant. Fix blockers and major defects, rerun affected journeys, then stop when no high-value issue remains.

## Workflow

1. **Understand:** inspect the repo and product; state the job, thesis, core loop, core instrument, supporting surfaces, and protected invariants.
2. **Route:** diagnose top risks. Map them to specialists using `references/phase-map.md`; combine overlapping concerns and decline low-value activations. A specialist's finding distinguishes confirmed issue, strong concern, possible concern, optional opportunity, and style preference.
3. **Shape:** resolve only the interaction, state, composition, identity, and responsive questions that block implementation. Niche intelligence is contextual; the product's mechanics and observed evidence have priority. Use a structurally distinct comparison only when selection is uncertain.
4. **Build:** implement the core interaction and honest states. The rendered product can overturn the design artifact.
5. **Verify:** run scenario-based primary journeys at depth: repeat the core control, make a mistake, recover, finish, continue, use a secondary surface, and resume. Inspect state ownership and transitions, keyboard/focus, and responsive workflow. Test valid alternative paths where allowed.
6. **Review and repair:** activate anti-slop, forensics, or critical review only for an unresolved material concern or an explicit audit. Rank functional blockers above cosmetic polish; trace symptoms to causes. Repair and rerun affected scenarios.
7. **Stop:** when primary journeys work, transitions are coherent, responsive use is viable, and no blocker or major issue remains, report the result and meaningful limits concisely.

## Specialist routing

`experience-architect` clarifies structure; `product-friction` investigates recurring product confusion; `workflow-compression` removes unnecessary steps; `interaction-design` protects repeated controls; `state-design` models ownership and transitions; `visual-identity` derives expression; `composition-repair` aligns visual and functional weight; `responsive-validation` tests workflow across space; `empty-state-design` handles absence; `motion-design` explains and energizes events; `anti-slop-ui` and `anti-ai-slop` test generic or underdesigned patterns; `interface-forensics` traces observed defects; `critical-review` synthesizes severity. Consider all; invoke only where the diagnosis warrants it.

## Completion criteria

- The selected mode, top risks, active specialists, and consequential no-change decisions are clear. No participation quota exists.
- The core instrument and invariants survive the implemented design, including responsive use.
- Primary scenarios and important transitions have been exercised in the running product where possible; exact verification gaps are named.
- The final response prioritizes blockers, major issues, material changes, and remaining concerns without a roll call of skills.

## References

- `references/phase-map.md` — conditional routes and stop gates
- `references/participation-ledger.md` — compact routing and finding record
- `references/design-artifact.md` — optional operational implementation note
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection contract
- `references/_shared/niche-atlas-index.md` — product context; load only a relevant niche file: `niche-business.md`, `niche-developer.md`, `niche-ai.md`, `niche-games.md`, `niche-education.md`, `niche-commerce.md`, `niche-finance.md`, `niche-media.md`, `niche-social.md`, `niche-health.md`, `niche-public.md`, `niche-travel.md`, `niche-physical.md`, `niche-creative.md`, `niche-personal.md`
- `references/_shared/selection.md`, `references/_shared/design-system-selector.md`, `references/_shared/design-systems-index.md` — optional direction comparison
- `references/_shared/design-systems-workspaces.md`, `references/_shared/design-systems-services.md`, `references/_shared/design-systems-culture.md`, `references/_shared/design-systems-learning.md`, `references/_shared/design-systems-operations.md` — load only a candidate family that may change the choice
- `references/_shared/design-system-grammar.md`, `references/_shared/palette-themes.md`, `references/_shared/type-strategies.md`, `references/_shared/font-pairings.md`, `references/_shared/family-components.md` — targeted implementation decisions
- `references/_shared/component-patterns.md`, `references/_shared/system-application-examples.md` — load only for a relevant component or route
- `references/_shared/third-party-notices.md` — adapted selection protocol provenance
