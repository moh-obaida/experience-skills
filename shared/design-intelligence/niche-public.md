# Niche Atlas: Public & Institutional

Public and institutional products serve everyone, including people in stress, on old phones, with
low literacy, using assistive technology, or reading in a second language. Clarity is the identity;
authority comes from consistency and plain language, not decoration. Generated defaults import
startup heroes, gradients, and marketing copy into services people are obliged to use. Cultural
institutions are the exception that proves the rule: museums and universities may be expressive,
but their collections, programs, and services must stay findable. Load with `niche-atlas-index.md`;
compare three systems with `design-system-selector.md`.

## Product realities

### Government and municipal services
- **Reality:** People must complete a task (apply, renew, pay, report) and often cannot choose another provider.
- **Jobs:** Find the right service, check eligibility, complete a form, upload evidence, pay, track status, get help.
- **Density:** Medium.
- **Surfaces:** Service start page, eligibility questions, form pages, check answers, confirmation, status tracking, local information (collections, closures).
- **States:** Not eligible (with alternatives), save and return, session timeout, error summary, payment failed, application received, decision made, appeal.
- **Interaction:** Phone-majority, assistive technology, low bandwidth.
- **Trust:** Very high; legal consequences.
- **Generated-UI failures:** Hero banners before the task, card grids of services without descriptions, wizard progress bars on 30-step forms, placeholder-only labels.

### Universities and education institutions
- **Reality:** Many audiences (prospective students, current students, staff, researchers, public) share one site; programs and deadlines are the core content.
- **Jobs:** Find a program and its requirements, apply, find a person or department, find term dates, find student services.
- **Density:** Medium.
- **Surfaces:** Homepage, program pages, admissions, department pages, people directory, news, events, student portal.
- **States:** Application open/closed, deadline passed, program discontinued, event full.
- **Interaction:** Phone for prospective students; desktop for staff.
- **Trust:** High.
- **Generated-UI failures:** Stock campus hero with generic slogan, programs hidden behind marketing, carousel homepages.

### Libraries and museums
- **Reality:** Collections and programs are the value; visitors plan visits or search catalogs.
- **Jobs:** Search the catalog, place a hold, renew, find opening hours, explore a collection object, book a visit or event.
- **Density:** Dense in catalogs, sparse in object pages.
- **Surfaces:** Catalog search, record, account (loans, holds), visit info, collection object, exhibition, events.
- **States:** On loan, available at branch, hold ready, overdue, object not on view, timed entry sold out.
- **Interaction:** Search-first, phone during visits.
- **Trust:** Moderate.
- **Generated-UI failures:** Catalog records as cards without call numbers, glassy museum sites where objects are small.

### Public information
- **Reality:** Statistics, guidance, and alerts that must be accurate, dated, and understandable.
- **Jobs:** Find a fact, understand a trend, download data, check current alert level.
- **Density:** Dense.
- **Surfaces:** Topic pages, data stories, charts, downloads, methodology, alerts.
- **States:** Provisional data, revised, discontinued series, active alert, alert lifted.
- **Interaction:** Search, sharing links.
- **Trust:** Very high.
- **Generated-UI failures:** Charts without sources or dates, KPI cards replacing context.

### Nonprofit
- **Reality:** Organizations explain a cause, show impact, and ask for support; credibility and specificity drive donations.
- **Jobs:** Understand the cause and the organization's approach, see evidence of impact, donate, volunteer, get help if a beneficiary.
- **Density:** Medium.
- **Surfaces:** Home, cause/program pages, impact reports, donate flow, get-help pages, volunteer sign-up.
- **States:** Campaign active/ended, recurring donation, donation failed, receipt.
- **Interaction:** Phone, sharing.
- **Trust:** High; financial transparency.
- **Generated-UI failures:** Vague "Make a difference" heroes, stock photos of beneficiaries, impact numbers without sources.

