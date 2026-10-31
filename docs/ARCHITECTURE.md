# Architecture

_Last updated: 31 Oct 2026_

Static single-page site. No framework, build step or backend.

- `index.html`: all content and sections; anchors `#artists #work #pricing #book #aftercare #faq #visit`.
- `assets/css/style.css`: design tokens in `:root` (colours, fonts, spacing), section styles, breakpoints at 1000 / 860 / 520 px, `.reveal` motion and a `prefers-reduced-motion` override.
- `assets/js/main.js` (deferred, external):
  - sticky nav state and mobile menu toggle
  - IntersectionObserver scroll reveal (adds `.js` to `<html>`; content stays visible without JS)
  - portfolio filters: `.chip[data-filter]` toggles `.piece[data-style]`; artist links (`[data-jump]`) preselect a style
  - demo form: client-side validation only, `preventDefault`, nothing sent or stored
- `assets/img/*.webp`: hero (1600 px), artists 3:4 and portfolio 4:3 (900 px), lazy-loaded below the fold.
- `assets/fonts/*.woff2`: self-hosted variable fonts (OFL).
- `previews/`: screenshots taken with Playwright + Chrome (1440×900 full page; 390×844 @2x mobile).

## Branches
- `dev`: work in progress, every change lands here first.
- `main`: approved state.

## Hosting
None. Local preview only (`python3 -m http.server`).
