<!-- GENERATED FROM shared/design-intelligence/niche-education.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Niche Atlas: Education

Education products serve learners, and usually also teachers, parents, administrators, or
certifying bodies. The design problem is sustained attention and honest progress: what does the
learner do next, did they actually learn, and who else needs to know? Generated defaults reach for
gamification (XP, streaks, confetti) and candy palettes regardless of age or subject. Load with
`niche-atlas-index.md`; compare three systems with `design-system-selector.md`. For technical
lessons, also consider Worked Example in `niche-developer.md`; for AI tutors, Tutor Path in
`niche-ai.md`; for learning games, Field Notebook in `niche-games.md`.

## Product realities

### LMS, course, and certification platforms
- **Reality:** Institutions and companies publish structured courses; learners follow modules with deadlines; admins track completion for compliance.
- **Jobs:** Resume the next lesson, submit an assignment, see grades and deadlines, find materials, earn and share a certificate.
- **Density:** Medium; admin views dense.
- **Surfaces:** Course home, module list, lesson (video, reading, quiz), assignment submission, grades, calendar, announcements, certificate.
- **States:** Not started, in progress, due soon, overdue, submitted, graded, locked by prerequisite, expired enrollment.
- **Interaction:** Mixed desktop and phone; video playback; file upload.
- **Trust:** Moderate to high; grades and credentials have consequences.
- **Generated-UI failures:** Course home as a hero banner and feature cards; progress rings with no next action; deadlines hidden in a calendar tab.

### Interactive and technical learning
- **Reality:** Learning by doing: exercises, sandboxes, simulations with immediate feedback.
- **Jobs:** Read, try, get feedback, recover from mistakes, advance.
- **Density:** Medium.
- **Surfaces:** Lesson with embedded exercise, sandbox, hint, solution, progress.
- **States:** Attempted, wrong with reason, passed, stuck, reset.
- **Interaction:** Typing, drag and drop, manipulation.
- **Trust:** Moderate.
- **Generated-UI failures:** Explanations separated from practice; feedback that only says "Incorrect".

### Language learning
- **Reality:** Daily short practice across listening, speaking, reading, writing; motivation over months is the hardest problem.
- **Jobs:** Do today's practice, hear and repeat, review mistakes, have a real conversation, see real progress.
- **Density:** Sparse.
- **Surfaces:** Daily session, exercise types, review, conversation practice, vocabulary, progress.
- **States:** Microphone denied, audio loading, correct, near-miss, wrong, review due.
- **Interaction:** Touch, voice, keyboard for other scripts, right-to-left and complex scripts.
- **Trust:** Moderate; pronunciation feedback must be fair.
- **Generated-UI failures:** Guilt-driven streak pressure, one script's typography forced onto another, tiny diacritics.

### Children's education
- **Reality:** Young users with emerging reading; parents and teachers control accounts; attention and safety are central.
- **Jobs:** Play a learning activity, hear instructions, get encouragement, let parents see progress.
- **Density:** Sparse.
- **Surfaces:** Activity hub, activity, reward moment, parent area behind a gate.
- **States:** Needs help, completed, time limit reached, offline.
- **Interaction:** Touch with large targets, audio instructions, no reading dependence.
- **Trust:** Very high; privacy and no manipulative design.
- **Generated-UI failures:** Tiny text, adult navigation patterns, ads or purchase prompts in child areas, overstimulating motion.

### Higher education and classroom tools
- **Reality:** Teachers run live classes and assign readings; students discuss, annotate, and collaborate.
- **Jobs:** Present, poll the room, assign, annotate readings, discuss, give feedback.
- **Density:** Medium.
- **Surfaces:** Live presentation, class roster, reading with annotations, discussion, gradebook.
- **States:** Live, paused, student joined late, anonymous mode, submission closed.
- **Interaction:** Projector plus student devices; keyboard for teachers.
- **Trust:** Moderate; grades and student privacy.
- **Generated-UI failures:** SaaS dashboard for a teacher mid-class, text too small for projection.

