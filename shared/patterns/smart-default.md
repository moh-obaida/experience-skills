# Pattern: Smart Default

## Problem
Users face blank fields or neutral defaults for values the product could reasonably predict,
and pay a decision for each one.

## When useful
- The most likely value is predictable from context, history, or data (locale, last choice,
  source file language, account currency, the team's usual settings).
- The field is filled often.
- A wrong default is cheap to notice and change.

## When NOT useful
- The value carries legal, financial, or safety weight and must be a conscious choice
  (consent, payment amount, recipient of money).
- A default would nudge users toward an option that benefits the business at their expense
  (pre-checked marketing opt-ins, pricier plans).
- The prediction is weak and a wrong default would go unnoticed.

## Structure
1. Rank possible sources: explicit user setting → last used value → context inference →
   organization default → sensible global default.
2. Prefill with the best available value.
3. Show *why* when the source is non-obvious ("From your last export").
4. Make changing it one action away.

## Example
```
Export report
  Format:  CSV  (last used)          [change]
  Range:   This month                [change]
  [ Export ]
```
Instead of three blank dropdowns and a disabled Export button.

## Failure modes
- **Silent defaults** with consequences the user never sees.
- **Sticky mistakes:** remembering an accidental choice forever. Remember deliberately made
  choices; offer a reset.
- **Dark defaults:** defaults that serve the business, not the user.
