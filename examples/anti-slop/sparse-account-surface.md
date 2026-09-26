# Worked Example: The Sparse Account Surface

*Invented teaching example, not a real product. It composes patterns that recur across many real
account and profile pages; no single real product is depicted.*

**Archetype:** OPERATIONAL · **Product types:** commerce, subscriptions, any signed-in app with an account area
**Skills:** anti-slop-ui, critical-review, composition-repair

## Context

A returning customer with no order history yet opens their account page from the header menu.
Global navigation (visible on every page) already includes a cart icon with an item-count badge.

## The bad version

```
┌──────────────────────────────────────────────────────────────┐
│ [Logo]   Shop   Categories   Search        🛒(0)  ⋮  Sam      │  ← global nav, cart already here
├──────────────────────────────────────────────────────────────┤
│ Your private space, Barth.                                     │
│                                                                │
│ [        Open cart        ]                                  │  ← duplicates the header icon
│                                                                │
│  ┌───────────┐  ┌────────────────┐  ┌─────────────┐          │
│  │  0         │  │  0              │  │  0           │          │
│  │  Cart      │  │  Reward credit  │  │  Messages    │          │
│  └───────────┘  └────────────────┘  └─────────────┘          │
│                                                                │
│  Rewards                                                      │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ You haven't earned any rewards yet.                     │  │
│  │                                                          │  │
│  │                                                          │  │
│  │                    (large empty area)                    │  │
│  │                                                          │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                                │
│  ✓ Access to email                                            │  ← pill, looks tappable, isn't
│                                                                │
│  [           Sign out           ]                             │  ← same weight as primary actions
└──────────────────────────────────────────────────────────────┘
```

## Bad AI instincts

> "This looks clean and modern — three metric cards give it a dashboard feel." (wrong: three
> zero-value cards are not a dashboard feel, they are three empty containers)

> "Add a friendly personalized greeting to make it feel warm." (wrong: warmth wasn't the missing
> ingredient; specificity was, and the truncated name makes it read as generated, not warm)

> "The Sign out button is a standard account-page element, no issue." (wrong: standard placement
> does not mean standard *prominence* — its weight here matches the page's primary actions)

## Correct analysis

Running each element through `control-necessity.md`'s core questions:

- **"Open cart" button** fails "is it already available elsewhere?" — the header cart icon with a
  count badge is visible on this exact screen. The button adds a second, larger way to do the
  identical thing and adds no scope (it doesn't show cart contents, a total, or a next step).
- **Three metric cards, all reading 0** fail "is this filling space because the layout expects
  something here?" They were sized for an account with cart items, reward credit, and messages; for
  this account today, all three report absence. Three card-shaped containers for one fact ("nothing
  new right now") outweigh the fact they contain.
- **Rewards panel** repeats the same failure at the container level: a bordered box sized for a
  populated rewards list, holding one sentence. The border and empty area both imply "content
  usually goes here" even though, for this account, it structurally does not yet.
- **"Access to email ✓" pill** fails "does it imply interactivity it doesn't have?" The checkmark
  and pill shape match the product's toggle language elsewhere, but nothing happens on tap. It's a
  fact wearing a control's clothing.
- **"Sign out" at primary-button weight** fails the frequency-vs-prominence test — of all actions
  on this page, sign-out is used least often, yet it has the same visual weight as (or more than)
  anything the user is actually here to do.
- **"Your private space, Barth."** is a `product-copy.md` problem layered on top:
  a generic possessive phrase ("your private space") that says nothing about the account, combined
  with a truncated name that exposes the personalization as automated rather than considered.

## The better version

```
┌──────────────────────────────────────────────────────────────┐
│ [Logo]   Shop   Categories   Search        🛒(0)  ⋮  Sam      │
├──────────────────────────────────────────────────────────────┤
│ Account                                                       │
│                                                                │
│ No items in your cart · No reward credit yet · No new messages│
│                                                                │
│ Rewards                                                        │
│ Earn credit on your first order. [ See how rewards work ]      │
│                                                                │
│ Email access: granted                                          │
│                                                                │
│ Orders    Addresses    Payment methods    Settings             │
│                                                                │
│                                                    Sign out     │
└──────────────────────────────────────────────────────────────┘
```

The cart button is gone (the header already owns that job). Three cards collapsed into one line
sized to its actual content. The rewards panel shrank to match what it currently holds, with a link
to the one action that changes the state (earning rewards) rather than a container waiting to be
filled. The email-access pill became plain status text. Sign out moved to a low-weight position
consistent with how rarely it's used, while the account's real navigable sections (Orders,
Addresses, Payment methods, Settings) — the things a returning customer actually opens this page
for — got the visual priority instead.

## Why this works

Every remaining element passes the "would the user miss it if it were gone" test, and every
element's visual weight now roughly tracks how often it's used. The page answers "what can I do
here that I can't do from the header?" instead of restating the header and inventing metrics to
fill the space below it.

## User goal and constraints

The user opened Account to check or change something about their account — order history, an
address, a payment method — or to sign out on a shared device. Constraints: many accounts will have
genuine order history, reward credit, and messages; the design must scale up to a dense account
without the collapsed summary line becoming a second dashboard-card problem in reverse.

## Alternative direction

For a product where reward credit is a major engagement driver, a dedicated rewards page (not the
account overview) is the right place for a fuller rewards module — the account overview stays a
thin summary with a link out, rather than trying to be both the summary and the destination.

## Implementation notes

Render the summary line from actual cart/reward/message counts; hide any clause once there are two
or more populated cells needing more space than a single line, and let it grow into a short list
rather than reintroducing card containers by default. Size the rewards panel to its content (a
one-line prompt when empty, a real module when there's history). Replace the access pill with a
component that is either plain status text or a real, wired control — never a static pill styled as
one. Give Sign out a fixed low-emphasis position (menu, footer-adjacent) regardless of how much
other content is on the page.

## Verification

Render with an empty account (this example), a dense account (order history, reward balance,
unread messages), and a mid-density account (one order, no rewards yet). Confirm the summary line
and rewards panel both resize correctly at each density and that Sign out's visual weight doesn't
change relative to the primary sections as content density changes. Check that the email-access
status element has no dead click handler.

## Failure conditions

The zero-value cards return because "the dashboard looks empty without them"; the cart button comes
back because "users might not see the header icon"; Sign out creeps back up in weight during a
later redesign because "it's an important action."

## When this lesson does not apply

A cart-recovery page whose entire purpose is getting the user back to an abandoned cart should have
a prominent, scoped cart action — there, it isn't a duplicate of the header icon, it's the page's
reason to exist. A shared or kiosk device where signing out after every session is the expected,
frequent action justifies a prominent Sign out.

## Universal analogues

A settings page with three "0 integrations connected" cards instead of one summary line; a profile
page with an "Edit profile" button duplicating an already-visible pencil icon on the avatar; an
admin panel with a "Log out" button sized like "Save changes."

## Canonical rule

**Every element's existence, size, and visual weight should be justified against what's already on
screen and how often it's actually used — not against what the layout template expects to fill.**
