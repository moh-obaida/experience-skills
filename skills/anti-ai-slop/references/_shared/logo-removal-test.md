<!-- GENERATED FROM examples/identity/logo-removal-test.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: The Logo-Removal Test

*Invented teaching example. Where it cites real products, the observations are in the repository's research log (Duolingo DU1, Raycast RC1, Brilliant BR1; 2026-09-24).*

**Archetype:** OPERATIONAL and EXPERIENTIAL · **Product types:** any
**Skills:** visual-identity, anti-slop-ui

## Context

A learning app for language practice has three core screens: home, lesson, and results. The team
feels the product "looks like every other app." They ask for "more personality."

## The generic version (logo hidden)

```
Home:     sidebar · "Welcome back!" · 4 stat cards · "Continue" card · list of lessons in cards
Lesson:   white card centered · question text · 4 answer buttons (rounded, pastel) · progress bar
Results:  confetti · "Great job!" · score in a circle · two buttons
```

Font: framework default sans. Colors: indigo primary, pastel pills. Icons: generic outline set.

## The typical wrong fix

> "Add a gradient hero, glassmorphism cards, a mascot in the corner, and emoji in the headings to
> make it feel fun and unique."

This adds trend treatments, not identity. It would still be indistinguishable from other apps
that followed the same advice.

## Correct analysis

Run the test on each screen with the logo hidden:

| Screen | Recognizable? | Carriers present |
|---|---|---|
| Home | No | None beyond indigo |
| Lesson | No | None |
| Results | Barely | Confetti (generic) |

Missing carriers: typography voice, a motif derived from the product, a motion signature, voice in copy.

## Deriving identity from the product

- **Domain:** language, conversation, travel, everyday objects.
- **Mechanic:** matching words to meaning; speaking; streaks of daily practice.
- **Content:** words, phrases, short dialogues.
- **Audience:** adults practicing 10 minutes a day on phones.

Chosen carriers (three):

1. **Typography:** a characterful display face for target-language words at large size, the
   product's signature moment; neutral UI face elsewhere.
2. **Motif:** speech-bubble geometry (rounded rectangle with a tail) in panel corners, empty
   states, and the results screen, never inside controls.
3. **Motion signature:** correct answers "snap" the word into the sentence (transfer), a small,
   fast, consistent event.

Also: copy voice shifts from generic cheer ("Great job!") to specific ("12 new words this week,
including 'mercado'").

## The recognizable version (logo hidden)

```
Home:     "Continue: At the market (3 of 8)" with the next phrase in display type · recent words
Lesson:   the target-language sentence large, with a blank; answer chips below; speech-bubble frame
Results:  the words learned today, set in display type, with the snap motion replayed once
```

## Why this works

The identity comes from what the product *is* (words in context, conversation), expressed in
type, one motif, and one motion signature. It is recognizable on sparse and dense screens.

## User goal and constraints

The product should be recognizable on every surface without adding clutter. Constraints: daily 10-minute use on phones; many screens are dense lesson and review views.

## Alternative direction

A purely typographic identity: one distinctive display face for target-language words plus tight color roles, no motif. Cheaper; weaker on empty and celebration states.

## Implementation notes

Define carriers as tokens (display font role, speech-bubble radius and tail component, 'snap' motion token); apply to headers, empty states, results; keep lesson controls standard.

## Verification

Logo test on home, lesson, empty review queue, and settings; reduced-motion check of the snap; contrast of display type.

## Failure conditions

Carriers applied to every button; a mascot added without a role; identity visible only in marketing screenshots.

## When this lesson does not apply

Utility or public-service products can pass with plainness if they are consistent; the test then
checks consistency, not ornament.

## Universal analogues

Any product that "looks like a template": run the test, list missing carriers, derive two to four
from the product.
