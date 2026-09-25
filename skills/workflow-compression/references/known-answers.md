# Known Answers: Inputs, Choices, Defaults, Memory

Load for F1 redundant input, F2 unnecessary choice, F3 repeated configuration, and F7 memory failure.

## Known-context inventory (run this for every flow)

Before any field, question, picker, or confirmation stays in a flow, check each source and record
what the product already knows at that step:

| Source | Ask | Typical use |
|---|---|---|
| Current user and account | Name, email, role, organization, plan, locale, time zone | Prefill; skip role-irrelevant steps |
| Selected object | The item, record, file, participant, or order the user acted on | Scope actions; prefill target |
| Current route and state | Which page, step, tab, filter, phase | Infer intent; keep context on return |
| Language and region | UI language, source-content language, currency, units | Default and display, don't ask |
| Previous choices | Last-used settings for this task | Default to last deliberate choice |
| Recent objects | Recently opened, created, or used items | Offer first in pickers |
| Ownership and permissions | What this user can do here | Hide impossible options; explain restricted ones |
| Already-entered data | Anything typed earlier in this journey | Never ask twice (GOV.UK: ask once per journey) |
| Only-valid-option constraints | Options filtered to one by data, plan, or permission | Skip the step; show the value |
| Inferable values | Values derivable from files, metadata, device, or other answers | Infer, show, allow override |

Branch: known → prefill, infer, skip, or show as editable context; unknown but predictable →
default with visible "change"; genuinely the user's decision → ask, once.

Sections: Redundant Input (F1) · Unnecessary Choice (F2) · Smart Defaults · Context Reuse · Remembered Settings and Presets (F3)

## Redundant Input (F1)

The user supplies information the system already has.

### Where the system already knows

| Source | Examples |
|---|---|
| Current selection or focus | The selected file, row, participant, order, conversation |
| Current state | Which team is answering; which step of setup; which account is active |
| Upstream data | The source document's language; the order's shipping country; the project's framework |
| User profile | Name, email, locale, time zone, default currency |
| Device and platform | Locale, time zone, input method, OS theme |
| Organization | Default settings, branding, policies |
| History | Last used values, recent items, previous orders |
| The URL or invite | Invite codes, workspace IDs, prefilled parameters |

### Forms of redundancy

- **Re-entering:** typing an email already on the account.
- **Re-selecting:** choosing the language of content whose language is known.
- **Scope restatement:** "Approve for Order #4411" buttons on the page of Order #4411; "Correct
  Team A" when Team A is the one answering.
- **Re-confirming identity:** asking for information to "verify" that adds no security.
- **Format re-entry:** rejecting input because of dashes or spaces the system could strip.

### Repair

1. **Carry forward:** pass known values into the next step; prefill.
2. **Infer and display:** show the inferred value as a statement with a change link
   (`Language: English · from source · Change`).
3. **Scope controls to context:** one set of actions that applies to the current subject, with the
   subject displayed prominently (contextual controls pattern).
4. **Normalize input:** accept flexible formats and clean them.

### When re-asking is right

- Security re-authentication before sensitive actions (and then prefer strong, low-friction
  methods such as passkeys).
- Confirming a value that is known but *likely to have changed* (a shipping address from two
  years ago), shown as a prefilled review, not a blank field.
- Legal attestations that must be explicit.

### Detecting it in code

- Forms whose initial values are empty strings when a user/profile/context object is in scope.
- Route handlers that receive an ID, then a component that asks the user to select the same entity.
- Duplicate button sets that differ only by a subject parameter.

## Unnecessary Choice (F2)

A decision point where only one meaningful answer exists. Each still costs reading, thinking,
and a click, and teaches users that the product does not understand their situation.

### Typical sources

- A picker whose options are filtered down to one by permissions, plan, or data.
- A "choose workspace" step for a user with one workspace.
- Language, size, or format choices determined by the source content.
- "Continue" interstitials with no alternative but to continue.
- A choice among options where one is overwhelmingly chosen and the others are rarely valid.

### Repair ladder

1. **Remove the step** when the answer is fully determined. Show the result in a summary line.
2. **Default and skip** when the answer is almost always the same; let users change it later
   or from the summary.
3. **Collapse into context** by turning the choice into a small inline control on the next screen.
4. **Keep, but explain** only if the choice is real and consequential.

### Design details

