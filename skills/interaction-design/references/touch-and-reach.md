# Touch and Reach

Touch interfaces have larger, less precise pointers and no hover. Phones add reach limits.

## Targets

- Minimum target size: 24×24 CSS px (WCAG 2.2 AA) with spacing; comfortable touch targets are
  closer to 44–48 px. Small visual icons can have larger invisible hit areas.
- Separate opposing actions (Correct/Wrong, Accept/Decline) enough to avoid mis-taps.
- Inline text links in paragraphs are exempt from minimums but should not be the only way to do
  important actions.

## Reach

- On large phones, the top corners are hard to reach one-handed. Put frequent actions within the
  lower and middle area; keep rare actions (settings, destructive) away from the thumb's resting
  path.
- Bottom navigation for top-level destinations is common on mobile; keep it to a few items.

## No hover

- Anything revealed on hover must also be available on tap or visible by default.
- Tooltips that carry essential information need a tap-accessible alternative.

## Gestures

- Gestures (swipe to archive, long press) are shortcuts, not the only path; provide a visible
  alternative.
- Avoid gesture conflicts with system gestures (edge swipes) and scroll.
- Provide feedback during the gesture and undo after.

## Bottom sheets and modals

Bottom sheets are useful for contextual options and short tasks on mobile. They are not a default
container for every interaction. Direct controls on the page are usually faster. See
`references/_shared/bottom-sheet-overuse.md`.

## Keyboard on mobile

- Use the right `inputmode` and `enterkeyhint`.
- Ensure focused fields and the primary action stay visible above the on-screen keyboard.
