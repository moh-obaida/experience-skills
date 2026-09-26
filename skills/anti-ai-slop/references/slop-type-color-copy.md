# Slop Taxonomy: Typography, Color, Copy, and Icons

Load when the sweep finds typographic, color, copy, or icon slop. Identity keys match
`slop-surfaces.md`: operational, editorial, playful, material, technical, immersive, institutional,
object. Replace within the current identity; do not switch fonts or palettes gratuitously.

## Typography slop

- **Detect:**
  - Inter, Geist, Plus Jakarta Sans, Poppins, or DM Sans everywhere with no scale or reason.
  - Geometric sans chosen because "modern"; random display font in one section.
  - 64–96px centered hero headings on products whose job is operational.
  - Gradient text; tiny uppercase letter-spaced eyebrows above every heading.
  - Weak grey body text (below 4.5:1); body under 15px for long text.
  - Everything semibold; every heading bold; hierarchy identical across unrelated products.
  - Monospace added because the product is "technical"; serif added because "premium".
  - More than three families; fake editorial (serif headings with no editorial structure).
  - Arbitrary tracking (negative on body, positive on Arabic); sentence-cased slogan taglines.
- **Source signatures:** `text-5xl md:text-7xl font-bold tracking-tight`, `text-xs uppercase
  tracking-widest text-gray-500`, `font-semibold` on most elements, `text-gray-400` body on white.
- **Ask:** what is the ledger's type voice? Does the scale follow content roles (display, heading,
  body, label, data)?
- **Keep when:** a chosen face is used consistently with a scale; a mono face serves real code or
  data; a serif serves real reading.
- **Trace:** font loading, root font-family, heading components, utility repetition.
- **Replace with:** keep the ledger's families and fix the scale (fewer sizes, clear steps, weight
  used for one level) · size headings by page archetype (operational 24–32px, marketing up to 56px
  only when the headline carries the page) · remove eyebrows or turn them into real labels ·
  raise body contrast and size · data in tabular figures (operational, technical) · a reading
  serif only where long reading exists (editorial).

## Color slop

- **Detect:** default indigo SaaS; purple AI palette; cyan-on-dark developer default; black and neon
  green "hacker"; warm beige "premium" with no product reason; pastel everywhere because "friendly";
  accent proliferation (five accents, none meaning anything); ten neutrals with no roles; color used
  to fill emptiness.
- **Source signatures:** library default hexes (see identity-extraction fingerprints),
  `text-indigo-600`, `bg-violet-500`, many `bg-*-50` tinted sections, hard-coded hexes scattered
  in components.
- **Ask:** what roles exist (canvas, surface, ink, muted, line, action, semantic states)? Which color
  in the ledger is intentional (logo, photography, brand guide)?
- **Keep when:** a color is the brand's and used with a role; saturated palettes serve a playful or
  immersive identity coherently.
- **Trace:** theme tokens, Tailwind config, hard-coded values in components.
- **Replace with:** a role-based token set derived from the ledger's intentional colors · one accent
  with a job (action), semantic colors only for states · tints tied to content categories with
  labels (operational) · color from photography or objects (object, material) · contrast computed,
  not estimated.

## Copy slop

- **Detect (judge context; no hard blacklist):** "Elevate your…", "Unlock…", "Seamlessly…",
  "Empower…", "Everything you need…", "Supercharge…", "Take your X to the next level", "Your journey
  starts here", "Built for modern teams", "Powerful, simple, intuitive", "Experience the future
  of…", "Transform the way you…", "Welcome to your personalized…", "Your private space", generic CTA
  pairs "Get Started / Learn More", feature names like "Smart Insights" and "Seamless Sync".
- **Source signatures:** strings in hero, feature, and empty-state components; placeholder copy left
  from templates; the anti-slop-ui scanner's generic-copy rule.
- **Ask:** could a competitor use this sentence unchanged? Does it say what the product does, for
  whom, with a checkable fact?
- **Keep when:** a phrase is the product's established voice and specific in context.
- **Trace:** content files, CMS entries, component defaults, i18n files.
- **Replace with:** the product's actual job in the user's words (use `references/_shared/product-copy.md`)
  · a specific, true fact (numbers only if real) · CTA labels naming the outcome ("Book a session",
  "Copy install command") · empty and error states that say what happened and what to do.

## Icon slop

- **Detect:** Sparkles, Zap, Wand, Rocket, generic Shield, generic chart, Globe; decorative
  checkmarks; a Lucide icon before every heading; icons in colored rounded squares in feature
  lists; icons added to fill empty containers.
- **Source signatures:** `import { Sparkles, Zap, Rocket, Shield } from 'lucide-react'`; `<div
  className="rounded-lg bg-indigo-100 p-2"><Icon/></div>` patterns.
- **Ask:** does the icon label an action, type, or status faster than text alone?
- **Keep when:** navigation, actions, file and object types, statuses with text, a product-specific
  icon set.
- **Trace:** feature list components, heading components, empty-state components.
- **Replace with:** remove repeated decorative icons · use real thumbnails or product objects ·
  typographic lists with numbers or rules (editorial) · a small product-specific icon set drawn from
  the domain (playful, material) · status glyph plus label (operational).
