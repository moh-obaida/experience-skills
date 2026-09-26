# Control and Content Necessity

Every visible element on a screen has a build cost, a maintenance cost, and an attention cost. It
should be there because it earns those costs, not because a layout template expects something in
that position. This module is the interrogation an agent runs on each element of a rendered
surface — button, card, label, icon, badge, container — before deciding it belongs.

This is a finer grain than composition (`whitespace-and-dead-space.md`,
compositions modules) and finer than friction (`workflow-friction.md`).
Composition asks whether the page as a whole has a focal point and a working grid. Friction asks
whether a whole product is hard to learn. This module asks whether *this one element*, right here,
has a job that nothing else on the screen or in the product already does.

## The core questions

Run these against any element before judging it "fine" or flagging it:

1. **Why does this exist?** What user job does it serve, right now, on this screen?
2. **Is it already available elsewhere?** Global navigation, an overflow menu, a settings page, a
   keyboard shortcut the user already has.
3. **Does it look more important than it is used?** Compare visual weight to actual use frequency.
4. **Does it imply interactivity it doesn't have,** or hide interactivity it does have?
5. **Would removing it change what the user does next?** If not, it is decoration.
6. **Is it filling space because the layout expects something here,** or because the state
   actually has this content?
7. **Is the user being asked to supply or interpret something the software already knows?**
8. **Is this solving a product problem, or making the screen look designed?**

An element that fails question 5 is the strongest candidate for deletion. An element that fails
question 2 is a duplication candidate, not necessarily a deletion candidate — the redundant
instance is usually the one with less context (see below).

## Worked example: reading a real screen

A signed-in account page shows, top to bottom: a header with global nav including a cart icon; a
large "Open cart" button below the greeting; a greeting that reads "Your private space, Barth."; three
equal-width cards reading "0 Cart," "0 Reward credit," "0 Messages"; a bordered rewards panel with
one sentence and a large empty area; an "Access to email" pill with a checkmark; and a "Sign out"
button styled identically to the page's primary actions.

Running the questions:

- **"Open cart" button** — question 2 fails. Cart is already one tap away in the header on every
  screen. A second, larger cart entry point on an account page does not reduce the number of steps
  to reach the cart; it duplicates a control that is already global. It earns its place only if this
  page is *about* an abandoned cart (a recovery flow), in which case it should say so and carry the
  cart's contents, not just "Open cart."
