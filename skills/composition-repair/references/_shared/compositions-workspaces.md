<!-- GENERATED FROM shared/design-intelligence/compositions-workspaces.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Compositions: Workspace Family

Surfaces built around one object type that a user spends extended, repeated time in: a document, a
canvas, a media library, a terminal session. The chrome's job across this whole family is to recede
so the object being worked on stays the focal point.

---

## Sidebar workspace

| Aspect | Guidance |
|---|---|
| Solves | Navigating many objects of a few types (projects, channels, files) while working in one at a time |
| Archetypes | OPERATIONAL, CREATION |
| Content needs | Object types and recent/pinned items in the sidebar; the current object fills the main area |
| Hierarchy / focal | The main area is P0; the sidebar is P2 — it should not compete in visual weight |
| Viewport | Sidebar width is fixed or user-resizable within a range; main area takes the remainder |
| Scroll | Sidebar and main area scroll independently; the page itself does not scroll |
| Responsive | Sidebar collapses to a drawer (opened by a menu control) or bottom navigation on narrow screens; never shrink both panes to unusable width at once |
| RTL | Sidebar sits on the reading-start side; mirror the whole split |
| Touch | Sidebar items are full-width tap targets; a collapse/expand control is easy to hit |
| Accessibility | Landmark regions (navigation vs main) so screen-reader users can jump between sidebar and content; keyboard shortcut to focus the sidebar |
| Sparse state | Few sidebar items still get the same layout; don't stretch the sidebar's content to fill unused height with decoration |
| Dense state | Long sidebar lists need search/filter or grouping (starred, recent, by type) rather than one long unstructured scroll |
| Fails when | The sidebar and main area compete for visual weight, or the sidebar duplicates a global top-nav that already exists |
| Precedent | GitHub Actions (GA3), Linear Docs (LD1) |

## Master-detail

