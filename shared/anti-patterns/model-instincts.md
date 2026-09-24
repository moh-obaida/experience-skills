# Model Instincts

Language models trained on large amounts of design writing and interface code develop
predictable reflexes. Each reflex below pairs an observation with a conclusion that *feels*
automatic. None of these conclusions is automatically valid.

Use this list as a self-check before stating a judgment or making a change.

| The agent sees | The agent tends to assume | Ask instead |
|---|---|---|
| Whitespace | "Premium, elegant, breathing room" | Is the space framing something, or is there simply nothing designed there? What fraction of the viewport has a role? |
| A gradient | "Modern" | What does the gradient communicate? Light, depth, brand, state? Would a flat color lose anything? |
| Cards | "Organized" | Are these independent, comparable objects? Or is a card standing in for real hierarchy? |
| Pills and chips | "Friendly, modern" | Are these filters, tags, or removable tokens? Or labels and buttons wearing a costume? |
| A dashboard request | "Four metric cards across the top" | Which numbers change the user's next action? What changed, why, and what needs attention? |
| An empty page | "Add an illustration, some tips, a stat or two" | What is the useful next action? What real context exists? |
| A simple input | "Make it special: segmented boxes, animated label, custom keypad" | Does custom behavior help? Would a normal input in a stronger environment be better? |
| A request for motion | "Fade and slide everything in" | Which events deserve motion, and what should each one explain? |
| The user is excited | "Great idea!" | Does the idea serve the goal better than the alternatives? What does it cost? |
| A redesign request | "Make it bolder and more modern" | What is actually wrong now? Which specific decisions will fix it? |
| A centered layout | "Balanced" | Is it composed or merely aligned? Where is the focal point? |
| Dark mode with neon accents | "Sleek developer aesthetic" | Does this identity come from the product or from a trend? |
| Glassmorphism | "Depth" | Is there real content behind the glass? What layer relationship does it express? |
| A large hero | "Impactful" | Does the hero tell the user what this is and what to do? Or push the task below the fold? |
| Many features | "Powerful" | Which features are frequent? Which crowd the common path? |
| Uppercase microtype above headings | "Polished, editorial" | Is there a typographic system that needs section labels, or is it an eyebrow on every heading? |
| Emoji or icons on every item | "Scannable, friendly" | Do the icons disambiguate, or are they decoration repeating the label? |
| A long explanation | "Helpful" | Would a better default remove the need to explain? |
| A confirmation dialog | "Safe" | Is the action irreversible or costly? Would undo be safer and faster? |
| A multi-step wizard | "Guided, easy" | Would a single page with the few needed fields be faster? |
| Its own previous output | "Looks good, done" | Did I render it? Did I check other states and sizes? What would a critical reviewer say? |

## Behavioral reflexes

- **Opening with praise.** "Great question!" or "This looks clean and modern" before any analysis.
- **Agreeing then hedging.** Agreeing with a weak proposal and burying concerns in a final bullet.
- **Adding rather than removing.** Solving every problem with another element.
- **Symmetric feedback.** Forcing three positives and three negatives regardless of the actual ratio.
- **Vocabulary inflation.** "Elevate," "seamless," "delightful," "cutting-edge" in place of specifics.
- **Declaring success from code.** Writing CSS and reporting the layout fixed without rendering it.

## The replacement habit

Before any evaluative adjective, produce the evidence:

- Not "clean," but "three elements, clear primary action, 62% of the viewport unused."
- Not "modern," but "uses a violet-to-blue gradient on the hero and all buttons."
- Not "great idea," but "this removes two steps for returning users; the cost is that first-time
  users lose the language picker, which they rarely change."

Then decide whether the adjective still applies.
