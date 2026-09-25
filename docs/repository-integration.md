# Repository Integration

Experience Skills are installable folders, not a project-wide configuration system. They become
reliably useful when the host repository makes the local product context discoverable and gives the
agent a small pre-ship contract. Integration is optional; do not add invasive hooks or force a
framework.

## Recommended setup

1. Install `experience-architect` for broad product work and the specialists that match the product.
2. Copy [`assets/experience-contract.md`](../assets/experience-contract.md) into the repository's
   agent instructions, adapting only project-specific constraints.
3. If the repository has a stable design system, document its tokens, supported viewports, locales,
   state fixtures, and run command in the local instructions or `EXPERIENCE.md`.
4. Keep the product's existing conventions authoritative unless the user intentionally changes them.
5. Ensure the agent can run the smallest safe dev server or fixture route when rendered verification
   matters. Do not add a server solely to satisfy the contract.

## Suggested root instruction

For repositories using `AGENTS.md`, add this short block:

```text
For user-facing product work, use installed Experience Skills when relevant.

Before shipping meaningful UI changes:
- validate composition and the relevant workflow or state model
- validate responsive behavior and real content
- test actual rendered states when possible
- challenge unnecessary control novelty
- run the anti-slop gate before presenting generated UI
- report what was observed, measured, changed, verified, and not verified
```

The same block can live in `CLAUDE.md`, `.cursor/rules/`, a Codex project instruction, or another
Agent Skills-compatible instruction file. Place it where that tool reads repository guidance; do not
duplicate the full skill library there.

## Tool-specific notes

- **Codex:** install the folders with the `skills` CLI or the desktop skill manager. Keep this
  contract in the repository's `AGENTS.md` when the project already uses one.
- **Claude Code:** install the folders in the project skill location and add the contract to
  `CLAUDE.md` or the existing `AGENTS.md`. Use the installed specialist names in local routing
  notes only when a project has unusual boundaries.
- **Cursor:** install the folders in the supported project skills location and place the contract in
  a project rule. Keep the rule trigger limited to user-facing work, not every coding task.
- **Other compatible agents:** install the skill folders using the agent's documented skills path,
  then place the contract in the repository-level instruction mechanism it actually loads.

## Optional project context

If a project benefits from persistent context, create a small `EXPERIENCE.md` containing:

```text
Product archetypes:
Primary users and frequency:
Supported viewports and input modes:
Supported locales / RTL:
Existing design tokens and component system:
Reliable render or fixture command:
High-risk workflows and states:
Identity constraints:
```

This file is context, not executable instructions. It must not contain secrets, private paths, or
requests to override repository or user safety rules. Skills remain useful when it is absent.

## What integration does not mean

Do not install every specialist for a one-line copy edit. Do not claim browser verification because a
dev server exists. Do not replace product research with a copied style catalog. The contract raises
recall for meaningful experience work while the significance gate keeps unrelated tasks quiet.
