# Design Intelligence: Context Adaptation Contract

Use this reference when selecting or extending a direction, composition, palette, typography
strategy, or motion language. A named style is not a decision. The decision is how the style changes
the user's ability to notice, understand, act, recover, and trust the product.

## The required record

For every selected family, record these fields before implementation:

```text
product / surface / archetype:
primary user and frequency:
P0 object or action:
selected family and two rejected families:
identity carrier:
composition relationship:
type and reading measure:
surface and contrast roles:
motion and state relationship:
mobile transformation:
desktop / short-height transformation:
RTL and translation risks:
sparse state:
dense state:
wrong context:
AI-default risk:
verification:
```

If a field is unknown, mark it unknown and make it a verification task. Do not fill the field with
a generic adjective.

## Direction is a behavior budget

A direction allocates attention across environment, focal object, controls, content, and state. A
direction is meaningful only if at least three of these change together:

- **Environment:** what surrounds the task and makes the product feel like a place.
- **Hierarchy:** what the eye finds first, second, and when a state changes.
- **Content grammar:** whether the product reads as a document, instrument, catalog, conversation,
  classroom, or other real object.
- **Shape and material:** boundaries, depth, texture, and contrast used to group or signal.
- **Type geometry:** measure, scale, weight, script support, and numerical hierarchy.
- **Motion language:** how entry, progress, transfer, confirmation, and recovery are expressed.
- **Control restraint:** what stays familiar so the user can operate the product without learning a
  visual costume.

If only color, radius, shadow, or font changes, the result is a surface treatment, not a new
direction. Load `surfaces-and-shape.md` instead and state the product reason.

## Composition relationship

Do not select a direction and composition independently and hope they cohere. Write the relationship:

| Question | Evidence to collect |
|---|---|
| Where is the P0 object? | first viewport and focus order |
| What does the environment do? | framing, orientation, pacing, or context—not filler |
| What stays stable? | navigation, object position, action location, reading measure |
| What changes by state? | loading, empty, error, success, dense, collaboration |
| What collapses on mobile? | decorative layers first; never the user's only context |
| What becomes a rail, sheet, or flow? | frequency, reach, and comparison needs |

The same direction can support a centered focused task, a data workspace, or a reading surface only
if the composition preserves the task's focal hierarchy. “Centered” is not a composition argument;
name the object, the viewport budget, and the surrounding job.

## Sparse and dense states

Sparse is not permission to add invented metrics, promos, tips, or decorative cards. Decide whether
the product is sparse because:

1. the user has no data yet;
2. the user has filtered away the data;
3. the product has one focused next action;
4. the environment is intentionally doing framing work; or
5. the implementation has failed to expose real context.

Dense is not permission to shrink everything. Preserve a scan order, group attributes by decision,
and remove low-value chrome before reducing target size. Use `product-interiors-and-dense-states.md`
when the surface is operational or expert-facing.

## Responsive transformation

Responsive adaptation is a change in composition, not just a media query. For each family, answer:

- Does the focal object remain first, or does the task become sequential?
- Does the environment crop, simplify, or disappear?
- Does a side-by-side comparison become a list, sheet, or stepper?
- Are type scale and line measure still readable at 200% zoom and long translation lengths?
- Does RTL mirror spatial meaning, or only reverse decorative alignment?
- Does the short viewport hide the primary action behind sticky chrome?
- Does a projector or large display need larger status and targets rather than more content?

Use the smallest transformation that preserves task understanding. A phone is not a narrow desktop;
a projector is not a large phone.

## Typography and scripts

Typography is geometry and language support. Before selecting a pairing, test:

- Latin and Arabic or the product's supported scripts together;
- numerals, dates, currency, code, and tabular data;
- long translated labels and unbroken identifiers;
- headings at narrow width and 200% zoom;
- line-height and baseline alignment across scripts;
- fallback behavior if the preferred font cannot load.

Do not call a display face “premium” or a mono face “technical” without stating what it does to
hierarchy, scanning, or product recognition. A font that works in a hero but fails in settings is not
a product typography system.

## Palette and surface roles

Assign semantic roles before hues:

```text
canvas / reading surface / elevated surface:
primary text / secondary text / disabled text:
primary action / quiet action / focus:
success / warning / danger / informational:
selection / hover / pressed / pending:
image or product-derived accent:
```

Check actual pairings, borders, focus indicators, dark mode, daylight, projector washout, and
color-independent status. A brand color must not automatically become an error color or a button
color. A pale environment must not lower text contrast.

## Motion and state

Motion must explain an event: what changed, where it went, what is pending, what completed, or what
needs attention. For each motion treatment, record trigger, property, duration, interruption, reduced
motion equivalent, and performance cost. Ambient movement is optional and must pause or degrade. A
direction with no state language is incomplete for a live or transactional product.

## Wrong-context and AI-default review

Ask before implementation:

- Would this direction make a public-service form slower or less trustworthy?
- Would this composition hide a frequent action behind spectacle?
- Would this palette make status ambiguous in a dense tool?
- Would this type system fail a bilingual or numeric surface?
- Would this motion imply success before the server confirms it?
- Is the proposal merely a centered card, bento grid, glass panel, dark gradient, oversized serif,
  or repeated pill because the model has seen it often?

If yes, either reject it or write the product condition that earns it. Use
`justified-trends.md` to prevent reverse-dogma: a common technique can stay when it solves a real
problem and survives the relevant states.

## Verification record

The final record distinguishes:

```text
Observed: what the current surface does.
Measured: dimensions, counts, timings, contrast, or step totals.
Changed: the implementation decisions made.
Verified: what was rendered, operated, or tested after the change.
Not verified: exact browser, state, locale, device, or dependency not tested and why.
```

Do not promote an assumed direction into an identity system until it survives a sparse surface, a
dense surface, a real state change, and the primary small viewport.
