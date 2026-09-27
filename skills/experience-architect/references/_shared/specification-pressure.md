<!-- GENERATED FROM shared/evaluation/specification-pressure.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Specification Pressure

A large specification is not a larger checklist. It is a larger evidence base. Compress for
reasoning, re-open for precision. Preserve what is decided, expose what is unresolved, design
what is open.

This is orthogonal to Build Mode / Audit Mode and to the specialist budget. A job can be Build
Mode with low pressure, Build Mode with high pressure, or Audit Mode with high pressure. It never
adds a phase, a mode, or a participation quota by itself.

## When this applies

Specification pressure is high when the input contains enough interacting constraints that
reading it once, linearly, is likely to lose a rule, miss a contradiction, or turn the build into
a transcription exercise. Signals: many roles or actors, many workflows, many states, cross-cutting
business rules, timing or numeric thresholds, exceptions, recommendations mixed with hard
requirements, future or deferred items, multiple product surfaces, technical and product
requirements interleaved, the same constraint repeated in different sections, explicit priorities,
open decisions, large supporting rationale, conflicting instructions, detailed visual or brand
requirements, or many dependencies between requirements.

**Never a token-count threshold.** A ten-thousand-word prompt describing one simple screen does
not trigger this. A five-hundred-word prompt with a commission formula, three roles, a suspension
state, and a regional exception does. Judge structure, not length.

Under low pressure, skip everything below and work directly from the source, as always. This
includes multi-document input: a long attachment is not itself a signal if its content is narrow
(a single style guide, a single screenshot, a single bug report). Judge the content's structure,
not the number or size of the sources.

## The other extreme: a narrow request stays narrow

This file exists to help the model reason well when reasoning is genuinely hard, not to become the
default entry point for product work. "Review this UI," "fix this empty state," "why does this
page feel generic," and "this modal flow is annoying" are low-pressure by construction — one
surface, one concern, evidence you can observe directly. For these, the right behavior is the
plain one: **observe, diagnose, recommend or repair, stop.** No operating brief, no requirement
map, no authority classification, no locked-vs-open inventory — there is nothing to classify. A
narrow request naming one component or symptom normally skips this file entirely; do not read it
"just in case." The exception is narrow only in surface area: "fix this payment confirmation
button" inside a large banking specification may still turn on permissions, an irreversible-action
rule, or a compliance constraint from that source — in that case, get the specific rule that
governs the button, not the whole protocol. Symmetry matters as much as coverage: a system that
handles a 1,000-line PRD well but makes a two-word review slower has not succeeded.

## Two representations, not one

High pressure needs two different things held at once, not one summary. The **authoritative
source model** is the source itself, read for its provenance, exact values, conditions,
exceptions, conflicts, and unresolved status — the agent does not throw this away after reading it
once. The **working product model** (the operating brief below) is a compact, reasoning-optimized
distillation of it. Reason from the working model; verify and get precision from the authoritative
one. Neither replaces the other, and the working model is never allowed to become the source of
truth in its own right.

## Intake: classify before compressing

Establish coverage of the whole source before making product-wide assumptions — for one pasted
document this usually means reading it. For a very large or multi-document corpus, establish
coverage with structure instead: headings, tables of contents, search, and an index of what each
document covers, then read targeted sections rather than loading every clause into active context
at once; loading everything is itself the context-cost problem this protocol exists to avoid.
Either way, understanding still deepens incrementally as implementation later reaches an area the
first pass only skimmed — front-loading every clause before anything is built is not the goal, and
is itself a failure mode (see Stop condition below). While sorting statements, classify — do not
just summarize. Words like "must," "required," "final," "to be decided," "recommended," or
"future" are useful signals, but context decides, not the word alone; do not build a keyword
classifier out of this table. At minimum distinguish:

