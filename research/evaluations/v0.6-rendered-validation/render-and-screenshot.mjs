// Evidence harness for the v0.6 rendered validation (research/evaluations/v0.6-rendered-validation/).
// Renders each sampled mockup under renders/ headlessly, takes a primary screenshot, and for
// motion-bearing systems triggers the interaction and captures a second "after" screenshot so
// motion/interaction claims are checked, not screenshotted blind. Re-run with:
//   node research/evaluations/v0.6-rendered-validation/render-and-screenshot.mjs
// from the repo root (uses the repo's playwright-core devDependency).
import { chromium } from 'playwright-core';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const rendersDir = path.join(root, 'renders');
const shotsDir = path.join(root, 'screenshots');

const systems = [
  { file: 'groupA-practice-console.html', interact: '#run' },
  { file: 'groupA-worked-example.html', interact: '#check' },
  { file: 'groupA-tutor-path.html', interact: '#submit' },
  { file: 'groupB-case-desk.html', interact: '#decide' },
  { file: 'groupB-threat-board.html', interact: null, wait: 1500 },
  { file: 'groupB-object-sheet.html', interact: '#next' },
  { file: 'groupC-exam-hall.html', interact: 'input[name=q4]' },
  { file: 'groupC-policy-plain.html', interact: '#next' },
  { file: 'groupC-plain-service.html', interact: '#next' },
  { file: 'native-ledger-desk.html', interact: '#edit1' },
  { file: 'native-broadsheet.html', interact: null },
  { file: 'native-coach-stage.html', interact: '#pause', wait: 800 },
  { file: 'native-still-water.html', interact: null, wait: 4000 },
  { file: 'native-toybox-table.html', interact: '#ready', wait: 700 },
  { file: 'native-pantry-list.html', interact: '#plus1' },
  { file: 'native-vault-ledger.html', interact: '#send' },
  { file: 'native-hangout-space.html', interact: null, wait: 2200 },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const sys of systems) {
  const url = 'file://' + path.join(rendersDir, sys.file);
  await page.goto(url);
  await page.waitForTimeout(400);
  const before = path.join(shotsDir, sys.file.replace('.html', '.before.png'));
  await page.screenshot({ path: before });
  if (sys.interact) {
    try {
      await page.click(sys.interact, { timeout: 1000 });
      await page.waitForTimeout(500);
    } catch (e) {
      console.log(`  (no interact target for ${sys.file}: ${e.message.split('\n')[0]})`);
    }
  }
  if (sys.wait) await page.waitForTimeout(sys.wait);
  const after = path.join(shotsDir, sys.file.replace('.html', '.after.png'));
  await page.screenshot({ path: after });
  console.log(`shot: ${sys.file}`);
}

await browser.close();
console.log('done');
