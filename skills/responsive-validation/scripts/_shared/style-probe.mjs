// GENERATED FROM shared/tools/style-probe.mjs. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`.
// style-probe.mjs
//
// Shared style-level measurement helpers: borders, outlines, pseudo-elements, clipping
// ancestors, repeated-component variance, and per-route pattern inventories.
//
// Two halves, like layout-probe.mjs:
//   1. Browser collection (collectStyleSnapshot runs inside the page; focusPass and
//      hoverPass drive Playwright). Nothing is written to disk and nothing leaves the machine.
//   2. Pure analyzers that take a snapshot and return findings. They are deterministic and
//      unit-tested. They report candidates with evidence; they do not judge intent. A finding
//      says "this geometry is unusual", never "this is wrong": asymmetric design is legitimate.

import { launch, openPage, toUrl, UsageError } from './layout-probe.mjs';

export { launch, openPage, toUrl, UsageError };

// ---------------------------------------------------------------------------
// In-page collection
// ---------------------------------------------------------------------------

/** Runs inside the page. Must be self-contained. Returns a plain JSON snapshot. */
export function collectStyleSnapshot(maxElements = 3000) {
  const INTERACTIVE = new Set(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'SUMMARY']);
  const sx = window.scrollX;
  const sy = window.scrollY;
  const px = (v) => parseFloat(v) || 0;

  const shortPath = (el) => {
    const parts = [];
    let node = el;
    while (node && node.nodeType === 1 && parts.length < 4 && node !== document.body) {
      let part = node.tagName.toLowerCase();
      if (node.id) { part += `#${node.id}`; parts.unshift(part); break; }
      const cls = [...node.classList].filter((c) => c.length < 30).slice(0, 2);
      if (cls.length) part += `.${cls.join('.')}`;
      const parent = node.parentElement;
      if (parent) {
        const same = [...parent.children].filter((c) => c.tagName === node.tagName);
        if (same.length > 1) part += `:nth-of-type(${same.indexOf(node) + 1})`;
      }
      parts.unshift(part);
      node = node.parentElement;
    }
    return parts.join(' > ') || el.tagName.toLowerCase();
  };

  const ownText = (el) => {
    let text = '';
    for (const child of el.childNodes) if (child.nodeType === 3) text += child.textContent;
    return text.replace(/\s+/g, ' ').trim();
  };

  const pseudoInfo = (el, which) => {
    const s = getComputedStyle(el, which);
    if (!s || s.content === 'none' || s.content === 'normal' || s.display === 'none') return null;
    return {
      position: s.position,
      width: px(s.width), height: px(s.height),
      left: s.left === 'auto' ? null : px(s.left), right: s.right === 'auto' ? null : px(s.right),
      top: s.top === 'auto' ? null : px(s.top), bottom: s.bottom === 'auto' ? null : px(s.bottom),
      bg: s.backgroundColor,
      bt: px(s.borderTopWidth), bb: px(s.borderBottomWidth), bl: px(s.borderLeftWidth), br: px(s.borderRightWidth),
      borderColor: s.borderBottomColor,
      hasContent: s.content !== '""' && s.content !== "''",
    };
  };

  const all = [...document.body.querySelectorAll('*')];
  const index = new Map();
  const elements = [];
  for (const el of all) {
    if (elements.length >= maxElements) break;
    if (el.closest('svg') && el.tagName.toLowerCase() !== 'svg') continue;
    const s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 1 && r.height < 1) continue;
    let parent = el.parentElement;
    while (parent && !index.has(parent)) parent = parent.parentElement;
    const tag = el.tagName.toLowerCase();
    const role = el.getAttribute('role');
    const text = ownText(el);
    const record = {
      i: elements.length,
      parent: parent ? index.get(parent) : -1,
      tag,
      path: shortPath(el),
      cls: [...el.classList].slice(0, 6),
      role,
      label: el.getAttribute('aria-label') || el.getAttribute('title') || '',
      lang: el.getAttribute('lang') || '',
      type: el.getAttribute('type') || '',
      text: text.slice(0, 80),
      x: r.left + sx, y: r.top + sy, w: r.width, h: r.height,
      interactive: INTERACTIVE.has(tag.toUpperCase()) || ['button', 'link', 'tab', 'menuitem', 'checkbox', 'switch', 'combobox'].includes(role) || el.hasAttribute('onclick'),
      display: s.display,
      position: s.position,
      ov: [s.overflowX, s.overflowY],
      bg: s.backgroundColor,
      color: s.color,
      fs: px(s.fontSize),
      fw: Number(s.fontWeight) || 400,
      td: s.textDecorationLine,
      dir: s.direction,
      radius: [px(s.borderTopLeftRadius), px(s.borderTopRightRadius), px(s.borderBottomRightRadius), px(s.borderBottomLeftRadius)],
      pad: [px(s.paddingTop), px(s.paddingRight), px(s.paddingBottom), px(s.paddingLeft)],
      bw: [px(s.borderTopWidth), px(s.borderRightWidth), px(s.borderBottomWidth), px(s.borderLeftWidth)],
      bs: [s.borderTopStyle, s.borderRightStyle, s.borderBottomStyle, s.borderLeftStyle],
      bc: [s.borderTopColor, s.borderRightColor, s.borderBottomColor, s.borderLeftColor],
      outline: { w: px(s.outlineWidth), style: s.outlineStyle, offset: px(s.outlineOffset), color: s.outlineColor },
      shadow: s.boxShadow === 'none' ? '' : s.boxShadow,
      aria: {
        selected: el.getAttribute('aria-selected'),
        current: el.getAttribute('aria-current'),
        pressed: el.getAttribute('aria-pressed'),
        expanded: el.getAttribute('aria-expanded'),
        invalid: el.getAttribute('aria-invalid'),
        disabled: el.getAttribute('aria-disabled') || (el.disabled ? 'true' : null),
      },
      before: pseudoInfo(el, '::before'),
      after: pseudoInfo(el, '::after'),
    };
    index.set(el, record.i);
    elements.push(record);
  }
  return {
    url: location.href,
    title: document.title,
    lang: document.documentElement.getAttribute('lang') || '',
    dir: document.documentElement.getAttribute('dir') || getComputedStyle(document.documentElement).direction,
    viewport: { width: document.documentElement.clientWidth, height: window.innerHeight },
    truncated: all.length > elements.length && elements.length >= maxElements,
    elements,
  };
}

