# Jiajun Wang

Personal portfolio website for `uiucwangjiajun.com`.

Static site — no build step. Deploy directly on Vercel.

## Vercel Settings

- Framework preset: Other
- Build command: leave empty
- Output directory: leave empty
- Install command: leave empty

## Structure

- `index.html` — single-page layout with a sticky nav (About / Experience / Projects / Blog / Contact) and scroll-spy. Blog is a regular link to `/blog`.
- `script.js` — **all site content lives in the `siteData` object at the top** (hero, education, experience, projects, contact cards). Edit there; the HTML renders from it.
- `styles.css` — light-blue glass theme (palette lives in the `:root` variables at the top), shared by the home page and `blog/`.
- `contact-form/` — Google Apps Script that saves contact-form messages to a Google Sheet. Setup: [`contact-form/README.md`](contact-form/README.md). The endpoint URL goes in `CONTACT_ENDPOINT` at the top of `script.js`.
- `assets/` — portrait (`avatar.jpg`, also used as header mark and favicon) and school / company logos.

## Editing tips

- Add a project: append to the relevant entry in `siteData.projectCategories[].projects`. `cover` sets the card accent stripe: `mint`, `blue`, `gold`, `violet`, `coral`; add `href` to make the card a link; set `status: "progress"` for an in-progress pill.
- Company / school entries: `logo` + `logoAlt` show an image, otherwise `mark` + `tone` render a monogram badge. `href` makes the logo and name clickable.
- Bump the `?v=` query on `styles.css` / `script.js` in `index.html` after changes to bust caches.
