# Execution Loop (REPAIR and BUILD)

The loop that prevents "sixty CSS edits, then declare success."

```
inspect → hypothesize → change → render → inspect again → test edge states
        → critique own result → revise → (repeat until the gate passes)
```

## 1. Inspect

- Render the current state if possible. Capture the primary size and one small size.
- Note measured facts: content coverage, focal element, steps in the flow, states present.
- List what exists before changing anything, so you can compare.

## 2. Hypothesize

Write down, briefly, what you believe is wrong and what change should fix it:

```
H1: The join screen has no focal composition (V3 dead space, ~15% coverage).
    Change: add a product-derived environment and scale the task region.
    Expect: coverage ~35–50%, clear focal point, input unchanged.
```

A hypothesis makes the next render a test instead of a vibe check.

## 3. Change

- Structure first (hierarchy, layout, content), then surface (identity, motion).
- Make coherent batches of change, not one pixel at a time and not everything at once.
- Reuse the product's existing tokens, components, and conventions where they exist.
- Do not introduce new dependencies or large assets without a stated reason.

## 4. Render and inspect again

- Compare against the hypothesis. Did the expected effect happen?
- Look at the whole surface, not only the region you changed. Fixes often move problems.

## 5. Test edge states

At minimum, pick those that apply:

- Empty or sparse data; dense or long content
- Loading and error
- Smallest supported width; a short viewport (for example 1366×768 or a landscape phone)
- 200% zoom or large text
- Keyboard-only through the main path
- Reduced motion (if motion changed)
- RTL (if the product supports it)

## 6. Critique your own result

Pretend a skeptical reviewer produced it. Ask:

- Is it better than the original, or only different?
- Did I add anything to fill space?
- Did I make any control more clever than necessary?
- Would this still look intentional with real, messy data?
- What would I flag if I were reviewing this?

## 7. Revise

Fix the issues the critique found. Then run the final gate.

## Budgeting the loop

- Small repair: one or two iterations.
- New surface: three or more, with a render each time.
- If you cannot render at all: do one careful static pass, then stop and hand the user a
  specific verification checklist. Do not iterate blind.
