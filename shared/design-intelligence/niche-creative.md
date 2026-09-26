# Niche Atlas: Creative Software

In creative tools the user's work is the brightest, most colorful, most important thing on screen,
and the interface must not bias perception of it (color, scale, rhythm). Tools are dense and
learned over years; shortcuts, panels, and precise numeric control matter more than onboarding
polish. Generated defaults give creative tools gradients, glowing accents, and rounded consumer
chrome that competes with the canvas. Load with `niche-atlas-index.md`; compare three systems with
`design-system-selector.md`.

## Product realities

### Design tools
- **Reality:** Designers manipulate vector objects, layouts, and components on an infinite canvas, collaborating in real time.
- **Jobs:** Draw and arrange, edit properties precisely, reuse components, inspect for handoff, comment, version.
- **Density:** Dense panels, open canvas.
- **Surfaces:** Canvas, layers panel, properties panel, toolbar, component library, comments, version history, export.
- **States:** Selected, multi-selected, detached component, conflicting edits, offline, large file performance.
- **Interaction:** Mouse, trackpad, keyboard shortcuts, pen; multiplayer cursors.
- **Trust:** High for not losing work.
- **Generated-UI failures:** Colorful chrome biasing color judgment, rounded floating panels with shadows everywhere, hidden numeric inputs.

### Video and photo editors
- **Reality:** Editors spend hours judging color and timing; UI must be neutral grey and dense; timelines are the core.
- **Jobs:** Import, cut and arrange clips, color grade, mix audio, export; retouch, adjust, batch process.
- **Density:** Dense.
- **Surfaces:** Media browser, viewer, timeline, inspector, scopes, color wheels, export queue.
- **States:** Rendering, proxy media, missing media, playback dropping frames, export failed.
- **Interaction:** Keyboard (J/K/L), mouse, control surfaces.
- **Trust:** Very high for project integrity.
- **Generated-UI failures:** Tinted UI biasing color perception, playful motion, oversized controls.

### Music software
- **Reality:** Musicians arrange tracks on a timeline and shape sound with instruments and effects modeled on hardware.
- **Jobs:** Record, arrange, edit MIDI, mix, apply effects, automate, bounce.
- **Density:** Dense.
- **Surfaces:** Arrangement, mixer, piano roll, device rack, browser, transport.
- **States:** Recording, armed, clipping, CPU overload, plugin missing, latency.
- **Interaction:** Keyboard, mouse, MIDI controllers, knobs by drag.
- **Trust:** High; latency and data loss.
- **Generated-UI failures:** Glowing neon waveforms, knobs without numeric values, animations fighting CPU.

### 3D and animation
- **Reality:** Artists work in viewports with complex parameter trees, node graphs, and timelines.
- **Jobs:** Model, rig, animate, light, simulate, render; build procedural node networks.
- **Density:** Very dense.
- **Surfaces:** Viewports, outliner, properties, node editor, timeline and graph editor, render view.
- **States:** Computing, rendering, cache invalid, heavy scene, missing textures.
- **Interaction:** Mouse, keyboard, pen, 3D navigation.
- **Trust:** High.
- **Generated-UI failures:** Consumer rounded panels, hidden numeric fields, decorative gradients in viewports.

### Authoring tools and no-code builders
- **Reality:** Non-programmers build sites, apps, courses, or books from blocks; they need power without code and previews they can trust.
- **Jobs:** Add and arrange blocks, edit content, style consistently, preview on devices, publish, roll back.
- **Density:** Medium.
- **Surfaces:** Editor canvas, block library, style settings, page list, preview, publish.
- **States:** Draft, published, unpublished changes, broken link, responsive override, publish failed.
- **Interaction:** Drag and drop, inline editing.
- **Trust:** Moderate to high; public output.
- **Generated-UI failures:** Everything a floating card, gradient publish button, templates that all look alike.

## Systems

### Neutral Canvas
**Thesis.** A design tool's chrome is a neutral, precise frame: light grey panels with exact numeric controls, and nothing colored except selection. Character: neutral, precise. Audience: interface and graphic designers. **Fit:** vector design tools, layout tools, whiteboards for designers.

