# Niche Atlas: Physical-World Operations

Products that coordinate people and things in physical space: bookings for real sessions, tickets
for real seats, parcels on real trucks, stock on real shelves, and payments at real counters. Their
interfaces are used standing up, with gloves, in sunlight, with a queue waiting. Generated defaults
bring SaaS dashboards and marketing heroes into places that need big targets, unambiguous states,
and offline tolerance. Load a profile only when its realities affect a decision; compare systems only when the direction is open.

## Product realities

### Booking systems, local services, workshops
- **Reality:** Small businesses sell limited sessions or appointments (classes, workshops, repairs); capacity and time are the product.
- **Jobs:** See what's on and what's left, book seats, pay or deposit, reschedule, get reminders; for owners, manage sessions and attendees.
- **Density:** Medium.
- **Surfaces:** Session list or calendar, session detail, booking form, confirmation, attendee list, owner schedule.
- **States:** Few seats left, full with waitlist, cancelled by organizer, deposit paid, no-show.
- **Interaction:** Phone for customers, tablet or phone for owners.
- **Trust:** Moderate.
- **Generated-UI failures:** Purple SaaS gradients on a pottery studio, stock photos instead of the studio's work, dashboards for a one-person business.

### Events and ticketing
- **Reality:** Anticipation and scarcity drive ticket sales; seating and fairness matter; entry must be fast.
- **Jobs:** Discover an event, choose seats or tier, buy, transfer tickets, enter the venue; organizers sell, check in, and report.
- **Density:** Sparse event pages, dense seat maps and organizer tools.
- **Surfaces:** Event page, seat map, checkout, tickets wallet, check-in scanner, organizer dashboard.
- **States:** On sale soon, queue, sold out, resale, cancelled, postponed, scanned.
- **Interaction:** Phone, high traffic spikes, scanning.
- **Trust:** High; fees and fraud.
- **Generated-UI failures:** Hidden fees, fake countdowns, seat maps without accessibility options.

### Logistics, delivery, transportation, fleet
- **Reality:** Goods and vehicles move through stages; exceptions (delay, damage, missed delivery) are the real work.
- **Jobs:** Track shipments, plan routes, dispatch drivers, handle exceptions, prove delivery, communicate ETA.
- **Density:** Dense for operators; sparse for recipients.
- **Surfaces:** Shipment list, shipment detail with events, map, dispatch board, driver app, proof of delivery, customer tracking page.
- **States:** In transit, out for delivery, delayed, exception, delivered, failed attempt, returned.
- **Interaction:** Desktop dispatch, handheld drivers, public tracking links.
- **Trust:** High.
- **Generated-UI failures:** Animated trucks on maps, vague ETAs, dashboards of vanity counts.

### Warehouse and inventory
- **Reality:** Workers pick, pack, receive, and count stock using handhelds; managers track levels and reorder.
- **Jobs:** Pick an order, receive a delivery, count stock, move stock, find an item's location, reorder.
- **Density:** Sparse on handhelds (one task), dense in back office.
- **Surfaces:** Pick task, scan confirmation, bin lookup, receiving, cycle count, inventory list, purchase orders.
- **States:** Short pick, wrong item scanned, location empty, damaged, pending putaway, below reorder point.
- **Interaction:** Barcode scanners, gloves, noise, one hand.
- **Trust:** High for accuracy.
- **Generated-UI failures:** Small targets, soft low-contrast colors, confirmation modals slowing each scan.

### Point of sale
- **Reality:** Staff ring up items quickly with customers waiting; errors and slowness are visible.
- **Jobs:** Add items, apply discounts, take payment, split bills, refund, print or send receipts, close the drawer.
- **Density:** Medium.
- **Surfaces:** Item grid, ticket, payment, receipts, refunds, shift close, inventory lookup.
- **States:** Offline payments queued, card declined, partial payment, void, refund approval.
- **Interaction:** Touch on tablets, fast repeated taps.
- **Trust:** High; money.
- **Generated-UI failures:** Consumer-app aesthetics, small targets, animations delaying taps.

## Systems

### Studio Timetable
**Thesis.** A workshop or local service sells real sessions in a real place: the timetable shows what's on and seats left, with the studio's own photography and material character. Character: hands-on, welcoming. Audience: customers of studios, classes, and local services. **Fit:** workshops, classes, studios, local service booking.

