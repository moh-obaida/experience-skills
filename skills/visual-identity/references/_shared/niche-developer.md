<!-- GENERATED FROM shared/design-intelligence/niche-developer.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Niche Atlas: Developer & Technical

Products for people who read code, logs, and specifications for a living. Accuracy, speed, and
copyability outrank atmosphere; the most damaging generated default here is "technical" costume
(black canvas, neon green or cyan, glowing borders) standing in for actual technical quality. Load
with `niche-atlas-index.md`; compare three systems with `design-system-selector.md`.

## Product realities

### Developer tools, IDEs, and code editors
- **Reality:** Users spend hours inside the tool; the code is the product and chrome competes with it for attention and pixels.
- **Jobs:** Edit, navigate symbols, search, run and debug, review diffs, resolve conflicts, configure once and forget.
- **Density:** Dense.
- **Surfaces:** Editor, file tree, tabs, panels (terminal, problems, output), diff view, command palette, settings, extensions.
- **States:** Unsaved, conflicted, building, failing test, remote disconnected, indexing, read-only, large file.
- **Interaction:** Keyboard-first, shortcut discoverability, split views, multiple windows.
- **Trust:** High for correctness (never lose code), low tolerance for latency.
- **Generated-UI failures:** Rounded glowing panels, gradient tab indicators, 14px padding everywhere wasting lines, animated sidebars.

### Terminal products and CLIs
- **Reality:** Output is text in a grid of monospace cells; web surfaces for CLIs (install pages, dashboards, learning) must respect that medium without cosplaying it.
- **Jobs:** Install, run a command, read the plan and result, copy the next command, understand an error, learn flags.
- **Density:** Medium; output-dependent.
- **Surfaces:** Install page, command reference, interactive tutorial, terminal output, web companion dashboards.
- **States:** Missing dependency, permission denied, partial success, long-running with progress, non-interactive CI mode, no color.
- **Interaction:** Copy/paste, keyboard only, 80-column constraint, piping.
- **Trust:** High; commands act on machines.
- **Generated-UI failures:** Fake terminal windows with traffic-light dots around marketing copy, typing animations that delay the command, green-on-black as the only identity.

### Cloud, DevOps, observability, monitoring
- **Reality:** Operators watch many signals and must decide quickly, often at night, often from a phone.
- **Jobs:** See what is broken, find the cause, acknowledge an alert, roll back, compare before and after a deploy.
- **Density:** Dense.
- **Surfaces:** Service overview, alert list, incident page, metrics explorer, logs, traces, deploy history, runbooks.
- **States:** Firing, acknowledged, resolved, flapping, stale data, missing data vs zero, partial outage, maintenance window.
- **Interaction:** Time-range selection, drill-down, keyboard filters, links shared in chat.
- **Trust:** Very high; wrong status costs outages.
- **Generated-UI failures:** Decorative gauges, glowing status orbs, green everything, charts without units or time zone, KPI cards for vanity metrics.

### Databases and API tools
- **Reality:** Users write queries or requests, inspect results, and iterate; results can be huge.
- **Jobs:** Write and run a query, read and export results, inspect schema, save and share requests, manage environments and secrets.
- **Density:** Dense.
- **Surfaces:** Query editor, results grid, schema browser, request builder, response viewer, history, environments.
- **States:** Running, cancelled, timed out, error with position, empty result, truncated result, production vs staging environment.
- **Interaction:** Keyboard, split editor/results, copy as code.
- **Trust:** High; running against production is consequential.
- **Generated-UI failures:** Results in cards, schema as a bento, environment indicator hidden, same color for prod and dev.

### Cybersecurity and networking
- **Reality:** Analysts triage large volumes of alerts where most are noise and one is serious; network engineers reason about topology and change.
- **Jobs:** Triage, investigate an entity, escalate, contain, document, audit changes, understand reachability.
- **Density:** Dense.
- **Surfaces:** Alert queue, case, entity page (host, user, IP), timeline, topology map, policy editor, reports.
- **States:** Severity levels, false positive, suppressed, contained, assigned, SLA breached, change pending approval.
- **Interaction:** Keyboard triage, pivots between entities, bulk actions with audit.
- **Trust:** Very high; both false alarms and missed alarms are costly.
- **Generated-UI failures:** Black and neon-green hacker aesthetic, padlock and shield icons everywhere, radar sweeps and world maps with glowing arcs.

