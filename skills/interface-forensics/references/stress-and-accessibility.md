# Stress and Accessibility

## Choose meaningful states and sizes

Start with the reported viewport. Add an ordinary laptop, short laptop, tablet, mobile, and narrow mobile when the surface supports them. Test breakpoint boundaries rather than only standard device presets. Recheck the full scroll and interaction path at each size. Zoom toward 200% where practical; inspect clipping, lost controls, horizontal scroll, and fixed chrome. If RTL is supported, test direction, chevrons, progress, mixed numbers and text, and input behavior rather than assuming a single `direction` flip is enough.

Stress content: zero, one, and many items; long names/headings/descriptions/buttons; large numbers; localization expansion; loading, error, offline, permission denied, success, partial or stale data when relevant. Distinguish a state that cannot be reached from one that was tested and passed.

## Accessibility in the rendered page

Navigate the main path using keyboard only. Check tab order, visible and unclipped focus, Enter/Space activation, Escape behavior, modal focus and return, and menus. Inspect headings, landmarks, labels, names, IDs, button/anchor semantics, form errors, color-only meaning, and contrast in actual states. Test touch targets by their hitbox and separation. For motion, check reduced-motion behavior and interruptibility.

Automated scanners can find candidates; they do not prove every issue or certify the page. Attribute findings to an observed element and relevant state. Do not claim a contrast failure from an unmeasured screenshot color or a keyboard failure without trying the path, unless clearly labeled as a source-only risk.

## Decide what to test next

If a fixed height causes dead space in empty state, test long content before reducing it. If a mobile menu overlays content, inspect keyboard and focus before changing z-index. If a control vanishes at a breakpoint, test zoom and long labels. If a state has no data fixture, report the missing state and give the exact test to run.
