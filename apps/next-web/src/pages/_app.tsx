// @ts-nocheck

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { AppProps } from 'next/app'
import '../../styles/globals.css'
import SuperTokens from 'supertokens-web-js'
import { getFrontendConfig } from 'next-web/config/frontendConfig'

if (typeof window !== 'undefined') {
  SuperTokens.init({
    ...getFrontendConfig(),
    // enableDebugLogs: !IS_IN_PRODUCTION_ENVIRONMENT,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default MyApp