### Technical education
- **Reality:** Learners need to understand concepts and practice exact syntax; the gap between explanation and hands-on practice is where they drop.
- **Jobs:** Read a concept, try it, see the result, recover from an error, know what to learn next.
- **Density:** Medium.
- **Surfaces:** Lesson, interactive exercise or sandbox, reference, progress map, hints, solution.
- **States:** Not started, attempted, wrong with explanation, passed, stuck (repeated failure), sandbox resetting.
- **Interaction:** Typing code or commands, reading output, stepping back.
- **Trust:** Moderate; wrong teaching creates lasting mistakes.
- **Generated-UI failures:** Gamified neon, XP bars larger than the lesson, fake terminal typing animations, mascots explaining pointers.

### AI developer tools
- **Reality:** Developers evaluate, trace, and ship model-backed features; they need exact inputs, outputs, costs, and diffs.
- **Jobs:** Inspect a trace, compare prompts or models, run evals, read token and cost data, review agent changes.
- **Density:** Dense.
- **Surfaces:** Trace viewer, playground, eval results, dataset, diff review, usage.
- **States:** Streaming, truncated, rate-limited, failed tool call, nondeterministic variance, pending review.
- **Interaction:** Side-by-side comparison, keyboard, copy as code.
- **Trust:** High; results must be reproducible.
- **Generated-UI failures:** Sparkle icons, purple gradients, chat bubbles for traces, hiding raw data behind summaries.

## Systems

### Gutter and Pane
**Thesis.** The code gets every pixel it can use; chrome is a thin, quiet frame that appears when summoned. Character: focused, quiet, fast. Audience: developers working for hours. **Fit:** IDEs, code editors, diff and review tools, AI coding tools' editor surfaces.

**Fingerprint** `density=dense; composition=canvas-perimeter; surface=layered-panels; type=mono-led; nav=command-palette; accent=low; motion=none; imagery=none; radius=square; data=strong; tone=focused-quiet`

| Layer | Decision |
|---|---|
| Composition | Editor fills the center; activity rail and file tree left (collapsible), panels bottom, status bar 22px. Everything else lives in the command palette. |
| Type | Monospace for code (JetBrains Mono or IBM Plex Mono, 13–14px/1.5); UI in a compact sans (IBM Plex Sans 12–13px). Fallback `ui-monospace, SFMono-Regular, Consolas, monospace`. Arabic in comments: IBM Plex Sans Arabic via fallback. |
| Color | canvas #1B1D1A · surface #232621 · ink #E4E2D9 · muted #A09E93 · line #34372F · action #D9B45A · on-action #1B1D1A. Warm graphite dark theme; a light theme remaps roles, never inverts syntax colors blindly. |
| Space and shape | 22px list rows, 4px icon padding; square panels separated by 1px lines; tabs 32px with no radius. |
| Icons and imagery | 16px file-type and codicon-style glyphs; no imagery. |
| Components | Tabs with dirty dot and close; palette with fuzzy match and shortcut hints; diff with inline and side-by-side modes. Primary actions are commands, not buttons. |
| States | Unsaved and conflicted shown in tab and tree; remote disconnect in status bar with reconnect; indexing progress quietly in status bar. |
| Responsive | Desktop only for editing; narrow widths collapse panels; tablets get read and review modes. |
| Motion | None except caret and scroll. |
| Accessibility | Full keyboard, screen-reader mode for editor, high-contrast theme maintained as a first-class theme. |
| Build | `--row-h:22px; --tab-h:32px; --status-h:22px; --radius:0`. Theme as role tokens mapped to syntax scopes; test with real 3,000-line files. |
| AI mutation | Rounded glassy panels, neon purple accents, generous padding, animated sidebars. |
| Fails when | Users are not writing code; marketing pages copying editor chrome as decoration. |

