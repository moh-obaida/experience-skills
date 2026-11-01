# Comparison and Verdicts

## Classify each difference

A difference between two captures is a prompt to look, not a result. For each differing pair, open
both and the diff, locate the changed region, and name the class.

| Class | Signs | Treatment |
|---|---|---|
| REGRESSION | A region that should not have changed now looks worse or breaks a plan invariant | Report; REJECT if material |
| INTENTIONAL | The change matches what the work was meant to do | Confirm it matches intent; note |
| DYNAMIC CONTENT | Text, images, clocks, counts, or random data differ; text hash differs | Mask or stabilize and recapture; do not call it a regression |
| RENDERING DIFFERENCE | Same markup, different browser, OS, font, or device scale | Recapture on the same setup; note the limitation |
| NOISE | Isolated, low-magnitude pixel differences, antialiasing at curves and text edges | Ignore; the script reports these as noise-level |
| IMPROVEMENT | The region is better by the plan's criteria and nothing else regressed | Record as the evidence of the target delta |

Raw pixel counts, percentages, and hashes do not decide a class. A one-pixel border shift can be a
serious defect; a large text change can be correct. Classify by looking.

## What the compare script gives you

`capture-matrix compare` pairs captures by id and reports: identical (same hash), noise-level
(isolated sub-threshold pixels), localized (few changed regions), broad (many regions or a large
share), dimension-changed (the page height or width differs), missing-in-after, and new-in-after,
with changed regions as rectangles and whether the visible text changed. It assumes the same
machine, browser, and fonts. It suppresses isolated antialiasing differences; it cannot tell
intent.

## Verdicts

| Verdict | Use when |
|---|---|
| ACCEPT | The plan's critical states and sizes were captured and viewed; invariants hold; every difference is intentional or noise; no material failure |
| ACCEPT WITH NOTES | The change is acceptable, with minor defects or uncovered non-critical states listed |
| REJECT | A material failure is visible: clipped or missing border or focus ring, a buried primary action, unreadable content, a regression of an invariant, a dimension change that breaks layout |
| NOT VERIFIED IN RENDERED OUTPUT | Rendering was not available or the critical states were not captured; list the exact unchecked items |

A material failure in any capture means REJECT regardless of other passing evidence. Deliberate
drama, negative space, and expert density are not failures; name failures by their cost to the
user's task.

## Honesty rules

- Never claim a visual result from unit tests, type checks, lint, a build, a diff, or the absence of
  console errors.
- Never fabricate a screenshot, an observation, or a measurement. Describe only images you opened.
- Never present a pass on the initial state as a pass on the error state, desktop as mobile, or
  English as Arabic RTL.
- Say what the evidence covers and what it does not. A screenshot is evidence of appearance, not of
  interaction correctness.
- If something was not rendered, say **NOT VERIFIED IN RENDERED OUTPUT** and list the checks.

## Typical acceptance failures (invented examples)

- **Tests pass, clipping remains.** The suite is green; the 390px capture shows the card border cut
  at the container edge. REJECT; hand the defect to visual-coherence-audit.
- **Desktop works, mobile breaks.** The desktop capture is clean; at 390px the primary action sits
  below three panels. REJECT or ACCEPT WITH NOTES depending on how the task is affected; hand to
  responsive-validation.
- **English works, Arabic RTL breaks.** The LTR capture is right; in RTL the stepper connector is
  misaligned and a label wraps. Report per direction.
- **Initial works, error fails.** The error capture shows the message overlapping the field. REJECT.
- **A redesign looks more decorative but reduces usability.** New gradients and cards; the answer
  controls moved below the fold. REJECT on usability; the decoration earns nothing.

## Report format

```text
Verdict: ACCEPT | ACCEPT WITH NOTES | REJECT | NOT VERIFIED IN RENDERED OUTPUT
Plan: routes, states, sizes, directions, themes, stress conditions captured; skipped and why
Evidence: capture ids viewed; compare results if a baseline existed
Findings: shared record per material finding (class, impact, owner)
Intentional changes confirmed: ...
Not verified: exact remaining checks
```

Keep it short; link capture filenames, not pasted pixels. Lead with the verdict and the most
important finding.
