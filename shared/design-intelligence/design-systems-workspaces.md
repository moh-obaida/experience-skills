# Design Systems: Workspaces

Authored starting systems. Their component behavior follows `design-system-grammar.md`; each row below makes the implementation choices that differ. Token examples are roles to validate and adapt, not a complete brand.

## Signal Foundry

**Thesis and fit.** Operators need to distinguish live signal from tool chrome in one glance. Exact, industrious, quietly warm. Fits developer operations and monitoring; avoid in content-led discovery or novice onboarding.

| Layer | Contract |
|---|---|
| Composition | Instrument panel: live status strip, priority queue, detail pane. Desktop 12-column with a 280px rail; tablet collapses detail to drawer; mobile shows alert list then one focused detail. First viewport exposes status and next action. |
| Type | Narrow technical sans headings, system sans body, tabular mono data/code; 28/20/15/12px roles, 1.4 body line-height. Arabic UI uses a tested Arabic sans for text and isolates Latin codes/numbers. |
| Color | Graphite light theme, `#F0F1EE` canvas, `#FFFFFF` surface, `#1B2321` ink, `#4E5A56` secondary, `#B8C2BD` line, `#174B46` action. Amber is warning only; never use it as decoration. |
| Geometry | 4px base, 8/12/16 row/section rhythm, 24px major transitions. 4px controls, 6px surfaces, hairline borders, no default shadow; dense rows may be 40px high if targets remain usable. |
| Components | Filled primary for one urgent action, lined secondary, underlined tertiary; fields use visible label and crisp focus. Tables use sticky headers and aligned numbers; cards only for distinct instruments. Sidebar groups by operational object, not feature marketing. |
| States and motion | Stale/processing/failure are distinct from success; preserve last known value with timestamp. 120–180ms status transitions, no moving ambient gauges. Reduced motion uses instant state plus text. |
| Image, icon, copy | Diagram and trace over stock imagery; 18px restrained line icons with labels. Copy states object, condition, and action. |
| Failure and imitation | A grid of glowing panels makes status decorative. Do not copy a particular observability product's chart chrome or dark palette. |

## Quiet Ledger

**Thesis and fit.** Consequential records need calm chronology and reversible actions. Fits personal finance, account history, and audit-adjacent services; poor for celebration or gaming.

| Layer | Contract |
|---|---|
| Composition | Summary above a dated ledger; desktop summary at left and transactions at right, tablet single sequence, mobile summary collapses to two facts then chronological rows. |
| Type | Humanist sans body and labels, tabular numeric face for money, restrained serif only for a short page title. 26/18/15/12px; Arabic numbers and currency direction must be tested in mixed-script rows. |
| Color | Ink/Bone theme: `#F9F7F1` canvas, `#FFFFFF` surface, `#202821` ink, `#596158` secondary, `#C4C9BF` line, `#1E5143` action. Loss and danger are distinct semantic roles. |
| Geometry | 4px base, 12px row interiors, 20px group rhythm, 32px section rhythm; 5px fields, 8px panels, fine borders, almost no shadow. |
| Components | One clear pay/transfer action; export and filters secondary. Rows show date, party, amount, status; tables align decimals. Inputs never hide currency context. Navigation follows accounts → period → transaction detail. |
| States and motion | Pending, posted, failed, reversed never merge. Empty ledger explains period and filter. Transaction insertion can highlight briefly; reduced motion uses static highlight. |
| Image, icon, copy | No decorative money imagery; simple document icons only where type needs support. Copy is factual and names amounts/dates. |
| Failure and imitation | Big fake balance cards and green profit styling turn records into spectacle. Avoid imitating any banking dashboard. |

## Studio Index

**Thesis and fit.** The work artifact is the center; tools stay available without enclosing it. Fits editors and creator tools; wrong for forms and mostly-read surfaces.

| Layer | Contract |
|---|---|
| Composition | Large canvas, narrow tool rail, inspectable properties pane. Desktop tri-pane; tablet properties overlay; mobile task-mode view with one tool group at a time. No hero before the artifact. |
| Type | Neutral system sans UI at 14–15px, mono for measurements; expressive display type is content on the canvas, not chrome. Use native script support for multilingual editing. |
| Color | Cool Stone theme: `#ECEFEE` workspace, `#FFFFFF` tool surface, `#222A2A` ink, `#596464` secondary, `#BBC5C3` line, `#205264` action. Selection color is separate from action. |
| Geometry | 4px unit; 8px tool gaps, 16px pane padding, 24px section separation. 4px controls, 2px canvas handles, 6px panels; shadows only for floating layers. |
| Components | Compact labeled toolbar groups, command search, contextual property fields, clear undo/redo. Canvas selections use handles plus labels; menus and panels restore focus. Navigation is project → artifact → editing mode. |
| States and motion | Autosave status has timestamp/error recovery; unsaved changes are explicit. 100–160ms panel transitions preserve canvas position; reduced motion removes translation. |
| Image, icon, copy | User work is imagery. Consistent 18px line icons plus tooltip and keyboard shortcut; terse verbs, no motivational filler. |
| Failure and imitation | A dozen unlabelled icon buttons make experts guess. Do not borrow a specific design tool's toolbar arrangement. |

