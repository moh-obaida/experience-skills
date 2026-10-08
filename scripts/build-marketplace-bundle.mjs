#!/usr/bin/env node
// Build a deterministic, self-contained marketplace archive from the canonical skill catalog.

import { createHash } from 'node:crypto';
import { deflateRawSync, inflateRawSync } from 'node:zlib';
import {
  copyFileSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync,
  readdirSync, rmSync, statSync, writeFileSync,
} from 'node:fs';
import { basename, dirname, join, relative, resolve, sep } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { ROOT, CATALOG_PATH, SKILLS_DIR, listFiles, markdownLinks, codePathRefs, isExternal, parseFrontmatter } from './lib/repo.mjs';
import { checkShared } from './check-shared.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const BUNDLE_SOURCE = join(ROOT, 'marketplace', 'bundle');
const OUT_DIR = join(ROOT, 'dist', 'marketplace');
const ZIP_NAME = 'Experience-Skills.zip';
const encoder = new TextEncoder();

const sha256 = (data) => createHash('sha256').update(data).digest('hex');
const posix = (value) => value.split(sep).join('/');
const safeName = (value) => !value.startsWith('/') && !value.split('/').some((part) => !part || part === '.' || part === '..');

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function u16(value) { const out = Buffer.alloc(2); out.writeUInt16LE(value); return out; }
function u32(value) { const out = Buffer.alloc(4); out.writeUInt32LE(value >>> 0); return out; }

function makeZip(files) {
  const locals = [];
  const central = [];
  let offset = 0;
  const dosTime = 0;
  const dosDate = 33; // 1980-01-01
  for (const [name, raw] of [...files].sort(([a], [b]) => a.localeCompare(b, 'en'))) {
    if (!safeName(name)) throw new Error(`Unsafe archive path: ${name}`);
    const nameBytes = encoder.encode(name);
    const data = Buffer.from(raw);
    const compressed = deflateRawSync(data, { level: 9 });
    const crc = crc32(data);
    const local = Buffer.concat([
      u32(0x04034b50), u16(20), u16(0x0800), u16(8), u16(dosTime), u16(dosDate),
      u32(crc), u32(compressed.length), u32(data.length), u16(nameBytes.length), u16(0),
      nameBytes, compressed,
    ]);
    const header = Buffer.concat([
      u32(0x02014b50), u16(0x0314), u16(20), u16(0x0800), u16(8), u16(dosTime), u16(dosDate),
      u32(crc), u32(compressed.length), u32(data.length), u16(nameBytes.length), u16(0), u16(0),
      u16(0), u16(0), u32(0x81a40000), u32(offset), nameBytes,
    ]);
    locals.push(local);
    central.push(header);
    offset += local.length;
  }
  const centralBytes = Buffer.concat(central);
  const end = Buffer.concat([
    u32(0x06054b50), u16(0), u16(0), u16(files.size), u16(files.size), u32(centralBytes.length),
    u32(offset), u16(0),
  ]);
  return Buffer.concat([...locals, centralBytes, end]);
}

