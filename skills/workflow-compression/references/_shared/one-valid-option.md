<!-- GENERATED FROM shared/patterns/one-valid-option.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Pattern: One Valid Option

## Problem
A screen asks the user to choose when only one option is actually valid, or all but one are
disabled. The decision is fake but the cost is real.

## When useful
- Upstream data already determines the answer (the source is English, so the language is English).
- Permissions or plan limits leave a single choice.
- The user has exactly one workspace, account, device, or team.

## When NOT useful
- The single option is a consequential commitment the user must acknowledge (terms, payment).
- Showing the choice teaches something important about future options (rare; explain instead).

## Structure
1. Detect that the option set has size one (or one enabled option).
2. Skip the step or collapse it into a one-line statement of the chosen value.
3. Keep a path to change it if that is ever possible ("Using: Personal workspace · Switch").
4. If the other options are unavailable for a reason the user can act on, say so briefly
   where it matters, not as a blocking step.

## Example
Before:
```
Step 2 of 5 — Choose language
( ) English   (disabled: Arabic, French)
[ Continue ]
```
After: Step removed. The summary line reads `Language: English (from source)`.

## Failure modes
- Hiding the choice so completely that users cannot find how to change it later.
- Auto-selecting when the "one option" is an artifact of a bug in filtering.
