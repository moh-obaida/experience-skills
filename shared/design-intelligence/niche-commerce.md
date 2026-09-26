# Niche Atlas: Commerce

Commerce design sits between desire and decision: the product must be seen clearly, the choice
must be informed, and the purchase must be fast and trustworthy. The generated default is a hero
carousel, "Shop Now" buttons, rounded product cards with hover lift, and a newsletter pop-up; it
fits almost nothing specific. What sells varies by category: specifications for electronics,
photography for fashion, provenance for collectibles, speed for groceries, terms for B2B. Load with
`niche-atlas-index.md`; compare three systems with `design-system-selector.md`.

## Product realities

### General ecommerce and electronics
- **Reality:** Buyers compare options on specs and price, read reviews, and worry about compatibility and returns.
- **Jobs:** Search and filter, compare models, check compatibility and stock, read reviews, choose variant, check out, track delivery, return.
- **Density:** Dense on listing and spec pages; low at checkout.
- **Surfaces:** Search results, category listing, product detail with specs, compare, cart, checkout, order tracking, returns.
- **States:** Out of stock, backorder, variant unavailable, price changed in cart, payment failed, partial shipment, return window closed.
- **Interaction:** Mobile-majority browsing, desktop comparison, filters.
- **Trust:** High: money, delivery, and returns.
- **Generated-UI failures:** Specs hidden behind tabs, rounded cards with no specs visible, fake urgency timers, "Shop now" with no product in the first viewport.

### Marketplaces, resale, and auctions
- **Reality:** Many sellers of varied quality; trust signals and search quality decide everything; auctions add time pressure.
- **Jobs:** Search, judge seller and item condition, message, make an offer or bid, pay safely, list an item, ship, resolve disputes.
- **Density:** Dense.
- **Surfaces:** Search, listing detail, seller profile, messages, offers and bids, listing creation, orders, disputes.
- **States:** Sold, reserved, offer pending, outbid, auction ending, seller unresponsive, dispute open.
- **Interaction:** Mobile photos for listing, messaging, notifications.
- **Trust:** Very high; fraud risk.
- **Generated-UI failures:** Uniform glossy cards hiding condition, trust badges as decoration, countdowns everywhere.

### Luxury and fashion
- **Reality:** The product is aesthetic and identity; photography, fit, and material carry the sale; luxury adds service and restraint.
- **Jobs:** Discover looks, see the garment on bodies and up close, choose size, understand material and care, book service, buy.
- **Density:** Sparse editorial, medium in listings.
- **Surfaces:** Campaign, collection, product page, size guide, store and appointment booking, cart.
- **States:** Size sold out, notify me, made to order, appointment confirmed, final sale.
- **Interaction:** Image-led browsing on phones; zoom and video.
- **Trust:** High for fit and returns; luxury buyers expect service.
- **Generated-UI failures:** Warm beige "premium" with no product reason, gradient buttons, crowded discount banners on luxury.

### Groceries and local commerce
- **Reality:** Repeat baskets, speed, substitutions, and delivery windows; local shops sell a small catalog with pickup.
- **Jobs:** Reorder, search by item, pick a delivery or pickup slot, handle substitutions, pay, track.
- **Density:** Dense item lists.
- **Surfaces:** Aisles, search, basket, slot picker, substitution preferences, order tracking, shop info.
- **States:** Out of stock with substitution, slot full, minimum order, driver arriving, shop closed.
- **Interaction:** Phone-first, one hand, quick quantity changes.
- **Trust:** Moderate; freshness and timing.
- **Generated-UI failures:** Big hero banners before items, quantity controls hidden behind product pages, pastel cards with tiny prices.

### Handmade, craft, and collectibles
- **Reality:** Buyers care about the maker or provenance; each item may be unique; stories and condition matter.
- **Jobs:** Learn who made it and how, see details and condition, ask a question, buy before it is gone, verify authenticity.
- **Density:** Medium.
- **Surfaces:** Maker or shop story, item detail, provenance and condition report, commissions, collection.
- **States:** One of a kind sold, made to order lead time, authentication pending, reserved.
- **Interaction:** Photo zoom, messaging with maker.
- **Trust:** High for authenticity and condition.
- **Generated-UI failures:** Generic startup landing template on a pottery shop, stock textures instead of the maker's work.

