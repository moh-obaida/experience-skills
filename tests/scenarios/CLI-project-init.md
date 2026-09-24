# Scenario: CLI Project Initialization

## Scenario
A deployment CLI's `init` command asks six interactive questions (project name, framework, package
manager, output directory, Node version, confirmation). All answers are present in the repository
(package.json, lockfile, .nvmrc). In CI it hangs waiting for input.

## Current problem
Redundant input; confirmation tax; non-interactive failure; no override flags; no next step.

## Expected skills
- workflow-compression
- interaction-design
- state-design

## Key principles expected
- Infer defaults from the project; print the resolved plan; allow flags to override.
- Never prompt in non-interactive environments; fail with actionable errors when inference fails.
- Print the next command.
- The philosophy is not web-only.

## Unacceptable recommendations
- Making the prompts prettier (colors, spinners) without removing them.
- Removing the ability to override inferred values.
- Silently guessing when detection fails.
