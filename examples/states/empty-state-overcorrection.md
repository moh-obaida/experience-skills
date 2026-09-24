# Worked Example: Empty-State Overcorrection

**Archetype:** OPERATIONAL · **Product types:** any list, library, or history
**Skills:** empty-state-design, anti-slop-ui, composition-repair

## Context

The "Games" history page for a teacher who has created quizzes but never hosted a game.

## Version 1: blank

```
Games
No games yet.
```

A dead end. The teacher does not know what goes here or how to start.

## Version 2: the overcorrection

```
Games
[ enormous 3D illustration of a trophy and confetti ]
No games yet! 🎉
Games you host will appear here.
┌ Tip: Did you know you can host from any quiz? ┐
┌ Stats: 0 games · 0 players · 0% avg score     ┐
┌ ✨ Upgrade to Pro for unlimited players        ┐
"Education is the kindling of a flame." — quote
[ Watch tutorial ]  [ Read the guide ]  [ Host a game ]  (below the fold at 1366×768)
```

## The typical wrong review of version 2

> "Engaging and helpful empty state with lots of guidance."

## Correct analysis

- Fake density: zero stats, a tip that restates the action, an unrelated upsell, a quote.
- The primary action is below the fold on common laptops.
- Three calls to action compete.
- The illustration dominates the focal point.
- None of it uses what the system knows: the teacher already has quizzes ready to host.

## The better version

```
Games
No games hosted yet.
Your quiz "World Capitals" is ready to host.
[ Host World Capitals ]    or choose another quiz
```

One sentence explaining the absence; real context (a ready quiz); one primary action; a secondary
path. Optionally a small motif in the product's style.

## Why this works

It turns absence into the next step, using real data, without noise.

## When this lesson does not apply

If the teacher truly has nothing (no quizzes), the next action becomes "Create a quiz" or "Start
from a template." The structure stays the same.

## Canonical rule

**Explain absence. Provide the useful next action. Surface relevant existing context.**
