# Niche Atlas: Social

Social products are made of people and what they say to each other. Design decides who is heard,
how conflict is handled, and whether the product respects attention. Generated defaults add
gradient avatars, engagement counters everywhere, and infinite feeds regardless of the community's
purpose. The real material is identity, context (who can see this), pace, and moderation. Load a profile with `niche-atlas-index.md` only when its realities affect a decision; compare product-relevant systems with `design-system-selector.md` only when the direction is open. For workplace chat,
see Relay Thread in `niche-business.md`.

## Product realities

### Social networks and feeds
- **Reality:** People follow others and scroll; the feed's ordering and density shape attention and wellbeing.
- **Jobs:** Catch up on people I follow, post, reply, react, share, mute or block, control who sees what.
- **Density:** Medium.
- **Surfaces:** Feed, post composer, post detail with replies, profile, notifications, search, settings for privacy.
- **States:** New posts available, caught up, deleted post, blocked, limited visibility, sensitive content warning.
- **Interaction:** Phone-first, thumb scrolling, quick reactions.
- **Trust:** High for privacy and safety.
- **Generated-UI failures:** Engagement counts dominating content, infinite feed with no end state, gradient story rings everywhere.

### Communities and forums
- **Reality:** Groups organized around a topic or place; long-lived threads; norms enforced by moderators.
- **Jobs:** Find relevant threads, read a discussion, reply well, ask a question, follow a topic, understand rules.
- **Density:** Dense indexes, medium threads.
- **Surfaces:** Category index, thread list, thread, new topic, member profile, rules, moderation queue.
- **States:** Pinned, locked, solved, removed by moderator, new since last visit.
- **Interaction:** Desktop and phone reading; keyboard for regulars.
- **Trust:** Moderate; community health.
- **Generated-UI failures:** Card grids for categories, avatars bigger than posts, gamified badges dominating.

### Messaging and group chat
- **Reality:** Private conversations with friends and family; speed and privacy.
- **Jobs:** Read and reply, send media and voice, call, create a group, find an old message, manage notifications.
- **Density:** Medium.
- **Surfaces:** Chat list, conversation, group info, media gallery, calls, settings.
- **States:** Sending, sent, delivered, read, failed, disappearing, end-to-end verified, offline.
- **Interaction:** Phone, keyboard, voice notes.
- **Trust:** Very high for privacy.
- **Generated-UI failures:** Gradient bubbles, read receipts pressure without controls, cluttered attachments menu.

### Dating
- **Reality:** People present themselves and judge others quickly; safety and honesty matter; rejection is frequent.
- **Jobs:** Build a profile, browse, express interest, chat, meet safely, stop contact.
- **Density:** Sparse.
- **Surfaces:** Profile editor, discovery, profile detail, matches, chat, safety center.
- **States:** Match, no match, unmatched, reported, verified, paused profile.
- **Interaction:** Phone, swipe with button alternatives, photos.
- **Trust:** Very high for safety.
- **Generated-UI failures:** Gamified slot-machine mechanics, gradients, fake scarcity.

### Professional networks
- **Reality:** People manage reputation and opportunities; content skews to announcements.
- **Jobs:** Maintain a profile, find people and jobs, message, apply, verify credentials.
- **Density:** Medium.
- **Surfaces:** Profile, feed, jobs, messages, company pages, search.
- **States:** Open to work, pending connection, application submitted, verified.
- **Interaction:** Desktop and phone.
- **Trust:** Moderate to high.
- **Generated-UI failures:** Blue-everything corporate template, vanity metrics, card soup profiles.

### Multiplayer social products
- **Reality:** Shared spaces with avatars where presence and play are the social glue.
- **Jobs:** Enter a space, find friends, talk, play or create together, moderate.
- **Density:** Variable.
- **Surfaces:** Space, avatar editor, friends, invitations, safety tools.
- **States:** Joining, instance full, muted, blocked, reconnecting.
- **Interaction:** 3D navigation, voice, touch, keyboard.
- **Trust:** High for safety, especially minors.
- **Generated-UI failures:** Dashboard UI inside a world, safety tools hidden.

## Systems

### Quiet Feed
**Thesis.** A feed from people you chose, in order, with a clear end: content first, counts muted, and "You're caught up" as a feature. Character: friendly, calm. Audience: people who want to keep up without compulsion. **Fit:** follow-based feeds, small social networks, family and friend sharing.

