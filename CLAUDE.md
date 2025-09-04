# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 application using TypeScript, React 19, and Tailwind CSS v4. The project uses the new App Router and Turbopack for faster builds.

## Development Commands

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build production bundle with Turbopack  
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Project Architecture

### Technology Stack
- **Framework**: Next.js 15.5.2 with App Router
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4 with CSS variables
- **Component System**: shadcn/ui configured (new-york style)
- **Utilities**: clsx + tailwind-merge for className management

### Key Files and Directories
- `app/`: Next.js App Router pages and layouts
- `lib/utils.ts`: Contains cn() utility for className merging
- `components.json`: shadcn/ui configuration with stone base color

### Path Aliases
The project uses the `@/` alias for imports, which maps to the project root:
- `@/components` → components directory
- `@/lib` → lib directory  
- `@/components/ui` → UI components from shadcn

### TypeScript Configuration
- Strict mode enabled
- Module resolution: bundler
- Target: ES2017

## Important Notes

- The project uses Turbopack for both dev and build commands
- shadcn/ui is configured but no components have been installed yet
- ESLint is configured with Next.js recommended rules
- The project uses CSS variables for Tailwind theming