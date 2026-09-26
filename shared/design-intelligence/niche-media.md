# Niche Atlas: Media

Media products present other people's work: films, songs, articles, photographs. The interface
succeeds when the work is seen and heard well and the next thing to watch, read, or listen to is
easy to choose. Chrome that competes with artwork, carousels that hide choice, and "premium" dark
gradients unrelated to the content are the generated defaults. Load with `niche-atlas-index.md`;
compare three systems with `design-system-selector.md`.

## Product realities

### Streaming video
- **Reality:** Viewers browse on TVs with remotes, phones, and laptops; decisions are fast and made from artwork; playback must be flawless.
- **Jobs:** Continue watching, find something new, understand what a title is, start playback, switch profiles, download for offline.
- **Density:** Medium; rows of artwork.
- **Surfaces:** Profile picker, home rows, title detail, player, search, downloads, account.
- **States:** Buffering, resuming, episode ended with next, unavailable in region, download expired, parental lock.
- **Interaction:** 10-foot remote focus navigation, touch, keyboard.
- **Trust:** Moderate; billing and children's profiles.
- **Generated-UI failures:** Autoplaying trailers with sound, glass overlays hiding artwork, focus states invisible on TV.

### Music and podcasts
- **Reality:** Listening happens in the background while doing other things; the interface is visited briefly to choose or control.
- **Jobs:** Resume listening, play a playlist or episode, search, queue, save, download, control from lock screen or car.
- **Density:** Medium; long lists.
- **Surfaces:** Home, library, playlist or album, artist, episode, now playing, queue, search.
- **States:** Offline, downloading, explicit content filtered, episode played, unavailable track.
- **Interaction:** Touch, lock screen, voice, car displays.
- **Trust:** Low to moderate.
- **Generated-UI failures:** Glowing waveforms, huge now-playing gradients, queue hidden.

### News, magazines, and publishing
- **Reality:** Readers arrive from links to a single article; homepages are for regulars; credibility is the brand.
- **Jobs:** Read an article, see what's new, understand importance, follow a developing story, subscribe, share.
- **Density:** Dense homepages, sparse articles.
- **Surfaces:** Homepage, section fronts, article, live blog, newsletter sign-up, paywall, author page.
- **States:** Breaking, updated, correction, paywalled, metered, offline saved.
- **Interaction:** Phone reading, desktop scanning.
- **Trust:** Very high; corrections and sourcing.
- **Generated-UI failures:** Cards with drop shadows for every story, uniform headline sizes, paywall modals blocking before content.

### Creator platforms
- **Reality:** Creators publish and earn; audiences follow and pay; creators live in dashboards of posts, members, and earnings.
- **Jobs:** Publish, schedule, see who engaged, manage members and tiers, get paid.
- **Density:** Medium.
- **Surfaces:** Creator page, post, membership tiers, studio/editor, audience, payouts.
- **States:** Draft, scheduled, members-only, payout pending, failed payment.
- **Interaction:** Mobile creation, desktop management.
- **Trust:** High for payouts.
- **Generated-UI failures:** Creator pages as templates hiding creator identity, gradient tier cards.

### Photography, galleries, and portfolios
- **Reality:** The images are everything; visitors judge quality in seconds.
- **Jobs:** View work at high quality, navigate series, learn about the artist, contact or buy prints.
- **Density:** Sparse.
- **Surfaces:** Portfolio index, series, image view, about, contact, shop.
- **States:** Loading large images, sold edition, private gallery.
- **Interaction:** Swipe, keyboard arrows, zoom.
- **Trust:** Low.
- **Generated-UI failures:** Grids with rounded corners and hover zoom, text over images, heavy UI chrome.

### Entertainment databases
- **Reality:** Users look up facts about films, games, books, or music: credits, dates, ratings, where to watch.
- **Jobs:** Look up a title or person, check credits, compare ratings, add to a list, find where to watch.
- **Density:** Dense.
- **Surfaces:** Title page, person page, lists, search, ratings, reviews.
- **States:** Unreleased, disputed data, user-contributed pending review.
- **Interaction:** Search-first, mobile quick lookups.
- **Trust:** Moderate; accuracy.
- **Generated-UI failures:** Dark theaters of glossy cards hiding credits, data behind tabs.

