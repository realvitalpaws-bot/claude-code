/**
 * Vital Paws — Internal Task Desk
 * Apps Script backend
 *
 * Responsibilities:
 *   1. Create / initialise the Google Sheet that stores every task.
 *   2. Serve the web UI (Index.html) — list + detail task board.
 *   3. Provide server functions the UI calls via google.script.run.
 *   4. Receive tasks from Slack (shortcut -> modal -> doPost).
 *
 * Setup order: run setupSheet() once, then Deploy > New deployment > Web app.
 * See SETUP.md for the full walkthrough.
 */

// ----------------------------------------------------------------------------
// Config
// ----------------------------------------------------------------------------

var SHEET_NAME = 'Tasks';

// Column order in the sheet. Changing this requires re-running setupSheet().
var HEADERS = [
  'ID',
  'Created',
  'Summary',
  'Assignee',
  'Status',
  'Priority',
  'Link',
  'Image',
  'Created By',
  'Comments',
];

var STATUSES = ['Open', 'In Progress', 'Done'];
var PRIORITIES = ['Low', 'Medium', 'High'];

// ----------------------------------------------------------------------------
// Step 1 — create the sheet (run once from the editor)
// ----------------------------------------------------------------------------

/**
 * Creates the Tasks sheet with headers, formatting, and dropdown validation.
 * Safe to re-run: it only sets up structure, it never deletes existing rows.
 */
function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Header row.
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet
    .getRange(1, 1, 1, HEADERS.length)
    .setFontWeight('bold')
    .setBackground('#1f2937')
    .setFontColor('#ffffff');
  sheet.setFrozenRows(1);

  // Dropdowns for Status and Priority (rows 2..1000).
  var statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(STATUSES, true)
    .build();
  var priorityRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(PRIORITIES, true)
    .build();
  sheet.getRange(2, colIndex_('Status'), 999, 1).setDataValidation(statusRule);
  sheet.getRange(2, colIndex_('Priority'), 999, 1).setDataValidation(priorityRule);

  // Reasonable widths.
  sheet.setColumnWidth(colIndex_('Summary'), 320);
  sheet.setColumnWidth(colIndex_('Comments'), 360);

  SpreadsheetApp.getActiveSpreadsheet().toast('Tasks sheet is ready.', 'Setup complete', 5);
}

// ----------------------------------------------------------------------------
// Web app entry points
// ----------------------------------------------------------------------------

/** Serve the task board UI. */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Vital Paws — Task Desk')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Receives POSTs. Two kinds:
 *  - Slack interactivity (modal submit) -> form-encoded `payload`.
 *  - Plain JSON {summary, assignee, ...} -> simple programmatic create.
 */
function doPost(e) {
  // Slack sends application/x-www-form-urlencoded with a `payload` field.
  if (e && e.parameter && e.parameter.payload) {
    return handleSlackInteraction_(e.parameter.payload);
  }

  // Fallback: plain JSON body.
  try {
    var body = JSON.parse(e.postData.contents);
    var task = addTask_(body);
    return jsonResponse_({ ok: true, task: task });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

// ----------------------------------------------------------------------------
// Functions the web UI calls via google.script.run
// ----------------------------------------------------------------------------

function apiGetTasks() {
  return getTasks_();
}

function apiGetMeta() {
  return { statuses: STATUSES, priorities: PRIORITIES };
}

function apiAddTask(task) {
  return addTask_(task);
}

function apiUpdateTask(id, fields) {
  return updateTask_(id, fields);
}

function apiAddComment(id, author, text) {
  var sheet = getSheet_();
  var row = findRow_(id);
  if (row < 0) throw new Error('Task not found: ' + id);

  var c = colIndex_('Comments');
  var existing = sheet.getRange(row, c).getValue();
  var stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'MMM d HH:mm');
  var line = '[' + stamp + '] ' + (author || 'Someone') + ': ' + text;
  var next = existing ? existing + '\n' + line : line;
  sheet.getRange(row, c).setValue(next);
  return getTask_(id);
}

// ----------------------------------------------------------------------------
// Core data helpers
// ----------------------------------------------------------------------------

function getSheet_() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('Sheet "' + SHEET_NAME + '" missing. Run setupSheet() first.');
  return sheet;
}

function colIndex_(name) {
  return HEADERS.indexOf(name) + 1; // 1-based for Sheets ranges
}

/** Returns all tasks (newest first) as an array of plain objects. */
function getTasks_() {
  var sheet = getSheet_();
  var last = sheet.getLastRow();
  if (last < 2) return [];
  var values = sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();
  var tasks = values
    .filter(function (r) { return r[colIndex_('ID') - 1]; })
    .map(rowToTask_);
  tasks.reverse(); // newest first
  return tasks;
}

function getTask_(id) {
  var row = findRow_(id);
  if (row < 0) return null;
  var sheet = getSheet_();
  return rowToTask_(sheet.getRange(row, 1, 1, HEADERS.length).getValues()[0]);
}

