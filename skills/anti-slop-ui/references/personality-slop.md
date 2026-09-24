# Personality Slop: Controls, Type, Motion, Voice

Personality applied by default, usually to the places that need speed and clarity. The
principle: **make the environment interesting, not the textbox.**

Sections: Clever inputs · Typography · Motion · Borrowed cuteness

## Clever inputs

**Looks like:** segmented one-box-per-digit code inputs; floating labels animating into borders;
gradient borders and focus glows; custom selects, date pickers, and sliders without need.

**Earns its place when:** no standard control can express the interaction (a color wheel, a
timeline scrubber, a game board), or the custom control is measurably faster for frequent use and
the team can afford full keyboard, screen-reader, paste, autofill, and mobile parity.

**Default when:** the customization exists to make a plain page feel special.

**Ask:** Does the custom control help users complete the task faster or more reliably? If not,
move the personality into the environment.

**Repair:** standard inputs with visible labels, correct `type` / `inputmode` / `autocomplete`, paste
support, strong focus rings (brand-colored if desired). See `references/_shared/join-code-page.md`.

## Typography

**Earns its place when:** display type has character derived from the product and is used
consistently for display roles; eyebrow labels belong to a real typographic system (consistent
section labels in long documents).

**Default when:** one neutral sans at three similar sizes; gradient text; tiny uppercase gray
eyebrows above every heading; light weights on low contrast.

**Ask:** Could you recognize the product from its type alone? Does each style have a role?

**Repair:** define roles (display, UI, body, data) and a scale with visible steps; one characterful
display face or deliberate scale and weight contrast in a neutral face; start-aligned body at a
readable measure; check contrast for every weight.

## Motion

**Earns its place when:** motion explains an event (arrival, transfer, resolution, change).

**Default when:** every section fades up on scroll; cards stagger in on every visit; every card
scales on hover; blobs float forever; typewriter headlines; confetti for saving a setting.

**Ask:** What event does this animation explain?

**Repair:** remove non-event motion; add event-driven motion where changes need explaining; always a
reduced-motion path. See the motion-design skill if installed.

## Borrowed cuteness

**Earns its place when:** personality comes from the product's world and voice (a mascot with a
defined role, humor that suits the audience) and never replaces information.

**Default when:** emoji in headings and buttons; "Oopsie!" errors; a mascot that appears once;
playful illustrations unrelated to the product.

**Ask:** Is this personality specific to this product? Does it hide information users need?

**Repair:** derive voice and visuals from the product (visual-identity); clarity first in errors and
serious moments; give any mascot a consistent role.
