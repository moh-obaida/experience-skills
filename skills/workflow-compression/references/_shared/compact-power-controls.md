<!-- GENERATED FROM shared/patterns/compact-power-controls.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Pattern: Compact Power Controls

## Problem
Frequent users need speed and control, but exposing all power features by default overwhelms
newcomers and clutters the surface.

## When useful
- Products with a mix of new and expert users.
- High-frequency tools (editors, admin consoles, live control, trading, email).

## When NOT useful
- Rarely used products where no one becomes expert.
- When the "power" feature is really the main feature and deserves primary placement.

## Structure
- **Keyboard shortcuts** for constant actions, discoverable via tooltips and a shortcut sheet.
- **Command palette** when there are many actions across a large scope.
- **Remembered presets** for repeated configurations.
- **Dense mode** or compact rows as an opt-in.
- **Context menus** for secondary item actions.
- **Direct entry** (type a date instead of picking it; paste a list instead of adding items one by one).

Keep the default surface simple; reveal power progressively and consistently.

## Example
A task list shows a simple "Add task" field. Experts type `Fix login #auth @sam !high tomorrow`
and the parser assigns tag, assignee, priority, and date. Newcomers use the visible fields.

## Failure modes
- Shortcuts that conflict with platform or assistive-technology shortcuts.
- Power features that are the only way to do something important.
- A command palette added to a product with twelve actions.
