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
| Geometry | 4px unit; 12px metadata, 24px object groups, 48px editorial transitions; 2px controls, 0–4px panels, rules not shadows. Stroke and lift: Let the object image carry its frame, use quiet rules for catalog facts, and avoid shadows that compete with the artifact. |
| Components/nav | Filterable catalog rows and image detail, clear citation/source links, accessible zoom. Desktop categories become mobile search/filter without losing chronology. Shown when: Show provenance beside the object, keep interpretation after essential facts, and reveal related objects only when they add a meaningful link. |
| States/motion | Missing image, uncertain attribution, restoration, and unavailable object stated honestly. Image transitions preserve context; reduced motion direct swap. |
| Image/icon/copy | Object photography with honest crop and rights/alt; icons rare. Copy distinguishes fact from interpretation. Copy: Distinguish documented provenance from interpretation; use exact collection names and dates, with translations that preserve object terminology. |
| Failure/anti-imitation | Faux-aged texture and museum-like typography cannot create provenance. Do not imitate a specific archive's catalog system. Accept: Capture object detail, long provenance, and an empty related-objects state at desktop and phone widths; check image boundaries and text measure. |

**Core-screen and look contract.** Quiet, attentive energy: object scale, provenance rules, and generous image-to-caption rhythm lead; the object itself owns chroma and UI actions stay restrained. Selecting an archival detail ties the image region to its citation rather than adding museum-like animation. This deepens context but sacrifices throughput. Reject when users must act on live status.

## Object Gallery

**Thesis.** Product form deserves attention, but buying remains direct. Fits considered retail; poor for bulk admin.

| Layer | Contract |
|---|---|
| Composition | Image gallery + title/price/availability + buy action in first useful viewport. Desktop image/detail split; tablet stacked; mobile image, key facts, action, details. |
| Type | Moderated display serif for object name, system sans product facts, tabular price; 32/21/16/13px. |
| Color | Ivory/Charcoal: `#FAF8F2` canvas, `#FFFFFF` surface, `#262622` ink, `#5B5A52` secondary, `#C9C7BB` line, `#333A2C` action. Product imagery carries color. |
| Geometry | 4px unit; 12px fact spacing, 24px purchase group, 48px editorial space; 3px buttons/fields, no card around the product. Stroke and lift: Keep product imagery unboxed, separate purchase facts with one rule, and reserve the strongest outline for keyboard focus on the buy action. |
| Components/nav | Variant choice is labeled and inventory-aware; primary buy action once; shipping/returns near decision. Gallery keyboard accessible. Related products after purchase facts. Shown when: Show stock, delivery, and policy details when they affect purchase; keep the price breakdown available and remove empty promotional placeholders. |
| States/motion | Out of stock, low stock, selected variant, cart processing, and error each clear. Motion only image change/cart result; reduced motion static. |
| Image/icon/copy | High-quality object images, consistent scale and crop, alt describing differentiating features. Copy names material, dimensions, care. Copy: Name the object, total price, and availability accurately; keep product claims and return terms consistent with the selected variant. |
| Failure/anti-imitation | Large fashion whitespace that pushes price below the fold blocks commerce. Do not copy a luxury house's type or photography treatment. Accept: Capture available, low-stock, and unavailable variants at desktop and phone widths; verify price, action, and policy remain together without cropping. |

**Core-screen and look contract.** Low-medium, tactile energy: large true-to-scale imagery and precise price/variant type dominate; compact square purchase controls resist luxury whitespace. Product color stays in the object; chroma enters UI only on selected variant and available buy action. Changing a variant visibly updates image, stock, and price together. This supports considered purchase but sacrifices bulk comparison. Reject for catalog administration.

## Field Atlas

**Thesis.** Place and material context guide discovery. Fits travel, field research, and outdoor services; poor for pure text utilities.