### Assessment, tutoring, and study tools
- **Reality:** Tests measure; tutors adapt; study tools help memory. Each needs focus and fairness.
- **Jobs:** Take a timed test, flag and review questions, book and attend a tutoring session, review flashcards on schedule.
- **Density:** Sparse to medium.
- **Surfaces:** Test player, review, results, tutor booking and session room, flashcard review.
- **States:** Time remaining, answer saved, connection lost during test, submitted, session starting, card due.
- **Interaction:** Keyboard and touch; accessibility accommodations (extra time, screen readers).
- **Trust:** Very high for tests; scores decide outcomes.
- **Generated-UI failures:** Animated timers inducing panic, auto-advance without saving, decorative gradients in test screens.

## Systems

### Syllabus Spine
**Thesis.** A course is its syllabus: an ordered spine of modules with dates and states, where "what's next" is always the first thing on the page. Character: orderly, supportive. Audience: learners in structured courses and the instructors who build them. **Fit:** LMS, course platforms, corporate training.

**Fingerprint** `density=medium; composition=index; surface=flat-ruled; type=humanist-sans; nav=persistent-sidebar; accent=low; motion=none; imagery=none; radius=low; data=moderate; tone=orderly-supportive`

| Layer | Decision |
|---|---|
| Composition | Sidebar: course sections (Modules, Assignments, Grades, People). Course home: "Continue: Lesson 3.2" row with due date, then upcoming deadlines, then the full module index with states per lesson. |
| Type | Humanist sans (Source Sans 3 or Noto Sans; fallback `system-ui`). 28/18/16/13px; long readings at 18px. Arabic: Noto Sans Arabic; mixed-direction course titles isolated. |
| Color | canvas #F7F7F4 · surface #FFFFFF · ink #1D2120 · muted #555C59 · line #D7DAD5 · action #22577A · on-action #FFFFFF. States use icon + label: done, in progress, due soon, overdue, locked. |
| Space and shape | 8px base; module rows 48px; ruled lists; 4px radius controls. |
| Icons and imagery | Content-type icons (video, reading, quiz, assignment); course imagery only in catalog. |
| Components | Continue as the primary action; assignment submission with file preview and confirmation receipt; grade view with rubric. |
| States | Overdue shows penalty policy; locked shows the prerequisite; submitted shows timestamp and file names. Empty course: instructor-facing checklist. |
| Responsive | Desktop sidebar; tablet sections as tabs; phone: Continue row, deadlines, module accordion. |
| Motion | None. |
| Accessibility | Video captions and transcripts required; keyboard-complete quizzes. |
| Build | Course structure as data; each lesson has state and due date fields. |
| AI mutation | Hero banner course home, progress rings, feature cards for "Modules" and "Grades". |
| Fails when | Self-directed exploratory learning; children. |

### Chalk and Slate
**Thesis.** Live teaching tools are a blackboard for a room: huge type, one idea at a time, controlled by the teacher, readable from the back row. Character: clear, lively. Audience: teachers presenting and students responding in class. **Fit:** classroom presentation, live polls, quizzes on a projector, lecture tools.

**Fingerprint** `density=sparse; composition=stage; surface=tonal-blocks; type=grotesque; nav=contextual; accent=high; motion=restrained-causal; imagery=diagram; radius=medium; data=light; tone=clear-lively`

