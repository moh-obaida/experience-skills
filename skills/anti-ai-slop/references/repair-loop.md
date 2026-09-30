# Repair Loop

Load before replacing anything (workflow steps 5–12). It defines severity, the evidence format, how
to choose a replacement that fits the existing product, the trace-repair-rerender loop, the
originality tests, and the report.

## Severity

| Level | Meaning | Examples |
|---|---|---|
| S0 identity-destroying | The product reads as obviously templated or generated; its own identity is buried | default hero stack + purple gradient + glass cards on a craft studio; KPI-card dashboard on a product with no metrics |
| S1 major generic pattern | Strongly harms uniqueness or product fit on a key surface | library default theme untouched on the main app; generic copy across all headings; fade-up on every section |
| S2 local generated tendency | Noticeable but contained | a bento section; sparkle icons in one feature list; eyebrows on one page |
| S3 minor polish | Small cliché or unnecessary decoration | one decorative blob; one "Unlock" phrase in a footer |

Fix S0 then S1 first. Do not spend the budget on S3 while S0 remains.

Judge both the instance and its cumulative effect. Repetition alone does not raise severity: first
check whether the treatment serves the same job on each route. When a shared pattern makes several
important routes feel interchangeable or hides the product's character, classify that systemic harm
at its actual severity instead of leaving every instance as an isolated S2.

## Diagnosis level and repair scope

Before meaningful repair, name the dominant weakness, likely root cause, affected route jobs, and
expected rendered delta. Use one or more internal levels: **surface** (a styling default),
**component** (a contained pattern), **composition** (mass, hierarchy, density, allocation, rhythm),
**system** (shared grammar across important regions/routes), **identity** (interchangeability despite
sound structure), or **interaction** (behavior ignores product semantics). Level describes the
cause and required effect, not the number of edited files. Severity describes its impact.

A local issue can need one local edit. A composition issue needs a changed visual relationship;
a systemic issue needs the shared cause reduced across affected jobs. One shared CSS rule can
achieve that; hundreds of cosmetic edits may not. More specific copy or a better component does
not close a structural finding if the original arrangement still dominates. Group symptoms under
their cause, rank the dominant cause first, note secondary contributors, and protect strengths.

Inspect whole-screen structure and likely attention flow, not just component quality. Ask whether
surfaces earn their attention relative to information/interaction value. A pale illustration,
saturated help region, sidebar, or persistent chrome can outweigh the job; darkness is not the
criterion. Equal-card grammar, alternating strips, centered stacks, CTA clusters, or identical
route skeletons are candidates only when they fail the actual jobs. Conventional parts may be
harmless alone yet harmful as the dominant combined grammar. Sparse, unusual, fashionable, or
understated design may be justified. Novelty and library-default counts do not establish quality.

## Evidence format

Record every S0–S2 finding in this shape (S3 can be a list):

```text
ELEMENT: where (route, region, component)
ROOT CAUSE / LEVEL: observed weakness, cause, level(s), affected route jobs, expected visual delta
CURRENT TREATMENT: what it looks like and its values
WHY IT LOOKS GENERATED: the class from the taxonomy and the specific signal
PRODUCT CONTEXT: actual user job, information, workflow, state; niche profile only if needed
CURRENT IDENTITY: the ledger carriers this element should express
SOURCE / CSS: file, component, token or classes (E3), or "not traced" with reason
REPLACEMENT: the specific change
WHY REPLACEMENT FITS: which carrier or niche reality it serves
VERIFICATION / RESULT: same-view before/after effect on the root cause; improved, unresolved, or escalated; UNVERIFIED if unavailable
SEVERITY: S0–S3 · EVIDENCE: E1–E6
```

## Choosing a replacement: "What would THIS product do instead?"

1. Start from the identity statement and protected list (`references/identity-extraction.md`).
2. Use actual product information, workflow, state, and user priority. Read a niche profile only
   when its realities could change this decision; a niche never chooses a style.
3. For a structural replacement with an open choice, compare distinct product-relevant alternatives
   from `references/_shared/anti-generic-alternatives.md`. If one repair clearly addresses the
   observed defect without weakening identity, implement and verify it directly.
4. Prefer strengthening an existing carrier over introducing a new one. A new carrier must trace to
   the product's domain, content, mechanic, audience, or values
   (`references/_shared/product-identity.md`).
5. Check `references/_shared/design-vs-decoration.md`: the replacement must do a job, not decorate
   differently.

### Reassign the job, not a style

