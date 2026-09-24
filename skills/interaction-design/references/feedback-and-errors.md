# Feedback and Errors

Every action should answer "did it work?" quickly and honestly.

## Feedback timing

| Delay | Feedback |
|---|---|
| < 100 ms | Visual state change of the control (pressed, toggled) |
| 100 ms – 1 s | Busy state on the control (spinner inside the button, disabled to prevent double submit) |
| 1–10 s | Progress indicator with context |
| > 10 s | Consider background work (state-design, workflow-compression) |

## Feedback forms

- **In place:** the value changes, the item moves, the checkbox checks. Best when visible.
- **Toast:** confirmation for actions whose effect is off-screen, and for undo.
- **Inline message:** near the control, for errors and warnings.
- **Page-level banner:** for system-wide states (offline, maintenance).

Avoid toasts for errors that need action; put errors where the user will fix them.

## Disabled controls

Disabled controls are often confusing: they give no reason, are skipped by keyboard focus, and
can be low contrast.

Better options:

- Keep the control enabled and explain on activation ("Add at least one question to host").
- If disabled, show the reason adjacent or via an accessible description.
- Hide only when the action can never apply in this context.

## Error messages

A useful error message says:

1. What happened (in plain language)
2. Why, if known and helpful
3. What the user can do (a specific next step or action)

"Something went wrong" says none of these. Distinguish user-fixable errors, transient errors
(retrying), and terminal errors. See the state-design skill.

## Mode errors

When the same control behaves differently in different modes, users err. Minimize modes, make
the current mode visible, and prefer quasi-modes (hold a key) or explicit, labeled states.
