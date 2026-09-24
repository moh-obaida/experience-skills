# Motion Languages

A motion language is a consistent character for how things move, derived from the product. It sits
on top of the event-driven rules (motion explains what happened) and the platform guidance recorded
in the precedent log (Apple HIG AHM1–AHM5; Material MDT1–MDT3).

| Language | Character | Tokens (typical) | Suits | Avoid for |
|---|---|---|---|---|
| Precise / functional | Short, linear-to-ease-out, no overshoot | 100–250 ms | Tools, docs, finance, public service | Celebrations that need warmth |
| Soft / calm | Longer ease-in-out, small distances | 200–400 ms | Wellness, onboarding | Frequent actions |
| Snappy / playful | Fast in, small overshoot | 150–300 ms with spring | Games, kids, social | Money, health, destructive actions |
| Physical / tactile | Follows gestures, momentum, rubber-banding | Gesture-driven | Mobile, direct manipulation, creative tools | Keyboard-only flows (keep instant) |
| Cinematic | Cuts, cross-fades, slow reveals; skippable | 400–1200 ms | Media, launches, game menus | Tasks and repeated navigation |
| Diagrammatic | Step-through sequences that build understanding | Per step, user-paced | Education, infrastructure explanations | Decoration |
| Stepped / mechanical | Discrete frames, no easing | Instant steps | Retro, industrial, pixel | Continuous feedback |

## Deriving a language

1. Look at the product's world: a stage (buzzer-like snaps), paper (settle, no bounce), a
   control room (instant, precise), a toy (springy).
2. Choose one language; define tokens once (duration, easing, distance).
3. Apply the language to real events only; frequent interactions get the shortest version.
4. Define reduced-motion equivalents per event (cross-fade, highlight, instant state).

## Transition relationships (from platform guidance)

| Relationship | Pattern | Use |
|---|---|---|
| Container | Container transform with a persistent element | List item → detail, card → page, search box → search view |
| Hierarchy | Forward/backward horizontal motion | Inbox → thread |
| Peers | Lateral motion | Tabs, carousels |
| Top level | Fade through | Switching main destinations |
| Enter/exit | Scale/fade from origin | Dialogs, menus |
| Loading | Skeletons matching final layout | Content arrival |
