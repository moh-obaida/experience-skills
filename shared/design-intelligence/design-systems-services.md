# Design Systems: Services

Authored candidates for service journeys. Component semantics and state obligations are in `design-system-grammar.md`; these entries define different priorities and visual contracts.

## Civic Grid

**Thesis.** Public decisions must be explainable at each step. Confident, plain, accountable. Use for civic services and utilities; avoid for expressive games.

| Layer | Contract |
|---|---|
| Composition | Single question/task column with explicit progress and help. Desktop 720px form measure beside a contextual rail; tablet/mobile rail follows the task, never precedes it. |
| Type | Humanist system sans, 30/22/17/14px; generous 1.5 body line-height, no all-caps labels. Use a full Arabic UI face when Arabic is primary. |
| Color | Civic Ivory: `#FAFAF6` canvas, `#FFFFFF` surface, `#182825` ink, `#42564F` secondary, `#AAB8AF` line, `#174F42` action; errors use separate red plus text. |
| Geometry | 4px unit, 12px field internals, 24px question groups, 40px sections; 3px controls, 0–4px surfaces, visible borders, no decorative shadow. |
| Components/nav | One Continue/Submit, plain Back, labeled inputs and radios, inline error summary linked to fields. Step navigation reflects real progress, not invented wizard steps. |
| States/motion | Draft, validation, submitted, delayed, rejected, and unavailable are distinct. No entrance motion; focus/scroll to error intentionally. |
| Media/voice | Diagrams only for eligibility or process, simple icons paired with labels. Copy states requirements, deadlines, and consequences. |
| Failure/anti-imitation | Decorative government seals or blue gradients cannot supply trust. Do not reproduce any agency's visual identity. |

## Warm Utility

**Thesis.** A service can feel human through clear next steps and respectful tone, without ornamental reassurance. Suits healthcare access and booking; avoid dense market terminals.

| Layer | Contract |
|---|---|
| Composition | Current need → available next actions → relevant history. Desktop two-column task/context; tablet and mobile prioritize booking or help, with history later. |
| Type | Soft humanist sans, 28/20/16/13px; labels remain direct; numerals and times use tabular features. Mixed Arabic/Latin appointments tested for direction. |
| Color | Warm Stone: `#F8F5EE` canvas, `#FFFFFF` surface, `#222B26` ink, `#536059` secondary, `#BDC8BE` line, `#215A4B` action. Never use soft status colors without labels. |
| Geometry | 4px unit, 12/20/36px rhythm; 8px controls, 10px surfaces, borders before shadow. Comfort comes from breathing room around decisions. |
| Components/nav | Clear appointment options as rows with date/time and availability; one primary booking action. Form controls remain conventional, cancellation is explicit and recoverable. |
| States/motion | Upcoming, waitlisted, cancelled, completed, and no availability have different copy/actions. Tiny confirmation transition only; reduced motion static. |
| Media/voice | Real service photography only if it helps choose; line icons spare. Copy is warm through specificity, never “your journey starts here.” |
| Failure/anti-imitation | Pastel cards cannot compensate for missing availability. Avoid copying a wellness brand's rounded illustration style. |

## Service Map

**Thesis.** Long services become manageable when responsibility and stage are visible. Use for claims, applications, and repairs; unnecessary for one-step tasks.

| Layer | Contract |
|---|---|
| Composition | Stage map + current task + evidence trail. Desktop stage rail with central work area; tablet collapses rail; mobile uses a short stage summary above the current task. |
| Type | Humanist sans 28/20/16/13px, tabular dates, mono only for reference IDs; readable long explanations. |
| Color | Cool Stone: `#F3F6F5` canvas, `#FFFFFF` surface, `#1E2A28` ink, `#50635F` secondary, `#B8C7C1` line, `#22584F` action. Stage colors are secondary to labels. |
| Geometry | 4px unit; 8px within steps, 20px between tasks, 36px stage transitions; 5px controls, 8px panels, shallow elevation only for overlays. |
| Components/nav | Stage indicator is navigable only when stages are reachable; checklists show owner and due date. Forms save drafts; documents show received/needed status. |
| States/motion | Awaiting user, awaiting service, review, correction, complete, and stalled are explicit. Progress transition follows real authority, not optimistic animation. |
| Media/voice | Process diagram only when it reduces explanation; icons mark actor/attachment. Copy states who acts next. |
| Failure/anti-imitation | A decorative 1–5 progress bar that ignores real dependencies is dishonest. Do not copy an insurance portal's stage naming. |

