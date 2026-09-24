# Empty State Types

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

## Why the type matters

The same "nothing here" screen means very different things:

- For **never had any**, "Create your first quiz" is right.
- For **filtered-empty**, the same message is wrong and alarming: the user's quizzes exist.
- For **error-empty**, showing an empty state hides a failure; users may recreate data that exists.

Classify from the data layer, not from the length of the array. Code often knows (filters active?
query present? request failed? permission denied?) and should pass that knowledge to the UI.