**Fingerprint** `density=medium; composition=stream; surface=flat-ruled; type=humanist-sans; nav=tab-bar; accent=low; motion=restrained-causal; imagery=user-content; radius=medium; data=light; tone=friendly-calm`

| Layer | Decision |
|---|---|
| Composition | Chronological stream of posts separated by rules; post shows author, time, content, then actions; counts shown quietly after actions; end of new posts marked. |
| Type | Humanist sans (Source Sans 3 or Figtree 16px). Arabic: Noto Sans Arabic; per-post direction. |
| Color | canvas #FAF9F6 · surface #FFFFFF · ink #1D1C1A · muted #5A5854 · line #E3E0DA · action #2D5A7B · on-action #FFFFFF. |
| Space and shape | 8px base; 16px post padding; media 8px radius. Stroke and lift: posts are separated by one 1px rule and have no card borders; the composer owns one stroke and the audience selector's state is text; the new-posts pill is the only lifted element. |
| Icons and imagery | User photos and video. |
| Components | Composer with audience selector visible; reply; quiet reactions; mute/block in the post menu. Shown when: counts show quietly after actions and never above the content, the new-posts pill only while the user is scrolled, and content warnings only on flagged posts; no suggested-for-you inserts. Copy: the end marker says "You're caught up" with the time of the last post. |
| States | Caught up marker; new posts pill that doesn't jump; content warnings with reveal. A failed post keeps the draft and says so; an empty feed explains how to follow people and shows the composer. |
| Responsive | Phone first; desktop centered 600px column. |
| Motion | New posts inserted above without moving reading position. Reduced motion: no fade. |
| Accessibility | Posts as articles; alt text prompts on upload. |
| Build | Chronological by default; scroll anchoring. Accept: capture a feed with a content warning, the caught-up marker, a new-posts pill, and a failed post at 390 and a laptop, checking rules between posts are unbroken and the audience selector stays visible in the composer. |
| AI mutation | Engagement counts large, gradient story rings, infinite autoplay. |
| Fails when | Discovery-first entertainment platforms. |

### Town Square Forum
**Thesis.** Forums are civic spaces: clear categories, readable threads, visible rules, and a sense of who is new and who is established. Character: civic, thoughtful. Audience: topic communities. **Fit:** forums, community Q&A, support communities.

**Fingerprint** `density=dense; composition=index; surface=flat-bordered; type=serif-sans-duet; nav=persistent-sidebar; accent=multi-role; motion=none; imagery=none; radius=low; data=moderate; tone=civic-thoughtful`

| Layer | Decision |
|---|---|
| Composition | Sidebar categories; thread list with title, category, replies, last activity, solved state; thread view with posts and quoted replies. |
| Type | Serif for thread titles (Source Serif 4), sans for posts (Source Sans 3 16px). Arabic: Noto Naskh Arabic titles. |
| Color | canvas #F5F4F0 · surface #FFFFFF · ink #1B1A18 · muted #57554F · line #D8D5CD · action #1F5C4A · on-action #FFFFFF. Category colors with names. |
| Space and shape | 48px thread rows; 4px radius. Stroke and lift: thread rows have one 1px rule and no cell borders; a solved thread shows a text label and a check, and a locked one a label, never a colored border; quoted replies use one left rule. |
| Icons and imagery | None; small avatars. |
| Components | Reply with quote, mark solution, follow thread, flag. Shown when: the new-since-last-visit mark appears only on threads with new posts, the lock reason only on locked threads, and the moderator note only on removed posts; the community rules link stays visible on the composer. Copy: titles stay as written, and removals say which rule applied. |
| States | New since last visit; locked with reason; removed with moderator note. A thread with no replies invites the first reply; a failed post keeps the draft and the quoted text. |
| Responsive | Phone: category select; thread rows stack. |
| Motion | None. |
| Accessibility | Headings per post; keyboard navigation between posts. |
| Build | Last-read tracking; server-side rendering for search. Accept: capture the thread list with solved and locked threads, a long thread with quotes, and a removed post at 390 and a laptop, checking quote rules and avatars stay aligned through nested replies. |
| AI mutation | Category card grids, badge overload. |
| Fails when | Real-time chat. |