## Systems

### Dark Theater
**Thesis.** Streaming is a darkened room where artwork glows; the interface is a quiet usher that makes focus and continuation unmistakable. Character: cinematic, hushed. Audience: viewers on TVs and devices. **Fit:** video streaming, film libraries, TV apps.

**Fingerprint** `density=medium; composition=catalog-grid; surface=full-bleed; type=grotesque; nav=top-bar; accent=none; motion=choreographed; imagery=artwork; radius=low; data=light; tone=cinematic`

| Layer | Decision |
|---|---|
| Composition | Continue watching first; rows of artwork by meaningful groupings; title detail with backdrop, synopsis, episodes, and Play; player chrome minimal. |
| Type | Grotesk (Manrope or Hanken Grotesk) 20–28px on TV, 15px on phone. Arabic: IBM Plex Sans Arabic; subtitles in Noto Sans Arabic. |
| Color | canvas #0B0B0C · surface #161618 · ink #F1F1F2 · muted #A7A7AD · line #2A2A2E · action #F1F1F2 · on-action #0B0B0C. No accent hue; focus is a white 3px frame plus scale. |
| Space and shape | 4px radius posters; 24px row gaps; TV safe area 5%. |
| Icons and imagery | Official key art, stills; backdrop with gradient scrim only where text sits. |
| Components | Profile picker; Play/Resume with progress; episode list with watched state; download toggle. |
| States | Buffering with honest spinner and quality note; region-unavailable explained; next-episode countdown cancellable. |
| Responsive | TV 10-foot focus grid; tablet and phone rows scroll horizontally; web keyboard arrows. |
| Motion | Focus scale 1.06 (150ms); detail backdrop crossfade 300ms. Reduced motion: no scale, frame only; no autoplay trailers. |
| Accessibility | Subtitles and audio description prominent; focus visible at 3 meters. |
| Build | Focus engine for TV; artwork aspect boxes to prevent shift. |
| AI mutation | Glass panels over artwork, neon accents, autoplay with sound. |
| Fails when | Text-first media; daytime reading. |

### Liner Notes
**Thesis.** Music and podcasts deserve their credits and context: lists are exact, the queue is honest, and artwork sits beside words like an album's liner notes. Character: attentive, warm. Audience: listeners who care about what they play. **Fit:** music players, podcast apps, audio libraries.

**Fingerprint** `density=medium; composition=index; surface=tonal-blocks; type=serif-sans-duet; nav=tab-bar; accent=low; motion=physical-direct; imagery=artwork; radius=medium; data=moderate; tone=attentive-warm`

| Layer | Decision |
|---|---|
| Composition | Tabs: Home, Search, Library. Album/playlist: artwork and title block, then track index with durations and credits; episode pages show notes with timestamps; mini-player persistent. |
| Type | Serif for titles (Fraunces or Young Serif), sans for lists (Figtree 15px). Arabic: Noto Naskh Arabic titles. |
| Color | canvas #F4EFE8 · surface #FFFFFF · ink #1F1B17 · muted #5E574F · line #DDD3C6 · action #7A2C2C · on-action #FFFFFF. Album pages tint the tonal block from artwork (computed, contrast-checked). |
| Space and shape | 56px track rows; 8px radius artwork; tonal header blocks. |
| Icons and imagery | Album art, podcast art; no waveform decoration. |
| Components | Queue editable with drag and keyboard; timestamps clickable; download toggle; speed control for podcasts. |
| States | Offline shows downloaded only; played episodes marked; unavailable track greyed with reason. |
| Responsive | Phone first; desktop sidebar library with three-pane; car and lock screen via platform. |
| Motion | Now-playing expands from mini-player (250ms). Reduced motion: crossfade. |
| Accessibility | Player controls labelled; transcripts for podcasts. |
| Build | Artwork-derived tint with contrast guard. |
| AI mutation | Glowing waveforms, giant gradients, hidden queue. |
| Fails when | Video-first or social audio. |

### Broadsheet
**Thesis.** News credibility is typographic: a strict hierarchy where headline size encodes importance, columns carry many stories, and every update is timestamped. Character: authoritative, urgent when needed. Audience: news readers. **Fit:** news sites, newspapers, magazines' homepages.

