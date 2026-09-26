# Design-System Artifact

Before implementation, write a compact artifact that turns the selected system into build decisions. The design-system selector compares three distinct systems on job fit, audience, density, trust, device, language, accessibility, brand maturity, implementation cost, and failure risk. Do not offer three colors of one layout.

Record the selected system and theme, its design thesis, reasons for rejecting the other two, and the adaptations made for this product. Then specify these role decisions:

| Role | Decision to record |
|---|---|
| Type | heading/body/label/data/code families and sizes; fallback and language coverage |
| Color | canvas, surfaces, text, secondary, border, action, hover, selected, focus, status |
| Geometry | spacing scale, corner and border rules, containers and density |
| Components | button hierarchy, fields, tabs, menus, cards, lists/tables, modal/toast |
| Composition | per-route focal point, first viewport, desktop/tablet/mobile transformation |
| Content | heading, action, empty/error voice and data presentation |
| Motion | event mapping, timing, reduced-motion equivalent |
| Constraints | contrast, touch, RTL, performance, imagery source/licensing |

Translate used roles into code tokens and components; avoid dozens of unused variables. A theme changes token values while preserving interaction and composition. If the chosen system is recognizable only from its name in a planning note, implementation has failed. After building, compare a sparse and dense route against the artifact and update it when evidence requires a change.