### Civic participation
- **Reality:** Residents respond to consultations, participatory budgets, and petitions; they need to understand proposals and trust that input matters.
- **Jobs:** Understand a proposal, see where it applies, comment or vote, see outcomes.
- **Density:** Medium.
- **Surfaces:** Consultation page, map of proposals, proposal detail, comment/vote, results, reports.
- **States:** Open, closed, under review, decided, implemented.
- **Interaction:** Phone, maps.
- **Trust:** High; legitimacy.
- **Generated-UI failures:** Gamified civic engagement, dark patterns nudging votes, maps without accessible alternatives.

## Systems

### Plain Service
**Thesis.** A government service is a sequence of plain questions, one idea per page, with errors summarized and a check-your-answers page before commitment. Character: plain, authoritative. Audience: the whole public. **Fit:** government transactional services, benefits, permits, licensing.

**Fingerprint** `density=medium; composition=stepwise; surface=flat-ruled; type=institutional-sans; nav=stepwise; accent=low; motion=none; imagery=none; radius=square; data=light; tone=plain-authoritative`

| Layer | Decision |
|---|---|
| Composition | Start page with who can use it, what you need, and time estimate; question pages with one question each, back link, continue; check answers with change links; confirmation with reference number and what happens next. |
| Type | Institutional sans with wide script coverage (Noto Sans or Public Sans), 19px body, 36px headings, bold for emphasis only. Arabic: Noto Sans Arabic 20px. |
| Color | canvas #FFFFFF · surface #F1F3F4 · ink #111416 · muted #4C555B · line #A7AFB4 · action #1A4F7A · on-action #FFFFFF. Focus is a 3px amber #E8A317 outline plus ink underline, visible on every surface. Error red with left border and summary at top. |
| Space and shape | 8px base; square controls with 2px ink borders; 48px buttons, filled for the one continue action, text links for everything else. |
| Icons and imagery | None. |
| Components | Radios, checkboxes, date inputs as three fields, file upload with list; error summary linking to fields. |
| States | Save and return; session timeout warning with extend; not-eligible pages with alternatives; application status with dates. |
| Responsive | Single column at all sizes, max 640px; works without JavaScript for core paths. |
| Motion | None. |
| Accessibility | Tested with screen readers and magnification; plain language at reading age 9–11; no timeouts without warning. |
| Build | Server-rendered forms; progressive enhancement; each question a route. |
| AI mutation | Hero banner, gradient buttons, placeholder labels, 30-step progress bar, "Welcome to your personalized portal". |
| Fails when | Expressive cultural sites; expert tools. Do not reproduce any national design system's exact palette or components; derive from the service's own standards. |

### Council Noticeboard
**Thesis.** Local government information is practical and place-based: your address unlocks your bin days, closures, and services in dense, scannable lists and maps. Character: local, helpful. Audience: residents. **Fit:** municipal websites, local information hubs, utilities information.

**Fingerprint** `density=dense; composition=index; surface=flat-bordered; type=humanist-sans; nav=top-bar; accent=medium; motion=none; imagery=cartography; radius=low; data=moderate; tone=local-helpful`

| Layer | Decision |
|---|---|
| Composition | Search and "Enter your postcode/address" first; then top tasks as a list with descriptions; alerts band; A–Z of services. |
| Type | Humanist sans (Source Sans 3 18px). Arabic: Noto Sans Arabic. |
| Color | canvas #F7F7F5 · surface #FFFFFF · ink #161816 · muted #505550 · line #CFD3CF · action #1D4F91 · on-action #FFFFFF. Council brand color as a thin top band and headings. |
| Space and shape | 4px radius; bordered lists. |
| Icons and imagery | Maps for local services and roadworks; no stock people. |
| Components | Address lookup, report a problem with map pin, pay a bill. |
| States | Service disruption alerts; closed facilities; report received with reference. |
| Responsive | Phone first; lists single column. |
| Motion | None. |
| Accessibility | Maps with list alternatives; plain language. |
| Build | Address-aware content via API. |
| AI mutation | Card grid of services with icons in colored squares, hero with skyline. |
| Fails when | Transactional forms (use Plain Service for the flow). |

### Campus Quad
**Thesis.** A university site is a place with many doors: strong institutional typography and real campus photography frame direct routes to programs, admissions, and people. Character: proud, accessible. Audience: prospective and current students, staff, public. **Fit:** universities, colleges, schools.