| Layer | Contract |
|---|---|
| Composition | Search/map/list relationship; desktop map beside curated results, tablet map toggles, mobile list first with map as deliberate alternate. First viewport shows current place and selection. |
| Type | Humanist sans for place names and UI, restrained mono for coordinates; 30/21/16/13px. Arabic/Latin place labels require local-script hierarchy. |
| Color | Sand/Olive: `#F6F2E7` canvas, `#FFFFFF` surface, `#252D26` ink, `#586154` secondary, `#C3CABA` line, `#38533A` action. Map colors reserve semantic distinctions. |
| Geometry | 4px unit; 12px result rows, 24px clusters, 40px sections; 6px controls, 8px surfaces, subtle line rather than heavy elevation. Stroke and lift: Use map lines for geography and one neutral divider for results; selected places get one synchronized map and list marker, not duplicate badges. |
| Components/nav | Result row exposes place, distance, availability; filters remain reversible. Map pins have accessible list equivalents. Navigation uses Explore, Saved, Trip/Work. Shown when: Show location permission only when location is requested; make the list usable without the map and expose offline state only when relevant. |
| States/motion | No local results, stale location, denied location, offline map, and saved item are distinct. Map movement follows user request; reduced motion jumps. |
| Image/icon/copy | Place photography with location/date; diagrams for terrain when useful; icons labeled. Copy distinguishes estimated from confirmed. Copy: Use place names in their local script first; keep distance, opening time, and source freshness explicit and avoid promotional superlatives. |
| Failure/anti-imitation | Map as a decorative hero hides search. Do not copy a travel brand's destination tile styling. Accept: Capture map selection, denied location, closed place, and offline results at desktop and phone widths with an RTL place name. |

**Core-screen and look contract.** Exploratory, medium energy: map and result list share authority, with crisp place headings and directional geometry. Map color describes terrain; a stronger selection color joins a chosen result to its pin and details, then clears on deselection. This gives spatial context but sacrifices speed when location is irrelevant. Reject for pure text lookup.

## Edition House

**Thesis.** Editorial pacing and direct conversion can coexist. Fits publications and cultural commerce; wrong for dense dashboards.

| Layer | Contract |
|---|---|
| Composition | Lead story/edition, table of contents, article flow, then subscription/purchase. Desktop editorial grid with one dominant column; mobile linearizes without shrinking type into cards. |
| Type | Expressive serif display, readable serif or humanist sans body, sans metadata; 42/26/17/13px, long-form measure 65–75 characters. |
| Color | Warm Editorial: `#FBF7EE` canvas, `#FFFFFF` surface, `#29231F` ink, `#645A51` secondary, `#CEC7BD` line, `#7A392A` action. Illustration/image brings episodic color. |
| Geometry | 4px unit; 16px paragraphs, 32px story groups, 64px edition transitions; square-ish controls, almost no card/shadow. Stroke and lift: Use editorial rules to mark story groups, not boxes around paragraphs; subscription controls stay separate from the article’s reading flow. |
| Components/nav | Contents and article navigation stay predictable; subscription action appears at meaningful decision points, not every paragraph. Search and archive remain accessible. Shown when: Show subscription prompts after meaningful reading context or at an edition boundary; omit repeated pitches beside every story. |
| States/motion | Paywall, saved, unavailable issue, loading images, and article updates are honest. Motion only editorial transitions, never delayed reading. |
| Image/icon/copy | Commissioned or licensed artwork; captions/source visible. Copy lets article content speak, avoiding generic marketing claims. Copy: Use editorial voice for stories and literal language for price, renewal, and cancellation; do not imply access the selected plan lacks. |
| Failure/anti-imitation | A giant centered serif hero on every route erases hierarchy. Do not reproduce any magazine's masthead or grid. Accept: Capture the lead story, long article, subscription boundary, and paywall at desktop and phone widths; inspect wrapping and reading continuity. |

**Core-screen and look contract.** Expressive but paced energy: a large editorial lead, sharp typographic jumps, and long reading stretches give each edition its own rhythm. Artwork owns vivid color; purchase color appears at a real decision, not in every paragraph. Opening a story preserves its edition context with a restrained transition. This builds editorial identity but sacrifices dashboard density. Reject for operational work.

## Night Stage

**Thesis.** The media is the room; controls appear when needed and remain usable. Fits audio/film/immersive culture; wrong for public forms.

