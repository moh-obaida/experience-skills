# Scenario: Extreme Multi-Domain Specification

## Scenario
A team pastes a large, badly-ordered specification for a corporate travel-and-expense platform,
spanning six domains (onboarding, travel booking, expense submission, approvals/disputes, company
admin, notifications), four roles, duplicated and refined requirements, a critical modifier buried
far from its base rule, a genuine unresolved contradiction between an early and a late section, an
explicit amendment, and no stated visual direction. The user asks the agent to build the expense
submission and approval flow.

## Prompt
[Section 1 — Overview, ~40 lines in] Employees submit expenses for reimbursement. Managers approve
them. Finance reviews anything unusual. Company admins configure policy. Receipts are required for
expenses.

[Section 2 — Roles] Employee: submits expenses, views own history. Manager: approves or rejects
direct reports' expenses, cannot see other managers' teams. Finance admin: sees all expenses
company-wide, can override an approval, cannot submit expenses on someone else's behalf. Company
admin: sets policy (limits, categories, required fields), cannot approve individual expenses.

[Section 3 — Expense submission workflow] Employee selects a category, enters amount, attaches a
receipt, submits. Status: draft → submitted → manager review → approved/rejected → (if approved)
reimbursement queued → reimbursed. If rejected, employee can edit and resubmit; the original
rejection reason stays visible on the resubmitted item.

[Section 4 — Receipts, general rule] All expenses require an attached receipt image or PDF before
submission is allowed.

[Section 5 — Recommendation] We recommend enabling OCR receipt scanning to auto-fill amount and
date, though manual entry should remain available as a fallback.

[Section 6 — Example] A typical expense might be "taxi from airport, $38, category: ground
transport."

[Section 7 — Rationale] Receipts are required because our auditors flagged reimbursement fraud risk
in the prior year; the requirement is there to give finance a paper trail they can sample against
during the annual audit, not to slow employees down — keep this in mind if the flow feels heavier
than a typical form.

[Section 8 — Approval thresholds] Manager approval is required for any expense. Amounts over $500
additionally require finance admin co-approval before reimbursement is queued. Amounts under $25
do not require an attached receipt — a category and amount are sufficient. (International travel
expenses always require a receipt regardless of amount, even under $25, because of currency
conversion audit requirements — this exception was added after section 4 was drafted and easy to
miss if you only read the general rule above.)

[Section 9 — Future / Phase 2] Eventually we want automatic policy-violation flagging using
machine learning to pre-score risky expenses before a manager even looks at them. Not MVP — this is
a phase 2 idea, not a current requirement.

[Section 10 — Notifications] Employees get notified on status change. Managers get notified when
something needs their review. Finance gets notified only for expenses requiring their co-approval
or explicitly flagged for review.

[Section 11 — Non-goal] This platform does not handle payroll or tax withholding calculations — that
stays in the existing payroll system; do not build or reference payroll math here.

[Section 12 — Appendix: reimbursement timing, first statement] Reimbursement is processed within 5
business days of final approval.

[Section 13 — Appendix: later correction, same document] Correction to the timing above: for
approved expenses over $2,000, reimbursement is processed within 10 business days, not 5, because
those route through a secondary treasury check. This appendix supersedes the timing stated in
section 12 for that amount tier only; the 5-day figure still applies below $2,000.

[Section 14 — Data retention] Expense records and attached receipts must be retained for 7 years
per finance compliance policy. This is a required technical constraint, not a suggestion.

[Section 15 — Conflict, unintentional] Note: an earlier planning doc that got pasted in by mistake
below says "managers can see all expenses company-wide for benchmarking purposes." That directly
contradicts section 2's rule that a manager only sees their own direct reports' expenses, and
nothing in this document marks one as superseding the other — flag this rather than picking one
silently.

[Section 16 — Visual/brand] No design system is specified yet; we're still using default styling
from the starter template.

## Current problem
A model reading this linearly and compressing it tends to: state "receipts are required" as one
flat rule and lose the under-$25 exception, then lose the international-travel exception to that
exception because it sits in section 8, three sections after the general rule in section 4; treat
the section-12 reimbursement timing as the only rule and never apply the section-13 correction for
the $2,000+ tier, or worse, average the two into "about a week"; promote the OCR recommendation into
a hard requirement; turn the taxi-fare example into a literal seeded category; render the fraud-risk
rationale as an on-screen explanation to employees; pull the phase-2 ML risk-scoring into the MVP
build because it's described in detail; silently pick either the section-2 or section-15 version of
manager visibility instead of flagging the contradiction; and, because no visual direction is
stated, either invent one unprompted or fail to contribute one at all.

## Expected skills
- state-design
- interaction-design

## Key principles expected
- The under-$25 receipt exception and the international-travel exception to that exception both
  survive — not flattened back to "all expenses need a receipt."
- The reimbursement timing rule is retrieved as base rule plus its modifier: 5 business days
  normally, 10 for the $2,000+ tier — not just whichever number was read first, and not averaged.
- The section 2 vs. section 15 manager-visibility contradiction is treated as a genuine unresolved
  conflict (not a solvable tradeoff) and is surfaced rather than silently resolved either way; it
  should not block building the submission/approval flow itself, since it only affects finance-wide
  reporting visibility, not the core approval loop.
- OCR scanning stays a recommendation with manual entry as the real fallback, not a hard MVP
  requirement.
- The fraud-audit rationale in section 7 informs the receipt requirement's design (e.g., don't make
  the receipt step feel arbitrary) without becoming literal on-screen copy explaining audits to
  employees.
- Phase-2 ML risk-scoring stays out of the current build.
- Payroll/tax withholding is not built or referenced (explicit non-goal).
- Four distinct roles keep distinct visibility: a manager cannot see another manager's team; finance
  sees company-wide; company admin configures policy but does not approve individual expenses.
- With no visual direction stated, this is genuinely open — visual/design intelligence has room to
  contribute here, unlike the companion "locked visual direction" scenario.
- The finished interface reflects the actual submission → review → approval → reimbursement job,
  not a sidebar item per document section (onboarding/booking/notifications should not each become
  a persistent nav item just because they're separate sections in the source).

## Unacceptable recommendations
- "Receipts are required" as a single undifferentiated rule with no amount or international-travel
  exception.
- Reimbursement described as a flat "about a week," ignoring the $2,000+ tier's 10-day rule.
- Building OCR receipt scanning as a required MVP feature.
- An on-screen explanation to employees about auditor fraud-risk findings.
- Building any part of the phase-2 ML risk-scoring feature.
- Silently deciding managers either can or cannot see company-wide expenses, without noting the
  contradiction.
- A persistent sidebar with a separate item for every one of the six source sections/domains.
