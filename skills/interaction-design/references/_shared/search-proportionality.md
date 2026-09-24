<!-- GENERATED FROM examples/interaction/search-proportionality.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: Search Proportionality

**Archetype:** OPERATIONAL, DISCOVERY · **Product types:** apps, admin tools, libraries
**Skills:** interaction-design, anti-slop-ui, composition-repair

## Context

An app has several lists: a team member list (usually 5–15 people), a settings page (12 settings),
a quiz library (hundreds of items for active teachers), and a global app with many objects.

## The bad version

Every list gets a giant, centered "Search anything… ⌘K" bar with a glow, an icon, and a keyboard
hint, taking 120 px at the top of each page. The team list of 8 people has one. The settings page
has one. The command palette opens a modal that searches only the current list.

## The typical wrong review

> "Modern command-bar search gives a premium, keyboard-first feel across the app."

## Correct analysis

- **Disproportion.** A list of 8 does not need search; a list of 12 settings needs grouping.
- **Viewport cost.** 120 px of chrome on every page, including short laptop viewports.
- **Misleading affordance.** "Search anything" suggests global scope; it searches only the list.
- **Trend copying.** Command palettes are valuable in large apps with many actions; here they are a
  costume.

## The better version

| Surface | Proportionate search |
|---|---|
| Team list (≤ 20) | None; alphabetical list, maybe type-to-filter |
| Settings (12) | Grouped headings; no search |
| Quiz library (hundreds) | A normal search field above the list, with filters and result count |
| Whole app (many objects and actions) | One global command palette (⌘K), truly global, discoverable in the header |

## Why this works

Search appears where scale requires it, scoped honestly, sized to its importance.

## When this lesson does not apply

Products whose core interaction *is* search (a search engine, a docs site, a marketplace) should
make search the focal element.

## Universal analogues

Filters, command palettes, pagination, bulk actions: add them in proportion to scale and frequency.

## Canonical rule

**Use a command palette only when scope and frequency justify it; otherwise a normal field, or nothing.**
