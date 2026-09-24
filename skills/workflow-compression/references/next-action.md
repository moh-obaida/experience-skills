# Next Action (F9)

After an outcome, surface the likely continuation. A success screen with only "Back to home"
is a dead end.

## Find the continuation

Ask: *why did the user do this?* The next action serves that reason.

| Outcome | Why | Next action |
|---|---|---|
| Created a quiz | To use it with a class | Host now · Assign |
| Finished a game | Play again, or see how people did | Play again (same settings) · Results |
| Uploaded files | Work with them | Open · Share · Upload more |
| Completed setup | Start using the product | Start first project (preconfigured) |
| Paid an invoice | Keep records | Download receipt |
| Fixed an error | Resume the interrupted task | Return to where they were |
| Published | Share it | Copy link · View live |
| CLI command succeeded | Run the logical next command | Print the exact next command |

## Rules

- One primary next action; one or two secondary; no more.
- Carry context: the created object is already selected in the next step.
- Do not use the continuation slot for unrelated upsells.
- Respect endings: some sessions are complete; offer closure (receipt, summary) instead of
  more tasks.

## For CLIs

Print the next command verbatim so it can be copied, e.g.:

```
✓ Project created in ./my-app
Next: cd my-app && npm run dev
```