When removing a default, ask what should occupy its hierarchy instead: the core instrument, real
product evidence, consequential state, primary action, or necessary context. Sometimes nothing is
needed; purposeful negative space can remain. Do not leave a hole where useful grouping or feedback
was lost. Strengthen a product-derived relationship rather than mapping an identity label to a
font, color, card count, or layout. Check structure, behavior, hierarchy, and expression together.

## Trace, repair, rerender

1. **Trace** each S0/S1 to the highest shared source: token, theme config, shared component, layout
   template, content file. For complex cascades, hand to interface-forensics with the element and
   hypothesis; take back its source trace.
2. **Group** findings by shared cause and affected route jobs. This exposes local symptoms of one
   system decision while keeping route-specific needs visible.
3. **Choose intervention scope from the cause.** A contained issue gets a contained fix. A shared
   token, component, or composition convention gets repaired across the affected routes. If all
   interior routes inherit the same generic composition, changing card shadows alone does not close
   the finding; give each route a composition suited to its content and user job while retaining
   justified identity carriers and working mechanics.
4. **Repair** in severity order. Keep accessible primitives; change tokens, composition, content.
5. **Rerender and directly compare** the same routes, sizes, and states. Return to the original
   dominant weakness: was it materially reduced at that level? Did a new dominant weakness appear?
   Does the whole result feel more intentional and product-specific, with important functionality
   intact? Check a narrow viewport where structure or hierarchy could change. Write only material
   findings, not a separate answer to every question.
6. **Stress** a sparse state, a dense state, long text, and a phone size.
7. **Check for new slop:** did the fix introduce a new default (swapping purple for teal gradient,
   cards for identical bordered boxes, fade-up for slide-in)? If so, treat it as a finding.
8. **Check resolution at the diagnosed scope.** If the shared pattern still dominates any affected
   route, return to its source and continue. If it no longer harms the product, a small patch is
   complete; do not change mechanics or add novelty just to make the diff larger.
9. **Revert** any change that weakens a protected characteristic or usability.

## Originality tests

1. **Twenty-sites test:** hide the logo and product name. Could the surface belong to twenty
   unrelated generated sites? If this interchangeability materially harms the product, continue on
   that cause; a familiar, job-specific professional tool does not need novelty for its own sake.
2. **Weirdness test:** is the interface distinctive only because something is strange (odd cursor,
   random font, unexplained shape)? Yes → continue; distinctiveness must come from decisions that
   belong together.
3. **Coherence check:** name the 2–4 carriers and show each on a sparse surface, a dense surface, and
   an error or empty state (anchor: `references/_shared/logo-removal-test.md`).

## Completion and operational records

Load the shared anti-slop gate for the final decision. PASS means no material anti-slop intervention
remains justified; REPAIR means the root cause is known and this branch can address it; ESCALATE
means another specialist owns the unresolved repair. These are internal results, not new modes.
Do not close a composition/system diagnosis with content polish inside the same weak arrangement.
Continue if feasible, or explicitly leave it unresolved. If rendering is unavailable, say
**UNVERIFIED — NOT VERIFIED IN RENDERED OUTPUT** with the blocker; do not say the slop was resolved.

Use the existing handoff contract only for unresolved structural, identity, interaction, or state
work needing specialist depth. Include job, locked truth, open space, root weakness, sources and
required references, expected output, and a visible stop condition. A missing required reference
blocks that branch. Do not send the entire context or activate an automatic specialist bundle.

In formal debug records, extend the existing trace entry with operational metadata:
`diagnosis: {levels, rootCause, targetDelta}`, `repairLevel`, and `result` (improved, unresolved,
escalated, pass, or unverified). Use existing required/loaded references, changed files, verification,
and stop reason fields for sources and before/after evidence. Level names express scope of effect;
a shared-rule repair can be systemic. References stay exact paths, without annotations. Keep this
metadata out of ordinary answers and the judge's input. Render/inspection and reference claims are
checked against tool activity; a diagnosis/repair-level mismatch needs review, never a diff-size
heuristic. The judge assesses outcome from the public answer and scenario, not private trace data.

## Report

```text
Scope: routes, sizes, states rendered (before and after)
Identity statement: …
Protected (kept on purpose): …
Findings fixed: S0 n, S1 n, S2 n (evidence-format entries)
Justified and kept: … (with the job each does)
Open: … (reason)
New slop check: none found / found and fixed: …
Originality tests: twenty-sites → …; weirdness → …; carriers on sparse/dense/error → …
Not verified: … (reason)
```

Worked example: `references/_shared/identity-preserving-repair.md`.
