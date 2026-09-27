# v0.6 Rendered-Validation Report

Generated 2026-09-27. Rendered validation of the Niche Design Atlas after the source-level v0.6
audit — does authored system differentiation survive actual rendering, or do systems collapse
toward a shared generic shell? This is not a re-audit of the 181 source definitions; see
`research/upstream-audit-2026-09.md` and the atlas source (`shared/design-intelligence/niche-*.md`)
for that layer. No atlas source file was modified as part of this run.

## 1. Validation sample (17 systems)

No repo-native renderer exists for the atlas — it's pure text (`niche-atlas-index.md:118` says so
explicitly: *"The 151 authored systems are a candidate library, not 151 proven visual outcomes."*).
All 17 were hand-built as real HTML/CSS/JS from each system's own layer table (composition, exact
color hex, type strategy, motion) — see `renders/*.html` — and actually rendered; nothing here was
judged from source prose.

- **Group A — controlled, same job** (grep/sort/uniq -c lesson, step 2/4, one hint used):
  Practice Console, Worked Example, Tutor Path — the atlas's own cross-file candidate set for this
  exact job (per the `niche-education.md` correction made earlier in the v0.6 pass).
- **Group B — controlled, same job** (case #4471, identical evidence, identical SLA, identical
  decision options): Case Desk (split-pane), Threat Board (master-detail), Object Sheet
  (object-sheet) — three composition fingerprints self-nominated via their own Fit lines for a
  "record + evidence + decide" job.
- **Group C — controlled, same job + same composition + same typography strategy**: Exam Hall,
  Policy Plain, Plain Service — all `stepwise` + `institutional-sans`, rendering the identical
  question ("Do you have any dependants living with you?"). The tightest fingerprint cluster in the
  atlas; isolates color/density/radius/motion/chrome as the only remaining levers.
- **Native lens (8)**, filling gaps the controlled groups don't reach: Ledger Desk / Broadsheet
  (near-identical index fingerprint), Coach Stage / Still Water (same niche, same
  density+composition, opposite everything else), Toybox Table, Pantry List, Vault Ledger,
  Hangout Space.

Per-system product state, rationale, and implementation-ambiguity notes: `manifest.md`.

## 2. Rendering method

Repo's own `playwright-core` devDependency (already used by the eval harness for a different
purpose — repairing generic bad pages, not rendering atlas systems), driven by
`render-and-screenshot.mjs` in this folder. It loads each mockup at 1440×900, screenshots, triggers
the system's own authored interaction where one exists (button click, radio change), waits, and
screenshots again (`screenshots/*.before.png` / `*.after.png`). The built-in browser pane can't
open `file://` URLs, so it wasn't usable for this; this script was the smallest working substitute.
Re-run with `node research/evaluations/v0.6-rendered-validation/render-and-screenshot.mjs` from the
repo root.

Normalization rule applied throughout: hold content/data/state/actions/information volume/effort
constant within each controlled group; let composition, type, color, density, radius, and motion
vary exactly as authored — "normalize the product, not the design."

## 3. Systems that clearly preserve distinct visual identity

- **Group A**: unambiguous. Practice Console is a full-bleed dark terminal with a thin step rail;
  Worked Example is a warm paper page split reading-left/practice-right with a segmented top strip;
  Tutor Path is a centered rounded card with a pill progress bar and conversational dialogue. Three
  different silhouettes, three different information architectures, same lesson.
- **Native dark cluster**: Practice Console (dense terminal), Vault Ledger (financial panel),
  Hangout Space (full-bleed spatial world), Coach Stage (HUD-over-video) — four dark-canvas systems
  that look nothing alike. No dark-mode collapse.
- **Native "stage" cluster**: Coach Stage, Still Water, Toybox Table — same composition + density,
  but black/orange energy vs. pale serif stillness vs. cream/thick-outline party toy. Confirms
  "stage" isn't a visual template.
- **Ledger Desk vs. Broadsheet**: same density/composition/surface/accent on paper, but render as
  an admin data table vs. a newspaper front page — confirms "index" is an abstract structural
  label, not a look.
