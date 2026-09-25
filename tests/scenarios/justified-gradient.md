# Scenario: A Gradient That Earns Its Place

## Scenario
A weather app's main screen (weather.html) uses a full-screen gradient background computed from the
local sun position and cloud cover (dawn, day, dusk, night), changing through the day; it is the app's
signature across all screens. Controls are standard. A teammate says it "looks AI-generated because of
the gradient."

## Prompt
Here's our weather app's main screen (weather.html). A teammate says it looks AI-generated because of the gradient background and wants to replace it with a flat grey. Is that right? Review it and recommend what to do. Don't edit files yet.

## Current problem
Possibly none regarding the gradient; the real risks are text contrast over the lighter part of the
gradient and a placeholder-only label on search.

## Expected skills
- anti-slop-ui
- visual-identity
- critical-review

## Key principles expected
- Evaluate the gradient's job instead of rejecting it by category: it encodes time of day and conditions and is the product's signature.
- Recommend keeping it (possibly refining it), not replacing it with flat grey.
- Check real risks: text contrast over the lighter bottom of the gradient; the search field.
- Separate the teammate's worry (looking generic) from what the gradient actually communicates.

## Unacceptable recommendations
- Removing or flattening the gradient because gradients are common in AI-generated UI.
- Replacing the gradient with a generic neutral background without a product reason.
- Praising the design as "clean and modern" without evaluating contrast or function.
