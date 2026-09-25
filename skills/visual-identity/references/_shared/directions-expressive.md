<!-- GENERATED FROM shared/design-intelligence/directions-expressive.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Directions: Expressive Family

Directions where delight, character, and play are part of the value.

---

## Playful

**Philosophy:** energy and fun signal that the product is for enjoyment.

| Aspect | Tendency |
|---|---|
| Suits | Casual games, children's products, social and party apps, classroom games |
| Unsuitable | Finance, health, legal, enterprise |
| Composition | Environment-first focus, bold shapes, bouncy rhythm |
| Typography | Rounded or chunky display; legible body |
| Surface & shape | Rounded forms, bright fields |
| Imagery | Illustration, stickers, shapes |
| Palette | High-energy classroom/game family |
| Motion | Springy but short; celebrations for real achievements |
| Interaction | Big, standard controls; forgiving input |
| Accessibility | Bright fields often fail contrast; flashing limits |

**Fails when:** play is applied to controls (bouncing inputs) instead of the environment. **Precedent:**
Kahoot (KH1, KH2), Blooket (BK1, BK2), and the deeper `playful-products.md` module
(PLY1, PLY2, PLY3, PLY4).
Use Scratch and Finch as evidence that play can live in the creation loop, feedback model, and
non-competitive progress—not only in bright cards. On mobile, keep the task surface and primary
control stable while moving celebration into an interruptible layer; in loading, error, and empty
states, preserve plain explanations and a recoverable action. Test reduced motion, flashing limits,
keyboard/focus visibility, non-color status, readable type, RTL order, and whether the product's
audience actually wants delight. If the user is resolving a financial, medical, legal, or serious
operational issue, route away from this row or constrain play to the surrounding environment.

## Character-driven

**Philosophy:** a mascot or cast gives the product a voice and emotional continuity.

| Aspect | Tendency |
|---|---|
| Suits | Learning, habit formation, games, onboarding-heavy consumer products |
| Unsuitable | Enterprise, serious health, finance errors |
| Composition | Character as focal object at key moments |
| Typography | Friendly display, legible body |
| Surface & shape | Derived from the character's shapes |
| Imagery | The character in states (success, error, waiting, empty) |
| Palette | Character colors as brand roles |
| Motion | Character reactions tied to events |
| Interaction | Plain controls |
| Accessibility | Character content needs text equivalents |

**Fails when:** the character appears once as decoration. **Precedent:** Duolingo (DU1), Grafana
not-found mascot (GF2). **Adapt:** define poses for states before drawing anything else.

## Educational playful

**Philosophy:** clear learning structure first; delight reinforces progress.

| Aspect | Tendency |
|---|---|
| Suits | Learning apps, classroom tools, practice platforms |
| Unsuitable | Adult professional tools where gamification trivializes |
| Composition | Lesson layout, progress, practice, feedback |
| Typography | Very legible, generous sizes for young readers |
| Surface & shape | Friendly but calm during problem-solving |
| Imagery | Content visuals (the problem itself) |
| Palette | Playful educational family with calm lesson surfaces |
| Motion | Feedback on answers; progress events |
| Interaction | Large targets; clear correct/incorrect states not by color alone |
| Accessibility | Dyslexia-friendly type choices, reading level |

**Precedent:** Brilliant (BR1), Duolingo (DU1), Khan Academy teacher routing (KA2). **Adapt:** let the
lesson content be the visual.

## Immersive game-like

**Philosophy:** the interface is part of the world.

| Aspect | Tendency |
|---|---|
| Suits | Games, interactive fiction, event experiences |
| Unsuitable | Utilities |
| Composition | Immersive viewport, diegetic UI, full-bleed art |
| Typography | Themed display; legible UI text |
| Surface & shape | World materials |
| Imagery | Key art |
| Palette | Cinematic or world-specific |
| Motion | Rich, event-driven, skippable |
| Interaction | Controller, touch, and keyboard parity |
| Accessibility | Subtitles, remappable controls, reduced motion |

**Precedent:** Steam (ST2), PlayStation (PS1), Nintendo (NI3). **Adapt:** keep settings, purchase, and
account surfaces conventional.
### Family checks

Responsive behavior moves spectacle behind the task and preserves a stable action path. Accessibility
and RTL require text alternatives, non-color feedback, pause/reduced-motion behavior, and mirrored
reading order. AI failure: applying character and bounce to every control. Put personality in the
world and derive motifs from the product's content.
