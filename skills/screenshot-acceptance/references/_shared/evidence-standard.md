<!-- GENERATED FROM shared/evaluation/evidence-standard.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Evidence Standard

Every finding and recommendation should say what it rests on.

## Evidence levels

| Level | Label | Examples |
|---|---|---|
| E1 | RENDERED | Observed in a running browser, simulator, device, or terminal, including interaction |
| E2 | MEASURED | Element geometry, overflow reports, computed styles, timing, step counts from a real flow |
| E3 | SOURCE | Read in code, markup, styles, configuration |
| E4 | DOCUMENTED | Product specs, design system docs, requirements, analytics provided by the user |
| E5 | SCREENSHOT | Static image provided by someone; one state, one size |
| E6 | ASSUMED | Inferred from description or convention |

## Rules

1. **Label claims.** Findings carry their level: `[E2 measured]`, `[E3 source]`, `[E6 assumed]`.
2. **Do not upgrade evidence.** Reading CSS that "should" work is E3, not E1.
3. **Verify before "fixed."** A repair is verified only at E1 or E2. Otherwise say
   "changed, not verified" and list the checks.
4. **Name gaps.** List what could not be checked and why (no browser, no data, no access).
5. **Prefer disconfirming checks.** Look for the state or size where your conclusion would
   fail, not only the one where it holds.
6. **Separate observation from interpretation.** "The primary button is below the fold at
   1366×768 [E2]" is an observation. "Users will miss it" is an interpretation.

## When tools are unavailable

If the agent has no browser, device, or runtime:

- Do static analysis thoroughly.
- Write the exact manual checks the user should run, with sizes and states.
- Keep conclusions provisional and say so once, clearly, rather than hedging every sentence.
