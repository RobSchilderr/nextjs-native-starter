import React from 'react'

import { AppProps } from 'next/app'
import '../../styles/globals.css'
import SuperTokens from 'supertokens-web-js'
import capacitorCookieHandler from 'lib/utils/capacitorCookieHandler'
import { frontendConfig } from '../../config/frontendConfig'

if (typeof window !== 'undefined') {
  SuperTokens.init({
    ...frontendConfig(),
    cookieHandler: capacitorCookieHandler,
    // enableDebugLogs: !IS_IN_PRODUCTION_ENVIRONMENT,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className="min-h-screen mt-30">
    <Component {...pageProps} />
  </div>
)

export default MyApp