### Prompt Line
**Thesis.** Web surfaces for command-line products should be as direct as the command line: the command first, copyable, followed by exactly what it will do. Character: terse, friendly, honest. Audience: developers installing or learning a CLI. **Fit:** CLI homepages, install and quick-start pages, command references, terminal-learning products.

**Fingerprint** `density=medium; composition=command-first; surface=flat-ruled; type=mono-led; nav=in-content; accent=medium; motion=restrained-causal; imagery=none; radius=square; data=moderate; tone=terse-friendly`

| Layer | Decision |
|---|---|
| Composition | First viewport: one-line description, the install command in a copy block, and the first real output. Then a sequence of command → output pairs that teach the workflow. Reference pages are long single documents with anchored flags. |
| Type | Monospace for commands and output (JetBrains Mono or Martian Mono); prose in a plain grotesk (Public Sans). 32/16/14/12px. Fallback system mono and `system-ui`. |
| Color | canvas #FBFBF8 · surface #F1F1EC · ink #141414 · muted #56564F · line #D8D8D0 · action #0E5A46 · on-action #FFFFFF. Output blocks use the real ANSI palette of the tool, adjusted for contrast; no neon. |
| Space and shape | 8px base; command blocks full-width, square, 1px ruled; 48px between command/output pairs. |
| Icons and imagery | None; output is the imagery. |
| Components | Copy button inside every command block with "Copied" feedback; OS tabs for install commands remember the choice. Primary action: copy install. |
| States | Error examples shown next to success examples with the fix. Offline docs note. Version selector for reference. |
| Responsive | Command blocks scroll horizontally on phones rather than wrapping commands; prose reflows. |
| Motion | Copy feedback 150ms; no typing animations (they delay reading). |
| Accessibility | Code blocks labelled with language; copy buttons have accessible names including the command's purpose. |
| Build | `--block-pad:16px; --pair-gap:48px`. Generate output samples from the real CLI in CI so they never drift. |
| AI mutation | Fake macOS terminal window with traffic lights, typewriter animation, green-on-black glow, gradient "Get started" button. |
| Fails when | The product's users are not command-line users; GUI-first products. |

### Night Watch
**Thesis.** On-call operators need a dark, low-glare instrument where only abnormal things are bright. Character: vigilant, controlled, sober. Audience: SREs and operators, often at night. **Fit:** observability, monitoring, incident response, cloud consoles' status views.

**Fingerprint** `density=dense; composition=instrument-grid; surface=flat-bordered; type=technical-sans; nav=persistent-sidebar; accent=multi-role; motion=restrained-causal; imagery=data-graphic; radius=low; data=strong; tone=vigilant`

| Layer | Decision |
|---|---|
| Composition | Top: time range and environment. Grid of service rows (not cards) with status, error rate, latency sparkline, last deploy; firing alerts pinned above. Incident page is a timeline plus linked charts. |
| Type | Technical sans (IBM Plex Sans) with tabular numerals, mono for identifiers. 20/14/12/11px. Fallback `system-ui`. |
| Color | canvas #0F1214 · surface #171B1E · ink #E6E9EA · muted #9AA3A8 · line #2A3136 · action #7FC8B5 · on-action #0F1214. Healthy is neutral grey, not green; warning amber, critical red, each with icon and text. |
| Space and shape | 4px base; rows 36px; charts 2px radius frames; no shadows; 1px lines on dark. |
| Icons and imagery | Charts are the imagery: line charts with units, time zone, and gaps for missing data. |
| Components | Alert rows with Acknowledge; time range picker with presets and relative ranges; deploy markers on charts. Primary action in incident: "Roll back" with confirmation that names the version. |
| States | Stale data shows age and greys the value; missing data is a gap, never zero; flapping alerts grouped. All-clear state is a quiet line, not a green trophy. |
| Responsive | Desktop grid; tablet rows with sparkline; phone: firing alerts list and incident timeline with acknowledge, no dense charts. |
| Motion | New firing alert slides into the pinned area (150ms) once; values update without animation. Reduced motion: no slide. |
| Accessibility | Status uses icon + text + color; charts have table alternatives; dark theme text at ≥ 7:1 for primary values. |
| Build | `--row-h:36px; --status-healthy:var(--muted)`. Refresh with visible last-updated time; never animate numbers. |
| AI mutation | Glowing gauges, green orbs, neon cyan charts, KPI cards for uptime vanity. |
| Fails when | Daytime business analytics where storytelling matters; non-technical audiences. |

