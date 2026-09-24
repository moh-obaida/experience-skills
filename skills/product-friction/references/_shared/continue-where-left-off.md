<!-- GENERATED FROM shared/patterns/continue-where-left-off.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Pattern: Continue Where You Left Off

## Problem
Interrupted work (drafts, partial setups, paused sessions, half-watched content) is lost or
hard to resume.

## When useful
- Tasks span multiple sessions or get interrupted.
- Setup flows with several steps.
- Media, learning, and reading progress.
- Long-running operations the user started and left.

## When NOT useful
- The prior state is sensitive or should expire (payment sessions, one-time codes).
- Resuming would surprise more than help (a stale draft from months ago offered as the primary action).

## Structure
1. Persist progress at meaningful checkpoints automatically.
2. On return, offer the resumable item prominently with context ("Draft · edited 2 hours ago").
3. Provide both "Continue" and a lighter "Start over."
4. Expire or de-emphasize stale resumables.

## Example
```
Continue setting up "Spring Tournament"   Step 3 of 4 · 2h ago   [ Continue ]  Discard
```

## Failure modes
- Resuming into a broken state because the underlying data changed.
- Multiple competing "continue" prompts on one screen.
- Blocking new work behind a resume prompt.
