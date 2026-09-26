# Pre-0.5.0 Full Starter Product Eval — 2026-09-26

**Scope:** This evaluation predates the final v0.5.0 shape: Skill 15 (`anti-ai-slop`) and the Niche Design Atlas were not part of the evaluated conductor workflow. The runs had 14 skills total: `use-all-skills` plus 13 specialists. Do not treat this as evidence that v0.5.0 improves results.

**Method:** Two Codex CLI edit runs on the invented `full-starter-product` fixture. The second run used the revised conductor and an available Chromium installation. No without-skills comparison was run. Traces were reanalyzed after fixing the Codex shell-read parser to recognize wildcard, brace-expanded, and delimited reads. These are two behavioral observations, not a success-rate estimate.

| Gate | Observed result |
|---|---|
| Skill files read | Both runs read all 14, including the conductor and 13 siblings |
| References read | Second run read 32 distinct references; it read the conductor phase map and ledger plus the system selector and index |
| Starter edited | Second run replaced `service.html` with a functional single-page repair request flow |
| Design choice | Second final answer compares Open Counter, Service Map, and Workshop Bench, then explains its Open Counter choice and code effect |
| Participation evidence | Second final answer summarizes all 13 specialist decisions, but its entries omit the references each loaded |
| Rendered verification | Both runs attempted rendering; browser security policy denied local preview. The second answer explicitly marked responsive, keyboard, clipboard, and storage behavior unverified |
| Phase order | Second trace establishes source-level interface-forensics after implementation and critical-review after forensics; no rendered forensic pass or final rendered verification occurred |
| Independent answer judge | Second run: 2 of 4 expected principles demonstrated in the final answer; 0 unacceptable recommendations observed |

The generated reports initially undercounted skill reads because the Codex adapter did not parse two shell read formats. It also counted a browser attempt as rendered evidence. The adapter and unit tests now cover these cases; the corrected second-run gates are: all 13 skills loaded, compact ledger present, references selective, system selected, implementation changed, source-level forensics and review ordered, and **no rendered verification**. The conductor now distinguishes an unavailable renderer from an explicit security denial, which must be respected. A permitted renderer is needed to measure the full visual and interaction sequence.
