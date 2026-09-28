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

Apply every matching rule, then add only rules made relevant by the work. A rule marked required is
a gate: load its named reference before advice or edits. Invoking a skill does not load its references.
Keep a short required-reference list for each active skill; check it against references actually read
before proceeding. If a required reference is absent or unreadable, pause that branch and use only an
explicit fallback in the skill, recording the gap. Do not silently substitute memory or a neighboring
reference.

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

For meaningful BUILD or REPAIR work with a runnable browser or app, this sequence is a completion
gate, not advice:

```text
INSPECT → CAPTURE BEFORE → MEASURE → CHANGE → CAPTURE AFTER
→ INSPECT BOTH → COMPARE THE SAME ROUTES / STATES / SIZES
→ REPAIR AGAIN IF THE TARGET DELTA IS ABSENT → STOP
```

Capture the relevant current route and state before the first edit. After changes, use the same route,
state, and viewport so the comparison is meaningful. Open and inspect the actual captures; a browser
command, screenshot filename, or successful exit code alone is not evidence that the intended change
worked. State what visibly changed and whether the intended quality delta appeared. If it did not,
repair the cause and repeat the after capture and comparison before stopping.

Skip rendering only when no browser is available, the project cannot run safely, the user explicitly
requests source-only analysis, the task is purely conceptual, or the cost is wildly disproportionate.
In that case stop the render branch and write **NOT VERIFIED IN RENDERED OUTPUT** with the exact
reason and remaining check. Source inspection alone never earns “verified.” Do not claim the visual
completion criterion passed when the render branch is unavailable.

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

When another specialist follows, create this compact artifact immediately before activating it, then
include it in the activation request when the mechanism accepts context (otherwise leave it as the
immediately preceding task note). Do not expect the receiver to recover the prior reasoning. Every field is required;
write `none` or `not verified` where appropriate rather than omitting it:

```text
job:
locked truth:
open space:
current weakness or grounded upside:
relevant source and required references:
decision so far:
expected output from next specialist:
verification so far:
stop condition:
```

Add domain detail only when it changes the next decision; do not copy the whole product model. Only
hand off when an unresolved observation has a consequence and the next specialist can address it.
Otherwise record `no handoff required` and why. The receiver continues from the artifact, loads its
own required references, and returns the requested output or an explicit blocker.

## Conditional skill chaining

After the first specialist, re-check the observed concern graph. Activate a dependent skill only
when its trigger is present; do not turn these edges into a fixed pipeline:

| Observed result or change | Escalate when | Next skill |
|---|---|---|
| anti-ai-slop traces repeated styling to a shared hierarchy, density, or page-structure cause | Repair requires changing focal order, grouping, spatial authority, or route silhouette | composition-repair |
| visual-identity finds the working screen generic because its structure buries the instrument or route job | The structural weakness is independently material and direction alone cannot resolve it | composition-repair |
| interaction-design changes asynchronous feedback, persistence, recovery, or cross-surface state | The action changes state ownership, transitions, or what users see on return | state-design |
| composition-repair changes responsive hierarchy or the working surface's mobile distribution | The core task, instrument, or supporting panel changes at narrow/short sizes | responsive-validation |

The sender states the trigger and consequence in the handoff. The router checks that every confirmed,
material concern has an owner; it may stop after one specialist only when no unresolved dependency
or independent concern remains.

## Completion and execution trace

For creation or repair, stop only when the intended, product-grounded quality delta is visible in the
verified result and no material regression remains, or when verification is explicitly unavailable
and marked as such. A source edit alone is not a completion signal. Each active skill's required
references, handoffs, requested outputs, render gate, and stop condition must be satisfied or marked
blocked/unverified before completion.

Keep a compact internal trace for meaningful work; do not create a product file just for the trace.
Record one entry per skill with: `activated / observed trigger`, `required and loaded references`,
`handoff sent or not required`, `changed surface or no change`, `verification and quality delta`, and
`stop reason`. Preserve the structured trace in evaluation/debug records; show it to the user only
when requested or when needed to explain an incomplete result. For a formal evaluation/debug run,
append this machine-readable block at the end of the response; the harness stores it separately and
removes it before judging the user-facing answer:

Example (invented):

```html
<!-- experience-skills-trace
{"skills":[{"skill":"composition-repair","activatedBecause":"Observed route hierarchy hides the primary instrument.","requiredReferences":["composition-repair/references/_shared/compositions-index.md"],"loadedReferences":["composition-repair/references/_shared/compositions-index.md"],"handoff":{"status":"not-required","reason":"No unresolved structure or responsive concern remains."},"changed":["studio.html: moved the booking action into the primary instrument"],"verification":"Before/after captures inspected at 1440x900 and 390x844; the action is now dominant at both sizes.","stopReason":"The target delta is visible and no material regression remains."}]}
-->
```

Use one object per activated skill. `handoff.status` is `sent` with a complete transfer artifact, or
`not-required` with a reason. Required and loaded references are separate lists; do not claim a load
that did not occur. An unavailable verification names the exact blocker and sets the stop reason to
`unverified` or `blocked`, not `resolved`.

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
