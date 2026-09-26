# Forensic Process

## Establish the case

Record the route or component, viewport, scroll position, data and auth state, theme, locale, and input method. State the user's main job and secondary jobs. An unusual treatment is a defect only when it harms one of those jobs or a stated constraint. Keep the investigation within this surface and implementation directly affecting it: shell, shared components, tokens, providers, assets, localization, and relevant configuration.

## Evidence loop

1. **See:** run the page and examine the entire scrollable surface before reading styling source. Capture before screenshots or a reproducible browser state when useful.
2. **Measure:** record element boxes, relationships, computed values, or task steps. State exact viewport and state. A screenshot supports appearance, not the claim that a particular CSS rule caused it.
3. **Trace:** inspect DOM/component, source file, selector or utility, media/container query, cascade winner, and state logic. Confirm a suspected declaration actually applies.
4. **Explain:** say what happens to the user and why. A difference from another page is evidence only if consistency serves the task.
5. **Fix:** prefer the smallest root-cause change that serves the page. In audit mode, give the proposed change.
6. **Render, compare, stress, verify:** reproduce the same state and viewport, then test the sizes/states most likely to regress.

## Severity and effort

| Rank | Criterion | Typical example |
|---|---|---|
| P0 broken | Task blocked, essential content lost, inaccessible essential interaction | Checkout button clipped at phone width |
| P1 significant | Confusing workflow, major hierarchy, misleading action, broken state | Duplicate primary CTA competes with actual task |
| P2 quality | Measurable friction or visual inconsistency | Heading gap separates it from its content |
| P3 polish | Small optical issue with limited impact | Icon sits 2px low after all layouts work |

Do not promote a preference to P1. Group multiple symptoms under one root cause. Say when a choice already works and should be kept. If the page is good, report that with the checks performed.

## Evidence status

Use the collection's E1 rendered, E2 measured, E3 source, E4 documented, E5 screenshot, E6 assumed labels. Mark a claim observed, measured, inferred, changed, or verified. A measured gap does not by itself prove a user problem; a source declaration does not by itself prove the rendered outcome.
