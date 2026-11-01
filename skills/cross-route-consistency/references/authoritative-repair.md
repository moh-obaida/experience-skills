# Authoritative Repair: Fix the Owner, Not the Pages

A cross-route difference has a cause somewhere in code. The repair belongs where the cause lives so
that every route inherits it and the next route does too.

## Trace to the owner

For each DRIFT, DUPLICATE, CONFLICT, or OVERRIDE finding:

1. Find the element's component or markup on each route. Search the source for the class, role, or
   component name; check for inline styles and utility classes that bypass the component.
2. Identify the rule that sets the differing property on each route. Distinguish the shared
   definition, a local override, and a page-level stylesheet.
3. Decide the owner: the component that should define the pattern, a token (radius, stroke,
   shadow, spacing, color role), or a global rule.
4. If no owner exists (the pattern is rebuilt on every page), the owner is the component you will
   create.

Evidence labels: the render shows the symptom (E1), computed styles show the values (E2), the
source shows the owner (E3). If you cannot read the source, report the symptom and the nearest
evidence; do not guess the owner.

## Repair ladder

Use the least invasive step that fixes the shared cause.

1. **Remove the override.** The route restates a shared value or contradicts it; delete the local
   rule and let the component apply.
2. **Fix the owner.** The component or token holds the defect; fix it once.
3. **Consolidate duplicates.** Choose the better implementation (accessibility, behavior, RTL),
   migrate the others, delete the rest. Keep the same user-visible behavior unless it was wrong.
4. **Define the contract.** Write down what the pattern does: states, keyboard, error behavior,
   localization, variants. A short comment or doc beside the component is enough.
5. **Add a variant** only for a justified difference (context, density), and give it a name.

Avoid a broad design-system refactor when the task is three components.

## Examples (invented)

- **Language selector.** `/` uses a native select, `/host` a custom dropdown, `/results` a pair of
  links. They duplicate one job. Pick the accessible implementation, make it one component, and
  mount it in the shared header; keep a compact variant for the editor if the header is dense.
- **Selected tab.** A border-bottom indicator on two routes and a filled pill on a third. Choose the
  indicator by the product's visual language, set it in the tab component, and delete the third
  route's override. If the editor needs a pill for a reason, make it a named variant.
- **Border cut-off on cards.** The same partial border appears on nine routes. One shared card rule
  sets `border-width: 2px 2px 0`. Fix the rule. Do not touch nine pages.
- **Validation errors.** `/join` shows inline field errors; `/host` shows a toast for the same
  condition. Define one pattern for ordinary validation (inline, associated with the field, cleared
  on correction) and keep toasts for events with no field.

## What not to do

- Patch the page you happen to be looking at when the owner is shared.
- Change the shared component to fit one route's quirk.
- Merge two patterns that look alike but serve different jobs.
- Flatten a legitimate archetype difference.

## Verify

1. Rerun `scripts/compare-routes.mjs` with the same routes, size, and (if used) `--rtl`.
2. Recapture the same routes and states and open the captures: the target pattern now agrees.
3. Check one route you did not edit: a shared fix can break a place that relied on the old value.
4. Check the keyboard and focus on the consolidated component.
5. Check each supported language and direction.

If a route cannot be rendered (auth, data), list it as **NOT VERIFIED IN RENDERED OUTPUT** with the
reason.

## Report

State: the patterns inventoried, the differences by class, the owner of each fix, what was
preserved as intentional or contextual, what was verified and how, and what remains unexplained.
Short, one line per finding. No page-by-page list when one owner explains the finding.
