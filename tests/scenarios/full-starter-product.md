# Scenario: Full Starter Product Pass

## Scenario
A runnable one-page service starter in `service.html` has generic filler, weak form semantics, no honest state model, and a brittle phone layout. The fictional product lets residents submit a repair request and track its status. The goal is a coherent, usable starter product, not a style gallery.

## Prompt
Use all Experience Skills to take `service.html` from this starter into a finished repair-request experience. Inspect and render the current page, name the primary job and core loop, choose Build or Audit Mode, consider the available specialists, activate only those that address material risks, and preserve any working decisions. Compare visual directions only if that helps. Implement the request and tracking journeys with honest states, then exercise submission, error/recovery, continuation, and phone use in the rendered page. Repair material failures and verify the result. Keep the scope to this product and edit the actual file.

## Mode
edit

## Current problem
The page has generic copy, fake zero metrics, unclear action hierarchy, an unlabeled input, no useful tracking state, and a layout that fails on phones. The user requests the conductor. It should consider all specialists and activate only those whose method can improve this product.

## Expected skills
- use-all-skills
- interaction-design
- state-design
- responsive-validation
- composition-repair
- visual-identity

## Key principles expected
- Build Mode is chosen deliberately; the primary job, repeated request-and-track loop, and form as the working surface remain clear.
- Specialist activation is selective, and no-change decisions preserve useful existing behavior.
- The implemented page lets a resident submit, understand failure, recover, and inspect tracking state without false completion.
- Rendered evidence covers the baseline and repeated primary journey at phone and desktop sizes, including keyboard and relevant states, or exact gaps are marked unverified.

## Unacceptable recommendations
- Invoking every specialist merely because the conductor is named.
- Choosing a system by niche or listing token variations as different directions.
- Producing only a plan or report without editing `service.html`.
- Claiming rendered verification from source changes alone.
- Adding fake request counts, decorative cards, or a motion effect without a task reason.
