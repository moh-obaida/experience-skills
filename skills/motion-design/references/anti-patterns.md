# Motion Anti-Patterns

## Quick list

- **Fade-up on scroll for every section.** Content that should simply be present makes the
- **Staggered card entrances** on operational pages visited many times a day.
- **Scale-on-hover for every card.** Cards grow slightly for no reason; the page jitters.
- **Infinite floating blobs** behind content, draining battery and attention.
- **Bouncy springs on serious actions** (payments, deletions, medical data).
- **Page transitions that delay navigation** by 400+ ms.
- **Parallax** on utility pages.
- **Confetti** for trivial completions ("Profile updated!").
- **Skeleton shimmer** that runs longer than the content takes to load, or appears for
- **Loading spinners with personality** that disguise lack of real progress information.
- **Typing animations** on static headlines.
- **Motion without reduced-motion support.**

The fix is not "remove all motion": find the real events, give them meaningful motion, and let
everything else be still. Recognizing the common forms in practice:

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
