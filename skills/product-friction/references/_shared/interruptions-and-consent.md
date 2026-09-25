<!-- GENERATED FROM shared/precedent/interruptions-and-consent.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Precedent: Interruptions, Overlays, and Consent

How products interrupt the first viewport (modals, banners, consent, promotions) and which patterns
respect the user's task. Observed 2026-09-24; IDs refer to `research/observations/`.

**How to use this file.** When auditing friction (interruption tax) or designing consent and
promotions, compare the proposal with these. Cookie choices here matter to trust and, in many
jurisdictions, to law; this file records observed practice, not legal advice.

---

### Booking.com — membership modal over search
`B1` · https://www.booking.com/ · rendered
- **What happens:** a sign-in/membership modal covers the search on arrival.
- **Cost:** the primary task is blocked by a promotion before the user has done anything.

### IKEA — stacked overlays
`IK4` · https://www.ikea.com/us/en/ · rendered
- **What happens:** a cookie banner and a chat invitation appear together over the first viewport.
- **Lesson:** count simultaneous overlays; more than one at arrival is an interruption stack.

### PlayStation — sign-in popover
`PS3` · https://www.playstation.com/en-us/ · rendered
- **What happens:** a sign-in prompt appears over the page on first visit.

### Airbnb — modal on desktop vs toast on mobile
`ABd2 ABm4` · https://www.airbnb.com/ · rendered
- **What happens:** the same message (total prices include fees) appears as a blocking modal on
  desktop and as a small floating pill on mobile.
- **Lesson:** informational announcements can be non-blocking; the mobile version proves it.

### Codecademy — countdown banner
`CC1` · https://www.codecademy.com/ · rendered
- **What happens:** a live countdown for a sale sits above navigation for the whole visit.
- **Cost:** persistent urgency in the most valuable band; use only when the deadline is real.

### Spotify mobile — upsell first
`SPm1 SPm2` · https://open.spotify.com/ · rendered 375×812
- **What happens:** a Premium card is the first element, and a cookie sheet covers the lower third.
- **Good detail:** the post-trial price is stated next to the trial offer.

### The Guardian — full consent wall
`GU1` · https://www.theguardian.com/international · rendered
- **What happens:** a full-page consent dialog; "No, thank you" has equal visual weight to accept.

### Fair consent: equal-weight reject
`UKm1 SR4 WF2 MZ3 KA3 OW3` · GOV.UK, Stripe, Webflow, Monzo, Khan Academy, Our World in Data · rendered
- **What works:** reject is offered with the same size and prominence as accept; GOV.UK and Monzo
  explain in plain language.
- **Lesson:** equal weight for accept and reject is achievable at every scale of organization.

### Canva — no one-click reject
`CA3` · https://www.canva.com/ · rendered
- **What happens:** "Accept all cookies" and "Manage cookies"; rejecting takes more steps.
- **Lesson:** asymmetric choices push users; count the steps for each option.

### Grafana — duplicated error
`GF3` · https://play.grafana.org/ · rendered
- **What happens:** the same not-found error appears as a page state and a toast at the same time.
- **Lesson:** one message per event; duplicates read as two problems.

### Cloudflare — emergency path instead of interruption
`CF2` · https://www.cloudflare.com/ · rendered
- **What works:** "Under attack?" is a permanent navigation link, not a popup.
- **Lesson:** urgent paths belong in persistent, predictable places.

---

## Summary rules

1. Nothing should block the primary task on arrival unless it is legally required.
2. Informational messages can be non-blocking (toast, inline banner).
3. Count overlays at first paint; one is a lot.
4. Offer accept and reject with equal weight and equal steps.
5. Urgency and promotion bands cost the most valuable pixels; justify them.
