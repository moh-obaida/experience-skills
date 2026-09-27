# v0.6 rendered validation — evidence folder

Rendered-output validation of the Niche Design Atlas, done after the v0.6 source-level audit to
check whether authored system differences survive actual rendering. See `REPORT.md` for the full
write-up and conclusions.

- `REPORT.md` — the report.
- `manifest.md` — the 17-system sample: which controlled group or native slot each belongs to,
  the product state held constant, and any implementation ambiguity taken while building it.
- `renders/*.html` — the 17 mockups, hand-built from each system's own layer table (composition,
  exact color hex, type strategy, motion). Self-contained; open any one directly in a browser.
- `render-and-screenshot.mjs` — the playwright-core harness that renders each file, screenshots it,
  triggers its authored interaction, and screenshots again. Re-run from the repo root:
  `node research/evaluations/v0.6-rendered-validation/render-and-screenshot.mjs`
- `screenshots/*.before.png` / `*.after.png` — the evidence itself, at 1440×900.

This is a point-in-time evaluation artifact, not source the rest of the repo depends on. No file
under `shared/design-intelligence/` was changed as part of this run.
