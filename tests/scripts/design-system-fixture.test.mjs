import test from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { ROOT } from '../../scripts/lib/repo.mjs';
import { launch, openPage, toUrl } from '../../shared/tools/layout-probe.mjs';

const fixture = toUrl(join(ROOT, 'tests/fixtures/pages/signal-foundry.html'));

test('Signal Foundry reference changes selected detail and fits narrow viewports', async (t) => {
  const { browser, error } = await launch();
  if (!browser) return t.skip(`no browser available: ${error.split('\n')[0]}`);
  try {
    for (const width of [1366, 390, 320]) {
      const { page, context } = await openPage(browser, fixture, { width, height: 768, waitMs: 0 });
      try {
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        assert.ok(overflow <= 1, `${width}px: horizontal overflow ${overflow}px`);
        await page.locator('.row').nth(1).click();
        assert.equal(await page.locator('#detail-title').textContent(), 'Export worker');
        assert.equal(await page.locator('.row').nth(1).getAttribute('aria-pressed'), 'true');
        assert.equal(await page.locator('.row').first().getAttribute('aria-pressed'), 'false');
      } finally { await context.close(); }
    }
  } finally { await browser.close(); }
});
