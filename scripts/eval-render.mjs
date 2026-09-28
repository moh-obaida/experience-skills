#!/usr/bin/env node
// Render scenario files before and after edits so eval agents can inspect real screenshots.
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

function usage() {
  process.stdout.write('Usage: node .benchmark/render.mjs <before|after> <file> --views view1,view2\n');
}

const [phase, source, ...args] = process.argv.slice(2);
if (phase === '--help' || phase === '-h') { usage(); process.exit(0); }
if (!['before', 'after'].includes(phase) || !source) { usage(); process.exit(2); }
const viewArg = args.find((arg) => arg.startsWith('--views='))?.slice('--views='.length)
  ?? (args.includes('--views') ? args[args.indexOf('--views') + 1] : '');
if (!viewArg) { process.stderr.write('Provide at least one view with --views.\n'); process.exit(2); }
if (!process.env.PLAYWRIGHT_MODULE) { process.stderr.write('PLAYWRIGHT_MODULE is not set.\n'); process.exit(2); }

const views = [...new Set(viewArg.split(',').map((value) => value.trim()).filter(Boolean))];
const sizes = [{ name: 'desktop', width: 1440, height: 900 }, { name: 'phone', width: 390, height: 844 }];
const sourcePath = resolve(source);
const base = resolve('.benchmark', 'renders', phase);
const imagePath = (view, size) => join(base, `${view}-${size.name}.png`);
const manifests = [];

try {
  const moduleUrl = pathToFileURL(resolve(process.env.PLAYWRIGHT_MODULE)).href;
  const { chromium } = await import(moduleUrl);
  const browserPath = process.env.CHROME_PATH ?? (process.platform === 'darwin'
    ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    : undefined);
  const browser = await chromium.launch({
    headless: true,
    ...(browserPath ? { executablePath: browserPath } : {}),
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  try {
    for (const view of views) for (const size of sizes) {
      const path = imagePath(view, size);
      await mkdir(dirname(path), { recursive: true });
      const page = await browser.newPage({ viewport: { width: size.width, height: size.height }, deviceScaleFactor: 1 });
      try {
        await page.goto(`${pathToFileURL(sourcePath).href}#${encodeURIComponent(view)}`, { waitUntil: 'load' });
        await page.waitForTimeout(250);
        const content = await page.locator('body').innerText();
        if (!content.trim()) throw new Error(`View "${view}" rendered no page content at ${size.name}.`);
        await page.screenshot({ path, fullPage: true });
        const bytes = await readFile(path);
        if (bytes.length < 128 || !bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])))
          throw new Error(`Screenshot for "${view}" at ${size.name} is not a valid PNG.`);
        manifests.push({
          view,
          viewport: size.name,
          width: bytes.readUInt32BE(16),
          height: bytes.readUInt32BE(20),
          viewportWidth: size.width,
          viewportHeight: size.height,
          path: path.split(sep).join('/'),
          bytes: bytes.length,
          sha256: createHash('sha256').update(bytes).digest('hex'),
        });
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
  const manifestPath = join(base, 'manifest.json');
  await writeFile(manifestPath, `${JSON.stringify({ phase, source: sourcePath, screenshots: manifests }, null, 2)}\n`);
  process.stdout.write(`${JSON.stringify({ type: 'experience-skills-render', phase, manifest: manifestPath.split(sep).join('/'), screenshots: manifests })}\n`);
} catch (error) {
  process.stderr.write(`Render failed: ${error?.stack ?? error}\n`);
  process.exit(1);
}