function rowToTask_(r) {
  var task = {};
  HEADERS.forEach(function (h, i) {
    task[keyOf_(h)] = r[i];
  });
  // Created can be a Date object; send a readable string to the UI.
  if (task.created instanceof Date) {
    task.created = Utilities.formatDate(task.created, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm');
  }
  return task;
}

function keyOf_(header) {
  return header.toLowerCase().replace(/ /g, '');
}

function findRow_(id) {
  var sheet = getSheet_();
  var last = sheet.getLastRow();
  if (last < 2) return -1;
  var ids = sheet.getRange(2, colIndex_('ID'), last - 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i][0]) === String(id)) return i + 2;
  }
  return -1;
}

/** Append a new task row. Returns the created task object. */
function addTask_(input) {
  var sheet = getSheet_();
  var id = nextId_();
  var now = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm');

  var record = {
    id: id,
    created: now,
    summary: input.summary || '',
    assignee: input.assignee || '',
    status: input.status || 'Open',
    priority: input.priority || 'Medium',
    link: input.link || '',
    image: input.image || '',
    createdby: input.createdby || input.createdBy || '',
    comments: '',
  };

  var row = HEADERS.map(function (h) { return record[keyOf_(h)]; });
  sheet.appendRow(row);
  return record;
}

/** Update specific fields of a task by id. */
function updateTask_(id, fields) {
  var sheet = getSheet_();
  var row = findRow_(id);
  if (row < 0) throw new Error('Task not found: ' + id);

  Object.keys(fields).forEach(function (key) {
    // Accept either header name or normalised key.
    var header = HEADERS.filter(function (h) {
      return keyOf_(h) === keyOf_(key) || h === key;
    })[0];
    if (header && header !== 'ID') {
      sheet.getRange(row, colIndex_(header)).setValue(fields[key]);
    }
  });
  return getTask_(id);
}

/** Generates the next ID like T-001, T-002 ... */
function nextId_() {
  var sheet = getSheet_();
  var last = sheet.getLastRow();
  var n = 0;
  if (last >= 2) {
    var ids = sheet.getRange(2, colIndex_('ID'), last - 1, 1).getValues();
    ids.forEach(function (r) {
      var m = String(r[0]).match(/T-(\d+)/);
      if (m) n = Math.max(n, parseInt(m[1], 10));
    });
  }
  return 'T-' + String(n + 1).padStart(3, '0');
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

// ----------------------------------------------------------------------------
// Slack integration
// ----------------------------------------------------------------------------
//
// Flow: user taps the "New Task" shortcut in Slack -> Slack sends a
// `shortcut` interaction with a trigger_id -> we open a modal via views.open
// -> user submits -> Slack sends a `view_submission` -> we write the row.
//
// Requires a Script Property SLACK_BOT_TOKEN (xoxb-...). See SETUP.md.

function handleSlackInteraction_(payloadStr) {
  var payload = JSON.parse(payloadStr);

  if (payload.type === 'shortcut') {
    openTaskModal_(payload.trigger_id);
    return jsonResponse_({}); // ack quickly
  }

  if (payload.type === 'view_submission') {
    var v = payload.view.state.values;
    var task = addTask_({
      summary: val_(v, 'summary_block', 'summary'),
      assignee: val_(v, 'assignee_block', 'assignee'),
      link: val_(v, 'link_block', 'link'),
      priority: selVal_(v, 'priority_block', 'priority') || 'Medium',
      createdBy: (payload.user && payload.user.username) || '',
    });
    // Close the modal.
    return jsonResponse_({ response_action: 'clear' });
  }

  return jsonResponse_({});
}

function val_(values, block, action) {
  try { return values[block][action].value || ''; } catch (e) { return ''; }
}

function selVal_(values, block, action) {
  try { return values[block][action].selected_option.value || ''; } catch (e) { return ''; }
}

function openTaskModal_(triggerId) {
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_BOT_TOKEN');
  if (!token) throw new Error('SLACK_BOT_TOKEN script property not set.');

  var view = {
    type: 'modal',
    callback_id: 'new_task',
    title: { type: 'plain_text', text: 'New Task' },
    submit: { type: 'plain_text', text: 'Create' },
    close: { type: 'plain_text', text: 'Cancel' },
    blocks: [
      {
        type: 'input',
        block_id: 'summary_block',
        label: { type: 'plain_text', text: 'Summary' },
        element: { type: 'plain_text_input', action_id: 'summary', multiline: true },
      },
      {
        type: 'input',
        block_id: 'assignee_block',
        optional: true,
        label: { type: 'plain_text', text: 'Assignee' },
        element: { type: 'plain_text_input', action_id: 'assignee' },
      },
      {
        type: 'input',
        block_id: 'link_block',
        optional: true,
        label: { type: 'plain_text', text: 'Link' },
        element: { type: 'plain_text_input', action_id: 'link' },
      },
      {
        type: 'input',
        block_id: 'priority_block',
        optional: true,
        label: { type: 'plain_text', text: 'Priority' },
        element: {
          type: 'static_select',
          action_id: 'priority',
          options: PRIORITIES.map(function (p) {
            return { text: { type: 'plain_text', text: p }, value: p };
          }),
        },
      },
    ],
  };

  UrlFetchApp.fetch('https://slack.com/api/views.open', {
    method: 'post',
    contentType: 'application/json; charset=utf-8',
    headers: { Authorization: 'Bearer ' + token },
    payload: JSON.stringify({ trigger_id: triggerId, view: view }),
    muteHttpExceptions: true,
  });
}
