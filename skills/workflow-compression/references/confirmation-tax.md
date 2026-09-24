# Confirmation Tax (F5)

A confirmation on a harmless or reversible action. It costs a decision every time and trains
users to click "Yes" without reading, which weakens the confirmations that matter.

## Undo vs confirmation

| Action | Use |
|---|---|
| Trivial (sort, view, collapse) | Neither; just do it |
| Reversible (archive, move, rename, status change, remove from list) | Do it immediately, offer undo |
| Costly (send to many, publish, charge) | Preview then explicit commit (the commit button *is* the confirmation) |
| Irreversible (permanent delete, money transfer, legal submit) | Specific confirmation that states the consequence |

## Good undo

- Visible for long enough to act on (several seconds; longer for important actions) and
  reachable by keyboard.
- Truly reverses the action, including side effects.
- Available in a history or trash for later recovery where appropriate.

## Good confirmation

- States the specific consequence: "Delete 'Spring Tournament' and its 24 results? This cannot be
  undone."
- Uses a specific verb on the button ("Delete tournament"), not "OK" or "Yes."
- For extreme consequences, considers typed confirmation (type the name).
- Is rare enough that users read it.

## Compression must preserve safety

Removing a confirmation from money movement, irreversible deletion, or public publishing is not
compression; it is a safety regression. In those cases, improve the confirmation's clarity and
speed (for example, one strong final review instead of three weak intermediate "Are you sure?"
steps).

See `references/_shared/mobile-money-transfer.md`.
