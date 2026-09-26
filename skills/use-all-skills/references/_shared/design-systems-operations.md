<!-- GENERATED FROM shared/design-intelligence/design-systems-operations.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Design Systems: Operations and Decision Tools

Authored candidates for work where status, risk, and throughput matter. Do not use operational density as an excuse for tiny targets or unlabeled state.

## Dense Signal

**Thesis.** Many signals can be scanned when priority, recency, and authority are explicit. Fits control rooms and logistics; wrong for casual discovery.

| Layer | Contract |
|---|---|
| Composition | Alerts, map/queue, detail in a stable grid. Desktop multi-pane; tablet queue/detail; mobile alerts first with explicit drill-down. Critical status always above decorative summary. |
| Type | Narrow technical sans labels, mono tabular numbers, humanist sans explanations; 27/18/14/12px, measured at operational viewing distance. |
| Color | Technical Dark: `#121A1C` canvas, `#1E292B` surface, `#ECF3F1` ink, `#B4C5C0` secondary, `#526761` line, `#B4DCC5` action with dark label. Warning/danger isolated. |
| Geometry | 4px unit; 6px row internals, 12px groups, 24px panels; 2px controls, 4px surfaces, line/grid depth rather than glass. |
| Components/nav | Sortable tables with sticky labels, alert severity plus text/time, acknowledge action separated from resolve. Nav follows operational objects and regions. |
| States/motion | Live, stale, degraded, unknown, acknowledged, resolved distinct. Update highlights expire; reduced motion static timestamp/change mark. |
| Image/icon/copy | Real maps/plots only; 16px icon with text. Copy specifies object, condition, and consequence. |
| Failure/anti-imitation | Glowing gauges and five gray levels hide urgency. Do not copy a specific command-center dashboard. |

## Precision Field

**Thesis.** Field work begins with location, measurement, and evidence capture. Fits inspections and outdoor service; not brand campaigns.

| Layer | Contract |
|---|---|
| Composition | Current site/task → measurement form → evidence and submission. Desktop map/detail, tablet field form, mobile offline-first single column with fixed but non-obscuring capture access. |
| Type | Industrial sans headings/UI, tabular mono measurements; 29/20/16/13px. Units and decimals explicit; Arabic labels and Latin coordinates isolated. |
| Color | Stone/Signal: `#F2F2ED` canvas, `#FFFFFF` surface, `#252B28` ink, `#56605A` secondary, `#BCC5BD` line, `#1E5A4A` action. Safety yellow only for real caution. |
| Geometry | 4px unit, 12px field interiors, 24px inspection groups, 40px stages; 5px controls, 6px panels, strong borders for sunlight. |
| Components/nav | Large measurement fields, scan/camera action, location and timestamp always visible, review-before-submit. Mobile targets and keyboard behavior tested outdoors. |
| States/motion | Offline, unsynced, submitted, rejected, revised, and location uncertain distinct. Save confirmation immediate; no ambient motion. |
| Image/icon/copy | Evidence photos retain capture metadata; icons recognizable with labels. Copy names what evidence is required. |
| Failure/anti-imitation | A map that covers the form on mobile slows collection. Do not borrow industrial equipment branding. |

## Transit Manual

**Thesis.** Route, handoff, and exception must be understood in one scan. Fits delivery/transport; wrong for storytelling.

| Layer | Contract |
|---|---|
| Composition | Current route timeline with next stop, exception lane, and detail. Desktop route/map split; tablet timeline first; mobile next stop/action first, map one tap away. |
| Type | Condensed sans route headings, humanist sans directions, tabular mono times/IDs; 28/19/16/12px. Long place names wrap without hiding route number. |
| Color | Graphite/Amber: `#F3F4F1` canvas, `#FFFFFF` surface, `#202925` ink, `#52615A` secondary, `#BCC8BF` line, `#1D5A47` action. Amber only for delay/caution. |
| Geometry | 4px unit; 8px stop internals, 16px route groups, 32px handoff breaks; 4px controls, 6px panels, clear timeline rules. |
| Components/nav | Stop row shows time, place, status, next action. Exception menu is contextual; dispatch and driver actions are separated by role. |
| States/motion | En route, arrived, delayed, missed, transferred, delivered, and unknown position explicit. Live position moves only from data; reduced motion uses timestamp. |
| Image/icon/copy | Map is functional with list alternative; 18px directional icons plus labels. Copy names next stop and actor. |
| Failure/anti-imitation | A cinematic map hides exception work. Do not mimic a ride service's tracking animation. |

