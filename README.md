# Rhonee James Tolentino — Portfolio

A personal portfolio built with Nuxt 4, Vue 3, TypeScript, and Tailwind CSS. It includes a home page with About, Projects, and Contact sections, as well as individual project detail pages.

## Requirements

- Node.js (current LTS recommended)
- npm

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Nuxt's development server supports hot reload while you edit the app.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production server |
| `npm run preview` | Preview the production build locally |
| `npm run generate` | Generate a static site |
| `npm run postinstall` | Prepare Nuxt after dependency installation |

To build and preview the production version locally:

```bash
npm run build
npm run preview
```

There are currently no test, lint, or standalone type-check scripts configured in `package.json`.

## Project structure

```text
app/
  components/          Shared UI and page sections
  composables/         App configuration helper
  data/                Portfolio content (projects, skills, experience, contact)
  pages/               Nuxt file-based routes
  assets/css/          Global styles
public/
  images/projects/     Public project images
  resume.pdf           Résumé served as a static asset
nuxt.config.ts          Nuxt and runtime configuration
```

## Updating portfolio content

- Edit project names, descriptions, roles, technologies, screenshots, and optional links in `app/data/projects.ts`.
- Update skills in `app/data/skills.ts`.
- Update experience and education in `app/data/about.ts`.
- Update the email address and social profile URLs in `app/data/contact.ts`.
- Update the header section links in `app/data/header.ts`. The corresponding section IDs are rendered on the home page.
- Replace `public/resume.pdf` with the résumé you want to publish.
- Put project images under `public/` and reference them with root-relative URLs, such as `/images/projects/example/screenshot.jpg`.

Only publish content and images you have permission to share. Remove identifying or confidential information from screenshots before adding them to `public/`.

## Environment configuration

The app can read public runtime configuration from environment variables:

| Variable | Purpose |
| --- | --- |
| `NUXT_PUBLIC_SITE_URL` | Public site origin used for production configuration |
| `NUXT_PUBLIC_GITHUB_USERNAME` | GitHub username |
| `NUXT_PUBLIC_FULLNAME` | Name displayed by the app |
| `NUXT_API_SECRET` | Optional server-only secret; do not expose it in client code |

Create a local `.env` file when needed. Environment files are excluded by `.gitignore`; never commit secrets. Set production variables in your hosting provider's environment settings. No API secret is required for the current portfolio features.

## Deployment

For a Node.js server deployment, run `npm run build` and deploy the generated Nuxt server output using your hosting provider's Nuxt/Nitro instructions. Use `npm run preview` to check the production build locally before deploying.

For static hosting, run `npm run generate` and deploy the generated public output. Confirm all project detail routes are generated or configured with your hosting provider before relying on direct static URL access.

See the [Nuxt deployment guide](https://nuxt.com/docs/getting-started/deployment) for hosting-specific instructions. Configure the production environment variables above and enable HTTPS with your host.
