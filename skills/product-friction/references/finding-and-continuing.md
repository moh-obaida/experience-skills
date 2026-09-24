# Discoverability, Information Architecture, and Continuity

Load when users cannot find things, get lost, lose context, or hit dead ends.

Sections: Discoverability · Information Architecture · Continuity and Context

## Discoverability

A feature users cannot find does not exist for them. A feature they find by accident is a
lucky one.

### Symptoms

- Support explains where things are.
- Users request features that already exist.
- Analytics show near-zero use of a valuable feature.
- Key actions are hidden in overflow menus, right-click menus, hover states, or gestures.

### Causes

- Hidden by default (hover, long-press, "More")
- Unexpected location (a creation action in Settings)
- Unfamiliar label (see terminology)
- Only reachable via shortcut or search
- Buried at the end of long pages or deep navigation

### Repairs

- **Put actions where the need arises** (contextual placement): export on the report, invite on
  the team page, host on the quiz.
- **Promote by frequency:** frequent actions visible; rare ones in menus.
- **Surface at the moment of need:** empty states, next-action slots, and inline hints when the
  user hits the relevant situation.
- **Consistent locations:** the same kind of action in the same place across objects.
- **Search that understands users' words** (synonyms map to features).

### Not the first repair

Product tours, tooltips everywhere, and "What's new" modals help little if the structure is
wrong. Fix placement and naming first; then use lightweight, contextual education for what
remains.

## Information Architecture

Information architecture (IA) is how a product's content and features are organized, named, and
reached. Weak IA makes every task start with "where is it?"

### Signs of IA trouble

- Top-level navigation mirrors the org chart or the database, not user goals.
- The same feature appears in several places with different names.
- "Settings" contains frequent, non-setting tasks.
- Navigation categories overlap ("Tools," "Resources," "More").
- Deep nesting (four or more levels) for common tasks.
- Users rely on search for everything.

### Methods

- **Task mapping:** list top tasks by frequency; check how many steps from entry each takes and
  whether the path is guessable.
- **Object map:** list the main objects (quiz, class, game, report) and their relationships;
  navigation should reflect objects users think in.
- **Label audit:** do navigation labels predict their contents?
- **Tree test (lightweight):** "Where would you look to…?" for top tasks, answered from labels alone.

### Principles

- Organize by user goals and objects, not by internal teams.
- Frequent tasks shallow; rare tasks deeper.
- One canonical location per feature; cross-links rather than duplicates.
- Settings are for configuration, not for tasks.
- Keep top-level navigation short and stable.

### Changes in mature products

Restructuring IA moves things users have learned. Include migration: redirects, "moved to" notes,
release communication, and search synonyms for old names.

## Continuity and Context

Users move between areas, get interrupted, and come back. Products that forget context charge
users every time.

### Continuity checklist

- Does navigating to a detail and back restore scroll position, filters, and selection?
- Are drafts saved automatically and restored?
- Can interrupted multi-step processes be resumed?
- Does the product remember recent items and offer them where tasks begin?
- After completing something, is there a next action (or a dead end)?
- Does a deep link restore the full state (filters, tab, selected item)?
- Do sessions survive reasonable interruptions (sleep, network blips) without losing work?
- Does switching devices preserve what should be preserved?

### Dead ends

A dead end is any state with no useful way forward: success pages with only "Home," errors with
no action, empty states without guidance, completed games without replay. List them in the
ledger; each needs a next action (see `references/_shared/next-best-action.md`).

### Context ownership

When several areas show the same object, changes in one should reflect in others immediately.
Stale duplicates ("I renamed it but the sidebar still shows the old name") erode trust.

### Repairs

- Persist view state in the URL and restore on back.
- Autosave drafts; resume prompts for interrupted flows
  (`references/_shared/continue-where-left-off.md`).
- Recent items in pickers and home.
- Next actions on every outcome.
