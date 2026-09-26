---
name: interface-forensics
description: "Use this skill whenever the user asks to audit a specific page, inspect every inch of a screen, find everything wrong with a UI, check its CSS, fix small visual and interaction issues, or explain why one rendered surface feels off. Investigates the actual route and states from rendered symptom through DOM, computed style, CSS cascade, component source, root cause, repair, and rerendered verification. Covers controls, copy, accessibility, responsive behavior, and annoying details without turning a page audit into a product redesign."
license: MIT
compatibility: "Browser inspection recommended; the optional evidence collector needs Node.js and Playwright or an installed Chrome."
metadata:
  version: "0.3.0"
  collection: experience-skills
---

# Interface Forensics

Investigate one requested surface. Follow visible symptoms to their implementation causes, then prove repairs in the rendered page. Depth means accounting for meaningful regions and states, not inventing a quota of defects.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`.
2. Define the route/component/workflow, user job, primary action, current state, constraints, and mode: AUDIT or REPAIR. Read `references/forensic-process.md`.

<!-- core-brief:start · GENERATED FROM shared/philosophy/core-brief.md by npm run sync. Do not edit here. -->
**Core rules in brief.** These apply even before you open `references/_shared/experience-core.md`.
Read that file (the full rules and evidence levels) before a full review, repair, or build.

- **Verdict before adjectives.** Do not write "clean," "modern," "great idea," or "looks good" until
  an observation earns it. The user's enthusiasm is not evidence; test the proposal against the goal.
- **Evidence levels on findings.** E1 rendered, E2 measured, E3 source, E4 documented,
  E5 screenshot, E6 assumed. If files, a browser, or a terminal are available, look or measure before
  claiming. Otherwise, name the checks you did not run.
- **Composition is not alignment.** Empty space needs a stated job, and sparseness is never fixed
  with filler (stats, tips, promos, decoration).
- **Personality belongs in the environment, not in standard controls.** A control changes only if
  the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Hand off when another experience skill fits better.** If part of the problem belongs to one
  (composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty
  states, slop, critical review) and it is installed, invoke it rather than improvising its method.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
<!-- core-brief:end -->

## Use this when

- "Audit this page," "go over every inch," "check the CSS too," "find all the small issues," or "why does this screen feel annoying?"
- A particular route or component needs detailed rendered, DOM, CSS, interaction, content, and state inspection.
- Another experience skill finds a surface defect that needs implementation-level tracing.

## Do not use this when

- The question is whether a proposed design decision is good: use critical-review.
- The whole page's information structure must be redesigned: use composition-repair, then inspect the resulting surface here if needed.
- Only a known mechanical edit is requested and no audit is needed.

## Checkpoints

1. **Before criticizing:** is the surface runnable? Yes → render it before reading CSS, record route, viewport, state, and whole scrollable page. No → inspect supplied evidence/source and label all rendered claims unverified (`references/forensic-process.md`).
2. **For each apparent defect:** can you point to an actual element, state, and user impact? No → test the hypothesis or discard it; do not add a finding for count's sake (`references/surface-inspection.md`).
3. **For each P0/P1 implementation finding:** did you trace symptom → DOM/component → source → winning style or behavior → root cause? No → inspect the cascade and implementation before naming a cause; if inaccessible, mark cause unknown (`references/source-tracing.md`).
4. **For each control:** does it help the user act, understand state, or navigate more clearly than an existing control? No → consider removal or demotion; check task context first (`references/control-and-copy.md`).
5. **Before declaring a repair done:** was the same state rerendered at the original size and a relevant stress size? No → continue verification or say **NOT VERIFIED IN RENDERED OUTPUT**, with the blocker (`references/verification-and-report.md`).
6. **Before adding another finding:** is it distinct and consequential? No → merge it under the root cause or leave it out. Rank blocked tasks above polish.

## Workflow

1. **Understand and bound.** Use `references/forensic-process.md`: user job, page archetype, primary and secondary tasks, current state, constraints. Follow shared components, global CSS, tokens, wrappers, and providers only when they affect this surface.
2. **Observe rendered truth.** Scan every visible region from shell through overlays and footer, including the full scroll. Inspect hover, press, keyboard, focus, pointer, touch, and scroll behavior. Use `references/surface-inspection.md` for the region and annoyance sweep.
3. **Measure and trace.** Record viewport and element boxes, computed values, DOM semantics, and winning rules. Use browser DevTools or `scripts/collect-evidence.mjs` for a selected element; the script gathers facts but cannot determine a winning source rule. Use `references/source-tracing.md` for layout, cascade, typography, color, overflow, stacking, assets, and component causes.
4. **Inspect decisions.** Load `references/control-and-copy.md` for necessity, action rank, hitboxes, icons, copy, and feedback. Load `references/stress-and-accessibility.md` for responsive composition, zoom, long/empty content, state, RTL where supported, keyboard, semantics, motion, and accessibility.
5. **Rank and act.** Use P0 broken, P1 significant, P2 quality, P3 polish. AUDIT: report evidence and recommended changes. REPAIR: fix root causes in coherent groups, rerender between groups, compare before/after, and stress relevant states (`references/verification-and-report.md`).
6. **Hand off narrowly.** If the root issue needs workflow-compression, visual-identity, interaction-design, state-design, motion-design, responsive-validation, anti-slop-ui, or critical-review, use that specialist for its decision. Keep ownership of this surface's source trace and verification.

## Evidence collector

`node scripts/collect-evidence.mjs <url-or-html> --selector '.target' --size 1366x768 --json` collects geometry, computed styles, nearby targets, overflow, and matching CSS rule candidates. Use `--help` for options. It accepts only the target supplied; page resources may still load. Exit codes: 0 collected, 1 selector absent/ambiguous, 2 usage or browser error. Browser pseudo-states, framework source mapping, and actual cascade winner still require DevTools inspection. Existing layout, overflow, and collision tools can supplement it when available.

## Completion criteria

- Surface, user job, route, inspected sizes/states, and uninspected areas are stated.
- Every meaningful region and action was examined; findings have severity, exact location, impact, evidence, and a repair.
- P0/P1 findings attempt source and winning-rule tracing; unknown causes are labeled rather than guessed.
- REPAIR findings have before/after evidence and rendered verification or an explicit blocker.
- The report includes what already works, repair order, and observed/measured/changed/verified status.

## References

- `references/forensic-process.md` — scope, evidence loop, severity
- `references/surface-inspection.md` — full-page sweep and annoyance detection
- `references/source-tracing.md` — DOM, CSS, computed style, component tracing
- `references/control-and-copy.md` — necessity, actions, icons, hitboxes, labels
- `references/stress-and-accessibility.md` — responsive, states, content, keyboard, motion, accessibility
- `references/verification-and-report.md` — repair loop and finding/report format
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection rules
