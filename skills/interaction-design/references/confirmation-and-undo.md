# Confirmation and Undo

Confirmations and undo both protect against mistakes. They are not interchangeable.

## Decision table

| Consequence | Frequency | Protection |
|---|---|---|
| Trivial | Any | None |
| Reversible | Any | Act immediately + undo |
| Costly (money, many recipients, public) | Any | Preview + explicit commit button naming the effect |
| Irreversible | Rare | Specific confirmation stating the consequence |
| Irreversible and extreme (delete account, production database) | Rare | Typed confirmation of the name |

## Good undo

- Offered immediately in a toast or inline, with a clear "Undo" control reachable by keyboard.
- Lasts long enough to notice (often 5–10 seconds, longer for important actions) and does not
  disappear while focused or hovered.
- Fully reverses the action and its side effects.
- Supplemented by recoverable history (trash, version history) for later regret.

## Good confirmation

- Title and body state the specific consequence ("Delete 'Spring Tournament' and 24 results?").
- The confirming button repeats the verb ("Delete tournament").
- The safe option is easy to choose; focus defaults to the safe option for destructive dialogs.
- Rare enough that users read it.

## Anti-patterns

- "Are you sure?" for archiving, moving, or renaming
- "OK / Cancel" with no statement of consequence
- Multiple confirmations in a row
- Confirmation used because undo would take effort to build
- Undo that only works while the page is open, for actions users will regret later

## Money and safety

In financial and safety-critical flows, compress the intermediate steps and keep one strong
final review that shows exactly what will happen (amount, recipient, timing, fees). See
`references/_shared/undo-vs-confirm.md`.
