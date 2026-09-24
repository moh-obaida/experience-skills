<!-- GENERATED FROM shared/anti-patterns/workflow-cliches.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Workflow Clichés

Default flow structures that feel "proper" but waste the user's time.

- **The universal wizard.** Five steps with a progress bar for a form that fits on one screen.
- **The confirmation reflex.** "Are you sure?" on reversible, low-cost actions.
- **The success page cul-de-sac.** "Success!" with only "Back to dashboard."
- **The settings detour.** Rename, reorder, or toggle available only in a settings page.
- **The modal for everything.** Every edit opens a dialog, even single fields.
- **The mandatory tour.** A product tour that blocks first use.
- **The empty configuration.** New objects start blank even when the last one was nearly identical.
- **The re-ask.** Asking for language, region, account, or team already known.
- **The single-option picker.** A choice step with one valid option.
- **The blocking spinner.** Long work that holds the user on a page with no way to leave.
- **The reset filter.** Filters, sort, and scroll lost after opening an item and returning.
- **The one-at-a-time list.** No multi-select on lists users routinely process in groups.
- **The sign-up wall.** Requiring an account before any value is demonstrated when it is not needed.
- **The CLI interrogation.** Interactive prompts for values inferable from the project, with no flags.

Each has a legitimate use. A wizard is right when steps depend on earlier answers and the
concepts are unfamiliar. A confirmation is right before irreversible loss. Name the
justification or remove the pattern.