### Subscriptions
- **Reality:** Recurring delivery or access; the relationship lives in managing the next shipment, skipping, pausing, and cancelling.
- **Jobs:** Choose a plan, see the next delivery, skip or swap, pause, update payment, cancel without a fight.
- **Density:** Medium.
- **Surfaces:** Plan selection, account home, upcoming deliveries, item swap, billing, cancel flow.
- **States:** Upcoming, cutoff passed, skipped, paused, payment failed, cancelled with end date.
- **Interaction:** Phone, email links.
- **Trust:** High; hidden renewals destroy trust.
- **Generated-UI failures:** Three pricing cards with the middle one glowing, buried cancel, dark patterns.

### B2B commerce
- **Reality:** Buyers reorder known SKUs in quantity with negotiated prices, approvals, and invoices.
- **Jobs:** Quick order by SKU, reorder, upload a list, request a quote, route for approval, pay on terms, download invoices.
- **Density:** Dense.
- **Surfaces:** Quick order, catalog with account pricing, quotes, approvals, order history, invoices, account users.
- **States:** Pending approval, quote expired, credit limit reached, partial fulfilment, backorder.
- **Interaction:** Desktop, keyboard, CSV upload.
- **Trust:** High; purchase controls.
- **Generated-UI failures:** Consumer merchandising, images instead of SKU tables, hidden account pricing.

## Systems

### Spec Counter
**Thesis.** For considered purchases, the product page is a counter where specifications, compatibility, and price are laid out plainly beside clear photography. Character: straightforward, informed. Audience: buyers comparing electronics, appliances, tools. **Fit:** electronics, appliances, tools, technical goods.

**Fingerprint** `density=dense; composition=object-sheet; surface=flat-bordered; type=grotesque; nav=top-bar; accent=low; motion=restrained-causal; imagery=product-object; radius=low; data=strong; tone=straightforward`

| Layer | Decision |
|---|---|
| Composition | Product page: gallery left, right column with name, key specs (5 lines), price, stock and delivery date, variant, Add to cart; below, full spec table, compatibility checker, reviews with filters. Listing pages show key specs on each row. |
| Type | Grotesk (Hanken Grotesk or Archivo 15px), tabular figures for prices and specs. Arabic: IBM Plex Sans Arabic; units and model numbers isolated LTR. |
| Color | canvas #F7F8F9 · surface #FFFFFF · ink #111316 · muted #515761 · line #D6DAE0 · action #0B57A4 · on-action #FFFFFF. Stock green text, backorder amber text; sale price as ink with a struck original, no red flood. |
| Space and shape | 8px base; 4px radius; spec tables ruled; 48px Add to cart. |
| Icons and imagery | Product photography on neutral ground with scale references; spec icons only with labels. |
| Components | Compare up to 4 with differences highlighted; compatibility checker ("Works with your model?"); delivery estimate by postcode. |
| States | Variant unavailable disables with reason and notify; price changed in cart explained; return window shown on order. |
| Responsive | Phone: gallery, key facts, Add to cart sticky, specs collapsible by group; compare becomes swipeable columns with pinned labels. |
| Motion | Add to cart confirms with count update and short slide of the cart badge; no hover lifts. Reduced motion: count only. |
| Accessibility | Spec tables as real tables; gallery keyboard operable; alt text describes angle and detail. |
| Build | Specs as structured data powering filters, compare, and page; `--radius:4px`. |
| AI mutation | Hero carousel, rounded lifted cards with no specs, fake countdowns, gradient "Shop Now". |
| Fails when | Fashion or lifestyle products sold on feeling; luxury. |

### Lookbook
**Thesis.** Fashion sells through images of people wearing things; the site is a sequence of full-bleed photographs with type that stays out of the way until you choose. Character: confident, editorial. Audience: fashion shoppers. **Fit:** fashion brands, apparel, footwear, beauty campaigns.

**Fingerprint** `density=sparse; composition=poster; surface=full-bleed; type=high-contrast-display; nav=top-bar; accent=none; motion=choreographed; imagery=photography; radius=square; data=none; tone=confident-editorial`

