<!-- GENERATED FROM examples/workflow/inline-rename.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: Inline Rename

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

## When this lesson does not apply

Renaming that has external consequences (changing a public URL slug, renaming a shared channel
with integrations) may need a preview of consequences; keep it inline but show the impact.

## Universal analogues

Due dates, assignees, status, quantities, labels, playlist order.
