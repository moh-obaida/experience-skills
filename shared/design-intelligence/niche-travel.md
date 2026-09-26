# Niche Atlas: Travel & Hospitality

Travel products span inspiration, comparison, booking, and the stressful day of travel itself.
The same traveler who browses photos at leisure at home needs a gate number in one glance at an
airport. Generated defaults put a sunset hero and "Discover your next adventure" in front of every
travel task, hide fees until checkout, and turn timetables into cards. Load with
`niche-atlas-index.md`; compare three systems with `design-system-selector.md`.

## Product realities

### Travel booking and airlines
- **Reality:** Flight search is comparison across dates, prices, times, and fare rules; the day of travel is status, documents, and changes.
- **Jobs:** Search flights, compare fares and rules, choose seats and bags, pay, check in, get the boarding pass, see gate and delays, rebook after disruption.
- **Density:** Dense in search, sparse on the travel day.
- **Surfaces:** Search, results, fare comparison, seat map, extras, checkout, manage booking, check-in, boarding pass, flight status, disruption rebooking.
- **States:** Price changed, sold out, delayed, gate changed, cancelled, rebooked, check-in closed, document required.
- **Interaction:** Desktop comparison, phone on the day, offline boarding passes.
- **Trust:** Very high; money and missed flights.
- **Generated-UI failures:** Hero sunsets before the search form, fees added at the last step, flight status as marketing cards.

### Hotels and vacation rentals
- **Reality:** Guests choose by photos, location, price, and reviews; hosts and hotels manage availability and rates.
- **Jobs:** Search a place and dates, compare stays, understand the total price and cancellation policy, book, message the host, check in.
- **Density:** Medium.
- **Surfaces:** Search with map, results, property page, room selection, checkout, trip page, messages, host calendar.
- **States:** Unavailable dates, price with fees, non-refundable, instant book vs request, check-in instructions released.
- **Interaction:** Phone and desktop; map and list.
- **Trust:** High.
- **Generated-UI failures:** Nightly price without fees, rounded glossy cards hiding location, fake urgency ("3 people looking").

### Restaurants and reservations
- **Reality:** Diners pick a place and a time; restaurants manage tables, covers, and waitlists in real time.
- **Jobs:** Find a table for a party size and time, see the menu, book, modify, cancel; for staff, seat guests and manage the floor.
- **Density:** Sparse for diners, dense for staff.
- **Surfaces:** Restaurant page, availability, booking, confirmation; host stand floor plan, waitlist, reservations list.
- **States:** Fully booked, waitlist, deposit required, late, no-show, table turning.
- **Interaction:** Phone for diners; tablet at host stand.
- **Trust:** Moderate.
- **Generated-UI failures:** Menu as image carousel, reservation hidden below a story, host tools styled like consumer apps.

### Tourism, maps, and itineraries
- **Reality:** Travelers plan and navigate places; itineraries change constantly.
- **Jobs:** Discover places, save them, plan days, navigate, keep bookings together, share plans.
- **Density:** Variable.
- **Surfaces:** Map, place page, saved lists, itinerary by day, bookings wallet, guides.
- **States:** Closed today, offline map, booking changed, over-packed day, travel time conflict.
- **Interaction:** Phone on the move, offline.
- **Trust:** Moderate.
- **Generated-UI failures:** Glass cards over maps, itineraries without travel times, generic "hidden gems" copy.

## Systems

### Departure Board
**Thesis.** The travel day is read like a departure board: flight, time, gate, status in large, high-contrast type, updated live, legible at arm's length. Character: punctual, clear. Audience: travelers on the day. **Fit:** airline apps' day-of-travel, flight status, airport information.

**Fingerprint** `density=dense; composition=index; surface=tonal-blocks; type=condensed-display; nav=tab-bar; accent=multi-role; motion=restrained-causal; imagery=none; radius=low; data=strong; tone=punctual`

