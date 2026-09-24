# Problem Taxonomy: From Symptoms to Problems

Users describe symptoms. The router's job is to translate symptoms into problem classes that
specialists can act on. Many symptoms map to more than one class; confirm with observation.

## Symptom dictionary

| The user says | Likely problem classes | Confirm by |
|---|---|---|
| "It looks empty" / "too much whitespace" | DEAD SPACE, FAKE MINIMALISM, missing environment, sparse state | Measure first-viewport content coverage; check if the state is sparse data |
| "It looks clean" (said as praise, by an agent) | Possibly ALIGNED NOT COMPOSED, FAKE PREMIUM | Grayscale test; logo test; coverage |
| "It looks generic" / "AI-made" | GENERIC, TREND COPY, design clichés, generic copy | Run anti-slop gate; logo test |
| "It feels cheap" | Weak typography, inconsistent spacing, noise, low-quality imagery | Inspect type scale, spacing rhythm, asset quality |
| "It's cluttered" / "busy" | NOISE, CRAMPED, FLAT HIERARCHY, too many P0s | Count competing emphases; rank information |
| "I can't find X" | Discoverability, IA, WRONG FOCAL POINT | Path from landing to X; label clarity |
| "It takes forever" | Workflow friction (steps), WAITING TAX, performance | Map steps; time the flow; check network |
| "Too many clicks" | NAVIGATION TAX, CONFIRMATION TAX, SERIAL WORK, UNNECESSARY CHOICE | Map and count |
| "Why does it ask me that again?" | REDUNDANT INPUT, MEMORY FAILURE | Check what the system knows at that step |
| "I'm not sure what happened" | Missing feedback, state ambiguity, no motion for events | Trigger the action; observe response |
| "It feels flat / lifeless" | Missing event motion, weak identity, static state changes | Watch state changes; check motion |
| "The animations are annoying" | Motion slop, non-event motion, slow sequences | Inventory animations; time them |
| "It broke on my phone" | Overflow, collisions, target size, keyboard overlap | Render at the reported size |
| "It says 'Something went wrong'" | Collapsed error states, transport vs product confusion | Trigger failure modes |
| "I lost my work" | MEMORY FAILURE, missing drafts, validation clearing input | Interrupt the flow; refresh; fail validation |
| "Users keep asking support about X" | Terminology, discoverability, status ambiguity | Read the question; find where the product answers it |
| "Is this design good?" | Needs critical review, not reassurance | Apply critical-review workflow |
| "Make it pop" / "make it modern" | Vague; often identity or hierarchy | Ask what feels wrong now; observe first |

## Problem classes by specialist

- **Composition:** V1–V10, R1–R7 in the visual problem taxonomy.
- **Identity:** I1–I6.
- **Content/filler:** C1–C3.
- **Workflow:** F1–F10 and secondary types.
- **Interaction:** restated context, unfamiliar controls, unsafe actions, weak feedback, target size.
- **States:** missing states, dishonest states, transport/product confusion.
- **Motion:** non-event motion, missing event motion, slowness, no reduced motion.
- **Product friction:** terminology, IA, concepts, continuity, first-use/expert burden.
- **Judgment:** premature praise, enthusiasm mistaken for quality, unexamined proposals.

## Ranking problems

Rank by user impact, not by how easy they are to talk about:

1. Blocks or corrupts the task (broken, overflow hiding actions, lost data, dishonest state)
2. Slows frequent tasks (friction on constant or routine paths)
3. Undermines trust or comprehension (wrong focal point, confusing terms, vague errors)
4. Weakens identity or quality perception (generic, noise, dead space)
5. Polish (rhythm, minor inconsistencies)

A slop problem on the marketing page may matter less than a redundant input on a task done
fifty times a day. Say so when you rank.
