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

## Evidence format

Record every S0–S2 finding in this shape (S3 can be a list):

```text
ELEMENT: where (route, region, component)
PATTERN SCOPE: shared cause and affected route jobs; say "local" when contained
CURRENT TREATMENT: what it looks like and its values
WHY IT LOOKS GENERATED: the class from the taxonomy and the specific signal
PRODUCT CONTEXT: niche and user job (niche atlas profile)
CURRENT IDENTITY: the ledger carriers this element should express
SOURCE / CSS: file, component, token or classes (E3), or "not traced" with reason
REPLACEMENT: the specific change
WHY REPLACEMENT FITS: which carrier or niche reality it serves
VERIFICATION: rendered before/after at sizes and states (E1/E2), or NOT VERIFIED IN RENDERED OUTPUT
SEVERITY: S0–S3 · EVIDENCE: E1–E6
```

## Choosing a replacement: "What would THIS product do instead?"

1. Start from the identity statement and protected list (`references/identity-extraction.md`).
2. Read the matching niche profile's generated-UI failures and realities
   (`references/_shared/niche-atlas-index.md`, then the niche file). The replacement must serve the
   niche's jobs and states.
3. For a structural replacement with an open choice, compare distinct product-relevant alternatives
   from `references/_shared/anti-generic-alternatives.md`. If one repair clearly addresses the
   observed defect without weakening identity, implement and verify it directly.
4. Prefer strengthening an existing carrier over introducing a new one. A new carrier must trace to
   the product's domain, content, mechanic, audience, or values
   (`references/_shared/product-identity.md`).
5. Check `references/_shared/design-vs-decoration.md`: the replacement must do a job, not decorate
   differently.

### Replacement matrix by identity

| Generated decision | Operational | Editorial | Playful | Material | Technical | Immersive | Institutional | Object |
|---|---|---|---|---|---|---|---|---|
| Purple glow / blobs | remove; show state | remove; type carries | product motif from the world | material texture, photography | real output or diagram | keep if it is the world's light | remove; clarity | object photography |
| Gradient CTA | solid action role | solid, underline links | brand's saturated solid with outline | brand's earthy solid | solid; mono label | world-colored solid | solid, high contrast | black/brand solid |
| Card grid | table or list | sections with rules | chunky objects if actionable | catalog with real photos | spec table | art tiles | plain list with descriptions | one object large |
| Default hero | tool-first | headline as design | stage with the play | image-led maker story | datasheet or real output | immersive scene | task start page | object-first |
| Fade-up everywhere | none; state changes only | none | event celebration on real wins | none | none | choreographed world transitions | none | slow crossfade on images |
| Inter default | keep if scaled; tabular numbers | reading serif + sans | rounded or brand display for titles | slab or serif from brand | technical sans + mono for code | condensed or world display | high-legibility sans | refined serif or brand face |

The matrix proposes; the ledger decides. If the product already uses one of these, strengthen it.

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
5. **Rerender** the same routes, sizes, and states as the baseline. Compare side by side and record
   what visibly changed in hierarchy, composition, and product specificity.
6. **Stress** a sparse state, a dense state, long text, and a phone size.
7. **Check for new slop:** did the fix introduce a new default (swapping purple for teal gradient,
   cards for identical bordered boxes, fade-up for slide-in)? If so, treat it as a finding.
8. **Check resolution at the diagnosed scope.** If the shared pattern still dominates any affected
   route, return to its source and continue. If it no longer harms the product, a small patch is
   complete; do not change mechanics or add novelty just to make the diff larger.
9. **Revert** any change that weakens a protected characteristic or usability.

## Originality tests

1. **Twenty-sites test:** hide the logo and product name. Could the surface belong to twenty
   unrelated generated sites? Yes → continue working on the highest-severity surface.
2. **Weirdness test:** is the interface distinctive only because something is strange (odd cursor,
   random font, unexplained shape)? Yes → continue; distinctiveness must come from decisions that
   belong together.
3. **Coherence check:** name the 2–4 carriers and show each on a sparse surface, a dense surface, and
   an error or empty state (anchor: `references/_shared/logo-removal-test.md`).

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
