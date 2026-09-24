---
name: experience-architect
description: "Diagnose product-experience problems in any digital product (website, app, game, tool, CLI) and route to the right specialist method: composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty states, AI-slop cleanup, or critical review. Use when a user says something feels off, generic, slow, confusing, empty, flat, or broken and the cause is unclear; when a task spans several experience concerns; or when a build, redesign, or review needs a structured loop and a final quality gate. Loads only the depth the problem needs."
license: MIT
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Experience Architect

The entry point of the collection. It does not contain the design encyclopedia. It
diagnoses what kind of problem is in front of you, pulls in only the expertise that problem
needs, runs a disciplined build-verify-critique loop, and applies a final gate.

The underlying stance, in three lines:

- Make the environment memorable.
- Make the interaction obvious.
- Make the outcome fast.

## Use this when

- The user reports a symptom ("it feels empty," "it's slow," "it looks generic," "something is
  off," "it feels flat") without a diagnosis.
- A task touches several experience concerns at once (a redesign, a new feature, a whole-screen
  review).
- You are about to build or substantially change a user-facing surface and want a structured
  loop with verification.
- The user asks for an experience audit of a product or area.

## Do not use this when

- The problem is already clearly scoped to one specialist (for example "the mobile layout
  overflows at 360px"). Go directly to that skill if it is installed.
- The task is purely backend, data, or infrastructure with no user-facing behavior.
- The user asked for a narrow mechanical change ("rename this button to Save"). Just do it.

## Operating modes

Honor the mode the user asked for. Ask only if genuinely ambiguous.

| Mode | The user wants | You deliver | You must not |
|---|---|---|---|
| REVIEW | Analysis | Findings with evidence and priorities | Change files |
| REPAIR | Fixes | Changed implementation, verified | Stop at recommendations when you have code access |
| BUILD | Something new | A designed and implemented surface | Skip states or verification |
| VERIFY | A check of finished work | Pass/fail against the gate, with evidence | Quietly start redesigning |

## Workflow

```
UNDERSTAND → OBSERVE → CLASSIFY → LOAD DEPTH → CHANGE/ADVISE → RENDER/VERIFY → CRITIQUE → FINALIZE
```

### 1. Understand

Establish, briefly:

- **Product and audience.** What is it, who uses it, on what devices, how often.
- **Surface.** Which screen, flow, or area; its page archetype (FOCUSED, OPERATIONAL,
  EXPERIENTIAL, CONTENT, DATA-HEAVY, TRANSACTIONAL, DISCOVERY, CREATION, LIVE CONTROL).
- **Goal.** What outcome the user of the product is trying to reach.
- **Mode.** REVIEW, REPAIR, BUILD, or VERIFY.
- **Maturity.** Prototype, early, growing, mature, regulated/public.
- **Constraints.** Design system, brand, framework, accessibility requirements, deadlines.

Infer from the repository and conversation first. Ask only for what you cannot infer and
what would change your approach.

Load `references/product-archetypes.md` when the product type is unusual (games, CLI, kiosk,
live control, native desktop) or when you are unsure how archetype changes the advice.

### 2. Observe

Gather the strongest available evidence (see `references/_shared/evidence-standard.md`):

1. Render it (browser, simulator, device, terminal) if tools allow.
2. Measure it (layout geometry, step counts).
3. Read the source.
4. Use screenshots or descriptions if that is all there is.

Record what you actually observed, separately from what you think it means. If you cannot
render, say so now and carry that limitation to the end.

### 3. Classify

Name the problems using shared vocabulary. Load `references/problem-taxonomy.md` to map
symptoms to problem classes, and `references/_shared/visual-problems.md` or
`references/_shared/workflow-friction.md` for the canonical codes.

Most real problems are two or three classes at once. Rank them by user impact.

### 4. Load depth

Load `references/routing.md` and pick the specialist skills (or, if they are not installed,
their methods as summarized there). Load `references/cross-skill-composition.md` when more
than two specialists apply, to order them and avoid duplicated work.

**Never load every specialist by default.** Two or three is typical. Each additional one must
earn its place.

### 5. Change or advise

- In REVIEW mode: write findings (see "Output" below).
- In REPAIR and BUILD modes: follow `references/execution-loop.md`. Structure before surface:
  hierarchy and composition first, identity and motion after, states throughout.

### 6. Render and verify

After meaningful changes, render and inspect again. Check at least:

- The primary viewport the product is used at, plus one small and one short size.
- The empty or sparse state and one dense or long-content state.
- Keyboard focus through the main path.

If you cannot render, list the precise checks the user should run.

### 7. Critique your own result

Before presenting, run `references/final-gate.md`. Treat your own output as someone else's
proposal: what would a critical reviewer say? Fix what you can; name what you did not fix.

### 8. Finalize

Report what changed, the evidence level for each claim, what remains unverified, and the
next most valuable improvement.

## Routing at a glance

| Symptom | Start with | Often also |
|---|---|---|
| Visually dead, under-composed, "clean" but empty | composition-repair | visual-identity, empty-state-design |
| Generic, template-like, "AI-generated" | anti-slop-ui | visual-identity, critical-review |
| Too many steps, clicks, questions | workflow-compression | product-friction |
| Controls confusing, clever, error-prone | interaction-design | state-design |
| Only works at one size | responsive-validation | composition-repair |
| Feels flat, lifeless, events go unnoticed | motion-design | state-design, visual-identity |
| Low-content surface feels unfinished | empty-state-design | composition-repair |
| Errors, loading, offline, jobs unclear | state-design | interaction-design |
| Whole product feels hard, users get lost | product-friction | workflow-compression |
| "Is my idea/redesign good?" | critical-review | whichever domain it touches |

Details, including what to do when a specialist is not installed: `references/routing.md`.

## Non-negotiable invariants

1. **Diagnose before prescribing.** No redesign without naming what is wrong and why.
2. **Evidence levels on claims.** Rendered, measured, source, screenshot, or assumed.
3. **No praise before evaluation.** Do not open with "clean and modern."
4. **Preserve user authority.** In REVIEW mode, change nothing. In REPAIR mode, do not stop at advice.
5. **Context is part of taste.** The same advice is not right for a tax form and a party game.
6. **Structure before decoration.** Fix hierarchy and composition before adding treatments.
7. **Measure workflow changes.** Before/after counts for any flow change.
8. **Accessibility is in scope.** Contrast, focus, keyboard, semantics, reduced motion, zoom.
9. **Do not optimize a screenshot.** Check real states and sizes.

## Output

For REVIEW and VERIFY, use this shape (drop sections that do not apply):

```
## Diagnosis
Surface: <name> · Archetype: <archetype> · Mode: REVIEW · Evidence: <highest level used>

## Findings (ranked by user impact)
1. <code> <title> [evidence level]
   Observed: ...
   Why it matters: ...
   Recommendation: ...  (tradeoff: ...)

## What works (only if earned)
## Not verified
## Suggested order of work
```

For REPAIR and BUILD, report: changes made (grouped by concern), before/after evidence,
gate results, unverified items, next step.

## Failure modes to avoid

- Loading every reference "to be thorough" and producing a generic essay.
- Treating a symptom as a diagnosis ("it needs more color").
- Recommending a trend (glass, bento, dark mode) instead of addressing the actual problem.
- Solving emptiness with filler, or clutter with emptiness.
- Declaring success from source code alone.
- Repeating each specialist's full process when a short pass suffices.

## Completion criteria

- The problem is named with shared vocabulary and ranked.
- Only relevant specialists were applied, in a sensible order.
- Changes (if any) were rendered and checked in more than one state and size, or the gap is
  stated explicitly.
- The final gate was run and its results are reported honestly.
- The user knows what changed, what is verified, and what to do next.

## References

- `references/routing.md` — symptom → skill routing, fallback when a skill is not installed
- `references/problem-taxonomy.md` — mapping user language to problem classes
- `references/product-archetypes.md` — how product type changes the advice
- `references/cross-skill-composition.md` — ordering multiple specialists
- `references/execution-loop.md` — the build/repair loop in detail
- `references/final-gate.md` — the final quality gate
- `references/_shared/` — shared philosophy, taxonomies, rubric (generated; do not edit here)
