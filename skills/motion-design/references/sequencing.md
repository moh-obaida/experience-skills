# Sequencing

Meaningful events often have several beats. Sequencing makes cause and effect readable.

## The four beats

1. **Anticipation** (optional, 0–100 ms): a small preparatory movement that signals something is
   about to happen. Use for large or surprising changes; skip for routine ones.
2. **Action:** the main change (movement, transformation, appearance).
3. **Consequence:** what responds to the action (destination updates, counts change, related
   items react).
4. **Settle:** everything reaches a stable, readable resting state. No lingering motion.

## Overlap

Beats should overlap slightly; strictly serial sequences feel slow. A consequence can start as the
action lands (last 20–30% of the action).

## Total time budget

- Routine events: whole sequence ≤ 300 ms.
- Important events: ≤ 600 ms.
- Rare highlights: ≤ 1200 ms, and skippable.

If a sequence needs longer, the event is probably being over-explained.

## Event spec format

```
Event: Answer judged correct (host presses Correct)
Actor: host · Frequency: ~20 per game · Importance: high
Origin: answer panel · Destination: board cell B4
Sequence:
  1. Answer text locks in with check mark (120 ms, ease-out)
  2. Team token travels from panel to B4 on a curved path (320 ms, ease-move), starts at 80 ms
  3. B4 fills with team color (160 ms, ease-out), starts as token lands
  4. Connected cells pulse once (200 ms), starts with step 3
  5. Settle: board static; state header advances to next question
Total: ~520 ms
Interruptible: yes; if host presses Next during sequence, jump to settled state
Reduced motion: check mark + B4 color change instantly; B4 outline highlight 600 ms; no travel
Performance: transform/opacity only; token is a single absolutely positioned element
```

Write specs like this for every important event; they double as review and test documentation.
