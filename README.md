<p align="left">
  <img src="https://github.com/RobSchilderr/nextjs-native-starter/assets/35261620/18602926-d323-43d6-b713-b154caaeeeca" width="500">
</p>

[![Website](https://img.shields.io/badge/Website-nextjs--native.com-blue)](https://nextjs-native.com)
[![Discord](https://img.shields.io/discord/1159178873129414778?logo=discord&label=Discord&cacheSeconds=3600")](https://discord.gg/zN2HxJjR)
[![Twitter Follow](https://img.shields.io/twitter/follow/realRobSchilder?style=social)](https://twitter.com/realRobSchilder)

### Use Next.js on iOS and Android + access to native APIs with Capacitor

This monorepo provides a starter project for building truly **universal** applications with Next.js, Tailwind CSS, and Capacitor. This allows you to use Next.js it's routing on iOS and Android. Now, you can truly share all your code between all platforms while staying in your familiar web-dev stack, making it more maintainable compared to keeping up a seperate project with React Native.

The project is structured using Turborepo, with one repository for the web application and another for the mobile apps. For authentication and session management, we use Supertokens and have official support from their team to continue supporting secure auth on all platforms. The React components for both are shared using a `ui` package. Besides that, we share the lib, configs and other operations.

## Gallery

### Mobile

| iOS | Android |
|-----|---------|
| ![iOS 1](https://res.cloudinary.com/dpz2qqfck/image/upload/v1699097270/nextnative/Screenshots/ios/Dark_mode_settings_screen-portrait_otpr8b.png) | ![Android 1](https://res.cloudinary.com/dpz2qqfck/image/upload/v1699097381/nextnative/Screenshots/android/Android_light_mode_-_only_social_login-portrait_e0hhzc.png) |
| ![iOS 2](https://res.cloudinary.com/dpz2qqfck/image/upload/v1698996232/nextnative/Screenshots/ios/iosframescreen1-portrait_kpwzt1.png) | ![Android 2](https://res.cloudinary.com/dpz2qqfck/image/upload/v1699097381/nextnative/Screenshots/android/Android_light_mode_-_passwordless_social-portrait_ul3gqa.png) |

| Desktop |
|-----------|
| ![Desktop 1](https://res.cloudinary.com/dpz2qqfck/image/upload/v1697815564/nextnative/Screenshots/desktop/1._Dark_mode_settings_screen_xqizzk.png) |

## How to use

1. Run: `npx create-supertokens-app@latest --manager=yarn`
2. Pick a name for your app
3. Choose 'Capacitor'
4. Make sure to have `yarn` and `npm` installed on your computer: If you don't have NPM, install NPM first. Then when you have npm, make sure to install `yarn` with the following command: `npm install --global yarn`
5. Type `cd <folder>` to go to the folder and then type `yarn install` and then `yarn dev`
6. For iOS: go to the `next-app` folder and run `yarn build` and `yarn open:ios`
7. for Android: go to the `next-app` folder and run `yarn build` and `yarn open:android`

8. To continue, I would suggest to read the [Capacitor docs](https://capacitorjs.com/docs) and [Supertokens docs](https://supertokens.com/docs/guides).

9. Supertokens also supports [Authentication with JWT](https://supertokens.com/docs/thirdpartyemailpassword/hasura-integration/with-jwt). A good rule of thumb for mobile apps is that authentication should _usually_ (always exceptions 😄 ) be handled through something like JWTs. Supertokens their authentication with JWTs make it super easy to set up with [Hasura](https://hasura.io/docs/latest/index/) or [Supabase](https://supertokens.com/docs/emailpassword/supabase-intergration/setup), for more broad role-based access control and an easy-to-use API. In this [Youtube video](https://www.youtube.com/watch?v=sgicweOyDyk), Rishabh Poddar (co-founder and CTO Supertokens) explains his vision. By combining Supertokens and Hasura with a PostgreSQL instance hosted on Heroku/Render/Railway, you'd have a very compelling alternative to Firebase without being locked in. Another possibility is to use Supabase and have a similar stack.

10. If you want a production-ready setup made for you with Hasura like in the video, check out [Next.js Native](https://nextjs-native.com)

11. For more tutorials on how to continue: [Simon Grimm of Galaxies.dev has great tutorials](https://galaxies.dev/nextjs-and-capacitor)

<img width="1436" alt="Screenshot_2023-02-20_at_6 00 08_PM" src="https://user-images.githubusercontent.com/35261620/221919365-4f784876-a79b-4f42-84e2-bbfc90ed91e2.png">

---

---

## What's inside?

This turborepo uses Yarn as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps`
  - `next-app` (Native)
  - `next-web` (Web)
- `packages` Shared packages across apps
  - `ui` a React component library shared by both `next-web` and `next-app` applications
  - `app` a shared package that includes all the common dependencies for the next-app and next-web applications. This helps to ensure consistency and reduce duplication across the applications.
  - `config` this is for shared `eslint` and `tailwindcss` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
  - `tsconfig` `tsconfig.json`s used throughout the monorepo
  - `lib` shared utils for Capacitor, easy-to-use Capacitor hooks, supertokens functions to call the API, CORS setup.


## Benefits of using this starter project

This starter project provides several benefits to developers looking to build a web application with authentication and session management, as well as a mobile application using Capacitor. Some of the benefits include:

- Faster development: At least 85% of your web/app code will be shared. Also, I provide a pre-configured development environment with several packages and tools already set up.

- Unified UI: By using the same React UI for both the web and mobile application, you only have to design that component once with TailwindCSS and use it everywhere. This saves you tons of time and also gives you a consistent UI accross your applications. Have your UI for desktop, tablet and phone in only one file.

- Can use any web/js library: No need to try to reinvent the wheel.

- No big difference in performance: If you're a skilled React developer, you can create a high-performance Capacitor app that can match or even exceed the performance of a React Native app. Capacitor provides access to native device features through standard web APIs, so you can leverage your existing web development skills and knowledge to build cross-platform mobile apps. Webview based apps on modern devices are quite performant nowadays, especially on iOS.

- Security: By using Supertokens for authentication and session management, you can be confident that your users' data is secure and that common security issues like XSS and CSRF attacks are mitigated.

- More developers: a bigger pool of developers to collaborate with than when using Flutter or React Native. React is now the biggest framework on the planet and is [not dying soon](https://tkdodo.eu/blog/why-react-isnt-dying).

- Scalability: This starter project is built on top of Turborepo, which allows developers to easily add new packages and applications to the monorepo as their project grows and scales.

---

## Choosing an Authentication Provider in a Cross-Platform App

### Introduction

When developing a cross-platform application, selecting the right authentication provider is a critical decision. The choice can significantly influence user experience, security, and even the business model. This section aims to offer a detailed comparison of popular authentication providers, focusing on their suitability for cross-platform apps. My criteria were:

- Never log a user out unless they want to.
- Support social login: Google / Apple / Github / Facebook
- Have affordable pricing
- As an alternative for affordable pricing, have a nice self-hosting experience

### Comparison of Authentication Providers for cross-platform apps

#### NextAuth

- **Pros**:
  - Popular in the Next.js ecosystem.
  - Good for server-side setups.
- **Cons**:
  - Challenging to integrate with Capacitor, you're working client side with different domains
  - Limited customization options

#### Supabase

- **Pros**:
  - Comprehensive backend solution offering databases and serverless functions.
- **Cons**:
  - Authentication is not their core focus.
  - Complex social authentication setup.

#### Firebase

- **Pros**:
  - Robust native integration on iOS and Android by the Capawesome team.
  - Ideal for B2C apps with a large user base.
- **Cons**:
  - Less customizable
  - You could get locked in the Firebase ecosystem
  - No self hosting

#### Supertokens

- **Pros**:
  - Works with JWT auth
  - Serverless routes with NextJS
  - As an alternative for affordable pricing, has a nice self-hosting experience.
  - Has header-based authentication so you're not working with cookies on Safari
  - Highly customizable.
  - Reasonable pricing with the first 5K users free.
  - Exceptional 24/7 support via Discord.
- **Cons**:
  - None identified, making it the go-to choice for cross-platform apps.

### Conclusion

For cross-platform apps with specific needs, Supertokens emerges as the most suitable authentication provider. It offers the customization, pricing, and support that align well with cross-platform project requirements.

---

## Common questions:

### Why not make a PWA instead?

Don't get me wrong. I love PWA's. I long for the day that we can fully focus on one codebase that would be a PWA, but we aren't quite there yet. For all the things that aren't there yet, we have Capacitor.

The biggest advantage Capacitor brings is full native access and app store distribution. Yes, PWAs can do a lot, but they

- Can't interface with every native iOS/Android SDK or feature out today or coming out tomorrow. Capacitor can.

- Can't use the massive ecosystem of third-party native SDKs. Capacitor can.

- As of yet, push notifications on iOS for PWA's is not fully done yet. Have to say that afer iOS 17 it has gotten quite good, but your users need to be on iOS 17 for this and have added your app as a PWA.

- According to Apple, PWA's don't belong in the App Store, and you might be rejected for silly reasons a lot. So, you can't be in the App Store and users need to add the webpage to their homescreen, which might create suspicion for non-tech savvy users. In the end, common people won't trust a PWA as much as it being in the App Store, which is considered safe.

- [You can't change the color of the status bar](https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab#:~:text=In%20order%20to%20change%20the,black%20%2C%20and%20black%2Dtranslucent%20.). This means that on PWA's with dark mdoe, the status bar will not display the time, connection and battery. This can be a trade-off when developing dark-mode applications.

- You can't control the [native back button](https://discourse.wicg.io/t/set-back-button-url-in-pwas/4112/28), Capacitor can. This could potentially lead to [awkward situations](https://x.com/_mathmesquita/status/1714022789928149176?s=46).

So, if those things matter to you, Capacitor is the way to go. You can build your app such that you're building a PWA first but then "enhancing" it with native Capacitor plugins or custom native code. The decision is not either/or because Capacitor was built to enable PWAs to run natively with almost 100% code sharing on the web.

Capacitor will offer APIs for various smartphone functionalities like the keyboard, TouchID, ARKit, In App Payments, Split view on iPAD, camera, Near Field Communication (NFC), and contacts. It will also provide interfaces for native machine learning Software Development Kits (SDKs) and Google Maps. Moreover, Capacitor allows the execution of code even when the app is closed, thanks to its background plugins, among other features.

To stay in the loop of what PWAs can do, check [what can pwa do today](https://whatpwacando.today/).

### Why Next.JS?

Next.js encapsulates modern optimizations often overlooked, including code splitting, pre-rendering, SEO optimalizations, SSR, and link prefetching, among others. While these features are available in other frameworks, Next.js stands out due to its seamless integration with serverless routes and the extensive ecosystem surrounding Vercel, its parent company. The offerings from Vercel, such as the Vercel AI SDK, Vercel Analytics, and Edge support, significantly enhance the Next.js experience. The framework's popularity, evidenced by over 5 million weekly downloads, contributes to its continuous improvement as the community expands.

### Is NextJS App Router supported?

App router is supported as of 10/11/2023 on this repo. If you're looking for pages router support, go back to this commit [here](https://github.com/RobSchilderr/nextjs-native-starter/commit/1e168e782c5a60a82fb3cec8974c66bf9eded86c) and follow the instructions there.

### Why did you use to not use Ionic?

- I appreciate the swift development process that comes from working exclusively with React and TailwindCSS. Leveraging pre-existing Tailwind components means I can bypass the need for original design work, thereby speeding up the development process. Utilizing Ionic would necessitate designing the UI/UX myself, and its web support doesn't replicate the same feel or appearance as when I develop with Tailwind only.

- Another reason is the complete limitation of SSR with Ionic. As a quote by Max Lynch: "The issue is that ionic web components are web components and can't be SSR'ed in Next.js since Next.js doesn't have a window object. There are workarounds (such as using a custom Next.js server) but those workarounds then make it not able to run on Vercel (at least that used to be a limitation, I haven't been following if there's any progress there). "

### When would you choose Ionic?

Ionic would be my go-to if I had a project that necessitated designing all elements from the ground up, demanded excellent mobile user experience, and also required web deployment, albeit with the web aspect being less critical than the mobile application. However, in that scenario I would also consider React Native with Expo again.

#### Would you recommend this stack in any scenario?

In any computer science problem, multiple solutions can exist for the same issue. Therefore, I would always evaluate whether this particular stack is the best fit for the problem at hand. However, I do believe that this stack serves as an excellent solution for a wide range of problems.

This stack is particularly well-suited for B2B applications that require a robust web presence on desktop platforms while offering identical functionality on mobile apps. For B2C applications expecting a large user base (over 5,000 customers), it's important to note that Supertokens would necessitate a paid subscription unless self-hosted. Additionally, Over-the-Air (OTA) updates are not free; they come at a cost when using either (Capgo)[https://capgo.app/pricing/] or (Appflow)[https://ionic.io/appflow/pricing]. This cost consideration isn't unique to Capacitor; Expo also charges for [OTA updates](https://expo.dev/pricing).

### So when to choose Capacitor over other alternatives like React Native or Flutter?

<img width="800" src="https://ionic.io/blog/wp-content/uploads/2023/01/Framework-Decision-Flowchart-1-1024x830.png" />

If you have more questions about Capacitor, I recommend you to read: [Capacitor: Everything You’ve Ever Wanted to Know](https://ionic.io/blog/capacitor-everything-youve-ever-wanted-to-know)

---

## Differences from related repositories:

[Next.js + Tailwind CSS + Ionic Framework + Capacitor Mobile Starter](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter) - This current repository uses Turborepo, while the [Ionic example](https://github.com/mlynch/nextjs-tailwind-ionic-capacitor-starter) does not. In addition, this current repository uses Supertokens for authentication and session management, while the Ionic example does not. This current repository also uses Tailwind CSS for all of it's styling instead of the Ionic Framework. The Ionic example serves as a good starterpack of how to use Ionic with Capacitor, but does not address the issues a lot other challanges that arise when using Next.JS and Capacitor in a monorepo.

Side note: Choosing not to use the Ionic UI framework is purely a personal preference. While Ionic is excellent for creating a native app-like feel, focusing on Tailwind CSS allows for a faster development process. If you're seeking a balance between native feel and development speed, consider using 'Konsta UI'—a UI library based on Tailwind that offers a more native-like experience. By embracing this trade-off, you can expedite your app's launch without needing to learn Ionic or create a new component library. Simply leverage an existing Tailwind UI library or explore Konsta UI, and you'll be good to go even faster 🚀

[Turborepo Tutorial](https://github.com/leoroese/turborepo-tutorial) - This current repository is build on top of the Turborepo tutorial. This makes it easier to follow along for those that have not heard of Turborepo yet. The Turborepo tutorial comes with a corresponding [video on YouTube.](https://www.youtube.com/watch?v=YQLw5kJ1yrQ&t=1s) The Turborepo tutorial does not use Capacitor or Supertokens, but you can totally use this video to get more familiar with Turborepo and master the current setup.

---

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

### Shared dependencies

Shared dependencies are libraries that will be used across all platforms (web, iOS, Android). This includes JavaScript-only libraries as well as Capacitor plugins, which can include native code but are designed to work well in a web environment.

For example, if you're installing a JavaScript-only dependency or a Capacitor plugin that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add zod @capacitor/core
cd ../..
yarn
```

In this example, zod is a JavaScript-only library and `@capacitor/core` is a Capacitor plugin. Both can be used across all platforms.

### Native dependencies

Native dependencies are iOS/Android specific libraries that you only want to use on native platforms.

If you are sure it will only be used in the native app, you can add it in the `next-app` directory:

```sh
cd apps/next-app
yarn add @capacitor/splash-screen
cd ..
yarn
```

In this example, `@capacitor/splash-screen` is a Capacitor plugin that is only used in the native app.

### NodeJS dependencies

NodeJS dependencies are libraries that will be used on your serverless API routes in your web project. These are typically used for server-side operations and are not intended to be used on the native app, because this is a client-side application.

```sh
cd apps/next-web
yarn add resend
cd ..
yarn
```

Because `resend` is a NodeJS library for sending emails, we don't want the env variables to be exposed on the client-side. We send the emails from the server-side, in our case the serverless API routes, so we install it in the `next-web` directory only.

---

### Note on Server Side rendering

The `next-app` in this starter project relies on the API routes of the `next-web` for utilizing Supertokens. However, because the `next-app` must be able to run purely client-side and use `Next.js's Export` command, it does not support Server Side Rendering. This means that certain features and functionality are not available in the next-app, including image optimization, internationalized routing, API routes, rewrites, redirects, headers, middleware, incremental static regeneration, and the fallback and getServerSideProps options. In the future it might be possible to use SSR with Capacitor, but for now this is out of scope.

#### Changing authentication method

By default `next-app` and `next-web` uses Social logins + passwordless (thirdpartypasswordless) based login with SuperTokens to implement auth. To change this, set the value of `AUTH_MODE` in `packages/lib/utils/config.ts` to the type of auth you want to use.

Refer to the comments in `packages/lib/utils/common.types.ts` to know what the different values of `AUTH_MODE` mean

### Instructions

Please create an `env.local` file and add the following ENV variables for testing:

```
# These are all working development keys.
# IMPORTANT: You can use them during development, but for production use,
# make sure to change them to keys issued for your app.

NODE_ENV=development
NEXT_PUBLIC_APP_STAGE=development

# Supertokens
## Prod Supertokens auth email: your supertokens email to login to the dashboard
SUPERTOKENS_CONNECTION_URI=https://try.supertokens.com
SUPERTOKENS_API_KEY=
DEBUG=com.supertokens

# GoogleClientInfo
## Prod Google auth email: your google email to login to google cloud console
GOOGLE_CLIENT_ID="1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="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"

# AppleClientInfo
## Prod Apple auth email: your apple email to login to the developer dashboard
APPLE_CLIENT_ID="4398792-io.supertokens.example.service"
APPLE_CLIENT_SECRET_KEY_ID="7M48Y4RYDL"
APPLE_TEAM_ID="YWQCXGJRJL"
APPLE_CLIENT_SECRET_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----"

# GithubClientInfo
## Prod Github auth email: your github email to login to github

GITHUB_CLIENT_ID="467101b197249757c71f"
GITHUB_CLIENT_SECRET="e97051221f4b6426e8fe8d51486396703012f5bd"

```

These are the test environment variables from Supertokens. You should replace these with your own later on.

##### Apple login testing on native device

Testing Apple login doesn't work in your xCode simulator. For this, use a native device. Remember to change your `FRONTEND_URL` in the `config` file to use your local IP address.

### Known caveats

#### Caveat 1: Apple universal links dont work for HTTP redirects (when the API returns a status code for redirect) but only works if there is an actual navigation happening

In conclusion: Apple login does not work on the mobile web right now. You can find more information about this on the /temp route of the web. Supertokens developers are currently working on a solution that will allow information to be stored in the state sent to the provider, which can then be checked in the API layer to determine if it's mobile or web. However, until this solution is available, a workaround is being used that prevents iOS login from working on the web, so it should be removed from the UI until further notice.
