<!-- GENERATED FROM shared/precedent/motion-guidelines.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Precedent: Motion Guidance From Platform Owners

Motion is hard to observe in static research, so this module draws mainly on the published
guidance of two platform owners, labeled as documentation. Observed 2026-09-24; IDs refer to
`research/observations/`. Fewer than ten product-level motion observations were possible in this
pass; treat this module as guidance plus a few observed behaviors, not a survey.

---

### Apple Human Interface Guidelines — Motion
`AHM1 AHM2 AHM3 AHM4 AHM5` · https://developer.apple.com/design/human-interface-guidelines/motion · documentation
- **Guidance:** motion must be purposeful ("don't add motion for the sake of adding motion"); never
  the only carrier of important information; feedback follows gestures and expectations; avoid motion
  on frequent interactions; let people cancel motion instead of waiting; system motion adapts to input
  method.
- **Lesson for Experience Skills:** matches the event-driven stance; adds "adapt intensity to input
  method" and "frequency reduces motion."

### Material Design 3 — Transitions
`MDT1 MDT2 MDT3` · https://m3.material.io/styles/motion/transitions/transition-patterns · documentation
- **Guidance:** six named transition patterns (container transform, forward/backward, lateral, top
  level, enter/exit, skeleton loaders); container transform uses a persistent element and creates the
  strongest relationship; platform defaults reduce total motion (fade while sliding, parallax).
- **Lesson:** name the transition by the relationship it expresses (hierarchy, peer, container).

### Gmail — the undo toast
`GM1` · documentation
- **Observed behavior:** "Message sent" with "Undo" appears in the corner for a configurable window.
- **Lesson:** a timed, dismissible confirmation toast is a motion-and-state pattern for reversibility.

### Airbnb — non-blocking announcement
`ABm4` · rendered 375×812
- **Observed behavior:** a floating pill appears over content without blocking it.

### Notion — drag handle
`NO3` · documentation
- **Observed behavior:** the block handle is both a drag affordance and a menu.
- **Lesson:** direct manipulation needs a visible origin for its motion.

---

## Summary rules

1. Motion explains relationships (container, hierarchy, peer) and events; name which.
2. Frequent interactions get little or no custom motion.
3. Motion is always cancelable and never the only signal.
4. Adapt intensity to input method and to reduced-motion settings.
