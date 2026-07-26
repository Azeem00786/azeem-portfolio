# Portfolio — Mohammad Azeem

Personal portfolio site aimed at agencies and product teams looking for React Native
and mobility DevOps work.

Built with **Vite + React + TypeScript** and hand-written CSS — no UI framework, so the
whole thing ships as ~3.6 kB of gzipped CSS and one small JS bundle.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Editing content

**All copy lives in [`src/content.ts`](src/content.ts).** Projects, services, skills,
experience, contact details and section names are plain data — edit that one file and
the site updates. You don't need to touch the components to add a project or change a
headline.

To add a project, append to the `projects` array:

```ts
{
  id: 'my-project',
  index: '07',
  title: 'Project name',
  kind: 'What it is',
  year: 'Live',
  summary: 'One paragraph the client reads first.',
  detail: ['Bullet one.', 'Bullet two.'],
  stack: ['React Native', 'Firebase'],
  link: { href: 'https://example.com/', label: 'example.com' },
  featured: true,   // featured projects start expanded
}
```

The résumé PDF is served from `public/AzeemResume.pdf` — replace that file to update
the download link.

## Deploying to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to
`main`. It figures out the correct base path automatically, so it works whether the
repo is named `<username>.github.io` or anything else.

One-time setup:

1. Create a repo on GitHub and push this project to the `main` branch.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push. The site goes live at `https://<username>.github.io/<repo>/`.

### Custom domain

Add a `CNAME` file containing your domain to `public/`, then point the domain's DNS at
GitHub Pages and set it under Settings → Pages. With a custom domain the site is served
from the root, so also set `VITE_BASE=/` in the workflow (or rename the repo to
`<username>.github.io`).

## Structure

```
src/
  content.ts      all site copy and data
  styles.css      design tokens + every style, organised by section
  hooks.ts        scroll reveal, active section, theme, clipboard
  App.tsx         page composition
  components/     Nav, Hero, Work, Services, Stack, Experience, Contact, Footer
```

Theme is dark by default with a light mode toggle; the choice persists in
`localStorage` and is applied before first paint to avoid a flash.
