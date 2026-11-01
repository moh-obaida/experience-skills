---
name: cross-route-consistency
description: "Use this skill whenever the same thing looks or behaves differently from page to page: the language selector is a different widget on every route, selected tabs use unrelated conventions, buttons conflict, the same validation problem shows three different error treatments, headers or account controls drift, a shared border or spacing defect has been patched separately on many pages, or the product looks like several products. Builds a compact inventory of genuinely shared patterns across routes, classifies each difference as intentional, contextual, accidental drift, duplicate implementation, conflicting contract, or local-override regression, and repairs the authoritative component instead of each page. Preserves legitimate distinctions between public pages, dashboards, editors, and immersive screens."
license: MIT
compatibility: "The route comparison script needs Node.js and Playwright or an installed Chrome; without a browser the inventory is built from source and screenshots and labeled so."
metadata:
  version: "1.1.0"
  collection: experience-skills
---

# Cross-Route Consistency

Find where the same pattern is built or styled differently across routes, decide which differences are earned, and fix the rest at the component or token that owns them. Consistency here means one contract for each shared pattern, not one layout for every page.

## Start here

1. Read `references/_shared/experience-core.md` and `references/_shared/experience-operating-contract.md`.
2. Read `references/_shared/quality-findings.md` (finding record, the one-root-cause rule) and `references/_shared/page-archetypes.md` (which differences between page types are legitimate). List the routes that matter: the primary journey's routes first.

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
- **Personality can come from the environment and causal product behavior.** A standard control
  changes only if the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Working is not finished.** Passing tests, types, or an accessibility scan say nothing about how
  a screen looks or reads. Inspect rendered output for stroke continuity, repeated-component
  consistency, whole-screen composition, wording, and when each element appears. Never remove a
  safeguard, disclosure, or recovery path to look clean.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Route selectively.** Consider the relevant experience skills; activate another only when it
  can resolve a material concern. No change and no handoff are valid outcomes.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
- **A large specification is a bigger evidence base, not a bigger checklist.** Preserve exact
  numbers, exceptions, and locked decisions; keep recommendations, examples, and deferred items
  from becoming requirements; compress for reasoning, re-open the source for precision.
<!-- core-brief:end -->

## Use this when

- "The interface looks different on every page," "the language selector looks like another product here," "the selected tab is styled three ways," "validation errors look different on adjacent pages."
- A defect (border, spacing, focus ring, error style) appears on many routes and was previously patched page by page.
- A redesign touched some routes and left others on the old pattern, or local overrides have crept in.
- A review needs a compact inventory of shared patterns across the product and where they disagree.

## Do not use this when

- One route has a defect and its siblings are fine: use visual-coherence-audit or interface-forensics on that route.
- The whole product's identity is generic or incoherent in direction: use visual-identity.
- The question is whether one screen is well composed: use composition-review.
- The issue is a feature's wording, state timing, or necessity: use microcopy-quality, state-by-state-review, or ui-necessity-audit.

## Mandatory conditional loading

MUST load `references/pattern-inventory.md` before classifying any difference and `references/authoritative-repair.md` before editing. Trace to the owning component, token, or rule before fixing a route; a runnable product MUST be rendered on the compared routes after a change.

## Checkpoints

1. **Before comparing anything:** is the pattern genuinely shared (the same job for the user on every route it appears)? Yes → inventory it. No → it is a different thing; do not force it to match (`references/pattern-inventory.md`).
2. **For each difference found:** is it INTENTIONAL, CONTEXTUAL, DRIFT, DUPLICATE IMPLEMENTATION, CONFLICTING CONTRACT, or OVERRIDE REGRESSION? Name which, with the evidence. A difference you cannot classify stays "unexplained" and is shown to the owner, not "fixed".
3. **Before fixing a difference on a route:** did you find the authoritative component, token, or rule that should own it? Yes → fix there and let routes inherit. No → keep searching; if the pattern has no owner, propose creating one rather than patching twice (`references/authoritative-repair.md`).
4. **When the same defect appears on multiple routes:** is it one finding about the owner? Yes → one finding and one fix, then verify each route. A per-route finding list for a shared cause is rejected.
5. **Before unifying:** would unifying remove a distinction users rely on (a public page versus a dashboard, an editor versus an immersive game screen)? Yes → keep the distinction and unify only the shared parts, such as the language control or the error style.
6. **For localized and direction variants:** does the pattern behave the same in each language and in right-to-left, with the same controls and the same placement logic? A language control that changes widget by locale is a finding.
7. **Before declaring done:** did you rerender the same patterns on at least the primary routes, plus one route that was not edited, and rerun the comparison? A fix that was never compared across routes is not verified.

