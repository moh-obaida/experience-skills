---
name: product-friction
description: "Find and rank product-level friction beyond individual clicks: confusing terminology, cognitive load, poor discoverability, lost context and session continuity, information architecture problems, dead ends, status ambiguity, unnecessary modes, duplicate concepts, inconsistent behavior, first-use burden, and expert burden, recorded in a prioritized friction ledger. Use when a product feels hard to use overall, when users get lost or ask the same support questions, when features pile up without getting easier, or when auditing a whole product or area rather than one flow."
license: MIT
metadata:
  version: "0.1.0"
  collection: experience-skills
---

# Product Friction

Some friction lives inside one flow (see workflow-compression). Other friction lives in the
product itself: what things are called, how concepts relate, where features live, whether the
product remembers context, whether it behaves the same way twice. This skill finds that kind of
friction and ranks it.

> More features is not the same as a better product.

## Use this when

- Users describe the product as confusing, heavy, or hard to learn.
- Support repeatedly answers the same "where is…" or "what does … mean" questions.
- The product has grown feature by feature and now has duplicate or overlapping concepts.
- Users lose context moving between areas or sessions.
- Newcomers struggle, or experts are slowed by beginner scaffolding.
- You are asked to audit a whole product, area, or major release for usability.

## Do not use this when

- The problem is one specific flow's step count (workflow-compression).
- The problem is a single screen's layout or look (composition-repair, visual-identity).
- A narrow bug is being reported.

## Core principles

1. **Friction is a ledger, not a vibe.** Each issue is recorded with frequency, severity, time cost,
   cognitive cost, risk, and a repair.
2. **Frequency × cost ranks issues.** A small confusion everyone hits daily outranks a large one
   nobody meets.
3. **Words are interface.** Terminology problems are product problems.
4. **One concept, one name, one place, one behavior.**
5. **The product should remember.** Context loss is friction users pay repeatedly.
6. **Serve both newcomers and experts.** Neither should pay for the other.
7. **Removing is a valid repair.** Duplicate features, modes, and settings can simply go.

## Workflow

### 1. Scope the audit
Name the product area, the user types, and their main goals. Pick 3–6 core tasks that represent
real use.

### 2. Collect evidence
From strongest to weakest: walk the tasks in the running product; read support tickets or FAQs
the user provides; read navigation and route structure; read copy and labels in code; review
analytics if supplied. State which sources you had.

### 3. Find friction by lens
| Lens | Load |
|---|---|
| Names, labels, jargon, inconsistent terms | `references/terminology.md` |
| Too much to hold in mind; too many choices; modes | `references/cognitive-load.md` |
| Users cannot find features or do not know they exist | `references/discoverability.md` |
| Context lost between areas or sessions; dead ends | `references/continuity-and-context.md` |
| Navigation, grouping, where things live | `references/information-architecture.md` |
| Duplicate concepts, inconsistent behavior, unclear ownership | `references/consistency-and-concepts.md` |
| Onboarding weight vs expert speed | `references/first-use-and-expert-burden.md` |

### 4. Record the ledger
Use `references/friction-ledger.md` (and `assets/friction-ledger-template.md`). One row per issue.
Keep issues specific and located ("Settings > Sharing uses 'Members'; the invite dialog says
'Collaborators'"), not general ("terminology is inconsistent").

### 5. Rank and group
Rank by frequency × (time cost + cognitive cost) × risk. Group related issues into themes so fixes
address causes (one terminology pass instead of twelve label tweaks).

### 6. Recommend repairs
For the top themes, recommend concrete repairs with their tradeoffs. Route flow-level fixes to
workflow-compression, control-level fixes to interaction-design, and state fixes to state-design.

## Execution rules

- Separate observation ("the label says X") from inference ("users probably think Y").
- Do not propose adding onboarding, tooltips, or tours as the first fix for confusing design;
  fix the design, then explain what remains.
- Respect product maturity: in mature products, renaming and restructuring have migration costs;
  include them.
- In REVIEW mode, deliver the ledger and recommendations; do not edit.

## Failure modes

- **Generic audit:** "improve consistency" with no located examples.
- **Feature pile:** recommending more features to fix confusion caused by features.
- **Tour reflex:** covering confusing UI with walkthroughs.
- **Unranked list:** forty issues with equal weight.
- **Rename churn:** proposing renames without considering existing users, docs, and support.

## Completion criteria

- A ledger with located, specific issues, each with frequency, severity, costs, risk, and repair.
- Issues ranked, grouped into themes, and top themes have concrete repairs with tradeoffs.
- Evidence sources and gaps are stated.

## References

- `references/friction-ledger.md` — the ledger format and ranking
- `references/terminology.md`
- `references/cognitive-load.md`
- `references/discoverability.md`
- `references/continuity-and-context.md`
- `references/information-architecture.md`
- `references/consistency-and-concepts.md`
- `references/first-use-and-expert-burden.md`
- `assets/friction-ledger-template.md` — copyable ledger
- `references/_shared/` — shared taxonomy, rubric, patterns
