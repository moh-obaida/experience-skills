# Layout and Space Slop

Page skeletons and spacing chosen by default. **None of these patterns is wrong in itself.**
Each section says when the pattern earns its place, when it is a default, the question that
decides, and the repair. Judge the justification, never the category.

Sections: Template page skeletons · Centered card · Generous whitespace · Hero · Bento grid

## Template page skeletons

**Looks like:** landing pages as nav → gradient-word headline → two buttons → tilted screenshot →
logo strip → 3 or 6 feature cards → testimonials → pricing (middle "most popular") → FAQ → CTA band.
Apps as sidebar + top bar + four stat cards + line chart + "recent activity". Auth as a centered
card or a split screen with abstract art.

**Earns its place when:** the product genuinely needs each section in that order (a self-serve
product with plans needs pricing; real, recognizable customer logos are proof).

**Default when:** the structure would not change if the product changed; sections exist because
landing pages usually have them.

**Ask:** What must this product explain, prove, or let people do first? Would the page be
structured the same way for a different product?

**Repair:** derive structure from the story (problem → how it works → proof → action) in whatever
form suits the product: a live demo, an interactive example, a long read, a single screen. Cut
sections that do no work. For apps, start from tasks and states, not from the template shell.

## Centered card

**Looks like:** logo, heading, a card with one or two inputs, a button, centered; the rest of a
large viewport flat or softly gradient. Common on sign-in, join, onboarding, 404, empty states.

**Earns its place when:** a designed environment frames the centered task: a stage, a full-bleed
image, a product-derived pattern, strong type at scale (the Kahoot and Blooket join pages are
centered and not slop, because the environment does the work).

**Default when:** centering replaces composition; 70–90% of the viewport has no role; identity
rests on a small logo; the reviewer's only praise is "clean."

**Ask:** What is the environment doing? Could this page belong to any product?

**Repair:** keep the control conventional; invest in the environment; place and scale the task
region deliberately. See `references/_shared/join-code-page.md`.

## Generous whitespace

**Looks like:** 400–600 px of hero padding around one line; narrow columns floating in wide
screens; sections separated by more space than they contain; small light-gray text in the middle
of nothing, justified as "premium."

**Earns its place when:** the space frames something that deserves it (strong type, imagery, a
single consequential decision) and the proportions are precise. Luxury and editorial brands do
this well because every remaining element is exceptional.

**Default when:** the space is what is left over; removing half of it loses nothing; users on
1366×768 laptops scroll through emptiness to find content.

**Ask:** What does each large space frame or separate? Is the type strong enough to hold it?

**Repair:** tighten to a spacing scale with clear steps (internal < external); keep space around
one focal element; strengthen type and imagery where space stays. Measure coverage with the
composition-repair scripts if installed.

## Hero

**Looks like:** "The [adjective] way to [verb] your [noun]", a gradient word, a subhead about
saving time, "Get started free" + "Book a demo", a tilted glowing screenshot, floating shapes,
`100vh` height.

**Earns its place when:** the hero shows what the product actually does, tells the right visitor
they are in the right place within seconds, and is sized to its content.

**Default when:** a competitor could use the headline unchanged; the visual is decoration around
the product rather than the product working.

**Ask:** Does the first viewport show the product doing its job?

**Repair:** a specific claim with concrete nouns and verbs; real product UI or a short demo; one
primary action; the next section visible on common laptop heights.

## Bento grid

**Looks like:** asymmetric tiles of mixed sizes, each with a heading, a line of copy, and an
illustration, used for any feature list.

**Earns its place when:** tile size encodes real importance, each tile shows something real
(actual UI, real data), and the product's visual world suits a modular grid.

**Default when:** sizes are arbitrary, tiles hold decorative art, and on mobile it collapses into a
long stack of similar cards.

**Ask:** Does tile size mean anything? Would a ranked list or narrative sections explain the
features better?

**Repair:** rank features; give the top one or two real depth; list the rest compactly. If a grid
stays, make size encode importance and show real product.
