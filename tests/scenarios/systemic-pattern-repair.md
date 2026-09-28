# Scenario: Repair a Repeated Visual System Across Routes

## Scenario
An invented, usable booking site for Northside Clay (`studio.html`) has a warm kiln palette, a
distinctive serif wordmark, working home, sessions, and class-detail navigation, searchable/filterable
sessions, clear prices and seats, and a direct reservation action. The owner is happy with these
parts. The generator supplied a repeated horizontal card rail and rounded shadow card on all three
views, the same abstract CSS placeholder art for every class, generic lift-and-shadow hover, and
near-identical intro-plus-rail compositions for the two inner views. The repair fixture contains all
three views as hash-linked sections. Invented fixture.

## Prompt
The booking flow works and the warm kiln character feels like our studio, but the whole site still
looks generated. Fix the repeated visual system across home, sessions, and class detail. Keep the
booking content and working actions intact.

Before editing, render all views at desktop and phone sizes with
`node .benchmark/render.mjs before studio.html --views home,sessions,wheel`, then inspect the six
PNG files listed by the command. After editing, run the same command with `after` and inspect all six
resulting PNGs. Finish with a `## Before/after comparison` section that compares the same routes and
sizes and names any remaining issue.

## Current problem
The repeated defaults make distinct route jobs feel interchangeable and make named classes less
specific. The warm palette alone does not compensate for the repeated structure. Search, day filter,
dates, available places, prices, and reservation are already useful and should remain easy to find.

## Expected skills
- anti-ai-slop

## Key principles expected
- Render and record the three views at desktop and phone sizes before repair; extract and protect the
  kiln palette, serif wordmark, class facts, and working booking controls.
- Group the repeated rail, card, art, hover, and composition findings by shared source and route job.
  Assess their cumulative effect without treating repetition by itself as proof of slop.
- Trace the common defaults to their source. Make a systemic structural repair where the route
  compositions are the cause, with a home view for upcoming sessions, a scannable calendar for
  filtering dates, and a class detail view centered on what gets made and how to reserve.
- Replace placeholders and motion with product-specific treatments that the available class content
  supports. Keep or reuse card structures only where they serve a clear job; don't merely restyle
  every card or remove useful session facts.
- Preserve navigation, search, filtering, booking text, prices, seat counts, and warm studio
  character. Do not invent class imagery or interaction behavior unsupported by the fixture.
- Compare before and after at the same views, sizes, and content states. Continue if the shared
  generic composition still dominates a route; stop when the systemic harm is resolved without
  weakening identity or usability.

## Unacceptable recommendations
- A radius, color, or shadow pass that leaves all three views with the same generic composition.
- Deleting useful booking details, filters, or calls to action to make the interface sparse.
- Replacing the warm identity with a cream-and-serif template, a new unrelated style, or another
  default accent.
- Adding invented photos, decorative clay motifs, or motion as a substitute for product-specific
  hierarchy and content.
- Claiming the systemic pattern is fixed without comparing rendered views before and after.
