# Upstream Curation Audit — 2026-09-25

This is a current-state audit, not a claim that Experience Skills should vendor either upstream
project. Both repositories were inspected from fresh shallow clones on 2026-09-25. The full commit
IDs below are also recorded in `third-party/provenance.json`; adapted material remains rewritten and
MIT-noticed there.

## Hallmark

- Repository: [Nutlope/hallmark](https://github.com/Nutlope/hallmark)
- Audited commit: `13ac0ec7e148655948100b6396439e481361d690`
- Observed current shape: one installable skill, a large central protocol, named themes, macrostructure
  guidance, component-scope branching, audit/redesign/study verbs, pre-emit critique, token locks,
  responsive hard floors, and a consolidated slop test.

| Concept | Decision | Experience Skills treatment | Why |
|---|---|---|---|
| Named macrostructures and selective loading | KEEP / MODIFY | Compositions are indexed by archetype and must be named before restructuring. | Changes page structure and prevents recolored-template output. |
| Structural variety | KEEP / MODIFY | Three-family selection is used as a candidate comparison, not a random rotation. | Variety must serve product context and survive sparse/dense states. |
| Audit / redesign / study verbs | MERGE | REVIEW / REPAIR / BUILD / VERIFY modes plus a design-DNA rule. | One portable mode model works across apps, games, forms, CLIs, and pages. |
| Pre-emit self-critique | KEEP / MODIFY | `critical-review`, anti-slop, and the final gate run after implementation evidence. | A self-review is useful only when it can reject or revise work. |
| Component-scope branch and state checklist | MODIFY | `interaction-design` owns control/state discipline; recipes decide when page-level routing is unnecessary. | Avoids applying a page apparatus to a one-control fix. |
| Theme catalog / rotation | REJECT as a primary architecture | Product-derived direction selection replaces catalog rotation; named families are evidence-backed alternatives. | Rotation can create novelty without fit and conflicts with persistent product identity. |
| Token locks and no redrawn chrome | MERGE selectively | Token and platform-chrome checks remain implementation guidance where a host project uses them. | Useful guardrails, but not universal assumptions for every stack. |
| Hardcoded 320/375/414/768 gate | MODIFY | Responsive validation chooses an audience matrix, including short screens, zoom, RTL, and content stress. | Fixed widths are a floor, not a substitute for product conditions. |

## UI/UX Pro Max

- Repository: [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- Audited commit: `dcc40ff5133ef78276117db0cc34e7b83cc8aeba`
- Observed current data shape: 79 style rows (50 active in the skill description), 192 color rows,
  74 typography rows, 119 UX guideline rows, 25 chart rows, 17 motion rows, 105 icon rows, product
  and interface catalogs, a BM25-style local search engine, deterministic reasoning rules, persisted
  master/page design-system files, and stack-specific guidance across 22 stacks.

| Concept | Decision | Experience Skills treatment | Why |
|---|---|---|---|
| Searchable local data | KEEP / MODIFY | Indexed directions, compositions, palettes, typography, motion, and charts load by decision branch. | Searchability is valuable when the query has one dominant intent and results are checked for fit. |
| Design-system generator and master/page overrides | MODIFY | Direction selection plus product identity and optional repository context; no silent overwrite of an existing system. | Persistence is useful, but a generated system must not outrank established product conventions. |
| Chart selection by data relationship | KEEP / REWRITE | `data-visualization.md` starts from the question and includes when-not-to-use and accessibility conditions. | A chart is a decision aid, not decoration. |
| UX guideline catalog | REJECT as bulk loading / KEEP as targeted evidence | Load only the relevant interaction or accessibility reference for the observed outcome. | 119 rows are not a substitute for a diagnosed problem. |
| Industry-to-style mapping | REJECT | Product archetype and audience set identity budget; directions are compared across families. | Industry presets encourage generic category styling. |
| Broad style catalog | MERGE / CURATE | Similar styles are grouped into directions or surface treatments; the coverage report identifies near-duplicates. | Named styles must change composition or behavior, not only color and radius. |
| Framework and stack guidance | KEEP as optional implementation context | Use only after the product/interaction decision and only for the detected stack. | Implementation details should not decide experience architecture. |
| Dials for variance, motion, density | MODIFY | Density and motion are tied to archetype, frequency, event importance, and performance. | Numeric dials are useful controls only when their tradeoffs are explicit. |
| “Automatic” pre-delivery checks | KEEP / STRENGTHEN | Checks are tied to rendered evidence, state coverage, responsive matrices, and the final gate. | A checklist without an evidence contract is easy to claim without doing. |

## Curated result

Experience Skills now uses the upstream ideas as inputs to a product/workflow operating system:

```text
user symptom → archetype and evidence → smallest specialist graph
→ conditional design intelligence / precedent → implementation
→ rendered truth and real states → critical review and final gate
```

No upstream screenshots, code, theme files, scripts, or copied prose were added. The remaining
coverage gap is depth of item-specific precedent: the local library has strong module-level evidence,
but the coverage report records where a direction or composition still lacks a separately addressed
set of examples.
