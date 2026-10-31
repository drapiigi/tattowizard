# Tattowizard (concept)

A concept website for **Tattowizard** (working name), a fictional appointment-only tattoo atelier in Osu, Accra.
Tagline: *Custom ink, conjured with intent.*

Everything here is fictional: the studio, artists, address, email (`hello@tattowizard.example`), prices and work.
All imagery is AI-generated for this concept. The page carries `noindex, nofollow` and is **not deployed anywhere**.

## Sections
Hero with booking CTA · studio statement · artists (4) · portfolio with style filters
(fine line, blackwork, traditional, realism) · styles & pricing guide (GH₵) · consultation form
(demo only, sends and stores nothing) · aftercare · FAQ · location & hours · footer.

## Structure
```
index.html            single page
favicon.svg
assets/css/style.css  all styles (no inline styles)
assets/js/main.js     nav, scroll reveal, portfolio filters, demo form (no inline scripts)
assets/img/           self-hosted WebP images (AI-generated)
assets/fonts/         Fraunces + Inter (SIL OFL, licences included)
previews/             screenshots (desktop-full, mobile-top, mobile-portfolio)
docs/                 PREFERENCES.md, ARCHITECTURE.md
```

## Run locally
```sh
python3 -m http.server 8765
# open http://localhost:8765
```
No build step and no dependencies.

## Workflow
- All changes go to `dev` first. `main` is updated only after approval (fast-forward from `dev`).
- No public hosting, GitHub Pages or Cloudflare without explicit approval. Repo stays private.
