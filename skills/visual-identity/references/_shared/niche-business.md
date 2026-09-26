<!-- GENERATED FROM shared/design-intelligence/niche-business.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Niche Atlas: Business & Productivity

Products people open for work, often daily, often for hours. Their design problem is repetition:
the hundredth visit matters more than the first, yet the first (empty workspace, unclear setup)
decides whether there is a hundredth. Load with `niche-atlas-index.md`; compare three systems with
`design-system-selector.md`.

## Product realities

### Horizontal SaaS, enterprise, admin tools, office suites
- **Reality:** Users configure once, then repeat a small set of tasks daily; administrators manage members, roles, billing, and integrations on a different rhythm from end users.
- **Jobs:** Find a record, change a setting safely, invite and remove members, switch account or workspace, read what changed, export, resolve a billing problem.
- **Density:** Medium to dense; settings and member lists are dense, first-run is sparse.
- **Surfaces:** Workspace home, list and detail views, settings (profile, workspace, members, roles, billing, integrations, API keys), audit log, notifications, search, account switcher, onboarding.
- **States:** Empty first run, trial and expired plans, seat limits, permission denied, pending invitation, SSO-enforced sign-in, partial import, failed payment, deactivated user.
- **Interaction:** Keyboard-heavy for experts, mouse-first for occasional admins; bulk actions, filters, saved views; long-lived tabs.
- **Trust:** Moderate to high: permission and billing mistakes are costly and visible to a whole team.
- **Generated-UI failures:** Four KPI cards on a workspace nobody measures; indigo gradient sidebar; settings as a grid of cards; "Welcome back!" hero instead of the user's work; plan badges everywhere.

### CRM and sales pipelines
- **Reality:** Salespeople move deals and log touches between calls; managers read the pipeline for forecasts; records accumulate years of history.
- **Jobs:** Update a deal stage, log a call or email, find a contact fast, see what is due today, forecast the quarter, hand off an account.
- **Density:** Dense records, medium boards.
- **Surfaces:** Pipeline board, deal record, contact and company records, activity timeline, task list, forecast view, import and dedupe.
- **States:** Stale deal, duplicate contact, bounced email, won/lost with reason, reassigned owner, sync conflict with mail or calendar.
- **Interaction:** Drag between stages, quick log from anywhere, keyboard search, frequent mobile use between meetings.
- **Trust:** Moderate; data loss or wrong forecasts damage credibility with management.
- **Generated-UI failures:** Revenue charts as decoration on every page; avatars and colored pills replacing readable stage names; a board that hides deal value and age.

### Project and task management, collaboration
- **Reality:** Teams plan, assign, and track work across lists, boards, and timelines; individuals mostly want "what do I do next."
- **Jobs:** Capture a task fast, assign and date it, see my work, see blocked work, reschedule, review progress with the team.
- **Density:** Variable: personal lists sparse, program timelines dense.
- **Surfaces:** My work, project list/board/timeline, task detail, comments, inbox, templates, reporting.
- **States:** Overdue, blocked, unassigned, archived project, conflicting edits, guest access.
- **Interaction:** Keyboard capture, drag to reorder and reschedule, real-time presence, mentions.
- **Trust:** Low to moderate per action; high for data retention.
- **Generated-UI failures:** Colorful label soup; progress rings for every project; celebratory confetti on every checkbox; timeline bars without dates.

### Team communication
- **Reality:** Conversation is the product; the workspace must separate urgent from ambient and survive hundreds of messages a day.
- **Jobs:** Read what needs me, reply in thread, find an old decision, share a file, set status, mute noise.
- **Density:** Dense streams.
- **Surfaces:** Channel list, conversation, thread, search, mentions inbox, huddle or call, profile.
- **States:** Unread vs mentioned, failed send, edited, deleted, offline, reconnecting, guest, external organization.
- **Interaction:** Keyboard-first composing, real-time arrival, notifications across devices.
- **Trust:** Moderate; misdirected messages and lost history are serious.
- **Generated-UI failures:** Chat bubbles in bright gradients; giant avatars; unread counts on every item; no visible difference between mention and ambient chatter.