### Reference Manual
**Thesis.** Documentation is a manual: stable structure, exact examples, and prose that explains why, with code beside it. Character: authoritative, helpful, patient. Audience: developers integrating an API or learning a platform. **Fit:** developer documentation, API reference, SDK guides, changelogs.

**Fingerprint** `density=medium; composition=split-pane; surface=flat-ruled; type=grotesque; nav=persistent-sidebar; accent=low; motion=none; imagery=diagram; radius=low; data=moderate; tone=authoritative-helpful`

| Layer | Decision |
|---|---|
| Composition | Left navigation tree by task; center prose at 70ch; right column code samples that stick beside the related paragraph (reference pages) or an on-page outline (guides). Search is prominent. |
| Type | Grotesk (Schibsted Grotesk or Public Sans) for prose at 16px/1.6; mono for code (IBM Plex Mono 14px). 32/22/16/13px. Arabic docs: IBM Plex Sans Arabic with code kept LTR. |
| Color | canvas #FFFFFF · surface #F6F5F1 · ink #1A1A18 · muted #5A5A55 · line #DEDDD6 · action #0B4F8A · on-action #FFFFFF. Callouts use left bars (note, warning, danger) with labels. |
| Space and shape | 8px base; sections 40px; code blocks 4px radius, surface tint; tables ruled. |
| Icons and imagery | Diagrams of architecture and request flow, drawn in the doc palette; no stock or abstract art. |
| Components | Language switcher that syncs all samples; copy on code blocks; parameter tables with type, required, default. Primary action: "Try it" only where a real sandbox exists. |
| States | Deprecated endpoints marked in nav and page; version switcher; "Was this helpful" optional, never a modal. Search empty state suggests related terms. |
| Responsive | Desktop three columns; tablet samples below paragraphs; phone single column with code scrolling horizontally and nav as a sheet. |
| Motion | None. |
| Accessibility | Headings form the outline; code blocks focusable for scrolling; skip to content. |
| Build | Generate reference from the API schema; `--measure:70ch`. Anchors on every heading and parameter. |
| AI mutation | Marketing hero on docs home, cards for every guide, gradient callouts, emoji headings. |
| Fails when | The audience is non-technical; tutorials need interactivity (use Worked Example). |

### Query Bench
**Thesis.** A workbench for iterative questions: write on the left or top, read the answer below or right, keep history, and never confuse environments. Character: workmanlike, reliable. Audience: engineers and analysts running queries and requests. **Fit:** database clients, SQL editors, API clients, admin data browsers.

**Fingerprint** `density=dense; composition=split-pane; surface=layered-panels; type=technical-sans; nav=rail; accent=low; motion=none; imagery=none; radius=low; data=strong; tone=workmanlike`

