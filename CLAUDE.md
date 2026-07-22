# Project memory

## Slack daily digest + memory

This repo doubles as persistent memory for a daily Slack summarization routine on
the `thepurepaws` workspace. The execution environment is ephemeral, so committed
files are the only durable memory between runs.

**Memory now lives in Supabase (not git files) so it never dilutes.**
Project `xjtnvapoiofzldgocgam`, schema `report`, tables:
- `report.daily_report` — one row per day (title, story_so_far, full report_md).
- `report.metrics` — one row per day (spend, ROAS, revenue, blended, orders); used for trends.
- `report.customer` — CRM index of customers/VIPs (deduped by name).
- `report.storyline` — ongoing arcs + trends; advance each arc daily.
- `report.worklog` — Claude session notes; the report's "🤖 Claude sessions" section is built from it.

At the start of a report run, READ yesterday from these tables; at the end, WRITE today back
to them (see `routines/daily-report.md`, the authoritative routine prompt). The old
`slack-digests/` and `memory/*.md` files are historical seed only — do not rely on them.

### The daily routine (runs ~12 AM IST, ideally via a scheduled Claude session)
1. Sweep all Slack channels (public + private, **no DMs**) for the last 24h.
   **Exclude `#finance-dept` (C0A838DELMR) and `#exec-chat` (C0B589D9UMR) entirely.** (Keep `#office-finances-and-expenses`.)
2. Build a digest grouped by theme + Orders & Shipping / Daily Standup / Finances /
   a consolidated "who needs to do what" list by person. Match the format of
   `slack-digests/2026-06-23.md`.
3. **Use very simple English.** Short sentences, plain everyday words, no jargon.
4. Write the full digest to `slack-digests/<today>.md`.
5. Prepend a condensed entry to `slack-digests/MEMORY.md` (newest on top).
6. **Post the digest directly to `#vitalpaws-core` (C09QHHR2R5J)** — send it, do not leave as a draft.
7. Commit + push so the memory persists.