### Scheduling and calendar
- **Reality:** Time is the organizing axis; conflicts, time zones, and availability are the hard parts.
- **Jobs:** See today and this week, create or move an event, find a common slot, respond to invitations, share booking availability.
- **Density:** Dense grids.
- **Surfaces:** Day/week/month grid, event detail, availability finder, booking page, invitations, settings for hours and zones.
- **States:** Conflict, tentative, declined, cross-time-zone, recurring exception, all-day overflow, external calendar sync failure.
- **Interaction:** Drag to create and resize, keyboard navigation between days, frequent phone glance.
- **Trust:** Moderate; a wrong time zone means a missed meeting.
- **Generated-UI failures:** Rounded pastel event pills without times; month view as a card grid; hiding time zones to look minimal.

### Knowledge management and documents
- **Reality:** Long-lived documents written by some, read and searched by many; structure decays over time.
- **Jobs:** Write, find, link, update a stale page, see who owns what, share externally.
- **Density:** Medium; long text with nested navigation.
- **Surfaces:** Page editor/reader, page tree, search, templates, comments, version history, sharing.
- **States:** Draft, stale, archived, permission-restricted, conflicting edit, broken link.
- **Interaction:** Keyboard writing, slash commands, linking, reading on phones.
- **Trust:** Moderate; authority of the page matters (who wrote it, when).
- **Generated-UI failures:** Cards replacing a readable page tree; emoji icons as the only hierarchy; line lengths of 140 characters.

### Workflow automation
- **Reality:** Users connect triggers, conditions, and actions, then trust automations to run unattended.
- **Jobs:** Build a flow, test it with sample data, see runs and failures, fix a broken connection, pause safely.
- **Density:** Variable: canvas sparse, run history dense.
- **Surfaces:** Flow canvas or step list, step configuration, test run, run history, connection manager, error detail.
- **States:** Draft vs live, failing, rate-limited, partial run, expired credentials, paused, versioned.
- **Interaction:** Direct manipulation on a canvas or ordered list; data mapping between steps.
- **Trust:** High; automations act on real systems without supervision.
- **Generated-UI failures:** Glowing nodes and animated connectors; "magic" copy; hiding what will actually run and when.

## Systems

### Ledger Desk
**Thesis.** Administration is reading and correcting records; rows, rules, and exact labels carry the product. Character: exact, calm, unhurried. Audience: admins and operators who visit weekly and must not make mistakes. **Fit:** SaaS settings, members, billing, audit logs, enterprise admin.

**Fingerprint** `density=dense; composition=index; surface=flat-ruled; type=grotesque; nav=persistent-sidebar; accent=low; motion=restrained-causal; imagery=none; radius=low; data=strong; tone=precise-calm`

