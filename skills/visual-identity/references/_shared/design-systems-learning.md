<!-- GENERATED FROM shared/design-intelligence/design-systems-learning.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Design Systems: Learning and Knowledge

Authored starting systems. They differ in how learners progress, not merely in color. Use conventional controls and prove learning benefit before inventing an interaction.

## Measured Play

**Thesis.** Delight should reward understanding, while the next learning action remains obvious. Fits children's learning and practice; avoid high-stakes financial tasks.

| Layer | Contract |
|---|---|
| Composition | Prompt, response, feedback, next step in one stage. Desktop has context rail; tablet/mobile keep one task per viewport and progress visible. |
| Type | Rounded humanist sans for prompts, neutral sans for answers, tabular score/time; 32/22/17/14px. Test early-reader and Arabic letterforms. |
| Color | Classroom Ink: `#F7F7F1` canvas, `#FFFFFF` surface, `#202B31` ink, `#4E5B61` secondary, `#B6C3C5` line, `#265A80` action. Answer colors always have symbols/text. |
| Geometry | 4px unit; 12px answer internals, 24px question rhythm, 40px stage changes; 10px controls, 12px panels, visible borders. |
| Components/nav | Large answer buttons, one clear submit/next action, familiar progress. Navigation distinguishes lesson map from current exercise. |
| States/motion | Correct, misconception, retry, hint, paused, complete, and offline explicit. Short result motion tied to answer; reduced motion shows static feedback immediately. |
| Image/icon/copy | Diagrams or character only when explaining concepts. Icons have labels. Feedback says why, not only “Great job!” |
| Failure/anti-imitation | Confetti after every tap makes success meaningless. Do not copy a game platform's character/score vocabulary. |

## Paper Circuit

**Thesis.** Explanations become clearer when annotated diagrams and text share a reading rhythm. Fits technical learning; unsuitable for rapid checkout.

| Layer | Contract |
|---|---|
| Composition | Concept text beside diagram and runnable example. Desktop two-column, tablet stacked with sticky concept heading, mobile text → diagram → exercise. |
| Type | System serif for explanation, technical sans for UI, mono code/data; 32/22/17/13px, 65–75 character measure. Mixed scripts need code isolation. |
| Color | Paper/Graphite: `#FAF8F2` canvas, `#FFFFFF` surface, `#242824` ink, `#596158` secondary, `#C4C9BF` line, `#275465` action. Diagram colors semantic and labeled. |
| Geometry | 4px unit; 12px annotation gaps, 24px concept blocks, 48px chapters; 4px controls, plain paper-like regions, almost no shadow. |
| Components/nav | Expandable annotation, standard code editor with run/reset, linked table of contents. Keep example output and source visually distinct. |
| States/motion | Running, syntax error, expected result, partial result, and no connection distinct. Diagram transitions follow user step; reduced motion swaps directly. |
| Image/icon/copy | Schematics/hand-drawn-looking only if precise; no decorative circuitry. Copy names concepts and failure causes. |
| Failure/anti-imitation | Decorative diagrams that cannot be read at mobile width fail the system. Do not copy a specific documentation site's code frame. |

## Lesson Trail

**Thesis.** Progress should be a navigable map of skills rather than a forced streak. Fits courses and onboarding; wrong for operational monitoring.

| Layer | Contract |
|---|---|
| Composition | Current lesson and nearby prerequisites first; desktop path + lesson detail, tablet/mobile path condensed to current/next with full map accessible. |
| Type | Humanist sans headings/body, mono only for course codes; 30/21/16/13px with generous instructional line-height. |
| Color | Olive/Cream: `#F7F5EB` canvas, `#FFFFFF` surface, `#273028` ink, `#59645A` secondary, `#C2CBBF` line, `#3E5C3F` action. Progress uses text and shape. |
| Geometry | 4px unit, 12px lesson rows, 24px unit groups, 44px module transitions; 7px controls, 8px panels, subtle borders. |
| Components/nav | Continue is primary; prerequisites are explicit, lessons accessible from map/list. Progress indicator never blocks navigation without a learning reason. |
| States/motion | Not started, in progress, mastered, review due, skipped, and unavailable distinct. Milestone transition brief; reduced motion static. |
| Image/icon/copy | Diagrams/tasks over mascot art; icons indicate content type. Copy states what learner can do after a lesson. |
| Failure/anti-imitation | Candy-colored nodes and arbitrary streaks obscure actual competence. Do not mimic an existing course game's path. |

