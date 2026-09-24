# Action Hierarchy, Confirmation, and Undo

Load when buttons compete, destructive actions are unsafe, or harmless actions are over-confirmed.

Sections: Action Hierarchy · Confirmation and Undo

## Action Hierarchy

Not all actions are equal. The interface should make the most likely action easiest to find
and the dangerous action hardest to trigger by accident.

### Levels

| Level | Use for | Typical treatment |
|---|---|---|
| Primary | The main action of the region | Filled, high contrast, one per region |
| Secondary | Alternatives and supporting actions | Outlined or subtle fill |
| Tertiary | Low-emphasis actions | Text button, icon button with label or tooltip |
| Destructive | Deleting, removing, ending | Distinct color (often red) used only for this; placed away from primary |
| Overflow | Rare actions | "More" menu |

### Rules

- **One primary per region.** Two filled buttons side by side force users to read both.
- **Primary position is consistent** across a flow (for example, bottom-right of dialogs on
  desktop in LTR, full-width at the bottom on mobile).
- **Destructive is never primary by default** unless deletion is the explicit purpose of the
  dialog, and then it states the consequence.
- **Cancel is not a peer of the action;** it is secondary or tertiary.
- **Group related actions;** separate unrelated ones.
- **Reduce, don't decorate.** Too many visible actions is a hierarchy problem; move rare ones to
  overflow.

### Labels

- Start with a verb; name the outcome: "Send invoice," "Host game," "Save draft."
- Keep labels stable through states ("Save" → "Saving…" → "Saved" is fine; the button should not
  change to an unrelated action).
- Avoid "OK," "Yes," "Submit," "Continue" when a specific verb exists.

### Live-control surfaces

Under time pressure:

- Primary actions large and well separated (at least a finger's width between opposing actions
  like Correct and Wrong).
- Opposing actions visually distinct beyond color (label, icon, position).
- A clear undo for the last action.

### Floating action buttons

A floating action button (FAB) is appropriate for a single, dominant creation action on mobile.
It is not a place for menus of unrelated actions, and it must not cover content or other controls.

## Confirmation and Undo

Confirmations and undo both protect against mistakes. They are not interchangeable.

### Decision table

| Consequence | Frequency | Protection |
|---|---|---|
| Trivial | Any | None |
| Reversible | Any | Act immediately + undo |
| Costly (money, many recipients, public) | Any | Preview + explicit commit button naming the effect |
| Irreversible | Rare | Specific confirmation stating the consequence |
| Irreversible and extreme (delete account, production database) | Rare | Typed confirmation of the name |

### Good undo

- Offered immediately in a toast or inline, with a clear "Undo" control reachable by keyboard.
- Lasts long enough to notice (often 5–10 seconds, longer for important actions) and does not
  disappear while focused or hovered.
- Fully reverses the action and its side effects.
- Supplemented by recoverable history (trash, version history) for later regret.

### Good confirmation

- Title and body state the specific consequence ("Delete 'Spring Tournament' and 24 results?").
- The confirming button repeats the verb ("Delete tournament").
- The safe option is easy to choose; focus defaults to the safe option for destructive dialogs.
- Rare enough that users read it.

### Anti-patterns

- "Are you sure?" for archiving, moving, or renaming
- "OK / Cancel" with no statement of consequence
- Multiple confirmations in a row
- Confirmation used because undo would take effort to build
- Undo that only works while the page is open, for actions users will regret later

### Money and safety

In financial and safety-critical flows, compress the intermediate steps and keep one strong
final review that shows exactly what will happen (amount, recipient, timing, fees). See
`references/_shared/undo-vs-confirm.md`.
