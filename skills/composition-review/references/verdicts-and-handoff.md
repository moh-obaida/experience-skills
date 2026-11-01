# Verdicts and Handoff

One screen, one verdict. Choose the smallest action that fixes the demonstrated problem.

## The five verdicts

| Verdict | Use when | Evidence required | Next |
|---|---|---|---|
| PRESERVE | The composition serves the job; no defect that matters | The first-impression pass, region allocation reasoning, narrow-size check | Stop; list what is good |
| LOCAL REPAIR | The composition is sound; one or two bounded defects (alignment, a stray card, a misplaced action, a disproportionate panel) | The defects, their location, and why the rest stands | Owning specialist or direct fix; no restructure |
| RESTRUCTURE | A root relationship fails across the screen and local edits cannot fix it: the wrong thing dominates, the instrument is buried, regions are disconnected, mobile order buries the job | The named relationship, measured or observed (E1 or E2), the cost to the user, and why LOCAL REPAIR is insufficient | composition-repair with a handoff |
| STATE-APPROPRIATE | The screen looks sparse, quiet, or dense but is right for this state, audience, or archetype | The state or audience and the job of the space | Stop; note the states where it would need review |
| PREFERENCE | A different arrangement is conceivable but no evidence shows harm | The reason there is no demonstrated cost | Stop; do not change |

Confidence uses the shared scale: confirmed, strong concern, possible concern, preference. A verdict
without evidence is a preference.

## Evidence ladder for RESTRUCTURE

RESTRUCTURE is the most expensive verdict. Before using it, you need all four:

1. The relationship that fails, in one sentence ("supporting status cards own 45% of the first
   viewport and push the question below the fold").
2. Evidence from a render or measurement.
3. The user cost (task slowed, misread, abandoned).
4. A reason local edits do not fix it.

If any is missing, downgrade to LOCAL REPAIR or PREFERENCE.

## Handoff to composition-repair

```text
job: <what this user does here>
locked truth: <requirements, brand, structure that must stay>
open space: <what composition-repair may change>
current weakness: <relationship that fails, evidence, user cost>
decision so far: <verdict RESTRUCTURE, the composition currently in use>
expected output: <the intended change in attention or allocation, stated as a relation>
preserve: <what is good: element, treatment, or behavior>
verification so far: <views inspected, what is unchecked>
stop condition: <the rendered delta that ends the work>
```

The target is a relation, not a layout: "the board owns the first viewport and the answer controls
sit within reach at 390px," not "make a two-column layout."

## Handoff for LOCAL REPAIR

Send each defect to its owner: stroke and consistency to visual-coherence-audit, an unneeded or
mistimed element to ui-necessity-audit, wording to microcopy-quality. If one root cause explains
several defects, send it once.

## Positive controls (invented examples)

- **Deliberately asymmetric screen.** A left-aligned instrument column with a narrow, quiet rail
  and large unused right margin, framed by a full-height environment. The asymmetry places the
  instrument where the reading starts; the empty region frames it. PRESERVE.
- **Dense expert console.** Twelve metric rows, small type, little spacing, live values aligned in
  tabular numerals; the row in alarm is the strongest element. Dense because the expert needs
  overview. PRESERVE; do not "add breathing room."
- **Restrained join page.** One field, one button, a brand-derived background, no extra sections.
  PRESERVE; adding help cards would be filler.
- **Lobby awaiting players.** Mostly empty stage with a code, a list slot, and a disabled Start
  with its reason. STATE-APPROPRIATE.
- **Correct but dull.** A dashboard that is aligned and clear but generic. Not a composition
  failure; route to visual-identity if identity is the question.

## Stop conditions

Stop when the verdict, its evidence, and the next owner are written. Do not continue into
restyling. After a repair, stop when the named relationship is visibly changed at the primary and
narrow sizes and no new composition defect appeared.
