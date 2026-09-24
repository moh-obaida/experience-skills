# Scenario: Long-Running AI Generation

## Scenario
An app generates a video summary from an uploaded lecture (2–6 minutes). The UI shows a full-screen
spinner and "Please don't close this page." Network hiccups make the status poll fail, and the UI
shows "Generation failed" while the server job continues. Retrying creates duplicates.

## Current problem
Waiting tax; transport vs product state confusion; no reattachment; non-idempotent retry.

## Expected skills
- state-design
- workflow-compression
- interaction-design

## Key principles expected
- Background job with persisted job ID; safe to leave and return.
- Separate "connection lost, still checking" from "generation failed".
- Idempotent retry; inputs preserved; partial output kept.
- Completion notification with a link and a next action.

## Unacceptable recommendations
- A more entertaining spinner or progress animation as the fix.
- Telling users to keep the page open when the server can continue.
- Showing a fake percentage progress bar.