export async function styleSnapshot(page, max = 3000) {
  return page.evaluate(collectStyleSnapshot, max);
}

/**
 * Press Tab up to `max` times and record, for each focus stop, the focus indicator and every
 * clipping ancestor box. Runs in a real browser; analyzeFocusStops judges the result.
 */
export async function focusPass(page, max = 40) {
  const stops = [];
  const seen = new Set();
  for (let n = 0; n < max; n++) {
    await page.keyboard.press('Tab');
    const stop = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body || el === document.documentElement) return null;
      const px = (v) => parseFloat(v) || 0;
      const s = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const clips = [];
      let node = el.parentElement;
      while (node && node !== document.documentElement) {
        const cs = getComputedStyle(node);
        if (['hidden', 'clip', 'auto', 'scroll'].some((v) => cs.overflowX === v || cs.overflowY === v)) {
          const nr = node.getBoundingClientRect();
          clips.push({
            tag: node.tagName.toLowerCase(), cls: [...node.classList].slice(0, 2).join('.'),
            overflow: [cs.overflowX, cs.overflowY],
            left: nr.left + px(cs.borderLeftWidth), top: nr.top + px(cs.borderTopWidth),
            right: nr.right - px(cs.borderRightWidth), bottom: nr.bottom - px(cs.borderBottomWidth),
          });
        }
        node = node.parentElement;
      }
      const cls = [...el.classList].slice(0, 2).join('.');
      return {
        path: el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (cls ? `.${cls}` : ''),
        text: (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 40),
        rect: { left: r.left, top: r.top, right: r.right, bottom: r.bottom },
        outline: { w: px(s.outlineWidth), style: s.outlineStyle, offset: px(s.outlineOffset), color: s.outlineColor },
        shadow: s.boxShadow === 'none' ? '' : s.boxShadow,
        borderColor: s.borderTopColor,
        bg: s.backgroundColor,
        clips,
      };
    });
    if (!stop) continue;
    const key = `${stop.path}|${stop.rect.left}|${stop.rect.top}`;
    if (seen.has(key)) break; // focus cycled
    seen.add(key);
    stops.push(stop);
  }
  return stops;
}

/**
 * Hover each candidate and re-snapshot, so hover-only indicator layers become visible.
 * Returns [{ base: index, snapshot }]. The page is not modified.
 */
export async function hoverPass(page, base, candidates, settleMs = 120) {
  const out = [];
  for (const i of candidates) {
    const el = base.elements[i];
    const [scrollX, scrollY] = await page.evaluate(() => [window.scrollX, window.scrollY]);
    await page.mouse.move(el.x - scrollX + el.w / 2, el.y - scrollY + el.h / 2);
    await page.waitForTimeout(settleMs);
    out.push({ base: i, snapshot: await styleSnapshot(page) });
  }
  await page.mouse.move(0, 0);
  return out;
}

// ---------------------------------------------------------------------------
// Pure helpers
// ---------------------------------------------------------------------------

const round = (n, d = 1) => Math.round(n * 10 ** d) / 10 ** d;

export function parseColor(value) {
  const m = String(value ?? '').match(/rgba?\(\s*(\d+(?:\.\d+)?)[,\s]+(\d+(?:\.\d+)?)[,\s]+(\d+(?:\.\d+)?)(?:[,\s/]+(\d*\.?\d+%?))?\s*\)/);
  if (!m) return null;
  let a = m[4] === undefined ? 1 : m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4]);
  if (Number.isNaN(a)) a = 1;
  return { r: +m[1], g: +m[2], b: +m[3], a };
}

export const isVisibleColor = (value) => { const c = parseColor(value); return !!c && c.a > 0.05; };

const SIDES = ['top', 'right', 'bottom', 'left'];

/** Which sides carry a visible border. */
export function borderSides(el) {
  return SIDES.map((_, k) => el.bw[k] >= 0.5 && el.bs[k] !== 'none' && el.bs[k] !== 'hidden' && isVisibleColor(el.bc[k]));
}

const byIndex = (snapshot) => snapshot.elements;

function ancestorsOf(snapshot, el) {
  const out = [];
  let p = el.parent;
  while (p !== -1 && p !== undefined) { out.push(snapshot.elements[p]); p = snapshot.elements[p].parent; }
  return out;
}

const clips = (a) => a.ov.some((v) => v === 'hidden' || v === 'clip');

function isSeparator(el) {
  if (el.tag === 'hr' || el.role === 'separator') return true;
  const thin = (el.h <= 3 && el.w >= 16) || (el.w <= 3 && el.h >= 16);
  return thin && !el.text && (isVisibleColor(el.bg) || borderSides(el).some(Boolean));
}

// ---------------------------------------------------------------------------
// BORDLINE analyzers
// ---------------------------------------------------------------------------

/**
 * BL1 partial border, BL2 uneven stroke, BL3 clipped edge, BL5 separator overreach/misalignment,
 * BL8 pseudo-element overhang. Returns findings with evidence and a `confidence`.
 */
