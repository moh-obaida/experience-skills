# Anti-Slop Gate

Run before presenting any design or UI work, and when reviewing someone else's. Each "yes"
is not automatically a failure; it is a demand for justification. Unjustified yeses must be
fixed or explicitly accepted by the user.

## Identity
- [ ] Could this be any AI startup's product if the name were swapped?
- [ ] Does the page fail the logo test (no recognizable identity without the logo)?
- [ ] Are fashionable patterns (bento, glass, aurora gradients, dark neon) used without a
      product reason?

## Composition
- [ ] Is most of the first viewport unused without a clear framing purpose?
- [ ] Is the layout merely centered/aligned rather than composed around a focal point?
- [ ] Are we calling something "clean" because nothing exists?

## Surface
- [ ] Do gradients exist without carrying meaning?
- [ ] Are cards used for content that is not independent objects?
- [ ] Are pills used for things that are not filters, tags, or tokens?
- [ ] Are rounded containers, shadows, or blur applied uniformly to everything?
- [ ] Is there tiny uppercase gray microtype above headings without a typographic system?

## Content
- [ ] Did we add statistics, cards, tips, or illustrations to fill space?
- [ ] Is any copy generic enough to appear on any product ("Unlock," "Seamlessly," "Elevate")?
- [ ] Are icons decorating rather than disambiguating?

## Interaction
- [ ] Are controls unnecessarily clever (custom versions of standard inputs)?
- [ ] Does personality live in the controls while the environment is bland?

## Motion
- [ ] Is motion uniform (fade/slide on everything) rather than event-driven?
- [ ] Is there motion without a reduced-motion path?

## Reasoning
- [ ] Did we praise anything before evaluating it?
- [ ] Did we copy a competitor's surface without stating why it applies here?
- [ ] Did we verify the rendered result, or only read the code?

## Output

```
Anti-slop gate: 3 flags
- Gradient on all buttons (no meaning) → replaced with solid brand color; gradient kept only
  in hero background as light source.
- 4 stat cards added to empty dashboard → removed; replaced with "continue" row from real data.
- Not rendered at mobile width → UNVERIFIED; check at 375×812.
```
