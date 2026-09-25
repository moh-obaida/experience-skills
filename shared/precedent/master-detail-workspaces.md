# Precedent: Master-detail Workspaces

Use this module when a user must triage a collection and inspect or edit one selected object without
losing the collection's filters, position, or context. The defining behavior is preserved selection
state, not merely a left column and a right card.

## `MDE1`

**Observed:** Linear keeps a project overview, issues, documents, links, milestones, and progress
graph attached to one project, with a details sidebar available from the overview and issues pages.

**Right when:** the selected object has related resources and multiple working views.
**Transfer:** keep object identity and related resources visible as the user moves between list and
detail. **Wrong when:** a sidebar becomes a second navigation tree with no object authority.

## `MDE3`

**Observed:** Notion lets table, board, list, and timeline items open in a side peek while the
collection remains interactive; center peek and full page are explicit alternatives.

**Right when:** triage benefits from comparing the selected page with neighboring records.
**Transfer:** preserve filters and list position, and offer a deliberate full-page escape. **Wrong
when:** the side peek is too narrow for the item's actual editing task.

## `MDE5`

**Observed:** Notion database items are pages with properties, nested content, and a full-page mode,
not just preview cards.

**Right when:** detail contains a real document or workflow object.
**Transfer:** distinguish preview, edit, and full-page states. **Wrong when:** a dense record is
truncated into a card that cannot answer the user's question.

## `MDE7`

**Observed:** Airtable record detail supports sidesheet/full-screen modes, field visibility,
permissions, collapsible groups, comments, revision history, and reusable layouts.

**Right when:** records have many fields and different audiences need different detail layouts.
**Transfer:** make read-only versus editable authority visible and preserve the source-table
relationship. **Wrong when:** a drawer implies an edit is local when it changes shared data.

## `MDE9`

**Observed:** Vercel's deployment collection opens a selected deployment with resources, framework,
build time, logs, errors, and environment details.

**Right when:** the selected item has operational evidence that must be inspected without losing the
collection. **Transfer:** keep status, commit, URL, and environment in the detail header. **Wrong
when:** a detail pane hides whether the selected record is preview, production, or failed.

## `GA1`

**Observed:** GitHub Actions run rows carry status, commit, workflow, branch, trigger, time, and
duration before the user opens a run.

**Right when:** the list can answer first-pass triage questions without detail navigation.
**Transfer:** put the fields that determine selection in the row; reserve detail for diagnosis.
**Wrong when:** rows become mini-dashboards with decorative fields.

## `LC1`

**Observed:** Linear names Workspace, Teams, Issues, Projects, Initiatives, Cycles, Views, and
Triage as related objects rather than flattening them into one list.

**Right when:** master-detail is part of an explicit object model.
**Transfer:** define the collection, selected object, and related objects before drawing panes.
**Wrong when:** the “detail” view is only another route to the same undifferentiated data.

## `TV1`

**Observed:** TradingView gives a chart canvas a stable center, tool rail, top toolbar, right panel,
and bottom timeframe controls.

**Right when:** detail is an active working object and the surrounding list/controls are supporting
context. **Transfer:** keep the object stable while tools change around it. **Wrong when:** chrome
occupies the selected object's focal area.

## `NO1`

**Observed:** Notion places block commands at the cursor and lets the document remain the authoring
object.

**Right when:** detail is an editable document rather than a record summary.
**Transfer:** move actions into the object context and preserve focus. **Wrong when:** a global action
bar interrupts the document for every block-level operation.

## Transfer checklist

1. Define what selection persists: filter, sort, scroll position, query, tab, and unsaved edits.
2. Define whether detail is preview, edit, or full authority over the underlying object.
3. At tablet width, use a real split only when both panes remain actionable; otherwise use a push
   route with a preserved back stack.
4. At phone width, preserve selection context in the title/back route and restore the list state.
5. Test empty collection, no-result filter, loading detail, deleted/permission-denied detail, long
   fields, RTL order, and keyboard navigation.
