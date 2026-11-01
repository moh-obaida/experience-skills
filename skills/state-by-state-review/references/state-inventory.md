# State Inventory: Choosing and Reaching the Right States

## Start from mechanics

List what the product actually does on this surface: the actions, the data it shows and where it
comes from, the actors, the connection, async work, permissions, and time. A classroom game with a
host and players has a lobby, a running round, a paused round, a disconnect, and a result. A
single-user form has initial, invalid, submitting, success, and server error. Do not require every
state for every interface.

## Candidate states

| State | Include when | Reach it by |
|---|---|---|
| Initial | Always | Fresh load of the route |
| Empty | The surface lists or collects things | New account, cleared data, empty filter |
| Populated | Always for data surfaces | Seed data; also a dense and a long-content case |
| Loading | Data or actions are asynchronous | Throttle the network or delay the response |
| Success | An action can complete | Complete the action |
| Error | Input can be invalid or an action can fail | Invalid input; forced failure |
| Disabled | Controls depend on conditions | The unmet condition |
| Hover | Pointer devices act on elements | Mouse move |
| Focus | Keyboard use | Tab through |
| Selected | Items or options can be chosen | Click or arrow key |
| Active | Items or modes are current or pressed | Navigation or press |
| Waiting | The product waits for another actor or time | A lobby without players; a pending approval |
| Paused | A process can be suspended | Pause control or system pause |
| Disconnected | A live connection exists | Block the socket or go offline |
| Reconnecting | The connection retries | Restore after a block |
| Completed | A process ends | Finish the flow |
| Permission denied | Roles or access limits exist | A user lacking access |
| Partial completion | Batch or multi-step results can be mixed | Some items succeed, some fail |

Add states the product has that the table does not name (stale data, conflicted edit, locked,
read-only, expired). Drop what it does not have.

## The ten questions

Ask all ten of each relevant state, and record the evidence level.

1. **Trigger.** What caused this state, and could the user have caused it?
2. **User knowledge.** What does the user know here: where they are, what happened, what is true?
3. **Possible actions.** What can the user do, and is each action enabled for a reason?
4. **Visible.** What should be visible, and what is? Anything extra, anything missing?
5. **Hidden.** What should be hidden because it is irrelevant or would mislead, and is it?
6. **Primary action.** Is there one, and is it the next useful step?
7. **Language.** Is each string accurate for this state (not left over from another)?
8. **Visual consistency.** Do the state's treatments (color, weight, indicators, borders) match the
   product's conventions and sibling states?
9. **Recovery.** Can the user recover or continue, and how many steps?
10. **Transition.** How does the state begin and end: what changes, what clears, where does focus go?

## State matrix

```text
state | reached by | evidence | trigger | knows | can do | visible/hidden ok | primary | language | consistent | recovery | transition | findings
```

Keep it compact: one row per relevant state, short cells, finding ids. Mark unreached states
`unreached` with the reason.

## Reaching states honestly

- Prefer the real product with real triggers. Mock or seed only to reach a state the product cannot
  produce on demand, and say so.
- Use the browser to throttle, go offline, block a connection, or delay a response.
- Use a scripted flow for repeatable sequences: fill, click, wait, then read the visible errors and
  text in each phase.
- For multi-actor states, use two sessions or recorded states; if you cannot, record the state as
  unreached and name what it needs.

## Limits

An inventory is not a coverage claim over all possible states. State what was inventoried, what was
reached, and what was not. A review that touched six states and says so is better than one that
claims "all states" from a checklist.
