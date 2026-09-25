# Device and Viewport Edges

Load when a composition must hold beyond a standard laptop: phones in both orientations, tablets,
huge displays, zoom, on-screen keyboards, safe areas, and fold assumptions.

## The fold is a range, not a line

There is no single fold. Decide what must be visible at the **shortest supported height** (for
example 1366×768 laptops with browser chrome; landscape phones at ~350 px) and design the first
viewport for that. Content below is fine if the first viewport says what this is and what to do.

## Mobile composition

- Re-rank rather than shrink: P0 and P1 first, secondary behind a tap.
- One column; the primary action within thumb reach (bottom half) for frequent tasks.
- Horizontal rows can carry secondary collections (Airbnb ABm3) but must show that more exists.
- Safe areas: pad fixed bars with `env(safe-area-inset-*)`.

## Landscape phones

- Height is the constraint (often under 400 px). Unstick sticky headers; reduce hero heights; keep the
  action visible.

## Keyboard-open layouts

- The focused field and the primary action must stay visible above the on-screen keyboard.
- Full-height layouts should use dynamic viewport units (`dvh`) and be tested with the keyboard open.
- Bottom-fixed bars either ride above the keyboard deliberately or hide while typing.

## Tablets

- Portrait tablets often want the mobile structure with more generous type; landscape tablets can use
  split views (list and detail).
- Touch targets stay large even when the layout looks desktop-like.

## Huge displays

- Constrain reading measure; use the extra width for real context (side panels, larger grids, detail
  panes), not for stretched rows or empty gutters.
- Very large type and imagery need maximum sizes.

## Zoom and large text

- At 200% zoom a 1280 px window becomes a 640 px layout: the mobile composition must work there.
- At 400% (320 CSS px) content must reflow to one column without two-dimensional scrolling.

## Dynamic and growing content

- Containers grow with content; avoid fixed heights on text containers.
- Reserve space for late content (images, ads) or collapse it when empty (GU2, BL2 show unfilled ad
  slots as dead space).
- Test with long titles, long translations, and many items (see `references/content-stress-and-rtl.md`).

## RTL

Mirror the composition's start side; keep media controls, numbers, and logos unmirrored.
