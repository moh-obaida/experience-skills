# Observation metadata and research discipline

The Markdown files in this folder are the source of truth for dated observations. Each `##`
surface heading records the product, surface, public URL, method, and date. Run:

```bash
npm run audit:observations
```

to validate and inspect the heading-level manifest. `npm run audit:observations:write` regenerates
`metadata.json`.

The manifest deliberately distinguishes what the heading records from what the observation bullets
may contain. Viewport, region, access, interaction, and state are not guessed. When a new research
pass observes a mobile, authenticated, regional, or non-default state, add that fact to the heading
and bullets on the same dated observation; never edit an old observation to make it claim a later
state.

## Required metadata where practical

```text
product
surface
URL
date
viewport
method (rendered, text/documentation, or both)
access (public, logged-out, authenticated, or documentation)
region
interaction performed
state observed
```

`not recorded in source heading` is an honest gap, not a pass. The coverage report uses these gaps
to prioritize the next research pass, especially product interiors, mobile states, errors, empty
states, and authenticated workflows.
