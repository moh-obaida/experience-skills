# Niche Atlas: Physical-World Operations

Products that coordinate people and things in physical space: bookings for real sessions, tickets
for real seats, parcels on real trucks, stock on real shelves, and payments at real counters. Their
interfaces are used standing up, with gloves, in sunlight, with a queue waiting. Generated defaults
bring SaaS dashboards and marketing heroes into places that need big targets, unambiguous states,
and offline tolerance. Load with `niche-atlas-index.md`; compare three systems with
`design-system-selector.md`.

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
| Space and shape | 4px radius; rows 64px; paper surface. |
| Icons and imagery | Photography from the studio: hands, materials, finished pieces. |
| Components | Seat count selector, deposit or full payment, add to calendar, gift a session. |
| States | Few seats left stated as number; full with waitlist; cancelled with refund info. |
| Responsive | Phone first; single column. |
| Motion | None. |
| Accessibility | Dates and times in full text; accessibility info for venue. |
| Build | Owner edits sessions from phone; capacity enforced server-side. |
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
| Space and shape | 4px radius; 40px rows. |
| Icons and imagery | Map with muted base. |
| Components | Drag job to technician timeline; notify customer; reassign. |
| States | Late technician flagged with ETA; job overrun; technician offline. |
| Responsive | Desktop; technician app separate (phone). |
| Motion | Technician markers move smoothly with updates. Reduced motion: position jumps. |
| Accessibility | List and timeline complete without map. |
| Build | Time windows per job; routing API. |
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
| Space and shape | Square; full-bleed poster. |
| Icons and imagery | Performer and event photography. |
| Components | Tier selection with total price; queue with position; tickets to wallet; transfer. |
| States | On sale soon with time; queue; sold out with resale; postponed. |
| Responsive | Phone first. |
| Motion | Queue position updates. Reduced motion: text only. |
| Accessibility | Accessible seating info; captioned videos. |
| Build | Fees included in displayed prices. |
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
| Space and shape | Seats as rounded squares 16px; 8px radius panels. |
| Icons and imagery | The seat plan. |
| Components | Best available, choose seats, accessible seats filter, view from seat. |
| States | Seat taken during selection; hold timer in text; companion seats. |
| Responsive | Phone: section list then seat zoom; desktop plan. |
| Motion | Zoom into section. Reduced motion: jump. |
| Accessibility | List alternative for seat selection. |
| Build | Seat holds server-side. |
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
| Space and shape | 32px rows; square; ruled. |
| Icons and imagery | None. |
| Components | Bulk update, exception resolution with reason, export, notify customer. |
| States | Exception, delayed, customs hold, delivered with proof. |
| Responsive | Desktop; phone exception queue. |
| Motion | None. |
| Accessibility | Table semantics. |
| Build | Event log append-only. |
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
| Space and shape | 16px radius blocks. |
| Icons and imagery | Map with driver position near delivery only. |
| Components | Change delivery, contact support, proof of delivery photo. |
| States | Delayed with reason; failed attempt with next steps; delivered with photo. |
| Responsive | Phone first. |
| Motion | Driver marker updates smoothly. Reduced motion: position updates. |
| Accessibility | ETA in text. |
| Build | Public link with minimal data. |
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
| Space and shape | 3px outlines; square; buttons 64px. |
| Icons and imagery | Product images for verification. |
| Components | Scan, short pick, damaged, skip with reason. |
| States | Wrong item scanned; location empty; batch complete. |
| Responsive | Handheld portrait 360–480px. |
| Motion | None; feedback via color, sound, vibration. |
| Accessibility | High contrast for sunlight and cold rooms; glove targets. |
| Build | Offline queue; scanner input as keyboard wedge. |
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
| Space and shape | 36px rows; 4px radius. |
| Icons and imagery | Small product thumbnails. |
| Components | Adjust stock with reason, create PO from low stock, transfer. |
| States | Negative stock flagged; pending receipt; count in progress locks item. |
| Responsive | Desktop; phone lookup. |
| Motion | None. |
| Accessibility | Table semantics. |
| Build | Movements ledger as source of truth. |
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
| Space and shape | Keys 80px, 8px radius, 8px gaps. |
| Icons and imagery | None (or small product photos optional). |
| Components | Modifiers sheet, discount with permission, split bill, refund with manager approval. |
| States | Offline payments queued; declined card; void with reason. |
| Responsive | Tablet landscape; phone for mobile checkout. |
| Motion | Key press feedback immediate (50ms); line added highlight. Reduced motion: none. |
| Accessibility | Large keys; high contrast mode. |
| Build | Offline-first; payment terminal integration. |
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
| Space and shape | Tonal blocks; 4px radius. |
| Icons and imagery | Maps with route lines. |
| Components | Acknowledge incident, contact vehicle, reroute. |
| States | Vehicle off route; communication lost; service gap. |
| Responsive | Wall displays and desktop workstations. |
| Motion | Vehicle positions update smoothly; new incident highlight. Reduced motion: jumps. |
| Accessibility | Status not color-only; readable at distance. |
| Build | Real-time feeds with staleness indicators. |
| AI mutation | Glowing neon maps, 3D cities. |
| Fails when | Customer-facing. |

## Confusable pairs

- **Service Route vs Fleet Wall:** both maps of vehicles. Service Route assigns jobs to technicians; Fleet Wall monitors a network continuously.
- **Box Office vs Seat Plan:** both ticketing. Box Office sells the event; Seat Plan allocates specific seats.
- **Manifest vs Stock Room:** both dense operations ledgers. Manifest follows goods moving; Stock Room counts goods at rest.
