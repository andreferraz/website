# André Ferraz

This is the repository for my **personal portfolio website**, built with Next.js.

You can find the live version at [andreferraz.dev](https://www.andreferraz.dev).

## About the project

The goal of this project is to **present who I am** as a **software engineer** and **how I build products**.

With my own design, I aimed to keep the project simple and minimalist, focused on showcasing my experience, skills, and selected projects, while also serving as a playground for trying new technologies and patterns.

## Technologies I used

- [Next.js](https://nextjs.org/) – routing, SSG, and server components
- [React](https://react.dev/) – UI library
- [TypeScript](https://www.typescriptlang.org/) – type safety and better DX
- [Tailwind](https://tailwindcss.com/) – styling and layout
- [Biome](https://biomejs.dev/) – linting and code formatting
- [next-intl](https://next-intl.dev/docs) – localization
- [pnpm](https://pnpm.io/) – package management

## Highlighted features

- **Internationalized routing and content** (🇺🇸 English and 🇧🇷 Brazilian Portuguese).
- **Component-driven architecture** with reusable UI blocks and layouts.
- **Accessibility-minded implementation** (including screen-reader-friendly navigation helpers).
- **Structured content in data files**, keeping the UI layer clean and maintainable.
- **Fast, modern stack** focused on performance and developer experience (check it on [PageSpeed](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.andreferraz.dev%2F&hl=en-US)).

## Challenges and learnings

Building and maintaining this portfolio has been a practical way to sharpen both engineering and product communication skills.

Some key learnings:

- Balancing visual polish with performance, semantics, and accessibility.
- Implementing localization in a way that is scalable and easy to maintain in a React project.
- Adding thoughtful keyboard navigation helpers to improve user experience for any visitor.
- Experimenting with new technologies and patterns in a low-risk environment, while still delivering a polished product.

## Usage and code policy

You are welcome to read this repository, use it for learning, and take inspiration from ideas and patterns.

**Please do not copy this website as-is** (or with only superficial changes) and publish it as your own.

If you want to reuse significant parts of this project, please reach out first.

## Running it locally

### Prerequisites

- Node.js 20.9+
- pnpm (version per [package.json](./package.json))

### Setup

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production

```bash
pnpm build
pnpm start
```

### Checking

```bash
pnpm lint
pnpm types
```

### Format

```bash
pnpm format
```
