# Contributing

Thanks for helping. The most valuable contributions are usually not new skills. They are:

1. **Bad-advice reports.** A skill recommended something wrong for your context ("anti-slop told
   my government form to add a gradient"). Use the *False positive / bad recommendation* issue template.
2. **Worked examples** from real products (described in your own words, no proprietary assets).
3. **Sharper references**: clearer rules, better tradeoffs, fewer words.
4. **Script fixes and tests.**

New skills are welcome when they cover a real gap; see
[docs/contributing-a-skill.md](docs/contributing-a-skill.md).

## Setup

```bash
git clone https://github.com/<owner>/experience-skills
cd experience-skills
npm install
npm run check
```

Node.js 20.11 or newer. Browser tests use `playwright-core` with an installed Chrome and are skipped
when no browser is available.

## Where to edit

| You want to change | Edit | Then run |
|---|---|---|
| Shared philosophy, taxonomies, patterns, anti-patterns, evaluation | `shared/**` | `npm run sync` |
| A worked example | `examples/**` | `npm run sync` |
| Which shared modules a skill gets | `catalog/skills.json` (`shared`, `sharedScripts`) | `npm run sync` |
| A skill's instructions or own references | `skills/<name>/SKILL.md`, `skills/<name>/references/*.md` | `npm run catalog` if the description changed |
| A shared script library | `shared/tools/*.mjs` | `npm run sync` |

Never edit files in `skills/*/references/_shared/` or `skills/*/scripts/_shared/`. They are
generated and CI rejects hand edits.

## Before opening a pull request

- `npm run check` passes (or explain what you could not run).
- New or changed advice includes the tradeoff: when it applies and when it does not.
- No private data, secrets, screenshots, or copied proprietary text.
- Writing follows the style below.
- Add a line to `CHANGELOG.md` under an "Unreleased" heading.

## Contributing design intelligence or precedent

A new direction, composition, palette family, typography note, or precedent entry must include:

- a clear concept and the job it does
- appropriate and inappropriate contexts (archetypes, audiences)
- reasoning (why it works, not that it looks good)
- failure modes and AI-slop risks
- accessibility notes (contrast computed, not estimated) and responsive/RTL notes where relevant
- real precedents with URL, date observed, and evidence method; add the observation to
  `research/observations/` with a new ID and cite the ID
- license and provenance if anything is copied or adapted (update `third-party/provenance.json` and
  `THIRD_PARTY_NOTICES.md`)
- test or eval implications (a scenario, a fixture, or a routing case)

Rejected: "here is a cool style" without context, name-dropping lists, invented examples presented as
observed products, and palettes or fonts chosen by industry. Niche atlas systems are judged by the
index's critique stage and fingerprint difference test; a system that differs from a sibling mostly
in color, font, or naming is merged, not added.

## Writing style

The repository should itself resist slop.

- Direct and specific. Prefer a concrete example over an adjective.
- Every rule names its context: "X works here because…; X is wrong when…".
- Avoid: elevate, seamless, unlock, delightful, cutting-edge, next-generation, supercharge,
  revolutionize, and similar.
- Vendor-neutral: "the agent," not a specific product.
- No "Obviously," no hype, no fake numbers.
- Keep `SKILL.md` files under ~200 lines; move depth to references.
- Apply the file test: where does this file force the agent to behave differently? If it only
  explains a principle, fold it into a checkpoint or a reference that a checkpoint loads.

## Code of conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
