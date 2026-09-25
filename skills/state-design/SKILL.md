---
name: state-design
description: "Use this skill whenever a feature loads, saves, uploads, pays, syncs, generates, or runs work that can be slow, fail, or finish in the background; when only the happy path exists; when errors say 'Something went wrong'; when a screen or dashboard can be stale, partial, empty, offline, or unknown; or when auditing a feature for missing states. Designs first-use, loading, processing, partial, success, failure, offline, reconnecting, sparse, dense, permission-denied, paused, stale, long-running, optimistic, and authoritative states, and separates transport state from product state so the UI never lies."
license: MIT
metadata:
  version: "0.3.0"
  collection: experience-skills
---

# State Design

A product is a set of states, not one screenshot. Most experience failures happen outside the
perfect fixture: while loading, after a timeout, with one item or a thousand, offline, halfway
through, after a partial failure.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Read `references/_shared/experience-operating-contract.md`; state changes require an explicit
   matrix, authority, recovery path, and evidence status.
3. Open `references/_shared/state-types.md`. It is the checklist you walk in step 1 below.

<!-- core-brief:start · GENERATED FROM shared/philosophy/core-brief.md by npm run sync. Do not edit here. -->
**Core rules in brief.** These apply even before you open `references/_shared/experience-core.md`.
Read that file (the full rules and evidence levels) before a full review, repair, or build.

- **Verdict before adjectives.** Do not write "clean," "modern," "great idea," or "looks good" until
  an observation earns it. The user's enthusiasm is not evidence; test the proposal against the goal.
- **Evidence levels on findings.** E1 rendered, E2 measured, E3 source, E4 documented,
  E5 screenshot, E6 assumed. If files, a browser, or a terminal are available, look or measure before
  claiming. Otherwise, name the checks you did not run.
- **Composition is not alignment.** Empty space needs a stated job, and sparseness is never fixed
  with filler (stats, tips, promos, decoration).
- **Personality belongs in the environment, not in standard controls.** A control changes only if
  the change makes the task faster or more reliable.
- **Every treatment has a job.** Every gradient, card, shadow, and animation needs one. No pattern
  is wrong by category, so keep one that does a job.
- **Count steps before and after.** If the software already knows an answer, do not ask for it.
  Keep safeguards on money, deletion, and publishing. Automate mechanics, not judgment.
- **Check real states, not the showcase:** empty, dense, long content, loading, error, a small
  screen, the keyboard path.
- **Hand off when another experience skill fits better.** If part of the problem belongs to one
  (composition, identity, workflow, interaction, states, motion, friction, responsiveness, empty
  states, slop, critical review) and it is installed, invoke it rather than improvising its method.
- **Render meaningful work when a runnable surface exists.** Inspect before and after, stress real
  states, and say **NOT VERIFIED IN RENDERED OUTPUT** with the reason when rendering is skipped.
- **Load depth conditionally.** A direction, composition, workflow, control, state, motion, or
  anti-slop branch must load its required reference before recommendation or edit; unrelated work
  must not load the whole library.
<!-- core-brief:end -->

## Use this when

- Only the happy path exists.
- Errors say "Something went wrong."
- Loading causes layout jumps, double submissions, or uncertainty.
- Long-running work (generation, imports, exports, uploads, renders) holds users on a screen.
- Real-time or multiplayer features behave ambiguously when connections drop.
- Optimistic UI shows results that later turn out false.
- A payment, submission, or job can be pending, partial, or unknown.

## Do not use this when

- The problem is layout at one state → composition-repair.
- The problem is specifically how an empty surface looks → empty-state-design.

## Checkpoints

1. **Before designing any state:** have you listed the surface's states from the checklist and
   written down the ones you are skipping and why? No → do that first (`references/state-inventory.md`).
2. **For every request that can fail:** can the outcome be *unknown* (timeout after submit, poll
   failure)? Yes → design an "unknown / checking" state that reconciles with the source of truth.
   Never show "failed" for an unknown outcome (`references/truth-and-authority.md`).