| Layer | Decision |
|---|---|
| Composition | Full-screen stage with one prompt or diagram; results appear on the stage; teacher controls in a separate presenter view (next, reveal, pause, anonymize). |
| Type | Grotesk with large x-height (Work Sans or Atkinson Hyperlegible for body), 64–120px on stage. Arabic: Tajawal or Noto Kufi Arabic for stage titles. |
| Color | canvas #1F2A26 · surface #2A3833 · ink #F4F1E8 · muted #B9C4BD · line #3E4F48 · action #F2C94C · on-action #1F2A26. Chalkboard green-black with chalk-white and one yellow; answer options use four colors plus letters. |
| Space and shape | Stage margins 6%; tonal blocks for options; 12px radius. |
| Icons and imagery | Diagrams and figures sized for projection. |
| Components | Student devices show only answer buttons (large, lettered). Reveal controlled by teacher. |
| States | Waiting for responses with count; anonymous mode; late joiners see the current question. |
| Responsive | Projector 16:9 and 4:3; student phones portrait; presenter view on laptop. |
| Motion | Results bars grow on reveal (400ms) so the room sees the change. Reduced motion: instant. |
| Accessibility | Contrast measured for projectors (wash-out): ink at ≥ 10:1; letters with colors. |
| Build | Presenter and stage views share state via websocket; test at 1024×768. |
| AI mutation | SaaS dashboard during class, tiny text, glassy cards. |
| Fails when | Self-paced learning; dense reference. |

### Phrasebook
**Thesis.** Language is learned in real situations: short exchanges set in real places, with the target script given typographic respect. Character: conversational, curious. Audience: adult language learners. **Fit:** language learning, conversation practice, vocabulary.

**Fingerprint** `density=sparse; composition=conversation; surface=paper-sheet; type=serif-sans-duet; nav=stepwise; accent=medium; motion=physical-direct; imagery=photography; radius=medium; data=light; tone=conversational-curious`

| Layer | Decision |
|---|---|
| Composition | Each session is a scene (a café, a pharmacy) with a photograph, a short dialogue, and exercises embedded in the conversation; review at the end. |
| Type | Target language set in a script-appropriate face at 22–28px (for Arabic: Noto Naskh Arabic with full diacritics; for Japanese: Noto Serif JP), native-language UI in a sans (Source Sans 3). Never letter-space or italicize scripts that do not use it. |
| Color | canvas #F6F1E7 · surface #FFFDF8 · ink #22201B · muted #5C564B · line #DCD3C1 · action #1E5B6B · on-action #FFFFFF. Feedback: correct teal, near-miss amber with the difference highlighted. |
| Space and shape | 8px base; dialogue lines as quiet blocks, 10px radius; tap targets 48px. |
| Icons and imagery | Real-place photography (licensed), audio waveforms for listening. |
| Components | Play audio (slow/normal), record and compare, type with on-screen keyboard for other scripts, word tap for gloss. |
| States | Microphone denied offers typing; near-miss shows the exact letter or sound; review due count. |
| Responsive | Phone first; tablet side-by-side dialogue and exercise; desktop keyboard shortcuts. |
| Motion | Tapped words expand gloss in place (150ms); recorded waveform draws live. Reduced motion: static. |
| Accessibility | Transcripts for audio, adjustable speed, RTL layout for RTL target languages within LTR UI handled per element. |
| Build | Per-script typography tokens (`--font-target`, `--size-target`); test diacritics and line-height. |
| AI mutation | Streak flames and guilt copy, cartoon owls, one Latin font for all scripts. |
| Fails when | Test prep or academic grammar reference (use Syllabus Spine or Seminar Reader). |

### Crayon Hub
**Thesis.** For young children, the interface is a place to point at: big friendly shapes, spoken instructions, and no reading required to move around. Character: warm, playful, calm. Audience: children 3–8, with parents behind a gate. **Fit:** early learning apps, children's activity hubs.

**Fingerprint** `density=sparse; composition=hub; surface=heavy-outline; type=rounded-sans; nav=hub-and-spoke; accent=multi-role; motion=event-celebration; imagery=illustration; radius=high; data=none; tone=warm-playful`

