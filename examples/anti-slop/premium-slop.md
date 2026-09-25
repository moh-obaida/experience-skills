# Worked Example: "Premium" Slop

*Invented teaching example. Where it cites real products, the observations are in the repository's research log (Wise W1–W5, Stripe SR3 (justified gradient); 2026-09-24).*

**Archetype:** marketing, FOCUSED · **Product types:** any landing page or sign-in
**Skills:** anti-slop-ui, composition-repair, visual-identity

## Context

A landing page for a budgeting app, described by its generator as "premium and modern."

## The bad version

- 560 px hero padding around one headline: "Elevate your financial future."
- One word in a violet-to-blue gradient.
- Glass cards over floating blurred blobs.
- 32 px radius on every container and button.
- Tiny uppercase gray eyebrow "✨ INTRODUCING" above every heading.
- Four feature cards with icons in colored rounded squares: "Smart Insights," "Seamless Sync,"
  "Powerful Analytics," "Bank-Grade Security."

## The value question, applied

| Treatment | What useful hierarchy or identity does it create? | Verdict |
|---|---|---|
| 560 px padding | None; pushes proof below the fold on laptops | Remove |
| Gradient word | None; generic signature | Remove; use type scale |
| Glass over blobs | Nothing behind the glass | Remove; solid surfaces |
| 32 px radius everywhere | No shape rationale | Reduce to a small scale tied to the product |
| Eyebrows | No typographic system | Remove |
| Feature names | Unfalsifiable, generic | Rewrite with specifics |

## The better version

- Headline: "See where your money went this month, without spreadsheets."
- Show the product: a real example of a month's breakdown, legible, at scale.
- Proof: "Connects to 3,000+ banks in the UK and EU" (if true), a short demo.
- Identity from the product: ledger-line motif, calm greens used for positive balances only,
  tabular numerals as a signature.
- One primary action; hero sized so the next section starts above the fold on 1366×768.

## Why this works

Each remaining decision does a job. The page says something specific that competitors could not
copy verbatim.

## Canonical question

**What useful hierarchy or identity did these choices create? If none, remove them.**

## User goal and constraints

Visitors understand what the budgeting app does and trust it. Constraints: small team, no photography budget.

## Alternative direction

A long-document composition: a founder's plain explanation with one real screenshot, for a trust-first audience.

## Implementation notes

Remove gradient and glass tokens from buttons and panels; keep at most one brand gradient in the environment; rewrite copy to checkable claims; real product screenshot.

## Verification

`inventory-styles.mjs` and `scan-slop.mjs` before/after; logo test; contrast of all text.

## Failure conditions

Replacing slop with another trend; deleting the brand's one legitimate gradient.

