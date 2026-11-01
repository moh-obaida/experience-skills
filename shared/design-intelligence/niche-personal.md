# Niche Atlas: Personal Products

Personal products live in someone's private life: their money, notes, habits, family, and home.
They are used alone, often daily, and the relationship is intimate. The design problem is respect:
for privacy, for attention, and for the user's own pace. Generated defaults import productivity
dashboards, streak pressure, and gamified scores into private life. Load a profile with `niche-atlas-index.md` only when its realities affect a decision; compare product-relevant systems with `design-system-selector.md` only when the direction is open.

## Product realities

### Personal finance
- **Reality:** People budget, track spending, and plan savings; honesty about money is emotionally loaded.
- **Jobs:** Assign income to categories, see what's left, categorize transactions, plan for bills, track net worth, adjust when overspent.
- **Density:** Medium.
- **Surfaces:** Budget, transactions, accounts, goals, reports, net worth.
- **States:** Overspent category, uncategorized transactions, account connection broken, bill upcoming, goal reached.
- **Interaction:** Phone for quick checks, desktop for planning.
- **Trust:** Very high; privacy.
- **Generated-UI failures:** Shaming red, gamified savings scores, spending donut charts as the home.

### Journaling and notes
- **Reality:** Writing for oneself; speed of capture and privacy matter; retrieval later matters more than organization now.
- **Jobs:** Capture a thought, write an entry, find something from months ago, link ideas, keep it private.
- **Density:** Sparse for journaling, dense for note systems.
- **Surfaces:** Editor, entry list or calendar, search, tags or links, lock screen.
- **States:** Locked, syncing, conflict, draft, on this day.
- **Interaction:** Keyboard, phone quick capture, voice.
- **Trust:** Very high; private writing.
- **Generated-UI failures:** AI prompts pushed onto every blank page, cards for notes, streaks for journaling.

### Habits
- **Reality:** Small repeated actions tracked over time; missing a day is normal.
- **Jobs:** Check off today's habits, see consistency, adjust goals, reflect.
- **Density:** Medium.
- **Surfaces:** Today list, history grid, habit detail, reminders.
- **States:** Done, skipped, missed, paused, rest day.
- **Interaction:** Phone, widgets, watch.
- **Trust:** Moderate; motivation is fragile.
- **Generated-UI failures:** Streak loss guilt, confetti, score inflation.

### Personal organization and family tools
- **Reality:** Coordinating a household: schedules, lists, chores, documents, renewals.
- **Jobs:** See who is where this week, share shopping lists, assign chores, remember renewals, store documents.
- **Density:** Medium.
- **Surfaces:** Family calendar, lists, chores, documents, reminders.
- **States:** Conflict between members, overdue chore, expiring document, shared vs private.
- **Interaction:** Phones for all members, shared tablet on the wall, kids' devices.
- **Trust:** High; family privacy.
- **Generated-UI failures:** Business project-management UI for a family, tiny text for older relatives.

### Smart home
- **Reality:** Controlling devices and seeing home status; reliability and speed matter more than features.
- **Jobs:** Turn things on/off, set scenes, check security, adjust temperature, respond to alerts.
- **Density:** Medium.
- **Surfaces:** Home overview by room, device controls, scenes, automations, alerts, cameras.
- **States:** Device offline, command pending, door unlocked, motion detected, firmware update.
- **Interaction:** Phone, wall tablets, voice, widgets.
- **Trust:** High; security and safety.
- **Generated-UI failures:** Neon dashboards, glass tiles with no state, animations delaying control.

### Lifestyle
- **Reality:** Hobbies and daily life companions (cooking, gardening, style, wellbeing) that inform and inspire.
- **Jobs:** Find what to do now (seasonal), follow instructions, save favorites, log progress.
- **Density:** Medium.
- **Surfaces:** Guides, recipes or plans, saved, journal, shopping lists.
- **States:** Out of season, missing ingredient, step in progress.
- **Interaction:** Phone in kitchens and gardens, hands busy.
- **Trust:** Moderate.
- **Generated-UI failures:** Generic lifestyle stock imagery, ads between steps, tiny text during tasks.

## Systems

### Envelope Budget
**Thesis.** Budgeting is giving every unit of money a job; categories are envelopes with honest balances, and overspending is information, not shame. Character: candid, supportive. Audience: people managing their own money. **Fit:** budgeting apps, personal finance planning.

