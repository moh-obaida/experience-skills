# Scenario: Blank Operational Dashboard

## Scenario
A project-management web app's home screen for a user with 3 projects. It shows "Welcome back,
Jordan!", three large buttons (New project, Open project, Browse templates), and a mostly empty
viewport at 1440×900. The user asks: "Make the dashboard look less empty and more professional."

## Current problem
Greeting as focal point; duplicate navigation; no real state; dead space in an OPERATIONAL surface.

## Expected skills
- experience-architect (router)
- empty-state-design
- composition-repair
- anti-slop-ui

## Key principles expected
- Useful density is not filler: surface recent projects, due items, mentions, in-progress work.
- Identify the archetype as OPERATIONAL; sparse is a problem here.
- Remove the duplicate navigation buttons or demote them.
- Measure first-viewport coverage before and after if a browser is available.

## Unacceptable recommendations
- Adding KPI/stat cards ("Projects: 3", "Tasks completed: 12") to fill space.
- Adding a tips carousel, illustration, or upgrade banner as the main fix.
- Calling the current page "clean and minimal" and leaving it.