| Layer | Decision |
|---|---|
| Composition | Hub of 4–6 large illustrated activity doors; each activity full-screen with a visible home button; parent area behind a hold-to-open or math gate. |
| Type | Rounded, simple letterforms (Andika or Sniglet for titles; Andika body 22px+); letters taught use school-style forms. Arabic: a school-style Naskh (Noto Naskh Arabic) with diacritics. |
| Color | canvas #FFF7E8 · surface #FFFFFF · ink #2B2118 · muted #5E5041 · line #2B2118 · action #B23A1F · on-action #FFFFFF. Each activity has its own color role with an illustrated icon; no reliance on color to navigate. |
| Space and shape | 3px outlines, 24px radii, targets ≥ 64px, 24px spacing between targets. |
| Icons and imagery | Friendly illustrations drawn for the subject; one character at most as guide. |
| Components | Audio instruction button on every screen; drag with generous snap; no text input. |
| States | Needs help: replay instruction then demonstrate; completed: short praise; time limit set by parent ends gently. |
| Responsive | Tablet landscape first; phone with larger scaling; no desktop assumptions. |
| Motion | Celebration after completion (under 1.5s), gentle idle movement on the current target only. Reduced motion: static stars. |
| Accessibility | Audio for all instructions, captions for parents, no flashing, no ads or purchases in child areas. |
| Build | All child-facing strings have audio; parent gate on external links and settings. |
| AI mutation | Neon gradients, dense menus, small text, reward coins everywhere. |
| Fails when | Older learners; any reading-heavy content. |

### Exam Hall
**Thesis.** A test screen must be calm and fair: one question, saved answers, visible time, and nothing else competing for attention. Character: calm, neutral. Audience: test-takers under pressure; proctors. **Fit:** assessments, certification exams, graded quizzes.

**Fingerprint** `density=medium; composition=stepwise; surface=flat-bordered; type=institutional-sans; nav=stepwise; accent=low; motion=none; imagery=none; radius=low; data=light; tone=calm-neutral`

| Layer | Decision |
|---|---|
| Composition | Header: exam name, time remaining (text), question n of N, save status. Center: question and answers. Footer: previous, flag, next. Question navigator panel lists answered, flagged, unanswered. |
| Type | Institutional sans (Public Sans or Atkinson Hyperlegible 18px). Arabic: Noto Sans Arabic 19px. |
| Color | canvas #F5F5F2 · surface #FFFFFF · ink #1A1A1A · muted #545454 · line #CFCFC9 · action #1F4E79 · on-action #FFFFFF. No red until time is under 5 minutes, and even then with text. |
| Space and shape | 8px base; answer options 56px rows with full-row click targets; 4px radius. |
| Icons and imagery | Question figures only, with zoom. |
| Components | Radio or checkbox answers with visible selection; flag for review; review screen before submit listing unanswered questions. Submit confirmation states it is final. |
| States | Answer saved indicator per question; connection lost keeps answers locally and says so; time extension accommodations reflected in the timer. |
| Responsive | Desktop and tablet; phone allowed only if the exam permits, with navigator as a sheet. |
| Motion | None; timer updates without animation. |
| Accessibility | Screen-reader tested, zoom to 200% without horizontal scroll, extra-time settings. |
| Build | Autosave every answer change; server time authoritative. |
| AI mutation | Animated countdown rings, gradients, confetti on submit. |
| Fails when | Practice and learning contexts where feedback should be immediate. |

### Study Deck
**Thesis.** Memory practice is a deck of cards: one card, a decisive flip, and an honest self-rating, repeated on schedule. Cards are the literal object here. Character: focused, brisk. Audience: students and self-learners using spaced repetition. **Fit:** flashcards, spaced repetition, quick review tools.

**Fingerprint** `density=sparse; composition=stage; surface=elevated-cards; type=grotesque; nav=tab-bar; accent=medium; motion=physical-direct; imagery=user-content; radius=medium; data=light; tone=focused-brisk`

