# VitalPaws — Storylines & Vision

The daily report is an ongoing story, not a standalone dump. Each day continues
these arcs. Update the "latest" line and trend each run. Trends: ▲ progressing,
▬ flat, ▼ slipping.

## Company vision (edit freely — this anchors the story)
Build VitalPaws into the trusted dog-health brand in India: quality dog
supplements, a loyal community of serious dog parents (aim: "as big as Instagram"
for dog people), powered by real customer content and a tight, qualified
customer base. Growth = more quality customers + higher blended ROAS + a
self-sustaining community.

## Active arcs

### 1. WhatsApp Community (community-led growth engine)
- Latest (2026-06-23): Decided to start with ONE group ("general dog parent
  check-in"), grow to ~2 rooms this week. Rule: never sell inside; best chats → Instagram. Krishna's community playbook approved by Rosy. Friends-with-dogs to be added first.
- Latest (2026-07-14): No group/community growth news. Shiva reconfirmed the
  business is still "a pure WhatsApp based system" managed by Krishna — no
  Community/Groups expansion visible in this sweep (note: 3 weeks, Jun24-Jul13,
  are an untracked gap — this may have moved without being logged).
- Latest (2026-07-15): Shiva proposed onboarding freelance dog-boarders ("silver
  tier") into a rated network, sourced from the same informal WhatsApp offline
  circles; Tobechukwu countered with a lean 4-6 week WhatsApp-only concierge
  pilot (8-10 boarders, manual bookings, decision gate at 15+ stays/30%+ repeat
  intent) instead of building a full marketplace now. Rosy reacted positively.
  Not yet formally decided. Separately, Sunday Jul 18 vet Live announcement
  still pending in the WhatsApp Community group (blocked on the poster date
  question, see Content).
- Latest (2026-07-16): No community/group growth move; the boarder-network idea
  wasn't mentioned again. Krishna kept up regular WhatsApp content posting
  (Thursday content); Rosy redirected messaging toward the Sunday vet Live
  ("tell your creators to save dog questions for Live") instead of more
  explainer posts.
- Latest (2026-07-17): The probiotics-buyer survey form (today's #1 standup priority,
  owned by Krishna, meant to ship on WhatsApp) apparently never actually went out —
  Krishna asked Tobechukwu where it was late at night and couldn't find it.
- Trend: ▼ (a planned WhatsApp deliverable slipped)
- Open risk: confusion over Community vs Channel vs Groups; needs clear next steps.

### 2. Customer quality / fraud control
- Latest (2026-06-23): Shiva flagged dropping quality — confirm before shipping
  (call / ask about the dog). Daily quality notes to go in one thread.
- Latest (2026-07-14): Still slipping — 2 of 5 new customers unreachable or
  unresolved at day's end (Khushal unreachable twice; Henny still pending after
  a promised callback). One new VVIP risk case: V Sanjiv (actor Venkat Sanjeev)
  threatened legal action if there's any side effect — needs careful handling.
- Latest (2026-07-15): Still slipping, arguably worse — of 6 new orders, 3 of 4
  named customers were unreached/unresolved at day's end (Roshni's address issue
  unresolved, Saju's call dropped, Mukunda unreachable), and 2 orders had no
  name captured at all with no Slack notification firing — nobody on the team
  saw them. Repeat customer Shaifali reported no improvement after pack 1 but
  reordered anyway (churn risk if pack 2 also doesn't work).
- Latest (2026-07-16): Mixed. 2 of 4 new order alerts got proper pet intake
  (DSunilKumar, Rajni — both confirmed with dog details). But 2 older
  non-responsive customers from Jul 14/15 (Henny, Saju) were shipped anyway
  without ever actually confirming with them — the same "ship without
  confirmation" pattern as before, unresolved. 1 new order (Chella) didn't
  answer the call; 1 (Jatin) arrived too late in the day to act on.
- Latest (2026-07-17): No pet-intake or confirmation conversations visible in the sweep
  today — #shipping-and-order-notifications only carried 8 automated "has it arrived?"
  Zapier pings (Shagnick, Vignesh, shubhambhendia, Charmi, Teresa, Abhay, Smita,
  Surekhakamal), with no team replies logged in-channel. Can't confirm anyone followed up.
- Trend: ▼ (no visible confirmation activity this session; intake process may just not
  be happening in Slack, or was missed in the sweep — worth a manual check)
- Win: Vanga (₹4,378, Jun 23) remains the model VIP — her dog is the star of the
  new Jul 14 ad video and the Jul 18 Instagram Live.

### 3. Ops & automation (Slack Lists + Claude)
- Latest (2026-06-23): Slack Lists introduced to replace Jira; everyone to use it.
  Claude+Slack daily 12 AM sweep requested.
- Latest (2026-07-14): Repo/Claude connection was down for ~3 weeks (Jun24-Jul13
  unlogged — a Jul 13 report was posted straight to Slack with no repo access).
  Restored as of this session. Shiva also pushed the team to be more consistent
  with text standups.
- Latest (2026-07-15): The "restore" itself turned out to be incomplete — the
  Jul 14 session's PR was never merged into `main`, so this session started
  from the same stale state `main` had before Jun 23. Found this is a repeat
  pattern: 4 daily-report PRs (Jul 6, Jul 14, and others) are open and
  unmerged. Manually recovered Jul 14's data from the abandoned branch to keep
  continuity, but the underlying fix (merging PRs) needs a human.
- Latest (2026-07-16): Same pattern a third day running — no PR has been merged
  (#3, #4, #5, #7, and now #8 all still open). This session again worked around
  it by branching off the latest unmerged PR (#8) instead of stale `main`.
  Separately, the Shopify MCP connector's token expired mid-run; this is a
  non-interactive session and can't complete the re-auth flow, so Shopify
  revenue/CRM data is n/a today — another automation gap needing human action.
- Latest (2026-07-17): 5th day running with no PR merged (#3, #4, #5, #6, #7, #8, #9 all
  still open) and Shopify still down. This session fast-forwarded its branch onto PR #9's
  tip (which already carries #7 and #8) to preserve continuity, then opened a new PR.
- Trend: ▼ (backlog keeps growing; both fixes still need a human)

### 4. Ads & growth (blended ROAS)
- Latest (2026-06-23): Spend ₹4,329.44, Meta ROAS 2.19, blended 1.76x, 6 purchases.
- Latest (2026-07-14): Spend ₹2,896.72, Meta ROAS 1.40, blended 1.68x, 4 purchases.
  Down vs the Jun 23 baseline, but up vs the unlogged Jul 13 numbers (ROAS 0.48,
  blended 1.41x, 2 purchases) — still riding on a single ad ("Joey V2-bofu").
- Latest (2026-07-15): Spend ₹2,897.37 (flat), ROAS 1.37 (down slightly),
  4 purchases (flat) — the ad side barely moved. Blended ROAS jumped to 2.46x,
  but that's from stronger Shopify order volume (7 vs 5), not ad performance.
  Rosy flagged that boosting mysteriously stopped on a separate post, unresolved.
- Latest (2026-07-16): Spend ₹2,831.68 (down ~2.3%), ROAS 1.19 (down from 1.37),
  4 purchases (flat) — still the same single ad. Blended n/a (Shopify down).
  Shiva noted ad spend is now split between the ads team and social team's
  separate boosted-post budget. A new concern: a boosted post got 10k
  views/700 likes but zero comments/shares out of ~9,793 reach — Atharv
  suspects bot views, unresolved.
- Latest (2026-07-17): Real progress — spend ₹5,832.56 (up ~106%) and purchases 8
  (doubled), ROAS up to 1.65 (from 1.19). First day running 4 ads at once (Joey
  V2-bofu, Hindi Girl Collab, Vanga Manasa v1, a Jackie partnership ad) instead of
  depending on a single ad. Best CPA: Vanga Manasa v1 at ₹412.53.
- Trend: ▲ (broke out of single-ad dependency; spend and purchases both roughly doubled)

### 5. Product / app (DailyPup v2)
- Latest (2026-06-23): Sudheer to list v2 features + set up OTP-setup meeting;
  team reminded to use the app.
- Latest (2026-07-14): Google sign-in bug fixed; team pushed to download/test
  (Android recommended for now); recruiting 8-9 more internal testers; idea raised
  to email probiotics customers a marketing teaser + survey about the app.
- Latest (2026-07-15): Same tester-recruitment blocker as before (need 8-9
  more; 5 signed up but 0 have opened the app yet), plus a harder requirement
  surfaced — Google requires a 7-day in-app streak before allowing a full
  production launch. Team discussed tapping existing customers via WhatsApp
  if internal recruiting stalls.
- Latest (2026-07-16): Still short of the 12-tester/14-day bar (only ~3 opted
  in per yesterday's audit). Sudheer shipped a new build and opened a bug
  thread; a login bug is now blocking at least 2 testers (Shiva, and Rosy's
  Android-using friend), unresolved at day's end. Krishna's personal contacts
  are trickling in (2 more expected). DUNS number debated — not actually
  needed yet, but Sudheer registered for one anyway.
- Latest (2026-07-17): Opt-ins climbed to 6 (from ~3 as of the Jul 16 audit) — Sudheer
  reported the count to Tobechukwu. Still short of the 12-tester bar; login-bug status
  from Jul 16 not mentioned again today.
- Trend: ▲ (opt-in count moving up)

### 6. Content engine
- Latest (2026-06-23): Rosy posted a new video in #creatives-and-shih; good
  content shot with VIP customer Vanga.
- Latest (2026-07-14): New ad video (ft. Vanga Manasa's dog) shot, live-edited,
  and finalized same day — team called it "sooo awesome," will run as a paid ad
  and be boosted on two platforms. New product-pack design also in review
  (duck vs salmon flavor, feeding-chart table pending). Celebrity/influencer idea
  floated for a September push.
- Latest (2026-07-15): New video cut reviewed (V2/V2.2); Instagram profile
  refreshed for a WhatsApp click-through; a new customer content lead
  (Priyanka, 2 Shih Tzus) sourced for a review video. But: the Jul 18 vet Live
  poster says "Sunday" when the 18th is actually a Saturday — Krishna caught
  it, team chose to leave it uncorrected. Also an unexplained ads-boosting stop.
- Latest (2026-07-16): The stuck water-bottle/Amazon-second-product decision
  finally moved forward (weeks of drag — Shiva called it out directly);
  sourcing a sample now. New ad creative A/B-boosted against an older post
  (see Ads); raw footage shared for the next edit; new supplement-design
  creative posted, awaiting Shiva's opinion. Amazon A+ desktop creatives done.
- Latest (2026-07-17): Atharv asked Priyatham/Rosy for 2 more scripts twice (morning and
  night) with nothing delivered by day's end. Charu flagged a video as "not very
  attractive" with no resolution. On the plus side, the branded-content/partnership ad
  authorization issue got resolved and the ad went live.
- Trend: ▬ (open script request and unresolved feedback, but the partnership-ad
  authorization blocker cleared)

### 7. Pawathon (Oct 18 Hyderabad pet marathon) — NEW ARC
- Latest (2026-07-17): Abhay announced VitalPaws' first major offline event — a 1.5km
  pet marathon in Hyderabad on October 18th, venue already booked and paid for. Roadmap:
  weekly mini warm-up events (late July–Sept) for content + hype, Shiva runs
  Hyderabad-only ads, Rosy + Atharv chase local influencers/celebrities with dogs
  (Atharv already reached out to Venkatesh Daggubati's studio), target 400 registrations
  by Aug 20 to start sponsor outreach Aug 21, then Sept/Oct logistics (t-shirts, bibs,
  medals). Abhay also wants TV/newspaper coverage. Team reacted positively; Rosy flagged
  the plan still needs to be broken into a per-person task list.
- Trend: ▲ (just launched — the most concrete, funded step yet toward the "community as
  big as Instagram" vision)
- Open risk: no per-person task breakdown yet; a lot of ambitious steps (400
  registrations, sponsors, press) on a tight multi-month timeline.
