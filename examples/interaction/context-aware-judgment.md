# Worked Example: Context-Aware Judgment Controls

**Archetype:** LIVE CONTROL · **Product types:** games, quizzes, auctions, support queues, moderation
**Skills:** interaction-design, workflow-compression, state-design

## Context

In a team quiz game, the host judges spoken answers. The system already knows which team buzzed
in and is answering. The host presses a button to mark it correct or wrong, often 30–60 times per
game, under time pressure, while talking to the room.

## The bad version

```
┌─────────────────────────────────────────────────┐
│ Question 7                                      │
│ [Correct Team A] [Wrong Team A]                 │
│ [Correct Team B] [Wrong Team B]                 │
│ [Correct Team C] [Wrong Team C]                 │
└─────────────────────────────────────────────────┘
```

## The typical wrong review

> "Clear labels, and the host has full control over every team."

## Correct analysis

- **Scope restatement (F1).** The host specifies the team, which the system already knows.
- **Error risk.** Pressing "Correct Team B" while Team A is answering awards the wrong team. With six
  similar buttons under pressure, this happens.
- **Frequency.** A constant action (dozens per game) with the most expensive treatment: a scan
  and a decision every time.
- **State visibility.** Who is answering is not shown prominently; the host must remember.

## The better version

```
┌─────────────────────────────────────────────────┐
│ QUESTION 7                              0:12    │
│ ██ TEAM A IS ANSWERING ██                       │
│                                                 │
│   [   ✓ Correct  (C)   ]   [   ✗ Wrong  (W)  ]  │
│                                       Undo (U)  │
│   Other team…                                   │
└─────────────────────────────────────────────────┘
```

- A state header makes the context unmistakable and changes color with the team.
- Two large, well-separated actions scoped to the answering team.
- Keyboard shortcuts for constant use; undo for the last judgment.
- A secondary "Other team…" path for rare corrections.
- Screen-reader announcement when the answering team changes.

## Measurements

| | Bad | Better |
|---|---|---|
| Buttons in the judging area | 6 | 2 (+ undo) |
| Decisions per judgment | 2 (which team, which verdict) | 1 (verdict) |
| Wrong-team errors possible | Yes | Only via explicit "Other team" |
| Keyboard | No | C / W / U |

## Why this works

The system's knowledge (who is answering) replaces a user decision. The one judgment that is
genuinely human (is the answer right?) stays with the host.

## When this lesson does not apply

- When several teams can be judged simultaneously (written answers), a per-team layout is correct;
  then optimize for bulk marking instead.
- When the "context" is ambiguous (two teams buzzed within milliseconds), show the ambiguity and let
  the host choose.

## Universal analogues

Selected file → "Share"; active participant → "Admit"; current order → "Refund"; focused ticket →
"Resolve"; selected record → "Approve."

## Canonical rule

**If context already determines scope, do not make the user specify scope again.**
