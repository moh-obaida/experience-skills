# Remembered Settings and Presets (F3)

Repeated configuration is the same setup performed every time: filters, export options, game
modes, report ranges, print settings.

## Levels of memory

1. **Last used:** the next time, start from the previous configuration. Lowest effort, often
   enough.
2. **Named presets:** users save configurations they switch between ("Class period quiz,"
   "Tournament mode").
3. **Defaults per context:** different remembered settings per project, class, or client.
4. **Organization defaults:** administrators set defaults for everyone.

Start with last-used. Add presets when users alternate between a few configurations.

## Designing remembered settings

- Show that settings are remembered ("Using last settings · Reset").
- Remember deliberate choices, not accidental states (a filter applied for one search should
  not become a permanent default unless the user saves it).
- Provide a way to reset to defaults.
- Do not remember sensitive or risky values without clear indication (for example "send to all
  recipients" should not silently persist).

## Presets UX

- Offer "Save as preset" after a user has configured something non-default.
- Put presets where configuration starts, as one-click options.
- Allow editing and deleting presets inline.
- Name presets by purpose, not by settings ("Weekly report," not "CSV, 7 days, all teams").

## Measuring

Count configuration decisions per task before and after. For a task done weekly, saving six
decisions per occurrence is a large cumulative gain.
