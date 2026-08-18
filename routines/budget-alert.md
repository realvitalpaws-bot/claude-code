# GCP budget alert → #vitalpaws-core

Set up on 2026-08-18. Watches Google Cloud spend for the `vital-paws` project
and warns the team in Slack before the bill gets big.

## What is in place (GCP side)

- **Billing account**: `billingAccounts/016945-C55170-20C0A0` ("Firebase Payment", currency INR)
- **Budget**: "vital-paws monthly limit (10k INR)" —
  `billingAccounts/016945-C55170-20C0A0/budgets/ddc88dea-b2c2-4503-ac2b-54bb4fb707a2`
  - Amount: ₹10,000 per calendar month, scoped to project `vital-paws` (project number 933347319582)
  - Thresholds: 50% (₹5,000), 90% (₹9,000), 100% (₹10,000), based on actual spend
  - Google also emails billing admins at each threshold by default
- **Pub/Sub topic**: `projects/vital-paws/topics/vital-paws-budget-alerts`
  (the budget publishes spend status here several times a day)
- **Pull subscription**: `projects/vital-paws/subscriptions/vital-paws-budget-alerts-sub`

## How alerts reach Slack

A scheduled Claude routine (`vital-paws budget alert → Slack`, every 6 hours,
fires into the session that built this) pulls the subscription, and when a new
threshold is crossed for the month, posts a plain-English alert to
**#vitalpaws-core** (`C09QHHR2R5J`). Each threshold is announced only once per month.

Fallback: if that run has no Slack access, it leaves a
"PENDING SLACK ALERT — post to #vitalpaws-core" note in `slack-digests/MEMORY.md`,
and the nightly digest session must post it.

**Nightly digest sessions:** if you see a "PENDING SLACK ALERT" marker in
`slack-digests/MEMORY.md`, post it to #vitalpaws-core and remove the marker.

## Auth notes (no secrets in this repo)

GCP access uses the `vital-paws` default compute service account
(`933347319582-compute@developer.gserviceaccount.com`), which was granted
Billing Account Costs Manager (on the billing account) and Pub/Sub Admin
(on the project). The key JSON is NOT committed here — it lives only in the
session that runs the routine. If a new session needs it, ask Shiva/the team
to re-upload the key.

## Also discovered

The "thinura" Firebase project (`thinura-d34e1`, project number 277389664973)
is on the same billing account and already has its own budget
("Firebase Project thinura-d34e1").
