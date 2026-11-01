<!-- GENERATED FROM shared/philosophy/product-copy.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Natural Product Copy

Prefer visible consequence, exact changed state, the next action, and concise interpretation over
prose that narrates obvious UI. Preserve authentic machine or system feedback when it helps the
user understand; explain it rather than replacing it with generic success or error copy.

Interface text is a design material with the same standard as layout and color: every string
should earn its place and sound like a person on the product team wrote it for this exact moment,
not like a model completing the statistically likely next phrase for "app copy." This module
covers what makes copy read as generated versus considered, and how the job of a string changes by
context. For the structure of empty-state strings specifically (headline, supporting line, action
label), see `empty-state-copy.md` — this module covers the other eleven copy
types and the cross-cutting naturalness problem.

## Copy types

Interface strings are not one thing. Using marketing register in a system-status line, or
transactional bluntness in an onboarding welcome, is a mismatch even when each sentence is
individually well-written.

| Type | Job | Register | Common mismatch |
|---|---|---|---|
| Interface copy | Label a control or destination | Shortest accurate term | Cute or clever labels that slow recognition ("Your Command Center" for "Dashboard") |
| Marketing copy | Persuade someone who hasn't decided yet | Benefit-led, some elevation earned | Leaking into signed-in product surfaces where the user already committed |
| Instructional copy | Tell the user how to do a specific thing | Plain, sequential, minimal | Explaining what's visually obvious; explaining before it's needed |
| Confirmation copy | State what will happen and let the user proceed or back out | Specific about the consequence | Generic "Are you sure?" with no stated consequence |
| Error copy | State what went wrong and what to do about it | Calm, causal, actionable | Blaming the user; showing a code with no plain explanation |
| Empty-state copy | State the state and the one action that fills it | See `empty-state-copy.md` | Cheerful filler that doesn't say why it's empty |
| Transactional copy | Confirm a completed action with the detail that matters | Factual, receipt-like | Celebratory language for routine transactions |
| Onboarding copy | Orient a new user toward the first real action | Brief, momentum-building | Multi-screen tours explaining features the user hasn't needed yet |
| Notification copy | Say what changed, specifically | Front-load the specific fact | Vague ("Something happened") or repeat-of-app-name filler |
| Destructive-action copy | Make the consequence and its reversibility unambiguous | Concrete about what is lost and whether it's recoverable | Soft language ("archive" wording for a hard delete) that hides irreversibility |
| Recovery copy | Get the user back to a working state after a failure | Direct next step, no blame | Apologizing at length instead of stating the fix |
| System-status copy | Report current state truthfully, including uncertainty | Plain, timestamped where relevant | Hiding staleness or degraded status behind cheerful copy |

## Generic AI phrases

These phrases are common in generated interface copy because they are high-probability completions
for "welcoming app copy," not because they communicate something specific to the product. Each one
is a symptom, not an absolute ban — the fix is to ask what this specific product, for this specific
user, at this specific moment, actually needs to say.

