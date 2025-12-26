# HireMe.link

A portfolio and professional services website built with React, Vite, and TailwindCSS.

## Overview

This is a single-page application (SPA) showcasing a creative professional's portfolio, services, experience, skills, pricing, testimonials, and contact information.

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: TailwindCSS 4 with Radix UI components
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives + custom shadcn/ui components

## Project Structure

```
/
├── client/           # Frontend React application
│   ├── public/       # Static assets (images, portfolio files)
│   ├── src/          # Source code
│   │   ├── components/   # UI components
│   │   ├── contexts/     # React contexts (Theme)
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities
│   │   └── pages/        # Page components
│   └── index.html    # Entry HTML
├── server/           # Express server for production
├── shared/           # Shared constants
└── vite.config.ts    # Vite configuration
```

## Development

Run the development server:
```bash
pnpm dev
```

The app runs on port 5000 in development.

## Production Build

Build for production:
```bash
pnpm build
```

This outputs to `dist/public` and can be deployed as a static site.

## Deployment

Configured for static deployment on Replit. The build output at `dist/public` is served directly.