**Fingerprint** `density=dense; composition=index; surface=flat-ruled; type=editorial-serif; nav=top-bar; accent=low; motion=none; imagery=photography; radius=square; data=light; tone=authoritative`

| Layer | Decision |
|---|---|
| Composition | Homepage as a front: lead story large with image, secondary stories in columns separated by rules, sections below; article pages single column with byline, dateline, updated time. |
| Type | Editorial serif headlines (Newsreader or Source Serif 4 Display, 48/28/20px), serif body 18px, sans for metadata (Public Sans). Arabic: Amiri or Noto Naskh Arabic headlines. |
| Color | canvas #FFFFFF · surface #F7F5F0 · ink #121212 · muted #575757 · line #DCDCDC · action #9E1B1B · on-action #FFFFFF. Red reserved for Breaking and Live labels. |
| Space and shape | Ruled columns; square images; no cards or shadows. |
| Icons and imagery | Photojournalism with credits and captions. |
| Components | Live blog with timestamped entries; correction notes; newsletter signup inline at article end. |
| States | Breaking label; updated timestamp; correction appended; paywall after the lede, not before. |
| Responsive | Desktop multi-column; tablet two; phone single with lead image. |
| Motion | None. |
| Accessibility | Captions, alt text, semantic headlines. |
| Build | Importance field drives headline size; not editors' manual CSS. |
| AI mutation | Uniform cards with shadows, same headline size for all, modal paywall on load. |
| Fails when | Entertainment browsing; single-story products. |

### Feature Spread
**Thesis.** Long-form stories deserve art direction: each feature can have its own layout, type scale, and imagery within a consistent grid, like a magazine spread. Character: immersive, crafted. Audience: magazine readers. **Fit:** long-form journalism, magazines, publisher features, annual reports.

**Fingerprint** `density=sparse; composition=poster; surface=paper-sheet; type=high-contrast-display; nav=in-content; accent=medium; motion=choreographed; imagery=photography; radius=square; data=light; tone=immersive-crafted`

| Layer | Decision |
|---|---|
| Composition | Opening spread with full-bleed image and large headline; body in a 12-column grid with pull quotes, image breaks, and sidenotes. |
| Type | High-contrast display chosen per feature (Bodoni Moda, Gloock, or a licensed face), body serif (Literata 19px). Arabic: Aref Ruqaa for display with care, Amiri body. |
| Color | canvas #F7F4EE · surface #FFFFFF · ink #1A1815 · muted #5A554D · line #DDD6C9 · action #22435E · on-action #FFFFFF. Each feature sets one accent from its photography. |
| Space and shape | Wide margins, full-bleed breaks; square. |
| Icons and imagery | Commissioned photography and illustration. |
| Components | Reading progress, share, save; related features at end. |
| States | Offline save; paywall at a natural break. |
| Responsive | Phone single column with image breaks full width; art direction for crops. |
| Motion | Scroll-linked image reveals only where they serve the story; nothing else. Reduced motion: static. |
| Accessibility | Reading order linear; captions. |
| Build | Feature templates with per-story tokens. |
| AI mutation | Same template for every story; fade-up everything; parallax on all images. |
| Fails when | Daily news volume. |

### Studio Page
**Thesis.** A creator's page belongs to the creator: their name, voice, and work lead; the platform is a quiet frame around membership and posts. Character: personal, direct. Audience: creators and their audiences. **Fit:** creator memberships, newsletters, fan platforms.

**Fingerprint** `density=medium; composition=stream; surface=flat-bordered; type=humanist-sans; nav=contextual; accent=high; motion=restrained-causal; imagery=user-content; radius=medium; data=light; tone=personal-direct`

| Layer | Decision |
|---|---|
| Composition | Creator header (name, one-line, join), then a stream of posts with members-only markers; tiers explained in text with what you get. |
| Type | Humanist sans (Figtree) with creator-chosen display font from a curated list. Arabic: Noto Sans Arabic. |
| Color | canvas #FAF9F7 · surface #FFFFFF · ink #1C1B1A · muted #5A5856 · line #E0DDD8 · action #8A3B12 · on-action #FFFFFF. Creator picks the accent; validated for contrast. |
| Space and shape | 8px radius; bordered posts. |
| Icons and imagery | Creator media. |
| Components | Join tier, comment, post editor with schedule. |
| States | Members-only preview; payment failed with grace; scheduled post indicator. |
| Responsive | Phone single column; desktop max 720px. |
| Motion | Minimal. |
| Accessibility | Creator accent contrast enforced. |
| Build | Theme tokens per creator with guardrails. |
| AI mutation | Gradient tier cards, template hero hiding creator. |
| Fails when | Institutional publishers. |

