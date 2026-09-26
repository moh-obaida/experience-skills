<!-- GENERATED FROM shared/design-intelligence/design-system-grammar.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Design System Grammar

A direction is the reason an interface has a character. A system is the implementable contract that expresses that character across routes and states. A theme changes role tokens within one system; it does not swap the system's interaction, density, or composition. The authored systems in this library are candidate starting points, not real-product precedents and not production templates. Adapt them to the product's content, audience, language, platform, and existing brand.

## Minimum implementation artifact

Each system entry names a thesis, suitable and unsuitable contexts, composition, type roles, palette theme, spacing/density, shape/depth, controls/navigation, states/motion, imagery/icons/copy, and its failure mode. Resolve those choices into a small token contract before components:

```css
:root {
  --canvas: #f7f6f2; --surface: #ffffff; --raised: #ffffff;
  --ink: #17201f; --ink-secondary: #45504e; --line: #b7c0bd;
  --action: #174b46; --on-action: #ffffff; --action-hover: #103e3a;
  --selected: #d9e9e2; --focus: #0e6154;
  --success: #176b45; --warning: #805600; --danger: #a52631; --info: #225b99;
  --space-1: .25rem; --space-2: .5rem; --space-3: .75rem;
  --space-4: 1rem; --space-6: 1.5rem; --space-8: 2rem;
  --radius-control: .375rem; --radius-surface: .5rem;
  --line-width: 1px; --shadow-raised: none;
}
```

These are illustrative roles, not a universal palette. Use only roles the product needs. A dark theme must remap each role deliberately. Never use accent as success/error merely because the hue resembles one. Recalculate contrast on actual text and component pairs after adaptation. Use visible text or symbols alongside status color.

## Component grammar: choose the family, then tune by system

| Component | Required behavior | System-specific choice |
|---|---|---|
| Primary button | one dominant task per region; clear action verb; visible focus and disabled reason | fill, border, geometry, type weight, motion |
| Secondary/tertiary/text action | progressively quieter, still distinguishable; links navigate | outline or flat treatment, underline rhythm |
| Input/select | persistent label, error association, sufficient target | field fill, border, focus ring, spacing |
| Checkbox/radio/switch | familiar semantics; switch only for immediate settings | stroke, selected fill, label placement |
| Menu/tabs | keyboard behavior and selected state; tabs only for sibling views | underline, rail, segmented treatment |
| Card/list/table | group only when content needs it; align comparable data | row density, divider, surface, numeric alignment |
| Sidebar/navigation | stable locations, current state, useful collapse | rail width, label weight, mobile replacement |
| Modal/toast | appropriate focus and recovery; toast cannot hide the result | surface elevation, timing, dismissal |
| Empty/progress/badge | truthful state and next step; avoid fake activity | message tone, density, icon and motion |

A system's component treatment must follow its thesis. A dense operational system earns table dividers and compact rows; an editorial system earns reading measure and fewer containers. Do not replace native affordances with novelty solely to display identity. Detailed behavior still belongs to interaction-design and state-design.

## State and motion contract

Define empty, sparse, normal, dense, loading, processing, success, warning, error, disabled, and selected states for the components actually used. Loading should preserve layout and name what is happening. Processing must not look complete. Errors need recovery. Empty states need a reason and useful next action. Motion should explain a change in ownership, position, status, or result; no ambient animation requirement. Respect reduced motion and allow interruption.

## Responsive transformation

Do not merely stack the desktop. Decide which information survives the first viewport, which navigation changes form, which data becomes a list/detail path, and which actions remain reachable with the keyboard open. Breakpoints follow content failure, not device brands. Verify narrow and short viewports, long labels, zoom, sparse/dense states, and RTL if supported. A system can preserve its type/color/shape grammar while changing composition.

## Compatibility and style-soup rejection

A selected system may borrow a composition, type strategy, or palette family only if the borrowed part reinforces the thesis and works across actual routes. Explain its job and its sacrifice. Incompatible combinations to reject without a strong task reason: toy icons on a high-trust financial workflow, cinematic entrances on repetitive data entry, luxury display serif in a dense monitoring grid, terminal chrome for nontechnical customers, translucent panels obscuring data, or a decorative illustration occupying the first task viewport. If two systems require contradictory density, navigation, and type roles, choose one rather than averaging them.

## Originality gate

Ask: can the system be recognized by its decisions without its name? Do type, color, geometry, composition, and motion reinforce one thesis? Does it behave in empty and dense states and on mobile? Can an engineer implement it without guessing core roles? Is it distinct from the other candidates? Is any treatment copied from one product or merely fashionable? If any answer fails, adapt or reject the candidate. The systems here are authored examples; they make no claim to being human-made or to representing observed products.
