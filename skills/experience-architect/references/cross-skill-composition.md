# Cross-Skill Composition

When more than one specialist applies, order matters. Structure before surface, and
evaluation at the end.

## General order

1. **Understanding and friction** (product-friction, workflow-compression): decide what the
   surface should even contain and which steps exist.
2. **Structure** (composition-repair, empty-state-design, state-design): arrange content and
   states.
3. **Interaction** (interaction-design): make controls obvious and safe within that structure.
4. **Identity** (visual-identity): express the product through the environment.
5. **Motion** (motion-design): explain events in the final structure.
6. **Verification** (responsive-validation): check real sizes and conditions.
7. **Judgment** (anti-slop-ui, critical-review): gate the result.

Skipping ahead causes rework: animating a layout that later changes, or branding a flow that
later loses two screens.

## Common compositions

### A visually blank dashboard
```
experience-architect
→ empty-state-design   (is it genuinely empty, or sparse? what is the real next action?)
→ composition-repair   (focal point, viewport budget, remove dead space)
→ visual-identity      (environment carriers, if the archetype allows)
→ anti-slop-ui         (no fake stats or filler)
→ critical-review      (is it actually better than before?)
```

### A 12-click setup flow
```
experience-architect
→ workflow-compression (map, classify, remove, recount)
→ product-friction     (terminology, concepts, why the flow exists)
→ interaction-design   (inline controls, defaults, confirmation vs undo)
```

### A live product that feels flat
```
experience-architect
→ state-design         (what states exist, which transitions matter)
→ motion-design        (event-driven motion for those transitions)
→ visual-identity      (environment and state colors)
```

### Mobile breaks
```
experience-architect
→ responsive-validation (find where and how it breaks)
→ composition-repair    (repair the structure)
→ interaction-design    (reach, targets, keyboard, sheets)
```

### Join page / sign-in page feels generic
```
experience-architect
→ composition-repair   (aligned vs composed; viewport budget)
→ visual-identity      (environment, not the textbox)
→ interaction-design   (keep the input conventional, fast, accessible)
→ anti-slop-ui         (no segmented-box gimmick, no fake premium)
```

### Reviewing someone's proposed redesign
```
experience-architect
→ critical-review      (goal, proposal, current state, hidden costs)
→ one domain specialist to substantiate the key finding
```

## Avoiding duplication

- Run the shared evaluation (rubric, gate) once at the end, not per specialist.
- Each specialist should pick up the previous one's findings rather than re-diagnosing.
- If two specialists recommend conflicting things (identity wants a dramatic hero; workflow
  wants the task above the fold), resolve explicitly using the page archetype and the user's
  goal, and say which won and why.
