# Agent guide

This repository is Mohammad Azeem's portfolio site. It uses Vite, React 18, TypeScript, and plain CSS. Keep changes focused and consistent with the existing design.

## Where to work

- `src/content.ts` is the source of truth for site copy, profile details, projects, services, skills, and contact links. Change content there before editing components.
- `src/components/` contains the page sections; `src/App.tsx` sets their order.
- `src/styles.css` contains design tokens, responsive rules, and section styles. Reuse existing patterns when adding UI.
- `src/hooks.ts` contains shared browser behavior, including theme and scroll handling.
- `public/` holds static assets. The résumé download uses `public/AzeemResume.pdf`.
- `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages. `VITE_BASE` controls its base path.

## Working conventions

- Use TypeScript and functional React components, matching the surrounding code style.
- Preserve responsive layouts, keyboard access, meaningful link text, and both light and dark themes when changing UI.
- Keep personal details and project claims aligned with `src/content.ts`; do not invent credentials, results, or external URLs.
- Do not edit generated output in `dist/` or `tsconfig.tsbuildinfo` by hand.

## Check changes

- Install dependencies with `npm install` if needed.
- Run `npm run build` before finishing code or content changes. This runs the TypeScript check and Vite production build.
- Use `npm run dev` for local visual checks and `npm run preview` to inspect the production build when layout or routing changes.
- There is no test script in `package.json`; add targeted tests only when a change warrants them.
