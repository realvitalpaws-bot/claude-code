# VitalPaws — Slack Memory Log

Rolling memory of the daily Slack sweep (last 24h of all channels, DMs excluded).
Newest entry on top. Full per-day digests live in `slack-digests/YYYY-MM-DD.md`.

This file is the persistent "memory" the daily 12 AM sweep appends to, since the
execution environment is ephemeral and only committed files survive between runs.

---

## 2026-07-20
- **Recovery day for ads:** Spend ₹9,050.80 (down 22%), ROAS 1.65 (up from
  yesterday's worst-ever 0.60), 11 purchases, blended 1.74x. Still only 2 ads
  running (Vanga Manasa v1, Joey V2-bofu).
- **Shopify:** ₹15,731.02 (12 orders). 8 new customers incl. new VIP Anil Nair
  (₹3,078, COD, unconfirmed — needs a call). 4 orders (Anil, Radha, Chitra,
  Sonika) show zero confirmation activity logged.
- **WhatsApp community — first movement in a month:** Krishna asked Shiva/Rosy
  to resume daily pet content in the DailyPup group and the rest of the team
  to boost engagement.
- **⚠️ Ops crisis escalating:** repo-memory backlog now 10 PRs deep (#3–#12),
  still unmerged against `main` (stuck at Jun 23). Shiva is now proposing a
  dedicated server/EC2 instance (or an old laptop on Ethernet) just to keep
  Claude's daily sweep from breaking. Flagged 6+ days running.
- **Ops handover:** Abhay handing order-confirmation calls to Jayapriya
  (shipping team) starting tonight; Krishna keeps the CRM sheet.
- **Correction:** Namrata Chopra's Jul 18 order was her first order (not a
  2nd/unconfirmed one) — shipped same day. Removed from watch.
- Two repeat customers (Damini Patel, Aliveni Kolanupaka) gave strong feedback
  and are lined up for founder calls with Rosy — future testimonial content.
- Full digest: `slack-digests/2026-07-20.md`

## 2026-07-19
- **⚠️ Still broken:** the repo-memory fix from Jul 18's report never merged.
  `main` is still stuck at Jun 23; the unmerged-PR backlog has grown to 9 (#3–#11).
  This session branched off PR #11's tip to stay continuous but could not fix
  `main` itself — needs a human to merge the chain.
- **Big win:** VitalPaws' first official Instagram Live (Shiva + a vet, Dr.
  Sowjanya), ~7k peak views. Got chaotic mid-stream (spam comments, an
  impersonator account) but the team called it a success and wants to do more.
- **Ads:** Spend ₹11,658.44 (~2x Jul 18), ROAS crashed to 0.60 (worst on record,
  first day Meta rev < spend), 5 purchases. Two "New Engagement ad" adsets spent
  ~₹3,170 combined with 0 purchases.
- **Shopify:** ₹12,272 (8 orders), blended 1.05x. 8 new customers, none over
  ₹3,000; all 6 COD orders confirmed by call before shipping (clean day for
  customer-quality process); 2 paid orders had unanswered calls → WhatsApp
  follow-up sent.
- **Content:** Quality-standards line drawn on creator reels (Shiva); heavy
  live-prep production (poster, crowd-sourced Q&A, VO iterations).
- Full digest: `slack-digests/2026-07-19.md`

## 2026-07-18
- **⚠️ Big finding:** repo memory had zero commits since Jun 23 despite daily
  reports posting to Slack almost every day through Jul 17 — a silent ~3.5-week
  persistence failure. Backfilled `memory/metrics-ledger.md` (Jul 2–17) from
  Slack history; Jun 24–Jul 1 stays unrecovered.
- **Ads:** Spend ₹5,766.71, ROAS 1.10, 6 purchases — down across the board vs
  Jul 17's breakout day (spend ₹5,832.56, ROAS 1.65, 8 purchases, 4 ads live).
- **Shopify:** ₹9,550 (10 orders), blended 1.66x. 9 new customers, none over
  ₹3,000.
- **Customer quality:** mixed — 2 orders well-qualified by call, 2 unanswered,
  1 (Lokmanya Hazari) shipped after refusing to share any pet info.
- **Ops:** Shiva re-fixed an expired Shopify connector (recurring issue),
  connected Canva to Claude, drew a hard line on creator standards
  (non-paying a difficult creator, explained publicly).
- **Storylines:** Pawathon (Oct 18 Hyderabad, announced Jul 17) — no movement
  yesterday. WhatsApp community — still stalled.
- Full digest: `slack-digests/2026-07-18.md`

## 2026-06-23
- **Strategy:** WhatsApp Community vs Groups clarified — start with ONE group ("general dog parent check-in"), expand to ~2 this week; never sell inside; best content → Instagram. Krishna's community playbook approved by Rosy.
- **Customer quality:** Flagged as slipping — qualify/confirm orders before shipping (a plain "yes" may be fraud). Daily customer-quality feedback to go in a dedicated thread.
- **Ops/tooling:** Slack Lists replacing Jira for task mgmt (devs learn first, then teach Krishna/Rosy). Shiva requested Slack<->Claude stay connected + 12 AM daily sweep into Claude memory (this log).
- **Orders:** 6 COD orders pending verification (Chitra, Vanga, Sapna, NHemamalini, Mehul, Nandeesh); 1 Amazon order (Pre+Probiotics 120g) ship by 24/06; new 2-dog customer ("Dumbo") to be onboarded.
- **Finance:** Google Drive upgraded to 400 GB (₹399 Google One).
- Full digest: `slack-digests/2026-06-23.md`
