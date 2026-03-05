# Landmine Soft Website

A professional multi-page website for **Landmine Soft**, built with **React**, **Vite**, and **React Router**.

## Overview

The Landmine Soft Website is a modern, responsive multi-page frontend application built using React and Vite. It represents a professional corporate website structure with clearly organized public pages, user interaction flows, and client-side routing using React Router.

The project follows a scalable component-based architecture, ensuring maintainability and clean separation of concerns. It demonstrates best practices in frontend development, including reusable components, structured routing, and production-ready build configuration suitable for static deployment platforms.

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- ESLint 9

## Current Pages

- Home (`/`)
- About (`/about`)
- Careers (`/careers`)
- Consultation (`/consultation`)
- Get Demo (`/get-demo`)
- Contact (`/contact`)
- Support (`/support`)
- Login (`/login`)
- Register (`/register`)

## Project Structure

```text
landminesoft/
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

### Installation

```bash
cd frontend
npm install
```

### Run in Development

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

Build output is generated in:

```text
frontend/dist/
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

From `frontend/package.json`:

- `npm run dev` - Start local development server
- `npm run build` - Create optimized production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## Deployment Notes

- The app is a static frontend and can be deployed to platforms like Vercel, Netlify, Cloudflare Pages, or any static host.
- Configure SPA fallback/rewrites to `index.html` so client-side routes resolve correctly.

## Contributing

1. Create a feature branch.
2. Make and test changes locally.
3. Run `npm run lint` before opening a PR.
4. Submit a pull request with a clear summary and screenshots for UI changes.

## License

No license file is currently included in this repository. Add a `LICENSE` file if you intend to open-source the project.


