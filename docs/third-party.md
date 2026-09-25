# Third-Party Material

Experience Skills is MIT-licensed. It adapts ideas and some data from two MIT-licensed projects. This
page explains what was used and how; `THIRD_PARTY_NOTICES.md` carries the license texts and
`third-party/provenance.json` records the exact upstream commits.

## Hallmark (Nutlope/hallmark, commit 13ac0ec, MIT)

**Inspired, then rewritten:**
- Choosing a named page shape from an index and loading only that description. Experience Skills
  applies the same "index → select → load one" pattern to compositions and directions.
- Page-shape concepts such as long document, stat-led, workbench, split narrative, sticky feature
  stack, map/diagram, index-first, catalog, ecosystem index, and component playground. They were
  rewritten as compositions with content requirements, states, responsive and RTL behavior, failure
  conditions, and precedent. Hallmark's page shapes focus on landing pages; the composition library
  also covers product surfaces (workspaces, dashboards, flows, mobile).
- Structural variety between outputs and offering choices from different categories.
- The "study" idea: extract a reference's design DNA instead of copying it.
- A self-critique pass before presenting.

**Not used:** themes, component recipes, macrostructure text, slop-test wording, screenshots, site
examples, and code.

## UI UX Pro Max (nextlevelbuilder/ui-ux-pro-max-skill, commit dcc40ff, MIT)

**Adapted:**
- Chart selection by data type with "not when" conditions (`data-visualization.md`), condensed and
  rewritten.
- A subset of font pairings, reorganized by character and role instead of industry (`typography.md`).
- The style catalog served as a coverage check; several catalog styles were reclassified as surface
  treatments rather than directions (`surfaces-and-shape.md`).

**Deliberately not used:** product-type-to-palette and product-type-to-style mappings (they encode the
"industry selects the style" behavior this project avoids), UX guideline rows, code, templates, and
scripts. A nested Apache-2.0 license covers the upstream `ui-styling` folders; nothing from them was
used.

## License handling

- MIT requires the copyright and permission notice to accompany substantial portions. The notice is
  in `THIRD_PARTY_NOTICES.md` and is vendored as `references/_shared/third-party-notices.md` into every
  installed skill that contains adapted material. `npm run check:shared` fails if a skill ships adapted
  material without the notice.
- Nested licenses were inspected; the root license was not assumed to cover everything.
- Contributions that copy third-party material must add a provenance entry (source, commit, license,
  material, modification, notice requirement).