| Layer | Decision |
|---|---|
| Composition | Trip tab shows the next flight as a board row: flight, scheduled and estimated time, gate, terminal, status; then connections; disruption banner with rebooking action on top when relevant. |
| Type | Condensed display for times, gates, and flight numbers (Barlow Condensed 600 or Oswald), sans for text (Barlow 16px). Arabic: Cairo. |
| Color | canvas #10161C · surface #18212A · ink #F3F5F7 · muted #A5B0BB · line #2A3642 · action #F5C542 · on-action #10161C. Status roles: on time neutral text, delayed amber, cancelled red, boarding green, each labelled. |
| Space and shape | Board rows 56px; tonal bands per flight; 4px radius. |
| Icons and imagery | None; airline logos small. |
| Components | Rebook options with times and fare differences; boarding pass quick access; notifications toggles. |
| States | Gate change highlighted with previous gate struck; delay with new estimate and reason; offline shows last updated time. |
| Responsive | Phone first; watch glance; airport kiosk large format. |
| Motion | Changed values flip with a 200ms highlight. Reduced motion: highlight only. |
| Accessibility | Times read with time zone; status not color-only. |
| Build | Live updates with timestamps; local caching for offline. |
| AI mutation | Hero sunsets, rounded marketing cards, status hidden in details. |
| Fails when | Inspiration and browsing. |

### Fare Matrix
**Thesis.** Flight shopping is comparison: dates by prices in a matrix, fares with their rules side by side, and the total price from the first screen. Character: transparent, brisk. Audience: price-sensitive travelers. **Fit:** flight search, rail fares, bus booking.

**Fingerprint** `density=dense; composition=calendar-grid; surface=flat-bordered; type=grotesque; nav=stepwise; accent=low; motion=none; imagery=none; radius=low; data=strong; tone=transparent-brisk`

| Layer | Decision |
|---|---|
| Composition | Search form compact at top; date-price matrix; result rows with times, duration, stops, total price; fare comparison table (bag, change, refund) before selection; steps: flights, seats, extras, pay. |
| Type | Grotesk (Hanken Grotesk 15px), tabular times and prices. Arabic: IBM Plex Sans Arabic; times per locale. |
| Color | canvas #F5F6F7 · surface #FFFFFF · ink #14171A · muted #51575E · line #D2D7DC · action #0F4C81 · on-action #FFFFFF. Cheapest date marked with text label, not only green. |
| Space and shape | 4px radius; bordered rows 72px. |
| Icons and imagery | None. |
| Components | Flexible dates matrix, filters (stops, times, airlines), fare rules table, price breakdown always visible. |
| States | Price changed on selection explained; sold out; fare expired. |
| Responsive | Phone: matrix as scrollable week strip; result rows stack; fare comparison swipeable. |
| Motion | None. |
| Accessibility | Matrix as table with headers. |
| Build | Total price includes mandatory fees everywhere. |
| AI mutation | Hero before search, fees added at checkout, urgency banners. |
| Fails when | Leisure inspiration. |

### Stay Postcard
**Thesis.** A place to stay is chosen by feeling and verified by facts: generous photos, then the total price, location, and policies, like a postcard with the fine print printed clearly. Character: inviting, honest. Audience: guests booking stays. **Fit:** hotels, vacation rentals, boutique stays.

**Fingerprint** `density=medium; composition=object-sheet; surface=paper-sheet; type=serif-sans-duet; nav=top-bar; accent=medium; motion=restrained-causal; imagery=photography; radius=medium; data=moderate; tone=inviting`