## Workflow

1. **Scope.** Pick the routes (primary journey first) and patterns that are shared: navigation, header, account and language controls, accessibility controls, buttons, forms and validation, tabs and filters, status indicators, dialogs, cards, error messages.
2. **Inventory.** For each pattern record where it appears, its implementation (component or markup), variants, and its computed look. Run `scripts/compare-routes.mjs route-a route-b ...` for a heuristic inventory and drift list; confirm each item in the render.
3. **Classify.** Apply the six classes. Account for page archetype differences deliberately.
4. **Locate the owner.** Trace each DRIFT, DUPLICATE, CONFLICT, and OVERRIDE finding to the component, token, or stylesheet rule (`references/authoritative-repair.md`).
5. **Repair at the owner.** Consolidate duplicates, delete the local override, or define the missing contract. Preserve legitimate distinctions.
6. **Verify.** Rerun the comparison and recapture the same routes, states, and sizes; check one unedited route for regressions; check localized and RTL variants.

| Need | Load |
|---|---|
| Choosing patterns, the six classes, legitimate distinctions, reading the script output | `references/pattern-inventory.md` |
| Tracing to the owner, consolidation, override removal, contract notes, verification | `references/authoritative-repair.md` |

## Route comparison script

`node scripts/compare-routes.mjs <route> <route> [...] --names a,b --size 1440x900 --json` renders each route once, classifies shared patterns heuristically (header, nav links, language control, selects, text inputs, tabs, selected tabs, buttons by variant, error messages, dialogs), prints each pattern's dominant fingerprint per route, and lists properties that differ. `--rtl` compares mirrored runs too. Exit 0 no drift, 1 drift, 2 usage or environment error. Classification is heuristic; the tool cannot tell an intended distinction from drift, and it cannot find the owning component.

## What it can change and what it must preserve

- Change: shared components, tokens, and global rules; local overrides that restate or contradict them; duplicate implementations of one pattern.
- Preserve: archetype-appropriate differences (public marketing page, dashboard, editor, immersive game), intentional variants with a functional reason, product identity, and behavior that routes legitimately specialize.

## Failure modes

- Forcing every page into one layout.
- Fixing symptoms route by route while the owner stays broken.
- Treating a heuristic drift list as a verdict.
- Comparing only desktop LTR.

## Completion criteria

- A compact inventory of shared patterns across the chosen routes with where each appears.
- Every difference classified with evidence; unexplained ones listed for the owner.
- Systematic problems fixed once at the authoritative component or token, or the missing owner proposed.
- Legitimate distinctions listed as preserved.
- The comparison rerun after the change, with captures of the same routes, states, sizes and directions, or **NOT VERIFIED IN RENDERED OUTPUT** naming the unchecked routes.

## References

- `references/pattern-inventory.md` — shared pattern selection, difference classes, legitimate distinctions, script reading
- `references/authoritative-repair.md` — owner tracing, consolidation, override removal, contract notes, verification
- `references/_shared/page-archetypes.md` — archetypes that justify differences
- `references/_shared/visual-problems.md` — I5 INCONSISTENT and related codes
- `references/_shared/bordline.md` — border defects that are often shared-component defects
- `references/_shared/quality-findings.md` — finding record and ownership
- `scripts/_shared/layout-probe.mjs`, `scripts/_shared/style-probe.mjs` — browser collection and analyzers used by the script
- `references/_shared/experience-core.md`, `references/_shared/experience-operating-contract.md` — collection rules