**Fingerprint** `density=medium; composition=index; surface=paper-sheet; type=slab; nav=top-bar; accent=medium; motion=none; imagery=photography; radius=low; data=light; tone=hands-on`

| Layer | Decision |
|---|---|
| Composition | Timetable list grouped by week: session name, date, time, length, price, seats left, Book; session page with what you'll make, what's included, photos from past sessions, location. |
| Type | Slab serif headings (Roboto Slab or Zilla Slab), humanist body (Source Sans 3 17px). Arabic: Noto Kufi Arabic headings, Noto Sans Arabic body. |
| Color | canvas #F4EFE6 · surface #FFFDF9 · ink #26211B · muted #5E574D · line #D9CFBF · action #8A3B1B · on-action #FFFFFF. Studio's own color can replace the accent after contrast check. |
| Space and shape | 4px radius; rows 64px; paper surface. Stroke and lift: rows are ruled by one 1px line on a paper surface; a full session dims and gains a label, not a border; the Book button owns the only filled stroke; no shadows. |
| Icons and imagery | Photography from the studio: hands, materials, finished pieces. |
| Components | Seat count selector, deposit or full payment, add to calendar, gift a session. Shown when: the seat count shows as a number only when few remain, the waitlist only on full sessions, and refund terms on cancelled ones; the deposit rule sits beside the price at all times because it is a payment term. Copy: sessions say what you will make, and prices state what is included. |
| States | Few seats left stated as number; full with waitlist; cancelled with refund info. A failed payment keeps the seats held for a stated time; a studio with no sessions says when the next ones are published. |
| Responsive | Phone first; single column. |
| Motion | None. |
| Accessibility | Dates and times in full text; accessibility info for venue. |
| Build | Owner edits sessions from phone; capacity enforced server-side. Accept: capture the timetable, a full session, a cancelled session, and a gift flow at 390 and a laptop, checking row rules are even and the photo has a complete edge. |
| AI mutation | Purple glow SaaS hero, stock textures, icon feature cards. |
| Fails when | Large venues with seat maps (use Seat Plan). |

### Service Route
**Thesis.** Field service is dispatch on a map: jobs, technicians, and time windows in one view, with exceptions escalated before customers call. Character: steady, practical. Audience: dispatchers and field-service managers. **Fit:** field service, home services, delivery dispatch.

**Fingerprint** `density=dense; composition=map-led; surface=flat-bordered; type=technical-sans; nav=rail; accent=multi-role; motion=restrained-causal; imagery=cartography; radius=low; data=strong; tone=dispatch-steady`

| Layer | Decision |
|---|---|
| Composition | Map center with technician positions and job pins; left list of unassigned jobs with windows; bottom timeline per technician; detail drawer. |
| Type | Technical sans (IBM Plex Sans 13–14px). Arabic: IBM Plex Sans Arabic. |
| Color | canvas #F1F3F2 · surface #FFFFFF · ink #151918 · muted #4E5653 · line #C9D0CD · action #1C5A70 · on-action #FFFFFF. Job states: unassigned, scheduled, en route, on site, done, late, each with glyph and label. |
| Space and shape | 4px radius; 40px rows. Stroke and lift: panels share one 1px line; the selected job highlights on the map pin and in the list by one shared color, so it has one mark per surface; the muted base map carries no borders; shadows only on the drawer. |
| Icons and imagery | Map with muted base. |
| Components | Drag job to technician timeline; notify customer; reassign. Shown when: the late flag appears only past a stated threshold, the offline mark only for unreachable technicians, and the customer-notify action only after a time change; no decorative traffic overlays. Copy: flags state the job and the cause ("Running 25 min late, previous job overran"). |
| States | Late technician flagged with ETA; job overrun; technician offline. An unassigned queue of zero says all jobs are assigned; a failed reassign keeps the job in place and says why. |
| Responsive | Desktop; technician app separate (phone). |
| Motion | Technician markers move smoothly with updates. Reduced motion: position jumps. |
| Accessibility | List and timeline complete without map. |
| Build | Time windows per job; routing API. Accept: capture the map with a late technician, an overrun, an offline technician, and a drag in progress at 1440 and a tablet, checking pins and timeline bars are not clipped at the panel edges. |
| AI mutation | Animated trucks, neon routes, KPI cards. |
| Fails when | Customer-facing tracking (use Parcel Track). |

### Box Office
**Thesis.** An event page is a poster: the name, date, place, and the performers' imagery, with price including fees and the path to tickets. Character: anticipatory, bold. Audience: people buying tickets. **Fit:** concerts, theater, festivals, sports events.

