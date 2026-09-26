# Precedent: Mobile Navigation and Thumb-First Layouts

Observed at 375×812 CSS px unless noted, 2026-09-24; IDs refer to `research/observations/`.
Native apps were not observed in this pass; these are mobile web surfaces.

---

### Airbnb — bottom tabs, search pill, horizontal rows
`ABm1 ABm2 ABm3` · https://www.airbnb.com/ · rendered
- **What works:** top-level destinations in a bottom tab bar within thumb reach; search folded into one
  large pill; categories and content as horizontal rows.
- **Right when:** a few top-level destinations and a dominant task (search).

### Wikipedia — slim header, article first
`WPm1 WPm2` · https://en.m.wikipedia.org/ · rendered
- **What works:** one slim bar (menu, wordmark, search, account); article actions as an icon row;
  readable measure at 375 px.
- **Right when:** reading is the task; navigation is rare.

### GOV.UK — search as the primary tool
`UKm2` · https://www.gov.uk/ · rendered
- **What works:** header has only Menu and search; the hero states the site's purpose and puts Search
  directly beneath.

### Spotify — shelves and an app handoff
`SPm1 SPm2` · https://open.spotify.com/ · rendered
- **What works:** horizontal artwork shelves; "Open App" as the header action.
- **What does not:** upsell card and cookie sheet together consume most of the first screen.

### Nintendo — floating bottom bar on desktop
`NI2` · https://www.nintendo.com/us/ · rendered (desktop width)
- **What works:** a floating pill with menu, wishlist, search (emphasized), cart, account.
- **Caution:** a mobile pattern at desktop width; it covers content near the bottom edge.

### MIT — text-labeled menu control at 375px
`MIT1` · https://www.mit.edu/ · rendered at 375×812
- **What works:** the full top-level nav collapses into a single control labeled "Menu" with a
  down-arrow glyph, not an unlabeled hamburger icon; the search icon stays visible standalone next
  to it, and the page's one active institutional callout keeps the same full-width priority it has
  on desktop.
- **Lesson:** a text label on the nav-collapse control ("Menu") costs a little more width than a bare
  hamburger icon and buys unambiguous discoverability — worth it for an audience (prospective
  students, parents, press) that can't be assumed to know the icon.

### RNIB — appearance control promoted above the header on mobile
`RN2` · https://www.rnib.org.uk/ · rendered at 375×812
- **What works:** at desktop width the appearance switcher sits inside the header row; at 375px it
  gets its own full-width strip above the header — more prominent on the narrower, more
  space-constrained viewport, not less. The hamburger menu and search icons both keep a text label
  underneath ("Menu", "Search") rather than going icon-only, and the phone helpline stays a
  full-width, undiminished bar directly under the header.
- **Lesson:** don't assume a control should shrink or move to a menu on mobile just because space is
  tighter — if it's genuinely important to the audience, mobile can be the platform that gives it
  *more* prominence, and pairing a familiar icon with its label costs little width while removing all
  ambiguity about what it does.

---

## Summary rules

1. Put frequent destinations and the dominant action within thumb reach.
2. Fold complex forms into one large entry target that expands.
3. Count what the first screen shows after banners and sheets; protect the task.
4. Honest limit: validate native apps on devices; this module covers mobile web only.
