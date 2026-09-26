<!-- GENERATED FROM shared/design-intelligence/family-components.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Component Languages by System Family

These recipes express a family's thesis through geometry, density, and hierarchy. They supplement the semantic rules in `design-system-grammar.md`. They are not component templates to paste wholesale. The selected system can override a family rule when its task demands it. Test standard interaction and accessibility before adding character.

## Workspaces

**Priority:** leave room for the work object. One action is prominent within the current object; global utilities recede.

| Component | Characteristic treatment | Failure check |
|---|---|---|
| Primary/secondary/tertiary | Compact filled action, lined secondary, quiet underlined text action; verb names result | A global “Create” competes with an urgent contextual action |
| Input/select/checkbox/radio/switch | 40–44px fields with persistent labels; choices align to the object being edited; switch only for immediate state | Dense mode does not shrink hitboxes below usability |
| Tabs/menu/sidebar | Tabs separate sibling views; sidebar names stable objects; menus hold low-frequency commands | Hidden menu does not swallow the main task |
| Card/list/table | Prefer divided rows and aligned columns; card only for independent instruments or previews | Five cards do not replace one scannable list |
| Modal/toast/badge/progress | Modal for scope/safety, toast for incidental confirmation, badge with text for status; progress names job | Toast cannot be sole record of a consequential save |

## Services

**Priority:** question, answer, consequence, recovery. The user should know who acts next.

| Component | Characteristic treatment | Failure check |
|---|---|---|
| Primary/secondary/tertiary | Clear filled Continue/Submit, plain Back, text link for help | Multiple filled buttons do not imply multiple primary paths |
| Input/select/checkbox/radio/switch | Full labels and examples; radios for a small exclusive set; checkbox for explicit agreement; switches only for immediate settings | Error summary links to the exact field and preserves input |
| Tabs/menu/sidebar | Stage indicator only for real reachable stages; contextual help after main task on mobile | “Progress” does not invent artificial steps |
| Card/list/table | Group questions by meaning, not by decorative panel; tables for comparable dates/amounts | Card nesting does not make a service look longer |
| Modal/toast/badge/progress | Confirmation for high-impact submission, persistent result page, status badge with authority and date | A disappearing toast never carries the only receipt |

## Culture and commerce

**Priority:** content and object truth. Buying, saving, or playing remains legible beside imagery.

| Component | Characteristic treatment | Failure check |
|---|---|---|
| Primary/secondary/tertiary | Purchase/play action clear but not repeated in every section; secondary save/share | The image does not hide price, availability, or play controls |
| Input/select/checkbox/radio/switch | Variant choices show real material/size and stock; fields stay conventional | Color swatch has a text name and availability state |
| Tabs/menu/sidebar | Content sections use editorial anchors or simple tabs; catalog nav follows real categories | Story labels are not disguised as controls |
| Card/list/table | Cards for distinct objects; specs in aligned rows; avoid card around every paragraph | Comparable attributes remain comparable on phone |
| Modal/toast/badge/progress | Image zoom returns focus; cart confirmation identifies chosen variant; stock badge uses text | Modal does not trap the purchase path |

## Learning and knowledge

**Priority:** explain, let the learner act, show why the result occurred.

| Component | Characteristic treatment | Failure check |
|---|---|---|
| Primary/secondary/tertiary | Submit/Check/Continue are distinct; hint and reset remain quiet | Success animation does not obscure explanation |
| Input/select/checkbox/radio/switch | Responses use familiar controls unless manipulation teaches the concept; answer targets remain large | Custom quiz control is keyboard and screen-reader equivalent |
| Tabs/menu/sidebar | Lesson map shows prerequisite/current/next; tabs only for peer explanations | Locked lessons state the reason and route forward |
| Card/list/table | Example and result are adjacent; tables expose precise values behind diagrams | The diagram is not the only way to access data |
| Modal/toast/badge/progress | Feedback persists long enough to read; progress expresses learned capability, not just streak | Badge count never substitutes for mastery evidence |

## Operations and decision tools

**Priority:** status authority, recency, and safe action under pressure.

| Component | Characteristic treatment | Failure check |
|---|---|---|
| Primary/secondary/tertiary | Acknowledge, resolve, and destructive commands have distinct weight and consequence | Dangerous action is never adjacent to common action without separation |
| Input/select/checkbox/radio/switch | Fast filters and measured fields with units; compact visual density without tiny targets | Decimal, timezone, and units cannot be mistaken |
| Tabs/menu/sidebar | Stable object hierarchy and explicit active state; command menus show scope | Live update does not steal focus or close a menu |
| Card/list/table | Dense tables with aligned numbers, sticky headers, timestamps, and row ownership | Priority survives 200% zoom and short laptop height |
| Modal/toast/badge/progress | Confirm irreversible commands; status includes authority and freshness; progress says queued/running/partial/final | A stale success badge is not shown as live truth |