| Class | What it is | Rule |
|---|---|---|
| **Hard / finalized** | Explicit decided behavior: a workflow, a permission, a rate, a timeout, a required region, a status transition, a visual or brand rule the user stated as fact | Must survive compression exactly, including the number or name |
| **Conditional / exception** | "only for X," "unless Y," "except on Z," "after N failures," "if A and B disagree" | Keep the condition and its consequence bound together; never keep one half |
| **Preference** | A strong stated preference that is not a business invariant | Keep visible, keep separate from hard requirements |
| **Recommendation / suggestion** | "recommend," "suggested," "probably," "could," "may want to," "proposed" | Stays a recommendation. Never silently promoted to a requirement |
| **Example** | A sample name, price, layout, or value used to illustrate | Explains intent; is not itself a universal rule unless the source says so |
| **Rationale** | Why a decision exists | Use it to resolve ambiguous implementation details; do not turn a rationale paragraph into a feature or a UI element |
| **Deferred / to-be-decided / open** | An explicitly unresolved decision | Stays unresolved. Do not "helpfully" finalize it unless the build cannot proceed without a temporary assumption |
| **Future / later phase** | Roadmap, optional, phase-2, v2 | Stays out of the current build unless the user asks for everything |
| **Implementation guidance** | A technical suggestion | Binding only if the wording makes it binding; otherwise a suggestion like any other |
| **Non-goal / exclusion** | Something explicitly out of scope | Stays visible so a specialist does not reintroduce it by default |

## The operating brief

After intake, derive one compact internal product model: thesis, roles, core jobs, the repeated
core loop, core instrument, scope, critical surfaces, hard invariants, major workflows, important
states and transitions, trust/safety constraints, exact timing/numeric/business rules, technical
constraints, explicit visual or brand constraints, unresolved decisions, meaningful non-goals, and
where design freedom remains. This is the model normal reasoning runs from. It must be
dramatically smaller than the source.

**Compression must never erase authority.** Do not compress `worker gets 45 seconds, total timeout
5 minutes` into "a short response window." Do not compress `15% commission` into "platform
commission." Do not compress `future feature, not MVP` into "feature." Do not compress
`recommended` into "required." If a compression would make two different source statements read
the same, it is too lossy — keep the number, the label, or the qualifier.

The brief indexes the source; it does not replace it. **Re-open the relevant source section**
before implementing a critical workflow, a state transition, an exception, or anything with an
exact number — reasoning runs from the brief, precision comes from the source.