**Fingerprint** `density=dense; composition=canvas-perimeter; surface=flat-bordered; type=grotesque; nav=contextual; accent=low; motion=none; imagery=user-content; radius=low; data=moderate; tone=neutral-precise`

| Layer | Decision |
|---|---|
| Composition | Canvas center; layers left; properties right organized by object (position, size, layout, fill, stroke, effects); toolbar top; contextual menus. |
| Type | Grotesk at compact sizes (Public Sans or Hanken Grotesk 11–12px), tabular numbers in fields. Arabic UI: IBM Plex Sans Arabic. |
| Color | canvas #F0F0F0 · surface #FFFFFF · ink #1A1A1A · muted #585858 · line #D6D6D6 · action #1A5FB4 · on-action #FFFFFF. Blue only for selection and primary; a dark theme is mid-grey (#2C2C2C) not black. |
| Space and shape | 28px property rows; 2–4px radius; hairline dividers. |
| Icons and imagery | 16px monochrome tool icons with tooltips and shortcuts. |
| Components | Scrubbable numeric fields, math in fields, eyedropper, component instances with override indicators. |
| States | Detached components marked; multiplayer cursors named; offline with sync queue. |
| Responsive | Desktop only for editing; tablet for review and comment. |
| Motion | None in chrome; canvas pan/zoom follows input exactly. |
| Accessibility | Keyboard for everything; high-contrast mode; screen reader for layers. |
| Build | Canvas rendered separately from UI; property panel generated from object schema. |
| AI mutation | Colorful gradient chrome, floating rounded panels with big shadows, hidden numbers. |
| Fails when | Casual users making one graphic (use Block Builder). |

### Grading Suite
**Thesis.** Editing video and photos requires a neutral grey environment and a timeline that treats time as the primary axis. Character: cinematic craft. Audience: editors, colorists, photographers. **Fit:** video editors, photo editors, color grading.

**Fingerprint** `density=dense; composition=timeline; surface=layered-panels; type=technical-sans; nav=tab-bar; accent=multi-role; motion=physical-direct; imagery=user-content; radius=square; data=strong; tone=cinematic-craft`

| Layer | Decision |
|---|---|
| Composition | Workspace tabs (Media, Edit, Color, Audio, Deliver); edit workspace: browser, viewer(s), timeline full width; inspector right. |
| Type | Technical sans (IBM Plex Sans 11–12px), timecode in mono. |
| Color | canvas #1E1E1E · surface #282828 · ink #E6E6E6 · muted #A3A3A3 · line #3A3A3A · action #D9D9D9 · on-action #1E1E1E. Neutral grey to avoid biasing color; clip types use muted role colors user-configurable. |
| Space and shape | Square panels; 24px tracks. |
| Icons and imagery | User media; scopes as data graphics. |
| Components | J/K/L playback, blade, ripple, trim modes; color wheels with numeric values; scopes. |
| States | Rendering progress per segment; offline media red with relink; dropped frames indicator. |
| Responsive | Desktop and large displays; dual monitor layouts. |
| Motion | Playhead follows time exactly; no UI animation. |
| Accessibility | Keyboard remapping; UI scaling. |
| Build | Timeline virtualization; GPU viewer. |
| AI mutation | Tinted purple UI, rounded cards, playful animation. |
| Fails when | Quick social edits (simpler templated tools). |

### Rack and Patch
**Thesis.** Music software borrows the studio: devices in a rack with tactile knobs that always show values, a mixer with honest meters, and color coding by track role. Character: tactile, studio-like. Audience: musicians and producers. **Fit:** DAWs, instruments and effects plugins, modular synth software.

**Fingerprint** `density=dense; composition=spatial-scene; surface=material-texture; type=condensed-display; nav=rail; accent=multi-role; motion=physical-direct; imagery=diagram; radius=semantic-mixed; data=strong; tone=tactile-studio`

