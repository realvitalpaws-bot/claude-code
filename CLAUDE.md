# Project memory

## Slack daily digest + memory

This repo doubles as persistent memory for a daily Slack summarization routine on
the `thepurepaws` workspace. The execution environment is ephemeral, so committed
files are the only durable memory between runs.

**At the start of any session that involves Slack context, read `slack-digests/MEMORY.md`**
to load the rolling memory of recent days. Per-day full digests are in `slack-digests/YYYY-MM-DD.md`.

### The daily routine (runs ~12 AM IST, ideally via a scheduled Claude session)
1. Sweep all Slack channels (public + private, **no DMs**) for the last 24h.
2. Build a digest grouped by theme + Orders & Shipping / Daily Standup / Finances /
   a consolidated "who needs to do what" list by person. Match the format of
   `slack-digests/2026-06-23.md`.
3. **Use very simple English.** Short sentences, plain everyday words, no jargon.
4. Write the full digest to `slack-digests/<today>.md`.
5. Prepend a condensed entry to `slack-digests/MEMORY.md` (newest on top).
6. **Post the digest directly to `#vitalpaws-core` (C09QHHR2R5J)** — send it, do not leave as a draft.
7. Commit + push so the memory persists.