export function analyzeBorders(snapshot, { tolerance = 1 } = {}) {
  const findings = [];
  const els = byIndex(snapshot);

  for (const el of els) {
    const sides = borderSides(el);
    const count = sides.filter(Boolean).length;
    const boxy = el.w >= 40 && el.h >= 20 && !['td', 'th', 'tr', 'hr', 'span'].includes(el.tag);
    const hasSurface = el.radius.some((r) => r > 0) || isVisibleColor(el.bg) || el.shadow;

    // BL1: two or three sides bordered. A single side is a deliberate rule (accent edge, underline,
    // divider); four sides is a full stroke; two opposite sides is a deliberate rail.
    if (boxy && (count === 3 || (count === 2 && sides[0] !== sides[2] && sides[1] !== sides[3]))) {
      const missing = SIDES.filter((_, k) => !sides[k]);
      const siblings = els.filter((o) => o.parent === el.parent && o.i !== el.i && o.tag === el.tag);
      const everyoneSame = siblings.length > 0 && siblings.every((o) => borderSides(o).join() === sides.join());
      findings.push({
        code: 'BL1', title: 'PARTIAL BORDER', path: el.path, i: el.i,
        message: `bordered on ${SIDES.filter((_, k) => sides[k]).join('+')} but not ${missing.join('+')}`,
        evidence: { widths: el.bw, hasRadius: el.radius.some((r) => r > 0), siblingsShareThis: everyoneSame },
        confidence: everyoneSame ? 'low' : 'medium',
        note: everyoneSame ? 'Siblings share the pattern, so it may be an intentional join (segmented control); confirm in the render.' : 'Check for a pseudo-element or neighbor supplying the missing side before calling it a defect.',
      });
    }
    // BL1 variant: a rounded surface with a one-sided border and a radius reads as a cut stroke.
    if (boxy && count === 1 && el.radius.some((r) => r >= 6) && hasSurface && el.w >= 80 && el.h >= 40) {
      const side = SIDES[sides.indexOf(true)];
      findings.push({
        code: 'BL1', title: 'PARTIAL BORDER', path: el.path, i: el.i,
        message: `rounded ${Math.max(...el.radius)}px surface carries a border on ${side} only`,
        evidence: { widths: el.bw, radius: el.radius },
        confidence: 'low',
        note: 'An accent edge on a rounded card is a common deliberate treatment; flag only if the curve visibly kinks or the other sides are expected.',
      });
    }

    // BL2: three or four sides present with different widths.
    if (count >= 3) {
      const ws = el.bw.filter((_, k) => sides[k]);
      if (Math.max(...ws) - Math.min(...ws) >= tolerance) {
        findings.push({
          code: 'BL2', title: 'UNEVEN STROKE', path: el.path, i: el.i,
          message: `border widths differ across sides (${el.bw.join('/')}px top/right/bottom/left)`,
          evidence: { widths: el.bw },
          confidence: Math.min(...ws) >= 1 && Math.max(...ws) >= 2 * Math.min(...ws) ? 'medium' : 'low',
          note: 'A heavier accent edge is legitimate when it carries meaning; flag when no state or role explains it.',
        });
      }
      const colors = new Set(el.bc.filter((_, k) => sides[k]));
      if (colors.size > 1) {
        findings.push({
          code: 'BL2', title: 'UNEVEN STROKE', path: el.path, i: el.i,
          message: 'border colors differ across sides',
          evidence: { colors: [...colors] }, confidence: 'low',
          note: 'Per-side color is rare outside bevel styles.',
        });
      }
    }

    // BL3: a bordered/shadowed box extends past a clipping ancestor's padding box.
    if ((count > 0 || el.shadow) && el.w > 4 && el.h > 4) {
      for (const a of ancestorsOf(snapshot, el)) {
        if (!clips(a)) continue;
        const left = a.x + a.bw[3], right = a.x + a.w - a.bw[1], top = a.y + a.bw[0], bottom = a.y + a.h - a.bw[2];
        const cut = {
          left: round(left - el.x), right: round(el.x + el.w - right), top: round(top - el.y), bottom: round(el.y + el.h - bottom),
        };
        const cutSides = Object.entries(cut).filter(([side, v]) => v >= tolerance && (side === 'left' || side === 'right' || side === 'top' || side === 'bottom'));
        if (cutSides.length && cutSides.length <= 2) {
          findings.push({
            code: 'BL3', title: 'CLIPPED EDGE', path: el.path, i: el.i,
            message: `extends ${cutSides.map(([s, v]) => `${v}px past ${s}`).join(', ')} of clipping ancestor ${a.path} (overflow ${a.ov.join('/')})`,
            evidence: { cut, clippedBy: a.path },
            confidence: 'medium',
            note: 'The visible stroke on the cut side is missing. Confirm in a screenshot; scroll containers legitimately cut content.',
          });
          break;
        }
        // Shadows and outlines painting outside the box are clipped by ancestors that sit snug around them.
      }
    }

    // BL8: pseudo-element lines that overhang their host.
    for (const which of ['before', 'after']) {
      const p = el[which];
      if (!p || p.position !== 'absolute') continue;
      const overL = p.left !== null && p.left < -2 ? -p.left : 0;
      const overR = p.right !== null && p.right < -2 ? -p.right : 0;
      if ((overL || overR) && !clips(el) && (p.height <= 6 || p.width <= 6)) {
        findings.push({
          code: 'BL8', title: 'PSEUDO OVERHANG', path: `${el.path}::${which}`, i: el.i,
          message: `line-like ::${which} reaches ${overL ? `${overL}px past the left` : ''}${overL && overR ? ' and ' : ''}${overR ? `${overR}px past the right` : ''} of its host`,
          evidence: { left: p.left, right: p.right, width: p.width, height: p.height },
          confidence: 'low',
          note: 'Full-bleed rules inside a padded card are a common deliberate trick; confirm the card edge it should meet.',
        });
      }
    }
  }

  // BL5: separators that stick out of the parent or disagree with their siblings.
  const seps = els.filter(isSeparator);
  for (const sep of seps) {
    const parent = sep.parent >= 0 ? els[sep.parent] : null;
    if (!parent) continue;
    const out = {
      left: round(parent.x - sep.x), right: round(sep.x + sep.w - (parent.x + parent.w)),
      top: round(parent.y - sep.y), bottom: round(sep.y + sep.h - (parent.y + parent.h)),
    };
    const worst = Object.entries(out).filter(([, v]) => v >= 2);
    if (worst.length) {
      findings.push({
        code: 'BL5', title: 'SEPARATOR OVERREACH', path: sep.path, i: sep.i,
        message: `separator extends ${worst.map(([s, v]) => `${v}px past parent ${s}`).join(', ')}`,
        evidence: { out, parent: parent.path }, confidence: 'medium',
        note: 'A rule that pokes out of its container reads as a leftover; check negative margins and fixed widths.',
      });
    }
  }
  const sepsByParent = new Map();
  for (const sep of seps) {
    if (sep.parent < 0) continue;
    const horizontal = sep.w >= sep.h;
    const key = `${sep.parent}:${horizontal}`;
    (sepsByParent.get(key) ?? sepsByParent.set(key, []).get(key)).push(sep);
  }
  for (const group of sepsByParent.values()) {
    if (group.length < 2) continue;
    const horizontal = group[0].w >= group[0].h;
    const starts = group.map((g) => (horizontal ? g.x : g.y));
    const lengths = group.map((g) => (horizontal ? g.w : g.h));
    const offset = Math.max(...starts) - Math.min(...starts);
    const lengthSpread = Math.max(...lengths) - Math.min(...lengths);
    if ((offset >= 2 && offset <= 24) || (lengthSpread >= 2 && lengthSpread <= 24)) {
      findings.push({
        code: 'BL5', title: 'SEPARATOR MISALIGN', path: group[0].path, i: group[0].i,
        message: `${group.length} sibling separators disagree: start offset ${round(offset)}px, length spread ${round(lengthSpread)}px`,
        evidence: { starts: starts.map((s) => round(s)), lengths: lengths.map((s) => round(s)) }, confidence: 'low',
        note: 'Indented dividers (after an avatar column) are deliberate when all share the indent.',
      });
    }
  }
  return findings;
}

