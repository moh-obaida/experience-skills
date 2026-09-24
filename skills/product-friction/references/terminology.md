# Terminology

Words are the most-used part of any interface. Terminology friction is invisible to the team
(who know what everything means) and constant for users.

## Common problems

| Problem | Example |
|---|---|
| Internal jargon | "Artifacts," "entities," "workflows," "instances" for users who think in "quizzes" and "classes" |
| Synonyms for one concept | "Members," "Users," "Collaborators," "People" meaning the same thing |
| One word, several meanings | "Project" meaning a folder in one place and a billing unit in another |
| Vague labels | "Manage," "Settings," "More," "Options" hiding important features |
| Brand-speak | Feature names that describe nothing ("Smart Hub") |
| Technical status | "Status: 202" or "Job state: PENDING_DISPATCH" |
| Mismatched verbs | Button says "Publish," dialog says "Share," toast says "Made public" |

## Method

1. **Build a glossary** from the UI: every noun and verb used for core concepts and actions,
   where it appears.
2. **Find collisions:** synonyms and homonyms.
3. **Check against users' language:** support tickets, search queries, domain vocabulary, the
   words users use when describing tasks.
4. **Choose one term per concept,** preferring the users' word.
5. **Apply everywhere:** navigation, headings, buttons, dialogs, notifications, emails, docs,
   error messages, URLs where visible.

## Localization

Terminology decisions multiply across languages. Maintain the glossary for translators, and avoid
idioms and wordplay in core labels.

## Output

```
Concept: a saved set of questions
Used: "Quiz" (library), "Set" (host flow), "Deck" (import), "Game" (share dialog)
Users say: "quiz" (support tickets 38/40)
Decision: "Quiz" everywhere; "Game" only for a live hosted session
```
