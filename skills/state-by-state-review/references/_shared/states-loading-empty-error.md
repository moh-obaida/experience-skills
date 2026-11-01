<!-- GENERATED FROM shared/precedent/states-loading-empty-error.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Precedent: Loading, Empty, and Error States in the Wild

What real products show while loading, when there is nothing, and when something fails.
Observed 2026-09-24; IDs refer to `research/observations/`.

---

### Grafana — not-found state
`GF1 GF2 GF3` · https://play.grafana.org/ · rendered
- **What works:** mascot illustration, one-line title, one explanatory sentence, primary "Back to
  Home" and secondary "Community Help".
- **What does not:** a dark screen with no indicator for 4+ seconds before routing; the same error
  also shown as a toast.
- **Lesson:** a branded error state with a way forward; one message per event; show loading.

### Spotify — empty library states
`SPd1` · https://open.spotify.com/ · rendered
- **What works:** each empty section has one sentence and one action ("Create playlist", "Browse
  podcasts").

### Nintendo — blank first paint
`NI1` · https://www.nintendo.com/us/ · rendered
- **What happens:** white page with only a header and bottom bar for 3+ seconds.
- **Lesson:** reserve layout and show structure while loading; blank reads as broken.

### Apple — blank first paint
`AP4` · https://www.apple.com/iphone/ · rendered
- **What happens:** blank white for about three seconds before content.
- **Lesson:** even polished sites need a meaningful first paint; test on real networks.

### Linear — empty hero while rendering
`LN1` · https://linear.app/ · rendered
- **What happens:** dark empty hero for 10+ seconds in the test browser.

### TradingView — chrome before content
`TV4` · https://www.tradingview.com/chart/ · rendered
- **What happens:** toolbars rendered, chart canvas blank at five seconds.
- **Lesson:** in canvas tools, show the data-loading state inside the canvas.

### Grafana / Guardian / Bloomberg — reserved space
`GU2 BL2` · theguardian.com · bloomberg.com · rendered
- **What happens:** unfilled ad slots appear as grey empty bands.

### GOV.UK Design System — error summary
`UKE1 UKE2` · https://design-system.service.gov.uk/components/error-summary/ · documentation
- **What works:** summary at the top with "There is a problem", links to each field, focus moved
  to the summary, identical wording inline, "Error: " prefixed to the page title.
- **Lesson:** a complete, accessible error pattern is specific and testable.

### ChatGPT — the empty conversation as the start
`CG1` · https://chatgpt.com/ · rendered
- **What works:** the empty state *is* the working surface (the composer).

### GOV.UK Design System — once-only actions
`UKD4` · documentation
- **What works:** after payment or submission, back still works but shows a message instead of
  allowing a repeat.
- **Lesson:** the state after a consequential action is a designed state.

---

## Summary rules

1. First paint must show structure; blank is indistinguishable from failure.
2. Empty states: one sentence, one action, proportionate visual.
3. Errors: one message per event, with a path forward; accessible summaries for forms.
4. Design the state after consequential actions (no accidental repeats).
