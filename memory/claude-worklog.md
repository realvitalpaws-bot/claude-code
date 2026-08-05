# Claude Sessions Worklog

Every Claude Code session that works on VitalPaws appends a short, dated entry here
(newest date on top) describing what it did. The daily report reads the entries for the
report day (YDAY) and summarizes them under "🤖 Claude sessions". This is how Claude's
own work gets into the report — past chat sessions cannot be read directly, so each
session must log itself here and commit.

## 2026-08-05
- Recorded an OOO note: `<@U0BDZ8G6YDQ>` is out sick today. Created memory/team-ooo.md as a lightweight team availability log so the daily standup/digest reflects absences instead of flagging them as "late" or missing. No real-name mapping exists for this Slack ID in the repo, so it's referenced by ID.

## 2026-06-23
- Built the daily Slack digest + persistent memory system (slack-digests/, MEMORY.md, CLAUDE.md).
- Created the combined daily report routine (Meta ads + Shopify + team summary): routines/daily-report.md.
- Added the story engine: storylines.md, metrics-ledger.md, customers.md (CRM index seeded from Shopify).
- Fixed the IST date off-by-one (compute YDAY in Asia/Kolkata).
- Excluded #finance-dept and #exec-chat from the sweep.
- Posted the report to #vitalpaws-core; sent test previews to Sudheer.
