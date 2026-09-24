# Reporting

## Matrix summary

```
Responsive validation — /join (rendered, Playwright/Chrome, 2026-09-24)

Size            Overflow  Collisions  Small targets  Chrome %  Coverage  Verdict
1920×1080       –         –           –              6%        11%       Dead space (see composition)
1440×900        –         –           –              7%        14%       OK layout; low coverage
1366×768        –         –           –              17%       18%       Join button at y=702 (visible)
390×844         –         –           1              9%        41%       Small "Help" link 18×18
360×800         +24px     1           1              10%       44%       FAIL: code hint overflows
1280×800 @200%  –         –           –              24%       52%       Header covers 24% of height
RTL 1440×900    –         –           –              7%        14%       Back arrow not mirrored

Not tested: landscape phone (no device), real Arabic content, screen reader.
```

## Defect entries

```
1. R1 HORIZONTAL OVERFLOW — 360×800 [E2 measured]
   Culprit: .code-hint (width 384px) — fixed width in px
   Fix: max-width: 100%; allow wrap
2. R5 STICKY OBSTRUCTION — 1280×800 @200% [E2 measured]
   Header is 24% of viewport height at 200% zoom
   Fix: collapse header on scroll or below 500px effective height
3. RTL — back arrow points left in RTL [E1 rendered]
   Fix: mirror directional icon via [dir="rtl"] transform or logical icon set
```

## Principles

- Every defect has a size/condition, an evidence level, and a suggested fix.
- Rank by user impact (blocked action > overflow > cosmetic).
- Say what was not tested and why.
- Link or attach screenshots when they were captured (do not commit third-party screenshots to
  public repos without permission).
