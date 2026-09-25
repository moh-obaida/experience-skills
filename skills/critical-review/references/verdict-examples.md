# Verdict Examples

Short cases showing that a good review can land anywhere: keep, simplify, reject, remove, preserve,
add complexity, keep whitespace, keep cards, keep dramatic motion. Cases marked *observed* draw on
real products in the observation log (2026-09-24); cases marked *invented* are teaching scenarios.

## 1. Keep the current version (invented)
**Proposal:** replace a plain five-field public-service form with an animated five-step wizard with
illustrations and custom dropdowns. **Finding:** the current page meets the goal; the proposal adds
motion risk, custom-control accessibility risk, and screens without evidence of benefit. GOV.UK's
research-backed pattern (UKD1) supports one question per page for complex services, but with plain
components and no spectacle. **Verdict:** worse than current. **Recommendation:** keep current; if
the service grows, move to plain question pages.

## 2. Simplify the proposal (invented)
**Proposal:** a settings page redesign with 14 toggles grouped in cards with icons. **Finding:** 9 of
14 settings are never changed from default. **Verdict:** overdesigned. **Recommendation:** keep five
visible, move nine behind "Advanced", remove icons that repeat labels.

## 3. Reject a trendy change (invented)
**Proposal:** glass panels and an aurora gradient on a data table admin. **Finding:** nothing is behind
the glass; table text contrast drops; `backdrop-filter` over large areas costs performance.
**Verdict:** unnecessary. **Recommendation:** keep solid surfaces; improve row density and status.

## 4. Remove a new feature (invented)
**Proposal:** add a command palette to an app with twelve actions. **Finding:** every action is already
one click away; the palette adds a concept and maintenance. **Verdict:** unnecessary. **Recommendation:**
show keyboard shortcuts on the existing buttons instead.

## 5. Preserve a familiar control (observed)
**Proposal:** segmented, bouncing digit boxes for a game code. **Evidence:** Kahoot and Blooket (KH1,
BK1) use one standard field in a strongly branded environment. **Verdict:** worse than current.
**Recommendation:** keep a single standard input; move personality to the page.

## 6. Add complexity because value justifies it (invented, with observed support)
**Proposal:** replace a blocking spinner for 2–6 minute generation with a background job system (job
IDs, status, notification). **Cost:** real engineering. **Value:** removes a multi-minute blocking wait
for every generation, removes false failures, allows leaving. **Verdict:** excellent for this
context. **Recommendation:** ship with idempotent retry.

## 7. Intentionally use whitespace (observed)
**Proposal:** "fill the empty space" on a conversational AI start screen with example cards and
stats. **Evidence:** ChatGPT's start (CG1–CG3) keeps one composer and one suggestion; the space is
where the conversation appears. **Verdict:** the current emptiness is justified; the proposal adds
filler. **Recommendation:** keep; at most one hint.

## 8. Intentionally use cards (observed)
**Proposal:** "remove all cards, they are AI slop" on a course marketplace. **Evidence:** Coursera's
course cards (CO1, CO2) are independent, comparable objects with provider, type, and rating.
**Verdict:** the cards are justified; removing them would hurt comparison. **Recommendation:** keep
cards; remove decorative ones elsewhere.

## 9. Intentionally use dramatic motion (invented)
**Proposal:** reduce all motion in a classroom quiz to fades. **Finding:** the resolution moment
(answer correct → token travels to the board) is how the room notices what happened; it is event-
driven, short, interruptible, and has a reduced-motion equivalent. **Verdict:** the proposal would
remove information. **Recommendation:** keep event motion; remove decorative entrance animations.

## 10. Ship with changes (observed)
**Proposal:** a membership modal on arrival to raise sign-ups on a booking site. **Evidence:** Booking
(B1) blocks search with such a modal; Airbnb's mobile site shows a comparable message as a
non-blocking pill (ABm4). **Verdict:** promising goal, harmful execution. **Recommendation:** show
the offer after the first search or as an inline banner.
