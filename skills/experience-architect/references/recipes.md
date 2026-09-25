# Multi-Skill Recipes and Handoff Contracts

Use a recipe when two or more problem classes are material. The order is a dependency graph: the
next specialist consumes the previous artifact and does not restart diagnosis. Stop at the first
point where the next specialist would address only low-impact polish.

## EXPERIENCE REPAIR — VISUALLY DEAD PRODUCT

```text
composition-repair → visual-identity → anti-slop-ui → responsive-validation → critical-review
```

Use for a blank, generic, or unfinished dashboard, home, join page, or app surface. Composition
names the archetype, P0, focal point, viewport budget, dead regions, and selected composition.
Identity then selects a direction from three families and names carriers. Anti-slop checks each
treatment and supplies positive alternatives. Responsive validation renders the changed structure.
Critical review compares the result with the original and can reject it.

## FLOW COMPRESSION

```text
workflow-compression → interaction-design → state-design → critical-review
```

Use when a flow is too long, repeats known information, asks too many questions, or hides waits.
The workflow artifact must contain `before`, `after`, known context, preserved judgment, remaining
friction, and safeguard decisions. Interaction consumes it to scope controls. State design consumes
the new sequence to cover loading, failure, retry, and recovery. Critical review checks whether the
shorter flow merely moved work onto the user.

## LIVE EXPERIENCE

```text
state-design → interaction-design → motion-design → responsive-validation
```

Use for multiplayer, monitoring, streaming, collaboration, uploads, generation, or any surface
whose important information changes while open. State design produces a state matrix and authority
model. Interaction scopes actions to the current object and connection. Motion maps visible events
to a motion language and reduced-motion equivalent. Responsive validation checks live updates at
narrow widths, touch, keyboard, and reconnect states.

## REDESIGN REVIEW

```text
critical-review → composition-repair → visual-identity → anti-slop-ui
```

Use before endorsing a proposed redesign or a request to make an existing product “more modern,”
“fun,” or “like X.” Critical review records the goal, current state, proposal, alternative, evidence,
costs, and verdict. Composition checks whether the proposal changes structure rather than decoration.
Identity tests product-derived carriers. Anti-slop runs the final justification branch.

## GENERATED UI SHIP GATE

```text
composition-repair → responsive-validation → interaction-design → anti-slop-ui → critical-review
```

Use before presenting or shipping a substantial generated surface. It is deliberately not for a
one-word copy edit or isolated token rename. The surface must be rendered when runnable, stressed
with real states and content, checked for conventional controls, scanned for defaults, and judged
against the user's goal. If rendering is skipped, the final result says **NOT VERIFIED IN RENDERED
OUTPUT** with the exact exception.

## Transfer artifact

Every specialist handoff carries this minimum:

```text
mode:
surface / archetype:
evidence:
decision:
changed or proposed:
constraints preserved:
open risks:
verification:
```

Add the domain fields from the sending skill. A missing field is an incomplete handoff, not an
invitation for the next skill to silently guess.