### Pocket Chat
**Thesis.** Private messaging is intimate and quick: soft tonal bubbles, delivery states you can trust, and media that stays out of the way until opened. Character: intimate, relaxed. Audience: friends and family. **Fit:** personal messaging, group chats.

**Fingerprint** `density=medium; composition=conversation; surface=tonal-blocks; type=rounded-sans; nav=tab-bar; accent=medium; motion=physical-direct; imagery=user-content; radius=high; data=none; tone=intimate`

| Layer | Decision |
|---|---|
| Composition | Chat list with previews; conversation with bubbles (mine tinted, theirs neutral), composer with attach and voice. |
| Type | Rounded sans (Nunito Sans 16px). Arabic: Tajawal; bubble direction per message script. |
| Color | canvas #F5F3EF · surface #FFFFFF · ink #1E1C19 · muted #5A5650 · line #E0DBD2 · action #0B6E6E · on-action #FFFFFF. Mine #D9EEEA with ink text. |
| Space and shape | 18px radius bubbles with tail corners 6px; grouped consecutive messages. Stroke and lift: bubbles have no border and differ by tone, with 6px tail corners; the selected message shows one highlight band; delivery state is a small text or icon beside the time, never a bubble border; no shadows. |
| Icons and imagery | Shared photos, voice note waveforms (functional). |
| Components | Reply, react, forward, disappearing timer, verification screen. Shown when: read receipts show only if both sides allow them, the retry only on failed messages, and the verification screen only on request; no typing-indicator animations beyond a single line. Copy: states read plainly ("Sending", "Delivered", "Not sent, tap to retry"). |
| States | Sending clock, sent, delivered, read (opt-out), failed with retry; offline queue. An offline session queues messages visibly and sends them on reconnect; an empty chat shows the composer and the encryption note. |
| Responsive | Phone; desktop two-pane. |
| Motion | Sent bubble slides up from composer (150ms). Reduced motion: none. |
| Accessibility | Messages announced with sender; voice notes transcribed. |
| Build | E2E state visible; local-first queue. Accept: capture a conversation with each delivery state, a failed message, a voice note, and the offline queue at 390 with the keyboard open, checking bubble corners are consistent and the composer is never covered. |
| AI mutation | Gradient bubbles, sticker clutter, AI suggestions over the composer. |
| Fails when | Workplace communication at scale. |

### Two Profiles
**Thesis.** Dating is about two people deciding with care: full-bleed honest photos, prompts that reveal personality, and explicit safety. Character: warm, candid. Audience: adults dating. **Fit:** dating apps, matchmaking.

**Fingerprint** `density=sparse; composition=stage; surface=full-bleed; type=high-contrast-display; nav=tab-bar; accent=high; motion=physical-direct; imagery=photography; radius=high; data=none; tone=warm-candid`

| Layer | Decision |
|---|---|
| Composition | One profile at a time: photo full-bleed, name and age, then prompts and photos alternating; like/pass buttons fixed; matches and chats as tabs. |
| Type | Display serif for names and prompts (Fraunces), body sans (DM Sans 16px). Arabic: Noto Naskh Arabic display. |
| Color | canvas #FFF6F2 · surface #FFFFFF · ink #241A18 · muted #614F4B · line #EFDCD5 · action #A3302C · on-action #FFFFFF. |
| Space and shape | 20px radius photos; big buttons 64px. Stroke and lift: photos are full-bleed with a 20px radius and no border; the fixed like and pass buttons are the only outlined controls and have equal weight; no shadows over photos except behind text. |
| Icons and imagery | User photos with verification badge text. |
| Components | Like a specific prompt with comment; pass; report and block always one tap. Shown when: the match moment is brief and dismissible, the unmatch notice only after an unmatch, and the paused marker only on paused profiles; report and block stay one tap away at all times because they are safeguards. Copy: likes attach to a specific prompt, and verification states what was verified. |
| States | Match moment brief; unmatched removes conversation with notice; paused profile. A profile that fails to load keeps the position in the stack and offers retry; an empty stack says there are no more profiles for now and shows settings. |
| Responsive | Phone only first. |
| Motion | Card drag with physics and buttons alternative. Reduced motion: buttons only. |
| Accessibility | Swipe alternatives; alt text from users with prompts. |
| Build | Safety center linked everywhere. Accept: capture a profile, a like with comment, a match moment, an unmatch, and the safety center at 390 with the largest text, checking the fixed buttons never cover the prompt text. |
| AI mutation | Slot-machine gamification, fake "likes you" teasers. |
| Fails when | Friendship or professional networking. |

