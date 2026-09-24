# Worked Example: The Join-Code Page

**Archetype:** FOCUSED · **Product types:** games, events, classrooms, live polls, meeting rooms
**Skills:** composition-repair, visual-identity, interaction-design, anti-slop-ui

## Context

Players join a live classroom game by typing a 6-digit code shown on the host's projector. Most
join from school Chromebooks (1366×768) or phones. The page is the first thing every player sees.

## The bad version

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│                                                               │
│                         [logo]                                │
│                     Join the game                             │
│               ┌──┐┌──┐┌──┐ ┌──┐┌──┐┌──┐                       │
│               │  ││  ││  │ │  ││  ││  │   ← glowing, animated │
│               └──┘└──┘└──┘ └──┘└──┘└──┘                       │
│                    [   Join   ]                               │
│                                                               │
│                                                               │
│              flat background, ~85% of viewport empty          │
└───────────────────────────────────────────────────────────────┘
```

Six segmented digit boxes with glow and bounce animation, centered on a blank page.

## The typical wrong review

> "Clean, modern, and spacious. The segmented code input feels playful and game-like, and the
> minimal layout keeps focus on the task."

Every adjective here is a conclusion without evidence. "Spacious" describes emptiness. "Playful"
is attached to the wrong element.

## Correct analysis

1. **Aligned, not composed (V6) and dead space (V3).** Content covers roughly 12–15% of the first
   viewport at 1440×900 (measurable with `measure-layout.mjs`). The rest has no role. The page is
   centered by default, not composed.
2. **Misplaced personality (I3).** The only expressive element is the control. The environment,
   which every player sees for several seconds while the host sets up, is blank.
3. **Fails the logo test (I1).** Hide the logo and this could be any product.
4. **Custom control cost.** Segmented boxes commonly break paste (players copy the code from a
   shared screen or chat), break screen-reader labeling (six unlabeled fields), complicate
   backspace and correction, and fight mobile one-time-code autofill. They add no speed.
5. **Viewport budget.** On 1366×768 with browser chrome, the Join button still fits, but only because
   there is nothing else. The problem is not space; it is that space does nothing.

## The better version

```
┌───────────────────────────────────────────────────────────────┐
│ ◆ ◇ ◆ ◇  product-derived pattern field (board geometry)  ◇ ◆ │
│ ◇     ┌─────────────────────────────────────┐          ◆ ◇   │
│ ◆     │  [logo]                             │   ◇ ◆          │
│       │  Join a game                        │                │
│ ◇ ◆   │  Game code                          │        ◆ ◇ ◆   │
│       │  [ 4 8 2   9 1 7            ]       │                │
│ ◆     │  [            Join            ]     │   ◇            │
│       │  The code is on the host's screen   │                │
│ ◇ ◆   └─────────────────────────────────────┘      ◆ ◇ ◆     │
│  ◆ ◇ ◆ ◇   warm stage light behind the panel      ◇ ◆ ◇      │
└───────────────────────────────────────────────────────────────┘
```

- A full-bleed environment derived from the product (board geometry, team colors, stage light).
- A task panel scaled and placed deliberately, with strong type.
- **A single, standard input:** large type, letter spacing, `inputmode="numeric"`,
  `autocomplete="one-time-code"`, accepts paste with spaces or dashes, submits on Enter.
- One obvious Join button; one line of help.

## Measurements

| | Bad | Better |
|---|---|---|
| Actions to join (typing aside) | 1 | 1 |
| Paste works | Often no | Yes |
| Screen reader | 6 unlabeled fields | 1 labeled field |
| First-viewport role | ~85% no role | Environment establishes place |
| Logo test | Generic | Recognizable |

## Why this works

Personality moved from the control, where it cost usability, to the environment, where it costs
nothing and is seen by everyone. The control became faster and more robust. The page became a
place.

## When this lesson does not apply

- Public-service or banking verification pages: the environment should be calm and official;
  identity through clarity, not a playful pattern. Keep the single input.
- Embedded flows inside another product's frame: there may be no environment to design.
- If a design system mandates segmented boxes, they must behave as one input underneath (paste,
  autofill, one accessible label).

## Universal analogues

Event check-in codes, meeting-room codes, invite codes, one-time verification codes, gift-card
redemption, order lookup, ticket numbers.

## Canonical rule

**Make the environment interesting, not the textbox.**
