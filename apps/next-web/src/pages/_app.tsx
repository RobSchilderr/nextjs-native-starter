/* eslint-disable import/no-extraneous-dependencies */
// @ts-nocheck
import React from 'react'
import { AppProps } from 'next/app'
import '../../styles/globals.css'
import SuperTokens from 'supertokens-web-js'
import { Bebas_Neue, Work_Sans } from '@next/font/google'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'lib/utils/reactQuery'
import { getFrontendConfig } from 'next-web/config/frontendConfig'

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
    // enableDebugLogs: !IS_IN_PRODUCTION_ENVIRONMENT,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <main className={`${bebasNeue.variable} font-display`}>
      <div className={`${workSans.variable} font-sans`}>
        {/* // eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            ...pageProps
          }
        />
      </div>
    </main>
  </QueryClientProvider>
)

export default MyApp
