<!-- GENERATED FROM shared/design-intelligence/component-patterns.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Original Component Patterns

These are authored task patterns, not trademarked visual recipes. Use them only when their observable job exists. Standard button, input, select, and dialog behavior remains familiar.

| Pattern | Problem and behavior | Implementation decision | Failure test |
|---|---|---|---|
| Decision rail | A long service has unclear ownership | Show current stage, responsible actor, required evidence, and next step; past stages remain inspectable | If the rail cannot name who acts next, use a simpler status message |
| Evidence shelf | A record needs sources without interrupting reading | Keep citations in a side rail on wide screens and an accessible disclosure after the claim on mobile | If sources are hidden behind an unlabeled icon, the pattern fails |
| Resume line | Returning users need the next action immediately | First region shows current object, last state, and one resume action; history follows | If “resume” guesses the wrong object, require explicit selection |
| Comparison latch | Users compare two or more offers over time | Persistent shortlist with normalized attributes, total cost, and availability | If items lack comparable data, do not fake equal columns |
| Exception lane | Operations teams need to separate normal flow from intervention | Queue normal work in the main lane; rank exceptions by severity/time with explicit ownership | If every item becomes an alert, the lane loses meaning |
| Revision seam | Creative or regulated work needs before/after accountability | Place changed fields side by side or inline with source/version and rollback path | If differences rely on color alone, add text and structure |
| Learning hinge | A learner must connect explanation to practice | Keep a concept statement adjacent to one manipulable example and its result | If an animation plays without learner control or explanation, remove it |
| Local action tray | Mobile field tasks need capture while scrolling | Keep one task-critical action reachable without covering inputs or system keyboard | If the tray obscures content at 200% zoom, make it in-flow |

Each pattern changes navigation, state, or information priority. None exists merely to look novel. Test a conventional alternative first. For any adopted pattern, record the user task, expected gain, keyboard/touch behavior, state transitions, and failure mode. Include no fabricated metrics or dummy controls to fill space.
