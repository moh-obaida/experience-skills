# Niche Atlas: AI Products

Products whose core behavior is produced by a model: assistants, agents, generated media, AI search
and writing. The generated default for this niche is itself generated: violet-to-blue gradients, a
glowing orb, glass cards, sparkle icons, and "Unlock the power of AI." Reject the assumption that
an AI product must look like that. The real design problems are provenance, uncertainty, control,
long-running work, reversibility, and cost. Load with `niche-atlas-index.md`; compare three systems
with `design-system-selector.md`.

## Product realities

### Assistants and agents
- **Reality:** Users delegate a request in natural language and must judge an answer whose quality varies; agents may take actions with consequences.
- **Jobs:** Ask, refine, verify, copy or apply the result, approve an action, stop a run, return to an earlier conversation.
- **Density:** Medium; long answers, sparse empty state.
- **Surfaces:** Conversation, history, settings and memory, attachments, tool approvals, shared links.
- **States:** Streaming, stopped, error mid-answer, refused, rate-limited, tool awaiting approval, tool failed, context too long, edited prompt branch.
- **Interaction:** Typing and voice; keyboard send; frequent copy; mobile use.
- **Trust:** High and uneven: answers can be wrong while sounding right; actions can be irreversible.
- **Generated-UI failures:** Glowing orb as the empty state; suggestion chips of generic prompts; gradient send button; no visible difference between model output and user text.

### AI workspaces and research agents
- **Reality:** Users combine documents, data, and model runs into longer projects; research agents gather sources over minutes.
- **Jobs:** Set a research question, watch progress, inspect sources, verify claims, export a report, rerun with changes.
- **Density:** Dense.
- **Surfaces:** Workspace, source library, report, run progress, citations, notebook or canvas.
- **States:** Queued, researching (long), partial result, source unreachable, conflicting sources, stale report.
- **Interaction:** Reading and cross-checking; side-by-side.
- **Trust:** Very high; citations must be real and checkable.
- **Generated-UI failures:** Sources hidden behind a hover; animated "thinking" orbs for ten minutes; summaries without links.

### Coding agents
- **Reality:** An agent edits a real repository; the developer's job becomes specifying, supervising, and reviewing.
- **Jobs:** Describe the task, watch the plan, approve commands, review diffs, run tests, accept or revert.
- **Density:** Dense.
- **Surfaces:** Task input, plan, activity log, diff review, terminal output, test results.
- **States:** Planning, editing, waiting for approval, running tests, failed tests, conflicting changes, interrupted.
- **Interaction:** Keyboard, diff navigation, approvals.
- **Trust:** Very high; code changes ship.
- **Generated-UI failures:** Chat bubbles for diffs, sparkle "AI edits" badges, hiding the exact commands run.

### Generative media
- **Reality:** Users iterate on images, video, audio, or 3D through prompts and parameters; output volume is high and selection is the real work.
- **Jobs:** Generate variations, compare, select, refine, upscale or edit, organize, export with rights information.
- **Density:** Variable; grids of outputs.
- **Surfaces:** Prompt and parameters, generation grid, detail and edit view, collections, history.
- **States:** Queued, generating with progress, failed, blocked by policy, low credits, variation lineage.
- **Interaction:** Visual comparison, keyboard culling, drag to collections.
- **Trust:** Moderate; rights and provenance matter commercially.
- **Generated-UI failures:** Chrome louder than the outputs; neon accent competing with the artwork; hiding the prompt and seed that produced an image.

### Automation agents
- **Reality:** Agents act on schedules or triggers across tools with limited supervision.
- **Jobs:** Define scope and permissions, review what the agent did, approve risky steps, undo, pause.
- **Density:** Dense logs.
- **Surfaces:** Agent configuration, permissions, run log, approvals inbox, results.
- **States:** Idle, running, awaiting approval, failed, exceeded budget, revoked access.
- **Interaction:** Review and approve; notifications.
- **Trust:** Very high.
- **Generated-UI failures:** Anthropomorphic avatars with moods; vague "working on it" statuses; no record of actions taken.

### AI search
- **Reality:** Users want an answer and the evidence behind it quickly, then often a follow-up.
- **Jobs:** Ask, skim the answer, open sources, follow up, compare.
- **Density:** Medium.
- **Surfaces:** Query, answer with citations, sources list, follow-ups, history.
- **States:** Streaming, no good sources, conflicting sources, outdated information.
- **Interaction:** Quick queries, mobile, keyboard launcher.
- **Trust:** High.
- **Generated-UI failures:** Answer cards with gradient borders; citations as tiny numbers with no titles.

