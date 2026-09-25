# Experience Operating Contract

This contract makes the collection active during product work. It is deliberately short enough
to load in every installed specialist. Apply the smallest branch that fits; do not activate every
specialist for a text-only or backend-only change.

## Significance gate

Treat work as **meaningful experience work** when it changes a user-facing route or screen, layout,
responsive behavior, workflow steps, controls, states, motion, visual direction, empty state, or
generated UI; when it changes three or more related components; or when the user asks to review,
redesign, improve, modernize, make memorable, make easier, or finish a surface.

Do not run the full contract for copy-only, token-renaming, test-only, or isolated implementation
changes unless the user asks for experience review. A narrow task may still load one specialist.

## Conditional depth rules

Use the first matching rule, then add only rules made relevant by the work:

| Condition | Required action before recommendation or edit |
|---|---|
| Visual direction, brand, personality, or “modern/fun” changes | Read `selection.md` and `directions-index.md`; compare three families, select one, then read the selected family. |
| Page structure, hierarchy, whitespace, or composition changes | Read `compositions-index.md`; name one candidate and read its family. If whitespace is defended, read `whitespace-and-dead-space.md` or record equivalent measured evidence. |
| A standard control becomes custom, animated, or novel | Read `familiar-controls.md` or the interaction-cost reference; state the user gain and test paste, keyboard, focus, touch, and assistive technology paths. |
| A workflow gains or loses steps, questions, screens, waits, or confirmations | Run the known-context inventory and produce typed before/after counts. |
| A state, loading, error, empty, optimistic, offline, or background job changes | Read the relevant state precedent; write a state matrix with authority, recovery, and next action. |
| Motion is added or changed | Map motion to an event, define reduced-motion behavior, and run the motion scanner when available. |
| A treatment resembles an AI default | Run the anti-slop justification branch: job, product root, alternative, cost, and failure condition. |
| A user-facing implementation can run in a browser | Follow the render contract below before claiming a visual result. |

If a required file is not installed, use the specialist's documented fallback and label the gap;
never silently replace evidence with taste.

## Render contract

For meaningful BUILD or REPAIR work, use this loop when a runnable browser or app is available:

```text
INSPECT → RENDER CURRENT → MEASURE → CHANGE → RENDER CHANGED
→ STRESS REAL STATES → COMPARE → CRITIQUE → KEEP / REVISE
```

Rendering may be skipped only when no browser is available, the project cannot run safely, the user
explicitly requests source-only analysis, the task is purely conceptual, or the cost is wildly
disproportionate. In those cases write **NOT VERIFIED IN RENDERED OUTPUT** and name the exact reason.
Source inspection alone never earns “verified.”

At minimum, choose the primary viewport plus one narrow or short viewport and two real states. Add
keyboard, large text/zoom, RTL, reduced motion, or touch checks when the surface supports them.

## Handoff artifact

When another specialist follows, leave a compact artifact rather than making it re-diagnose:

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

Specialized fields are additive: a workflow adds `before`, `after`, `known context`, and `preserved
judgment`; a direction adds `selected direction`, `identity carriers`, `environment`, `controls`,
and `avoid`; a state review adds `state matrix`, `authority`, `failure states`, and `recovery`.

## Evidence contract

For meaningful work, keep the distinction visible in notes or the final answer:

```text
Observed: what the running product or source actually showed.
Measured: counts, geometry, timing, or script output.
Changed: files or behavior changed.
Verified: checks performed after the change.
Not verified: checks skipped and why.
```

Do not force this block into a trivial answer, but do not omit it from a substantial review or
implementation result. A completion claim requires the relevant reference branch, measurement,
render, and specialist handoffs to be either satisfied or explicitly marked not verified.