| Layer | Decision |
|---|---|
| Composition | Rail of connections/collections; editor pane above results grid (resizable); schema or history drawer. Environment badge fixed in the header with its own color role. |
| Type | Technical sans for UI (IBM Plex Sans 13px), mono for editor and cells (IBM Plex Mono 13px). Fallback system stacks. |
| Color | canvas #EEF0F2 · surface #FFFFFF · ink #15191D · muted #50585F · line #CBD1D6 · action #1B5E8C · on-action #FFFFFF. Production environment band #8A1C1C with white text across the header; staging amber; local neutral. |
| Space and shape | 4px base; grid rows 28px; panes separated by draggable 1px lines; 3px radius controls. |
| Icons and imagery | None beyond object glyphs (table, view, function). |
| Components | Run (Cmd/Ctrl+Enter) with cancel; results grid with column resize, copy as CSV/JSON/INSERT; saved queries. Primary action: Run. |
| States | Error shows line and column with the message; empty result shows row count 0 and query duration; truncated result states limit. Running against production requires the band to be visible and optionally a confirm for writes. |
| Responsive | Desktop only for authoring; tablet read results; phone view saved queries and results as cards per row (read-only). |
| Motion | None. |
| Accessibility | Grid uses proper grid role with keyboard cell navigation; environment conveyed in text. |
| Build | Virtualized grid; `--cell-h:28px`. Environment color tokens are mandatory and not themeable away. |
| AI mutation | Results in cards, pastel schema bento, identical colors for prod and dev. |
| Fails when | Non-technical users exploring data (use a report or dashboard system). |

### Threat Board
**Thesis.** Triage is sorting under pressure: severity must be read before anything else, and every action leaves an audit trail. Character: severe, controlled, legible. Audience: security analysts and network operations. **Fit:** SOC alert queues, case management, vulnerability management, network change review.

**Fingerprint** `density=dense; composition=master-detail; surface=tonal-blocks; type=condensed-display; nav=persistent-sidebar; accent=multi-role; motion=restrained-causal; imagery=data-graphic; radius=square; data=strong; tone=severe-controlled`

| Layer | Decision |
|---|---|
| Composition | Queue on the left grouped by severity band; case detail right with entity summary, evidence timeline, and actions. Pivot links on every entity. |
| Type | Condensed sans for severity labels and case titles (Barlow Semi Condensed or IBM Plex Sans Condensed 600); body in IBM Plex Sans 14px; mono for IPs and hashes. Fallback `system-ui`. |
| Color | canvas #F2F1EE · surface #FFFFFF · ink #151515 · muted #555350 · line #CFCCC6 · action #8F1D1D · on-action #FFFFFF. Severity bands as tonal blocks: critical deep red, high burnt orange, medium ochre, low slate, each with text label. |
| Space and shape | 4px base; rows 40px; square corners throughout; severity band 4px left edge plus label. |
| Icons and imagery | Evidence charts (event counts over time) and relationship mini-graphs; no shields, padlocks, or world maps. |
| Components | Keyboard triage (J/K move, A assign, E escalate, F false positive with reason). Bulk close requires reason. Primary action per case is the next response step. |
| States | SLA timer in text ("Breaches in 12m"); suppressed and duplicate alerts collapsed with counts; contained entities marked across all views. |
| Responsive | Desktop split; tablet queue as a drawer; phone: on-call view of critical cases with acknowledge and escalate only. |
| Motion | New critical alert inserts with a brief highlight (400ms fade). Reduced motion: static highlight. |
| Accessibility | Severity in text; keyboard shortcuts listed and remappable; high-contrast mode tested. |
| Build | `--severity-edge:4px; --row-h:40px; --radius:0`. Audit log writes on every state change. |
| AI mutation | Black + neon green hacker palette, radar sweeps, glowing world attack maps, shield icons. |
| Fails when | Consumer security products (use a reassuring consumer system); low-volume audiences. |

### Topology Map
**Thesis.** Infrastructure is a place: services and networks shown as a navigable map where proximity means dependency. Character: exploratory, clear, spatial. Audience: platform and network engineers reasoning about architecture. **Fit:** service maps, network topology, cloud architecture views, dependency graphs.

**Fingerprint** `density=variable; composition=spatial-scene; surface=flat-bordered; type=technical-sans; nav=contextual; accent=medium; motion=physical-direct; imagery=diagram; radius=medium; data=moderate; tone=exploratory`