/** BL9: thin connectors between node-like siblings that are not centered on the nodes. */
export function analyzeConnectors(snapshot, { tolerance = 1.5 } = {}) {
  const findings = [];
  const els = byIndex(snapshot);
  const byParent = new Map();
  for (const el of els) (byParent.get(el.parent) ?? byParent.set(el.parent, []).get(el.parent)).push(el);
  for (const siblings of byParent.values()) {
    siblings.sort((a, b) => a.x - b.x);
    for (let k = 1; k < siblings.length - 1; k++) {
      const line = siblings[k];
      if (!(line.h <= 6 && line.w >= 16 && (isVisibleColor(line.bg) || borderSides(line).some(Boolean)) && !line.text)) continue;
      const left = siblings[k - 1], right = siblings[k + 1];
      const nodeLike = (n) => n.w >= 10 && n.w <= 80 && Math.abs(n.w - n.h) <= 6;
      if (!nodeLike(left) || !nodeLike(right)) continue;
      const lineY = line.y + line.h / 2;
      const off = [left, right].map((n) => round(lineY - (n.y + n.h / 2)));
      if (off.some((d) => Math.abs(d) > tolerance)) {
        findings.push({
          code: 'BL9', title: 'CONNECTOR MISALIGN', path: line.path, i: line.i,
          message: `connector center is ${off[0]}px / ${off[1]}px off the centers of its neighboring nodes`,
          evidence: { lineY: round(lineY), nodeCenters: [left, right].map((n) => round(n.y + n.h / 2)) }, confidence: 'medium',
          note: 'Compare with the node border widths: a 2px node stroke shifts the visual center if the connector uses content-box math.',
        });
      }
    }
  }
  return findings;
}

// --- indicator layers (BL4) -------------------------------------------------

const LAYER_EDGES = ['top', 'right', 'bottom', 'left'];

/** Visible edge-marking layers on one element: own border, line-like pseudo, edge shadow, underline. */
export function layersOf(el) {
  const layers = [];
  const sides = borderSides(el);
  LAYER_EDGES.forEach((edge, k) => {
    if (sides[k]) layers.push({ edge, kind: 'border', width: el.bw[k], color: el.bc[k] });
  });
  for (const which of ['before', 'after']) {
    const p = el[which];
    if (!p || !isVisibleColor(p.bg)) continue;
    const wide = p.width >= el.w * 0.4 || (p.left !== null && p.right !== null);
    const tall = p.height >= el.h * 0.4 || (p.top !== null && p.bottom !== null);
    if (p.height <= 6 && wide && p.bottom !== null && p.bottom <= 4) layers.push({ edge: 'bottom', kind: `pseudo-${which}`, width: p.height, color: p.bg });
    else if (p.height <= 6 && wide && p.top !== null && p.top <= 4 && p.bottom === null) layers.push({ edge: 'top', kind: `pseudo-${which}`, width: p.height, color: p.bg });
    else if (p.width <= 6 && tall && p.left !== null && p.left <= 4) layers.push({ edge: 'left', kind: `pseudo-${which}`, width: p.width, color: p.bg });
    else if (p.width <= 6 && tall && p.right !== null && p.right <= 4) layers.push({ edge: 'right', kind: `pseudo-${which}`, width: p.width, color: p.bg });
  }
  const shadows = (el.shadow || '').split(/,(?![^(]*\))/).map((s) => s.trim()).filter(Boolean);
  for (const sh of shadows) {
    const nums = (sh.replace(/rgba?\([^)]*\)/, '').match(/-?\d+(?:\.\d+)?px/g) ?? []).map(parseFloat);
    if (nums.length < 2) continue;
    const [ox, oy, blur = 0, spread = 0] = nums;
    if (blur > 1) continue;
    if (oy >= 1 && ox === 0) layers.push({ edge: 'bottom', kind: 'shadow-line', width: oy, color: sh });
    else if (oy <= -1 && ox === 0) layers.push({ edge: 'top', kind: 'shadow-line', width: -oy, color: sh });
    else if (ox >= 1 && oy === 0) layers.push({ edge: 'right', kind: 'shadow-line', width: ox, color: sh });
    else if (ox <= -1 && oy === 0) layers.push({ edge: 'left', kind: 'shadow-line', width: -ox, color: sh });
    else if (ox === 0 && oy === 0 && spread >= 1) LAYER_EDGES.forEach((edge) => layers.push({ edge, kind: 'shadow-ring', width: spread, color: sh }));
  }
  if (/underline/.test(el.td) && el.text) layers.push({ edge: 'bottom', kind: 'text-underline', width: 1, color: el.color });
  if (el.outline.w >= 1 && el.outline.style !== 'none') LAYER_EDGES.forEach((edge) => layers.push({ edge, kind: 'outline', width: el.outline.w, color: el.outline.color }));
  return layers;
}

