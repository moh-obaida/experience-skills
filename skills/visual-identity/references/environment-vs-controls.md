# Environment vs Controls

Personality belongs at the experience level. Controls should be familiar.

## Why controls should stay conventional

- Users recognize standard inputs, buttons, checkboxes, and selects instantly.
- Native and standard controls come with keyboard support, autofill, paste handling, screen
  reader semantics, mobile keyboards, and platform behavior.
- Custom controls tend to break these, and each break costs someone.
- When every control is "special," nothing is.

## Where personality should go instead

| Environment element | Examples |
|---|---|
| Background field | Product-derived pattern, color field, imagery, subtle texture |
| Framing | How the task region is framed and placed; stage vs panel vs page |
| Typography | Display face for headings and key moments |
| Illustration and characters | In empty states, onboarding, results, errors |
| Key moments | Results, celebrations, confirmations, transitions |
| Motion signature | How important events resolve |
| Voice | Copy throughout |

## What controls can carry

Controls participate in identity lightly and systematically:

- Color roles (primary action color, team colors)
- Type (the product's UI face)
- Corner radius from the shape language, applied consistently
- Focus ring styling that matches the brand while staying highly visible

## The canonical example

A game join page with a blank background and six elaborate segmented boxes for the code puts
personality in the one place users need to be fast and reliable. A normal code input in a
strong branded environment is more usable and more memorable.

See `references/_shared/join-code-page.md` and
`references/_shared/branded-environment-simple-form.md`.

## When a custom control is justified

- The standard control cannot express the interaction (a color wheel, a timeline scrubber, a game
  board).
- The custom version is measurably faster or clearer for frequent use.
- The team can afford accessibility and platform parity.

Even then, the custom control should look operable and familiar in its affordances.
