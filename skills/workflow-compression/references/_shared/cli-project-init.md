<!-- GENERATED FROM examples/workflow/cli-project-init.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: CLI Project Initialization

**Archetype:** CREATION (terminal) · **Product types:** developer tools, CLIs
**Skills:** workflow-compression, interaction-design, state-design

## Context

A CLI that adds a deployment configuration to an existing repository. Developers run it once per
project, often in CI templates and scripts too.

## The bad version

```
$ tool init
? Project name: _                      (already in package.json)
? Framework: (Use arrow keys)          (detectable from dependencies)
? Package manager: npm / yarn / pnpm   (lockfile present)
? Output directory: _                  (framework default)
? Node version: _                      (.nvmrc present)
? Are you sure? (Y/n)
```

In CI (non-interactive), it hangs waiting for input.

## Correct analysis

- F1 REDUNDANT INPUT ×5: all values are inferable from project files.
- F5 CONFIRMATION TAX: writing a config file is reversible (it's in git).
- Non-interactive hang: a correctness bug, not only friction.
- No way to override without answering prompts.

## The better version

```
$ tool init
Detected:
  name        my-app            (package.json)
  framework   Next.js 15        (dependencies)
  packages    pnpm              (pnpm-lock.yaml)
  output      .next             (framework default)
  node        22                (.nvmrc)

Wrote deploy.config.json
Next: tool deploy --preview
```

- Flags override anything: `tool init --framework remix --output build`.
- `--yes` is implied when not a TTY; prompts appear only for values that cannot be inferred, and only
  in interactive terminals.
- `--dry-run` prints the config without writing.
- Clear, actionable error if detection fails: "Couldn't detect a framework. Pass --framework (one of:
  next, remix, astro, vite)."

## Measurements

`Before: 6 prompts · 1 confirmation · hangs in CI`
`After: 0 prompts (typical) · prints resolved plan · works in CI · next command printed`

## Why this works

It infers, shows what it inferred, allows override, and prints the next step. The philosophy is
the same as in graphical interfaces.

## Universal analogues

Scaffolders, migration tools, deploy commands, package publishing, database setup.
