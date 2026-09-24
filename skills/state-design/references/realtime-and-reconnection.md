# Real-Time and Reconnection

Live products (multiplayer games, collaborative editors, live dashboards, chat, auctions,
broadcast consoles) have states that single-user apps do not.

## Connection states

| State | UI |
|---|---|
| Connected | Normal; optionally a subtle "live" indicator |
| Degraded (high latency) | Optional hint; avoid alarm |
| Reconnecting | Visible but calm banner; data marked as possibly stale; actions queued or disabled |
| Disconnected (extended) | Clear message; what still works; manual retry |
| Resynced | Brief confirmation if the user noticed the disconnect; apply missed updates visibly |

## Presence and participants

- Joined, left, disconnected (may return), kicked, idle
- One participant vs many (layouts for 1, 5, 50)
- Host or owner leaving: what happens? (transfer, pause, end)

## Authority in games and live events

- The server decides outcomes; clients display them.
- Timers should be server-synchronized; show the authoritative remaining time.
- Late inputs (after the deadline) need an explicit, fair outcome message.
- Reconnecting players rejoin the current phase with a summary of what they missed.

## Collaboration

- Show who else is present and where.
- Conflicts: prefer real-time merging; if conflicts occur, show them clearly.
- Offline edits: queue locally, mark as pending, sync on reconnect, surface conflicts.

## Host and operator surfaces

For live control, the P0 is the current state. Use a state header. When the connection is
unreliable, the host must know before acting ("Reconnecting: actions will apply when connected").

## Testing

- Kill the network mid-round; restore it.
- Throttle to high latency.
- Open two clients and act simultaneously.
- Close the host's tab.
- Sleep a laptop and wake it.