**Fingerprint** `density=medium; composition=poster; surface=full-bleed; type=condensed-display; nav=top-bar; accent=high; motion=restrained-causal; imagery=photography; radius=square; data=light; tone=anticipatory`

| Layer | Decision |
|---|---|
| Composition | Poster header with event name, date, venue, from-price including fees; ticket tiers list; performers and practical info below; venue accessibility. |
| Type | Condensed display (Big Shoulders Display or Oswald), body sans (Barlow 16px). Arabic: Lalezar or Cairo display. |
| Color | canvas #FFFFFF · surface #F4F2EE · ink #121212 · muted #575757 · line #DDDAD4 · action #B5121B · on-action #FFFFFF. Event artwork supplies color; UI stays neutral around it. |
| Space and shape | Square; full-bleed poster. Stroke and lift: the poster is full-bleed with no frame; tiers are separated by one 1px rule, and the selected tier changes fill and shows one check; nothing has a shadow except the sticky total bar. |
| Icons and imagery | Performer and event photography. |
| Components | Tier selection with total price; queue with position; tickets to wallet; transfer. Shown when: the queue position appears only during a queue, resale only on sold-out events, and the postponed notice with the new date or refund rights; the price always includes fees. Copy: prices show the total including fees, and dates carry time zone and doors time. |
| States | On sale soon with time; queue; sold out with resale; postponed. A failed payment keeps the tickets held for the stated time; an event not yet on sale shows the sale date and a reminder. |
| Responsive | Phone first. |
| Motion | Queue position updates. Reduced motion: text only. |
| Accessibility | Accessible seating info; captioned videos. |
| Build | Fees included in displayed prices. Accept: capture the poster header, tier selection, a queue, a sold-out event, and a postponed event at 390 and a laptop, checking the from-price matches the checkout total and the poster crop keeps the name. |
| AI mutation | Fake countdowns, hidden fees, glass cards. |
| Fails when | Organizer tools. |

### Seat Plan
**Thesis.** Choosing a seat is spatial and fair: a clear venue plan, price levels by legend, best available by default, and accessible seats first-class. Character: clear, fair. Audience: ticket buyers and box-office staff. **Fit:** seated events, theaters, stadiums, transport seat selection.

**Fingerprint** `density=dense; composition=spatial-scene; surface=flat-bordered; type=grotesque; nav=stepwise; accent=multi-role; motion=physical-direct; imagery=diagram; radius=medium; data=moderate; tone=clear-fair`

| Layer | Decision |
|---|---|
| Composition | Venue plan with sections; zoom to seats; legend of price levels; selection summary panel with total; step: seats, tickets, pay. |
| Type | Grotesk (Hanken Grotesk 14px). |
| Color | canvas #F6F6F4 · surface #FFFFFF · ink #161615 · muted #555552 · line #D4D4CF · action #1F4F7A · on-action #FFFFFF. Price levels as four hues with pattern and legend; unavailable seats hatched. |
| Space and shape | Seats as rounded squares 16px; 8px radius panels. Stroke and lift: seats are rounded squares with no border; the selected seat shows one outline and a number, the taken seat a muted fill and an X, so the two states do not share a mark; panels carry one 1px line. |
| Icons and imagery | The seat plan. |
| Components | Best available, choose seats, accessible seats filter, view from seat. Shown when: the hold timer shows after the first seat is chosen, the view-from-seat only on request, and the companion-seat note only when relevant; accessible seats are never hidden by a filter. Copy: price levels name the price and the legend letter, and a taken-seat message offers the nearest alternatives. |
| States | Seat taken during selection; hold timer in text; companion seats. A seat taken during selection says so and keeps the rest of the choice; an expired hold returns to the plan with the seats released. |
| Responsive | Phone: section list then seat zoom; desktop plan. |
| Motion | Zoom into section. Reduced motion: jump. |
| Accessibility | List alternative for seat selection. |
| Build | Seat holds server-side. Accept: capture the full plan, a zoomed section, a taken seat, an accessible filter, and an expired hold at 390 and a laptop, checking seat outlines are complete and tappable at the smallest zoom. |
| AI mutation | 3D stadium flythroughs, neon seats. |
| Fails when | General admission. |

