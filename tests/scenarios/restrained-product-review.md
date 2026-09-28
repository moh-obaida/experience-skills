# Scenario: Review a Strong, Restrained Product Without Redesigning It

## Scenario
An invented reliability service uses a restrained green and gray queue, readable incident rows,
clear status and time metadata, selection-linked service details, and a narrow-screen layout that
keeps the queue usable. The product team asks for a critical review before release; visual direction
and information architecture are intentional and settled. They want evidence-backed material issues,
not a redesign proposal. Invented fixture: `signal-foundry.html`.

## Prompt
Critically review `signal-foundry.html` for material release risks. The visual language and queue to
detail model are settled; report evidence and risk, and do not redesign the page speculatively.

## Current problem
The task tests that a stronger creation posture does not leak into a review-only request or treat
restraint as a quality deficit. A reviewer should still report any confirmed material flaw.

## Expected skills
- critical-review

## Key principles expected
- Review the actual behavior and code, then rank only evidence-backed risks by impact.
- A concise no-material-issue finding is valid if inspection supports it; “restrained” does not
  itself imply a need for more color, identity, motion, or structure.
- Report concrete defects if found, with consequences and repair direction. Keep the requested work
  in review; do not independently edit or speculatively redesign.

## Unacceptable recommendations
- Activating creation specialists merely because the reviewer can imagine alternatives.
- Changing an established visual system without evidence of a product problem.
- Praising the interface before checking it, or asserting no risk without inspection.
- Turning optional stylistic differences into release blockers.
