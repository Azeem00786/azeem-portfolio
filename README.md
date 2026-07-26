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

## Turning on "Book a 15-min call"

The booking buttons (nav, hero and contact) currently open a pre-filled booking email.
To make them open a real scheduler:

1. Create a free account at [cal.com](https://cal.com) (recommended) or
   [calendly.com](https://calendly.com).
2. Create an event type: **15 minutes**, and set your availability to cover the hours
   you want bookable.
3. Copy the public booking link — it looks like `https://cal.com/your-name/15min`.
4. Paste it into `booking:` in `src/content.ts`, then commit and push.

Once `booking` is non-empty the buttons switch to the scheduler automatically and open
in a new tab. Leave it empty and they keep falling back to email, so nothing breaks.

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
