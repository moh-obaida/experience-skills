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