| Layer | Decision |
|---|---|
| Composition | Sidebar of settings areas, page title with scope ("Workspace: Northwind"), then ruled sections of label-value rows with inline edit; members and invoices as sortable tables. Primary pages: members, roles, billing, integrations, audit log, API keys. |
| Type | Neo-grotesk for all UI (Hanken Grotesk or Instrument Sans; fallback `system-ui, sans-serif`), IBM Plex Mono for IDs and keys. 24/17/14/12px; labels 13px medium, never uppercase. Arabic: IBM Plex Sans Arabic. |
| Color | canvas #F6F6F3 · surface #FFFFFF · ink #1B1D1C · muted #5C605D · line #D6D8D3 · action #1D4E89 · on-action #FFFFFF. Blue is the only accent and means "act"; destructive red appears only in danger zones. |
| Space and shape | 4px base; rows 44px, sections separated by 32px and a 1px rule, not boxes. Controls 32px high, 4px radius; containers 0–2px radius. No shadows except menus. |
| Icons and imagery | No illustration. 16px outline icons only where they disambiguate (integration logos, file type). |
| Components | One filled primary per section; secondary as outline; danger actions isolated at section end with typed confirmation for irreversible ones. Tables with sticky header, right-aligned numbers, row actions on hover plus keyboard menu. Forms: label above, help below, inline save per section. |
| States | Pending invitations and deactivated users as distinct row states with text; seat limits shown before the invite button, not after. Empty audit log explains retention. Permission-denied rows show who can change it. |
| Responsive | Desktop sidebar + content; tablet collapses sidebar to a select; mobile shows sections as a list, tables become stacked label-value rows with the primary column first. |
| Motion | Saved-row confirmation fades in 150ms; no page entrances. Reduced motion: instant. |
| Accessibility | Table semantics preserved; row actions reachable by keyboard; focus ring 2px action color with offset. |
| Build | Tokens: `--row-h:44px; --control-h:32px; --radius-control:4px; --rule:1px solid var(--line)`. Section component = heading + description + rows; avoid a Card component in settings entirely. |
| AI mutation | Settings grouped into rounded cards with icons in colored squares; plan badge gradients; everything elevated. |
| Fails when | The product is consumer-facing or the surface must sell or delight; a first-run workspace needs guidance, not a ledger. |

### Pipeline Wall
**Thesis.** A pipeline is a physical wall of work: position means stage, and moving a card is the primary verb. Character: brisk, social, tactile. Audience: salespeople and project teams updating work between meetings. **Fit:** CRM pipelines, recruiting pipelines, kanban project management.

**Fingerprint** `density=medium; composition=board; surface=tonal-blocks; type=humanist-sans; nav=top-bar; accent=multi-role; motion=physical-direct; imagery=user-content; radius=medium; data=moderate; tone=brisk-social`

| Layer | Decision |
|---|---|
| Composition | Top bar with pipeline switcher and filters; columns as tinted lanes with totals in the header (count and value); cards show name, value, age, next step, owner. Detail opens as a right panel over the board so position is kept. |
| Type | Humanist sans (Source Sans 3; fallback `system-ui`). 22/16/14/12px; column totals tabular. Arabic: Noto Sans Arabic; board order reverses in RTL. |
| Color | canvas #EEF0EC · surface #FFFFFF · ink #1E2320 · muted #535C56 · line #C7CEC8 · action #2F5D3A · on-action #FFFFFF. Lanes use four low-saturation tints that encode stage group (open, late, won, lost); tint never carries meaning alone. |
| Space and shape | 8px base; lanes 280px, 12px gaps; cards 8px radius, 1px line, no shadow until lifted. Controls 36px. |
| Icons and imagery | Owner avatars (real photos or initials) and company logos from data; no decorative art. |
| Components | Cards are draggable and have a keyboard "Move to…" menu; quick-log field on every card detail. Primary action: "Add deal" per lane. Forecast is a separate view, not a chart on the board. |
| States | Stale deals show age in words ("No touch 18 days") and a muted edge; won/lost require a reason. Empty lane says what belongs there. Sync conflict banner on the record, not globally. |
| Responsive | Desktop horizontal lanes; tablet scrolls lanes with sticky headers; mobile becomes a stage selector + list with swipe-free "Move" action. |
| Motion | Lifted card scales 1.02 with a shadow while dragging; drop settles 160ms. Reduced motion: no scale, outline only. |
| Accessibility | Drag has a keyboard and screen-reader equivalent; announce "Moved to Negotiation, position 3". |
| Build | `--lane-w:280px; --card-radius:8px; --lane-tint-open:#E3E9E4`. Use a real DnD library with keyboard sensors; never implement drag with only pointer events. |
| AI mutation | Neon column headers, gradient deal cards, revenue sparkline on every card, emoji stage names. |
| Fails when | Records outnumber a wall (thousands of items): use a table or Object Sheet. Stages are not sequential. |