### AI writing
- **Reality:** Writers keep authorship; AI suggests, rewrites, or checks, and must be easy to reject.
- **Jobs:** Draft, revise a passage, accept or reject suggestions, keep voice consistent, track what changed.
- **Density:** Sparse to medium.
- **Surfaces:** Editor, suggestion margin, version history, style settings.
- **States:** Suggestion pending, accepted, rejected, stale suggestion after edits.
- **Interaction:** Keyboard writing; selection-based actions.
- **Trust:** Moderate; voice and accuracy.
- **Generated-UI failures:** Sparkle buttons everywhere, rewrite popovers covering text, purple highlight on AI text.

### AI learning
- **Reality:** A tutor model adapts explanations; learners need structure and honest feedback, not just chat.
- **Jobs:** Understand a concept, practice, get feedback, see progress, ask a follow-up.
- **Density:** Sparse to medium.
- **Surfaces:** Lesson, tutor dialogue, practice, progress.
- **States:** Misconception detected, stuck, mastered, off-topic question.
- **Interaction:** Typing, voice, drawing on tablets.
- **Trust:** High for correctness; young learners need safety.
- **Generated-UI failures:** A chat box as the entire product; mascot orbs; streak pressure.

## Systems

### Plain Transcript
**Thesis.** An assistant is a conversation record: the user's words and the model's answer are typographically distinct, and answers read like well-set documents. Character: candid, warm, unshowy. Audience: general assistant users. **Fit:** assistants, chat-based agents, support assistants.

**Fingerprint** `density=medium; composition=conversation; surface=paper-sheet; type=serif-sans-duet; nav=rail; accent=low; motion=restrained-causal; imagery=none; radius=medium; data=light; tone=candid-warm`