| Layer | Decision |
|---|---|
| Composition | Full-bleed campaign images with shoppable hotspots; collection grid of tall 4:5 images with name and price below; product page image stack scrolling beside a sticky purchase column. |
| Type | High-contrast display serif or a strong grotesk used large (Fraunces, Bodoni Moda, or the brand face), body in a quiet sans (Manrope or Karla 15px). Arabic: Reem Kufi or Noto Kufi Arabic display. |
| Color | canvas #FFFFFF · surface #F3F2EF · ink #0F0F0F · muted #5A5A5A · line #E2E0DC · action #111111 · on-action #FFFFFF. Color comes from photographs; UI stays black and white. |
| Space and shape | No gutters on campaign; 2px gutters in grids; square corners; 52px black buttons. |
| Icons and imagery | Model photography with diverse bodies, detail close-ups, short video; fabric swatches as real photos. |
| Components | Size selector with fit guidance and model measurements; "Complete the look"; wishlist. |
| States | Size sold out shows notify; low stock stated plainly; final sale noted before cart. |
| Responsive | Phone: full-width images in sequence, sticky size/add bar; desktop split. |
| Motion | Image transitions and campaign sequencing choreographed (fades, 400ms); controls immediate. Reduced motion: no autoplay video. |
| Accessibility | Alt text describes garment, fit, and model; captions on video; no text on images without contrast. |
| Build | Responsive images with art direction; lazy-load below fold. |
| AI mutation | Beige "premium" gradients, rounded cards, discount banners, emoji. |
| Fails when | Technical products or dense catalogs of basics. |

### Atelier Quiet
**Thesis.** Luxury is restraint and service: slow, precise presentation of objects with material and craft explained, and a human available. Character: hushed, exacting. Audience: luxury buyers. **Fit:** luxury goods, jewelry, watches, high-end furniture.

**Fingerprint** `density=sparse; composition=split-pane; surface=paper-sheet; type=editorial-serif; nav=contextual; accent=none; motion=restrained-causal; imagery=product-object; radius=square; data=light; tone=hushed`

| Layer | Decision |
|---|---|
| Composition | Product page: object image sticky on one side, text column on the other with name, material, craftsmanship notes, price, "Reserve" or "Book an appointment". Navigation minimal, revealed on scroll up. |
| Type | Refined serif (Cormorant Garamond for display, EB Garamond or Libre Caslon for text), sans for labels (Karla). Arabic: Amiri display. |
| Color | canvas #F3EFE8 · surface #FAF8F4 · ink #1E1B17 · muted #625C53 · line #D9D1C4 · action #1E1B17 · on-action #FAF8F4. |
| Space and shape | Very generous margins (the object needs space; the space is the job), square edges, hairline rules. |
| Icons and imagery | Studio product photography with material macro shots; no lifestyle clutter. |
| Components | Appointment booking, concierge chat with a named person, engraving options. |
| States | Made to order with lead time; boutique availability. |
| Responsive | Phone: image first, then text; appointment CTA sticky. |
| Motion | Slow image crossfades (600ms); nothing bounces. Reduced motion: no crossfade. |
| Accessibility | Contrast maintained despite light palette; zoom on images. |
| Build | Few pages, high image quality with modern formats. |
| AI mutation | Discount banners, gold gradients, glassmorphism, countdowns. |
| Fails when | Value retail, groceries, anything bought on speed. |

### Market Hall
**Thesis.** A marketplace is a hall of stalls: many sellers, honest listings, trust visible at the row, and search as the main street. Character: bustling, trustworthy. Audience: buyers and sellers in peer marketplaces. **Fit:** marketplaces, resale, classifieds, rental listings.

**Fingerprint** `density=dense; composition=catalog-grid; surface=flat-bordered; type=humanist-sans; nav=persistent-sidebar; accent=medium; motion=none; imagery=user-content; radius=medium; data=moderate; tone=bustling-trustworthy`

