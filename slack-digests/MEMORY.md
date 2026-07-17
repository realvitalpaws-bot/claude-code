# VitalPaws — Slack Memory Log

Rolling memory of the daily Slack sweep (last 24h of all channels, DMs excluded).
Newest entry on top. Full per-day digests live in `slack-digests/YYYY-MM-DD.md`.

This file is the persistent "memory" the daily 12 AM sweep appends to, since the
execution environment is ephemeral and only committed files survive between runs.

---

## 2026-07-17
- **Ads:** Spend ₹5,832.56 (up ~106%), ROAS 1.65 (up from 1.19), 8 purchases (doubled) —
  first day running 4 ads instead of 1 (Joey V2-bofu, Hindi Girl Collab, Vanga Manasa v1,
  Jackie partnership). Shopify still down (5th day), blended n/a.
- **Big news:** Abhay announced the "Pawathon" — a 1.5km pet marathon in Hyderabad on Oct
  18, venue already paid for, roadmap to 400 registrations by Aug 20 then sponsor
  outreach. New storyline arc — biggest real-world community push yet.
- **Gaps:** Probiotics survey form (owned by Krishna, today's #1 standup priority)
  apparently never shipped. Amazon FBA restock (36 units left, Charu asked to send 100)
  stalled in a confused thread. Brand-story ask to Abhay was garbled/misunderstood.
- **Ops:** PR backlog now 5+ days old (#3–#9 unmerged against `main`); this session
  fast-forwarded onto PR #9's tip to preserve continuity and opened a new PR.
- Full digest: `slack-digests/2026-07-17.md`

## 2026-07-16
- **Infra:** PR backlog still unmerged (#3, #4, #5, #7, and now #8) — this session again
  had to branch off the latest unmerged PR instead of stale `main`. Shopify MCP token
  expired this session (non-interactive, can't re-auth) — Shopify revenue, new-customer
  values, and blended ROAS are n/a today; needs a human to re-authorize the connector.
- **Ads:** Spend ₹2,831.68 (down ~2.3%), ROAS 1.19 (down from 1.37), 4 purchases (flat).
  Still one ad running ("Joey V2-bofu"). Shiva noted ad spend now split between the ads
  team and social team.
- **Customers:** 4 new order alerts (Chella, Jatin, DSunilKumar, Rajni) — order values
  n/a (Shopify down). 2 got proper pet intake (DSunilKumar, Rajni); Chella didn't answer;
  Jatin too fresh. 2 old non-responsive orders (Saju, Henny) were shipped anyway without
  ever confirming — same risk pattern as before.
- **Strategy:** The stuck water-bottle/Amazon-second-product decision finally moved —
  team is proceeding with water bottles, sourcing a sample.
- **Content:** A/B tested 2 boosted posts (₹484 vs ₹242); new one got 10k views/700
  likes but zero comments/shares out of ~9,793 reach — Atharv suspects bot views, open
  question. Rosy shifted messaging toward the Sunday vet Live.
- **Product:** DailyPup still short of the 12-tester/14-day bar; a login bug is now
  blocking at least 2 testers.
- Full digest: `slack-digests/2026-07-16.md`

## 2026-07-15
- **Infra:** Found that the memory system has been silently breaking — 4 straight daily-report sessions (Jul 6, Jul 14, and others) opened draft PRs that never got merged into `main`, so each new session started blind. This session manually recovered Jul 14's data from the abandoned branch; still needs a human to merge the backlog of PRs.
- **Ads:** Spend ₹2,897.37 (flat vs Jul 14), ROAS 1.37 (down slightly), 4 purchases (flat). Blended ROAS jumped to 2.46x on stronger Shopify volume (7 orders), not ad efficiency. Still one ad running ("Joey V2-bofu").
- **Customers:** 6 new. 2 had no name captured and no Slack notification at all (unexplained, flagged for a check). Of the 4 named, 3 were unreached/unresolved by day's end (Roshni Wagh — address issue; Saju — call dropped; Mukunda — no answer). Repeat customer Shaifali reported no skin improvement after pack 1 but reordered.
- **Strategy:** Shiva floated onboarding freelance dog-boarders ("silver tier") as a V2 idea; Tobechukwu countered with a lean WhatsApp-only concierge pilot (8-10 boarders, manual bookings, decision gate at 15+ stays / 30%+ repeat intent). Not yet greenlit.
- **Content:** New ad video cut reviewed; Instagram profile refreshed for WhatsApp click-through. Jul 18 vet Live poster says "Sunday" but the 18th is a Saturday — team knowingly left it uncorrected.
- **Risk:** Customer-quality gap still slipping, arguably worse than Jul 14.
- Full digest: `slack-digests/2026-07-15.md`

## 2026-07-14
- **Infra:** Repo access restored after a ~3-week blind spot (Jun 24–Jul 13 have no digests/memory — a Claude session posted a Jul 13 report straight to Slack while disconnected, unlogged). This session reconnects the memory system.
- **Ads:** Spend ₹2,896.72, ROAS 1.40, 4 purchases, blended 1.68x — down vs Jun 23 baseline but improved vs the unlogged Jul 13 numbers (ROAS 0.48, blended 1.41x). Still one ad running ("Joey V2-bofu").
- **Customers:** 5 new (Harinder, Navya, V Sanjiv, Henny, Khushal). VVIP flag: V Sanjiv = actor Venkat Sanjeev (Tamil Nadu CM household), threatened to sue over side effects — handle carefully.
- **Content:** Strong new ad video shot/edited/finalized same day featuring VIP Vanga Manasa's dog; Sunday Jul 18 Instagram Live with a vet planned around her. New pack design in review (duck vs salmon flavor).
- **Ops:** DailyPup app sign-in bug fixed; 8-9 more testers needed. Shiva pushed team on standup consistency.
- **Risk:** Customer quality still slipping — 2 of 5 new customers unreachable/unresolved at day's end.
- Full digest: `slack-digests/2026-07-14.md`

## 2026-06-23
- **Strategy:** WhatsApp Community vs Groups clarified — start with ONE group ("general dog parent check-in"), expand to ~2 this week; never sell inside; best content → Instagram. Krishna's community playbook approved by Rosy.
- **Customer quality:** Flagged as slipping — qualify/confirm orders before shipping (a plain "yes" may be fraud). Daily customer-quality feedback to go in a dedicated thread.
- **Ops/tooling:** Slack Lists replacing Jira for task mgmt (devs learn first, then teach Krishna/Rosy). Shiva requested Slack<->Claude stay connected + 12 AM daily sweep into Claude memory (this log).
- **Orders:** 6 COD orders pending verification (Chitra, Vanga, Sapna, NHemamalini, Mehul, Nandeesh); 1 Amazon order (Pre+Probiotics 120g) ship by 24/06; new 2-dog customer ("Dumbo") to be onboarded.
- **Finance:** Google Drive upgraded to 400 GB (₹399 Google One).
- Full digest: `slack-digests/2026-06-23.md`
