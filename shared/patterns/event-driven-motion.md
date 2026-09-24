# Pattern: Event-Driven Motion

## Problem
Motion is applied uniformly (every element fades and slides in) instead of explaining what
happened. Users learn nothing from it and eventually find it slow.

## When useful
- Any state change users need to notice or understand: arrival, transfer, resolution,
  hierarchy change, progress.

## When NOT useful
- Content that should simply be present on load.
- Constant, high-frequency actions where motion would slow the user (keep feedback instant and short).

## Structure
1. Name the event (see the motion-events taxonomy).
2. Identify origin, destination, and what should respond.
3. Sequence: anticipation (optional) → action → consequence → settle.
4. Use tokens for duration and easing; keep most feedback under 200 ms and most transitions
   between 200 and 400 ms.
5. Animate transform and opacity where possible.
6. Provide a reduced-motion alternative that preserves the information (cross-fade, instant
   state with highlight).
7. Make it interruptible: new input should not wait for animation to finish.

## Example
Correct answer: check mark appears on the answer (120 ms) → the team's token moves from the
answer panel to the board cell (320 ms) → the cell changes color to the team's color (160 ms)
→ connected cells pulse once → settle. Reduced motion: the cell changes color instantly with a
brief outline highlight.

## Failure modes
- Choreography so long that users wait for it.
- Motion without a reduced-motion path.
- Transfer animations whose destination is offscreen.
