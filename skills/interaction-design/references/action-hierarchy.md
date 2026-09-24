# Action Hierarchy

Not all actions are equal. The interface should make the most likely action easiest to find
and the dangerous action hardest to trigger by accident.

## Levels

| Level | Use for | Typical treatment |
|---|---|---|
| Primary | The main action of the region | Filled, high contrast, one per region |
| Secondary | Alternatives and supporting actions | Outlined or subtle fill |
| Tertiary | Low-emphasis actions | Text button, icon button with label or tooltip |
| Destructive | Deleting, removing, ending | Distinct color (often red) used only for this; placed away from primary |
| Overflow | Rare actions | "More" menu |

## Rules

- **One primary per region.** Two filled buttons side by side force users to read both.
- **Primary position is consistent** across a flow (for example, bottom-right of dialogs on
  desktop in LTR, full-width at the bottom on mobile).
- **Destructive is never primary by default** unless deletion is the explicit purpose of the
  dialog, and then it states the consequence.
- **Cancel is not a peer of the action;** it is secondary or tertiary.
- **Group related actions;** separate unrelated ones.
- **Reduce, don't decorate.** Too many visible actions is a hierarchy problem; move rare ones to
  overflow.

## Labels

- Start with a verb; name the outcome: "Send invoice," "Host game," "Save draft."
- Keep labels stable through states ("Save" → "Saving…" → "Saved" is fine; the button should not
  change to an unrelated action).
- Avoid "OK," "Yes," "Submit," "Continue" when a specific verb exists.

## Live-control surfaces

Under time pressure:

- Primary actions large and well separated (at least a finger's width between opposing actions
  like Correct and Wrong).
- Opposing actions visually distinct beyond color (label, icon, position).
- A clear undo for the last action.

## Floating action buttons

A floating action button (FAB) is appropriate for a single, dominant creation action on mobile.
It is not a place for menus of unrelated actions, and it must not cover content or other controls.
