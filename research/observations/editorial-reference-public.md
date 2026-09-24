# Observations: Editorial, Reference, and Public Service

Dated observations of real, public product surfaces made for Experience Skills. Each bullet has a
stable ID that precedent modules cite. Observations describe what was seen; interpretation lives in
the precedent modules (`shared/precedent/`) and the design-intelligence library.

**Method codes:** R = the live page was opened in a browser and looked at (desktop viewport about
800×600 CSS px unless noted; mobile at 375×812); T = page text or documentation read; R+T = both.
Regional versions differ; the region is noted where it affected what was seen. Sites change; treat
every observation as true on its date only. No screenshots are stored in this repository.

## The Guardian — international front (https://www.theguardian.com/international) — R, 2026-09-24
- GU1 A full-page consent dialog blocks all content on first visit; "No, thank you" is offered with equal visual weight to accept.
- GU2 After consent: an empty grey advertising slot occupies the top band of the first viewport before the masthead (reserved ad space shows as dead space when unfilled).
- GU3 Section navigation (News, Opinion, Sport, Culture, Lifestyle) uses a distinct color per pillar as an identity and wayfinding system; headlines are set in a heavy serif; a red "Live" kicker marks live coverage.
- GU4 A horizontal rail of topical stories uses circular photo crops with a short colored category label above each headline.

## Bloomberg — Markets section (https://www.bloomberg.com/markets) — R, 2026-09-24
- BL1 A live ticker strip (S&P 500, Nasdaq, US 10Y…) with values and colored percentage changes sits directly under the masthead: the most time-sensitive data is the persistent header.
- BL2 An empty grey advertising slot occupies the top of the first viewport before any content (unfilled reserved space reads as dead space).
- BL3 Section subnavigation (Deals, Fixed Income, ETFs, FX Center…) under a plain "Markets" heading; photo-led story grid below.

## GOV.UK Design System — Question pages pattern (https://design-system.service.gov.uk/patterns/question-pages/) — Documentation (T), 2026-09-24
- UKD1 Recommends starting with one question per page, with a back link, a page heading (the label or legend can be the heading, so screen readers hear it once), and a continue button; progress indicators only if research shows they help.
- UKD2 "Only ask for a piece of information once within a single journey"; reuse earlier answers by pre-populating or offering carried-forward responses. Official, research-backed form of "don't ask what you already know".
- UKD3 Mark optional fields with "(optional)"; never mark mandatory fields with asterisks; allow "I do not know" where valid.
- UKD4 Do not break the browser back button; after once-only actions (payment, submission), back still works but shows a sensible message instead of allowing a repeat.

## GOV.UK Design System — Error summary (https://design-system.service.gov.uk/components/error-summary/) — Documentation (T), 2026-09-24
- UKE1 Always show an error summary at the top (below back link, above h1) with the heading "There is a problem", even for one error, plus an inline message at each field.
- UKE2 Move keyboard focus to the summary; each summary item links to the field (first field for multi-field answers such as dates); wording identical to the inline message; prefix the page title with "Error: " so screen readers announce it first.

## Wikipedia — article, mobile (https://en.m.wikipedia.org/wiki/Typography) — R at 375×812, 2026-09-24
- WPm1 Mobile article starts with the title and the text within one screen: header is a single slim bar (menu, wordmark, search, account); article actions collapse into a row of four icons (language, download, watch, edit).
- WPm2 Body text keeps a comfortable measure and size at 375 px; hatnotes ("redirects here", "not to be confused with") are visually subordinate in a tinted box above the lead.

## Wikipedia — article, desktop (https://en.wikipedia.org/wiki/Typography) — R, 2026-09-24
- WPd1 Text-first composition: serif article title, dense links, a right-floated image with caption; a "77 languages" control near the title. Identity is almost entirely typographic and structural.

## GOV.UK — homepage, mobile (https://www.gov.uk/) — R at 375×812, 2026-09-24
- UKm1 Cookie banner offers "Accept additional cookies" and "Reject additional cookies" as identical full-width buttons, plus "View cookies".
- UKm2 The blue hero states what the site is ("The best place to find government services and information") and puts Search directly beneath as the primary tool; header has only Menu and search.

## The Pudding — homepage (https://pudding.cool/) — R, 2026-09-24
- PU1 A hand-lettered wordmark and sticker-like hand-drawn navigation labels give the publication a crafted, human identity.
- PU2 Stories are an issue-numbered grid (#223, AUG 2026); each card's cover is a crop of that story's own visualization on its own color, so the grid is varied without decoration.
- PU3 A row of hand-drawn icon filters (Our faves, Popular, Updating, Your input, Video, Audio) sits beside a search field.

## Our World in Data — topic page (https://ourworldindata.org/co2-emissions) — R, 2026-09-24
- OW1 The title is framed by the questions it answers ("How much CO₂ does the world emit? Which countries emit the most?") under a centered serif heading: content-first, question-led.
- OW2 Credibility tools sit beside the byline: "Cite this article", "Reuse our work freely", "Browse past versions", with first-published and last-updated dates.
- OW3 Cookie banner offers "Reject optional cookies" and "Accept optional cookies".
