# Palette Themes: 57 Authored Variations

A theme is a controlled token variation inside a system, not a complete design direction. These are authored starting values, not sampled palettes from products. Choose by light conditions, content imagery, emotional target, and role distinction. Each row gives light canvas/surface/ink/secondary/border/action and dark canvas/surface/ink/action. The action token is a filled control with white text in light mode; dark-mode action uses dark ink. Verify contrast after adapting any value. Use `design-system-grammar.md` for hover, selected, focus, status, and component roles. Do not apply a family to a product merely because of its industry.

**Semantic defaults to adapt, not reuse blindly:** light success `#176B45`, warning `#805600`, danger `#A52631`, information `#225B99`; dark success `#77DBA5`, warning `#FFD17A`, danger `#FF959B`, information `#9BC9FF`. Use status labels/icons too. For charts, reserve at least four non-status hues with distinct line patterns and direct labels; a brand accent cannot double as every series. Dark themes should reduce glare without making secondary text illegible. Image overlays need a tested scrim or solid label surface.

Columns: C canvas, S surface, I primary ink, M secondary ink, B border, A action fill; D is dark canvas/surface/ink/action. Each family paragraph defines the common semantic, chart, and image behavior; the final column names the variant's useful condition and main risk.

## Paper and ink

**Thesis:** reading and record clarity. Keep images true to source; charts use ink plus restrained categorical colors; actions stay quieter than content. Avoid faux-aged texture. Dark variants are reading modes, not automatic inversions.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|
| Ink/Bone | `#F9F7F1` | `#FFFFFF` | `#202821` | `#596158` | `#C4C9BF` | `#1E5143` | `#171D19/#222A25/#F0F2E9/#A9D6B9` | Calm ledger; verify fine rules under glare. |
| Paper/Ink | `#FBFAF5` | `#FFFFFF` | `#202622` | `#536056` | `#B9C5B9` | `#1C5845` | `#181F1A/#252E27/#F3F1E9/#B4D8BB` | Public reading; avoid sterile all-white sections. |
| Paper/Graphite | `#FAF8F2` | `#FFFFFF` | `#242824` | `#596158` | `#C4C9BF` | `#275465` | `#191E20/#262C2E/#F1F1E9/#A9D6E3` | Diagrams with cool annotations; avoid blue-equals-link ambiguity. |
| Ivory/Forest | `#FAF8F1` | `#FFFFFF` | `#232B25` | `#58645B` | `#C3CABE` | `#285943` | `#17211B/#253027/#F0F2E8/#A7D8BA` | Community knowledge; avoid green status confusion. |
| Civic Ivory | `#FAFAF6` | `#FFFFFF` | `#182825` | `#42564F` | `#AAB8AF` | `#174F42` | `#14201D/#202D27/#F3F5EE/#AADBC6` | Service forms; ensure borders remain clear on white. |

## Stone and graphite

**Thesis:** precise neutral work surfaces. Chart hues must carry meaning beyond hue; product screenshots can provide the identity color. Watch muted labels and too many near-identical grays.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|
| Graphite Light | `#F0F1EE` | `#FFFFFF` | `#1B2321` | `#4E5A56` | `#B8C2BD` | `#174B46` | `#151C1B/#222B29/#EDF3EF/#AED9CC` | Operational tools; keep status colors distinct. |
| Restrained Neutral | `#F7F8F6` | `#FFFFFF` | `#202623` | `#56615B` | `#BEC7C0` | `#245442` | `#171D1A/#232B26/#F1F3EF/#ACD6B8` | Daily task list; avoid anonymous gray UI. |
| Cool Stone | `#ECEFEE` | `#FFFFFF` | `#222A2A` | `#596464` | `#BBC5C3` | `#205264` | `#161E20/#232D30/#F0F4F2/#A9D9E8` | Creator workspaces; distinguish selection from action. |
| Slate Work | `#F2F5F6` | `#FFFFFF` | `#202A30` | `#53636B` | `#BCC9CF` | `#244F63` | `#162027/#243039/#EEF4F5/#A9D3E6` | Data tools; avoid blue everywhere. |
| Quarry | `#F2F1ED` | `#FCFCFA` | `#272A27` | `#5A605A` | `#C2C7C0` | `#3F5148` | `#1B201D/#292F29/#F1F0E9/#BCD1BD` | Material-adjacent tools; avoid low-energy hierarchy. |
| Graphite/Ivory | `#F7F7F2` | `#FFFFFF` | `#1B2627` | `#516064` | `#B6C1C2` | `#1C5561` | `#171F20/#263134/#EFF2ED/#A8D9E1` | Evidence records; keep source state separate from action. |
| Stone/Signal | `#F2F2ED` | `#FFFFFF` | `#252B28` | `#56605A` | `#BCC5BD` | `#1E5A4A` | `#191F1D/#29322D/#F1F3EC/#A9DCC1` | Field measurement; caution must not become decoration. |
| Graphite/Amber | `#F3F4F1` | `#FFFFFF` | `#202925` | `#52615A` | `#BCC8BF` | `#1D5A47` | `#171F1C/#26302B/#F0F3ED/#A9DCC1` | Transit operations; amber reserved for delay. |
| Clay/Graphite | `#F7F3EC` | `#FFFFFF` | `#272B27` | `#5A645A` | `#C3CBBF` | `#5A4C32` | `#211E1A/#312D25/#F3EEE4/#DAC79B` | Workshop tools; distinguish feedback colors. |
## Warm earth

