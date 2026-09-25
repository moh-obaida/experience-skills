# Repository Experience Contract

When modifying user-facing surfaces:

1. Use relevant Experience Skills.
2. Preserve product conventions unless intentionally changing them.
3. Render significant changes when a runnable surface exists.
4. Test real states, not only the showcase state.
5. Verify responsiveness, content extremes, and supported input modes.
6. Challenge unnecessary control novelty; keep familiar controls unless the task gains measurable
   value.
7. Run the anti-slop gate before presenting generated UI.
8. Report what was observed, measured, changed, verified, and not verified.

Skip this contract for backend-only, documentation-only, or trivial copy changes unless the user
asks for experience review. When rendering is impossible, say **NOT VERIFIED IN RENDERED OUTPUT** and
name the exact reason.