| Layer | Decision |
|---|---|
| Composition | Search top; filters sidebar; grid of listings with photo, price, condition, location, seller rating; listing detail shows seller panel and protection terms beside photos. |
| Type | Humanist sans (Source Sans 3 or Noto Sans 14–15px). Arabic: Noto Sans Arabic; prices formatted per locale. |
| Color | canvas #F5F6F4 · surface #FFFFFF · ink #1A1C1B · muted #545957 · line #D5D9D6 · action #0F6B4F · on-action #FFFFFF. Condition labels as text chips; verified seller a small labelled mark. |
| Space and shape | 8px radius photos, 12px gaps; 1px bordered listing tiles. |
| Icons and imagery | Seller photos (with guidance for good photos in listing flow). |
| Components | Make offer, message seller, save search with alerts; listing creation with photo checklist. |
| States | Sold listings stay visible marked Sold for price history; offer pending; dispute steps. |
| Responsive | Phone: 2-column grid, filters as sheet, sticky Message/Buy bar on detail. |
| Motion | None beyond native. |
| Accessibility | Alt text prompts in listing creation; filters keyboard operable. |
| Build | Listing schema with condition enum; image processing pipeline for consistent crops. |
| AI mutation | Uniform glossy cards hiding condition, trust badges without meaning. |
| Fails when | Single-brand stores; luxury. |

### Pantry List
**Thesis.** Grocery shopping is a list, not a showroom: fast rows with photos, quantity steppers right there, and the basket always visible. Character: practical, friendly. Audience: weekly grocery shoppers. **Fit:** grocery delivery, pharmacy basics, quick commerce.

**Fingerprint** `density=dense; composition=index; surface=tonal-blocks; type=rounded-sans; nav=tab-bar; accent=multi-role; motion=physical-direct; imagery=product-object; radius=high; data=light; tone=practical-friendly`

| Layer | Decision |
|---|---|
| Composition | Tabs: Shop, Search, Orders, Account. Shop starts with "Buy again" then aisles; each item row: photo, name, size, unit price, price, stepper. Basket bar pinned with total and slot. |
| Type | Rounded sans (Nunito Sans or Rubik 15px), prices bold tabular. Arabic: Rubik supports Arabic; or Tajawal. |
| Color | canvas #F4F7EF · surface #FFFFFF · ink #1C2418 · muted #50604A · line #D2DCC8 · action #2F6B1F · on-action #FFFFFF. Aisle colors as tonal section backgrounds; deals in a single amber role with text. |
| Space and shape | 12px radius tonal sections; 64px item rows; steppers 36px. |
| Icons and imagery | Packshots on white; produce photos real. |
| Components | Stepper inline; substitution preference per item; slot picker as a day/time grid with availability. |
| States | Out of stock suggests substitutes; slot full; minimum order progress in basket bar; substitution made shown on delivery. |
| Responsive | Phone first; desktop multi-column aisles with basket sidebar. |
| Motion | Item flies a small thumbnail to basket (250ms) on first add only; stepper updates instantly. Reduced motion: count change only. |
| Accessibility | Steppers with labels ("Increase bananas quantity"); prices read with units. |
| Build | Optimistic basket updates with reconciliation; unit price computed consistently. |
| AI mutation | Hero banners, big cards with tiny prices, quantity only on detail page. |
| Fails when | Considered or luxury purchases. |

### Maker's Bench
**Thesis.** Handmade goods sell through their maker: the shop reads like a workshop journal where process photos and finished pieces sit together. Character: grounded, crafted. Audience: buyers seeking handmade and small-batch goods. **Fit:** handmade shops, craft studios, small-batch producers.

**Fingerprint** `density=medium; composition=stream; surface=material-texture; type=slab; nav=top-bar; accent=low; motion=none; imagery=photography; radius=low; data=light; tone=grounded-crafted`

