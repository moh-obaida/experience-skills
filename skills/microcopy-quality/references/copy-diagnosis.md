# Copy Diagnosis: Finding, Classifying, and Rewriting

## Collect with context

A string is judged in place: the screen, the state, the control it labels, and what the product does
next. Collect the text with its state. Note the locale and the direction.

Sources, in order of trust: the rendered state (E1), the string in source or i18n (E3), a
screenshot (E5). A string visible only in a screenshot may be a placeholder or a stale build.

## Failure classes

| Class | Test | Typical fix |
|---|---|---|
| MEANING: misleading | Does a reasonable reader infer something false? | Say the true thing |
| MEANING: wrong assumption | Is it true for every user who sees this state? | Condition on the state or remove the assumption |
| MEANING: contradiction | Does another string, state, or control disagree? | Make the product state and the words agree |
| RECOVERY | Does an error or blocked state tell the user what to do? | Add the next step in the user's terms |
| TERM: internal | Does it expose an identifier, enum, key, or code? | Replace with the user's concept; relocate the identifier to a diagnostic place |
| TERM: unclear | Would two users read it two ways? | Use the user's own word; define domain vocabulary in place |
| REPEAT | Is the same information stated twice where the user can see both? | Say it once where the decision is made (a necessity question if the element should go) |
| ACTION | Does the label say what happens? | Name the outcome |
| TONE | Robotic, generic, cheerful filler, apology theater | Plain, specific, in the product's voice |
| LENGTH | Too long for the moment, or too short for the consequence | Cut restatements; keep consequences |

Fix MEANING and RECOVERY first. A message with the right facts and clumsy tone is better than the
reverse.

## Error and validation copy

A usable error has four parts, often compressed into one or two sentences:

1. **What happened or what is wrong,** in the user's terms and about this input or action.
2. **What is accepted or what to do.**
3. **What is safe:** whether work was kept, whether the action happened, whether to retry.
4. **Where to go next** when the user cannot fix it themselves (a contact, a status page).

Rules:

- Do not expose internal identifiers in ordinary validation. "Invalid room code ROOM_CODE_INVALID"
  fails; "Room codes are 4 letters. Check the code on the host screen" works. Technical identifiers
  can stay as secondary detail for support cases ("Error ref 7F3A") when support needs them.
- Do not blame ("You entered an invalid code"); state the condition ("That code isn't valid").
- Do not say "failed" when the outcome is unknown. A transport timeout is not a product failure.
- Do not show an error before the user could have caused it (a state problem; hand to
  state-by-state-review for timing).
- Associate the message with its field in markup (`aria-describedby`, `role=alert` where it must
  interrupt) so assistive technology announces it.

## Rewrite procedure

For each string you will change:

```text
string:       "<current text>"  [surface, state, locale]
behavior:     what the product actually does here (verified by <how>)
must keep:    facts, constraints, units, dates, currency, legal wording
class:        MEANING / RECOVERY / TERM / REPEAT / ACTION / TONE / LENGTH
rewrite:      "<new text>"
check:        keeps all of "must keep"; fits the layout; reads naturally aloud; matches nearby strings
```

If "behavior" cannot be verified, the rewrite is a proposal; label it.

## Before and after (invented examples)

| Before | Problem | After |
|---|---|---|
| "Already have a template?" | Implies templates are the only import format | "Import a spreadsheet or CSV" |
| "26 playable letters" | Number with no stated choice; unclear to the host | Remove if it never varies; otherwise "Letters in play: 26 (A to Z)" with the control that changes it |
| "FIRST IN" / "NEXT" | Ambiguous labels | "First correct answer" / "Next correct answer" |
| "ERR_ROOM_CODE_INVALID" | Internal identifier | "That room code isn't valid. Room codes are 4 letters." |
| "Operation completed successfully." | Boilerplate; names nothing | "Quiz saved." |
| "Submit" on a join form | Vague | "Join game" |
| "Unlock the full power of your plan" | Vague uplift | "Your plan includes 5 hosts and unlimited rounds." (only if true) |

## Do not

- Replace a specific cause with a generic apology.
- Remove a constraint to shorten a sentence.
- Write copy for behavior that does not exist.
- Homogenize a deliberate voice (a playful game, a formal institution) into neutral.
- Rewrite text that is already accurate and natural.

## Voice

Look at 10 existing real strings first. Match their person, register, and punctuation. A new
string that sounds like a different product is a TONE defect even if each word is fine.