- **Motion, verified by interaction, not inferred from a still**: Practice Console's causal flash
  fires and relabels the environment line on Run; Toybox Table's staggered bounce-entrance actually
  plays (caught mid-animation in one frame) and the Ready button updates real state; Coach Stage's
  pause control toggles play/pause icon; Vault Ledger's Send opens a real confirmation modal.

## 4. Systems/pairs that collapse or appear too similar

No actual collapse ("same generic dashboard, different labels") occurred anywhere in the sample.
But two groups differentiate more weakly than the others:

- **Group B — Case Desk vs. Threat Board** is the weakest pair in the sample. Both become "list/
  queue rail + a detail pane with ruled facts and actions below" at this content volume. What
  survives: Threat Board's severity color-coding (red/orange chips on queue rows) + condensed
  display type + keyboard-shortcut hint row give it a legible "triage under pressure" character
  Case Desk's plainer institutional rail doesn't have; Case Desk's dedicated 4th column (a
  persistent decision panel with policy-rule text) is real estate Threat Board doesn't allocate.
  The distinction is genuine but rests on secondary layers (color, type weight, pane count) rather
  than a structural break a silhouette test would catch instantly. **Object Sheet stays clearly
  distinct** from both (command-palette bar, no queue rail, object-header identity, three even
  zones) — it's the split-pane/master-detail pair that's closer than it should feel, not the trio.
- **Group C** differentiates more quietly than Group A, as expected given how much was pinned
  constant — the signal comes from container choice (Policy Plain's card vs. Plain Service's
  no-card/heavy-border vs. Exam Hall's navigator-panel chrome) rather than layout geometry. Still
  sortable without labels, but the second-weakest margin in the sample.

## 5. Does the high-key majority show real diversity?

Yes, on this evidence. Every high-key comparison in the sample (Group A, Group C, Ledger
Desk/Broadsheet, Case Desk/Threat Board/Object Sheet) stayed visually distinguishable; the weakest
cases (Group B, Group C) were still sortable, just by quieter means (color-coding, container,
chrome) rather than dramatic geometry. High-key wasn't a source of sameness by itself in this
sample — density, composition-to-content mapping, and chrome choices carried the differentiation
even without darkness as a crutch.

## 6. Source changes made

**None.** No file under `shared/design-intelligence/` was touched. Per this evaluation's own rule,
a source change is only warranted by a *specific* rendered failure, and nothing in this sample
crossed that bar — Group B's weaker margin is a real observation worth watching, not a proven
defect (it passed the silhouette-distinguishability bar, just less emphatically than its siblings).

## 7. Verification results

Not applicable to this run — no atlas source changed. Standard verification (`npm run sync`,
`npm run check`, `git diff --check`) applies only if a future pass acts on the Group B observation
below.

## 8. Remaining uncertainties / tooling limitations

- The built-in browser pane cannot open `file://` URLs; this evidence exists because of a temporary
  playwright script, not a reusable atlas-render tool. If this kind of validation is wanted again,
  budget for building a small permanent renderer rather than re-deriving one per run.
- Two motion claims are **unverified, not confirmed false**: Coach Stage's full "choreographed cue
  transition with countdown" wasn't built (only pause/resume was wired — see `manifest.md`);
  Pantry List's fly-to-basket animation completes in 300ms, faster than the screenshot cadence
  caught mid-flight, so the state change (quantity incremented) was verified but not the visual arc.
- Sample covers 11 of 15 niche groups and 8 of 21 composition values — real but partial coverage of
  the full 151-system library; this was a targeted stress test of collapse risk, not a census.
- No mobile/responsive renders were done in this pass. Systems whose responsive transformation is
  claimed to differ materially (e.g., Reference Manual's three-column desktop → sheet-nav phone)
  are unverified on that specific claim.

## 9. Ready for the external benchmark?

**Yes, with one caveat to carry forward.** The core question — do 181 authored systems collapse
into a handful of UI archetypes? — gets a no from this sample: every comparison, including the two
deliberately hardest ones (Group A and Group C), stayed visually sortable without labels. The one
soft spot (Group B / split-pane vs. master-detail) is worth flagging to whoever runs the external
benchmark — watch whether master-detail and split-pane systems specifically get confused more often
than other pairs — but it doesn't block proceeding, since it's a matter of differentiation
*strength*, not *presence*.
