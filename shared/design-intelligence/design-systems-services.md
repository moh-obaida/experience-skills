# Design Systems: Services

Authored candidates for service journeys. Component semantics and state obligations are in `design-system-grammar.md`; these entries define different priorities and visual contracts.

## Civic Grid

**Thesis.** Public decisions must be explainable at each step. Confident, plain, accountable. Use for civic services and utilities; avoid for expressive games.

| Layer | Contract |
|---|---|
| Composition | Single question/task column with explicit progress and help. Desktop 720px form measure beside a contextual rail; tablet/mobile rail follows the task, never precedes it. |
| Type | Humanist system sans, 30/22/17/14px; generous 1.5 body line-height, no all-caps labels. Use a full Arabic UI face when Arabic is primary. |
| Color | Civic Ivory: `#FAFAF6` canvas, `#FFFFFF` surface, `#182825` ink, `#42564F` secondary, `#AAB8AF` line, `#174F42` action; errors use separate red plus text. |
| Geometry | 4px unit, 12px field internals, 24px question groups, 40px sections; 3px controls, 0–4px surfaces, visible borders, no decorative shadow. Stroke and lift: Use a consistent visible field border and quiet section rules; focus replaces no error cue, and no decorative shadow frames routine questions. |
| Components/nav | One Continue/Submit, plain Back, labeled inputs and radios, inline error summary linked to fields. Step navigation reflects real progress, not invented wizard steps. Shown when: Show help beside the question that needs it, progress only when the service has real stages, and validation after the relevant field or submit action. |
| States/motion | Draft, validation, submitted, delayed, rejected, and unavailable are distinct. No entrance motion; focus/scroll to error intentionally. |
| Media/voice | Diagrams only for eligibility or process, simple icons paired with labels. Copy states requirements, deadlines, and consequences. Copy: Use plain public-service language, state what information is required and why, and name a concrete correction for validation errors. |
| Failure/anti-imitation | Decorative government seals or blue gradients cannot supply trust. Do not reproduce any agency's visual identity. Accept: Capture initial, invalid, corrected, and submitted forms at desktop and phone widths in English and Arabic; verify errors follow their fields without clipping. |

**Core-screen and look contract.** Calm, high-clarity energy: large plain question type, square bordered fields, and generous section breaks make the current decision unmistakable. Action color appears on the live step and valid focus; errors use a separate labeled signal, never a brand-colored reassurance. Continue moves the step marker and focus to the next real question. This improves accountability but sacrifices visual spectacle. Reject for nonsequential exploration.

## Warm Utility

**Thesis.** A service can feel human through clear next steps and respectful tone, without ornamental reassurance. Suits healthcare access and booking; avoid dense market terminals.

| Layer | Contract |
|---|---|
| Composition | Current need → available next actions → relevant history. Desktop two-column task/context; tablet and mobile prioritize booking or help, with history later. |
| Type | Soft humanist sans, 28/20/16/13px; labels remain direct; numerals and times use tabular features. Mixed Arabic/Latin appointments tested for direction. |
| Color | Warm Stone: `#F8F5EE` canvas, `#FFFFFF` surface, `#222B26` ink, `#536059` secondary, `#BDC8BE` line, `#215A4B` action. Never use soft status colors without labels. |
| Geometry | 4px unit, 12/20/36px rhythm; 8px controls, 10px surfaces, borders before shadow. Comfort comes from breathing room around decisions. Stroke and lift: Use one soft boundary for the current task and thin rules for context; reserve elevation for a true overlay and never shadow every service option. |
| Components/nav | Clear appointment options as rows with date/time and availability; one primary booking action. Form controls remain conventional, cancellation is explicit and recoverable. Shown when: Keep the current need and its next action first; reveal history only when relevant and show availability or delay status only when it changes a choice. |
| States/motion | Upcoming, waitlisted, cancelled, completed, and no availability have different copy/actions. Tiny confirmation transition only; reduced motion static. |
| Media/voice | Real service photography only if it helps choose; line icons spare. Copy is warm through specificity, never “your journey starts here.”; Copy: Use reassuring but specific language; name the service, local time, and next step without promising an outcome the provider cannot guarantee. |
| Failure/anti-imitation | Pastel cards cannot compensate for missing availability. Avoid copying a wellness brand's rounded illustration style. Accept: Capture booking, unavailable, and help-recovery states at desktop and phone widths, with one mixed Arabic and Latin appointment label. |

