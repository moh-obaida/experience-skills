#!/usr/bin/env node
// Repository-level checks: required files, catalog consistency, version consistency,
// public-safety scans (private paths, secrets, embedded screenshots).

import { readFileSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import { ROOT, loadCatalog, skillDirs, packageVersion, readSkill, reporter, repoRel, listFiles } from './lib/repo.mjs';

export const REQUIRED_FILES = [
  'README.md', 'LICENSE', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'SECURITY.md', 'CHANGELOG.md',
  'ROADMAP.md', 'AGENTS.md', 'package.json', 'catalog/skills.json',
  'docs/architecture.md', 'docs/authoring-skills.md', 'docs/philosophy.md', 'docs/evaluation.md',
  'docs/installation.md', 'docs/contributing-a-skill.md',
  'research/prior-art.md', 'research/visual-reference-catalog.md', 'research/design-research-notes.md',
  '.github/workflows/validate.yml', '.github/pull_request_template.md',
  'THIRD_PARTY_NOTICES.md', 'third-party/provenance.json', 'docs/design-intelligence.md', 'docs/third-party.md',
  'docs/repository-integration.md', 'assets/experience-contract.md', 'research/coverage-report.md',
  'research/upstream-audit-2026-09.md',
  'research/observations/README.md', 'research/observations/metadata.json',
  'research/repository-audit-2026-09.md',
];

const TEXT_EXT = new Set(['.md', '.mjs', '.js', '.json', '.yml', '.yaml', '.html', '.css', '.txt', '']);
const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.bmp', '.tiff']);

// Generic private-path patterns. Owner-specific terms can be added locally in a gitignored
// `.private-terms` file (one term per line) and are checked when present.
const PRIVATE_PATTERNS = [
  { re: /\/Users\/[A-Za-z0-9._-]+\//, label: 'macOS home path' },
  { re: /\/home\/(?!runner\/)[A-Za-z0-9._-]+\//, label: 'Linux home path' },
  { re: /[A-Z]:\\Users\\/, label: 'Windows home path' },
];

const SECRET_PATTERNS = [
  { re: /AKIA[0-9A-Z]{16}/, label: 'AWS access key id' },
  { re: /\bsk-(?:live|test|proj|ant)?-?[A-Za-z0-9]{24,}/, label: 'API secret key' },
  { re: /\bgh[pousr]_[A-Za-z0-9]{36,}/, label: 'GitHub token' },
  { re: /\bxox[abprs]-[A-Za-z0-9-]{10,}/, label: 'Slack token' },
  { re: /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/, label: 'private key' },
  { re: /\bAIza[0-9A-Za-z_-]{35}\b/, label: 'Google API key' },
  { re: /(?:api[_-]?key|secret|password|token)\s*[:=]\s*['"][A-Za-z0-9_\-/+]{20,}['"]/i, label: 'hard-coded credential' },
];

function privateTerms() {
  const path = join(ROOT, '.private-terms');
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
}

export function validateRepo({ quiet = false } = {}) {
  const r = reporter('validate-repo');

  for (const file of REQUIRED_FILES) if (!existsSync(join(ROOT, file))) r.error(`missing required file ${file}`);

  // catalog ↔ skills
  const catalog = loadCatalog();
  const inCatalog = catalog.skills.map((s) => s.name);
  const onDisk = skillDirs();
  for (const name of onDisk) if (!inCatalog.includes(name)) r.error(`skill "${name}" exists on disk but not in catalog/skills.json`);
  for (const name of inCatalog) if (!onDisk.includes(name)) r.error(`catalog lists "${name}" but skills/${name} does not exist`);
  if (new Set(inCatalog).size !== inCatalog.length) r.error('catalog has duplicate skill names');
  for (const skill of catalog.skills) {
    if (!skill.category) r.error(`catalog: ${skill.name} has no category`);
    if (!skill.useWhen) r.error(`catalog: ${skill.name} has no useWhen`);
  }

  // versions
  const version = packageVersion();
  for (const name of onDisk) {
    try {
      const v = readSkill(name).data.metadata?.version;
      if (v !== version) r.error(`skills/${name}: metadata.version ${v} ≠ package.json ${version}`);
    } catch { /* reported by validate-skills */ }
  }
  const changelog = existsSync(join(ROOT, 'CHANGELOG.md')) ? readFileSync(join(ROOT, 'CHANGELOG.md'), 'utf8') : '';
  if (!changelog.includes(`## [${version}]`)) r.error(`CHANGELOG.md has no "## [${version}]" entry`);

  // research evidence: observation IDs unique; precedent citations resolve; provenance targets exist
  const obsIds = new Map();
  for (const file of listFiles(join(ROOT, 'research', 'observations')).filter((f) => f.endsWith('.md'))) {
    for (const m of readFileSync(file, 'utf8').matchAll(/^- ([A-Za-z]+[0-9]+) /gm)) {
      if (obsIds.has(m[1])) r.error(`observation ID ${m[1]} is duplicated (${repoRel(file)})`);
      obsIds.set(m[1], repoRel(file));
    }
  }
  for (const file of listFiles(join(ROOT, 'shared', 'precedent')).filter((f) => f.endsWith('.md'))) {
    const text = readFileSync(file, 'utf8');
    let entries = 0;
    for (const m of [...text.matchAll(/^`([A-Za-z0-9 ]+)`/gm), ...text.matchAll(/^## `([^`]+)`/gm)]) {
      entries++;
      for (const id of m[1].split(/\s+/)) if (!obsIds.has(id)) r.error(`${repoRel(file)}: cites unknown observation ${id}`);
    }
    if (entries < 5) r.warn(`${repoRel(file)}: only ${entries} precedent entries`);
    if (!/observed|observations/i.test(text)) r.error(`${repoRel(file)}: must state when observations were made`);
  }
  const provPath = join(ROOT, 'third-party', 'provenance.json');
  if (existsSync(provPath)) {
    const notices = readFileSync(join(ROOT, 'THIRD_PARTY_NOTICES.md'), 'utf8');
    for (const src of JSON.parse(readFileSync(provPath, 'utf8')).sources) {
      for (const f of src.incorporatedInto ?? []) if (!existsSync(join(ROOT, f))) r.error(`provenance: ${src.source} lists missing file ${f}`);
      if (!/^[0-9a-f]{40}$/.test(src.upstreamCommit ?? '')) r.error(`provenance: ${src.source} needs a full upstream commit SHA`);
      if (!notices.includes(src.source) || !notices.includes(src.upstreamCommit)) r.error(`provenance: ${src.source} is not fully represented in THIRD_PARTY_NOTICES.md`);
      if (!src.material?.length || !src.modification) r.error(`provenance: ${src.source} needs material-used and modification notes`);
    }
  }

  // Structured research metadata keeps the dated observation log honest. Missing details are
  // allowed only when the manifest says they were not recorded; they must not silently disappear.
  const metadataPath = join(ROOT, 'research', 'observations', 'metadata.json');
  if (existsSync(metadataPath)) {
    try {
      const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
      if (metadata.schemaVersion !== 1) r.error('research/observations/metadata.json: unsupported schemaVersion');
      if (!Array.isArray(metadata.observations) || metadata.observations.length === 0) {
        r.error(`research/observations/metadata.json: expected a non-empty observations array (found ${metadata.observations?.length ?? 0})`);
      }
      for (const item of metadata.observations ?? []) {
        for (const key of ['product', 'surface', 'url', 'observedAt', 'method', 'viewport', 'access', 'region', 'interactionPerformed', 'stateObserved']) {
          if (!item[key]) r.error(`research/observations/metadata.json: ${item.id ?? 'record'} missing ${key}`);
        }
        if (!/^https?:\/\//.test(item.url ?? '')) r.error(`research/observations/metadata.json: ${item.id ?? 'record'} has invalid URL`);
      }
    } catch (e) { r.error(`research/observations/metadata.json: invalid JSON (${e.message})`); }
  }

  // Depth modules must expose the operational context contract; a family file that only names a
  // style is not sufficient evidence for a product recommendation.
  const depthModules = [
    'shared/design-intelligence/context-adaptation.md',
    'shared/precedent/controls-and-inputs.md',
    'shared/precedent/product-interiors-and-dense-states.md',
    'shared/precedent/empty-and-lifecycle-states.md',
    'shared/precedent/experience-routing.md',
    'shared/precedent/neo-brutalist-products.md',
    'shared/precedent/soft-minimal-products.md',
    'shared/precedent/master-detail-workspaces.md',
    'shared/precedent/command-center-systems.md',
    'shared/precedent/playful-products.md',
  ];
  for (const file of depthModules) {
    const path = join(ROOT, file);
    if (!existsSync(path)) continue;
    const text = readFileSync(path, 'utf8');
    if (text.split('\n').length < 40) r.error(`${file}: depth module is too short to carry operational guidance`);
    if (!/right when|transfer|wrong when|verification/i.test(text)) r.error(`${file}: must distinguish transfer conditions and verification`);
  }

  const directionFamilies = listFiles(join(ROOT, 'shared', 'design-intelligence')).filter((f) => /^directions-(?!index)[^/]+\.md$/.test(repoRel(f)));
  for (const file of directionFamilies) {
    const text = readFileSync(file, 'utf8');
    if (!/unsuitable|usually wrong for|fails when/i.test(text)) r.error(`${repoRel(file)}: every direction family needs wrong-context/failure guidance`);
    if (!/accessibility|multilingual|RTL/i.test(text)) r.error(`${repoRel(file)}: needs accessibility or multilingual/RTL guidance`);
  }
  const compositionFamilies = listFiles(join(ROOT, 'shared', 'design-intelligence')).filter((f) => /^compositions-(?!index)[^/]+\.md$/.test(repoRel(f)));
  for (const file of compositionFamilies) {
    const text = readFileSync(file, 'utf8');
    if (!/responsive/i.test(text)) r.error(`${repoRel(file)}: every composition family needs responsive behavior`);
    if (!/fails when|failure/i.test(text)) r.error(`${repoRel(file)}: every composition family needs failure conditions`);
    if (!/precedent/i.test(text)) r.error(`${repoRel(file)}: every composition family needs precedent`);
  }

  // public safety scans
  const terms = privateTerms();
  const termRes = terms.map((t) => new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  const files = listFiles(ROOT, { ignore: new Set(['.git', 'node_modules', '.private-terms']) });
  for (const file of files) {
    const rel = repoRel(file);
    const ext = extname(file).toLowerCase();
    if (IMAGE_EXT.has(ext)) {
      r.error(`${rel}: image files are not allowed (no screenshots or third-party assets in the public repo)`);
      continue;
    }
    if (!TEXT_EXT.has(ext) || rel === '.private-terms' || rel === 'package-lock.json') continue;
    const text = readFileSync(file, 'utf8');
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      for (const p of PRIVATE_PATTERNS) if (p.re.test(line)) r.error(`${rel}:${i + 1}: ${p.label} (private path)`);
      for (const p of SECRET_PATTERNS) if (p.re.test(line)) r.error(`${rel}:${i + 1}: possible ${p.label}`);
      for (const re of termRes) if (re.test(line)) r.error(`${rel}:${i + 1}: private term from .private-terms`);
    });
  }

  r.finish({ quiet });
  return r;
}

if (process.argv[1]?.endsWith('validate-repo.mjs')) {
  process.exitCode = validateRepo().errors.length ? 1 : 0;
}