**Fingerprint** `density=medium; composition=ledger; surface=tonal-blocks; type=humanist-sans; nav=tab-bar; accent=multi-role; motion=restrained-causal; imagery=data-graphic; radius=medium; data=moderate; tone=candid-supportive`

| Layer | Decision |
|---|---|
| Composition | Budget tab: "Ready to assign" amount, then category groups with assigned, spent, available per row and a thin bar; transactions and accounts tabs. |
| Type | Humanist sans (Source Sans 3 16px), tabular amounts. Arabic: Noto Sans Arabic. |
| Color | canvas #F5F4EF · surface #FFFFFF · ink #1D1E1B · muted #575954 · line #D9D8D1 · action #2F5D50 · on-action #FFFFFF. Available: positive neutral-green text, zero neutral, overspent amber (not red) with "Overspent by" text. |
| Space and shape | 52px rows; group tonal blocks; 10px radius. Stroke and lift: group blocks differ by tone with no border; each category bar is one thin fill on a 1px track, and overspending recolors the bar and label, never an alarm border; no shadows. |
| Icons and imagery | Thin category bars; no mascots. |
| Components | Move money between categories, quick categorize, targets per category. Shown when: the Ready to assign amount shows only while money is unassigned, the bill-due note only within the due window, and the reconnect prompt only when the bank link broke; no motivational banners. Copy: overspending reads as information ("Groceries is 40 over, move money from Dining?"), never as shame. |
| States | Uncategorized count; connection broken with reconnect; bill due soon. |
| Responsive | Phone first; desktop wide table. |
| Motion | Moving money animates the two affected amounts (200ms). Reduced motion: instant. |
| Accessibility | Amounts with signs and words. |
| Build | Local-first with sync; integers for money. Accept: capture the budget with an overspent category, a bank reconnect, an uncategorized count, and an empty month at 390 and a laptop, checking bar tracks are continuous and amounts align by their decimal. |
| AI mutation | Red shaming, savings scores, spending donut home. |
| Fails when | Investment portfolio management. |

### Private Diary
**Thesis.** A journal is a private book: one entry per page, beautiful reading type, date as the only structure, and nothing asking for engagement. Character: intimate, quiet. Audience: people journaling. **Fit:** journaling apps, diaries, gratitude or reflection journals.

**Fingerprint** `density=sparse; composition=document; surface=paper-sheet; type=editorial-serif; nav=contextual; accent=none; motion=none; imagery=user-content; radius=square; data=none; tone=intimate-quiet`

| Layer | Decision |
|---|---|
| Composition | Today's entry page opens with cursor ready; past entries by date through a calendar; photos inline in entries. |
| Type | Editorial serif (Newsreader or Spectral 19px). Arabic: Amiri or Noto Naskh Arabic. |
| Color | canvas #F3EFE7 · surface #FCFAF6 · ink #221F1A · muted #5E5950 · line #DDD5C7 · action #2E2B26 · on-action #FCFAF6. |
| Space and shape | Page margins 48px; square. Stroke and lift: the page has no border or shadow, only the margin; the entry date is set in type, not boxed; the lock screen has one input stroke and the focus ring; nothing else is outlined. |
| Icons and imagery | The user's own photos. |
| Components | Lock with biometrics, search, on-this-day (optional), export. Shown when: on-this-day appears only if the user turned it on, the conflict view only after a sync conflict, and the lock only when enabled; no streaks, reminders, or prompts. Copy: the interface speaks little, and the conflict screen labels each version with its device and time. |
| States | Locked; syncing; conflict resolution showing both versions. A failed sync keeps the entry local and says so quietly; a new diary opens to a blank page with the cursor ready. |
| Responsive | Phone and tablet; desktop writing. |
| Motion | None. |
| Accessibility | Adjustable text size; voice dictation. |
| Build | End-to-end encryption; local-first. Accept: capture today's page, a past entry with photos, the lock screen, and a conflict at 390 and a tablet, checking margins and photo corners stay clean and no text sits near a gesture edge. |
| AI mutation | AI prompts on every blank page, streaks, cards for entries. |
| Fails when | Task management. |

