# Worked Example: The Sparse Operational Home

*Invented teaching example. Where it cites real products, the observations are in the repository's research log (GitHub GH1–GH2 (rows that answer 'what changed'); 2026-09-24).*

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

## Bad AI instincts

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

## User goal and constraints

Teachers open the home screen several times a day to continue work or host. Constraints: accounts range from empty to hundreds of quizzes.

## Alternative direction

A 'today' timeline of scheduled and recent games with the next action per item, for teachers who schedule ahead.

## Implementation notes

Queries for ready, recent, draft, and needs-attention items; empty-state branch when all are empty; no stat tiles; one creation action.

## Verification

Render with 0, 1, 5, and 200 quizzes; measure coverage at 1440×900 and 1366×768; confirm every element is real data.

## Failure conditions

Stat tiles added back for 'polish'; sections that are empty for most users shown as empty boxes.

## When this lesson does not apply

FOCUSED surfaces (a single-purpose launcher, a kiosk start screen) may be intentionally spare with
a designed environment.

## Universal analogues

Project tools (continue, due soon, mentioned), commerce admin (orders to fulfill), CRM (follow-ups
due), design tools (recent files), IDE start screens (recent projects).

## Canonical rule

**Useful density is not filler. Surface real state, never fake metrics.**
