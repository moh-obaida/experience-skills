# Event Types and Their Motion

Map events to motion jobs. The shared taxonomy (`references/_shared/motion-events.md`) defines
the events; this reference gives concrete motion recipes.

| Event | Motion recipe | Typical duration | Reduced-motion alternative |
|---|---|---|---|
| ARRIVAL (new item in list) | Enter from its source direction with a short slide (8–16 px) + fade; neighbors make room smoothly | 150–250 ms | Appear instantly; brief background highlight |
| REMOVAL (archive, delete) | Collapse height (via transform/clip where possible) and fade; move toward destination if visible | 150–250 ms | Instant removal; undo toast announces it |
| CHANGE (value updated) | Brief highlight or count-up for numbers; cross-fade for text | 100–400 ms | Instant change + highlight |
| TRANSFER (to cart, to board, to done) | Element (or a proxy) travels on a curved path from origin to destination; destination reacts on arrival | 250–450 ms | Destination highlights; origin marks change |
| TRANSITION (list → detail) | Shared element expands from origin; other content fades | 200–350 ms | Cross-fade |
| FEEDBACK (press, toggle) | Pressed state, knob travel, checkmark draw | 50–150 ms | Same, without travel (state change only) |
| PROGRESS | Determinate bar advances; stages fill | Continuous | Same (progress is information) |
| RESOLUTION (correct, paid, done) | Distinct mark (check, lock-in), color settle, small scale pulse | 200–400 ms | Mark appears instantly with color change |
| ATTENTION | Single gentle pulse or nudge; never continuous shaking | 300–600 ms once | Static badge or outline |
| CELEBRATION | Proportionate burst, characters, confetti only for real achievement | 600–1500 ms, skippable | Static celebratory state |
| HIERARCHY CHANGE (rank swap) | Items move to new positions (FLIP) | 250–400 ms | Instant reorder + highlight on moved items |
| AMBIENT | Very slow drift, breathing light | Many seconds, low amplitude | None (static) |

## Choosing between recipes

- If the user caused the event and can see its origin and destination, use continuity (transfer,
  transition).
- If the system caused it, lean on attention and change recipes, proportionate to importance.
- If another participant caused it (multiplayer, collaboration), make it noticeable but not
  alarming; name the actor in text when it matters.

## Universal examples

- **Commerce:** Add to cart → product thumbnail travels to cart icon → cart count ticks up.
- **File tool:** Upload completes → file row settles into the collection with a brief highlight.
- **Project tool:** Task dragged or moved to Done → card travels to the Done column → column count
  updates.
- **Game:** Correct answer → answer locks in → token travels to board → cell changes owner →
  connected path pulses once.
- **Chat:** Message sent → bubble moves from composer into thread → delivery indicator resolves.
- **Finance:** Transfer confirmed → amount moves from source balance to destination; both balances
  count to new values.
