<!-- GENERATED FROM shared/taxonomies/interaction-frequency.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Interaction Frequency

How often an interaction happens should shape how it is designed. The same control deserves
different treatment at different frequencies.

## Frequency bands

| Band | Rough frequency | Examples | Design priority |
|---|---|---|---|
| CONSTANT | Many times per session | Navigating a list, sending a message, marking correct/wrong, moving a card | Zero friction, keyboard/gesture shortcuts, no confirmations, instant feedback |
| ROUTINE | Once or a few times per session | Creating an item, filtering, exporting, starting a game | Smart defaults, remembered settings, one-screen flows |
| OCCASIONAL | Weekly or monthly | Changing settings, inviting someone, reviewing billing | Clarity and discoverability over speed |
| RARE | Once or almost never | Signup, account deletion, migration, initial setup | Explanation, safety, reassurance |

## Consequence bands

| Band | Examples | Design priority |
|---|---|---|
| TRIVIAL | Sort order, view toggle, collapse panel | Just do it; remember it |
| REVERSIBLE | Archive, move, rename, status change | Do it with undo |
| COSTLY | Send to many people, publish, charge a card | Clear preview and explicit commit |
| IRREVERSIBLE | Permanent deletion, money transfer, legal submission | Explicit, specific confirmation; consider typed confirmation for extreme cases |

## Combining the two

|  | TRIVIAL | REVERSIBLE | COSTLY | IRREVERSIBLE |
|---|---|---|---|---|
| CONSTANT | Instant, shortcut | Instant + undo | Fast commit with strong preview; consider batching | Rare combination; question the design |
| ROUTINE | Instant | Instant + undo | Preview + commit | Specific confirmation |
| OCCASIONAL | Instant | Undo or light confirm | Preview + commit | Specific confirmation with consequence stated |
| RARE | Instant | Light confirm acceptable | Preview + commit + explanation | Strong confirmation, possibly typed |

## Applying it

- Place CONSTANT actions where the hand or eye already is (inline, contextual, keyboard).
- Put OCCASIONAL and RARE actions behind a menu or settings; do not let them crowd CONSTANT ones.
- Never let a RARE action's safety pattern leak into a CONSTANT path ("Are you sure?" on every move).
- For live-control surfaces, CONSTANT actions need large, well-separated targets because
  operators act under time pressure.
