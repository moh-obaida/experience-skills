# Design Research Notes

Working notes from the research pass for v0.1 (2026-09-24). Findings that shaped decisions, and
facts verified while building. Kept short on purpose; the catalog and prior-art files hold the
structured versions.

## Confirmations of core lessons in live products

- **Environment, not textbox.** Both classroom game join pages observed (Kahoot, Blooket) use a
  single standard code field with one submit action inside a strongly branded environment (saturated
  color field with large geometry; a repeated tilted-square motif). Neither uses segmented digit
  boxes. This directly supports the join-code worked example.
- **Meaningful empty states exist in mature products.** Spotify's signed-out library panel explains
  the empty state in one line and offers one action per case (create a playlist, browse podcasts).
- **Inference over questions.** Airbnb and Nike redirected to a regional site from location instead
  of asking; Airbnb then interrupted with a modal (a tradeoff worth discussing in critical review).
- **Plainness as identity.** GOV.UK's guidance pages are instantly recognizable through type,
  structure, and language, with no decorative treatment. Its cookie banner gives accept and reject
  equal weight, which the privacy guidance in our skills treats as the baseline.
- **Statistics as proof, not filler.** Stripe's statistics band states concrete scale claims tied to
  the product's promise. Contrast with vanity stat cards on sparse dashboards.
- **Motif from mechanic.** Raycast uses the keyboard, its core interaction, as the dominant visual.

## Specification facts relied on

- `name`: ≤ 64 characters; lowercase letters, digits, hyphens; no leading, trailing, or consecutive
  hyphens; must match the directory.
- `description`: ≤ 1024 characters; should state what and when.
- `compatibility`: ≤ 500 characters. `metadata`: string-to-string map. `allowed-tools`: experimental
  (not used here).
- Keep `SKILL.md` under 500 lines; move detail to referenced files; keep references one level deep.

## `skills` CLI facts verified (v1.7.0)

- `npx skills add <source> --list` lists skills without installing. `--json` cannot be combined
  with `--list`.
- A local path works as a source, which the discovery test uses.
- `--skill <name>`, `-g`, `-a <agent>`, `-y`, `--copy` behave as documented. `--all` means all
  skills **and all agents** without prompts.
- Project-scope install for Claude Code lands in `.claude/skills/<name>/`, copying the whole skill
  folder, including `references/_shared/` and `scripts/_shared/`.
- Setting `HOME` to a temporary directory keeps the test from touching global configuration.

## Accessibility facts used in references

- WCAG 2.2 AA target size minimum: 24×24 CSS px (with spacing exceptions; inline links exempt).
- Reflow at 320 CSS px width; text resize to 200%; non-text contrast 3:1; focus not obscured.
- Dragging movements need a single-pointer alternative.
- Single-character keyboard shortcuts must be remappable, disable-able, or focus-scoped.
- Moving content that starts automatically and lasts more than five seconds needs pause/stop/hide.

## Open questions for future versions

- How to evaluate skill quality with real agents at scale (visual eval harness on the roadmap).
- Whether a project-level `EXPERIENCE.md` profile improves results enough to justify the extra concept.
- Portfolio and native-app references need observation with appropriate permission and devices.