### Manifest
**Thesis.** Logistics operations are manifests: shipments as exact rows with references, events, and exceptions, readable in bulk and filterable to what needs action. Character: exacting, industrial. Audience: logistics operators. **Fit:** shipping, freight, 3PL, delivery operations.

**Fingerprint** `density=dense; composition=ledger; surface=flat-ruled; type=mono-led; nav=persistent-sidebar; accent=multi-role; motion=none; imagery=none; radius=square; data=strong; tone=exacting-industrial`

| Layer | Decision |
|---|---|
| Composition | Sidebar: Shipments, Exceptions, Carriers, Reports. Shipment ledger: reference, origin, destination, status, ETA, last event; detail with event log. |
| Type | Mono for references (IBM Plex Mono 13px), sans for text (IBM Plex Sans). |
| Color | canvas #F3F3F1 · surface #FFFFFF · ink #131312 · muted #52524F · line #CDCDC8 · action #1E4F63 · on-action #FFFFFF. Exception amber and red with labels. |
| Space and shape | 32px rows; square; ruled. Stroke and lift: the ledger uses a 1px row rule, square corners, and no cell borders; an exception row changes its status label and a left edge once; no shadows. |
| Icons and imagery | None. |
| Components | Bulk update, exception resolution with reason, export, notify customer. Shown when: the proof of delivery appears only on delivered rows, the customs-hold reason only on held rows, and bulk actions only when rows are selected; no summary tiles above the ledger. Copy: statuses use the carrier's terms with the time, and exceptions name the cause and the next action. |
| States | Exception, delayed, customs hold, delivered with proof. An empty exceptions list says no exceptions and the time it was last checked; a failed bulk update lists the rows that did not change. |
| Responsive | Desktop; phone exception queue. |
| Motion | None. |
| Accessibility | Table semantics. |
| Build | Event log append-only. Accept: capture a ledger, a filtered exceptions view, a bulk update, and a shipment detail at 1440 and a tablet, checking row rules and status columns align. |
| AI mutation | Animated globes and trucks, KPI tiles. |
| Fails when | Consumer tracking. |

### Parcel Track
**Thesis.** A recipient wants one answer: when will it arrive? The tracking page is a short timeline with the ETA large and the next step clear. Character: reassuring, simple. Audience: parcel recipients. **Fit:** consumer delivery tracking, order status pages.

**Fingerprint** `density=sparse; composition=timeline; surface=tonal-blocks; type=rounded-sans; nav=in-content; accent=medium; motion=physical-direct; imagery=cartography; radius=high; data=light; tone=reassuring`

| Layer | Decision |
|---|---|
| Composition | ETA window large; status step; map when out for delivery; timeline of events; delivery options (leave with neighbor, reschedule). |
| Type | Rounded sans (Nunito Sans 17px). Arabic: Tajawal. |
| Color | canvas #F5F7F6 · surface #FFFFFF · ink #1A1F1D · muted #525C58 · line #D5DDDA · action #1B6254 · on-action #FFFFFF. |
| Space and shape | 16px radius blocks. Stroke and lift: blocks are tonal with no borders; the current timeline step shows one filled node and a line, and past steps a hollow node; the map has no frame; no shadows. |
| Icons and imagery | Map with driver position near delivery only. |
| Components | Change delivery, contact support, proof of delivery photo. Shown when: the map appears only when out for delivery, delivery options only before the attempt, and the proof photo only after delivery; no ads or upsells on the page. Copy: the ETA is a window with the date, and a failed attempt states the next step. |
| States | Delayed with reason; failed attempt with next steps; delivered with photo. A parcel with no scans yet says it has not been picked up and when to check again; an expired link says so and offers the carrier contact. |
| Responsive | Phone first. |
| Motion | Driver marker updates smoothly. Reduced motion: position updates. |
| Accessibility | ETA in text. |
| Build | Public link with minimal data. Accept: capture in transit, out for delivery with the map, a failed attempt, and delivered with a photo at 390 on a slow connection, checking the ETA is the largest element and the timeline line is continuous. |
| AI mutation | Animated truck mascots, vague ETAs. |
| Fails when | Operators. |

### Pick Path
**Thesis.** On a warehouse handheld, one task fills the screen: bin location huge, item image, quantity, scan to confirm, next. Character: unambiguous. Audience: warehouse pickers and receivers. **Fit:** warehouse picking, receiving, cycle counts on handhelds.

**Fingerprint** `density=sparse; composition=stage; surface=heavy-outline; type=condensed-display; nav=stepwise; accent=high; motion=none; imagery=product-object; radius=square; data=moderate; tone=unambiguous`

