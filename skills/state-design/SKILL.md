---
name: state-design
description: "Design how a product behaves and presents itself across real states: first-use, loading, processing, partial, success, failure, offline, reconnecting, empty, sparse, dense, permission-denied, paused, stale, background and long-running work, optimistic versus authoritative state. Separates transport state from product state so the UI never lies. Use when only the happy path exists; when errors say 'Something went wrong'; when loading, retries, uploads, payments, real-time sync, games, or AI generation behave ambiguously; or when auditing a feature for missing states."
license: MIT
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# State Design

A product is a set of states, not one screenshot. Most experience failures happen outside the
perfect fixture: while loading, after a timeout, with one item, with a thousand, offline, halfway
through, after a partial failure.

> Optimize real states, not one screenshot.
> Do not let local convenience lie about authoritative state.

## Use this when

- Only the happy path was designed or built.
- Errors are generic ("Something went wrong," "Error 500").
- Loading causes layout jumps, double submissions, or uncertainty.
- Long-running work (generation, imports, exports, uploads, renders) holds users on a screen.
- Real-time or multiplayer features (games, collaboration, live dashboards) behave ambiguously when
  connections drop.
- Optimistic UI shows results that later turn out false.
- A payment, submission, or job can be pending, partially complete, or unknown.
- Auditing a feature for completeness before shipping.

## Do not use this when

- The problem is purely layout at one state (composition-repair).
- The problem is specifically how an empty surface looks (empty-state-design; this skill covers
  empty states as part of the inventory, that skill goes deep on them).

## Core principles

1. **Inventory before designing.** List the states a surface can be in; design each deliberately.
   See `references/_shared/state-types.md`.
2. **Transport state ≠ product state.** A failed request does not mean a failed operation.
   A timeout on "Pay" does not mean the payment did not happen.
3. **Authority is explicit.** Know which system is the source of truth. Optimistic UI must reconcile
   and must be honest when it cannot.
4. **Every state answers three questions:** what is happening, what does it mean for me, what can I do.
5. **Preserve user work across failures.** Inputs survive validation errors, timeouts, and reloads.
6. **Recovery is part of the state.** Errors come with a path forward.
7. **Long work should not hold users hostage.** Background it when the architecture allows.
8. **State changes should be noticeable.** Coordinate with motion-design for transitions that matter.

## Workflow

### 1. Identify the surface's states
Use `references/state-inventory.md` to enumerate data, activity, failure, authority, presence,
and environment states relevant to this surface. Skip the irrelevant ones explicitly.

### 2. Map transitions and authority
For flows involving servers, jobs, or other participants, identify:
- The source of truth for each piece of state
- Which requests can fail and how (timeout, 4xx, 5xx, offline, conflict)
- What the product state is in each failure case (unknown, unchanged, changed)

Load `references/transport-vs-product-state.md` and, if the UI updates before confirmation,
`references/optimistic-vs-authoritative.md`.

### 3. Build a state matrix
Use `references/state-matrix-template.md`: one row per state, with what the user sees, what it
means, what they can do, and how the product exits the state.

### 4. Choose deeper references
| Concern | Load |
|---|---|
| Loading, skeletons, progress, layout stability | `references/loading-and-progress.md` |
| Error taxonomy, messages, recovery | `references/errors-and-recovery.md` |
| Jobs lasting minutes; leave-and-return | `references/long-running-work.md` |
| Sockets, presence, reconnection, games, collaboration | `references/realtime-and-reconnection.md` |
| Forms, uploads, payments, AI generation, games, search | `references/domain-states.md` |

### 5. Design or repair
Design each state in the matrix. Prefer the smallest honest UI: a state header, an inline status,
a specific message, a clear action. In REPAIR mode, implement and trigger each state to verify.

### 6. Verify
Actually trigger the states:
- Throttle network; go offline mid-action; kill the socket
- Return 500s, 4xx, and timeouts from the API (mocks or devtools overrides)
- Use empty, one-item, and large fixtures
- Reload during long work; open in a second tab
- Double-click submit buttons

Record which states were verified at which evidence level.

## Execution rules

- Never display "failed" for an operation whose outcome is unknown; display "checking" or
  "connection lost, retrying" and reconcile.
- Make retries idempotent (request IDs, idempotency keys) before making them easy.
- Disable or guard repeat submission while an operation is in flight; show progress in the control.
- Keep layout stable across loading → loaded (reserve space).
- Mark stale data as stale (time since update, reconnecting indicator).
- Announce important state changes to assistive technology (polite live regions; assertive only
  for urgent errors).
- Do not invent states the architecture cannot support (for example "you can leave this page" when
  the job dies with the tab).

## Failure modes

- **Collapsed errors:** every failure is "Something went wrong."
- **Transport as truth:** a failed status poll shown as "Generation failed."
- **Optimistic lies:** "Sent!" for a message that never reached the server, with no later correction.
- **Spinner prison:** long work with no way to leave, cancel, or understand progress.
- **Skeleton theatre:** shimmering placeholders for content that loads instantly, or skeletons that
  do not match the final layout.
- **Silent staleness:** live dashboards that stop updating with no indication.
- **Lost work:** forms cleared on error; drafts lost on reload.
- **Double effects:** duplicate orders or jobs from retries.

## Completion criteria

- A state matrix exists for the surface or flow, covering relevant state types, with irrelevant
  ones noted as skipped.
- Transport failures are distinguished from product failures in UI and copy.
- Each error state explains what happened and offers a recovery path; user input is preserved.
- Long-running work is backgrounded or honestly explained.
- Key states were triggered and observed (or listed as unverified with how to trigger them).

## References

- `references/state-inventory.md` — enumerating states for a surface
- `references/transport-vs-product-state.md` — the core separation
- `references/optimistic-vs-authoritative.md` — optimistic UI done honestly
- `references/loading-and-progress.md` — loading, skeletons, progress
- `references/errors-and-recovery.md` — error taxonomy and recovery design
- `references/long-running-work.md` — jobs, leaving, returning, notification
- `references/realtime-and-reconnection.md` — live and multiplayer states
- `references/domain-states.md` — forms, uploads, payments, AI generation, games, search
- `references/state-matrix-template.md` — the matrix format
- `references/_shared/` — shared taxonomy, patterns, and worked examples
  (`honest-error-states.md`, `long-running-generation.md`)