### Credential Profile
**Thesis.** A professional profile is a structured record of work: roles, dates, skills, and verified evidence, read quickly by recruiters. Character: professional, plain. Audience: professionals and recruiters. **Fit:** professional networks, talent profiles, alumni networks.

**Fingerprint** `density=medium; composition=object-sheet; surface=layered-panels; type=institutional-sans; nav=top-bar; accent=low; motion=none; imagery=user-content; radius=low; data=moderate; tone=professional-plain`

| Layer | Decision |
|---|---|
| Composition | Profile header with name, role, location, availability; sections for experience timeline, skills with evidence, education; right column for contact and similar profiles. |
| Type | Institutional sans (Public Sans 15px). Arabic: Noto Sans Arabic. |
| Color | canvas #EFF1F2 · surface #FFFFFF · ink #17191B · muted #51575C · line #CFD4D8 · action #2A4F6E · on-action #FFFFFF. |
| Space and shape | 4px radius; panel layers. Stroke and lift: panels have one 1px line and the same 4px radius; a verified item uses a text label and one mark; the timeline is one 1px spine; no shadows. |
| Icons and imagery | Profile photo, company logos. |
| Components | Message, connect, endorse with evidence link. Shown when: the verified label appears only on verified employment, open-to-work visibility only if set, and the endorsement evidence link only when evidence exists; no engagement counters or promoted profiles. Copy: roles use dates and employers as written, and endorsements cite the work. |
| States | Verified employment; open to work visibility options; pending connections. An incomplete profile shows only what exists with no nagging meter; a failed connection request keeps the message and says why. |
| Responsive | Phone single column. |
| Motion | None. |
| Accessibility | Timeline semantic list. |
| Build | Structured profile schema. Accept: capture a full profile, a verified role, an endorsement with evidence, and a recruiter view at 1440 and 390, checking panel borders and the timeline spine are continuous. |
| AI mutation | Vanity metrics, blue template, card soup. |
| Fails when | Casual social. |

### Club Noticeboard
**Thesis.** Local groups organize around events and announcements pinned to a board: what's happening, who's coming, and how to join. Character: neighborly, lively. Audience: clubs, neighborhoods, interest groups. **Fit:** local communities, clubs, meetups, parent groups.

**Fingerprint** `density=medium; composition=board; surface=heavy-outline; type=grotesque; nav=hub-and-spoke; accent=multi-role; motion=none; imagery=photography; radius=low; data=light; tone=neighborly-lively`

| Layer | Decision |
|---|---|
| Composition | Group hub: upcoming events, announcements, members; board of posts by type (event, notice, question). |
| Type | Grotesk (Bricolage Grotesque or Work Sans). Arabic: Readex Pro. |
| Color | canvas #FFFCF5 · surface #FFFFFF · ink #1E1B16 · muted #5C564B · line #1E1B16 · action #22577A · on-action #FFFFFF. Post types color-coded with labels. |
| Space and shape | 2px outlines; 4px radius; notices like pinned paper. Stroke and lift: notices share one 2px outline and the same radius; an RSVP'd event changes its fill and a label, and a pinned notice adds one pin mark; there are no shadows beyond the paper tone. |
| Icons and imagery | Photos from past events. |
| Components | RSVP, add to calendar, ask a question, invite. Shown when: the waitlist appears only on full events, the cancelled label only on cancelled ones, and archived events in their own view; no member-count badges on every post. Copy: events state date, time, place, and who to ask, and notices keep the author's name. |
| States | Event full with waitlist; cancelled; past events archived. A group with no events invites the first one; a failed RSVP keeps the choice and says why. |
| Responsive | Phone first. |
| Motion | None. |
| Accessibility | Dates in text; RSVP buttons labelled. |
| Build | iCal export. Accept: capture the hub, a full event with waitlist, a cancelled event, and a notice at 390 and a laptop, checking the outlines are complete at the board's edge and the add-to-calendar works. |
| AI mutation | Generic SaaS community template. |
| Fails when | Large public networks. |

### Photo Grid Social
**Thesis.** Visual social products are walls of images where the grid is the identity and chrome recedes to near nothing. Character: expressive, visual. Audience: photographers, artists, visual creators. **Fit:** photo sharing, visual social, art communities.

