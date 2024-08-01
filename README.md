# next-mantine-tailwind-example

This example is a demonstration of how to integrate Mantine and Tailwind CSS in a Next.js project without conflicts.

> [!TIP]
> The trick to make this work is give [Tailwind base lower priority with the @layer rule](https://github.com/PauliCZ44/MantineTW/blob/main/src/index.css).

> [!NOTE]  
> If you are using Next.js Pages Router and Mantine v6, then switch to branch v1.

## Dependencies

- Next.js `v14`
- Mantine `v7`
- Tailwind CSS `v3`

## Setup

1. Create a new Next.js app:

```sh
pnpm create next-app
```

Make sure you choose the following options:

```sh
❯ pnpm create next-app
✔ Would you like to use Tailwind CSS with this project? … Yes
✔ What import alias would you like configured? … @/*
```

2. Install Mantine dependencies:

```sh
pnpm add @mantine/core @mantine/hooks
```

3. Copy and paste the following files and folders into your project:

```sh
app/
  layout.tsx
styles/
  globals.css
```

4. You're all set!

## Getting Started

Run the development server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
