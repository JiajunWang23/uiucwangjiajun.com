# Contact form → Google Sheet

The site's contact form posts to a Google Apps Script web app, which appends each message to a Google Sheet
(and, optionally, emails the sheet owner). No email address appears anywhere on the site.

## Setup (about 5 minutes)

1. Create a new Google Sheet, e.g. **"Website messages"**, and copy its ID from the URL
   (`docs.google.com/spreadsheets/d/<ID>/edit`).
2. Open [script.new](https://script.new) to create a standalone Apps Script project, paste in [`Code.gs`](Code.gs),
   set `SHEET_ID` to that ID, and save.
3. **Deploy → New deployment** → gear icon → **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, then **Authorize access** and allow the permissions (Sheets + send email).
4. Copy the **Web app URL** (ends in `/exec`).
5. In [`script.js`](../script.js), set it at the top:

   ```js
   const CONTACT_ENDPOINT = "https://script.google.com/macros/s/XXXX/exec";
   ```

6. Push. Submissions show up in the **Messages** tab; the first one creates it with headers.

Open the `/exec` URL in a browser to check it's live: it should return `{"ok":true,"service":"contact-form"}`.

## Notes

- **Updating the script:** after editing `Code.gs`, use **Deploy → Manage deployments → Edit → New version**
  so the same URL keeps working. A *new deployment* would give you a different URL.
- **Notifications:** set `NOTIFY_OWNER = false` in `Code.gs` to stop the email alerts. Replying to an alert
  replies straight to the sender.
- **Spam:** a hidden honeypot field drops most bots; input is length-capped and formula-escaped before it hits
  the sheet.
- **Company / school** is required, both in the browser and on the server. Resume requests also show a
  recruiters-only note.
