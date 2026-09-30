# Final Gate

Run before presenting work in any mode. Report each line honestly: PASS, FAIL (with what
remains), or NOT VERIFIED (with why).

## Rendered result first

Before the checklist, open the final captures (or the running surface) and answer one question: does
the rendered result still contain a material visual failure for this user's task? Examples: a large
empty or dark region with no job, a dominant surface carrying little useful content, clipped or
colliding content, a primary action that is hard to find. If yes, the gate is FAIL and no count of
passing lines changes that; repair it or list it as unresolved. A specialist having run, or a clean
checklist, does not answer this question. If nothing can be rendered, write **NOT VERIFIED IN
RENDERED OUTPUT** here instead of passing it.

## Purpose and hierarchy
- [ ] A first-time user can tell what this surface is for and what to do next.
- [ ] One P0 per surface; visual weight matches importance.

## Composition
- [ ] Space is deliberate for this archetype (no dead space, no cramming).
- [ ] The layout is composed, not merely centered or aligned.
- [ ] No overflow, collisions, or clipping at checked sizes.

## Identity
- [ ] The surface would be recognizable without its logo, or plainness is a deliberate choice
      suited to the archetype (for example public service).
- [ ] Personality lives in the environment, not in decorated controls.

## Interaction
- [ ] Controls are conventional unless a custom control demonstrably adds value.
- [ ] Actions do not restate context the system already knows.
- [ ] Reversible actions use undo; irreversible ones confirm specifically.
- [ ] Keyboard path and visible focus work; targets are adequately sized.

## Workflow
- [ ] Known answers are not asked again; one-option choices are removed.
- [ ] The flow ends with a useful next action.
- [ ] Before/after step counts are reported for any flow change.

## States
- [ ] Empty/sparse, loading, error, and dense states are designed and honest.
- [ ] Transport failures are not reported as product failures.

## Motion
- [ ] Motion is tied to events; no uniform entrance animation.
- [ ] Reduced-motion alternative exists for meaningful motion.

## Slop and judgment
- [ ] No filler added to fill space (fake stats, tips, decorative cards).
- [ ] No unjustified gradients, glass, pills, or generic copy.
- [ ] No praise in the report that is not backed by evidence.

## Evidence
- [ ] Each claim carries its evidence level.
- [ ] Unverified items are listed with the checks the user should run.

## Reporting the gate

```
Final gate: rendered result PASS · 14 PASS · 1 FAIL · 2 NOT VERIFIED
FAIL: Error state for expired code still says "Something went wrong" (out of scope; noted).
NOT VERIFIED: RTL (no RTL locale configured); reduced motion (no browser emulation available).
```

Do not claim a clean gate you did not run.
