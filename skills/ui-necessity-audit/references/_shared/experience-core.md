<!-- GENERATED FROM shared/philosophy/experience-core.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Experience Core: Operating Rules

Every skill in this collection loads this file before starting. Each rule changes what the agent
does. None is a slogan to repeat to the user.

The stance in three lines: consider broadly, intervene selectively, verify deeply. Product
mechanics and the core instrument precede aesthetic systems. Skills are expert lenses, not a
bureaucracy.

## Before judging anything

1. **Classify the surface first.** Name its archetype (FOCUSED, OPERATIONAL, EXPERIENTIAL, CONTENT,
   DATA-HEAVY, TRANSACTIONAL, DISCOVERY, CREATION, LIVE CONTROL). Density, identity, and motion
   expectations follow from it. A tax form and a classroom game are judged differently.
2. **Get the strongest evidence available.** Rendered > measured > source > documented >
   screenshot > assumed. If a browser, simulator, or terminal is available, look at the real
   result. Label every finding with its level (see the evidence levels below).
3. **No evaluative adjective before evidence.** Do not write "clean," "modern," "premium,"
   "intuitive," "great idea," or "looks good" until you have stated the observation that earns it.
   If the observation does not earn it, do not write it.
4. **Understand the goal before agreeing.** The user's enthusiasm is not evidence. Restate the goal,
   then evaluate the proposal against it.

## When looking at a surface

5. **Alignment is not composition.** If content is centered with large regions that have no role,
   treat it as dead space, not minimalism, unless an environment visibly frames it.
6. **Empty space must have a stated job** (frame, separate, pace). If you cannot state the job,
   the space is a problem.
7. **Never fix sparseness with filler.** Do not add stats, tips, promotional panels, decorative
   cards, or illustrations to fill space. Use real state, real next actions, or composition.
8. **Personality may live in the environment and in causal product behavior.** Before making a basic control
   (input, button, select, toggle) more unusual, ask whether it makes the task faster or more
   reliable. If not, reject the change and put the personality in the page around it.
9. **Every visual treatment needs a job.** For each gradient, shadow, blur, radius, pill, card, or
   animation, state what it communicates. No job: remove it. Patterns are never wrong by category.
10. **Identity must survive the logo test,** or plainness must be a deliberate choice suited to the
    archetype (public services, utilities).

## When looking at a flow

11. **Count before and after.** Actions, inputs, decisions, navigations, confirmations, blocking
    waits. No claim of "simpler" or "faster" without the numbers (estimated counts must say so).
12. **Before any question, field, or choice screen: does the software already know the answer?**
    If yes, use it and show it with a way to change it. If only one option is valid, skip the step.
13. **Undo for reversible actions, confirmation only for consequential ones.** Never remove a
    safeguard on money, irreversible deletion, or publishing to many people; make it clearer instead.
14. **Automate mechanics, preserve judgment.** Keep the decision that is the user's value (judging,
    approving, choosing, creating) with the user.
15. **Every outcome needs a next action,** and long work must not hold the user on a spinner if the
    architecture can run it in the background.

## When looking at states and motion

16. **Check real states, not the showcase.** At minimum: empty or sparse, dense or long content,
    loading, error, the smallest supported size, and keyboard use.
17. **Transport failure is not product failure.** Never display "failed" when the outcome is
    unknown; reconcile with the source of truth first. In simulations, keep authentic system output visible where useful and add concise interpretation; do not replace every real error with generic prose.
18. **Motion must explain an event** (arrival, transfer, change, resolution, attention). Remove
    motion from non-events. Every meaningful motion needs a reduced-motion alternative.
19. **Accessibility is in scope for every change:** contrast, focus, keyboard, semantics, target
    size, zoom, reduced motion. For a core instrument, test these at the instrument itself; preserve
    LTR command/code/path semantics inside an RTL interface when appropriate.

## When changing things

20. **Honor the mode.** REVIEW: change nothing. REPAIR: do not stop at advice when you can edit.
    BUILD: include states. VERIFY: check, do not redesign.
21. **Structure before decoration.** Fix hierarchy, composition, and flow before identity and motion.
22. **Render after meaningful changes when a runnable surface exists** and inspect again. Use the
    `experience-operating-contract.md` render exceptions when rendering is impossible. Never report
    "fixed" or "verified" for something you only read or wrote; say **NOT VERIFIED IN RENDERED
    OUTPUT** and why when the exception applies.
23. **Critique your own result** as if someone else made it before presenting it.

## When reporting

24. **Lead with the most important finding,** not with balance or praise.
25. **Every recommendation names its tradeoff:** "works here because…; would be wrong when…".
26. **List what was not verified** and the exact check the user should run.

## Activation and handoff

