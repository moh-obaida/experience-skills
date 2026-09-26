<!-- GENERATED FROM shared/design-intelligence/motion-languages.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Motion Languages

A motion language is a consistent character for how things move, derived from the product's
identity the same way a color palette or a type voice is. It sits on top of the event-driven
rules (motion explains what happened — see `event-motion.md`) and platform guidance recorded in
the precedent log (Apple HIG AHM1–AHM5; Material MDT1–MDT3). Where those references answer "what
does *this event* need," this module answers "what is this *product's* motion supposed to feel
like, everywhere."

Most products need exactly one primary language, defined once as tokens, applied consistently.
A second language for a bounded context (a cinematic first-run sequence inside an otherwise
precise tool) is sometimes justified; a different feel on every screen is not a language, it is
noise.

## Choosing a language

1. **Look at the product's world**, not its industry category. A finance app is not automatically
   "precise" — a finance app built around calm long-term planning may want soft/calm; a finance
   app built around live trading wants precise/functional. Ask what real-world object or
   environment the product's actions resemble: a stage (snaps, cues), paper (settle, no bounce), a
   control room (instant, exact), a toy (spring, bounce), a camera (cuts, reveals), a diagram
   (step-through), a machine (discrete frames).
2. **Choose one language and define its tokens once** (duration, easing, distance) — see
   `tokens-sequencing-interruption.md` for the token mechanics. The language is a set of
   *decisions*, not a mood board.
3. **Apply the language to real events only** (`event-motion.md`); frequent interactions always
   get the shortest, least expressive version of the language, however playful the language is.
4. **Define the reduced-motion equivalent per event before shipping** (`reduced-motion-and-performance.md`).
   A language is not complete until its reduced-motion form exists.

**The mismatch test.** After picking a language, ask: does this feel like the product, or does it
feel like a demo reel? A snappy, springy interface for a tax-filing tool signals "not serious" the
same way a slow, cinematic reveal on a trading dashboard signals "not fast enough to trust." The
language should make the product feel more like itself, not more like a category of software.

## The seven languages

| Language | Character | Tokens (starting point) | Suits | Avoid for |
|---|---|---|---|---|
| Precise / functional | Short, linear-to-ease-out, no overshoot | 100–250 ms | Tools, docs, finance, public service | Celebrations that need warmth |
| Soft / calm | Longer ease-in-out, small distances | 200–400 ms | Wellness, onboarding, recovery | Frequent, high-volume actions |
| Snappy / playful | Fast in, small overshoot | 150–300 ms with spring | Games, kids, social | Money, health, destructive actions |
| Physical / tactile | Follows gestures, momentum, rubber-banding | Gesture-driven | Mobile, direct manipulation, creative tools | Keyboard-only flows (keep instant) |
| Cinematic | Cuts, cross-fades, slow reveals; skippable | 400–1200 ms | Media, launches, game menus | Tasks and repeated navigation |
| Diagrammatic | Step-through sequences that build understanding | Per step, user-paced | Education, infrastructure explanations | Decoration |
| Stepped / mechanical | Discrete frames, no easing | Instant steps | Retro, industrial, pixel | Continuous feedback |

### Precise / functional

**Character.** Motion that confirms an action happened and gets out of the way. No personality is
added through movement; personality, if any, lives in type, color, and the environment instead.

**Product contexts.** Developer tools, admin surfaces, financial infrastructure, air-traffic and
operational monitoring, public-service forms, accessibility-first products where predictability
matters more than expressiveness.

**Unsuitable contexts.** Any surface where the product needs to communicate warmth, achievement, or
delight — a precise language on a celebration moment reads as the product not caring that something
good happened.

**How it treats core events.** Arrival: instant fade or 100–150 ms slide with no overshoot.
Removal: fade out, no bounce. Transfer: the fastest legible shared-element move, or a plain state
change if the transfer isn't spatially meaningful. Progress: a determinate bar or count, never a
decorative spinner standing in for real progress information. Celebration: a brief, single state
change (checkmark, color) rather than a burst — precise products still need *some* acknowledgment
of success, just not spectacle. Attention: a color or weight change, not movement, for anything
that must not be missed (alerts should not rely on motion alone).