| Layer | Decision |
|---|---|
| Composition | Arrangement timeline with track headers; bottom panel toggles device rack, mixer, piano roll; rail with browser. |
| Type | Condensed sans for labels on devices (Barlow Semi Condensed 11px), values tabular. |
| Color | canvas #1A1B1D · surface #242629 · ink #ECEBE6 · muted #A5A39B · line #36393D · action #E0A43B · on-action #1A1B1D. Track colors user-assigned; meters green-amber-red with numeric peak. |
| Space and shape | Knobs round, buttons small-radius, panels square: radius encodes control type. Subtle brushed texture on device faces only. |
| Icons and imagery | Device diagrams (signal flow) where helpful. |
| Components | Knobs with drag, fine-drag modifier, double-click reset, numeric entry; automation lanes. |
| States | Recording armed; clipping; CPU overload with which device; missing plugin placeholder. |
| Responsive | Desktop; tablet control surfaces. |
| Motion | Meters real-time; knob follows drag. Reduced motion: meters still (they are data). |
| Accessibility | Values accessible; keyboard knob control. |
| Build | Audio thread isolated from UI; UI updates throttled. |
| AI mutation | Glowing neon waveforms, knobs without values. |
| Fails when | Podcasts or simple audio edits. |

### Sketchbook
**Thesis.** Drawing apps disappear: the canvas fills the screen, tools float lightly at the edge, and color comes only from the artist. Character: quiet, immersive. Audience: illustrators on tablets. **Fit:** drawing and painting apps, note-sketching, tablet art tools.

**Fingerprint** `density=sparse; composition=canvas-perimeter; surface=translucent-overlay; type=humanist-sans; nav=hud; accent=none; motion=physical-direct; imagery=user-content; radius=high; data=none; tone=quiet-immersive`

| Layer | Decision |
|---|---|
| Composition | Full canvas; floating brush palette and color puck at edges, hideable with a gesture; layers in a sheet. |
| Type | Humanist sans (Figtree 13px) used sparingly. |
| Color | canvas #E9E7E2 · surface #F7F6F3 · ink #1D1C1A · muted #595752 · line #CFCBC3 · action #2D2C29 · on-action #F7F6F3. Floating palettes at 85% opacity with blur so artwork stays visible. |
| Space and shape | 16px radius floating palettes; 44px tool targets. |
| Icons and imagery | Brush previews; the artwork. |
| Components | Brush size and opacity sliders along the edge, color picker with history, undo by two-finger tap. |
| States | Autosave; large canvas performance warning; export progress. |
| Responsive | Tablet first; desktop with pen tablet. |
| Motion | Tools slide in and out (150ms). Reduced motion: fade. |
| Accessibility | Gesture alternatives in menus. |
| Build | Pen pressure and latency first. |
| AI mutation | Colorful gradient UI, rounded cards for tools. |
| Fails when | Precise vector layout. |

### Node Loom
**Thesis.** Procedural and 3D work is reasoning about networks: viewport beside a node graph where data flow is explicit and every parameter is numeric. Character: technical, exploratory. Audience: 3D artists, technical artists. **Fit:** 3D tools, node-based compositing, procedural generation.

**Fingerprint** `density=dense; composition=split-pane; surface=layered-panels; type=technical-sans; nav=command-palette; accent=multi-role; motion=restrained-causal; imagery=diagram; radius=medium; data=strong; tone=technical-exploratory`

| Layer | Decision |
|---|---|
| Composition | Viewport and node editor split; properties panel for selected node; outliner and timeline as tabs. |
| Type | Technical sans (IBM Plex Sans 12px), values tabular. |
| Color | canvas #202326 · surface #2A2E32 · ink #E8EAEC · muted #A2A8AE · line #3A3F45 · action #7CB7E8 · on-action #202326. Socket types color-coded (geometry, float, vector, color) with shapes. |
| Space and shape | Nodes 6px radius; wires 2px bezier; panels layered. |
| Icons and imagery | Node graph diagram; viewport renders. |
| Components | Search to add node, frame groups, reroute, parameter drag with modifiers. |
| States | Cache invalid; computing with progress; error node red with message. |
| Responsive | Desktop. |
| Motion | Wire drag follows cursor; recompute progress. Reduced motion: none decorative. |
| Accessibility | Keyboard node add; zoom UI scale. |
| Build | Graph as data; evaluation separate from UI. |
| AI mutation | Glowing particles on wires, rounded consumer panels. |
| Fails when | Beginners doing simple tasks. |

