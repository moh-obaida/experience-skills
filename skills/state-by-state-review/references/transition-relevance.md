# Transition and Relevance: Auditing When Things Appear and Disappear

## The relevance test

For each element visible in a state, ask: does the state make it useful? Name the state. If the
answer is "it is always there," check whether that is the point (persistent status, navigation) or
an accident of a component that always renders.

| Result | Meaning |
|---|---|
| Relevant | The state justifies it |
| Premature | It belongs to a later or other state |
| Lingering | It belongs to a state that ended |
| Irrelevant | It cannot be used in this state and says nothing about why |
| Contradictory | It describes a different state than another visible element |

## Defect classes

| Class | Examples | Where the cause usually is |
|---|---|---|
| PREMATURE | Error before the first attempt; "no results" before a search; success before the mutation resolved; field marked invalid when untouched | Validation on mount; optimistic UI without a pending state; default state set to "error" |
| STALE | "Saved" after a new edit; a count that did not update; a label from the previous mode; success banner that never expires | Missing transition handler; state not derived from one source |
| CONTRADICTORY | "All changes saved" with an enabled Save; disabled button with no reason beside a banner that says it is ready | Two sources of truth |
| MISSING RECOVERY | Error with no next step; dead-end success; reconnecting with no manual option; terminal failure with "try again" that cannot work | No recovery path designed |
| IRRELEVANT-VISIBLE | Filters over an empty list; Start button with no explanation while below minimum players; edit controls on a read-only item | Component renders unconditionally |
| FOCUS | Focus lost on state change; focus stuck on a removed element; focus not moved to the error; modal opened without focus; tab order breaks after update | DOM replaced rather than updated; no focus management |
| MISALIGNED ACTIVE | Active tab and current content disagree; selected item highlight on the wrong row; active indicator offset | Selection state and routing out of sync |
| SPACE | An error occupying permanent space after resolution, causing layout shift or a dead gap | Reserved space not released, or the element hidden but still laid out |
| MISLEADING LOADING | "Saving..." that stays after completion; spinner with no timeout; "Loading" when the failure is a permission denial | Loading state not tied to outcome |

## Test transitions, not snapshots

For each transition between relevant states:

1. Start in the source state. Capture.
2. Trigger the change. Capture immediately and after it settles.
3. Resolve the new state (fix the error, complete the load, reconnect). Capture.
4. Compare the source and the final state: everything the intermediate state owned must be gone.
5. Check the keyboard: where is focus before, during, and after? Does the screen reader announcement
   (live region, alert) fire once, at the right time?
6. Repeat once in the reverse direction when the transition is reversible.

A scripted flow (fill, click, wait, read) turns this into a repeatable test. Use phases named for
the state they reach, mark the phase in which errors must be absent, and read the visible errors
after each.

## Common expectations

| From → to | Expect |
|---|---|
| Initial → invalid | Error appears after the attempt, next to the field, focus on the first error |
| Invalid → corrected | Error clears when the cause is fixed, space is released, no layout jump of unrelated controls |
| Idle → saving → saved | Pending is visible and honest; "saved" appears only after confirmation; the saved marker is not permanent |
| Healthy → disconnected | A clear, persistent notice; controls that cannot work are disabled with a reason; state is preserved |
| Disconnected → reconnecting → healthy | Progress is honest; the notice clears on success; stale data is marked or refreshed |
| Waiting → ready | The gating message clears; the primary action becomes available and visible |
| Running → paused → running | The pause is labelled and distinguishable from failure; resume restores position |
| Completed → next | The next action is offered; completion marker is not left on the next run |

## Fixing transitions

Prefer one source of truth for the state and derive what is rendered from it. Clear on exit, not
on a timer, unless the element is transient by design. Release space with the element. Manage
focus explicitly. When logic is the cause, hand the model to state-design; when only rendering and
clean-up are wrong, repair them here and rerun the transition.

## Reporting

One record per defect: state boundary, observed (E1 with phase), class, root cause (logic,
rendering, content), owner, and the transition that verifies the fix. Merge repeats of the same
cause; do not list the same stale label for every route.
