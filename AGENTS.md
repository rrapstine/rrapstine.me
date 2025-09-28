# Agent Guidelines for rrapstine.me

## Commands

### Development & Build

- **Dev server**: `bun run dev` (starts Astro development server with hot reload)
- **Build**: `bun run build` (produces production build in `dist/`)
- **Preview**: `bun run preview` (serves production build locally for testing)
- **Format**: `npx prettier --write .` (formats all files with Prettier)

### Package Management

- **Install dependencies**: `bun install`
- **Update to latest versions**: `bun update --latest` (ignores version ranges for absolute latest)
- **Add dependency**: `bun add <package>`

### Linting & Testing

- **Test watch mode**: `bun run test` (Vitest watch mode for continuous testing)
- **Run all tests once**: `bun run test:run` (Vitest run mode for CI or one-off execution)
- **Run single test**: `bun run test path/to/test.ts` (e.g., `bun run test src/test/components.test.ts` to run a specific test file)
- **Test with coverage**: `bun run test:coverage` (Vitest run with coverage report)
- **No linting scripts configured**: Use Prettier for formatting; TypeScript strict mode provides compile-time type checking

## Code Style Guidelines

### Framework & Language

- **Framework**: Astro 5.x with TypeScript (strict configuration enabled)
- **File Extensions**: `.astro` for components and pages, `.ts` for config and type files, `.scss` for styles
- **TypeScript**: Strict mode enabled, extends `astro/tsconfigs/strict`; use explicit types and avoid `any`
- **Configuration**: Minimal Astro config in `astro.config.mjs`, no integrations currently used

### Component Structure

- **Props**: Define TypeScript interfaces for component props (e.g., `interface Props { title: string; }`)
- **Destructuring**: Always destructure `Astro.props` at the top of components (e.g., `const { title } = Astro.props;`)
- **Data**: Import site data from central `src/data/site.json` file; use typed imports where possible
- **Composition**: Build complex UIs through component composition (e.g., `SkillItem` within `Skills`)

### HTML & Accessibility

- **Semantic HTML**: Use proper semantic elements (`<section>`, `<nav>`, `<main>`, etc.)
- **ARIA Roles**: Add `role="list"` to `<ul>` elements for screen readers
- **External Links**: Use `target="_blank"` for external links
- **Alt Text**: ALWAYS provide meaningful alt text for images - never leave empty. Follow WCAG accessibility guidelines for all content.

### Styling (SCSS)

- **Preprocessor**: SCSS with CSS custom properties (variables)
- **CSS Variables**: Extensive use of custom properties defined in `src/styles/globals.scss`
  - Color variables: `--primary-white`, `--primary-black`, `--primary-gray`, `--primary-blue`
  - Typography: `--ff-primary`, `--ff-accent`, `--fw-regular`, `--fw-medium`, `--fw-bold`
  - Font sizes: `--fs-body`, `--fs-nav`, `--fs-subheading`, `--fs-heading`, `--fs-bigheading`
- **Utility Classes**: BEM-like naming convention
  - Typography: `ff-heading`, `fs-bigheading`, `fw-bold`
  - Colors: `text-white`, `text-dark`, `text-accent`
- **Responsive Design**: Use `clamp()` for fluid typography and spacing
- **Layout**: Flexbox-based layouts with consistent gap spacing
- **Animations**: CSS transitions with `ease` timing (0.2s-0.3s duration)
- **Hover Effects**: `transform: scale()` for interactive elements
- **Media Queries**: Mobile-first approach with `@media (min-width: 1080px)` breakpoints

### JavaScript/TypeScript

- **Client Scripts**: Use `<script>` tags in `.astro` files for client-side interactivity
- **Type Assertions**: Use `as` keyword for DOM element typing (e.g., `as NodeListOf<HTMLElement>`)
- **Modern APIs**: IntersectionObserver for scroll-based interactions
- **Event Handling**: Add event listeners programmatically rather than inline
- **TypeScript Overrides**: Minimal use of `@ts-ignore` (only when necessary)
- **Function Declarations**: Prefer declarative functions over anonymous functions wherever possible (e.g., `function handleClick() { ... }` instead of `() => { ... }`)
- **Error Handling**: Use try-catch blocks for async operations; log errors appropriately without exposing sensitive info

### File Organization

- **Components**: All components in `src/components/` with PascalCase naming (e.g., `Contact.astro`)
- **Pages**: Single page app with `src/pages/index.astro`
- **Data**: Centralized configuration in `src/data/site.json`
- **Styles**: Global styles in `src/styles/` (globals.scss, reset.css)
- **Assets**: Static assets in `public/` directory
- **Tests**: Unit tests in `src/test/` with Vitest

### External Dependencies

- **Icons**: Devicon library loaded via CDN for technology icons
- **Fonts**: Google Fonts (Inter, Playfair Display) loaded via CDN
- **CSS Reset**: Modern CSS reset with accessibility considerations (prefers-reduced-motion)

### Development Practices

- **Version Control**: Standard .gitignore for Node.js/Astro projects
- **Git Workflow**: All features and changes must be performed on a new git branch (e.g., `feat/add-dark-mode`). Create branches with sensible names. No code should be committed before prompting for review and receiving explicit okay to commit. Use conventional commits (e.g., `feat: add resume download button`, `refactor: update UI to be more modern`). Avoid excessive adjustment commits by seeking review first.
- **Formatting**: Prettier with semicolons enabled
- **No Comments**: Code is self-documenting without inline comments
- **Performance**: Static site generation, minimal JavaScript, efficient bundling
- **Security**: Never log or expose secrets/keys; follow best practices for handling sensitive data

### Data Structure

- **JSON Schema**: Well-structured data with nested objects for skills, work, social links
- **Content Management**: All site content managed through JSON file updates
- **Type Safety**: Data structure supports TypeScript interfaces in components

This detailed overview ensures agents maintain consistency with existing patterns, focusing on accessibility, performance, and maintainability. All changes require new branches and review before commits; prefer declarative functions in code.
