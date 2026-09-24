# Time to Outcome

A product exists so a person can reach an outcome: a message sent, a game joined, a report
understood, an order placed, a file shared. Every step between intent and outcome is a cost.
Some costs buy safety, clarity, or meaningful choice. Many buy nothing.

Functionality is the baseline. Once something works, ask how long it takes.

## The cost units

Measure in units a user actually pays:

| Unit | What counts |
|---|---|
| Actions | Clicks, taps, keystrokes beyond the essential input, gestures |
| Decisions | Every question the user must answer, even a trivial one |
| Inputs | Fields filled, especially values the system already had |
| Navigations | Route, page, screen, or modal changes |
| Waits | Time blocked watching progress the user cannot act on |
| Recoveries | Steps spent undoing or fixing something the product caused |
| Lookups | Times the user must go find information elsewhere to proceed |

Decisions are usually the most expensive unit. A click on an obvious button costs little;
a click that requires reading three options and choosing costs much more.

## Where time hides

- **Known answers asked again.** Language, region, account, current selection.
- **Choice screens with one real option.**
- **Confirmation for harmless, reversible actions.**
- **Separate editors for tiny edits.** Rename, reorder, toggle.
- **Serial work.** Doing one-by-one what could be done in bulk.
- **Forgotten context.** Filters, drafts, last-used configurations, scroll position.
- **Babysitting.** Work that could run in the background holds the user on a spinner.
- **Dead ends.** Success screens with no continuation.
- **Beginner paths forced on experts.** No shortcuts, no remembered defaults, no direct entry.

## What time is allowed to buy

Not every step is waste. Keep or add steps when they buy:

- **Safety.** Money movement, deletion of irreplaceable data, publishing to many people.
- **Meaningful judgment.** The step where the user's decision is the value (choosing the
  winning answer, approving a payment, picking a design).
- **Comprehension.** A first-time user who needs one sentence of orientation.
- **Legal or regulatory requirement.** Document it so nobody "optimizes" it away.

Compression that removes safety or judgment is not an improvement.

## Frequency changes everything

A 3-step flow used once at signup is fine. The same 3 steps performed 40 times a day is a
serious product defect. Weight friction by how often it occurs and by who pays it.

- **Rare + consequential:** optimize for clarity and safety.
- **Frequent + routine:** optimize for speed, defaults, shortcuts, and memory.
- **Frequent + consequential:** optimize for speed *and* strong, well-placed safeguards.

## Measuring

Always report before and after:

```
Before: 7 actions · 3 screens · 4 decisions · 2 repeated inputs · 1 blocking wait
After:  2 actions · 1 screen  · 1 decision  · 0 repeated inputs · 0 blocking waits
Preserved: final confirmation before irreversible step
```

If you cannot measure (no access to the product), estimate from the described flow and say so.
