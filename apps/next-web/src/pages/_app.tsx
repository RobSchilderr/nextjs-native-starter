'use client'

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { AppProps } from 'next/app'
import '../../styles/globals.css'
import SuperTokens from 'supertokens-web-js'
import { Layout } from 'ui/containers/Layout/Layout'
import { getFrontendConfig } from 'next-web/config/frontendConfig'

if (typeof window !== 'undefined') {
  SuperTokens.init({
    ...getFrontendConfig(),
    // enableDebugLogs: !IS_IN_PRODUCTION_ENVIRONMENT,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => (
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

export default MyApp
