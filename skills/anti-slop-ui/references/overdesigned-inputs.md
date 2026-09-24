# Overdesigned Inputs

## Recognize it
- Segmented one-box-per-digit code inputs
- Floating labels that animate into the border
- Inputs with gradient borders, glow on focus, or icons inside for decoration
- Custom selects and date pickers replacing native ones without need
- Sliders for values users know precisely

## Why it is slop
It is personality applied to the place users need speed and reliability. Custom inputs often break
paste, autofill, IME, screen readers, and mobile keyboards. See the interaction-design skill's
custom-control-cost reference if installed.

## Canonical case
A game join page with six ornate code boxes on a blank background. The better design is a single
large, standard input with the right keyboard and paste support, inside a strong product
environment. See `references/_shared/join-code-page.md`.

## Repair
- Standard inputs with clear labels above, good sizing, correct `type`/`inputmode`/`autocomplete`.
- Move expressiveness to the environment.
- Keep focus rings strong and brand-colored if desired.
