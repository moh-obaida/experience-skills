# Search, Selection, Bulk Actions, and Expert Controls

Load when designing search, autocomplete, pickers, multi-selection, bulk actions, context menus,
command palettes, or loading/optimistic control states.

## Search: proportion first

| Scale and frequency | Search treatment |
|---|---|
| Under ~20 items | None; sort or group instead |
| Tens to hundreds, occasional | Standard field above the list with a result count |
| Large catalogs or libraries | Prominent field with filters, recents, and good empty results |
| Whole app with many objects and actions | One global search or command palette, truly global, shortcut shown |

Precedent: GOV.UK puts search directly under its purpose statement (UKm2); Grafana shows the shortcut
in the field (GF4); GitHub places "Go to file" where file-finding begins (GH3).

**Rules:** keep the query visible and editable; show counts; zero results suggest recovery (spelling,
broader filters, create); normalize input (case, accents, spacing); match users' words (synonyms).

## Autocomplete

- Suggestions appear after a short pause, not on the first keystroke for large data.
- Highlight the matched part; keyboard: arrows move, Enter selects, Escape closes.
- Recents first when the field is empty.
- Never auto-commit a suggestion the user did not choose.
- ARIA combobox pattern completely, or a native `datalist` where sufficient.

## Selection

- Single selection: the selected item is visible beyond color (checkmark, weight, border).
- Multi-selection: checkboxes on rows; Shift for ranges; select-all states "this page" vs "all N".
- **Mixed state:** a parent checkbox shows indeterminate when some children are selected; its label
  says how many.
- The selection count and a clear action are always visible when anything is selected.

## Bulk actions

- An action bar appears with the count; common actions first; destructive last and specific.
- Reversible bulk actions apply immediately with undo; irreversible ones state count and scope.
- Report partial results precisely ("28 archived · 2 locked · View").
- Keep the selection after an action when users chain actions.

## Context menus

- Right-click and long-press menus mirror a visible "More" button; they are shortcuts, never the only
  path.
- Order: frequent, then related, then destructive (separated).

## Command palettes

Worth it when the app has many actions across many objects and a frequent expert audience. Requires:
global scope, fuzzy matching, recent commands, shortcuts displayed beside commands, and every command
also available somewhere visible. Not worth it for a dozen actions.

## Control states while working

| State | Control behavior |
|---|---|
| Loading (control's own action) | Label changes ("Saving…"), spinner inside, repeat press ignored |
| Optimistic | Show the result immediately for low-risk actions; subtle pending mark if latency is noticeable; roll back visibly on failure |
| Confirmed | Remove pending mark; no extra celebration |
| Disabled | Explain why (adjacent text or accessible description) or keep enabled and explain on use |
| Mixed | Indeterminate visuals plus text ("3 of 8 enabled") |

## Mode errors

When the same control acts differently by mode, users err. Remove the mode, show it unmistakably, or
use quasi-modes (active only while a key is held).
