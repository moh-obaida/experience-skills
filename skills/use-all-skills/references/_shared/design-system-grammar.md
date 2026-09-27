<!-- GENERATED FROM shared/design-intelligence/design-system-grammar.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Design System Grammar

A direction explains character; a system is a repeatable product decision across working screens, states, and devices. An Atlas entry is an authored candidate, not a template or an observed precedent. Product mechanics, existing evidence, and protected invariants outrank it. A theme changes role tokens without changing interaction architecture.

## Structure and expression

Use an entry's rows to answer two questions on the product's primary screen:

- **Structure:** what dominates, what persists, what appears contextually, density, navigation, information exposure, feedback/progression, and mobile transformation. State the core instrument's spatial and focus treatment. Explain a mechanic → visual consequence.
- **Expression:** emotional target and energy (quiet, balanced, energetic, intense), color behavior and chroma hierarchy, contrast strategy, typographic attitude, geometry, rhythm, motion character, and one signature response tied to the user's action. Name where energy calms down. Energetic does not imply childish; restraint does not imply quality.

The **look contract** is what a finished product must visibly exhibit: a dominant visual idea, specific contrast and color behavior, recognizable type and geometry, intentional density and energy, and a causal signature moment. Ask what should never be gray. If changing font, accent, radius, and spacing can turn it into another candidate, the system has not been expressed strongly enough. A serious technical product can be high energy through strong contrast, active color, tight rhythm, and fast causal feedback without mascots or confetti.

## Candidate and authoring gate

A fingerprint is a useful duplicate filter, never sufficient proof of diversity. Compare core-screen silhouettes without text, color, icons, or fonts; then compare in grayscale. Systems should differ in focal hierarchy, instrument/support relationship, information timing, interaction architecture, navigation, progression, or density. Ask whether a user would see recognizably different wireframes and whether the primary work surface behaves differently. If not, merge or rewrite. Authors must say what dominates, what is subordinate, what persists, what is progressive, how mobile transforms, how expression changes during action, and how a sibling would differ in grayscale.

For each chosen system or product adaptation, state: what it improves; what it sacrifices; “do not choose when”; likely failure; and “do not accidentally become…”. Rejection criteria protect the product better than broad niche-fit claims. A common degeneration deserves an implementation and review check. Preserve strong existing behavior when an Atlas alternative only looks tidier.

## Implementation contract

Translate only used roles into tokens and components. Define canvas, instrument surface, supporting surface, ink, action, selected/focus, and semantic states as needed. Color must do a job: where does chroma enter on action, where does it recede, and how do progress, success, and error differ from brand? A dark mode is a role remapping, never an automatic inversion. Typography must serve scanning, reading, code, language, and personality; serif is one option, not an antidote to generic UI. Geometry and component density follow the task. Familiar control semantics stay intact.

Define empty, sparse, normal, dense, processing, error, recovery, success, disabled, and selected states only where used. Distinguish machine/simulation, progress, session, account, remote, and temporary UI state. Motion can add energy and character when it explains causality; use a suitable speed, remain interruptible, and provide reduced-motion information. Verify actual text and component contrast rather than assuming palette roles suffice.

## Responsive and accessibility contract

Decide which information survives the first viewport, which support becomes contextual, and how the core instrument remains usable with the keyboard open. Check focus ownership, return from secondary panels, zoom, long labels, and directional behavior. Arabic UI can be RTL while commands, paths, and code remain LTR. The core instrument needs the product-specific keyboard, announcements, semantics, contrast, and focus checks.

## Rendered gate

Use the three-second task test: can a user quickly identify the goal and action place? Blur the screen: is the primary instrument or active state dominant? Mentally remove explanatory prose: does structure still communicate where work happens? Exercise the actual loop, including mistakes and recovery. If rendered behavior contradicts the artifact, change the implementation or direction. No visual system earns precedence over a broken primary journey.