| Layer | Decision |
|---|---|
| Composition | Home: a stream of recent pieces and process notes in one column; product page: photos including in-progress shots, materials, dimensions, care, lead time; maker page. |
| Type | Slab serif for headings (Zilla Slab or Bitter), humanist body (Source Sans 3 16px). Arabic: Noto Naskh Arabic. |
| Color | canvas #EFE7DA · surface #F8F3EA · ink #2B231A · muted #62574A · line #CDBFA8 · action #6E3B1E · on-action #FFFFFF. |
| Space and shape | Subtle paper grain on canvas only (≤ 4% opacity); 3px radius; photos square-cornered. |
| Icons and imagery | The maker's own photography of materials, hands, and pieces; no stock textures. |
| Components | Commission request form; "Only one" labels for unique items; ask the maker. |
| States | Sold unique pieces remain as portfolio with "Commission similar"; made-to-order lead time before purchase. |
| Responsive | Phone single column; desktop two-column product page. |
| Motion | None. |
| Accessibility | Texture never under body text contrast < 7:1; alt text describes material and scale. |
| Build | Texture as a tiny tiling image or CSS noise; product dimensions structured. |
| AI mutation | Startup landing template, gradient CTA, three icon feature cards ("Handmade", "Quality", "Shipping"). |
| Fails when | Large catalogs; commodity goods. |

### Collector's Cabinet
**Thesis.** Collectibles and auctions are about provenance and condition; each object gets a catalog entry like an auction house, with bidding as a precise instrument. Character: connoisseur, exact. Audience: collectors and bidders. **Fit:** auctions, collectibles, vintage, art sales, trading cards.

**Fingerprint** `density=dense; composition=object-sheet; surface=layered-panels; type=serif-sans-duet; nav=persistent-sidebar; accent=medium; motion=restrained-causal; imagery=product-object; radius=low; data=strong; tone=connoisseur`

| Layer | Decision |
|---|---|
| Composition | Lot page: zoomable images, catalog entry (title, date, maker, dimensions, provenance, condition report), estimate, bidding panel with history; sale sidebar with lots list. |
| Type | Serif for catalog titles (Libre Caslon or Cormorant), sans for data (IBM Plex Sans with tabular figures). |
| Color | canvas #EDEBE6 · surface #FFFFFF · ink #1B1A18 · muted #58554F · line #D0CCC3 · action #1F3B57 · on-action #FFFFFF. Outbid state amber, winning green text, both labelled. |
| Space and shape | Layered panels by tone; 3px radius; bid panel prominent but not flashy. |
| Icons and imagery | High-resolution object photography with condition close-ups and scale. |
| Components | Bid with increment preview and confirmation; max bid (proxy); watch lot; condition report download. |
| States | Ending soon shows exact time with time zone; outbid notification; reserve not met; sold price after close. |
| Responsive | Phone: images, estimate, bid panel sticky; catalog entry collapsible sections. |
| Motion | New bid updates price with a 300ms highlight; no ticking animations. Reduced motion: highlight only. |
| Accessibility | Time remaining in text; bid confirmation announced. |
| Build | Server time authoritative; bid increments as data. |
| AI mutation | Flashing countdowns, confetti on winning, glossy cards without provenance. |
| Fails when | Commodity retail. |

### Refill Calendar
**Thesis.** A subscription is a relationship with the next delivery; account home is a calendar of upcoming boxes with skip, swap, and pause one tap away, and cancellation honest. Character: reliable, warm. Audience: subscribers. **Fit:** subscription boxes, meal kits, replenishment, memberships.

**Fingerprint** `density=medium; composition=timeline; surface=tonal-blocks; type=humanist-sans; nav=tab-bar; accent=medium; motion=restrained-causal; imagery=product-object; radius=medium; data=light; tone=reliable-warm`

| Layer | Decision |
|---|---|
| Composition | Home: next delivery block (date, cutoff, contents, total) with Skip and Edit; then a timeline of the next 4 deliveries; plan and billing tabs. |
| Type | Humanist sans (Figtree or Source Sans 3 16px). Arabic: Noto Sans Arabic. |
| Color | canvas #FBF6F1 · surface #FFFFFF · ink #27221E · muted #625A53 · line #E6DCD2 · action #7A2E4A · on-action #FFFFFF. |
| Space and shape | 10px radius tonal blocks per delivery; 8px base. |
| Icons and imagery | Photos of the actual items in the box. |
| Components | Skip, swap items, pause for N weeks, change frequency, cancel with the end date and what happens next. |
| States | Cutoff passed locks edits with explanation; payment failed before cutoff with fix; paused shows resume date. |
| Responsive | Phone first; desktop timeline horizontal. |
| Motion | Skipped delivery collapses in the timeline (200ms). Reduced motion: instant. |
| Accessibility | Dates and cutoffs in full text. |
| Build | Cutoff logic server-side; timeline generated from schedule. |
| AI mutation | Three glowing pricing cards, hidden cancel, guilt copy. |
| Fails when | One-off purchases. |