## Open Counter

**Thesis.** Routine services should feel as accessible as a clear counter interaction. Use for appointments and local services; too plain for specialist control.

| Layer | Contract |
|---|---|
| Composition | Task tiles only when destinations are distinct; otherwise direct action list. Desktop left task, right hours/location; mobile task first, place/time details below. |
| Type | System sans 30/21/16/13px, clear large labels, generous line-height; strong language fallback. |
| Color | Paper/Ink: `#FBFAF5` canvas, `#FFFFFF` surface, `#202622` ink, `#536056` secondary, `#B9C5B9` line, `#1C5845` action. High-contrast focus ring. |
| Geometry | 4px unit; 12px controls, 24px groups, 40px sections; 4px radius, 1px rules, no default cards for every item. |
| Components/nav | Large labeled actions with outcome, direct search for service, visible contact fallback. Mobile nav preserves the top tasks and phone access. |
| States/motion | Open/closed, available/full, submitted/pending are written. No decorative motion; result feedback is immediate and persistent. |
| Media/voice | Map only when location affects choice; utilitarian icons plus text. Plain local language, not campaign copy. |
| Failure/anti-imitation | Oversized welcome hero wastes the first viewport. Do not replicate a municipal site's header or seal. |

## Trust Record

**Thesis.** Evidence, source, and recency create confidence in regulated work. Use for compliance and high-stakes services; wrong for quick entertainment.

| Layer | Contract |
|---|---|
| Composition | Current decision with linked evidence and history. Desktop document/main + source rail; tablet and mobile fold sources into expandable citations without hiding them. |
| Type | Restrained serif for short policy headings, humanist sans UI, tabular dates/IDs; 27/19/15/12px. Avoid ornate body text; multilingual source labels must wrap. |
| Color | Graphite/Ivory: `#F7F7F2` canvas, `#FFFFFF` surface, `#1B2627` ink, `#516064` secondary, `#B6C1C2` line, `#1C5561` action. Status colors reserved for verified status. |
| Geometry | 4px unit; 8px citation metadata, 18px evidence groups, 32px sections; 3px controls, 4px panels, crisp rules. |
| Components/nav | Citation links expose source, revision, and effective date. Table rows retain provenance. Destructive approval/rejection is separated with safeguards. |
| States/motion | Draft, reviewed, verified, superseded, revoked, and unknown authority are distinct. No celebratory motion; updates highlight changed evidence only. |
| Media/voice | Documents/diagrams as evidence, no generic trust stock photos. Copy is precise and names uncertainty. |
| Failure/anti-imitation | A green “verified” badge without provenance is misleading. Do not borrow a regulator's visual authority. |

## Home Circuit

**Thesis.** Household tasks make sense by place, person, and time. Use for family/home coordination; unsuitable for industrial safety control.

| Layer | Contract |
|---|---|
| Composition | Today by room or person, with next actions in view. Desktop split schedule/location; tablet list with filters; mobile today-first with bottom task access. |
| Type | Friendly humanist sans 28/20/16/13px, tabular times; emoji never substitute for clear labels. Arabic/Latin names stay readable together. |
| Color | Sage/Clay: `#F8F6EF` canvas, `#FFFFFF` surface, `#26302A` ink, `#59675E` secondary, `#C2CABE` line, `#356047` action; use warm accent for shared milestones only. |
| Geometry | 4px unit, 12px task rows, 24px day groups, 36px route transitions; 8px controls, 10px surfaces, low depth. |
| Components/nav | Task rows show owner, due time, and completion; quick add is scoped to current room/person. Navigation keeps Home, Schedule, People, Places stable. |
| States/motion | Due, waiting, delegated, done, overdue, and offline sync are distinct. Completion can settle a row in 160ms; reduced motion uses a static check. |
| Media/voice | User photos/room images only when useful; simple object icons. Copy is concrete, not faux-cozy. |
| Failure/anti-imitation | Cartoon stickers on every task conceal priority. Do not imitate a smart-home brand's device tiles. |
