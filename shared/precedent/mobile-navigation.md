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

---

## Summary rules

1. Put frequent destinations and the dominant action within thumb reach.
2. Fold complex forms into one large entry target that expands.
3. Count what the first screen shows after banners and sheets; protect the task.
4. Honest limit: validate native apps on devices; this module covers mobile web only.
