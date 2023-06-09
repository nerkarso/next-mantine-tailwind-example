# next-mantine-tailwind-example

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/nerkarso/next-mantine-tailwind-example)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> The trick to make this work is to disable Mantine normalize styles and Tailwind preflight styles. Then implement a [custom preflight](theme/tailwind-preflight.ts) internal style in the [Next.js document](pages/_document.tsx).

## Dependencies

- Next.js `v13.3`
- Mantine `v6.0`
- Tailwind CSS `v3.3`

## Setup

1. Create a new Next.js app:

```sh
pnpm create next-app
```

Make sure you choose the following options:

```sh
❯ pnpm create next-app
✔ Would you like to use TypeScript with this project? … Yes
✔ Would you like to use Tailwind CSS with this project? … Yes
✔ What import alias would you like configured? … @/*
```

2. Install Mantine dependencies:

```sh
pnpm add @mantine/core @mantine/hooks @mantine/next @emotion/server @emotion/react
```

3. Copy and paste the following files and folders into your project:

```sh
pages/
  _app.tsx
  _document.tsx
theme/
  emotion-cache.ts
  tailwind-preflight.ts
```

4. You're all set!

## Getting Started

Run the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