**Core-screen and look contract.** Gentle but active energy: humanist type and rounded, breathable task rows soften the service without muting availability or the booking action. Color grows around a selected appointment, then becomes a quieter confirmed state; cancellation has its own labeled signal. This reduces anxiety but sacrifices dense comparison. Reject when experts must scan many concurrent records.

## Service Map

**Thesis.** Long services become manageable when responsibility and stage are visible. Use for claims, applications, and repairs; unnecessary for one-step tasks.

| Layer | Contract |
|---|---|
| Composition | Stage map + current task + evidence trail. Desktop stage rail with central work area; tablet collapses rail; mobile uses a short stage summary above the current task. |
| Type | Humanist sans 28/20/16/13px, tabular dates, mono only for reference IDs; readable long explanations. |
| Color | Cool Stone: `#F3F6F5` canvas, `#FFFFFF` surface, `#1E2A28` ink, `#50635F` secondary, `#B8C7C1` line, `#22584F` action. Stage colors are secondary to labels. |
| Geometry | 4px unit; 8px within steps, 20px between tasks, 36px stage transitions; 5px controls, 8px panels, shallow elevation only for overlays. Stroke and lift: Give the active stage one strong marker, use a single connector line between stages, and keep evidence panels flat unless they overlay the task. |
| Components/nav | Stage indicator is navigable only when stages are reachable; checklists show owner and due date. Forms save drafts; documents show received/needed status. Shown when: Show only completed, current, and genuinely available stages; reveal evidence and exception details for the stage that needs attention. |
| States/motion | Awaiting user, awaiting service, review, correction, complete, and stalled are explicit. Progress transition follows real authority, not optimistic animation. |
| Media/voice | Process diagram only when it reduces explanation; icons mark actor/attachment. Copy states who acts next. Copy: Name each stage by the user’s task, distinguish submitted from approved, and explain the next required action after a delay or rejection. |
| Failure/anti-imitation | A decorative 1–5 progress bar that ignores real dependencies is dishonest. Do not copy an insurance portal's stage naming. Accept: Capture an in-progress application, a rejected item, and completion at desktop and phone widths; check connectors align and do not imply false progress. |

**Core-screen and look contract.** Balanced process energy: the current task is a high-contrast block within a firm stage rhythm; completed stages quiet down while pending responsibility stays visually distinct. A verified stage change moves the marker and names the next actor, with no false progress animation. This clarifies long work but adds navigation overhead. Reject for one-step services.

## Open Counter

**Thesis.** Routine services should feel as accessible as a clear counter interaction. Use for appointments and local services; too plain for specialist control.

| Layer | Contract |
|---|---|
| Composition | Task tiles only when destinations are distinct; otherwise direct action list. Desktop left task, right hours/location; mobile task first, place/time details below. |
| Type | System sans 30/21/16/13px, clear large labels, generous line-height; strong language fallback. |
| Color | Paper/Ink: `#FBFAF5` canvas, `#FFFFFF` surface, `#202622` ink, `#536056` secondary, `#B9C5B9` line, `#1C5845` action. High-contrast focus ring. |
| Geometry | 4px unit; 12px controls, 24px groups, 40px sections; 4px radius, 1px rules, no default cards for every item. Stroke and lift: Use compact rules to separate real destinations, give the active task one clear edge, and avoid card frames when a direct action list suffices. |
| Components/nav | Large labeled actions with outcome, direct search for service, visible contact fallback. Mobile nav preserves the top tasks and phone access. Shown when: Offer task tiles only for distinct destinations; show hours and location beside actions that depend on them, not as a repeated header card. |
| States/motion | Open/closed, available/full, submitted/pending are written. No decorative motion; result feedback is immediate and persistent. |
| Media/voice | Map only when location affects choice; utilitarian icons plus text. Plain local language, not campaign copy. Copy: Label actions by the service requested; state opening hours, eligibility, and what happens after submission in locally understandable terms. |
| Failure/anti-imitation | Oversized welcome hero wastes the first viewport. Do not replicate a municipal site's header or seal. Accept: Capture the direct-action and multi-destination versions, including closed and unavailable states, at desktop and narrow phone widths. |

**Core-screen and look contract.** Plain, direct energy: strong sans labels and generous but square targets make the action list feel open and immediate. Chroma belongs to the selected service, reachable contact route, and genuine result, never to decorative tiles; submission replaces the action with its receipt and next step. This speeds routine access but sacrifices specialist depth. Reject for complex control instruments.

