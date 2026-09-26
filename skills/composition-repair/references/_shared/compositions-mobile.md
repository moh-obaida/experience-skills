<!-- GENERATED FROM shared/design-intelligence/compositions-mobile.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Compositions: Mobile and Tablet Family

Compositions here are not "the desktop layout, stacked." Mobile and tablet each have their own
composition decisions: what collapses, what disappears, what becomes a separate screen, and what
stays reachable with a thumb.

---

## Mobile thumb-first

| Aspect | Guidance |
|---|---|
| Solves | One-handed phone use, where the primary action and frequent destinations must sit where a thumb can reach without regripping the device |
| Archetypes | OPERATIONAL, TRANSACTIONAL, DISCOVERY — any phone-primary surface used one-handed |
| Content needs | A ranked list of what's actually reached often; not every desktop action needs a mobile equivalent in the same position |
| Hierarchy / focal | Primary action and frequent destinations in the lower half (thumb zone); secondary, rare actions can live higher, where reach is harder |
| Viewport | Design for the shortest common phone height with the keyboard or a bottom sheet open, not just the tallest device |
| Scroll | Content scrolls; the primary action strip typically stays fixed at the bottom |
| Responsive | This composition *is* the narrow-width state; verify it doesn't silently become the desktop layout at tablet width, where thumb-zone reasoning no longer applies |
| RTL | Mirror any directional icons and swipe-to-act affordances; thumb-zone geometry itself does not mirror (both hands exist) |
| Touch | Minimum 44×44pt targets; extra spacing near the bottom edge to avoid accidental system-gesture conflicts (see the edge-gesture note under Contextual sheet system) |
| Accessibility | Bottom-anchored primary actions must still be reachable via screen reader swipe order, not just visually near the thumb |
| Sparse state | A near-empty screen should not stretch the bottom action strip upward to "fill" the middle — keep it anchored, let the middle carry the empty-state message |
| Dense state | Long lists still surface the primary action; don't let it scroll away with the content |
| Fails when | Primary actions sit only in the top corners, forcing a regrip on every use; or the "thumb-first" layout is applied at desktop width, where it just wastes vertical space |
| Bad AI version | A top app bar carrying every action (including primary), with an empty middle and nothing anchored at the bottom |
| Precedent | Airbnb (ABm1, ABm2) |

## Mobile list-detail

| Aspect | Guidance |
|---|---|
| Solves | Browsing a list and opening one item's full detail, on a screen too narrow to show both at once |
| Archetypes | OPERATIONAL, CONTENT, DISCOVERY — mail, settings, notes, any master-detail surface once it drops below split-view width |
| Content needs | A list view (rows with just enough to identify and prioritize an item) and a separate detail view (the full record) |
| Hierarchy / focal | List is a distinct screen; detail is a distinct screen reached by a push/forward transition, not an inline expansion |
| Viewport | Each screen (list, detail) uses the full viewport; there is no permanent split below tablet width |
| Scroll | List scrolls independently of detail; returning to the list must restore scroll position and selection, not reset to the top |
| Responsive | This is the narrow-width collapse of `master-detail` (see the workspaces family) and `split-view tablet` below — the same content model, a different composition once the viewport can't hold both panes |
| RTL | Forward navigation moves in the reading direction (right-to-left "forward" swipes right); back gesture mirrors accordingly |
| Touch | Full-row tap targets in the list, not just the title text; a clear back affordance in the detail view (both a visible control and the OS back gesture) |
| Accessibility | The push transition should move focus to the detail view's heading; the back action must be reachable without relying on a swipe gesture alone (screen-reader and switch-control users need a real back control) |
| Sparse state | Zero items: the list view shows the empty state directly; do not push to an empty detail view |
| Dense state | Long lists need a fast way back to a scroll position after visiting several detail items in a row — this is the composition's most common regression (see Fails when) |
| Fails when | Returning from detail resets the list's scroll position, filters, or selection, forcing the user to re-find where they were; or detail content requires a second level of push/pop nesting that the user can't track (more than two or three levels deep needs a different structure, like tabs or a dedicated hierarchy view) |
| Bad AI version | A list where tapping a row opens a modal instead of pushing a new screen, breaking the back-gesture expectation the rest of the OS trained the user to rely on |
| Precedent | Wikipedia mobile (WPm1) |

## Bottom-navigation workspace

