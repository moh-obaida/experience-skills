# Continuity and Context

Users move between areas, get interrupted, and come back. Products that forget context charge
users every time.

## Continuity checklist

- Does navigating to a detail and back restore scroll position, filters, and selection?
- Are drafts saved automatically and restored?
- Can interrupted multi-step processes be resumed?
- Does the product remember recent items and offer them where tasks begin?
- After completing something, is there a next action (or a dead end)?
- Does a deep link restore the full state (filters, tab, selected item)?
- Do sessions survive reasonable interruptions (sleep, network blips) without losing work?
- Does switching devices preserve what should be preserved?

## Dead ends

A dead end is any state with no useful way forward: success pages with only "Home," errors with
no action, empty states without guidance, completed games without replay. List them in the
ledger; each needs a next action (see `references/_shared/next-best-action.md`).

## Context ownership

When several areas show the same object, changes in one should reflect in others immediately.
Stale duplicates ("I renamed it but the sidebar still shows the old name") erode trust.

## Repairs

- Persist view state in the URL and restore on back.
- Autosave drafts; resume prompts for interrupted flows
  (`references/_shared/continue-where-left-off.md`).
- Recent items in pickers and home.
- Next actions on every outcome.
