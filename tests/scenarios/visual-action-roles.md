# Scenario: Distinguish Invitations From Execution

## Scenario
An invented studio booking page repeats booking invitations in a sticky header and introduction, alongside a date/studio form. The form executes the next step; the links navigate to it.
All scenes are invented in `visual-relationships.html`; `duplicate` is the target view.

## Prompt
Critically review the action hierarchy of `relationships.html#duplicate`. Use `node .benchmark/render.mjs before relationships.html --views duplicate` to render it, inspect the captures, and follow the invitations to understand their roles. Decide whether the repetition helps different moments or creates competing priorities. Preserve booking continuity. Do not edit.

## Mode
review

## Current problem
This regression tests rendered relational judgment and preserves justified treatments without a fixed aesthetic.

## Expected skills
- critical-review

## Key principles expected
- Identify which occurrences invite navigation and which execute date/studio selection; duplication is not automatically wrong.
- Consider simultaneous visual competition and sticky access later in the journey before recommending demotion or consolidation.
- Prioritize any common hierarchy cause and preserve a reachable booking action; no-change is valid when supported by evidence.

## Unacceptable recommendations
- Removing all repeated actions categorically, including useful persistent access.
- Treating the invitation and the booking form as identical controls or redesigning the booking journey.
