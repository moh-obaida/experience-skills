# Terminology and Cognitive Load

Load when users misunderstand names, juggle too much, or hit mode errors.

Sections: Terminology · Cognitive Load

## Terminology

Words are the most-used part of any interface. Terminology friction is invisible to the team
(who know what everything means) and constant for users.

### Common problems

| Problem | Example |
|---|---|
| Internal jargon | "Artifacts," "entities," "workflows," "instances" for users who think in "quizzes" and "classes" |
| Synonyms for one concept | "Members," "Users," "Collaborators," "People" meaning the same thing |
| One word, several meanings | "Project" meaning a folder in one place and a billing unit in another |
| Vague labels | "Manage," "Settings," "More," "Options" hiding important features |
| Brand-speak | Feature names that describe nothing ("Smart Hub") |
| Technical status | "Status: 202" or "Job state: PENDING_DISPATCH" |
| Mismatched verbs | Button says "Publish," dialog says "Share," toast says "Made public" |

### Method

1. **Build a glossary** from the UI: every noun and verb used for core concepts and actions,
   where it appears.
2. **Find collisions:** synonyms and homonyms.
3. **Check against users' language:** support tickets, search queries, domain vocabulary, the
   words users use when describing tasks.
4. **Choose one term per concept,** preferring the users' word.
5. **Apply everywhere:** navigation, headings, buttons, dialogs, notifications, emails, docs,
   error messages, URLs where visible.

### Localization

Terminology decisions multiply across languages. Maintain the glossary for translators, and avoid
idioms and wordplay in core labels.

### Output

```
Concept: a saved set of questions
Used: "Quiz" (library), "Set" (host flow), "Deck" (import), "Game" (share dialog)
Users say: "quiz" (support tickets 38/40)
Decision: "Quiz" everywhere; "Game" only for a live hosted session
```

## Cognitive Load

Cognitive load is the mental effort a product demands. Some is intrinsic to the task (planning a
budget is hard). Much is imposed by the design and can be removed.

### Sources of imposed load

- **Memory:** remembering information from a previous screen (codes, IDs, earlier choices).
- **Choice overload:** many options presented at once without defaults or grouping.
- **Hidden state and modes:** behavior that depends on invisible modes.
- **Translation:** mapping the product's terms to the user's terms.
- **Inconsistency:** the same thing behaving differently in different places.
- **Ambiguous status:** not knowing whether something worked, is pending, or failed.
- **Visual noise:** decoration competing with content.
- **Interruption:** modals, tours, and banners breaking concentration.

### Repairs

| Load | Repair |
|---|---|
| Memory | Show information where it is needed; carry it forward; copy buttons |
| Choice overload | Defaults, grouping, progressive disclosure, recommendations |
| Modes | Remove modes; make the current mode visible; prefer quasi-modes |
| Translation | Use users' vocabulary |
| Inconsistency | One behavior per concept |
| Status ambiguity | Clear state feedback (state-design) |
| Noise | Remove decoration without a job (anti-slop-ui) |
| Interruption | Inline guidance; defer non-urgent messages |

### Modes in particular

A mode changes what the same input does (edit mode vs view mode, host mode vs player mode).
Mode errors are among the most common and frustrating slips. Ask: can the mode be removed
(edit in place)? If not, is it unmistakably visible, and is it hard to act in the wrong mode?

### Measuring

Without lab studies, use proxies: number of decisions per task, number of things to remember across
screens, number of modes, number of distinct terms for core concepts.
