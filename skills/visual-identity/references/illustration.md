# Illustration

Illustration can explain, establish a world, and give a product a character. It can also be
expensive filler.

## Jobs illustration can do

- **Explain:** show a concept, a process, how something works.
- **Establish a world:** set the scene on marketing pages, onboarding, and focused surfaces.
- **Carry character:** mascots and characters with personality (use consistently).
- **Soften moments:** errors, empty states, and waiting, proportionately.
- **Celebrate:** results and achievements.

## Style consistency

Define and hold:

- Line (none, thin, bold, hand-drawn)
- Fill (flat, gradient-as-light, textured)
- Palette (from color roles, not arbitrary)
- Perspective (flat, isometric, 3D)
- Figure style (abstract, realistic, stylized proportions)
- Level of detail (by display size)

Mixed stock illustration styles destroy identity faster than no illustration.

## Proportion

- In empty states, illustration should not push the action below the fold. Often a small
  spot illustration or a motif fragment is enough.
- On focused pages, illustration belongs in the environment, not competing with the task.
- On marketing surfaces, illustration can be large when it explains or establishes the world.

## Characters

A product character (mascot) is a strong carrier if:

- It has a defined personality consistent with the voice.
- It appears in meaningful moments, not everywhere.
- It has expressions or poses for key states (success, error, waiting, empty).
- It is appropriate for the audience (a cartoon mascot in a bank's error screen may not be).

## Anti-patterns

- Generic 3D blobs, abstract spheres, and floating shapes with no reference to the product
- Illustrations of people at laptops giving thumbs up
- Large illustrations filling space where a real state should be
- Illustrations with text baked into images (not translatable or accessible)

## Accessibility and performance

- Decorative illustrations: empty `alt` / `aria-hidden`.
- Explanatory illustrations: meaningful alternative text.
- Prefer SVG; optimize; lazy-load below the fold; set dimensions to avoid layout shift.