### Working Paper
**Thesis.** Knowledge is prose with provenance; the page is a document with an author and a date, not a set of blocks. Character: considered, literate, quiet. Audience: teams writing specs, policies, and decisions. **Fit:** knowledge bases, wikis, document tools, decision logs.

**Fingerprint** `density=medium; composition=document; surface=paper-sheet; type=serif-sans-duet; nav=contextual; accent=low; motion=none; imagery=none; radius=square; data=light; tone=considered`

| Layer | Decision |
|---|---|
| Composition | Centered measure (68ch) on a paper sheet, page tree in a collapsible left drawer, outline and backlinks in the right margin at wide sizes. Byline under title: owner, last reviewed, status. |
| Type | Reading serif (Source Serif 4 or Newsreader) for body at 18px/1.6; UI and headings in a neutral sans (Source Sans 3). 34/24/18/14px. Fallback `ui-serif, Georgia, serif`. Arabic: Noto Naskh Arabic for body, Noto Sans Arabic for UI. |
| Color | canvas #EDEBE5 · surface #FBFAF7 · ink #22211E · muted #5E5B54 · line #D3CFC6 · action #7A3B12 · on-action #FFFFFF. Rust marks links and the primary action only. |
| Space and shape | Page padding 64px desktop; paragraph spacing 1em; square corners; the sheet is separated from canvas by tone, not shadow. |
| Icons and imagery | None by default; diagrams and screenshots are content, captioned. Page icons optional and never replace titles. |
| Components | Toolbar appears on selection; "Mark reviewed" is the recurring action. Tables inside documents use ruled rows. Comments sit in the margin with the quoted text. |
| States | Stale page banner ("Last reviewed 14 months ago by Dana — still accurate?") with one-click confirm. Restricted page shows owner and request access. Empty tree offers templates by task, not a blank grid. |
| Responsive | Wide: tree drawer + page + margin; tablet: margin notes collapse to footnote markers; phone: full-width text at 17px, tree as a sheet. |
| Motion | None beyond native scrolling and caret. |
| Accessibility | Heading hierarchy real (h1–h4); skip link to content; comments reachable from the paragraph. |
| Build | `--measure:68ch; --body-size:1.125rem; --leading:1.6`. Separate reading and editing typography tokens; editor must not change metrics on focus. |
| AI mutation | Emoji-covered page icons, card-based "spaces" home, gradient cover images on every page, 100% width lines. |
| Fails when | The content is mostly structured data or tasks; readers need scanning over reading. |

### Week Loom
**Thesis.** Time is a woven grid: vertical hours, horizontal days, and events as exact threads whose position is the information. Character: orderly, warm, dependable. Audience: people scheduling across teams and time zones. **Fit:** calendars, scheduling, availability finders, shift planning.

**Fingerprint** `density=dense; composition=calendar-grid; surface=flat-bordered; type=technical-sans; nav=rail; accent=multi-role; motion=physical-direct; imagery=none; radius=semantic-mixed; data=moderate; tone=orderly-warm`

