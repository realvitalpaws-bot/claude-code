# VitalPaws — CRM Customer Index

Persistent customer log for the daily sweep. **Update this every run.** Seeded from the Jul 3–5, 2026 daily reports (which had to be rebuilt from Slack because the repo wasn't connected on those days). One row per customer — update the row on repeat orders rather than duplicating.

**Legend** — Payment: `UPI paid`, `card`, `COD (confirmed)`, `COD (pending)`, `marketplace-synced`. Status = last known confirmation/shipping state.

## VIP / repeat-buyer watchlist
Full detail in `memory/vip-watchlist.md`. Quick reference:

| Customer | Lifetime | Orders | Why flagged |
|---|---|---|---|
| Nana | ₹879+ | since Aug 2025 | Commissioner, Ghanaian Embassy; one of first 10 customers ever; personalised gift decided |
| Ch haranath | ₹5,598 | 2 | Repeat buyer, paid by card; nurture toward VIP, watch for 3rd order |
| Dhruv R Patel | ₹4,458 | 2 | Repeat buyer; COD confirmation still pending |

## Customers by day

### 2026-07-05 (17 orders)
| Customer | Amount | Payment | Dog / notes | Status |
|---|---|---|---|---|
| Ch haranath | ₹2,799 | card | Lifetime ₹5,598, 2nd order — repeat/VIP watch | Repeat buyer |
| Dhruv R Patel | ₹2,879 | COD (pending) | Lifetime ₹4,458, 2nd order — repeat/VIP watch | COD unconfirmed |
| Mita Gangoly | ₹1,499 | UPI paid | Biggest new order Jul 5 | Paid |
| Dr Maria M Borges | ₹799 | UPI paid | — | Paid |
| Shashidhar | ₹799 | UPI paid | — | Paid |
| Sanjana Morajkar | ₹799 | UPI paid | — | Paid |
| Shikha Saumya | ₹799 | UPI paid | — | Paid |
| Neelesh Bharath | ₹799 | UPI paid | — | Paid |
| Divya | ₹799 | UPI paid | — | Paid |
| Sampan | ₹879 | COD (pending) | Krishna called, no pickup; retry next morning | Pending |
| Kartikay pandey | ₹879 | COD (pending) | Retry next morning | Pending |
| Ajeta Singh | ₹879 | COD (pending) | Retry next morning | Pending |
| Shravya Sridharan | ₹599 | marketplace-synced | — | Synced |
| Jeevitha.s J | ₹599 | marketplace-synced | — | Synced |
| Rameshwari Thakur | ₹599 | marketplace-synced | — | Synced |
| Anne Dorothy Menzel | ₹599 | marketplace-synced | — | Synced |
| priya. Dhar | ₹599 | marketplace-synced | — | Synced |

### 2026-07-04 (11 new customers)
| Customer | Amount | Payment | Dog / notes | Status |
|---|---|---|---|---|
| Nana | ₹879 | COD (pending) | VIP — Ghanaian Embassy Commissioner, customer since Aug 2025, one of first 10 ever | VIP; gift decided, welcome in progress |
| Alfred Dennis E | ₹879 | COD (confirmed) | Scooby — Shih Tzu, 3y, ~7–8kg, itching/licking | Confirmed, welcome sent |
| Manikaran Babbar | ₹879 | COD (confirmed) | Love — Shih Tzu, 5y, 6kg, liver issue | Confirmed, welcome sent |
| Neelima Mathur | ₹879 | COD (confirmed) | — | Confirmed/shipped |
| Nanditha | ₹799 | UPI paid | Bruno Bandari — Lhasa Apso, 6y, 10–11kg | Confirmed, welcome sent |
| Meenakshi Sharma | ₹799 | UPI paid | Call unanswered | Shipped anyway (paid) |
| Shikha Sachdeva | ₹879 | COD (pending) | Call status unresolved | Pending |
| Renuka S | ₹879 | COD (pending) | — | Pending |
| Roma Ramchandani | ₹879 | COD (pending) | — | Pending |
| Lakshmi Nambiar | ₹799 | UPI paid | — | Pending confirmation |
| falguni patel | ₹799 | marketplace-synced | — | Synced |

### 2026-07-03 (6 new customers)
| Customer | Amount | Payment | Dog / notes | Status |
|---|---|---|---|---|
| Saurav | ₹879 | COD (confirmed) | Shiro — Shih Tzu, itching | Confirmed, shipped |
| Harsha | ₹879 | COD (confirmed) | Bablu — Shih Tzu, itching, no allergies | Confirmed, welcome sent |
| Karthika Prakash | ₹799 | UPI paid | No confirmation found yet | Paid — follow up |
| Prem | ₹799 | UPI paid | Call not answered | Welcome sent (paid) |
| Tejaswini Komaragiri | ₹799 | marketplace-synced (Codisto) | — | Synced |
| Harshil | ₹879 | COD (pending) | No answer to call/message, 2nd day trying | Keep trying |

## Open follow-ups (as of 2026-07-05)
- **COD callbacks (Krishna, next morning):** Sampan (₹879), Kartikay pandey (₹879), Ajeta Singh (₹879), Dhruv R Patel (₹2,879) — send welcome messages once confirmed.
- **Older pending confirmations to close out:** Shikha Sachdeva, Renuka S, Roma Ramchandani, Lakshmi Nambiar (Jul 4); Harshil (Jul 3, 2nd day).
