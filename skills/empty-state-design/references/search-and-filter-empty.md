# Search-Empty and Filtered-Empty

## Search-empty

When a query returns nothing:

- **Echo the query:** "No results for 'photosynthsis'."
- **Help recover:** spelling suggestion ("Did you mean photosynthesis?"), broader matches, removing
  filters, searching in another scope.
- **Offer creation when appropriate:** "Create a quiz called 'photosynthesis'."
- **Show popular or recent** items if it helps continue the task.
- Keep the query in the field for editing.

## Filtered-empty

When filters exclude everything:

- **Name the filters:** "No quizzes match Grade 7 · Science · Draft."
- **One-click recovery:** "Clear filters" and per-filter removal chips.
- **Show the unfiltered count** if cheap: "24 quizzes hidden by filters."
- **Never** show first-use copy ("Create your first quiz!") in a filtered-empty state.

## Combined

Query plus filters: mention both, and offer the most likely relaxation first (usually removing the
most restrictive filter).

## Accessibility

Announce result counts (including zero) with a polite live region so screen reader users know the
search completed.
