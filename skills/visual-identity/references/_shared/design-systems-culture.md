<!-- GENERATED FROM shared/design-intelligence/design-systems-culture.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Design Systems: Culture and Commerce

Authored candidate systems. Image rights and content quality determine whether these systems can work; never substitute generic stock merely to fill a composition.

## Archive Room

**Thesis.** An object is understood through its context, date, and provenance. Suits collections and museums; not live monitoring.

| Layer | Contract |
|---|---|
| Composition | Object image and catalog facts lead; related objects and essay follow. Desktop object/detail pairing, tablet two-stage scroll, mobile image then provenance then interpretation. |
| Type | Editorial serif headings, system sans metadata, mono accession IDs; 34/22/16/12px. Long reading at 65–75 characters; Arabic-first needs a comparable Arabic reading face. |
| Color | Paper/Ink: `#F7F3E9` canvas, `#FEFDF9` surface, `#25251F` ink, `#5D5E54` secondary, `#C7C8BA` line, `#4C5432` action. Imagery owns saturated color. |
| Geometry | 4px unit; 12px metadata, 24px object groups, 48px editorial transitions; 2px controls, 0–4px panels, rules not shadows. |
| Components/nav | Filterable catalog rows and image detail, clear citation/source links, accessible zoom. Desktop categories become mobile search/filter without losing chronology. |
| States/motion | Missing image, uncertain attribution, restoration, and unavailable object stated honestly. Image transitions preserve context; reduced motion direct swap. |
| Image/icon/copy | Object photography with honest crop and rights/alt; icons rare. Copy distinguishes fact from interpretation. |
| Failure/anti-imitation | Faux-aged texture and museum-like typography cannot create provenance. Do not imitate a specific archive's catalog system. |

## Object Gallery

**Thesis.** Product form deserves attention, but buying remains direct. Fits considered retail; poor for bulk admin.

| Layer | Contract |
|---|---|
| Composition | Image gallery + title/price/availability + buy action in first useful viewport. Desktop image/detail split; tablet stacked; mobile image, key facts, action, details. |
| Type | Moderated display serif for object name, system sans product facts, tabular price; 32/21/16/13px. |
| Color | Ivory/Charcoal: `#FAF8F2` canvas, `#FFFFFF` surface, `#262622` ink, `#5B5A52` secondary, `#C9C7BB` line, `#333A2C` action. Product imagery carries color. |
| Geometry | 4px unit; 12px fact spacing, 24px purchase group, 48px editorial space; 3px buttons/fields, no card around the product. |
| Components/nav | Variant choice is labeled and inventory-aware; primary buy action once; shipping/returns near decision. Gallery keyboard accessible. Related products after purchase facts. |
| States/motion | Out of stock, low stock, selected variant, cart processing, and error each clear. Motion only image change/cart result; reduced motion static. |
| Image/icon/copy | High-quality object images, consistent scale and crop, alt describing differentiating features. Copy names material, dimensions, care. |
| Failure/anti-imitation | Large fashion whitespace that pushes price below the fold blocks commerce. Do not copy a luxury house's type or photography treatment. |

## Field Atlas

**Thesis.** Place and material context guide discovery. Fits travel, field research, and outdoor services; poor for pure text utilities.

| Layer | Contract |
|---|---|
| Composition | Search/map/list relationship; desktop map beside curated results, tablet map toggles, mobile list first with map as deliberate alternate. First viewport shows current place and selection. |
| Type | Humanist sans for place names and UI, restrained mono for coordinates; 30/21/16/13px. Arabic/Latin place labels require local-script hierarchy. |
| Color | Sand/Olive: `#F6F2E7` canvas, `#FFFFFF` surface, `#252D26` ink, `#586154` secondary, `#C3CABA` line, `#38533A` action. Map colors reserve semantic distinctions. |
| Geometry | 4px unit; 12px result rows, 24px clusters, 40px sections; 6px controls, 8px surfaces, subtle line rather than heavy elevation. |
| Components/nav | Result row exposes place, distance, availability; filters remain reversible. Map pins have accessible list equivalents. Navigation uses Explore, Saved, Trip/Work. |
| States/motion | No local results, stale location, denied location, offline map, and saved item are distinct. Map movement follows user request; reduced motion jumps. |
| Image/icon/copy | Place photography with location/date; diagrams for terrain when useful; icons labeled. Copy distinguishes estimated from confirmed. |
| Failure/anti-imitation | Map as a decorative hero hides search. Do not copy a travel brand's destination tile styling. |

