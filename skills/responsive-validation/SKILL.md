---
name: responsive-validation
description: "Verify, not assume, that an experience works across real conditions: desktop, laptop, tablet, phone, very small phones, short and ultra-wide viewports, landscape, browser zoom and large text, RTL and long translations, touch versus pointer versus keyboard, safe areas, on-screen keyboards, sticky controls, and navigation collapse. Use when layouts change, before shipping a UI, when something 'only looks good at one size', or when a bug report mentions a device, zoom level, or language. Includes a scripted viewport matrix report with overflow, collision, and target-size checks."
license: MIT
compatibility: "The layout-report script needs Node.js 18+ and Playwright (or playwright-core with an installed Chrome). The checklist works without it."
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Responsive Validation

Responsive design is not "there are media queries." It is the claim that the experience holds
up across the sizes, inputs, languages, and settings real people use. This skill tests that claim.

> Rendered truth beats beautiful source code.
> Do not optimize one screenshot while breaking the product.

## Use this when

- A layout change is about to ship.
- Something looks right at the designer's size and nowhere else.
- A bug mentions a device, a zoom level, a language, or "on my laptop."
- A product adds RTL languages or long translations.
- Touch, keyboard, or screen-magnification users report problems.

## Do not use this when

- The layout is broken at every size (composition-repair first).
- Native mobile layout constraints are the question without a runnable build; use the checklist in
  `references/native-and-desktop.md` and mark results unverified.

## Core principles

1. **Test the audience's conditions,** not a fetish list. Start from who uses the product and how.
2. **Width is not the only axis.** Height, zoom, text size, input type, language, and orientation
   break layouts too.
3. **Content stress is part of responsiveness.** Long names and translations break more layouts
   than widths do.
4. **Composition should adapt, not shrink.** Re-rank and restructure at small sizes.
5. **Measure where possible;** look at screenshots; report evidence levels.

## Workflow

### 1. Build the matrix
From the audience, pick sizes and conditions. Load `references/validation-matrix.md` for the
default matrix and how to adapt it. A typical web matrix:

```
1920×1080 · 1440×900 · 1366×768 · 1280×800 · 1024×768 · 768×1024
430×932 · 390×844 · 375×812 · 360×800 · + 200% zoom at 1280×800 · + RTL (if supported)
```

### 2. Run the matrix
If a browser is available:

```bash
node scripts/layout-report.mjs <url-or-file>                       # default matrix
node scripts/layout-report.mjs <url> --sizes 1366x768,390x844 --zoom 1,2
node scripts/layout-report.mjs <url> --rtl --screenshots ./shots   # also capture PNGs
```

The report gives, per size: horizontal overflow, content collisions, small interactive targets,
sticky/fixed chrome share, and first-viewport content coverage. Screenshots are only written
when `--screenshots` is given.

Then *look* at the screenshots or the live page at each size. Scripts miss things eyes catch
(awkward wraps, lost hierarchy, orphaned elements).

Without a browser: inspect CSS for fixed widths, `100vh`, absolute positioning, `overflow: hidden`,
missing `min-width: 0`, and breakpoint gaps; list the checks for the user to run.

### 3. Check conditions beyond width
| Condition | Load |
|---|---|
| Zoom, large text, reflow | `references/zoom-and-text-scaling.md` |
| Touch, pointer, keyboard, hover absence | `references/input-modalities.md` |
| Safe areas, notches, on-screen keyboard | `references/safe-areas-and-keyboard.md` |
| RTL, long translations, scripts | `references/rtl-and-localization.md` |
| Long content, empty content, extremes | `references/content-stress.md` |
| Native apps and desktop windows | `references/native-and-desktop.md` |

### 4. Report
Use `references/reporting.md`: a matrix of sizes × checks with evidence levels, a ranked list of
defects with size, screenshot/measure reference, and suggested fix.

### 5. Repair and re-run (REPAIR mode)
Fix structurally (composition-repair for layout, interaction-design for targets and reach). Re-run
the same matrix and compare.

## Execution rules

- Include at least one short viewport (≤ 800 px tall on desktop; landscape phone) in every matrix.
- Include at least one narrow phone (360 px wide or less where the audience warrants).
- Treat horizontal page scroll as a defect unless the content is inherently wide (and then contain
  it in a scroll region).
- Do not "fix" overflow with `overflow-x: hidden` on body without finding what overflows; it can
  hide content and break sticky positioning.
- Verify focus visibility and order at mobile sizes too.
- Report what was not tested.

## Failure modes

- Testing only at the developer's monitor size and one phone.
- Treating media queries as proof.
- Shrinking desktop layouts instead of re-composing.
- Ignoring height: sticky chrome and `100vh` heroes on short laptops.
- Ignoring zoom and text size.
- Screenshots without measurement, or measurement without looking.

## Completion criteria

- A matrix appropriate to the audience was defined and run (or statically assessed, stated as such).
- No horizontal overflow, collisions, or clipped primary actions at matrix sizes, or defects are
  listed with fixes.
- Zoom (200%) reflow, keyboard focus, and touch targets were checked.
- RTL and long-text stress were checked if the product supports them.
- A report with evidence levels and untested conditions was delivered.

## References

- `references/validation-matrix.md` — choosing and running the matrix
- `references/zoom-and-text-scaling.md`
- `references/input-modalities.md`
- `references/safe-areas-and-keyboard.md`
- `references/rtl-and-localization.md`
- `references/content-stress.md`
- `references/native-and-desktop.md`
- `references/reporting.md` — report format
- `references/_shared/` — shared taxonomy and examples (`bottom-sheet-overuse.md`)