### White Wall
**Thesis.** A portfolio is a white wall: one image at a time, generous space, and captions like museum labels. Character: reverent, quiet. Audience: viewers of photographers' and artists' work. **Fit:** photography portfolios, artist sites, galleries.

**Fingerprint** `density=sparse; composition=stage; surface=paper-sheet; type=grotesque; nav=in-content; accent=none; motion=restrained-causal; imagery=photography; radius=square; data=none; tone=reverent`

| Layer | Decision |
|---|---|
| Composition | Index of series as a text list or restrained thumbnails; series view shows one image at a time with caption and arrows. |
| Type | Small neutral grotesk (Karla or Hanken Grotesk 13–14px) for captions and nav. Arabic: IBM Plex Sans Arabic. |
| Color | canvas #FAFAF8 · surface #FFFFFF · ink #161616 · muted #595959 · line #E3E3E0 · action #161616 · on-action #FFFFFF. Optional dark wall variant for night photography. |
| Space and shape | Images fit viewport with 5% margin; square; no borders. |
| Icons and imagery | The work only. |
| Components | Keyboard arrows, swipe, full-screen; inquiry link. |
| States | Loading progressive; sold edition marked in caption. |
| Responsive | Phone full-width images; captions below. |
| Motion | Crossfade 200ms between images. Reduced motion: cut. |
| Accessibility | Alt text written by the artist; keyboard navigation. |
| Build | Responsive image sets; preload next. |
| AI mutation | Rounded grid with hover zoom, text over images, gradients. |
| Fails when | Content that needs explanation or commerce at scale. |

### Credits Index
**Thesis.** An entertainment database is a reference work: exact credits, dates, and relationships in dense, linkable tables with artwork as identification. Character: encyclopedic, trustworthy. Audience: fans and professionals looking things up. **Fit:** film, game, book, and music databases; wikis.

**Fingerprint** `density=dense; composition=object-sheet; surface=flat-ruled; type=technical-sans; nav=command-palette; accent=low; motion=none; imagery=artwork; radius=low; data=strong; tone=encyclopedic`

| Layer | Decision |
|---|---|
| Composition | Title page: poster, facts table (year, runtime, genre, rating), where to watch, cast and crew tables, related titles; search always available via shortcut. |
| Type | Technical sans (IBM Plex Sans 14px), tabular dates. Arabic: IBM Plex Sans Arabic; original titles in their scripts. |
| Color | canvas #F6F6F4 · surface #FFFFFF · ink #161616 · muted #545454 · line #D6D6D2 · action #7A4B00 · on-action #FFFFFF. |
| Space and shape | Ruled tables; 4px radius posters. |
| Icons and imagery | Posters and headshots as identifiers. |
| Components | Add to list, rate, filmography sorting, edit suggestions. |
| States | Unreleased; disputed data marked; pending edits. |
| Responsive | Phone: facts first, tables stack. |
| Motion | None. |
| Accessibility | Tables with headers. |
| Build | Structured data with citations. |
| AI mutation | Dark glossy cards, hidden credits. |
| Fails when | Browsing for entertainment. |

### Audio Room
**Thesis.** Live and social audio is a room of voices: who is speaking, who is listening, and how to raise a hand. Character: communal, live. Audience: live audio hosts and listeners. **Fit:** live audio rooms, radio streams, live podcasts.

**Fingerprint** `density=sparse; composition=hub; surface=tonal-blocks; type=rounded-sans; nav=hub-and-spoke; accent=multi-role; motion=ambient-world; imagery=user-content; radius=high; data=none; tone=communal-live`

