# Precedent: Product Interiors and Dense States

Use this module when the work concerns a dashboard, workspace, editor, settings surface, live
system, or other product interior. Marketing examples are not sufficient evidence for an interior.

## `GA1`

**Observed:** GitHub Actions gives each workflow row status, commit, workflow, branch, trigger,
time, and duration.

**Transfer:** density is readable when every column answers a real operational question and the
row has a stable scan order. **Wrong when:** the attributes are decorative or rarely used.

## `GA3`

**Observed:** GitHub Actions separates frequent workflow navigation from lower-frequency management
items in its sidebar.

**Transfer:** navigation hierarchy should follow task frequency and object type. **Wrong when:** a
short product gets a permanent shell that outweighs its content.

## `GF2`

**Observed:** Grafana's not-found state uses a product mascot, a concise explanation, and a back
action plus help path.

**Transfer:** an error interior can carry identity while still leading somewhere useful.
**Wrong when:** illustration pushes recovery below the first viewport or replaces the cause.

## `TV1`

**Observed:** TradingView gives the canvas the center, with drawing tools on the left, object
controls on top, and supporting panels to the right.

**Transfer:** a creation surface should make the object and its most frequent tools spatially
stable. **Wrong when:** chrome occupies the focal area or panels compete with the work.

## `MD1`

**Observed:** MDN provides a stable article shape with an in-page table of contents and predictable
sections.

**Transfer:** repeated expert work benefits from a reliable information architecture more than
from novelty. **Wrong when:** a short task is forced into documentation chrome.

## `LC1`

**Observed:** Linear's conceptual model names Workspace, Teams, Issues, Projects, Initiatives,
Cycles, Views, and Triage as related objects rather than flattening them into one navigation list.

**Transfer:** a product interior needs an explicit object model before it needs more navigation.
**Wrong when:** concepts are only labels for the same underlying object.

## `HN1`

**Observed:** Hacker News fits roughly thirty stories into one desktop view using title, domain,
points, author, age, and comments.

**Transfer:** high density can be identity and utility when scan order is stable and attributes are
real. **Wrong when:** small targets and low contrast harm the audience's ability to act.

## `SPd2`

**Observed:** Spotify's desktop player keeps persistent playback controls separate from the content
collection.

**Transfer:** persistent chrome should own a genuinely persistent task and reserve content space.
**Wrong when:** fixed chrome duplicates actions or consumes the first viewport without need.

## `NO1`

**Observed:** Notion presents editing as a structured document surface rather than a collection
of equal cards.

**Transfer:** authoring interfaces should preserve the user's working object as the focal surface.
**Wrong when:** controls or promotional panels interrupt the object being edited.

## `TV4`

**Observed:** TradingView's chrome rendered before the chart content, leaving a blank canvas while
the actual data loaded.

**Transfer:** loading order is part of composition; reserve a truthful loading state for the focal
object. **Wrong when:** static chrome implies readiness while the main work is unavailable.

## `GH1`

**Observed:** GitHub puts live counts on Issues and Pull requests tabs.

**Transfer:** navigation can carry status when the count changes a user's next choice.
**Wrong when:** badges are decorative or stale.

## Interior transfer checklist

Before adding a panel, card, badge, rail, or persistent header, name the object it represents, the
user decision it supports, its update authority, and its dense/sparse behavior. Test a realistic
long row, no-data state, error state, and a short viewport. If the surface is a dashboard, prefer
real attributes and ranked attention over equal KPI tiles.