**Global truth versus local truth.** Keep global product truth active throughout — roles,
commission or pricing model, the permission model, brand direction, localization, security and
trust constraints. Pull local truth (this workflow's timeout, this screen's allowed actions, this
state's exceptions) only when work reaches that area. A specialist working on payments needs the
global invariants plus payments' local truth, not onboarding's or messaging's local detail.

For a source spanning multiple clearly separate domains (booking, payments, disputes, admin,
notifications, and similar), the operating brief may scale in two tiers instead of one: a tiny
**product kernel** (thesis, roles, core loop, core instrument, global invariants, scope boundary)
that stays active throughout, plus a **domain brief** pulled in only for the domain currently being
built, refreshed from source when work moves to a new one. This is adaptive, not mandatory — a
normal feature brief never needs it, and forcing the split on ordinary work is itself a failure
mode. The one hard rule regardless of shape: a very large source should never produce one
enormous flat brief; if the brief is approaching the source's own size, the compression has failed
and the mechanism needs rethinking, not more detail.

## Targeted retrieval

Re-opening the source is not "grab the first matching sentence." For an implementation decision,
retrieve the base rule together with its exceptions, refinements, and any later amendment — a
worker-response timeout stated once, narrowed for emergency requests, and changed again by a later
global amendment is one governing rule, not three candidates to pick from. Do not assume an
important qualifier sits near its first mention: huge sources bury modifiers in appendices, notes,
later correction sections, and role-specific subsections. When the source is searchable, search
semantically — synonyms, alternate section terminology, role-specific phrasing, a later
correction — not just the one exact phrase first imagined, and treat a hit as a reason to read its
surrounding context, not as the complete answer by itself.

If a decision cannot be found after a reasonable targeted search, mark it open or unspecified
rather than inventing a rule that sounds plausible. Keep the distinction between what the source
states outright, what it implies but doesn't state, and what is the agent's own implementation
judgment — do not present an inference as an explicit requirement. Where evidence is genuinely
ambiguous, keep it as probable or unresolved rather than forcing a false yes/no. If retrieval
itself fails (a file is unreadable, a document is gone), do not guess exact behavior — state the
gap, or take the smallest reversible assumption if the task requires continuing anyway.

## Requirement map

Keep one shared, compact ledger — not a giant user-facing checklist, and not a duplicate per
specialist. Its job is traceability: where a rule came from (a heading or section label is enough;
exact line numbers are not required), whether it was final or recommended, what feature or
workflow it affects, whether it is implemented, intentionally deferred, or unresolved, and whether
a later statement modified it. Route specialists against the brief and the map, not the raw source
— handing every specialist the entire text recreates the context cost this exists to avoid.

For a consequential rule, note what depends on it — a commission rate can feed completion,
settlement, overdue handling, and dispute resolution — so that changing the rule later points at
what else to check. This is judgment, not a formal graph: track it for rules whose change would
ripple, not for every token value.

Map decisions, not prose: one normalized rule with its provenance beats five near-duplicate rows
copied from five sections that all say the same thing. Give deeper traceability to rules touching
money, permissions, role visibility, destructive or irreversible actions, eligibility, trust,
safety, privacy, timing, status transitions, compliance, or identity — the same categories that
drive verification priority below — and lighter traceability to minor presentation preferences and
restated rationale. If the map itself starts approaching the size of the source, the compression
has failed; that is a signal to rebuild the map at a higher level, not to keep appending rows.

A source is not always one stable snapshot. Distinguish a final, settled specification from
evolving working notes, and give an evolving document stronger amendment and drift attention. If a
corpus contains an old and a newer version of the same material, do not silently merge them into
one blended rule — track which one is current and let the newer, more authoritative one govern.

## Locked decisions versus open design space

**Preserve intentional locked decisions. Apply Experience Skills to the open space around them.**

A decision is locked when the user or the specification states it as fact: a commission rate, an
interaction invariant ("customer and worker independently report price"), a required workflow, an
existing brand system, a stated palette, typography, density, or interaction style. A screenshot or
design file the task says to preserve is source evidence the same way prose is — its visible
hierarchy, palette, spacing, density, component language, and composition are locked, not
overwritten because prose is easier to parse than an image. A decision is open when the source is
silent: sidebar versus top navigation with no stated preference, an unspecified accent color, an
unnamed composition.

The Niche Design Atlas and the design-system selector fill open space; they do not compete with a
locked decision. Visual Identity extends and operationalizes a stated direction; it does not
invent a new one to prove it can. Anti-slop review does not erase an intentional card, gradient,
dense table, dark interface, or persistent sidebar because the pattern is sometimes misused
elsewhere — a pattern justified by the product's own stated direction is not slop.

**The user's explicit requirement outranks a default Experience Skills recommendation.** Skills
improve execution inside the user's chosen direction; they do not "repair" a locked choice absent
a genuine technical impossibility, a safety issue, or an explicit contradiction in the
specification itself — and any of those three gets surfaced to the user, not silently overridden.

## Contradictions and deferred decisions

Not every tension is a contradiction. "Keep the screen dense" and "make scanning easy" can both be
true at once — that is a design tradeoff to solve, not a conflict to resolve. A real contradiction
is two statements that cannot both govern the same behavior: one section calls something required,
another calls it future; one rule says 30 seconds, another says 45. Do not silently pick whichever
statement was read most recently, and do not flag a solvable tradeoff as a conflict.

Resolve only on clear evidence: an explicit amendment, a more specific rule overriding a general
one, a statement marked final, a later section that documents a changed decision, or a direct
current user instruction superseding older material. Otherwise, do not invent precedence — record
it as an unresolved conflict. If a build must proceed anyway, take the smallest reversible
implementation assumption, isolate it so it is cheap to change, and say plainly that the source was
ambiguous here; never claim it was not. When later information resolves an assumption, replace it
and check what was built on top of it — do not leave a contradictory remnant standing beside the
correction.

An unresolved conflict is local to what it affects. A contradiction in the analytics rules does not
block implementing booking; note it and keep building elsewhere. When a rule changes, its
downstream dependents (tracked in the requirement map above) are not all equally affected — treat
them as **confirmed still valid** (nothing about the change touches them), **potentially stale**
(worth a check before relying on them — an example showing a final payout, a report, an overdue
balance), or **definitely invalidated** (the commission calculation itself, when the rate changes).
Re-check the potentially-stale and definitely-invalidated sets; do not re-verify the whole product
because one rule moved.

## Deduplication without losing meaning

The same requirement often reappears across an overview, a workflow section, implementation notes,
and a summary table. Collapse exact repeats in the requirement map. Do not collapse a refinement:
"workers are verified" in one section and "ID required for all workers; work photos required only
for skilled trades" in another are the same requirement at two levels of detail — keep the more
specific one, not neither. The same discipline applies to a chain of exceptions: a general rule, an
exception to it, and an exception to that exception ("all workers need approval," "invited
enterprise workers may start provisional work," "but not for electrical jobs") must survive as the
full three-level meaning, not collapse back to the general rule because the exceptions were read
first and compressed away.

## Cross-cutting requirements

Mark a requirement cross-cutting once — permissions, suspension state, localization,
accessibility, privacy, responsive behavior, auditability, data ownership, latency, offline
behavior, payment state, trust level are common ones — and let every specialist inherit it from the
operating brief. Do not make each feature rediscover it independently.

## Role-specific truth

When a specification describes multiple actors, keep them distinct in the brief: who initiates,
who sees what, who can act, who waits, who confirms, who owns a given state, who can reverse it,
and what stays hidden from another role. Do not flatten several actors into one generic "user" —
that loses the constraints that made the roles necessary in the first place.

## State machines

When the source implies meaningful product states, build a compact state model rather than letting
prose flatten it: state owner, entry condition, exit condition, allowed actions, persistent data,
recovery, what changes visibly, and what downstream behavior changes. Two states that sound similar
in prose (`requested → assigned → in progress → completed` versus `requested → timeout → retry
next candidate → cancelled`) are not one generic flow.

A large state space needs focus, not enumeration: model the states reachable from the current job,
visible to the user, and relevant to the states being implemented now, plus the global invariants
that must hold everywhere — not the full combinatorial product of every flag. The same applies to a
large role system: keep the current actors and the permission boundaries between them active, not
every role's full detail for every workflow; pull a distant role's truth only when it actually
interacts with the one being built.

## Specialist handoff

A conductor that has done the intake does not hand the raw source to every specialist and ask each
to reinterpret the whole thing — that recreates the context cost this protocol exists to avoid.
Give a specialist a compact contract instead: the product kernel, the relevant local job or
workflow, the locked requirements and global invariants that bound its work, the open decisions it
can help with, the specific source slice if precision matters, any unresolved conflict that
actually touches its work, the observed problem, and the expected output. State Design does not
need the marketing strategy. Visual Identity does not need the database schema unless it changes
the working product. Responsive Validation does not need every rationale paragraph. A handoff
built from a 40,000-token source and totaling 30,000 tokens has not compressed anything — it has
failed at the one thing this section exists to do.

If a specialist finds the handoff insufficient, it retrieves the smallest additional source slice
that answers the specific question — it does not guess, and it does not request the whole corpus.
If a specialist discovers a contradiction, a missing constraint, or a reason an assumption no
longer holds, it reports that back to the shared model rather than quietly building on its own
version of the product; there is one product truth that specialists interpret, not one truth per
specialist. When two specialists' conclusions conflict, resolve by authoritative source, then
observed product behavior, then the stated task goal, then other evidence — never by which
specialist ran first or which one seems more senior.

## Scope control

Respect explicit scope and phase labels — MVP, phase 2, future, optional, deferred — as boundaries,
not as suggestions. If practical limits force prioritization, prioritize explicit core workflows
and invariants over visually impressive secondary surfaces, and say plainly what was not attempted
rather than implying completeness.

Four failure shapes to guard against explicitly, because a large source tends to produce them by
default:

- **Mega prompt ≠ mega UI.** Product structure follows the user's job, not the document's chapter
  structure. A twenty-section PRD does not imply a twenty-item sidebar; a database schema does not
  imply one screen per table.
- **Mega prompt ≠ dashboard.** A dashboard is not a dumping ground for specification complexity.
  Find the real working surface and the repeated action; build that.
- **Mega prompt ≠ every state at once.** Render realistic states, one at a time, verified through
  navigation and transitions — not every state displayed simultaneously to prove coverage.
- **No requirement theater.** A card for every metric, a panel for every business principle, a
  badge for a rule the user never sees, a database field dumped into the interface — these prove a
  sentence was read; they do not serve the user. Requirements shape the product; they do not
  decorate it as evidence of diligence.

## Priority without inventing priority

Authority and priority are different axes — do not conflate them. A rule being locked (hard,
finalized, exact) says how firmly it must be honored; it says nothing about when to build it. A
hard requirement can govern a screen built in week three; a preference can matter for the very
first surface. Use priority actually present in the source — "critical," "MVP priority #1," a hard
SLA, "required," "primary job," "mandatory," a regulatory or trust-critical rule, a requirement
other workflows repeatedly depend on. Where the source states none, derive order from dependency
and core-loop value, never from taste.

## Multiple documents and an existing codebase

The same intake applies whether the source is one long prompt or several attached documents; keep
enough provenance to know which document a constraint came from, not just which section, when that
affects authority (a final product spec outranks an old brainstorming note; a direct current
instruction outranks both). Do not blend sources into one anonymous summary when their authority
differs. When the work happens inside an existing codebase, inspect its current architecture before
building the operating brief — a document's own chapter structure does not map onto the repository,
and observed working behavior is itself evidence, not just prose waiting to be confirmed.

When code and specification disagree, task intent decides which one governs — there is no single
universal precedence rule. "Implement the new spec" lets the spec supersede the code. "Fix this
regression without changing behavior" makes the working code authoritative over an old document.
"Audit the implementation against the spec" makes the disagreement itself the finding, not
something to silently resolve either way.

## Stop condition

Planning under high pressure can run forever because there is always one more clause to extract.
Stop and build once the brief can state: core job, scope, core instrument, critical invariants,
main workflows, critical states, which decisions are locked versus open, which conflicts remain
unresolved, and an initial implementation slice. Continuing to extract requirements past that point
is not rigor; it is avoidance. The brief itself is not the deliverable — a complete requirement
matrix is not progress when the user asked for a working product; it exists only to make
implementation faster.

## Implementation checkpoints

Do not wait for final review to remember the source. At natural boundaries, check: does this
violate a hard rule; did an example just become a universal rule; did a future item just become
MVP; was an exception forgotten; did a specialist override a locked decision; was a state invented
that the source contradicts; does the core instrument still hold spatial authority; are exact
numeric constraints still exact. Target the checkpoint at what just got built, not the whole map.

If a checkpoint reveals that an earlier requirement was misread, repair the working model and the
affected implementation before continuing — do not keep building on a known-wrong assumption. On a
long-running build, also watch for drift: if a source file changes on disk, or a requirement was
read early and the implementation has since moved past what it actually said, refresh that part of
the working model rather than trusting memory of the first pass.

Re-open the exact source before, not just after, implementing anything touching money (prices,
commissions, refunds, settlements, fees), timing (timeouts, retries, grace periods, expirations,
SLAs), a destructive or irreversible action (deletion, suspension, cancellation), or cross-role
visibility — these categories are worth the extra look before writing the behavior, not only during
later verification.

## Verification under pressure

Final verification combines exercising real product journeys and state transitions (success,
failure, recovery, continuation) with a compliance pass against the requirement map. Do not verify
every sentence with equal weight — prioritize hard invariants, exact numeric rules, cross-role
behavior, exceptions, critical states, explicit priorities, trust/safety rules, scope boundaries,
and deliberately deferred decisions. Separately confirm that open design space was used well and
that no locked decision was overwritten.

Before calling substantial work complete, classify important requirements as implemented,
intentionally not applicable, deferred by the specification, unresolved by the specification, a
temporary implementation assumption, or incomplete. A deferred-by-spec item is not a failure; an
unimplemented hard requirement is not complete. This classification is internal unless the user
asks to see it.

For a build spanning multiple domains, verify each domain's high-risk source truth as it finishes
rather than waiting until everything exists — late-stage rediscovery of a forgotten rule across
forty screens is expensive to unwind. At the end, add a short cross-domain pass for invariants that
only show up as inconsistency between areas (commission agreeing between completion and reporting,
suspension reflected in both matching and admin, identity state consistent between onboarding and
eligibility), and confirm the latest amendments and locked decisions actually reached every place
they apply. Stay honest about the difference between a source area that was indexed (known to
exist), inspected (actually read), and verified (checked against the implementation) — do not claim
compliance for an area that was only indexed.

## Amendments during the conversation

When the user later changes a requirement, update the operating brief and the requirement map in
place — do not rebuild the model from zero. Distinguish an amendment, a clarification, an
additional requirement, a contradiction, a removal, and a newly deferred item. The latest explicit
instruction supersedes older material only when it clearly changes it; do not infer supersession
from recency alone when both statements can coexist. "Keep the workflow, change the visual
direction" touches the brief's identity section only. "Commission is now 12%, not 15%" updates that
one invariant and whatever depends on it — not the rest of the model.

## What this does not change

Selective routing still applies: a large source specification does not imply a large skill stack,
and in practice a highly detailed specification often needs *fewer* active specialists, because
more decisions have already been made. "All considered" still does not mean all activated, all
handed the full source, or all required to produce output. Every specialist may still conclude "no
intervention needed; the specification already resolves this well" — the existence of a skill is
never an obligation to invent work.
