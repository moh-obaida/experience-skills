---
name: state-design
description: "Design how a product behaves and presents itself across real states: first-use, loading, processing, partial, success, failure, offline, reconnecting, empty, sparse, dense, permission-denied, paused, stale, background and long-running work, optimistic versus authoritative state. Separates transport state from product state so the UI never lies. Use when only the happy path exists; when errors say 'Something went wrong'; when loading, retries, uploads, payments, real-time sync, games, or AI generation behave ambiguously; or when auditing a feature for missing states."
license: MIT
metadata:
  version: "0.1.1"
  collection: experience-skills
---

# State Design

A product is a set of states, not one screenshot. Most experience failures happen outside the
perfect fixture: while loading, after a timeout, with one item or a thousand, offline, halfway
through, after a partial failure.

## Start here

1. Read `references/_shared/experience-core.md`.
2. Open `references/_shared/state-types.md`. It is the checklist you walk in step 1 below.

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

## Failure modes

- Collapsed errors; transport shown as truth; optimistic lies; spinner prison; skeleton theatre;
  silent staleness; lost work; duplicate effects from retries.

## Completion criteria

- A state matrix covers relevant states with skips explained.
- Transport failures are distinct from product failures in UI and copy.
- Every error explains and offers recovery; input is preserved.
- Long work is backgrounded or honestly explained.
- Key states were triggered and observed, or listed with how to trigger them.

## References

- `references/state-inventory.md` — inventory method and state matrix
- `references/truth-and-authority.md` — transport vs product state; optimistic vs authoritative
- `references/loading-and-long-work.md` — loading, progress, long-running work
- `references/errors-and-recovery.md` — error taxonomy and recovery
- `references/realtime-and-reconnection.md` — live and multiplayer states
- `references/domain-states.md` — domain checklists
- `references/_shared/` — generated copies: `experience-core.md`, `state-types.md`,
  `state-header.md`, `honest-error-states.md`, `long-running-generation.md`