| Layer | Decision |
|---|---|
| Composition | Stage: location (aisle-bay-shelf) at 48px, item photo and name, quantity to pick; scan field auto-focused; short pick and problem buttons. |
| Type | Condensed display for locations and quantities (Barlow Condensed 700), sans body (Barlow 18px). |
| Color | canvas #FFFFFF · surface #F2F2F2 · ink #000000 · muted #4A4A4A · line #000000 · action #0B3D91 · on-action #FFFFFF. Correct scan full-screen green with check and sound; wrong scan red with message and vibration. |
| Space and shape | 3px outlines; square; buttons 64px. Stroke and lift: every element carries the same 3px outline and square corners; the scan field owns the strongest outline, and an error changes the field's color and message once; no shadows. |
| Icons and imagery | Product images for verification. |
| Components | Scan, short pick, damaged, skip with reason. Shown when: the short-pick button appears next to the quantity, the damaged option only after a scan, and the batch-complete screen only at the end; no menu during a pick. Copy: location and quantity are the only large text, and errors say "Wrong item, scan again". |
| States | Wrong item scanned; location empty; batch complete. A scanner disconnect says so and queues work locally; an empty batch says no tasks and shows the last sync. |
| Responsive | Handheld portrait 360–480px. |
| Motion | None; feedback via color, sound, vibration. |
| Accessibility | High contrast for sunlight and cold rooms; glove targets. |
| Build | Offline queue; scanner input as keyboard wedge. Accept: capture a pick, a wrong scan, an empty location, and batch complete on the handheld in glare and with a glove, checking targets are 64px and the outline is unbroken at the screen edge. |
| AI mutation | Soft pastel cards, small targets, confirmation modals per scan. |
| Fails when | Back-office analysis. |

### Stock Room
**Thesis.** Inventory management is an orderly stock room: every item with its levels by location, movements history, and reorder points, in a list-detail that scales to thousands of SKUs. Character: orderly, dependable. Audience: inventory managers, small retailers. **Fit:** inventory management, stock control, purchasing.

**Fingerprint** `density=dense; composition=master-detail; surface=layered-panels; type=humanist-sans; nav=persistent-sidebar; accent=low; motion=none; imagery=product-object; radius=low; data=strong; tone=orderly`

| Layer | Decision |
|---|---|
| Composition | Sidebar: Items, Locations, Purchase orders, Transfers, Counts. Item list with SKU, name, on hand, available, reorder point; detail with levels by location and movement history. |
| Type | Humanist sans (Source Sans 3 14px), tabular. |
| Color | canvas #EFF1F0 · surface #FFFFFF · ink #161917 · muted #4F5652 · line #C9D0CC · action #2B5D3F · on-action #FFFFFF. Below reorder point amber with text. |
| Space and shape | 36px rows; 4px radius. Stroke and lift: rows have one 1px rule and no card borders; a flagged negative stock shows a label and a left edge once; the open item changes fill; no shadows except menus. |
| Icons and imagery | Small product thumbnails. |
| Components | Adjust stock with reason, create PO from low stock, transfer. Shown when: the pending-receipt note appears only on items with a receipt, the count lock only while a count runs, and the create-PO action only for low stock; no inventory value charts above the list. Copy: reasons for adjustments are required and named, and levels carry units. |
| States | Negative stock flagged; pending receipt; count in progress locks item. A failed adjustment keeps the form and says why; an empty location says no stock and offers a transfer. |
| Responsive | Desktop; phone lookup. |
| Motion | None. |
| Accessibility | Table semantics. |
| Build | Movements ledger as source of truth. Accept: capture the item list with thousands of rows, a negative stock, a count in progress, and a PO from low stock at 1440 and a tablet, checking the virtualized rows keep their rules unbroken. |
| AI mutation | KPI tiles, charts over lists. |
| Fails when | Handheld tasks (Pick Path). |

### Till
**Thesis.** A point of sale is a till: a grid of big item keys beside a live ticket, payment one tap away, nothing animated between taps. Character: quick, friendly. Audience: counter staff. **Fit:** retail POS, cafés, restaurants' counter service.

**Fingerprint** `density=medium; composition=split-pane; surface=tonal-blocks; type=grotesque; nav=tab-bar; accent=multi-role; motion=physical-direct; imagery=none; radius=medium; data=moderate; tone=quick-friendly`

