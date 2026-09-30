# Roadmap

## v1.0 (this release)

Fifteen skills with selective routing, a scope gate, a shared experience context, conditional
reference loading, a rendered final gate, a design-intelligence library (directions, compositions,
Niche Design Atlas, palettes, typography), dated precedent observations, deterministic measurement
scripts, validation, tests, and CI. The stable public interface is defined in
[docs/architecture.md](docs/architecture.md#stability-and-compatibility). See
[CHANGELOG.md](CHANGELOG.md).

## Next (post-1.0 candidates)

These are improvements, not commitments, and none of them requires a breaking change:

- **Fresh behavioral evidence.** Re-run the multi-agent eval harness against the current version;
  the committed runs predate the latest hardening.
- **Item-level precedent depth.** The [coverage report](research/coverage-report.md) lists
  directions, palettes, typography, and motion entries that still need item-specific observations.
- **Screenshot diff tooling** for `responsive-validation` (compare runs between commits).
- **More fixtures** for the browser tests: dense tables, sticky chrome, RTL content.
- **Project profile (`EXPERIENCE.md`).** An optional file in a user's project that tells skills
  about density preferences, motion appetite, brand principles, forbidden patterns, and workflow
  priorities. Skills would read it when present and work without it. Not built; see
  [docs/architecture.md](docs/architecture.md#future-project-profiles).

## Possible future skills

Each would need a real gap that the current skills cannot cover, examples, and tests:

- information-architecture
- content-design (and copy anti-slop)
- accessibility specialist (audit methods beyond the per-skill requirements)
- data-visualization
- mobile-native (iOS and Android conventions)
- commerce
- game-experience
- CLI-experience
- product research (turning user evidence into design input)
- localization and multilingual layout
- design-system memory and export

## Not planned

- A custom installer (the `skills` CLI already does this)
- A hosted service, database, or web dashboard
- Personal taste profiles bundled in the public skills
