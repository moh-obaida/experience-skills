#!/usr/bin/env node
// Repository-wide “does this file earn its place?” audit. This is intentionally a report, not a
// style linter: it makes shallow files, orphaned references, generated copies, and principle
// propagation visible so a maintainer can decide whether to keep, expand, merge, or remove them.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, listFiles, loadCatalog, skillDirs, repoRel, vendoredPath } from './lib/repo.mjs';

const HELP = `audit-repository — audit authored/generated Markdown, principles, vendoring, and git scope

Usage:
  node scripts/audit-repository.mjs [--json] [--write PATH] [--help]

Classification is evidence for review, not an automatic delete list. A file is only a removal
candidate when it is empty, placeholder-only, or orphaned; short useful files remain KEEP.`;

const PRINCIPLES = [
  ['environment interesting, control obvious', /environment[\s\S]{0,500}control|control[\s\S]{0,500}environment/i],
  ['alignment is not composition', /alignment.{0,80}composition|composition.{0,80}alignment/i],
  ['empty space earns its place', /empty (?:space|region)|dead space|whitespace.{0,80}(?:job|purpose)/i],
  ['software should use known context', /software (?:knows|already knows)|known context|do not ask/i],
  ['functionality is baseline', /functionality.{0,80}baseline|baseline.{0,80}functionality/i],
  ['automate mechanics, preserve judgment', /automate mechanics|preserve judgment/i],
  ['motion explains events', /motion.{0,80}(?:event|explains)|event.{0,80}motion/i],
  ['rendered truth', /rendered truth|rendered output|render.*verify/i],
  ['no sycophancy', /no sycophancy|unearned praise|before praising|without praise/i],
  ['complexity earns cost', /complexity.{0,80}(?:cost|earns)|cost.{0,80}complexity/i],
  ['context is part of taste', /context is part of taste|right when|wrong when/i],
  ['page feels like a place', /feel like a place|page.{0,80}place|environment.{0,80}identity/i],
];

function gitNames(args) {
  const result = spawnSync('git', ['diff', ...args, '--name-only'], { cwd: ROOT, encoding: 'utf8' });
  return result.status === 0 ? result.stdout.split('\n').filter(Boolean) : [];
}

function markdownFiles() {
  return listFiles(ROOT, { ignore: new Set(['.git', 'node_modules']) }).filter((file) => file.endsWith('.md'));
}

function classify(file, text) {
  const rel = repoRel(file);
  const generated = rel.includes('/_shared/') || /GENERATED FROM/.test(text);
  const placeholder = /\b(?:TODO|TBD|FIXME|lorem ipsum)\b|\[placeholder\]/i.test(text);
  const lines = text.split('\n').length;
  const likelyReference = rel.includes('/references/') || rel.includes('/precedent/') || rel.includes('/design-intelligence/');
  const shallow = lines < 20 && likelyReference;
  let decision = 'KEEP';
  let reason = generated ? 'generated vendored copy' : 'contains operational guidance or evidence';
  if (placeholder) { decision = 'REMOVE'; reason = 'placeholder language'; }
  else if (shallow) { decision = 'EXPAND'; reason = 'short reference-shaped file; confirm it changes an agent branch'; }
  return { file: rel, lines, generated, likelyReference, placeholder, shallow, decision, reason };
}

function vendoring() {
  const catalog = loadCatalog();
  const rows = [];
  for (const skill of catalog.skills) {
    const skillText = readFileSync(join(ROOT, 'skills', skill.name, 'SKILL.md'), 'utf8');
    for (const source of [...(skill.shared ?? []), ...(skill.sharedScripts ?? [])]) {
      const generated = vendoredPath(skill.name, source);
      const name = source.split('/').pop();
      const checkpointText = skillText.split('## Checkpoints')[1]?.split('\n## ')[0] ?? '';
      rows.push({ skill: skill.name, source, generated: repoRel(generated), present: existsSync(generated), namedInSkill: skillText.includes(name), namedInCheckpoint: checkpointText.includes(name) });
    }
  }
  return { total: rows.length, missing: rows.filter((x) => !x.present), rows };
}

