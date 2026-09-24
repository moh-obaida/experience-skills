<!-- GENERATED FROM shared/anti-patterns/motion-cliches.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Motion Clichés

- **Fade-up on scroll for every section.** Content that should simply be present makes the
  user wait.
- **Staggered card entrances** on operational pages visited many times a day.
- **Scale-on-hover for every card.** Cards grow slightly for no reason; the page jitters.
- **Infinite floating blobs** behind content, draining battery and attention.
- **Bouncy springs on serious actions** (payments, deletions, medical data).
- **Page transitions that delay navigation** by 400+ ms.
- **Parallax** on utility pages.
- **Confetti** for trivial completions ("Profile updated!").
- **Skeleton shimmer** that runs longer than the content takes to load, or appears for
  content that loads in 100 ms.
- **Loading spinners with personality** that disguise lack of real progress information.
- **Typing animations** on static headlines.
- **Motion without reduced-motion support.**

The fix is not "remove all motion." It is: find the real events, give them meaningful motion,
and let everything else be still.
