<!-- GENERATED FROM shared/design-intelligence/compositions-workspaces.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Compositions: Workspace Family

---

## Sidebar workspace

| Aspect | Guidance |
|---|---|
| Solves | Navigating many objects of a few types |
| Content needs | Object types in the sidebar; the current object in the main area |
| Hierarchy / focal | The main area; sidebar is P2 |
| Scroll | Sidebar and main scroll independently; the page does not |
| Responsive | Sidebar collapses to a drawer or bottom navigation |
| Precedent | GitHub Actions (GA3), Linear Docs (LD1) |

## Master-detail

| Aspect | Guidance |
|---|---|
| Solves | Triage a list and inspect items without losing the list |
| Content needs | Dense list rows with status; detail pane |
| Responsive | Split view on tablets; push navigation on phones with state preserved |
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
| Solves | Making or analyzing something on a canvas |
| Content needs | Canvas, tool rail, contextual inspector |
| Hierarchy / focal | The canvas; chrome recedes |
| Accessibility | Icon tools need labels and keyboard access; canvas content needs alternatives |
| Precedent | TradingView (TV1, TV2) |

## Authoring workspace

| Aspect | Guidance |
|---|---|
| Solves | Writing and structured editing |
| Content needs | The document; commands at the cursor; outline |
| Precedent | Notion (NO1–NO3) |

## Media console

| Aspect | Guidance |
|---|---|
| Solves | Playing and controlling media |
| Content needs | Now-playing, queue, library; persistent transport controls |
| Precedent | Spotify (SPd2) |

## Terminal / CLI companion

| Aspect | Guidance |
|---|---|
| Solves | Structuring command output |
| Content needs | Resolved plan, progress, results, next command |
| Responsive | Works at 80 columns and without color |
| Precedent | See the CLI project-init worked example |