| Layer | Decision |
|---|---|
| Composition | Narrow rail (mini month, calendars list), grid with a pinned time-zone gutter that can show two zones, event detail as a popover then side panel. Primary pages: week, day, month, find a time, booking page. |
| Type | Technical sans with tabular figures (IBM Plex Sans; fallback `system-ui`). 20/15/13/11px; times always shown in events ≥ 30 minutes tall. Arabic: IBM Plex Sans Arabic; grid mirrors in RTL but time reads per locale. |
| Color | canvas #FAF9F6 · surface #FFFFFF · ink #1F2328 · muted #555C66 · line #DDDCD6 · action #9A3412 · on-action #FFFFFF. Calendar colors are user-chosen roles with a 3:1 edge against the fill; tentative uses a hatch pattern, declined uses strikethrough. |
| Space and shape | Hour row 48px (compact 32px); events 3px radius, full-width buttons 6px, availability blocks square: radius encodes kind. Hairline hour lines, stronger day dividers. |
| Icons and imagery | None; recurrence, video link, and location icons at 14px inside event details. |
| Components | Drag to create, drag edges to resize, keyboard create with natural-language time field. Invitation responses inline in the event. Find-a-time shows overlapping availability as bands, not scores. |
| States | Conflict drawn as side-by-side columns with a count; cross-zone events show both times; sync failure marks the affected calendar in the rail. Empty week says "No events" and offers "Share availability". |
| Responsive | Desktop week; tablet 3-day; phone day view with agenda list toggle and a week strip. Drag-create on touch uses long-press. |
| Motion | Event follows pointer 1:1; snap to 15-minute slots with a 100ms settle. Reduced motion: no settle. |
| Accessibility | Grid navigable with arrow keys; each event has an accessible name with full date, time, and zone. |
| Build | `--hour-h:48px; --slot:15min; --event-radius:3px`. Compute layout for overlapping events deterministically; test DST transitions. |
| AI mutation | Pastel rounded pills with no times, month-view card grid, hidden time zones "for simplicity". |
| Fails when | Time is not the primary axis (tasks without dates, content calendars better as lists). |

### Object Sheet
**Thesis.** Every business object deserves a complete, exact sheet: header facts, related objects, and history in one place reachable by command. Character: exacting, dense, expert. Audience: power users of CRM, ERP, and support systems who live in records. **Fit:** CRM records, enterprise records, support cases, admin consoles for experts.

**Fingerprint** `density=dense; composition=object-sheet; surface=layered-panels; type=institutional-sans; nav=command-palette; accent=low; motion=restrained-causal; imagery=none; radius=low; data=strong; tone=exacting`

| Layer | Decision |
|---|---|
| Composition | Record header (name, type, key facts, owner, status) above a three-zone body: fields left, activity timeline center, related objects right. Global command palette opens any object or action. |
| Type | Institutional sans with strong numerals (Public Sans; fallback `system-ui`). 22/15/13/12px; field labels 12px muted above values. Arabic: Noto Sans Arabic. |
| Color | canvas #E9ECEF · surface #FFFFFF · ink #111418 · muted #4F5761 · line #C9D0D8 · action #0B5C66 · on-action #FFFFFF. Panels tint by depth: canvas → panel surface → inline editing field white. |
| Space and shape | 4px base; fields in a 2-column grid 12px apart; panels 4px radius, 1px line; controls 30px (compact) with 40px touch variant. |
| Icons and imagery | None except object-type glyphs (12px) next to related records. |
| Components | Every field inline-editable with explicit save/escape; keyboard shortcuts shown in tooltips and the palette. Primary action in header is the object's next lifecycle step ("Convert", "Close case"). Related lists show 5 rows with "View all". |
| States | Locked fields show why (integration-owned). Merge-duplicate flow compares fields side by side. Empty related list names what would appear. |
| Responsive | Desktop three zones; tablet two (timeline tabs with related); phone: header + tabs (Details, Activity, Related) with sticky primary action. |
| Motion | Inline save 120ms highlight; panel open 160ms. Reduced motion: none. |
| Accessibility | Landmarks for each zone; palette fully keyboard-driven with live result count. |
| Build | `--field-gap:12px; --control-h:30px; --panel-radius:4px`. Field component supports read, edit, locked, and error states from one definition. |
| AI mutation | Record header as a gradient hero with avatar; fields in separate cards; chart widgets in the sidebar. |
| Fails when | Users are occasional or novices; objects have few fields; mobile-first field work. |

### Relay Thread
**Thesis.** Work conversation should read like a well-kept logbook: who said what, what needs me, what was decided. Character: conversational, attentive, uncluttered. Audience: teams communicating all day. **Fit:** team chat, inbox-style collaboration, support conversations.

