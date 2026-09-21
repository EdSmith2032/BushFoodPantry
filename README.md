# Bush Food Pantry

Website for Bush Food Pantry in Bush, Louisiana. Built with React, TypeScript, Vinext and CSS.

## Local development

Run `npm install`, then `npm run dev`. The local address is printed in the terminal.
Run `npm run build` for a production build. `npx tsc --noEmit` checks TypeScript.

## Content and assets

Edit `app/page.tsx` for content and `app/globals.css` for styling.
See `RESEARCH.md` for sources and items requiring pantry confirmation before public launch.

The proof of concept is marked noindex. No donation processing, tracking, or personal-information collection is enabled. `.openai/` is local Sites configuration and is ignored by Git; the project builds without it.

The full starter lint currently flags existing unused vendor components in components/ui and hooks. Site source can be checked with `npx oxlint app`.
