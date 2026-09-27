# Routing Record

Keep a compact record for consequential choices, not a compulsory row for every installed skill. Consideration means the skill was checked against the diagnosis; activation means its method was actually used. A recommendation affects implementation only after it survives product-specific evidence and priority.

| Concern and evidence | Specialist considered → activated? | Finding and confidence | Decision and effect | Remaining uncertainty |
|---|---|---|---|---|
| Example: editor loses focus after Files closes (rendered) | interaction-design → yes; state-design → yes | confirmed primary-loop break | restore focus ownership and test repeated return | none after rerun |

Possible findings: confirmed issue, strong concern, possible concern, optional opportunity, stylistic preference, or no material issue. Possible decisions: change, preserve, defer low severity, or reject because it harms an invariant. Record skipped specialists only when the choice might otherwise be surprising. A handoff names the observed issue, why it matters, what remains uncertain, and why the next specialist helps. “No handoff required” is complete when nothing material remains.

Before activating one more skill, check whether its question is already answered by an active specialist or a rendered observation. If so, spend the remaining attention on the next implementation or verification pass. A low-confidence style preference cannot overturn a confirmed primary-journey requirement. When a specialist recommends preservation, record the product evidence that makes the current decision worth keeping. This record is for decisions that affect the product; do not include a name solely to prove coverage.

Decision meanings:

- **Change:** an observed failure or strong product-specific concern justifies editing and rerunning the affected path.
- **Preserve:** the existing behavior supports the loop and invariants; a proposed alternative has no demonstrated gain.
- **Defer:** the issue is real but lower severity than implementation or verification work still open.
- **Reject:** a recommendation would undermine a protected decision, introduce a regression, or add cost without task value.
