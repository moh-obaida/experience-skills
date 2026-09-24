# Final Slop Gate

Run this before presenting any generated or revised UI, and at the end of any anti-slop review.
It applies the shared gate (`references/_shared/anti-slop-gate.md`) with reporting rules.

## Procedure

1. Render the result if possible (at least primary size and one small size).
2. Go through each question in the shared gate.
3. For each "yes," either:
   - state the job the treatment does here (justified), or
   - remove or replace it (fixed), or
   - list it as accepted by the user (accepted), or
   - list it as remaining (open).
4. Run the logo test on the main surface.
5. Re-read all copy for generic phrases.
6. Check your own summary for unearned praise ("clean," "modern," "sleek," "premium").

## Report format

```
Slop gate — <surface> (rendered 1440×900 and 390×844)
Justified:
  - Radial gradient behind task area: represents stage light (brand world)
Fixed:
  - Gradient on all buttons → solid primary
  - 4 stat cards on empty home → removed; continue row + templates
  - "Unlock your classroom's potential" → "Turn any lesson into a quiz game in minutes"
Open:
  - Pricing page still uses bento tiles (out of scope)
Not verified:
  - Dark mode (no toggle available in build)
Logo test: partially recognizable (team colors, hex motif); type voice still generic
```

## Do not

- Claim the gate passed without running it.
- Mark something "justified" with a non-job ("looks modern," "adds polish").
- Close the report with praise.