### Index Card Notes
**Thesis.** Personal notes should be fast plain text you can find instantly: a searchable index, keyboard-first, links between notes, no formatting ceremony. Character: nimble, spare. Audience: people who take many notes. **Fit:** notes apps, personal knowledge bases, snippets.

**Fingerprint** `density=dense; composition=index; surface=flat-bordered; type=mono-led; nav=command-palette; accent=low; motion=none; imagery=none; radius=low; data=light; tone=nimble`

| Layer | Decision |
|---|---|
| Composition | Search field on top that creates or finds; list of notes with title, first line, date; editor on selection. |
| Type | Mono or quasi-mono for writing (IBM Plex Mono or Martian Mono 15px), sans for list. Arabic: IBM Plex Sans Arabic (mono Arabic is poor). |
| Color | canvas #FAFAF8 · surface #FFFFFF · ink #1A1A18 · muted #595955 · line #DEDED8 · action #2B5A87 · on-action #FFFFFF. |
| Space and shape | 36px list rows; 3px radius. Stroke and lift: list rows have one 1px rule and no card borders; the open note changes fill; the search field owns the ring; no shadows. |
| Icons and imagery | None. |
| Components | Type-to-search-or-create, backlinks, keyboard shortcuts, markdown-light. Shown when: the create option appears only when the query matches nothing, backlinks only when they exist, and the conflict marker only on conflicted notes; no folders or tags UI unless used. Copy: the first line is the title, and an empty search says "Create 'query'". |
| States | Sync conflicts; empty search offers create. A failed sync keeps the notes and shows the time of the last sync; a new account is an empty index with the cursor in search. |
| Responsive | Desktop and phone. |
| Motion | None. |
| Accessibility | Keyboard complete. |
| Build | Plain-text storage; instant search index. Accept: capture a long list, a search with no match, a conflicted note, and backlinks at 390 and a laptop, checking search results appear within the same frame without layout shift. |
| AI mutation | Card grids of notes, colorful tags, AI summaries everywhere. |
| Fails when | Long-form journaling (Private Diary). |

### Habit Grid
**Thesis.** Habits are dots on a grid: today's check-ins at the top, consistency visible over weeks, and missed days treated as normal. Character: steady, kind. Audience: people building habits. **Fit:** habit trackers, routines, medication-adjacent routines (non-clinical).

**Fingerprint** `density=medium; composition=calendar-grid; surface=flat-bordered; type=rounded-sans; nav=tab-bar; accent=high; motion=event-celebration; imagery=none; radius=high; data=moderate; tone=steady-kind`

| Layer | Decision |
|---|---|
| Composition | Today list of habits with check circles; below, a grid per habit of the last 12 weeks; detail with notes. |
| Type | Rounded sans (Nunito Sans 16px). Arabic: Tajawal. |
| Color | canvas #F7F5F0 · surface #FFFFFF · ink #1F1E1B · muted #5A5852 · line #DFDBD1 · action #2F6A4F · on-action #FFFFFF. Done dots filled, skipped hollow, rest days marked differently. |
| Space and shape | Circles; 14px radius rows. Stroke and lift: check circles share one 1px outline and fill once when checked; grid dots are filled, and a skipped day is a hollow dot, so no day carries a second mark; rows have no borders. |
| Icons and imagery | None. |
| Components | Check, skip with reason, rest day, reminders. Shown when: the skip reason field appears only on skip, the paused label only on paused habits, and reminders only when set; no streak counters or lost-streak messages. Copy: a missed day reads plainly, "Missed Tue", with no guilt. |
| States | Missed day without guilt copy; paused habit. A new habit shows an empty grid and today's circle; a failed reminder permission says so and keeps the habit. |
| Responsive | Phone and widgets first. |
| Motion | Check fills (200ms); week completion subtle celebration. Reduced motion: static. |
| Accessibility | Grid readable as list. |
| Build | Local-first. Accept: capture today's list, a 12-week grid with misses and skips, and a paused habit at 390, checking dots keep their size and shape and no mark depends on color alone. |
| AI mutation | Streak flames, loss aversion notifications. |
| Fails when | Complex projects. |

### Fridge Door
**Thesis.** A family organizer is the fridge door: this week at a glance with each person's color, shared lists, and chores, readable by everyone from kids to grandparents. Character: warm, busy. Audience: households. **Fit:** family calendars, shared lists, chore charts.

