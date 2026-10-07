# Tating Docs

User documentation for [Tating](https://play.google.com/store/apps/details?id=com.tating.app), a drum notation editor for iOS and Android.

**Published at [bcrawford24.github.io/tating-docs](https://bcrawford24.github.io/tating-docs/).**

## How it's built

- **[Docusaurus](https://docusaurus.io/)** in docs-only mode: every page is a Markdown file in [`docs/`](docs/), and [`sidebars.js`](sidebars.js) sets the order.
- **GitHub Pages**, published by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.
- **Pull requests are checked first.** The same workflow builds every pull request, and the build fails on any broken link, so a bad page can't reach the published site.

## Where the words come from

The app's own repository is private. This site is the user-facing slice of it:

| Page | Source |
|---|---|
| Guide pages | The live store description, regrouped by task |
| Accessibility | The app repo's accessibility checklist, restated for users |
| Release notes | The store text published with each release, verbatim |
| Privacy policy | [bcrawford24/tating-privacy](https://github.com/bcrawford24/tating-privacy), the URL the stores link to |

## Working on it

```bash
npm ci
npm start          # live preview at http://localhost:3000/tating-docs/
npm run build      # the same check a pull request runs
```

© Robert Benjamin Crawford. All rights reserved.
