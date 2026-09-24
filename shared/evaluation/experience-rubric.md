# Experience Rubric

A structured way to evaluate an experience. Evidence first; ratings optional.

Use the dimensions that apply. Not every surface needs every dimension. For each dimension,
record **observations** (what is there), **evidence level** (rendered, measured, source,
screenshot, assumption), and a **verdict** in words.

## Dimensions

| Dimension | Core question | Strong signals | Weak signals |
|---|---|---|---|
| Purpose clarity | Can a user tell what this is and what to do within seconds? | One clear P0; action visible without scrolling | Greeting or branding dominates; multiple competing actions |
| Information hierarchy | Does visual weight match importance? | Rank is readable in grayscale | Flat hierarchy; wrong focal point |
| Composition | Is space used deliberately for this archetype? | Proportioned space, clear focal point, rhythm | Dead space, cramped regions, container soup |
| Visual identity | Would it be recognizable without the logo? | Consistent product-derived carriers | Generic library look; trend copy |
| Interaction obviousness | Are controls familiar and legible? | Conventional controls, clear affordances | Clever custom controls; hidden actions |
| Time to outcome | How many actions, decisions, and screens does the main task take? | Few decisions, known answers reused | Redundant input, choice screens, detours |
| State quality | Are real states designed and honest? | Empty, loading, error, dense handled | Only the perfect fixture works |
| Responsive robustness | Does it hold across sizes, zoom, and input types? | No overflow; composition adapts | Breaks at common sizes |
| Accessibility | Can everyone perceive and operate it? | Contrast, focus, semantics, reduced motion | Mouse-only; color-only meaning |
| Motion meaning | Does motion explain events? | Event-driven, interruptible, reduced-motion | Uniform entrance animation |
| Slop risk | Could this be any AI-generated product? | Specific, justified choices | Gradients, glass, pills, fake stats |
| Evidence quality | How strong is the basis for these conclusions? | Rendered and measured | Assumed |

## Verdict vocabulary

Use words that carry meaning:

- **Strong:** clearly good for this context, with evidence.
- **Adequate:** works; no significant issue; not distinctive.
- **Weak:** noticeable problem that affects users.
- **Broken:** prevents or seriously harms the task.
- **Not assessed:** no evidence available (say why).

## Scores

Avoid numeric scores by default. A "7.5/10" invites false precision and hides the reasoning.
Use scores only when a task explicitly benefits (comparing many variants, tracking over
time), and then define the scale and anchor each point with an example.

## Report shape

```
Dimension — Verdict (evidence level)
  Observation: ...
  Impact: ...
  Recommendation: ...
```
Lead with the dimensions that most affect the user's outcome.