**Fingerprint** `density=medium; composition=conversation; surface=flat-bordered; type=humanist-sans; nav=rail; accent=medium; motion=restrained-causal; imagery=user-content; radius=medium; data=light; tone=conversational`

| Layer | Decision |
|---|---|
| Composition | Icon rail (workspaces), channel list, conversation, optional thread panel. Messages are left-aligned rows (not bubbles) grouped by author and time. A "Needs you" view collects mentions and assigned threads. |
| Type | Humanist sans (Figtree or Source Sans 3; fallback `system-ui`). Message 15px/1.5, names 14px semibold, times 12px. Code in JetBrains Mono. Arabic: Noto Sans Arabic; messages align to their own script direction. |
| Color | canvas #F4F3F8 · surface #FFFFFF · ink #1C1B22 · muted #57556A · line #D9D7E3 · action #3D3A8C · on-action #FFFFFF. Mentions tinted #FFF3D6 with a left bar; unread uses weight, not color. |
| Space and shape | Message rows 4px apart within an author group, 16px between groups; composer 8px radius; avatars 28px squares with 6px radius. |
| Icons and imagery | Avatars and shared media from users; reactions are emoji by nature. No decorative illustration. |
| Components | Composer with visible formatting on focus; Enter to send (configurable); thread replies counted under the message. Primary action is replying; secondary actions on hover and via keyboard. |
| States | Failed send stays in place with Retry; edited and deleted marked in text; reconnecting banner shows last synced time; external members labeled on every message. |
| Responsive | Desktop three panes; tablet hides rail into channel header; phone: channel list → conversation → thread as a stack with back navigation and composer above the keyboard. |
| Motion | New messages appear without sliding the reader's position; a "3 new messages" pill offers the jump. Reduced motion: no fade. |
| Accessibility | Message list is a feed with labelled articles; composer announces send failure. |
| Build | `--msg-gap:4px; --group-gap:16px; --mention-bg:#FFF3D6`. Virtualize the list; preserve scroll anchor on load of older history. |
| AI mutation | Gradient chat bubbles, huge avatars, glass sidebars, AI summary card pinned above every channel. |
| Fails when | Communication is asynchronous and long-form (use Working Paper); the product is broadcast, not conversation. |

### Flow Schematic
**Thesis.** An automation is a schematic you can test: steps, data, and conditions drawn as plainly as a wiring diagram. Character: mechanical, clear, trustworthy. Audience: operations people and builders who automate repetitive work. **Fit:** workflow automation, integrations, rules engines, approval flows.

**Fingerprint** `density=variable; composition=canvas-perimeter; surface=flat-bordered; type=technical-sans; nav=contextual; accent=multi-role; motion=restrained-causal; imagery=diagram; radius=medium; data=moderate; tone=mechanical-clear`

| Layer | Decision |
|---|---|
| Composition | Vertical step list or canvas (by complexity) centered; configuration panel right; run history as a tab. Header shows state (Draft, Live, Paused) and next run. |
| Type | Technical sans (IBM Plex Sans) with mono for field paths and sample data (IBM Plex Mono). 20/15/13/12px. Fallback `system-ui`, `ui-monospace`. |
| Color | canvas #F3F4F1 · surface #FFFFFF · ink #1A1E1B · muted #535A55 · line #C5CBC6 · action #155E75 · on-action #FFFFFF. Step kinds: trigger teal, condition amber outline, action ink outline; errors red with icon. |
| Space and shape | 8px base; steps 64px tall, 6px radius, 1px line; connectors 1.5px straight with right angles, no curves or glow. |
| Icons and imagery | App logos from the integration; the schematic itself is the diagram. |
| Components | "Test step" beside every step with sample data preview; data mapping via field picker showing source path and example value. Primary action: "Turn on" only after a passing test. |
| States | Failing run shows the exact step, input, and error message, with "Retry from here". Expired credential marks every affected flow. Paused state explains queued events. |
| Responsive | Desktop canvas + panel; tablet panel as sheet; phone read-only list of steps with run history and pause/resume. |
| Motion | During a test, the active step shows a static progress mark then result; no traveling dots. Reduced motion: identical. |
| Accessibility | Step list is the accessible structure even when drawn as a canvas; connectors are decorative. |
| Build | Represent flows as ordered data first, canvas second. `--step-h:64px; --connector:1.5px`. |
| AI mutation | Glowing nodes, animated particle connectors, "magic" sparkle icons, dark neon canvas. |
| Fails when | Flows are one-step toggles (use a settings row); users need code (use a developer tool system). |

