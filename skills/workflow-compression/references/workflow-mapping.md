# Workflow Mapping

You cannot compress what you have not mapped. Map the real flow, step by step, before
proposing changes.

## Choosing the flow

- Start from an **outcome** ("student joins a game," "teacher exports grades," "customer
  reorders last week's groceries"), not from a screen.
- Pick the **most frequent actor** first. A flow can be fine for first-time users and awful for
  daily users, or the reverse.
- Define **start** and **end** precisely. Starting from "logged in on home" versus "clicked a
  notification" changes the count.

## Walking the flow

Best evidence: do it in the running product, counting as you go. Next best: follow the code
path (routes, components, handlers). Last: from a description or screenshots. State which.

At each step record:

| Field | Meaning |
|---|---|
| # | Order |
| Context | Screen, modal, route, or terminal prompt |
| Step | What the user does, in their words |
| Type | action · input · decision · navigation · confirmation · wait · lookup · recovery · outcome |
| Known? | Does the system already have this information? From where? |
| Options | For decisions: how many *valid* options exist in this situation? |
| Reversible? | For confirmations: could the action be undone instead? |
| Needed? | Does this step buy safety, judgment, comprehension, or compliance? |

## Step types

- **action:** an unambiguous click/tap/key with no thinking (press "Next").
- **input:** typing or selecting a value.
- **decision:** choosing among alternatives; requires thought.
- **navigation:** changing screen, route, tab, or opening a modal.
- **confirmation:** acknowledging or approving before an effect.
- **wait:** time spent blocked (record seconds, and whether the user can do anything else).
- **lookup:** leaving the flow to find information (checking an email for a code).
- **recovery:** undoing or fixing a problem the product caused.
- **outcome:** the result. Record whether a next action is offered.

A single screen often contains several steps (two inputs, one decision, one action).

## Example map

| # | Context | Step | Type | Known? | Options | Reversible? | Needed? |
|---|---|---|---|---|---|---|---|
| 1 | Home | Open Library | navigation | – | – | – | Maybe |
| 2 | Library | Find the quiz | decision | Recently edited | – | – | Yes |
| 3 | Quiz page | Press "Host" | action | – | – | – | Yes |
| 4 | Host setup | Choose language | decision | Yes (quiz is English) | 1 | – | No |
| 5 | Host setup | Choose team mode | decision | Last used: teams of 4 | 3 | – | Sometimes |
| 6 | Modal | "Start hosting?" | confirmation | – | – | Yes (can end lobby) | No |
| 7 | Lobby | Lobby ready | outcome | – | – | – | Next: share code ✓ |

## Counting

Totals from the example:

```
Actions 1 · Inputs 0 · Decisions 3 (1 one-option, 1 defaultable) · Navigations 1
Confirmations 1 (reversible) · Waits 0 · Outcome with next action: yes
```

## Weighting

Multiply per-occurrence cost by frequency to rank flows and steps. A rough weight:

```
weight ≈ occurrences per week × (decisions × 3 + inputs × 2 + navigations × 1.5 + actions × 1
          + confirmations × 1.5 + blocking wait seconds / 10)
```

The coefficients are a heuristic, not a law. Adjust when a decision is trivial or an input is
long. Use weights to compare, not to claim precision.

## Scripted ledger

`scripts/workflow-ledger.mjs` reads a JSON map (see `assets/workflow-template.json`), counts
both versions, tags likely friction, and prints the comparison. Useful for keeping reports
consistent across flows.
