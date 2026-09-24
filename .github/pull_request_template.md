## What problem does this solve?

<!-- The user-facing or agent-facing problem. Link an issue if there is one. -->

## Which skill(s) or shared modules?

## Is this a new or modified principle?

<!-- If yes: state the principle, where it applies, and where it does NOT apply. -->

## Example

<!-- A concrete case where the old guidance failed or the new guidance helps. -->

## Failure mode

<!-- How could this change lead an agent to a bad recommendation? How is that prevented? -->

## Checklist

- [ ] Tests or eval fixtures added/updated (or not applicable, with reason)
- [ ] `npm run sync` run after editing `shared/`, `examples/`, or catalog shared lists
- [ ] `npm run catalog` run after changing descriptions or adding/removing files
- [ ] `npm run check` passes
- [ ] Public-safe: no private data, secrets, screenshots, or copied proprietary text
- [ ] Scripts (if any): `--help`, exit codes 0/1/2, no hidden network calls, no destructive actions
- [ ] CHANGELOG entry under "Unreleased"