- When auto-selecting, name the reason when it is not obvious ("Only English is available for
  this source").
- If other options are unavailable for a fixable reason (plan, permission), mention it where the
  user would look for it, not as a blocking screen.
- Keep deep links and back navigation coherent after removing a step.

### Rule

> If there is only one meaningful option, do not ask a question.

### Worked example

See `references/_shared/skip-known-decisions.md`.

## Smart Defaults

Defaults are decisions made on the user's behalf. Good defaults remove most configuration.
Bad defaults silently cause errors or serve the business at the user's expense.

### Source ranking

Choose the default from the strongest available source:

1. **Explicit user preference** (set in settings)
2. **Last deliberate choice** in this context
3. **Contextual inference** (source data, current selection, locale, device)
4. **Team or organization default**
5. **Population default** (what most users choose)
6. **Safe neutral default**

### Default responsibly

- **Visible:** users should see the default value before it takes effect.
- **Changeable:** one action to change, from where it is shown.
- **Honest:** never default to the option that benefits the business at the user's expense
  (opt-ins, higher tiers, add-ons).
- **Safe:** for consequential settings, default to the reversible or less harmful option.
- **Explained when surprising:** "Using your last export settings."

### Where defaults pay most

- Creation flows (new items start from the last item's configuration or a template)
- Exports, reports, and filters
- Game and session setup
- Form fields with predictable values (country from locale, date as today)
- CLI commands (defaults derived from project files)

### Anti-patterns

- **Blank by principle:** leaving fields empty "to avoid bias" when a clear best value exists.
- **Stale defaults:** remembering an accidental choice indefinitely.
- **Hidden defaults:** consequential settings applied without display.
- **Dark defaults:** pre-checked consent and upsells.

### Measuring

After adding defaults, check how often users change them. A default changed most of the time is
the wrong default.

## Context Reuse

Software accumulates context: what the user selected, what they did last, where they were,
what they were in the middle of. Discarding it creates memory failure (F7) and redundant input
(F1).

### Kinds of context worth keeping

| Context | Reuse |
|---|---|
| Selection | Actions apply to the current selection; next screens preselect it |
| Filters, sort, view | Persist when navigating to detail and back; optionally across sessions |
| Scroll position | Restore on back navigation |
| Drafts | Autosave; restore on return |
| Recent items | Offer in pickers, home, empty states |
| In-progress processes | "Continue where you left off" |
| Last configuration | Default for the next similar task |
| Created item | Carry into the next step (created quiz → host it) |

### Scope rules

- **Session context** (filters, scroll) should survive navigation within a session.
- **Persistent context** (preferences, last configuration) should survive sessions when it
  reflects a deliberate choice.
- **Sensitive context** (payment sessions, one-time codes, private data on shared devices)
  should expire.

### Context in live and multi-actor surfaces

In live control (hosting a game, running a broadcast, handling a support queue), the system
knows who is active and what phase it is. Actions should be scoped to that context:

- A state header announcing the current context
- One set of actions for the current subject
- Automatic update of the actions when context changes

Worked example: `references/_shared/context-aware-judgment.md`. The interaction-design skill covers
the control design in depth.

### Implementation notes

- Keep context in the URL where it helps sharing and back navigation (filters, tabs).
- Keep drafts and last-used settings in durable storage appropriate to the product (server for
  cross-device, local for device-specific).
- Invalidate carefully: if the underlying data changed, a restored context may need a notice.

## Remembered Settings and Presets (F3)

Repeated configuration is the same setup performed every time: filters, export options, game
modes, report ranges, print settings.

### Levels of memory

1. **Last used:** the next time, start from the previous configuration. Lowest effort, often
   enough.
2. **Named presets:** users save configurations they switch between ("Class period quiz,"
   "Tournament mode").
3. **Defaults per context:** different remembered settings per project, class, or client.
4. **Organization defaults:** administrators set defaults for everyone.

Start with last-used. Add presets when users alternate between a few configurations.

### Designing remembered settings

- Show that settings are remembered ("Using last settings · Reset").
- Remember deliberate choices, not accidental states (a filter applied for one search should
  not become a permanent default unless the user saves it).
- Provide a way to reset to defaults.
- Do not remember sensitive or risky values without clear indication (for example "send to all
  recipients" should not silently persist).

### Presets UX

- Offer "Save as preset" after a user has configured something non-default.
- Put presets where configuration starts, as one-click options.
- Allow editing and deleting presets inline.
- Name presets by purpose, not by settings ("Weekly report," not "CSV, 7 days, all teams").

### Measuring

Count configuration decisions per task before and after. For a task done weekly, saving six
decisions per occurrence is a large cumulative gain.
