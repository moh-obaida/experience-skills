---
name: experience-skills
description: "Use when building, redesigning, reviewing, or improving the experience of a digital product. Diagnose product-specific problems in composition, visual identity, interaction, workflows, states, responsiveness, motion, usability, or generic AI-generated design; route to the relevant bundled Experience Skills methods; preserve existing identity and product mechanics; implement targeted improvements; and verify rendered results when possible. Do not use it to impose a generic aesthetic, redesign unrelated areas, activate every specialist unnecessarily, or claim unobserved improvements."
license: MIT
metadata:
  collection: experience-skills
  display-name: Experience Skills
---

# Experience Skills

Consider broadly. Intervene selectively. Verify deeply.

Experience Skills is the entry point to a collection of specialist methods for designing,
building, reviewing, and repairing digital product experiences. Diagnose the request, load only
the relevant method, and follow its conditional reference-loading instructions. The specialists
and their complete local resources live under `modules/`; the generated catalog and routing guide
are in `references/`.

## Route the request

1. **An explicitly named specialist wins.** Load its `modules/<name>/METHOD.md` directly. The
   complete list of valid names is in `references/skill-catalog.md`.
2. **An explicit full-collection request** (or substantial end-to-end product build or audit) loads
   `modules/use-all-skills/METHOD.md`. Consider every concern, then activate only methods with
   material value.
3. **A broad or undiagnosed experience problem** loads
   `modules/experience-architect/METHOD.md`, which diagnoses scope and routes selectively.
4. **A focused concern** loads the matching specialist method from
   `references/routing-guide.md`. If several concerns interact and no single specialist owns the
   diagnosis, start with `experience-architect`.

Do not execute every method merely because the collection is installed. Do not load the design
intelligence library wholesale; let the chosen method request only what the decision needs.
`anti-slop-ui` evaluates and gates; `anti-ai-slop` repairs an existing implementation end to end.

## Preserve the collection's contracts

- Classify scope from COMPONENT → SURFACE → PAGE → FLOW → PRODUCT and choose the smallest
  sufficient scope.
- Preserve the product's identity, core instrument, and working mechanics. Experience Skills has
  no house aesthetic.
- Follow the selected method's REVIEW, REPAIR, BUILD, or VERIFY mode where defined.
- Keep claims aligned with evidence levels E1–E6. Source inspection is not rendered verification.
- For meaningful visual changes, inspect rendered output when a runnable surface is available.
- No change is a valid outcome when evidence does not justify intervention.
- Read the selected method's required core and conditional references before acting. Keep
  references, scripts, and assets relative to that method's module directory.
