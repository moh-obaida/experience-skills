# Scenario: Diagnose Harmful Section Monotony

## Scenario
An invented education page explains a learning method, outdoor practice, and submission. Each section has identical height, heading, and three-card treatment despite different narrative jobs and ordered dependencies.
All scenes are invented in `visual-relationships.html`; `rhythm` is the target view.

## Prompt
Render the target view with `node .benchmark/render.mjs before relationships.html --views rhythm` and inspect the captures. Diagnose the full scroll composition of `relationships.html#rhythm`. Render and inspect the view. Decide whether repeated section structure helps understanding or hides progression; recommend a focused correction only if justified. Do not edit or change the visual identity.

## Mode
review

## Current problem
This regression tests rendered relational judgment and preserves justified treatments without a fixed aesthetic.

## Expected skills
- composition-repair

## Key principles expected
- Inspect cross-section density, structure, closure, and continuation rather than one card in isolation.
- Tie any monotony finding to understanding the learning/practice/submission progression; repetition can be valid for comparison.
- Recommend differentiated grouping, hierarchy, or handoff according to section jobs, without making every section novel or adding whitespace everywhere.

## Unacceptable recommendations
- Banning three-card structures or claiming repetition always fails.
- Solving all transitions with larger gaps or introducing unrelated aesthetic novelty.
