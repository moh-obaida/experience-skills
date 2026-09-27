---
name: responsive-validation
description: "Use this skill whenever a user-facing workflow must survive a change in screen size, zoom, input mode, language, or device; before shipping a changed interface; or when mobile screenshots look fine but the task fails. Exercise the core instrument repeatedly at narrow and short sizes, including keyboard and focus, secondary panels, return, errors, and completion. Inspect content stress and real RTL behavior where supported."
license: MIT
compatibility: "The layout-report script needs Node.js 18+ and Playwright (or playwright-core with an installed Chrome). The checklist works without it."
metadata:
  version: "0.6.1"
  collection: experience-skills
---

# Responsive Validation

Responsive design is not "there are media queries." It is the claim that the experience holds up
across the sizes, inputs, languages, and settings real people use. This skill tests that claim.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/experience-operating-contract.md`; if the project can run, rendering
   is required for meaningful responsive work, not an optional suggestion.
3. Decide the audience's real conditions before choosing sizes (`references/validation-matrix.md`).

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

- A layout change is about to ship.
- Something looks right at one size and nowhere else.
- A bug mentions a device, zoom level, language, or "on my laptop."
- The product adds RTL languages or long translations.
- Touch, keyboard, or magnification users report problems.

## Do not use this when

- The layout is broken at every size → composition-repair first.
- Only a native build question without a runnable build → use `references/mobile-and-native.md`
  as a checklist and mark results unverified.

## Mandatory conditional loading

If a meaningful layout change can run, MUST load `references/validation-matrix.md`, `references/_shared/controls-and-inputs.md`, and `references/_shared/context-adaptation.md` and execute the matrix. If content, locale, or RTL can vary, MUST load `references/rtl-and-content-stress.md` and run `scripts/stress-content.mjs`. A source-only result MUST say **NOT VERIFIED IN RENDERED OUTPUT**.

## Checkpoints

1. **Before running anything:** does the matrix include at least one narrow phone (≤ 360 px wide
   where the audience warrants), one short viewport (≤ 800 px tall, or landscape phone), and 200%
   zoom? No → add them.
2. **For any claim that it "works on mobile":** was it rendered at that size (E1/E2)? No → it is
   unverified; say so.
3. **For horizontal overflow:** do not fix it with `overflow-x: hidden` on the page. Find the culprit
   (the report names it) and contain or reflow it.
4. **For touch audiences:** anything hover-only, or interactive targets under 24 px, is a defect;
   touch sheets and modals must not replace direct controls (anchor
   `references/_shared/bottom-sheet-overuse.md`).
5. **If the product supports RTL or translations:** were they checked with real or pseudo-localized
   content? No → list as not tested.
6. **Before reporting:** did you look at each size, not only read numbers? Scripts miss awkward wraps,
   lost hierarchy, and focus order.
7. **Before trusting any layout with ideal content, run `scripts/stress-content.mjs`** (long text, unbroken strings, RTL) at the narrowest and primary sizes; report only failures the stress introduced.

8. **Workflow continuity:** on a narrow/short screen, repeatedly use the core instrument, open a secondary surface, return, recover focus, and continue with the on-screen keyboard visible. Check that the instrument remains usable and that conditional controls are still reachable. Preserve true RTL UI while commands, paths, code, and numeric syntax stay LTR where appropriate. A screenshot alone does not verify this.

## Workflow

1. **Build the matrix** from the audience (`references/validation-matrix.md`). Typical web matrix:
   ```
   1920×1080 · 1440×900 · 1366×768 · 1280×800 · 1024×768 · 768×1024
   430×932 · 390×844 · 375×812 · 360×800 · 200% zoom at 1280×800 · RTL (if supported)
   ```
2. **Run it** when a browser is available:
   ```bash
   node scripts/layout-report.mjs <url-or-file>
   node scripts/layout-report.mjs <url> --sizes 1366x768,390x844 --zoom 1,2
   node scripts/layout-report.mjs <url> --rtl --screenshots ./shots
   ```
   Per run it reports overflow (with culprits), collisions, small targets, sticky chrome share, and
   first-viewport coverage. It writes screenshots only with `--screenshots`. Without a browser,
   inspect CSS for fixed widths, `100vh`, absolute positioning, `overflow: hidden`, missing
   `min-width: 0`, breakpoint gaps; list checks for the user.
3. **Check conditions beyond width:**

   | Condition | Load |
   |---|---|
   | Zoom, text size, reflow; touch vs pointer vs keyboard | `references/zoom-and-input.md` |
   | Safe areas, on-screen keyboard, native apps, desktop windows, terminals | `references/mobile-and-native.md` |
   | RTL, translations, long and missing content | `references/rtl-and-content-stress.md` |

4. **Report** with `references/reporting.md`: matrix summary, ranked defects with codes from
   `references/_shared/visual-problems.md`, evidence levels, untested conditions.
5. **Repair and re-run** the same matrix (composition-repair for layout, interaction-design for
   targets and reach).

## Execution rules

- Re-compose at small sizes; do not just shrink.
- Verify focus order at each layout; CSS reordering can scramble it.
- Report what was not tested.

## Precedent and composition

| When | Load |
|---|---|
| Mobile navigation, reach, and first-screen budget | `references/_shared/mobile-navigation.md` |
| How compositions should transform on phones and tablets | `references/_shared/compositions-mobile.md` |

## Failure modes

- Testing only the developer's monitor and one phone; media queries as proof; ignoring height,
  zoom, and text size; screenshots without measurement or measurement without looking.

## Completion criteria

- An audience-appropriate matrix was defined and run (or statically assessed, stated as such).
- No overflow, collisions, or clipped primary actions at matrix sizes, or defects are listed with fixes.
- Zoom reflow, keyboard focus, and touch targets were checked.
- RTL and long-text stress were checked if supported.
- The report states evidence levels and untested conditions.
- If the project could run, the matrix includes rendered evidence; otherwise the report says NOT
  VERIFIED IN RENDERED OUTPUT and names the environment blocker.

## References

- `references/validation-matrix.md` — choosing and running the matrix
- `references/zoom-and-input.md` — zoom, text scaling, input modalities
- `references/mobile-and-native.md` — safe areas, keyboards, native apps, desktop, CLI output
- `references/rtl-and-content-stress.md` — RTL, localization, content stress
- `references/reporting.md` — report format
- `scripts/stress-content.mjs` — content stress injection before/after comparison
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `visual-problems.md`,
  `bottom-sheet-overuse.md`, `mobile-navigation.md`, `compositions-mobile.md`
