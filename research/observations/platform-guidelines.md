# Observations: Platform Guidelines

Dated observations of real, public product surfaces made for Experience Skills. Each bullet has a
stable ID that precedent modules cite. Observations describe what was seen; interpretation lives in
the precedent modules (`shared/precedent/`) and the design-intelligence library.

**Method codes:** R = the live page was opened in a browser and looked at (desktop viewport about
800×600 CSS px unless noted; mobile at 375×812); T = page text or documentation read; R+T = both.
Regional versions differ; the region is noted where it affected what was seen. Sites change; treat
every observation as true on its date only. No screenshots are stored in this repository.

## Apple Human Interface Guidelines — Motion (https://developer.apple.com/design/human-interface-guidelines/motion) — Documentation (T via browser), 2026-09-24
- AHM1 "Don't add motion for the sake of adding motion"; excessive animation can distract or cause physical discomfort.
- AHM2 Make motion optional: never the only carrier of important information; supplement with haptics or audio.
- AHM3 Feedback motion should follow gestures and expectations (a view revealed by sliding down should not dismiss sideways); brief and precise beats prominent.
- AHM4 In apps, avoid adding motion to frequent interactions; let people cancel motion instead of waiting for it, especially when repeated.
- AHM5 System components adapt motion to input method (more emphasis for direct touch, subdued for trackpad).

## Material Design 3 — Transitions (https://m3.material.io/styles/motion/transitions/transition-patterns) — Documentation (T via browser), 2026-09-24
- MDT1 Names six transition patterns: container transform, forward and backward, lateral, top level, enter and exit, skeleton loaders; transitions "help users understand how an app works" and are the top motion priority.
- MDT2 Container transform (a card expanding into its detail page) uses a persistent element to connect start and end states and creates the strongest relationship between elements.
- MDT3 Forward/backward uses horizontal motion for hierarchy depth; platform defaults differ (Android fades while sliding; iOS uses parallax), both to reduce total motion.
