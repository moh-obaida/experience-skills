# Design Systems: Operations and Decision Tools

Authored candidates for work where status, risk, and throughput matter. Do not use operational density as an excuse for tiny targets or unlabeled state.

## Dense Signal

**Thesis.** Many signals can be scanned when priority, recency, and authority are explicit. Fits control rooms and logistics; wrong for casual discovery.

| Layer | Contract |
|---|---|
| Composition | Alerts, map/queue, detail in a stable grid. Desktop multi-pane; tablet queue/detail; mobile alerts first with explicit drill-down. Critical status always above decorative summary. |
| Type | Narrow technical sans labels, mono tabular numbers, humanist sans explanations; 27/18/14/12px, measured at operational viewing distance. |
| Color | Technical Dark: `#121A1C` canvas, `#1E292B` surface, `#ECF3F1` ink, `#B4C5C0` secondary, `#526761` line, `#B4DCC5` action with dark label. Warning/danger isolated. |
| Geometry | 4px unit; 6px row internals, 12px groups, 24px panels; 2px controls, 4px surfaces, line/grid depth rather than glass. Stroke and lift: Use grid lines and one severity edge for alarms; do not combine tinted cards, thick borders, and shadows on an operational row. |
| Components/nav | Sortable tables with sticky labels, alert severity plus text/time, acknowledge action separated from resolve. Nav follows operational objects and regions. Shown when: Keep critical alerts above summaries, show freshness beside affected metrics, and represent empty queues without synthetic status cards. |
| States/motion | Live, stale, degraded, unknown, acknowledged, resolved distinct. Update highlights expire; reduced motion static timestamp/change mark. |
| Image/icon/copy | Real maps/plots only; 16px icon with text. Copy specifies object, condition, and consequence. Copy: State asset, severity, time, and response in a stable order; label estimates and stale readings explicitly. |
| Failure/anti-imitation | Glowing gauges and five gray levels hide urgency. Do not copy a specific command-center dashboard. Accept: Capture alarm, stale metric, filtered-empty queue, and acknowledgement at desktop and phone widths; verify priority survives grayscale and zoom. |

**Core-screen and look contract.** High operational energy: compressed rows, narrow headings, hard grid lines, and dark-light contrast make the alert lane impossible to miss. A high-chroma signal appears only on a new priority event, while acknowledged items quickly recede; selecting one binds queue, map, and detail with a brief pulse. This increases scan speed but sacrifices calm reading. Reject when no real-time priority exists.

## Precision Field

**Thesis.** Field work begins with location, measurement, and evidence capture. Fits inspections and outdoor service; not brand campaigns.

| Layer | Contract |
|---|---|
| Composition | Current site/task → measurement form → evidence and submission. Desktop map/detail, tablet field form, mobile offline-first single column with fixed but non-obscuring capture access. |
| Type | Industrial sans headings/UI, tabular mono measurements; 29/20/16/13px. Units and decimals explicit; Arabic labels and Latin coordinates isolated. |
| Color | Stone/Signal: `#F2F2ED` canvas, `#FFFFFF` surface, `#252B28` ink, `#56605A` secondary, `#BCC5BD` line, `#1E5A4A` action. Safety yellow only for real caution. |
| Geometry | 4px unit, 12px field interiors, 24px inspection groups, 40px stages; 5px controls, 6px panels, strong borders for sunlight. Stroke and lift: Use high-contrast field borders for sunlight, one outline for the active measurement, and no shadow on forms or evidence rows. |
| Components/nav | Large measurement fields, scan/camera action, location and timestamp always visible, review-before-submit. Mobile targets and keyboard behavior tested outdoors. Shown when: Show offline and sync warnings only while they affect capture or submission; keep units beside values and expose invalid readings inline. |
| States/motion | Offline, unsynced, submitted, rejected, revised, and location uncertain distinct. Save confirmation immediate; no ambient motion. |
| Image/icon/copy | Evidence photos retain capture metadata; icons recognizable with labels. Copy names what evidence is required. Copy: Use exact measurement names, units, and decimal precision; state whether a value is entered, estimated, or device-captured. |
| Failure/anti-imitation | A map that covers the form on mobile slows collection. Do not borrow industrial equipment branding. Accept: Capture outdoor form, invalid measurement, offline save, and sync recovery at desktop and phone widths; check glare contrast and focus clipping. |