3. **For every optimistic update:** is the action money, irreversible, or server-authoritative
   (scores, correctness, bookings)? Yes → no optimism; show pending until confirmed.
4. **For every error message:** does it say what happened, what it means, and what to do, and does
   the user's input survive? No → rewrite it (`references/errors-and-recovery.md`;
   anchor `references/_shared/honest-error-states.md`).
5. **For every retry you make easier:** is it idempotent? No → make it idempotent first.
6. **For every operation over ~10 seconds:** can the user leave and return? If the architecture
   allows → background job (`references/loading-and-long-work.md`; anchor
   `references/_shared/long-running-generation.md`). If not → say honestly that the page must stay open.
7. **For live or multi-step surfaces:** is the current state the most prominent thing on screen?
   No → add a state header (`references/_shared/state-header.md`).
8. **Before finishing:** trigger the states (offline, throttled, 500, timeout, empty and large
   fixtures, reload mid-job, double click). Record which were verified at which level.
9. **Include lifecycle and collaboration states** from the taxonomy (untouched, degraded, restored, synchronized, locally pending, collaborative, disconnected integration) when the product has sync, sharing, or integrations.

## Workflow

1. **Inventory** states and skips (`references/state-inventory.md`).
2. **Map authority and failure:** source of truth per piece of state; which requests fail and how;
   what the product state is in each case (`references/truth-and-authority.md`).
3. **Build the state matrix** (template in `references/state-inventory.md`).
4. **Load depth as needed:**

   | Concern | Load |
   |---|---|
   | Loading, skeletons, progress, long jobs, leaving and returning | `references/loading-and-long-work.md` |
   | Error taxonomy, messages, recovery | `references/errors-and-recovery.md` |
   | Sockets, presence, reconnection, games, collaboration | `references/realtime-and-reconnection.md` |
   | Forms, uploads, payments, AI generation, games, search, auth, sync | `references/domain-states.md` |

5. **Design or repair** each row: the smallest honest UI (state header, inline status, specific
   message, clear action). For empty states, hand off to empty-state-design if installed.
6. **Verify** (checkpoint 8).

## Execution rules

- Guard repeat submission while an operation is in flight; show progress in the control.
- Keep layout stable from loading to loaded.
- Mark stale data as stale.
- Announce important state changes to assistive technology (polite; assertive only for urgent errors).
- Do not invent states the architecture cannot support.

## Precedent

| When | Load |
|---|---|
| Real loading, empty, error, and not-found behavior | `references/_shared/states-loading-empty-error.md` |
| Payments, submissions, undo windows, once-only actions | `references/_shared/transactional-clarity.md` |

## Failure modes

- Collapsed errors; transport shown as truth; optimistic lies; spinner prison; skeleton theatre;
  silent staleness; lost work; duplicate effects from retries.

## Completion criteria

- A state matrix covers relevant states with skips explained.
- Transport failures are distinct from product failures in UI and copy.
- Every error explains and offers recovery; input is preserved.
- Long work is backgrounded or honestly explained.
- Key states were triggered and observed, or listed with how to trigger them.
- The handoff contains the state matrix, authority, recovery, next action, and unresolved risks for
  the interaction and motion specialists; skipped states are explicit.

## References

- `references/state-inventory.md` — inventory method and state matrix
- `references/truth-and-authority.md` — transport vs product state; optimistic vs authoritative
- `references/loading-and-long-work.md` — loading, progress, long-running work
- `references/errors-and-recovery.md` — error taxonomy and recovery
- `references/realtime-and-reconnection.md` — live and multiplayer states
- `references/domain-states.md` — domain checklists
- `references/_shared/` — generated copies: `experience-core.md`, `experience-operating-contract.md`,
  `state-types.md`,
  `state-header.md`, `honest-error-states.md`, `long-running-generation.md`,
  `states-loading-empty-error.md`, `transactional-clarity.md`
