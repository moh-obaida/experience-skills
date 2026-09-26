# Niche Atlas: Games

Game interfaces serve play, identity, and social ritual. They are not SaaS dashboards with a neon
gradient. The world is allowed to be expressive; the controls that get players into matches,
configure loadouts, and recover from disconnects must be fast and unambiguous under pressure and
from a couch, a phone, or a controller. Load with `niche-atlas-index.md`; compare three systems
with `design-system-selector.md`.

## Product realities

### Competitive and online multiplayer
- **Reality:** Players move through a loop: lobby, party, matchmaking queue, loading, match, post-match, progression, repeat. Minutes matter; so do identity and status.
- **Jobs:** Join friends, pick a mode, queue, change loadout, read match results, claim rewards, report a player, reconnect.
- **Density:** Dense in loadouts and results, sparse in queue and loading.
- **Surfaces:** Main menu, party lobby, mode select, queue, loading, HUD, scoreboard, post-match, loadout and inventory, store, battle pass or season, profile, settings, social panel.
- **States:** Queue time and estimate, match found (accept timer), reconnecting, server degraded, party member not ready, banned or restricted, seasonal reset, currency pending.
- **Interaction:** Controller, mouse and keyboard, touch parity; focus navigation; muscle memory; real time.
- **Trust:** Moderate; purchases and fairness (ranked) carry weight.
- **Generated-UI failures:** SaaS dashboard with neon gradient; mouse-only hover menus; scoreboard as cards; queue with no time estimate; currencies hidden in fine print.

### Casual, party, and social games
- **Reality:** Short sessions, mixed skill, often shared screens or phones; joining must be instant.
- **Jobs:** Join with a code, pick a name or avatar, understand the rules fast, play, laugh, replay.
- **Density:** Sparse.
- **Surfaces:** Join screen, lobby, rules, round, results, replay.
- **States:** Waiting for players, host left, late join, kicked, round timer.
- **Interaction:** Touch, big targets, TV plus phones.
- **Trust:** Low, except for children's safety and chat.
- **Generated-UI failures:** Segmented code inputs with glow, tiny text on TV, glass cards over nothing.

### Strategy and simulation
- **Reality:** Players plan across many systems; information density is the fun; turns or ticks give time to think.
- **Jobs:** Read the state of the world, compare options, issue orders, understand consequences, review history.
- **Density:** Dense.
- **Surfaces:** Map, city or unit panels, tech tree, economy ledgers, diplomacy, event log, turn summary.
- **States:** Turn pending, orders queued, alerts, fog of war, paused, autosave.
- **Interaction:** Mouse and keyboard with hotkeys; tooltips with nested explanations.
- **Trust:** Low; comprehension is the risk.
- **Generated-UI failures:** Hiding numbers for minimalism, modal walls of text, uniform icons without legends.

### RPG and sandbox
- **Reality:** Menus are part of the fiction: inventory, journal, map, character sheet. Players spend long periods managing items and reading lore.
- **Jobs:** Equip, compare items, track quests, read lore, craft, manage storage.
- **Density:** Medium to dense.
- **Surfaces:** Inventory, equipment, character, quest journal, crafting, map, dialogue, save/load.
- **States:** Overweight, locked item, quest updated, new item, save corrupted.
- **Interaction:** Controller-first in many cases; compare on hover or focus.
- **Trust:** Low; save integrity matters.
- **Generated-UI failures:** Flat web UI unrelated to the world; comparison hidden; new-item badges everywhere.

### Browser games
- **Reality:** Instant play in a tab, frequently on phones; first seconds decide retention.
- **Jobs:** Start playing immediately, understand controls, share a score, return.
- **Density:** Sparse.
- **Surfaces:** Title, play field, pause, game over, leaderboard, share.
- **States:** Loading assets, paused on blur, offline, audio blocked until interaction.
- **Interaction:** Keyboard or touch; orientation changes.
- **Trust:** Low.
- **Generated-UI failures:** A landing page before the game, modal sign-up walls, SaaS navigation.

