# Worked Example: Honest Error States

**Archetype:** any · **Product types:** any product that talks to a server
**Skills:** state-design, interaction-design

## Context

An app that saves documents, uploads attachments, and syncs over a sometimes-unreliable network.

## The bad version

Every failure shows the same toast:

> ⚠️ Something went wrong. Please try again.

Including when: the user typed an invalid email; the network dropped for two seconds; the server is
down; the file is too large; the document was edited by someone else; the save actually succeeded
but the response timed out.

## Correct analysis

The message collapses at least six different states into one. Users cannot tell whether to fix
something, wait, retry, or contact support, and retrying a timed-out save may duplicate data.

## The better version

| Situation | Honest state | UI |
|---|---|---|
| Invalid email | User-fixable | Inline under the field: "Enter an email like name@school.org." Input kept. |
| Network blip | Transient, retrying | Subtle: "Reconnecting…" then silent success; manual Retry after 3 failures |
| Server down | Terminal for now | Banner: "We can't reach the server. Your changes are saved on this device and will sync." |
| File too large | Limit | On the file row: "Too large (48 MB). Maximum 25 MB. Compress or choose another." |
| Edited by someone else | Conflict | "Sam edited this 2 min ago. Review their changes" with a diff |
| Save timed out | Unknown outcome | "Checking whether your changes saved…" → query → "Saved" or retry safely (idempotent) |
| Partial batch | Partial | "18 of 20 attachments uploaded. Retry 2 failed" |

## Why this works

Each state tells the user what happened, what it means, and what they can do. Transport problems
are not presented as product failures, and unknown outcomes are reconciled before users retry.

## Universal analogues

Payments (pending vs declined vs unknown), AI generation (queued vs failed vs connection lost),
messaging (sending vs failed vs delivered).

## Canonical rule

**Distinguish user-fixable, retrying, terminal, partial, offline, and unknown.**