| Layer | Decision |
|---|---|
| Composition | Full-canvas graph with a search box and layer toggles; selection opens a detail panel; a list view mirrors the graph for accessibility and scale. |
| Type | Technical sans (IBM Plex Sans) at 12–13px on nodes, 15px in panels; mono for addresses. |
| Color | canvas #F7F8F6 · surface #FFFFFF · ink #1C2320 · muted #52605A · line #C4CEC9 · action #0F5E57 · on-action #FFFFFF. Edge colors encode protocol or health with legends; unhealthy nodes get a thick outline plus icon. |
| Space and shape | Nodes 6px radius rectangles sized by label; edges 1.5px; groups (VPC, cluster) as dashed containers. |
| Icons and imagery | The graph is the diagram; small type glyphs on nodes. |
| Components | Pan/zoom with keyboard equivalents; "focus on node" reduces to neighbors; path finder between two nodes. |
| States | Stale topology timestamp; unreachable nodes; pending change overlay (diff of topology). Empty map explains discovery status. |
| Responsive | Desktop canvas; tablet canvas with panel as sheet; phone switches to list with neighbors. |
| Motion | Layout changes animate 250ms so moved nodes can be tracked. Reduced motion: instant with highlight of moved nodes. |
| Accessibility | List view is complete; graph nodes focusable in logical order. |
| Build | Deterministic layout seeded per environment so maps are stable between visits. |
| AI mutation | Glowing particles along edges, 3D globe, dark neon canvas. |
| Fails when | Relationships are simple or hierarchical (a tree or table is faster). |

### Release Ledger
**Thesis.** Delivery is a chronology of changes: every deploy, build, and rollback in order, with who, what, and whether it worked. Character: matter-of-fact, accountable. Audience: engineering teams shipping software. **Fit:** CI/CD, deploy dashboards, release management, changelog tools.

**Fingerprint** `density=medium; composition=timeline; surface=flat-ruled; type=grotesque; nav=top-bar; accent=multi-role; motion=restrained-causal; imagery=none; radius=low; data=moderate; tone=matter-of-fact`

| Layer | Decision |
|---|---|
| Composition | Top bar with project and environment switch; vertical timeline of deploys/builds, each row with commit message, author, duration, status; detail expands inline with step logs. |
| Type | Grotesk (Hanken Grotesk) 14px rows, mono for SHAs and logs. 24/15/13/12px. |
| Color | canvas #FAFAF8 · surface #FFFFFF · ink #1B1B19 · muted #5B5B55 · line #DAD9D2 · action #264F2E · on-action #FFFFFF. Status roles: running blue, passed dark green text, failed red, cancelled grey, each with icon. |
| Space and shape | Rows 52px; timeline spine 2px; 4px radius on status chips only. |
| Icons and imagery | Status icons; none else. |
| Components | Rerun, cancel, promote, roll back as explicit buttons on the row; log viewer with search and jump to first error. |
| States | Queued vs running distinguished; flaky test annotation; rollback rows reference what they replaced. Empty: shows setup command. |
| Responsive | Desktop full rows; phone condensed rows with status and message; logs full-screen. |
| Motion | Running status uses a static spinner glyph that rotates slowly; completion replaces it. Reduced motion: static "Running". |
| Accessibility | Status in text; log viewer keyboard searchable. |
| Build | Stream logs; `--row-h:52px`. Durations tabular. |
| AI mutation | Pipeline drawn as glowing nodes, confetti on green builds, gradient progress bars. |
| Fails when | Teams need to plan work (use Plan Grid) or watch runtime health (Night Watch). |

### Worked Example
**Thesis.** Technical learning happens in the loop of explanation, attempt, and exact feedback; the page pairs a worked example with a place to try it. Character: patient, exact, encouraging without noise. Audience: people learning programming, terminals, or infrastructure. **Fit:** technical education, interactive tutorials, terminal learning, certification prep.

**Fingerprint** `density=medium; composition=stepwise; surface=paper-sheet; type=serif-sans-duet; nav=stepwise; accent=medium; motion=event-celebration; imagery=diagram; radius=medium; data=light; tone=patient-exact`