## Trust Record

**Thesis.** Evidence, source, and recency create confidence in regulated work. Use for compliance and high-stakes services; wrong for quick entertainment.

| Layer | Contract |
|---|---|
| Composition | Current decision with linked evidence and history. Desktop document/main + source rail; tablet and mobile fold sources into expandable citations without hiding them. |
| Type | Restrained serif for short policy headings, humanist sans UI, tabular dates/IDs; 27/19/15/12px. Avoid ornate body text; multilingual source labels must wrap. |
| Color | Graphite/Ivory: `#F7F7F2` canvas, `#FFFFFF` surface, `#1B2627` ink, `#516064` secondary, `#B6C1C2` line, `#1C5561` action. Status colors reserved for verified status. |
| Geometry | 4px unit; 8px citation metadata, 18px evidence groups, 32px sections; 3px controls, 4px panels, crisp rules. Stroke and lift: Use document rules to connect claims to evidence; give the active decision one marker and avoid shadows on source and history panels. |
| Components/nav | Citation links expose source, revision, and effective date. Table rows retain provenance. Destructive approval/rejection is separated with safeguards. Shown when: Keep citations available beside consequential claims, expand the source rail on small screens, and show an alert only when evidence or policy changed. |
| States/motion | Draft, reviewed, verified, superseded, revoked, and unknown authority are distinct. No celebratory motion; updates highlight changed evidence only. |
| Media/voice | Documents/diagrams as evidence, no generic trust stock photos. Copy is precise and names uncertainty. Copy: Separate verified facts, policy, and recommendation in the wording; preserve source names, dates, and uncertainty without overstating confidence. |
| Failure/anti-imitation | A green “verified” badge without provenance is misleading. Do not borrow a regulator's visual authority. Accept: Capture a decision with expanded citations, a changed source, and a permission-limited record at desktop and phone widths; verify source links remain reachable. |

**Core-screen and look contract.** Low energy, high contrast at evidence boundaries: crisp citations, tabular dates, and ruled source groups carry authority without decorative seals. Chroma marks verified provenance and changed evidence only; superseded facts lose emphasis but remain legible. A revision reveals what changed beside its source. This improves auditability but sacrifices quick scanning of unrelated tasks. Reject when evidence cannot be surfaced.

## Home Circuit

**Thesis.** Household tasks make sense by place, person, and time. Use for family/home coordination; unsuitable for industrial safety control.

| Layer | Contract |
|---|---|
| Composition | Today by room or person, with next actions in view. Desktop split schedule/location; tablet list with filters; mobile today-first with bottom task access. |
| Type | Friendly humanist sans 28/20/16/13px, tabular times; emoji never substitute for clear labels. Arabic/Latin names stay readable together. |
| Color | Sage/Clay: `#F8F6EF` canvas, `#FFFFFF` surface, `#26302A` ink, `#59675E` secondary, `#C2CABE` line, `#356047` action; use warm accent for shared milestones only. |
| Geometry | 4px unit, 12px task rows, 24px day groups, 36px route transitions; 8px controls, 10px surfaces, low depth. Stroke and lift: Use one separator per schedule boundary, reserve filled surfaces for the currently selected room or person, and keep status rows unshadowed. |
| Components/nav | Task rows show owner, due time, and completion; quick add is scoped to current room/person. Navigation keeps Home, Schedule, People, Places stable. Shown when: Show today’s next action by room or person; surface a conflict or missed appointment only when it changes the household schedule. |
| States/motion | Due, waiting, delegated, done, overdue, and offline sync are distinct. Completion can settle a row in 160ms; reduced motion uses a static check. |
| Media/voice | User photos/room images only when useful; simple object icons. Copy is concrete, not faux-cozy. Copy: Use familiar household names and explicit local times; identify who is expected to act without implying that another person has already agreed. |
| Failure/anti-imitation | Cartoon stickers on every task conceal priority. Do not imitate a smart-home brand's device tiles. Accept: Capture a populated day, a schedule conflict, and an empty day at desktop and phone widths; verify the next action remains reachable around safe areas. |

**Core-screen and look contract.** Warm, moderately lively energy: person/place headings and compact daily rows create a domestic rhythm without cartoon furniture. Color concentrates on the active shared task and earned milestone, while overdue and sync states remain separate and labeled. Completing a task settles its row and exposes who acts next. This supports coordination but sacrifices industrial precision. Reject for safety-critical monitoring.
