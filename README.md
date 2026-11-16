# DaveBall Weddings

A fully responsive one-page website, built with Vite and plain HTML, CSS and JavaScript.

**Live site:** https://thiuma.github.io/DaveBall-Weddings/

## Run it locally

Requires Node 20.19 or newer (`nvm use` reads `.nvmrc`).

```bash
npm install
npm run dev
```

## Project layout

```
index.html            The one-pager's markup
src/styles/main.css   Design tokens, base styles and section styles
src/main.js           Scripts (interactions and animations come later)
public/               Static assets copied as-is (images, fonts, favicon)
```

## Deploying

Every push to `main` builds the site and publishes it to GitHub Pages through
`.github/workflows/deploy.yml`. Work happens on short-lived branches that are
merged into `main` through pull requests.

## Phases

1. Layout and UI, from the Paper design references and the PDF content
2. Interactions and animations
