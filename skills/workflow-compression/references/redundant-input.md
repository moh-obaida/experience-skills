# Redundant Input (F1)

The user supplies information the system already has.

## Where the system already knows

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

## Forms of redundancy

- **Re-entering:** typing an email already on the account.
- **Re-selecting:** choosing the language of content whose language is known.
- **Scope restatement:** "Approve for Order #4411" buttons on the page of Order #4411; "Correct
  Team A" when Team A is the one answering.
- **Re-confirming identity:** asking for information to "verify" that adds no security.
- **Format re-entry:** rejecting input because of dashes or spaces the system could strip.

## Repair

1. **Carry forward:** pass known values into the next step; prefill.
2. **Infer and display:** show the inferred value as a statement with a change link
   (`Language: English · from source · Change`).
3. **Scope controls to context:** one set of actions that applies to the current subject, with the
   subject displayed prominently (contextual controls pattern).
4. **Normalize input:** accept flexible formats and clean them.

## When re-asking is right

- Security re-authentication before sensitive actions (and then prefer strong, low-friction
  methods such as passkeys).
- Confirming a value that is known but *likely to have changed* (a shipping address from two
  years ago), shown as a prefilled review, not a blank field.
- Legal attestations that must be explicit.

## Detecting it in code

- Forms whose initial values are empty strings when a user/profile/context object is in scope.
- Route handlers that receive an ID, then a component that asks the user to select the same entity.
- Duplicate button sets that differ only by a subject parameter.
