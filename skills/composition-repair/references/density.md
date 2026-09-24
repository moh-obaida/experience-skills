# Density

Density is how much meaningful information and action a surface carries per unit of space.
Neither high nor low density is good in itself. The right density depends on archetype,
frequency, and expertise.

## Density by archetype

| Archetype | Appropriate density | Reason |
|---|---|---|
| FOCUSED | Low (content), with a working environment | One task; distraction costs attention |
| TRANSACTIONAL | Low–medium at the commit point | Consequences must be clear |
| CONTENT | Medium; governed by readable measure | Reading comfort |
| EXPERIENTIAL | Varies; atmosphere carries weight | Feel is part of the value |
| OPERATIONAL | Medium–high | Frequent users scanning many items |
| DISCOVERY | High, scannable | Comparison across many items |
| DATA-HEAVY | High | Experts monitoring change |
| CREATION | High in tools, generous in canvas | Canvas priority, tools nearby |
| LIVE CONTROL | Medium; big targets | Glanceability under pressure |

## Two kinds of sparse

- **Deliberate focus:** few elements, strongly composed, in an environment that establishes
  place. Right for FOCUSED and some EXPERIENTIAL surfaces.
- **Accidental emptiness:** few elements because nothing else was designed. Usually wrong for
  OPERATIONAL surfaces, where users expect state and next actions.

## Two kinds of dense

- **Useful density:** many items, strong grouping, consistent rhythm, scannable columns,
  muted metadata, clear primary information. Experts love it.
- **Clutter:** many items with equal weight, inconsistent spacing, and decoration competing
  with content.

## Increasing density usefully

Add meaning, never filler:

- Real recent items, items needing attention, in-progress work
- The next action for each state
- Metadata that supports decisions (last edited, owner, status)
- Inline actions that remove navigation

Do not add: vanity metrics, tip cards, promotional panels, duplicate navigation. See
`references/_shared/fake-density.md`.

## Decreasing density usefully

- Demote P3/P4 information to hover, expansion, or detail views.
- Collapse repeated metadata into column headers or group labels.
- Replace text labels with well-known icons only where the icon is unambiguous, and keep
  accessible names.
- Use progressive disclosure for advanced controls.

## Density controls

For expert tools, a user-controlled density setting (comfortable / compact) can be worth it.
Default to the density most users need; do not make every user choose.

## Mobile density

Small screens are not "the same thing, smaller." Re-rank: P0 and P1 first, secondary
information behind a tap. Keep touch targets adequate even in compact modes.