| Layer | Decision |
|---|---|
| Composition | Property page: photo mosaic, name and location, total price for dates with breakdown, cancellation policy in one line, amenities, map, reviews; booking panel sticky. |
| Type | Serif display for names (Fraunces or Young Serif), sans body (Figtree 16px). Arabic: Noto Naskh Arabic names. |
| Color | canvas #FBF8F3 · surface #FFFFFF · ink #201D19 · muted #5C574F · line #E5DED2 · action #1F5B5B · on-action #FFFFFF. |
| Space and shape | 10px radius photos; paper surface. |
| Icons and imagery | Real property photos with room labels; neighborhood photos. |
| Components | Date picker with price per night overlay; guest count; message host; save. |
| States | Unavailable dates; request-to-book pending; policy change notice. |
| Responsive | Phone: photos swipe, facts, sticky price bar. |
| Motion | Photo gallery transitions 200ms. Reduced motion: cut. |
| Accessibility | Photo alt text by room; map with address text. |
| Build | Total price calculation shared between search and page. |
| AI mutation | Nightly price without fees, fake scarcity, glass overlays. |
| Fails when | Business travel with policy constraints (needs Fare Matrix-like comparison). |

### Map and Pins
**Thesis.** Exploring a place is spatial: the map is the canvas, pins carry categories, and saved places turn into plans. Character: exploratory, friendly. Audience: travelers and locals exploring. **Fit:** travel maps, tourism apps, city guides.

**Fingerprint** `density=variable; composition=map-led; surface=layered-panels; type=humanist-sans; nav=contextual; accent=multi-role; motion=physical-direct; imagery=cartography; radius=high; data=moderate; tone=exploratory-friendly`

| Layer | Decision |
|---|---|
| Composition | Full map with search; bottom sheet list synced with map; place page with hours, photos, directions, save. |
| Type | Humanist sans (Source Sans 3 or Figtree 15px). Arabic: Noto Sans Arabic; place names in local script plus transliteration. |
| Color | canvas #F2F4F1 · surface #FFFFFF · ink #1B201C · muted #525A54 · line #CFD6D0 · action #20615A · on-action #FFFFFF. Category pins with glyphs and names. |
| Space and shape | 16px radius sheets; pins 32px. |
| Icons and imagery | Custom map style with muted base; photos of places. |
| Components | Save to list, directions, open now filter, offline download. |
| States | Closed now; offline mode; location permission denied offers search. |
| Responsive | Phone first; desktop split list-map. |
| Motion | Sheet drags physically; map pans to selection. Reduced motion: jump. |
| Accessibility | List view complete; pins announced. |
| Build | Vector tiles; offline packs. |
| AI mutation | Glass cards over maps, neon pins. |
| Fails when | Booking flows. |

### Trip Binder
**Thesis.** An itinerary is a binder of days: each day a sheet with times, places, bookings, and travel between them, printable and offline. Character: organized, reassuring. Audience: travelers planning multi-day trips. **Fit:** itinerary planners, trip organizers, group trip planning.

**Fingerprint** `density=medium; composition=timeline; surface=paper-sheet; type=slab; nav=tab-bar; accent=medium; motion=none; imagery=cartography; radius=low; data=moderate; tone=organized`

| Layer | Decision |
|---|---|
| Composition | Tabs for days; each day a timeline with items (time, place, booking reference) and travel time between; small map per day. |
| Type | Slab serif for day headings (Zilla Slab), sans for items (Source Sans 3). Arabic: Noto Kufi Arabic headings. |
| Color | canvas #F4F1EA · surface #FFFDF8 · ink #22201B · muted #5C574D · line #D9D1C1 · action #3C5A7A · on-action #FFFFFF. |
| Space and shape | 4px radius; paper sheets per day. |
| Icons and imagery | Day maps. |
| Components | Add item, import confirmation emails, share with group, export PDF. |
| States | Travel time conflict flagged; booking changed; offline available. |
| Responsive | Phone first; print styles. |
| Motion | None. |
| Accessibility | Times in text; printable. |
| Build | Offline storage; time zone per item. |
| AI mutation | Inspirational card collage, AI "hidden gems" copy. |
| Fails when | Single bookings. |

### Table Book
**Thesis.** Booking a restaurant should feel like the restaurant: its photography and type set the mood, and the booking panel answers party, date, time in three taps. Character: convivial, direct. Audience: diners. **Fit:** restaurant websites, reservation pages.