**Thesis:** material warmth with factual controls. Charts need a cool counter-hue plus labels. Photography should reflect actual materials; don't overlay text on untested warm images.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|
| Warm Stone | `#F6F3EB` | `#FFFFFF` | `#252924` | `#5A6259` | `#C4CABE` | `#36523D` | `#201E1A/#302D25/#F3EEE4/#BDD5A7` | Casework; warmth must not soften urgent errors. |
| Sand/Olive | `#F6F2E7` | `#FFFFFF` | `#252D26` | `#586154` | `#C3CABA` | `#38533A` | `#201F19/#302E23/#F3F0E4/#C2D6A3` | Field discovery; maps need distinct status colors. |
| Clay/Ink | `#F5F1E9` | `#FFFFFF` | `#292A24` | `#62645A` | `#C9CABF` | `#5E4733` | `#211C19/#302720/#F4ECE2/#E0B997` | Material commerce; action can blend into product photography. |
| Terracotta Desk | `#FBF2EA` | `#FFFFFF` | `#30251F` | `#6A564B` | `#D0C3B8` | `#74452D` | `#251B17/#352720/#F8EBDF/#E3B09A` | Editorial service; avoid orange warning collision. |
| Rust Archive | `#F9F4ED` | `#FFFFFF` | `#302822` | `#67594F` | `#CFC6BA` | `#6B3D2B` | `#231C18/#342720/#F3EBE2/#DCAD95` | Artifacts; keep historical tone out of form errors. |
| Ivory/Charcoal | `#FAF8F2` | `#FFFFFF` | `#262622` | `#5B5A52` | `#C9C7BB` | `#333A2C` | `#1D1E19/#2B2C25/#F2F0E8/#C5D2AD` | Object commerce; imagery carries identity. |
| Warm Editorial | `#FBF7EE` | `#FFFFFF` | `#29231F` | `#645A51` | `#CEC7BD` | `#7A392A` | `#241C19/#352823/#F5EDE5/#E5B5A3` | Publishing; action remains clear beside art. |
## Forest and sage

**Thesis:** rooted calm, not generic wellness green. State success must remain separate from brand/action. Charts combine green with blue, ochre, and patterned lines; nature imagery requires honest sourcing.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|
| Sage Ink | `#F2F5EF` | `#FFFFFF` | `#1F2B25` | `#52645A` | `#BAC8BE` | `#215A4C` | `#17221C/#263329/#F0F4EA/#A9D7BE` | Knowledge relationships; avoid nature clichés. |
| Sage/Cream | `#F7FAF5` | `#FFFFFF` | `#26332D` | `#586A60` | `#C0CEC3` | `#2E5B49` | `#1A241E/#29352C/#F2F5EB/#B7DCC0` | Health readings; label all ranges. |
| Olive/Cream | `#F7F5EB` | `#FFFFFF` | `#273028` | `#59645A` | `#C2CBBF` | `#3E5C3F` | `#1E241A/#303727/#F4F1E7/#C6D7A0` | Learning paths; progress not green alone. |
| Pine Ledger | `#F3F6F1` | `#FFFFFF` | `#1F3028` | `#53675A` | `#BBCABE` | `#1C5640` | `#15221B/#243329/#EFF5ED/#AEDBB8` | Consequential records; avoid success/action conflation. |
| Moss Field | `#F4F4E9` | `#FEFFF8` | `#293126` | `#5F6858` | `#C6CCB8` | `#455A2F` | `#202319/#303526/#F2F3E8/#CBD9A1` | Outdoor service; ensure line visibility in sun. |
| Sage/Clay | `#F8F6EF` | `#FFFFFF` | `#26302A` | `#59675E` | `#C2CABE` | `#356047` | `#1C241E/#2C342A/#F2F1E8/#B5DAB7` | Household coordination; warm accent only for milestones. |
## Ocean and teal

