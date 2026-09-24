# Cognitive Load

Cognitive load is the mental effort a product demands. Some is intrinsic to the task (planning a
budget is hard). Much is imposed by the design and can be removed.

## Sources of imposed load

- **Memory:** remembering information from a previous screen (codes, IDs, earlier choices).
- **Choice overload:** many options presented at once without defaults or grouping.
- **Hidden state and modes:** behavior that depends on invisible modes.
- **Translation:** mapping the product's terms to the user's terms.
- **Inconsistency:** the same thing behaving differently in different places.
- **Ambiguous status:** not knowing whether something worked, is pending, or failed.
- **Visual noise:** decoration competing with content.
- **Interruption:** modals, tours, and banners breaking concentration.

## Repairs

| Load | Repair |
|---|---|
| Memory | Show information where it is needed; carry it forward; copy buttons |
| Choice overload | Defaults, grouping, progressive disclosure, recommendations |
| Modes | Remove modes; make the current mode visible; prefer quasi-modes |
| Translation | Use users' vocabulary |
| Inconsistency | One behavior per concept |
| Status ambiguity | Clear state feedback (state-design) |
| Noise | Remove decoration without a job (anti-slop-ui) |
| Interruption | Inline guidance; defer non-urgent messages |

## Modes in particular

A mode changes what the same input does (edit mode vs view mode, host mode vs player mode).
Mode errors are among the most common and frustrating slips. Ask: can the mode be removed
(edit in place)? If not, is it unmistakably visible, and is it hard to act in the wrong mode?

## Measuring

Without lab studies, use proxies: number of decisions per task, number of things to remember across
screens, number of modes, number of distinct terms for core concepts.
