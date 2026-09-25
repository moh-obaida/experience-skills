---
name: experience-architect
description: "Diagnose product-experience problems in any digital product (website, app, game, tool, CLI) and route to the right specialist method: composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty states, AI-slop cleanup, or critical review. Use when a user says something feels off, generic, slow, confusing, empty, flat, or broken and the cause is unclear; when a task spans several experience concerns; or when a build, redesign, or review needs a structured loop and a final quality gate. Loads only the depth the problem needs."
license: MIT
metadata:
  version: "0.2.0"
  collection: experience-skills
---

# Experience Architect

The entry point of the collection. It does not contain the design encyclopedia. It turns a
vague symptom into named problems, pulls in only the specialists those problems need, runs a
build-verify-critique loop, and applies a final gate.

## Start here

1. Read `references/_shared/experience-core.md`. Its operating rules apply to everything below.
2. Establish the mode: REVIEW (report only), REPAIR (change and verify), BUILD (create), or VERIFY
   (check finished work). Honor it.

## Use this when

- The user reports a symptom without a diagnosis: "feels empty," "slow," "generic," "off," "flat,"
  "confusing."
- A task touches several experience concerns (a redesign, a new feature, a whole-screen review).
- You are about to build or substantially change a user-facing surface.
- The user asks for an experience audit of a product or area.

## Do not use this when

- The problem is already scoped to one specialist ("the table overflows at 360px"). Use that skill.
- The task is backend or infrastructure with no user-facing behavior.
- The user asked for a narrow mechanical change ("rename this button to Save"). Just do it.

## Checkpoints

Decision points, not advice. At each one, take the branch it names.

1. **Before diagnosing:** have you observed the surface at the strongest evidence level available?
   If a browser, simulator, or terminal is available and you have not used it → observe first.
   If none is available → say so now and mark findings E3/E5/E6.
2. **Before naming a problem:** can you point to an observation (a measurement, an element, a step
   count)? No → it is a hypothesis; label it and go find the evidence.
3. **Before loading a specialist:** does a ranked problem require it? Load at most three at first.
   A fourth needs a stated reason. Never load every specialist "to be thorough."
4. **If the user proposed a solution** ("add animations," "make the boxes fancier"): evaluate it
   against the goal before implementing it (critical-review method). If it fails the goal, say so
   and propose the alternative before doing any work.
5. **Before presenting any result:** run `references/final-gate.md`. Any FAIL you did not fix is
   listed; any unchecked item is NOT VERIFIED. Then reread your summary against
   `references/_shared/model-instincts.md` and delete praise you did not earn.
6. **Before routing:** name the problem class from the table in `references/diagnosis-and-routing.md` and its observable signal. A symptom without a confirmed signal stays a hypothesis.
7. **When two or more specialists apply:** use the matching recipe under "Specialist compositions" in the same reference, and pass each specialist's output (counted flow, state matrix, chosen direction) to the next instead of re-diagnosing.

## Workflow

```
UNDERSTAND → OBSERVE → CLASSIFY → LOAD DEPTH → CHANGE/ADVISE → RENDER/VERIFY → CRITIQUE → FINALIZE
```

1. **Understand.** Product, audience, devices, frequency of use; the surface and its archetype
   (`references/_shared/page-archetypes.md`); the goal; the mode; product maturity
   (`references/_shared/product-maturity.md`); constraints. Infer from the repository first; ask only
   what would change your approach. For games, CLIs, kiosks, live control, native apps, or public
   services, load `references/product-archetypes.md`.
2. **Observe.** Collect evidence per `references/_shared/evidence-standard.md`. Record observations
   separately from interpretations.
3. **Classify.** Load `references/diagnosis-and-routing.md`. Map symptoms to problem classes using
   the codes in `references/_shared/visual-problems.md` and `references/_shared/workflow-friction.md`.
   Rank by user impact: blocked task > slowed frequent task > damaged trust or comprehension >
   weak identity > polish.
4. **Load depth.** From the same reference, pick specialists and their order (structure before
   surface; judgment last). If a specialist is not installed, use its fallback method listed there
   and tell the user the full skill exists.
5. **Change or advise.** REVIEW: write findings. REPAIR/BUILD: follow `references/execution-loop.md`.
6. **Render and verify.** Primary size, one small and one short size, a sparse and a dense state,
   keyboard path. If you cannot render, list precise checks for the user.
7. **Critique.** Checkpoint 5.
8. **Finalize.** Report changes, evidence levels, gate results, unverified items, next step.

## Output (REVIEW and VERIFY)

```
## Diagnosis
Surface: <name> · Archetype: <archetype> · Mode: REVIEW · Evidence: <highest level used>

## Findings (ranked by user impact)
1. <code> <title> [E-level]
   Observed: ...
   Why it matters: ...
   Recommendation: ...  (tradeoff: ...)

## What works (only if earned, with evidence)
## Not verified
## Suggested order of work
```

For overall scoring, use verdict words from `references/_shared/experience-rubric.md`, not numbers.

## Product archetype and evidence

Classify the whole product with `references/_shared/product-archetypes.md` (it sets density, identity
intensity, motion, and empty-state defaults) and each surface with `references/_shared/page-archetypes.md`.
When the product is not a web app, `references/product-archetypes.md` explains how the advice changes.

## Failure modes

- Loading many references and producing a generic essay.
- Treating a symptom as a diagnosis ("it needs more color").
- Recommending a trend (glass, bento, dark mode) instead of fixing the named problem.
- Solving emptiness with filler, or clutter with emptiness.
- Declaring success from source code alone.
- Implementing the user's proposed fix without checking it serves their goal.

## Completion criteria

- Problems are named with shared codes, evidence-labeled, and ranked.
- Only needed specialists were applied, in a stated order.
- Changes were rendered and checked in more than one state and size, or the gap is stated.
- The final gate was run and reported honestly.
- The user knows what changed, what is verified, and the next step.

## References

- `references/diagnosis-and-routing.md` — symptoms → problem classes → specialists; ordering; fallbacks
- `references/product-archetypes.md` — how product type changes the advice
- `references/execution-loop.md` — the build/repair loop
- `references/final-gate.md` — the gate before presenting
- `references/_shared/` — generated copies: `experience-core.md`, `evidence-standard.md`,
  `page-archetypes.md`, `product-archetypes.md`, `product-maturity.md`, `visual-problems.md`,
  `workflow-friction.md`, `experience-rubric.md`, `model-instincts.md`
