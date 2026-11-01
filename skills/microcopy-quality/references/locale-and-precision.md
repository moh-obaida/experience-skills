# Locale and Precision: Languages, Money, and Legal Text

## Write for each language, not from one

Arabic and English strings are not translations of each other's sentence shape. Write or review
each in its own idiom, then compare meaning, not wording.

| Concern | Check |
|---|---|
| Direction | The root has the right `dir` and `lang` for the active locale; text and mixed-direction fragments render in logical order |
| Mixed content | Codes, room IDs, emails, URLs, file paths, and commands inside Arabic text stay left-to-right and are isolated (`dir="ltr"` or bidi isolation) so punctuation does not jump |
| Numerals | Match the locale convention the product has chosen (Arabic-Indic or Western digits) and use it consistently in the same view; do not mix without reason |
| Punctuation and quotes | Arabic comma, question mark, and quotation marks in Arabic text; no stray Latin punctuation at the wrong end |
| Plurals | Arabic has six plural categories; a string that is correct for "1" and "many" in English is not enough. Use the platform's plural rules, not string concatenation |
| Gender and address | Choose forms consistent with the product's voice; avoid forms that wrongly assume a user's gender |
| Expansion | German and Finnish expand; Arabic often contracts or changes line height. Check wrapping and truncation at the longest and shortest |
| Fonts | Latin-only fonts show fallback glyphs in Arabic; check weight, joining, and line height |
| Untranslated fragments | A Latin sentence inside an Arabic page is a gap; a code or brand name is not |
| Terminology | One term per concept per language; the glossary in one language does not leak a different term in another |

Translation that is grammatically valid but unnatural: an interface string that reads as if it was
translated word for word, uses an unusual register for the product, or picks a rare synonym for a
common UI term. Ask a fluent reader, or compare with how established products in that language
phrase the same action. When no reader is available, say the naturalness is unverified.

## Rendering check

Render the changed states in each supported language and direction, in the same view and size. Look
for: mirrored layout where the content is not mirrorable (media controls, charts), punctuation at the
wrong end, clipped or wrapped labels, numerals that jump, and icons that point the wrong way.

## Money, billing, and subscription

Pricing and billing text is a statement of terms. Treat precision as a requirement.

- State amount, currency, billing period, trial length, renewal date, taxes or "excluding tax," and
  how to cancel, where the decision is made. Keep these in one place and link, rather than
  repeating prose in every tier.
- A promotional phrase ("save big") never replaces a number.
- A rewrite must not change a number, date, condition, or the order of consequence. If the source
  says "renews on 5 Nov at 12 USD per month," the new text says the same, with the same
  currency and period.
- Cancelling, downgrading, and deleting wording must state what the user keeps and loses and when.
- If a claim cannot be verified from the product or the plan data (a discount, a limit), do not
  write it; mark it open.

## Legal and compliance

Do not rewrite the substance of terms, consent text, privacy disclosures, regulatory notices, or
medical and safety warnings. You may propose clearer presentation (placement, summary above the
full text, plain-language heading) and flag text for review by the owner. Required disclosures stay
visible at the point the law or policy needs them.

## Technical identifiers

Identifiers are right for a reader who will act on them: a support agent, an administrator, a
developer, a person pasting a reference into a ticket. Keep them as a secondary line ("Reference:
7F3A-91"), not the headline of an ordinary validation message. In developer and diagnostic products,
authentic system output can be the content; explain it, do not replace it.

## Accessibility of text

- Control names state the action; icon-only controls have accessible names in every language.
- Error text is programmatically associated with its field and announced.
- Do not rely on color or position alone ("the red field").
- Keep link text meaningful out of context.

## Tone and register by context

Match the situation: a playful classroom game can be playful in its join prompt and plain in its
error; a billing screen is factual even in a friendly brand. Keep the product's voice, and keep the
register stable across languages: a casual English string should not become a stiff formal Arabic one
without a reason.
