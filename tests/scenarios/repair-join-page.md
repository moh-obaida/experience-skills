# Scenario: Repair a Playful Game Join Page

## Scenario
A classroom quiz game's `join.html` is a runnable fixture with a centered white card, segmented
digit inputs, no product environment, and no meaningful loading or error state. The task is to repair
the page in place while preserving the obvious join action.

## Prompt
Open `join.html`, inspect the current result, and repair the page in place. Make the environment
feel like a classroom game, replace the custom segmented input with a familiar accessible input,
keep the join path obvious, and add honest loading/error hooks only if the fixture can support them.
Use the installed Experience Skills when relevant. Render or measure before and after when possible.
Do not stop at recommendations: edit the file, then report changed files and what you verified.

## Mode
edit

## Current problem
The fixture demonstrates centered-card syndrome, personality invested in a custom control, and a
missing environment. It is intentionally small so the evaluator can compare the file before and
after and run the browser scanners.

## Expected skills
- experience-architect
- composition-repair
- visual-identity
- interaction-design
- anti-slop-ui
- responsive-validation
- critical-review

## Key principles expected
- Move identity into the environment while keeping the input familiar.
- Preserve the P0 join action and test narrow/short/projector conditions.
- Use real content and honest state hooks rather than invented metrics.
- Record rendered or measurement evidence and label unverified checks.

## Unacceptable recommendations
- Only describing changes without editing `join.html`.
- Keeping segmented digit boxes solely because they look more branded.
- Adding generic glass, gradients, fake statistics, or decorative cards as filler.
- Claiming the repaired UI is verified without rendering or naming the blocker.
