# Workflow Friction Taxonomy

Canonical names for the ways a workflow wastes the user's time. Use these names in findings so
reports are comparable across tasks.

| Code | Name | Definition | Typical signal | Typical repair |
|---|---|---|---|---|
| F1 | REDUNDANT INPUT | The user supplies information the system already has | Re-entering email, re-choosing language, re-selecting the current item | Carry forward; prefill; infer and show |
| F2 | UNNECESSARY CHOICE | A decision with only one meaningful answer | Picker with one valid option; "Continue" screens with no real alternative | Auto-select and display; remove the step |
| F3 | REPEATED CONFIGURATION | The same setup performed repeatedly | Same filters, export settings, or game options every session | Remember last-used; saved presets; smart defaults |
| F4 | NAVIGATION TAX | A tiny operation requires a route or screen change | Rename via settings page; toggle via edit modal | Inline edit; contextual controls |
| F5 | CONFIRMATION TAX | A harmless or reversible action asks permission | "Are you sure?" on archive, reorder, or status change | Act immediately with undo |
| F6 | SERIAL WORK | Bulk-capable work done one item at a time | Tagging 30 files individually | Multi-select and bulk actions |
| F7 | MEMORY FAILURE | The software forgets useful context | Filters reset; drafts lost; scroll position lost; wizard restarts | Persist state; continue where you left off |
| F8 | WAITING TAX | The user babysits background work | Must keep a tab open during a 3-minute job | Background job with status and notification |
| F9 | DEAD END | No useful next action after an outcome | "Success!" with only a Home button | Surface the likely continuation |
| F10 | EXPERT TAX | Frequent users are forced through the beginner path | No shortcuts, no direct entry, no defaults | Shortcuts, remembered choices, compact power controls |

## Secondary friction types

Less common, still worth naming:

- **LOOKUP TAX:** the user must leave to find information needed to proceed (an ID, a code, a price).
- **RECOVERY TAX:** the product causes an error the user must fix (lost input after validation failure).
- **SCOPE RESTATEMENT:** the user must specify context already implied by the current selection
  or state (for example "Correct for Team A" when Team A is the one answering). Often a
  special case of REDUNDANT INPUT with its own interaction repair: scoped controls.
- **FORMAT TAX:** the user must match a rigid format the software could normalize
  (phone numbers, dates, codes with dashes).

## Severity guidance

Severity is frequency × cost × risk:

- **Frequency:** how often the step occurs per user per week, and how many users hit it.
- **Cost:** actions, decisions, and seconds per occurrence.
- **Risk:** probability and cost of error the friction causes (or prevents).

A small cost on a high-frequency path often outranks a large cost on a rare path.

## Not friction

Do not flag as friction:

- A confirmation before irreversible, costly, or public actions
- The step where the user's judgment is the value
- Legally required disclosure or consent
- One-time orientation for a genuinely unfamiliar concept
