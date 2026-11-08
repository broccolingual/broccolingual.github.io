# create-svelte

## Moments posts

Add a Markdown file to `src/routes/moments/posts/`. Put photos in
`src/lib/assets/moments/` and use their repository-relative path in the
frontmatter, for example:

```markdown
---
image: src/lib/assets/moments/photo.jpg
alt: A description of the photo
date: "2026-11-08"
location: Osaka
---

A short caption in Markdown.
```

`location` is optional. Images in `static/` can also be referenced by their
root-relative URL, and external image URLs are supported.

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
