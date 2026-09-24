# Workflow Rubric

Evaluate a workflow by measurement first, judgment second.

## Step 1 — Map the flow

List every step from intent to outcome. For each step record:

| # | Screen/context | User action | Type | Known by system? | Required? |
|---|---|---|---|---|---|

Types: `action`, `input`, `decision`, `navigation`, `confirmation`, `wait`, `lookup`, `recovery`.

## Step 2 — Count

```
Actions:        n
Inputs:         n (of which already known: n)
Decisions:      n (of which one-option: n)
Navigations:    n
Confirmations:  n (of which reversible actions: n)
Blocking waits: n (total ~s)
```

## Step 3 — Classify friction

Tag each wasteful step with the workflow friction taxonomy (F1–F10 and secondary types).

## Step 4 — Protect what must stay

Mark steps that buy safety, judgment, comprehension, or compliance. They stay (or get better,
not shorter).

## Step 5 — Redesign and recount

Produce the same table and counts for the proposed flow. Report both:

```
Before: 9 actions · 4 screens · 3 decisions · 2 known inputs re-asked · 1 blocking wait
After:  3 actions · 1 screen  · 1 decision  · 0 re-asked            · 0 blocking waits
Preserved: final review before sending to 200 recipients
Frequency: ~15×/week per teacher → saves ~6 actions per occurrence
```

## Quality questions beyond counts

- Is the main path obvious to a first-time user?
- Can a frequent user go faster (shortcuts, defaults, memory)?
- Does the flow end with a next action?
- Can the user leave and return without loss?
- Does every error preserve input and explain recovery?
- Is the flow usable by keyboard and screen reader?
