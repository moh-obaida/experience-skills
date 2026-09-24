# Context Reuse

Software accumulates context: what the user selected, what they did last, where they were,
what they were in the middle of. Discarding it creates memory failure (F7) and redundant input
(F1).

## Kinds of context worth keeping

| Context | Reuse |
|---|---|
| Selection | Actions apply to the current selection; next screens preselect it |
| Filters, sort, view | Persist when navigating to detail and back; optionally across sessions |
| Scroll position | Restore on back navigation |
| Drafts | Autosave; restore on return |
| Recent items | Offer in pickers, home, empty states |
| In-progress processes | "Continue where you left off" |
| Last configuration | Default for the next similar task |
| Created item | Carry into the next step (created quiz → host it) |

## Scope rules

- **Session context** (filters, scroll) should survive navigation within a session.
- **Persistent context** (preferences, last configuration) should survive sessions when it
  reflects a deliberate choice.
- **Sensitive context** (payment sessions, one-time codes, private data on shared devices)
  should expire.

## Context in live and multi-actor surfaces

In live control (hosting a game, running a broadcast, handling a support queue), the system
knows who is active and what phase it is. Actions should be scoped to that context:

- A state header announcing the current context
- One set of actions for the current subject
- Automatic update of the actions when context changes

See the contextual-controls pattern and `references/_shared/context-aware-judgment.md` if present,
or the interaction-design skill.

## Implementation notes

- Keep context in the URL where it helps sharing and back navigation (filters, tabs).
- Keep drafts and last-used settings in durable storage appropriate to the product (server for
  cross-device, local for device-specific).
- Invalidate carefully: if the underlying data changed, a restored context may need a notice.
