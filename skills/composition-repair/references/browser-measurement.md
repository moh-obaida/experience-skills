# Browser Measurement

The scripts in `scripts/` render a page with Playwright and report measured geometry. They
provide facts; you provide judgment.

## Requirements

- Node.js 18 or newer
- Playwright available in the project being checked, globally, or via `PLAYWRIGHT_MODULE`:
  - `npm i -D playwright && npx playwright install chromium`, or
  - `npm i -D playwright-core` and pass `--channel chrome` to use an installed Chrome.

If Playwright is not available, the scripts exit with code 2 and a message. Fall back to
static analysis and mark findings as unverified.

## Targets

Each script accepts an `http(s)://` URL, a `file://` URL, or a local HTML file path.
Local dev servers work (`http://localhost:3000`). Scripts open only the URL you give them.
They make no other network calls of their own; the page itself may load its resources.

## Scripts

### measure-layout.mjs
```bash
node scripts/measure-layout.mjs <target> [--size 1440x900] [--json] [--channel chrome]
```
Reports for the first viewport:
- **Content coverage**: share of the viewport covered by content elements (text, media,
  controls) on a 16px grid.
- **Content box**: bounding box of all content in the viewport, its share, and side margins.
- **Largest empty band**: tallest full-width strip with no content.
- **Environment treatment**: whether a large background image/gradient or large media exists.
- **Focal candidates**: largest type in view, count of distinct font sizes, scale ratio.
- **Actions above the fold**: button-like elements at least 64×32.
- **Chrome**: fixed/sticky elements and their share of viewport height.
- **Scroll regions**: elements currently scrolling internally.

Heuristic flags (exit code 1 if any): coverage under 15% without environment treatment;
chrome over 20% of height; no actions above the fold on a page that has actions below;
more than 2 inner scroll regions; type scale ratio under 1.25.

### detect-overflow.mjs
```bash
node scripts/detect-overflow.mjs <target> [--sizes 1440x900,390x844] [--json]
```
Reports horizontal page overflow and the outermost elements escaping the viewport without a
clipping ancestor. Exit code 1 if any size overflows.

### detect-collisions.mjs
```bash
node scripts/detect-collisions.mjs <target> [--size 390x844] [--min-ratio 0.25] [--json]
```
Reports overlapping content elements (text, media, controls) that are not nested within each
other and overlap by at least `--min-ratio` of the smaller element. Exit code 1 if any.

## Limitations

- Measures one state at one moment after load (plus a short wait). Trigger other states
  yourself (log in, open menus, load data) or build a fixture page.
- Collision detection cannot know intent: badges on avatars and deliberate overlaps will
  appear. Read each result.
- Coverage treats all content equally; a giant decorative image counts as content. Interpret
  alongside a screenshot.
- Canvas- and WebGL-rendered content is opaque to DOM measurement.
- Shadow DOM contents are not traversed.
- Cross-origin iframes are measured as boxes only.

## Exit codes

- `0` no flags or findings
- `1` findings present (not necessarily bugs; review them)
- `2` usage error or environment problem (for example Playwright missing)