**Fingerprint** `density=dense; composition=catalog-grid; surface=full-bleed; type=grotesque; nav=tab-bar; accent=none; motion=physical-direct; imagery=user-content; radius=square; data=none; tone=expressive`

| Layer | Decision |
|---|---|
| Composition | Profile as a tight square grid; feed of full-width images; detail with caption and comments. |
| Type | Small grotesk (Karla 14px). |
| Color | canvas #FFFFFF · surface #F5F5F5 · ink #111111 · muted #5A5A5A · line #E4E4E4 · action #111111 · on-action #FFFFFF. |
| Space and shape | 2px gutters; square images. Stroke and lift: images have no border or radius with 2px gutters; the selected image has one inset outline; controls float with the only shadow, and the grid never shows UI over images. |
| Icons and imagery | User images only. |
| Components | Like, save, comment, follow. Shown when: the like and save controls appear on hover or tap, the blur reason only on sensitive content, and comments only in the detail view; no view counters on the grid. Copy: captions keep the creator's voice, and a blurred image says what is behind it. |
| States | Sensitive content blurred with reason; deleted. A deleted image shows a neutral tile with a short note; a failed upload keeps the image and offers retry. |
| Responsive | 3-column grid on phone, 5+ on desktop. |
| Motion | Tap to open expands from grid (200ms). Reduced motion: cut. |
| Accessibility | Alt text prompts required. |
| Build | Image pipeline with aspect handling. Accept: capture a profile grid, a feed image, a sensitive blur, and a detail with comments at 390 and a laptop, checking the gutters stay even and images keep their aspect. |
| AI mutation | Rounded cards, gradient overlays, counts over images. |
| Fails when | Text discussion. |

### Hangout Space
**Thesis.** Multiplayer social worlds are places: the world is full-screen, social tools float lightly over it, and safety is one gesture away. Character: playful, social. Audience: people meeting in virtual spaces. **Fit:** social worlds, virtual hangouts, avatar platforms.

**Fingerprint** `density=variable; composition=spatial-scene; surface=translucent-overlay; type=rounded-sans; nav=spatial; accent=multi-role; motion=ambient-world; imagery=artwork; radius=high; data=none; tone=playful-social`

| Layer | Decision |
|---|---|
| Composition | World full-screen; friends and chat in a floating panel; safety shield button always visible; menus radial on controllers. |
| Type | Rounded sans (Nunito 16px+ scaled for distance). Arabic: Baloo Bhaijaan 2. |
| Color | canvas #121521 · surface #1C2030 · ink #F2F3F8 · muted #A6ABBF · line #2E3347 · action #FFB547 · on-action #121521. Overlay panels 80% with blur over the 3D world. |
| Space and shape | 16px radius panels; large targets. Stroke and lift: panels float with one soft shadow and a 1px stroke; the safety button is the only constantly visible fixed control and has the strongest outline; active speakers show one ring. |
| Icons and imagery | The world's art and avatars. |
| Components | Mute, block, personal space bubble, report with capture. Shown when: the personal-space bubble appears only when enabled, the reconnecting note only during a drop, and the moderator-mute notice only to the muted person; the safety controls work even when the UI lags. Copy: safety text is literal ("Block this person", "Report with capture"). |
| States | Instance full; reconnecting; muted by moderator. A full instance offers another instance or a wait; a dropped connection returns to the same spot when possible. |
| Responsive | VR, desktop, mobile each with native input. |
| Motion | World ambient; UI panels ease 200ms. Reduced motion: comfort mode. |
| Accessibility | Captions for voice, comfort settings. |
| Build | Safety actions work even if UI lags. Accept: capture the world with the panel closed and open, the safety flow, an instance full, and reconnecting on a headset and a phone, checking the safety button is reachable in every state. |
| AI mutation | Dashboard panels inside the world. |
| Fails when | Text-first communities. |

### Discussion Reader
**Thesis.** Deep discussions (Q&A, long threads, essays with replies) read like annotated documents: the best answer is typographically clear, votes are data, and depth is visible. Character: considered, discursive. Audience: knowledge communities. **Fit:** Q&A sites, long-form discussion, expert communities.

**Fingerprint** `density=medium; composition=document; surface=paper-sheet; type=editorial-serif; nav=in-content; accent=multi-role; motion=none; imagery=none; radius=square; data=moderate; tone=considered-discursive`

