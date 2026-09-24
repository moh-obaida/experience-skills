# Domain States

State checklists for common domains. Use the relevant one alongside the general inventory.

## Forms and submissions

- Pristine, editing, invalid (field), invalid (form), submitting, submitted, server-rejected,
  timeout/unknown, duplicate submission prevented, draft saved, draft restored, session expired
  during editing.
- Requirements: input preserved on every failure; clear submitted confirmation with next action;
  idempotent submission.

## Uploads

- Selected, validating (type/size), uploading (progress), paused, resumed, interrupted, processing
  after upload (virus scan, transcoding), ready, failed (per file), partially complete (multi-file).
- Requirements: per-file status; resumable where possible; processing separate from uploading;
  cancel; retry failed only.

## Payments

- Entering details, validating, requires additional authentication (3-D Secure, bank app),
  processing, succeeded, declined (with reason category), outcome unknown, refunded, partially
  refunded, disputed.
- Requirements: never encourage "pay again" while outcome is unknown; clear pending; receipt;
  idempotency keys.

## AI generation

- Composing prompt, queued, generating (streaming or staged), partial output, succeeded,
  succeeded with warnings (content filtered, truncated), failed (with cause: input too long, policy,
  capacity, internal), canceled, regenerating.
- Requirements: inputs preserved; background for long jobs; partial output kept when failure
  happens late; transport errors separate from generation errors; honest time expectations.

## Games and live sessions

- Lobby (waiting for players), countdown, question/turn active, answering (who), judging,
  resolved (correct/incorrect), between rounds, paused, ended, results, rematch.
- Participant states: joined, ready, disconnected, reconnected, spectating, kicked.
- Requirements: state header for hosts; authoritative outcomes; reconnection summary; results with
  next action (play again).

## Search

- Empty query (suggestions, recent), typing (instant results or not), loading, results, no results
  (with suggestions), error, too many results (refine), filtered-empty.

## Authentication and access

- Signed out, signing in, second factor, signed in, session expiring, session expired mid-task
  (preserve work), permission denied (request access), invite expired, account locked.

## Sync and offline-capable apps

- Online, offline (working locally), pending sync (n changes), syncing, synced, conflict, sync
  failed.
