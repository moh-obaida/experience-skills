# Design Intelligence

Experience Skills includes a library that helps an agent consider genuinely different design
directions and page structures, choose between them for a specific product, and ground the choice
in real precedent. It lives in `shared/design-intelligence/` and `shared/precedent/`, and is vendored
into the skills that use it (mainly visual-identity, composition-repair, and anti-slop-ui).

## What is in it

| Module | Contents |
|---|---|
| `selection.md` | The procedure: understand → classify → constrain → three candidates from different families → compare → select or synthesize → derive → compose → check. Also a "study a reference" protocol. |
| `directions-index.md` + 10 family files | 45 design directions (editorial, structural, quiet, institutional, technical, expressive, atmospheric, material, retro, product-led), each with suits, unsuitable, composition, type, surface, imagery, palette, motion, interaction, accessibility, failure modes, slop risk, precedent, and what not to copy. |
| `compositions-index.md` + 7 family files | 48 compositions (focus, flows, narrative, content, discovery, workspaces, operational, mobile), each with content requirements, focal strategy, viewport and scroll behavior, responsive and RTL behavior, sparse and dense states, failure modes, the bad AI version, and precedent. |
| `palettes.md` | 17 palette families described by role and behavior, with example tokens and **computed** contrast ratios. |
| `typography.md` | Roles, type as geometry, hierarchy, editorial and dense typography, code, multilingual and Arabic/Latin, variable fonts, scaling, long content, example pairings by character. |
| `surfaces-and-shape.md` | Surface logics, named treatments (glass, neumorphism, gradients…) with honest and default uses, elevation, shape language, texture. |
| `imagery-illustration-icons.md` | Art direction, illustration jobs, icon rules, slop signals. |
| `motion-languages.md` | Seven motion languages and transition relationships. |
| `spatial-density-navigation.md` | Density, spatial, and navigation models. |
| `data-visualization.md` | Chart selection by question, with "not when" conditions and accessibility risk. |
| `anti-generic-alternatives.md` | For 17 common defaults: the job they try to do and alternatives from different families, with precedent. |

Precedent modules (`shared/precedent/`, 15 files) interpret dated observations of real products
(`research/observations/`, 167 observations of 64 surfaces, 2026-09-24).

## Why it is not a template engine

- A product category never selects a style. The selection procedure starts from the product's goals,
  audience, and constraints and requires three candidates from *different* families.
- Directions and compositions are separate. Any direction can use many compositions.
- Palettes describe roles and contrast behavior, not "the fintech palette."
- Every entry says where it is wrong, and every precedent says when copying it would fail.
- The final step always derives product-specific decisions (motifs from the product's mechanic or
  content), then checks identity (logo test), slop (gate), and states.

## How anti-slop alternatives work

`anti-slop-ui` detects a default (for example a centered card on flat grey), asks what job it was
trying to do, checks whether it is justified here (the justified-trends precedent), and if not,
generates at least three alternatives from different families using `anti-generic-alternatives.md`,
the composition index, and the direction index. It compares them and chooses by context. Techniques
are never rejected by category; only unjustified defaults are.

## Honest limits

- Precedent comes from public surfaces observed on one date, mostly marketing and public pages. App
  interiors behind sign-in were described from official documentation where possible.
- Some compositions have fewer than ten observed precedents; the files say so rather than padding.
- Motion precedent relies mainly on platform guidance, because motion is hard to observe statically.