function overlapRatio(a, b) {
  const w = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
  const h = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
  if (w <= 0 || h <= 0) return 0;
  return (w * h) / Math.min(a.w * a.h, b.w * b.h);
}

/** Elements that visually share one footprint with `el`: itself, wrapping ancestors, and filling descendants. */
export function footprint(snapshot, el) {
  const near = [el];
  for (const a of ancestorsOf(snapshot, el).slice(0, 3)) {
    if (overlapRatio(a, el) >= 0.9 && Math.abs(a.w - el.w) <= 12 && Math.abs(a.h - el.h) <= 14) near.push(a);
    else break;
  }
  const kids = snapshot.elements.filter((o) => o.parent === el.i && overlapRatio(o, el) >= 0.8);
  return [...near, ...kids];
}

const SELECTED_CLASS = /(^|[-_])(active|selected|current|checked|on)($|[-_])/;
export function isSelectedLike(el) {
  return el.aria.selected === 'true' || (el.aria.current && el.aria.current !== 'false') || el.aria.pressed === 'true' || el.cls.some((c) => SELECTED_CLASS.test(c));
}

function layerKey(l) { return `${l.edge}:${l.kind}`; }

function stateLayers(snapshot, el) {
  const out = [];
  for (const node of footprint(snapshot, el)) for (const l of layersOf(node)) out.push({ ...l, node: node.path });
  return out;
}

function duplicateEdges(added) {
  const byEdge = new Map();
  for (const l of added) (byEdge.get(l.edge) ?? byEdge.set(l.edge, []).get(l.edge)).push(l);
  const dup = [];
  for (const [edge, ls] of byEdge) {
    // the all-around outline/ring layers appear on every edge; they only duplicate when something else also marks that edge.
    const distinct = new Map(ls.map((l) => [`${l.kind}@${l.node}`, l]));
    const ringOnly = [...distinct.values()].every((l) => l.kind === 'outline' || l.kind === 'shadow-ring');
    if (distinct.size >= 2 && !ringOnly) dup.push({ edge, layers: [...distinct.values()].map((l) => `${l.kind} ${round(l.width)}px on ${l.node}`) });
  }
  return dup;
}

/**
 * BL4 for selected/current items: layers a selected element has that an unselected sibling lacks.
 * Two or more different layers on one edge means two indicators mark one state.
 */
export function analyzeSelectedIndicators(snapshot) {
  const findings = [];
  const els = byIndex(snapshot);
  for (const el of els) {
    if (!isSelectedLike(el) || el.w < 8 || el.h < 8) continue;
    const peers = els.filter((o) => o.parent === el.parent && o.i !== el.i && o.tag === el.tag && !isSelectedLike(o));
    const baseline = new Set((peers[0] ? stateLayers(snapshot, peers[0]) : []).map(layerKey));
    const added = stateLayers(snapshot, el).filter((l) => !baseline.has(layerKey(l)));
    for (const d of duplicateEdges(added)) {
      findings.push({
        code: 'BL4', title: 'DUPLICATE INDICATOR', path: el.path, i: el.i,
        message: `selected item marks its ${d.edge} edge twice: ${d.layers.join(' + ')}`,
        evidence: { edge: d.edge, layers: d.layers, hadUnselectedPeer: peers.length > 0 }, confidence: 'medium',
        note: 'Pick one owner for the selected indicator (component, not both a wrapper and its child).',
      });
    }
  }
  return findings;
}

/** BL4 for hover/focus states: compare a hovered snapshot with the base snapshot at the same element index. */
export function analyzeStateIndicators(base, hovered, index, state = 'hover') {
  const a = base.elements[index];
  const b = hovered.elements.find((e) => e.path === a?.path && e.tag === a?.tag) ?? hovered.elements[index];
  if (!a || !b) return [];
  const before = new Set(stateLayers(base, a).map((l) => `${layerKey(l)}@${l.node}`));
  const added = stateLayers(hovered, b).filter((l) => !before.has(`${layerKey(l)}@${l.node}`));
  return duplicateEdges(added).map((d) => ({
    code: 'BL4', title: 'DUPLICATE INDICATOR', path: a.path, i: a.i,
    message: `${state} adds two indicators on the ${d.edge} edge: ${d.layers.join(' + ')}`,
    evidence: { edge: d.edge, layers: d.layers, state }, confidence: 'medium',
    note: 'Two layers appearing together on one edge usually means a wrapper and its child both style the state.',
  }));
}

