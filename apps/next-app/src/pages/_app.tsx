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
import { Layout } from 'ui/containers/Layout/Layout'

import { getFrontendConfig } from '../../config/frontendConfig'

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

  useEffect(() => {
    // add capacitor listeners
    if (Capacitor.isNativePlatform()) {
      // init services
      CapApp.addListener('backButton', () => {
        router.back()
      })

      CapApp.addListener('appUrlOpen', (data: any) => {
        /**
         * On https://www.nextjs-native.dev we have a /open-app endpoint that redirects directly to app
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
    <Layout>
      {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component
        {
          // eslint-disable-next-line react/jsx-props-no-spreading

          ...pageProps
        }
      />
    </Layout>
  )
}

export default MyApp
