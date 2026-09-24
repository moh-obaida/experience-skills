<!-- GENERATED FROM examples/interaction/undo-vs-confirm.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: Undo vs Confirmation

**Archetype:** OPERATIONAL, TRANSACTIONAL · **Product types:** any
**Skills:** interaction-design, workflow-compression

## Context

A project tool asks for confirmation on: archiving a task, moving a task to another column,
removing a tag, renaming a board, and permanently deleting a board with 200 tasks. All use the
same dialog: "Are you sure? [Cancel] [OK]".

## The bad version

```
Archive task?        → "Are you sure?" [Cancel] [OK]
Move to Done?        → "Are you sure?" [Cancel] [OK]
Remove tag?          → "Are you sure?" [Cancel] [OK]
Delete board?        → "Are you sure?" [Cancel] [OK]
```

## Correct analysis

- **Confirmation tax (F5)** on four reversible, frequent actions.
- **Habituation.** Users learn to click OK without reading. When the irreversible delete arrives,
  the same dialog gets the same reflexive OK.
- **Unspecific.** "Are you sure?" names neither the object nor the consequence. "OK" is not a verb.

## The better version

| Action | Protection |
|---|---|
| Archive task | Immediate; toast "Task archived · Undo" (8 s); archive view for later |
| Move to Done | Immediate (the move itself is visible feedback); undo via Cmd/Ctrl+Z |
| Remove tag | Immediate; undo |
| Rename board | Inline edit; Escape cancels |
| Delete board permanently | "Delete 'Q3 Launch' and its 200 tasks? This can't be undone." Type the board name to confirm; button "Delete board" |

Better still: send deleted boards to a trash for 30 days, making even deletion recoverable, and
keep the strong confirmation only for emptying the trash.

## Measurements

Frequent actions: 1 extra decision each → 0. Irreversible action: weak confirmation → specific,
rare, read confirmation.

## Why this works

Protection is proportional to consequence. Confirmations become rare, so they are read.

## When this lesson does not apply

Money movement, legal submissions, and sending to many recipients need a preview-and-commit step
even if technically reversible later, because the effects reach other people or systems immediately.

## Universal analogues

Email (undo send), file managers (trash), photo apps (recently deleted), commerce (cancel within
window), messaging (unsend).

## Canonical rule

**Undo for the reversible; confirmation for the consequential.**