| Layer | Decision |
|---|---|
| Composition | Narrow rail of conversations; transcript at 72ch; user turns right-aligned in a quiet tinted block, answers full-measure on the page with no bubble. Composer anchored bottom with attachments and model/mode in text. |
| Type | Answers in a reading serif (Source Serif 4, 17px/1.6) so long answers read as documents; user text and UI in a humanist sans (Source Sans 3). Code in IBM Plex Mono. Arabic: Noto Naskh Arabic answers, Noto Sans Arabic UI; direction per message. |
| Color | canvas #F4F1EA · surface #FBF9F4 · ink #24211C · muted #5F5A51 · line #DAD3C6 · action #8C3D1F · on-action #FFFFFF. No gradients; clay accent on send and links only. |
| Space and shape | 8px base; turns 32px apart; composer 12px radius; user blocks 10px radius. |
| Icons and imagery | None. The empty state is the composer with a single line about what the assistant can access. |
| Components | Stop button replaces send while streaming; copy, retry, edit-and-branch per turn; tool calls rendered as collapsible rows with name, inputs, result. |
| States | Streaming shows text as it arrives, not a spinner; stopped answers labelled; refusal states say what can be done instead; tool approval inline with exact action and scope. |
| Responsive | Desktop rail + transcript; tablet rail hidden behind a button; phone full-width with composer above keyboard and rail as a sheet. |
| Motion | Text streams; caret marks the live end. Nothing pulses. Reduced motion: stream by paragraph. |
| Accessibility | Each turn is an article with author label; live region announces completion, not every token. |
| Build | `--measure:72ch; --turn-gap:32px`. Render markdown with the same type tokens as documents; test 5,000-word answers and tables. |
| AI mutation | Glowing orb empty state, violet gradients, glass composer, sparkle icons, generic prompt chips. |
| Fails when | The product is primarily a tool UI with occasional AI help (put AI into the tool, don't make it a chat). |

### Evidence Desk
**Thesis.** A research answer is only as good as its sources; claims and evidence sit side by side like a scholar's desk. Character: scholarly, careful. Audience: professionals researching with AI. **Fit:** research agents, AI search for professionals, due diligence and analysis tools.

**Fingerprint** `density=dense; composition=split-pane; surface=flat-ruled; type=editorial-serif; nav=top-bar; accent=low; motion=none; imagery=none; radius=square; data=moderate; tone=scholarly`

| Layer | Decision |
|---|---|
| Composition | Left: the report with numbered claims; right: sources pane showing the quoted passage for the selected claim, with title, publisher, date, link. Top bar: question, scope, run status. |
| Type | Editorial serif for report (Newsreader 17px), serif small caps avoided; sans (Public Sans) for UI and source metadata. Arabic: Amiri or Noto Naskh Arabic for report. |
| Color | canvas #FFFFFF · surface #F5F4EF · ink #1A1A17 · muted #57564F · line #DDDBD2 · action #1E4D6B · on-action #FFFFFF. Claim support states: supported (ink underline), weak (dotted), contradicted (red text label). |
| Space and shape | 8px base; ruled sections; square panes; quote passages set as indented blocks with source bar. |
| Icons and imagery | Publisher favicons only in source list. |
| Components | Clicking a claim scrolls the source pane; "Open source" is a real link; export to document with citations. Rerun with changed scope. |
| States | Long research shows a step log (queries run, pages read) with elapsed time and cancel; unreachable sources listed; conflicting sources presented together. |
| Responsive | Desktop split; tablet sources as a drawer; phone claims with expandable source quotes inline. |
| Motion | None; progress by text updates. |
| Accessibility | Citation links have descriptive names; source pane announced on change. |
| Build | Keep claim-to-passage mapping as data; never render a citation without a resolvable URL. |
| AI mutation | Summary card with gradient border, citations as unlabeled superscripts, "AI-powered insights" header. |
| Fails when | Casual quick answers (use Plain Transcript) or creative tasks. |

### Agent Run Log
**Thesis.** An autonomous agent is accountable through its log: every step, tool, input, output, and cost in order, with the ability to stop and undo. Character: accountable, sober. Audience: people supervising automation agents. **Fit:** automation agents, background agents, agent operations.

**Fingerprint** `density=dense; composition=timeline; surface=flat-bordered; type=technical-sans; nav=persistent-sidebar; accent=multi-role; motion=restrained-causal; imagery=none; radius=low; data=strong; tone=accountable`

| Layer | Decision |
|---|---|
| Composition | Sidebar of agents and approval inbox; main area a run timeline: step rows (thought summary, tool, target, result, duration, cost) with expandable inputs/outputs; header with scope, permissions, budget. |
| Type | Technical sans (IBM Plex Sans 14px), mono for payloads. Fallback system stacks. |
| Color | canvas #F1F3F2 · surface #FFFFFF · ink #161A19 · muted #4F5654 · line #C8CFCC · action #1C5B4A · on-action #FFFFFF. Roles: read-only step neutral, write step amber outline, external send blue outline, failed red. |
| Space and shape | Rows 44px; 4px radius; 1px borders; left edge color per step kind. |
| Icons and imagery | Tool logos; no avatars or personas. |
| Components | Approve/deny with the exact change previewed; Pause and Stop always visible; Undo per reversible step. |
| States | Awaiting approval blocks with reason and timeout; budget exceeded pauses with summary; revoked access marks affected agents. Empty inbox: "No approvals waiting". |
| Responsive | Desktop full; phone approvals inbox with previews and approve/deny, run logs readable. |
| Motion | New step rows append with a 120ms fade; auto-scroll only if the user is at the end. Reduced motion: none. |
| Accessibility | Steps as a list with status text; approvals keyboard-operable. |
| Build | Log is append-only data; UI renders from it. Costs and durations tabular. |
| AI mutation | Agent avatars with emotions, "thinking" orbs, progress percentages invented by the UI. |
| Fails when | Single-turn assistance; users who never supervise. |

### Diff Court
**Thesis.** When a coding agent works, the developer is the judge: every change is evidence to accept or reject, shown as diffs with the commands and tests that justify them. Character: skeptical, precise. Audience: developers using coding agents. **Fit:** coding agents, AI code review, agent pull-request tools.

**Fingerprint** `density=dense; composition=master-detail; surface=layered-panels; type=mono-led; nav=command-palette; accent=multi-role; motion=none; imagery=none; radius=square; data=strong; tone=skeptical-precise`

| Layer | Decision |
|---|---|
| Composition | Left: task and plan with file list; right: diff for selected file; bottom: command and test output. Header: branch, status, tests summary. |
| Type | Mono throughout the work areas (JetBrains Mono 13px), sans for prose summaries (IBM Plex Sans). |
| Color | canvas #FAFAF7 · surface #FFFFFF · ink #161616 · muted #555550 · line #D5D5CE · action #24513A · on-action #FFFFFF. Diff roles: additions green tint with +, deletions red tint with −, agent-authored vs human-edited marked by a text badge. |
| Space and shape | 20px diff lines; square panes; 1px separators. |
| Icons and imagery | None. |
| Components | Accept file, reject file, comment on line (becomes an instruction), rerun tests; keyboard: n/p next/previous hunk. Primary action: "Apply changes" only after review state. |
| States | Failed tests pinned above diff; commands awaiting approval show the exact command and working directory; interrupted runs resumable. |
| Responsive | Desktop only for review; phone shows status and test summary with approve-later. |
| Motion | None. |
| Accessibility | Diff readable by screen readers with added/removed announced; keyboard hunk navigation. |
| Build | Reuse the platform's diff engine; never re-render code through markdown. |
| AI mutation | Chat bubbles containing diffs, sparkle badges, gradient "Magic apply" buttons. |
| Fails when | Non-developers; tasks without code artifacts. |

### Contact Sheet
**Thesis.** Generation is abundant; selection is the craft. Outputs are laid out like a photographer's contact sheet on a neutral dark ground where the work supplies all color. Character: studio-neutral, attentive. Audience: designers and artists generating media. **Fit:** image, video, audio, and 3D generation tools.

**Fingerprint** `density=variable; composition=catalog-grid; surface=full-bleed; type=grotesque; nav=contextual; accent=none; motion=physical-direct; imagery=artwork; radius=low; data=light; tone=studio-neutral`

| Layer | Decision |
|---|---|
| Composition | Prompt and parameters docked at the bottom or left; generations as a dense grid grouped by run with the prompt shown per group; detail view fills the screen with lineage (parent, variations). |
| Type | Neutral grotesk (Hanken Grotesk or Geist 13–14px), prompts in mono when showing exact seeds. |
| Color | canvas #141414 · surface #1E1E1E · ink #EDEDED · muted #A3A3A3 · line #2E2E2E · action #EDEDED · on-action #141414. No accent hue: color belongs to outputs; selection uses a white 2px outline. |
| Space and shape | 4px gutters between outputs; 2px radius thumbnails; panels flat. |
| Icons and imagery | The outputs; interface icons monochrome 16px. |
| Components | Keyboard culling (1–5 rating, X reject), compare two side by side, collections by drag. Metadata panel: prompt, seed, model, parameters, rights. |
| States | Generating tiles show progress fraction in text over a neutral placeholder of the right aspect ratio; policy blocks explain which part of the prompt; low credits before submit, not after. |
| Responsive | Desktop grid; tablet grid with parameter sheet; phone single column feed of runs with prompt editing. |
| Motion | Thumbnails open to detail with a 200ms zoom from their grid position. Reduced motion: crossfade. |
| Accessibility | Outputs have generated alt text marked as generated; keyboard rating announced. |
| Build | Store and display lineage as data; aspect-ratio boxes prevent layout shift. |
| AI mutation | Neon gradients in chrome, glowing generate button, glass panels over the art. |
| Fails when | Text-first products; users who need guided templates rather than open generation. |

### Margin Editor
**Thesis.** The writer owns the page; AI speaks in the margin like an editor's pencil, and every suggestion can be refused without friction. Character: literate, restrained. Audience: writers and professionals drafting text. **Fit:** AI writing tools, editing assistants, docs with AI revision.

**Fingerprint** `density=sparse; composition=document; surface=paper-sheet; type=editorial-serif; nav=contextual; accent=low; motion=restrained-causal; imagery=none; radius=square; data=none; tone=literate-restrained`

| Layer | Decision |
|---|---|
| Composition | Centered manuscript at 66ch; right margin holds suggestions aligned to their passages; a slim top bar with document title, word count, and history. |
| Type | Editorial serif for manuscript (Literata or Spectral 19px/1.65); margin notes in sans (Source Sans 3, 14px). Arabic: Amiri or Noto Naskh Arabic. |
| Color | canvas #EFECE5 · surface #FFFEFA · ink #1F1D1A · muted #5C5850 · line #D8D2C6 · action #3B4F7A · on-action #FFFFFF. Suggestions use an ink-blue underline; no purple AI highlight. |
| Space and shape | Generous margins (96px desktop); square sheet; suggestion notes 1px left rule. |
| Icons and imagery | None. |
| Components | Select text → actions (tighten, clarify, check facts) as a small text menu; suggestions show before/after with Accept, Reject, and "Explain". Accept all only per category. |
| States | Stale suggestions (text changed since) marked and dismissible; history shows AI-accepted edits distinctly. Empty document is a blank page with a cursor, not prompts. |
| Responsive | Desktop margin notes; tablet notes as footnote markers; phone notes in a bottom sheet. |
| Motion | Accepted change highlights for 600ms then fades. Reduced motion: no fade. |
| Accessibility | Suggestions announced with context; keyboard accept/reject. |
| Build | Suggestions anchored to text ranges that survive edits (use a CRDT or robust anchors). |
| AI mutation | Sparkle buttons in the toolbar, rewrite popovers covering text, purple AI highlighting. |
| Fails when | Structured documents or data; users who want generation from scratch (Plain Transcript). |

### Workbench Canvas
**Thesis.** An AI workspace is a shared table where documents, data, and agent runs sit as movable objects the team arranges and reuses. Character: collaborative, capable. Audience: teams doing analysis and knowledge work with AI. **Fit:** AI workspaces, notebooks, collaborative research spaces.

**Fingerprint** `density=variable; composition=canvas-perimeter; surface=tonal-blocks; type=humanist-sans; nav=persistent-sidebar; accent=medium; motion=physical-direct; imagery=user-content; radius=medium; data=moderate; tone=collaborative`

| Layer | Decision |
|---|---|
| Composition | Sidebar of workspaces and sources; canvas or long notebook of blocks (doc, table, chart, agent run); each block shows its inputs and when it last ran. |
| Type | Humanist sans (Figtree 15px) with mono for formulas and prompts. Arabic: Noto Sans Arabic. |
| Color | canvas #EEF1EC · surface #FFFFFF · ink #1D221E · muted #525B54 · line #C9D1CA · action #2B5F4B · on-action #FFFFFF. Block types tinted subtly (doc paper, data cool, agent warm) with labels. |
| Space and shape | 8px base; blocks 8px radius on tonal backgrounds; 16px block gaps. |
| Icons and imagery | User content, charts from data. |
| Components | Rerun block, see dependencies, pin a result, share view. Presence cursors for collaborators. |
| States | Stale dependent blocks marked when an input changes; failed runs keep last good output with warning; empty workspace offers importing a source. |
| Responsive | Desktop canvas; tablet notebook mode; phone reading and commenting. |
| Motion | Dragged blocks follow pointer; dependency lines draw briefly on hover. Reduced motion: static lines. |
| Accessibility | Notebook order is the accessible order; canvas positions are secondary. |
| Build | Blocks as data with explicit dependencies; recompute staleness deterministically. |
| AI mutation | Glass blocks, glowing dependency lines, an AI orb floating in the corner. |
| Fails when | Single-purpose tasks; solo quick questions. |

### Tutor Path
**Thesis.** An AI tutor should feel like a patient teacher following a syllabus: structured steps with a dialogue at each step, never an empty chat box. Character: patient, curious. Audience: learners from teenage to adult. **Fit:** AI learning products, tutoring, practice coaches.

**Fingerprint** `density=sparse; composition=path; surface=tonal-blocks; type=rounded-sans; nav=stepwise; accent=medium; motion=event-celebration; imagery=diagram; radius=high; data=light; tone=patient-curious`

| Layer | Decision |
|---|---|
| Composition | A path of concepts across the top; the current step shows a short explanation, a diagram or problem, and the tutor dialogue beneath with answer input. |
| Type | Rounded humanist (Nunito or Lexend 17px) for readability; math via proper rendering. Arabic: Tajawal or Noto Sans Arabic. |
| Color | canvas #FDF8EF · surface #FFFFFF · ink #26231E · muted #625C52 · line #E6DCCB · action #1F5E6E · on-action #FFFFFF. Feedback: correct teal with check, misconception amber with explanation. |
| Space and shape | 8px base; 16px radius blocks; generous 24px padding; controls 44px. |
| Icons and imagery | Concept diagrams; a small tutor identity mark at most, no animated orb. |
| Components | Answer input first, "I'm stuck" second; tutor asks questions back; step unlocks on demonstrated understanding. |
| States | Misconception detected → targeted explanation; repeated failure → worked example; off-topic → gentle redirect. |
| Responsive | Same single column; tablet supports handwriting input for math. |
| Motion | Step completion: path segment fills (300ms). Reduced motion: static. |
| Accessibility | Math accessible (MathML), dialogue as a log, adjustable text size. |
| Build | Tutor responses constrained by lesson objectives stored as data. |
| AI mutation | A chat box as the whole product, mascot orb, streak flames. |
| Fails when | Reference lookup; expert users. |

### Launcher Overlay
**Thesis.** AI search that lives on top of the user's current context should be a precise translucent overlay: the context stays visible, the answer is brief, and the next action is one key away. Character: quick, assured. Audience: people invoking AI from inside other work. **Fit:** AI launchers, in-app AI search, command-bar assistants.

**Fingerprint** `density=sparse; composition=command-first; surface=translucent-overlay; type=grotesque; nav=command-palette; accent=low; motion=restrained-causal; imagery=none; radius=medium; data=light; tone=quick-assured`

| Layer | Decision |
|---|---|
| Composition | A 640px overlay near the top third: input, a short answer, then actions (insert, copy, open full). Results for files and commands mixed with the answer. |
| Type | Grotesk (Geist or Hanken Grotesk 15px), mono for commands. |
| Color | canvas #F7F7F5 · surface #FFFFFF · ink #161616 · muted #56565A · line #D9D9DB · action #20456B · on-action #FFFFFF. The overlay surface is white at 92% with a 20px backdrop blur and a 1px line; text always sits on ≥ 92% opacity. |
| Space and shape | 12px radius overlay, 8px radius result rows; 48px input. |
| Icons and imagery | Result type glyphs only. |
| Components | Enter to accept, Tab to cycle actions, Esc to close; "Open in full view" hands off to Plain Transcript. |
| States | Streaming answer inline; no-context state tells what it can read; error keeps the input. |
| Responsive | Desktop overlay; phone full-screen sheet with the same order. |
| Motion | Overlay appears 120ms scale 0.98→1; no glow. Reduced motion: opacity only. |
| Accessibility | Dialog role with focus trap; results listbox; blur fallback to solid surface when `prefers-reduced-transparency`. |
| Build | `backdrop-filter` only on this overlay; justified because context preservation is the job. |
| AI mutation | Glass everywhere else too, glowing edges, rainbow borders while "thinking". |
| Fails when | Long answers or multi-step work (hand off to a full view). |

### Briefing Column
**Thesis.** AI briefings and news-style search results read like a well-edited column: headline answer, dated facts, and sources with images when the source has them. Character: editorial, brisk. Audience: people catching up on topics. **Fit:** AI search for general audiences, daily briefings, digest products.

**Fingerprint** `density=medium; composition=stream; surface=flat-ruled; type=high-contrast-display; nav=top-bar; accent=low; motion=none; imagery=photography; radius=square; data=light; tone=editorial-brisk`

| Layer | Decision |
|---|---|
| Composition | Top bar with topics; a single column of briefs, each a headline answer, 3–5 dated points, and a sources row with publisher names and thumbnails. |
| Type | High-contrast display serif for headlines (Fraunces or DM Serif Display 28px), body sans (Public Sans 16px). Arabic: Noto Naskh Arabic headlines with Noto Sans Arabic body. |
| Color | canvas #FFFFFF · surface #F6F4F0 · ink #151412 · muted #595650 · line #E0DCD4 · action #9B2C1F · on-action #FFFFFF. |
| Space and shape | Ruled briefs 40px apart; square images from sources with credit. |
| Icons and imagery | Source photography with attribution; no generated illustrations. |
| Components | Follow topic, ask follow-up inline, open source. |
| States | "Developing" label with timestamp; corrections noted in the brief. |
| Responsive | Single column everywhere; images scale. |
| Motion | None. |
| Accessibility | Headlines as headings; dates machine-readable. |
| Build | Every point links to a source; timestamps from sources, not generation time. |
| AI mutation | Cards with gradient borders, generated hero images, "AI insights" sparkles. |
| Fails when | Deep research needing evidence panes (Evidence Desk). |

## Confusable pairs

- **Plain Transcript vs Margin Editor:** both text-first. The Transcript is the model's answer in a conversation; the Editor is the user's own text with the model in the margin.
- **Agent Run Log vs Diff Court:** both supervise agents. The Log audits actions across tools; the Court judges code changes.
- **Evidence Desk vs Briefing Column:** both cite sources. The Desk supports verification side by side; the Column supports fast catching up.
