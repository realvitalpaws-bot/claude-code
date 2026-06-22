# Vital Paws — Task Desk · Setup Guide

A lean internal task tracker:

- **Google Sheet** = the single source of truth (every task is one row).
- **Apps Script** = creates the sheet, serves the web UI, and receives tasks from Slack.
- **Slack shortcut** = the easy, primary way to raise a task (great on mobile).
- **Web UI** = secondary place to view, assign, comment, update status, and (as a backup) create tasks.

```
  Slack shortcut ──▶ modal ──▶ Apps Script ──▶ Google Sheet ◀── Apps Script web UI
     (create)                                  (source of truth)   (manage + comment)
```

---

## Part 1 — Create the Google Sheet + Apps Script

1. Go to <https://sheets.google.com> and create a **new blank spreadsheet**. Name it `Vital Paws Tasks`.
2. In the sheet menu: **Extensions → Apps Script**. A script editor opens.
3. Delete the default `Code.gs` content and paste in the contents of **`apps-script/Code.gs`** from this repo.
4. Click the **+** next to *Files* → **HTML** → name it `Index` (exactly). Paste in **`apps-script/Index.html`**.
5. Save (💾).
6. In the editor, choose the function **`setupSheet`** in the dropdown and click **Run**.
   - Authorise when prompted (it's your own script accessing your own sheet).
   - A green toast "Tasks sheet is ready." confirms it. Your sheet now has a **Tasks** tab with these columns:

   | ID | Created | Summary | Assignee | Status | Priority | Link | Image | Created By | Comments |
   |----|---------|---------|----------|--------|----------|------|-------|------------|----------|

   Status and Priority have dropdowns. Status options: **Open / In Progress / Done**.

---

## Part 2 — Deploy the Web UI

1. In the Apps Script editor: **Deploy → New deployment**.
2. Gear icon → **Web app**.
3. Settings:
   - **Execute as:** Me
   - **Who has access:** *Anyone within Vital Paws* (your Google Workspace) — so only your team can open it.
4. **Deploy**, then copy the **Web app URL**. That's the link your team opens (works in any phone/desktop browser).

> To publish later code changes: **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy.**

---

## Part 3 — Slack shortcut for creating tasks

This is the part **you** set up in Slack (I can't create the Slack app for you, but here are exact steps).

1. Go to <https://api.slack.com/apps> → **Create New App → From scratch**. Name it `Task Desk`, pick your workspace.
2. **OAuth & Permissions → Scopes → Bot Token Scopes**, add: `commands`.
3. **Install to Workspace**, then copy the **Bot User OAuth Token** (`xoxb-...`).
4. Back in the **Apps Script editor**: **Project Settings (⚙️) → Script Properties → Add script property**
   - Name: `SLACK_BOT_TOKEN`  · Value: the `xoxb-...` token. Save.
5. **Interactivity & Shortcuts** → toggle **On**.
   - **Request URL:** paste your Apps Script **Web app URL** (the same `/exec` URL).
   - Under **Shortcuts → Create New Shortcut → Global**:
     - Name: `New Task`
     - Short description: `Raise a task`
     - Callback ID: `new_task_shortcut`
   - Save.
6. Reinstall the app if Slack asks.

### Using it
- In Slack (desktop or **mobile app**), tap the **➕ / shortcuts** menu → **New Task** → fill the form → **Create**.
- A new row instantly appears in the Google Sheet and in the web UI.

---

## Notes & limits (kept intentionally simple)

- **Images:** stored as a URL in the `Image` column (the UI shows a preview). For pasted screenshots, upload to Drive/Slack and put the link here. (We can add direct upload later.)
- **Comments:** appended as timestamped lines in one cell — simple and readable. Fine for an internal tool.
- **Auth:** the web UI is limited to your Workspace via the deployment setting; no separate login to build.
- **Upgrade path:** if you later outgrow Apps Script (speed/polish), the Sheet stays as-is and only the UI gets rebuilt (e.g. Next.js). Nothing is wasted.

## Quick test checklist
- [ ] `setupSheet()` ran and the **Tasks** tab exists with headers
- [ ] Web app URL opens the board and shows "No tasks…"
- [ ] "+ New Task" in the UI creates a row
- [ ] Slack **New Task** shortcut creates a row
- [ ] Editing status/assignee and adding a comment in the UI updates the sheet