| Aspect | Guidance |
|---|---|
| Solves | Triage a list and inspect items without losing the list |
| Archetypes | OPERATIONAL |
| Content needs | Dense list rows with status; detail pane with the full record |
| Responsive | Split view on tablets; push navigation on phones with state preserved (see `compositions-mobile.md`'s Mobile list-detail, the same information architecture at narrow width) |
| Fails when | Returning from detail resets filters or scroll |
| Precedent | MDE1, MDE2, MDE3, MDE4, MDE5, MDE6, MDE7, MDE8, MDE9, MDE10; load `master-detail-workspaces.md` for project, database, record, and deployment surfaces |

The list is a triage instrument and the detail is an authoritative continuation of the selected
object. Preserve selection, filter, sort, scroll, URL/deep-link identity, and unsaved edits when
moving between them. Linear and Notion show that the detail can remain a side peek while the
collection stays live; Airtable shows when editable fields, permissions, comments, and history make
the detail more than a preview; Vercel shows that environment, commit, URL, logs, and errors must
remain visible when the selected record is operationally consequential. On phones, use push
navigation with a durable back path and restore the list exactly; do not squeeze two unreadable
columns. For sparse, loading, stale, forbidden, and deleted states, explain whether the collection
or the selected object is unavailable. Test keyboard focus return, screen-reader naming of the
selected row, RTL pane order, long titles, and whether the detail's actions have authority over the
source record.

## Canvas workspace

| Aspect | Guidance |
|---|---|
| Solves | Making or analyzing something on a free-form or spatial surface (drawing, diagramming, charting, design) |
| Archetypes | CREATION |
| Content needs | The canvas itself, a tool rail, and a contextual inspector for the selected object |
| Hierarchy / focal | The canvas is the entire focal point; every other element is chrome that should recede visually |
| Viewport | The canvas fills the viewport; tool rail and inspector float or dock at the edges rather than claiming a fixed frame |
| Scroll | The canvas pans/zooms rather than scrolling like a document; fixed chrome (toolbar) stays in place during pan |
| Responsive | On narrow screens, move the inspector into a bottom sheet or collapsible panel; keep the canvas and its primary tool always visible |
| RTL | Tool rail position and panel order mirror; the canvas's own content (drawings, diagrams) does not need mirroring |
| Touch | Pinch-to-zoom and drag-to-pan on touch devices; tool selection targets sized for touch, not just precise pointer input |
| Accessibility | Icon-only tools need accessible names and keyboard equivalents; canvas content needs a non-visual alternative (a text description, an outline view, or exported data) for screen-reader users |
| Sparse state | An empty canvas states the first action plainly rather than leaving unexplained blankness — see the empty-canvas welcome pattern below |
| Dense state | Many objects need a way to navigate beyond visual scanning (search, an outline/layers panel, zoom-to-fit) |
| Fails when | Chrome (toolbars, panels, borders) claims enough of the viewport that the canvas itself feels like an afterthought |
| Precedent | TradingView (TV1, TV2); Excalidraw (EXC1–EXC4) is a purer case of the pattern: the entire product is an unframed canvas with a single floating, icon-only toolbar as the only fixed chrome (EXC1), toolbar icons show their keyboard shortcut letter directly on the icon for at-a-glance recall (EXC3), and the empty-canvas welcome message states plainly what to do next while a distinctive hand-drawn typeface is reserved for exactly that one moment — every operable control stays in a plain, fast system font (EXC2, EXC4). **Adapt:** EXC1's "no frame at all" is the strongest version of chrome receding; most products need some frame (a header, a save indicator) but should still ask whether each piece of chrome is earning the space it takes from the canvas. |

## Authoring workspace

| Aspect | Guidance |
|---|---|
| Solves | Writing and structured editing of a single document over an extended session |
| Archetypes | CREATION |
| Content needs | The document itself as the visual focus; commands available at the cursor (slash commands, formatting toolbar); an outline for navigation in long documents |
| Hierarchy / focal | The document body; toolbar and outline recede until needed |
| Viewport | Comfortable reading/writing measure (not full-width text on wide screens); outline and comments can dock at the edges |
| Scroll | The document scrolls; a persistent but unobtrusive toolbar (fixed or appearing on selection) stays reachable |
| Responsive | Outline and comment panels collapse into a menu on narrow screens; the writing surface keeps priority |
| RTL | Full bidi support for mixed-language documents; toolbar and outline mirror |
| Touch | Selection handles and a touch-friendly formatting toolbar that doesn't cover the just-edited text |
| Accessibility | Formatting commands available via keyboard shortcuts, not only a toolbar; heading structure in the document maps to real semantic structure for screen readers and the outline |
| Sparse state | A new empty document states the first action (start typing, or a template prompt) rather than an intimidating blank page with heavy chrome around it |
| Dense state | Long documents need the outline, search-within-document, and possibly a minimap or section jump — not just continuous scrolling |
| Fails when | Formatting chrome (toolbars, panels) permanently occupies more space than the document being written |
| Precedent | Notion (NO1–NO3) |

## Media console

| Aspect | Guidance |
|---|---|
| Solves | Playing and controlling media while browsing a library |
| Archetypes | EXPERIENTIAL |
| Content needs | Now-playing state, a queue, the library/browse surface, and persistent transport controls |
| Hierarchy / focal | Now-playing state is P0 and must remain visible regardless of where the user browses to |
| Viewport | Transport controls are a persistent bar (usually bottom or top) that survives navigation; browse content fills the remaining space |
| Scroll | Browse content scrolls independently; the transport bar does not scroll away |
| Responsive | On mobile, the transport bar compresses to essential controls (play/pause, track name, progress) with a full-screen now-playing view one tap away |
| RTL | Transport control order (previous/play/next) does not mirror — media transport conventions stay left-to-right by long-standing convention; volume and progress bars do mirror fill direction |
| Touch | Large play/pause target; scrubber has a generously sized drag handle |
| Accessibility | Media controls have accessible names and current-state announcements (playing/paused, track changed); captions/transcripts where applicable |
| Sparse state | An empty queue or library states how to add content, not a blank now-playing bar |
| Dense state | Large libraries need search, filtering, and sorting; a queue that grows long needs reordering and a clear-queue action |
| Fails when | Navigating the library interrupts or hides playback state, or the transport bar disappears on certain screens |
| Precedent | Spotify (SPd2) |

## Terminal / CLI companion

| Aspect | Guidance |
|---|---|
| Solves | Structuring command output so a user can follow what a tool is doing and what to do next |
| Archetypes | CREATION (terminal) |
| Content needs | The resolved plan or command being run, live progress, results, and the suggested next command |
| Hierarchy / focal | Current progress and the next actionable step; historical output recedes |
| Viewport | Fits within a standard terminal width (80 columns is a reasonable floor) without wrapping critical information illegibly |
| Scroll | Output scrolls naturally with the terminal's own scrollback; avoid clearing the screen in ways that destroy useful history |
| Responsive | Works at narrow terminal widths and without color (some CI logs and terminals strip color); never rely on color alone to convey pass/fail |
| RTL | Not typically applicable — terminal output conventions are left-to-right regardless of the user's language; translated strings inside output should still read correctly |
| Touch | Not applicable in most terminal contexts |
| Accessibility | Plain-text equivalents for any progress indicators (spinners need a text state for screen readers or `--no-color`/`--ci` modes) |
| Sparse state | A command with no output yet shows a clear "waiting" or "running" indicator, not silence that looks like a hang |
| Dense state | Long-running commands with verbose output need a way to see the latest status without scrolling through everything (a persistent status line, `--quiet` mode) |
| Fails when | Progress and next steps are buried in verbose logs with no visual distinction from routine output |
| Precedent | See the CLI project-init worked example |
