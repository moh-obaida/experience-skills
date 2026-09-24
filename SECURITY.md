# Security Policy

Agent skills can contain executable scripts that run with the agent's permissions. This
project treats that seriously.

## Rules for scripts in this repository

- **No exfiltration.** Scripts never send file contents, page contents, or environment data anywhere.
- **Explicit network use only.** Layout scripts open only the URL the user passes. Scanners read
  local files only. No telemetry, no update checks.
- **No destructive actions.** Scripts do not delete, move, or modify user files. Output files
  (screenshots) are written only to a directory the user names with a flag.
- **No secrets.** Scripts never read credentials, and never log environment variables.
- **Minimal dependencies.** Skill scripts use only Node.js built-ins plus an optional,
  user-installed Playwright. Repository tooling has one dev dependency (`playwright-core`).
- **Documented requirements.** Any script that needs a tool or network access says so in
  `--help`, in its skill's `compatibility` field, and in the skill's references.

Contributors adding or changing scripts must follow these rules and disclose any tool or network
requirement in the pull request.

## Repository hygiene

`npm run validate` scans the repository for private home-directory paths, common secret formats
(cloud keys, tokens, private keys), and image files (screenshots and third-party assets are not
allowed). Maintainers can list additional local-only terms in a gitignored `.private-terms` file.

## Reporting a vulnerability

Please report security issues privately through GitHub's "Report a vulnerability" feature on
this repository (Security tab) rather than opening a public issue. Include the affected skill or
script, steps to reproduce, and the impact. We aim to acknowledge reports within a week.

## Using skills safely

Review skills before installing them, including this collection. Installed skills run with your
agent's permissions.
