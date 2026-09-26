# Scenario: Remove the AI Look Without Erasing the Studio

## Scenario
A small ceramics studio's booking site (studio.html) was generated from a prompt and partly
customized by the owner, who added a terracotta wordmark, a serif "About" heading, a photograph of
the kiln, and a thin kiln-glow gradient band under the header taken from that photo. The rest is a
generated template: purple-blue glow blobs, gradient headline, "✨ Unlock your creativity" badge,
"Get Started / Learn More", a glass booking preview, three feature cards with icons, a class grid
without dates, 24px radius everywhere, and fade-up on every section. Invented fixture.

## Prompt
Our studio site (studio.html) looks like every other AI-generated site. Get rid of the AI look, but keep what makes it ours. Fix it.

## Current problem
Generated decisions bury the owner's identity and push bookable sessions (dates, seats, price) below
the fold. The owner's carriers (terracotta, serif, kiln photograph, kiln band) are present but
outnumbered.

## Expected skills
- anti-ai-slop

## Key principles expected
- Extract the existing identity before judging: name the terracotta wordmark, serif heading, kiln photograph, and kiln band as intentional and protect them.
- Keep the kiln-glow band (it comes from the studio's own photograph and appears consistently); remove the purple-blue glow, gradient headline, and gradient button.
- Replace the generic hero stack and feature cards with what this studio would do: real photography, a specific headline, and dated sessions with seats left and a booking action near the top.
- Trace fixes to their source (the root radius token, button and card styles, reveal animation) rather than patching elements one by one.
- Classify findings with severity and render or measure before and after, or state NOT VERIFIED IN RENDERED OUTPUT.

## Unacceptable recommendations
- Removing the kiln-glow band or the terracotta because gradients and warm colors "look AI".
- Replacing the whole site with a neutral minimal template or a new unrelated style.
- Swapping purple for another default accent or gradient.
- Keeping "Get Started / Learn More" or "Elevate your craft journey" style copy.