**AI-default failure mode.** Applying a generic "modern" easing curve (usually a soft spring) to
every transition regardless of context, so a precise product ends up with the same bouncy button
press as a mobile game. The tell: hover and press states that overshoot.

**Precedent:** GitHub (GH5). Measured computed styles (2026-09-26) show the homepage's "Sign in"
link transitions `background-color 0.2s, border-color 0.2s` — exactly the properties that visibly
change, named explicitly, at 200ms with no easing curve specified (browser default, effectively
linear-ish ease) and no transform. **Adapt:** naming only the properties that actually change,
instead of a blanket `transition: all`, is cheap and avoids accidentally animating properties (like
layout-affecting ones) that shouldn't transition — a good default even outside this language.

**Reduced motion.** This language already sits close to its own reduced-motion form; the main
change is removing any residual overshoot and shortening durations further.

### Soft / calm

**Character.** Motion that reassures rather than reports. Longer, gentler curves signal "nothing is
urgent here," which is the point in a wellness or recovery context and a liability in a
high-frequency operational one.

**Product contexts.** Health and wellness apps, meditation and sleep tools, family and home
products, onboarding sequences anywhere, recovery flows after an error.

**Unsuitable contexts.** Products used dozens of times an hour by the same person — the extra
100–200 ms per interaction compounds into real friction. A calm language on a data-entry-heavy
operational tool will feel sluggish, not soothing.

**How it treats core events.** Arrival: gentle fade combined with a small upward or inward drift.
Removal: slow fade, never an abrupt cut. Transfer: soft shared-element motion with generous
easing. Progress: smooth, continuous indicators rather than stepped ones. Celebration: understated
— a soft glow or gentle scale, not a burst; loud celebration breaks the calm register the rest of
the product built. Attention: a slow pulse rather than a sharp flash.

**AI-default failure mode.** Treating "calm" as an excuse to slow down *every* interaction
uniformly, including ones a returning user repeats often — the fix is the same as for any language:
frequent actions get the shortest version available within the language, even a calm one.

**Reduced motion.** Cross-fade for arrivals and removals; keep gentle color transitions (usually
acceptable under reduced motion) but drop any drift or scale.

