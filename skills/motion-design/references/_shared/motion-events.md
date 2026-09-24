<!-- GENERATED FROM shared/taxonomies/motion-events.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Motion Events

Motion is justified by an event. Classify the event first; the motion follows from it.

| Event | What happened | Motion job | Example |
|---|---|---|---|
| ARRIVAL | Something new appeared | Show where it came from and where it lives | New message slides in from the composer side |
| REMOVAL | Something left | Show it left (and where, if recoverable) | Archived row collapses toward the archive |
| CHANGE | A value or property changed | Draw attention to the delta | Score counts up; changed cell briefly highlights |
| TRANSFER | Ownership or location moved | Maintain continuity between origin and destination | Product flies to the cart; tile moves to the board |
| TRANSITION | Moved between states or views | Preserve spatial model | Detail view expands from the list item |
| FEEDBACK | User acted | Confirm the input registered | Button press depression; toggle knob travel |
| PROGRESS | A process advanced | Show advancement and remaining work | Steps fill; upload bar advances |
| RESOLUTION | Something was decided | Mark the outcome clearly | Correct answer locks in; payment check draws |
| ATTENTION | Something needs the user | Direct the eye without alarm | Gentle pulse on the item that needs review |
| CELEBRATION | Meaningful achievement | Reward proportionate to the achievement | Win screen; streak milestone |
| HIERARCHY CHANGE | Importance changed | Reorder with visible movement | Leaderboard rows swap places |
| AMBIENT | System is alive, waiting | Signal liveness without distraction | Slow background drift in a lobby |

## Non-events

These are not events and usually do not deserve motion:

- A page loaded (content should just be there, quickly)
- An element scrolled into view (occasionally justified on storytelling pages, rarely elsewhere)
- A card exists
- A hover over non-interactive content

## Sequencing an event

Most meaningful events have phases:

1. **Anticipation** (optional): brief preparation before a large change.
2. **Action:** the change itself.
3. **Consequence:** the destination or related elements respond.
4. **Settle:** everything reaches a stable, readable state.

Example (universal):

```
Answer accepted → confirmation mark → token travels to the board
                → board cell changes owner → connected line pulses once → settle
Item added to cart → item image travels to cart → cart count increments → settle
Task moved to Done → card travels to the Done column → column count updates → settle
```
