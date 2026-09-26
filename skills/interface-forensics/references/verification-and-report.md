# Verification and Report

## Repair loop

Save the before route, viewport, state, scroll position, screenshot or measurements. Group fixes by root cause. After each group, rerender the same conditions and compare. Then stress the likely regression: narrow width for layout, long content for fixed sizing, keyboard for controls, empty/error for conditional content, reduced motion for animation. Do not claim a fix from a code diff alone. If rendering is impossible, state **NOT VERIFIED IN RENDERED OUTPUT** and the exact blocker.

Avoid accumulating overrides, unexplained pixel nudges, default `!important`, absolute positioning as a layout patch, and desktop fixes that break mobile. A changed measurement matters only if the task is clearer or more reliable.

## Finding record

| Field | Record |
|---|---|
| Scope | Route/component, viewport, state, scroll position |
| Severity | P0/P1/P2/P3 and user impact |
| Symptom | Exact element and observable failure |
| Evidence | Rendered observation, measurement, screenshot, source, with evidence level |
| Trace | DOM path, component/source file, winning rule or behavior, root cause; unknown if unconfirmed |
| Repair | Specific change and tradeoff |
| Verify | Same-state comparison and relevant stress sizes/states |
| Status | Observed, measured, inferred, changed, verified, or not verified |

An example table can be concise. P0/P1 findings need full trace attempts; P2/P3 can be grouped where they share a cause. Do not fabricate source lines, computed values, contrast ratios, or user studies.

## Final audit shape

State the surface and user job; inspected states, viewports and methods; P0/P1 findings first; grouped P2/P3 findings next; what works; repair order; and verification gaps. Cover CSS, interactions, responsive behavior, copy, and accessibility only where evidence supports a finding. In REPAIR mode, include changed files and before/after evidence. A short report with ten well-proven findings beats a hundred guesses.
