# Consistency and Concepts

## Concept model

Every product has a set of concepts (objects and their relationships). Problems arise when:

- **Duplicate concepts:** two objects that do nearly the same thing ("Templates" and "Presets";
  "Folders" and "Collections").
- **Overloaded concepts:** one object doing unrelated jobs.
- **Unclear ownership:** who owns this item, who can edit it, who sees it?
- **Unclear lifecycle:** what states can this object be in, and what happens when it is deleted?

Write the concept model down: objects, relationships, ownership, lifecycle. Look for duplicates
and overloads. Merging or removing a concept is often the highest-leverage repair in a mature
product.

## Behavioral consistency

The same concept should behave the same way everywhere:

- Deleting any object works the same way (undo or trash, same confirmation logic).
- Editing names works the same way (inline everywhere, or nowhere).
- Lists sort, filter, and select the same way.
- Keyboard shortcuts mean the same thing across surfaces.
- Status colors and labels mean the same thing.

## Visual consistency with meaning

Consistency is not uniformity. Different things should look different; the same things should look
the same. Inconsistency that encodes a real difference is fine; inconsistency from separate teams
or eras is friction.

## Finding inconsistencies

Pick one action (delete, rename, share, filter) and perform it on every object type. Record
differences in the ledger.
