# CLAUDE.md — VitalPaws Daily Sweep

This repository is the persistent memory for the **VitalPaws daily Slack sweep**. Each run, Claude reads the team's Slack channels (plus Shopify and Meta data), posts a **VitalPaws Daily Report** to Slack, and persists the same data here. Before this repo was connected the sweep had nowhere to save state, so memory reset every day — flagged in the Jul 1–5, 2026 reports as *"could not save to memory/customers.md — repo unreachable"* (day 5 in a row on Jul 5). This file, `memory/`, and `slack-digests/` exist so that no longer happens.

## What VitalPaws is
- Direct-to-consumer pet-health brand (India). Flagship product: **Pre + Probiotics** for dogs (itching, licking, gut/liver support).
- Order values seen so far: ₹599 / ₹799 / ₹879 / ₹1,499 / ₹2,799 / ₹2,879 (single & multi-pack, COD and prepaid).
- Sales channels: **Shopify** (primary), **Amazon** and **Flipkart** (marketplace-synced via Codisto), plus COD phone-confirmed orders.
- Ads run on **Meta**. Reporting currency is INR (₹); times in IST.

## The daily sweep — what to produce
Post a **VitalPaws Daily Report** to Slack and persist the same data here. Keep this section structure:
- **Story so far** — 2–3 sentences tying today to the prior day.
- **ADS** — spend, Meta revenue, ROAS, purchases, best ad, best CPA, best hours (IST).
- **CRM INDEX** — VIP watchlist + new customers logged today.
- **KEY UPDATES**, **CONTENT**, **ORDERS & SHIPPING**, **STANDUP**, **FINANCES**.
- **PROGRESS (episode recap)** — trend arrows per area: Ads/Growth, Content Engine, Customer Quality, Ops/Automation, Product/App, WhatsApp Community.
- **WHO NEEDS TO DO WHAT** — action items with owners.

## Where memory lives
- `memory/customers.md` — the CRM index. **Append/update every customer** the sweep sees. This is the file that repeatedly failed to save before the repo was connected.
- `memory/vip-watchlist.md` — VIPs and repeat buyers to nurture.
- `slack-digests/YYYY-MM-DD.md` — the archived daily report for each day.

## Conventions
- Filenames use `YYYY-MM-DD`. Money uses `₹` with thousands separators.
- Payment states: `UPI paid`, `card`, `COD (confirmed)`, `COD (pending)`, `marketplace-synced`.
- On a repeat order, **update the customer's existing row** (lifetime total, order count) instead of adding a duplicate.
- Flag as **VIP** any customer with lifetime ≥ ₹3,000 or an explicit team flag.

## Channels the sweep reads
Primary: `#vitalpaws-core`. Others seen: `#creatives-and-shih`, `#the-forge`, `#shipping-and-order-notifications`, `#dailystandup`, `#team-42`, `#office-finances-and-expenses`, `#comms`, `#dc-seo`, `#social`, `#zoihospitals`.
