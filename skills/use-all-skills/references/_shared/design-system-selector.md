<!-- GENERATED FROM shared/design-intelligence/design-system-selector.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Design System Selector

Use this after the product map and before implementation. It is an agent reasoning procedure, not a questionnaire for the user. The authored systems are candidates. Existing brand and working product behavior take precedence over a library entry.

## Inputs

Record product archetype, primary user job, audience, task frequency, content density, emotional target, trust/stakes, interaction complexity, device mix, language/scripts, brand maturity, and constraints. Separate observed facts from inferred preferences. A category alone never chooses a system.

## Niche first

Before choosing how it looks, name what kind of product it is. Open `niche-atlas-index.md`, find the
primary niche profile (and a secondary one only if it owns a real surface), and load that niche
file. Record from its profile the jobs, density, surfaces, states, interaction, trust level, and the
generated-UI failures to avoid. Those realities are inputs to every candidate below; they do not
select a style.

```text
IDENTIFY NICHE → USER JOB → STATE AND DENSITY → NICHE FILE → 3 CANDIDATES → COMPARE → CHOOSE → ADAPT → IMPLEMENT
```

For a product that spans niches (for example technical education + developer tool + light
gamification), set one primary identity and let the secondary niches contribute states and at most
one layer.

## Three candidates

Nominate three systems with different structural theses, not three accent colors. Draw them from the
niche file first; one may come from the general library (`design-systems-index.md`) or another niche
file when the product straddles niches. Their fingerprints must differ in at least four dimensions
(the atlas difference test). For each, use the relevant file and compare:

| Criterion | Candidate A | Candidate B | Candidate C |
|---|---|---|---|
| Why it fits the user job | | | |
| Density and composition | | | |
| Trust and emotional tone | | | |
| Type/language/accessibility | | | |
| Device transformation | | | |
| What it emphasizes | | | |
| What it sacrifices | | | |
| Build/maintenance cost | | | |
| Slop or imitation risk | | | |

Add one row for the niche realities: which candidate handles the profile's hardest state (reconnect, pending vs posted, stale data, empty first run) without changing character.

Choose the candidate whose sacrifices the product can accept. Do not always select the first listed system. Record why the two rejected candidates lose. If all three fail, derive a new system from the product's mechanics, document it at the same depth, and run the atlas critique stage on it; do not randomly blend the three.

## Controlled adaptation

A composition can be borrowed from another system when the task needs it; type and palette can shift for language or brand; a theme can shift visual roles without altering behavior. Change one layer at a time and restate the thesis. An adaptation that reverses the thesis is a new system. Use `design-system-grammar.md` to translate the choice into tokens, components, states, and responsive rules.

## Output

Produce a selected-system artifact: name and thesis, selected theme, type roles, semantic color tokens, spacing/shape/depth, component/navigation grammar, per-route composition, state/motion behavior, image/icon/copy rules, responsive behavior, accessibility risks, anti-imitation constraint, and verification plan. Then implement it. A design choice that does not materially affect the product's code is not a choice.