### Block Builder
**Thesis.** No-code builders let people build by arranging blocks on a live page with sensible defaults, while keeping styles consistent through a small set of site-wide choices. Character: approachable, capable. Audience: small businesses and creators building sites and apps. **Fit:** website builders, no-code app builders, landing page tools.

**Fingerprint** `density=medium; composition=canvas-perimeter; surface=elevated-cards; type=humanist-sans; nav=persistent-sidebar; accent=medium; motion=physical-direct; imagery=user-content; radius=medium; data=light; tone=approachable-capable`

| Layer | Decision |
|---|---|
| Composition | Left sidebar: pages, blocks, site styles; live page canvas; contextual toolbar on selected block; device preview toggle. |
| Type | Humanist sans for UI (Figtree 13–14px); the user's site uses its own fonts. |
| Color | canvas #EDEEF0 · surface #FFFFFF · ink #17191C · muted #535862 · line #D2D5DA · action #1C5D99 · on-action #FFFFFF. |
| Space and shape | Block library items as elevated cards (they are draggable objects); 8px radius. |
| Icons and imagery | Block thumbnails; user media. |
| Components | Drag blocks, inline text edit, global styles (type, colors, spacing) rather than per-block styling. |
| States | Unpublished changes count; responsive override indicators; publish failed with reason; version restore. |
| Responsive | Desktop editing; phone for content edits. |
| Motion | Blocks show drop position while dragging. Reduced motion: static indicator. |
| Accessibility | Builder output accessible by default (alt text prompts, heading order checks). |
| Build | Style tokens site-wide; per-block overrides limited. |
| AI mutation | Every template the same gradient hero; gradient publish button. |
| Fails when | Professional designers (use Neutral Canvas). |

### Storyboard Wall
**Thesis.** Animation and video planning is a wall of panels: shots in sequence with notes and timing, playable as an animatic. Character: narrative, sketchy. Audience: animators, directors, content teams. **Fit:** storyboarding, animatics, shot planning.

**Fingerprint** `density=medium; composition=board; surface=paper-sheet; type=handmade-display; nav=top-bar; accent=low; motion=choreographed; imagery=illustration; radius=square; data=light; tone=narrative-sketchy`

| Layer | Decision |
|---|---|
| Composition | Board of panels in sequence rows by scene; each panel with sketch, dialogue, action, duration; play as animatic. |
| Type | Hand-lettered display for scene titles (Caveat or Patrick Hand), sans for notes (Source Sans 3). |
| Color | canvas #F1EEE7 · surface #FFFFFF · ink #1E1D1A · muted #5A5751 · line #D6D0C4 · action #2F4C6E · on-action #FFFFFF. |
| Space and shape | Square panels with paper look; 16px gaps. |
| Icons and imagery | Sketches. |
| Components | Reorder panels, duration handles, export PDF, animatic playback. |
| States | Changed panels marked since last review. |
| Responsive | Desktop and tablet (drawing). |
| Motion | Animatic playback choreographed; UI otherwise static. |
| Accessibility | Panel notes as text. |
| Build | Panel order as data. |
| AI mutation | Glossy cards, gradients. |
| Fails when | Final editing (Grading Suite). |

### Author's Desk
**Thesis.** Authoring long structured content (courses, books, interactive fiction) needs an outline beside the text and structure that stays visible. Character: structured, literary. Audience: authors, instructional designers. **Fit:** book authoring, course authoring, interactive fiction tools.

**Fingerprint** `density=medium; composition=document; surface=flat-ruled; type=serif-sans-duet; nav=persistent-sidebar; accent=low; motion=none; imagery=none; radius=low; data=light; tone=structured-literary`