**Fingerprint** `density=sparse; composition=split-pane; surface=full-bleed; type=high-contrast-display; nav=in-content; accent=low; motion=restrained-causal; imagery=photography; radius=square; data=light; tone=convivial`

| Layer | Decision |
|---|---|
| Composition | Full-bleed photo of the room or dishes beside a booking panel (party size, date, available times); menu as text below; hours, address, policies. |
| Type | Display face matching the restaurant's identity (e.g., DM Serif Display or Gloock), body sans (Karla 16px). Arabic: Aref Ruqaa display with care, Noto Naskh Arabic body. |
| Color | canvas #FAF7F2 · surface #FFFFFF · ink #1D1A16 · muted #5B554C · line #E3DCD0 · action #7A2A1E · on-action #FFFFFF. |
| Space and shape | Square; photo full height on desktop. |
| Icons and imagery | Real photography of the restaurant. |
| Components | Time slots as buttons; special requests; deposit when required stated before. |
| States | Fully booked offers waitlist and nearby dates; modification and cancellation policy. |
| Responsive | Phone: photo band, booking panel, menu. |
| Motion | Slot selection confirms (150ms). Reduced motion: none. |
| Accessibility | Menu as HTML text, not images. |
| Build | Availability from reservation system. |
| AI mutation | Menu as image carousel, "Experience culinary excellence". |
| Fails when | Operator tools. |

### Host Stand
**Thesis.** The host stand is an operations console: a floor plan of tables with states and timers, the waitlist, and reservations, operable under pressure on a tablet. Character: calm under pressure. Audience: restaurant hosts and managers. **Fit:** restaurant floor management, waitlists, table service.

**Fingerprint** `density=dense; composition=spatial-scene; surface=flat-bordered; type=technical-sans; nav=rail; accent=multi-role; motion=physical-direct; imagery=diagram; radius=semantic-mixed; data=moderate; tone=calm-under-pressure`

| Layer | Decision |
|---|---|
| Composition | Floor plan center with tables as shapes; rail for sections; right panel with upcoming reservations and waitlist with quoted times. |
| Type | Technical sans (IBM Plex Sans 14px), timers tabular. |
| Color | canvas #F1F2F0 · surface #FFFFFF · ink #161816 · muted #4F554F · line #C9CEC8 · action #1F5E4A · on-action #FFFFFF. Table states: available, seated, ordered, dessert, check dropped, dirty, each with label and pattern. |
| Space and shape | Tables round or square as in reality (radius encodes table shape); 44px targets. |
| Icons and imagery | Floor plan diagram. |
| Components | Drag party to table, combine tables, text guest when ready. |
| States | Late reservation; no-show; table turning estimate. |
| Responsive | Tablet landscape first; phone list mode. |
| Motion | Drag physics; state change highlight. Reduced motion: none. |
| Accessibility | List mode equivalent. |
| Build | Real-time sync across devices. |
| AI mutation | Consumer app styling, KPI cards of covers. |
| Fails when | Diners. |

### Guidebook
**Thesis.** Destination content is a guidebook: expert writing, honest recommendations, practical details, and photography with captions. Character: knowledgeable, warm. Audience: travelers researching destinations. **Fit:** tourism boards, travel publishers, destination guides.

**Fingerprint** `density=medium; composition=document; surface=paper-sheet; type=editorial-serif; nav=in-content; accent=medium; motion=none; imagery=photography; radius=square; data=light; tone=knowledgeable-warm`

| Layer | Decision |
|---|---|
| Composition | Long guide pages with sections (when to go, getting around, neighborhoods, where to eat) and practical boxes; in-page contents. |
| Type | Editorial serif (Newsreader 18px), sans for practical info (Source Sans 3). Arabic: Amiri. |
| Color | canvas #F6F2EA · surface #FFFFFF · ink #1E1C18 · muted #5A554C · line #DDD5C6 · action #22546B · on-action #FFFFFF. |
| Space and shape | Square; ruled practical boxes. |
| Icons and imagery | Captioned photography. |
| Components | Save places to map, print, updated date. |
| States | Seasonal closures; last verified date. |
| Responsive | Single column. |
| Motion | None. |
| Accessibility | Captions; headings. |
| Build | Places linked to structured data. |
| AI mutation | "Hidden gems" listicles with stock imagery. |
| Fails when | Transactional booking. |

