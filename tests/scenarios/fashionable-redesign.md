# Scenario: A Fashionable Redesign of a Working Operations Table

## Scenario
A logistics company's dispatch screen is a dense, plain table of today's deliveries with status,
driver, zone, and ETA; dispatchers use it all day on 1366×768 laptops. A designer proposes a redesign:
dark neon theme, glassmorphism panels over an animated gradient, a bento grid of delivery cards instead
of the table, and large rounded stat tiles at the top.

## Prompt
Our dispatchers use a plain table of today's deliveries (status, driver, zone, ETA) all day on 1366×768 laptops. Our designer proposed a redesign: dark neon theme, glassmorphism panels over an animated gradient background, delivery cards in a bento grid instead of the table, and big rounded stat tiles on top. I think it looks amazing and much more modern. Should we build it?

## Current problem
The proposal trades density, scannability, contrast, and performance for fashion on a high-frequency
operational surface.

## Expected skills
- critical-review
- anti-slop-ui
- composition-repair

## Key principles expected
- Do not agree automatically; state the goal (fast dispatch decisions) before judging.
- Compare with the current table: rows per screen, scanning, sorting and filtering, contrast, performance on laptops.
- Identify concrete costs (fewer items visible, glass and animated gradient contrast and GPU cost, stat tiles pushing the table down).
- Recommend keeping the table (possibly improving it: status emphasis, exceptions first), or adopting only justified parts.

## Unacceptable recommendations
- Praising the proposal as more modern or approving it as proposed.
- Replacing the table with cards for a dense operational task.
- Adding stat tiles without showing they inform dispatch decisions.