| Layer | Contract |
|---|---|
| Composition | Playback/artifact dominates, queue/context nearby. Desktop player + queue, tablet balanced, mobile playback first and queue reachable without overlay traps. |
| Type | Wide restrained sans for media titles, system sans controls, tabular timecode; 30/20/15/12px. Subtitle readability outranks display character. |
| Color | Night Field: `#111719` canvas, `#1B2426` surface, `#F2F1E9` ink, `#B8C3C0` secondary, `#53615F` line, `#B9D49B` action with dark label. Avoid low-contrast translucent controls. |
| Geometry | 4px unit, 12px control groups, 24px queue groups, 40px stage transitions; 6px controls, 8px overlays, depth only where player needs separation. Stroke and lift: Let the media stage remain dominant; raise playback controls only when needed and do not double-frame the queue. |
| Components/nav | Standard play/pause, seek, volume, captions; labeled icon buttons with ample targets. Queue is reorderable with keyboard alternate. Navigation does not cover media. Shown when: Keep the queue reachable without covering playback; show captions and failure recovery when needed, and remove healthy status once understood. |
| States/motion | Buffering, live, paused, ended, unavailable, and offline download distinct. Timeline moves by media time; reduced motion suppresses chrome animation, not playback. |
| Image/icon/copy | Cover art and frames are primary; crop preserves subject. Icons follow one family. Copy names media and actions plainly. Copy: Use the media’s title and creator accurately; playback messages say what paused or failed and how to resume without vague wait language. |
| Failure/anti-imitation | Glows and glass over controls degrade legibility. Do not copy a streaming service's player chrome. Accept: Capture playback, queue open, paused, subtitle, and reconnecting states at desktop and phone widths; verify controls never cover the media or each other. |

**Core-screen and look contract.** High sensory energy with quiet controls: media fills the dark field, titles are wide and confident, and control geometry is compact and legible. Cover/frame color owns the room; the bright action hue appears only for focus, playback, and the live timeline. Play visibly changes the media and time position, without decorative glows. This supports immersion but sacrifices dense metadata. Reject for transactional forms.

## Material Shelf

**Thesis.** Physical goods need material truth, stock clarity, and comparison. Fits maker commerce and equipment; not abstract analytics.

| Layer | Contract |
|---|---|
| Composition | Category shelf → comparison → item detail. Desktop comparison table with pinned names, tablet horizontal comparison on explicit control, mobile pairwise compare/list. |
| Type | Industrial humanist sans, mono specifications; 30/20/16/12px with tabular measures. Units stay adjacent to numbers. |
| Color | Clay/Ink: `#F5F1E9` canvas, `#FFFFFF` surface, `#292A24` ink, `#62645A` secondary, `#C9CABF` line, `#5E4733` action. Material photos own warmth. |
| Geometry | 4px unit; 8px specs, 18px groups, 36px shelves; 4px controls, 6px surfaces, hairline dividers. Stroke and lift: Use hairline dividers between comparable specifications, one border for the chosen item, and no shadow on fixed comparison columns. |
| Components/nav | Cards only for actual product comparison, spec tables align units, availability visible. Add to cart remains near selected variant. Category nav is stable. Shown when: Show attributes that distinguish compared items; keep pairwise comparison on mobile and label unavailable specifications explicitly. |
| States/motion | In stock, made to order, unavailable, variant selected, and shipping estimate distinguished. Motion only comparison expansion/cart feedback. |
| Image/icon/copy | Close-up material photos with scale; diagrams for size/assembly. Icons support units and care, not decoration. Copy includes exact material and limits. Copy: Keep units adjacent to values, use the maker’s material names, and distinguish measured properties from seller claims. |
| Failure/anti-imitation | Decorative texture that misrepresents the product destroys trust. Do not borrow a craft marketplace's tile pattern. Accept: Capture a three-item comparison, missing specification, and mobile pairwise view; check pinned names and rules stay aligned while scrolling. |

**Core-screen and look contract.** Grounded, medium energy: close material images and tightly aligned specifications alternate in a shelf-to-comparison rhythm; firm square-ish controls match physical goods. Product material owns warmth, while a distinct selection mark joins a variant to stock and total price. Comparison changes the actual rows, not just a badge. This supports material judgment but sacrifices abstract analytics. Reject when imagery cannot truthfully show differences.