### Pocket Pass
**Thesis.** On the travel day, a ticket is an object: the pass appears as a large card with the scannable code and the three facts that matter, ready offline. Character: ready, reassuring. Audience: travelers with tickets. **Fit:** boarding passes, event and rail tickets, travel wallets.

**Fingerprint** `density=sparse; composition=stage; surface=elevated-cards; type=grotesque; nav=tab-bar; accent=high; motion=physical-direct; imagery=none; radius=high; data=light; tone=ready-reassuring`

| Layer | Decision |
|---|---|
| Composition | One pass per screen, swipe between: code large, name, seat, gate/platform, time; details below. |
| Type | Grotesk (Manrope 700 for facts 28px). Arabic: IBM Plex Sans Arabic. |
| Color | canvas #EEF1F4 · surface #FFFFFF · ink #111418 · muted #50565E · line #D0D6DD · action #0B5A8A · on-action #FFFFFF. Carrier color as a band at the top of the pass. |
| Space and shape | 20px radius passes with shadow (object metaphor). |
| Icons and imagery | None. |
| Components | Add to wallet, brightness boost for scanning, share. |
| States | Offline available; updated gate; expired pass. |
| Responsive | Phone only. |
| Motion | Swipe between passes. Reduced motion: fade. |
| Accessibility | Code readable at max brightness; text facts large. |
| Build | Cache passes offline. |
| AI mutation | Gradient passes reducing code contrast. |
| Fails when | Planning. |

### Room Tape Chart
**Thesis.** Hotel and rental operations run on a tape chart: rooms by dates, stays as bars, and rates and housekeeping state in one dense grid. Character: operational, exact. Audience: front desk staff, hosts managing listings. **Fit:** property management systems, host calendars, channel managers.

**Fingerprint** `density=dense; composition=calendar-grid; surface=flat-ruled; type=technical-sans; nav=persistent-sidebar; accent=multi-role; motion=physical-direct; imagery=none; radius=square; data=strong; tone=operational`

| Layer | Decision |
|---|---|
| Composition | Sidebar: Front desk, Reservations, Rates, Housekeeping; tape chart of rooms (rows) by dates (columns), stays as bars with guest names; detail drawer. |
| Type | Technical sans (IBM Plex Sans 13px). |
| Color | canvas #F4F5F4 · surface #FFFFFF · ink #141615 · muted #4F5551 · line #CDD2CE · action #245A45 · on-action #FFFFFF. Stay states (confirmed, checked in, checked out, blocked) with patterns and labels. |
| Space and shape | 32px rows; square bars. |
| Icons and imagery | None. |
| Components | Drag stays to move rooms, extend; rate calendar; housekeeping status toggles. |
| States | Overbooking conflict; channel sync error; room out of order. |
| Responsive | Desktop; tablet for housekeeping lists. |
| Motion | Bars follow pointer. Reduced motion: none. |
| Accessibility | Grid navigable; list alternative. |
| Build | Channel sync with conflict detection. |
| AI mutation | Consumer booking UI for staff, KPI cards. |
| Fails when | Guests. |

## Confusable pairs

- **Fare Matrix vs Room Tape Chart:** both calendar grids. The Matrix compares prices for a buyer; the Tape Chart allocates rooms for staff.
- **Departure Board vs Pocket Pass:** both day-of-travel. The Board tracks status; the Pass is the scannable ticket.
- **Stay Postcard vs Guidebook:** both photography and warmth. The Postcard sells a specific stay; the Guidebook informs about a place.
