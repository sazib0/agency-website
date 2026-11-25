# agency-website

Gikra company portfolio website for IT infrastructure, cybersecurity, cloud, software, and consulting services.

![Agency website preview](it.png)

## Project details

Built with Next.js 13, React 18, TypeScript, and Tailwind CSS. The site includes a responsive home page, company information, service listings, and a contact page, with shared navigation, footer, theme support, and reusable UI components.

The home page features animated visuals, service and feature cards, company statistics, client logos, testimonials, and a consultation form. The contact page includes a validated message form delivered through EmailJS, contact information, and an embedded map.

Next.js is configured for static export (`output: 'export'`), with unoptimized images and trailing slashes. The production build creates the static site in `out/`, suitable for hosting on Netlify.

## Project structure

```text
.
├── app/
│   ├── about/page.tsx       # About the company and leadership
│   ├── contact/page.tsx     # Contact form and contact information
│   ├── services/page.tsx    # Services page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Shared layout, metadata, header, and footer
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI primitives
│   └── ...                  # Site components, forms, and navigation
├── hooks/                   # Shared React hooks
├── lib/
│   ├── constants/           # Shared constants and image paths
│   ├── database.types.ts    # Supabase database types
│   ├── supabase.ts          # Supabase client configuration
│   └── utils.ts             # Shared utility functions
├── public/                  # Static assets served from the site root
├── it.png                  # README preview image
├── next.config.js           # Static export configuration
├── package.json             # Dependencies and scripts
└── tailwind.config.ts       # Tailwind CSS configuration
```

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

Create the static production site:

```bash
npm run build
```

The generated site is written to `out/`. For a Netlify static-site deployment, use `npm run build` as the build command and `out` as the publish directory.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build and export the static site |
| `npm run start` | Start the Next.js production server |
| `npm run lint` | Run Next.js lint checks |
