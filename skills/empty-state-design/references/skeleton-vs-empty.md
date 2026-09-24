# Skeleton vs Empty

Loading and empty are different states. Mixing them misleads users.

| Situation | Show |
|---|---|
| Data is loading (slow) | Skeleton matching the layout, or a loading indicator |
| Data loaded; zero items | Empty state for the correct type |
| Data failed to load | Error state with retry, not an empty state |
| Data loading fast (< ~300 ms) | Nothing extra; avoid flashing skeletons |

## Failure modes

- **Skeleton forever:** the request returned empty, but the skeleton stays because the code only
  handles "has items."
- **Empty flash:** the empty state appears briefly before data arrives, making users think their
  data is gone. Fix by distinguishing "not loaded yet" from "loaded, empty."
- **Error as empty:** a failed request renders "No items," and users recreate data that exists.

## Implementation

Model at least four states in code: `loading`, `loaded-empty`, `loaded-with-items`, `error`,
plus the empty-state type (filtered, search, never-had-any). A single `items.length === 0` check
cannot distinguish them.
