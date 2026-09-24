# Imagery and Illustration

Load when photography, illustration, or characters carry identity.

Sections: Illustration · Imagery

## Illustration

Illustration can explain, establish a world, and give a product a character. It can also be
expensive filler.

### Jobs illustration can do

- **Explain:** show a concept, a process, how something works.
- **Establish a world:** set the scene on marketing pages, onboarding, and focused surfaces.
- **Carry character:** mascots and characters with personality (use consistently).
- **Soften moments:** errors, empty states, and waiting, proportionately.
- **Celebrate:** results and achievements.

### Style consistency

Define and hold:

- Line (none, thin, bold, hand-drawn)
- Fill (flat, gradient-as-light, textured)
- Palette (from color roles, not arbitrary)
- Perspective (flat, isometric, 3D)
- Figure style (abstract, realistic, stylized proportions)
- Level of detail (by display size)

Mixed stock illustration styles destroy identity faster than no illustration.

### Proportion

- In empty states, illustration should not push the action below the fold. Often a small
  spot illustration or a motif fragment is enough.
- On focused pages, illustration belongs in the environment, not competing with the task.
- On marketing surfaces, illustration can be large when it explains or establishes the world.

### Characters

A product character (mascot) is a strong carrier if:

- It has a defined personality consistent with the voice.
- It appears in meaningful moments, not everywhere.
- It has expressions or poses for key states (success, error, waiting, empty).
- It is appropriate for the audience (a cartoon mascot in a bank's error screen may not be).

### Anti-patterns

- Generic 3D blobs, abstract spheres, and floating shapes with no reference to the product
- Illustrations of people at laptops giving thumbs up
- Large illustrations filling space where a real state should be
- Illustrations with text baked into images (not translatable or accessible)

### Accessibility and performance

- Decorative illustrations: empty `alt` / `aria-hidden`.
- Explanatory illustrations: meaningful alternative text.
- Prefer SVG; optimize; lazy-load below the fold; set dimensions to avoid layout shift.

## Imagery

Photography and rich imagery are powerful identity and persuasion tools in commerce, travel,
editorial, food, fashion, and real estate. In tools, they are usually secondary.

### Art direction over stock

Define:

- **Subject:** products, people, places, process, detail
- **Light:** natural, studio, dramatic
- **Color treatment:** warm, cool, desaturated, brand-tinted
- **Composition:** tight crops, wide contexts, negative space for text
- **Human presence:** real users, models, hands only, none
- **Authenticity:** real product imagery over generic stock

A consistent art direction is recognizable even without the logo.

### Imagery in layout

- Use imagery at a scale where it does work (full-bleed, large product shots); tiny thumbnails
  rarely carry identity.
- Reserve space with aspect-ratio boxes to prevent layout shift.
- Ensure text over images has a scrim or solid backing for contrast.
- Plan crops for multiple aspect ratios (desktop wide, mobile tall).

### User-generated imagery

When images come from users (avatars, listings, uploads):

- Design for bad images: low resolution, odd aspect ratios, busy content.
- Normalize with consistent frames, crops, and backgrounds.
- Provide good fallbacks for missing images (initials, pattern, category icon).

### Performance

- Modern formats (AVIF/WebP) with fallbacks; responsive `srcset`; lazy loading below the fold.
- Do not block the task on a hero image.
- Budget: heavy imagery on marketing pages is a trade-off; on task pages it rarely pays.

### Rights

Use only images you have rights to. Do not hotlink or embed other companies' imagery.