27. **Load depth conditionally, not ceremonially.** When a direction, composition, workflow,
    control, state, motion, or anti-slop condition is present, load the matching reference before
    recommending or editing. Do not load every library file for unrelated work.
28. **Treat significant work as a graph.** Pass the previous specialist's decision and open risks
    to the next specialist. Stop when the next specialist would address only low-impact polish.
29. **Use the evidence contract.** For meaningful work distinguish Observed, Measured, Changed,
    Verified, and Not verified. A reference read without the required action is not compliance.

## Product-first decisions

30. **Name the primary job, repeated loop, core instrument, and a few invariants before visual
    selection.** The core instrument needs spatial authority, focus continuity, and responsive
    protection. Avoiding a visual cliché must not demote it.
31. **Use the smallest useful specialist set.** Consider the installed lenses, activate only those
    with material leverage, and allow an explicit no-change result. Hand off only an observed or
    credible unresolved concern with its consequence and uncertainty.
32. **Preserve coherent native reasoning.** A generic framework or Atlas candidate must identify a
    concrete failure, missed requirement, or better product-specific alternative before replacing
    an existing strong decision. Observed product behavior outranks the design artifact.
33. **Distinguish confidence from severity.** Confirmed issue, strong concern, possible concern,
    optional opportunity, and stylistic preference are not interchangeable. Fix primary-journey
    blockers before cosmetic preferences.
34. **Verify scenarios and transitions, not showcase screens alone.** Repeat the core loop, insert
    mistakes, recover, complete and continue, leave for secondary surfaces and return. Check state
    ownership and focus through those transitions, including at narrow sizes.
35. **Watch for a house style.** Restrained editorial cream/serif/earth-tone interfaces are one
    option, not the default escape from generated UI. Test both excessive styling and underdesigned
    restraint against the user's actual task.
36. **Stop when another reference or review cannot change a material decision.** Reserve attention
    for implementation and verification. A working primary journey with coherent state, usable
    responsive behavior, and no high-severity issue is a legitimate stopping point.

## Experience quality beyond function

37. **A technically correct interface can still be experientially poor.** Passing tests, type
    checks, lint, and accessibility scans are not evidence of visual or experiential quality. Look
    at the rendered result in the states that matter before saying it is good. Visual defects the
    checks cannot see (a cut-off border, two selected indicators, a clipped focus ring) are named
    and traced, not assumed away.
38. **Every visible element needs a justified responsibility.** For each label, badge, pill, card,
    separator, notice, instruction, and option, ask what it tells or lets the user do that is not
    already visible. Give a doubtful element one verdict (keep, remove, merge, relocate, rewrite,
    conditional display, needs product decision) with proof. Never remove security information,
    required disclosures, accessibility affordances, critical status, safeguards, or recovery paths
    because they look redundant.
39. **Evaluate composition at screen level before component level.** A collection of acceptable
    components is not a good screen. Judge the focal point, allocation, and relation between the
    core instrument and its support first; adjust components after. A satisfactory screen is
    preserved even when another layout is possible.
40. **Shared components behave consistently, and consistency is not uniformity.** One pattern, one
    contract: fix a shared defect at the component or token that owns it, not page by page. Keep
    legitimate differences between public pages, dashboards, editors, and immersive screens.
41. **States decide when information is useful.** An element appears because the current state
    makes it useful, not because the component always renders. An error follows the attempt, clears
    when its cause is fixed, and releases its space; a transition clears what the old state owned.
42. **User-facing language reflects real product behavior.** Accuracy comes before voice. Errors
    state the problem and the correction in the user's terms; internal identifiers stay in
    diagnostics. A rewrite preserves facts, constraints, localization intent, and legal and
    financial precision.
43. **Visual quality is shown in rendered output, and a screenshot is evidence of appearance, not
    of interaction.** A green test suite is not proof of visual or experiential quality. When
    rendering is unavailable, write NOT VERIFIED IN RENDERED OUTPUT and list the checks.
44. **Strong design is product-specific, not universally minimalist.** More color, motion, or
    decoration is not an improvement by itself, and stripping an expressive product to flat
    restraint is not either. Judge each treatment against the product's mechanics and audience;
    overdesign is a defect as real as genericness.

## Evidence levels

| Level | Label | Meaning |
|---|---|---|
| E1 | RENDERED | Observed running (browser, simulator, device, terminal), including interaction |
| E2 | MEASURED | Geometry, overflow, computed styles, timings, counted steps |
| E3 | SOURCE | Read in code or configuration |
| E4 | DOCUMENTED | Specs, design system, requirements, analytics provided |
| E5 | SCREENSHOT | A static image: one state, one size |
| E6 | ASSUMED | Inferred from description or convention |

Only E1 and E2 support the word "verified."
