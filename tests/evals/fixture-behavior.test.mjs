import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { ROOT } from '../../scripts/lib/repo.mjs';
import { launch } from '../../shared/tools/layout-probe.mjs';

const { browser, error } = await launch();
assert.ok(browser, `Scenario fixture checks require Chromium or Chrome: ${error}`);

test('systemic-pattern-repair fixture search and day filter return matching classes', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${pathToFileURL(join(ROOT, 'tests/fixtures/pages/systemic-studio.html')).href}#sessions`);
    const search = page.getByLabel('Search classes');
    const day = page.getByLabel('Choose a day');
    const cards = page.locator('#sessions .card');

    await search.fill('Wheel');
    assert.equal(await cards.filter({ hasText: 'Wheel throwing' }).isVisible(), true);
    assert.equal(await cards.filter({ hasText: 'Beginner hand building' }).isVisible(), false);
    assert.equal(await page.locator('#session-count').innerText(), '1 of 3 sessions · this week');

    await search.fill('');
    await day.selectOption('Saturday');
    assert.equal(await cards.filter({ hasText: '11:00 am' }).isVisible(), true);
    assert.equal(await cards.filter({ hasText: 'Wheel throwing' }).isVisible(), false);
    assert.equal(await page.locator('#session-count').innerText(), '1 of 3 sessions · this week');
  } finally {
    await page.close();
  }
});

test('quality-upside-open fixture search and site filter actually hide nonmatches', async () => {
  const page = await browser.newPage();
  try {
    await page.goto(`${pathToFileURL(join(ROOT, 'tests/fixtures/pages/field-notes.html')).href}#observations`);
    const records = page.locator('#observation-list .record');
    await page.locator('#search').fill('egret');
    assert.equal(await records.filter({ hasText: 'Little egret' }).isVisible(), true);
    assert.equal(await records.filter({ hasText: 'Grey mangrove' }).isVisible(), false);

    await page.locator('#search').fill('');
    await page.locator('#site-filter').selectOption({ label: 'North inlet' });
    assert.equal(await records.filter({ hasText: 'Grey mangrove' }).isVisible(), true);
    assert.equal(await records.filter({ hasText: 'Little egret' }).isVisible(), false);
  } finally {
    await page.close();
  }
});

test.after(async () => { await browser.close(); });

// These checks establish that the invented scenes render the intended conditions. They do not
// grade aesthetic judgment; the scenario judge evaluates meaning rather than required vocabulary.
test('visual relationship views render independently at desktop and phone widths', async () => {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const view of ['mass', 'buried', 'optical', 'duplicate', 'space', 'dense', 'rhythm', 'root']) {
        await page.goto(`${pathToFileURL(join(ROOT, 'tests/fixtures/pages/visual-relationships.html')).href}#${view}`);
        assert.equal(await page.locator('main:visible').count(), 1, view);
        assert.equal(await page.locator('main:visible').getAttribute('data-view'), view);
        assert.ok((await page.locator('main:visible h1').innerText()).trim(), view);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
        assert.equal(overflow, false, `${view} at ${width}: unintended page overflow`);
      }
    }
    assert.deepEqual(errors, []);
  } finally { await page.close(); }
});

test('visual fixtures retain sparse weight, equal geometry, buried status, and useful controls', async () => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const url = pathToFileURL(join(ROOT, 'tests/fixtures/pages/visual-relationships.html')).href;
  try {
    await page.goto(`${url}#mass`);
    const panel = await page.locator('.secondary:visible').boundingBox();
    const hero = await page.locator('.split:visible').boundingBox();
    assert.ok(panel.width / hero.width > 0.35 && panel.width / hero.width < 0.45);
    assert.ok(panel.height >= 500);
    assert.equal(await page.locator('.secondary:visible a').count(), 1);

    await page.goto(`${url}#optical`);
    const columns = await page.locator('.equal:visible > div').all();
    const [text, art] = await Promise.all(columns.map(column => column.boundingBox()));
    assert.ok(Math.abs(text.width - art.width) < 1, 'equal geometry is a precondition, not a balance verdict');

    await page.goto(`${url}#buried`);
    const promo = await page.locator('.showcase:visible').boundingBox();
    const status = await page.locator('.status:visible').boundingBox();
    assert.ok(status.y > promo.y + promo.height);
    assert.match(await page.locator('.status:visible').innerText(), /Funds have not been sent/);

    await page.goto(`${url}#duplicate`);
    await page.locator('header:visible a').click();
    await page.reload();
    assert.equal(await page.locator('main:visible').getAttribute('data-view'), 'duplicate', 'action anchors restore their owning view');
    assert.equal(await page.locator('form:visible').count(), 1);
    await page.locator('form:visible input').fill('2026-10-15');
    await page.locator('form:visible button').click();
    assert.match(await page.locator('form:visible [role=status]').innerText(), /sessions available/);

    await page.goto(`${url}#dense`);
    assert.equal(await page.locator('#routes tr:visible').count(), 18);
    assert.equal(await page.locator('.console th').count(), 8);
    await page.locator('#route-search').fill('R01');
    assert.equal(await page.locator('#routes tr:visible').count(), 1);
    await page.locator('#routes tr:visible button').click();
    assert.equal(await page.locator('#routes tr:visible button').innerText(), 'Assigned');
  } finally { await page.close(); }
});