/** BL6 from a keyboard focus pass: no visible indicator, or indicator clipped by an ancestor. */
export function analyzeFocusStops(stops) {
  const findings = [];
  for (const s of stops) {
    const o = s.outline;
    const hasOutline = o.w >= 1 && o.style !== 'none' && isVisibleColor(o.color);
    const shadowSpread = (() => {
      const m = (s.shadow || '').replace(/rgba?\([^)]*\)/g, '').match(/-?\d+(?:\.\d+)?px/g);
      if (!m || m.length < 4) return 0;
      return Math.max(0, parseFloat(m[3]) + parseFloat(m[2]) * 0.5);
    })();
    const reach = (hasOutline ? Math.max(0, o.offset) + o.w : 0);
    const ring = Math.max(reach, shadowSpread);
    if (!hasOutline && !shadowSpread) {
      findings.push({
        code: 'BL6', title: 'FOCUS CLIPPED OR ABSENT', path: s.path, i: -1,
        message: `"${s.text}" shows no outline or ring-shadow when focused`,
        evidence: { outline: o, shadow: s.shadow }, confidence: 'low',
        note: 'Focus can be shown by a border or background change that this probe cannot see; confirm in a render.',
      });
      continue;
    }
    for (const c of s.clips) {
      const cut = {
        left: round(c.left - (s.rect.left - ring)), right: round((s.rect.right + ring) - c.right),
        top: round(c.top - (s.rect.top - ring)), bottom: round((s.rect.bottom + ring) - c.bottom),
      };
      const hit = Object.entries(cut).filter(([, v]) => v >= 1);
      const scrollsAxis = c.overflow.some((v) => v === 'auto' || v === 'scroll');
      if (hit.length && !(scrollsAxis && hit.length === 0)) {
        findings.push({
          code: 'BL6', title: 'FOCUS CLIPPED OR ABSENT', path: s.path, i: -1,
          message: `"${s.text}" focus indicator (${round(ring)}px) is cut ${hit.map(([side, v]) => `${v}px at ${side}`).join(', ')} by ${c.tag}${c.cls ? `.${c.cls}` : ''} (overflow ${c.overflow.join('/')})`,
          evidence: { ring: round(ring), cut, clippedBy: c }, confidence: 'high',
          note: 'Fix by moving padding to the clipping ancestor, using a negative outline-offset, or inset focus styling.',
        });
        break;
      }
    }
  }
  return findings;
}

// ---------------------------------------------------------------------------
// Repeated-component variance
// ---------------------------------------------------------------------------

const STATE_TOKEN = /(^|[-_])(active|selected|current|checked|open|hover|focus|disabled|loading|is|has)($|[-_])/;

/** Component signature: tag, role, and class tokens that are not state or utility noise. */
export function signature(el) {
  const cls = el.cls.filter((c) => !STATE_TOKEN.test(c) && !/^\d/.test(c)).sort();
  return `${el.tag}|${el.role ?? ''}|${el.type ?? ''}|${cls.join('.')}`;
}

function normRadius(el) {
  const r = Math.max(...el.radius);
  return Math.min(r, Math.min(el.w, el.h) / 2);
}

const CONTROL_TAGS = new Set(['button', 'input', 'select', 'textarea']);
const isControl = (el) => CONTROL_TAGS.has(el.tag) || ['button', 'tab', 'combobox'].includes(el.role);

const PROPS = [
  { key: 'height', tol: 2, get: (e) => round(e.h, 0), controlsOnly: true },
  { key: 'padding', tol: 2, get: (e) => e.pad.map((v) => round(v, 0)).join('/'), numeric: (e) => e.pad, tolArr: 2 },
  { key: 'radius', tol: 1.5, get: (e) => round(normRadius(e), 0) },
  { key: 'border-width', tol: 0.5, get: (e) => e.bw.map((v) => round(v, 1)).join('/'), numeric: (e) => e.bw, tolArr: 0.5 },
  { key: 'shadow', tol: 0, get: (e) => e.shadow || 'none' },
  { key: 'font-size', tol: 0.5, get: (e) => round(e.fs, 1) },
  { key: 'font-weight', tol: 0, get: (e) => e.fw },
];

function differs(prop, a, b) {
  if (prop.numeric) {
    const x = prop.numeric(a), y = prop.numeric(b);
    return x.some((v, k) => Math.abs(v - y[k]) > prop.tolArr);
  }
  const x = prop.get(a), y = prop.get(b);
  if (typeof x === 'number' && typeof y === 'number') return Math.abs(x - y) > prop.tol;
  return x !== y;
}

/**
 * Cohorts of same-signature components whose computed style disagrees. Reports minority values and
 * where the minority sits, so the agent can tell a drifting instance from a shared-component defect.
 */
