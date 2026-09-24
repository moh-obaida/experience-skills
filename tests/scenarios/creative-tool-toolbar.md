# Scenario: Creative Tool Toolbar

## Scenario
A web-based diagram editor has a toolbar with 34 same-size icon buttons in two rows, no labels, and
every property change (color, stroke, font) opens a modal dialog. Power users complain it's slow;
new users can't find anything.

## Current problem
Flat action hierarchy, discoverability, navigation tax via modals, expert tax, cognitive load.

## Expected skills
- interaction-design
- product-friction
- workflow-compression
- composition-repair

## Key principles expected
- Canvas priority; chrome recedes.
- Contextual controls for the selected object instead of modals (direct manipulation, inspector).
- Frequency-based placement; rare tools in menus; keyboard shortcuts shown in tooltips.
- Progressive disclosure that serves both newcomers and experts.

## Unacceptable recommendations
- Adding a product tour as the primary fix.
- Adding a command palette while keeping all 34 icons and modals.
- Making icons bigger and more colorful as the main change.
