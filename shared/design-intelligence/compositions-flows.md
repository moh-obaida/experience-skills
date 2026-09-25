# Compositions: Flow Family

Surfaces that are steps in a process.

---

## Question per page

| Aspect | Guidance |
|---|---|
| Solves | Complex services where each answer may change what comes next |
| Archetypes | TRANSACTIONAL, public service, applications |
| Content needs | One question (or a tight group) per page, back link, heading, continue |
| Hierarchy / focal | The question as the page heading (label or legend as h1) |
| Viewport | Question and continue button visible without scrolling |
| Responsive | Naturally mobile-friendly |
| Accessibility | Heading once for screen readers; error summary pattern |
| Sparse state | Is sparse by design; fine |
| Fails when | Used with animation, illustration, custom controls, or for trivially short forms |
| Precedent | GOV.UK Design System question pages (UKD1–UKD4), error summary (UKE1, UKE2) |

## Single-page form

| Aspect | Guidance |
|---|---|
| Solves | Short forms with independent fields |
| Content needs | Only fields that are needed; known values prefilled |
| Hierarchy / focal | Form title, fields in one column, one primary action |
| Viewport | The first fields visible; action reachable |
| Responsive | One column everywhere |
| Accessibility | Labels above, error summary, input types |
| Fails when | It grows past what fits comfortably; consider question per page |

## Guided setup

| Aspect | Guidance |
|---|---|
| Solves | First-run configuration with dependencies |
| Content needs | Only decisions that matter now; defaults for the rest |
| Hierarchy / focal | Current step; what it enables next |
| Scroll | Per step |
| Fails when | It asks what the system knows, or blocks value until complete |
| State | Save progress; resume where left off |

## Staged workflow

| Aspect | Guidance |
|---|---|
| Solves | Long work in phases (applications, onboarding, publishing) |
| Content needs | Phase list, current phase, saved state |
| Hierarchy / focal | The current phase with a summary of completed ones |
| Fails when | Phases are artificial splits of one short form |

## Education lesson

| Aspect | Guidance |
|---|---|
| Solves | Learn, practice, get feedback |
| Content needs | The problem as the focal object; answer input; feedback; progress |
| Hierarchy / focal | Content first; chrome minimal during problem-solving |
| Motion | Feedback tied to correct/incorrect events |
| Accessibility | Not color-only feedback; readable at larger sizes |
| Precedent | Brilliant (BR1) |

## Multiplayer waiting room

| Aspect | Guidance |
|---|---|
| Solves | Gathering participants before a live event |
| Content needs | Join code (large, legible at distance), participant list/count, state header, start action for host |
| Hierarchy / focal | Code and count for players; start for host |
| Motion | Arrivals animate; ambient motion slow and pausable |
| Responsive | Projector (1280×720, 1920×1080) and phones |
| Fails when | The code is small; the host cannot see who is ready |
| Precedent | Kahoot (KH1) for the join side |
