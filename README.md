# Next.js + Tailwind CSS + Supertokens + Capacitor Mobile Starter

This repository provides a starter project for building a web application with Next.js, Tailwind CSS, and Supertokens for authentication and session management, as well as a mobile application using Capacitor. The project is structured using Turborepo, with one repository for the web application and another for the mobile app. The code for both is shared using a ui package.

---

## Differences from Related Repositories:

[Next.js + Tailwind CSS + Ionic Framework + Capacitor Mobile Starter](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter) - This starter project does not use Turborepo, while the one from the Ionic team does. It also does not use Supertokens for authentication and session management. Also, it uses Ionic Framework, while this starter relies on Tailwind CSS for styling.

[SuperTokens Example](https://github.com/supertokens/next.js/tree/canary/examples/with-supertokens): This example does not use Capacitor or address Capacitor-related issues such as CORS, cookies, and domain configuration. It also uses Server Side Rendering in Next.js and the supertokens-auth-react package, while this starter project utilizes supertokens-web-js and ThirdPartyEmailPassword.

[Turborepo Tutorial](https://github.com/leoroese/turborepo-tutorial) - A tutorial on how to use Turborepo, along with a corresponding [video on YouTube.](https://www.youtube.com/watch?v=YQLw5kJ1yrQ&t=1s)

---

## What's inside this turborepo?

This turborepo uses Yarn as a package manager. It includes the following packages/apps:

### Apps and Packages

- `next-app`: a [Next.js](https://nextjs.org) app using [Supertokens](https://supertokens.com/) and [Capacitor](https://capacitorjs.com/)
- `next-web`: another [Next.js](https://nextjs.org) app using only [Supertokens](https://supertokens.com/)
- `ui`: a React component library shared by both `next-web` and `next-app` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`) and configurations for CORS domains and Supertokens config
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [Capacitor](https://capacitorjs.com/) A cross-platform native runtime for web apps.
- [Supertokens](https://supertokens.com/) Open-source authentication and session management system for your web apps.

## Caveats

The `next-app` needs to rely on the `next-web` API routes for utilizing Supertokens. Because the `next-app` must be able to run purely client-side and use [Next.js's Export command](https://nextjs.org/docs/advanced-features/static-html-export), that means no Server Side Rendering in this app. Features that require a Node.js server, or dynamic logic that cannot be computed during the build process, are not supported in the `next-app`:

- Image Optimization (default loader)
- Internationalized Routing
- API Routes
- Rewrites
- Redirects
- Headers
- Middleware
- Incremental Static Regeneration
- fallback: true
- getServerSideProps

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```
