<!-- GENERATED FROM examples/anti-slop/identity-preserving-repair.md. DO NOT EDIT DIRECTLY. Edit the source and run `npm run sync`. -->

# Worked Example: Identity-Preserving Repair

*Invented teaching example. The studio, its site, and all values are fictional.*

**Archetype:** marketing → TRANSACTIONAL · **Product types:** local workshops, studios, class booking
**Skills:** anti-ai-slop, interface-forensics, visual-identity

## Context

A small ceramics studio's booking site was generated from a prompt, then partly customized by the
owner. The owner says it "looks like every AI site" and wants it fixed without losing what they
added.

## The bad version

- Hero: "✨ Unlock your creativity" badge, 88px centered headline "Elevate your craft journey",
  two buttons "Get Started" / "Learn More", purple-to-blue glow blobs behind a glass card showing a
  fake booking widget.
- Three feature cards with Lucide `Sparkles`, `Zap`, `Heart` icons in violet squares: "Seamless
  booking," "Expert guidance," "Community vibes."
- Every container `rounded-3xl shadow-xl`, sections fade up on scroll, cards lift on hover.
- The class list is below the fold as a bento grid of mixed-size cards without dates.

**What the owner added:** a terracotta wordmark (`#B4532A`) with a hand-cut clay texture; Fraunces
headings on the About page; their own photographs of hands at the wheel and a kiln opening, whose
warm orange-to-ochre glow they used as a thin band under the header on every page.

## The typical wrong review

"Remove the gradients, use a neutral palette, switch to a clean sans, put everything in a simple
grid." That deletes the owner's kiln band and wordmark character along with the slop, and still
leaves a generic page.

## The correct analysis

**Identity ledger (excerpt).** Palette: terracotta in the logo and three links (intentional), violet
in buttons and blobs (Tailwind `violet-500`/`indigo-600` defaults). Type: Fraunces on About
(intentional), Inter everywhere else (default). Imagery: owner's photographs (intentional), glass
widget mockup (generated). Gradient: kiln band from the owner's photo (intentional); purple glow
(default). Niche: physical-world booking (Studio Timetable profile): jobs are seeing what is on,
seats left, and booking.

**Identity statement.** A ceramics studio selling limited, dated workshops. Identity lives in
terracotta, the kiln-glow band, Fraunces, and real photographs of the studio. Replacements keep and
extend those and remove the violet, glass, and template stack.

| Finding | Class | Severity | Source | Replacement |
|---|---|---|---|---|
| Hero stack with glow blobs, glass mockup, generic copy | hero, decorative, glass, copy | S0 | `Hero.tsx`, `Background.tsx` | Photo of the kiln opening full width with the kiln band; headline "Wheel-throwing and glazing classes in Leith, up to 8 people"; next three sessions with seats left and Book |
| Violet buttons and links | color | S1 | theme `primary` token | Terracotta action role, contrast-checked for white labels |
| Feature cards with sparkle icons | card, icon, copy | S1 | `Features.tsx` | Removed; replaced by "What you'll make" with photographs from past sessions |
| Class bento without dates | bento, structure | S1 | `Classes.tsx` | Dated timetable list: session, date, time, price, seats left, Book |
| `rounded-3xl shadow-xl` everywhere | radius, shadow | S2 | `Card` defaults | Radius 4px controls, 0px photos, no shadows; separation by paper tone |
| Fade-up on every section; hover lift | motion | S2 | `Reveal.tsx` wrapper | Removed; booking confirmation only |
| Inter everywhere | typography | S2 | root font | Fraunces for headings site-wide (already the owner's choice), Source Sans 3 body |

**Kept on purpose:** the kiln-glow band (encodes the studio's defining moment and comes from its
own photograph), the wordmark, Fraunces, the photographs. The band is used once per page, as it was.

## The better version

The first viewport shows the kiln photograph, a specific headline, and the next three sessions with
seats left. The timetable follows. Terracotta marks actions and links; photographs replace every
icon. The page no longer looks like the generator's other outputs, and it looks more like the
studio than before.

## Measurements

- Before: violet default in 14 elements; 23 elements at `rounded-3xl`; 9 fade-up wrappers; first
  bookable session 1.8 viewports down at 1366×768.
- After: 0 violet; radius values 0/4px; 0 scroll reveals; first bookable session in the first
  viewport at 1366×768 and 390×844.

## Why it works

Each change either removed a default that belonged to no one or extended a carrier the owner had
already chosen. The replacement answered "what would this studio do?" rather than applying a house
style.

## When the lesson does not apply

If the purple glow had been the brand (for example a night-sky observatory's established identity),
it would be protected and strengthened. If the owner had added nothing, identity would come from the
product and niche, and visual-identity would set a direction first.

## Universal analogues

A SaaS with one real brand color buried under default indigo; a game site whose world art is hidden
behind a generic hero; a news site whose serif masthead is the only thing not from a template.

## Verification

Before/after renders at 1366×768 and 390×844 for home, timetable, and an empty "no sessions this
week" state; `extract-identity.mjs` counts before/after; twenty-sites and weirdness tests answered;
contrast of white on terracotta computed.

## Failure conditions

Deleting the kiln band because it is a gradient; replacing Inter with a trendy face the owner never
chose; swapping violet for another default accent.
