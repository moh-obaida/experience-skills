# Installation

## With the `skills` CLI (recommended)

Verified with `skills` CLI 1.7.0. Replace `<owner>` with the GitHub account hosting this repository.

```bash
# Interactive: choose skills and agents
npx skills add <owner>/experience-skills

# List skills without installing
npx skills add <owner>/experience-skills --list

# One skill
npx skills add <owner>/experience-skills --skill experience-architect
npx skills add <owner>/experience-skills --skill composition-repair

# User-level (global) instead of project-level
npx skills add <owner>/experience-skills --skill experience-architect -g

# Non-interactive for one agent
npx skills add <owner>/experience-skills --skill experience-architect -a claude-code -y

# Copy files instead of symlinking
npx skills add <owner>/experience-skills --skill anti-slop-ui --copy

# Everything, for every agent the CLI supports, without prompts
npx skills add <owner>/experience-skills --all
```

Notes:

- `--all` is shorthand for all skills **and all agents** with no prompts. If you use one agent,
  prefer `--skill '*' -a <agent>`.
- Project-level installs go into the agent's project folder (for Claude Code, `.claude/skills/`);
  `-g` installs into your user folder.
- Each skill is self-contained: installing one skill brings its shared references with it.
- `npx skills update` updates installed skills; `npx skills remove` removes them.

Run `npx skills --help` for the CLI's current options.

## Manually

Copy any `skills/<name>/` folder into your agent's skills directory. Each folder is complete.

## Script requirements

Only needed if you want the agent to run the measurement scripts:

- Node.js 18 or newer for skill scripts.
- For browser-based scripts (`composition-repair`, `responsive-validation`): Playwright in the
  project being checked, e.g. `npm i -D playwright && npx playwright install chromium`, or
  `npm i -D playwright-core` and pass `--channel chrome` to use an installed Chrome.

Without these, the skills still work; the agent performs static analysis and says what it could
not verify.

## Using the skills

Most agents pick skills automatically from their descriptions. You can also ask directly:

- "Use experience-architect to review the join page."
- "Run the anti-slop gate on this landing page before we ship."
- "Use workflow-compression on the export flow and give me before/after counts."
- "Critical review: is this redesign better than what we have?"
