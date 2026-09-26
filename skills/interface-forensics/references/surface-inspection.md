# Surface Inspection

## Sweep the full surface

Move top to bottom: global shell, navigation, page header, main task, secondary regions, forms, lists/tables/cards, empty or loading regions, footer, fixed elements, drawers, popovers, and modals. Record each region's purpose and first meaningful action. Scroll until the end; check false endings, dead bands, sticky occlusion, nested scrolling, and restoration after navigation.

At each region ask: what information or action earns its area? How does its prominence compare with the user's task? Do not equate sparse with broken or dense with bad. A large blank panel with a fixed minimum height and two lines of content is a stronger finding than a general complaint about whitespace.

## Visual and micro-UX sweep

- Hierarchy: identify the focal element, competing emphasis, first useful content position, grouping signals, and information value relative to area.
- Typography: actual font/fallback, weight, size, line-height, letter spacing, measure, wrapping, truncation, numeric alignment, and long labels. Check synthetic bold and late font swaps when visible.
- Color and surfaces: semantic roles, actual contrast, selected/disabled/destructive states, border and shadow stacking, nested cards, radius consistency, elevation with a purpose.
- Icons and images: clear meaning, consistent family/stroke, crop, aspect ratio, responsive source, alt/decorative status, size and density.
- Motion: what event it explains, duration, interruption, reduced-motion result, and whether it shifts layout or delays use.

## Annoyance catalog: test, do not assume

Try the action and record whether the problem occurs:

- Focus jumps or clips; dropdown closes unexpectedly; hover flickers; a target moves under the pointer.
- Page jumps to top; back navigation loses work; scroll position is lost; a fixed bar hides content or mobile fields.
- Input formatting fights typing; validation clears data; disabled controls give no reason; success feedback hides the result.
- Tiny close/icon targets; neighboring targets are easily confused; fake disabled styling; click-looking copy that cannot be activated.
- Tooltip obscures content; banner cannot be dismissed; modal adds unnecessary detour; repeated skeleton or spinner delays a ready action.
- `overflow: hidden` clips focus, shadows, or menus; fixed heights produce dead space; text ellipsis hides the only distinguishing word.
- Mixed icon libraries, almost-matching spacing, duplicate actions, decorative metrics, or empty wrappers compete with real content.

Do not dump the catalog into the report. Include only reproduced issues, the affected state, and their impact. Inspect every meaningful control, but do not manufacture a finding for each.
