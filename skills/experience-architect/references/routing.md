# Routing

How to pick specialist skills from a diagnosis. Specialists are sibling skills in this
collection. Any of them may or may not be installed.

## Checking what is installed

Look for sibling skill folders next to this one (for example in the agent's skills directory),
or rely on the agent's skill list. If a specialist is not installed, apply the fallback
method summarized in the table below. It is a compressed version, not a replacement; mention
to the user that the full skill exists.

## Routing table

| Specialist | Route here when | Fallback method if not installed |
|---|---|---|
| composition-repair | Dead space, no focal point, cramped, centered-but-not-composed, overflow, collisions, sticky chrome eating the viewport, scroll confusion | Rank content (P0–P4). Give P0 the focal position and size. Relate content to viewport (not just centered). Remove container soup. Render at 3 sizes. Check overflow and overlaps. |
| visual-identity | Generic look, fails the logo test, personality on controls instead of environment, trend copying | List the product's domain, content, mechanics, audience. Derive 2–4 identity carriers (type voice, color roles, motif, surface). Apply them to the environment, not to controls. Run the logo test. |
| workflow-compression | Too many steps, repeated inputs, choice screens with one option, confirmations everywhere, waiting | Map every step. Tag friction (redundant input, unnecessary choice, confirmation tax, navigation tax, etc.). Remove or default what the system knows. Keep safety and judgment. Count before/after. |
| interaction-design | Confusing or clever controls, restated context, unsafe destructive actions, poor forms, keyboard/touch gaps | Prefer familiar controls. Scope actions to known context. Undo for reversible, confirm for irreversible. Label actions by outcome. Check keyboard, focus, target size. |
| state-design | Only the happy path exists; vague errors; loading and retries unclear; long jobs block the user; optimistic UI lies | List states (empty, loading, partial, error types, offline, stale, long-running). Separate transport from product state. Design each honestly with recovery. |
| motion-design | Everything fades/slides; events go unnoticed; product feels flat; motion janky or inaccessible | Identify real events (arrival, transfer, resolution...). Give each a sequenced, short, interruptible motion with a reduced-motion alternative. Remove motion from non-events. |
| product-friction | Whole product feels hard; users get lost; terminology confusing; duplicate concepts; support burden | Build a friction ledger: issue, frequency, severity, time cost, cognitive cost, risk, repair. Rank by frequency × cost. |
| responsive-validation | Breaks at some size; zoom, RTL, touch, or keyboard issues; "works on my screen" | Check a matrix (large desktop, laptop, short laptop, tablet, common phone, small phone, 200% zoom, RTL if relevant). Look for overflow, collisions, clipped content, sticky obstruction, target size. |
| empty-state-design | Zero/one item, first-run, no results, filtered-empty, no permission; sparse page feels unfinished or stuffed with filler | Explain the absence specifically. Offer the most useful next action. Surface real context. Remove filler. |
| anti-slop-ui | Looks AI-generated or template-made; gradients, glass, pills, cards, fake stats, generic copy | Run the anti-slop gate. For each flag, state its job or remove it. Replace generic copy with specific copy. |
| critical-review | User asks "is this good?"; enthusiastic proposal; redesign to evaluate; about to endorse own work | State goal, proposal, constraints. Evaluate against the goal and the current state. Find hidden costs. Verdict with evidence. No praise before evaluation. |

## Routing by product type

Product type changes emphasis, not the method.

| Product | Usual first specialists | Watch for |
|---|---|---|
| Marketing website | visual-identity, composition-repair, anti-slop-ui | Hero clichés, feature-grid rhythm, generic copy |
| Web or mobile app | workflow-compression, interaction-design, state-design | Redundant input, modal overuse, missing states |
| Game | visual-identity, motion-design, state-design, interaction-design | Operational UI in experiential surfaces; overdesigned join flows; event feedback |
| Admin / internal tool | workflow-compression, product-friction, composition-repair | Serial work, expert tax, dense-but-unscannable tables |
| Content / editorial / docs | composition-repair, visual-identity | Cards replacing editorial hierarchy; line length; navigation |
| Commerce | workflow-compression, interaction-design, composition-repair | Merchandising between user and purchase; redundant choices |
| Developer tool / CLI | workflow-compression, interaction-design, state-design | Interactive interrogation; unclear progress and errors |
| Mobile-first | responsive-validation, interaction-design | Reach, targets, bottom-sheet overuse, keyboard overlap |
| Desktop app | interaction-design, workflow-compression | Keyboard support, dense layouts, multi-window state |
| Live / real-time | state-design, interaction-design, motion-design | Status visibility, scoped controls, reconnection honesty |
| Public service | workflow-compression, interaction-design, critical-review | Spectacle over clarity; wizard overuse; error recovery |
| Data-heavy | composition-repair, anti-slop-ui, state-design | KPI-card clichés; charts that answer nothing; stale data |

## Stop conditions

Stop adding specialists when:

- The top-ranked problems are all covered.
- The next specialist would address only low-impact issues.
- The user asked for a narrow change.