| Phrase | Why it fails | What it's standing in for | Fix pattern |
|---|---|---|---|
| "Your private space" | Says nothing about what the space contains or does | An account or workspace heading | Name what's actually there: "Account," "Your orders," or a specific first-name greeting if the context earns it |
| "Everything you need, all in one place" | True of almost any product; communicates nothing distinguishing | A value proposition the writer hasn't found yet | State the one or two things the product actually consolidates, by name |
| "Unlock your potential" | Vague aspiration with no connection to what the click does | A CTA label | State the actual outcome of the click: "Start your first project," "Compare 3 plans" |
| "Seamlessly manage" | "Seamlessly" describes no observable property | A feature description | Drop the adverb; state what changes for the user ("Manage billing and seats from one page") |
| "Elevate your experience" | Not a claim that can be verified or falsified | A benefit statement | Name the concrete before/after |
| "Get started on your journey" | Borrowed travel metaphor, adds no information | Onboarding CTA | "Create your first [object]" |
| "Welcome to your personalized dashboard" | "Personalized" claimed, not shown | Dashboard header | Show the personalization (the user's actual data) instead of naming it |
| "Discover endless possibilities" | No possibilities are actually listed | Empty-state or landing copy | List two or three real starting points |
| "Powerful tools at your fingertips" | "Powerful" is unfalsifiable; "at your fingertips" describes every UI | Feature summary | Name the specific tools and what each does |

Context can rescue some of these — "Unlock" is fine as a literal mechanic (unlocking a level, a
feature gated by a real condition); the failure is using the word as vague uplift rather than a
literal description of what happens.

## Personalization

**Truncated names in prose.** A greeting that inserts a database-truncated or auto-shortened name
into a full sentence — a user named Bartholomew greeted as "Your private space, Barth." because a
display-name column was truncated to five characters — reads as broken personalization: it signals a
system, not a person, assembled the sentence and didn't notice the result. Either use the name the
user actually goes by (their full first name, or a name they've set as a display name) or drop the
name from that sentence and use a plain heading instead. Never let a database column's truncation
rule leak into a rendered sentence.

**Fake warmth versus genuine specificity.** "So glad you're here!" is warmth without content.
"You've completed 4 of 6 setup steps" is specific without needing warmth to feel considered.
Specificity usually reads as more caring than enthusiasm, because it proves the product is actually
paying attention to this user's state.

**When personalization helps.** Referencing something true and current about the user's situation
(their actual data, their actual progress, their actual plan) that changes what they should do next.

**When personalization is decoration.** A name inserted into a sentence that would be identical
otherwise, or a "based on your activity" claim in front of generic, unpersonalized content.

**Awkward personalization patterns to check for:**

- First name in a formal or transactional sentence where a plain heading would be cleaner
  ("Sarah, your invoice is ready" vs. just "Invoice ready" with the name shown elsewhere on the
  page).
- A possessive that doesn't fit ("Your journey," "Your world," "Your universe of X") layered onto
  routine product areas ("Your Settings," "Your Dashboard") where the possessive adds nothing a
  plain noun didn't.
- Personalization claimed but not delivered — "Recommended for you" above a list identical to what
  every user sees.

## Weak to improved, with the reasoning

Word-swapping a weak phrase for a nicer-sounding one is not the goal; the goal is asking what this
sentence, in this exact product moment, needs to communicate.

**Account heading.**
Weak: "Your private space, Barth."
Reasoning: no information about what's in the space; the truncated name signals automation; the
possessive-plus-adjective pattern is decorative.
Better: "Account" as the heading, with "Welcome back, Bartholomew" only if the full name is available and
a greeting is actually wanted on this surface (most account pages don't need one at all — the tab
title already says where the user is).

**Zero-state dashboard metrics.**
Weak: three cards reading "0 Cart," "0 Reward credit," "0 Messages."
Reasoning: three visual objects for the single fact "there's nothing new right now"; the zero is
doing the work of a full metric card for no reason.
Better: one line — "No items in your cart · No reward credit yet · No new messages" — sized to its
actual information content, with a link only where an action exists (e.g., "Browse rewards" if
reward credit is earnable).

**Informational access notice.**
Weak: "Access to email ✓" styled as a pill.
Reasoning: the checkmark-pill shape borrows the visual language of a completed toggle; if there's
nothing to tap, the shape is lying about interactivity (see
`control-necessity.md`).
Better, if read-only: "Email access granted" as plain status text. Better, if actionable: "Email
access: granted — Review" with a real link to the permission screen.

**Destructive-action button.**
Weak: "Archive" as the label for a delete that cannot be undone.
Reasoning: "archive" implies recoverability; using it for a hard delete sets a false expectation
about risk.
Better: "Delete permanently" with a confirmation step that states what's lost, or actually implement
recoverable archiving if that's the intended safety net.

**Error message.**
Weak: "Something went wrong. Please try again."
Reasoning: no causal information, no differentiation from any other failure, and "please" doesn't
make an unhelpful message more helpful.
Better: "Couldn't save — you're offline. Changes are kept locally and will save when you're back
online," when that's true; otherwise the specific, real cause. Only fall back to the generic
message when no more specific cause is knowable, and say so plainly rather than performing
apology.

**Onboarding welcome.**
Weak: "Welcome to your personalized dashboard! Let's get started on your journey to success."
Reasoning: two generic phrases stacked, neither naming what the user will actually do next.
Better: "Add your first project to see it here" — states the one action that moves the user from
zero to one, which is what onboarding copy's job actually is.

## Voice tests

Before shipping a string, check it against:

1. **Would a product team ship this exact sentence, in this exact place, deliberately?** Or does it
   read like a plausible-sounding placeholder that was never revisited?
2. **Does it survive being read out loud in the product's actual voice** (compare against other
   real strings already in the product), or does it sound like a different, more generic product?
3. **Is every claim in it true and specific to this state** (not "personalized," "powerful," or
   "seamless" as unverified adjectives)?
4. **Would removing the sentence lose information,** or was it filling space the way an empty
   container gets a stock illustration?

## Localization note

Short, literal, idiom-free strings translate better and are less likely to break layouts in longer
languages. Generic marketing phrases are often the hardest to translate naturally — another reason
specific, concrete copy tends to travel better across languages than aspirational copy.

## Accuracy before voice

Natural-sounding copy that misstates the product is worse than stiff copy that is right. Check
meaning first, tone second. Each failure below has a different fix.

| Failure | What it looks like (invented examples) | Fix |
|---|---|---|
| Misleading implication | "Already have a template?" above an importer that accepts any spreadsheet. It implies templates are the only supported format | Name the real input: "Import a spreadsheet" with the accepted formats where they matter |
| Wrong assumption | "Welcome back" to a first visit; "your team" to a solo user; "26 playable letters" shown to someone who never chose a letter set | State only what is true for this user and state |
| Ambiguous label | "FIRST IN" and "NEXT" as answer-order labels when players cannot tell whether they mean who answered first, who answers next, or the order of questions | Say what is ordered: "Fastest correct answer scores first"; or show the order with the thing it orders |
| Unclear term | "Board size" meaning the number of cells to some users and the number of players to others | Use the term the user already uses; define it once, in place, if it is domain vocabulary |
| Internal terminology | An error that reads `ROOM_CODE_INVALID`, or a button that says "Hydrate" | Replace with the user's concept. Keep identifiers in diagnostics, support views, and admin tools, where they help |
| Error with no recovery | "Invalid input" | Say which field, what is wrong, and what is accepted: "Room codes are 4 letters. Check the code on the host screen" |
| Contradiction | A banner says "All changes saved" beside a button that says "Save changes" in its enabled state | Make the states agree, then make the words match |
| Repetition | The same sentence in a heading, a subheading, and a tooltip; pricing repeated in each tier card as prose | Say it once, where the decision is made; link from the others |
| Vague action | "Submit," "Continue," "OK" on a screen with two possible continuations | Label by outcome: "Create quiz," "Join game" |
| Over-explaining the obvious | "Click the button below to proceed" | Delete. The button is the instruction |

## When longer is right

Do not shorten a message automatically. A longer explanation is correct when the decision is
consequential or the situation is complicated: a deletion that cannot be undone, a billing change
that renews on a date, a permission that exposes data, a failure the user can fix in only one way.
Length that carries a consequence, a condition, or a recovery step earns its place; length that
restates the interface does not.

## Preserving meaning in a rewrite

A rewrite changes words, not facts. Before accepting one, confirm that it keeps the functional
meaning, the product's actual behavior, every constraint (limits, dates, eligibility, units,
currency), the localization intent, accessibility (labels still name controls; error text still
associates with its field), the appropriate tone for the moment, and any legal or financial
precision. If you cannot verify a fact in the new wording, do not invent it; ask or mark it.