### Daybook
**Thesis.** Personal work starts from today: a short, finishable list with gentle structure and the satisfaction of closing it. Character: encouraging, plain, human. Audience: individuals and small teams managing their own tasks. **Fit:** task managers, my-work views, small-team project tools.

**Fingerprint** `density=medium; composition=stream; surface=tonal-blocks; type=rounded-sans; nav=top-bar; accent=medium; motion=event-celebration; imagery=none; radius=high; data=light; tone=encouraging-plain`

| Layer | Decision |
|---|---|
| Composition | Top bar with Today, Upcoming, Projects; Today is a single column of grouped tasks (Overdue, Morning, Later) with a capture field on top. Detail opens inline below the task. |
| Type | Rounded humanist sans (Nunito Sans or Figtree; fallback `system-ui`). 28/17/15/13px; task titles 16px. Arabic: Tajawal or Noto Sans Arabic. |
| Color | canvas #FFF9F0 · surface #FFFFFF · ink #2A2420 · muted #6A5F55 · line #EADFCF · action #B4441E · on-action #FFFFFF. Tonal blocks group time sections; one warm accent. |
| Space and shape | 8px base; task rows 48px; groups on 16px-radius tonal blocks; checkboxes 20px circles; controls 40px. |
| Icons and imagery | None; dates and projects as text. |
| Components | Capture field parses dates ("tomorrow 9am") and shows the parse before saving. Completion is a checkbox with undo. Reschedule by keyboard (T for today, M for tomorrow). |
| States | Empty Today: "Nothing due today" plus the next dated task, not a mascot. Overdue grouped separately without shaming copy. Completed list collapses. |
| Responsive | Same single column at all sizes; wide screens add Upcoming as a second column; phone capture fixed above keyboard. |
| Motion | Completing a task draws the check (180ms) and collapses the row (200ms); closing the day shows a brief tally. Reduced motion: instant check, no collapse animation. |
| Accessibility | Checkbox is a real input; undo toast is focusable and announced. |
| Build | `--row-h:48px; --group-radius:16px; --capture-h:44px`. Keep natural-language parsing visible and editable. |
| AI mutation | Confetti on every task, streak flames, productivity score cards, gradient headers. |
| Fails when | Team-level planning with dependencies and many projects (use Plan Grid). |

### Plan Grid
**Thesis.** Programs are schedules: a strict time grid where bars, dependencies, and milestones are measured, not illustrated. Character: architectural, rigorous. Audience: project and program managers. **Fit:** project timelines, roadmaps, resource planning, Gantt views.

**Fingerprint** `density=dense; composition=timeline; surface=flat-ruled; type=grotesque; nav=persistent-sidebar; accent=multi-role; motion=physical-direct; imagery=none; radius=square; data=strong; tone=architectural`

