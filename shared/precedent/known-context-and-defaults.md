# Precedent: Using What the Product Already Knows

Products that infer or remember context instead of asking, and how they keep inferred values
visible and changeable. Observed 2026-09-24; IDs refer to `research/observations/`.

**How to use this file.** During the known-context inventory in workflow-compression, find the
inference your flow could make and check how these products expose it for correction.

---

### Wise — currency from location
`W2` · https://wise.com/ · rendered + text
- **What works:** source currency defaults to the local currency; a realistic amount is prefilled.
- **How it stays honest:** the currency picker sits right next to the amount.

### Google Flights — origin and trip defaults
`G1` · https://www.google.com/travel/flights · rendered
- **What works:** origin prefilled with the user's city; Round trip / 1 / Economy defaults as compact
  dropdowns; dates left empty because they are genuinely unknown.
- **Lesson:** default what is predictable; leave empty what is truly the user's choice.

### Apple — confirm the region
`AP1` · https://www.apple.com/iphone/ · rendered
- **What works:** detects the region and *asks to confirm* in a dismissible banner.
- **Right when:** the inference changes prices, availability, or legal terms.

### Airbnb / Nike — redirect by region
`ABd1 NK1` · https://www.airbnb.com/ · https://www.nike.com/ · rendered
- **What works:** silent redirect to the regional site.
- **Trade-off vs Apple:** faster, but travelers and expatriates may land in the wrong store.
- **Lesson:** silent inference needs an obvious way back (a visible region switch).

### Airbnb mobile — location in section titles
`ABm3` · https://www.airbnb.com/ · rendered 375×812
- **What works:** "Available in Palm Jumeirah this weekend": location and time inferred and stated.
- **Lesson:** say what you inferred; stated inference is correctable, hidden inference is not.

### IKEA — location as persistent context
`IK1` · https://www.ikea.com/us/en/ · rendered
- **What works:** "Enter ZIP code" and "Select store" live in the header.
- **Lesson:** context that affects many pages belongs in persistent, editable chrome, not in checkout.

### Discord and Cursor — platform-aware downloads
`DI2 CU1` · https://discord.com/ · https://cursor.com/ · rendered
- **What works:** the primary action names the detected OS ("Download for Mac"); alternatives remain.

### Khan Academy — donation presets
`KA1` · https://www.khanacademy.org/ · rendered
- **What works:** preset amounts and frequency instead of a blank amount field.
- **Lesson:** presets are smart defaults for choices users find hard to make from zero.

### Booking.com — currency in the header
`B4` · https://www.booking.com/ · rendered
- **What works:** inferred currency shown with a control to change it.

### GOV.UK Design System — ask once
`UKD2` · https://design-system.service.gov.uk/patterns/question-pages/ · documentation
- **What works:** official guidance to ask for information once per journey and pre-populate or offer
  carried-forward answers.
- **Lesson:** research-backed public services treat redundant questions as a defect.

### ChatGPT — value before sign-in
`CG1 CG3` · https://chatgpt.com/ · rendered
- **What works:** the product works immediately; the sidebar explains what signing in adds.
- **Lesson:** do not ask for an account before the user has a reason.

### RNIB — remembered appearance choice
`RN2` · https://www.rnib.org.uk/ · rendered
- **What works:** picking a Light/Dark/Yellow appearance mode takes one click, applies with no page
  reload, and persists for the rest of the visit — the product doesn't ask again on the next page.
- **Lesson:** a preference stated once should not need restating on every screen in the same session;
  this applies to any per-visit choice (currency, region, density, appearance), not only accessibility
  settings.

---

## Summary rules

1. Infer when the data exists; show the inferred value where the question would have been; make it
   one action to change.
2. Confirm (rather than silently apply) inferences that change price, legal terms, or availability.
3. Persistent context (location, store, currency) belongs in persistent chrome.
4. Leave genuinely unknown values empty; a wrong default is worse than a blank.