**Thesis:** clarity and orientation across information layers. Charts can use warm contrast and direct labels. Map water must not use the same hue as selection or actions.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|---|
| Cool Ink | `#F3F7F7` | `#FFFFFF` | `#1E2D2F` | `#53656A` | `#BDCBCD` | `#1E5B68` | `#172124/#253237/#EDF4F5/#A8DCE3` | Simulations; avoid turquoise decorative glow. |
| Sea Glass | `#F0F8F7` | `#FFFFFF` | `#20302F` | `#536A67` | `#BED1CD` | `#1D5A57` | `#162323/#243534/#EDF5F2/#A8DAD1` | Service journeys; avoid washed-out borders. |
| Harbor | `#F0F5F6` | `#FFFFFF` | `#1D2A30` | `#52646C` | `#BACBD0` | `#1A5268` | `#142129/#22333B/#EEF4F5/#A6D5E6` | Navigation-heavy apps; distinguish links from data. |
| Tide Ledger | `#F4F8F8` | `#FFFFFF` | `#223033` | `#59676A` | `#C1CFD0` | `#205762` | `#182428/#273439/#EEF5F4/#ADD9DE` | Financial records; don't let coolness imply false safety. |
| Deep Estuary | `#F2F6F3` | `#FFFFFF` | `#20312E` | `#55665F` | `#BFCDC5` | `#21574B` | `#15221F/#25352D/#EEF4EF/#AED8BD` | Field knowledge; imagery should carry place detail. |

## Blue and cobalt

**Thesis:** information authority with controlled interactive accents. Blue link/action/status distinctions must be explicit; charts use other hues for additional series. Avoid making every surface institutional by default.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|
| Civic Navy | `#F4F7FA` | `#FFFFFF` | `#1E2937` | `#506171` | `#BAC8D5` | `#204E78` | `#151D29/#243143/#EFF4F8/#A8CDF0` | Public information; links need underline or strong cue. |
| Cobalt Work | `#F4F6FC` | `#FFFFFF` | `#1F293B` | `#55647B` | `#C2CBE0` | `#254B86` | `#151D31/#25334D/#F0F3FA/#AFC7EF` | Dense planning; avoid primary-blue saturation. |
| Blueprint | `#F1F6FA` | `#FFFFFF` | `#202D39` | `#536678` | `#BECDDA` | `#1D537C` | `#15222E/#243543/#EDF4F8/#AAD5EE` | Technical diagrams; grid marks remain secondary. |
| Mist Blue | `#F5F8FA` | `#FFFFFF` | `#23313C` | `#596B77` | `#C5D2D9` | `#28536D` | `#17232A/#273843/#EDF4F6/#B0D6E5` | Calm service; check low-energy contrast. |
| Royal Ink | `#F6F7FC` | `#FFFFFF` | `#24283A` | `#5A6175` | `#C8CBE0` | `#303F78` | `#181C30/#2A304A/#F1F2FA/#BEC7F0` | Formal knowledge; avoid prestige theater. |

## Plum and burgundy

**Thesis:** reflective or cultural tone without decorative luxury. Image overlays must be tested; charts need neutral and contrasting cool hues. Do not use burgundy as error unless explicitly assigned.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|
| Plum Archive | `#F9F6F9` | `#FFFFFF` | `#2E2630` | `#675B69` | `#D0C6D1` | `#613D64` | `#211B23/#322A35/#F3EDF4/#D8B5DA` | Cultural catalog; avoid ornamental serif overload. |
| Aubergine Desk | `#F8F5F8` | `#FFFFFF` | `#2D2730` | `#645A69` | `#CCC4D0` | `#583C66` | `#211C25/#302A37/#F3EEF5/#CFB5E4` | Reflective writing; keep controls conventional. |
| Burgundy Paper | `#FBF6F5` | `#FFFFFF` | `#322626` | `#6B5A5A` | `#D2C5C4` | `#713C42` | `#241B1C/#37292A/#F6ECEA/#E1B3B6` | Editorial commerce; avoid danger-color confusion. |
| Mulberry Ink | `#F8F4F7` | `#FFFFFF` | `#30262D` | `#6A5864` | `#D1C3CC` | `#683C59` | `#231B22/#342936/#F4ECF1/#DEB8D0` | Member communities; avoid faux-premium gloss. |
| Orchid Graphite | `#F8F6FA` | `#FFFFFF` | `#2C2932` | `#625E6B` | `#CDC9D6` | `#584A72` | `#201E27/#2F2C3A/#F2EFF6/#C9BDE8` | Creative tools; keep selection/action distinct. |

## Warm signal

