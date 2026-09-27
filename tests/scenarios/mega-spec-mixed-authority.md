# Scenario: Mixed-Authority Mega Spec

## Scenario
A founder pastes a 1,400-line specification for a local-services marketplace (customers book
skilled workers). It mixes finalized requirements, recommendations, worked examples, rationale,
future-phase ideas, explicitly deferred decisions, and exact numeric rules, repeated across an
overview, a workflow section, and an appendix with one refinement. The user asks the agent to build
the MVP booking flow.

## Prompt
Here's our full product spec for a local-services marketplace (customers book skilled workers
like plumbers and electricians) — it's long, sorry, but it's everything: overview, all three
roles, the booking workflow, business rules, an appendix with implementation notes, and some open
questions we haven't settled yet. Build the MVP booking flow.

[Spec excerpts the agent must reconcile:]
- Overview: "Workers are verified before they can accept jobs."
- Workflow section: "ID verification is required for every worker; work-photo verification is
  required only for skilled trades (electrical, plumbing, gas)." (a refinement of the overview
  line, not a duplicate to discard)
- Business rules: "Platform commission is 15%." Stated once, as fact — no hedging language.
- Business rules: "Worker has 45 seconds to accept a job; the customer's total wait before
  re-offering to the next candidate is 5 minutes." Exact numbers, not "a short window."
- Business rules: "Customer and worker each independently report the final price; if they
  disagree by more than a small margin, the job is flagged for support review" — an interaction
  invariant, not a suggestion.
- Implementation notes: "We recommend using optimistic UI for the accept step, though a simple
  spinner would also work." — a recommendation, not a requirement.
- Implementation notes: "Example: a typical job might be 'unclog a bathroom sink, $45–70.'" — an
  example value, not a universal price rule.
- Rationale: three paragraphs explaining why independent price reporting reduces disputes — this
  informs the design, it is not itself a feature to render as a UI panel.
- Future/phase 2: "Eventually we want in-app chat and worker route optimization. Not MVP."
- Open/deferred: "We haven't decided whether workers can set their own hourly rate or the
  platform sets it. Revisit after launch." — no MVP feature depends on resolving this; it should
  stay unresolved, not be silently decided.
- Appendix (contradiction): one paragraph says push notifications are "required for MVP"; a
  different appendix table lists push notifications under "nice to have, phase 2." The spec does
  not resolve this itself.

## Current problem
A model reading linearly tends to: flatten the two verification rules into one, round or drop the
45-second/5-minute numbers, quietly finalize the hourly-rate decision "to be helpful," build the
recommended optimistic UI as if required, promote the $45–70 example into a pricing rule, turn the
independent-price-reporting rationale into a literal UI comparison panel nobody asked for, pull
phase-2 chat into the MVP because it's described in detail, and silently pick one side of the
push-notification contradiction instead of flagging it.

## Expected skills
- state-design
- interaction-design

## Key principles expected
- A large specification is a bigger evidence base, not a bigger checklist: build the booking flow,
  not a screen that transcribes every section of the document.
- Preserve exact numbers and their conditions together: 45 seconds / 5 minutes, 15% commission,
  ID-required-for-all / photos-only-for-skilled-trades survive intact.
- Recommendations stay recommendations (optimistic UI is a choice, not a mandate); examples stay
  examples ($45–70 is not a price rule).
- Deferred decisions stay deferred (hourly-rate model is not silently finalized); future-phase
  items (chat, route optimization) do not enter the MVP build.
- The push-notification contradiction is surfaced as unresolved, not silently resolved in either
  direction.
- The rationale about independent price reporting informs the disagreement-flow design; it does
  not become a rationale panel in the UI.
- The interface reflects the booking job (request → offer → accept → in progress → complete /
  timeout → retry-next-candidate), not the document's own section structure.

## Unacceptable recommendations
- A twenty-section settings screen that mirrors the spec's table of contents.
- A dashboard listing every business rule as a card or metric.
- Silently choosing 30 or 60 seconds instead of the stated 45, or merging the two wait numbers
  into one.
- Implementing worker-set hourly rates (or platform-set rates) as if the spec had decided it.
- Building in-app chat because the spec described it in detail.
- A UI panel titled "Why we do independent price reporting."
