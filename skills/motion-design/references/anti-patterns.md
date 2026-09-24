# Motion Anti-Patterns

See `references/_shared/motion-cliches.md` for the shared list. Recognizing them in practice:

## Animation soup
**Looks like:** every section fades up on scroll; every card staggers in; every hover scales.
**Diagnosis:** motion attached to elements, not events.
**Repair:** delete non-event motion; keep content present on load; add motion only to real events.

## The waiting room
**Looks like:** page transitions of 500 ms+; modals that animate for 400 ms before accepting input.
**Repair:** shorten to tokens; make input available immediately.

## Silent change
**Looks like:** leaderboard rows jump; scores change without notice; items disappear.
**Repair:** event motion (hierarchy change, change highlight, removal).

## The generic flourish
**Looks like:** confetti, sparkle bursts, and bouncy springs from a library's defaults.
**Repair:** derive celebration from the product's world; reserve for real achievements.

## Decorative perpetual motion
**Looks like:** floating blobs, rotating gradients, shimmering borders forever.
**Repair:** remove or make ambient motion purposeful, slow, pausable, and reduced-motion-aware.

## Skeleton theatre
**Looks like:** shimmer on content that loads in 100 ms; skeletons unrelated to final layout.
**Repair:** delay loading indicators; match skeleton to layout.

## Scroll-jacking
**Looks like:** custom scroll speed, pinned sections on utility pages.
**Repair:** native scroll; storytelling scroll only on marketing narratives, with reduced-motion fallback.

## Direction chaos
**Looks like:** panels entering from different sides without meaning.
**Repair:** a direction grammar (forward/back, open/close, to/from).
