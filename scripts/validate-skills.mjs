#!/usr/bin/env node
// Validate every skill against the Agent Skills specification and this repository's conventions.

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import {
  SKILLS_DIR, skillDirs, readSkill, reporter, repoRel, listFiles, codePathRefs, markdownLinks,
  isExternal, packageVersion, FrontmatterError,
} from './lib/repo.mjs';

// Specification rules (agentskills.io specification)
const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ALLOWED_KEYS = new Set(['name', 'description', 'license', 'compatibility', 'metadata', 'allowed-tools']);

// Repository conventions
const REQUIRED_SECTIONS = ['## Use this when', '## Do not use this when', '## Workflow', '## Completion criteria'];
const PLACEHOLDER_RE = /\b(?:TODO|TBD|FIXME|lorem ipsum)\b|\[placeholder\]/i;
const SKILL_MAX_LINES = 500; // spec recommendation (hard limit here)
const SKILL_TARGET_LINES = 300; // repo target (warning)
const MIN_REFERENCE_LINES = 15;

export function validateSkill(name, r, { version } = {}) {
  const root = join(SKILLS_DIR, name);
  const skillPath = join(root, 'SKILL.md');
  if (!existsSync(skillPath)) { r.error(`${name}: missing SKILL.md`); return; }

  let skill;
  try {
    skill = readSkill(name);
  } catch (e) {
    r.error(e instanceof FrontmatterError ? e.message : `${name}: ${e.message}`);
    return;
  }
  const { data, body, text } = skill;
  const where = `skills/${name}/SKILL.md`;

  for (const key of Object.keys(data)) {
    if (!ALLOWED_KEYS.has(key)) r.error(`${where}: unknown frontmatter key "${key}"`);
  }
  // name
  if (typeof data.name !== 'string' || !data.name) r.error(`${where}: "name" is required`);
  else {
    if (data.name.length > 64) r.error(`${where}: name longer than 64 characters`);
    if (!NAME_RE.test(data.name)) r.error(`${where}: name must be lowercase letters, digits, and single hyphens`);
    if (data.name !== name) r.error(`${where}: name "${data.name}" does not match directory "${name}"`);
  }
  // description
  if (typeof data.description !== 'string' || !data.description.trim()) r.error(`${where}: "description" is required`);
  else {
    if (data.description.length > 1024) r.error(`${where}: description is ${data.description.length} characters (max 1024)`);
    if (!/\bUse (?:when|this when|it when|before)\b/.test(data.description)) r.error(`${where}: description must say when to use the skill ("Use when …")`);
    if (data.description.length < 200) r.warn(`${where}: description is short (${data.description.length} chars); include trigger keywords`);
  }
  // optional fields
  if (data.license !== 'MIT') r.error(`${where}: license must be "MIT" (found ${JSON.stringify(data.license)})`);
  if (data.compatibility !== undefined && (typeof data.compatibility !== 'string' || data.compatibility.length > 500)) {
    r.error(`${where}: compatibility must be a string of at most 500 characters`);
  }
  if (data.metadata !== undefined) {
    if (typeof data.metadata !== 'object') r.error(`${where}: metadata must be a map`);
    else {
      for (const [k, v] of Object.entries(data.metadata)) {
        if (typeof v !== 'string') r.error(`${where}: metadata.${k} must be a string`);
      }
      if (!/^\d+\.\d+\.\d+$/.test(data.metadata.version ?? '')) r.error(`${where}: metadata.version must be a semver string`);
      else if (version && data.metadata.version !== version) r.error(`${where}: metadata.version ${data.metadata.version} does not match package.json ${version}`);
    }
  } else r.error(`${where}: metadata.version is required by repository convention`);

  // body
  const lines = text.split('\n').length;
  if (lines >= SKILL_MAX_LINES) r.error(`${where}: ${lines} lines (must stay under ${SKILL_MAX_LINES}; move detail to references/)`);
  else if (lines > SKILL_TARGET_LINES) r.warn(`${where}: ${lines} lines (target ≤ ${SKILL_TARGET_LINES})`);
  for (const section of REQUIRED_SECTIONS) {
    if (!body.includes(`\n${section}`)) r.error(`${where}: missing section "${section}"`);
  }

  // files in the skill
  const files = listFiles(root);
  for (const file of files) {
    const rel = repoRel(file);
    if (!/\.(md|mjs|js|json|txt)$/.test(file)) continue;
    const content = readFileSync(file, 'utf8');
    if (!content.trim()) r.error(`${rel}: empty file`);
    if (!file.includes('_shared') && PLACEHOLDER_RE.test(content)) r.error(`${rel}: contains placeholder text (TODO/TBD/FIXME/lorem)`);
    if (file.endsWith('.md')) {
      for (const ref of codePathRefs(content)) {
        if (!existsSync(resolve(root, ref.target))) r.error(`${rel}:${ref.line}: referenced path "${ref.target}" does not exist in the skill`);
      }
      for (const link of markdownLinks(content)) {
        if (isExternal(link.target)) continue;
        const target = resolve(dirname(file), link.target.split('#')[0]);
        if (!existsSync(target)) r.error(`${rel}:${link.line}: broken link "${link.target}"`);
      }
    }
  }

  // references: each own reference is reachable from SKILL.md (no orphans, no deep chains)
  const refDir = join(root, 'references');
  if (existsSync(refDir)) {
    for (const entry of readdirSync(refDir)) {
      const full = join(refDir, entry);
      if (statSync(full).isDirectory()) continue;
      const refPath = `references/${entry}`;
      if (!text.includes(refPath)) r.error(`${where}: reference ${refPath} is not mentioned in SKILL.md (orphan)`);
      const refText = readFileSync(full, 'utf8');
      if (!/^# /m.test(refText)) r.error(`skills/${name}/${refPath}: must start with a "# " heading`);
      if (refText.split('\n').length < MIN_REFERENCE_LINES) r.warn(`skills/${name}/${refPath}: very short reference (${refText.split('\n').length} lines)`);
    }
  }
  if (existsSync(join(root, 'references', '_shared')) && !text.includes('references/_shared/')) {
    r.error(`${where}: vendored references/_shared/ exists but SKILL.md never points to it`);
  }

  // scripts: must document --help, and SKILL.md must mention each script
  const scriptDir = join(root, 'scripts');
  if (existsSync(scriptDir)) {
    for (const entry of readdirSync(scriptDir)) {
      const full = join(scriptDir, entry);
      if (statSync(full).isDirectory() || !entry.endsWith('.mjs')) continue;
      const src = readFileSync(full, 'utf8');
      if (!src.includes('--help')) r.error(`skills/${name}/scripts/${entry}: must support --help`);
      if (!src.startsWith('#!/usr/bin/env node')) r.warn(`skills/${name}/scripts/${entry}: missing node shebang`);
      if (!text.includes(`scripts/${entry}`)) r.error(`${where}: script scripts/${entry} is not mentioned in SKILL.md`);
    }
  }
}

export function validateSkills({ quiet = false } = {}) {
  const r = reporter('validate-skills');
  const version = packageVersion();
  const dirs = skillDirs();
  if (!dirs.length) r.error('no skills found under skills/');
  for (const name of dirs) validateSkill(name, r, { version });
  r.finish({ quiet });
  return r;
}

if (process.argv[1]?.endsWith('validate-skills.mjs')) {
  process.exitCode = validateSkills().errors.length ? 1 : 0;
}
