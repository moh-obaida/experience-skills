<!-- GENERATED FROM examples/full-product/public-service-form.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: Public-Service Form

*Invented teaching example, checked against observed public guidance (GOV.UK Design System
question pages and error summary, observations UKD1–UKD4 and UKE1–UKE2, 2026-09-24).*

**Archetype:** TRANSACTIONAL · **Product types:** government, healthcare, utilities, education admin
**Skills:** critical-review, interaction-design, workflow-compression

## Context

Residents report a missed bin collection. They need: address, which bin, date missed, optional
note, contact email. Many are older, on phones, or using assistive technology. The council's current
page is one plain form with standard controls and an error summary.

## User goal and constraints

- **Goal:** report the missed collection quickly and correctly, and know it was received.
- **Constraints:** public-sector accessibility requirements; low-end phones; users under mild stress;
  the council has one developer.

## The proposed "modern" redesign

- A five-step wizard, one field per screen, with a progress bar.
- Animated transitions between steps.
- A hero illustration of a smiling bin on each step.
- Custom dropdowns with icons for bin types.
- A gradient "Next" button; final "Submit" hidden behind a review screen.

## Bad AI instinct

> "Much more engaging and modern than the old form. The step-by-step flow is easy to follow."

The instinct equates visual novelty with quality, praises before evaluating, and ignores who uses
the service.

## Correct analysis

- **Step count is not the main problem.** GOV.UK's research-backed pattern recommends *starting* with
  one question per page for services (UKD1). Five plain question pages could be fine.
- **The spectacle is the problem:**
  - Custom dropdowns lose native behavior on mobile and with screen readers.
  - Animations add delay and motion-sickness risk with no information.
  - Illustrations on every step push fields down on small screens.
  - A gradient button and a mascot undermine the plain, official tone that builds trust.
- **Known context is unused:** the council knows collection days by address; "date missed" can default
  to the most recent scheduled collection.
- **Evidence:** proposal described (E6 for user impact); the platform facts are documented (E4).

## Better direction

Keep the current single page, improved:

- Address lookup from postcode (one field, then pick).
- Bin type as radio buttons with small pictures (native inputs; pictures are labels, not controls).
- Date defaulted to the last scheduled collection for that address, editable.
- Error summary and inline messages (UKE1, UKE2).
- A confirmation page with a reference number and what happens next.

## Alternative direction

Plain question pages (one question per page, GOV.UK pattern): back link, question as the heading,
continue button, no animation, no illustrations, a check-your-answers page before submit. Right if
research shows users struggle on the single page, or the service grows branching questions.

## Measurements

```
Proposal: 5 screens · 5 "Next" + 1 review · 5 custom controls · animation on every step
Better:   1 screen  · 1 submit · 0 custom controls · date and address partly inferred
Alternative: 5 plain question pages + check answers · 0 custom controls · 0 animation
```

## Implementation notes

- Native `select`/radios; `autocomplete` attributes for address and email.
- Server-side validation mirrored inline; keep the user's input on error.
- Prefix the page title with "Error: " when errors exist.
- No motion; respect browser back (UKD4).

## Verification

- Keyboard-only and screen-reader pass of the whole flow.
- 200% zoom and 320 px reflow.
- Submit with each field invalid; confirm the summary links focus the right field.
- Measure time to complete with three representative users if possible.

## Failure conditions

- Recommending spectacle "to engage citizens."
- Rejecting one-question-per-page by reflex; it is a valid, evidence-backed pattern.
- Removing the confirmation page (users need proof of submission).

## When this lesson does not apply

Long applications with branching logic (benefits, visas) benefit from question pages. The lesson is
not "never use steps"; it is "choose structure for the task, and keep public services plain."

## Canonical rule

**Visual spectacle is not universally good. Context is part of taste.**
