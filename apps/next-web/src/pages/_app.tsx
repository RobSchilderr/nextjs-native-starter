/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { AppProps } from 'next/app'
import '../../styles/globals.css'
import SuperTokens from 'supertokens-web-js'
import { Layout } from 'ui/containers/Layout/Layout'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'lib/utils/reactQuery'
import { getFrontendConfig } from 'next-web/config/frontendConfig'

if (typeof window !== 'undefined') {
  SuperTokens.init({
    ...getFrontendConfig(),
    // enableDebugLogs: !IS_IN_PRODUCTION_ENVIRONMENT,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component
        {
          // eslint-disable-next-line react/jsx-props-no-spreading
          ...pageProps
        }
      />
    </Layout>
  </QueryClientProvider>
)

export default MyApp