**Fingerprint** `density=medium; composition=hub; surface=tonal-blocks; type=serif-sans-duet; nav=top-bar; accent=medium; motion=restrained-causal; imagery=photography; radius=square; data=light; tone=proud-accessible`

| Layer | Decision |
|---|---|
| Composition | Home hub: search and audience routes (Study, Research, Students, Staff) with key deadlines; program pages lead with entry requirements, fees, duration, start dates, then narrative. |
| Type | Serif display (Libre Caslon or Source Serif 4) for headings, sans for body (Source Sans 3 17px). Arabic: Amiri headings, Noto Sans Arabic body. |
| Color | canvas #FAF8F4 · surface #FFFFFF · ink #1A1A18 · muted #56544F · line #DCD8CF · action #6B1E2E · on-action #FFFFFF. Institutional color as tonal blocks for sections. |
| Space and shape | Square; tonal section bands. |
| Icons and imagery | Real campus and research photography with captions naming people and places. |
| Components | Program finder with filters; apply CTA with deadline; people directory. |
| States | Applications closed with next intake; discontinued programs redirect. |
| Responsive | Phone first for prospective students. |
| Motion | Minimal transitions. |
| Accessibility | Photography alt text; program facts as text. |
| Build | Program data from source systems. |
| AI mutation | Carousel of stock students, "Shape your future" hero, cards without facts. |
| Fails when | Student portals with transactions (use Syllabus Spine or Plain Service patterns). |

### Reading Room
**Thesis.** A library catalog is a finding aid: exact records, availability by branch, and holds in two steps, set with the calm of a reading room. Character: scholarly, welcoming. Audience: library users. **Fit:** library catalogs, archives, research collections.

**Fingerprint** `density=dense; composition=index; surface=paper-sheet; type=editorial-serif; nav=top-bar; accent=low; motion=none; imagery=product-object; radius=low; data=moderate; tone=scholarly-welcoming`

| Layer | Decision |
|---|---|
| Composition | Search first; results with cover, title, author, year, format, availability by branch; record page with call number and place hold. |
| Type | Editorial serif for titles (Libre Baskerville or Source Serif 4), sans for metadata. Arabic: Amiri titles. |
| Color | canvas #F3F0E9 · surface #FFFDF9 · ink #1F1D19 · muted #5A564E · line #D9D2C4 · action #2E4A62 · on-action #FFFFFF. |
| Space and shape | 3px radius; paper surfaces. |
| Icons and imagery | Book covers; format icons with labels. |
| Components | Filters by format/branch/availability; place hold; renew all. |
| States | On loan with due date; hold ready; overdue with fines policy. |
| Responsive | Phone: results as rows with cover. |
| Motion | None. |
| Accessibility | Search accessible; records structured. |
| Build | Integrate with ILS; persistent record URLs. |
| AI mutation | Card grids hiding call numbers, gradients. |
| Fails when | Exhibition storytelling. |

### Vitrine
**Thesis.** A museum object page is a vitrine: the object large and zoomable, a label with provenance, and paths to related works. Character: reverent, curious. Audience: museum visitors and researchers. **Fit:** museum collections online, digital exhibitions, archives of objects.

**Fingerprint** `density=sparse; composition=object-sheet; surface=full-bleed; type=high-contrast-display; nav=in-content; accent=none; motion=restrained-causal; imagery=artwork; radius=square; data=light; tone=reverent-curious`

| Layer | Decision |
|---|---|
| Composition | Object image full-bleed on a neutral ground; label beneath (title, maker, date, medium, dimensions, provenance, accession number); related objects by theme. |
| Type | High-contrast display (Bodoni Moda or Gloock) for titles, sans for labels (Karla). Arabic: Aref Ruqaa display for titles with care; Noto Naskh Arabic labels. |
| Color | canvas #EDEBE7 · surface #F7F6F3 · ink #1A1917 · muted #57544F · line #D5D1CA · action #1A1917 · on-action #F7F6F3. |
| Space and shape | Square; generous space around objects. |
| Icons and imagery | High-resolution images with deep zoom; multiple views. |
| Components | Zoom, download (rights permitting), cite, add to collection. |
| States | Not on view; rights restricted image; object record updated. |
| Responsive | Phone: image first full width, label below. |
| Motion | Zoom transitions smooth. Reduced motion: instant zoom levels. |
| Accessibility | Detailed descriptions; keyboard zoom. |
| Build | IIIF image services. |
| AI mutation | Glass overlays on art, tiny images in rounded cards. |
| Fails when | Transactional services. |

