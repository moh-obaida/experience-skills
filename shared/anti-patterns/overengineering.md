# Overengineering

Complexity added to an experience where users receive little or no value. It costs build
time, maintenance, performance, accessibility, and learnability.

## Interface overengineering

- **Custom controls for standard inputs:** segmented code boxes, custom selects, custom date
  pickers, bespoke sliders, when native controls would serve.
- **Modes and settings** for behavior that could have a good default.
- **Animation systems** for surfaces with two meaningful events.
- **Command palettes** in products with a dozen actions.
- **Drag-and-drop** where a "Move to" menu is faster and more accessible.
- **Personalization engines** for products used once a month.

## Workflow overengineering

- Multi-step wizards for small forms.
- Approval chains for low-risk actions.
- Configuration screens for decisions users never want to make.

## System overengineering (for design work)

- A full design-token architecture for a prototype.
- Theming systems when there is one theme.
- Abstraction layers so general they make simple changes hard.

## Return-on-complexity check

Before adding complexity, estimate:

| Question | Value side | Cost side |
|---|---|---|
| Who benefits? | How many users, how often | Who pays (users learning it, team maintaining it) |
| What improves? | Speed, clarity, identity, delight, safety | Accessibility risk, bugs, performance |
| Is there a simpler way to get most of the value? | | |

A custom six-box code input improves little for users and costs paste handling, autofill,
screen reader support, and mobile keyboard behavior. A distinctive background environment
costs some assets and improves identity for every visitor. Spend complexity on the second.