- **Three zero-value metric cards** — question 6. The layout was built for an account that has
  cart items, reward credit, and messages, and renders three cards regardless of whether any of them
  have content. All three read zero. Collapse them into one line of state ("No items in your cart ·
  No reward credit · No new messages") until any one of them has something to report, then let that
  one earn a card.
- **"Sign out" at primary-button weight** — question 3. Sign-out is one of the least frequent
  actions on an account page (most sessions: never). Giving it the same visual weight as the
  account's primary tasks means the page is optimizing for an action almost nobody takes today. Move
  it to a menu, footer, or secondary position; keep it reachable, not prominent.
- **"Access to email" pill with a checkmark** — question 4. A pill with a checkmark reads as a
  toggle or a completed step. If tapping it does nothing (it's just informing the user that email
  access is granted), it is borrowing the visual language of a control for a fact. Either make it
  actionable (tap to review/revoke) or present it as plain status text, not a pill.
- **"Your private space, Barth."** — this is a copy problem, not a control problem; see
  `product-copy.md` for the personalization and generic-phrase analysis of this
  exact line.
- **Rewards panel, mostly empty** — question 6 again, at the container level: the bordered panel
  was sized for a populated rewards list. One sentence inside a container built for a list is an
  empty-state sizing failure (`fake-density.md`, `meaningful-empty-state.md`)
  layered on top of a control-necessity failure (the panel's border and size imply more content is
  normal here, when for this account it structurally is not, yet).

None of these conclusions are universal rules ("never show a cart button," "never use pills"). They
are the output of asking the same eight questions against a specific screen. Apply the same
questions to a different screen and expect different answers — a cart button on a checkout summary
page is not redundant; a "Sign out" button styled prominently on a shared/kiosk device is not
overprominent, because the frequency of sign-out is high there.

## Catalog

Each entry: what it looks like, why agents default to it, when it is actually justified, how to
tell the failure from the healthy case, and the alternative. Entries with a fuller ten-point
treatment are the ones that recur most across product surfaces; narrower ones get a compact row in
the tables that follow each section.

### Redundant and duplicate actions

**Redundant CTA duplicating a global control.** A prominent button that does exactly what an
always-visible nav item, header icon, or persistent control already does, with no added context
(no pre-filled state, no narrower scope, no shortcut value).

- *Why agents produce it:* every page in a mock or a template "should have a clear call to action,"
  so a CTA is added without checking what is already reachable in one tap from this screen.
- *When justified:* the local instance adds real value the global one doesn't — it's scoped ("Add
  to *this* cart order," pre-filtered), it removes a navigation step that matters for a
  high-frequency task, or the global control is not visible from this screen (buried in an overflow
  menu, a different device, a different session state).
- *When it fails:* the global control is one tap away on this same screen and the local button adds
  nothing but a second way to do the identical thing.
- *Evidence:* screenshot or DOM shows both the global entry point and the local button visible at
  once, with identical destination and no added scope.
- *Alternative:* remove the local instance. If the page's job is specifically about that object
  (a cart-recovery page, a "continue checkout" prompt), keep one clear action and drop the duplicate
  global echo.
- *Verify:* count the taps to complete the task with and without the local control; if the count is
  identical, the local control was decorative.

**Duplicate navigation.** A grid of large buttons on a home or account screen that repeats items
already in the sidebar or top nav, usually to "fill" a sparse landing page. See
`fake-density.md` for the sparseness angle; this module adds the redundancy
test: if the button grid and the nav point to the same destinations with the same labels, one of
them is unnecessary chrome, not a second way to help the user.

**Actions repeated across a page without reason.** The same "Export" or "Share" action appears at
the top of a page and again at the bottom, or once per row and once globally, without a reason tied
to scroll position or scope (a sticky action bar for a long page is a reason; identical duplication
at both ends of a short page is not).

| Pattern | Test | Fix |
|---|---|---|
| Low-value secondary button next to a clear primary | Does it get used often enough to earn equal or near-equal width/contrast? | Demote to a text link or a menu item |
| "Manage" button that opens a page reachable from settings | Is there already a path from global settings? | Remove; deep-link settings if the shortcut is genuinely used often |
| Shortcut duplicating a keyboard/command-palette action with no discoverability gain | Would a first-time user actually find the shortcut without this button? | Keep only if it's the *only* discovery path |

### Prominence mismatched to frequency

Visual weight (size, color, position, contrast) should track how often and how urgently an action
is used, not how "important" it sounds in the abstract.

**Overprominent destructive or account-ending actions.** Sign out, delete account, cancel
subscription, leave workspace — all low-frequency for the overwhelming majority of sessions.

- *Why agents produce it:* these actions feel consequential, so they get treated like they need
  strong visual presence, conflating "serious" with "prominent."
- *When justified:* the surface's entire purpose is that action (an account-deletion confirmation
  screen; a sign-out confirmation dialog once triggered) — there, prominence is correct because the
  user arrived specifically to do this.
- *When it fails:* the action sits at the same visual weight as the page's primary, frequent tasks,
  on a page whose main job is something else (an account overview, a settings list).
  This isn't only about danger — a low-frequency benign action (e.g., "Change language") getting
  primary-button treatment on a dashboard has the same weight-vs-frequency mismatch, just without
  the destructive-action framing.
- *Evidence:* compare the action's visual treatment (size, color saturation, position) against its
  expected use frequency for a typical session.
- *Alternative:* move to a menu, a settings row, or the page footer. Keep destructive actions
  reachable and clearly labeled, but let their prominence come from confirmation-step friction
  (typing a name to confirm, a delay before the button enables) rather than from size and color on
  the entry point.
- *Verify:* would a design review flag this as "why is Sign Out competing with Save?" If yes, demote
  it.

**Low-frequency action styled like the primary action.** Two buttons of equal visual weight where
one is used in nearly every session and the other is used rarely — equal weight tells the user they
are equally important, which is false and slows the frequent path down by making the eye scan both.

### Interactive vs informational affordance

**Informational elements styled like controls.** A pill, chip, or badge with an icon that visually
matches the product's toggle or button language, but tapping or clicking it does nothing (or does
something the visual language doesn't predict).

- *Why agents produce it:* pills and chips are a fast way to make a fact look "designed," and the
  model's training data is full of pills that *are* interactive (filters, tags), so the same shape
  gets reused for plain status.
- *When justified:* the element genuinely is interactive (tap to review the permission, tap to
  revoke access) and the visual language matches what happens when tapped.
- *When it fails:* the element is read-only information wearing a shape the rest of the product uses
  for controls — the user will tap it, nothing will happen, and they'll wonder whether it's broken.
- *Evidence:* check whether the element has an onClick/handler at all; check whether its shape
  (rounded pill, checkmark icon, border) matches other elements on the same screen that *are*
  tappable.
- *Alternative:* if it's a fact, present it as plain text or a label with a static icon, not a
  pill with the product's interactive-chip styling. If it should be interactive, wire the
  interaction and make the affordance honest (chevron, underline, or a real button).
- *Verify:* hand the rendered screen to someone unfamiliar with it and ask them to point at
  everything they think they can tap; compare against what's actually tappable.

**Decorative badges pretending to communicate state.** A colored dot or badge that looks like a
status indicator (online/offline, new/read, healthy/degraded) but is actually always the same color
regardless of the underlying data — often left over from a mock where the state was hardcoded.

**Icons with unclear meaning, standing alone.** An icon-only button whose glyph doesn't reliably
communicate its action across audiences (a stylized abstract icon for "archive" versus a widely
understood trash icon for "delete"). Test: can someone who has never used this product guess the
action from the icon alone, or does it need a label/tooltip to be usable at all? If it needs the
tooltip every time, it needed a label, not an icon.

**Icons duplicating text without benefit.** A checkmark icon next to the word "Verified," a
calendar icon next to a date, a person icon next to "Account" in a menu that already has the icon
doing zero disambiguation work (there's only one "Account" item; the icon doesn't distinguish it
from anything). These aren't wrong by default — icons that speed up scanning in a list of many
different item types earn their place — but a single icon next to a single unambiguous label is
pure repetition.

### Control type mismatch

**Buttons that should be links, and links that should be buttons.** A button-styled element that
only navigates (no side effect, no state change) reads as heavier than it needs to — a link
communicates "go look at this" more honestly and costs less visual weight. Conversely, an
underlined link that actually submits a form, deletes something, or changes account state hides a
consequential action behind a low-commitment affordance.

- *Test:* does activating this element cause a side effect (save, delete, submit, toggle) or does
  it only change location (navigate, open a new view of existing content)? Side effect → button.
  Navigation only → link.

**Controls that should not exist.** A setting that has one correct value 95% of the time and a
toggle for it anyway — the toggle is a decision transferred to the user that the product could have
made by default, with an advanced-settings escape hatch for the 5%. See
`overengineering.md` for the broader complexity-budget argument; this entry is
specifically about a single control whose existence is the overengineering, not a whole subsystem.

**Controls that should be automatic.** A "Refresh" button next to data that could reasonably
auto-update; a "Save" button on a form that could autosave with a visible saved-state indicator
instead. Justified when the action has a cost the user should control (a paid refresh, a destructive
overwrite) or when explicit save is the expected mental model for the content type (a document the
user is deliberately drafting).

### Content that fills space instead of doing a job

**Cards containing almost no information.** A card is a container that implies "this is one
distinct, self-contained object, comparable to its siblings." A card with a label and nothing else
implies false richness — it looks like it should have more, and its border, shadow, and padding
cost space that a plain row or a line of text would not.

**Cards used because the layout expects cards.** Every section of a page rendered as a card grid
regardless of whether the content is a set of comparable objects (justified) or a single narrative,
a form, or a list that has an order (not justified — see `design-cliches.md`,
"Bento grid everywhere").

**Zero-value metric cards and meaningless dashboard metrics.** Numbers displayed because a
dashboard template has a slot for a number, not because the number changes what the viewer does
next. See the worked KPI-dashboard example (`whitespace-and-dead-space.md` and
the anti-slop examples) for the data-heavy version of this failure; the account-page version is the
same test applied to smaller stakes: if three cards all read "0," they are one sentence pretending
to be three data visualizations.

**Empty containers and oversized empty states.** A bordered panel or card sized for a populated
state (a list, a gallery, a feed) that currently holds one sentence and a large blank area. The
container's size is signaling "content usually goes here" even when, for this account or this state,
it structurally doesn't yet. See `meaningful-empty-state.md` for how to design the
empty state itself; the control-necessity angle is narrower: audit whether the *container*, not just
its message, should resize or collapse when there's nothing in it.

**Duplicate empty-state messaging.** The same "nothing here yet" idea stated twice on one screen —
once as a headline, once as a smaller caption restating it — because the headline pattern and the
caption pattern were both applied without checking whether the caption adds anything.

### Chrome that doesn't earn its place

| Pattern | Test | Fix |
|---|---|---|
| Excessive pills for what are really plain labels | Is any pill here actually filterable/removable? | Plain text for facts; pills only for filters, tags, removable tokens |
| Useless chips (one chip, can't be removed, doesn't filter anything) | Does removing it change a result set? | Replace with plain text |
| Unnecessary tooltips (repeat the visible label) | Does the tooltip say something the label doesn't? | Remove, or replace the unclear element the tooltip was compensating for |
| Unnecessary section headings ("Details" above a details block with no siblings) | Are there multiple sections this heading distinguishes among? | Remove if there's only one section |
| Labels that repeat obvious context ("Your Account" heading inside the Account tab) | Does the label add information the surrounding chrome (tab, breadcrumb, title bar) doesn't already give? | Remove or replace with the actual content's own heading |
| Excessive dividers between naturally grouped items | Does whitespace alone already group them? | Remove dividers; use spacing |
| Decorative shadows / overrounded corners on every container | Does the shadow indicate elevation that matters (a menu over content), or is it applied uniformly? | Reserve elevation cues for things that are actually layered above other content |
| Overnested containers (card inside a card inside a bordered section) | Count the nesting depth; does each layer add a distinct grouping the user needs? | Flatten to the minimum nesting that preserves real grouping |

### Structural pattern misuse

**Modals used instead of inline interaction.** A modal for an edit that could happen inline (a
single field, a short list) forces the user to lose the page context, adds a focus-trap and
close-affordance cost, and is justified mainly when the task needs full attention, has enough
fields that inline would crowd the page, or must interrupt (a destructive confirmation).

**Drawers used because they look modern.** A slide-in panel used for content that has no spatial
or hierarchical reason to slide from an edge — justified when the content is a detail view of a
list item (preserving the list's position) or a persistent, reference-while-you-work panel; not
justified as a default replacement for a normal page or a normal modal.

**Accordions hiding information unnecessarily.** Collapsing content the user is very likely to want
immediately (the first FAQ answer, a single settings section with only two fields) trades one click
for the illusion of a shorter page. Justified when there are many sections and most users only need
one or two, or on a long page where scanning collapsed headings is itself useful.

**Tabs splitting content that belongs together.** Tabs used to break up a form or a report that the
user needs to see as a whole (fields on tab one depend on values visible only on tab two) forces
memory work the interface should carry. Justified when the sections are genuinely independent views
of different things (Overview / Activity / Settings on a profile), not sequential parts of one task.

**Breadcrumbs where hierarchy is already obvious.** A breadcrumb trail on a two-level product where
the sidebar already shows exactly where you are. Justified in deep, tree-shaped hierarchies (file
systems, nested categories) where the current path isn't otherwise visible.

**Floating action buttons without a strong primary action.** An FAB implies "there's one obvious
next thing to create here." On a screen with several equally likely next actions, an FAB just adds a
persistent circle that covers content while scrolling.

**Filters with no meaningful result impact.** A filter panel on a list where filtering rarely
changes the result set's size or order in a way the user cares about (few items, filters that
overlap with what's already visible). Test: does applying the filter meaningfully change which
items are shown, for realistic data volumes? If the answer is usually "not really," the filter is
solving an imagined problem.

**Search where browsing is sufficient, and the reverse.** Search UI on a list of eight items adds a
control nobody needs to use; browsing-only on a catalog of thousands forces scrolling through
content a search box would resolve in one query. Match the control to the realistic item count and
how specifically the user knows what they want.

**Sort controls nobody needs.** A sort dropdown on a list that has one natural, expected order
(chronological messages, alphabetical settings) and no evidence users want another order.

**Pagination on tiny result sets.** Page 1 of 1, or five items split across two pages of three and
two — pagination chrome for a set small enough to show at once.

**Infinite scrolling where position matters.** Infinite scroll on a list the user needs to return to
a specific point in (search results they're comparing, an admin table they paginate through
repeatedly) loses their place and makes "item 340" unreachable without re-scrolling from the top.
Paginate or use a stable, indexed list instead.

**Unnecessary carousels.** A carousel for two or three items that would fit side by side, or for
content where only the first slide is ever seen (most users never interact with carousel controls).
Justified for genuinely large, browsable, non-critical sets (a gallery, secondary recommendations) —
never for the single most important message on the page, which a carousel will auto-advance away
from.

**Horizontal scrolling hiding important content.** A horizontally scrolling row that clips content
the user needs to see without discovering the scroll affordance — acceptable for optional browsing
(a shelf of recommendations) and risky for anything the user must not miss (a required step, a
warning).

### State, action, and label placement

**State information shown far from the action it affects.** An error about a field's validity shown
in a summary banner at the top of a long form, disconnected from the field itself, forces the user
to hunt. Put state next to the thing it describes; summarize at the top only in addition to, not
instead of, inline placement.

**Confusing disabled states.** A disabled button with no indication of why, or a control that looks
enabled but silently does nothing. Either explain the disabled reason near the control, or make the
control genuinely unavailable/hidden rather than present-but-dead.

**Labels that describe implementation rather than user intent.** "Set isActive to true," "Toggle
feature_flag_v2," "Run batch_reconcile" exposed as user-facing labels because the internal name was
copied instead of translated into what the user is trying to accomplish. Test: could someone
unfamiliar with the codebase understand what this label does for them?

### False hierarchy

**Multiple primary-looking actions on one screen.** Two or more buttons with identical strong
styling competing for attention — the eye has no default path. Pick one true primary per screen (or
per logical section) and let everything else recede.

**Competing focal points.** A hero image, a bold headline, and a saturated CTA all fighting for
first attention because each was designed to "stand out" in isolation without checking against the
others.

**False urgency.** Countdown timers, "Only 2 left!," red badges on non-urgent items — used to
manufacture attention the content doesn't actually warrant. Justified only when the urgency is real
and verifiable (an actual expiring offer, an actual limited stock count from inventory).

## Using this catalog

Do not treat any entry as a ban. A pill, a modal, a carousel, an icon-only button, or a KPI card can
be exactly right in its context — the failure is deploying the pattern by default, without checking
it against the eight core questions on the actual screen in front of you. When two or more entries
apply to the same element (a pill that is both decorative-badge and duplicate-of-visible-state),
name both; they usually share one root cause and one fix.

Pair this module with `product-copy.md` when the failing element is a string
rather than a control, and with `fake-density.md` when the pattern is filling
sparseness rather than misjudging an individual control.