function extractZip(zipBytes, destination) {
  const minimum = Math.max(0, zipBytes.length - 22 - 0xffff);
  let eocd = -1;
  for (let offset = zipBytes.length - 22; offset >= minimum; offset--) {
    if (zipBytes.readUInt32LE(offset) === 0x06054b50) { eocd = offset; break; }
  }
  if (eocd < 0) throw new Error('ZIP has no end-of-central-directory record');
  if (zipBytes.readUInt16LE(eocd + 4) !== 0 || zipBytes.readUInt16LE(eocd + 6) !== 0) throw new Error('Multi-disk ZIP archives are not supported');
  const entryCount = zipBytes.readUInt16LE(eocd + 10);
  if (entryCount !== zipBytes.readUInt16LE(eocd + 8)) throw new Error('ZIP entry counts do not match');
  const directorySize = zipBytes.readUInt32LE(eocd + 12);
  let cursor = zipBytes.readUInt32LE(eocd + 16);
  if (cursor + directorySize > eocd) throw new Error('ZIP central directory is truncated');
  const entries = [];
  const names = new Set();
  for (let index = 0; index < entryCount; index++) {
    if (cursor + 46 > zipBytes.length || zipBytes.readUInt32LE(cursor) !== 0x02014b50) throw new Error('Malformed ZIP central directory entry');
    const flags = zipBytes.readUInt16LE(cursor + 8);
    const method = zipBytes.readUInt16LE(cursor + 10);
    const crc = zipBytes.readUInt32LE(cursor + 16);
    const compressedSize = zipBytes.readUInt32LE(cursor + 20);
    const uncompressedSize = zipBytes.readUInt32LE(cursor + 24);
    const nameLength = zipBytes.readUInt16LE(cursor + 28);
    const extraLength = zipBytes.readUInt16LE(cursor + 30);
    const commentLength = zipBytes.readUInt16LE(cursor + 32);
    const diskStart = zipBytes.readUInt16LE(cursor + 34);
    const externalAttributes = zipBytes.readUInt32LE(cursor + 38);
    const localOffset = zipBytes.readUInt32LE(cursor + 42);
    const name = zipBytes.subarray(cursor + 46, cursor + 46 + nameLength).toString('utf8');
    cursor += 46 + nameLength + extraLength + commentLength;
    if (!safeName(name) || name.endsWith('/')) throw new Error(`Unsafe or directory archive path: ${name}`);
    if (names.has(name)) throw new Error(`Duplicate ZIP entry: ${name}`);
    names.add(name);
    if (flags & 1) throw new Error(`Encrypted ZIP entry is not supported: ${name}`);
    if (diskStart !== 0 || ![0, 8].includes(method)) throw new Error(`Unsupported ZIP entry format: ${name}`);
    const unixMode = externalAttributes >>> 16;
    const fileType = unixMode & 0o170000;
    if (fileType && fileType !== 0o100000) throw new Error(`Non-regular ZIP entry is not allowed: ${name}`);
    if (localOffset + 30 > zipBytes.length || zipBytes.readUInt32LE(localOffset) !== 0x04034b50) throw new Error(`Malformed local ZIP header: ${name}`);
    const localNameLength = zipBytes.readUInt16LE(localOffset + 26);
    const localExtraLength = zipBytes.readUInt16LE(localOffset + 28);
    const localName = zipBytes.subarray(localOffset + 30, localOffset + 30 + localNameLength).toString('utf8');
    if (localName !== name) throw new Error(`ZIP local and central names differ: ${name}`);
    const dataStart = localOffset + 30 + localNameLength + localExtraLength;
    const dataEnd = dataStart + compressedSize;
    if (dataEnd > zipBytes.length) throw new Error(`Truncated ZIP data: ${name}`);
    const compressed = zipBytes.subarray(dataStart, dataEnd);
    const data = method === 8 ? inflateRawSync(compressed) : Buffer.from(compressed);
    if (data.length !== uncompressedSize || crc32(data) !== crc) throw new Error(`ZIP checksum or size mismatch: ${name}`);
    entries.push([name, data]);
  }
  if (cursor !== zipBytes.readUInt32LE(eocd + 16) + directorySize) throw new Error('ZIP central directory size does not match entries');
  for (const [name, data] of entries) {
    const output = resolve(destination, name);
    if (!output.startsWith(resolve(destination) + sep)) throw new Error(`ZIP entry escapes extraction directory: ${name}`);
    mkdirSync(dirname(output), { recursive: true });
    writeFileSync(output, data, { mode: 0o644, flag: 'wx' });
  }
}

function collectFiles(dir, prefix = '') {
  const files = new Map();
  for (const entry of readdirSync(dir).sort((a, b) => a.localeCompare(b, 'en'))) {
    const source = join(dir, entry);
    const info = lstatSync(source);
    if (info.isSymbolicLink()) throw new Error(`Symlinks are not allowed in bundle inputs: ${source}`);
    const name = posix(join(prefix, entry));
    if (!safeName(name)) throw new Error(`Unsafe source path: ${name}`);
    if (info.isDirectory()) {
      for (const [child, data] of collectFiles(source, name)) files.set(child, data);
    } else if (info.isFile()) files.set(name, readFileSync(source));
    else throw new Error(`Unsupported filesystem entry in bundle input: ${source}`);
  }
  return files;
}

