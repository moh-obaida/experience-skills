# Diagnosis and Routing

Load at step 3–4: turn the user's symptoms into named problems, pick specialists, and order them.

Sections: Problem Taxonomy: From Symptoms to Problems · Routing · Cross-Skill Composition

## Problem Taxonomy: From Symptoms to Problems

Users describe symptoms. The router's job is to translate symptoms into problem classes that
specialists can act on. Many symptoms map to more than one class; confirm with observation.

### Symptom dictionary

| The user says | Likely problem classes | Confirm by |
|---|---|---|
| "It looks empty" / "too much whitespace" | DEAD SPACE, FAKE MINIMALISM, missing environment, sparse state | Measure first-viewport content coverage; check if the state is sparse data |
| "It looks clean" (said as praise, by an agent) | Possibly ALIGNED NOT COMPOSED, FAKE PREMIUM | Grayscale test; logo test; coverage |
| "It looks generic" / "AI-made" | GENERIC, TREND COPY, design clichés, generic copy | Run anti-slop gate; logo test |
| "It feels cheap" | Weak typography, inconsistent spacing, noise, low-quality imagery | Inspect type scale, spacing rhythm, asset quality |
| "It's cluttered" / "busy" | NOISE, CRAMPED, FLAT HIERARCHY, too many P0s | Count competing emphases; rank information |
| "I can't find X" | Discoverability, IA, WRONG FOCAL POINT | Path from landing to X; label clarity |
| "It takes forever" | Workflow friction (steps), WAITING TAX, performance | Map steps; time the flow; check network |
| "Too many clicks" | NAVIGATION TAX, CONFIRMATION TAX, SERIAL WORK, UNNECESSARY CHOICE | Map and count |
| "Why does it ask me that again?" | REDUNDANT INPUT, MEMORY FAILURE | Check what the system knows at that step |
| "I'm not sure what happened" | Missing feedback, state ambiguity, no motion for events | Trigger the action; observe response |
| "It feels flat / lifeless" | Missing event motion, weak identity, static state changes | Watch state changes; check motion |
| "The animations are annoying" | Motion slop, non-event motion, slow sequences | Inventory animations; time them |
| "It broke on my phone" | Overflow, collisions, target size, keyboard overlap | Render at the reported size |
| "It says 'Something went wrong'" | Collapsed error states, transport vs product confusion | Trigger failure modes |
| "I lost my work" | MEMORY FAILURE, missing drafts, validation clearing input | Interrupt the flow; refresh; fail validation |
| "Users keep asking support about X" | Terminology, discoverability, status ambiguity | Read the question; find where the product answers it |
| "Is this design good?" | Needs critical review, not reassurance | Apply critical-review workflow |
| "Make it pop" / "make it modern" | Vague; often identity or hierarchy | Ask what feels wrong now; observe first |

### Problem classes by specialist

- **Composition:** V1–V10, R1–R7 in the visual problem taxonomy.
- **Identity:** I1–I6.
- **Content/filler:** C1–C3.
- **Workflow:** F1–F10 and secondary types.
- **Interaction:** restated context, unfamiliar controls, unsafe actions, weak feedback, target size.
- **States:** missing states, dishonest states, transport/product confusion.
- **Motion:** non-event motion, missing event motion, slowness, no reduced motion.
- **Product friction:** terminology, IA, concepts, continuity, first-use/expert burden.
- **Judgment:** premature praise, enthusiasm mistaken for quality, unexamined proposals.

### Ranking problems

Rank by user impact, not by how easy they are to talk about:

1. Blocks or corrupts the task (broken, overflow hiding actions, lost data, dishonest state)
2. Slows frequent tasks (friction on constant or routine paths)
3. Undermines trust or comprehension (wrong focal point, confusing terms, vague errors)
4. Weakens identity or quality perception (generic, noise, dead space)
5. Polish (rhythm, minor inconsistencies)

A slop problem on the marketing page may matter less than a redundant input on a task done
fifty times a day. Say so when you rank.

## Problem classes the router must distinguish

Each class names its observable signal, so a symptom can be confirmed before routing.

| Problem class | Observable signal | Route to |
|---|---|---|
| Visually generic | Fails the logo test; template structure; trend treatments | anti-slop-ui, visual-identity |
| Visually chaotic | Many accents, competing emphases, no focal point in a squint test | composition-repair, anti-slop-ui |
| Visually empty | Low first-viewport coverage without an environment | composition-repair, empty-state-design, visual-identity |
| Hierarchy failure | Wrong or missing focal point; flat type scale | composition-repair |
| Workflow too long | Step, decision, and navigation counts high for frequency | workflow-compression |
| Repeated configuration | Same setup each session | workflow-compression |
| Confusing controls | Mis-clicks, hesitation, restated scope, unclear affordance | interaction-design |
| Inappropriate interaction novelty | Custom version of a standard control without measurable gain | interaction-design, critical-review |
| Bad information architecture | "Where is…?" questions; duplicate locations; vague labels | product-friction |
| Poor state handling | Generic errors, blank loading, false failures, lost input | state-design |
| Weak empty state | Blank or stuffed low-content surfaces | empty-state-design |
| Responsive failure | Overflow, collisions, clipped actions at some size or zoom | responsive-validation, composition-repair |
| Motion without meaning | Uniform entrances; silent important changes | motion-design |
| Identity mismatch | Identity intensity wrong for the archetype (spectacle on a tax form; blandness on a game) | visual-identity, critical-review |
| Design cliché | Gradients, glass, pills, KPI tiles, eyebrows without jobs | anti-slop-ui |
| Inaccessible experience | Keyboard traps, contrast failures, color-only meaning, small targets | interaction-design, responsive-validation |
| Sparse operational page | Greeting + buttons on a surface users return to daily | empty-state-design, composition-repair |
| Overly dense focused page | A single-purpose page crowded with secondary content | composition-repair, product-friction |
| Design direction mismatch | The visual direction contradicts audience or context | visual-identity (selection procedure) |
| Product-specific identity missing | Nothing derived from the product's mechanic, object, or content | visual-identity |
| Proposed redesign worse than current | A proposal adds cost without serving the goal better | critical-review, then the domain specialist |

