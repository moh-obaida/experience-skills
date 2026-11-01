# Quality Findings: Shared Record, Vocabularies, and Ownership

The experience-quality specialists (visual coherence, necessity, composition review, microcopy,
state review, cross-route consistency, screenshot acceptance) report in one compact shape so that
findings transfer between skills without re-diagnosis and without duplication.

## Finding record

```text
id:         short, stable (VC-1, UN-3, ...)
surface:    route and state and viewport where it was observed
observed:   what the render, measurement, or source showed (evidence level E1-E6)
class:      code from the owning skill's vocabulary
impact:     what the user loses (understanding, trust, speed, task completion)
confidence: confirmed | strong concern | possible concern | preference
root cause: shared component or token, local override, content, logic, or unknown
owner:      the one skill that decides the repair
action:     repair, preserve, ask for a product decision, or no change
```

Confidence is not severity. A confirmed hairline defect is low impact; a possible concern about a
primary-journey control can rank above it. Rank by user impact first and break ties by confidence.

## Vocabularies

| Skill | Codes or verdict words |
|---|---|
| visual-coherence-audit | BL1 to BL9 (see the BORDLINE taxonomy), VC-VAR component variance, VC-ICON icon geometry, VC-EDGE content edge |
| ui-necessity-audit | KEEP, REMOVE, MERGE, RELOCATE, REWRITE, CONDITIONAL DISPLAY, NEEDS PRODUCT DECISION |
| composition-review | PRESERVE, LOCAL REPAIR, RESTRUCTURE, STATE-APPROPRIATE, PREFERENCE (no change) |
| microcopy-quality | TX1 internal identifier, TX2 premature or stale error, TX3 repetition, TX4 vague action, TX5 boilerplate, TX6 direction or language, TX7 unnamed control; plus MEANING, ASSUMPTION, TONE, RECOVERY |
| state-by-state-review | the state inventory entry plus PREMATURE, STALE, CONTRADICTORY, MISSING RECOVERY, IRRELEVANT-VISIBLE, FOCUS |
| cross-route-consistency | INTENTIONAL, CONTEXTUAL, DRIFT, DUPLICATE IMPLEMENTATION, CONFLICTING CONTRACT, OVERRIDE REGRESSION |
| screenshot-acceptance | ACCEPT, ACCEPT WITH NOTES, REJECT, NOT VERIFIED IN RENDERED OUTPUT |

## One root cause, one owner

Several specialists can see the same symptom. Resolve it once.

- A border defect repeated on many routes is one finding about the shared component, owned by
  visual-coherence-audit, not one finding per route.
- A label that is redundant and also awkwardly worded is one finding. Necessity decides whether it
  stays; microcopy decides wording only if it stays.
- An error shown too early is a state finding (when it appears). Its wording is a microcopy
  finding. Report each once and cross-reference.
- A composition problem is owned by composition-review until it routes a confirmed structural
  repair to composition-repair; component fixes inside that screen wait for the structural decision.

When a finding changes owner, hand over the record, not a restatement.

## Protected categories

Never recommend removing, hiding, or weakening: security information, required disclosures and
legal text, accessibility affordances, critical status, destructive-action safeguards, and recovery
paths, merely because they look redundant or add visual weight. Reduce their cost (position, timing,
wording) instead, and send removal to NEEDS PRODUCT DECISION.

## Valid outcomes

No change is a finding. "Preserve this: the asymmetry encodes state" and "this screen is composed;
fix the two local defects only" are complete results. A report with more findings is not a better
report.