| Layer | Decision |
|---|---|
| Composition | One card centered at readable width; rating buttons below after flip; deck list and stats as other tabs. |
| Type | Grotesk (Hanken Grotesk or Manrope 22–28px on cards), content fonts for math and scripts. Arabic: IBM Plex Sans Arabic. |
| Color | canvas #EDEFF1 · surface #FFFFFF · ink #17191C · muted #525862 · line #CDD2D8 · action #1D5B4F · on-action #FFFFFF. Ratings: Again, Hard, Good, Easy in text with next-interval hints. |
| Space and shape | Card 12px radius with a real shadow (it is an object); 4:3 max card ratio; buttons 48px. |
| Icons and imagery | Learner-supplied images and audio on cards. |
| Components | Space to flip, 1–4 to rate; undo last rating; edit card inline. |
| States | "Done for today" with next due time; overdue backlog capped with an honest count. |
| Responsive | Phone full-width cards with bottom rating bar; desktop keyboard-first. |
| Motion | Card flips (250ms 3D rotate) because the metaphor is physical; next card slides in. Reduced motion: crossfade. |
| Accessibility | Keyboard complete; audio cards have text alternatives. |
| Build | Scheduling algorithm separate from UI; ratings logged with time. |
| AI mutation | Gamified XP bars, streak guilt, glass cards. |
| Fails when | Conceptual learning needing explanation. |

### Seminar Reader
**Thesis.** Higher learning happens in the margins: a reading with layered annotations and discussion anchored to passages. Character: scholarly, open. Audience: university students and instructors. **Fit:** course readings, social annotation, seminar discussion, academic publishing platforms.

**Fingerprint** `density=medium; composition=split-pane; surface=paper-sheet; type=editorial-serif; nav=contextual; accent=multi-role; motion=none; imagery=user-content; radius=square; data=light; tone=scholarly-open`

| Layer | Decision |
|---|---|
| Composition | Reading on the left at 66ch; annotation and discussion column right, aligned to highlighted passages; layer toggles (mine, group, instructor). |
| Type | Editorial serif (Spectral or Crimson Pro 18px) for readings, sans for annotations (Source Sans 3). Arabic: Amiri. |
| Color | canvas #ECE9E1 · surface #FDFCF8 · ink #211F1B · muted #5B574F · line #D5CFC2 · action #6B2D3A · on-action #FFFFFF. Annotation layers: instructor oxblood, group ochre, mine blue; highlights at 25% with underline. |
| Space and shape | Square pages; annotations with 1px left rule. |
| Icons and imagery | Figures in readings; avatars in discussion. |
| Components | Highlight and comment; reply threads; instructor pins; export notes. |
| States | Anonymous mode; due-by for discussion; orphaned annotations after text edits flagged. |
| Responsive | Desktop split; tablet annotations as overlay; phone reading with annotation markers. |
| Motion | None. |
| Accessibility | Annotations reachable in reading order; highlight colors with underline patterns. |
| Build | Robust text anchoring; PDF and HTML sources. |
| AI mutation | Cards for readings, gradient headers, emoji reactions dominating. |
| Fails when | Short practice tasks; children. |

### Mastery Grid
**Thesis.** Teachers and tutors need a diagnostic instrument: learners by skills, showing who needs help with what, today. Character: diagnostic, kind. Audience: teachers, tutors, parents. **Fit:** teacher dashboards, tutoring insights, learning analytics.

**Fingerprint** `density=dense; composition=instrument-grid; surface=flat-bordered; type=technical-sans; nav=persistent-sidebar; accent=multi-role; motion=none; imagery=data-graphic; radius=low; data=strong; tone=diagnostic-kind`

| Layer | Decision |
|---|---|
| Composition | Sidebar of classes; grid of students (rows) by skills (columns) with mastery cells; right panel for a selected student with suggested next assignment. |
| Type | Technical sans (IBM Plex Sans 13–14px), tabular numbers. Arabic: IBM Plex Sans Arabic. |
| Color | canvas #F6F7F5 · surface #FFFFFF · ink #1A1D1C · muted #535957 · line #D3D8D5 · action #2A5C45 · on-action #FFFFFF. Mastery scale: sequential single-hue with text labels (Not started, Practicing, Mastered). |
| Space and shape | 32px cells, 1px grid, 4px radius panels. |
| Icons and imagery | Data graphics only. |
| Components | Group students by need; assign practice to a group; message parents. |
| States | Insufficient data shown as hatched, never as failure; absent students noted. |
| Responsive | Desktop; tablet horizontal scroll with pinned names; phone per-student view. |
| Motion | None. |
| Accessibility | Cells have text values; grid keyboard navigable. |
| Build | Privacy: student names never in URLs; export respects permissions. |
| AI mutation | KPI cards for class averages, leaderboard of students, red cells shaming. |
| Fails when | Learner-facing screens. |

