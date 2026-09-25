<!-- GENERATED FROM examples/workflow/inline-rename.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: Inline Rename

*Invented teaching example. Where it cites real products, the observations are in the repository's research log (Notion NO3 ('Turn into' and in-place editing); 2026-09-24).*

**Archetype:** OPERATIONAL · **Product types:** any app with named objects
**Skills:** workflow-compression, interaction-design

## Context

Users rename projects, boards, playlists, or quizzes often, usually right after creating them or
when reorganizing.

## The bad version

```
Project page → Settings (navigation)
  → General tab → Edit (opens modal)
    → Name field → type → Continue
      → "Save changes?" → Save
        → Success page "Project updated!" → Back to project
```

## Measurements (before)

`8 actions · 3 navigations · 1 modal · 1 confirmation · 1 dead-end page · context lost (scroll position)`

## Correct analysis

- F4 NAVIGATION TAX: a one-field edit requires leaving the page.
- F5 CONFIRMATION TAX: renaming is reversible.
- F9 DEAD END: a success page with no purpose.

## The better version

```
Project title "Spring Tournament ✎"  → click (or Enter when focused, or context menu "Rename")
→ [Spring Tournament 2026        ]   → Enter
→ "Spring Tournament 2026" (brief highlight)
```

- Escape cancels; blur commits.
- Inline validation ("A project with this name exists") keeps the text.
- Accessible trigger: button named "Rename Spring Tournament"; focus returns after commit.
- Undo via Cmd/Ctrl+Z or the activity history.

## Measurements (after)

`2 actions (+ typing) · 0 navigations · 0 confirmations · context preserved`

## User goal and constraints

Rename projects without losing place. Constraints: shared projects, keyboard users, mobile.

## Alternative direction

Rename from a context menu that opens the inline field (for discoverability on touch).

## Implementation notes

Button trigger with accessible name; input replaces text at the same size; Enter commits, Escape cancels; conflict notice if renamed by someone else.

## Verification

Keyboard-only rename; screen reader announces the edit field; long names wrap without layout shift.

## Failure conditions

Hover-only affordance; blur committing a half-typed name in sensitive fields.

## When this lesson does not apply

Renaming that has external consequences (changing a public URL slug, renaming a shared channel
with integrations) may need a preview of consequences; keep it inline but show the impact.

## Universal analogues

Due dates, assignees, status, quantities, labels, playlist order.