## Soft Instrument

**Thesis.** Health measurements should be readable without dramatizing normal variation. Fits health monitoring; wrong for games.

| Layer | Contract |
|---|---|
| Composition | Current measure, personal range/context, trend, action guidance. Desktop measure+trend, tablet and mobile current value then explanation; charts never precede the meaning. |
| Type | Humanist sans for explanations, tabular numeric display; 30/21/16/13px. Units and ranges remain attached to values; readable at zoom. |
| Color | Sage/Cream: `#F7FAF5` canvas, `#FFFFFF` surface, `#26332D` ink, `#586A60` secondary, `#C0CEC3` line, `#2E5B49` action. Clinical warnings use explicit labels and tested colors. |
| Geometry | 4px unit, 12px measure internals, 24px groups, 40px sections; 7px controls, 9px panels, no alarmist shadows. |
| Components/nav | Measure cards only for distinct readings, trends with labeled axes, actionable guidance separate from data. Primary action is record or contact, depending on state. |
| States/motion | Normal, outside personal range, missing data, sensor error, stale, and urgent care guidance distinct. No pulsing red; reduced motion static. |
| Image/icon/copy | Human diagrams only when explanatory; clear icon labels. Copy distinguishes observation from medical inference. |
| Failure/anti-imitation | Green/red-only charts imply diagnosis without context. Do not copy a wearable app's ring visual. |

## Console Ledger

**Thesis.** Commands and audit trails belong in one accountable shell. Fits security/infrastructure experts; unsuitable for untrained novices.

| Layer | Contract |
|---|---|
| Composition | Resource tree, command/action area, event ledger. Desktop three-pane, tablet two-pane, mobile read-only priority with explicit action mode if supported. |
| Type | Technical mono for commands/IDs, system sans for explanations, narrow sans headings; 27/19/14/12px. Ambiguous glyphs and line wrapping tested. |
| Color | Ink Terminal: `#101719` canvas, `#1B2427` surface, `#EDF3F1` ink, `#B4C6C2` secondary, `#536662` line, `#A6D4C3` action with dark label. Danger separate from active selection. |
| Geometry | 4px unit, 6px row rhythm, 12px control groups, 24px panels; 2px controls, 4px surfaces, hard separators. |
| Components/nav | Command entry with scope preview and safe confirmation for irreversible changes; event table filterable with copyable IDs. Nav follows resource hierarchy. |
| States/motion | Running, queued, succeeded, partial failure, rolled back, and permission denied distinct. Stream updates in place without scroll theft; reduced motion static. |
| Image/icon/copy | No decorative terminal wallpaper; 16px icons with labels. Copy uses exact resource names and consequences. |
| Failure/anti-imitation | Terminal styling without command semantics is costume. Do not clone a cloud console's shell. |

## Market Frame

**Thesis.** Availability, comparison, and transaction terms should drive a marketplace. Fits procurement and comparison shopping; not one-object luxury storytelling.

| Layer | Contract |
|---|---|
| Composition | Search/filter → comparable results → item/offer detail. Desktop results table/cards by data need, tablet hybrid, mobile comparison through saved shortlist rather than cramped columns. |
| Type | Neutral system sans UI, mono tabular prices/quantities; 29/20/16/12px. Vendor names and units wrap safely. |
| Color | Cool Stone: `#F5F7F6` canvas, `#FFFFFF` surface, `#1F2B2B` ink, `#536265` secondary, `#BDC9C9` line, `#1E5960` action. Price change/danger distinct. |
| Geometry | 4px unit, 8px result metadata, 16px row separation, 32px category changes; 5px controls, 6px surfaces, minimal shadow. |
| Components/nav | Filters show active constraints; compare slots remain explicit; offer row includes total cost, availability, delivery, and seller terms. Purchase action tied to selected offer. |
| States/motion | Available, limited, backordered, expired, selected, and quote pending distinct. Sort/filter updates preserve scroll and announce result count. |
| Image/icon/copy | Product images when they help comparison; spec diagrams otherwise. Icons secondary; copy names total cost and conditions. |
| Failure/anti-imitation | Giant product cards hide comparable numbers. Do not copy a retail marketplace's badge vocabulary. |
