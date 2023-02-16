# Next.js + Tailwind CSS + Supertokens + Capacitor Mobile Starter

This monorepo provides a starter project for building a web application with Next.js, Tailwind CSS, and Supertokens for authentication and session management, as well as a mobile application using Capacitor. This allows you to use the same React UI for iOS, Android and the Web. The project is structured using Turborepo, with one repository for the web application and another for the mobile app. The code for both is shared using a `ui` package and other packages.

Live example: https://www.next-capacitor-supertokens.app/

---

## Differences from related repositories:

[Next.js + Tailwind CSS + Ionic Framework + Capacitor Mobile Starter](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter) - This current repository uses Turborepo, while the [Ionic example](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter) does not. In addition, this current repository uses Supertokens for authentication and session management, while the Ionic example does not. This current repository also uses Tailwind CSS for all of it's styling instead of the Ionic Framework. It serves as a good example of how to use Ionic with Capacitor, but does not address the issues that arise when using Supertokens with Capacitor in a Monorepo setup. (note that it is purely a choice not to use Ionic)

[SuperTokens Example](https://github.com/supertokens/next.js/tree/canary/examples/with-supertokens) - The Supertokens dev team does not yet have an example with Capacitor or clearly address Capacitor-related issues such as CORS, cookies, and domain configuration. The previous Supertokens example uses Server Side Rendering in Next.js and uses the `supertokens-auth-react` package, while this starter project utilizes `supertokens-web-js` and ThirdPartyEmailPassword. It serves however as the prime example of how to use Supertokens in a Next.js app, but does not address the issues that arise when using Supertokens with Capacitor. On another note, for styling we use Tailwind CSS, meaning that we use the custom UI in Supertokens. Here you can find the corresponding docs for our scenario: [Supertokens Docs](https://supertokens.com/docs/thirdpartyemailpassword/custom-ui/init/frontend)

[Turborepo Tutorial](https://github.com/leoroese/turborepo-tutorial) - This current repository is build on top of the Turborepo tutorial. This makes it easier to follow along for those that have not heard of Turborepo yet. The Turborepo tutorial comes with a corresponding [video on YouTube.](https://www.youtube.com/watch?v=YQLw5kJ1yrQ&t=1s) The Turborepo tutorial does not use Capacitor or Supertokens.

---

## What's inside?

This turborepo uses Yarn as a package manager. It includes the following packages/apps:

### Apps and Packages

- `next-app`: a [Next.js](https://nextjs.org) app using [Supertokens](https://supertokens.com/) and [Capacitor](https://capacitorjs.com/)
- `next-web`: another [Next.js](https://nextjs.org) app using only [Supertokens](https://supertokens.com/)
- `ui`: a React component library shared by both `next-web` and `next-app` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `lib`: shared utils for Capacitor, easy-to-use Capacitor hooks, supertokens functions to call the API, CORS setup.

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [Capacitor](https://capacitorjs.com/) A cross-platform native runtime for web apps.
- [Supertokens](https://supertokens.com/) Open-source authentication and session management system for your web apps.
- [React Hook Form](https://react-hook-form.com/) Performant, flexible and extensible forms with easy-to-use validation.
- [Tailwind CSS](https://tailwindcss.com/) CSS framework - rapidly build modern websites without ever leaving your HTML.

### Note on Server Side rendering

The `next-app` in this starter project relies on the API routes of the `next-web` for utilizing Supertokens. However, because the `next-app` must be able to run purely client-side and use `Next.js's Export` command, it does not support Server Side Rendering. This means that certain features and functionality are not available in the next-app, including image optimization, internationalized routing, API routes, rewrites, redirects, headers, middleware, incremental static regeneration, and the fallback and getServerSideProps options.

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```

To open the iOS app (make sure you have xCode setup):

```
cd packages
cd next-app
yarn build
yarn open:ios
```

#### Changing authentication method

By default `next-app` and `next-web` uses Social + Email password based login with SuperTokens to implement auth. To change this, set the value of `AUTH_MODE` in `packages/lib/utils/config.ts` to the type of auth you want to use.

Refer to the comments in `packages/lib/utils/common.types.ts` to know what the different values of `AUTH_MODE` mean

### Instructions

Please create an `env.local` file and add the following ENV variables for testing:

```
# These are all working development keys.
# IMPORTANT: You can use them during development, but for production use,
# make sure to change them to keys issued for your app.

NODE_ENV=development
NEXT_PUBLIC_APP_STAGE=development

GOOGLE_CLIENT_ID=1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

GITHUB_CLIENT_ID=467101b197249757c71f
GITHUB_CLIENT_SECRET=e97051221f4b6426e8fe8d51486396703012f5bd

APPLE_CLIENT_ID="4398792-io.supertokens.example.service"
APPLE_KEY_ID="7M48Y4RYDL"
APPLE_TEAM_ID="YWQCXGJRJL"
APPLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----"
```

These are the test environment variables from Supertokens. You should replace these with your own later on.


##### Apple login testing on native device

Testing Apple login doesn't work in your xCode simulator. For this, use a native device. Remember to change your `FRONTEND_URL` in the `config` file to use your local IP address.


### Known caveats

#### Caveat 1 - [Token Transfer Method](https://supertokens.com/docs/thirdpartyemailpassword/common-customizations/sessions/token-transfer-method)

We are using auth requests with the `Authorization` header: 
```Supertokens recommends cookie-based sessions in browsers because header-based sessions require saving the access and refresh tokens in storage vulnerable to XSS attacks.```

Supertokens supports 2 methods of authorizing requests:

1. Based on cookies
The default in our web SDKs
Uses HttpOnly cookies by default to prevent token theft via XSS

2. Based on the Authorization header
The default in our mobile SDKs
Uses the Authorization header with a Bearer auth-scheme
This can make it easier to work with API gateways and third-party services
Preferable in mobile environments, since they can have buggy and/or unreliable cookie implementations

Possible solution if you want extra security: use Supertokens anyway with cookies on Capacitor with the custom cookie handler that is in this repository. This works, but requires extra effort, you need to know what you're doing.


#### Caveat 2: Apple universal links dont work for HTTP redirects (when the API returns a status code for redirect) but only works if there is an actual navigation happening

In conclusion: Apple login does not work on the mobile web right now. You can find more information about this on the /temp route of the web. Supertokens developers are currently working on a solution that will allow information to be stored in the state sent to the provider, which can then be checked in the API layer to determine if it's mobile or web. However, until this solution is available, a workaround is being used that prevents iOS login from working on the web, so it should be removed from the UI until further notice.

#### Caveat 3: [Live Reload Capacitor](https://capacitorjs.com/docs/guides/live-reload)

Live reload is not working on Capacitor when using Supertokens. We are looking into a solution.
