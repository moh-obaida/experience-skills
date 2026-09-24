# Navigation Tax (F4)

A tiny operation that requires a route change, a new screen, or a modal. Each navigation costs
time, orientation, and often state (scroll, selection, filters).

## Common cases

- Rename through Settings → General → Name → Save
- Change status via an edit page
- View a detail that could be a hover card or an expandable row
- Opening a full-page editor to fix a typo
- Modal to change a single field

## Repair options

| Operation | Instead of navigation |
|---|---|
| Single-field edit | Inline edit |
| Status change | Inline menu or segmented control on the item |
| Quick view | Expandable row, side panel, or popover |
| Small create | Quick-add row or inline form |
| Related action | Context menu on the item |

## When navigation is right

- The destination has substantial independent content or tasks.
- Users benefit from a shareable, bookmarkable URL.
- The operation needs focus and space (composing a long message, editing a complex object).

## Preserving context when navigating

If navigation stays, protect the context:

- Restore scroll, filters, and selection on return.
- Use side panels or split views for list → detail patterns in desktop apps.
- Keep the back action predictable.

## Counting

Record navigations separately. A flow that goes from 4 navigations to 1 is a measurable
improvement even if action counts are similar.