### Session Room
**Thesis.** Tutoring is two people and one shared problem: video small, the shared workspace large, and time and notes visible. Character: personal, focused. Audience: tutors and students in live sessions. **Fit:** live tutoring, coaching sessions, office hours.

**Fingerprint** `density=medium; composition=split-pane; surface=layered-panels; type=humanist-sans; nav=contextual; accent=medium; motion=restrained-causal; imagery=user-content; radius=medium; data=light; tone=personal-focused`

| Layer | Decision |
|---|---|
| Composition | Whiteboard or document large left; video tiles small right with notes and session timer; controls bottom. |
| Type | Humanist sans (Figtree 15px). Arabic: Noto Sans Arabic. |
| Color | canvas #EEF1F2 · surface #FFFFFF · ink #1B2023 · muted #515A60 · line #CBD3D8 · action #255F85 · on-action #FFFFFF. Each participant's pen color assigned with name label. |
| Space and shape | 8px radius panels; floating control bar 12px radius. |
| Icons and imagery | Video and shared content. |
| Components | Mute, camera, share screen, pen, end session (confirm), notes auto-saved and shared after. |
| States | Connection weak indicator per participant; reconnecting preserves board; session ending in 5 minutes notice. |
| Responsive | Desktop and tablet (pen input); phone view-only board with video. |
| Motion | Panels resize 200ms; no ambient. |
| Accessibility | Live captions, keyboard controls. |
| Build | Board state CRDT; notes persisted continuously. |
| AI mutation | Video tiles huge, gradients, gamification in a paid session. |
| Fails when | Asynchronous courses. |

### Credential Track
**Thesis.** Professional upskilling is a career path: concrete outcomes, real practitioners, and a credential that means something, laid out as a route with milestones. Character: ambitious, grounded. Audience: working adults seeking certification. **Fit:** certification platforms, bootcamps, professional courses.

**Fingerprint** `density=medium; composition=path; surface=tonal-blocks; type=grotesque; nav=top-bar; accent=medium; motion=event-celebration; imagery=photography; radius=medium; data=moderate; tone=ambitious-grounded`

| Layer | Decision |
|---|---|
| Composition | Top bar; program page shows the path of courses with hours, projects, and assessments; learner home shows current milestone and weekly plan. |
| Type | Grotesk (Schibsted Grotesk or Work Sans), 36/22/16/13px. Arabic: IBM Plex Sans Arabic. |
| Color | canvas #F4F2EE · surface #FFFFFF · ink #1C1B19 · muted #57544F · line #D9D4CB · action #1F4D3E · on-action #FFFFFF. |
| Space and shape | Milestone blocks on tonal bands, 10px radius; 8px base. |
| Icons and imagery | Photographs of instructors and real work contexts (not stock handshakes); project screenshots. |
| Components | Weekly plan with time estimates; project submission with rubric; certificate with verifiable link. |
| States | Behind schedule plan adjusts honestly; failed assessment shows retake policy; certificate verification page public. |
| Responsive | Desktop path horizontal; phone vertical path with current milestone expanded. |
| Motion | Milestone completion marks the path (300ms) and offers sharing once. Reduced motion: static. |
| Accessibility | Transcripts, keyboard-complete assessments. |
| Build | Credentials issued with verification IDs; program structure as data. |
| AI mutation | Salary-claim hero stats, stock photos, fake testimonials. |
| Fails when | Children or casual hobby learning. |

## Confusable pairs

- **Syllabus Spine vs Credential Track:** both structured programs. The Spine indexes an institution's course; the Track sells and guides a career outcome.
- **Chalk and Slate vs Study Deck:** both sparse stages. The Slate is one screen for a whole room; the Deck is one card for one learner.
- **Seminar Reader vs Session Room:** both split panes. The Reader is asynchronous annotation; the Room is live collaboration.
