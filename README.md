# Personal Website

A personal website built with [React](https://react.dev) and [Vite](https://vitejs.dev), deployed to GitHub Pages.

Live: https://maximilianouribe.github.io

## Develop locally

```sh
npm install      # first time only
npm run dev      # start dev server (hot reload) at http://localhost:5173
```

## Build

```sh
npm run build    # outputs static files to dist/
npm run preview  # preview the production build locally
```

## Deploy

Deployment is automatic. Every push to the `main` branch triggers the
GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages.

```sh
git add .
git commit -m "Your message"
git push
```

## Project structure

- `index.html` — Vite HTML entry point
- `src/main.jsx` — React app bootstrap
- `src/App.jsx` — main page component
- `src/index.css` — global styles
- `src/App.css` — page/component styles
- `vite.config.js` — Vite configuration
