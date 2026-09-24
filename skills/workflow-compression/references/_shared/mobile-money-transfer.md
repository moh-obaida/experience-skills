<!-- GENERATED FROM examples/full-product/mobile-money-transfer.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: Mobile Money Transfer

**Archetype:** TRANSACTIONAL · **Product types:** banking, payments, wallets
**Skills:** workflow-compression, interaction-design, state-design

## Context

A user sends money to a saved contact from their only current account, in their home currency.
They do this weekly.

## The bad version

```
1. Select account (only one current account) → Next
2. Choose transfer type: domestic / international (recipient is domestic, saved) → Next
3. Choose currency (home currency only for domestic) → Next
4. Select recipient → Next
5. Enter amount → Next
6. "Please confirm you want to continue" → Next
7. Review → Confirm
8. Enter PIN
9. "Transfer submitted" → Home
```

## Correct analysis

- F2 UNNECESSARY CHOICE ×3: account, type, currency are determined.
- F5 CONFIRMATION TAX: step 6 is a harmless intermediate confirmation.
- The real safeguard (review + authentication) is diluted by the fake one.
- F9 DEAD END: no receipt link or "send again."
- State: "submitted" does not say whether money has moved.

## The better version

```
1. Send money → Recipient: [recent: Mum, Sam, Landlord] or search
2. Amount: [ £ 50.00 ]   From: Everyday account (only account)   Arrives: instantly
3. Review:  £50.00 to Mum (Sort 12-34-56 · Acc ••7890) · Fee £0 · Arrives now
            [ Send £50 ]  → biometric/PIN
4. Sent ✓  £50.00 to Mum · Reference 8H2K · [Share receipt] [Send again]
   (If pending: "Processing — we'll notify you when it arrives." Never "failed" while unknown.)
```

## Measurements

```
Before: 9 screens · 5 decisions (3 one-option) · 2 confirmations (1 harmless) + auth
After:  4 screens · 2 decisions (recipient, amount) · 1 strong review + auth
Preserved: explicit final review showing amount, recipient details, fee, timing; authentication
```

## Why this works

Compression removed fake decisions and a fake confirmation; it did **not** remove the real
safeguard. The remaining confirmation is clearer because it is the only one.

## Canonical rule

**Workflow compression must preserve safety.**
