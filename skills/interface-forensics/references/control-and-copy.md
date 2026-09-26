# Controls and Copy

## Necessity and rank

For each control, write its result and frequency. Ask whether it completes a task, reveals state, or provides a useful shortcut. Compare its destination with persistent navigation and nearby actions. A redundant action can be removed; a rare utility can be demoted; a frequent task should remain easy to find. Preserve a duplicate only when it materially shortens this context's path.

Rank primary, secondary, tertiary, destructive, navigation, and utility actions. Check whether visual prominence matches importance. Multiple filled buttons, prominent sign-out, and generic Manage/View/Open labels are candidates for investigation, not automatic defects. Verify the user task before changing them.

## Operability

Measure the interactive box, not the icon glyph. Test nearby touch targets, pointer feedback, hover/active/pressed states, disabled explanations, and keyboard activation. An icon-only control needs an accessible name; a decorative icon should not be announced as a separate action. Links navigate; buttons perform actions. A clickable `div` requires a strong reason and equivalent keyboard semantics.

## Copy pass

Read every visible string in context: heading, button, helper text, placeholder, validation, errors, empty state, success, and personalized text. Check whether it describes the result, repeats adjacent content, uses implementation jargon, truncates a name, or inserts vague warmth into an operational task. Prefer a concrete replacement, with the reason it helps this user's job.

## Evidence examples (invented)

- Weak: “The button is unnecessary.” Strong: “Open cart duplicates the cart destination in the persistent header, does not reveal cart state, and competes with the account task; remove it unless tests show a distinct shortcut need.”
- Weak: “Copy feels robotic.” Strong: “Your private space, Obd. uses marketing language and an abbreviated name on an account task page; use Account or the full display name.”
- Weak: “Targets are small.” Strong: “The visible close glyph is 16px and the clickable button is 20×20px; enlarge the button box without enlarging the glyph, then retest the adjacent action.”
