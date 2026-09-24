# Steps and Screens: Navigation, Confirmation, Bulk, Disclosure

Load for F4 navigation tax, F5 confirmation tax, F6 serial work, and too many options up front.

Sections: Navigation Tax (F4) · Inline Actions · Confirmation Tax (F5) · Bulk Actions (F6) · Progressive Disclosure

## Navigation Tax (F4)

A tiny operation that requires a route change, a new screen, or a modal. Each navigation costs
time, orientation, and often state (scroll, selection, filters).

### Common cases

- Rename through Settings → General → Name → Save
- Change status via an edit page
- View a detail that could be a hover card or an expandable row
- Opening a full-page editor to fix a typo
- Modal to change a single field

### Repair options

| Operation | Instead of navigation |
|---|---|
| Single-field edit | Inline edit |
| Status change | Inline menu or segmented control on the item |
| Quick view | Expandable row, side panel, or popover |
| Small create | Quick-add row or inline form |
| Related action | Context menu on the item |

### When navigation is right

- The destination has substantial independent content or tasks.
- Users benefit from a shareable, bookmarkable URL.
- The operation needs focus and space (composing a long message, editing a complex object).

### Preserving context when navigating

If navigation stays, protect the context:

- Restore scroll, filters, and selection on return.
- Use side panels or split views for list → detail patterns in desktop apps.
- Keep the back action predictable.

### Counting

Record navigations separately. A flow that goes from 4 navigations to 1 is a measurable
improvement even if action counts are similar.

## Inline Actions

Edit and act where the value is displayed. Inline actions remove navigation tax (F4) for small,
frequent, reversible changes.

### Good candidates

- Rename, retitle, relabel
- Toggle a status or flag
- Change a single field (due date, assignee, priority, quantity)
- Reorder items
- Quick add (a new row at the end of a list)
- Approve/reject in a queue

### Poor candidates

- Changes that require reviewing consequences across many objects
- Multi-field edits with interdependent validation
- Actions that are irreversible or costly

### Interaction details

- **Affordance:** visible on hover *and* on focus, and available on touch (a visible edit icon or a
  context menu, not hover only).
- **Commit:** Enter or blur for simple text; explicit save for sensitive fields.
- **Cancel:** Escape restores the previous value.
- **Validation:** inline, next to the field; keep the user's text on error.
- **Feedback:** the value updates; an optional brief highlight confirms the save; errors are
  specific.
- **Concurrency:** if another user changed the value, show it rather than silently overwrite.
- **Accessibility:** the trigger is a button with an accessible name ("Rename Quarterly Review");
  focus moves into the input and back out.

### Worked example

See `references/_shared/inline-rename.md`.

## Confirmation Tax (F5)

A confirmation on a harmless or reversible action. It costs a decision every time and trains
users to click "Yes" without reading, which weakens the confirmations that matter.

### Undo vs confirmation

| Action | Use |
|---|---|
| Trivial (sort, view, collapse) | Neither; just do it |
| Reversible (archive, move, rename, status change, remove from list) | Do it immediately, offer undo |
| Costly (send to many, publish, charge) | Preview then explicit commit (the commit button *is* the confirmation) |
| Irreversible (permanent delete, money transfer, legal submit) | Specific confirmation that states the consequence |

### Good undo

- Visible for long enough to act on (several seconds; longer for important actions) and
  reachable by keyboard.
- Truly reverses the action, including side effects.
- Available in a history or trash for later recovery where appropriate.

### Good confirmation

- States the specific consequence: "Delete 'Spring Tournament' and its 24 results? This cannot be
  undone."
- Uses a specific verb on the button ("Delete tournament"), not "OK" or "Yes."
- For extreme consequences, considers typed confirmation (type the name).
- Is rare enough that users read it.

### Compression must preserve safety

Removing a confirmation from money movement, irreversible deletion, or public publishing is not
compression; it is a safety regression. In those cases, improve the confirmation's clarity and
speed (for example, one strong final review instead of three weak intermediate "Are you sure?"
steps).

See `references/_shared/mobile-money-transfer.md`.

## Bulk Actions (F6)

Serial work is performing the same action on many items one at a time.

### Signals

- Users repeat the same action on consecutive list items.
- Support requests ask "is there a way to do this for all of them?"
- Import, cleanup, grading, tagging, triage, and moderation workflows.

### Design

1. **Selection:** checkboxes on each row; shift-click ranges; keyboard selection;
   "select all" with explicit scope (this page vs all N matching).
2. **Action bar:** appears when anything is selected; shows the count; offers the common actions.
3. **Execution:** reversible actions apply immediately with undo; destructive actions state
   the count and scope before committing.
4. **Result reporting:** precise partial results ("47 moved · 3 skipped because they are locked ·
   View").
5. **Persistence:** keep the selection after an action when users commonly chain actions.

### Alternatives to selection-based bulk

- **Rules:** "Always tag emails from X" when the same bulk action recurs.
- **Paste lists:** accept a pasted list of names or IDs instead of adding one by one.
- **Import:** CSV/spreadsheet import for large initial loads.
- **Apply to similar:** after a single action, offer "Apply to 12 similar items."

### Accessibility

- Selection state announced; checkboxes labeled with item names.
- Action bar reachable by keyboard and announced when it appears.

### Counting

Before: `n items × k actions`. After: `select (1–3 actions) + k actions`. For n = 30 and k = 3,
that is 90 actions reduced to about 6.

## Progressive Disclosure

Show the common path first. Reveal advanced options when they are needed. Do not punish
beginners with expert controls, or experts with beginner workflows.

### Deciding what is "common"

- Use real usage data where available (which options are changed from default, how often).
- Without data, reason from the goal: which options must every user consider to reach the
  outcome? Everything else is advanced.

### Disclosure mechanisms

| Mechanism | Good for | Watch for |
|---|---|---|
| "More options" expander | A handful of advanced fields | Hiding something most users need |
| Contextual reveal | Options that only apply after a choice | Layout jumps |
| Sensible defaults + summary + "Change" | Settings users rarely alter | Summaries users cannot understand |
| Separate advanced screen/settings | Rare, expert configuration | Splitting related settings |
| Keyboard shortcuts, command palette | Power features | Being the only access path |
| Templates and presets | Complex configurations | Too many templates to choose from |

### Rules

- Advanced options must be discoverable: a visible, labeled entry point.
- Disclosed state should persist for users who always expand it.
- Validation errors in hidden sections must reveal the section.
- Disclosure is not an excuse to keep a bad option; remove options nobody should use.

### Anti-patterns

- **Everything visible because flexibility sounds impressive.** Twenty options on a create
  dialog where three matter.
- **Nothing visible because minimal looks clean.** Hiding the one option most users need.
- **Nested disclosure chains.** Advanced → More → Expert.

### Measuring

Count decisions presented by default before and after. The target is fewer *presented*
decisions for the common case while keeping every *meaningful* decision reachable.