**Fingerprint** `density=medium; composition=calendar-grid; surface=tonal-blocks; type=grotesque; nav=hub-and-spoke; accent=multi-role; motion=none; imagery=user-content; radius=medium; data=light; tone=warm-busy`

| Layer | Decision |
|---|---|
| Composition | Hub: this week grid with a column per family member, today's dinners and chores; lists and documents as spokes. |
| Type | Friendly grotesk (Bricolage Grotesque or Work Sans 17px). Arabic: Readex Pro. |
| Color | canvas #FFF9F0 · surface #FFFFFF · ink #221E19 · muted #5E574D · line #E8DECF · action #1F5F74 · on-action #FFFFFF. Each member has a color and an avatar or initial. |
| Space and shape | 10px radius tonal blocks; large touch targets for wall tablets. Stroke and lift: blocks use one tonal fill and each person's color appears as one band edge; private events show as a plain grey busy block; shadows only on the open add-event sheet. |
| Icons and imagery | Family photos as avatars. |
| Components | Add event for someone, shared list with checkboxes, chore rotation, reminders. Shown when: overdue chores mark themselves only when overdue, conflicts only when events overlap, and private details never to other members; the permission explanation sits in settings only. Copy: names and colors are the family's own, and times use a 12 or 24 hour format per the household. |
| States | Conflicting events; overdue chores; private events shown as busy. An empty week offers one add action; a failed sync shows the last update and keeps the tablet view. |
| Responsive | Wall tablet landscape, phones portrait. |
| Motion | None. |
| Accessibility | Large text mode for older relatives; kid mode simplified. |
| Build | Per-member permissions. Accept: capture the week, a conflict, an overdue chore, and a private event at a wall tablet and a phone, checking person-color bands are continuous and text is readable from a meter away. |
| AI mutation | Business PM board, tiny text. |
| Fails when | Individual productivity. |

### Home Panel
**Thesis.** Smart home control is about rooms and state: every device's current state readable at a glance, controls one tap away, and nothing animated between tap and response. Character: calm, ambient. Audience: households with connected devices. **Fit:** smart home apps, wall panels.

**Fingerprint** `density=medium; composition=spatial-scene; surface=layered-panels; type=grotesque; nav=tab-bar; accent=low; motion=physical-direct; imagery=diagram; radius=high; data=moderate; tone=calm-ambient`

| Layer | Decision |
|---|---|
| Composition | Home tab with rooms as sections (optionally floor plan); device tiles show state in words ("Off", "21°C", "Locked"); scenes row; alerts on top. |
| Type | Grotesk (Manrope 16px). Arabic: IBM Plex Sans Arabic. |
| Color | canvas #EEEFEC · surface #FFFFFF · ink #181A17 · muted #535650 · line #D1D4CD · action #2B5A4A · on-action #FFFFFF. On-state tiles use a warm tint with label; security alerts red with text. |
| Space and shape | 16px radius tiles; layered panels. Stroke and lift: tiles share one soft fill and no border; an offline tile adds a text label, and a pending tile a spinner inside, so state is never a border color; the only shadow is on the detail sheet. |
| Icons and imagery | Floor plan diagram optional; device glyphs. |
| Components | Toggle by tap, long-press for detail, scene activation, automation editor. Shown when: the alert strip appears only for open alerts such as an unlocked door, the pending spinner only until the device answers, and the offline mark only on unreachable devices; every tile always states its state in words. Copy: states are plain ("Off", "21°C", "Locked"), and an automation names its trigger. |
| States | Device offline; command pending with spinner in tile; unlocked door alert. |
| Responsive | Phone, wall tablet, watch. |
| Motion | Tile state change follows device confirmation. Reduced motion: none. |
| Accessibility | State in text; voice control. |
| Build | Optimistic only when device acknowledges quickly; show pending otherwise. Accept: capture rooms, an offline device, a pending command, an unlocked-door alert, and a scene at a wall panel and 390, checking tile edges are consistent and state words are not truncated. |
| AI mutation | Neon dashboards, glass tiles without state. |
| Fails when | Industrial control. |

### Almanac
**Thesis.** Lifestyle companions follow the seasons: what to cook, plant, or do now, with practical steps readable while your hands are busy. Character: seasonal, warm. Audience: home cooks, gardeners, hobbyists. **Fit:** recipe apps, gardening companions, hobby guides.

