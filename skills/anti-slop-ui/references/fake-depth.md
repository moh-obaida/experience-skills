# Fake Depth

## Recognize it
- Multiple stacked shadows on every card
- Inner glows, outer glows, colored shadows matching gradients
- Neumorphic soft extrusions
- 3D-rendered blobs, spheres, and glassy shapes as decoration
- Tilted perspective product screenshots

## Why it is slop
Depth should communicate layer order and interactivity. When everything is lifted equally, nothing
is. Glows and 3D decoration add visual weight without meaning.

## Repair
- Reserve elevation for things that float (menus, dialogs, dragged items, sticky bars).
- Use surface value (slightly different background) rather than shadow for static grouping.
- Present product imagery flat and legible unless perspective explains something.
- On dark themes, express elevation with lighter surfaces.