## Threadboard

**Thesis and fit.** Collaborative work becomes a chain of decisions, owners, and next steps. Fits casework and planning; poor for static storytelling.

| Layer | Contract |
|---|---|
| Composition | List/detail with a visible decision trail. Desktop 300px case list + detail; tablet list becomes toggle; mobile list opens focused detail with persistent return. First viewport shows owner and next decision. |
| Type | Humanist sans for discussion, mono for IDs and dates; 26/18/15/12px with readable 1.5 line-height in comments. |
| Color | Warm Stone theme: `#F6F3EB` canvas, `#FFFFFF` surface, `#252924` ink, `#5A6259` secondary, `#C4CABE` line, `#36523D` action. Status tags use text and shape. |
| Geometry | 4px unit, 8px within events, 16px between events, 32px between decision groups; 6px controls, 8px surfaces, border over shadow. |
| Components | Action bar follows current case; resolve and assign are separate. Comments are chronological rows, not cards. Filters stay near list; destructive close requires clear consequence. |
| States and motion | Assigned, blocked, waiting, resolved, reopened are first-class. New events appear in place with subtle emphasis; reduced motion uses static marker. |
| Image, icon, copy | Attachments shown by preview/type; icons secondary to labels. Copy names who needs to do what next. |
| Failure and imitation | Turning every comment into a floating card hides chronology. Avoid copying chat-app bubbles as the whole information model. |

## Schema Garden

**Thesis and fit.** Relationships become easier to explore when structure is exposed without becoming a graph toy. Fits knowledge tools and API schemas; poor for rapid transactions.

| Layer | Contract |
|---|---|
| Composition | Search/index → entity detail → linked relationships. Desktop master/detail plus optional graph; tablet and mobile put graph behind a deliberate view switch. First viewport starts with the queried object. |
| Type | Technical sans headings, humanist sans explanations, mono identifiers; 27/19/15/12px. Preserve line breaks in code and script direction in names. |
| Color | Sage Ink theme: `#F2F5EF` canvas, `#FFFFFF` surface, `#1F2B25` ink, `#52645A` secondary, `#BAC8BE` line, `#215A4C` action. Relationship categories use label + shape, not color alone. |
| Geometry | 4px unit; 8px entity metadata, 16px relation groups, 32px major panels; 5px controls, 8px surfaces, no graph shadows. |
| Components | Search is primary, relation chips navigate, tables list properties with copyable IDs. Detail panels can collapse; graph nodes maintain keyboard alternative. |
| States and motion | Unknown, stale, permission-limited, and cyclic relationships are explicit. Animate only node path reveal; reduced motion keeps direct highlight. |
| Image, icon, copy | Diagrams are explanatory, not ornament. Icons encode entity type alongside labels. Copy uses domain terms with definitions. |
| Failure and imitation | A beautiful graph that hides exact fields fails the job. Do not copy a specific knowledge product's node aesthetic. |

## Measured Desk

**Thesis and fit.** Frequent work should be legible, compact, and easy to resume. Fits productivity and administration; wrong for immersive media.

| Layer | Contract |
|---|---|
| Composition | Today/priority queue above historical detail. Desktop list with context pane; tablet and mobile use list → detail, preserving list position. First viewport contains the next actionable item. |
| Type | Single system sans with strong weight discipline and tabular figures; 26/18/15/12px, no novelty display face. Arabic companion must match UI density rather than simply scale Latin metrics. |
| Color | Restrained Neutral theme: `#F7F8F6` canvas, `#FFFFFF` surface, `#202623` ink, `#56615B` secondary, `#BEC7C0` line, `#245442` action. Accent reserved for current work. |
| Geometry | 4px unit; 8px row internals, 16px group rhythm, 28px section rhythm; 4px controls and 6px surfaces, separators over cards. |
| Components | One add/continue primary, inline row actions on focus/hover and keyboard, bulk actions only after selection. Search and filters operate on same list. |
| States and motion | Due, blocked, delegated, complete and empty are distinct. Completion fades only the completed row if motion is safe; reduced motion keeps a check and updated label. |
| Image, icon, copy | User content leads; sparse 16–18px icons with text. Short verbs and concrete status labels. |
| Failure and imitation | Four KPI tiles above the actual tasks bury work. Do not copy a task app's checklist visual signature. |