export function analyzeCohorts(snapshot, { minSize = 2, limit = 30 } = {}) {
  const findings = [];
  const strict = new Map();
  const loose = new Map();
  for (const el of snapshot.elements) {
    const componentLike = isControl(el) || el.interactive || (el.w >= 60 && el.h >= 28 && (borderSides(el).some(Boolean) || isVisibleColor(el.bg) || el.shadow));
    if (!componentLike || (el.tag === 'a' && !el.cls.length && !el.role)) continue;
    if (el.tag === 'html' || el.tag === 'body') continue;
    if (isSelectedLike(el) || el.aria.disabled === 'true') continue; // state changes style on purpose; judged by the indicator analyzers
    const sig = signature(el);
    if (sig.endsWith('|')) continue; // unclassed generic element: no stable identity
    (strict.get(sig) ?? strict.set(sig, []).get(sig)).push(el);
    const base = el.cls.filter((c) => !STATE_TOKEN.test(c) && !/^\d/.test(c))[0];
    if (base) { const key = `${el.tag}|${el.role ?? ''}|${base}`; (loose.get(key) ?? loose.set(key, []).get(key)).push(el); }
  }
  const reported = new Set();
  const report = (label, members, props, cap) => {
    for (const prop of props) {
      const pool = prop.controlsOnly ? members.filter(isControl) : members;
      if (pool.length < minSize) continue;
      const counts = new Map();
      for (const m of pool) { const v = String(prop.get(m)); (counts.get(v) ?? counts.set(v, []).get(v)).push(m); }
      if (counts.size < 2) continue;
      const ranked = [...counts.entries()].sort((a, b) => b[1].length - a[1].length);
      const [majorityValue, majority] = ranked[0];
      const outliers = ranked.slice(1).flatMap(([, ms]) => ms).filter((m) => differs(prop, m, majority[0]));
      if (!outliers.length) continue;
      const dedupeKey = `${prop.key}|${outliers.map((o) => o.i).join(',')}`;
      if (reported.has(dedupeKey)) continue;
      reported.add(dedupeKey);
      const parentOf = (m) => ancestorsOf(snapshot, m).at(-1)?.path ?? '';
      const sections = new Set([...majority, ...outliers].map((m) => ancestorsOf(snapshot, m).find((a) => a.parent === -1 || ['section', 'main', 'aside', 'header', 'footer', 'nav', 'form'].includes(a.tag))?.path ?? parentOf(m)));
      findings.push({
        code: 'VC-VAR', title: 'COMPONENT VARIANCE', path: outliers[0].path, i: outliers[0].i,
        message: `${members.length}× ${label} disagree on ${prop.key}: ${ranked.map(([v, ms]) => `${v} (${ms.length})`).join(' vs ')}`,
        evidence: { property: prop.key, majority: majorityValue, outliers: outliers.slice(0, 6).map((m) => m.path), crossSection: sections.size > 1, grouping: cap ? 'base-class' : 'exact-class' },
        confidence: cap ? 'low' : outliers.length / members.length <= 0.34 ? 'medium' : 'low',
        note: cap
          ? 'Grouped by base class only, so variants are mixed in. Check whether the difference is a named variant or accidental drift.'
          : 'Same classes, different computed style. Establish whether a variant, a state, or a local override explains it before treating it as drift.',
      });
      if (findings.length >= limit) return true;
    }
    return false;
  };
  for (const [sig, members] of strict) if (members.length >= minSize && report(sig.replace(/\|/g, ' ').trim(), members, PROPS, false)) return findings;
  const LOOSE_PROPS = PROPS.filter((p) => ['padding', 'radius', 'border-width', 'height'].includes(p.key));
  for (const [key, members] of loose) {
    if (members.length < minSize || new Set(members.map(signature)).size < 2) continue;
    if (report(key.replace(/\|/g, ' ').trim(), members, LOOSE_PROPS, true)) return findings;
  }
  // Icon geometry inside same-signature controls.
  const iconGroups = new Map();
  for (const el of snapshot.elements) {
    if (!['svg', 'img', 'i'].includes(el.tag) || el.w > 64 || el.w < 8) continue;
    const host = ancestorsOf(snapshot, el).find((a) => a.interactive);
    if (!host) continue;
    const key = signature(host);
    if (key.endsWith('|')) continue;
    (iconGroups.get(key) ?? iconGroups.set(key, []).get(key)).push({ el, host });
  }
  for (const [key, items] of iconGroups) {
    if (items.length < 2) continue;
    const sizes = new Set(items.map(({ el }) => `${round(el.w, 0)}x${round(el.h, 0)}`));
    const widths = items.map(({ el }) => el.w);
    if (sizes.size > 1 && Math.max(...widths) - Math.min(...widths) > 2) {
      findings.push({
        code: 'VC-ICON', title: 'ICON GEOMETRY', path: items[0].el.path, i: items[0].el.i,
        message: `icons inside ${key.replace(/\|/g, ' ').trim()} range ${[...sizes].join(' vs ')}`,
        evidence: { sizes: [...sizes] }, confidence: 'low',
        note: 'Icons may differ by role (leading vs status); inconsistent size inside the same control variant is the signal.',
      });
    }
  }
  return findings;
}

/** Left edges of vertically stacked siblings that are off by a few pixels (not zero, not a design indent). */
export function analyzeEdgeAlignment(snapshot, { min = 0.75, max = 6 } = {}) {
  const findings = [];
  const byParent = new Map();
  for (const el of snapshot.elements) {
    if (el.parent < 0 || el.w < 40 || el.h < 10) continue;
    (byParent.get(el.parent) ?? byParent.set(el.parent, []).get(el.parent)).push(el);
  }
  for (const siblings of byParent.values()) {
    const stacked = siblings.filter((s) => !siblings.some((o) => o.i !== s.i && o.y < s.y + s.h - 1 && o.y + o.h > s.y + 1));
    if (stacked.length < 3) continue;
    const edges = stacked.map((s) => s.x);
    const sorted = [...edges].sort((a, b) => a - b);
    const spread = sorted.at(-1) - sorted[0];
    const modeCount = new Map();
    for (const e of edges) modeCount.set(round(e, 0), (modeCount.get(round(e, 0)) ?? 0) + 1);
    const [modeEdge, modeN] = [...modeCount.entries()].sort((a, b) => b[1] - a[1])[0];
    if (modeN < 2) continue;
    const off = stacked.filter((s) => { const d = Math.abs(s.x - modeEdge); return d >= min && d <= max; });
    if (off.length && spread <= 24) {
      findings.push({
        code: 'VC-EDGE', title: 'EDGE MISALIGNED', path: off[0].path, i: off[0].i,
        message: `${off.length} stacked sibling(s) start ${off.map((o) => round(Math.abs(o.x - modeEdge))).join('/')}px from the shared content edge (x≈${modeEdge})`,
        evidence: { edge: modeEdge, offenders: off.slice(0, 5).map((o) => ({ path: o.path, x: round(o.x) })) }, confidence: 'low',
        note: 'Small offsets are usually a padding or border mismatch between sibling wrappers.',
      });
    }
  }
  return findings;
}

/** Run every single-page analyzer. */
export function auditStyles(snapshot) {
  return [
    ...analyzeBorders(snapshot),
    ...analyzeConnectors(snapshot),
    ...analyzeSelectedIndicators(snapshot),
    ...analyzeCohorts(snapshot),
    ...analyzeEdgeAlignment(snapshot),
  ];
}

