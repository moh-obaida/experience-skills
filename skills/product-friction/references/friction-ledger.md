# Friction Ledger

The ledger turns an impression ("the product feels hard") into a ranked, fixable list.

## Columns

| Column | Meaning | Scale |
|---|---|---|
| Issue | Specific, located description | Free text with location |
| Lens | Terminology, cognitive load, discoverability, continuity, IA, consistency, first-use, expert | One or two |
| Frequency | How often typical users hit it | Daily · Weekly · Monthly · Rare; and share of users (All · Many · Few) |
| Severity | Effect when hit | Blocks · Slows · Annoys |
| Time cost | Extra time per occurrence | Seconds or steps |
| Cognitive cost | Mental effort, uncertainty, memory load | Low · Medium · High |
| Risk | Chance of error and its cost | Low · Medium · High (describe) |
| Repair | Concrete fix | Free text |
| Theme | Group for root-cause fixing | Free text |

## Ranking

A usable heuristic (not a formula to report as fact):

```
priority = frequency weight × (severity weight + cognitive weight) × risk multiplier

frequency: Daily 4 · Weekly 3 · Monthly 2 · Rare 1   (× 1.5 if All users, × 0.5 if Few)
severity:  Blocks 3 · Slows 2 · Annoys 1
cognitive: High 2 · Medium 1 · Low 0
risk:      High ×1.5 · Medium ×1.2 · Low ×1
```

Use the result to order the list; present the reasoning, not the number.

## Good vs weak entries

Weak: "Navigation is confusing."
Good: "Reports live under 'Insights' in the sidebar but 'Analytics' in the account menu; both open
the same page. Users searching for 'reports' find neither (IA, terminology · Weekly · Many ·
Slows · Medium cognitive · Low risk). Repair: one name ('Reports'), one location; redirect the old
route."

## Themes

After listing, group issues by cause:

- One vocabulary pass fixes many terminology issues.
- One navigation restructure fixes several discoverability issues.
- One persistence change (remember filters, drafts) fixes several continuity issues.

Recommend repairs at the theme level first, then list quick wins.
