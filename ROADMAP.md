# Roadmap

## v0.1 (this release)

Twelve skills, shared source with vendoring, worked examples, measurement and scanning scripts,
validation, tests, and CI. See [CHANGELOG.md](CHANGELOG.md).

## Next (v0.2 candidates)

- **Visual eval harness.** Run skills against fixture products and compare before/after renders
  with human-reviewed rubrics.
- **Screenshot diff tooling** for `responsive-validation` (compare runs between commits).
- **More fixtures** for the browser tests: dense tables, sticky chrome, RTL content.
- **Project profile (`EXPERIENCE.md`).** An optional file in a user's project that tells skills
  about density preferences, motion appetite, brand principles, forbidden patterns, and workflow
  priorities. Skills would read it when present and work without it. Not required, and not built
  yet; see [docs/architecture.md](docs/architecture.md#future-project-profiles).

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
