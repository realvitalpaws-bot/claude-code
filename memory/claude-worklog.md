# Claude Sessions Worklog

Every Claude Code session that works on VitalPaws appends a short, dated entry here
(newest date on top) describing what it did. The daily report reads the entries for the
report day (YDAY) and summarizes them under "🤖 Claude sessions". This is how Claude's
own work gets into the report — past chat sessions cannot be read directly, so each
session must log itself here and commit.

## 2026-09-15
- Studio Hub build continued (Tobechukwu, PM, on Shiva's approval).
- Merged PR #2 (phase 2: Admin page, team member CRUD) into main.
- Built phase 3, Drive links: admin add/edit/remove, read for all members,
  category grouping with Unfiled at the bottom, search across name/category/notes.
- Pasted addresses normalised; bare domains get https://, non-http(s) schemes refused.
- No migration needed; existing RLS policies already cover drive_items.
- Opened draft PR #3 and subscribed to its activity.
- Reported full project autopsy. Blocker is still Google OAuth: auth.users is 0,
  nobody has ever signed in. Atharv says a GCP client exists; asked for the four
  checks (Web client type, Supabase callback URI, In production, scopes limited).
- Phase 5, Calendar: agenda grouped by day, everyone adds, you edit your own,
  admins edit anything. Dates resolve in Asia/Kolkata so evening entries do not
  slip to the next day; date helpers compiled and verified. Past events capped
  at 50 behind a disclosure. No migration needed.
- Fixed two cosmetic faults across all forms: reserved blank message line, and
  the sidebar truncating long names.
- Phase 4 spec changed on Tobechukwu's call: Drive uploads run on a Google
  service account, not user OAuth. drive.file is sensitive, forces verification
  and Testing mode's 7 day expiry on a non-Workspace Gmail project. Reconnect
  Drive button dropped. Documented in README, .env.example updated.
- Corrected: there is no second app in the "The studio app" GCP project. Atharv
  handed everything to Tobechukwu and his features are now part of Studio Hub.
- Google OAuth is configured by Tobechukwu; he is running the local sign-in test.
- Sent the first screenshots of the app; he had seen nothing until now.
- PR #3 merged, PR #4 merged. CI confirmed working (green on main and on PRs);
  it had not fired earlier only because GitHub registers a workflow once the
  file reaches the default branch, not a disabled repo setting.
- Phase 6, Pipeline: five stage board, admins create/delete/reassign, editors
  move and edit only their own cards. Stage picker instead of drag and drop
  (keyboard and phone friendly). Slack notification on stage change, best
  effort with a 3s timeout, never blocks the move. Two FKs into team_members
  disambiguated by constraint name, verified against the live schema. No
  migration needed. Merged as PR #5.
- Phase 9, Libraries + Workflows + Home tiles. Taken out of order because 4, 7
  and 8 all need credentials only Tobechukwu can supply. Libraries and
  workflows share one form and row component; each page passes its own server
  actions so the table name never reaches the browser. Entries render as a link
  or as text depending on the value. Home now has six real tiles instead of a
  placeholder. Drive's URL normalisation extracted to src/lib/url.ts so the
  javascript:-blocking check exists once, not twice. No migration. Draft PR #6.
- PR #6 merged. Six of nine phases on main (1,2,3,5,6,9).
- LOCAL SIGN-IN TEST PASSED. Tobechukwu signed in with Google as
  tobechukwuudeogu@gmail.com, landed on Home, all six tiles, Admin visible.
  Earlier failure was a bad anon key in his .env.local, not a code problem.
  auth.users confirms: first sign-in 11:00, team_members row added 11:03 via
  the Supabase dashboard, successful sign-in 11:16. So the allow-list rejection
  path is proven too, not just the happy path.
- Found and fixed a real bug in my own phase 1 code while verifying that:
  getCurrentMember used .ilike to match the signed-in email, and ilike reads
  its right hand side as a pattern, so _ and % in a user's own address were
  wildcards. Not exploitable on gmail.com addresses, and RLS was unaffected
  because the helpers use equality, but it is an auth path. Fixed with .eq on
  a lowercased email plus a check constraint enforcing lowercase storage.
  That made check_violation ambiguous with the keep-an-admin trigger, so the
  admin page now distinguishes by constraint name. Draft PR #7.
- PR #7 merged. Supabase main branch cleared MIGRATIONS_FAILED -> FUNCTIONS_DEPLOYED.
- SCOPE CHANGE from Shiva, relayed by Tobechukwu: drop the Anthropic API from
  Studio Hub entirely. Those AI features came from Atharv's spec, not from the
  studio team, and the team already does both in Claude chat for free. Not worth
  a billed key plus prompts plus failure handling for an internal utility.
  Scripts becomes a plain draft editor. Reel analysis becomes manual entry with
  arithmetic comparison. Libraries folded into Workflows and dropped, since it
  only existed to feed AI context. Final scope: Drive, Calendar, Pipeline,
  Scripts, Reel analysis, Workflows, Admin.
- Shipped the deletion half as draft PR #8: ANTHROPIC_API_KEY gone everywhere,
  scripts.ai_suggestions dropped, libraries table + library_page enum dropped
  with rows folded into workflows first, nav entry and page deleted.
- Vercel access is now sorted, Shiva granted it. Deployment unblocked.
- Still outstanding: Drive service account key + folder ID; and how Vercel
  access reaches me in practice.
- Sandbox proxy 403s on the Supabase host, so real sign-in and DB reads cannot
  be tested from here. Local run verifies routing and the auth gate only.
- Nothing deployed yet, no Vercel project; Tobechukwu has no Vercel access yet.

## 2026-09-12
- Access audit for Studio Internal App build (requested by Tobechukwu, PM, on Shiva's approval).
- Confirmed Supabase connected: org `realvitalpaws-bot's Org` (bshdkdvqtbdcwazrxzza).
- Confirmed Vercel and Google Cloud Console are NOT connected in this workspace. Flagged as blockers.
- Created new Supabase project `studio-hub` (ref rugvltghjhubolclksan, ap-south-1, $10/mo approved).
- Did not touch vitalpaws-app or Peggy v3, read or write, per instruction.
- No app build started yet; waiting on the build spec.

## 2026-06-23
- Built the daily Slack digest + persistent memory system (slack-digests/, MEMORY.md, CLAUDE.md).
- Created the combined daily report routine (Meta ads + Shopify + team summary): routines/daily-report.md.
- Added the story engine: storylines.md, metrics-ledger.md, customers.md (CRM index seeded from Shopify).
- Fixed the IST date off-by-one (compute YDAY in Asia/Kolkata).
- Excluded #finance-dept and #exec-chat from the sweep.
- Posted the report to #vitalpaws-core; sent test previews to Sudheer.