### Trade Counter
**Thesis.** Business buyers work from part numbers: the storefront is a fast order sheet with account prices, stock by warehouse, and approvals. Character: businesslike, efficient. Audience: procurement and trade buyers. **Fit:** B2B commerce, wholesale, distributors, trade supply.

**Fingerprint** `density=dense; composition=ledger; surface=flat-ruled; type=technical-sans; nav=persistent-sidebar; accent=low; motion=none; imagery=none; radius=square; data=strong; tone=businesslike`

| Layer | Decision |
|---|---|
| Composition | Sidebar: Quick order, Catalog, Quotes, Orders, Invoices, Users. Quick order is a table: SKU input, description, account price, stock by location, quantity, line total; paste or CSV upload. |
| Type | Technical sans (IBM Plex Sans 13–14px), mono for SKUs. |
| Color | canvas #F2F3F5 · surface #FFFFFF · ink #121417 · muted #4F5561 · line #CDD1D8 · action #0A4D8C · on-action #FFFFFF. |
| Space and shape | 36px rows; square corners; ruled tables. |
| Icons and imagery | None in ordering; small product thumbnails optional in catalog. |
| Components | Request quote, submit for approval, reorder from history, save lists. |
| States | Pending approval with approver name; credit limit warnings before submit; backorder lines split with dates. |
| Responsive | Desktop first; phone for reorder and order status. |
| Motion | None. |
| Accessibility | Keyboard entry across SKU fields; tables with headers. |
| Build | Account-specific pricing from ERP; SKU validation inline. |
| AI mutation | Consumer hero banners, image-heavy cards, hidden account pricing. |
| Fails when | Consumer shoppers. |

### Corner Shop
**Thesis.** A local shop online should feel like its front window: one page that says what it sells today, when it is open, and how to pick up, in the shop's own color. Character: neighborly, direct. Audience: local customers. **Fit:** local shops, bakeries, florists, small food businesses with pickup or local delivery.

**Fingerprint** `density=medium; composition=document; surface=paper-sheet; type=grotesque; nav=in-content; accent=high; motion=none; imagery=photography; radius=medium; data=light; tone=neighborly`

| Layer | Decision |
|---|---|
| Composition | One long page: today's availability and pickup times first, then sections of products with prices and add buttons, then location, hours, contact. Anchor links for sections. |
| Type | Grotesk with character (Bricolage Grotesque or Work Sans), 32/20/16px. Arabic: Readex Pro or Noto Kufi Arabic headings. |
| Color | canvas #FFFDF7 · surface #FFFFFF · ink #1F1C17 · muted #5D574C · line #E4DDCC · action #B8321F · on-action #FFFFFF. The accent is the shop's own color, used generously on headings and buttons. |
| Space and shape | 8px radius; paper-white page; generous section spacing. |
| Icons and imagery | Photos taken in the shop of real products and the storefront. |
| Components | Add to order, pickup time slot, pay or pay at pickup. |
| States | Sold out today with tomorrow's availability; closed with next opening; order ready notification. |
| Responsive | Phone first; single column on all sizes, max width 720px. |
| Motion | None. |
| Accessibility | Hours as text, map with address text. |
| Build | Static page with simple ordering backend; availability editable by the owner from a phone. |
| AI mutation | Startup hero with gradient, stock photos, "Experience the taste of tradition". |
| Fails when | Large catalogs or national shipping. |

## Confusable pairs

- **Spec Counter vs Collector's Cabinet:** both object sheets. Spec Counter compares interchangeable products; the Cabinet documents unique objects.
- **Lookbook vs Atelier Quiet:** both image-led. Lookbook moves through looks on bodies; Atelier slows down on one object and offers service.
- **Maker's Bench vs Corner Shop:** both small sellers. The Bench tells a maker's process to distant buyers; the Shop tells neighbors what is available today.
