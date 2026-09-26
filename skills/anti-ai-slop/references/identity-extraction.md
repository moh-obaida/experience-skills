# Identity Extraction

Load at workflow steps 2–3, before any finding. The current product is the starting constraint.
The output is an identity ledger, a protected list, and a one-paragraph identity statement that
every replacement is checked against.

## 1. Gather evidence (in this order)

1. **Rendered pages** at desktop and phone, including one sparse and one dense state. Look before
   reading code: what does a visitor notice first, second, third?
2. **Tokens and theme sources:** CSS custom properties, `tailwind.config.*` or `@theme` blocks,
   design-token JSON, theme providers (MUI, Chakra, Mantine, Ant), font loading (`next/font`,
   `@font-face`, font `<link>` tags).
3. **Brand assets:** logo, wordmark, photography, illustration, existing brand guidelines. Brand
   guidelines outrank everything in this skill.
4. **Copy voice:** headings, button labels, empty and error messages, product names for things.
5. **Optional census:** `node scripts/extract-identity.mjs <src> --json` for counts of fonts, colors,
   radii, shadows, blur, gradients, motion, library-default matches, and slop stacks.

## 2. Fill the ledger

Record observed values, where they occur, and whether each looks intentional or default.

| Dimension | Record | Intent question |
|---|---|---|
| Composition | dominant layouts per route (hero types, grids, lists, splits) | Do layouts differ by route job, or is one template repeated? |
| Typography | families, sizes, weights, case, tracking, measure | Was the face chosen (loaded deliberately, used with a scale) or inherited? |
| Palette | canvas, surfaces, ink, accents, semantic colors, gradients | Do colors have roles, or are they decorations spread evenly? |
| Spacing | base unit, section rhythm, density | Is there a rhythm that changes with content, or uniform padding? |
| Border | widths, colors, where used | Do borders separate meaningfully, or box everything? |
| Radius | values by element type | Does radius differ by element kind, or is one value on everything? |
| Surfaces | flat, layered, cards, glass, textures | Does elevation mean something? |
| Icons | library, style, sizes, where used | Do icons label actions and types, or decorate headings? |
| Imagery | photography, illustration, product shots, generated art | Is it the product's own, or stock/generic/generated filler? |
| Motion | what moves, when, duration, easing | Does motion follow events, or play on load and scroll everywhere? |
| Density | information per viewport on key routes | Does it match the niche's density (see niche atlas)? |
| Tone | copy voice, formality, humor | Specific and checkable, or interchangeable? |
| Interaction character | control styles, hover/press, keyboard, custom widgets | Familiar controls with personality in the environment, or decorated controls? |

## 3. Separate intent from default

| Signals of intent (protect) | Signals of default (candidate slop) |
|---|---|
| Consistent across routes, including sparse and error states | Appears only in the hero or marketing sections |
| Custom tokens or values that deviate from any library default | Exact library or framework default values (table below) |
| Derived from the product's domain, content, mechanic, or audience | Could be pasted onto an unrelated product unchanged |
| Used with a system (scale, roles, rules) | Used once, or everywhere without variation |
| Appears in brand assets or guidelines | Contradicts brand assets (for example a purple glow beside a terracotta logo) |
| Users or the team name it as characteristic | Nobody can say why it is there |

A default is not automatically slop. An internal tool deliberately built on unmodified library
components can be fine; then only fix what harms comprehension or fit (S0/S1), and say so.

## 4. Common default values (fingerprints)

Values at authoring time; verify against the installed version before claiming a match. A match is
a question for the ledger, not a verdict.

| Source | Typical default signature |
|---|---|
| Tailwind CSS v3 palette | indigo-500 `#6366F1`, indigo-600 `#4F46E5`, violet-500 `#8B5CF6`, violet-600 `#7C3AED`, purple-500 `#A855F7`, blue-500 `#3B82F6`, blue-600 `#2563EB`, cyan-400 `#22D3EE`, sky-500 `#0EA5E9`, emerald-500 `#10B981`, gray-500 text `#6B7280`, slate-900 `#0F172A`, zinc-950 `#09090B`, neutral-950 `#0A0A0A`. Tailwind v4 defines the palette in OKLCH; match by class name (`bg-indigo-600`, `from-violet-500`). |
| Tailwind UI-style patterns | primary button `rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm`; hero `text-4xl sm:text-6xl font-bold tracking-tight`; gray-600 body text. |
| shadcn/ui | CSS variables `--background`, `--foreground`, `--primary`, `--muted-foreground`, `--ring`; `--radius` `0.5rem` (older templates) or `0.625rem` (newer); near-black primary on neutral/zinc base; Lucide icons; card `rounded-lg border bg-card shadow-sm` or `rounded-xl border shadow-sm`. |
| Next.js starter | Geist and Geist Mono loaded via `next/font` in the default template. |
| Bootstrap 5 | primary `#0D6EFD`, `--bs-border-radius: .375rem`, system font stack, `.card`, `.btn-primary`. |
| Material Design 3 baseline | primary `#6750A4`, Roboto, shape scale 4/8/12/16/28dp, filled tonal buttons, 20dp pill buttons. |
| MUI (Material UI) v5 | primary `#1976D2`, `borderRadius: 4`, Roboto. |
| Ant Design v5 | `colorPrimary #1677FF`, `borderRadius 6`. |
| Chakra UI v2 | `blue.500 #3182CE`, radii `md .375rem`. |
| Mantine v7 | `blue.6 #228BE6`, small default radius. |
| Generated-site habits | Inter, Plus Jakarta Sans, Poppins, DM Sans, Space Grotesk, or Geist with no scale; `from-purple-500 to-blue-500` or `from-indigo-500 via-purple-500 to-pink-500`; `bg-white/10 backdrop-blur border-white/10`; framer-motion `initial={{opacity:0,y:20}} whileInView`; Lucide `Sparkles`, `Zap`, `Rocket`, `Shield`. |

## 5. Protected list and identity statement

Write the protected list: each item names the characteristic, where it occurs, and why it is
intentional (evidence from sections 2–3). Examples: "terracotta #B4532A in logo, links, and primary
buttons across all routes," "Fraunces headlines with a real scale," "hand-drawn map illustrations
from the brand guide," "dense 36px table rows on the operations screens."

Then write a three-sentence identity statement:

```text
This product is <niche and job>. Its existing identity is carried by <2–4 carriers from the ledger>.
Replacements must <keep/strengthen these> and avoid <what contradicts them>.
```

If the ledger shows nothing intentional (everything matches defaults), say so. Then derive carriers
from the product itself (domain, content, mechanic, audience) and the niche profile, and confirm the
direction with the user if it changes an established look. For a whole new direction, hand off to
visual-identity.

## Failure modes

- Judging before extracting: removing the one gradient that was the brand's signature.
- Extracting from the hero only: the product's identity usually lives in interiors and states.
- Treating a library default as proof of slop without asking whether it harms anything.
- Replacing a weak identity with the agent's favorite style instead of strengthening what exists.
