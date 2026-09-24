# Pattern: Background Job

## Problem
Work that takes a long time (generation, export, import, render, analysis, upload) holds the
user on a waiting screen, and leaving risks losing the work.

## When useful
- Work takes more than a few seconds and often minutes.
- The architecture can continue work server-side or in a worker.
- Users have other useful things to do meanwhile.

## When NOT useful
- The work is short (under ~2–3 seconds); inline progress is simpler.
- The next step strictly depends on the result and there is nothing else to do (still, allow
  leaving safely).
- The architecture cannot actually continue in the background. Do not pretend it can.

## Structure
1. Start the job and return control immediately with a clear status entry ("Generating
   'Unit 5 quiz' · about 2 min").
2. Persist job identity so the status survives reloads and navigation.
3. Show honest progress: stages or percentage if known; elapsed time if not.
4. Separate transport errors (status check failed, retrying) from job errors (generation failed).
5. Notify on completion in the place the user is now, and link back to the result.
6. Allow cancel when meaningful; allow retry on failure with inputs preserved.

## Example
```
Generating quiz from "Chapter 5.pdf"   ▓▓▓▓▓░░░  Writing questions (3 of 4)
You can leave this page. We'll show it in Library when it's ready.
```

## Failure modes
- A failed poll shown as "Generation failed" while the job is still running.
- Progress bars that invent precision.
- Completion notification with no link to the result.
- Duplicate jobs when the user retries a transient error.
