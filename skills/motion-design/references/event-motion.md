# Event-Driven Motion

Load first: what deserves motion, the recipe per event, and how motion preserves spatial orientation.

Sections: Motion Philosophy · Event Types and Their Motion · Spatial Continuity

## Motion Philosophy

### What motion is for

Motion exists to help people understand change. Our eyes are drawn to movement before anything
else. That makes motion powerful and expensive: every animation spends attention.

Motion earns its cost when it:

- **Explains causality:** this happened because you did that.
- **Preserves orientation:** this panel came from that item; going back returns you there.
- **Shows transfer:** this thing moved from here to there, and now belongs to that.
- **Communicates state:** something is loading, progressing, live, waiting, resolved.
- **Directs attention:** look here, this needs you.
- **Expresses character:** the product's personality at meaningful moments.
- **Rewards:** celebrates real achievement.

### What motion is not for

- Making static content "feel alive" when nothing is happening
- Hiding slowness (animated spinners that disguise lack of progress information)
- Filling perceived emptiness
- Demonstrating that the team knows an animation library

### A simple test

Turn the animation off. Does the user lose information?

- **Yes:** it is doing a job; refine it.
- **No, but the moment feels flatter:** it might be expressive motion. Keep it only on
  meaningful moments and make it short.
- **No, and nothing changes:** remove it.

### Motion and identity

A product's motion language is an identity carrier: how things arrive (snappy, soft, springy,
precise), how they resolve, what the signature moments look like. Consistency matters more
than intensity. See visual-identity if installed.

### Motion and frequency

The more often an event happens, the shorter and subtler its motion must be. A delightful
400 ms flourish on a once-a-week action becomes an irritation on a forty-times-a-day action.

## Event Types and Their Motion

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

### Choosing between recipes

- If the user caused the event and can see its origin and destination, use continuity (transfer,
  transition).
- If the system caused it, lean on attention and change recipes, proportionate to importance.
- If another participant caused it (multiplayer, collaboration), make it noticeable but not
  alarming; name the actor in text when it matters.

### Universal examples

- **Commerce:** Add to cart → product thumbnail travels to cart icon → cart count ticks up.
- **File tool:** Upload completes → file row settles into the collection with a brief highlight.
- **Project tool:** Task dragged or moved to Done → card travels to the Done column → column count
  updates.
- **Game:** Correct answer → answer locks in → token travels to board → cell changes owner →
  connected path pulses once.
- **Chat:** Message sent → bubble moves from composer into thread → delivery indicator resolves.
- **Finance:** Transfer confirmed → amount moves from source balance to destination; both balances
  count to new values.

## Spatial Continuity

Users build a mental map of an interface. Motion that respects it keeps them oriented.

### Principles

- **Things come from somewhere.** A detail view expands from the item that opened it; a menu
  emerges from its trigger; a toast comes from the edge where toasts live.
- **Things go somewhere.** Archived items move toward the archive; deleted items leave; dismissed
  sheets return to the edge they came from.
- **Direction means something.** Forward in a flow moves one way (for example leftward content,
  in LTR), back moves the other. Keep it consistent; mirror in RTL.
- **Shared elements persist.** When an element exists in both views (a thumbnail, a title), morph
  it between positions rather than fading one out and another in.

### Techniques

- **FLIP** (First, Last, Invert, Play): measure positions before and after a layout change, then
  animate transforms between them. Efficient for reorders and shared-element transitions.
- **View Transitions API** (web): cross-document and same-document transitions with shared
  element names; progressive enhancement.
- **Proxies for transfers:** animate a lightweight clone traveling from origin to destination
  while the real DOM updates instantly.

### Pitfalls

- Transfers to offscreen destinations: users see something fly away to nowhere. Either scroll
  the destination into view, animate toward the edge nearest it, or skip travel and highlight
  on arrival.
- Transitions that animate the entire page for every navigation.
- Direction reversals (entering from the left sometimes and the right other times with no meaning).
- Continuity animations that make the destination wait before it becomes interactive.