### Educational games
- **Reality:** Play carries a learning objective; teachers and parents are secondary audiences.
- **Jobs:** Play a level, learn from feedback, see progress, let a teacher assign.
- **Density:** Sparse to medium.
- **Surfaces:** World map or level select, level, feedback, progress, teacher dashboard.
- **States:** Mastered, struggling, assigned, locked.
- **Interaction:** Touch, drag, short sessions.
- **Trust:** High for children's safety and privacy.
- **Generated-UI failures:** Candy colors unrelated to the subject, rewards dominating learning, dark patterns for engagement.

### Launchers and companion apps
- **Reality:** Players manage libraries, updates, friends, and in-game data outside the game.
- **Jobs:** Launch, update, find a game, see friends online, check stats and builds, get news.
- **Density:** Medium to dense.
- **Surfaces:** Library, game page, downloads, friends, news, stats, builds, maps.
- **States:** Updating, queued download, verifying files, offline mode, server status.
- **Interaction:** Mouse, controller (big-picture modes), phone.
- **Trust:** Moderate; purchases and account security.
- **Generated-UI failures:** Web-store templates, empty artwork frames, stats buried under promotions.

## Systems

### Broadcast HUD
**Thesis.** The competitive loop is a broadcast: bold condensed type, team colors as roles, and every screen timed like a live show where state is always legible at a glance. Character: intense, precise. Audience: competitive players. **Fit:** competitive multiplayer menus, lobbies, queues, post-match, ranked progression.

**Fingerprint** `density=dense; composition=stage; surface=full-bleed; type=condensed-display; nav=hud; accent=multi-role; motion=choreographed; imagery=artwork; radius=square; data=moderate; tone=intense`

| Layer | Decision |
|---|---|
| Composition | Full-bleed key art or live 3D scene; HUD-style edges: party top-left, currencies top-right, mode and Play bottom-right, social panel right. Post-match: result banner, personal performance row, team scoreboard table, progression bars. |
| Type | Condensed display for states and numbers (Barlow Condensed 700 or Saira Condensed; fallback `Arial Narrow, sans-serif`), clean sans for body (Barlow 16px). Scales for 10-foot UI: body ≥ 24px at 1080p TV. Arabic: Cairo or Changa for display, Noto Sans Arabic body. |
| Color | canvas #0E1116 · surface #161B22 · ink #F2F4F7 · muted #A1A9B5 · line #2A313B · action #F2C14E · on-action #0E1116. Team roles blue #4EA3F2 and orange #F28C4E, each paired with a shape (chevron, diamond); rank tiers named, not only colored. |
| Space and shape | 8px base; square panels with 2px accent edges; Play button 64px tall; safe-area margins 5% for TV. |
| Icons and imagery | Key art, character renders, mode art; icons as solid glyphs readable at 24px. |
| Components | Focusable grid navigation with visible focus frame; Ready/Play states with countdown; loadout slots with compare. Primary action: Play (or Accept when a match is found). |
| States | Queue shows elapsed and estimated time with cancel; match found accept timer with sound and vibration; reconnecting overlay with countdown and "Rejoin"; degraded server banner. |
| Responsive | TV/PC 16:9 first; ultrawide keeps HUD within 16:9 safe area; mobile landscape uses thumb zones and larger targets. |
| Motion | Choreographed transitions between loop stages (300–500ms), result reveal sequence, rank-up celebration once; menus respond within 100ms. Reduced motion: cuts. |
| Accessibility | Colorblind team presets, text size, subtitles, controller remapping, focus order sane with D-pad. |
| Build | UI state machine mirrors the loop (lobby, queue, found, loading, match, post); `--focus-frame:3px solid var(--action)`. |
| AI mutation | SaaS sidebar with neon gradient, cards for scoreboard, hover-only menus, glass everywhere. |
| Fails when | Casual or cozy games; players new to the genre who need gentle onboarding. |

### Toybox Table
**Thesis.** Party games are a toy on a table: chunky outlined shapes, bright roles, and giant targets anyone can grab. Character: playful, loud, welcoming. Audience: groups, families, casual players. **Fit:** party games, casual multiplayer, join-by-code games, TV plus phone games.

**Fingerprint** `density=sparse; composition=stage; surface=heavy-outline; type=rounded-sans; nav=hub-and-spoke; accent=high; motion=event-celebration; imagery=illustration; radius=high; data=none; tone=playful`

