---
name: responsive-validation
description: "Verify, not assume, that an experience works across real conditions: desktop, laptop, tablet, phone, very small phones, short and ultra-wide viewports, landscape, browser zoom and large text, RTL and long translations, touch versus pointer versus keyboard, safe areas, on-screen keyboards, sticky controls, and navigation collapse. Use when layouts change, before shipping a UI, when something 'only looks good at one size', or when a bug report mentions a device, zoom level, or language. Includes a scripted viewport matrix report with overflow, collision, and target-size checks."
license: MIT
compatibility: "The layout-report script needs Node.js 18+ and Playwright (or playwright-core with an installed Chrome). The checklist works without it."
metadata:
  version: "0.1.1"
  collection: experience-skills
---

# Responsive Validation

Responsive design is not "there are media queries." It is the claim that the experience holds up
across the sizes, inputs, languages, and settings real people use. This skill tests that claim.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Decide the audience's real conditions before choosing sizes (`references/validation-matrix.md`).

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

## Failure modes

- Testing only the developer's monitor and one phone; media queries as proof; ignoring height,
  zoom, and text size; screenshots without measurement or measurement without looking.

## Completion criteria

- An audience-appropriate matrix was defined and run (or statically assessed, stated as such).
- No overflow, collisions, or clipped primary actions at matrix sizes, or defects are listed with fixes.
- Zoom reflow, keyboard focus, and touch targets were checked.
- RTL and long-text stress were checked if supported.
- The report states evidence levels and untested conditions.

## References

- `references/validation-matrix.md` — choosing and running the matrix
- `references/zoom-and-input.md` — zoom, text scaling, input modalities
- `references/mobile-and-native.md` — safe areas, keyboards, native apps, desktop, CLI output
- `references/rtl-and-content-stress.md` — RTL, localization, content stress
- `references/reporting.md` — report format
- `references/_shared/` — generated copies: `experience-core.md`, `visual-problems.md`,
  `bottom-sheet-overuse.md`
