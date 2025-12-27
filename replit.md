# replit.md

## Overview

This is a developer portfolio website built as a full-stack TypeScript application. The project showcases projects and allows visitors to send contact messages. It features a brutalist/statement design aesthetic with bold typography, electric lime accent colors, and sharp geometric elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom brutalist theme (sharp corners, high contrast)
- **UI Components**: shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for page transitions and interactive elements
- **Build Tool**: Vite with HMR support

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints defined in shared routes file
- **Validation**: Zod schemas for request/response validation with drizzle-zod integration

### Data Layer
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Migrations**: Drizzle Kit with `db:push` command

### Project Structure
```
client/           # React frontend application
  src/
    components/   # React components including shadcn/ui
    pages/        # Route pages (Home, Work, About, Contact)
    hooks/        # Custom React hooks for data fetching
    lib/          # Utilities and query client setup
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route handlers
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared code between client and server
  schema.ts       # Drizzle table definitions and Zod schemas
  routes.ts       # API route definitions with validation schemas
```

### API Design
Routes are defined declaratively in `shared/routes.ts` with:
- HTTP method and path
- Input validation schema (Zod)
- Response schemas for different status codes

This enables type-safe API calls from the frontend using the same schema definitions.

### Build Process
- Development: Vite dev server with Express backend (tsx runner)
- Production: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Server dependencies are selectively bundled via allowlist for faster cold starts

## External Dependencies

### Database
- PostgreSQL database required via `DATABASE_URL` environment variable
- Session storage uses `connect-pg-simple` for persistent sessions

### UI/Styling
- Google Fonts: Syne (display), Space Grotesk (body)
- Radix UI primitives for accessible components
- Lucide React for icons

### Key NPM Packages
- `drizzle-orm` + `drizzle-kit`: Database ORM and migrations
- `@tanstack/react-query`: Server state management
- `react-hook-form` + `@hookform/resolvers`: Form handling with Zod validation
- `framer-motion`: Animations
- `wouter`: Client-side routing
- `zod`: Runtime type validation