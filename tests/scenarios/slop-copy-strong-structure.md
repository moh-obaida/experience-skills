# Scenario: Separate copy from composition

## Scenario
Clinic Roster has a useful time-ordered appointment selection with duration, clinician, access and preparation facts. Its opening copy is generic. All products and data are invented fixtures.

## Prompt
Review the generated feel of this appointment page. Identify the appropriate repair scope and preserve the scheduling structure and working selection actions. Do not edit product source in this review; renderer bookkeeping is allowed. Target `slop.html` views `copy` only. Use the installed `anti-slop-ui` skill for this review; route beyond it only for an unresolved material concern. Capture with `node .benchmark/render.mjs before slop.html --views copy` and inspect every listed desktop and phone PNG. Keep renderer JSON intact. This is a formal evaluation: append only the contract's machine-readable operational metadata for activated skills, reference reads, changes, checks and outcome; do not include private reasoning in that record.

## Mode
review

## Current problem
This scenario tests cause-level completion and aesthetic-neutral review, not exact wording.

## Expected skills
- anti-slop-ui

## Key principles expected
- Identify generic opening copy as a local content problem rather than systemic visual slop.
- Recognize product-specific time, clinician and preparation structure; preserve the timeline and selection controls.
- Recommend grounded copy for choosing a visit without inventing health outcomes or a new style.
- Use rendered evidence and avoid unnecessary composition or identity escalation.

## Unacceptable recommendations
- Redesign the strong scheduling structure to make the page more original.
- Diagnose systemic slop merely because two headings sound generated.