| Layer | Decision |
|---|---|
| Composition | Big stage showing the room code and players on the TV; phones show only the player's current choice. Rules as three illustrated steps. |
| Type | Rounded heavy sans (Fredoka or Baloo 2), 48–96px on TV, 20px body on phones. Arabic: Baloo Bhaijaan 2. |
| Color | canvas #FFF4DC · surface #FFFFFF · ink #231A12 · muted #5E4E3E · line #231A12 · action #C2410C · on-action #FFFFFF. Player colors are six saturated roles with names and patterns. |
| Space and shape | 3px ink outlines, 20px radii, offset solid shadows (4px, ink) for pressable things only; targets ≥ 56px. |
| Icons and imagery | Illustrated characters and props from the game's world. |
| Components | Standard input for the join code (large, numeric keyboard); Ready button; host controls separated. |
| States | Waiting for players shows who is missing; host left promotes a new host; late joiners spectate. |
| Responsive | TV 16:9 stage; phones portrait controllers; tablet can be both. |
| Motion | Bouncy entrances for players joining (spring), celebration on round win; controls themselves do not bounce. Reduced motion: fades. |
| Accessibility | Big text, colorblind-safe player roles with patterns, audio cues with captions. |
| Build | `--outline:3px solid var(--ink); --press-shadow:4px 4px 0 var(--ink)`. Test the join flow on a slow phone. |
| AI mutation | Glass cards, gradient code boxes with glowing segments, dark SaaS UI. |
| Fails when | Competitive or serious games; long-session management menus. |

### War Room Map
**Thesis.** In strategy games, information is the pleasure: the map is the table, and panels are ledgers of exact numbers with explanations one layer deep. Character: deliberate, commanding. Audience: strategy and simulation players. **Fit:** 4X, grand strategy, city builders, management sims.

**Fingerprint** `density=dense; composition=map-led; surface=material-texture; type=serif-sans-duet; nav=spatial; accent=multi-role; motion=restrained-causal; imagery=cartography; radius=low; data=strong; tone=deliberate`

| Layer | Decision |
|---|---|
| Composition | Map fills the screen; resource bar top; selected entity panel bottom-left; alerts/right-side event stack; ledgers and trees as full-screen overlays. |
| Type | Classical serif for headings and names (Cormorant SC or EB Garamond), compact sans for numbers and tooltips (Source Sans 3 with tabular figures). Arabic: Amiri headings, Noto Sans Arabic data. |
| Color | canvas #E9E2D0 · surface #F5F0E3 · ink #231F17 · muted #5A5140 · line #BFB39A · action #5B2A1A · on-action #FFFFFF. Faction colors with emblem shapes; map overlays (supply, loyalty) use sequential scales with legends. |
| Space and shape | Panels with 2px radius and engraved-rule borders; dense 28px rows in ledgers. |
| Icons and imagery | The map and its cartographic symbols; resource icons with labels on hover and in a legend. |
| Components | Nested tooltips (hover a term to explain it); turn summary listing consequences; order queue editable. Primary action: End turn with warnings of idle units. |
| States | Unassigned units, starving cities, and threats listed before End turn; fog of war clear; autosave notice. |
| Responsive | Desktop first; UI scale setting 80–150%; handheld PCs need larger panels. |
| Motion | Units move with causal paths; numbers change with brief highlight; no ambient UI motion. Reduced motion: instant with highlight. |
| Accessibility | UI scale, colorblind map modes, full hotkey remapping, tooltips reachable via keyboard. |
| Build | Tooltip system with term registry; ledger tables sortable. |
| AI mutation | Minimalist hiding of numbers, neon sci-fi HUD in a historical setting, generic icon grids. |
| Fails when | Action games; casual audiences. |

### Codex Journal
**Thesis.** RPG menus are artifacts of the world: the inventory is a satchel, the journal a book, the character a sheet, all readable at a glance. Character: immersive, lore-rich. Audience: RPG and sandbox players. **Fit:** RPG inventories, quest journals, crafting, sandbox management menus.

**Fingerprint** `density=medium; composition=object-sheet; surface=material-texture; type=editorial-serif; nav=tab-bar; accent=low; motion=ambient-world; imagery=artwork; radius=semantic-mixed; data=moderate; tone=immersive-lore`