**Core-screen and look contract.** Brisk, durable energy: large measurement controls, tabular units, and heavy sunlight-safe borders outrank the map. Active capture uses a strong distinct color; unsynced evidence stays visible with a separate marker, and saving marks the captured item in place. This supports outdoor entry but sacrifices gallery-like presentation. Reject when location and evidence do not drive the work.

## Transit Manual

**Thesis.** Route, handoff, and exception must be understood in one scan. Fits delivery/transport; wrong for storytelling.

| Layer | Contract |
|---|---|
| Composition | Current route timeline with next stop, exception lane, and detail. Desktop route/map split; tablet timeline first; mobile next stop/action first, map one tap away. |
| Type | Condensed sans route headings, humanist sans directions, tabular mono times/IDs; 28/19/16/12px. Long place names wrap without hiding route number. |
| Color | Graphite/Amber: `#F3F4F1` canvas, `#FFFFFF` surface, `#202925` ink, `#52615A` secondary, `#BCC8BF` line, `#1D5A47` action. Amber only for delay/caution. |
| Geometry | 4px unit; 8px stop internals, 16px route groups, 32px handoff breaks; 4px controls, 6px panels, clear timeline rules. Stroke and lift: Use one continuous line for route order and a separate accent lane for exceptions; avoid duplicate selection borders across map and timeline. |
| Components/nav | Stop row shows time, place, status, next action. Exception menu is contextual; dispatch and driver actions are separated by role. Shown when: Put the next stop and action first; show delays and missed connections only when they alter the route, with last-update time attached. |
| States/motion | En route, arrived, delayed, missed, transferred, delivered, and unknown position explicit. Live position moves only from data; reduced motion uses timestamp. |
| Image/icon/copy | Map is functional with list alternative; 18px directional icons plus labels. Copy names next stop and actor. Copy: Use local stop names and explicit time zones when needed; distinguish scheduled, estimated, canceled, and departed states. |
| Failure/anti-imitation | A cinematic map hides exception work. Do not mimic a ride service's tracking animation. Accept: Capture normal route, delay, missed handoff, and phone next-stop view; verify connectors and long names stay legible. |

**Core-screen and look contract.** Fast directional energy: condensed next-stop type, firm timeline rules, and tight rows put route changes ahead of scenery. Chroma enters at the current stop and true exception; arrival moves the route marker and updates the next actor without cinematic map motion. This improves handoff speed but sacrifices exploratory browsing. Reject when there is no ordered route.

## Soft Instrument

**Thesis.** Health measurements should be readable without dramatizing normal variation. Fits health monitoring; wrong for games.

| Layer | Contract |
|---|---|
| Composition | Current measure, personal range/context, trend, action guidance. Desktop measure+trend, tablet and mobile current value then explanation; charts never precede the meaning. |
| Type | Humanist sans for explanations, tabular numeric display; 30/21/16/13px. Units and ranges remain attached to values; readable at zoom. |
| Color | Sage/Cream: `#F7FAF5` canvas, `#FFFFFF` surface, `#26332D` ink, `#586A60` secondary, `#C0CEC3` line, `#2E5B49` action. Clinical warnings use explicit labels and tested colors. |
| Geometry | 4px unit, 12px measure internals, 24px groups, 40px sections; 7px controls, 9px panels, no alarmist shadows. Stroke and lift: Use quiet chart rules and one emphasis for the current measure; warnings add text and shape, not color or alarm-like shadow alone. |
| Components/nav | Measure cards only for distinct readings, trends with labeled axes, actionable guidance separate from data. Primary action is record or contact, depending on state. Shown when: Show personal range beside the current value, guidance only when it changes a next step, and alerts only at defined thresholds. |
| States/motion | Normal, outside personal range, missing data, sensor error, stale, and urgent care guidance distinct. No pulsing red; reduced motion static. |
| Image/icon/copy | Human diagrams only when explanatory; clear icon labels. Copy distinguishes observation from medical inference. Copy: Name measure, unit, range, and source; distinguish informational trends from clinical guidance and say when data is incomplete. |
| Failure/anti-imitation | Green/red-only charts imply diagnosis without context. Do not copy a wearable app's ring visual. Accept: Capture typical, outside-range, missing-data, and zoomed views at desktop and phone widths; check units and calm warning visibility. |

**Core-screen and look contract.** Calm, clinically precise energy: large tabular readings and soft but definite range boundaries outweigh the surrounding cards. Chroma marks a measured deviation only with a label, while normal variation stays neutral; a new reading updates value, context, and trend together without alarm motion. This reduces false urgency but sacrifices excitement. Reject when no personal range or context is available.

