# Conditional Display: Showing Things When They Matter

An element can be correct and still fail because it appears at the wrong time. Conditional display
moves an element from "always rendered" to "rendered when the state makes it useful," and it must
never make a needed fact invisible.

## The rule

Define three things for every conditional element:

1. **Show state.** The product condition that makes it useful.
2. **Hide state.** The condition that makes it noise.
3. **Failsafe.** What keeps the need visible if the show condition is missed or the state is
   misread.

Without all three, the move is a removal in disguise.

## Patterns

| Element | Always-on problem | Show state | Hide state | Failsafe |
|---|---|---|---|---|
| Connection status | Occupies space while healthy | Reconnecting, lost, degraded | Healthy | Loud banner on loss; control disabled with a reason; recovery action |
| Minimum-participants notice | Constant red-ish text from the start | Start attempted, or fewer than the minimum with the control near | Minimum reached | The Start control itself explains why it is unavailable |
| Field format hint | Always shown next to every field | Focus, or after a failed attempt | Valid or untouched after a correct entry | Label states the constraint if it is hard to guess |
| Error | Visible before the action | After the attempt that could fail | After correction | Focus moves to the problem; error clears on fix |
| Help or instructions | Heavy card on every visit | First use, or the user asks | Dismissed or experienced | Help link always reachable |
| Unsaved-changes marker | Permanent "saved" pill | Unsaved or saving or failed | Saved | Leaving with unsaved work asks first |
| Setup option with one common answer | Asks every time | Advanced section, or the user opens it | Default applies | Visible summary of the default in force |

## Healthy status

Healthy state may be silent when the degraded states are loud, recoverable, and tested. It must not
be silent when the user needs reassurance to act (a payment in progress, a live host controlling a
room), or when its absence cannot be told from a broken indicator. If users keep asking "is it
working?", the status earns permanence in a quiet form: a small steady marker, not a pill that
competes with the primary action.

## Premature and lingering

- **Premature:** shown before the user could have triggered it (an error on first render, a
  success marker before the mutation completes). Move it to the state that causes it.
- **Lingering:** stays after its cause is fixed (an error that remains after correction, a notice
  that occupies space once the condition is resolved). It must clear and release its space.
- **State-owned layout:** the space an element uses should appear and disappear with it, without
  moving the control the user is about to press. Reserve space only if the movement itself is the
  problem.

## Verify

Test the show state, the hide state, and the transition between them in the rendered product:
trigger the condition, observe, resolve it, observe again, and check that focus and layout behave.
Test the failsafe by making the show condition fail (force a disconnect, skip the attempt). If you
cannot trigger the state, mark the verdict **NOT VERIFIED IN RENDERED OUTPUT**.

## Handoffs

Timing logic that needs a real state model (who owns the state, what transitions exist) goes to
state-design; auditing a built product's states one by one goes to state-by-state-review.
