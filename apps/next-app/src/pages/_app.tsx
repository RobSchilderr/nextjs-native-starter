// @ts-nocheck
import React, { useEffect } from 'react'

import { AppProps } from 'next/app'
import '../../styles/globals.css'
import SuperTokens from 'supertokens-web-js'
import capacitorCookieHandler from 'lib/utils/capacitorCookieHandler'
import { APP_BUNDLE_URL, PROD_URL_NO_HTTPS } from 'lib/utils/config'
import { useRouter } from 'next/router'
import { Capacitor } from '@capacitor/core'
import { App as CapApp } from '@capacitor/app'
import { Bebas_Neue, Work_Sans } from '@next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'lib/utils/reactQuery'
import { InitiateLayout } from 'ui/containers/Login/InitiateLayout'
import { getFrontendConfig } from '../../config/frontendConfig'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
})

if (typeof window !== 'undefined') {
  SuperTokens.init({
    ...getFrontendConfig(),
    /*
     * 1. Important Capacitor note:
     * This section deals with a challenge faced while working with SDKs in the context of frameworks like Electron and Capacitor.
     * These frameworks add an abstraction layer on top of the browser logic, which causes issues with how the SDK uses frontend cookies for information storage.
     * Because of this, a cookie handler is necessary, regardless of the token transfer method specified in the frontendConfig.
     *
     * In this instance, we are using the 'capacitorCookieHandler' to handle cookies.
     */
    cookieHandler: capacitorCookieHandler,
    // enableDebugLogs: !IS_IN_PRODUCTION_ENVIRONMENT,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  console.log(router.asPath)

  useEffect(() => {
    // add capacitor listeners
    if (Capacitor.isNativePlatform()) {
      // init services
      CapApp.addListener('backButton', () => {
        router.back()
      })

      CapApp.addListener('appUrlOpen', (data: any) => {
        /**
         * On https://www.next-capacitor-supertokens.app/ we have a /open-app endpoint that redirects directly to app
         * usecase: user opens a link from e-mail, but we don't to use deeplinking
         * the url containts queryParams and a page as param
         * if page param exists redirect user to the specific page.
         * NOTE: this does not work on iOS
         */
        const isOpenedFromOpenAppUrl = data.url.includes(`${APP_BUNDLE_URL}`)

        const isOpenedFromWeb = data.url === PROD_URL_NO_HTTPS

        if (isOpenedFromOpenAppUrl) {
          const slug = data.url.split(':/').pop()

          router.push(slug)
        }

        if (isOpenedFromWeb) {
          const slug = data.url.split(`${PROD_URL_NO_HTTPS}`).pop()
          router.push(slug)
        }
      })
    }
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${bebasNeue.variable} font-display mt-28`}>
        <div className={`${workSans.variable} font-sans`}>
          <InitiateLayout>
            {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component
              {
                // eslint-disable-next-line react/jsx-props-no-spreading

                ...pageProps
              }
            />
          </InitiateLayout>
        </div>
      </main>
    </QueryClientProvider>
  )
}

export default MyApp