| Layer | Decision |
|---|---|
| Composition | Each step: short explanation (serif), a worked example (mono), then the learner's attempt area (editor or real terminal) with a Check button; progress path in a slim top strip. |
| Type | Reading serif for explanation (Literata 18px/1.6), sans for UI (Source Sans 3), mono for code (JetBrains Mono 15px). Arabic explanation: Noto Naskh Arabic with code kept LTR. |
| Color | canvas #F5F2EA · surface #FFFDF8 · ink #22201C · muted #5E594F · line #D8D1C2 · action #2C5E4F · on-action #FFFFFF. Feedback: correct green text with check, wrong amber with explanation (never red shame). |
| Space and shape | 8px base; steps separated by 56px; editor 6px radius; paper sheet on warm canvas. |
| Icons and imagery | Diagrams of concepts (file trees, pipes, memory) drawn simply; no mascot. |
| Components | Check gives specific feedback ("You listed files but not hidden ones; add -a"). Hint ladder: nudge, partial, solution. Primary action: Check; secondary: Hint. |
| States | Stuck after 3 attempts offers the worked solution with explanation; sandbox reset clearly labelled; resumed lesson returns to the exact step. |
| Responsive | Desktop explanation left, practice right; tablet stacked; phone: read-only lessons plus quizzes when a real terminal is not practical, stated honestly. |
| Motion | Correct answer: brief check draw and step unlock (250ms). Reduced motion: static. |
| Accessibility | Feedback announced; editor accessible; diagrams have text descriptions. |
| Build | Evaluate answers by behavior, not string match, where possible; `--step-gap:56px`. |
| AI mutation | XP bars, streak fires, neon terminals, mascots, confetti on every line. |
| Fails when | Experts need reference, not lessons (use Reference Manual). |

### Datasheet
**Thesis.** A developer product's public page should read like a datasheet: specifications, limits, prices, and real output, dense and honest. Character: candid, compact. Audience: engineers evaluating a tool. **Fit:** developer-tool marketing sites, pricing and limits pages, infrastructure product pages.

**Fingerprint** `density=dense; composition=index; surface=flat-ruled; type=mono-led; nav=top-bar; accent=low; motion=none; imagery=product-object; radius=square; data=moderate; tone=candid`

| Layer | Decision |
|---|---|
| Composition | First viewport: what it is in one sentence, a real code or output sample, and key numbers with units. Then ruled sections: capabilities, limits, pricing table, compatibility matrix, changelog excerpt. |
| Type | Mono for headings and numbers (IBM Plex Mono 600), sans for body (IBM Plex Sans 16px). 40/20/16/13px. |
| Color | canvas #FFFFFF · surface #F4F4F0 · ink #111111 · muted #555555 · line #D6D6D0 · action #A33A00 · on-action #FFFFFF. One accent for primary action and links. |
| Space and shape | 8px base; ruled sections 64px apart; tables with 1px rules; square everything. |
| Icons and imagery | Real product output, screenshots at 1:1, architecture diagram; no abstract art. |
| Components | Pricing table with exact limits; "Copy install" and "Read docs" as the two actions, labelled by outcome. |
| States | Status link visible; deprecated features marked. |
| Responsive | Tables become stacked definitions on phones; code samples scroll. |
| Motion | None. |
| Accessibility | Real tables; numbers with units in text. |
| Build | Pull limits and prices from the same source as the product to avoid drift. |
| AI mutation | Centered gradient hero, floating dashboard mockup, logo strip, three icon feature cards, "Supercharge your workflow". |
| Fails when | Non-technical buyers; emotional or brand-led launches. |

## Confusable pairs

- **Reference Manual vs Query Bench:** both split panes. The Manual is read-mostly prose with samples; the Bench is iterative input with results.
- **Night Watch vs Threat Board:** both dense operations. Night Watch watches service health over time; Threat Board sorts discrete cases by severity with audit.
- **Prompt Line vs Datasheet:** both mono-led. Prompt Line teaches a workflow through command/output pairs; Datasheet specifies the product for evaluation.