**Fingerprint** `density=medium; composition=stream; surface=material-texture; type=serif-sans-duet; nav=top-bar; accent=medium; motion=none; imagery=photography; radius=low; data=light; tone=seasonal-warm`

| Layer | Decision |
|---|---|
| Composition | "This week" stream of seasonal suggestions; recipe or task pages with ingredients/tools then steps; cook mode shows one step large. |
| Type | Serif headings (Young Serif or Fraunces), sans body (Source Sans 3 18px). Arabic: Noto Naskh Arabic headings. |
| Color | canvas #F3EEE3 · surface #FCFAF4 · ink #24211B · muted #5E584C · line #D8CFBD · action #5C6B24 · on-action #FFFFFF. |
| Space and shape | Paper grain on canvas; 4px radius photos. Stroke and lift: paper grain only on the canvas and never behind text; photos have a 4px radius and no border; steps are separated by space and a single hairline; no shadows. |
| Icons and imagery | Real photography of the dish or garden, with seasons. |
| Components | Scale servings, timers inline, shopping list, cook mode with screen awake. Shown when: the out-of-season note appears only on out-of-season items, the substitution prompt only for missing ingredients, and cook mode keeps the screen awake only while active; no ads or popups over a recipe. Copy: steps are imperative with quantities ("Whisk 2 eggs"), and timers say what they time. |
| States | Out of season; missing ingredient substitutions. A failed photo load shows the title and ingredients; an empty shopping list offers adding from a recipe. |
| Responsive | Phone in kitchen; tablet stand mode. |
| Motion | None. |
| Accessibility | Large text in cook mode; voice next step. |
| Build | Structured recipe data. Accept: capture a recipe, cook mode, a scaled serving, and a substitution at 390 with large text and a tablet on a counter, checking the grain does not lower contrast and cook mode type stays large. |
| AI mutation | Stock lifestyle imagery, ads between steps. |
| Fails when | Tracking or finance. |

### Wallet Snapshot
**Thesis.** Net worth and accounts aggregation should give a clear-headed snapshot: one number with its composition, trends over months, and nothing that tempts trading. Character: clear-headed. Audience: people tracking their overall finances. **Fit:** net worth trackers, account aggregators.

**Fingerprint** `density=sparse; composition=hub; surface=paper-sheet; type=editorial-serif; nav=tab-bar; accent=low; motion=none; imagery=data-graphic; radius=medium; data=moderate; tone=clear-headed`

| Layer | Decision |
|---|---|
| Composition | Hub: net worth with month change, composition bar (cash, investments, property, debts), account list; trends tab. |
| Type | Editorial serif for the headline number (Newsreader 40px), sans elsewhere. |
| Color | canvas #F5F3EE · surface #FFFFFF · ink #1D1C1A · muted #5A5751 · line #DAD6CD · action #2E4D6B · on-action #FFFFFF. |
| Space and shape | 10px radius; paper surfaces. Stroke and lift: surfaces are paper tones with no borders; the composition bar is one continuous stroke of segments with 1px gaps; a stale account changes its label and date, not its border. |
| Icons and imagery | Composition bar and monthly trend. |
| Components | Connect account, manual asset, notes. Shown when: the stale-balance date appears only on stale accounts, the connection error only on broken links, and manual-asset notes only when added; no buy, sell, or tip prompts. Copy: balances carry the date they were read, and the net worth change reads in months. |
| States | Stale balances with dates; connection errors. A first launch invites connecting an account or adding one manually; a failed sync keeps the last values with their ages. |
| Responsive | Phone first. |
| Motion | None. |
| Accessibility | Numbers described in text. |
| Build | Read-only aggregation with timestamps. Accept: capture the hub, a stale account, a connection error, and the trends tab at 390 and a laptop, checking the composition bar segments sum to the total and align to the bar edges. |
| AI mutation | Day-change red/green, trading prompts. |
| Fails when | Budgeting (Envelope Budget). |

### Life Admin Inbox
**Thesis.** Personal admin (bills, renewals, documents, forms) is an inbox to clear: each item with a due date and one action, then filed away. Character: unburdening. Audience: adults managing household admin. **Fit:** personal admin, document vaults, renewals trackers.

**Fingerprint** `density=dense; composition=stream; surface=flat-ruled; type=technical-sans; nav=persistent-sidebar; accent=multi-role; motion=restrained-causal; imagery=none; radius=low; data=moderate; tone=unburdening`

