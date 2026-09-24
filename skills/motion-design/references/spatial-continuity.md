# Spatial Continuity

Users build a mental map of an interface. Motion that respects it keeps them oriented.

## Principles

- **Things come from somewhere.** A detail view expands from the item that opened it; a menu
  emerges from its trigger; a toast comes from the edge where toasts live.
- **Things go somewhere.** Archived items move toward the archive; deleted items leave; dismissed
  sheets return to the edge they came from.
- **Direction means something.** Forward in a flow moves one way (for example leftward content,
  in LTR), back moves the other. Keep it consistent; mirror in RTL.
- **Shared elements persist.** When an element exists in both views (a thumbnail, a title), morph
  it between positions rather than fading one out and another in.

## Techniques

- **FLIP** (First, Last, Invert, Play): measure positions before and after a layout change, then
  animate transforms between them. Efficient for reorders and shared-element transitions.
- **View Transitions API** (web): cross-document and same-document transitions with shared
  element names; progressive enhancement.
- **Proxies for transfers:** animate a lightweight clone traveling from origin to destination
  while the real DOM updates instantly.

## Pitfalls

- Transfers to offscreen destinations: users see something fly away to nowhere. Either scroll
  the destination into view, animate toward the edge nearest it, or skip travel and highlight
  on arrival.
- Transitions that animate the entire page for every navigation.
- Direction reversals (entering from the left sometimes and the right other times with no meaning).
- Continuity animations that make the destination wait before it becomes interactive.
