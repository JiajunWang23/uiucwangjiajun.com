/**
 * Contact form -> Google Sheet
 *
 * Standalone Apps Script project (script.new) deployed as a web app.
 * Setup steps: contact-form/README.md
 */

// ID of the Google Sheet that collects messages (the long id in its URL).
const SHEET_ID = "1VFciqN8T39yqMcLMBAEG-qMEBy0kCG9a2BrVRf0pKtc";
const SHEET_NAME = "Messages";
const HEADERS = ["Received", "Name", "Email", "Company / school", "Topic", "Message", "Page", "Status"];

// Email the sheet owner when a new message arrives. The address is never exposed to the site.
const NOTIFY_OWNER = true;

const LIMITS = { name: 120, email: 200, organization: 160, topic: 40, message: 4000, page: 300 };
const TOPICS = ["Coffee chat", "Resume request", "Job opportunity", "Collaboration", "Other"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const p = (e && e.parameter) || {};

    // Honeypot field: bots fill it, people never see it.
    if (p.website) return json_({ ok: true });

    const entry = {
      name: clean_(p.name, LIMITS.name),
      email: clean_(p.email, LIMITS.email),
      organization: clean_(p.organization, LIMITS.organization),
      topic: TOPICS.indexOf(p.topic) >= 0 ? p.topic : "Other",
      message: clean_(p.message, LIMITS.message),
      page: clean_(p.page, LIMITS.page),
    };

    if (!entry.name || !entry.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) {
      return json_({ ok: false, error: "Please fill in your name, a valid email, and a message." });
    }
    if (!entry.organization) {
      return json_({ ok: false, error: "Please include your company or school." });
    }

    lock.waitLock(10000);
    const sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      entry.name,
      entry.email,
      entry.organization,
      entry.topic,
      entry.message,
      entry.page,
      "New",
    ]);
    lock.releaseLock();

    if (NOTIFY_OWNER) notify_(entry);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: "Server error" });
  } finally {
    try {
      lock.releaseLock();
    } catch (ignored) {}
  }
}

// Lets you open the web-app URL in a browser to confirm it's live.
function doGet() {
  return json_({ ok: true, service: "contact-form" });
}

function getSheet_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setColumnWidth(6, 420);
  }
  return sheet;
}

// Trim, cap length, and neutralize spreadsheet formula injection (=, +, -, @).
function clean_(value, max) {
  let text = String(value || "").trim().slice(0, max);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function notify_(entry) {
  const owner = Session.getEffectiveUser().getEmail();
  if (!owner) return;
  MailApp.sendEmail({
    to: owner,
    replyTo: entry.email.replace(/^'/, ""),
    subject: `[Website] ${entry.topic} from ${entry.name}`,
    body: [
      `Name: ${entry.name}`,
      `Email: ${entry.email}`,
      `Company / school: ${entry.organization || "-"}`,
      `Topic: ${entry.topic}`,
      "",
      entry.message,
      "",
      `Sent from ${entry.page || "the website"}`,
    ].join("\n"),
  });
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