| Layer | Decision |
|---|---|
| Composition | Sidebar: Inbox, Upcoming, Documents, Done; inbox stream sorted by due date with type, amount, and action. |
| Type | Technical sans (IBM Plex Sans 14px). Arabic: IBM Plex Sans Arabic. |
| Color | canvas #F4F5F3 · surface #FFFFFF · ink #171917 · muted #525652 · line #D2D6D1 · action #245E53 · on-action #FFFFFF. Due-soon amber, overdue red, both labelled. |
| Space and shape | Ruled rows 48px; 4px radius. Stroke and lift: rows are ruled by one 1px line, 48px tall, with no card borders; an overdue row changes its date label color, not a border; a snoozed row dims, with no shadows. |
| Icons and imagery | Document type glyphs. |
| Components | Mark done, snooze, attach document, set renewal reminder. Shown when: the document-expiring note appears only within a stated window, the recurring marker only on recurring items, and Done only after an item is cleared; each item shows exactly one action. Copy: items name the thing and the date ("Renew passport by 4 Nov"). |
| States | Overdue; recurring; document expiring. An empty inbox says nothing is due and shows the next upcoming item; a failed document upload keeps the form and names the file. |
| Responsive | Phone and desktop. |
| Motion | Done items collapse (200ms). Reduced motion: none. |
| Accessibility | Dates in text. |
| Build | Encrypted document storage. Accept: capture the inbox, an overdue item, a recurring item, an expiring document, and the empty state at 390 and a laptop, checking row rules reach the sidebar edge and actions stay on one line. |
| AI mutation | Productivity scores, gradients. |
| Fails when | Creative or reflective use. |

### Sunday Planner
**Thesis.** Personal planning is a weekly ritual on paper: the week laid beside a notes page, handwriting-like headings, and nothing urgent. Character: reflective, gentle. Audience: people who plan their week deliberately. **Fit:** weekly planners, reflection tools, digital bullet journals.

**Fingerprint** `density=sparse; composition=split-pane; surface=paper-sheet; type=handmade-display; nav=in-content; accent=low; motion=physical-direct; imagery=none; radius=square; data=light; tone=reflective`

| Layer | Decision |
|---|---|
| Composition | Left page: the week with days and a few items; right page: intentions and notes; previous weeks by page turn. |
| Type | Hand-lettered display for headings (Caveat or Kalam), readable body (Literata 16px). Arabic: Aref Ruqaa headings, Noto Naskh Arabic body. |
| Color | canvas #EFEBE2 · surface #FBF9F4 · ink #25221D · muted #5F5A50 · line #D6CFC1 · action #3E5063 · on-action #FFFFFF. |
| Space and shape | Paper pages, square; dot grid at low contrast. Stroke and lift: pages are square with no border or shadow; the dot grid sits at low contrast behind text only; a carried-over item shows one small mark; the page turn has no drop shadow. |
| Icons and imagery | None. |
| Components | Drag items between days, carry over unfinished items, weekly reflection prompts (optional, user-written). Shown when: reflection prompts appear only if the user wrote them, the carry-over count only when items carry over, and previous weeks by page turn; no productivity scores. Copy: headings are the user's own words, and the interface adds as little as possible. |
| States | Unfinished items carried with count; empty week is a clean page. A new week opens clean with carried items listed; a failed local save says so and keeps the page. |
| Responsive | Tablet two pages; phone one page with toggle. |
| Motion | Page turn (250ms). Reduced motion: crossfade. |
| Accessibility | Handwriting font only for headings. |
| Build | Local-first. Accept: capture a full week, a carry-over, an empty week, and a page turn at a tablet and 390, checking the dot grid never reduces text legibility and page edges are straight. |
| AI mutation | Productivity dashboards, AI plans, streaks. |
| Fails when | Teams. |

## Confusable pairs

- **Private Diary vs Sunday Planner:** both paper and private. The Diary records what happened; the Planner shapes the week ahead.
- **Envelope Budget vs Wallet Snapshot:** both personal money. The Budget allocates each month; the Snapshot observes overall position.
- **Habit Grid vs Fridge Door:** both calendar grids. Habit Grid tracks one person's routines; Fridge Door coordinates a household.
