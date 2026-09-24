# Progressive Disclosure

Show the common path first. Reveal advanced options when they are needed. Do not punish
beginners with expert controls, or experts with beginner workflows.

## Deciding what is "common"

- Use real usage data where available (which options are changed from default, how often).
- Without data, reason from the goal: which options must every user consider to reach the
  outcome? Everything else is advanced.

## Disclosure mechanisms

| Mechanism | Good for | Watch for |
|---|---|---|
| "More options" expander | A handful of advanced fields | Hiding something most users need |
| Contextual reveal | Options that only apply after a choice | Layout jumps |
| Sensible defaults + summary + "Change" | Settings users rarely alter | Summaries users cannot understand |
| Separate advanced screen/settings | Rare, expert configuration | Splitting related settings |
| Keyboard shortcuts, command palette | Power features | Being the only access path |
| Templates and presets | Complex configurations | Too many templates to choose from |

## Rules

- Advanced options must be discoverable: a visible, labeled entry point.
- Disclosed state should persist for users who always expand it.
- Validation errors in hidden sections must reveal the section.
- Disclosure is not an excuse to keep a bad option; remove options nobody should use.

## Anti-patterns

- **Everything visible because flexibility sounds impressive.** Twenty options on a create
  dialog where three matter.
- **Nothing visible because minimal looks clean.** Hiding the one option most users need.
- **Nested disclosure chains.** Advanced → More → Expert.

## Measuring

Count decisions presented by default before and after. The target is fewer *presented*
decisions for the common case while keeping every *meaningful* decision reachable.