## Specialist compositions

Recipes for common multi-class problems. Order matters: structure before surface, judgment last.

| Situation | Specialists, in order | Handoff between them |
|---|---|---|
| Generic sparse dashboard | empty-state-design → composition-repair → visual-identity → anti-slop-ui | Real state list → focal and viewport budget → environment carriers → gate |
| Slow creation flow | workflow-compression → product-friction → interaction-design | Counted flow and known-context inventory → concept and naming fixes → control design |
| Live multiplayer experience feels lifeless | state-design → motion-design → visual-identity → composition-repair | State matrix and events → event motion specs → world and color roles → stage composition |
| Proposed visual redesign | critical-review → visual-identity → anti-slop-ui → composition-repair | Goal and comparison → direction check → justification of treatments → rendered verification |
| Join / sign-in feels generic | composition-repair → visual-identity → interaction-design → anti-slop-ui | Dead space measured → environment derived → control kept standard → gate |
| Mobile breaks | responsive-validation → composition-repair → interaction-design | Failing sizes → restructure → reach and targets |
| Long job holds users hostage | state-design → workflow-compression | Job lifecycle and honesty → waiting tax removed |

After loading a specialist, carry its output forward explicitly (for example the counted flow, the
state matrix, the chosen direction); do not let the next specialist re-diagnose from scratch.

## Routing

How to pick specialist skills from a diagnosis. Specialists are sibling skills in this
collection. Any of them may or may not be installed.

### Checking what is installed

Look for sibling skill folders next to this one (for example in the agent's skills directory),
or rely on the agent's skill list. If a specialist is not installed, apply the fallback
method summarized in the table below. It is a compressed version, not a replacement; mention
to the user that the full skill exists.

### Routing table

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

### Routing by product type

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

### Stop conditions

Stop adding specialists when:

- The top-ranked problems are all covered.
- The next specialist would address only low-impact issues.
- The user asked for a narrow change.

## Cross-Skill Composition

When more than one specialist applies, order matters. Structure before surface, and
evaluation at the end.

### General order

1. **Understanding and friction** (product-friction, workflow-compression): decide what the
   surface should even contain and which steps exist.
2. **Structure** (composition-repair, empty-state-design, state-design): arrange content and
   states.
3. **Interaction** (interaction-design): make controls obvious and safe within that structure.
4. **Identity** (visual-identity): express the product through the environment.
5. **Motion** (motion-design): explain events in the final structure.
6. **Verification** (responsive-validation): check real sizes and conditions.
7. **Judgment** (anti-slop-ui, critical-review): gate the result.

Skipping ahead causes rework: animating a layout that later changes, or branding a flow that
later loses two screens.

### Common compositions

#### A visually blank dashboard
```
experience-architect
→ empty-state-design   (is it genuinely empty, or sparse? what is the real next action?)
→ composition-repair   (focal point, viewport budget, remove dead space)
→ visual-identity      (environment carriers, if the archetype allows)
→ anti-slop-ui         (no fake stats or filler)
→ critical-review      (is it actually better than before?)
```

#### A 12-click setup flow
```
experience-architect
→ workflow-compression (map, classify, remove, recount)
→ product-friction     (terminology, concepts, why the flow exists)
→ interaction-design   (inline controls, defaults, confirmation vs undo)
```

#### A live product that feels flat
```
experience-architect
→ state-design         (what states exist, which transitions matter)
→ motion-design        (event-driven motion for those transitions)
→ visual-identity      (environment and state colors)
```

#### Mobile breaks
```
experience-architect
→ responsive-validation (find where and how it breaks)
→ composition-repair    (repair the structure)
→ interaction-design    (reach, targets, keyboard, sheets)
```

#### Join page / sign-in page feels generic
```
experience-architect
→ composition-repair   (aligned vs composed; viewport budget)
→ visual-identity      (environment, not the textbox)
→ interaction-design   (keep the input conventional, fast, accessible)
→ anti-slop-ui         (no segmented-box gimmick, no fake premium)
```

#### Reviewing someone's proposed redesign
```
experience-architect
→ critical-review      (goal, proposal, current state, hidden costs)
→ one domain specialist to substantiate the key finding
```

### Avoiding duplication

- Run the shared evaluation (rubric, gate) once at the end, not per specialist.
- Each specialist should pick up the previous one's findings rather than re-diagnosing.
- If two specialists recommend conflicting things (identity wants a dramatic hero; workflow
  wants the task above the fold), resolve explicitly using the page archetype and the user's
  goal, and say which won and why.