### Open Figures
**Thesis.** Public data earns trust through method: every chart dated, sourced, and explained, with data downloadable beside it. Character: transparent, rigorous. Audience: public, journalists, researchers. **Fit:** statistics offices, public health data, open data portals.

**Fingerprint** `density=dense; composition=document; surface=flat-ruled; type=grotesque; nav=persistent-sidebar; accent=multi-role; motion=none; imagery=data-graphic; radius=square; data=strong; tone=transparent`

| Layer | Decision |
|---|---|
| Composition | Topic sidebar; data story pages with headline finding, chart, plain explanation, table, download, methodology, release date. |
| Type | Grotesk (Public Sans 16px), tabular figures. Arabic: IBM Plex Sans Arabic. |
| Color | canvas #FFFFFF · surface #F4F5F6 · ink #111315 · muted #52575D · line #D5D9DD · action #1D4E89 · on-action #FFFFFF. Chart palette colorblind-safe with direct labels. |
| Space and shape | Square; ruled sections. |
| Icons and imagery | Charts with sources and dates. |
| Components | Download CSV, embed chart, change geography, compare periods. |
| States | Provisional and revised labels; discontinued series notes. |
| Responsive | Charts simplify on phones with table fallback. |
| Motion | None. |
| Accessibility | Tables for every chart; alt descriptions of trends. |
| Build | Charts generated from published data files. |
| AI mutation | KPI cards without context, 3D charts. |
| Fails when | Emotional campaigns. |

### Cause Poster
**Thesis.** A nonprofit's case is made like a poster: one urgent, specific claim, real photography with consent, evidence of impact, and a clear way to help. Character: urgent, hopeful. Audience: supporters and potential donors. **Fit:** nonprofits, campaigns, charities.

**Fingerprint** `density=medium; composition=poster; surface=full-bleed; type=condensed-display; nav=top-bar; accent=high; motion=none; imagery=photography; radius=low; data=light; tone=urgent-hopeful`

| Layer | Decision |
|---|---|
| Composition | Full-bleed photograph with a specific headline; what the organization does; evidence with sources; donate with amounts tied to outcomes; get-help route prominent for beneficiaries. |
| Type | Condensed display (Oswald or Big Shoulders Display), body sans (Source Sans 3 18px). Arabic: Lalezar or Cairo display. |
| Color | canvas #FFFFFF · surface #F5F1EA · ink #151412 · muted #56524B · line #DED7CB · action #B0301C · on-action #FFFFFF. |
| Space and shape | 4px radius; full-bleed sections. |
| Icons and imagery | Photography with consent and dignity; captions with names where agreed. |
| Components | Donate (one-off/monthly), volunteer sign-up, get help. |
| States | Campaign ended with results; donation receipt; failed payment retry. |
| Responsive | Phone first. |
| Motion | None. |
| Accessibility | Headline contrast over photos with scrims. |
| Build | Donation provider integration with receipts. |
| AI mutation | "Make a difference" hero, stock beneficiaries, unsourced impact stats. |
| Fails when | Services beneficiaries must use (use Plain Service). |

### Town Meeting Map
**Thesis.** Civic participation is about place: proposals on a map, each with plain explanation, and a visible record of what happened to people's input. Character: participatory, fair. Audience: residents. **Fit:** consultations, participatory budgeting, planning applications.

**Fingerprint** `density=medium; composition=map-led; surface=flat-bordered; type=humanist-sans; nav=hub-and-spoke; accent=multi-role; motion=restrained-causal; imagery=cartography; radius=medium; data=moderate; tone=participatory`

