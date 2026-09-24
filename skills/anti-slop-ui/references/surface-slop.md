# Surface Slop: Containers, Gradients, Glass, Depth, Noise

Visual treatments applied by default. **None is banned.** A glass panel, a gradient, or a pill can
be excellent. Each section says when the treatment has a job, when it is a default, and how to
decide. See `references/_shared/design-vs-decoration.md` for the general test.

Sections: Cards · Pills · Gradients · Glass and blur · Shadows and depth · Visual noise

## Cards

**Earns its place when:** items are independent, comparable, often actionable objects: products,
projects, games, people, feed items.

**Default when:** paragraphs, settings rows, single numbers, and form sections are boxed; cards
nest inside cards; spacing alone could have grouped them.

**Ask:** Is each card an object a user would scan, compare, or act on individually?

**Repair:** remove containers and group with spacing and headings; use lists or tables for
homogeneous items with several attributes; keep one container level at most; make internals of
real cards consistent (title, meta, action in fixed places). For prose, see
`references/_shared/editorial-not-cards.md`.

## Pills

**Earns its place when:** they are filters (toggleable), tags or tokens (removable), selected values
in a multi-select, or compact status in dense tables with text.

**Default when:** labels, buttons, navigation, eyebrows, and metadata all become pastel capsules
and users cannot tell which are interactive.

**Ask:** Is this a filter, a tag, or a token? If not, what does the capsule shape communicate?

**Repair:** keep pills for filters, tags, tokens; plain text or small caps for metadata; standard
button shapes for buttons.

## Gradients

**Earns its place when:** the gradient expresses light, depth or atmosphere, a deliberate brand
signature used in few places, a continuous data scale, or a scrim for text over images.

**Default when:** the same purple-to-blue appears on hero text, every button, borders, icons, and
"AI" badges; it makes contrast unpredictable and signals "template."

**Ask:** What does this gradient communicate that a flat color would not?

**Repair:** solid colors for buttons and text; at most one gradient role tied to light or brand;
type hierarchy instead of gradient text; check contrast wherever a gradient sits behind text.

## Glass and blur

**Earns its place when:** real, changing content lies beneath and the layer relationship matters:
a toolbar over a scrolling canvas, a sheet over a map or video, a menu over a photo.

**Default when:** frosted panels float over a flat gradient or blobs with nothing behind them.
Contrast fails, large `backdrop-filter` areas cost performance on mobile.

**Ask:** What is behind the glass, and does the user benefit from seeing it?

**Repair:** solid surfaces with clear value contrast; blur only for overlays over real content,
tested for contrast and performance; respect reduced-transparency settings where available.

## Shadows and depth

**Earns its place when:** elevation communicates layer order and interactivity: menus, dialogs,
dragged items, sticky bars.

**Default when:** every card has the same stacked soft shadow; glows and colored shadows match the
gradients; neumorphic extrusions; 3D blobs as decoration.

**Ask:** What floats above what, and does the user need to know?

**Repair:** reserve elevation for floating things; use surface value for static grouping; on dark
themes, lighter surfaces instead of shadows; present product imagery flat unless perspective
explains something.

## Visual noise

**Richness is not noise.** A dense, art-directed page can be calm when hierarchy is clear.

**Default when:** many treatments compete at similar intensity: several accent colors, gradients,
shadows, borders, icons, badges, animations.

**Ask:** Squint: does one thing stand out? How many accent colors and container styles are there?

**Repair:** one focal point; palette reduced to roles; one grouping method per level (space, then
rules, then containers); remove treatments without a job; keep richness that carries meaning.