| Layer | Decision |
|---|---|
| Composition | Tabs across the top (Gear, Journal, Map, Craft); Gear shows character figure with slots, inventory grid, and a compare panel that appears on focus. Journal is a two-page spread. |
| Type | Book serif for names and lore (Alegreya or Spectral), sans for stats (Alegreya Sans). Arabic: Aref Ruqaa for decorative titles only, Noto Naskh Arabic for text. |
| Color | canvas #1C1814 · surface #26201A · ink #EDE3D1 · muted #A89A84 · line #3A3128 · action #C99A4B · on-action #1C1814. Rarity tiers named and shaped (border style), not color alone. |
| Space and shape | Item slots square with worn edges (texture), panels 6px radius, journal pages square: radius tells object type. |
| Icons and imagery | Painted item icons, parchment and leather textures at low contrast behind text. |
| Components | Compare shows deltas (+12 armor) with arrows and color; sort and filter inventory; mark junk. |
| States | New items marked once, then cleared; overweight shown in the header with consequence; locked recipes explain requirements. |
| Responsive | TV/PC; handheld needs 1.3x scale; controller focus is primary. |
| Motion | Ambient: candle flicker or page turn when opening the journal (under 400ms); focus moves instantly. Reduced motion: no ambient. |
| Accessibility | Text scale, texture opacity slider, deltas in text. |
| Build | Texture as low-opacity background images under solid text surfaces; never text directly on high-contrast texture. |
| AI mutation | Flat web inventory, new-badges everywhere, hidden compare. |
| Fails when | Competitive shooters or casual games where speed matters more than immersion. |

### Pixel Cabinet
**Thesis.** A browser game should start playing in the first second like an arcade cabinet: title, controls, and play in one screen, with pixel-honest type. Character: cheeky, immediate. Audience: casual players in a tab. **Fit:** browser games, game jams, retro arcade games.

**Fingerprint** `density=sparse; composition=poster; surface=heavy-outline; type=pixel-bitmap; nav=in-content; accent=high; motion=event-celebration; imagery=artwork; radius=square; data=light; tone=cheeky`

| Layer | Decision |
|---|---|
| Composition | The play field is the page; title and "Press Space / Tap to start" over it; controls legend at the bottom; score and share after game over. |
| Type | Pixel font for titles and scores (Pixelify Sans or Silkscreen), readable sans for instructions (Rubik 16px) because pixel fonts fail at body sizes. |
| Color | canvas #0B1F1E · surface #12302E · ink #F4F1DE · muted #A9C2BB · line #F4F1DE · action #F2A541 · on-action #0B1F1E. |
| Space and shape | Integer scaling of pixel art; 2px outlines; square buttons. |
| Icons and imagery | The game's own sprites. |
| Components | Pause on blur, mute toggle, share score, leaderboard optional. |
| States | Audio blocked until first interaction explained by an icon; offline play; loading bar for assets over 1s. |
| Responsive | Canvas scales by integer factors; touch controls appear on touch devices; rotate prompt only when essential. |
| Motion | Screen shake and flashes limited and optional; game over sequence under 1s. Reduced motion: no shake, no flashes. |
| Accessibility | Photosensitivity: no flashes over 3 per second; remappable keys. |
| Build | `image-rendering: pixelated`; request animation frame with pause on visibility change. |
| AI mutation | Landing page before the game, sign-up modal, SaaS nav bar. |
| Fails when | Games needing long menus or account systems. |

### Library Shelf
**Thesis.** A launcher is a collection: games as cover art on a dark, calm shelf, with state (installed, updating, playing) always exact. Character: collected, calm. Audience: players managing libraries. **Fit:** game launchers, libraries, store library views.

**Fingerprint** `density=medium; composition=catalog-grid; surface=layered-panels; type=grotesque; nav=persistent-sidebar; accent=low; motion=restrained-causal; imagery=artwork; radius=low; data=moderate; tone=collected`

