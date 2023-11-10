'use client'

import { Hero } from 'ui/components/Hero'
import React, { useEffect } from 'react'

import '../../styles/globals.css'
import { APP_BUNDLE_URL, PROD_URL_NO_HTTPS } from 'lib/utils/config'
import { useRouter } from 'next/navigation'
import { Capacitor } from '@capacitor/core'
import { App as CapApp } from '@capacitor/app'

const HomePage = () => {
  const router = useRouter()

  useEffect(() => {
    // add capacitor listeners
    if (Capacitor.isNativePlatform()) {
      // init services
      CapApp.addListener('backButton', () => {
        router.back()
      })

      CapApp.addListener('appUrlOpen', (data: any) => {
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
    <main>
      <Hero />
    </main>
  )
}

export default HomePage