| Layer | Decision |
|---|---|
| Composition | Room: speakers at top with speaking rings, listeners below, controls bottom (raise hand, leave, react); lobby of live rooms. |
| Type | Rounded sans (Nunito Sans). Arabic: Tajawal. |
| Color | canvas #F2F4F3 · surface #FFFFFF · ink #1A1F1E · muted #525B59 · line #D6DDDB · action #1F4E5F · on-action #FFFFFF. Speaker roles (host, speaker, listener) labelled, not only colored. |
| Space and shape | Circular avatars, 20px radius blocks. |
| Icons and imagery | Participant avatars. |
| Components | Raise hand, mute, invite to speak, report. |
| States | Live, ended with replay, connection weak, removed. |
| Responsive | Phone first. |
| Motion | Speaking ring pulses with voice level. Reduced motion: static ring. |
| Accessibility | Live captions, speaker announced. |
| Build | Low-latency audio SDK; captions pipeline. |
| AI mutation | Neon gradients, waveform decorations. |
| Fails when | On-demand listening (use Liner Notes). |

### Contact Proof
**Thesis.** Photographers' client galleries are proofing sessions: grids of frames to select, compare, and approve with exact counts. Character: professional, efficient. Audience: photographers and their clients. **Fit:** client proofing, stock selection, photo delivery.

**Fingerprint** `density=dense; composition=catalog-grid; surface=flat-bordered; type=humanist-sans; nav=top-bar; accent=medium; motion=physical-direct; imagery=photography; radius=square; data=moderate; tone=professional-efficient`

| Layer | Decision |
|---|---|
| Composition | Top bar with gallery name, selection count/limit, submit; grid of frames with select marks; compare view side by side. |
| Type | Humanist sans (Source Sans 3 14px). |
| Color | canvas #EEEEEC · surface #FFFFFF · ink #1A1A1A · muted #555555 · line #D0D0CC · action #0E5A5A · on-action #FFFFFF. Selected frames outlined 3px action with check. |
| Space and shape | 4px gutters; square frames. |
| Icons and imagery | Client photos. |
| Components | Select, favorite, comment, compare, download approved. |
| States | Selection limit reached; submitted locked; expired gallery. |
| Responsive | Phone 2-column grid. |
| Motion | Select check pops (120ms). Reduced motion: none. |
| Accessibility | Keyboard selection; counts announced. |
| Build | Watermarked previews; originals on approval. |
| AI mutation | Masonry with hover zoom and glass overlays. |
| Fails when | Public portfolios (use White Wall). |

### Front Row Guide
**Thesis.** A media guide or listings product helps people plan what to watch or attend: a schedule of what's on, where, and when, with critics' notes. Character: informed, lively. Audience: people planning viewing or outings. **Fit:** TV guides, film listings, festival programs, release calendars.

**Fingerprint** `density=dense; composition=calendar-grid; surface=tonal-blocks; type=condensed-display; nav=top-bar; accent=multi-role; motion=none; imagery=artwork; radius=low; data=moderate; tone=informed-lively`

| Layer | Decision |
|---|---|
| Composition | Day selector; grid of channels or venues by time; picks highlighted with critics' one-liners; detail drawer. |
| Type | Condensed display for times and titles (Oswald or Barlow Condensed), body sans (Barlow). Arabic: Cairo. |
| Color | canvas #FBF8F2 · surface #FFFFFF · ink #1C1A17 · muted #5A554C · line #E2DBCD · action #8C2F1B · on-action #FFFFFF. Genres as tonal roles with labels. |
| Space and shape | 4px radius cells; compact 40px rows. |
| Icons and imagery | Posters in detail only. |
| Components | Remind me, add to calendar, filter by genre. |
| States | Now playing marker; sold out; cancelled. |
| Responsive | Phone: list by time; desktop grid. |
| Motion | None. |
| Accessibility | Grid navigable; times in text. |
| Build | Time zone aware. |
| AI mutation | Poster carousels without times. |
| Fails when | On-demand catalogs. |

## Confusable pairs

- **Broadsheet vs Feature Spread:** both editorial. Broadsheet ranks many stories by importance; Feature Spread art-directs one story.
- **White Wall vs Contact Proof:** both photography. The Wall presents finished work to the public; Proof supports selection with clients.
- **Dark Theater vs Front Row Guide:** both about watching. The Theater streams on demand; the Guide schedules what's on.