function collect() {
  const files = markdownFiles().map((file) => classify(file, readFileSync(file, 'utf8')));
  const authored = files.filter((x) => !x.generated);
  const principleCoverage = Object.fromEntries(PRINCIPLES.map(([name, re]) => [name, {
    files: authored.filter((x) => re.test(readFileSync(join(ROOT, x.file), 'utf8'))).length,
    matched: authored.filter((x) => re.test(readFileSync(join(ROOT, x.file), 'utf8'))).map((x) => x.file).slice(0, 12),
  }]));
  const vendor = vendoring();
  const changed = gitNames(['--diff-filter=ACMRT']);
  const removed = gitNames(['--diff-filter=D']);
  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString().slice(0, 10),
    summary: {
      markdownFiles: files.length,
      authoredMarkdownFiles: authored.length,
      generatedMarkdownFiles: files.length - authored.length,
      shallowReferenceFiles: files.filter((x) => x.shallow).length,
      placeholderFiles: files.filter((x) => x.placeholder).length,
      removalCandidates: files.filter((x) => x.decision === 'REMOVE').length,
      changedFiles: changed.length,
      removedFiles: removed.length,
      skills: skillDirs().length,
      vendoredModules: vendor.total,
      missingVendoredModules: vendor.missing.length,
      vendoredModulesWithoutCheckpoint: vendor.rows.filter((x) => x.present && !x.namedInCheckpoint).length,
    },
    decisions: files,
    principleCoverage,
    vendoring: { missing: vendor.missing, withoutCheckpoint: vendor.rows.filter((x) => x.present && !x.namedInCheckpoint), checked: vendor.total },
    gitScope: { changed, removed },
    interpretation: {
      keep: 'Keep files that force an observation, rejection, measurement, load, edit, or completion decision.',
      expand: 'Expand short reference-shaped files only when the added material changes a branch; merge duplicates instead of adding prose.',
      merge: 'No automatic merge is inferred: overlapping files require a human content decision and link migration.',
      remove: 'Remove only placeholder or orphaned material after links and catalog references are checked.',
    },
  };
}

function markdown(report) {
  const s = report.summary;
  const lines = [
    '# Repository Self-Audit — 2026-09-25', '',
    'Generated by `scripts/audit-repository.mjs`. This is a behavior audit, not a claim that every research gap is closed.', '',
    `- Reviewed **${s.markdownFiles}** Markdown files: **${s.authoredMarkdownFiles}** authored and **${s.generatedMarkdownFiles}** vendored/generated.`,
    `- Checked **${s.vendoredModules}** catalog-to-vendored module mappings; missing: **${s.missingVendoredModules}**.`,
    `- Vendored modules not named in a specialist checkpoint: **${s.vendoredModulesWithoutCheckpoint}** (a review queue, not an automatic deletion list).`,
    `- Short reference-shaped files: **${s.shallowReferenceFiles}**; placeholder files: **${s.placeholderFiles}**.`,
    `- Git scope at generation: **${s.changedFiles}** changed files, **${s.removedFiles}** removed files.`, '',
    '## Decisions', '',
    '| Decision | Meaning | Count |', '|---|---|---:|',
    `| KEEP | Forces an observation, rejection, measurement, load, edit, or completion decision | ${report.decisions.filter((x) => x.decision === 'KEEP').length} |`,
    `| EXPAND | Short or thin reference-shaped material needing a content decision | ${report.decisions.filter((x) => x.decision === 'EXPAND').length} |`,
    `| MERGE | Requires a deliberate link/content migration; not inferred automatically | 0 |`,
    `| REMOVE | Placeholder or orphan candidate | ${report.decisions.filter((x) => x.decision === 'REMOVE').length} |`, '',
    '## Principle propagation', '',
    '| Principle | Authored files containing operational evidence |', '|---|---:|',
    ...Object.entries(report.principleCoverage).map(([name, value]) => `| ${name} | ${value.files} |`), '',
    '## Remaining review queue', '',
    'The depth report remains the authority for item-level precedent gaps. Short references should be expanded only when a research pass can add real observations, counterexamples, responsive behavior, and verification—not generic definitions.', '',
    'No files were automatically removed or silently merged. Vendored copies are generated from catalog declarations; edit shared sources and run `npm run sync`.',
  ];
  return `${lines.join('\n')}\n`;
}

function main(argv) {
  if (argv.includes('--help') || argv.includes('-h')) { process.stdout.write(`${HELP}\n`); return 0; }
  const report = collect();
  const writeIndex = argv.indexOf('--write');
  if (writeIndex !== -1) {
    const path = argv[writeIndex + 1];
    if (!path) { process.stderr.write('--write needs a path\n'); return 2; }
    writeFileSync(join(ROOT, path), markdown(report));
  }
  if (argv.includes('--json')) process.stdout.write(`${JSON.stringify(report)}\n`);
  else process.stdout.write(`audit-repository: ${report.summary.markdownFiles} Markdown files, ${report.summary.missingVendoredModules} missing vendored modules, ${report.summary.placeholderFiles} placeholders\n`);
  return report.summary.missingVendoredModules || report.summary.placeholderFiles ? 1 : 0;
}

process.exitCode = main(process.argv.slice(2));