| Layer | Decision |
|---|---|
| Composition | Sidebar with library filters and friends; main grid of cover art (2:3) with install state; game page with hero art, Play button, and update/news beneath. |
| Type | Grotesk (Hanken Grotesk or Manrope 14–15px); game titles use their own logos on game pages only. |
| Color | canvas #121315 · surface #1B1D20 · ink #ECEDEE · muted #9EA2A8 · line #2C2F33 · action #8FC1B5 · on-action #121315. |
| Space and shape | 16px grid gaps; 4px radius covers; panels layered by tone. |
| Icons and imagery | Official cover art and screenshots; missing art shows title on a neutral tile, never a broken frame. |
| Components | Play/Install/Update as one state-aware button; download queue with pause and bandwidth. |
| States | Updating with size and time; verifying files; offline mode label; server status per game. |
| Responsive | Desktop; big-picture mode for controllers with larger tiles and focus navigation; phone remote install. |
| Motion | Cover hover lifts 2px; download progress smooth. Reduced motion: none. |
| Accessibility | Controller focus visible; state in text. |
| Build | Single source of truth for install state; `--cover-ratio:2/3`. |
| AI mutation | Promotional carousels dominating library, gradient cards, empty artwork frames. |
| Fails when | Single-game products; stores selling to new players (needs merchandising). |

### Squad Room
**Thesis.** Social play starts in a room with your friends visible and ready states obvious, layered over the live game world. Character: sociable, lively. Audience: players partying up. **Fit:** party systems, friends lists, social hubs, voice chat overlays.

**Fingerprint** `density=medium; composition=hub; surface=translucent-overlay; type=humanist-sans; nav=tab-bar; accent=medium; motion=physical-direct; imagery=user-content; radius=medium; data=light; tone=sociable`

| Layer | Decision |
|---|---|
| Composition | Party members as player cards across the center-bottom over the live scene (characters in the world); tabs: Party, Friends, Invites, Recent; voice indicators on each member. |
| Type | Humanist sans (Nunito Sans or Figtree 16px), names 18px semibold. Arabic: Noto Sans Arabic; names render in their own script. |
| Color | canvas #10141A · surface #1A2029 · ink #F0F3F6 · muted #A3ADBA · line #2B3440 · action #FF7A59 · on-action #10141A. Overlay panels at 85% surface with blur so the world stays visible. |
| Space and shape | 10px radius cards, 12px gaps, focus frames 3px. |
| Icons and imagery | Avatars, banners, and characters chosen by players. |
| Components | Invite, join, kick (host), mute, report; ready toggle. |
| States | Invite pending, member loading, member in another mode, cross-platform label, blocked user hidden. |
| Responsive | Controller focus on TV; PC mouse; mobile bottom sheet. |
| Motion | Member joins with a slide-up (200ms); speaking indicator pulses with voice level. Reduced motion: static speaking icon. |
| Accessibility | Speaking indicators have text in screen-reader mode; captioned voice when available. |
| Build | Blur only over live 3D scenes; solid fallback on low-end devices. |
| AI mutation | Glass over a flat background, gradient avatars, dashboard-style friend stats. |
| Fails when | Single-player games; web communities (use social niche). |

### Companion Scout
**Thesis.** Companion apps are field references: dense, fast, glanceable data about builds, maps, and stats, usable one-handed next to a running game. Character: analytical, efficient. Audience: engaged players on phones and second screens. **Fit:** companion apps, stat trackers, build planners, wiki-style references.

**Fingerprint** `density=dense; composition=index; surface=flat-bordered; type=technical-sans; nav=tab-bar; accent=multi-role; motion=none; imagery=data-graphic; radius=low; data=strong; tone=analytical`

| Layer | Decision |
|---|---|
| Composition | Bottom tabs (Stats, Builds, Map, News); searchable indexes of items, heroes, or weapons with sortable columns; detail pages with stat tables. |
| Type | Technical sans with tabular figures (Rubik or IBM Plex Sans 14px). |
| Color | canvas #F3F4F6 · surface #FFFFFF · ink #14171C · muted #515865 · line #CDD2DA · action #0D5C63 · on-action #FFFFFF. Game roles (classes, elements) mapped to named colors with icons. |
| Space and shape | 44px rows, 4px radius, bordered tables. |
| Icons and imagery | Official item icons, charts of win rates and trends. |
| Components | Search with filters, compare two items, save builds, share links. |
| States | Patch version on every stat; stale data after patch flagged; offline cached. |
| Responsive | Phone first; tablet two columns; desktop full tables. |
| Motion | None. |
| Accessibility | Tables with headers; dark mode for night play. |
| Build | Data versioned by patch; `--row-h:44px`. |
| AI mutation | Neon gaming aesthetic on a reference tool, card grids for tabular data. |
| Fails when | In-game UI; casual players who never look up stats. |

