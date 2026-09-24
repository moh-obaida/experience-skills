# Forms and Inputs

Forms are where products ask users for work. Every field should earn its place.

## Before designing fields

- Remove fields the system can know or infer (see workflow-compression if installed).
- Defer fields that are not needed now (collect later, when relevant).
- Group related fields; order them the way users think about the information.

## Layout

- Single column for most forms; it is faster to scan and complete.
- Labels above fields (or beside on wide screens for dense admin forms); never placeholder-only.
- Field width hints at expected length (postcode short, address long).
- Required vs optional: mark whichever is the minority, and be consistent.

## Input types and help

- Use the correct type/attributes: `type="email"`, `inputmode="numeric"`, `autocomplete="one-time-code"`,
  `autocomplete="postal-code"`, etc. They bring the right keyboard, autofill, and validation.
- Accept flexible formats and normalize (spaces and dashes in codes, phone numbers, card numbers).
- Paste must work, including pasting a full code into a code field.
- Provide short hint text for non-obvious formats before the user fails, not after.

## Codes (join codes, verification codes, room codes)

The standard answer is a single, large text input:

- `inputmode="numeric"` (or text for alphanumeric), `autocomplete="one-time-code"` for OTPs
- Generous size and letter spacing for readability
- Accepts paste, strips spaces and dashes, uppercases if needed
- Submits on Enter; optionally auto-submits when the full length is reached, if errors are cheap
- Clear error with the code still visible

Segmented boxes (one box per digit) often break paste, autofill, screen readers, deletion, and
mobile keyboards. They add implementation risk for little value. If a design system mandates
them, they must behave exactly like a single input underneath.

## Validation

- Validate inline after the user leaves a field (not while typing the first character).
- Explain how to fix, next to the field: "Enter a date in the future," not "Invalid input."
- Keep the input value on error.
- On submit with errors: summarize at the top with links to fields, and move focus to the summary.
- Never clear a form because of a server error.

## Multi-step forms

Use steps when later questions depend on earlier answers, when sections are long, or when saving
progress between sessions matters. Otherwise a single page is usually faster. See
`references/_shared/public-service-form.md`.

## Mobile

- Avoid fields covered by the keyboard; scroll the focused field into view.
- Use native pickers for dates and selects unless there is a strong reason.
- Keep the primary action reachable when the keyboard is open.