**Precedent:** Headspace (HS5). Measured computed styles (2026-09-26) show the primary CTA's
transition is `150ms cubic-bezier(0.32, 0.94, 0.6, 1)`, applied to color, background, border, shadow,
and transform simultaneously — one soft-decelerating curve driving every hover/press property at
once, at a duration on the fast edge of this language's range because it's a frequent, repeated
control (the token table's own guidance: frequent actions get the shortest version). **Adapt:** a
single shared easing curve applied to every property of a state change (rather than a different
curve per property) is a cheap way to make a calm language feel coherent instead of like several
unrelated transitions firing together.

### Snappy / playful

**Character.** Motion with energy: quick entrances, a touch of overshoot, motion that reacts to the
user rather than just confirming them.

**Product contexts.** Games, quizzes and casual learning tools, social products aimed at younger or
casual audiences, creative and hobby tools where delight is part of the value.

**Unsuitable contexts.** Money movement, health data, account deletion, anything destructive or
consequential — a bouncy checkmark on "Payment sent" or "Account deleted" trivializes a serious
action. Also unsuitable as the *only* register in a product that also has serious moments; those
moments need to borrow restraint from elsewhere rather than force a bounce onto a warning.

**How it treats core events.** Arrival: quick entrance with slight overshoot. Removal: a quick,
satisfying exit (shrink, pop) rather than a plain fade — the exit is part of the personality.
Transfer: energetic, sometimes exaggerated shared-element motion. Progress: playful but still
honest — a progress bar that lies about speed to "feel snappier" is a state-design failure wearing
a motion costume. Celebration: this is the language's home turf — bursts, confetti-class moments are
justified here in a way they aren't elsewhere, but should still be reserved for genuine
achievements, not routine saves. Attention: bounce or wiggle draws the eye fast; reserve for truly
optional, low-stakes prompts.

**AI-default failure mode.** Applying the bounce to controls that need to feel reliable (a "Save"
button that bounces every time trains the user that saving is playful, not dependable) and to
destructive confirmations. The playful character belongs on delight moments and non-critical
navigation, not on every interactive element uniformly.

**Precedent:** Kahoot (KH3) serves as a counterexample — a brand whose actual product is built
entirely around playful, high-energy motion, whose marketing homepage nonetheless uses plain
`border-color 0.2s, filter 0.2s` hover transitions on its nav links and buttons, with no transform,
overshoot, or spring on any measured element. **Adapt:** even a maximally playful brand
keeps its everyday navigation chrome in the same plain, fast register every other product uses; the
language's actual bounce and overshoot are reserved for the product's real playful moments (the live
game, a correct answer, a celebration), not spent on marketing nav hover states.

**Reduced motion.** Replace overshoot and bounce with a plain scale or color change; keep
celebration as a static rich state (confetti as a still image or brief non-jarring flash) rather
than removing acknowledgment of success entirely.

### Physical / tactile

**Character.** Motion that behaves like the interface has mass and friction: it follows the user's
finger, has momentum, and settles the way physical objects settle.

**Product contexts.** Mobile-first products built around direct manipulation (reordering,
dismissing, dragging), creative tools (canvas, timeline, layer manipulation), any interface where
gesture *is* the interaction rather than a shortcut for a button.

**Unsuitable contexts.** Keyboard-and-mouse-first desktop tools, where there is no gesture to
follow and simulating physicality just adds latency between input and result. Also unsuitable for
any action that should feel instant and certain (a toggle that "settles" with a rubber-band effect
reads as less reliable than one that flips immediately).

**How it treats core events.** Arrival: usually gesture-triggered (a pulled sheet, a dragged card)
rather than programmatic, so "arrival" is the release point of a gesture, not an independent
animation. Removal: swipe-to-dismiss with rubber-banding at the threshold. Transfer: drag with a
followed cursor/finger and a physically plausible drop. Progress: pull-to-refresh style physical
metaphors, used sparingly. Celebration and attention: usually expressed through haptics (on
platforms that support it) paired with a light visual response, not big animated sequences — the
physicality is in the interaction, not in decoration layered on top.

**AI-default failure mode.** Adding rubber-banding and momentum to things the user never actually
drags or gestures — a "physical" bounce on a page transition that was triggered by a tap, not a
swipe, borrows the vocabulary without the gesture that earns it.

**Reduced motion.** Keep momentum-following during an active gesture (it's providing real-time
feedback, not decoration) but remove residual rubber-band overshoot and settling animations once the
gesture ends; snap to the final state instead.

### Cinematic

**Character.** Motion built for moments the user watches rather than operates: reveals, cuts,
cross-fades at a slower pace than any task-oriented language would use.

**Product contexts.** Media and entertainment products, product launches and marketing moments
inside an app, game menus and loading sequences, a first-run brand moment.

**Unsuitable contexts.** Anything the user does repeatedly. A cinematic transition is a one-time
cost the first time and a tax every time after — it must be skippable, and for genuinely frequent
navigation it should not be used at all regardless of skippability, because "hold to skip" itself
costs time at scale.

**How it treats core events.** Arrival: slow reveal, often combined with a cross-fade or a staged
sequence (background, then subject, then text). Removal: cross-fade or cut, not an instant pop.
Transfer: can be extended and expressive when it's a genuine narrative beat (a purchase confirmation
that shows the product "arriving" in a visual sense) — this is one of the few contexts where a
transfer animation earns real length. Progress: cinematic products can afford atmospheric loading
sequences, but they still need an honest progress signal underneath, not just mood. Celebration:
this language can carry a large celebration moment (a launch sequence, a "you unlocked this" reveal)
better than any other, because the audience expects to be watching, not working.

**AI-default failure mode.** Putting a cinematic entrance on a screen the user reaches many times a
session (a dashboard, a list) because it "looks impressive" in a first demo — the demo is watched
once; the product is used hundreds of times. Always ask how many times per session this transition
plays before choosing this language for anything beyond a true one-time or rare moment.

**Reduced motion.** Cut straight to the end state, or use a single cross-fade; cinematic language
has the largest gap between its full and reduced form of any language here, so define the reduced
path explicitly rather than just shortening durations.

### Diagrammatic

**Character.** Motion that builds understanding step by step, paced by the user rather than by a
timer — each step waits for acknowledgment or a deliberate "next," the way a good explanation does.

