# Interruptions, Modes, Context Switches, Status, and Duplicates

Load for F11 mode tax, F12 interruption tax, F13 context-switch tax, F14 hidden-status tax, and
F15 duplicate-object tax. These costs rarely show up in click counts, which is why they survive
"simplification" work. Count them separately in the flow map.

## F11 Mode tax

**Signal:** the same click or key does different things depending on a mode the user must remember
(edit vs view, select vs draw, host vs player).

**Repair ladder:** remove the mode (edit in place) → make the mode unmistakable (persistent label,
color of the whole region, cursor) → use quasi-modes that last only while held → guard destructive
actions in the wrong mode.

**Count:** each time the user must check or switch mode is a decision.

## F12 Interruption tax

**Signal:** something covers or blocks the task: arrival modals, sign-in walls before value,
stacked cookie + chat + promo overlays, countdown banners, surveys mid-task.

**Measure:** at first paint, count overlays and the share of the first viewport they cover; count the
actions needed to reach the task.

**Repair:** nothing blocks the primary task unless legally required; announcements become
non-blocking (inline notice, toast); promotions wait until after the outcome; consent offers
accept and reject with equal weight and equal steps.

**Precedent:** `references/_shared/interruptions-and-consent.md` (Booking arrival modal, IKEA
stacked overlays, Airbnb modal on desktop vs toast on mobile, GOV.UK equal-weight consent).

## F13 Context-switch tax

**Signal:** the user leaves the flow to fetch something: a code from email, an ID from another page,
a value from a spreadsheet, a colleague's name from chat.

**Repair:** bring it in (one-time-code autofill, inline lookup, pickers with search and recents, paste
that accepts messy formats), or eliminate the need (magic links, stored references).

## F14 Hidden-status tax

**Signal:** after acting, the user cannot tell whether it worked, is pending, or failed; data is shown
without freshness.

**Repair:** visible state at the object (saved, sending, failed with retry), "last updated" for data,
honest pending states for background work. Coordinate with state-design if installed.

## F15 Duplicate-object tax

**Signal:** two concepts do the same job (templates and presets, folders and collections, drafts in two
places), or copies drift apart.

**Repair:** merge into one concept with views; if both must exist, make the difference explicit and
the conversion one action. Coordinate with product-friction (concept model) if installed.

## Counting format

```
Hidden costs: 2 overlays at arrival (38% of first viewport) · 1 context switch (email for code)
              · 1 mode check · status invisible after save
```
