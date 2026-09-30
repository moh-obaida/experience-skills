# Final Slop Gate

Load for material anti-slop review and before presenting generated UI. Read the shared anti-slop
gate directly; it defines diagnosis scope, outcome evidence, and PASS / REPAIR / ESCALATE.

## Procedure

1. Inspect the whole rendered screen, major viewport, affected routes, and a relevant narrow state.
   Code and scanner counts supplement observation. Rendering unavailable → UNVERIFIED with blocker.
2. Recover the original dominant diagnosis from the baseline or review brief. Group linked symptoms
   by root cause, then identify secondary contributors and strong decisions to preserve. A report
   need not list every minor AI-ish detail.
3. Judge whether that cause remains in the final product. For a meaningful repair, compare inspected
   before/after at the same routes, states, and sizes. More specific words or attractive components
   do not resolve composition/system harm unless the whole relationship improves.
4. Check the product job, hierarchy, behavior, expression, route fit, and important functionality.
   Look for a new dominant weakness or a new generic replacement. Novelty is not evidence of quality.
5. Decide internally: PASS (no material intervention justified), REPAIR (specific cause can be fixed
   here), or ESCALATE (unresolved concern needs a specialist). Accepted/out-of-scope major harm stays
   explicitly unresolved; it never silently becomes fixed. With insufficient evidence, record
   UNVERIFIED rather than a confident PASS.
6. In review-only work, diagnose and recommend; do not implement a speculative redesign. Local harm
   stays local. Preserve intentional unusual design, valid cards/gradients, sparse framing, and
   understated tools when they earn their jobs.

## Report

Lead with the result and dominant cause, then evidence, highest-leverage correction, and preserved
strengths. State remaining major harm or unverified checks. Use a compact answer for a local issue;
no mandatory public taxonomy or findings quota. No change can be right after a real assessment.

Invented example: a product's oversized secondary workspace still dominates after its copy was
rewritten. Report the allocation cause as unresolved; retain the useful copy change and recommend
structural repair. Do not say the gate passed because the new copy is more specific.

## Do not

- Count edits, changed markers, screenshots, or diff size as a quality verdict.
- Justify a treatment with “looks modern” or remove it by category.
- Substitute source-only estimates for observed optical improvement.

For formal debug/evaluation records only, record `result` (pass, unresolved, escalated, or unverified)
in the existing skill trace entry. Its verification names the observed renders and the original
cause's outcome. A review-only trace records an explicit no-change reason. Required-reference, inspection, and handoff claims must match tool activity.
Keep this metadata out of the ordinary review answer and the outcome judge.
