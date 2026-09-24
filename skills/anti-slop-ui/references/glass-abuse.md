# Glass Abuse

## Recognize it
Translucent panels with `backdrop-filter: blur()`, thin white borders, and soft shadows, placed over
a flat gradient or blobs. Nothing meaningful is behind the glass.

## When glass has a job
Frosted surfaces are honest when real, changing content lies beneath and the layer relationship
matters: a toolbar over a scrolling canvas, a sheet over a map or video, a menu over a photo.

## Why abuse hurts
- No real layering is communicated.
- Contrast is unpredictable and often fails.
- `backdrop-filter` over large areas is expensive, especially on mobile.
- It is one of the most recognizable AI-template signatures.

## Repair
- Use solid surfaces with clear value contrast against the canvas.
- Keep blur only for overlays over real content, and test contrast and performance.
- Respect `prefers-reduced-transparency` where supported.