| Aspect | Guidance |
|---|---|
| Solves | Three to five top-level areas that need to stay reachable from anywhere in the app |
| Archetypes | OPERATIONAL, DISCOVERY — any app with a small, stable set of top-level destinations |
| Content needs | A genuinely small destination set; bottom navigation degrades fast past five items (labels truncate, targets shrink) |
| Hierarchy / focal | The active tab's content fills the remaining viewport; the bar itself stays visually quiet so it doesn't compete with content |
| Viewport | The bar is fixed; account for it in every screen's bottom safe area so content and floating actions don't collide with it |
| Scroll | Tab content scrolls independently; the bar itself typically does not hide on scroll unless the product has a strong reason to reclaim vertical space |
| Responsive | Collapse to a sidebar or top nav at desktop width — bottom navigation is a phone-width pattern, not a universal one |
| RTL | Tab order follows reading direction; icons with directional meaning mirror |
| Touch | Equal-width targets, each large enough to hit reliably one-handed; icon plus label, not icon alone |
| Accessibility | Labels with icons — icon-only bottom navigation fails users who don't recognize the iconography; current tab indicated by more than color (weight, fill, underline) |
| Sparse state | An empty tab still shows the bar; don't hide navigation because one section has nothing in it yet |
| Dense state | n/a — the bar's role doesn't change with content density |
| Fails when | More than five destinations, forcing a catch-all "More" tab that becomes a dumping ground; or used at desktop width without reason (NI2) |
| Bad AI version | A six-item bottom bar with tiny, cramped icon-only targets and no labels |
| Precedent | Notion mobile, Instagram (NI2 for the desktop-width misuse case) |

## Contextual sheet system

| Aspect | Guidance |
|---|---|
| Solves | Secondary options, filters, or a short task without leaving the current screen's context |
| Archetypes | Any mobile surface where a full-screen push would lose useful context (a filter panel over a list, a quick-edit over a detail view) |
| Content needs | A genuinely secondary, short task — a sheet that itself needs scrolling and multiple sections is usually a full screen wearing a sheet's clothes |
| Hierarchy / focal | The sheet is the focal point while open; the page behind it dims or blurs to signal it's temporarily inactive, not removed |
| Viewport | Sheet height fits its content; avoid a sheet that's nearly full-screen height but still presented as a sheet (at that point, push a screen instead) |
| Scroll | The sheet scrolls independently if its content exceeds the available height; the page behind does not scroll while the sheet is open |
| Responsive | On tablet or desktop width, the same content is often better as an inline panel or popover — a sheet is a narrow-viewport pattern |
| RTL | Drag handle and dismiss gesture direction (typically downward) don't need mirroring; any horizontal content inside does |
| Touch | A visible drag handle; dismiss by drag-down, tap-outside, or an explicit close control — never drag-down as the *only* dismiss path (it's not discoverable for everyone) |
| Accessibility | Focus moves into the sheet on open and returns to the trigger on close; the sheet must be reachable and dismissible without a drag gesture (screen reader, switch control, keyboard-connected phone) |
| Sparse state | A sheet with one option still needs the same drag handle and dismiss affordances — don't skip chrome just because the content is short |
| Dense state | If the sheet's content grows over time (more filters, more options), reassess whether it should still be a sheet or has crossed into needing a full screen |
| Fails when | Every interaction opens a sheet, turning normal navigation into a stack of overlays (see the bottom-sheet worked example); or a sheet is used for content important enough that losing it on accidental dismiss would cost real work |
| Bad AI version | A sheet used for the primary flow of the screen, opened automatically on load, with no page content visible behind it at all |
| Precedent | iOS share sheet and Maps place-detail sheet as platform reference points |

## Split-view tablet

| Aspect | Guidance |
|---|---|
| Solves | Showing list and detail together where the viewport is wide enough to hold both without cramming |
| Archetypes | OPERATIONAL, CONTENT — mail, files, settings, any master-detail surface at tablet or laptop width |
| Content needs | The same list and detail content as `mobile list-detail` above — this composition and that one are the same information architecture at two different widths, not two different products |
| Hierarchy / focal | List pane is narrower (roughly 30–40% of width); detail pane carries the visual weight |
| Viewport | Both panes visible without scrolling the frame itself; each pane scrolls its own content independently |
| Scroll | Selecting a new list item updates the detail pane in place; the list's scroll position is preserved automatically because the list never leaves the screen |
| Responsive | Collapse to `mobile list-detail`'s push/pop model below roughly 700px, where two panes no longer fit comfortably; the exact breakpoint depends on the minimum usable width for each pane's content, not a fixed device category |
| RTL | List pane sits on the reading-start side (right side in RTL); mirror the split accordingly |
| Touch | On touch tablets, both panes need touch-sized targets even though there's more room than a phone |
| Accessibility | Keyboard users should be able to move between list and detail panes predictably (arrow keys within the list, a clear tab stop into detail content) |
| Sparse state | Zero items: the list pane shows its empty state; the detail pane shows a neutral "select an item" state, not a blank pane that looks broken |
| Dense state | Long lists need the same fast-navigation affordances (search, jump, sort) as any dense list — split-view doesn't solve density on its own |
| Fails when | The split is kept at a width where one pane is too narrow to be useful (a list pane so narrow that item titles truncate constantly); or the app silently keeps two panes at phone width by shrinking both below usability |
| Bad AI version | A fixed 50/50 split regardless of content type, leaving a detail pane cramped or a list pane wasting width on short labels |
| Precedent | iPad Mail, Files apps as platform reference points |

## Choosing between list-detail and split-view

These two are the same content model responding to different viewport widths, not two separate
design decisions. Build the information architecture once (list content, detail content, selection
state) and let the composition change with available width: push/pop below the width where two
panes are each usable, side-by-side above it. Treating them as unrelated screens built
independently is the most common source of state bugs (scroll position, selection, and filters
that reset when crossing the breakpoint).
