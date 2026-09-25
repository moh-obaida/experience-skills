# Trust and Transparency

Load when users distrust what the product shows or does: hidden or stale state, opaque automation,
poor error recovery, mental-model mismatches, platform convention breaks, or rising support load.

## Mental model mismatch

Users predict behavior from their model of the product. Friction appears where the product's model
differs.

- **Find it:** ask users (or read tickets) to explain how a feature works; compare with the real model.
- **Signals:** "I thought it saved," "I thought deleting the folder kept the files," "why did it
  change?"
- **Repair:** make the real model visible (states, relationships, consequences), or change the product
  to match the dominant user model.

## Hidden and stale state

- Show freshness for anything that changes ("updated 2 min ago"), sync status for local edits, and
  who else is present in collaborative objects.
- Never present cached or failed data as current.

## Opaque automation

Automation users cannot see or undo erodes trust even when it is right.

| Requirement | Example |
|---|---|
| Visible | "Language: English (from source) · Change" |
| Explainable | "Moved to Done because the pull request merged" |
| Reversible | Undo, or a history of automatic changes |
| Controllable | A setting or rule the user can edit |

## Error recovery

- Every error names what happened, why (if known), and what to do; input survives.
- Unknown outcomes are reconciled before users retry (see state-design if installed).
- Support should be able to find the error from a reference ID.

## Platform convention mismatch

Breaking platform conventions costs every user each time: custom scrollbars, non-native back behavior,
gestures that conflict with the OS, keyboard shortcuts that override the browser or assistive tech,
desktop patterns on mobile (hover-only), mobile patterns on desktop (floating bottom bars, NI2).

## Support burden as a signal

Group tickets by the friction lens they reveal (terminology, discoverability, state, automation). A
recurring question is a design defect with a measurable cost.

## Ledger fields to add

For trust issues, add to the friction ledger: *what the user believed*, *what was true*, *how they
found out*, *cost of the mismatch*.
