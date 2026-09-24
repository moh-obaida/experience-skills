# Smart Defaults

Defaults are decisions made on the user's behalf. Good defaults remove most configuration.
Bad defaults silently cause errors or serve the business at the user's expense.

## Source ranking

Choose the default from the strongest available source:

1. **Explicit user preference** (set in settings)
2. **Last deliberate choice** in this context
3. **Contextual inference** (source data, current selection, locale, device)
4. **Team or organization default**
5. **Population default** (what most users choose)
6. **Safe neutral default**

## Default responsibly

- **Visible:** users should see the default value before it takes effect.
- **Changeable:** one action to change, from where it is shown.
- **Honest:** never default to the option that benefits the business at the user's expense
  (opt-ins, higher tiers, add-ons).
- **Safe:** for consequential settings, default to the reversible or less harmful option.
- **Explained when surprising:** "Using your last export settings."

## Where defaults pay most

- Creation flows (new items start from the last item's configuration or a template)
- Exports, reports, and filters
- Game and session setup
- Form fields with predictable values (country from locale, date as today)
- CLI commands (defaults derived from project files)

## Anti-patterns

- **Blank by principle:** leaving fields empty "to avoid bias" when a clear best value exists.
- **Stale defaults:** remembering an accidental choice indefinitely.
- **Hidden defaults:** consequential settings applied without display.
- **Dark defaults:** pre-checked consent and upsells.

## Measuring

After adding defaults, check how often users change them. A default changed most of the time is
the wrong default.