| Layer | Decision |
|---|---|
| Composition | Question as a titled document; accepted answer first with a marked edge; other answers ordered with votes visible; nested replies indented with depth lines. |
| Type | Editorial serif for body (Literata 17px), sans for metadata. Arabic: Amiri. |
| Color | canvas #F6F4EF · surface #FFFFFF · ink #1C1A17 · muted #58544D · line #DCD6CB · action #2F4F6F · on-action #FFFFFF. Accepted answer green edge with label; moderator notes amber. |
| Space and shape | Square; depth lines 1px. Stroke and lift: depth lines are 1px; the accepted answer has one marked edge and a label, and no other answer gets a border; code blocks share one 1px frame; no shadows. |
| Icons and imagery | Code blocks and figures in content. |
| Components | Vote, accept, edit history, cite. Shown when: the duplicate link appears only on closed duplicates, the outdated flag only on flagged answers, and edit history only when edited; no gamified badges beside names. Copy: votes are numbers, and a duplicate says what it duplicates and links it. |
| States | Duplicate closed with link; outdated answer flagged. A question with no answers says so and shows the answer form; a failed vote keeps the previous count and says why. |
| Responsive | Phone single column; depth collapses after 3. |
| Motion | None. |
| Accessibility | Heading per answer; votes announced. |
| Build | Edit history retained. Accept: capture a question with an accepted answer, a deep thread, a duplicate, and an outdated answer at 390 and a laptop, checking depth lines stay aligned and nested replies do not overflow at the deepest level. |
| AI mutation | Gamification badges dominating; cards per answer. |
| Fails when | Casual chat. |

### Moderator Desk
**Thesis.** Moderation is fair process: reports in a queue, the content in context, the rules cited, and every action recorded. Character: fair, firm. Audience: community moderators and trust and safety teams. **Fit:** moderation queues, trust and safety tools, community admin.

**Fingerprint** `density=dense; composition=master-detail; surface=flat-bordered; type=technical-sans; nav=persistent-sidebar; accent=multi-role; motion=none; imagery=user-content; radius=low; data=strong; tone=fair-firm`

| Layer | Decision |
|---|---|
| Composition | Sidebar queues by reason; list with severity and age; detail shows reported content in context, reporter notes, author history, applicable rule, actions. |
| Type | Technical sans (IBM Plex Sans 14px). Arabic: IBM Plex Sans Arabic. |
| Color | canvas #F1F2F2 · surface #FFFFFF · ink #161818 · muted #525858 · line #CDD2D2 · action #6B2A2A · on-action #FFFFFF. Severity labels with icons. |
| Space and shape | 40px rows; 4px radius. Stroke and lift: rows have one 1px rule and severity is a text label and one edge; graphic content blurs behind one frame until revealed; the action bar has one 1px border, with no shadows. |
| Icons and imagery | User content with blur for graphic material until revealed. |
| Components | Remove, warn, suspend (with duration), dismiss; cite rule; templated messages editable. Shown when: the escalated and appealed labels appear only on those cases, graphic content only after a reveal, and the suspension duration only when suspending; the rule citation is always required before an action. Copy: templated messages are editable and name the rule, and actions state what the member will see. |
| States | Escalated; appealed; auto-actioned for review. An empty queue says nothing is waiting and shows the last review time; a failed action keeps the case open and records nothing. |
| Responsive | Desktop; phone for urgent queues. |
| Motion | None. |
| Accessibility | Keyboard actions; content warnings. |
| Build | Audit log immutable; moderator wellbeing: blur by default. Accept: capture a queue, a case with blurred content, an escalation, and an appeal at 1440 and a tablet, checking the blur holds in every state and the audit entry appears after each action. |
| AI mutation | KPI dashboards of "toxicity", gamified mod leaderboards. |
| Fails when | Member-facing surfaces. |

## Confusable pairs

- **Town Square Forum vs Discussion Reader:** both threads. The Forum indexes many topics for regulars; the Reader presents one deep discussion for readers arriving from search.
- **Quiet Feed vs Photo Grid Social:** both follow-based. Quiet Feed is text and people; Photo Grid is images first.
- **Pocket Chat vs Hangout Space:** both social presence. Pocket Chat is private text; Hangout Space is shared spatial presence.
