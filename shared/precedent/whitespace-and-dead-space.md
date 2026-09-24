# Precedent: Intentional Space vs Dead Space

Real surfaces where large empty areas either do a job or do not. Observation IDs refer to the
evidence logs in the Experience Skills repository (`research/observations/`); all were observed on
2026-09-24.

**How to use this file.** Find the entries whose *context* matches your surface, not the ones whose
*look* matches. Before citing a precedent as justification, state which of its "Right when"
conditions your surface shares. If you share none, the precedent argues against you.

---

### ChatGPT — logged-out start screen
`CG1 CG2 CG3` · https://chatgpt.com/ · rendered
- **What works:** a centered composer under one line of text, most of the viewport empty.
- **Why:** the composer *is* the whole task; the empty area is where the conversation will appear.
  Space frames the only thing that matters and previews the product's own state.
- **Right when:** a FOCUSED surface whose single control is the product, and content will fill the
  space after the first action.
- **Does not transfer:** to operational homes, where the user returns to existing work.
- **Copying blindly fails when:** a small form is centered on a blank page that will stay blank
  (a sign-in or join page with no environment).
- **Lesson:** centered + empty is justified by what arrives next, not by looking calm.

### Claude — sign-in
`CL1 CL2` · https://claude.ai/login · rendered
- **What works:** centered sign-in panel on a warm off-white field; serif display headline.
- **Why:** identity is carried by type and palette; the task is short and routine.
- **Right when:** low identity budget, conventional task, strong typographic voice available.
- **Does not transfer:** to products without a distinctive type voice; the same layout in a neutral
  sans on white is centered-card syndrome.
- **Copying blindly fails when:** the "calm" comes only from emptiness.
- **Lesson:** a centered focused page needs *something* recognizable in what remains.

### Apple — iPhone page
`AP2 AP3` · https://www.apple.com/iphone/ · rendered + text
- **What works:** generous space around very large type and product imagery; one filled action per
  model panel.
- **Why:** the product images carry enormous visual weight; space is pacing between heavy objects.
- **Right when:** imagery is exceptional and each section has one strong focal object.
- **Does not transfer:** to tools, forms, and dashboards, where the user's object is data, not a photo.
- **Copying blindly fails when:** a tiny form or a sparse dashboard uses the same space with nothing
  heavy to pace.
- **Lesson:** whitespace here is emphasis for heavy imagery, not a style.

### Brilliant — homepage
`BR1 BR2` · https://brilliant.org/ · rendered
- **What works:** white page, serif headline, one geometric puzzle illustration.
- **Why:** the single visual is an actual lesson problem; the space makes it read like a page in a
  well-set textbook.
- **Right when:** one piece of product content can stand for the whole product.
- **Does not transfer:** when the "one visual" is decorative art rather than product content.
- **Lesson:** sparse works when the focal object is the product.

### Vercel — homepage
`VC1 VC2` · https://vercel.com/ · rendered
- **What works:** monochrome page with a large black triangle between headline and audience list.
- **Why:** the logo geometry is a strong focal mass; alignment of headline, triangle, and list across
  the width composes the space.
- **Right when:** the brand has a strong geometric mark and a restrained, technical audience.
- **Does not transfer:** without the focal mass, the same layout is empty; without precise type,
  it is generic devtool styling.
- **Lesson:** restraint needs one heavy element to organize the space.

### Webflow — homepage
`WF1` · https://webflow.com/ · rendered
- **What works:** very large left-aligned headline with open space to the right.
- **Why:** the headline's scale and left anchoring make the space asymmetric and deliberate.
- **Right when:** type is large enough to balance the empty side.
- **Copying blindly fails when:** the type is ordinary size; the space then reads as unfinished.

### Google Flights — search start
`G1 G2 G3` · https://www.google.com/travel/flights · rendered
- **What works:** a light line illustration fills the top band above a standard search form.
- **Why:** the environment gives place and mood to a utilitarian form without touching the controls.
- **Right when:** a focused search task benefits from a sense of place (travel).
- **Lesson:** space above a task can be given a job with illustration instead of left blank.

### The Guardian — first viewport after consent
`GU2` · https://www.theguardian.com/international · rendered
- **What happened:** an unfilled grey advertising slot occupied the top band before the masthead.
- **Why it matters:** reserved space that is not filled becomes dead space in the most valuable
  part of the viewport.
- **Lesson:** reserve space only for content you can guarantee, or collapse it when empty.

### Bloomberg — Markets
`BL2` · https://www.bloomberg.com/markets · rendered
- **What happened:** the same pattern: an empty ad slot above the masthead at first paint.
- **Lesson:** measure the first viewport in real conditions (ad blockers, slow ad servers, no fill).

### Linear — homepage hero
`LN1` · https://linear.app/ · rendered
- **What happened:** the hero stayed dark and empty for more than 10 seconds in the test browser.
- **Why it matters:** when the showcase depends on heavy client rendering, any delay or failure
  becomes a large dead region.
- **Lesson:** a composition must survive its own loading state; render meaningful content first.

### Nintendo — homepage first paint
`NI1` · https://www.nintendo.com/us/ · rendered
- **What happened:** blank white page with only a header and bottom bar for more than 3 seconds.
- **Lesson:** empty-while-loading is indistinguishable from broken; reserve layout and show structure.

### Hacker News — the opposite extreme
`HN1 HN2` · https://news.ycombinator.com/ · rendered
- **What works:** about 30 stories in one viewport, almost no space.
- **Why:** expert, high-frequency scanning; space would slow the task.
- **Does not transfer:** to newcomers or touch devices (targets are small).
- **Lesson:** density is also a choice that needs a reason.

---

## Summary rules drawn from these precedents

1. Space is justified by a heavy focal object, by content that will arrive, or by pacing between
   rich sections. Name which one applies.
2. A centered focused page needs an identity carrier in what remains (type, environment, geometry).
3. Unfilled reserved space and slow-loading showcases are dead space in practice; measure the real
   first paint, not the design file.
4. The same amount of space is right for a photo-led marketing page and wrong for an operational tool.
