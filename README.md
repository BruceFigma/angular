# Angular Kanban proof of concept

A small Angular 22 + TypeScript app using standalone root and task-card components, Angular templates, and plain CSS. Tasks live in memory and reset when the page reloads.

## Run

Requires Node.js 22.22.3+, 24.15.0+, or 26+ (in Angular's supported release ranges), and npm.

```sh
npm ci
npm start
```

Open http://localhost:4200. `npm run dev` also starts the Angular development server. To use a different preview port: `npm start -- --port 5173`.

```sh
npm run build
```

The compiled static app is in `dist/kanban/browser`.

## Features

- To Do, In Progress, and Done columns with sample tasks.
- A task title field and submit button; Enter also submits.
- A dropdown on each card moves it between columns.
- Task counts, empty states, and whitespace-only title rejection.

## Verification and Figma Make limitation

The minimal standalone screen was built and bootstrapped before adding the board. The finished app passes Angular's production build and a temporary DOM harness that executes the actual compiled Angular bundle and checks task creation, dropdown initialization, moves across all columns, counts, and empty states. The local preview endpoint serves Angular's compiled standalone components and `bootstrapApplication` entry point.

Browser automation was unavailable in this session, so visual preview behavior was not verified. This workspace is a local Node.js environment, not a connected Figma Make runtime. These results confirm Angular builds and executes here; they do not establish Figma Make compatibility. Make must support installing the declared dependencies, running the Angular CLI build/dev server, and showing that server's output to preview this app. No React or JSX fallback is included.