function cpTree(source, destination) {
  mkdirSync(destination, { recursive: true });
  for (const entry of readdirSync(source).sort()) {
    const from = join(source, entry);
    const to = join(destination, entry);
    const info = lstatSync(from);
    if (info.isSymbolicLink()) throw new Error(`Symlinks are not allowed in canonical skills: ${from}`);
    if (info.isDirectory()) cpTree(from, to);
    else if (info.isFile()) copyFileSync(from, to);
    else throw new Error(`Unsupported canonical resource: ${from}`);
  }
}

function parseFront(text, file) {
  return parseFrontmatter(text, file).data;
}

function requireFile(path, label) {
  if (!existsSync(path) || !lstatSync(path).isFile()) throw new Error(`Missing required ${label}: ${path}`);
}

function renderCatalog(catalog) {
  const rows = catalog.skills.map((skill) =>
    `| [\`${skill.name}\`](../modules/${skill.name}/METHOD.md) | ${skill.category} | ${skill.useWhen.replaceAll('|', '\\|')} |`).join('\n');
  return `# Packaged skill catalog\n\nExperience Skills includes ${catalog.skills.length} public specialist methods. These are the registered methods; design systems, niche profiles, palettes, and typography strategies are supporting references, not additional skills.\n\n| Method | Area | Use when |\n|---|---|---|\n${rows}\n`;
}

function renderRouting(catalog, routes) {
  const rows = catalog.skills.map((skill) => {
    const route = routes[skill.name];
    const examples = route.examples.map((example) => `“${example}”`).join('; ');
    return `| [\`${skill.name}\`](../modules/${skill.name}/METHOD.md) | ${route.routeWhen} | ${examples} |`;
  }).join('\n');
  return `# Routing guide\n\nHonor an explicitly named specialist. Otherwise use the full-collection conductor for explicit all-skills or substantial end-to-end work, the general router for broad or undiagnosed concerns, and a specialist for a diagnosed narrow concern. The catalog and routes are generated from the canonical catalog and the authored route metadata.\n\n${rows}\n\n## Keep distinct methods distinct\n\n- \`anti-slop-ui\` evaluates and gates a design; \`anti-ai-slop\` repairs an existing implementation end to end.\n- \`experience-architect\` diagnoses broad or interacting concerns; \`use-all-skills\` considers the full collection for explicit full-collection or substantial end-to-end work, then activates selectively.\n`;
}

function validateCatalog(catalog, routes) {
  if (!Array.isArray(catalog.skills) || !catalog.skills.length) throw new Error('catalog/skills.json must declare at least one public skill');
  const names = catalog.skills.map((skill) => skill.name);
  if (new Set(names).size !== names.length) throw new Error('catalog/skills.json contains duplicate skill names');
  const directories = readdirSync(SKILLS_DIR).filter((name) => statSync(join(SKILLS_DIR, name)).isDirectory()).sort();
  if (names.slice().sort().join('\n') !== directories.join('\n')) throw new Error('catalog/skills.json and skills/ directories differ; resolve the catalog before bundling');
  const routeNames = Object.keys(routes).sort();
  if (names.slice().sort().join('\n') !== routeNames.join('\n')) {
    const missing = names.filter((name) => !routes[name]);
    const extra = routeNames.filter((name) => !names.includes(name));
    throw new Error(`Route metadata must cover the catalog exactly (missing: ${missing.join(', ') || 'none'}; unknown: ${extra.join(', ') || 'none'})`);
  }
  for (const skill of catalog.skills) {
    const method = join(SKILLS_DIR, skill.name, 'SKILL.md');
    requireFile(method, `canonical ${skill.name}/SKILL.md`);
    const frontmatter = parseFront(readFileSync(method, 'utf8'), method);
    if (frontmatter.name !== skill.name) throw new Error(`${method} declares name ${frontmatter.name}, expected ${skill.name}`);
    if (!routes[skill.name].routeWhen || !Array.isArray(routes[skill.name].examples) || !routes[skill.name].examples.length) throw new Error(`${skill.name}: routeWhen and at least one route example are required`);
  }
}

