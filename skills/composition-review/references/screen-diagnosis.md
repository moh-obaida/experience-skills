# Screen Diagnosis: Axes, Measurements, and Screen Types

Inspect the screen as a composition first, components second. Record observations separately from
interpretations.

## The first-impression pass

Look at the rendered screen for 3 to 5 seconds before opening anything. Write down: what dominates,
what the product or task appears to be, and where attention goes next. Then compare with this
user's priority. There is no universal reading order; the test is whether attention goes where this
user's job needs it. Then squint: ignore copy and see masses, columns, light and dark blocks, and
vertical rhythm. If two or three regions claim equal weight, there is no focal point (V1).

## Axes

| Axis | Observe | Fails when |
|---|---|---|
| Focal point | Where the eye lands first | It lands on decoration, a status card, or a header rather than the instrument or the next action |
| Information hierarchy | Rank readable in grayscale | Headings, metadata, and body look alike (V5), or supporting content out-ranks the job |
| Spatial allocation | Area and contrast per region versus its value | A low-value surface owns the most area, contrast, or isolation (V2, V7) |
| First viewport | What the user sees without scrolling | Chrome and sections above the task; the primary action below the fold (V10) |
| Rhythm | Spacing, section handoffs, repeated structure | Accidental collisions, uneven gaps, monotone sameness that hides rank (V8) |
| Balance and optical weight | Visual mass left to right and top to bottom | Heavy region against light ones with no reason, equal size taken for equal weight (V7) |
| Density | Content per area against task frequency and expertise | Cramped where scanning matters (V4); padded where the expert needs overview |
| Empty space | The job of each large empty region | No job (V3); state-appropriate stillness is fine |
| Control-content relation | Distance and grouping between a control and what it affects | Primary action far from its fields; filters far from the list |
| Instrument versus support | Authority of the core instrument | Support panels overpower it, push it below the fold, or shrink it on mobile |
| Action dominance | One primary action per area | Several primary-looking actions; a rare action louder than the frequent one |
| Container nesting | Boxes inside boxes | Cards in cards in panels, borders doing all the grouping (V9) |
| Centering | Whether centering is a decision | Everything centered with large unused regions, order without intent (V6) |
| Fragmentation | Number of columns and disconnected regions | Many equal columns, regions with no visible relationship |
| Stepper and form relation | Indicator, current step, controls, summary | Stepper detached from content; controls far from the step they finish; step count and content disagree |
| Desktop to mobile | Order, size, and reach of the core job | Stacking buries the instrument; sticky chrome eats the viewport; the layout reorders by DOM, not by job |

## Measurements that help

Use them when a browser is available; label them E2. They support the diagnosis; they do not replace
looking.

- Content coverage of the first viewport and the largest empty region.
- Bounding-box area share per top-level region, with the primary action's and instrument's share.
- Nesting depth of bordered or filled containers around the main content.
- Column count and width ratios at the primary size.
- Y position of the primary action at desktop and at a narrow phone size.
- Whether the first viewport contains the instrument.

If the composition-repair or responsive-validation skill is installed, its measuring scripts supply
coverage and region numbers.

## Screen types

Use these to calibrate what good looks like. They are heuristics, not templates.

**Join page.** Good: the code field and join action are the obvious center of attention; the world
or brand frames them; no supporting sections compete. Failing: explanatory cards, feature lists,
and tips around a single field; a hero that pushes the field below the fold. A sparse, quiet join
page is correct.

**Live game or classroom board.** Good: the board, question, answer flow, and necessary player
context own the screen. Failing: decorative status cards (connection, round count, tips) bigger
than the board; the answer area under secondary panels; team panels with disproportionate size for
unequal content.

**Setup or lobby.** Good: the state (who is here, what is required to start) is the focal point;
the start control sits where the host's eyes are. Sparse while waiting is expected. Failing: setup
options with no real choice given primary space; the requirement notice permanently dominant.

**Stepper and wizard.** Good: indicator, current step, controls, and result read as one path;
connectors align to nodes. Failing: indicator floating above unrelated regions; controls at the far
end of a wide layout; each step re-centering at a different width.

**Import workflow.** Good: source, mapping, preview, and confirm read in sequence with the
consequence visible. Failing: awkward disconnected regions (a drop zone, a format note, a result
list) without a visible order; the confirm action far from the preview.

**Help or documentation page.** Good: readable measure, a navigation spine, content anchored.
Failing: over-centered layout with narrow text floating in empty space and the navigation absent.

**Dashboard or expert console.** Good: dense, scannable, aligned; the live signal is most prominent.
Failing: equal-weight KPI tiles with no priority; chrome taller than the data.

**Editor or creation tool.** Good: the work artifact dominates; tools support. Failing: tool
chrome around a small canvas.

## Calibration reminders

- A good composition can still have minor defects; report those as LOCAL REPAIR.
- A composition appropriate to a specific state or audience is not broken because it would be wrong
  elsewhere.
- Avoid style judgments. "Too much white" is not a finding; "the instrument gets 18% of the first
  viewport and the status panel 40%" is.
