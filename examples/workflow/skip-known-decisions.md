# Worked Example: Skip Known Decisions

**Archetype:** CREATION, OPERATIONAL · **Product types:** generators, importers, setup flows
**Skills:** workflow-compression, interaction-design

## Context

A teacher uploads a worksheet (PDF) to generate a quiz. The document's metadata and text show it
is in English. The teacher's plan allows only one output format. Teachers do this several times a
week.

## The bad version

```
1. Upload file
2. Choose language:  (•) English  ( ) Arabic  ( ) French        [Continue]
3. Choose size:      (•) Standard (only option on your plan)     [Continue]
4. Confirm source:   "worksheet.pdf"  [Back] [Continue]
5. Review settings   [Continue]
6. "Are you sure you want to generate?"  [Cancel] [Generate]
7. Wait on this screen (~90 s)
```

## The typical wrong review

> "A clear, guided step-by-step flow with good progress indication."

## Correct analysis

| Step | Friction |
|---|---|
| Choose language | F1 REDUNDANT INPUT: known from the document |
| Choose size | F2 UNNECESSARY CHOICE: one valid option |
| Confirm source | F2: the user just uploaded it |
| Review settings | Nothing to review after removing known decisions |
| "Are you sure?" | F5 CONFIRMATION TAX: generation is cheap and reversible (discard draft) |
| Wait on screen | F8 WAITING TAX: background-capable job |

## The better version

```
1. Upload file
   → Summary line: "Language: English (from document) · Change"
   → Relevant setup only: number of questions [10 ▾]  question types [Mixed ▾] (last used)
2. [ Generate quiz ]
   → "Generating 'worksheet' · about 1–2 min. You can leave; it will appear in your Library."
```

## Measurements

```
Before: 7 steps · 5 decisions (1 known, 2 one-option) · 5 navigations · 1 confirmation · ~90 s blocking wait
After:  2 steps · 2 decisions (both meaningful, defaulted)  · 0 navigations · 0 confirmations · 0 s blocking
Preserved: the teacher decides question count and types (their judgment)
Frequency: ~4×/week per teacher
```

## Why this works

The system stops asking what it knows, removes fake choices, and backgrounds the wait. The
remaining questions are the ones where the teacher's judgment matters.

## When this lesson does not apply

If language detection is unreliable (mixed-language documents), show the detected language as the
default with prominent change, or ask when confidence is low.

## Universal analogues

Currency from the account's country; timezone from the device; recipient from the thread; project
from the current folder; framework from the repository.

## Canonical rules

**If the software already knows the answer, do not ask again.**
**If there is only one meaningful option, do not ask a question.**