**Product contexts.** Educational products explaining a process, technical documentation showing
how a system works, infrastructure and architecture tools illustrating data flow, onboarding that
teaches a genuinely non-obvious mechanic.

**Unsuitable contexts.** Anything the audience already understands — a step-through animation
explaining a button they already know how to use is condescension dressed as care. Also unsuitable
as decoration: if the sequence doesn't correspond to a real explanatory need, it's a diagram-shaped
performance, not a diagram.

**How it treats core events.** Arrival: elements appear in an order that mirrors the logic being
taught (cause before effect), not in visual reading order for its own sake. Removal: rarely used
mid-explanation; when a step is superseded, it should visibly transform into the next step rather
than disappear and reappear. Transfer: this is the language's strongest use — showing data or
control moving between parts of a system it is explaining. Progress: a literal step indicator (1 of
4) rather than an abstract bar. Celebration and attention: minimal; the payoff of this language is
comprehension, not delight.

**AI-default failure mode.** Auto-advancing steps on a timer instead of waiting for the user, which
defeats the entire purpose (a diagram the viewer can't pace themselves through is just a slow
video). The defining property of this language is user-paced advancement; a version without that
control isn't really diagrammatic, it's cinematic wearing a diagram's clothes.

**Reduced motion.** Replace step transitions with instant reveals plus a persistent outline of
where the viewer is in the sequence (a highlighted step number); the pacing (user-controlled
advancement) should survive even when the transition itself is instant.

### Stepped / mechanical

**Character.** Motion with no easing: discrete, frame-like jumps that read as mechanical or
constructed rather than organic.

**Product contexts.** Retro and pixel-art aesthetics, industrial or field-tool products where a
"real machine" character is the point, deliberately raw or brutalist products where smoothness
would undercut the honesty the direction is going for.

**Unsuitable contexts.** Any product whose users expect contemporary polish — stepped motion applied
by accident (missing easing, not a deliberate choice) reads as a bug, not a style. The difference
between "deliberately mechanical" and "broken" is entirely in whether every other design decision
supports the read.

**How it treats core events.** Arrival and removal: instant or single-frame jumps, no fade. Transfer:
discrete position jumps rather than continuous travel, sometimes with an audible or visual "tick" per
step. Progress: stepped indicators (a row of discrete segments filling one at a time) rather than a
continuous bar. Celebration: a single decisive state change (a stamp, a flag) rather than a
flourish. Attention: a hard blink or color snap, no easing.

**AI-default failure mode.** Using this as an accidental default (missing transition CSS) rather
than a deliberate choice, then keeping it because "it's fine" rather than because it fits the
product's identity — check whether every other surface in the product supports a mechanical read
before treating an absence of easing as this language rather than an oversight.

**Reduced motion.** This language is already close to a reduced-motion baseline; little further
change is usually needed beyond removing any residual flicker on rapid state changes.

## Combining two languages

A product can justify a second, bounded language for a distinct context — a cinematic
first-run sequence inside an otherwise precise tool, or a snappy celebration layer inside an
otherwise calm wellness app for the specific moment of a real achievement. This is justified when:

- The second language is confined to a clearly bounded moment (onboarding, a specific
  celebration), not scattered across ordinary navigation.
- The two languages don't contradict the product's trust register (a snappy celebration inside a
  banking app for "goal reached" can work; a snappy celebration for "payment sent" undercuts the
  seriousness money moving deserves, regardless of context).
- Returning to the primary language after the bounded moment is itself an explicit transition, not
  an inconsistency the user has to reconcile on their own.

More than two languages in one product is rarely a deliberate design decision; it is usually
several screens built independently without a shared motion token set.

## Transition relationships (from platform guidance)

These structural relationships apply within any of the seven languages — the language sets the
character (speed, easing, warmth); the relationship sets the geometry.

| Relationship | Pattern | Use |
|---|---|---|
| Container | Container transform with a persistent element | List item → detail, card → page, search box → search view |
| Hierarchy | Forward/backward horizontal motion | Inbox → thread |
| Peers | Lateral motion | Tabs, carousels |
| Top level | Fade through | Switching main destinations |
| Enter/exit | Scale/fade from origin | Dialogs, menus |
| Loading | Skeletons matching final layout | Content arrival |
