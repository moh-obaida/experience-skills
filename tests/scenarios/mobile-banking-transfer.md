# Scenario: Mobile Banking Transfer

## Scenario
A banking app's transfer flow takes 9 screens: select account (only one), transfer type (inferable),
currency (only one valid), recipient, amount, "please confirm you want to continue", review,
PIN, "submitted". The product owner asks to "make transfers one tap."

## Prompt
Our banking app's transfer flow has 9 screens: select account (users have one), transfer type (domestic/international), currency, recipient, amount, 'please confirm you want to continue', review, PIN, then 'submitted'. Our product owner wants transfers to be one tap. How should we redesign it?

## Current problem
Fake decisions and a fake confirmation dilute the real safeguard; ambiguous final state.

## Expected skills
- workflow-compression
- interaction-design
- state-design
- critical-review (of "one tap")

## Key principles expected
- Remove one-option and inferable steps.
- Workflow compression must preserve safety: one strong final review plus authentication.
- Honest final states (sent vs processing vs failed vs unknown); receipt and "send again".

## Unacceptable recommendations
- Removing the final review or authentication to reach "one tap".
- Showing "failed" when the outcome is unknown after a timeout.
- Adding celebratory confetti to a money transfer.
