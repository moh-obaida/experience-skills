# The Cost of Custom Controls

Before customizing a standard control, estimate what users gain and what the product loses.

## What standard controls give you for free

| Capability | Examples |
|---|---|
| Input methods | Paste, autofill, password managers, one-time-code autofill, dictation, IME for non-Latin scripts |
| Keyboard | Tab, arrows, Home/End, selection, undo within the field |
| Mobile | Correct keyboards, native pickers, zoom behavior |
| Assistive tech | Roles, names, states, announcements |
| Platform consistency | Look and behavior users already know |
| Maintenance | Browser/OS vendors fix bugs for you |

A custom control must re-implement every capability users rely on, or those users lose it.

## Return-on-complexity questions

1. What does the custom version do that the standard one cannot?
2. How many users benefit, how often?
3. Which capabilities from the table will we re-implement? Which will we lose?
4. Could the same value be achieved in the environment instead (layout, identity, motion)?
5. Who maintains it, and will it survive design-system updates?

## Common customizations and their usual verdict

| Customization | Usual verdict |
|---|---|
| Segmented OTP/code boxes | Rarely worth it; a single well-configured input is better |
| Custom select dropdown | Only for rich options (icons, descriptions, search) with full combobox semantics |
| Custom checkbox/toggle styling | Fine if built on native inputs |
| Custom date picker | Only when native pickers cannot express the need (ranges, availability) |
| Custom scrollbars | Usually harmful; keep native |
| Floating labels | Often reduce legibility; standard labels above are simpler |
| Animated placeholder text | Distracting; hurts comprehension |
| Swipe-only actions | Always add a visible alternative |

## Verdict format

```
Control: 6-box game code input
Value claimed: "feels like a game"
Value to users: none measurable; identity could live in the environment
Costs: paste breaks, screen reader reads 6 unlabeled fields, backspace behavior custom
Verdict: replace with single input (inputmode=numeric, autocomplete=one-time-code, large type)
         and move personality to the page environment
```