### Field Notebook
**Thesis.** Educational games work when curiosity leads: a hand-drawn world to explore where each discovery is recorded in the learner's notebook. Character: inquisitive, gentle. Audience: children and learners, with teachers behind them. **Fit:** educational games, science and history explorations, learning simulations.

**Fingerprint** `density=medium; composition=spatial-scene; surface=paper-sheet; type=handmade-display; nav=spatial; accent=medium; motion=physical-direct; imagery=illustration; radius=medium; data=light; tone=inquisitive`

| Layer | Decision |
|---|---|
| Composition | An explorable illustrated scene; tapping objects opens notebook pages with the concept, a question, and a drawing; the notebook itself is a persistent tab showing discoveries. |
| Type | Handwritten display for titles only (Patrick Hand or Kalam), readable body (Andika or Lexend 18px) because learners are still reading. Arabic: Reem Kufi titles, Noto Sans Arabic body. |
| Color | canvas #F2EBD9 · surface #FBF7EC · ink #2A2418 · muted #5F5540 · line #CDBF9E · action #2F5D50 · on-action #FFFFFF. |
| Space and shape | 12px radius notebook cards on paper; tap targets ≥ 48px. |
| Icons and imagery | Illustrations of the subject, drawn accurately (a correct heart, a correct map). |
| Components | Drag-to-classify, label-the-diagram, predict-then-observe; teacher view separate. |
| States | Discovered, not yet discovered (silhouette), mastered; hint after two attempts; teacher-assigned quests. |
| Responsive | Tablet landscape first; phone portrait with scene panning; classroom projector mode. |
| Motion | Objects respond physically to touch (wobble, open); discovery adds to notebook with a short flight. Reduced motion: fade. |
| Accessibility | Narration toggle, dyslexia-friendly body font, no timed pressure. |
| Build | Learning objectives as data tied to each discovery. |
| AI mutation | Candy gradients, coin rewards dominating, dark-pattern streaks. |
| Fails when | Older learners needing efficient practice (use education niche systems). |

### Arena Scoreboard
**Thesis.** Spectating and tournaments are sport: the stream is the stage, data runs beside it like a broadcast scoreboard, and brackets read at a glance. Character: electric, exact. Audience: esports viewers and tournament organizers. **Fit:** spectator modes, esports sites, tournament brackets, match centers.

**Fingerprint** `density=dense; composition=split-pane; surface=tonal-blocks; type=condensed-display; nav=top-bar; accent=multi-role; motion=choreographed; imagery=user-content; radius=square; data=strong; tone=electric`

| Layer | Decision |
|---|---|
| Composition | Stream or live match view left; scoreboard, player stats, and event feed right; bracket view full-width below or as a tab. |
| Type | Condensed display for scores and team names (Saira Condensed 700), sans for stats (Saira 14px tabular). |
| Color | canvas #0C0E12 · surface #151922 · ink #F5F6F8 · muted #A0A7B4 · line #262C38 · action #FFD166 · on-action #0C0E12. Team colors from the teams, validated for contrast, with logos. |
| Space and shape | Square blocks; score digits huge (48px); tonal blocks separate teams. |
| Icons and imagery | Team logos, player photos, live video. |
| Components | Bracket with zoom and path highlight; match timeline of key events; follow team. |
| States | Live, upcoming (countdown), delayed, completed with VOD; spoiler-free mode hides results. |
| Responsive | Desktop split; tablet stacked; phone scores and bracket with stream on tap. |
| Motion | Score change punches (scale 1.1, 200ms); event feed inserts. Reduced motion: color flash only. |
| Accessibility | Scores in text; spoiler mode respects preferences. |
| Build | Websocket-driven with last-update timestamp; bracket as data. |
| AI mutation | Neon glow on everything, hidden stats, card grids for teams. |
| Fails when | Casual games without competitive scene. |

## Confusable pairs

- **Broadcast HUD vs Arena Scoreboard:** both condensed and dark. The HUD is for the player in the loop; the Scoreboard is for the viewer outside it.
- **Toybox Table vs Pixel Cabinet:** both playful and loud. The Toybox is a social table for groups; the Cabinet is a single-player instant arcade.
- **Codex Journal vs War Room Map:** both immersive textures. The Journal manages a character's belongings; the Map manages a world's systems.
