/* eslint-disable import/no-unresolved */
import React from 'react'

import { AppProps } from 'next/app'
import '../../styles/globals.css'
import SuperTokens from 'supertokens-web-js'
import { frontendConfig } from 'next-app/config/frontendConfig'

if (typeof window !== 'undefined') {
  SuperTokens.init({
    ...frontendConfig(),
    // cookieHandler: capacitorCookieHandler,
    // enableDebugLogs: !IS_IN_PRODUCTION_ENVIRONMENT,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default MyApp
