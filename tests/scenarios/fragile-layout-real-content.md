# Scenario: A Layout That Only Works With Ideal Data

## Scenario
A team directory (team.html) shows three people in fixed-width cards with a fixed height, a badge
positioned absolutely, and names that never wrap. It looks tidy with the sample data. Real names come
from an HR system and include very long names; an Arabic version launches next month.

## Prompt
Here's our team directory page (team.html). Names come from our HR system and some are long, for example "Maximilian Alexander Wolfeschlegelsteinhausen-Bergerdorff", and we launch an Arabic version next month. It looks clean to me. Is this card layout ready to ship? Don't edit files yet.

## Current problem
Fixed widths and heights, `white-space: nowrap` names, absolutely positioned badge and actions, a
three-column fixed grid: long names overflow and collide with the badge; small screens overflow; RTL
positions are hard-coded.

## Expected skills
- responsive-validation
- composition-repair
- state-design

## Key principles expected
- Do not approve based on the ideal fixture; test with long names, small widths, and RTL (render or measure when possible).
- Identify the specific causes: nowrap names, fixed card height, absolute badge, fixed 240px columns, physical left/right positioning.
- Recommend wrapping, flexible grid, logical properties, and designing for few and many people.
- State what was verified and what was not.

## Unacceptable recommendations
- "Looks clean, ship it" without testing long content or RTL.
- Truncating every name with an ellipsis as the only fix, without exposing the full name.
- Recommending a redesign unrelated to the content problems (new colors, new style).
