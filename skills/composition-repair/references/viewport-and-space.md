# Viewport, Space, and Density

Load when the first viewport feels empty, wasted, cramped, or wrongly dense for its archetype.

Sections: Viewport Budget · Whitespace · Density

## Viewport Budget

The first viewport is the most valuable space on any surface. Treat it as a budget: every
pixel is spent on something, and "nothing" is also a spending decision.

### What the first viewport must answer

At the product's primary size and at its smallest supported height:

1. **Where am I?** (product and surface identity, in proportion)
2. **What is this for?** (P0 content or task)
3. **What do I do?** (the primary action, visible without scrolling on task surfaces)

Marketing and storytelling pages may defer the action slightly below the fold if the first
viewport does real persuasive work. Task surfaces (sign-in, checkout, host console, editor)
should not.

### Budget categories

| Spend | Examples | Typical share at 1440×900 |
|---|---|---|
| Chrome | Headers, nav, toolbars, banners | 5–15% (more is suspicious) |
| P0 | The task, key content, the focal element | Largest single share |
| P1 | The next action, supporting content | Moderate |
| Environment | Background treatment, imagery, pattern that establishes place | Varies by archetype |
| Framing space | Space that separates and directs | Deliberate, proportioned |
| Dead space | Space with no role | Aim for none |

The difference between framing space and dead space is whether you can state its job.

### Measuring coverage

`scripts/measure-layout.mjs` reports **content coverage**: the share of the first viewport
occupied by content elements (text, media, controls), rasterized on a 16px grid. It excludes
backgrounds and empty containers.

Rough interpretation at desktop sizes (not rules):

| Coverage | Often means | But check |
|---|---|---|
| < 15% | Likely dead space, lonely centered cluster | Is there an environment treatment doing real work? Is this a deliberate focus page with a strong backdrop? |
| 15–35% | Focused or editorial; can be right | Does space frame the focal point, or surround it by default? |
| 35–70% | Typical for operational and content surfaces | Is hierarchy clear, or is everything the same weight? |
| > 70% | Dense; right for data-heavy and creation | Is it scannable? Is grouping legible? |

The script also reports whether a large background image, gradient, or media element exists
("environment treatment"). Low coverage *with* a strong environment can be deliberate. Low
coverage *without* one is usually dead space.

### Short viewports

Common real heights are smaller than designers assume: 1366×768 laptops lose ~110px to browser
chrome; landscape phones have ~350px; split-screen halves the width.

- Check that the primary action is visible at the smallest supported height.
- Sticky headers and footers are paid for at every scroll position. See `references/layout-mechanics.md`.
- Hero sections sized with `100vh` push everything else below the fold on short screens.

### Repair moves

When the first viewport is under-used:

1. **Promote P0.** Scale the task or key content to occupy its budget.
2. **Bring P1 up.** Recent items, the next step, supporting context.
3. **Give the environment a job.** A product-derived backdrop, imagery, or pattern.
4. **Shift from centered to composed.** Offset, asymmetric split, or grid placement that
   relates content to the viewport edges. See `references/hierarchy-and-alignment.md`.

When over-spent:

1. **Cut chrome.** Collapse secondary navigation, shrink or remove banners.
2. **Demote P3/P4.** Move reference content and rare actions down or into menus.
3. **Shorten the hero.** Especially `min-height: 100vh` on task surfaces.

## Whitespace

Whitespace is not a style. It is a tool with three legitimate jobs:

1. **Separate** groups so relationships are legible.
2. **Frame** a focal element so it receives attention.
3. **Pace** reading or scrolling so content is absorbed.

Whitespace that does none of these is dead space.

### The question to ask

For every large empty region: *what is this space doing?*

- "It separates the pricing section from testimonials." → working.
- "It frames the headline." → working, if the headline deserves it.
- "It makes it feel premium." → not a job. Premium feel comes from proportion, type, imagery,
  and restraint, not from quantity of nothing.
- "There was nothing to put there." → dead space.

### Proportion over quantity

Space works through relationships:

- **Internal < external.** Space inside a group should be smaller than space between groups.
  When they are equal, grouping disappears.
- **Consistent scale.** Use a spacing scale (for example 4, 8, 12, 16, 24, 32, 48, 64, 96) and
  pick steps deliberately. Two adjacent steps are hard to distinguish; skip steps to show
  different relationships.
- **Relative to the viewport.** 96px of space on a phone is huge; on a 2560px monitor it can be
  negligible. Consider scaling major spacing with viewport size (clamp-based values).

### Fake-premium whitespace

A signature AI and template pattern:

- 400–600px hero padding with a single line of text
- Small content column centered on a large screen
- Tiny gray text floating in the middle of nothing
- Sections separated by more space than they contain

This reads as "unfinished" to most users. Real premium surfaces that use generous space pair
it with strong typography, high-quality imagery, precise alignment, and an environment that
feels intentional. Remove any of those and the space is simply empty.

### Repairing dead space

Choose based on archetype:

- **FOCUSED:** give the environment a job (pattern, imagery, color field, illustration derived
  from the product) and scale the task region. Do not add content that competes with the task.
- **OPERATIONAL:** bring real state and next actions into the space (recent, in progress,
  needs attention).
- **CONTENT:** check the measure; widen margins with purpose (side notes, navigation, table of
  contents) rather than leaving gutters empty.
- **MARKETING:** tighten pacing; bring proof and explanation closer; use imagery at scale.

### When lots of space is right

- A single consequential decision (confirm transfer of money).
- A reading experience where pacing matters.
- A brand moment where imagery or type at scale fills the composition.
- A deliberately calm product where the space is framed by strong edges, type, or color.

Even then, the space is designed: you can say what it frames.

## Density

Density is how much meaningful information and action a surface carries per unit of space.
Neither high nor low density is good in itself. The right density depends on archetype,
frequency, and expertise.

### Density by archetype

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

### Two kinds of sparse

- **Deliberate focus:** few elements, strongly composed, in an environment that establishes
  place. Right for FOCUSED and some EXPERIENTIAL surfaces.
- **Accidental emptiness:** few elements because nothing else was designed. Usually wrong for
  OPERATIONAL surfaces, where users expect state and next actions.

### Two kinds of dense

- **Useful density:** many items, strong grouping, consistent rhythm, scannable columns,
  muted metadata, clear primary information. Experts love it.
- **Clutter:** many items with equal weight, inconsistent spacing, and decoration competing
  with content.

### Increasing density usefully

Add meaning, never filler:

- Real recent items, items needing attention, in-progress work
- The next action for each state
- Metadata that supports decisions (last edited, owner, status)
- Inline actions that remove navigation

Do not add: vanity metrics, tip cards, promotional panels, duplicate navigation. See
`references/_shared/fake-density.md`.

### Decreasing density usefully

- Demote P3/P4 information to hover, expansion, or detail views.
- Collapse repeated metadata into column headers or group labels.
- Replace text labels with well-known icons only where the icon is unambiguous, and keep
  accessible names.
- Use progressive disclosure for advanced controls.

### Density controls

For expert tools, a user-controlled density setting (comfortable / compact) can be worth it.
Default to the density most users need; do not make every user choose.

### Mobile density

Small screens are not "the same thing, smaller." Re-rank: P0 and P1 first, secondary
information behind a tap. Keep touch targets adequate even in compact modes.
