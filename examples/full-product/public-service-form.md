# Worked Example: Public-Service Form

**Archetype:** TRANSACTIONAL · **Product types:** government, healthcare, utilities, education admin
**Skills:** critical-review, interaction-design, workflow-compression

## Context

Residents report a missed bin collection. They need: address, which bin, date missed, optional
note, contact email. Many are older, on phones, or using assistive technology.

## The proposed "modern" redesign

- A five-step wizard, one field per screen, with a progress bar.
- Animated transitions between steps.
- A hero illustration of a smiling bin on each step.
- Custom dropdowns with icons for bin types.
- A gradient "Next" button; final "Submit" hidden behind a review screen.

## The typical wrong review

> "Much more engaging and modern than the old form. The step-by-step flow is easy to follow."

## Critical review

- **Goal:** report a missed collection quickly and reliably, for everyone.
- **Current:** one plain page, five fields, standard controls, error summary at top. It works.
- **Proposal costs:**
  - 5 screens and 5 extra "Next" actions for five simple fields
  - Custom dropdowns lose native behavior on mobile and with screen readers
  - Animations add delay and motion-sickness risk
  - Illustrations push fields down on small screens
  - Review screen adds a step with little value for a reversible, low-stakes report
- **Benefit:** feels "friendlier" to some; no measured completion benefit.

**Verdict: worse than current.** Keep the single page. Improvements worth making: address lookup
from postcode, bin types as radio buttons with pictures (native inputs with image labels), date
defaulted to the scheduled collection day, confirmation page with a reference number and what
happens next.

## Why plain wins here

Confidence, accessibility, and task completion dominate the goal. Visual spectacle does not serve
it. Beauty here is clarity, speed, and trust.

## When this lesson does not apply

Long applications with branching logic (benefits, visas) benefit from one-thing-per-page patterns,
which many public-service design systems recommend for complex forms. The lesson is not "never use
steps"; it is "choose structure for the task, not for the look."

## Canonical rule

**Visual spectacle is not universally good. Context is part of taste.**
