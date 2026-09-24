# Empty-State Types

Load first: which kind of empty this is decides the words and the action.

Sections: Empty State Types · Search-Empty and Filtered-Empty · Permissions, Unavailable, and Archived · Skeleton vs Empty

## Empty State Types

| Type | Cause | What the user needs | Primary action |
|---|---|---|---|
| Never had any | New account or new area | What goes here and how to start | Create, import, use template |
| First run | Whole product is new | Orientation plus a fast first success | The first meaningful task |
| One item | Just started | Confirmation the thing works; next step | Use it; add another |
| Cleared | User finished everything (inbox zero, all tasks done) | Satisfaction; what is next | Nothing required; optional next |
| Filtered-empty | Filters exclude all items | Which filters; that items exist | Clear or adjust filters |
| Search-empty | Query matches nothing | Confirmation the search worked; alternatives | Suggestions, broaden, check spelling |
| No permission | Access restricted | Why; who can grant it | Request access; switch account |
| Unavailable | Plan, region, time, maintenance | Why and when (if known) | Alternative or when to come back |
| Incomplete setup | Prerequisite missing (no class, no integration) | What is missing | Complete the prerequisite |
| No history | Nothing happened yet (no activity, no results) | That this fills over time | Do the thing that generates history |
| Archived / deleted | Items moved away | Where they went | View archive; restore |
| Error-empty | Failed to load | That this is an error, not emptiness | Retry (state-design) |

### Why the type matters

The same "nothing here" screen means very different things:

- For **never had any**, "Create your first quiz" is right.
- For **filtered-empty**, the same message is wrong and alarming: the user's quizzes exist.
- For **error-empty**, showing an empty state hides a failure; users may recreate data that exists.

Classify from the data layer, not from the length of the array. Code often knows (filters active?
query present? request failed? permission denied?) and should pass that knowledge to the UI.

## Search-Empty and Filtered-Empty

### Search-empty

When a query returns nothing:

- **Echo the query:** "No results for 'photosynthsis'."
- **Help recover:** spelling suggestion ("Did you mean photosynthesis?"), broader matches, removing
  filters, searching in another scope.
- **Offer creation when appropriate:** "Create a quiz called 'photosynthesis'."
- **Show popular or recent** items if it helps continue the task.
- Keep the query in the field for editing.

### Filtered-empty

When filters exclude everything:

- **Name the filters:** "No quizzes match Grade 7 · Science · Draft."
- **One-click recovery:** "Clear filters" and per-filter removal chips.
- **Show the unfiltered count** if cheap: "24 quizzes hidden by filters."
- **Never** show first-use copy ("Create your first quiz!") in a filtered-empty state.

### Combined

Query plus filters: mention both, and offer the most likely relaxation first (usually removing the
most restrictive filter).

### Accessibility

Announce result counts (including zero) with a polite live region so screen reader users know the
search completed.

## Permissions, Unavailable, and Archived

### No permission

- Say that access is restricted, not that the thing does not exist (unless revealing existence is
  itself a privacy or security problem, in which case use a neutral not-found).
- Name who can grant access if appropriate ("Ask a workspace admin").
- Offer "Request access" when the product supports it; confirm the request was sent.
- Offer to switch accounts when users may be signed into the wrong one.

### Unavailable

Features or items can be unavailable because of plan, region, time window, device, maintenance,
or prerequisites.

- Explain the specific reason.
- If fixable, offer the fix (upgrade, connect, wait until a time).
- If temporary, say when it will return if known.
- Do not hide features completely when users need to know they exist; do not tease upgrades in
  operational space where they are noise.

### Archived and deleted

- If items were archived, say so and link to the archive.
- If recently deleted, offer restore (trash) where supported.
- If a link points to a deleted item, explain and offer the nearest useful place.

### Tone

Neutral and factual. Avoid blame ("You don't have permission") in favor of state ("This project is
limited to its members").

## Skeleton vs Empty

Loading and empty are different states. Mixing them misleads users.

| Situation | Show |
|---|---|
| Data is loading (slow) | Skeleton matching the layout, or a loading indicator |
| Data loaded; zero items | Empty state for the correct type |
| Data failed to load | Error state with retry, not an empty state |
| Data loading fast (< ~300 ms) | Nothing extra; avoid flashing skeletons |

### Failure modes

- **Skeleton forever:** the request returned empty, but the skeleton stays because the code only
  handles "has items."
- **Empty flash:** the empty state appears briefly before data arrives, making users think their
  data is gone. Fix by distinguishing "not loaded yet" from "loaded, empty."
- **Error as empty:** a failed request renders "No items," and users recreate data that exists.

### Implementation

Model at least four states in code: `loading`, `loaded-empty`, `loaded-with-items`, `error`,
plus the empty-state type (filtered, search, never-had-any). A single `items.length === 0` check
cannot distinguish them.