| Layer | Decision |
|---|---|
| Composition | Left: item keys grouped by category tabs; right: ticket with lines, modifiers, totals, Pay. |
| Type | Grotesk (Work Sans 18px on keys). Arabic: IBM Plex Sans Arabic. |
| Color | canvas #EDEEEA · surface #FFFFFF · ink #161714 · muted #52544E · line #CFD1CA · action #1D5B3C · on-action #FFFFFF. Categories as tonal key colors with labels. |
| Space and shape | Keys 80px, 8px radius, 8px gaps. Stroke and lift: keys are 80px with one 1px border and 8px radius; a pressed key shows a quick fill and no animation, and the selected tab changes weight and an underline; no shadows on keys. |
| Icons and imagery | None (or small product photos optional). |
| Components | Modifiers sheet, discount with permission, split bill, refund with manager approval. Shown when: the modifier sheet opens only for items with modifiers, the manager approval only for refunds and large discounts, and the offline notice only while offline; no upsell prompts. Copy: lines name the item and modifiers in the staff's own words, and a void asks for a reason. |
| States | Offline payments queued; declined card; void with reason. A declined card keeps the ticket and offers another method; an empty ticket shows the keys and no totals. |
| Responsive | Tablet landscape; phone for mobile checkout. |
| Motion | Key press feedback immediate (50ms); line added highlight. Reduced motion: none. |
| Accessibility | Large keys; high contrast mode. |
| Build | Offline-first; payment terminal integration. Accept: capture a busy ticket, a modifier sheet, a declined card, and offline mode on a counter tablet in bright light, checking keys never shift layout between taps and the ticket stays visible. |
| AI mutation | Consumer app look, small keys, animations delaying taps. |
| Fails when | Back-office reporting. |

### Fleet Wall
**Thesis.** Transport control rooms need a wall: vehicles, routes, and incidents in one dark, glanceable grid that stays quiet when normal. Character: vigilant, steady. Audience: fleet and transit controllers. **Fit:** fleet management control rooms, transit operations, emergency vehicle dispatch.

**Fingerprint** `density=dense; composition=instrument-grid; surface=tonal-blocks; type=technical-sans; nav=contextual; accent=multi-role; motion=restrained-causal; imagery=cartography; radius=low; data=strong; tone=vigilant-steady`

| Layer | Decision |
|---|---|
| Composition | Grid of map, vehicle status table, incident list, and service adherence; designed for large displays with operator workstation detail. |
| Type | Technical sans (IBM Plex Sans), large sizes for wall (20px minimum). |
| Color | canvas #111416 · surface #1A1F22 · ink #E9EDEF · muted #9EA8AE · line #2B3237 · action #6FC2D0 · on-action #111416. Incident severity with icon and label. |
| Space and shape | Tonal blocks; 4px radius. Stroke and lift: blocks differ by tone with one 1px line; an incident changes its row label and a left edge once; route lines on the map are the only strong strokes; no glow or shadows. |
| Icons and imagery | Maps with route lines. |
| Components | Acknowledge incident, contact vehicle, reroute. Shown when: the off-route mark appears only past a threshold, the communication-lost state only on the vehicle affected, and the service-gap note only for gaps; quiet when normal, with no decorative counters. Copy: incidents name the vehicle, place, and time ("Bus 214, Route 9, 14:02"). |
| States | Vehicle off route; communication lost; service gap. A feed that goes stale shows its age and greys the value; an all-normal wall shows a quiet summary line. |
| Responsive | Wall displays and desktop workstations. |
| Motion | Vehicle positions update smoothly; new incident highlight. Reduced motion: jumps. |
| Accessibility | Status not color-only; readable at distance. |
| Build | Real-time feeds with staleness indicators. Accept: capture normal operation, one incident, a stale feed, and a rerouting action on a large display and a workstation, checking text at the viewing distance is legible and block edges are unbroken. |
| AI mutation | Glowing neon maps, 3D cities. |
| Fails when | Customer-facing. |

## Confusable pairs

- **Service Route vs Fleet Wall:** both maps of vehicles. Service Route assigns jobs to technicians; Fleet Wall monitors a network continuously.
- **Box Office vs Seat Plan:** both ticketing. Box Office sells the event; Seat Plan allocates specific seats.
- **Manifest vs Stock Room:** both dense operations ledgers. Manifest follows goods moving; Stock Room counts goods at rest.
