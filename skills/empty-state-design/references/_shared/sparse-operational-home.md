<!-- GENERATED FROM examples/composition/sparse-operational-home.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: The Sparse Operational Home

**Archetype:** OPERATIONAL · **Product types:** apps, dashboards, tools, admin
**Skills:** composition-repair, empty-state-design, anti-slop-ui

## Context

A teacher's home screen in a quiz app. Teachers visit several times a day. Most have a handful of
quizzes and host a game or two a day.

## The bad version

```
┌──────────────────────────────────────────────────────────────┐
│ Welcome back, Sam! 👋                                         │
│                                                              │
│   [ Create ]      [ Open ]      [ Library ]                  │
│                                                              │
│                                                              │
│            ~70% of the viewport empty                        │
└──────────────────────────────────────────────────────────────┘
```

## The typical wrong reviews

> "Minimal and focused." (wrong: it is empty)

> "Add four stat cards (Quizzes: 3, Games: 12, Students: 87, Avg score: 74%), a tips carousel, and
> an illustration." (wrong: fake density)

## Correct analysis

- **Wrong focal point (V2).** The greeting is P0; the user's work is absent.
- **Duplicate navigation.** Create / Open / Library repeat the sidebar.
- **Dead space (V3).** Operational pages should show state and next actions.
- The system knows plenty: drafts, recently edited quizzes, a quiz generated in the background,
  last game's results waiting to be reviewed.

## The better version

```
┌──────────────────────────────────────────────────────────────┐
│ Ready to host                                                │
│ ┌──────────────────────────┐  "Cell Biology" · 12 questions  │
│ │ Cell Biology (generated) │  created 10 min ago              │
│ └──────────────────────────┘  [ Host now ]  Edit              │
│                                                              │
│ Continue                          Needs attention            │
│ • Fractions Review (draft, 6/10)  • Results from 2nd period  │
│ • World Capitals (edited 2h ago)    3 answers flagged        │
│                                                              │
│ [ + New quiz ]   Import · Templates                          │
└──────────────────────────────────────────────────────────────┘
```

Only real state: the most valuable ready item, work to continue, items needing attention, and one
creation action. No invented metrics.

## When the account is genuinely empty

Show the meaningful empty state instead: one sentence, create/import/template, nothing fake.

## Why this works

The page answers "what should I do now?" with the user's actual work.

## When this lesson does not apply

FOCUSED surfaces (a single-purpose launcher, a kiosk start screen) may be intentionally spare with
a designed environment.

## Universal analogues

Project tools (continue, due soon, mentioned), commerce admin (orders to fulfill), CRM (follow-ups
due), design tools (recent files), IDE start screens (recent projects).

## Canonical rule

**Useful density is not filler. Surface real state, never fake metrics.**