| Layer | Decision |
|---|---|
| Composition | Hub of open consultations; map of proposals with list alternative; proposal page with summary, documents, comments, vote; outcomes page. |
| Type | Humanist sans (Source Sans 3 17px). Arabic: Noto Sans Arabic. |
| Color | canvas #F5F6F3 · surface #FFFFFF · ink #1A1C19 · muted #535751 · line #D2D6CF · action #2A5E3A · on-action #FFFFFF. Proposal categories with labels. |
| Space and shape | 8px radius; bordered panels. |
| Icons and imagery | Maps and plans. |
| Components | Comment, vote, follow; stage timeline. |
| States | Open, closed, decided with rationale, implemented. |
| Responsive | Phone: list first, map toggle. |
| Motion | Map pans to selected proposal. Reduced motion: jump. |
| Accessibility | List alternative to map. |
| Build | Moderation workflow. |
| AI mutation | Gamified badges, dark-pattern nudges. |
| Fails when | Services without participation. |

### Emergency Bulletin
**Thesis.** In an emergency, public information must be unmistakable: severity first, what to do now in numbered steps, where it applies, and when it was updated. Character: urgent, calm. Audience: the public during incidents. **Fit:** public alerts, emergency information, outage and crisis pages.

**Fingerprint** `density=sparse; composition=document; surface=tonal-blocks; type=grotesque; nav=in-content; accent=high; motion=none; imagery=cartography; radius=square; data=light; tone=urgent-calm`

| Layer | Decision |
|---|---|
| Composition | Severity band at top with level name; "What to do now" numbered; affected area map with text list; updated time; sources and contacts. |
| Type | Bold grotesk (Archivo 700 for headings, Archivo 18px body). Arabic: Cairo. |
| Color | canvas #FFFFFF · surface #FFF4E5 · ink #111111 · muted #4F4F4F · line #D9D9D9 · action #A40E0E · on-action #FFFFFF. Severity bands: warning amber, danger red, all-clear neutral, each named. |
| Space and shape | Square; tonal bands. |
| Icons and imagery | Maps with text alternatives. |
| Components | Share, subscribe to alerts, translate. |
| States | Active, updated, lifted with timestamp. |
| Responsive | Phone first; lightweight page under 100KB. |
| Motion | None. |
| Accessibility | Plain language, translations, screen reader priority. |
| Build | Static, cacheable, works on poor networks. |
| AI mutation | Hero images, animated icons, marketing layout. |
| Fails when | Everyday services. |

### Case Desk
**Thesis.** Public-sector caseworkers process applications by evidence: the case record beside the documents, with policy rules and deadlines visible. Character: procedural, fair. Audience: caseworkers and back-office staff. **Fit:** government casework, benefits processing, permitting back offices.

**Fingerprint** `density=dense; composition=split-pane; surface=flat-ruled; type=institutional-sans; nav=rail; accent=low; motion=none; imagery=none; radius=low; data=strong; tone=procedural`

| Layer | Decision |
|---|---|
| Composition | Rail of queues; case record (applicant, answers, checks, history) left; evidence document viewer right; decision panel with rule references. |
| Type | Institutional sans (Noto Sans 14px). Arabic: Noto Sans Arabic. |
| Color | canvas #F2F3F3 · surface #FFFFFF · ink #141616 · muted #4F5656 · line #CCD1D1 · action #1D4D6B · on-action #FFFFFF. |
| Space and shape | Ruled record sections; 4px radius controls. |
| Icons and imagery | None. |
| Components | Request more information, decide with reason codes, assign, add note. |
| States | Deadline approaching; awaiting applicant; decision appealed. |
| Responsive | Desktop. |
| Motion | None. |
| Accessibility | Keyboard complete; document viewer accessible. |
| Build | Audit log; decision reasons structured. |
| AI mutation | KPI tiles of case counts, gradients. |
| Fails when | Public-facing surfaces. |

## Confusable pairs

- **Plain Service vs Case Desk:** two sides of one service. Plain Service is the applicant's path; Case Desk is the officer's evidence and decision.
- **Vitrine vs Reading Room:** both collections. Vitrine presents one object; Reading Room finds many records.
- **Emergency Bulletin vs Cause Poster:** both urgent. The Bulletin instructs during a crisis; the Poster persuades support.