function copySourceToStage(stage, catalog, routes) {
  const root = join(stage, 'experience-skills');
  mkdirSync(join(root, 'modules'), { recursive: true });
  mkdirSync(join(root, 'references'), { recursive: true });
  const master = readFileSync(join(BUNDLE_SOURCE, 'master.md'), 'utf8');
  const masterFrontmatter = parseFront(master, 'marketplace/bundle/master.md');
  if (masterFrontmatter.name !== 'experience-skills') throw new Error('Master skill must use the experience-skills slug');
  writeFileSync(join(root, 'SKILL.md'), master);
  writeFileSync(join(root, 'README.md'), `# Experience Skills\n\nA complete, free MIT-licensed collection of product experience methods for coding agents. Start with [SKILL.md](SKILL.md). It routes to ${catalog.skills.length} specialist methods and their complete references, scripts, and assets. Supporting design intelligence is progressively loaded by the selected method; its systems and profiles are reference material, not additional registered skills.\n\nConsider broadly. Intervene selectively. Verify deeply.\n`);
  copyFileSync(join(ROOT, 'LICENSE'), join(root, 'LICENSE'));
  copyFileSync(join(ROOT, 'THIRD_PARTY_NOTICES.md'), join(root, 'THIRD_PARTY_NOTICES.md'));
  writeFileSync(join(root, 'references', 'skill-catalog.md'), renderCatalog(catalog));
  writeFileSync(join(root, 'references', 'routing-guide.md'), renderRouting(catalog, routes));
  writeFileSync(join(root, 'references', 'collection-guide.md'), `# Collection guide\n\nThis package contains the complete Experience Skills collection. Each canonical skill directory is preserved under \`modules/<name>/\`; its original \`SKILL.md\` is stored as \`METHOD.md\`, and its local references, scripts, assets, and generated \`_shared\` resources retain their paths. The master \`SKILL.md\` is the only registered skill entry point.\n\nLoad references conditionally as directed by a method. The packaged design intelligence includes the authored system and niche libraries needed by those methods. It is not loaded wholesale. All relative resource paths resolve within the corresponding module.\n`);
  for (const skill of catalog.skills) {
    const source = join(SKILLS_DIR, skill.name);
    const target = join(root, 'modules', skill.name);
    cpTree(source, target);
    const canonical = join(target, 'SKILL.md');
    const text = readFileSync(canonical, 'utf8');
    const fmEnd = text.indexOf('\n---', 4);
    if (fmEnd < 0) throw new Error(`${skill.name}: cannot locate frontmatter boundary`);
    const insert = `\n\n> **Experience Skills specialist method — ${skill.name}.** The master \`SKILL.md\` is the collection entry point. Local references, scripts, and assets resolve from this module directory. Other specialists are listed in \`../../references/skill-catalog.md\`. Preserve this method's conditional reference loading and fallback rules.\n\n`;
    writeFileSync(join(target, 'METHOD.md'), `${text.slice(0, fmEnd + 4)}${insert}${text.slice(fmEnd + 4)}`);
    rmSync(canonical);
  }
  const files = collectFiles(root, 'experience-skills');
  const entries = [...files].map(([path, data]) => ({ path, bytes: data.length, sha256: sha256(data) }));
  const manifest = {
    name: 'experience-skills',
    displayName: 'Experience Skills',
    version: JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version,
    license: 'MIT',
    specialistCount: catalog.skills.length,
    specialists: catalog.skills.map((skill) => skill.name),
    files: entries,
  };
  writeFileSync(join(root, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  return { root, files: collectFiles(root, 'experience-skills'), manifest };
}

function validateBundle(root, files, catalog) {
  const names = [...files.keys()];
  const skills = names.filter((name) => name.endsWith('/SKILL.md'));
  if (skills.join() !== 'experience-skills/SKILL.md') throw new Error(`Expected exactly one SKILL.md at bundle root, found: ${skills.join(', ') || 'none'}`);
  const methods = names.filter((name) => /^experience-skills\/modules\/[^/]+\/METHOD\.md$/.test(name)).sort();
  const expected = catalog.skills.map((skill) => `experience-skills/modules/${skill.name}/METHOD.md`).sort();
  if (methods.join('\n') !== expected.join('\n')) throw new Error('Packaged methods do not match catalog skills exactly');
  for (const required of ['experience-skills/README.md', 'experience-skills/LICENSE', 'experience-skills/THIRD_PARTY_NOTICES.md', 'experience-skills/manifest.json', 'experience-skills/references/skill-catalog.md', 'experience-skills/references/routing-guide.md', 'experience-skills/references/collection-guide.md']) {
    if (!files.has(required)) throw new Error(`Bundle is missing ${required}`);
  }
  const rootPrefix = resolve(root, 'experience-skills');
  const issues = [];
  for (const [name, data] of files) {
    if (!safeName(name) || name.startsWith('../')) throw new Error(`Unsafe bundled path ${name}`);
    if (!/\.(md|mjs|js|json)$/i.test(name)) continue;
    const body = data.toString('utf8');
    const absolute = resolve(root, name);
    const base = dirname(absolute);
    if (name.endsWith('.md')) {
      for (const link of markdownLinks(body)) {
        if (isExternal(link.target)) continue;
        const target = resolve(base, decodeURIComponent(link.target.split('#')[0]));
        if (!target.startsWith(rootPrefix + sep) && target !== rootPrefix) issues.push(`${name}:${link.line}: link escapes bundle: ${link.target}`);
        else if (!existsSync(target)) issues.push(`${name}:${link.line}: missing link target: ${link.target}`);
      }
      const parts = name.split('/');
      const moduleIndex = parts.indexOf('modules');
      if (moduleIndex >= 0) {
        const moduleRoot = resolve(root, ...parts.slice(0, moduleIndex + 2));
        for (const ref of codePathRefs(body)) {
          const target = resolve(moduleRoot, ref.target);
          if (!target.startsWith(rootPrefix + sep) || !existsSync(target)) issues.push(`${name}: missing/escaping resource path ${ref.target}`);
        }
      }
    }
    if (/\b(?:\.\.\/){2,}(?:shared|examples)\//.test(body)) issues.push(`${name}: references source repository content outside its module`);
    if (name.endsWith('.mjs') || name.endsWith('.js')) {
      const pattern = /(?:from\s+|import\(\s*)['"](\.{1,2}\/[^'"]+)['"]/g;
      let match;
      while ((match = pattern.exec(body))) {
        const target = resolve(base, match[1]);
        if (!target.startsWith(rootPrefix + sep) || !existsSync(target)) issues.push(`${name}: missing/escaping script import ${match[1]}`);
      }
    }
  }
  if (issues.length) throw new Error(`Bundle resource validation failed:\n${issues.slice(0, 30).join('\n')}${issues.length > 30 ? `\n... and ${issues.length - 30} more` : ''}`);
  const manifest = JSON.parse(files.get('experience-skills/manifest.json').toString('utf8'));
  if (manifest.specialistCount !== catalog.skills.length || manifest.specialists.join('\n') !== catalog.skills.map((skill) => skill.name).join('\n')) throw new Error('Manifest specialist list does not match catalog');
  const expectedManifestFiles = new Map([...files].filter(([name]) => name !== 'experience-skills/manifest.json'));
  const listed = new Map(manifest.files.map((file) => [file.path, file]));
  if (listed.size !== expectedManifestFiles.size || [...expectedManifestFiles.keys()].some((name) => !listed.has(name))) throw new Error('Manifest file inventory does not match bundle contents');
  for (const [name, data] of expectedManifestFiles) {
    const item = listed.get(name);
    if (!item || item.bytes !== data.length || item.sha256 !== sha256(data)) throw new Error(`Manifest checksum or size mismatch: ${name}`);
  }
  return { fileCount: files.size, methodCount: methods.length, root: rootPrefix };
}

function makeReport(bundle, zipBytes, validation) {
  const files = [...bundle.files.entries()];
  return {
    schemaVersion: 1,
    product: 'Experience Skills',
    slug: 'experience-skills',
    version: JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')).version,
    license: 'MIT',
    zip: ZIP_NAME,
    zipBytes: zipBytes.length,
    zipSha256: sha256(zipBytes),
    specialistCount: bundle.manifest.specialistCount,
    specialists: bundle.manifest.specialists,
    fileCount: validation.fileCount,
    resourceCounts: {
      methods: validation.methodCount,
      references: files.filter(([name]) => /\/references\/.*\.md$/.test(name)).length,
      scripts: files.filter(([name]) => /\/scripts\/.*\.(mjs|js)$/.test(name)).length,
      assets: files.filter(([name]) => /\/assets\//.test(name)).length,
      generatedSharedReferences: files.filter(([name]) => /\/references\/_shared\//.test(name)).length,
      generatedSharedScripts: files.filter(([name]) => /\/scripts\/_shared\//.test(name)).length,
    },
    archive: { exactlyOneSkillEntrypoint: true, topLevelFolder: 'experience-skills', reproducible: true },
  };
}

async function main() {
  const args = process.argv.slice(2);
  const check = args.includes('--check');
  if (args.includes('--help')) {
    process.stdout.write('Usage: node scripts/build-marketplace-bundle.mjs [--check]\n\nBuild the Experience Skills marketplace ZIP. --check validates and compares deterministic builds without writing repository artifacts.\n');
    return 0;
  }
  if (args.some((arg) => arg !== '--check')) {
    process.stderr.write('Usage: node scripts/build-marketplace-bundle.mjs [--check|--help]\n');
    return 2;
  }
  const sync = checkShared();
  if (sync.finish({ quiet: true }) !== 0) throw new Error('Vendored shared sources are stale or invalid; run npm run check:shared and resolve findings before packaging');
  const catalog = JSON.parse(readFileSync(CATALOG_PATH, 'utf8'));
  const routes = JSON.parse(readFileSync(join(BUNDLE_SOURCE, 'routes.json'), 'utf8'));
  validateCatalog(catalog, routes);
  for (const file of ['LICENSE', 'THIRD_PARTY_NOTICES.md']) requireFile(join(ROOT, file), file);

  const temp = mkdtempSync(join(tmpdir(), 'experience-skills-marketplace-'));
  try {
    const stage = join(temp, 'stage');
    mkdirSync(stage);
    const bundle = copySourceToStage(stage, catalog, routes);
    const validation = validateBundle(stage, bundle.files, catalog);
    const zipBytes = makeZip(bundle.files);
    const zipPath = join(temp, ZIP_NAME);
    writeFileSync(zipPath, zipBytes);
    const extracted = join(temp, 'extracted');
    mkdirSync(extracted);
    extractZip(zipBytes, extracted);
    const extractedFiles = collectFiles(extracted);
    const extractedValidation = validateBundle(extracted, extractedFiles, catalog);
    if (extractedValidation.fileCount !== validation.fileCount) throw new Error('Extracted bundle file count differs from staged bundle');
    const report = makeReport(bundle, zipBytes, validation);
    if (check) {
      const repeat = makeZip(bundle.files);
      if (!zipBytes.equals(repeat)) throw new Error('ZIP output is not reproducible');
      process.stdout.write(`marketplace bundle: ok (${catalog.skills.length} methods, ${validation.fileCount} files, ${zipBytes.length} ZIP bytes, ${report.zipSha256})\n`);
      return 0;
    }
    mkdirSync(OUT_DIR, { recursive: true });
    writeFileSync(join(OUT_DIR, ZIP_NAME), zipBytes);
    writeFileSync(join(OUT_DIR, 'Experience-Skills.validation.json'), `${JSON.stringify(report, null, 2)}\n`);
    process.stdout.write(`marketplace bundle: wrote dist/marketplace/${ZIP_NAME} (${catalog.skills.length} methods, ${validation.fileCount} files)\n`);
    return 0;
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().then((code) => { process.exitCode = code; }).catch((error) => {
    process.stderr.write(`marketplace bundle: FAILED: ${error.message}\n`);
    process.exitCode = 1;
  });
}
