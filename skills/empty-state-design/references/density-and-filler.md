# Density and Filler

Load when deciding how much a sparse surface should contain, and to strip filler.

Sections: Density by Archetype for Low-Content States · Useful Density vs Filler

## Density by Archetype for Low-Content States

Sparse is not automatically wrong. The right amount depends on the surface.

| Archetype | Sparse is… | Treatment when content is low |
|---|---|---|
| FOCUSED (join, sign-in, verify) | Often right | Keep the task small; give the environment a role; do not add content |
| OPERATIONAL (home, library, admin) | Usually a problem | Show real state: continue, recent, ready items, needs-attention; quick actions |
| EXPERIENTIAL (game lobby, creative space) | Needs atmosphere | Keep the world alive (environment, ambient cues); show waiting state clearly |
| CONTENT (docs, articles) | Rare | If a section is empty, link to related content; don't show empty sections |
| DATA-HEAVY (analytics) | Common early | Explain when data will appear; show setup status; sample data clearly labeled |
| TRANSACTIONAL (cart, checkout) | Common | Empty cart: continue shopping, recently viewed, saved items |
| DISCOVERY (catalog, search) | Search-empty | Suggestions, popular items, broaden query |
| CREATION (editor) | Blank canvas | Templates, starting points, paste/import; keep chrome calm |
| LIVE CONTROL (host console) | Waiting | State header: "Waiting for players (3 joined)"; share code prominently |

### Sample data

Sample or demo data can help analytics and creation products show their value. Requirements:

- Clearly labeled as sample.
- Easy to remove.
- Never mixed with real data without distinction.
- Never presented as the user's real activity.

## Useful Density vs Filler

When a surface feels empty, the instinct is to add. Add only what carries meaning.

### Useful content for sparse surfaces

- **Continue:** drafts, in-progress setups, paused items.
- **Ready:** items created elsewhere and ready to use here ("Your quiz 'Capitals' is ready to host").
- **Recent:** recently opened or edited items.
- **Needs attention:** items requiring action (reviews, invitations, errors).
- **Starting points:** a small set of relevant templates.
- **Status of prerequisites:** "Connect your class roster to see students here."
- **The next action:** one clear primary button.

### Filler

- Totals and stats that are zero or trivial ("0 games played")
- Tip carousels and "Did you know?" cards
- Promotional banners and upgrade prompts in the empty slot
- Large illustrations that exist only to occupy space
- Duplicate navigation (buttons repeating the sidebar)
- Motivational quotes
- Fake activity feeds

### The test

For each candidate element:

1. Would the user miss it if it were gone?
2. Does it change what they do next?
3. Is it true, current, and specific to this user?
4. Would it still belong when the account is full?

Keep elements that pass. For a worked example of overcorrection, see
`references/_shared/empty-state-overcorrection.md`.

### Composition

Useful content should be composed, not stacked: the primary action and the most relevant real
context near the focal point; secondary content subordinate. If there is truly nothing useful to
show, a small, well-composed empty state inside a designed environment is better than filler.
