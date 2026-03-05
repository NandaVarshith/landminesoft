# Landmine Soft Frontend

Frontend application for the Landmine Soft company website, built with React, Vite, and React Router.

## Overview

This project is a modern, responsive multi-page website focused on professional branding for a software/IT company. It includes public marketing pages, contact flows, authentication UI, and career/application UI.

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- ESLint 9

## Implemented Pages

- Home (`/`)
- About (`/about`)
- Services (`/services`)
- Careers (`/careers`)
- Consultation (`/consultation`)
- Get Demo (`/get-demo`)
- Contact (`/contact`)
- Support (`/support`)
- Login (`/login`)
- Register (`/register`)

## Project Structure

```text
frontend/
  assets/
  pages/
  src/
    components/
    App.jsx
    main.jsx
  index.html
  package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Default local URL is typically `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Create production build in `dist/`
- `npm run preview` - Preview built output locally
- `npm run lint` - Run ESLint

## Deployment (Vercel)

If deploying without `vercel.json`, use these settings in Vercel:

- Root Directory: `frontend`
- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

For React Router routes, add rewrite:

- Source: `/(.*)`
- Destination: `/index.html`

## Notes

- Form integrations are currently UI-focused and can be connected to backend APIs.
- Content for testimonials/highlights/job roles uses demo content where applicable.
