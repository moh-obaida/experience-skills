# Familiar Controls and the Cost of Custom Ones

Load whenever a control is custom, clever, or proposed to become so.

Sections: Affordance and Familiarity · The Cost of Custom Controls

## Affordance and Familiarity

An affordance is a visible cue about what can be done. Familiarity is recognition from
experience elsewhere. Together they make controls usable without instruction.

### Signals of good affordance

- Buttons look pressable: a filled or outlined shape, or a clear text-button style used
  consistently.
- Links look like links in body text (underline or clear color + underline on hover/focus).
- Inputs look like places to type: a visible boundary, a label, sufficient height.
- Interactive rows or cards show that they are interactive (hover/focus state, chevron, pointer).
- Draggable items show a handle or a cursor change, and have a non-drag alternative.

### Familiarity is a resource

Users arrive with expectations from thousands of other products and from their platform.
Meeting them is free usability; breaking them costs attention every time.

Keep familiar:

- Text inputs, checkboxes, radios, selects, toggles, date inputs
- Back navigation and browser behavior
- Standard keyboard behavior (Tab, Enter, Escape, arrows in lists and menus)
- Platform patterns on native apps (navigation bars, share sheets, system pickers)
- Common icon meanings (search, close, menu, settings) with accessible labels

### When novelty is worth it

Novel interaction can be justified when:

- It *is* the product (a game mechanic, a creative tool's canvas gesture).
- It is dramatically faster for a frequent action and learnable.
- No standard control can express the interaction.

Even then: teach it in context, keep a standard alternative, and make it accessible.

### The personality trap

Products with bland environments often try to add character by customizing controls. This
moves identity to exactly the places where users need speed and certainty. Put identity in the
environment instead. See `references/_shared/join-code-page.md`.

### Quick tests

- **Five-second test:** can a newcomer point to every interactive element on the screen?
- **Grayscale test:** do interactive elements remain identifiable without color?
- **Touch test:** is anything only discoverable by hover?

## The Cost of Custom Controls

Before customizing a standard control, estimate what users gain and what the product loses.

### What standard controls give you for free

| Capability | Examples |
|---|---|
| Input methods | Paste, autofill, password managers, one-time-code autofill, dictation, IME for non-Latin scripts |
| Keyboard | Tab, arrows, Home/End, selection, undo within the field |
| Mobile | Correct keyboards, native pickers, zoom behavior |
| Assistive tech | Roles, names, states, announcements |
| Platform consistency | Look and behavior users already know |
| Maintenance | Browser/OS vendors fix bugs for you |

A custom control must re-implement every capability users rely on, or those users lose it.

### Return-on-complexity questions

1. What does the custom version do that the standard one cannot?
2. How many users benefit, how often?
3. Which capabilities from the table will we re-implement? Which will we lose?
4. Could the same value be achieved in the environment instead (layout, identity, motion)?
5. Who maintains it, and will it survive design-system updates?

### Common customizations and their usual verdict

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

### Verdict format

```
Control: 6-box game code input
Value claimed: "feels like a game"
Value to users: none measurable; identity could live in the environment
Costs: paste breaks, screen reader reads 6 unlabeled fields, backspace behavior custom
Verdict: replace with single input (inputmode=numeric, autocomplete=one-time-code, large type)
         and move personality to the page environment
```
