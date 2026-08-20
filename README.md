# Pathedits

Pathedits is a modern web application built with Astro. This repository contains the source code for the Pathedits website, including the homepage, pricing, blog, help center, and other core pages.

## Project Structure

Inside of your project, you will see the following folders and files:

```text
/
├── public/           # Static assets like images and fonts
├── src/
│   ├── components/   # Reusable Astro and UI components
│   ├── layouts/      # Page layout wrappers
│   ├── pages/        # File-based routing for the application
│   └── styles/       # Global CSS styles
├── package.json      # Dependencies and scripts
└── astro.config.mjs  # Astro configuration
```

## Technologies

- Astro (Static Site Generation / Server-Side Rendering)
- LightningCSS (Fast CSS processing)
- Custom CSS (No external utility frameworks used for core components)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Development Guidelines

- When adding new pages, place them in the `src/pages/` directory.
- Use explicit, standalone CSS for styling to ensure styles are resilient and self-contained.
- Follow existing component patterns in `src/components/`.
