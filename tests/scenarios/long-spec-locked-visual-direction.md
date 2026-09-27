# Scenario: Long Spec With a Locked Visual Direction

## Scenario
A team pastes a long, detailed specification for an internal logistics/fleet tool: multiple
roles, a dense dispatch workflow, exact SLA numbers — and a complete, explicit design system
(palette hex values, a named type family, 4px spacing scale, card-based density, dark mode as the
default). The product logic is extensive, but the visual direction is not open; it's stated as
fact, the same way the SLA numbers are.

## Prompt
Full spec attached (dispatch workflow, driver states, exact SLA thresholds, escalation rules — it's
long). We also already have our design system locked: canvas #0B1220, surface #131B2B, ink #E7ECF5,
action #3B82F6 accent, Inter for UI text, JetBrains Mono for vehicle IDs and timestamps, 4px base
spacing, 6px radius, card-based density, dark mode only. Build the dispatcher's live board.

## Current problem
Because the specification is long and detailed, a model may treat length itself as evidence that
visual direction is open, reach for the Niche Design Atlas or the design-system selector to
"improve" or diversify the look, propose an alternative palette or type pairing "for better
contrast" without a demonstrated failure, or otherwise spend effort re-deciding something the
document already decided — while the actual open territory (how the dispatch board itself is
composed, which states get a HUD treatment, how escalation is surfaced) goes underexamined.

## Expected skills
- state-design
- visual-identity

## Key principles expected
- A locked direction stated in the current specification is treated the same as an existing,
  already-built brand system: extend and operationalize it, do not compare it against Atlas
  candidates.
- Prompt length and detail are not evidence that design direction is open; the SLA numbers being
  exact does not make the palette any more "open" than they are.
- Visual Identity's effort goes into applying the locked system consistently across sparse, dense,
  and error states of the dispatch board — not into proposing an alternative direction.
- The design-system selector is not invoked to compare directions here; comparison is reserved for
  what the spec left open (board composition, escalation surfacing, responsive collapse).
- State Design still gets full attention: driver/vehicle states, SLA-breach transitions, and
  escalation ownership are genuinely undecided territory and deserve it.

## Unacceptable recommendations
- Proposing a different palette, type pairing, or radius "to feel more modern" without a stated
  product failure in the given one.
- Running the design-system selector to compare three Atlas candidates against the user's own
  stated system.
- Treating the detailed SLA/workflow content as a reason to add more visual richness or variety.
- Skipping state modeling because the visual system already looks resolved.