## Living Diagram

**Thesis.** Understanding grows by manipulating a model and observing consequences. Fits science and simulation; wrong for legal records.

| Layer | Contract |
|---|---|
| Composition | Model canvas, parameter controls, explanation/result. Desktop canvas + controls, tablet controls below, mobile one parameter group at a time with result always visible. |
| Type | Technical sans UI, humanist sans explanation, tabular mono values; 28/20/16/13px. Numbers/units must remain legible under zoom. |
| Color | Cool Ink: `#F3F7F7` canvas, `#FFFFFF` surface, `#1E2D2F` ink, `#53656A` secondary, `#BDCBCD` line, `#1E5B68` action. Simulation variables use redundant labels/patterns. |
| Geometry | 4px unit; 8px parameter interiors, 20px control groups, 36px stages; 5px controls, 6px panels, no decorative depth. |
| Components/nav | Familiar sliders only for continuous values, fields for precision, reset/compare controls, accessible table equivalent to graph. |
| States/motion | Running, paused, invalid parameter, comparison baseline, and reset clearly shown. Motion is the model itself; reduced motion provides step frames or static result. |
| Image/icon/copy | Diagram is content. Icons name operations; text explains cause and effect rather than promoting novelty. |
| Failure/anti-imitation | A flashy animation with no values or accessible alternative becomes a toy. Do not copy a simulation site's color encoding. |

## Workshop Bench

**Thesis.** Learning by making needs visible drafts and a safe iteration loop. Fits creative education and tutorials; not passive reading.

| Layer | Contract |
|---|---|
| Composition | Task brief, workspace, feedback/checklist. Desktop work canvas with compact brief rail; tablet collapsible brief; mobile step-focused editor. |
| Type | Humanist sans body, technical sans controls, mono for measurements/code; 30/21/16/13px. Instructions remain readable beside canvas. |
| Color | Clay/Graphite: `#F7F3EC` canvas, `#FFFFFF` surface, `#272B27` ink, `#5A645A` secondary, `#C3CBBF` line, `#5A4C32` action. Feedback statuses separate. |
| Geometry | 4px unit, 12px tool groups, 24px task blocks, 40px module transitions; 5px controls, 8px panes, raised surface only for movable tools. |
| Components/nav | Save/preview/submit hierarchy, visible version history, undo, inline tips tied to the current object. Navigation preserves draft and return position. |
| States/motion | Draft, saved, evaluating, needs revision, complete, and lost connection explicit. Short preview transitions, no animation on every keystroke. |
| Image/icon/copy | User work primary; example images labeled as examples. Tool icons paired with names; feedback identifies a next revision. |
| Failure/anti-imitation | Polished showcase thumbnails can hide the actual work surface. Do not copy a creative app's sidebar layout. |

## Commons Notebook

**Thesis.** Shared knowledge should feel trustworthy and revisable. Fits community learning; not luxury commerce.

| Layer | Contract |
|---|---|
| Composition | Topic, answer/source, discussion, revision history. Desktop reading column plus context rail; mobile content first with sources and discussion clearly reachable. |
| Type | Readable serif for long explanation, humanist sans UI, mono for version IDs; 31/21/17/13px, 65–75 character measure. |
| Color | Ivory/Forest: `#FAF8F1` canvas, `#FFFFFF` surface, `#232B25` ink, `#58645B` secondary, `#C3CABE` line, `#285943` action. Contributor roles not color-only. |
| Geometry | 4px unit; 12px note internals, 24px topic groups, 44px section breaks; 4px controls, rules over cards. |
| Components/nav | Search, citations, edit proposal, history comparison, and moderator actions are distinct. Discussion rows preserve chronology and author context. |
| States/motion | Draft, reviewed, disputed, superseded, locked, and missing source explicit. Minimal motion on revision compare; reduced motion static. |
| Image/icon/copy | Evidence diagrams and source images with credits; icons sparse. Copy names confidence and attribution. |
| Failure/anti-imitation | Fake community avatars and counts make knowledge look fabricated. Do not imitate an encyclopedia's exact page furniture. |
