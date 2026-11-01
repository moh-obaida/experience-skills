# Element Interrogation: From Doubt to Verdict

A procedure for turning "do we need this?" into a verdict with proof.

## 1. Inventory by state

Render the surface in at least: first load, populated or in-progress, an error or blocked state,
and (for live products) a healthy and a degraded connection. Necessity changes with state; an
element is judged only against the states in which it appears. Write the inventory as a flat list:
the element, where it sits, what it says or does.

Do not inventory the whole product. Stay on the requested screen and its states.

## 2. The eight questions, applied

Use the questions in the shared necessity module, with these working notes.

| Question | Working note |
|---|---|
| Does it communicate information the user needs? | Needed for what task, at this moment? "Interesting" is not needed |
| Is the information already visible elsewhere? | Name the other element and check it is present in the same states |
| Does the user need it at this point in the workflow? | Early warnings about a later step and late warnings about an earlier one both fail |
| Does it enable an action? | A pill that looks tappable and is not enables nothing |
| Does it improve orientation, safety, accessibility, or recovery? | If yes, the element is protected; skip to KEEP or reduce its cost |
| Could it be removed without losing necessary information? | Test by deleting it mentally and reading the screen cold |
| Would changing when it appears be better than removing it? | If yes, the verdict is CONDITIONAL DISPLAY |
| Does it add visual or cognitive load out of proportion to its value? | Weight versus use frequency |

## 3. Verdict procedure

```text
Is it a security item, disclosure, accessibility affordance, critical status, safeguard, or recovery path?
  yes -> KEEP (or RELOCATE / REWRITE / CONDITIONAL DISPLAY to cut its cost). Never REMOVE.
Does the same information or action exist, visibly, in every state where this appears?
  yes -> REMOVE the weaker instance, or MERGE if each carries a part.
Does it carry a fact or action needed only in some states?
  yes -> CONDITIONAL DISPLAY.
Is it needed but misplaced, over-weighted, or global-and-local duplicated?
  yes -> RELOCATE.
Is it needed but the words mislead, repeat, or assume?
  yes -> REWRITE (microcopy-quality owns the wording).
Would the removal touch policy, legal, safety, revenue, or a user group the evidence cannot see?
  yes -> NEEDS PRODUCT DECISION.
Otherwise -> KEEP, with its job stated.
```

## 4. Proof by verdict

| Verdict | Proof to write |
|---|---|
| KEEP | The job in one sentence |
| REMOVE | Where the information still lives (element and state), and that nothing protective goes with it |
| MERGE | Which instance survives; the merged text or control carries both meanings |
| RELOCATE | Destination, and the user path that reaches it when needed |
| REWRITE | What is misleading, and a handoff to microcopy-quality |
| CONDITIONAL DISPLAY | Showing state, hiding state, failsafe |
| NEEDS PRODUCT DECISION | The decision, the owner, and the evidence so far |

## 5. Worked examples (invented)

- **"Two teams" under two team panels.** Information already visible (both panels labeled), visible
  in every state where the caption shows. REMOVE the caption. If the number were a setup choice in
  the lobby, the same words would be KEEP.
- **"Live connection" pill, always shown.** A healthy connection needs no permanent marker, but a
  lost or reconnecting connection must be unmistakable. CONDITIONAL DISPLAY: silent when healthy;
  a prominent, recoverable banner when degraded; verify the banner on a forced disconnect.
- **"Not enough players" notice in the lobby from the start.** Useful when the host tries to start,
  and as a quiet requirement while fewer than the minimum have joined. CONDITIONAL DISPLAY: show
  the requirement inline near the Start control, and make it blocking text only on the attempt.
- **Decorative gradient rule above every section title.** No information, no action, no
  orientation. REMOVE.
- **"Choose letters: 26 playable letters" with a locked selector.** One effective answer. If the
  value never varies, NEEDS PRODUCT DECISION to default it; if the rules require it to be visible,
  KEEP with a rewritten label.
- **Terms-of-service checkbox looks heavy.** Required disclosure. RELOCATE or REWRITE; never REMOVE.

## 6. Overlap rules

- If necessity says REMOVE, do not also propose a rewrite of the same element.
- If an element is both redundant and badly worded, the verdict is REMOVE or MERGE, with the
  wording issue noted only if it survives.
- If two elements are one fact, MERGE and choose the survivor by where the fact is needed.

## 7. Limits

This skill reads the rendered screen. It does not know user research, support tickets, or legal
requirements. When a verdict depends on them, say so and use NEEDS PRODUCT DECISION.
