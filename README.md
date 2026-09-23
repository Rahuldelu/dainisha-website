# Dainisha — Website (v1)

A single-page, mobile-first website for Dainisha: AI-assisted customer growth systems for local businesses.

## File structure

```
/index.html     → page structure & content
/styles.css     → design system (colors, type, layout, animation)
/script.js      → mobile menu, WhatsApp link, scroll reveal
/assets/        → put a logo file here (see below), currently empty
```

## Preview it locally

You don't need a server. Just double-click `index.html`, or:

- **Mac:** open the file in Finder, right-click → Open With → your browser.
- **Windows:** double-click `index.html`.
- **VS Code:** install the "Live Server" extension, right-click `index.html` → "Open with Live Server" (gives you auto-refresh while you edit).

## Deploy it for free

Any of these work with no cost and no domain required to start:

**Netlify Drop** (easiest)
1. Go to https://app.netlify.com/drop
2. Drag the whole `dainisha` folder onto the page.
3. You get a live `*.netlify.app` link instantly.

**Vercel**
1. Create a free account at https://vercel.com
2. "Add New Project" → drag/upload the folder (or connect a GitHub repo containing it).
3. Deploy — you get a `*.vercel.app` link.

**GitHub Pages**
1. Push the folder to a GitHub repository.
2. Repo Settings → Pages → set source to the `main` branch, root folder.
3. Your site is live at `https://<username>.github.io/<repo>`.

When you're ready for `dainisha.com` (or similar), any of the above let you attach a custom domain later — no rebuild needed.

## Where to replace placeholders

All contact placeholders live in one place, near the top of `index.html`:

```html
window.DAINISHA_CONFIG = {
  WHATSAPP_NUMBER: "REPLACE_WITH_NUMBER", // digits only, country code first, e.g. "919999999999"
  EMAIL: "REPLACE_WITH_EMAIL",
  INSTAGRAM_URL: "REPLACE_WITH_URL",
  YOUTUBE_URL: "REPLACE_WITH_URL",
  LINKEDIN_URL: "REPLACE_WITH_URL"
};
```

Edit these five values and the "Book a Growth Audit" / "WhatsApp Dainisha" buttons and footer social links update automatically — no other file needs touching.

**Logo:** the header currently uses a simple line-mark placeholder (an inline SVG inside `.logo-mark` in `index.html`, around the navigation section). Once you have an approved logo file:
1. Save it as `/assets/dainisha-logo.svg` (or `.png`).
2. In `index.html`, replace the `<span class="logo-mark">...</span>` contents with `<img src="assets/dainisha-logo.svg" alt="Dainisha" height="28">`.

## Design tokens (for future edits)

Defined at the top of `styles.css` under `:root`:

| Token | Hex | Use |
|---|---|---|
| `--charcoal` | `#1B1B1E` | primary text, dark backgrounds |
| `--off-white` | `#F6F3EF` | page background |
| `--violet` | `#4A3566` | accents, links |
| `--deep-violet` | `#33234A` | CTA section, hover states |
| `--lavender` | `#B9A9D9` | small accents, node dots |
| `--plum` | `#6B4E71` | reserved accent |

## Notes

- No frameworks — plain HTML/CSS/JS, loads fast on mobile data.
- Respects `prefers-reduced-motion`.
- The "Selected Work" section shows Aashirwad Classes and Shivaay Fitness Studio labeled as concepts, not completed client case studies — keep that distinction until real results exist.
- No fake testimonials, stats, or client counts are included anywhere, by design — add real ones only when you have them.
- This is v1 as a single page. The structure (`services`, `work`, `process`, `about`, `final-cta` ids) is ready to be split into separate pages later without a rebuild.