// Establish each invented condition without encoding an aesthetic verdict.
test('anti-slop scenes render independent routes and preserve the cosmetic proposal structure', async () => {
  const page = await browser.newPage();
  const url = pathToFileURL(join(ROOT, 'tests/fixtures/pages/slop-enforcement.html')).href;
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      for (const view of ['overview', 'release', 'history', 'cosmetic', 'local', 'understated', 'monitor', 'copy', 'domain', 'heavy-before', 'content-after', 'unusual', 'behavior']) {
        await page.goto(`${url}#${view}`);
        assert.equal(await page.locator('main:visible').getAttribute('data-view'), view);
        assert.equal(await page.locator('main:visible').count(), 1);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `${view} at ${width}`);
      }
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${url}#overview`);
    const before = await page.locator('main:visible .card').first().boundingBox();
    await page.goto(`${url}#cosmetic`);
    const proposal = await page.locator('main:visible .card').first().boundingBox();
    assert.equal(proposal.width, before.width);
    assert.equal(proposal.height, before.height);
    await page.goto(`${url}#heavy-before`);
    const supportBefore = await page.locator('aside:visible').boundingBox();
    await page.goto(`${url}#content-after`);
    const supportAfter = await page.locator('aside:visible').boundingBox();
    assert.equal(supportAfter.height, supportBefore.height, 'copy-only proposal retains the diagnosed allocation');
    assert.equal(supportAfter.width, supportBefore.width);
    assert.deepEqual(errors, []);
  } finally { await page.close(); }
});

test('anti-slop scenes contain working specific controls and deliberately generic behavior', async () => {
  const page = await browser.newPage();
  const url = pathToFileURL(join(ROOT, 'tests/fixtures/pages/slop-enforcement.html')).href;
  try {
    await page.goto(`${url}#local`);
    await page.locator('main:visible').getByLabel('Find parcel').fill('P-118');
    assert.equal(await page.locator('#parcels tr:visible').count(), 1);
    await page.getByRole('button', { name: 'Contact recipient' }).click();
    assert.match(await page.locator('#parcels tr:visible [role=status]').innerText(), /P-118/);
    await page.goto(`${url}#monitor`);
    await page.getByLabel('Alarm filter').selectOption('alarm');
    assert.equal(await page.locator('#stations article:visible').count(), 1);
    assert.match(await page.locator('#stations article:visible').innerText(), /Station C/);
    await page.goto(`${url}#copy`);
    await page.getByRole('button', { name: 'Select 09:00' }).click();
    assert.match(await page.locator('main:visible [role=status]').first().innerText(), /09:00 visit selected/);
    await page.goto(`${url}#behavior`);
    const states = await page.locator('main:visible tbody').innerText();
    for (const name of ['Request reference', 'Retry payment', 'Approve invoice']) {
      await page.getByRole('button', { name, exact: true }).click();
      assert.equal(await page.locator('dialog:visible h2').innerText(), "You're all set!");
      await page.getByRole('button', { name: 'Done', exact: true }).click();
    }
    assert.equal(await page.locator('main:visible tbody').innerText(), states, 'the behavior flaw is unchanged state, not broken buttons');
    await page.goto(`${url}#unusual`);
    await page.getByRole('link', { name: '2 / Proofs' }).click();
    await page.reload();
    assert.equal(await page.locator('main:visible').getAttribute('data-view'), 'unusual');
  } finally { await page.close(); }
});
