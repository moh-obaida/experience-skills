<!-- GENERATED FROM shared/evaluation/experience-operating-contract.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Experience Operating Contract

This contract makes the collection active during product work. It is deliberately short enough
to load in every installed specialist. Apply the smallest reasoning and routing branch that fits;
that does not mean choosing the smallest product change. Do not activate every specialist for a
text-only or backend-only change.

## Significance gate

Treat work as **meaningful experience work** when it changes a user-facing route or screen, layout,
responsive behavior, workflow steps, controls, states, motion, visual direction, empty state, or
generated UI; when it changes three or more related components; or when the user asks to review,
redesign, improve, modernize, make memorable, make easier, or finish a surface.

Do not run the full contract for copy-only, token-renaming, test-only, or isolated implementation
changes unless the user asks for experience review. A narrow task may still load one specialist.

## Protection and creation

First follow the requested job: REVIEW and VERIFY protect product truth and report material risk;
BUILD and quality-focused REPAIR also look for justified improvement. For creation work, separate
locked requirements and proven strengths from open design decisions. Assess the current quality in
those open areas: when an observed weakness or a clear, product-grounded upside exists, choose the
strongest justified improvement. Solve local causes locally and systemic causes systemically. A
working, acceptable interface is not automatically high quality; a strong interface is not a blank
canvas. No change is valid after that assessment when no material weakness or high-value, credible
improvement remains, or further change would be speculative or harmful. Do not turn this distinction
into a mode or a requirement to redesign. “Smallest useful” governs context and routing, not the
ambition needed to solve the diagnosed problem.

## Conditional depth rules

Use the first matching rule, then add only rules made relevant by the work:

| Condition | Required action before recommendation or edit |
|---|---|
| Meaningful experience work | Establish the smallest useful journey context before shaping the surface: user/job, start, critical action, success, immediate result or next step, likely consequential failure and recovery, continuation, and state that must persist. For a local change, this can stay in reasoning; do not create a journey document by default. Derive only the invariants that affect the decision from explicit source truth, observed behavior, product mechanics, and user goals. Keep inferred assumptions distinct from locked requirements. |
| A creation request or quality-focused repair | After separating locked and open decisions, ask what material product-specific quality is currently missing. If a meaningful weakness is systemic, address its shared cause; do not stop at cosmetic changes. Preserve high-quality areas. A no-change decision follows an actual assessment and remains valid when no credible upside justifies intervention. |
| Visual direction, brand, personality, or “modern/fun” changes | Name the product mechanics, core instrument, and invariants; read `selection.md` or `design-system-selector.md` when comparison could change the choice. Compare structurally different directions only when uncertain. |
| Page structure, hierarchy, whitespace, or composition changes | Read `compositions-index.md`; name one candidate and read its family. If whitespace is defended, read `whitespace-and-dead-space.md` or record equivalent measured evidence. |
| A standard control becomes custom, animated, or novel | Read `familiar-controls.md` or the interaction-cost reference; state the user gain and test paste, keyboard, focus, touch, and assistive technology paths. |
| A workflow gains or loses steps, questions, screens, waits, confirmations, identity, or permissions | Run the known-context inventory and produce typed before/after counts. For each meaningful new step or gate, name the source requirement, observed truth, technical necessity, or consequence that earns it. Do not invent product policy to make a UI pattern convenient. When source and product truth are silent, prefer a reversible, lower-friction interpretation unless risk or evidence argues otherwise. |
| A state, loading, error, empty, optimistic, offline, or background job changes | Read the relevant state precedent; model state ownership and important transitions, including trigger, preserved/reset data, feedback, focus, and recovery. For user-important objects, check where the change must remain visible on return or related surfaces; use one product truth, honest action labels, and visible outcomes. |
| Motion is added or changed | Map motion to an event, define reduced-motion behavior, and run the motion scanner when available. |
| A treatment resembles an AI default | Run the anti-slop justification branch: job, product root, alternative, cost, and failure condition. |
| A user-facing implementation can run in a browser | Follow the render contract below before claiming a visual result. |
| The input is a long, imperfect, or contradictory specification — not length alone, but many roles, workflows, states, cross-cutting rules, or a mix of requirements, recommendations, examples, and deferred items | Read `specification-pressure.md` when installed; otherwise triage inline before acting: separate hard requirements from recommendations and examples, keep exact numbers and exceptions bound to their conditions, leave deferred items deferred, and do not let the document's structure become the product's structure. |

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

At minimum, repeatedly exercise the relevant primary journey: enter, understand, act, receive
feedback, and continue. For material work, include a realistic mistake and recovery, completion,
return to a related or persistent surface, and the core job at a narrow or short viewport. On
responsive work, verify that the job and working surface remain usable; stacking components alone
does not establish continuity. Add keyboard, focus, large text/zoom, RTL, reduced motion, or touch
checks when relevant. A rendered screenshot is evidence of appearance in one state, not journey
verification. Check that visible controls describe their outcome and that valid and wrong-but-valid
actions produce truthful, consistent state. Do not silently reset a world unless reset is
intentional. For outcome-based tasks, test alternate valid methods rather than exact expected
strings. Scale sequence depth to consequence and scope; a narrow local review does not require a
full journey audit.

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

Specialized fields are additive only when they resolve the handoff question: a creative change may
add `locked / open`, `quality gap or upside`, `strengths to preserve`, and `decision question`; a
workflow may add `job / journey slice`, `before`, `after`, `known context`, and `why friction stays`;
a direction may add `selected direction`, `identity carriers`, `environment`, `controls`, and
`avoid`; a state review may add `state owners`, `transitions`, `cross-surface truth`, `authority`,
and `recovery`.
Include locked requirements, open decisions, and a relevant source slice when they bound the next
decision. Do not duplicate the whole product model or make every handoff fill every field.
Only hand off when an unresolved observation has a consequence and the next specialist can help.
Otherwise record “no handoff required.” Findings may be confirmed, strong, possible, optional,
stylistic, or no material issue. Existing coherent product decisions win over generic framework
advice absent a concrete failure or better product-specific alternative.

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
