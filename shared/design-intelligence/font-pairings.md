# System-Font Pairing Library

These are pairing mechanics using OS-provided/generic stacks; no font files are redistributed and no third-party license is asserted. The actual face varies by platform, so inspect Windows, macOS, Android, and the target script before shipping. Replace a system stack with an open-licensed bundled face only after checking its license and glyph coverage. The pairing is a role decision, not a brand identity by itself.

| Pairing | CSS role example | Why it works | Watch for |
|---|---|---|---|
| System sans solo | heading/body `system-ui, sans-serif` | Hierarchy from weight and measure; low loading cost | Generic result if composition and content lack character |
| Serif reading + sans controls | content `ui-serif, Georgia, serif`; UI `system-ui, sans-serif` | Stroke contrast marks reading vs operation | Mismatched perceived size; serif forms too small |
| Sans reading + mono data | UI `system-ui, sans-serif`; data `ui-monospace, monospace` | Proportional text scans; tabular IDs align | Mono everywhere makes prose slow |
| Serif heading + sans body | heading `ui-serif, Georgia, serif`; body `system-ui, sans-serif` | Editorial focal point with fast UI text | Display dominance pushes task down |
| Sans heading + serif body | heading `system-ui, sans-serif`; body `ui-serif, Georgia, serif` | Direct navigation around comfortable long reading | Dense tables should not inherit serif |
| Serif reading + mono citations | body `ui-serif, Georgia, serif`; citations `ui-monospace, monospace` | Provenance clearly differs from interpretation | Citations wrap poorly on phone |
| Condensed system heading + plain body | heading `Arial Narrow, Arial, sans-serif`; body `system-ui, sans-serif` | Wide labels fit at display sizes | `Arial Narrow` absent on many devices; fallback changes width |
| Humanist system approximation | body `Trebuchet MS, system-ui, sans-serif`; labels `system-ui, sans-serif` | More open text without decorative controls | OS coverage and x-height mismatch |
| High-legibility UI | body/labels `Verdana, system-ui, sans-serif`; data `ui-monospace, monospace` | Wide forms remain distinct at small sizes | Extra width pressures narrow tables |
| Formal record | short heading `Georgia, ui-serif, serif`; body `Arial, system-ui, sans-serif` | Textual authority with plain operations | Can feel generic if records lack hierarchy |
| Technical instrument | labels `Arial, system-ui, sans-serif`; data `Consolas, ui-monospace, monospace` | Strong control/data split, clear codes | Consolas availability varies; test 0/O and Arabic labels |
| Single variable family | heading/body/labels one licensed variable family; code system mono | Optical sizes and widths can form hierarchy coherently | If axes fail to load, fallback and synthetic weights shift layout |

## Pairing checks

1. Render the same heading, body paragraph, button, table row, currency, code sample, and long translated label in both families.
2. Compare cap/x-height and apparent weight at the actual CSS size, not in a font specimen.
3. Inspect numeral alignment and ambiguous glyphs. Use `font-variant-numeric: tabular-nums` where supported for data.
4. For Arabic/Latin, choose a tested Arabic companion and compare baseline, line-height, density, diacritics, and numeral policy. Do not add letter spacing to Arabic.
5. Check loading shifts and fallback metrics before choosing a bundled font. If the fallback materially changes wrapping, adjust layout rather than fixing text to one font's width.
