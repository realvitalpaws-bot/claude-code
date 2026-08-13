# Vital Paws — Task Desk

A lean internal task-raising tool for the Vital Paws team (Tech / Business / CRM problems).

- **Raise tasks from Slack** — a `New Task` shortcut, easy on mobile.
- **Everything lands in a Google Sheet** — the single source of truth.
- **Manage in a simple web UI** — list + detail board to view, assign, comment, and update progress. Creating tasks here is a secondary backup.

```
  Slack shortcut ──▶ modal ──▶ Apps Script ──▶ Google Sheet ◀── Web UI
     (create, primary)                         (source of truth)  (manage + comment)
```

## What's here

| File | Purpose |
|------|---------|
| `apps-script/Code.gs` | Backend: creates the sheet, serves the UI, server APIs, Slack handler |
| `apps-script/Index.html` | The web UI — mobile-responsive task board (list + detail drawer) |
| `SETUP.md` | Step-by-step setup: Sheet, deploy the web app, Slack shortcut |

## Get started

See **[SETUP.md](SETUP.md)**. Short version:

1. New Google Sheet → **Extensions → Apps Script** → paste `Code.gs` and `Index.html`.
2. Run `setupSheet()` once to build the Tasks tab.
3. **Deploy → Web app** (access: within your Workspace) → share the URL.
4. Create a Slack app with a global **New Task** shortcut pointing at the web-app URL.

## Data model (one row per task)

| ID | Created | Summary | Assignee | Status | Priority | Link | Image | Created By | Comments |
|----|---------|---------|----------|--------|----------|------|-------|------------|----------|

Status: **Open → In Progress → Done**.