## Edition House

**Thesis.** Editorial pacing and direct conversion can coexist. Fits publications and cultural commerce; wrong for dense dashboards.

| Layer | Contract |
|---|---|
| Composition | Lead story/edition, table of contents, article flow, then subscription/purchase. Desktop editorial grid with one dominant column; mobile linearizes without shrinking type into cards. |
| Type | Expressive serif display, readable serif or humanist sans body, sans metadata; 42/26/17/13px, long-form measure 65–75 characters. |
| Color | Warm Editorial: `#FBF7EE` canvas, `#FFFFFF` surface, `#29231F` ink, `#645A51` secondary, `#CEC7BD` line, `#7A392A` action. Illustration/image brings episodic color. |
| Geometry | 4px unit; 16px paragraphs, 32px story groups, 64px edition transitions; square-ish controls, almost no card/shadow. |
| Components/nav | Contents and article navigation stay predictable; subscription action appears at meaningful decision points, not every paragraph. Search and archive remain accessible. |
| States/motion | Paywall, saved, unavailable issue, loading images, and article updates are honest. Motion only editorial transitions, never delayed reading. |
| Image/icon/copy | Commissioned or licensed artwork; captions/source visible. Copy lets article content speak, avoiding generic marketing claims. |
| Failure/anti-imitation | A giant centered serif hero on every route erases hierarchy. Do not reproduce any magazine's masthead or grid. |

## Night Stage

**Thesis.** The media is the room; controls appear when needed and remain usable. Fits audio/film/immersive culture; wrong for public forms.

| Layer | Contract |
|---|---|
| Composition | Playback/artifact dominates, queue/context nearby. Desktop player + queue, tablet balanced, mobile playback first and queue reachable without overlay traps. |
| Type | Wide restrained sans for media titles, system sans controls, tabular timecode; 30/20/15/12px. Subtitle readability outranks display character. |
| Color | Night Field: `#111719` canvas, `#1B2426` surface, `#F2F1E9` ink, `#B8C3C0` secondary, `#53615F` line, `#B9D49B` action with dark label. Avoid low-contrast translucent controls. |
| Geometry | 4px unit, 12px control groups, 24px queue groups, 40px stage transitions; 6px controls, 8px overlays, depth only where player needs separation. |
| Components/nav | Standard play/pause, seek, volume, captions; labeled icon buttons with ample targets. Queue is reorderable with keyboard alternate. Navigation does not cover media. |
| States/motion | Buffering, live, paused, ended, unavailable, and offline download distinct. Timeline moves by media time; reduced motion suppresses chrome animation, not playback. |
| Image/icon/copy | Cover art and frames are primary; crop preserves subject. Icons follow one family. Copy names media and actions plainly. |
| Failure/anti-imitation | Glows and glass over controls degrade legibility. Do not copy a streaming service's player chrome. |

## Material Shelf

**Thesis.** Physical goods need material truth, stock clarity, and comparison. Fits maker commerce and equipment; not abstract analytics.

| Layer | Contract |
|---|---|
| Composition | Category shelf → comparison → item detail. Desktop comparison table with pinned names, tablet horizontal comparison on explicit control, mobile pairwise compare/list. |
| Type | Industrial humanist sans, mono specifications; 30/20/16/12px with tabular measures. Units stay adjacent to numbers. |
| Color | Clay/Ink: `#F5F1E9` canvas, `#FFFFFF` surface, `#292A24` ink, `#62645A` secondary, `#C9CABF` line, `#5E4733` action. Material photos own warmth. |
| Geometry | 4px unit; 8px specs, 18px groups, 36px shelves; 4px controls, 6px surfaces, hairline dividers. |
| Components/nav | Cards only for actual product comparison, spec tables align units, availability visible. Add to cart remains near selected variant. Category nav is stable. |
| States/motion | In stock, made to order, unavailable, variant selected, and shipping estimate distinguished. Motion only comparison expansion/cart feedback. |
| Image/icon/copy | Close-up material photos with scale; diagrams for size/assembly. Icons support units and care, not decoration. Copy includes exact material and limits. |
| Failure/anti-imitation | Decorative texture that misrepresents the product destroys trust. Do not borrow a craft marketplace's tile pattern. |