| Layer | Decision |
|---|---|
| Composition | Outline sidebar (parts, chapters, sections) with drag reorder; editor center; metadata and status panel right. |
| Type | Serif for manuscript (Literata 18px), sans for UI (Source Sans 3). Arabic: Amiri manuscript. |
| Color | canvas #F7F6F2 · surface #FFFFFF · ink #1D1C19 · muted #58564F · line #DAD7CE · action #3A4F6E · on-action #FFFFFF. |
| Space and shape | Ruled sections; 4px radius. |
| Icons and imagery | None. |
| Components | Status per section (draft, review, final), word targets, export formats. |
| States | Broken cross-references; unsaved; review comments open. |
| Responsive | Desktop; tablet writing. |
| Motion | None. |
| Accessibility | Heading structure enforced. |
| Build | Structured document model. |
| AI mutation | Card-based chapters, gradient headers. |
| Fails when | Visual design work. |

### Asset Library
**Thesis.** Creative teams need a library that organizes thousands of assets by project and rights, with fast previews and exact metadata. Character: organized, neutral. Audience: creative teams, brand managers. **Fit:** digital asset management, brand libraries, media libraries.

**Fingerprint** `density=dense; composition=catalog-grid; surface=tonal-blocks; type=humanist-sans; nav=persistent-sidebar; accent=low; motion=none; imagery=user-content; radius=low; data=moderate; tone=organized-neutral`

| Layer | Decision |
|---|---|
| Composition | Sidebar: collections, projects, saved searches; grid of assets with type, size, rights status; detail panel with metadata, versions, usage rights. |
| Type | Humanist sans (Source Sans 3 13–14px). |
| Color | canvas #EEEEEC · surface #FFFFFF · ink #181816 · muted #545450 · line #D1D1CC · action #245B7A · on-action #FFFFFF. Rights status labels (cleared, restricted, expired). |
| Space and shape | Tonal grouping; 4px radius thumbnails. |
| Icons and imagery | Asset previews. |
| Components | Bulk tag, share link with expiry, download formats, version compare. |
| States | Rights expired; processing previews; duplicate detected. |
| Responsive | Desktop; phone share and preview. |
| Motion | None. |
| Accessibility | Alt text fields; keyboard grid. |
| Build | Metadata schema; rights enforcement. |
| AI mutation | Masonry with hover zoom and gradients. |
| Fails when | Creating assets. |

### Review Room
**Thesis.** Creative feedback happens on the work: the asset large, comments pinned to exact frames or regions, and a decision (approve, request changes) that is explicit. Character: collaborative, critical. Audience: creative teams and clients reviewing work. **Fit:** creative review and approval, video review, design review.

**Fingerprint** `density=medium; composition=stage; surface=layered-panels; type=grotesque; nav=rail; accent=multi-role; motion=restrained-causal; imagery=user-content; radius=medium; data=light; tone=collaborative-critical`

| Layer | Decision |
|---|---|
| Composition | Asset large on stage; comment list right tied to pins or timecodes; version switcher top; decision buttons. |
| Type | Grotesk (Hanken Grotesk 14px). |
| Color | canvas #2A2B2D · surface #333538 · ink #EDEDEE · muted #A8A9AD · line #45474B · action #F0F0F0 · on-action #2A2B2D. Reviewer colors for pins with names. |
| Space and shape | 8px radius panels; pins 24px. |
| Icons and imagery | The work under review. |
| Components | Pin comment, draw annotation, compare versions side by side, approve or request changes. |
| States | Resolved comments; new version uploaded; approval recorded with name and time. |
| Responsive | Desktop; tablet review; phone comment reading. |
| Motion | Jump to timecode. Reduced motion: none. |
| Accessibility | Comments list navigable; pins linked. |
| Build | Comments anchored to version and position. |
| AI mutation | Colorful chrome, emoji reactions replacing decisions. |
| Fails when | Creation. |

## Confusable pairs

- **Neutral Canvas vs Block Builder:** both canvases with panels. Neutral Canvas serves professional precision; Block Builder serves non-designers with guarded defaults.
- **Grading Suite vs Review Room:** both around media. The Suite edits; the Room decides.
- **Sketchbook vs Storyboard Wall:** both drawing. The Sketchbook is one immersive canvas; the Wall sequences many panels.
