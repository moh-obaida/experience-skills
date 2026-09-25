# Worked Example: Editorial Hierarchy, Not Cards

*Invented teaching example. Where it cites real products, the observations are in the repository's research log (The Guardian GU3, Wikipedia WPd1, Our World in Data OW1; 2026-09-24).*

**Archetype:** CONTENT · **Product types:** editorial, docs, help centers, blogs, long-form marketing
**Skills:** composition-repair, anti-slop-ui, visual-identity

## Context

A long-form article explaining how a product's scheduling algorithm works, for a technical but
non-specialist audience.

## The bad version

Every paragraph is a rounded card with an icon and a bold title. Key points are pills. Quotes are
cards with gradient borders. The page is a vertical stack of 24 same-weight boxes.

## Bad AI instinct

> "Nicely organized and scannable, with a modern card layout."

## Correct analysis

- **Card overuse (V9, container soup).** Paragraphs are not independent objects; boxing them breaks
  reading flow.
- **Flat hierarchy (V5).** Every block has the same visual weight; nothing leads.
- **Icon slop.** Icons repeat headings and add no meaning.
- **Reading measure.** Cards stretch to 900+ px; body line length exceeds 100 characters.

## The better version

Editorial hierarchy:

- Headline with a clear typographic voice
- A deck (standfirst) summarizing the argument in two sentences
- Body text at a comfortable measure (~65 characters), generous line height
- Subheadings that tell the story on their own
- One or two pull quotes, typographically distinct, not boxed
- Diagrams inline at the point they explain, with captions
- A side column on wide screens for a table of contents and notes (using the margin purposefully)
- End matter: related articles and a next action

## Why this works

Reading is linear and continuous. Typography, rhythm, and measure carry structure better than
containers.

## User goal and constraints

Readers finish a long explanatory article. Constraints: desktop and mobile reading, diagrams, translations later.

## Alternative direction

A long-document composition with numbered sections and marginal notes on wide screens.

## Implementation notes

Measure capped in `ch`; heading hierarchy; figures with captions in flow; table of contents for long pieces; no containers around paragraphs.

## Verification

Line length at 1440 px and 390 px; heading order with a screen reader; 200% zoom reflow.

## Failure conditions

Cards return as 'callouts' around every paragraph; pull quotes used as decoration.

## When this lesson does not apply

Genuine collections (article indexes, card-based feeds, product grids) are lists of independent
objects; cards can be right there.

## Universal analogues

Documentation pages, help articles, case studies, release notes, legal pages.