**Thesis:** energy and material cue in a limited footprint. Orange/yellow often collide with warning, so reserve separate semantic markers. Charts need cool counterweights. Image color must not erase control contrast.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|
| Amber Desk | `#FBF8EE` | `#FFFFFF` | `#302C22` | `#685E4D` | `#D0C8B6` | `#6A4B16` | `#242016/#352C1E/#F6F0E3/#E4C383` | Workbench warmth; warning uses symbol/text. |
| Copper Field | `#FAF5EE` | `#FFFFFF` | `#312A24` | `#6C5E53` | `#D3C7BC` | `#714628` | `#251D18/#392A20/#F7EDE2/#E6B791` | Physical services; avoid decorative hazard color. |
| Burnt Coral | `#FFF6F2` | `#FFFFFF` | `#332925` | `#6D5C55` | `#D8C8BF` | `#794532` | `#261D19/#382A24/#F9ECE5/#E8BAA5` | Creator commerce; keep action different from error. |
| Ochre Note | `#FBF8EF` | `#FFFFFF` | `#302D23` | `#666051` | `#D0CBB9` | `#62501F` | `#232117/#34301F/#F6F0E1/#DCCB8A` | Annotated learning; avoid yellow-on-white labels. |
| Spice Market | `#FCF5EF` | `#FFFFFF` | `#352920` | `#6E5D50` | `#D8C9B9` | `#74442A` | `#281D18/#3B2A20/#FAEDE1/#EAB696` | Product stories; test against warm photography. |

## Technical dark

**Thesis:** long-session technical focus. Light mode is a deliberate alternative; dark mode is primary for these themes. Chart series require line labels and patterns. Avoid gray-on-gray and decorative glow.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|
| Technical Dark | `#F2F5F4` | `#FFFFFF` | `#1F2C29` | `#53645E` | `#BFCDC5` | `#205741` | `#121A1C/#1E292B/#ECF3F1/#B4DCC5` | Monitoring; accent must not masquerade as success. |
| Ink Terminal | `#F3F5F4` | `#FFFFFF` | `#202B2C` | `#536366` | `#C0CBCC` | `#20555B` | `#101719/#1B2427/#EDF3F1/#A6D4C3` | Command shell; protect code contrast. |
| Night Field | `#F4F6F4` | `#FFFFFF` | `#212B29` | `#556360` | `#C1C9C4` | `#355642` | `#111719/#1B2426/#F2F1E9/#B9D49B` | Media stage; controls need solid backdrop. |
| Charcoal Signal | `#F4F5F4` | `#FFFFFF` | `#222C2D` | `#586366` | `#C4CCCD` | `#25535B` | `#151B1F/#222B30/#EEF3F3/#AAD3DE` | Security operations; never encode alert by hue alone. |
| Deep Slate | `#F3F5F7` | `#FFFFFF` | `#202B34` | `#536575` | `#BFCBD5` | `#235078` | `#141C27/#232F40/#EEF3F7/#A9CAE9` | Data tools; reduce cyan glow and border noise. |

## Expressive but controlled

**Thesis:** memorable color serves a specific learning, cultural, or community experience. Light/dark modes preserve legibility and control grammar. Charts need direct labels; illustrations must share the palette's role logic, not add arbitrary hues.

| Theme | C | S | I | M | B | A | D: C/S/I/A | Context and risk |
|---|---|---|---|---|---|---|---|---|---|
| Classroom Ink | `#F7F7F1` | `#FFFFFF` | `#202B31` | `#4E5B61` | `#B6C3C5` | `#265A80` | `#18232B/#283541/#F0F4F4/#AAD7EE` | Learning feedback; color never grades alone. |
| Studio Coral | `#FFF8F5` | `#FFFFFF` | `#332A29` | `#6B5A58` | `#D7C9C4` | `#75464B` | `#261D20/#392B2D/#F7ECE9/#E3B7BD` | Creative collaboration; avoid decorative pink errors. |
| Mint Workshop | `#F4FAF6` | `#FFFFFF` | `#23312B` | `#58685E` | `#C1D0C5` | `#245A43` | `#18241D/#29372D/#EDF5EE/#B1DDBD` | Making/learning; avoid generic wellness cues. |
| Indigo Commons | `#F6F6FB` | `#FFFFFF` | `#282A3B` | `#5C5F76` | `#C9CADD` | `#3B4877` | `#1C1E31/#2B3049/#F1F1F8/#B8C2EB` | Community knowledge; distinguish links from badges. |
| Citrus Measure | `#FAFAF1` | `#FFFFFF` | `#2D3023` | `#626653` | `#CFD1BE` | `#4D5C24` | `#232719/#333A24/#F5F5E9/#CADB9C` | Educational data; yellow stays annotation, not text. |