| Layer | Decision |
|---|---|
| Composition | Sidebar of projects; left pane of work items as a tree; right pane time grid with today line, milestones, dependencies. Zoom levels day/week/quarter. |
| Type | Neo-grotesk (Archivo or Hanken Grotesk; fallback `system-ui`), tabular dates. 20/14/12/11px. Arabic: IBM Plex Sans Arabic; timeline direction follows locale. |
| Color | canvas #FFFFFF · surface #F7F7F5 · ink #161616 · muted #555555 · line #D4D4D0 · action #1F4E79 · on-action #FFFFFF. Bars use team roles (four muted hues) with labels; critical path in ink outline. |
| Space and shape | Rows 32px; bars 20px tall, square ends; milestones as diamonds; grid lines hairline, month lines 1px ink 20%. |
| Icons and imagery | None. |
| Components | Drag bars to move, edges to resize, connectors by dragging from a bar end; keyboard date entry in the tree. Baseline comparison toggle. |
| States | Slipped items show original baseline ghosted; dependency conflicts red with a reason; empty timeline offers import from list. |
| Responsive | Desktop split panes; tablet tree collapses to titles; phone becomes a dated list grouped by week (no Gantt on phones). |
| Motion | Bars follow the pointer; dependent bars shift with a 150ms settle so cause is visible. Reduced motion: instant shift plus a highlight. |
| Accessibility | Tree is the accessible structure; bar edits available via date fields. |
| Build | `--row-h:32px; --bar-h:20px; --radius:0`. Calculate dependency shifts server-side for consistency. |
| AI mutation | Rounded gradient bars, progress percentages on every bar, avatars stacked on bars. |
| Fails when | Work is not time-bound; individuals manage a few tasks. |

### Suite Frame
**Thesis.** A suite is a set of tools sharing one frame: the file, the people, and the switcher stay put while the working area changes. Character: dependable, neutral, familiar. Audience: organizations using documents, sheets, drive, and admin together. **Fit:** office suites, internal portals, enterprise multi-app shells.

**Fingerprint** `density=medium; composition=split-pane; surface=layered-panels; type=institutional-sans; nav=hub-and-spoke; accent=low; motion=restrained-causal; imagery=user-content; radius=low; data=moderate; tone=dependable`

| Layer | Decision |
|---|---|
| Composition | Persistent top frame (app switcher, search, account) and per-app split panes (list + preview). Home hub lists recent files by app, shared with me, and pending requests. |
| Type | Institutional sans (Noto Sans; fallback `system-ui`), 22/15/13/12px, broad script coverage is the reason for the choice. Arabic: Noto Sans Arabic; Hebrew, CJK via Noto families. |
| Color | canvas #F1F3F4 · surface #FFFFFF · ink #1F2124 · muted #55595E · line #D0D4D8 · action #185ABC · on-action #FFFFFF. Each app has a small identifying hue used only in its icon and switcher. |
| Space and shape | 8px base; panes separated by 1px lines; 4px radius controls, 8px radius menus; file thumbnails 4px. |
| Icons and imagery | File thumbnails and user avatars; app icons simple geometric glyphs. |
| Components | Sharing dialog as the most-refined component: people, roles, link access, expiry, with plain consequences. Primary action per app ("New document"). |
| States | Offline edits queue with status; access requests appear in the hub; storage quota warnings before blocking. Empty folder offers upload and "Create". |
| Responsive | Desktop split panes; tablet list-or-preview toggle; phone lists with full-screen preview and bottom app switcher. |
| Motion | Pane transitions 160ms; none on hub. Reduced motion: none. |
| Accessibility | Consistent landmarks across apps; switcher reachable by shortcut and announced. |
| Build | Shared frame package with tokens; apps consume `--frame-h:56px` and never restyle the frame. |
| AI mutation | Each app gets its own gradient theme; hub as bento of widgets; glass top bar. |
| Fails when | There is one app; the brand must be expressive. |

## Confusable pairs

- **Ledger Desk vs Object Sheet:** both dense. Ledger Desk is for settings and lists read top to bottom by occasional admins; Object Sheet is for one complex record used daily by experts via command.
- **Pipeline Wall vs Plan Grid:** both move work. Pipeline position means stage; Plan Grid position means time.
- **Daybook vs Relay Thread:** both streams. Daybook is my finishable list; Relay Thread is a shared, never-finished conversation.
