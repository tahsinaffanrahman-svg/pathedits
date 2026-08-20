# Pathedits

Pathedits is a modern, high-performance web application built for a professional photo editing service. This repository contains the complete frontend architecture, including the marketing website, service pages, pricing structures, help center, and blog layout.

The project is designed to be lightning-fast, utilizing static site generation (SSG) where possible, and strictly avoids heavy CSS frameworks in favor of highly optimized, modular CSS.

---

## Table of Contents
1. [Architecture and Tech Stack](#architecture-and-tech-stack)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Development Guidelines](#development-guidelines)
5. [CSS and Styling Approach](#css-and-styling-approach)
6. [Available Scripts](#available-scripts)
7. [Deployment](#deployment)

---

## Architecture and Tech Stack

- **Framework:** [Astro](https://astro.build/) - Chosen for its Zero-JS frontend architecture and superior performance out of the box.
- **Styling:** Custom Vanilla CSS - We intentionally avoid utility-first frameworks (like Tailwind or Bootstrap) to maintain full control over our cascade, ensuring 1:1 pixel-perfect designs that are resilient to minification.
- **CSS Processing:** LightningCSS - Configured within Astro to process and minify CSS rapidly.
- **Package Manager:** npm

---

## Project Structure

The repository follows a standard Astro directory structure, but with specific conventions for our page layouts:

```text
/
├── public/                 # Static assets (images, icons, fonts) that bypass the bundler.
├── src/
│   ├── components/         # Reusable UI elements (Hero, Navbar, Footer, Buttons, TrustSections).
│   ├── layouts/            # Page wrappers (e.g., Layout.astro) that provide global HTML structure.
│   ├── pages/              # File-based router.
│   │   ├── blogs/          # Blog listing and individual post pages.
│   │   ├── pages/          # Secondary pages (pricing, help, contact, affiliate, T&C).
│   │   └── index.astro     # The main homepage.
│   └── styles/             # Global CSS files, variables, and typography definitions.
├── astro.config.mjs        # Astro framework configuration file.
└── package.json            # Project dependencies and script definitions.
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/tahsinaffanrahman-svg/pathedits.git
   cd pathedits
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

The application will be available at `http://localhost:4321`.

---

## Development Guidelines

### Creating New Pages
Pages in this project rely on file-based routing. To add a new page:
1. Create an `.astro` file inside `src/pages/` or its subdirectories.
2. The URL path will automatically match the file path (e.g., `src/pages/about.astro` becomes `/about`).
3. Always wrap your page content in the main `<Layout>` component to ensure headers, footers, and global styles are applied.

### Component Best Practices
- Keep components modular and focused on a single responsibility.
- Place component-specific CSS directly within the `<style>` tag of the `.astro` file. Astro scopes these styles automatically, preventing unintended global overrides.
- Use props to make components reusable across different pages.

---

## CSS and Styling Approach

This project strictly adheres to a custom CSS methodology. 

- **No Utility Classes:** Do not import or use utility frameworks (e.g., Tailwind). 
- **Scoped Styling:** Use Astro's default scoped styling behavior. Write CSS targeting semantic HTML tags or specific class names within the `.astro` component.
- **Global Styles:** Global variables (colors, fonts) and base resets are located in `src/styles/`. Ensure you use CSS variables for theme consistency instead of hardcoding hex values.
- **Responsive Design:** Use standard media queries. Design mobile-first where applicable, scaling up for larger viewports.

---

## Available Scripts

Run these scripts from the project root using `npm run <script_name>`:

| Command   | Description                                                                     |
| :-------- | :------------------------------------------------------------------------------ |
| `dev`     | Starts the local development server with hot module replacement (HMR).          |
| `build`   | Compiles your Astro site into static files inside the `./dist/` directory.      |
| `preview` | Serves the `./dist/` directory locally to test the production build.            |
| `astro`   | Exposes the Astro CLI for commands like `astro check` or `astro add`.           |

---

## Deployment

This project is configured to output a static site. 

1. Run the build command:
   ```sh
   npm run build
   ```
2. The generated assets will be placed in the `dist/` directory.
3. These files can be deployed to any static hosting provider (e.g., Vercel, Netlify, Cloudflare Pages, AWS S3).