## Console Ledger

**Thesis.** Commands and audit trails belong in one accountable shell. Fits security/infrastructure experts; unsuitable for untrained novices.

| Layer | Contract |
|---|---|
| Composition | Resource tree, command/action area, event ledger. Desktop three-pane, tablet two-pane, mobile read-only priority with explicit action mode if supported. |
| Type | Technical mono for commands/IDs, system sans for explanations, narrow sans headings; 27/19/14/12px. Ambiguous glyphs and line wrapping tested. |
| Color | Ink Terminal: `#101719` canvas, `#1B2427` surface, `#EDF3F1` ink, `#B4C6C2` secondary, `#536662` line, `#A6D4C3` action with dark label. Danger separate from active selection. |
| Geometry | 4px unit, 6px row rhythm, 12px control groups, 24px panels; 2px controls, 4px surfaces, hard separators. Stroke and lift: Use hard separators between command, resource, and event regions; selected resources get one row fill and focus remains visible over borders. |
| Components/nav | Command entry with scope preview and safe confirmation for irreversible changes; event table filterable with copyable IDs. Nav follows resource hierarchy. Shown when: Show destructive consequences before execution, expose retry only for retryable failures, and keep healthy status out of the event lane. |
| States/motion | Running, queued, succeeded, partial failure, rolled back, and permission denied distinct. Stream updates in place without scroll theft; reduced motion static. |
| Image/icon/copy | No decorative terminal wallpaper; 16px icons with labels. Copy uses exact resource names and consequences. Copy: Preserve exact command and resource identifiers; describe errors in operator terms, with technical codes as supporting diagnostics. |
| Failure/anti-imitation | Terminal styling without command semantics is costume. Do not clone a cloud console's shell. Accept: Capture command-ready, confirmation, denied, and recovery states at desktop and phone widths; verify mono wrapping, focus, and chronology. |

**Core-screen and look contract.** High technical energy: dense mono data, square separators, and a dark command field give active execution the strongest contrast. A bright operational accent appears at the current command and exact changed resource, then the event ledger retains a quieter trace; danger has a separate hue. This supports accountable expert action but sacrifices novice friendliness. Reject without real commands and an auditable result.

## Market Frame

**Thesis.** Availability, comparison, and transaction terms should drive a marketplace. Fits procurement and comparison shopping; not one-object luxury storytelling.

| Layer | Contract |
|---|---|
| Composition | Search/filter → comparable results → item/offer detail. Desktop results table/cards by data need, tablet hybrid, mobile comparison through saved shortlist rather than cramped columns. |
| Type | Neutral system sans UI, mono tabular prices/quantities; 29/20/16/12px. Vendor names and units wrap safely. |
| Color | Cool Stone: `#F5F7F6` canvas, `#FFFFFF` surface, `#1F2B2B` ink, `#536265` secondary, `#BDC9C9` line, `#1E5960` action. Price change/danger distinct. |
| Geometry | 4px unit, 8px result metadata, 16px row separation, 32px category changes; 5px controls, 6px surfaces, minimal shadow. Stroke and lift: Use one row rule or card boundary per result mode, one marker for the chosen offer, and no stacked elevation in comparisons. |
| Components/nav | Filters show active constraints; compare slots remain explicit; offer row includes total cost, availability, delivery, and seller terms. Purchase action tied to selected offer. Shown when: Show filters when they reduce results, keep total price visible through comparison, and explain unavailable offers in place. |
| States/motion | Available, limited, backordered, expired, selected, and quote pending distinct. Sort/filter updates preserve scroll and announce result count. |
| Image/icon/copy | Product images when they help comparison; spec diagrams otherwise. Icons secondary; copy names total cost and conditions. Copy: Keep seller, quantity, unit, total price, and delivery basis explicit; explain offer changes without internal inventory codes. |
| Failure/anti-imitation | Giant product cards hide comparable numbers. Do not copy a retail marketplace's badge vocabulary. Accept: Capture results, chosen offer, missing inventory, and mobile shortlist; verify prices stay aligned with units and sellers. |

**Core-screen and look contract.** Medium-high decision energy: aligned numbers, compact comparison rows, and strong offer headings dominate over product imagery. Chroma identifies the selected offer and real availability, then moves to the transaction result; price movement uses a separate labeled state. This improves comparable choice but sacrifices luxury presentation. Reject when one artifact deserves unhurried storytelling.