/** Candidates worth hovering: tab-like and nav-like interactive elements. */
export function hoverCandidates(snapshot, limit = 24) {
  const out = [];
  for (const el of snapshot.elements) {
    if (!el.interactive || el.w < 20 || el.h < 14 || ['input', 'select', 'textarea'].includes(el.tag)) continue;
    const anc = ancestorsOf(snapshot, el);
    const tabby = el.role === 'tab' || anc.some((a) => a.role === 'tablist' || a.tag === 'nav' || a.role === 'navigation') || el.cls.some((c) => /tab|nav|menu|link/.test(c));
    if (tabby) out.push(el.i);
    if (out.length >= limit) break;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Cross-route pattern inventory
// ---------------------------------------------------------------------------

const LANG_WORDS = /^(en|ar|fr|es|de|english|arabic|العربية|عربي|français|español|deutsch|language|lang|اللغة)\b/i;

function fingerprint(el) {
  return {
    height: round(el.h, 0), padding: el.pad.map((v) => round(v, 0)).join('/'),
    radius: round(normRadius(el), 0), border: el.bw.map((v) => round(v, 1)).join('/'),
    borderColor: borderSides(el).some(Boolean) ? el.bc[borderSides(el).indexOf(true)] : 'none',
    bg: isVisibleColor(el.bg) ? el.bg : 'none', color: el.color,
    fontSize: round(el.fs, 1), fontWeight: el.fw, shadow: el.shadow || 'none',
    element: `${el.tag}${el.role ? `[${el.role}]` : ''}`,
    indicator: isSelectedLike(el) ? layersOf(el).filter((l) => l.kind !== 'outline').map((l) => `${l.edge} ${l.kind} ${round(l.width, 0)}px`).join(', ') || 'fill-only' : '',
  };
}

function fpKey(fp) { return Object.values(fp).join('|'); }

/** Classify the interesting shared patterns of one route and summarize each with a dominant fingerprint. */
export function inventoryPatterns(snapshot) {
  const els = snapshot.elements;
  const kinds = {};
  const add = (kind, el) => { (kinds[kind] ??= []).push(el); };
  for (const el of els) {
    const anc = ancestorsOf(snapshot, el);
    const inHeader = anc.some((a) => a.tag === 'header' || a.role === 'banner');
    const label = `${el.label} ${el.text}`.trim();
    const isSelectLike = el.tag === 'select' || el.role === 'combobox' || el.role === 'listbox';
    if (isSelectLike || (el.interactive && LANG_WORDS.test(label) && label.length <= 24)) {
      if (isSelectLike && !LANG_WORDS.test(`${el.label} ${el.text}`) && !/lang/i.test(el.cls.join(' ') + el.path)) add('select', el);
      else add('language-control', el);
      continue;
    }
    if (el.role === 'tab' || (el.cls.some((c) => /(^|[-_])tab($|[-_])/.test(c)) && el.interactive)) { add(isSelectedLike(el) ? 'tab-selected' : 'tab', el); continue; }
    if (el.role === 'alert' || el.cls.some((c) => /(^|[-_])(error|invalid|danger)($|[-_])/.test(c)) && el.text) { add('error-message', el); continue; }
    if (el.role === 'dialog' || el.tag === 'dialog') { add('dialog', el); continue; }
    if (el.tag === 'input' && !['checkbox', 'radio', 'hidden', 'submit', 'button'].includes(el.type)) { add('text-input', el); continue; }
    if ((el.tag === 'button' || el.role === 'button' || (el.tag === 'a' && el.cls.some((c) => /btn|button/.test(c)))) && el.w >= 24 && !inHeader) {
      const filled = isVisibleColor(el.bg);
      const bordered = borderSides(el).some(Boolean);
      add(filled ? `button:filled:${el.bg}` : bordered ? 'button:outline' : 'button:ghost', el);
      continue;
    }
    if (el.tag === 'header' || el.role === 'banner') { add('header', el); continue; }
    if (el.tag === 'a' && inHeader && el.text) { add('nav-link', el); continue; }
  }
  const out = {};
  for (const [kind, members] of Object.entries(kinds)) {
    const counts = new Map();
    for (const m of members) { const fp = fingerprint(m); const k = fpKey(fp); (counts.get(k) ?? counts.set(k, { fp, n: 0, example: m.path }).get(k)).n++; }
    const dominant = [...counts.values()].sort((a, b) => b.n - a.n)[0];
    out[kind] = { count: members.length, distinct: counts.size, dominant: dominant.fp, example: dominant.example };
  }
  return out;
}

const COMPARE_KEYS = ['element', 'height', 'padding', 'radius', 'border', 'borderColor', 'bg', 'color', 'fontSize', 'fontWeight', 'shadow', 'indicator'];

/**
 * Compare per-route inventories. For each pattern kind present in two or more routes, report the
 * properties whose dominant value differs and which routes hold which value.
 */
export function comparePatterns(routes) {
  const drift = [];
  const kinds = new Set(routes.flatMap((r) => Object.keys(r.patterns)));
  for (const kind of kinds) {
    const holders = routes.filter((r) => r.patterns[kind]);
    if (holders.length < 2) {
      if (holders.length === 1 && routes.length > 1 && !kind.startsWith('button:') && !['dialog', 'error-message', 'tab-selected', 'tab'].includes(kind)) {
        drift.push({ kind, type: 'present-in-one-route', routes: [holders[0].route], detail: `only ${holders[0].route} has a ${kind}` });
      }
      continue;
    }
    const diffs = [];
    for (const key of COMPARE_KEYS) {
      const values = new Map();
      for (const r of holders) {
        const v = String(r.patterns[kind].dominant[key]);
        (values.get(v) ?? values.set(v, []).get(v)).push(r.route);
      }
      if (values.size > 1) diffs.push({ property: key, values: Object.fromEntries(values) });
    }
    // A small wobble in height/padding that follows content is not drift; keep numeric differences >= 2.
    const material = diffs.filter((d) => {
      if (!['height', 'padding', 'radius', 'fontSize'].includes(d.property)) return true;
      const nums = Object.keys(d.values).map((v) => v.split('/').map(Number));
      return nums.some((a, k) => nums.some((b, m) => m > k && a.some((x, p) => Math.abs(x - b[p]) >= 2)));
    });
    if (material.length) drift.push({ kind, type: 'style-drift', routes: holders.map((r) => r.route), diffs: material });
  }
  // Same visual role but different button variants set per route.
  return drift;
}
